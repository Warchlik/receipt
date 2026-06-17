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
import registerAction from "../register.actions";
import { Spinner } from "@/components/ui/spinner";
import PaperInput from "@/components/inputs/PaperInput";


export default function RegisterForm() {
  const [state, action, isPenging] = useActionState(registerAction, null)

  return (
    <CardContent>
      <SeparatorWithText variant="dashed" />
      <form action={action} className="flex flex-col gap-5">
        <FieldGroup className="flex flex-row gap-3">
          <Field>
            <FieldLabel htmlFor="email">First Name</FieldLabel>
            <PaperInput
              placeholder="Enter first name..."
              id="first_name"
              name="first_name"
              type="text"
              defaultValue={state?.fields?.first_name}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Last Name</FieldLabel>
            <PaperInput
              placeholder="Enter last name..."
              id="last_name"
              name="last_name"
              type="text"
              defaultValue={state?.fields?.last_name}
            />
          </Field>
        </FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <PaperInput
            placeholder="Enter email..."
            id="email"
            name="email"
            type="text"
            defaultValue={state?.fields?.email}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Phone</FieldLabel>
          <PaperInput
            placeholder="Enter Phone..."
            id="phone"
            name="phone"
            type="text"
            defaultValue={state?.fields?.phone}
          />
        </Field>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <PaperInput
              placeholder="Enter password..."
              id="password"
              name="password"
              type="password"
              defaultValue={state?.fields?.password}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password Confirmation</FieldLabel>
            <PaperInput
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

          {/* <Button variant="link" className="flex flex-row items-center"> */}
          {/*   <Link /> */}
          {/*   Nie pamiętam hasła */}
          {/* </Button> */}
        </div>

        <Separator className="bg-black" />

        <Button className="flex items-center p-5 text-base" disabled={isPenging}>
          {isPenging ? <Spinner /> : "Rejestruj"}
        </Button>
      </form>
    </CardContent>
  )
}
