import { AssetVisual } from "@/components/atoms/AssetVisual";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { InquiryForm } from "@/components/organisms/InquiryForm";
import { PageShell } from "@/components/templates/PageShell";

export default function InquirePage() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
        <div>
          <Eyebrow>Discovery questionnaire</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(4rem,10vw,9rem)] leading-[0.82]">
            Tell Gibson what needs to become real.
          </h1>
          <p className="mt-8 text-lg leading-8 text-ink/68 dark:text-paper/68">
            Best fit: serious founder-led projects where strategy and production need to move together.
          </p>
          <p className="mt-4 text-sm leading-6 text-ink/60 dark:text-paper/60">
            Most end-to-end engagements start around $10k. Smaller strategy projects can make sense when they clarify a
            larger launch decision.
          </p>
          <div className="mt-8 border border-ink p-4 dark:border-paper">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">
              What happens next
            </p>
            <p className="mt-4 text-sm leading-6 text-ink/68 dark:text-paper/68">
              The answers should make the business moment, scope, budget, and timeline clear enough to decide whether a
              discovery call makes sense. Short answers are fine. Specific answers are better.
            </p>
          </div>
          <AssetVisual assetId="inquire-serious-project" className="mt-8 aspect-[5/3]" fallbackCrop="headers" />
        </div>
        <InquiryForm />
      </section>
    </PageShell>
  );
}
