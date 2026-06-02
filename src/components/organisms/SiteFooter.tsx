import Link from "next/link";
import { inquiryEmail } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/15 px-4 py-10 dark:border-paper/15 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-4xl leading-none md:text-6xl">Ready when the idea is serious.</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-ink/62 dark:text-paper/62">
            Strategy, brand, digital product thinking, and the actual build under one roof.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link className="font-mono text-xs uppercase tracking-[0.18em] underline underline-offset-4" href="/launch-roadmap">
            Launch roadmap
          </Link>
          <a
            className="font-mono text-xs uppercase tracking-[0.18em] underline underline-offset-4"
            href={`mailto:${inquiryEmail}?subject=Project%20inquiry%20for%20Gibson`}
          >
            Email Gibson
          </a>
        </div>
      </div>
    </footer>
  );
}
