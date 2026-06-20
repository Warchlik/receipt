"use server"

import { db } from "@/database/drizzle-client"
import { profiles } from "@/database/schemas/profiles"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { APIError } from "better-auth/api"

export default async function registerAction(_: unknown, formData: FormData) {
  const payload = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    password_confirm: formData.get("password_confirm") as string,
    phone: formData.get("phone") as string,
  }

  if (payload.password !== payload.password_confirm) {
    return {
      error: "Hasła nie są takie same",
      fields: payload,
    }
  }

  let userId: string

  try {
    const result = await auth.api.signUpEmail({
      body: {
        email: payload.email,
        password: payload.password,
        name: `${payload.first_name} ${payload.last_name}`.trim(),
      },
      headers: await headers(),
    })

    console.log(result)

    userId = result.user.id
  } catch (e: any) {
    if (e instanceof APIError) {
      return { error: e.message, fields: payload }
    }

    return { error: e.message, fields: payload }
  }

  try {
    await db.insert(profiles).values({
      id: userId,
      first_name: payload.first_name,
      last_name: payload.last_name,
      phone: payload.phone,
    })
  } catch (e) {
    return { error: "Problem z zapisaniem profilu", fields: payload }
  }

  redirect("/dashboard")
}
