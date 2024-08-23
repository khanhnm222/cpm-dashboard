import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import NavigationBar from "@/components/features/navigation-bar/navigation-bar";

const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Real-Time Computer Performance Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        fontSans.variable
      )}
      suppressHydrationWarning
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
