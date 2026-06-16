"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"


export default async function loginAction(_: unknown, formData: FormData) {
  const payload = {
    email: formData.get("email") as string,
    password: formData.get("password") as string
  }

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword(payload)

  if (error) {
    return {
      error: error.message,
      fields: payload
    }
  }

  redirect("/dashboard")
}
