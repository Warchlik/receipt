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


export default function RegisterForm() {
  const router = useRouter()

  return (
    <CardContent className=" flex flex-col gap-5">
      <SeparatorWithText variant="dashed" />
      <FieldGroup className="flex flex-row gap-3">
        <Field>
          <FieldLabel htmlFor="email">First Name</FieldLabel>
          <Input
            placeholder="Enter first name..."
            id="first_name"
            name="first_name"
            type="text"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Last Name</FieldLabel>
          <Input
            placeholder="Enter last name..."
            id="last_name"
            name="last_name"
            type="text"
          />
        </Field>
      </FieldGroup>
      <Field>
        <FieldLabel htmlFor="email">E-mail</FieldLabel>
        <Input
          placeholder="Enter email..."
          id="email"
          name="email"
          type="text"
        />
      </Field>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            placeholder="Enter password..."
            id="password"
            name="password"
            type="password"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password Confirmation</FieldLabel>
          <Input
            placeholder="Enter password..."
            id="password_confirm"
            name="password_confirm"
            type="password"
          />
        </Field>
      </FieldGroup>

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

      <Separator className="bg-black" />

      <Button className="flex flex-row items-center p-5 text-base">
        Rejestruj
        <ArrowRight />
      </Button>

      {/* <div className="flex justify-center items-center"> */}
      {/*   <span> */}
      {/*     Masz już konto ? */}
      {/*   </span> */}
      {/*   <Button variant="link" onClick={() => router.push("/auth/login")}> */}
      {/*     Zaloguj się */}
      {/*   </Button> */}
      {/* </div> */}
    </CardContent>
  )
}
