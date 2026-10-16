# Style guide: arcade design system

**Direction (updated October 16, 2026):** 32-bit / modern pixel art, in the spirit of late-90s arcade cabinets (Neo Geo-era fighting and action games). That means chunky marquee logos with banded gradients and hard outlines, color ramps instead of a tiny fixed palette, neon glow, CRT scanlines, night cityscapes, and animated sprites. The original planning doc asked for a Super Nintendo (16-bit) look; the owner moved the direction to this arcade style after reviewing version 1.

Always true, whatever the style:

- Content is real HTML text, never baked into images or `<canvas>`.
- Nothing animated delays reading, and everything stops under `prefers-reduced-motion`.
- Every text/background pair meets WCAG AA (4.5:1).
- Pixel art is shown at integer scales with hard edges.

## Color

### Palette: "Metal Slug"

Desert browns lit by a sunset, with amber as the hero color and sky blue as the cool counterpoint. There is no purple: backgrounds are coffee and earth browns. The owner chose it on October 16, 2026, replacing the earlier neon violet/cyan palette. These are the only UI colors on the site, except inside project cartridge labels, which use their project's own look. The source of truth is `:root` in `app/globals.css`.

| Ramp | Colors |
| --- | --- |
| Earth (backgrounds) | `void` #0e0a06 · `night` #15100b · `dusk` #241b12 · `umber` #35281a · `leather` #574330 · `clay` #7a4a26 · `khaki` #b8a07a |
| Fire (primary) | `rust` #8c3b1f · `orange` #e8761e · `amber` #ffb000 · `butter` #ffe08a · `bronze` #7a4900 |
| Reds | `coral` #ff6a4d · `red` #ff4b4b · `brick` #9c3018 · `crimson` #a3261a |
| Sky | `deepsea` #195a6d · `lagoon` #3a9fb5 · `sky` #4fc3d9 · `ice` #a8e6f0 |
| Greens | `army` #3f5c10 · `olive` #9fd14a |
| Paper | `parchment` #f6e7c8 · `sand` #e9d6b0 · `linen` #f3e6cc · `paper` #fffaf0 |

The light theme also uses #66513b for muted text.

**Sprite ramps.** Character and prop sprites may also use these material ramps. They are only for pixel art, never for UI:

| Material | Colors |
| --- | --- |
| Skin | #f2c29b · #c98a64 |
| Hair | #a0705a · #6b3e2e · #3a2218 |
| Wood | #a87e66 · #8d6650 · #6b4a3a |
| Gunmetal | #8a8178 · #4a4540 |
| Mouth | #8a3a3a |

### Theme tokens

Components use semantic tokens only. Fixed palette names (`bg-void`, `text-sky`, `text-amber`…) are allowed only on surfaces that are always dark in both themes: the title screen, the boot screen, the HUD, the footer and cartridges.

| Token | Dark (default) | Light |
| --- | --- | --- |
| `--bg` | night | linen |
| `--bg-deep` | void | sand |
| `--surface` | dusk | paper |
| `--surface-raised` | umber | sand |
| `--text` | parchment | night |
| `--text-muted` | khaki | #66513b |
| `--border` | void | night |
| `--bevel-light` / `--bevel-dark` | leather / void | paper / khaki |
| `--primary` | amber | bronze |
| `--on-primary` | void | linen |
| `--link` | sky | deepsea |
| `--special` | coral | brick |
| `--success` | olive | army |
| `--danger` | red | crimson |
| `--glow-strength` | 1 | 0 (no glow on light backgrounds) |

### Measured contrast

| Pair | Ratio |
| --- | --- |
| parchment on dusk / void | 13.85 / 16.14 |
| khaki on dusk / umber | 6.73 / 5.68 |
| amber / sky / coral / olive / red on dusk | 9.24 / 8.17 / 5.98 / 9.43 / 5.13 |
| void on amber / orange (primary button bands) | 10.77 / 6.61 |
| void on sky / lagoon (secondary button bands) | 9.52 / 6.39 |
| night on paper / sand | 18.17 / 13.24 |
| #66513b on paper / sand | 7.20 / 5.24 |
| bronze / deepsea / brick / army / crimson on paper | 7.26 / 7.41 / 7.08 / 7.34 / 7.08 |
| bronze / deepsea / brick / army / crimson on sand | 5.29 / 5.40 / 5.16 / 5.35 / 5.16 |
| linen on bronze (light primary button) | 6.11 |

Avoid `red` text on `umber` (4.33). Danger text sits on `dusk` panels.

Text over the title-screen sky must sit on a backing: the subtitle uses `bg-void/80`. The lower sky bands (clay, rust, orange, amber) are too bright for parchment text.

### Theme behavior

- Dark is the default. The light theme is "arcade in daylight": linen and paper surfaces, darker accents, no glow.
- The **title screen, boot screen, HUD, footer and cartridges stay dark in both themes.** They are "screens" and physical objects, like a cabinet monitor.
- The theme is applied before first paint by the inline script in `<head>` (see [AGENTS.md](../AGENTS.md)).

## Typography

| Role | Font | Use |
| --- | --- | --- |
| Display | **Jersey 10** | The logo, section titles, big numbers, stage titles, item names |
| UI and body | **Pixelify Sans** (variable 400–700) | Body text, buttons, labels, chips, HUD |

Both are Google Fonts under the SIL Open Font License, self-hosted with `next/font/google`. Pixelify Sans is a modern pixel face that stays readable at body sizes; Jersey 10 is a condensed arcade marquee face.

### Size scale (Tailwind tokens)

| Token | Size | Use |
| --- | --- | --- |
| `text-logo-l` / `text-logo` | 128 / 72 px | Title-screen logo (desktop / mobile) |
| section titles | 80 / 48 px | `SectionTitle` (desktop / mobile) |
| `text-title-l` | 56 px | Big headings inside sections |
| `text-title` | 40 px | Stage titles, cartridge names |
| `text-title-s` | 28 px | Category names, item names, years |
| `text-body-l` | 22 px | Lead paragraphs |
| `text-body` | 19 px | Body text (18 px base on mobile) |
| `text-body-s` | 17 px | Secondary text |
| `text-label` | 14 px | Labels and chips, bold, uppercase, tracked |

Body text never goes below 17 px. Labels in caps use letter-spacing (0.08–0.35em).

### Arcade text

`.arcade-text` is the marquee treatment: Jersey 10 in caps, a banded gradient fill (butter, amber, orange, rust), a 2 px void outline and a stepped clay/void extrusion. `.arcade-text-cool` swaps the fill for the sky ramp (ice, sky, lagoon, deepsea), used on "JUNIOR". In the light theme, `.section-title` drops the gradient for solid night ink with a khaki shadow, so titles stay readable on cream.

## Components

### HUD

A fixed top bar (64 px, void, 3 px bottom border) on every screen:

- Left: `1P` chip and "LEANDRO JR", linking to the title screen.
- Center (≥ 768 px): `STAGE 0X` and the name of the section on screen, tracked with an IntersectionObserver.
- Right: the PAUSE button, which opens the pause menu.

`scroll-padding-top` keeps focused headings clear of it.

### Boot screen

An arcade boot sequence over the title screen, **once per browser session**:

1. "LJ ARCADE SYSTEM", then three system checks with green `OK`s.
2. A stepped loading bar.
3. The logo drops in with the tagline.

It lasts about 2.6 s. Any key, click or tap skips it. It never appears with reduced motion or without JavaScript (the `<head>` script decides by adding `boot-active`), and CSS hides it after 3.4 s even if React never runs. It is `aria-hidden`; the real title is the HTML `<h1>` underneath.

### Title screen

Always dark. Layers, back to front:

- **Skyline**: a banded dusk sky (void at the top through dusk, umber, clay, rust and orange to amber at the horizon), the first stars twinkling, a pixel-art setting sun cut by horizontal stripes, and two building silhouettes (umber and void) with lit windows, drifting at different speeds (parallax). It is generated from a fixed seed in `lib/skyline.ts`, so it is the same pixel art on every build. The building layers are exported as static files (`/skyline-far.svg`, `/skyline-near.svg`, via force-static route handlers) to keep thousands of rects out of the HTML. Only about 14 twinkling windows per layer are drawn inline.
- **Logo**: "LEANDRO" in the warm ramp and "JUNIOR" in the cool ramp, the `FULL STACK DEVELOPER` tagline between two sky-blue rules, a subtitle on a dark backing, and a blinking `INSERT COIN`.
- **Dev scene**: the developer at his desk (see [Pixel art](#pixel-art)), shown at 3x / 4x / 5x.
- **Buttons**: "PRESS START" (primary, pulsing frame) and the contact button (secondary). Both are visible on the first screen.

### Panels

`.panel` is the base container: a 3 px outline, beveled inner edges (light top-left, dark bottom-right), a banded fill (raised strip on top, deep strip at the bottom) and a hard 6 px drop shadow. `.panel-glow` adds a neon border and glow in the color set by `--glow` (no glow in the light theme).

### Buttons

`.arcade-button` is a chunky cabinet button: Pixelify Sans bold caps, a 3 px void outline, a two-band gradient, an inner highlight and a 6 px 3D base. Hover lifts it 2 px, and pressing it sinks it into the base.

- Primary: amber / orange bands.
- Secondary: sky / lagoon bands.
- Ghost: surface fill with bevels (the PAUSE button).

The minimum height is 52 px (44 px for the HUD button).

### Chips

`.chip` is a small outlined label: bold caps, tracked, colored with `currentColor`. It is used for stage numbers, statuses (`NOW PLAYING`, `OFFLINE`), categories and HUD tags.

### Section titles

Every section opens with a `STAGE 0X` line (a sky-blue rule plus a tracked label) over a big arcade title.

### Player select (About)

- A **selected** card: the portrait at 7x on a banded sunset backdrop (umber, clay, rust, orange) with scanlines, framed by a glowing panel, with the name plate below.
- Under it, a row of character slots: Leandro picked, then a `2P?` slot and locked `?` slots, hinting at the partnership.
- To the right, a panel with class, specialty, attribute chips (one accent each) and the bio.

### Career timeline

Stages are stacked **one under another, top to bottom, in time order**, linked by a dashed vertical track like a level path.

- Each stage is a square node (map pin, power-off for MercurioChat, `?` for the next stage) next to a panel.
- The panel holds a `STAGE N` chip, the years in Jersey 10, an arcade-text title and the text, always visible.
- The current stage (2025–present) gets a `NOW PLAYING` chip and an amber glow. MercurioChat gets a red `OFFLINE` chip. The last stage ("???") glows coral and links to Partnerships.
- Panels fade in as they scroll into view (stepped, 320 ms), only when motion is OK.

### Inventory

- A grid of 96 px+ slots per category. Each slot is a beveled `surface-raised` square with the glyph at 2x in the category accent (Front-end sky, Back-end amber, Platforms coral, Creative olive) and the name below.
- Hover, focus or tap **selects** a slot (`aria-pressed`), with a glowing accent border.
- The selected item shows in an **item description panel**: sticky beside the grid on ≥ 1024 px, inline under the selected item's category on smaller screens. It holds the glyph at 3x, a category chip, the name and "Where I use it".
- **Nothing floats over the grid.** This replaced the hover tooltip from version 1.
- Screen readers get the usage text through `aria-describedby` on the slot. The panel is a visual copy (`aria-hidden`).
- Arrow keys move between slots.

### Cartridges

Big dark arcade carts: plastic shell with grip ridges, and a label window with scanlines that shows the project's own look (Lords of Logic: an olive-on-void terminal with a blinking cursor). Below the label: arcade-text name, genre, built with, description and "PLAY NOW". The coming-soon cart shows "???" on a static-noise label.

### Co-op screen (Partnerships)

- Two player panels: `1P · LEANDRO` (sky) + `2P · YOU` (coral, with a blinking "PRESS START TO JOIN").
- A `CO-OP MODE` result line.
- The four steps as `ROUND 1–4` panels.
- A glowing contact panel with the email and LinkedIn buttons.

### Pause menu

The PAUSE button in the HUD opens a panel:

- Sections listed in Jersey 10 caps, with the blinking cursor.
- "Skip to summary".
- Settings: theme, language and sound, with the selected option marked by the cursor.

On mobile it fills the screen below the HUD. Escape closes it, focus is trapped while it is open and returns to the PAUSE button, and arrow keys move the cursor.

### Credits (footer)

Always dark with scanlines:

- "THANK YOU FOR PLAYING".
- An arcade-text "CREDITS" title.
- Links, and credits for icons and fonts.
- A blinking "CONTINUE?" that jumps back to the title screen.

## Pixel art

- Sprites are drawn as SVG rects on a pixel grid (`shape-rendering="crispEdges"`) and shown only at **integer scales**. Bitmaps (favicons, Open Graph image) are generated by `npm run assets` with nearest-neighbor upscaling.
- **Portrait**: 32×32, with ramps for hair, skin and hoodie and a dark outline (`content/avatar.ts`). It is a placeholder until the final avatar exists.
- **Dev scene**: 96×64 (`components/dev-scene.tsx`).
  - Contents: the developer in a hoodie on an office chair, sitting close to the desk so his arms stay short and natural; a monitor with colored code lines; a keyboard, a plant and a steaming mug to the right of the keyboard.
  - Idle details: the hands alternate (typing), code lines type out and clear in sequence, the cursor and power LED blink, the head bobs, and steam rises.
  - 14 s story loop:
    - 0–38%: typing.
    - 38–53%: he lifts the mug to his chest, sips at his mouth, and puts it back.
    - 53–66%: typing.
    - 66–84%: an ERROR dialog flashes on the monitor. At 68% he jumps 3 px with his hands up, wide eyes, an open mouth, a sweat drop and a "!" bubble.
    - 84–100%: back to typing.
  - Poses are separate groups swapped by `opacity` keyframes with `steps(1, end)`. Under reduced motion only the typing pose shows, still.
- **Icons**: pixelarticons (24×24 grid) at 1x/2x/3x, colored with `currentColor`. No brand logos (see [ASSETS.md](ASSETS.md#skill-icons)).
- **Scanlines**: `.scanlines` overlays 1 px dark lines every 3 px on always-dark screens.

## Motion

| Effect | Where | Spec |
| --- | --- | --- |
| Boot sequence | First visit per session | ≈2.6 s, skippable, stepped |
| Logo drop-in | Title screen, boot | 600 ms, `steps(6)` |
| PRESS START pulse | Title screen | Frame outline on/off, 1.2 s |
| Blink | INSERT COIN, cursors, JOIN, CONTINUE | 1–1.2 s, `steps(1)` |
| Skyline drift | Title screen | 180 s / 100 s linear loops (parallax) |
| Twinkle | Stars, windows | 3 s, `steps(3)`, staggered |
| Sprite loops | Dev scene | Typing at 260 ms per frame, code lines 6 s cycle |
| Scroll reveal | Timeline, panels | 320 ms, `steps(4)`, once |
| Screen-in | Pause menu | 160 ms wipe, `steps(4)` |
| Button press | Buttons | 80 ms, `steps(2)` |

Rules:

- Prefer `steps()` timing for the pixel feel. The only smooth (linear) motion allowed is the slow skyline drift.
- Under `prefers-reduced-motion: reduce`, everything above is off: no boot screen, no reveals (content is simply visible), no blinking, drifting or sprite loops, and instant scrolling.
- No scroll-jacking, no autoplaying video.

## Sound

- **Off by default.** The toggle is in the pause menu, and the choice persists in `localStorage` (in try/catch).
- Short square-wave blips synthesized with the Web Audio API: cursor move and select. No audio files, no music in version 1.
- Sound never carries information that is not also shown visually.
