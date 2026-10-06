import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const description =
  "Sutro Pacific's AI agents coordinate work orders and unit turns with your property team by text, so work keeps moving and owners always know where things stand.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sutro Pacific | AI agents that keep property teams on track",
    template: "%s | Sutro Pacific",
  },
  description,
  // Images come from app/opengraph-image.png and app/twitter-image.png (Next.js adds the tags automatically).
  openGraph: {
    type: "website",
    siteName: "Sutro Pacific",
    url: "/",
    title: "Sutro Pacific | AI agents that keep property teams on track",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutro Pacific | AI agents that keep property teams on track",
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
