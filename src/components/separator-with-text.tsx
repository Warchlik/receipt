import { cn } from "@/lib/utils";

const lineVariants = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
};

function SeparatorWithText({
  children,
  variant = "solid",
  className,
}: {
  children?: React.ReactNode;
  variant?: keyof typeof lineVariants;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("flex-1 border border-border", lineVariants[variant])} />
      {children && <span className="text-xs text-muted-foreground whitespace-nowrap">
        {children}
      </span>
      }
      <div className={cn("flex-1 border border-border", lineVariants[variant])} />
    </div>
  );
}

export { SeparatorWithText };
