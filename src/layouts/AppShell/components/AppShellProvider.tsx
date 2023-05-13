"use client";

import useLocalStorage from "@/hooks/use-localstorage";
import { createContext, useContext } from "react";

type IAppShell = {
  view: "hidden" | "icons" | "full";
  toggle: (_ismobile?: boolean) => void;
  change: (_: "hidden" | "icons" | "full") => void;
  opened?: string[];
  isOpened: (_: string) => boolean;
  toggleOpened: (_: string) => void;
};

const defaultState: IAppShell = {
  view: "icons",
  toggle: (_ismobile?: boolean) => {},
  change: (_: "hidden" | "icons" | "full") => {},
  opened: [],
  isOpened: (_: string) => false,
  toggleOpened: (_: string) => {},
};

export const AppShellContext = createContext<IAppShell>(defaultState);

const views: ("hidden" | "icons" | "full")[] = ["hidden", "icons", "full"];

export const AppShellProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useLocalStorage<number>("drawer", 0);
  const [opened, setOpened] = useLocalStorage<string[]>("drawer-opened", []);

  const toggle = (_ismobile?: boolean) => {
    if (_ismobile) {
      if (currentIndex === 0) {
        setCurrentIndex(views.length - 1);
      } else {
        setCurrentIndex(0);
      }
    } else {
      if (currentIndex === views.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const change = (to: "hidden" | "icons" | "full") => {
    setCurrentIndex(views.indexOf(to));
  };

  const isOpened = (str: string): boolean => {
    return opened.includes(str);
  };

  const toggleOpened = (str: string): void => {
    if (isOpened(str)) {
      setOpened(opened.filter((s) => s !== str));
    } else {
      setOpened([...opened, str]);
    }
  };

  return (
    <AppShellContext.Provider
      value={{
        view: views[currentIndex],
        toggle,
        change,
        opened,
        isOpened,
        toggleOpened,
      }}>
      {children}
    </AppShellContext.Provider>
  );
};

export const useAppShell = () => useContext(AppShellContext);
