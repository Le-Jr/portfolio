# AGENTS.md

Rules for coding agents working in this repository. Read this file first, then the doc that covers your task.

## Sources of truth

| Topic | File |
| --- | --- |
| Product scope, sections, version 1 vs version 2 | [PROJECT.md](docs/PROJECT.md) |
| Every user-facing string, in `en` and `pt-BR` | [CONTENT.md](docs/CONTENT.md) |
| Colors, typography, components, motion, sound | [STYLE_GUIDE.md](docs/STYLE_GUIDE.md) |
| Pixel-art assets and the skill-icon build script | [ASSETS.md](docs/ASSETS.md) |
| Milestones and time budget | [ROADMAP.md](docs/ROADMAP.md) |
| Original planning doc (Portuguese) | [PLANNING.md](docs/PLANNING.md) |

If these docs disagree with each other, stop and ask. Do not resolve the conflict silently.

## Stack

- **Next.js** with the App Router and **static export** (`output: "export"`). No server runtime: no API routes, no middleware, no server actions, no ISR.
- **TypeScript** in strict mode.
- **Tailwind CSS**. Palette, fonts and spacing come from the CSS variables in [STYLE_GUIDE.md](docs/STYLE_GUIDE.md). Do not use Tailwind's default color palette.
- **shadcn/ui** only where a component fits the 16-bit look after restyling (for example, accessible primitives for dialogs, tooltips or menus). Do not use stock shadcn styling.
- Deployed on **Vercel**.

> The planning doc suggested "custom CSS with variables, no component library". The owner chose Tailwind + shadcn/ui instead (October 16, 2026). Keep the component layer thin.

## Agent skills

Project skills live in `.agents/skills/`. Use them:

- `vercel-react-best-practices` when writing or reviewing React/Next.js code (for example: no barrel imports, defer analytics, inline script for the theme instead of a flash on hydration).
- `ui-ux-pro-max` when designing or reviewing UI (accessibility, touch targets, focus, motion). Its palettes and fonts are suggestions only: [STYLE_GUIDE.md](docs/STYLE_GUIDE.md) wins.

## Language

- All code, identifiers, file names, comments and commit messages are in **English**.
- User-facing copy exists in English and Brazilian Portuguese (see i18n below).

## Content and copy

- Content lives in data files under `content/` (for example `content/site.ts`, `content/timeline.ts`, `content/skills.ts`, `content/projects.ts`). UI chrome strings (menu labels, toggles, aria labels) live in locale files under `locales/`.
- **Never hardcode copy inside components.** Components get text from content or locale files.
- Adding a project, timeline world or skill must only mean editing a data file, with no layout changes.
- The copy in [CONTENT.md](docs/CONTENT.md) is the reference. If you change a string in code, update CONTENT.md in the same change.
- Never name clients from the owner's current job. Describe the type of work only.
- Never invent missing data (GitHub URL, attribute values, and so on). Leave a `TODO` and hide the UI element until the data exists.

## i18n

- Locales: `en` (default) and `pt-BR`.
- Every user-facing string must exist in both locales, including `alt` text, `aria-label`, `title` and the Open Graph text. Enforce it with types: localized content fields are `{ en: string; "pt-BR": string }`, and the `pt-BR` locale file must match the `en` key set.
- The locale is part of the URL and both versions are statically generated (`/` for English, `/pt-BR/` for Portuguese). Static export has no middleware, so do not rely on server-side locale detection or redirects.
- Set `<html lang>` correctly for each locale (`en` / `pt-BR`).
- The language toggle sits in the corner next to the theme toggle, styled as a game "settings" option.

## Theme

- **Dark mode is the default.** Light mode is available via a toggle.
- On first visit, respect `prefers-color-scheme`. After the user picks a theme, persist the choice in `localStorage`.
- Wrap every `localStorage` read and write in `try/catch`. The site must render correctly when storage is unavailable (private mode, blocked storage).
- Apply the theme before first paint (a small inline script in `<head>` that sets `data-theme` on `<html>`) to avoid a flash of the wrong theme.
- The light theme uses its own palette (see STYLE_GUIDE.md). It is not an inversion of the dark one.

## Accessibility

- **Real HTML text.** No copy inside images or `<canvas>`. Screen readers and search engines must see all content.
- **Pixel font only for titles and buttons.** Body text always uses the readable font, at a comfortable minimum size on mobile.
- Text and background must have enough contrast. The tokens in STYLE_GUIDE.md are paired for this; do not invent new combinations.
- **`prefers-reduced-motion`:** no typing effect, no blinking or pulsing, no screen transitions for users who ask for less motion.
- **Keyboard:** arrow keys move the cursor inside menus and grids, and Enter selects, as in Lords of Logic. Everything is reachable with Tab, and focus is always visible. Arrow-key handlers only apply while a menu or grid has focus; do not hijack page scrolling.
- **Touch:** everything works by tap on mobile with no keyboard needed. Tooltips that open on hover must also open on tap and close on tap outside or Escape.
- Decorative pixel art gets `alt=""` (or `aria-hidden="true"` for inline SVG icons). Meaningful images get localized `alt` text.

## Brand logos

- **No technology or company logos** on the site, pixelated or not, unless the brand has granted permission. Most brands in the inventory forbid modified logos (see [ASSETS.md](docs/ASSETS.md#skill-icons)). Brand names in plain text are fine.
- This includes the brand icons that ship inside `pixelarticons` (`react`, `vercel`, `github`, `linkedin`, and so on). Footer links to GitHub and LinkedIn are text links.

## Sound

- Short menu effects only (cursor move, select), synthesized with the Web Audio API. No audio files, no music in version 1.
- **Off by default.** Nothing plays until the visitor turns sound on. Persist the choice in `localStorage` wrapped in try/catch.
- Sound never carries information that is not also shown visually.
- A "skip to summary" shortcut is always available (see PROJECT.md).

## Dependencies

- **Do not add any dependency without asking first.** This includes runtime packages, dev tools, fonts from new sources, analytics and form services, and component registries such as 8bitcn/ui.
- Already approved (October 16, 2026), beyond what the stack itself needs (Next.js, React, TypeScript, Tailwind, shadcn/ui and its primitives):
  - `pixelarticons` **2.4.2**, pinned, for all icons (see [ASSETS.md](docs/ASSETS.md#skill-icons)).
  - `@vercel/analytics` for Vercel Web Analytics (see [PROJECT.md](docs/PROJECT.md#success-metrics)).
  - Fonts Press Start 2P and VT323 via `next/font/google`.
- When you ask, say what it is for, its size or footprint, and its license.

## Scope

- **Version 1 only.** Build what is listed under version 1 in [PROJECT.md](docs/PROJECT.md) and nothing else.
- Version 2 items (walkable world map, project pages, easter eggs, background music, contact form) are out of bounds until the owner says otherwise.
- The whole of version 1 has a **15-hour budget** (see [ROADMAP.md](docs/ROADMAP.md)). Prefer the simplest thing that meets the spec.

## Working agreement

- Keep changes small and reviewable. One concern per commit.
- Commit messages are in English and in the imperative mood ("Add timeline section").
- Run `npm run build` (static export) and `npm run lint` before you call a task done.
- Custom CSS in `app/globals.css` must live inside `@layer base` or `@layer components`; unlayered rules override Tailwind utilities.
- Check new UI at 360 px wide, in both themes and both locales, and with reduced motion on.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
