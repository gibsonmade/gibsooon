export type RoadmapStep = {
  id: string;
  title: string;
  description: string;
  status: "done" | "current" | "todo";
};

export type RoadmapPhase = {
  title: string;
  intent: string;
  steps: RoadmapStep[];
};

export const launchRoadmap: RoadmapPhase[] = [
  {
    title: "Step 1: Foundation",
    intent: "Create the working project spine and first website draft.",
    steps: [
      {
        id: "1.01",
        title: "Create project directory",
        description: "Create /gibsooon/ as the source of truth for the site.",
        status: "done"
      },
      {
        id: "1.02",
        title: "Create north star plan",
        description: "Capture positioning, audience, offer, pages, art direction, and launch definition.",
        status: "done"
      },
      {
        id: "1.03",
        title: "Create documentation system",
        description: "Add project, content, decisions, risks, style, build, and launch docs.",
        status: "done"
      },
      {
        id: "1.04",
        title: "Create source structure",
        description: "Add content, public asset, app, component, lib, and data folders.",
        status: "done"
      },
      {
        id: "1.05",
        title: "Confirm setup decisions",
        description: "Choose mailto inquiry, public client naming, and Vercel deployment.",
        status: "done"
      },
      {
        id: "1.06",
        title: "Initialize Next.js build",
        description: "Set up Next.js, TypeScript, Tailwind, linting, and build scripts.",
        status: "done"
      },
      {
        id: "1.07",
        title: "Build first page draft",
        description: "Create Home, Work, About, Resources, Inquire, and flagship case study routes.",
        status: "done"
      },
      {
        id: "1.08",
        title: "Verify first draft",
        description: "Run lint, typecheck, build, and local route smoke checks.",
        status: "done"
      }
    ]
  },
  {
    title: "Step 2: Launch Control",
    intent: "Make the remaining path visible inside the website while the site is still in progress.",
    steps: [
      {
        id: "2.01",
        title: "Add front-end roadmap page",
        description: "Create a temporary page that shows what is done, what is current, and what remains.",
        status: "done"
      },
      {
        id: "2.02",
        title: "Link roadmap from footer",
        description: "Make the roadmap always reachable during development.",
        status: "done"
      },
      {
        id: "2.03",
        title: "Document delete-after-launch rule",
        description: "Mark the roadmap page as a temporary pre-launch operating surface.",
        status: "done"
      },
      {
        id: "2.04",
        title: "Add sprite sheet reference",
        description: "Save the mood-board sprite sheet and surface it on the roadmap.",
        status: "done"
      }
    ]
  },
  {
    title: "Step 3: Case Study Truth",
    intent: "Replace placeholder proof with accurate, publishable client stories.",
    steps: [
      { id: "3.01", title: "Create case study intake questions", description: "Define the exact facts needed for every flagship story.", status: "done" },
      { id: "3.02", title: "Home Depot intake", description: "Capture role, context, constraints, work performed, and publishable outcomes.", status: "done" },
      { id: "3.03", title: "CarMax intake", description: "Capture role, context, constraints, work performed, and publishable outcomes.", status: "done" },
      { id: "3.04", title: "Mini Murals intake", description: "Capture role, collaborators, civic/art context, work performed, and outcomes.", status: "done" },
      { id: "3.05", title: "Straterra intake", description: "Capture role, brand scope, website scope, visuals, and outcomes.", status: "done" },
      { id: "3.06", title: "Draft Home Depot case study", description: "Write a careful launch version using Gibson-approved facts.", status: "done" },
      { id: "3.07", title: "Draft CarMax case study", description: "Write a careful launch version using Gibson-approved facts.", status: "done" },
      { id: "3.08", title: "Draft Mini Murals case study", description: "Write a careful launch version using Gibson-approved facts.", status: "done" },
      { id: "3.09", title: "Draft Straterra case study", description: "Write a careful launch version using Gibson-approved facts.", status: "done" },
      { id: "3.10", title: "Review claims", description: "Remove unsupported metrics, confidential details, or unclear ownership.", status: "done" },
      { id: "3.11", title: "Add services metadata", description: "Add services, industry, year, and project type to each case study.", status: "done" },
      { id: "3.12", title: "Add project role summaries", description: "State Gibson's role clearly without overstating ownership.", status: "done" },
      { id: "3.13", title: "Add constraints notes", description: "Capture business, team, timeline, or technical constraints where useful.", status: "done" },
      { id: "3.14", title: "Add transformation arc", description: "Make each story show a before, approach, and after.", status: "done" },
      { id: "3.15", title: "Update coming-soon cards", description: "Tune Academy, CHI St. Luke's, Ritual, and Le Klir cards for credibility.", status: "done" }
    ]
  },
  {
    title: "Step 4: Positioning and Conversion",
    intent: "Make the offer obvious and filter for serious-fit projects.",
    steps: [
      { id: "4.01", title: "Review homepage hero", description: "Confirm headline, support copy, and primary CTA are right.", status: "done" },
      { id: "4.02", title: "Define offer section", description: "Clarify the end-to-end transformation engagement.", status: "done" },
      { id: "4.03", title: "Define secondary offers", description: "Position strategy, UX, website, digital, and AI consulting.", status: "done" },
      { id: "4.04", title: "Add fit / not fit language", description: "Quietly repel low-budget and disconnected production requests.", status: "done" },
      { id: "4.05", title: "Improve inquiry intro", description: "Make the questionnaire feel selective but approachable.", status: "done" },
      { id: "4.06", title: "Review inquiry questions", description: "Confirm the seven questions collect enough signal.", status: "done" },
      { id: "4.07", title: "Set inquiry email address", description: "Replace placeholder email if needed.", status: "done" },
      { id: "4.08", title: "Add budget language", description: "Set expectations around serious projects and $10k+ fit.", status: "done" },
      { id: "4.09", title: "Add trust proof", description: "Add concise credibility signals near conversion points.", status: "done" },
      { id: "4.10", title: "Add CTA rhythm", description: "Make sure every major page has a clear next action.", status: "done" },
      { id: "4.11", title: "Test generated email body", description: "Make sure the mailto draft is readable and useful.", status: "done" }
    ]
  },
  {
    title: "Step 5: About and Trust",
    intent: "Make Gibson feel credible, specific, and human.",
    steps: [
      { id: "5.01", title: "Gather professional story", description: "Capture Gibson's concise career arc.", status: "done" },
      { id: "5.02", title: "Gather work history", description: "List teams, brands, roles, and experience areas.", status: "done" },
      { id: "5.03", title: "Gather personal details", description: "Books, tools, Austin references, art/design interests, and lifestyle details.", status: "done" },
      { id: "5.04", title: "Draft About page", description: "Write professional profile plus creative magazine feature copy.", status: "done" },
      { id: "5.05", title: "Add tools section", description: "Show strategy, design, AI, build, and motion tools Gibson uses.", status: "done" },
      { id: "5.06", title: "Add personal artifacts", description: "Add a few personal moments without oversharing.", status: "done" },
      { id: "5.07", title: "Add companies worked with", description: "Present recognizable names in the right context.", status: "done" },
      { id: "5.08", title: "Add favorite books", description: "Use books as taste and thinking signals, not filler.", status: "done" },
      { id: "5.09", title: "Add playlist concept", description: "Decide whether the Spotify concept belongs on launch.", status: "done" },
      { id: "5.10", title: "Review About tone", description: "Make sure it builds trust before personality.", status: "done" }
    ]
  },
  {
    title: "Step 6: Visual System",
    intent: "Move from CSS placeholders to a coherent art-directed visual language.",
    steps: [
      { id: "6.01", title: "Define final color tokens", description: "Lock black, white, paper, chrome, signal, and cosmic accents.", status: "done" },
      { id: "6.02", title: "Define type scale", description: "Tune display, body, and mono sizes across breakpoints.", status: "done" },
      { id: "6.03", title: "Create hero visual brief", description: "Specify Gibson portrait plus systems collage direction.", status: "done" },
      { id: "6.04", title: "Create case cover brief", description: "Define reusable cover art language for each case study.", status: "done" },
      { id: "6.05", title: "Create resource thumbnail brief", description: "Define thumbnail system for the resource hub.", status: "done" },
      { id: "6.06", title: "Create favicon brief", description: "Define favicon and app icon concepts.", status: "done" },
      { id: "6.07", title: "Create OG image brief", description: "Define social preview image layout.", status: "done" },
      { id: "6.08", title: "Replace placeholder visuals", description: "Swap CSS placeholders for final or launch-quality assets.", status: "done" },
      { id: "6.09", title: "Check visual hierarchy", description: "Confirm each page has one strong hero object.", status: "done" },
      { id: "6.10", title: "Create Home hero asset", description: "Produce or choose the launch hero visual.", status: "done" },
      { id: "6.11", title: "Create Work hero asset", description: "Produce or choose the Work page visual direction.", status: "done" },
      { id: "6.12", title: "Create About visual assets", description: "Add Gibson/personal artifacts or placeholders that feel intentional.", status: "done" },
      { id: "6.13", title: "Create Home Depot cover", description: "Produce the case study cover treatment.", status: "done" },
      { id: "6.14", title: "Create CarMax cover", description: "Produce the case study cover treatment.", status: "done" },
      { id: "6.15", title: "Create Mini Murals cover", description: "Produce the case study cover treatment.", status: "done" },
      { id: "6.16", title: "Create Straterra cover", description: "Produce the case study cover treatment.", status: "done" },
      { id: "6.17", title: "Optimize images", description: "Compress and size images for web performance.", status: "done" },
      { id: "6.18", title: "Check mobile visual crop", description: "Ensure visuals do not break mobile layouts.", status: "done" }
    ]
  },
  {
    title: "Step 7: Page Completion",
    intent: "Bring each page from first draft to launch-ready.",
    steps: [
      { id: "7.01", title: "Finalize Home", description: "Positioning, proof, services, CTA, and visuals.", status: "done" },
      { id: "7.02", title: "Finalize Work", description: "Case study grid, coming-soon proof, and filters if needed.", status: "done" },
      { id: "7.03", title: "Finalize Home Depot", description: "Launch-ready case study detail page.", status: "done" },
      { id: "7.04", title: "Finalize CarMax", description: "Launch-ready case study detail page.", status: "done" },
      { id: "7.05", title: "Finalize Mini Murals", description: "Launch-ready case study detail page.", status: "done" },
      { id: "7.06", title: "Finalize Straterra", description: "Launch-ready case study detail page.", status: "done" },
      { id: "7.07", title: "Finalize About", description: "Trust-building personal/professional page.", status: "done" },
      { id: "7.08", title: "Finalize Resources", description: "Small polished hub that supports conversion.", status: "done" },
      { id: "7.09", title: "Finalize Inquire", description: "Discovery flow, fit language, and email behavior.", status: "done" },
      { id: "7.10", title: "Finalize footer", description: "Confirm footer links, email, and launch-roadmap removal plan.", status: "done" },
      { id: "7.11", title: "Finalize 404", description: "Create a branded not-found state.", status: "done" },
      { id: "7.12", title: "Finalize navigation", description: "Confirm every route is easy to find and return from.", status: "done" },
      { id: "7.13", title: "Add case asset placeholders", description: "Show the exact screenshot, photo, mockup, and anonymized visual slots to replace later.", status: "done" }
    ]
  },
  {
    title: "Step 8: Baseline QA",
    intent: "Do a quick technical and layout pass before ThemeForest integration, without treating the current design as final.",
    steps: [
      { id: "8.01", title: "Baseline desktop check", description: "Check major desktop routes for obvious layout or route failures.", status: "done" },
      { id: "8.02", title: "Baseline tablet check", description: "Check tablet-sized layouts for obvious wrapping, spacing, or crop failures.", status: "done" },
      { id: "8.03", title: "Baseline mobile check", description: "Check narrow mobile layouts for obvious text overflow or broken sections.", status: "done" },
      { id: "8.04", title: "Baseline navigation check", description: "Check header, footer, case-study links, and roadmap link across routes.", status: "done" },
      { id: "8.05", title: "Baseline inquiry check", description: "Check that the mailto inquiry flow still works.", status: "done" },
      { id: "8.06", title: "Baseline route smoke check", description: "Check all public routes return expected content.", status: "done" },
      { id: "8.07", title: "Baseline build check", description: "Run lint, typecheck, and production build before GitHub preview setup.", status: "done" },
      { id: "8.08", title: "Record deferred final QA", description: "Document that final responsive, accessibility, contrast, and text-overflow QA happens after theme and assets.", status: "done" }
    ]
  },
  {
    title: "Step 8.5: Theme and Asset Integration",
    intent: "Later, replace the current visual system with the selected ThemeForest theme and real project assets before final QA.",
    steps: [
      { id: "8.5.01", title: "Upload ThemeForest files", description: "Gibson uploads the purchased HTML theme package when back at the computer.", status: "todo" },
      { id: "8.5.02", title: "Review theme structure", description: "Inspect theme HTML, CSS, scripts, image dependencies, license notes, and build assumptions.", status: "todo" },
      { id: "8.5.03", title: "Choose integration strategy", description: "Decide whether to adapt the current Next app to the theme or rebuild pages around the theme source.", status: "todo" },
      { id: "8.5.04", title: "Map content into theme", description: "Move current Gibson content, case studies, inquiry flow, and roadmap into the selected theme structure.", status: "todo" },
      { id: "8.5.05", title: "Upload real project assets", description: "Add approved screenshots, photos, mockups, and anonymized visuals for each case study.", status: "todo" },
      { id: "8.5.06", title: "Replace placeholders", description: "Swap sprite placeholders with real theme imagery and project assets.", status: "todo" },
      { id: "8.5.07", title: "Final responsive QA", description: "Run full desktop, tablet, and mobile QA after theme and assets are applied.", status: "todo" },
      { id: "8.5.08", title: "Final accessibility QA", description: "Run keyboard, focus, contrast, reduced-motion, and text-overflow QA after theme and assets are applied.", status: "todo" }
    ]
  },
  {
    title: "Step 9: SEO, Metadata, and Analytics",
    intent: "Make the launch technically complete and shareable.",
    steps: [
      { id: "9.01", title: "Page titles", description: "Write unique metadata titles for every page.", status: "todo" },
      { id: "9.02", title: "Meta descriptions", description: "Write unique descriptions for every page.", status: "todo" },
      { id: "9.03", title: "Open Graph defaults", description: "Add global OG title, description, URL, and image.", status: "todo" },
      { id: "9.04", title: "Case study metadata", description: "Add case-specific metadata for flagship pages.", status: "todo" },
      { id: "9.05", title: "Favicon", description: "Add favicon and app icons.", status: "todo" },
      { id: "9.06", title: "Sitemap", description: "Generate or add sitemap support.", status: "todo" },
      { id: "9.07", title: "Robots", description: "Add robots rules appropriate for launch.", status: "todo" },
      { id: "9.08", title: "Analytics choice", description: "Choose Vercel Analytics, Plausible, GA4, or none.", status: "todo" },
      { id: "9.09", title: "Analytics install", description: "Install and verify selected analytics.", status: "todo" },
      { id: "9.10", title: "Schema markup decision", description: "Decide whether to add person or professional service structured data.", status: "todo" },
      { id: "9.11", title: "Canonical URLs", description: "Add canonical URL handling after domain is chosen.", status: "todo" },
      { id: "9.12", title: "Social share test", description: "Test share previews after deployment.", status: "todo" }
    ]
  },
  {
    title: "Step 10: Temporary GitHub Pages Preview",
    intent: "Create a temporary GitHub-hosted preview before final theme, asset, domain, and launch work.",
    steps: [
      { id: "10.01", title: "Create git repository", description: "Initialize or connect the project repo.", status: "done" },
      { id: "10.02", title: "Commit launch baseline", description: "Commit the launch-ready source.", status: "done" },
      { id: "10.03", title: "Create GitHub repo", description: "Create a temporary GitHub repository under the connected account.", status: "done" },
      { id: "10.04", title: "Configure static export", description: "Add GitHub Pages-safe static export settings without breaking local development.", status: "done" },
      { id: "10.05", title: "Publish GitHub Pages preview", description: "Push the static export and verify the temporary GitHub Pages URL.", status: "current" },
      { id: "10.06", title: "Domain plan", description: "Choose and document the launch domain.", status: "todo" },
      { id: "10.07", title: "Connect domain", description: "Add DNS and final hosting domain settings after launch host is chosen.", status: "todo" },
      { id: "10.08", title: "Production QA", description: "Run final smoke checks on the live domain after theme, assets, and domain are complete.", status: "todo" },
      { id: "10.09", title: "Delete roadmap page", description: "Remove this temporary launch roadmap page after launch.", status: "todo" },
      { id: "10.10", title: "Remove temporary docs from public UI", description: "Make sure internal launch scaffolding is not linked publicly.", status: "todo" },
      { id: "10.11", title: "Final content readthrough", description: "Read every public page on the live domain.", status: "todo" },
      { id: "10.12", title: "Final link check", description: "Check every internal and external link.", status: "todo" },
      { id: "10.13", title: "Final inquiry test", description: "Submit a final test inquiry through mailto.", status: "todo" },
      { id: "10.14", title: "Launch note", description: "Document what shipped and what moves to post-launch.", status: "todo" },
      { id: "10.15", title: "Post-launch backlog review", description: "Move non-launch ideas into backlog and close the launch checklist.", status: "todo" }
    ]
  }
];

export const roadmapSteps = launchRoadmap.flatMap((phase) => phase.steps);
export const completedStepCount = roadmapSteps.filter((step) => step.status === "done").length;
export const currentStep = roadmapSteps.find((step) => step.status === "current");
export const totalStepCount = roadmapSteps.length;
