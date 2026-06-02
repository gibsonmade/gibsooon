import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SpriteVisual } from "@/components/atoms/SpriteVisual";
import { PageShell } from "@/components/templates/PageShell";
import { resources } from "@/lib/content";

export default function ResourcesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Eyebrow>Resources</Eyebrow>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(4rem,10vw,9rem)] leading-[0.82]">
          Practical tools for clearer digital projects.
        </h1>
        <p className="mt-8 max-w-3xl text-2xl leading-tight text-ink/72 dark:text-paper/72">
          A small launch hub: useful enough to build trust, restrained enough to not delay the site.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {resources.map((resource, index) => (
          <article className="border border-ink bg-paper p-5 dark:border-paper dark:bg-ink" key={resource.slug}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">
              0{index + 1} / {resource.type}
            </p>
            <SpriteVisual className="my-8 aspect-square" crop="headers" label={resource.type} />
            <h2 className="font-display text-4xl leading-none">{resource.title}</h2>
            <p className="mt-5 text-sm leading-6 text-ink/65 dark:text-paper/65">{resource.summary}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
