import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "rounded-buttons text-sm active:scale-95 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-accent-dark disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "border border-border-light dark:border-border-dark bg-primary-light dark:bg-primary-dark text-color-muted-light dark:text-color-muted-dark hover:text-color-secondary-light dark:hover:text-color-secondary-dark",
        blue: "bg-blue-200 dark:bg-blue-300 text-blue-600 dark:text-blue-900  focus:ring-blue-300 dark:focus:ring-blue-300",
        rose: "bg-rose-200 dark:bg-rose-300 text-rose-600 dark:text-rose-900  focus:ring-rose-300 dark:focus:ring-rose-300",
        red: "bg-red-200 dark:bg-red-300 text-red-600 dark:text-red-900  focus:ring-red-300 dark:focus:ring-red-300",
        yellow:
          "bg-yellow-200 dark:bg-yellow-300 text-yellow-600 dark:text-yellow-900  focus:ring-yellow-300 dark:focus:ring-yellow-300",
        green:
          "bg-green-200 dark:bg-green-300 text-green-600 dark:text-green-900  focus:ring-green-300 dark:focus:ring-green-300",
        orange:
          "bg-orange-200 dark:bg-orange-300 text-orange-600 dark:text-orange-900  focus:ring-orange-300 dark:focus:ring-orange-300",
        cyan: "bg-cyan-200 dark:bg-cyan-300 text-cyan-600 dark:text-cyan-900  focus:ring-cyan-300 dark:focus:ring-cyan-300",
        indigo:
          "bg-indigo-200 dark:bg-indigo-300 text-indigo-600 dark:text-indigo-900  focus:ring-indigo-300 dark:focus:ring-indigo-300",
        brown:
          "bg-brown-200 dark:bg-brown-300 text-brown-600 dark:text-brown-900  focus:ring-brown-300 dark:focus:ring-brown-300",
        gray: "bg-gray-200 dark:bg-gray-300 text-gray-600 dark:text-gray-900  focus:ring-gray-300 dark:focus:ring-gray-300",
        pink: "bg-pink-200 dark:bg-pink-300 text-pink-600 dark:text-pink-900  focus:ring-pink-300 dark:focus:ring-pink-300",
        amber:
          "bg-amber-200 dark:bg-amber-300 text-amber-600 dark:text-amber-900  focus:ring-amber-300 dark:focus:ring-amber-300",
        lime: "bg-lime-200 dark:bg-lime-300 text-lime-600 dark:text-lime-900  focus:ring-lime-300 dark:focus:ring-lime-300",
        emerald:
          "bg-emerald-200 dark:bg-emerald-300 text-emerald-600 dark:text-emerald-900  focus:ring-emerald-300 dark:focus:ring-emerald-300",
        teal: "bg-teal-200 dark:bg-teal-300 text-teal-600 dark:text-teal-900  focus:ring-teal-300 dark:focus:ring-teal-300",
        sky: "bg-sky-200 dark:bg-sky-300 text-sky-600 dark:text-sky-900  focus:ring-sky-300 dark:focus:ring-sky-300",
        purple:
          "bg-purple-200 dark:bg-purple-300 text-purple-600 dark:text-purple-900  focus:ring-purple-300 dark:focus:ring-purple-300",
        fuchsia:
          "bg-fuchsia-200 dark:bg-fuchsia-300 text-fuchsia-600 dark:text-fuchsia-900  focus:ring-fuchsia-300 dark:focus:ring-fuchsia-300",
        violet:
          "bg-violet-200 dark:bg-violet-300 text-violet-600 dark:text-violet-900  focus:ring-violet-300 dark:focus:ring-violet-300",
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
