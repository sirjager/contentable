import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import NextLink from "next/link";

const linkVariants = cva(
  "rounded-buttons text-sm inline-flex items-center focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-accent-dark disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "text-color-secondary-light dark:text-color-secondary-dark hover:text-color-primary-light dark:hover:text-color-primary-dark",
      },
      size: {
        xs: "h-6 px-1",
        sm: "h-8 px-2",
        default: "h-10 p-4",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, ...props }) => {
    return <NextLink className={cn(linkVariants({ size, variant, className }))} {...props} />;
  },
);

Link.displayName = "Link";

export { Link, linkVariants };
