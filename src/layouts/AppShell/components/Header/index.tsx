import { ToggleDarkMode } from "@/components/ToggleDarkMode";
import { cn } from "@/lib/utils";
import { HamburgerMenu } from "./Hamburger";
import AppLogo from "./Logo";
import NotificationIcon from "./NotificationIcon";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header
      className={cn(
        "h-16 min-h-[64px] max-h-[64px] sticky top-0 z-50 w-full bg-primary-light dark:bg-primary-dark",
        "flex items-center justify-between border-b-1 border-border-light dark:border-border-dark px-4 shadow-md",
      )}>
      <div className="flex items-center gap-x-4">
        <div className="flex w-full min-w-[198px] max-w-[198px] items-center gap-x-4">
          <HamburgerMenu />
          <AppLogo />
        </div>
      </div>

      <div className="flex w-full flex-grow items-center justify-end gap-x-4">
        <span className="hidden sm:inline">
          <ToggleDarkMode />
        </span>
        <NotificationIcon />
        <UserProfile />
      </div>
    </header>
  );
};
export default Header;
