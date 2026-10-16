# Style guide: arcade design system

**Direction (updated October 16, 2026):** 32-bit / modern pixel art, in the spirit of late-90s arcade cabinets (Neo Geo-era fighting and action games). That means chunky marquee logos with banded gradients and hard outlines, color ramps instead of a tiny fixed palette, neon glow, CRT scanlines, night cityscapes, and animated sprites. The original planning doc asked for a Super Nintendo (16-bit) look; the owner moved the direction to this arcade style after reviewing version 1.

Always true, whatever the style:

- Content is real HTML text, never baked into images or `<canvas>`.
- Nothing animated delays reading, and everything stops under `prefers-reduced-motion`.
- Every text/background pair meets WCAG AA (4.5:1).
- Pixel art is shown at integer scales with hard edges.

## Color

### Palette

Ramps rather than single colors, so sprites and panels can be shaded. These are the only colors on the site, except inside project cartridge labels, which use their project's own look. The source of truth is `:root` in `app/globals.css`.

| Ramp | Colors |
| --- | --- |
| Night | `void` #07061a · `night` #0f0e2a · `dusk` #1c1a4a · `indigo` #2c2870 · `slate` #4a4680 · `haze` #a09cc8 |
| Warm | `crimson` #b3141a · `red` #ff5a5f · `orange` #ff8a3d · `yellow` #ffd23f · `butter` #fff3b0 · `gold` #7a5600 |
| Pink | `plum` #a3006e · `magenta` #ff5ccf · `pink` #ffb3e6 |
| Cool | `teal` #006b75 · `ocean` #00a3c4 · `cyan` #3fe0f0 · `ice` #b8fbff |
| Green | `forest` #1d6b2a · `green` #5be36b |
| Neutral | `cream` #f4ecd8 · `sand` #e6dcc2 · `white` #ffffff |

**Sprite ramps.** Character and prop sprites (avatar, dev scene) may also use these material ramps. They are only for pixel art, never for UI:

| Material | Colors |
| --- | --- |
| Skin | #f2c29b · #c98a64 |
| Hair | #a0705a · #6b3e2e · #3a2218 |
| Wood | #a87e66 · #8d6650 · #6b4a3a |
| Steel | #8a90b0 · #3b3f5c |
| Accent | #ff8a8d (plant pot highlight) · #8a3a3a (mouth) |

### Theme tokens

Components use semantic tokens only. Fixed palette names (`bg-void`, `text-cyan`…) are allowed only on surfaces that are always dark in both themes: the title screen, the boot screen, the HUD, the footer and cartridges.

| Token | Dark (default) | Light |
| --- | --- | --- |
| `--bg` | night | cream |
| `--bg-deep` | void | sand |
| `--surface` | dusk | white |
| `--surface-raised` | indigo | sand |
| `--text` | cream | night |
| `--text-muted` | haze | slate |
| `--border` | void | night |
| `--bevel-light` / `--bevel-dark` | slate / void | white / haze |
| `--primary` | yellow | gold |
| `--on-primary` | void | cream |
| `--link` | cyan | teal |
| `--special` | magenta | plum |
| `--success` | green | forest |
| `--danger` | red | crimson |
| `--glow-strength` | 1 | 0 (no neon glow on light backgrounds) |

### Measured contrast

| Pair | Ratio |
| --- | --- |
| cream on dusk / indigo | 13.76 / 10.85 |
| haze on dusk / indigo | 6.24 / 4.92 |
| yellow / cyan / magenta / green / red on dusk | 11.22 / 10.13 / 5.93 / 9.76 / 5.31 |
| void on yellow / orange (primary button bands) | 13.85 / 8.53 |
| void on cyan / ocean (secondary button bands) | 12.51 / 6.70 |
| cream on void | 16.99 |
| night on white / sand | 18.81 / 13.78 |
| slate on white / sand | 8.47 / 6.20 |
| gold / teal / plum / forest / crimson on white | 6.65 / 6.25 / 7.55 / 6.59 / 6.93 |
| gold / teal / plum / forest on sand | 4.87 / 4.58 / 5.53 / 4.82 |

### Theme behavior

- Dark is the default; the light theme is an "arcade in daylight" version (cream and white surfaces, darker accents, no glow).
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

`.arcade-text` is the marquee treatment: Jersey 10 in caps, a banded gradient fill (butter, yellow, orange, red), a 2 px void outline and a stepped plum/void extrusion. `.arcade-text-cool` swaps the fill for the ice-to-teal ramp (used on "JUNIOR"). In the light theme, `.section-title` drops the gradient for solid night ink with a haze shadow, so titles stay readable on cream.

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

- **Skyline**: banded night sky with a magenta horizon, twinkling stars, a pixel moon, and two building layers with lit windows drifting at different speeds (parallax). It is generated from a fixed seed, so it is the same pixel art on every build.
- **Logo**: "LEANDRO" in the warm ramp and "JUNIOR" in the cool ramp, the `FULL STACK DEVELOPER` tagline between two cyan rules, and a blinking `INSERT COIN`.
- **Dev scene**: the developer at his desk (see [Pixel art](#pixel-art)), shown at 3x / 4x / 5x.
- **Buttons**: "PRESS START" (primary, pulsing frame) and the contact button (secondary). Both are visible on the first screen.

### Panels

`.panel` is the base container: a 3 px outline, beveled inner edges (light top-left, dark bottom-right), a banded fill (raised strip on top, deep strip at the bottom) and a hard 6 px drop shadow. `.panel-glow` adds a neon border and glow in the color set by `--glow` (no glow in the light theme).

### Buttons

`.arcade-button` is a chunky cabinet button: Pixelify Sans bold caps, a 3 px void outline, a two-band gradient, an inner highlight and a 6 px 3D base. Hover lifts it 2 px, and pressing it sinks it into the base.

- Primary: yellow / orange bands.
- Secondary: cyan / ocean bands.
- Ghost: surface fill with bevels (the PAUSE button).

The minimum height is 52 px (44 px for the HUD button).

### Chips

`.chip` is a small outlined label: bold caps, tracked, colored with `currentColor`. It is used for stage numbers, statuses (`NOW PLAYING`, `OFFLINE`), categories and HUD tags.

### Section titles

Every section opens with a `STAGE 0X` line (a cyan rule plus a tracked label) over a big arcade title.

### Player select (About)

- A **selected** card: the portrait at 7x on a banded sunset backdrop with scanlines, framed by a glowing panel, with the name plate below.
- Under it, a row of character slots: Leandro picked, then a `2P?` slot and locked `?` slots, hinting at the partnership.
- To the right, a panel with class, specialty, attribute chips (one accent each) and the bio.

### Career timeline

Stages are stacked **one under another, top to bottom, in time order**, linked by a dashed vertical track like a level path.

- Each stage is a square node (map pin, power-off for MercurioChat, `?` for the next stage) next to a panel.
- The panel holds a `STAGE N` chip, the years in Jersey 10, an arcade-text title and the text, always visible.
- The current stage (2025–present) gets a `NOW PLAYING` chip and a yellow glow. MercurioChat gets a red `OFFLINE` chip. The last stage ("???") glows magenta and links to Partnerships.
- Panels fade in as they scroll into view (stepped, 320 ms), only when motion is OK.

### Inventory

- A grid of 96 px+ slots per category. Each slot is a beveled `surface-raised` square with the glyph at 2x in the category accent (Front-end cyan, Back-end yellow, Platforms magenta, Creative green) and the name below.
- Hover, focus or tap **selects** a slot (`aria-pressed`), with a glowing accent border.
- The selected item shows in an **item description panel**: sticky beside the grid on ≥ 1024 px, inline under the selected item's category on smaller screens. It holds the glyph at 3x, a category chip, the name and "Where I use it".
- **Nothing floats over the grid.** This replaced the hover tooltip from version 1.
- Screen readers get the usage text through `aria-describedby` on the slot. The panel is a visual copy (`aria-hidden`).
- Arrow keys move between slots.

### Cartridges

Big dark arcade carts: plastic shell with grip ridges, and a label window with scanlines that shows the project's own look (Lords of Logic: a green-on-void terminal with a blinking cursor). Below the label: arcade-text name, genre, built with, description and "PLAY NOW". The coming-soon cart shows "???" on a static-noise label.

### Co-op screen (Partnerships)

- Two player panels: `1P · LEANDRO` (cyan) + `2P · YOU` (magenta, with a blinking "PRESS START TO JOIN").
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
  - Contents: the developer in a hoodie on an office chair, typing at a desk; a monitor with colored code lines; a keyboard, a plant and a steaming mug.
  - Animation: the hands alternate (typing), code lines type out and clear in sequence, the cursor and power LED blink, the head bobs, and steam rises.
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
