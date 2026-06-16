import AuthProvider from "@/modules/auth/_components/AuthProvider"
import { ReactNode } from "react"

export default function AuthLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
