import { ReactNode } from "react"
import AuthProvider from "./_components/AuthProvider"

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
