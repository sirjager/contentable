import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-buttons text-sm active:scale-95 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-accent-dark disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-primary-light dark:bg-primary-dark text-color-secondary-light dark:text-color-secondary-dark shadow-sm",
        icon: "bg-primary-light dark:bg-primary-dark shadow-md border boder-border-light dark:border-border-dark ",
        destructive: "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-border-light text-color-secondary-light dark:border-border-dark dark:text-color-secondary-dark",
        ghost:
          "bg-transparent hover:bg-secondary-light dark:hover:bg-secondary-dark dark:text-color-secondary-light dark:text-color-secondary-dark data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "border border-border-light dark:border-border-dark drop-shadow-sm shadow-sm dark:shadow-black bg-primary-light dark:bg-primary-dark text-color-muted-light dark:text-color-muted-dark hover:text-color-secondary-light dark:hover:text-color-secondary-dark focus:text-color-secondary-light dark:focus:text-color-secondary-dark",
        accent:
          "bg-accent font-bold dark:bg-accent text-primary-light dark:text-primary-dark",
      },
      size: {
        xs: "h-6 px-2",
        default: "h-10 p-2",
        sm: "h-8 px-2",
        lg: "h-11 px-8",
        ism: "h-8 w-8 text-center flex items-center gap-x-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
