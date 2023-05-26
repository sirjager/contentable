"use client";

import { ToggleDarkMode } from "@/components/ToggleDarkMode";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppShell } from "../AppShellProvider";

const HeaderComponent = () => {
  const { toggle } = useAppShell();
  return (
    <header
      className={cn(
        "z-[99] flex h-16 min-h-[64px] w-full items-center px-4",
        "border-b border-border-light bg-primary-light dark:border-border-dark dark:bg-primary-dark",
      )}>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center justify-start gap-x-2">
          <IconButton onClick={() => toggle()}>
            <RxHamburgerMenu />
          </IconButton>
        </div>

        <div className="flex items-center justify-end gap-x-2">
          <ToggleDarkMode />
        </div>
      </div>
    </header>
  );
};
export default HeaderComponent;
