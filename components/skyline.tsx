import type { CSSProperties } from "react";

// Night city behind the title screen: banded sky, stars, moon and two
// drifting building layers. Generated from a fixed seed, so every build
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

const far = buildLayer(7, 40, 78, ["#2c2870"]);
const near = buildLayer(23, 22, 56, ["#ffd23f", "#3fe0f0", "#ff5ccf", "#fff3b0"]);

const starRandom = random(99);
const stars = Array.from({ length: 70 }, (_, index) => ({
  x: Math.floor(starRandom() * 320),
  y: Math.floor(starRandom() * 80),
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

export function Skyline() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Banded sky with a magenta horizon glow */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07061a_0_38%,#0f0e2a_38%_56%,#1c1a4a_56%_68%,#2c2870_68%_80%,#a3006e_80%_88%,#ff5ccf_88%)]" />
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
            fill={star.big ? "#fff3b0" : "#a09cc8"}
          />
        ))}
        {/* Moon */}
        <rect x="232" y="16" width="10" height="14" fill="#fff3b0" />
        <rect x="230" y="18" width="14" height="10" fill="#fff3b0" />
        <rect x="236" y="20" width="3" height="3" fill="#ffd23f" />
        <rect x="240" y="25" width="2" height="2" fill="#ffd23f" />
      </svg>
      <Layer
        layer={far}
        fill="#1c1a4a"
        className="drift-slow h-[280px] w-[2560px] md:h-[420px] md:w-[3840px]"
      />
      <Layer
        layer={near}
        fill="#07061a"
        className="drift-fast h-[280px] w-[2560px] md:h-[420px] md:w-[3840px]"
      />
      <div className="scanlines" />
    </div>
  );
}
