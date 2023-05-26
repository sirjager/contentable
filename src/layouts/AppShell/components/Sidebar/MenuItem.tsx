"use client";

import { IconButton } from "@/components/ui/IconButton";
import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { HiChevronRight, HiOutlineMinus } from "react-icons/hi";
import { useAppShell } from "../AppShellProvider";
import { MenuGroup } from "./Items";

const MenuItem = ({ group, level = 1 }: { group: MenuGroup; level?: number }) => {
  const [mounted, setMounted] = useState(false);
  const { view, isOpened, toggleOpened } = useAppShell();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={cn(
          "flex h-10 items-center gap-x-3 rounded-buttons",
          "bg-primary-light dark:bg-primary-dark",
          "text-color-muted-light hover:text-color-secondary-light dark:text-color-muted-dark dark:hover:text-color-secondary-dark",
          {
            "text-color-primary-light dark:text-color-primary-dark": isOpened(group.name),
          },
        )}>
        <Link
          href={group.href || "#"}
          target="_parent"
          className={cn("flex h-full w-full items-center gap-x-3", {
            "ml-1 w-full": mounted && view === "full",
            "justify-center": view !== "full",
          })}
          style={{
            padding: `0px ${level * 5}px`,
          }}>
          {group.icon ? (
            <span className={cn("text-sm")}>{group.icon}</span>
          ) : (
            <span className={cn("text-sm")}>
              <HiOutlineMinus />
            </span>
          )}

          {mounted && view === "full" && <span className="text-sm">{group.name}</span>}
        </Link>

        {mounted && view === "full" && group.items && (
          <IconButton size="xs" onClick={() => toggleOpened(group.name)} className="mr-2">
            <HiChevronRight
              className={cn({
                "rotate-90": isOpened(group.name),
              })}
            />
          </IconButton>
        )}
      </div>

      {mounted && view === "full" && group.items && group.items.length > 0 && (
        <div
          className={cn(
            "w-full space-y-2 overflow-clip bg-primary-light p-1 dark:bg-primary-dark",
            "text-color-muted-light dark:text-color-muted-dark",
            {
              hidden: !isOpened(group.name),
            },
          )}>
          {group.items?.map((item) => (
            <MenuItem group={item} level={level + 1} />
          ))}
        </div>
      )}
    </>
  );
};
export default MenuItem;
