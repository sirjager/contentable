import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "rounded-buttons text-sm active:scale-95 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-accent-dark disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-primary-light dark:bg-primary-dark text-color-muted-light dark:text-color-muted-dark hover:text-color-secondary-light dark:hover:text-color-secondary-dark",
      },
      size: {
        xs: "h-6 w-6 min-h-[24px] max-h-[24px] min-w-[24px] max-w-[24px]",
        default: "h-9 w-9",
        sm: "h-7 w-7",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
