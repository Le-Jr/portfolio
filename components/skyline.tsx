import type { CSSProperties } from "react";

// Sunset city behind the title screen: banded dusk sky, a striped setting
// sun, the first stars and two drifting building layers. Generated from a fixed seed, so every build
// renders the same pixel art. Drift and twinkle stop under reduced motion.

const TILE = 640; // sprite units per repeating tile; each layer holds two tiles
const HEIGHT = 140;

function random(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Building = { x: number; width: number; height: number };
type Light = { x: number; y: number; color: string; twinkle: boolean };

function buildLayer(seed: number, minHeight: number, maxHeight: number, windowColors: string[]) {
  const next = random(seed);
  const buildings: Building[] = [];
  const windows: Light[] = [];
  let x = 0;
  while (x < TILE) {
    const width = Math.min(10 + Math.floor(next() * 22), TILE - x);
    const height = minHeight + Math.floor(next() * (maxHeight - minHeight));
    buildings.push({ x, width, height });
    for (let wy = HEIGHT - height + 4; wy < HEIGHT - 6; wy += 4) {
      for (let wx = x + 2; wx < x + width - 2; wx += 3) {
        if (next() < 0.32) {
          windows.push({
            x: wx,
            y: wy,
            color: windowColors[Math.floor(next() * windowColors.length)],
            twinkle: next() < 0.12,
          });
        }
      }
    }
    x += width + (next() < 0.3 ? 2 : 0);
  }
  return { buildings, windows };
}

const far = buildLayer(7, 40, 78, ["#8c3b1f"]);
const near = buildLayer(23, 22, 56, ["#ffb000", "#4fc3d9", "#ff6a4d", "#ffe08a"]);

const starRandom = random(99);
const stars = Array.from({ length: 45 }, (_, index) => ({
  x: Math.floor(starRandom() * 320),
  y: Math.floor(starRandom() * 50),
  big: starRandom() < 0.12,
  twinkle: index % 4 === 0,
}));

function Layer({
  layer,
  fill,
  className,
}: {
  layer: ReturnType<typeof buildLayer>;
  fill: string;
  className: string;
}) {
  // Two copies side by side so translateX(-50%) loops seamlessly.
  return (
    <div className={`absolute bottom-0 left-0 ${className}`}>
      <svg
        viewBox={`0 0 ${TILE * 2} ${HEIGHT}`}
        shapeRendering="crispEdges"
        className="h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        {[0, TILE].map((offset) => (
          <g key={offset} transform={`translate(${offset} 0)`}>
            {layer.buildings.map((building) => (
              <rect
                key={building.x}
                x={building.x}
                y={HEIGHT - building.height}
                width={building.width}
                height={building.height}
                fill={fill}
              />
            ))}
            {layer.windows.map((light, index) => (
              <rect
                key={index}
                className={light.twinkle ? "twinkle" : undefined}
                style={light.twinkle ? ({ "--i": index % 5 } as CSSProperties) : undefined}
                x={light.x}
                y={light.y}
                width={1}
                height={2}
                fill={light.color}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

// Sun rows: a pixel circle cut by horizontal stripes that thicken toward the horizon.
const SUN_RADIUS = 34;
const sunRows = Array.from({ length: SUN_RADIUS * 2 }, (_, index) => {
  const dy = index - SUN_RADIUS + 0.5;
  const half = Math.round(Math.sqrt(SUN_RADIUS ** 2 - dy ** 2));
  const fromTop = index / (SUN_RADIUS * 2);
  const stripe = index > SUN_RADIUS && index % Math.max(2, 7 - Math.floor((index - SUN_RADIUS) / 6)) === 0;
  const color = fromTop < 0.3 ? "#ffe08a" : fromTop < 0.6 ? "#ffb000" : "#e8761e";
  return { y: index, x: 80 - half, width: half * 2, color, stripe };
}).filter((row) => !row.stripe);

function SettingSun() {
  return (
    <div className="absolute bottom-0 left-[58%] h-[280px] w-[320px] -translate-x-1/2 md:h-[420px] md:w-[480px]">
      <svg
        viewBox="0 0 160 140"
        shapeRendering="crispEdges"
        className="h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        {sunRows.map((row) => (
          <rect key={row.y} x={row.x} y={row.y + 40} width={row.width} height={1} fill={row.color} />
        ))}
      </svg>
    </div>
  );
}

export function Skyline() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Banded dusk sky: night on top, burning orange at the horizon */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--void)_0_24%,var(--night)_24%_38%,var(--dusk)_38%_49%,var(--umber)_49%_58%,var(--clay)_58%_67%,var(--rust)_67%_75%,var(--orange)_75%_84%,var(--amber)_84%)]" />
      <svg
        viewBox="0 0 320 140"
        preserveAspectRatio="xMidYMin slice"
        shapeRendering="crispEdges"
        className="absolute inset-0 h-full w-full"
        focusable="false"
      >
        {stars.map((star, index) => (
          <rect
            key={index}
            className={star.twinkle ? "twinkle" : undefined}
            style={star.twinkle ? ({ "--i": index % 5 } as CSSProperties) : undefined}
            x={star.x}
            y={star.y}
            width={star.big ? 2 : 1}
            height={star.big ? 2 : 1}
            fill={star.big ? "#ffe08a" : "#b8a07a"}
          />
        ))}
      </svg>
      <SettingSun />
      <Layer
        layer={far}
        fill="#35281a"
        className="drift-slow h-[280px] w-[2560px] md:h-[420px] md:w-[3840px]"
      />
      <Layer
        layer={near}
        fill="#0e0a06"
        className="drift-fast h-[280px] w-[2560px] md:h-[420px] md:w-[3840px]"
      />
      <div className="scanlines" />
    </div>
  );
}
