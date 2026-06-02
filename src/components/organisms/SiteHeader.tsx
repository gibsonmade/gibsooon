import Link from "next/link";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/inquire", label: "Inquire" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper/86 backdrop-blur-xl dark:border-paper/15 dark:bg-ink/86">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="font-mono text-sm uppercase tracking-[0.22em]" href="/">
          Gibson Hall
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          {nav.map((item) => (
            <Link
              className="px-2 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/65 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cosmic dark:text-paper/65 dark:hover:text-paper sm:px-3"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

