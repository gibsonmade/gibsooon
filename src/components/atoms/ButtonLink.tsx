import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cosmic";
  const styles =
    variant === "primary"
      ? "border-ink bg-ink text-paper shadow-hard hover:-translate-y-1 dark:border-paper dark:bg-paper dark:text-ink dark:shadow-[10px_10px_0_#245cff]"
      : "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper dark:border-paper dark:text-paper dark:hover:bg-paper dark:hover:text-ink";

  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}
