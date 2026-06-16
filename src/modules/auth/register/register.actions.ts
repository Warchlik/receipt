"use server"

import { db } from "@/database/drizzle-client"
import { profiles } from "@/database/schemas/profiles"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function registerAction(_: unknown, formData: FormData) {
  const payload = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    password_confirmation: formData.get("password_confirmation") as string,
    phone: formData.get("phone") as string
  }

  const supabase = await createClient()

  const signUpPaiload = {
    email: payload.email,
    password: payload.password,
    email_confirm: true
  }

  const { data: userData, error } = await supabase.auth.signUp(signUpPaiload)

  if (error) {
    return {
      error: error.message,
      fields: payload
    }
  }

  if (!userData.user) {
    return {
      error: "Coś jest nie tak i nie ma usera",
      fields: payload
    }
  }

  try {
    await db.insert(profiles).values({
      id: userData.user.id,
      email: payload.email,
      first_name: payload.first_name,
      last_name: payload.last_name,
      phone: payload.phone
    })
  } catch (e) {
    return {
      error: "Problem z zapisaniem profilu",
      fields: payload
    }
  }

  redirect("/auth/login")
}
