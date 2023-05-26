import { AppShellProvider } from "./components/AppShellProvider";
import HeaderComponent from "./components/Header";
import SidebarComponent from "./components/Sidebar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShellProvider>
      <div className="flex h-screen flex-col overflow-clip">
        <HeaderComponent />
        <div className="flex flex-grow overflow-y-auto">
          <SidebarComponent />
          <main className="h-full w-full overflow-y-auto">{children}</main>
        </div>
      </div>
    </AppShellProvider>
  );
};
export default AppShell;
