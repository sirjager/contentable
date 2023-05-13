"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useAppShell } from "../AppShellProvider";
import { SidebarItems } from "./Items";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { view } = useAppShell();
  useEffect(() => setMounted(true), []);

  return (
    <aside
      className={cn(
        "overflow-y-auto shadow-sm bg-primary-light dark:bg-primary-dark",
        "shadow-md drop-shadow-md dark:shadow-black",
        {
          hidden: view === "hidden" || !mounted,
          "w-fit min-w-[256px] max-w-[256px]": view === "full",
          "w-fit min-w-[64px] max-w-[64px]": view === "icons",
        },
      )}>
      <div className="overflow-y-auto px-3 pb-24">
        {SidebarItems.map((group) => (
          <MenuItem group={group} />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
