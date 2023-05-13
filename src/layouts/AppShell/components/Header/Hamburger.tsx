"use client";

import { IconButton } from "@/components/ui/IconButton";
import useMediaQuery from "@/hooks/use-mediaquery";
import { useEffect, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";
import { useAppShell } from "../AppShellProvider";

export function HamburgerMenu() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { view, toggle, change } = useAppShell();

  const isMobile = !useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    if (isMobile) change("hidden");
  }, [isMobile]);

  return (
    <IconButton onClick={!mounted ? undefined : () => toggle(isMobile)}>
      {!mounted ? (
        <TfiMenu />
      ) : view === "icons" ? (
        <IoEllipsisVerticalSharp />
      ) : view === "full" ? (
        <RiCloseFill />
      ) : (
        <TfiMenu />
      )}
    </IconButton>
  );
}
