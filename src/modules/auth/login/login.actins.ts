// "use server"
//
// import { createClient } from "@/lib/supabase/server"
// import { redirect } from "next/navigation"
//
//
// export default async function loginAction(_: unknown, formData: FormData) {
//   const payload = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string
//   }
//
//   const supabase = await createClient()
//
//   const { data, error } = await supabase.auth.signInWithPassword(payload)
//
//   if (error) {
//     return {
//       error: error.message,
//       fields: payload
//     }
//   }
//
//   redirect("/dashboard")
// }
//


"use server"

import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { APIError } from "better-auth/api"

export default async function loginAction(_: unknown, formData: FormData) {
  const payload = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  try {
    await auth.api.signInEmail({
      body: {
        email: payload.email,
        password: payload.password,
      },
      headers: await headers(),
    })
  } catch (e) {
    if (e instanceof APIError) {
      return { error: e.message, fields: payload }
    }
    return { error: "Nie udało się zalogować", fields: payload }
  }

  redirect("/dashboard")
}
