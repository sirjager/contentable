import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AppLogo() {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-x-2 text-color-secondary-light dark:text-color-secondary-dark",
      )}
    >
      <span className="text-2xl font-bold">{config.sitename}</span>
    </Link>
  );
}
