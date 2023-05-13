"use client";

import { IconButton } from "@/components/ui/IconButton";
import useOnClickOutside from "@/hooks/use-onClickOutside";
import { classes } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { BsSunrise } from "react-icons/bs";
import { HiOutlineCog, HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi";

const UserProfile = () => {
  const ref = useRef(null);
  const { theme, setTheme } = useTheme();
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);
  useOnClickOutside(ref, () => setOpened(false));

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative">
      <div className="rounded-default inline-flex items-center overflow-hidden bg-secondary-light p-1.5 dark:bg-secondary-dark">
        <div className="px-4">
          <img
            className="h-6 w-6 rounded-full object-cover ring ring-border-light dark:ring-gray-600"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
            alt=""
          />
        </div>

        <IconButton onClick={() => setOpened(!opened)} size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-3 w-3 -rotate-90", { "rotate-0": opened })}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
      </div>

      <div
        ref={ref}
        className={cn(
          "rounded-default absolute end-0 z-10 mt-2 w-56 divide-y divide-border-light border border-border-light bg-primary-light",
          " text-color-secondary-light shadow-xl dark:divide-border-dark dark:border-border-dark dark:bg-primary-dark dark:text-color-secondary-dark",
          {
            hidden: !opened,
          },
        )}
        role="menu"
      >
        <div className="p-2">
          <div
            className="flex items-center gap-x-3 px-4 py-2 text-sm text-color-primary-light dark:text-color-primary-dark"
            role="menuitem"
          >
            <div className="min-w-[32px]">
              <img
                className="h-8 w-8 rounded-full object-cover ring ring-border-light dark:ring-gray-600"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                alt=""
              />
            </div>

            <div className="flex flex-grow flex-col justify-center overflow-clip">
              <p className="line-clamp-1 text-ellipsis text-base font-bold">John Doe</p>
              <p className="text-sm font-bold">@johndoe</p>
            </div>
          </div>
        </div>

        <div className="select-none">
          <strong className="block p-3 text-xs font-medium uppercase ">General</strong>

          <Link
            href="#"
            className={cn(
              "flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-secondary-light hover:text-color-primary-light dark:hover:bg-secondary-dark dark:hover:text-color-primary-dark",
              classes.focus,
            )}
            role="menuitem"
          >
            <HiOutlineUserCircle className="text-lg" />
            Profile
          </Link>

          <Link
            href="#"
            className={cn(
              "flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-secondary-light hover:text-color-primary-light dark:hover:bg-secondary-dark dark:hover:text-color-primary-dark",
              classes.focus,
            )}
            role="menuitem"
          >
            <HiOutlineCog className="text-lg" />
            Settings
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "flex w-full items-center gap-x-2 px-4 py-3 text-sm hover:bg-secondary-light hover:text-color-primary-light dark:hover:bg-secondary-dark dark:hover:text-color-primary-dark sm:hidden",
              classes.focus,
            )}
            role="menuitem"
          >
            {!mounted ? <BsSunrise /> : theme === "dark" ? <BiMoon /> : <BiSun />}
            {!mounted ? "Lightmode" : theme === "dark" ? "Darkmode" : "Lightmode"}
          </button>
        </div>

        <div className="select-none py-2">
          <form method="POST" action="#">
            <button
              type="submit"
              className={cn(
                "rounded-default flex w-full items-center gap-2 px-4 py-3 text-sm hover:bg-secondary-light hover:text-color-primary-light dark:hover:bg-secondary-dark dark:hover:text-color-primary-dark",
                classes.focus,
              )}
              role="menuitem"
            >
              <HiOutlineLogout className="text-lg" />
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
