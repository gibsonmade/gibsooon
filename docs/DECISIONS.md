# Decisions

## 2026-06-01

- The project source of truth lives in `/Users/cows/Documents/apps/apps/gibsooon`.
- The initial site will be built as a serious portfolio and inquiry site, not a generic personal homepage.
- Primary positioning: Gibson Hall helps founders turn ideas into reality through beautiful, strategic digital experiences.
- Primary offer: End-to-End Digital Transformation for serious `$10k+` engagements.
- Primary conversion: a seven-question discovery questionnaire.
- The launch site will include Home, Work, Case Studies, About, Resources, and Inquire.
- Art direction is `Neo-Brutalist Cosmic Editorial`.
- The launch build should use Next.js, TypeScript, Tailwind CSS, responsive design, light/dark mode, SEO metadata, Open Graph images, favicon, analytics, and an inquiry form.
- Documentation, content, assets, prompts, design specs, and code should all live inside this project folder.
- Do not start website coding until the documentation system, content model, asset manifest, and style guide exist.
- Inquiry form v1 will use a mailto placeholder for the fastest working path.
- The launch site may publicly name Home Depot, CarMax, Mini Murals, and Straterra.
- Vercel is the approved deployment target for the Next.js launch site.
- The first implementation uses Next.js App Router with static prerendered pages.
- Case study detail pages are generated for the four flagship launch studies only.
- Coming-soon case studies appear as visible proof on the Work page without detail routes.
- A temporary `/launch-roadmap` page will stay linked from the footer during development so launch progress is visible in the front end.
- The `/launch-roadmap` page must be deleted after launch, along with its footer link and roadmap data file.
- The Desktop file `gibsooon-mood-board.png` is saved in the project as `/public/assets/images/gibsooon-mood-board.png` and displayed on `/launch-roadmap` as the reference sprite sheet for launch graphics.
- Operating rule: when a roadmap step is completed, mark it `done`, show it crossed off on `/launch-roadmap`, update relevant docs, and state the next recommended step so Gibson does not have to infer what comes next.
- Case study expansion will start from `docs/CASE_STUDY_INTAKE.md` so publishable facts are separated from draft storytelling.
- The real inquiry email should live in untracked `.env.local` as `NEXT_PUBLIC_INQUIRY_EMAIL`, with only `.env.example` committed. The footer should display generic link text instead of the raw email address.
- Build artifacts may contain the public mailto email because the website needs it at runtime, but `.next` is ignored and should not be committed to GitHub.
- ThemeForest integration is deferred until Gibson can upload the purchased theme files. The current design can be baseline-checked, but final QA must happen after the theme and real assets are applied.
- GitHub Pages is the approved temporary preview host. It is not the final launch host or domain decision.
- Preserve `10.06 / Domain plan` and `10.07 / Connect domain` as blocked future steps until Gibson chooses the final domain and host.
