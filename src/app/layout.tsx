import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
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
