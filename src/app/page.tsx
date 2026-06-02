import { AssetVisual } from "@/components/atoms/AssetVisual";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { CaseStudyCard } from "@/components/molecules/CaseStudyCard";
import { PageShell } from "@/components/templates/PageShell";
import { flagshipCaseStudies, services } from "@/lib/content";

export default function HomePage() {
  return (
    <PageShell>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <Eyebrow>End-to-end digital transformation</Eyebrow>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(4.6rem,13vw,12.5rem)] leading-[0.78]">
              Gibson Hall
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-tight text-ink/78 dark:text-paper/78 md:text-4xl">
              Gibson helps founders turn serious ideas into launch-ready digital businesses, brands, websites, and product experiences.
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/62 dark:text-paper/62">
              Strategy, naming, brand, UX, content, custom visuals, CMS, AI systems, motion, and launch support for
              founder-led teams ready to invest in the whole system.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/inquire">Start an inquiry</ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              View work
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-[520px] border border-ink bg-ink p-4 text-paper shadow-hard dark:border-paper dark:bg-paper dark:text-ink">
          <div className="absolute right-6 top-6 z-10 font-mono text-[10px] uppercase tracking-[0.2em]">
            Strategy / Brand / Build / AI
          </div>
          <AssetVisual assetId="home-hero-editorial-portrait" className="absolute left-4 top-14 h-[58%] w-[62%]" fallbackCrop="portrait" />
          <AssetVisual assetId="home-systems-artifact" className="absolute right-6 top-20 h-48 w-44" fallbackCrop="systems" />
          <div className="absolute bottom-6 left-6 right-6 border border-paper/70 bg-paper p-4 text-ink dark:border-ink/70 dark:bg-ink dark:text-paper">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 dark:text-paper/60">
              Founder-led / $10k+ / launch-ready
            </p>
            <p className="mt-6 max-w-lg font-display text-4xl leading-none md:text-5xl">From idea to working system.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-ink px-4 py-16 text-paper dark:border-paper/15 dark:bg-paper dark:text-ink sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Eyebrow>What Gibson makes possible</Eyebrow>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div className="border border-paper/25 px-4 py-5 font-mono text-xs uppercase tracking-[0.18em] dark:border-ink/25" key={service}>
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <Eyebrow>Primary offer</Eyebrow>
          <h2 className="mt-5 font-display text-5xl leading-none md:text-7xl">
            End-to-end digital transformation.
          </h2>
        </div>
        <div className="grid gap-5">
          <p className="text-2xl leading-tight text-ink/76 dark:text-paper/76">
            A serious engagement for founders who need strategy and execution to move together.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["01", "Shape", "Clarify the business idea, audience, offer, name, content, and launch plan."],
              ["02", "Design", "Create the brand system, UX, visuals, website direction, and product experience."],
              ["03", "Build", "Turn the system into a responsive website, CMS, inquiry flow, and launch-ready foundation."]
            ].map(([number, title, copy]) => (
              <article className="border border-ink p-5 dark:border-paper" key={title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
                  {number}
                </p>
                <h3 className="mt-10 font-display text-4xl leading-none">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/65 dark:text-paper/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 px-4 py-16 dark:border-paper/15 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Strategic entry points</Eyebrow>
            <p className="mt-5 max-w-xl text-xl leading-8 text-ink/70 dark:text-paper/70">
              When the full build is not the first move, Gibson can help clarify what should happen next.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Product strategy",
              "UX strategy",
              "Website strategy",
              "Digital consulting",
              "AI and automation consulting"
            ].map((offer) => (
              <div className="border border-ink px-4 py-5 font-mono text-xs uppercase tracking-[0.18em] dark:border-paper" key={offer}>
                {offer}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="border border-ink bg-signal p-6 text-ink">
          <Eyebrow>Good fit</Eyebrow>
          <h2 className="mt-5 font-display text-5xl leading-none md:text-6xl">Founder-led teams with a real business moment.</h2>
          <ul className="mt-8 grid gap-3 text-sm leading-6">
            <li>Profitable or growing businesses ready to invest in a serious digital project.</li>
            <li>Teams that need strategy, brand, product thinking, and execution connected.</li>
            <li>Operators who want a partner to help turn ambiguity into a launchable system.</li>
          </ul>
        </article>
        <article className="border border-ink p-6 dark:border-paper">
          <Eyebrow>Not the best fit</Eyebrow>
          <h2 className="mt-5 font-display text-5xl leading-none md:text-6xl">Disconnected production asks.</h2>
          <ul className="mt-8 grid gap-3 text-sm leading-6 text-ink/65 dark:text-paper/65">
            <li>Logo-only projects with no strategy or launch context.</li>
            <li>One-off banners, quick maintenance tasks, or unclear low-budget work.</li>
            <li>Production help where the strategic problem is off limits.</li>
          </ul>
        </article>
      </section>

      <section className="border-y border-ink/15 bg-ink px-4 py-12 text-paper dark:border-paper/15 dark:bg-paper dark:text-ink sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["Enterprise retail", "The Home Depot / CarMax"],
            ["Civic creative", "Mini Murals"],
            ["Founder launch", "Straterra"],
            ["Current edge", "AI-driven design"]
          ].map(([label, value]) => (
            <div className="border border-paper/20 p-4 dark:border-ink/20" key={label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">{label}</p>
              <p className="mt-6 font-display text-3xl leading-none">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Eyebrow>Selected proof</Eyebrow>
          <h2 className="font-display text-5xl leading-none md:text-7xl">
            Serious projects for serious moments in a business.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {flagshipCaseStudies.map((study, index) => (
            <CaseStudyCard index={index} key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="border border-ink bg-signal p-6 text-ink md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">Next move</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-none md:text-7xl">
              Bring the messy idea.
            </h2>
          </div>
          <div className="mt-8 md:mt-0">
            <ButtonLink href="/inquire">Start the questionnaire</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
