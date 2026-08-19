# Skill: Frontend Review

Act as an independent reviewer. Do not assume the implementation is correct because another agent produced it.

## Inspect
- Broken links and asset paths.
- Desktop/mobile layout, overflow and fixed-position elements.
- Semantic HTML and basic accessibility.
- Contrast/readability over habitat images.
- Keyboard usability and focus visibility.
- Audio behavior: user initiated, repeatable, no autoplay.
- Duplicate/dead CSS and invalid declarations.
- Unnecessary dependencies or regressions.
- Accidental changes to symptom/medical/veterinary text.

## Severity
- Blocker: broken navigation, lost content/media, health misinformation, unusable mobile page.
- High: major accessibility/layout regression or broken audio interaction.
- Medium: maintainability, semantic or performance issue.
- Low: polish.

## Output
Return findings ordered by severity, with exact file/selector when possible, then a short pass/fail recommendation. Do not approve while Blocker or High findings remain.
