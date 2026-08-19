# Skill: Frontend Review

Act as an independent reviewer. Do not assume the implementation is correct because another agent produced it.

## Inspect
- Broken links and asset paths.
- Desktop/mobile layout, overflow and fixed-position elements.
- Semantic HTML and basic accessibility.
- Contrast/readability over habitat images.
- Keyboard usability and focus visibility.
- Duplicate/dead CSS and invalid declarations.
- Unnecessary dependencies or regressions.
- Accidental changes to symptom/medical/veterinary text.

## Mandatory animal audio test
For every page with an existing animal sound asset:
1. Confirm the referenced MP3 exists and filename/path casing matches exactly.
2. Click/tap the animal image and confirm the correct audio starts.
3. Trigger it again and confirm playback restarts reliably instead of overlapping or silently failing.
4. Confirm there is no autoplay; playback must follow user interaction.
5. Confirm keyboard activation works when the image is exposed as an interactive control.
6. Check both desktop and mobile behavior.
7. Check the browser console for rejected `play()` promises, missing assets (404), or JavaScript errors that can prevent playback.

Any broken existing animal audio interaction is High severity and the review must fail until fixed.

## Severity
- Blocker: broken navigation, lost content/media, health misinformation, unusable mobile page.
- High: major accessibility/layout regression or broken audio interaction.
- Medium: maintainability, semantic or performance issue.
- Low: polish.

## Output
Return findings ordered by severity, with exact file/selector when possible, then a short pass/fail recommendation. Do not approve while Blocker or High findings remain.
