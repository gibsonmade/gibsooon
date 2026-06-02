# Risks

## Known Risks

- Case study details may contain claims that require Gibson review before publishing.
- Home Depot, CarMax, Academy Sports + Outdoors, CHI St. Luke's, Ritual, and Le Klir may require permissions, employment-context clarification, or careful wording before public launch.
- Mailto inquiry delivery is fast but can be less reliable than a real server-side form because it depends on the visitor's local email setup.
- AI-generated Gibson portraits and lifestyle assets could feel inauthentic if overused or not reviewed.
- Analytics implementation requires privacy and platform choices.
- Open Graph imagery and favicon are required for launch but depend on visual asset production.
- The art direction is intentionally bold; execution must preserve trust and clarity so the site does not feel experimental at the expense of credibility.
- `npm audit --omit=dev` reports two moderate PostCSS advisories through Next 16.2.7's nested `postcss@8.4.31`. The top-level PostCSS is patched, npm's suggested forced fix would downgrade Next, and an override makes npm mark the dependency tree invalid. Monitor for the next patched stable Next release.

## Mitigations

- Mark uncertain claims as needing Gibson review.
- Use "Gibson helped..." voice without inventing metrics.
- Keep early launch copy clear, premium, and specific without confidential details.
- Treat launch assets as a focused set, not a broad image-generation exercise.
- Replace mailto with Resend or a form provider if conversion reliability becomes more important than setup speed.
- Upgrade Next when a stable release resolves the nested PostCSS advisory.
