import type { Metadata, Viewport } from "next";
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

const description =
  "MITHRA is a private, simple messenger for the people who matter most. Chat, share and call — with privacy designed in from day one.";

export const metadata: Metadata = {
  title: {
    default: "MITHRA — Your people. Your conversations.",
    template: "%s · MITHRA",
  },
  description,
  applicationName: "MITHRA",
  keywords: [
    "MITHRA",
    "messaging",
    "private messenger",
    "chat",
    "voice calls",
    "video calls",
  ],
  openGraph: {
    type: "website",
    siteName: "MITHRA",
    title: "MITHRA — Your people. Your conversations.",
    description,
  },
  twitter: {
    card: "summary",
    title: "MITHRA — Your people. Your conversations.",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6fd" },
    { media: "(prefers-color-scheme: dark)", color: "#070a1f" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
