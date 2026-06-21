"use client"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { useActionState } from "react";
import { saveReceipe } from "../receipe.actions";
import { Button } from "@/components/ui/button";
import PaperInput from "@/components/inputs/PaperInput";
import { SeparatorWithText } from "@/components/separator-with-text";
import { DialogClose } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function AddReceipeForm() {
  const [state, action, isPending] = useActionState(saveReceipe, null)

  return (
    <>
      <form
        action={action}
        className="flex flex-col gap-4"
      >
        <SeparatorWithText
          variant="dashed"
        >
          Info
        </SeparatorWithText>

        <Field>
          <PaperInput
            id="title"
            name="title"
            type="text"
            placeholder="Enter title"
            defaultValue={""}
          />
        </Field>

        <SeparatorWithText variant="dashed">
          Data
        </SeparatorWithText>

        <Field>
          <PaperInput
            id="title"
            name="title"
            type="text"
            placeholder="Enter title"
            defaultValue={""}
          />
        </Field>

        <SeparatorWithText
          variant="dashed"
        >
          People
        </SeparatorWithText>

        <FieldGroup className="flex flex-row">
          <Field>
            <PaperInput
              className=""
              id="title"
              name="title"
              type="text"
              placeholder="Select people"
              defaultValue={""}
            />
            <FieldLabel className="text-muted-foreground">
              You can also invite people later - just share the link to the room.
            </FieldLabel>
          </Field>
          <Button className="flex-2">
            <Plus />
          </Button>
        </FieldGroup>

        <SeparatorWithText variant="dashed" />

        <div className="flex flex-col gap-1">
          <Button
            variant="outline"
            className="flex flex-row"
            disabled={isPending}
            type="submit"
          >
            Save receipe
          </Button>

          <DialogClose
            asChild
          >
            <Button
              className="flex flex-row"
              type="button"
            >
              Cancel
            </Button>
          </DialogClose>


          <SeparatorWithText variant="dashed" className="my-2 border-t-2" />

          <div className="pg-barcode w-full" />
        </div>
      </form>
    </>
  )
}
