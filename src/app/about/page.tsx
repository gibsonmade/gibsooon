import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SpriteVisual } from "@/components/atoms/SpriteVisual";
import { PageShell } from "@/components/templates/PageShell";

const workHistory = [
  ["2012-2016", "Mini Murals", "CTO for a Houston public-art project with 250+ murals by 40+ artists."],
  ["2017-2021", "The Home Depot", "Senior Manager of UX Design leading product designers and UX researchers."],
  ["2021-2026", "CarMax", "Manager of Product Design for the sell-your-car supply journey."],
  ["2025-2026", "Straterra", "Freelance strategy, brand, UX/UI, and digital product partner."]
];

const tools = [
  "Figma",
  "VS Code",
  "Codex",
  "Claude",
  "Claude Code",
  "ChatGPT",
  "NanoBanana",
  "Google Gemini",
  "Google Whisk",
  "Clean AI",
  "Lottie",
  "MCP servers"
];

const books = [
  "The Design of Everyday Things",
  "About Face",
  "Continuous Discovery Habits",
  "Grid Systems in Graphic Design",
  "Thinking with Type",
  "The Creative Act",
  "Thinking, Fast and Slow",
  "How Buildings Learn"
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <Eyebrow>About Gibson</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(4.2rem,11vw,10rem)] leading-[0.8]">Systems-minded creative.</h1>
        </div>
        <div className="grid gap-6">
          <p className="text-3xl leading-tight text-ink/78 dark:text-paper/78">
            Gibson works between product strategy, UX leadership, brand systems, digital product design, AI workflows,
            and launch execution.
          </p>
          <p className="text-lg leading-8 text-ink/68 dark:text-paper/68">
            The through-line is turning complex ideas into usable systems: civic art into interactive maps, retail
            catalogs into guided project tools, car-selling flows into clearer decisions, and founder concepts into
            launch-ready brands and products. The personal details stay secondary; the work is the trust signal.
          </p>
          <ButtonLink href="/inquire">Talk through a project</ButtonLink>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {workHistory.map(([years, company, description]) => (
            <article className="border border-ink p-5 dark:border-paper" key={company}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">{years}</p>
              <h2 className="mt-8 font-display text-5xl leading-none">{company}</h2>
              <p className="mt-5 text-sm leading-6 text-ink/65 dark:text-paper/65">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/15 bg-ink px-4 py-16 text-paper dark:border-paper/15 dark:bg-paper dark:text-ink sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Current tool stack</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-none md:text-7xl">
              Design craft, code, and AI agents in the same room.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <div className="border border-paper/25 px-4 py-5 font-mono text-xs uppercase tracking-[0.18em] dark:border-ink/25" key={tool}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Eyebrow>Personal artifacts</Eyebrow>
          <h2 className="mt-5 font-display text-5xl leading-none md:text-7xl">
            A few signals beyond the resume.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Dog Easter egg", "A recurring hidden detail that can move around the site.", "portrait"],
            ["Drone archive", "Photography and video can become page texture, project covers, or motion studies.", "chrome"],
            ["Playlist pending", "Spotify energy comes later once Gibson shares the right source.", "headers"]
          ].map(([title, copy, crop]) => (
            <article className="min-h-64 border border-ink p-5 dark:border-paper" key={title}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">Artifact</p>
              <SpriteVisual className="mt-6 aspect-[4/3]" crop={crop as "portrait" | "chrome" | "headers"} label={title} />
              <h3 className="mt-6 font-display text-4xl leading-none">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-ink/65 dark:text-paper/65">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr]">
          <Eyebrow>Bookshelf draft</Eyebrow>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book) => (
              <div className="border border-ink px-4 py-5 text-sm leading-5 dark:border-paper" key={book}>
                {book}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
