"use client"

import { SeparatorWithText } from "@/components/separator-with-text";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Link } from "lucide-react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const router = useRouter()

  return (
    <CardContent className=" flex flex-col gap-5">
      <SeparatorWithText variant="dashed" />
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            placeholder="Enter email..."
            id="email"
            name="email"
            type="text"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            placeholder="Enter password..."
            id="password"
            name="password"
            type="password"
          />
        </Field>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <Checkbox />
            Remember Me
          </div>

          <Button variant="link" className="flex flex-row items-center">
            <Link />
            Nie pamiętam hasła
          </Button>
        </div>
      </FieldGroup>

      <Separator className="bg-black" />

      <Button className="flex flex-row items-center p-5 text-base">
        Zaloguj
        <ArrowRight />
      </Button>

      {/* <div className="flex justify-center items-center"> */}
      {/*   <span> */}
      {/*     Nie masz konta ? */}
      {/*   </span> */}
      {/*   <Button variant="link" onClick={() => router.push("/auth/login")}> */}
      {/*     Załóż je */}
      {/*   </Button> */}
      {/* </div> */}
    </CardContent>
  )
}
