# Roadmap

## Version 1

Version 1 fits in about two weeks without taking focus away from the Amigo Secreto project, whose launch is planned for **November 16, 2026**.

### Time cap: 15 hours

If version 1 goes over **15 hours in total**, publish it as it is and move whatever is left to version 2. Log hours per milestone below so the cap can be checked.

### Milestones

| # | Dates (2026) | Deliverable | Estimated effort | Hours logged |
| --- | --- | --- | --- | --- |
| M1 | Oct 17–19 | Lock copy, languages, palette, and choose the pixel art | 3–4 h | |
| M2 | Oct 20–26 | Build the page with the 7 sections and publish it | 6–8 h | |
| M3 | Oct 27–Nov 1 | Mobile fixes, Open Graph, analytics and review | 2–3 h | |
| | | **Total** | **11–15 h** (cap: 15 h) | |

#### M1: copy, languages, palette, pixel art (Oct 17–19)

- [ ] Review and adjust [CONTENT.md](CONTENT.md) in his own voice, in both languages
- [x] Redesign to the 32-bit arcade direction ([STYLE_GUIDE.md](STYLE_GUIDE.md)): boot screen, animated title screen, vertical career timeline, inventory item panel
- [ ] Draw the final avatar to replace the placeholder sprite in `content/avatar.ts`, then run `npm run assets` ([ASSETS.md](ASSETS.md))
- [ ] Check Pixelify Sans body text on a real phone
- [ ] Send the GitHub repository URL

#### M2: build and publish (Oct 20–26)

- [x] Scaffold Next.js (App Router, static export, TypeScript, Tailwind)
- [x] Theme tokens, fonts, dark/light toggle with persistence
- [x] `en` / `pt-BR` routing and language toggle
- [x] Content data files and locale files
- [x] Shared components: dialog box, menu cursor, buttons, pause menu, pixel icons (`pixelarticons`)
- [x] Sound toggle and Web Audio menu blips (off by default)
- [x] Sections: Start, About, Timeline, Skills, Projects, Partnerships, Footer
- [x] Keyboard (arrows + Enter) and touch navigation, "skip to summary"
- [x] Reduced-motion support
- [x] Open Graph image and favicons (placeholder avatar)
- [ ] Push to GitHub and deploy to Vercel

#### M3: polish (Oct 27–Nov 1)

- [ ] Mobile pass at 360 px wide, both themes, both locales
- [ ] Open Graph image and meta tags, checked on WhatsApp and LinkedIn previews
- [ ] Turn on Vercel Web Analytics in the project dashboard; wire `start_click`, `play_click`, `contact_click`
- [ ] Accessibility review: contrast, keyboard-only run, screen reader spot check, reduced motion
- [ ] Final review against the 20-second test in [PROJECT.md](PROJECT.md)

## Version 2 backlog (after the Amigo Secreto launch)

Not started until version 1 is live and the owner says go.

- Walkable world map with a moving character
- A dedicated page for each project, with behind-the-scenes notes and usage numbers
- Easter eggs: secret code, achievements for exploring the site
- Optional background music
- Contact form (via a form service)
- Brand logos for items whose brand grants permission (Vue.js already allows portfolio use)
- Commissioned avatar
- Anything cut from version 1 by the 15-hour cap
