"use client"

import { SeparatorWithText } from "@/components/separator-with-text";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "lucide-react";
import { useActionState } from "react";
import loginAction from "../login.actins";
import { Spinner } from "@/components/ui/spinner";


export default function LoginForm() {
  const [state, action, isPending] = useActionState(loginAction, null)

  return (
    <CardContent>
      <form action={action} className=" flex flex-col gap-5">
        <SeparatorWithText variant="dashed" />
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">E-mail</FieldLabel>
            <Input
              placeholder="Enter email..."
              id="email"
              name="email"
              type="text"
              defaultValue={state?.fields.email}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              placeholder="Enter password..."
              id="password"
              name="password"
              type="password"
              defaultValue={state?.fields.password}
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

        <Button className="flex flex-row items-center p-5 text-base" disabled={isPending}>
          {isPending ? <Spinner /> : "Zaloguj"}
        </Button>
      </form>
    </CardContent>
  )
}
