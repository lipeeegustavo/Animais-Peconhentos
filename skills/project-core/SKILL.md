# Skill: Project Core

Use this skill before making product-level changes to Animais Peçonhentos.

## Goal
Modernize the original project while preserving its strongest idea: each animal is experienced visually in its own environment, with concise symptom information and sound interaction where available.

## Before changing code
1. Read `AGENTS.md`.
2. Identify the affected pages, CSS selectors, images, habitat backgrounds and audio files.
3. Check whether the change modifies health/veterinary content. If yes, stop automatic rewriting and require authoritative-source review.
4. Prefer refactoring implementation without unnecessarily replacing original content or media.

## UX principles
- Visual and exploratory, not editorial/blog-like.
- Animal first; chrome/navigation second.
- Habitat imagery should remain visible without harming text readability.
- On animal pages, image, name/scientific name and symptoms must form a clear hierarchy.
- Sound-enabled animals need an understandable audio affordance; never autoplay.
- Mobile must retain the animal image and core interaction.

## Review checklist
- Original routes still work.
- Original images remain referenced where appropriate.
- Existing audio files remain functional.
- Habitat classes/backgrounds are preserved.
- No unverified health claims were introduced.
- Layout remains usable at 360px, tablet and desktop widths.
- Hover effects are not required to understand navigation.
- Reduced-motion users are respected.
