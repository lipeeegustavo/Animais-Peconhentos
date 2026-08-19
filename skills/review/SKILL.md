# Skill: Frontend Review

Act as an independent reviewer. Do not assume the implementation is correct because another agent produced it.

## Scope rule
When a change affects a shared UI behavior, review the entire site, not only files changed by the implementation. Enumerate every `.html` and `.htm` file and classify home, environment/category, species/listing, animal/symptom/detail and auxiliary pages. A page named by the user is an example defect, not permission to ignore siblings.

## Canonical symptom reference
Use `dengue.html` as the canonical MOBILE symptom-page reference. At the same viewport width, every animal/symptom page must match its physical card width, image ratio, title scale, internal spacing, readable font scale, and single-column Humano/Cão/Gato structure. Content length may change page height, but must not change the visual scale. A noticeably smaller or larger symptom page is High severity.

Desktop is intentionally different from mobile and uses the shared horizontal symptom layout. Do not try to make desktop identical to mobile.

## Inspect every relevant page
- Presence of responsive viewport metadata.
- Broken links and asset paths.
- Desktop/mobile layout, overflow and fixed-position elements.
- Navigation contract and correct parent destination.
- Absence of legacy house/arrow image navigation after migration.
- Semantic HTML and basic accessibility.
- Contrast/readability over habitat images.
- Keyboard usability and focus visibility.
- Duplicate/dead CSS and invalid declarations.
- Accidental changes to symptom/medical/veterinary text.
- Symptom-page scale compared side-by-side with `dengue.html` at the same viewport.

Test representative widths 320, 375, 390, 768 and desktop. Shared navigation/responsiveness work cannot PASS while any page class remains on the legacy implementation.

## Navigation contract
- Home: no redundant navigation.
- Top-level environment/category from home: Voltar only.
- Nested species/listing: Voltar to parent + Início.
- Animal/symptom/detail: Voltar to correct parent + Início.
- Shared controls use `.page-nav` and `.nav-button`; legacy `casapng`/`seta-removebg-preview` navigation is a regression.

## Mandatory animal audio test
For every page with an existing animal sound asset: verify exact MP3 path/casing, click/tap playback, reliable restart, no autoplay, keyboard activation, desktop/mobile behavior and browser errors. Broken existing audio is High severity.

## Severity
- Blocker: broken navigation, lost content/media, health misinformation, unusable mobile page.
- High: incomplete site-wide migration, symptom-page scale mismatch, major accessibility/layout regression or broken audio interaction.
- Medium: maintainability, semantic or performance issue.
- Low: polish.

## Output
Return findings ordered by severity with exact file/selector when possible, then pass/fail. Do not approve while Blocker or High findings remain. Never report a site-wide PASS based only on a sample of pages.