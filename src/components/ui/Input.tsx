import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-buttons border border-border-light bg-transparent px-3 py-2 text-sm text-color-secondary-light placeholder:text-color-secondary-light disabled:cursor-not-allowed disabled:opacity-50 dark:border-border-dark dark:text-color-secondary-dark dark:placeholder:text-color-secondary-dark",
        "focus:ring-accent dark:focus:ring-accent focus:rounded-buttons focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
