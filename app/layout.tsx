// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "That's Whatsupp",
  description: "Find supplements that fit you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900 overflow-x-hidden`}
      >
        {/* Top navigation */}
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-0">
        <Link href="/" className="flex items-center gap-1-ml-1">
         <img
           src="/logo.svg"
           alt="That's Whatsupp"
           className="h-55 w-auto translate-y-2"
          />
       </Link>


            <nav className="flex items-center gap-6 text-sm text-zinc-600">
              <Link href="/search" className="hover:text-zinc-900">
                Search
              </Link>
              <Link href="/chat" className="hover:text-zinc-900">
                Chat
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
