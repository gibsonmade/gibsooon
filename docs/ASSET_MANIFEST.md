# Asset Manifest

## Asset Categories

Every asset must support one of:

- Gibson
- Systems
- Transformation
- Product

## Launch Asset Needs

### Gibson

- Editorial Gibson portrait
- Working-session image
- About page lifestyle moments
- Optional dog/lifestyle image

Recommended tools: ChatGPT image generation for concepting, Figma for layout treatment, manual Gibson review for authenticity.

### Systems

- Strategy artifact collage
- Wireframe fragments
- Roadmap graphics
- Notebook page texture

Recommended tools: Figma, Whisk, Gemini, or Codex-generated SVG/CSS placeholders.

### Transformation

- Chrome liquid object
- Cosmic gradient field
- Before/after visual motifs
- Motion concept frames

Recommended tools: ChatGPT image generation, Figma, Google Flow or Kling for motion experiments later.

### Product

- Case study cover images
- Device mockups
- Project thumbnails
- Open Graph images
- Resource thumbnails
- Favicon concepts

Recommended tools: Figma for production, ChatGPT or Pomelli for image concepting, FFmpeg for future video processing.

## Placeholders Needed Now

- `/public/assets/og/`
- `/public/assets/favicon/`
- `/public/assets/project-covers/`
- `/public/assets/case-studies/`
- `/public/assets/images/`

## First Build Placeholder Treatment

The first website draft now uses reusable crops from `/public/assets/images/gibsooon-mood-board.png` for hero, case-card, resource, and About-page visuals. These are launch scaffolds, not final brand assets.

## Reference Sprite Sheet

Source file added:

- `/public/assets/images/gibsooon-mood-board.png`
- `/public/assets/images/gibsooon-mood-board-sprite.jpg`

Purpose:

- Keep the Neo-Brutalist Cosmic Editorial direction visible during the build.
- Use as a sprite/reference library for launch graphic production.
- Surface on `/launch-roadmap` while the site is in development.

Row map:

1. Gibson portrait variations
2. Systems artifact variations
3. Chrome object variations
4. Case study cover variations
5. Section header variations

Use guidance:

- Row 1 supports Gibson and About visuals.
- Row 2 supports Systems and process visuals.
- Row 3 supports Transformation and decorative hero objects.
- Row 4 supports Product and case study cover directions.
- Row 5 supports page and section header composition.
- Treat as a reference/source sprite, not final publishable production imagery until reviewed.
- Use the compressed JPG sprite for CSS-background crops. Keep the PNG as the higher-quality reference source.

## Asset Risks

- Do not generate unnecessary assets before page structure is known.
- Do not use realistic Gibson imagery without Gibson review.
- Use batched prompts and sprite sheets where practical.
