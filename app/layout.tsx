import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { profile } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.summary,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-zinc-950 text-zinc-100 antialiased">
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 min-w-0 md:ml-65 pb-24 md:pb-0">
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
