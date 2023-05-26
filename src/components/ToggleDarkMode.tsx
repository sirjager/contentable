"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { BsSunrise } from "react-icons/bs";
import { IconButton } from "./ui/IconButton";

export function ToggleDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <IconButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode">
      {!mounted ? <BsSunrise /> : theme === "dark" ? <BiMoon /> : <BiSun />}
    </IconButton>
  );
}
