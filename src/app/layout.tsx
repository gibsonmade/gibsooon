import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "https://gibsonmade.github.io/gibsooon" : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gibson Hall | End-to-End Digital Transformation",
    template: "%s | Gibson Hall"
  },
  description:
    "Gibson Hall helps founders turn ideas into reality through beautiful, strategic digital experiences.",
  openGraph: {
    title: "Gibson Hall",
    description:
      "Strategy, brand, content, custom visuals, websites, CMS, AI systems, motion, and launch.",
    images: [
      {
        url: "/assets/generated/gibson-og-preview.png",
        width: 1200,
        height: 630,
        alt: "Gibson Hall social preview"
      }
    ],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper font-body text-ink antialiased dark:bg-ink dark:text-paper">
        {children}
      </body>
    </html>
  );
}
