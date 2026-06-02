import Link from "next/link";
import type { CaseStudy } from "@/lib/content";
import { AssetVisual } from "@/components/atoms/AssetVisual";

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
};

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const isComingSoon = study.status === "coming-soon";
  const coverAssetBySlug: Record<string, string> = {
    "home-depot": "home-depot-cover-artifact",
    carmax: "carmax-cover-artifact",
    "mini-murals": "mini-murals-cover-screenshot",
    straterra: "straterra-cover-luxury"
  };

  return (
    <article className="group border border-ink bg-paper p-5 transition hover:-translate-y-1 hover:shadow-hard dark:border-paper dark:bg-ink">
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
          0{index + 1}
        </span>
        <span className="border border-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] dark:border-paper">
          {isComingSoon ? "Coming soon" : "Flagship"}
        </span>
      </div>
      <AssetVisual assetId={coverAssetBySlug[study.slug] || "home-proof-collage"} className="mb-6 aspect-[5/3]" fallbackCrop="covers" />
      <h3 className="mb-4 font-display text-2xl leading-none md:text-3xl">{study.clientName}</h3>
      <p className="mb-5 text-lg leading-snug text-ink/78 dark:text-paper/78">{study.title}</p>
      <p className="mb-7 text-sm leading-6 text-ink/62 dark:text-paper/62">{study.shortSummary}</p>
      {isComingSoon ? (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50 dark:text-paper/50">
          Detail page queued
        </p>
      ) : (
        <Link
          className="font-mono text-xs uppercase tracking-[0.18em] underline decoration-ink/30 underline-offset-4 transition group-hover:decoration-ink dark:decoration-paper/30 dark:group-hover:decoration-paper"
          href={`/work/${study.slug}`}
        >
          Read case study
        </Link>
      )}
    </article>
  );
}
