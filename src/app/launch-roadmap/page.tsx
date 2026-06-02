import Image from "next/image";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { PageShell } from "@/components/templates/PageShell";
import { completedStepCount, currentStep, launchRoadmap, totalStepCount } from "@/data/launch-roadmap";

const statusStyles = {
  done: "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink",
  current: "border-ink bg-signal text-ink shadow-hard dark:border-paper",
  todo: "border-ink/25 bg-transparent text-ink/68 dark:border-paper/25 dark:text-paper/68"
};

const titleStyles = {
  done: "line-through decoration-paper/70 decoration-2 underline-offset-4 dark:decoration-ink/70",
  current: "",
  todo: ""
};

const spriteRows = [
  "Row 1 / Gibson portrait variations",
  "Row 2 / Systems artifact variations",
  "Row 3 / Chrome object variations",
  "Row 4 / Case study cover variations",
  "Row 5 / Section header variations"
];

export default function LaunchRoadmapPage() {
  const progress = Math.round((completedStepCount / totalStepCount) * 100);

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Temporary launch control</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(4rem,10vw,9rem)] leading-[0.82]">
              Launch roadmap.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-8 text-ink/70 dark:text-paper/70">
              This page exists so the project always has a visible operating checklist. After launch, delete this route
              and remove the footer link.
            </p>
          </div>
          <div className="border border-ink bg-paper p-5 shadow-hard dark:border-paper dark:bg-ink">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border border-ink p-4 dark:border-paper">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">
                  Completed
                </p>
                <p className="mt-5 font-display text-6xl leading-none">{completedStepCount}</p>
              </div>
              <div className="border border-ink p-4 dark:border-paper">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">
                  Remaining
                </p>
                <p className="mt-5 font-display text-6xl leading-none">{totalStepCount - completedStepCount}</p>
              </div>
              <div className="border border-ink p-4 dark:border-paper">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">
                  Progress
                </p>
                <p className="mt-5 font-display text-6xl leading-none">{progress}%</p>
              </div>
            </div>
            <div className="mt-5 border border-ink bg-ink p-4 text-paper dark:border-paper dark:bg-paper dark:text-ink">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">Current step</p>
              <p className="mt-3 text-2xl leading-tight">
                {currentStep ? `${currentStep.id} / ${currentStep.title}` : "No current step set"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="border border-ink bg-ink p-4 text-paper shadow-hard dark:border-paper dark:bg-paper dark:text-ink">
          <div className="grid gap-6 lg:grid-cols-[0.34fr_1fr]">
            <div className="p-2">
              <Eyebrow>Reference sprite</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-none md:text-6xl">Mood board asset map.</h2>
              <div className="mt-8 grid gap-2">
                {spriteRows.map((row) => (
                  <p className="border border-paper/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] dark:border-ink/20" key={row}>
                    {row}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 opacity-70">
                Saved as <span className="font-mono">/assets/images/gibsooon-mood-board.png</span>. Use it as a
                design reference and possible sprite source while building launch graphics.
              </p>
            </div>
            <div className="overflow-hidden border border-paper/25 bg-black dark:border-ink/25">
              <Image
                alt="Gibson Hall neo-brutalist cosmic portfolio sprite sheet showing portrait, systems, chrome, case study cover, and section header variations."
                className="h-auto w-full"
                height={1024}
                priority
                src="/assets/images/gibsooon-mood-board.png"
                width={2048}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {launchRoadmap.map((phase) => {
            const phaseDoneCount = phase.steps.filter((step) => step.status === "done").length;

            return (
              <article className="border border-ink bg-paper p-5 dark:border-paper dark:bg-ink" key={phase.title}>
                <div className="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55 dark:text-paper/55">
                      {phaseDoneCount}/{phase.steps.length} done
                    </p>
                    <h2 className="mt-4 font-display text-4xl leading-none md:text-6xl">{phase.title}</h2>
                    <p className="mt-5 max-w-md text-sm leading-6 text-ink/62 dark:text-paper/62">{phase.intent}</p>
                  </div>
                  <div className="grid gap-3">
                    {phase.steps.map((step) => (
                      <div className={`border p-4 ${statusStyles[step.status]}`} key={step.id}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-65">
                              {step.id} / {step.status}
                            </p>
                            <h3 className={`mt-2 text-xl leading-tight ${titleStyles[step.status]}`}>
                              {step.title}
                            </h3>
                          </div>
                          <p className="max-w-xl text-sm leading-6 opacity-75">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
