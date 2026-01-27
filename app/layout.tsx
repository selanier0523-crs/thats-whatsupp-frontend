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
  description: "Find supplements that fit you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50`}
      >
        {/* Top navigation */}
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
            <Link href="/" className="font-semibold tracking-tight">
              That&apos;s Whatsupp
            </Link>

            <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <Link
                href="/search"
                className="hover:text-zinc-950 dark:hover:text-white"
              >
                Search
              </Link>
              <Link
                href="/chat"
                className="hover:text-zinc-950 dark:hover:text-white"
              >
                Chat
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-5xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
