# Build Specification

## Recommended Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui if useful
- Framer Motion
- MDX or JSON content for v1
- Responsive design
- Light mode and dark mode
- SEO metadata
- Open Graph images
- Favicon
- Analytics
- Inquiry form
- GitHub workflow
- Temporary GitHub Pages preview
- Final hosting decision after ThemeForest integration

## Initial Implementation Plan

1. Initialize Next.js app in this directory.
2. Add TypeScript and Tailwind.
3. Create content data for pages, case studies, resources, and inquiry questions.
4. Build atomic component foundation.
5. Build page templates.
6. Build Home, Work, Case Study, About, Resources, and Inquire pages.
7. Add mailto inquiry form placeholder.
8. Add metadata, favicon, and OG placeholders.
9. Run baseline build and route QA.
10. Publish a temporary GitHub Pages preview.
11. Integrate ThemeForest theme and real assets later.
12. Run final responsive, accessibility, and content QA after theme/assets.

## Content Source

Start with structured JSON or TypeScript data in `src/data`. Move to MDX only when content length and editing needs justify it.

## Deployment Recommendation

Use GitHub Pages for the temporary preview so Gibson can review progress before the ThemeForest theme and real assets are applied. Keep final hosting open until theme integration is complete; Vercel remains an option for final launch if server-side features or richer preview workflows become useful.

## GitHub Pages Preview

- Build with `npm run build:github`.
- GitHub Pages uses a static export in `out/`.
- The temporary preview is expected at `https://gibsonmade.github.io/gibsooon/`.
- The GitHub Pages build uses placeholder inquiry email behavior unless repository secrets are added later.
- Static export is configured with `/gibsooon` as the GitHub Pages base path.

## Confirmed V1 Form Handling

Use a client-side mailto flow that formats the seven-question inquiry into an email draft for Gibson. Replace with Resend or another form provider after launch if submissions need tracking, attachments, or confirmation emails.
