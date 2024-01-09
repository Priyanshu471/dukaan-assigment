import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar/Navbar";
import { Header } from "../components/header/Header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dukaan - Dashboard",
  description: "Frontend assignment for Dukaan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "flex max-h-screen overflow-hidden ")}
      >
        <Navbar></Navbar>
        <main className="shrink-0 grow max-h-screen overflow-scroll">
          <Header></Header>
          {children}
        </main>
      </body>
    </html>
  );
}
