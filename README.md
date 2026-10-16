# Leandro Junior: 16-bit portfolio

A personal portfolio with a Super Nintendo look. A single page where each section is a game screen: title screen, character select, world map, inventory, cartridge select and "PLAYER 2, PRESS START". It exists to start SaaS partnership conversations with companies and creators.

Built with Next.js (static export), TypeScript and Tailwind CSS, deployed on Vercel. English by default, with Brazilian Portuguese; dark mode by default, with light mode.

| Doc | What's in it |
| --- | --- |
| [PROJECT.md](docs/PROJECT.md) | Scope, audiences, sections, version 1 vs version 2 |
| [CONTENT.md](docs/CONTENT.md) | All site copy in `en` and `pt-BR` |
| [STYLE_GUIDE.md](docs/STYLE_GUIDE.md) | Palette, typography, components, motion |
| [ASSETS.md](docs/ASSETS.md) | Pixel-art checklist, icon sources and licenses |
| [ROADMAP.md](docs/ROADMAP.md) | Milestones and the 15-hour cap |
| [AGENTS.md](AGENTS.md) | Rules for coding agents |

## Run locally

Requirements: Node.js 20.9 or later and npm. `npm run assets` needs Node.js 22.18 or later (it imports TypeScript directly).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
npm run assets   # regenerate og.png and the favicons in public/ from content/avatar.ts
```

To preview the static build, serve the `out/` folder with any static file server.

No environment variables are needed. On Vercel, turn on Web Analytics in the project dashboard; the canonical URL comes from Vercel's built-in `VERCEL_PROJECT_PRODUCTION_URL`.

## Add a project cartridge

1. Add an entry to `content/projects.ts` with a unique `id`, the project URL, and localized fields (`{ en, "pt-BR" }`) for name, genre, description and "built with". Leave "behind the scenes" empty to hide that button.
2. If the project needs its own cartridge label look, add a `label` variant in `content/projects.ts` and draw it in `components/cartridge.tsx` (Lords of Logic uses `"terminal"`).
3. Add the copy to the Projects section of [CONTENT.md](docs/CONTENT.md).
4. If the new project replaces the "coming soon" cartridge, keep a "coming soon" entry after it so there is always a slot for the next one.

No layout or component changes should be needed.

## Add a skill item

1. Add the item to its category in `content/skills.ts`: an `id`, its name, the localized "where I use it" text (optional; no tooltip without it) and its glyph, `icon: "<name>"`. If the glyph is new, import it in `lib/pixel-icons.ts` first. Browse the names in the [pixelarticons repo](https://github.com/halfmage/pixelarticons).
2. Pick a glyph that hints at what the tool does. Do not use a brand logo, and avoid the brand's own motifs (see [ASSETS.md](docs/ASSETS.md#skill-icons)).
3. Add the item to the Skills section of [CONTENT.md](docs/CONTENT.md) and to the mapping table in [ASSETS.md](docs/ASSETS.md#mapping).

## Contact

nascimentoleandrojr@gmail.com · [LinkedIn](https://www.linkedin.com/in/leandro-jr23)
