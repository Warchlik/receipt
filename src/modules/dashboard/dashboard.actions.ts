"use server"

import { db } from "@/database/drizzle-client"
import { profiles } from "@/database/schemas/profiles"
import { auth } from "@/lib/auth"
import { eq } from "drizzle-orm"
import { headers } from "next/headers"

export default async function getUser() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return {
      user: [],
      profile: [],
    }
  }

  const user = session.user
  const [profile] = await db.select().from(profiles).where(eq(profiles.id, user.id)).limit(1)

  return {
    user: user,
    profile: profile
  }
}
