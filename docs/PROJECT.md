# Project scope

A personal portfolio for **Leandro Junior** with a 32-bit arcade look (modern pixel art, in the spirit of Neo Geo-era cabinets). The planning doc started from a Super Nintendo (16-bit) look; the owner moved it to the arcade direction on October 16, 2026. It is the first public portfolio, built to introduce who Leandro is and to **start SaaS partnership conversations** with companies and influencers. Version 1 includes **Brainrot Battaglia: Ultra Caos** (the newest project) and **Lords of Logic**, and is designed to grow with each new product.

## Goal

The portfolio exists to start partnership conversations. Looking good is a means, not the goal: every screen should push the visitor toward contact.

## Audiences

| Audience | What they are looking for | What they need to see |
| --- | --- | --- |
| Influencers and creators | Someone who can turn their audience into a product, without them having to understand tech | The partnership offer in plain language, and proof that Leandro ships live products |
| Companies and agencies | A developer who understands business and marketing, not only code | Career path, stack and working projects |
| Dev community and recruiters | Curiosity, inspiration | Projects and code (secondary) |

## The 20-second test

Without playing anything, a visitor must know:

1. **Who he is:** a full-stack developer with a background in marketing and video.
2. **What he offers:** building SaaS products, apps and games in partnership.
3. **How to reach him:** a contact button visible on the first screen.

Gamification comes after that, for those who want to explore. A "skip to summary" shortcut is always available.

"Skip to summary" jumps to the About section: Start + About + the contact button cover the 20-second test.

## Structure

Version 1 is a **single scrolling page**. Each section imitates a game screen, under a fixed arcade HUD (player tag, current stage, PAUSE button). The pause menu jumps to any section. On the first visit of a session, a short, skippable arcade boot screen plays before the title screen (never with reduced motion). Nothing is locked: everything is reachable from the start.

| # | Section | Game metaphor | Content |
| --- | --- | --- | --- |
| 1 | Start | Arcade title screen, "PRESS START" | Logo-styled name with "FULL STACK DEVELOPER" under it, one line about what he does, an animated pixel-art scene of him coding at his desk over a sunset skyline, a "play" button (scrolls down) and a "talk to me" button |
| 2 | About | Player select | Pixel-art portrait on a "selected" card, a character grid with an open 2P slot, class ("Full-Stack Dev"), attributes and a short paragraph |
| 3 | Timeline | Career mode | Stages stacked top to bottom in time order along a level path; each stage shows its years, title and text, with the current one marked "NOW PLAYING" |
| 4 | Skills | Inventory and status bar | Stack grouped by category, with items (and optional RPG levels per category) |
| 5 | Projects | Cartridge select | One cartridge per project. In version 1: Brainrot Battaglia: Ultra Caos, Lords of Logic and a "coming soon" cartridge |
| 6 | Partnerships | "PLAYER 2, PRESS START" co-op screen | 1P (Leandro) + 2P (the visitor), the offer, how it works as four rounds, and contact |
| 7 | Footer | Credits screen | "Thank you for playing", links (GitHub, LinkedIn, email), "made by" and credits |

All copy is in [CONTENT.md](CONTENT.md). Visual direction is in [STYLE_GUIDE.md](STYLE_GUIDE.md).

### Section notes

- **Skills:** no percentage bars ("React 85%"); they mean nothing to someone hiring. Use RPG levels per category, or just the items. Each item shows a pixel-art glyph, like an RPG item, with the name underneath. Hovering, focusing or tapping an item shows it in an item description panel saying where Leandro uses it. The planning doc asked for pixelated brand logos; most of these brands forbid modified logos, so version 1 uses generic glyphs instead (see [ASSETS.md](ASSETS.md#skill-icons)).
- **Timeline:** MercurioChat is currently offline and shows a pixel-art "powered off" icon on its stage. The last stage is "???", an invitation to build together.
- **Projects:** the portfolio has its own identity, but each cartridge shows its own project's look (Lords of Logic uses a terminal aesthetic). The "coming soon" cartridge reserves space for upcoming products, including the Amigo Secreto project, without changing the structure.
- **Partnerships:** how revenue is split (revenue share, equity, fixed fee plus percentage) stays open and is discussed in conversation. **It does not appear on the site.**

### Interaction

- Navigation by scrolling and clicking, with keyboard shortcuts (arrow keys and Enter), as Lords of Logic already does.
- On mobile, everything works by touch, with no keyboard needed.

## Version 1 scope (now)

- Single page with the 7 sections
- Fixed pause menu and "skip to summary" shortcut
- Keyboard and touch navigation
- English by default, toggle for pt-BR
- Dark mode by default, toggle for light mode
- Pixel-art avatar, skill icons and UI icons
- Brainrot Battaglia: Ultra Caos and Lords of Logic cartridges, plus a "coming soon" cartridge
- Contact by email (`mailto:`) and a LinkedIn link
- Preview image for sharing on social networks and WhatsApp (Open Graph)
- Basic analytics: visits, "play" clicks and contact clicks
- Short menu sound effects, off by default, with a toggle

Technical constraints for version 1:

- Content (timeline, skills, projects) in data files such as `content/projects.ts`, so a project can be added without touching layout.
- Contact via `mailto:`, with **no custom backend**. A form service can come in version 2.
- Static export on Vercel.

## Version 2 backlog (after the Amigo Secreto launch)

- Walkable world map with a moving character
- A dedicated page for each project, with behind-the-scenes notes and usage numbers
- Easter eggs: secret code, achievements for exploring the site
- Optional background music
- Contact form (via a form service)

## Out of scope

- Anything in the version 2 backlog, until version 1 ships.
- A custom backend, database or user accounts.
- Locked levels or anything that gates content behind play.
- Percentage skill bars.
- Partnership pricing or revenue-split terms on the site.
- Client names from Leandro's current job.
- Content rendered inside images or `<canvas>`.
- Brand logos (pixelated or not) without the brand's permission.

## Success metrics

| Metric | What counts |
| --- | --- |
| Visits | Page views / unique visitors |
| "Play" clicks | Clicks on "PRESS START" and on "Play now" on a cartridge |
| Contact clicks | Clicks on any contact action: the first-screen contact button, email, LinkedIn, the "???" timeline stage |

Analytics tool: **Vercel Web Analytics**. It needs no extra account (it is turned on in the Vercel project dashboard), is cookieless, and is added with the `@vercel/analytics` package (`<Analytics />` in the root layout). It works with static export on Vercel.

Limitation: on Vercel's free Hobby plan it records **page views only**; custom events need the Pro plan. So in version 1, **visits are measured, and the click events are wired but only recorded after an upgrade.** Calls go through `track()` from the same package, so no code changes are needed if the plan changes.

| Event | Fires on | Properties |
| --- | --- | --- |
| page view | Automatic | — |
| `start_click` | "PRESS START" on the title screen | — |
| `play_click` | "Play now" on a cartridge | `project` (for example `lords-of-logic`) |
| `contact_click` | Any contact action | `channel`: `hero`, `email`, `linkedin`, `timeline` (the "???" stage link) |

## Open decisions

Still open (data only the owner can provide):

- [x] GitHub repository: https://github.com/Le-Jr/portfolio (also the footer's GitHub link)

Decided:

- [x] Main language: English, with a pt-BR toggle
- [x] Name in the title: Leandro Junior
- [x] Timeline years
- [x] LinkedIn and contact email
- [x] Current job: describe the type of work, no client names
- [x] Avatar: self-made for version 1; a commissioned one can replace it later
- [x] Skill icons: generic pixelarticons glyphs instead of brand logos ([ASSETS.md](ASSETS.md#skill-icons))
- [x] Contact: `mailto:` only
- [x] Domain: Vercel's default `*.vercel.app` domain for now
- [x] Analytics: Vercel Web Analytics (page views on the free plan)
- [x] "Where I use it" texts: placeholder drafts in CONTENT.md
- [x] "Skip to summary" target: the About section
- [x] Sound: short menu effects in version 1, off by default; music in version 2
- [x] Stack: Tailwind CSS + shadcn/ui (instead of the planning doc's "own CSS, no component library")
