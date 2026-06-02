import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink/60 dark:text-paper/60">
      {children}
    </p>
  );
}
