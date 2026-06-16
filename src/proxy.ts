import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from './lib/supabase/server'
import { updateSession } from './lib/supabase/middleware'

const ALLOWED_PREFIXES = ['/auth', '/dashboard']

export async function proxy(request: NextRequest) {
  // const { pathname } = request.nextUrl
  //
  // const supabase = await createClient()
  // const { data } = await supabase.auth.getUser()
  // const user = data.user ?? null
  //
  //
  // if (pathname === '/') {
  //   return NextResponse.redirect(new URL('/dashboard', request.url))
  // }
  //
  // const isAllowed = ALLOWED_PREFIXES.some(
  //   (prefix) => pathname === prefix || pathname.startsWith(prefix + '/')
  // )
  //
  // if (!isAllowed) {
  //   return NextResponse.redirect(new URL('/auth', request.url))
  // }
  //
  // return NextResponse.next()


  return await updateSession(request)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
