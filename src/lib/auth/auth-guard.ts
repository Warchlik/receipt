import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export default async function authGuard() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/auth/login")
  }

  return session
}
