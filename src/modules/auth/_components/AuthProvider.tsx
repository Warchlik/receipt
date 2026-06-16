"use client"

import { usePathname, useRouter } from "next/navigation"
import { ReactNode } from "react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pause } from "lucide-react"
import ThemeButton from "@/components/theme/ThemeButton"
import { Separator } from "@/components/ui/separator"

export default function AuthProvider({
  children
}: {
  children: ReactNode
}) {
  const pathName = usePathname()
  const authPath = pathName.includes("register") ? "register" : "login"
  const router = useRouter()

  const handleChangeTabs = (value: string) => {
    if (value === "login") {
      router.push("/auth/login")
    } else {
      router.push("/auth/register")
    }
  }

  const descriptionText = () => {
    return authPath === "login" ? "EKRAN LOGOWANIA" : "EKRAN REJESTRACJI"
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="receipt-card sm:w-md w-sm">
        <CardHeader className="pt-4">
          <CardTitle className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
              <Pause />
              Paragon
            </div>
            <ThemeButton />
          </CardTitle>
          <CardDescription className="mx-auto mt-3">
            NR 0001 · {new Date().toLocaleDateString()} · {descriptionText()}
          </CardDescription>
        </CardHeader>
        <Tabs defaultValue={authPath} onValueChange={handleChangeTabs} className="w-full">
          <TabsList className="mb-3 w-full px-2 py-6">
            <TabsTrigger className="p-4 text-base" value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className="p-4 text-base" value="register">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value={authPath}>
            <CardContent className=" flex flex-col gap-5">
              {children}
              <Separator />
              <div className="flex flex-col gap-1">
                <div className="pg-barcode h-16 w-full" />
                <span className="mx-auto text-muted-foreground">
                  PRG 0001 1306 2026
                </span>

                {/* <span className="mx-auto text-muted-foreground"> */}
                {/*   DZIĘKUJEMY ZA WSPÓLNE LICZENIE */}
                {/* </span> */}
                {/**/}
                {/* <span className="mx-auto text-muted-foreground"> */}
                {/*   wkrótce · płatność BLIK prosto z aplikacji */}
                {/* </span> */}
              </div>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </main>
  )
}
