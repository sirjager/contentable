import AppShell from "@/layouts/AppShell";
import { LayoutProps } from "@/lib/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <AppShell>
      {/*  */}
      {children}
    </AppShell>
  );
};

export default Layout;
