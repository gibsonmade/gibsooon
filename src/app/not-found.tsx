import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SpriteVisual } from "@/components/atoms/SpriteVisual";
import { PageShell } from "@/components/templates/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto grid min-h-[72vh] max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-6">
            <Eyebrow>404 / Missing artifact</Eyebrow>
            <h1 className="max-w-xl font-display text-6xl leading-[0.92] sm:text-7xl lg:text-8xl">
              This page slipped the system.
            </h1>
          </div>
          <p className="max-w-md text-base leading-7 text-ink/68 dark:text-paper/68">
            The route is not part of the current Gibson Hall launch map. Head back to the work index or start an inquiry.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-rows-[1fr_auto]">
          <SpriteVisual
            className="min-h-[340px] border border-ink/15 bg-ink shadow-hard dark:border-paper/15"
            crop="chrome"
            label="Chrome and cosmic visual system"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <ButtonLink href="/work">View work</ButtonLink>
            <ButtonLink href="/inquire" variant="secondary">
              Start inquiry
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
