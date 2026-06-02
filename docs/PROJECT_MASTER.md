# Project Master

## Current Phase

Phase 8: Baseline QA and temporary GitHub Pages preview.

## Completed

- Created `/gibsooon/` project directory.
- Added `northstar_plan.md` as the source planning prompt.
- Created required documentation files.
- Created required content, public asset, and source folder structure.
- Confirmed mailto inquiry placeholder, public naming for launch case studies, and Vercel deployment target.
- Initialized a Next.js, TypeScript, and Tailwind CSS app.
- Built the first page set: Home, Work, flagship case study detail pages, About, Resources, and Inquire.
- Added a client-side mailto inquiry flow using the seven-question discovery model.
- Verified the first build with `npm run typecheck` and `npm run build`.
- Added a temporary front-end launch roadmap linked from the footer.
- Added the Gibson mood-board sprite sheet to project assets and surfaced it on the launch roadmap.
- Added the operating rule that completed roadmap steps must be crossed off and followed by a clear next-step recommendation.
- Created the flagship case study intake document.
- Completed the Home Depot intake with role, context, work performed, outcomes, story angle, visual direction, and review needs.
- Completed the CarMax intake with role, context, work performed, outcomes, story angle, visual direction, and review needs.
- Completed the Mini Murals intake with role, context, work performed, outcomes, story angle, visual direction, and review needs.
- Completed the Straterra intake with role, context, work performed, outcomes, story angle, visual direction, and review needs.
- Drafted the four flagship case studies from intake: Home Depot, CarMax, Mini Murals, and Straterra.
- Created the flagship case study claims review document.
- Added structured services, industry, year, role, constraints, and story-angle metadata to flagship case studies.
- Created the case study story system with role summaries, constraints, and transformation arcs.
- Tuned the coming-soon case study cards with more specific preview summaries.
- Strengthened the homepage hero to name the end-to-end transformation promise and serious-fit scope.
- Added the primary offer section to the homepage.
- Added secondary-offer positioning to the homepage.
- Added fit and not-fit language to the homepage.
- Improved the inquiry page intro and next-step framing.
- Reviewed and tightened the seven inquiry questions for stronger fit signals.
- Wired the inquiry email through `NEXT_PUBLIC_INQUIRY_EMAIL` in untracked `.env.local` and hid the raw address from tracked source.
- Added budget framing, trust proof, and a stronger homepage CTA rhythm.
- Tested that the inquiry mailto uses the untracked environment email and that tracked source does not contain the real address.
- Created the About content source with professional story and work history.
- Captured About personal detail direction: no Austin lifestyle, dog Easter egg, drone photo/video assets, tool stack, book recommendations, and origin-story interview prompts.
- Drafted the About page with work history, tools, personal artifacts, companies, books, and playlist placeholder.
- Reviewed the About page tone so it leads with trust and keeps personal details secondary.
- Defined final color tokens in Tailwind and the style guide.
- Defined the launch type scale in Tailwind and the style guide.
- Created visual briefs for the hero, case covers, resource thumbnails, favicon, and Open Graph imagery.
- Replaced placeholder gradients with reusable sprite-sheet visual crops.
- Confirmed sprite-based visual hierarchy for page hero, case cards, resources, and About artifacts.
- Created a compressed JPG sprite for CSS visual crops and kept the PNG as the reference source.
- Replaced the remaining case-detail gradient visual with the sprite visual system and confirmed sprite crops use bounded layouts.
- Added launch-quality case detail sections for challenge, approach, outcome, role, collaborators, services, and constraints.
- Finished the core public page set: Home, Work, four flagship case studies, About, Resources, Inquire, footer, and navigation.
- Added a branded 404 page that uses the same sprite visual system and routes users back to Work or Inquire.
- Fixed the flagship case-study route so `/work/home-depot`, `/work/carmax`, `/work/mini-murals`, and `/work/straterra` resolve before responsive QA.
- Added a roadmap step for case-study asset placeholders before Step 8.
- Added visible placeholder slots on every flagship case study for the real screenshots, photos, diagrams, and anonymized mockups to replace later.
- Deferred final asset uploads so responsive QA can continue against the intended layout.
- Split QA into baseline QA now and final QA after ThemeForest theme integration and real assets.
- Added a later ThemeForest integration phase so Gibson can upload the purchased HTML theme and assets when back at the computer.
- Changed the near-term deployment target to a temporary GitHub Pages preview; final host and domain remain later decisions.
- Initialized the local git repository on `main`.
- Configured a GitHub Pages-safe static export with base path and asset-prefix handling.
- Created the temporary public GitHub repository at `https://github.com/gibsonmade/gibsooon`.

## Active Scope

Build a launchable portfolio website for Gibson Hall with:

- Home
- Work
- Case study detail pages
- About
- Resources
- Inquire

## Launch Definition

Launch is complete when:

- Home page is complete.
- Work page is complete.
- About page is complete.
- Resources page is complete.
- Inquire page is complete.
- Four flagship case studies are complete.
- Four remaining case studies are visible as coming soon.
- Baseline desktop, tablet, and mobile checks are complete for the temporary preview.
- Final responsive, accessibility, contrast, and text-overflow QA is complete after theme and real assets are applied.
- Inquiry form works.
- SEO metadata is complete.
- Open Graph images are complete.
- Favicon is complete.
- Analytics is configured.
- Temporary GitHub Pages preview is deployed.
- Final site is deployed after theme integration.
- Domain plan is ready.

## Next Step

Commit the launch baseline, create the GitHub repository, and publish the temporary GitHub Pages preview.

## Confirmed Setup Choices

- Inquiry delivery: mailto placeholder for v1.
- Client naming: Home Depot, CarMax, Mini Murals, and Straterra can be named publicly.
- Temporary preview deployment: GitHub Pages.
- Final launch deployment: undecided; Vercel remains an option.
- ThemeForest integration should happen before final QA and final launch.
