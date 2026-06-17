import { ComponentProps } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export default function PaperInput({ className, ...props }: ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn(
        "border-0 border-b-2 border-dashed rounded-none",
        "focus-visible:ring-0 focus-visible:border-b-2",
        className
      )}
      {...props}
    />
  )
}
