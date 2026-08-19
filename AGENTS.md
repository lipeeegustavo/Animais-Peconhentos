# Animais Peçonhentos — Engineering Rules

## Product identity
- Preserve the project as a visual, direct animal guide. Do not turn it into a blog, news portal, feed, or institutional website.
- Animal pages must keep the habitat as the environmental background whenever an existing habitat image is available.
- Preserve existing animal photographs and audio assets unless explicitly approved.

## Content safety
- Never invent or silently rewrite medical/veterinary symptoms, first-aid instructions, toxicity claims, diagnoses, treatments, or mortality claims.
- Existing health content must be preserved until separately reviewed against authoritative sources.

## Frontend
- Mobile is a first-class target. Use semantic HTML, useful alt text, keyboard-accessible controls, visible focus states and adequate contrast.
- Every HTML page must contain `<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">`.
- Avoid inline styles and duplicated CSS in new code. Prefer shared reusable patterns.

## Site-wide UI work — mandatory completeness rule
A request that changes navigation, responsiveness, cards, typography, spacing, media, headers, footers or another shared visual behavior MUST be treated as a site-wide task unless the user explicitly limits its scope.

Never fix only the page mentioned as an example. The named page is evidence of a class of defect, not the complete scope.

Before declaring a frontend task complete, enumerate and inspect EVERY HTML/HTM page in the repository and classify it as: initial/home, environment/category, species/listing, animal/symptom/detail, or auxiliary. Check each relevant class against the requested behavior.

For responsiveness, verify at minimum:
1. Home page.
2. Every environment/category page.
3. Every species/listing page, including Sapos, Aranhas, Escorpiões and Cobras.
4. Every animal/symptom/detail page.
5. Auxiliary pages reachable from the UI.
6. No horizontal overflow at 320px, 375px, 390px, 768px and desktop widths.
7. Images stay visible and proportional; cards reflow without clipping.
8. Text remains readable and does not collide with fixed navigation.
9. Buttons have adequate touch targets and stay inside the viewport.
10. Every non-home page has the intended navigation pattern and no legacy icon navigation remains.

### Navigation contract
- `index.html`: no redundant Voltar/Início controls.
- Top-level environment pages opened directly from home (for example `Marinhos.html` and `Terrestre.html`): only `← Voltar`, returning to home.
- Nested category/species listing pages (for example Sapos, Aranhas, Escorpiões, Cobras): `← Voltar` to their parent plus `Início` to `index.html`.
- Animal/symptom/detail pages: `← Voltar` to the correct parent/listing plus `Início` to `index.html`.
- Do not use image-based legacy house/arrow controls (`casapng`, `seta-removebg-preview`) for page navigation. Use the shared `.page-nav` / `.nav-button` pattern.
- Query-string/context-sensitive return links must keep working when already used by the project.

### Mandatory regression sweep
After any shared UI change, search the entire repository for the legacy pattern or selector that was replaced. Zero unintended occurrences is part of Definition of Done. Examples: old navigation image filenames, old fixed dimensions, duplicate viewport-less HTML, deprecated navigation wrappers.

## Audio — mandatory regression requirement
- Existing animal audio is a core feature.
- Playback only after real user action; never autoplay.
- Clicking/tapping the animal image must restart the corresponding sound reliably.
- Verify asset path/casing, repeated playback, mobile/desktop and keyboard interaction.
- Broken existing audio is High severity and blocks release.

## Performance
- Do not add large dependencies for effects achievable with platform APIs.
- Reuse existing media and avoid autoplay audio/video.

## Git workflow
- `main` is stable published version. Significant work happens in a feature branch and is reviewed before merge.
- Commits should be reviewable and clearly described.

## Definition of Done
A UI change is done only when it:
1. Preserves navigation and existing animal content.
2. Has completed the site-wide page inventory when the behavior is shared.
3. Works at mobile and desktop widths across all page classes.
4. Preserves habitat backgrounds and available audio interactions.
5. Has no obvious horizontal overflow, inaccessible controls or legacy navigation left behind.
6. Does not introduce unverified medical/veterinary claims.
7. Is reviewed as a diff before merge.
8. Does not claim 'all pages fixed' unless every HTML/HTM file was included in the audit.