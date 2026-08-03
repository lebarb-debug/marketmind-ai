import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpriteDefs } from "@/components/sprites/SpriteDefs";
import { Logo } from "@/components/brand/Logo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarketMind AI — Financial Storytelling",
  description:
    "Every major market event, explained the way a great analyst would: what happened, why it happened, and why it matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SpriteDefs />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
              <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                <div className="flex items-center gap-6">
                  <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
                    <Logo className="h-6 w-6" />
                    MarketMind AI
                  </Link>
                  <Link href="/coverage" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    Coverage
                  </Link>
                </div>
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border/60 py-6">
              <div className="mx-auto max-w-5xl px-6 text-xs text-muted-foreground">
                MarketMind AI · Financial Storytelling flagship build · Not investment advice.
              </div>
            </footer>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
