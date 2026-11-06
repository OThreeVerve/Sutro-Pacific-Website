import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const description =
  "Sutro Pacific's AI agents bring consistency and accountability to your daily operations. They follow up with your team, keep tasks moving, and give you a clearer picture of what's getting done and what needs attention.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sutro Pacific | Run a tighter property management operation",
    template: "%s | Sutro Pacific",
  },
  description,
  // Images come from app/opengraph-image.png and app/twitter-image.png (Next.js adds the tags automatically).
  openGraph: {
    type: "website",
    siteName: "Sutro Pacific",
    url: "/",
    title: "Sutro Pacific | Run a tighter property management operation",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutro Pacific | Run a tighter property management operation",
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
