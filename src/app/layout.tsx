import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { ThemeProvider } from "@/components/theme-provider"
import { GlobalProvider } from '../context/GlobalContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volontariato",
  description: "Organize your volunteer work with ease",
};

export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider
        appearance={{
          baseTheme: dark
        }}
      >
        <GlobalProvider>
          <html lang="en">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <body className={`${inter.className}`}>{children}</body>
            </ThemeProvider>
          </html>
        </GlobalProvider>
      </ClerkProvider>
    </>
  );
}
