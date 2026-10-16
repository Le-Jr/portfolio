# Style guide: 16-bit design system

The reference is the interface of Super Nintendo RPGs: dialog boxes with borders, menus with a blinking cursor, a world map, and saturated colors on a dark background. Lords of Logic uses a terminal look. The portfolio has its own identity, and each cartridge shows its own project's look.

## Color

### Palette (closed, 16 colors)

These are the only colors on the site, except inside project cartridges, which use their project's look. Do not add colors, tints or opacity variants without updating this table.

| # | Name | Hex | Role |
| --- | --- | --- | --- |
| 1 | `night` | `#0f0e2a` | Dark background; light-theme text |
| 2 | `dusk` | `#1c1a4a` | Dark surfaces (dialog boxes, cards) |
| 3 | `cream` | `#f4ecd8` | Light background; dark-theme text |
| 4 | `sand` | `#e6dcc2` | Light surfaces |
| 5 | `haze` | `#a09cc8` | Muted text on dark |
| 6 | `slate` | `#4a4680` | Muted text on light |
| 7 | `yellow` | `#ffd23f` | Accent (dark): primary actions, cursor, highlights |
| 8 | `cyan` | `#3fe0f0` | Accent (dark): links, secondary highlights |
| 9 | `magenta` | `#ff5ccf` | Accent (dark): partnerships, special items |
| 10 | `green` | `#5be36b` | Status (dark): online / success |
| 11 | `red` | `#ff5a5f` | Status (dark): offline / error |
| 12 | `gold` | `#7a5600` | Accent (light): primary actions |
| 13 | `teal` | `#006b75` | Accent (light): links |
| 14 | `plum` | `#a3006e` | Accent (light): partnerships |
| 15 | `forest` | `#1d6b2a` | Status (light): online / success |
| 16 | `crimson` | `#b3141a` | Status (light): offline / error |

The light theme keeps the same accent hues, darkened so they stay readable on cream. The bright accents (7–11) may still be used as **fills and borders** in light mode, never as text on light backgrounds.

### Measured contrast

| Pair | Ratio |
| --- | --- |
| `cream` on `night` | 15.97 |
| `cream` on `dusk` | 13.76 |
| `haze` on `night` / `dusk` | 7.24 / 6.24 |
| `yellow` on `night` / `dusk` | 13.02 / 11.22 |
| `cyan` on `night` / `dusk` | 11.76 / 10.13 |
| `magenta` on `night` / `dusk` | 6.88 / 5.93 |
| `red` on `night` / `dusk` | 6.16 / 5.31 |
| `night` on `cream` / `sand` | 15.97 / 13.78 |
| `slate` on `cream` / `sand` | 7.20 / 6.20 |
| `gold` on `cream` / `sand` | 5.65 / 4.87 |
| `teal` on `cream` / `sand` | 5.31 / 4.58 |
| `plum` on `cream` / `sand` | 6.41 / 5.53 |
| `crimson` on `cream` / `sand` | 5.88 / 5.07 |
| `night` on `yellow` (dark-theme button label) | 13.02 |
| `cream` on `gold` (light-theme button label) | 5.65 |

All pairs meet WCAG AA for normal text (4.5:1).

### Theme tokens

Components use **semantic tokens only**, never palette names or hex values.

```css
:root {
  /* palette */
  --night: #0f0e2a;  --dusk: #1c1a4a;  --cream: #f4ecd8; --sand: #e6dcc2;
  --haze: #a09cc8;   --slate: #4a4680;
  --yellow: #ffd23f; --cyan: #3fe0f0;  --magenta: #ff5ccf;
  --green: #5be36b;  --red: #ff5a5f;
  --gold: #7a5600;   --teal: #006b75;  --plum: #a3006e;
  --forest: #1d6b2a; --crimson: #b3141a;
}

/* Dark is the default theme. */
:root,
:root[data-theme="dark"] {
  color-scheme: dark;
  --color-bg: var(--night);
  --color-surface: var(--dusk);
  --color-text: var(--cream);
  --color-text-muted: var(--haze);
  --color-border: var(--cream);
  --color-border-inner: var(--haze);
  --color-primary: var(--yellow);        /* text, cursor, primary button fill */
  --color-on-primary: var(--night);      /* text on primary fill */
  --color-link: var(--cyan);
  --color-special: var(--magenta);
  --color-success: var(--green);
  --color-danger: var(--red);
  --color-focus: var(--cyan);
}

:root[data-theme="light"] {
  color-scheme: light;
  --color-bg: var(--cream);
  --color-surface: var(--sand);
  --color-text: var(--night);
  --color-text-muted: var(--slate);
  --color-border: var(--night);
  --color-border-inner: var(--slate);
  --color-primary: var(--gold);
  --color-on-primary: var(--cream);
  --color-link: var(--teal);
  --color-special: var(--plum);
  --color-success: var(--forest);
  --color-danger: var(--crimson);
  --color-focus: var(--teal);
}
```

`data-theme` is always set on `<html>` before first paint by the inline theme script (see [AGENTS.md](../AGENTS.md)). That script resolves the first visit from `prefers-color-scheme`, so no media query is needed in CSS.

Map the semantic tokens into Tailwind's theme (for example `bg-bg`, `text-text`, `border-border`) and disable Tailwind's default colors.

## Typography

| Role | Font | Use |
| --- | --- | --- |
| Display | **Press Start 2P** | Titles, section headings, buttons, menu items, short labels. Never body text. |
| Body | **VT323** | Paragraphs, timeline text, tooltips, descriptions |
| Body fallback | System sans-serif (`system-ui, sans-serif`) | Fallback stack while VT323 loads, and the swap-in if VT323 fails the phone check |

Both fonts are on Google Fonts under the SIL Open Font License. Load them with `next/font/google` (self-hosted at build, no extra dependency).

Decision: the body font is **VT323** (the planning doc offers "VT323 or a common sans"). It gets a readability check on a real phone in M1 (see [ROADMAP.md](ROADMAP.md)); if it fails, switch to the system sans and use its size scale below.

### Size scale

Press Start 2P is drawn on an 8 px grid. Use multiples of 8 so glyphs stay crisp.

| Token | Font | Mobile | Desktop | Use |
| --- | --- | --- | --- | --- |
| `--text-display-xl` | Press Start 2P | 24px | 40px | Start screen title |
| `--text-display-l` | Press Start 2P | 16px | 24px | Section titles |
| `--text-display-m` | Press Start 2P | 16px | 16px | Buttons, menu items, card titles |
| `--text-display-s` | Press Start 2P | 8px | 8px | Tiny labels (level, badge). Never more than two words. |
| `--text-body-l` | VT323 | 24px | 28px | Start subtitle, lead paragraphs |
| `--text-body` | VT323 | 22px | 24px | Body text |
| `--text-body-s` | VT323 | 20px | 20px | Tooltips, captions |

VT323 is small for its point size, so body sizes are higher than usual. **Body text never goes below 20px.** If the body font changes to a system sans, rescale to 16 / 18 / 20 px.

Line height: 1.5 for display text, 1.3 for VT323, 1.5 for sans. No letter-spacing on pixel fonts, and no synthetic bold on Press Start 2P.

## Spacing and borders

- Spacing unit: **4 px**. Use multiples of 4 for padding, gaps and margins.
- Borders are solid and in whole pixels: 2 px or 4 px. No `border-radius` except the 1-step "pixel" corner used on dialog boxes (see below).
- No blur, no soft shadows, no gradients. A hard 4 px offset shadow in `--color-bg` is allowed on cards and buttons.

## Components

Each component lists its look, behavior and accessibility rules. Copy comes from [CONTENT.md](CONTENT.md).

### RPG dialog box

The base container for text.

- `--color-surface` background, **double border**: outer 4 px `--color-border`, 2 px gap of `--color-surface`, inner 2 px `--color-border-inner`.
- Pixel corners: clip the outer corners by one border step (for example with `clip-path` or stacked box-shadows), instead of `border-radius`.
- Padding 16 px (mobile) / 24 px (desktop).
- Optional **typing effect** that reveals the text letter by letter. Rules:
  - The full text is in the DOM from the start (visually revealed, not injected), so screen readers and search engines get it.
  - Click, tap or Enter completes the text at once.
  - Off under `prefers-reduced-motion`.
  - Never on long paragraphs; use it only on short lines (one or two sentences).

### Blinking menu cursor

- A right-pointing triangle (▶) in `--color-primary`, drawn as a pixel sprite or CSS, placed left of the active menu item.
- Blinks in steps (on/off, no fade), around 2 times per second.
- The active item is the one with focus or hover. Keyboard: Up/Down (or Left/Right in horizontal menus) move the cursor, Enter selects.
- The cursor is decorative (`aria-hidden`). Focus is also shown with a 2 px `--color-focus` outline so it is visible without the cursor.
- Under reduced motion: the cursor is shown but does not blink.

### Pause menu

The fixed navigation.

- Fixed to a corner (top right on desktop). On mobile, a "PAUSE" button opens it as a full-screen overlay.
- Contents: one item per section (from `menu.*`), "skip to summary", then the settings group (theme and language toggles).
- Uses the dialog box style and the blinking cursor.
- Accessibility: a `<nav>` with a list of links to section anchors. The mobile overlay traps focus while open, closes on Escape and on selection, and returns focus to the "PAUSE" button.
- Selecting an item scrolls to the section (instant scroll under reduced motion) and moves focus to its heading.

### Character select card

The About section.

- Avatar in a framed slot on the left (on top on mobile), shown at an integer scale.
- To the right: name, class, specialty, attributes list and bio, in a dialog box.
- Attributes render as a list. If values are set later, show them as RPG-style levels (for example "LV 3"), never as percentages.

### World map stage

The Timeline.

- A path of stages connected by a dotted pixel line, top to bottom on mobile and left to right (wrapping) on desktop. This is a static layout, not a walkable map (that is version 2).
- Each stage: a node (map tile icon), world number and title, and years. Selecting a stage opens its text in a dialog box beneath it.
- The offline stage (MercurioChat) shows the "powered off" icon and an "Offline" badge in `--color-danger`, plus visually dimmed node art. The text stays full-contrast.
- The last stage ("???") is styled as locked-looking but is **not locked**: it opens and links to Partnerships.
- Keyboard: stages are buttons in order; arrow keys move between them, Enter opens. Use `aria-expanded` on each stage button.

### Inventory slot

The Skills section.

- Grid of square slots grouped by category, each category with its own heading.
- Each slot: a framed square with the item's pixel glyph (24 px grid shown at 2x = 48 px), and the item name as HTML text below it.
- Glyphs are generic pixelarticons, not brand logos (see [ASSETS.md](ASSETS.md#skill-icons) for why). Color: `--color-link` by default; the slot border uses the category color: Front-end `--color-link`, Back-end `--color-primary`, Platforms `--color-special`, Creative & Strategy `--color-success`.
- Hover, focus or tap opens a small dialog-box **tooltip** with "Where I use it" and the usage text. If the usage text is still TODO, the slot has no tooltip.
- The slot is a `<button>` with `aria-describedby` pointing at the tooltip. Arrow keys move through the grid; Enter or Space toggles the tooltip; Escape closes it; tapping outside closes it.
- No percentage bars. Category levels are optional (see CONTENT.md).

### Cartridge card

The Projects section.

- Shaped like a SNES cartridge: a body with a label area for the project art and a grip ridge at the top.
- The label area uses the project's own look (Lords of Logic: terminal style). Everything outside the label uses the portfolio palette.
- Below the label: name, genre, description, "built with", and buttons ("PLAY NOW", optional "BEHIND THE SCENES").
- "PLAY NOW" is a link (`<a target="_blank" rel="noopener">`) styled as a button, and fires the `play_click` analytics event.
- **Coming soon** variant: grayed-out label with "???", the "COMING SOON" label, no buttons.
- Cards sit in a horizontal row on desktop and stack on mobile. Arrow keys move between cartridges.

### Buttons

- Primary: `--color-primary` fill, `--color-on-primary` text, 4 px border in `--color-border`, hard offset shadow. Pressed state shifts the button by the shadow offset and removes the shadow.
- Secondary: `--color-surface` fill, `--color-text` text, same border.
- Text in the pixel font, in caps. Minimum touch target 44 × 44 px.

### Theme, language and sound toggles

- Styled as options in a game "settings" menu: a label and a two-option switch, for example `THEME  ▶DARK  LIGHT`, `LANGUAGE  ▶EN  PT-BR` and `SOUND  ▶OFF  ON`.
- Placed in the corner, inside the pause menu on mobile and next to it on desktop.
- Theme toggle: a `<button>` with `aria-pressed`, or a two-option radio group. It updates `data-theme` immediately and saves the choice (see AGENTS.md).
- Language toggle: links to the other locale's URL (`/` and `/pt-BR/`), with `hreflang` and `lang` set on each.
- Sound toggle: a `<button>` with `aria-pressed`, showing the `volume-x` / `volume-2` glyph next to the label. Off by default; the choice is saved (see [Sound](#sound)).

## Pixel art rules

- Every pixel-art image or icon is shown at an **integer scale** (2x, 3x, 4x) of its source size. Never at fractional sizes, and never resized by CSS to "fit".
- **Bitmaps** (avatar, cartridges, map tiles, favicon): PNG at native size, no anti-aliasing (hard edges, transparent background), always with `image-rendering: pixelated`.
- **Icons** (pixelarticons): inline SVG on a 24×24 grid, rendered at 24, 48 or 72 px only, with `shape-rendering="crispEdges"`, colored with `currentColor`. `image-rendering` does not apply to inline SVG; `crispEdges` does the same job. Decorative icons get `aria-hidden="true"`.
- Use explicit `width` and `height` attributes equal to the scaled size to avoid layout shift.
- Do not use `next/image` optimization on pixel art (static export disables it anyway); use plain `<img>` or `next/image` with `unoptimized`.
- Pixel art uses palette colors only, except project cartridge labels.

## Motion

Allowed, and short:

| Effect | Where | Spec |
| --- | --- | --- |
| Blinking cursor | Menus | Step on/off, ~500 ms per state |
| Pulsing "PRESS START" | Start screen | Step blink or 2-step brightness change, ~1 s cycle |
| Typing effect | Short dialog lines | ~30 ms per character, skippable |
| Screen transition | Opening a dialog / stage | ≤ 200 ms, stepped (for example 4 frames), no easing curves |

Rules:

- Nothing may delay reading. Text is always readable without waiting for an animation.
- Use `steps()` timing, not smooth easing, to keep the 16-bit feel.
- Under `prefers-reduced-motion: reduce`: no typing effect, no blinking, no pulsing, no transitions, instant scrolling.
- No parallax, no scroll-jacking, no autoplaying video.

## Sound

Short menu sound effects are part of version 1. Music is version 2.

- **Off by default.** Sound plays only after the visitor turns it on with the sound toggle. Never autoplay.
- Effects: cursor move (when the menu cursor changes item) and select (Enter, tap or click on a menu item, stage, slot or cartridge button). Nothing else.
- Synthesized with the **Web Audio API** (square-wave blips, under 100 ms, low volume) instead of audio files: no assets to source or license, no dependency, nothing to download. Create the `AudioContext` on the click that turns sound on, as browsers require a user gesture.
- The setting persists in `localStorage` (in try/catch), like the theme.
- Sound never carries information that isn't also shown visually.
- Turning sound on is a separate choice from reduced motion; `prefers-reduced-motion` does not change sound.
