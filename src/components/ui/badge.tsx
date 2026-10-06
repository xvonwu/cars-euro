import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2 py-0.5 text-label-mono-sm font-label-mono-sm uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-on-primary",
        secondary:
          "border-transparent bg-surface-container-high text-on-surface",
        destructive:
          "border-transparent bg-error text-on-error",
        outline:
          "border-outline-variant text-outline bg-transparent",
        porsche:
          "border-[#B8BCC2]/40 bg-surface-container-lowest/90 text-[#B8BCC2]",
        ferrari:
          "border-[#D40000]/40 bg-surface-container-lowest/90 text-[#D40000]",
        lamborghini:
          "border-[#C7D500]/40 bg-surface-container-lowest/90 text-[#C7D500]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
