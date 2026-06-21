import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSessionCookie } from "better-auth/cookies"
import { COOKIE_PREFIX } from './lib/auth/auth.constants'

const ALLOWED_PREFIXES = ['/auth']

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionCookie = getSessionCookie(request, {
    cookiePrefix: COOKIE_PREFIX
  })

  const isPublic = ALLOWED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + '/')
  )

  if (sessionCookie && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (sessionCookie && isPublic) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (!sessionCookie && !isPublic) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
