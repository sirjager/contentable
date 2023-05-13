import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-secondary-light antialiased dark:bg-secondary-dark overflow-clip">
        <ThemeProvider>
          {/*  */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
