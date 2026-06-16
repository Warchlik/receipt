"use server"

import { db } from "@/database/drizzle-client"
import { profiles } from "@/database/schemas/profiles"
import { createClient } from "@/lib/supabase/server"
import { eq } from "drizzle-orm"

export default async function getUser() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user) {
    return {
      user: [],
      profile: [],
    }
  }

  const [profile] = await db.select().from(profiles).where(eq(profiles.id, user.id)).limit(1)

  return {
    user: user,
    profile: profile
  }
}
