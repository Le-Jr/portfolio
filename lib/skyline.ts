// Pixel-art city generator for the title screen (components/skyline.tsx).
// Fixed seeds, so every build renders the same skyline. The building layers
// are served as static SVG files (app/skyline-*.svg routes) to keep thousands
// of window rects out of the page HTML; only a few twinkling windows are
// rendered inline so they can animate.

export const TILE = 640; // sprite units per repeating tile
export const HEIGHT = 140;
const MAX_TWINKLES = 14;

export function random(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Building = { x: number; width: number; height: number };
export type Light = { x: number; y: number; color: string; twinkle: boolean };

export type SkylineLayer = {
  fill: string;
  buildings: Building[];
  windows: Light[];
};

function buildLayer(
  seed: number,
  fill: string,
  minHeight: number,
  maxHeight: number,
  windowColors: string[],
): SkylineLayer {
  const next = random(seed);
  const buildings: Building[] = [];
  const windows: Light[] = [];
  let twinkles = 0;
  let x = 0;
  while (x < TILE) {
    const width = Math.min(10 + Math.floor(next() * 22), TILE - x);
    const height = minHeight + Math.floor(next() * (maxHeight - minHeight));
    buildings.push({ x, width, height });
    for (let wy = HEIGHT - height + 4; wy < HEIGHT - 6; wy += 4) {
      for (let wx = x + 2; wx < x + width - 2; wx += 3) {
        if (next() < 0.32) {
          const twinkle = next() < 0.12 && twinkles < MAX_TWINKLES;
          if (twinkle) twinkles++;
          windows.push({
            x: wx,
            y: wy,
            color: windowColors[Math.floor(next() * windowColors.length)],
            twinkle,
          });
        }
      }
    }
    x += width + (next() < 0.3 ? 2 : 0);
  }
  return { fill, buildings, windows };
}

export const skylineLayers = {
  far: buildLayer(7, "#35281a", 40, 78, ["#8c3b1f"]),
  near: buildLayer(23, "#0e0a06", 22, 56, ["#ffb000", "#4fc3d9", "#ff6a4d", "#ffe08a"]),
};

export type SkylineLayerName = keyof typeof skylineLayers;

/** The static part of a layer (buildings and steady windows), two tiles wide. */
export function layerSvg(layer: SkylineLayer): string {
  const tile = [
    ...layer.buildings.map(
      (b) => `<rect x="${b.x}" y="${HEIGHT - b.height}" width="${b.width}" height="${b.height}"/>`,
    ),
    ...layer.windows
      .filter((w) => !w.twinkle)
      .map((w) => `<rect x="${w.x}" y="${w.y}" width="1" height="2" fill="${w.color}"/>`),
  ].join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${TILE * 2} ${HEIGHT}" ` +
    `shape-rendering="crispEdges" fill="${layer.fill}">` +
    `<g>${tile}</g><g transform="translate(${TILE} 0)">${tile}</g></svg>`
  );
}
