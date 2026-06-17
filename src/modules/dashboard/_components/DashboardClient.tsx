"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export default function DashboardClient() {
  return (
    <section className="flex flex-col gap-4 flex-1 mx-auto justify-center items-center">
      <Card className="receipt-card w-sm p-6 px-0">
        <CardContent>
          <FieldGroup>
            <Field>
              {/* <FieldLabel></FieldLabel> */}
              <Input
                id="recipe_link"
                name="recipe_link"
                type="text"
                placeholder="Enter your recipe_link"
              />
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>

      <Button className="border p-9 w-full">
        <Plus />
      </Button>
    </section>
  )
}
