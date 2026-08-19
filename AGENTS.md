# Animais Peçonhentos — Engineering Rules

## Product identity
- Preserve the project as a visual, direct animal guide. Do not turn it into a blog, news portal, feed, or institutional website.
- Animal pages must keep the habitat as the environmental background whenever an existing habitat image is available.
- Preserve the existing animal photographs and audio assets unless a change is explicitly approved.
- Animals with existing audio must keep the click-to-play interaction.

## Content safety
- Never invent or silently rewrite medical/veterinary symptoms, first-aid instructions, toxicity claims, diagnoses, treatments, or mortality claims.
- Existing health content is legacy researched content and must be preserved until separately reviewed against authoritative sources.
- Any future medical/veterinary content change requires a traceable authoritative source and human review.

## Frontend
- Progressive enhancement first: HTML, CSS and vanilla JavaScript remain acceptable and preferred unless a framework has a concrete benefit.
- Mobile is a first-class target. Animal images must not disappear on mobile.
- Use semantic HTML, useful alt text, keyboard-accessible controls, visible focus states and adequate contrast.
- Respect `prefers-reduced-motion`.
- Avoid inline styles and duplicated CSS in new code.
- Prefer reusable components/patterns and design tokens.

## Performance
- Do not add large dependencies for effects achievable with platform APIs.
- Reuse existing media; optimize rather than duplicate assets.
- Avoid autoplay audio/video.

## Git workflow
- `main` represents the stable published version.
- Significant work happens in a feature branch and is reviewed through a pull request before merge.
- Commits should be small enough to review and describe the change clearly.

## Definition of Done
A UI change is done only when it:
1. Preserves navigation and existing animal content.
2. Works at mobile and desktop widths.
3. Preserves habitat backgrounds and available audio interactions.
4. Has no obvious horizontal overflow or inaccessible controls.
5. Does not introduce unverified medical/veterinary claims.
6. Is reviewed as a diff before merge to `main`.
