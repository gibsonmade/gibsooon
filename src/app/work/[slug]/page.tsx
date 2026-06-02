import { notFound } from "next/navigation";
import { AssetVisual } from "@/components/atoms/AssetVisual";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { PageShell } from "@/components/templates/PageShell";
import { caseStudyDetails } from "@/data/case-study-details";
import { flagshipCaseStudies, getCaseStudy } from "@/lib/content";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return flagshipCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  return {
    title: study ? study.clientName : "Case Study",
    description: study?.title
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study || study.status !== "flagship") {
    notFound();
  }

  const detail = caseStudyDetails[study.slug];
  const coverAssetBySlug: Record<string, string> = {
    "home-depot": "home-depot-cover-artifact",
    carmax: "carmax-cover-artifact",
    "mini-murals": "mini-murals-cover-screenshot",
    straterra: "straterra-cover-luxury"
  };

  return (
    <PageShell>
      <article>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <Eyebrow>Case study / {study.clientName}</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(4rem,10vw,9.5rem)] leading-[0.82]">{study.clientName}</h1>
            <p className="mt-8 max-w-3xl text-2xl leading-tight text-ink/75 dark:text-paper/75">{study.title}</p>
          </div>
          <div className="border border-ink bg-ink p-5 text-paper shadow-hard dark:border-paper dark:bg-paper dark:text-ink">
            <AssetVisual assetId={coverAssetBySlug[study.slug]} className="aspect-[4/5] border-paper/40 dark:border-ink/40" fallbackCrop="covers" />
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Challenge", detail.challenge],
            ["Approach", detail.approach],
            ["Outcome", detail.outcome]
          ].map(([label, copy]) => (
            <div className="border border-ink p-5 dark:border-paper" key={label}>
              <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">{label}</p>
              <p className="text-lg leading-7">{copy}</p>
            </div>
          ))}
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-6 grid gap-5 lg:grid-cols-[0.58fr_1fr]">
            <div>
              <Eyebrow>Asset placements</Eyebrow>
              <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">Replace these with real proof.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-7 text-ink/68 dark:text-paper/68">
              These are intentional placeholders for the screenshots, photos, diagrams, or anonymized mockups needed before final polish.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {detail.assetSlots.map((slot, index) => (
              <div className="border border-ink bg-paper p-4 dark:border-paper dark:bg-ink" key={slot.title}>
                <AssetVisual assetId={slot.assetId} className="aspect-[4/3]" fallbackCrop={slot.crop} />
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50 dark:text-paper/50">
                  Needed asset / 0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl leading-none">{slot.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/65 dark:text-paper/65">{slot.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div className="border border-ink p-5 dark:border-paper">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">Role</p>
            <h2 className="mt-8 font-display text-4xl leading-none">{study.role}</h2>
            <p className="mt-5 text-sm leading-6 text-ink/65 dark:text-paper/65">{study.collaborationContext}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="border border-ink p-5 dark:border-paper">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">Services</p>
              <div className="flex flex-wrap gap-2">
                {study.services?.map((service) => (
                  <span className="border border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] dark:border-paper" key={service}>
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-ink p-5 dark:border-paper">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">Constraints</p>
              <ul className="grid gap-2 text-sm leading-6 text-ink/65 dark:text-paper/65">
                {study.constraints?.map((constraint) => <li key={constraint}>{constraint}</li>)}
              </ul>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="border border-ink bg-signal p-6 text-ink">
            <p className="font-mono text-xs uppercase tracking-[0.18em]">{study.reviewStatus}</p>
          </div>
          <div className="mt-8">
            <ButtonLink href="/inquire">Start a serious project</ButtonLink>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
