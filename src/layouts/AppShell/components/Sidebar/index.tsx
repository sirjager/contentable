"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useAppShell } from "../AppShellProvider";
import { SidebarItems } from "./Items";
import MenuItem from "./MenuItem";

const SidebarComponent = () => {
  const { view, toggle } = useAppShell();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <aside
      className={cn(
        "absolute z-[98] h-[89%] w-fit select-none space-y-2 overflow-y-auto xl:relative xl:h-full",
        "border-r border-border-light bg-primary-light dark:border-border-dark dark:bg-primary-dark",
        {
          "w-64 min-w-[256px] max-w-[256px]": view === "full" || !mounted,
          "w-16 min-w-[64px] max-w-[64px]": view === "icons",
          hidden: view === "hidden",
        },
      )}>
      <div className="space-y-1 p-3">
        {SidebarItems.map((group) => (
          <MenuItem group={group} />
        ))}
      </div>
    </aside>
  );
};
export default SidebarComponent;
