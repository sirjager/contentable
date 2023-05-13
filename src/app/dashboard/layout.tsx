import AppShell from "@/layouts/AppShell";
import { AppShellProvider } from "@/layouts/AppShell/components/AppShellProvider";
import { LayoutProps } from "@/lib/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <AppShellProvider>
      <AppShell>
        {/*  */}
        {children}
      </AppShell>
    </AppShellProvider>
  );
};

export default Layout;
