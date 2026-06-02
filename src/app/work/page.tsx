import { Eyebrow } from "@/components/atoms/Eyebrow";
import { CaseStudyCard } from "@/components/molecules/CaseStudyCard";
import { PageShell } from "@/components/templates/PageShell";
import { caseStudies } from "@/lib/content";

export default function WorkPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Eyebrow>Work</Eyebrow>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(4rem,11vw,10rem)] leading-[0.82]">
          Projects with business pressure.
        </h1>
        <p className="mt-8 max-w-3xl text-2xl leading-tight text-ink/72 dark:text-paper/72">
          A first launch set of flagship case studies and visible coming-soon proof. Details stay careful until Gibson
          reviews exact roles, claims, and outcomes.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-20 sm:px-6 md:grid-cols-2 lg:px-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard index={index} key={study.slug} study={study} />
        ))}
      </section>
    </PageShell>
  );
}

