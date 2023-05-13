import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex overflow-clip h-screen pb-16">
        <Sidebar />

        <main className="flex-grow overflow-y-auto bg-secondary-light dark:bg-secondary-dark">
          {/*  */}
          {children}
        </main>
      </div>
    </>
  );
};

export default AppShell;
