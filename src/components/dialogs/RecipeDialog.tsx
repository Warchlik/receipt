"use client"

import { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "../ui/dialog";
import { SeparatorWithText } from "../separator-with-text";

export default function RecipeDialog({
  form,
  open,
  setOpen
}: {
  form: ReactNode,
  open: boolean,
  setOpen: (value: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="receipt-card py-7">
        <SeparatorWithText variant="dashed" className="mt-2 border-t-2" />
        <div>
          <DialogHeader className="flex text-2xl items-center font-semibold">
            New Receipe
          </DialogHeader>
          <DialogDescription className="text-center">
            Add new receipe with others
          </DialogDescription>
        </div>
        {form}
      </DialogContent>
    </Dialog>
  )
}
