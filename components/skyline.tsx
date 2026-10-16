import type { CSSProperties } from "react";

import { HEIGHT, random, skylineLayers, TILE, type SkylineLayerName } from "@/lib/skyline";

// Sunset city behind the title screen: banded dusk sky, a striped setting
// sun, the first stars and two drifting building layers (generated in
// lib/skyline.ts). Drift and twinkle stop under reduced motion.

const starRandom = random(99);
const stars = Array.from({ length: 45 }, (_, index) => ({
  x: Math.floor(starRandom() * 320),
  y: Math.floor(starRandom() * 50),
  big: starRandom() < 0.12,
  twinkle: index % 4 === 0,
}));

function Layer({ name, className }: { name: SkylineLayerName; className: string }) {
  const twinkles = skylineLayers[name].windows.filter((light) => light.twinkle);
  // The static file holds two tiles side by side, so translateX(-50%) loops
  // seamlessly; only the twinkling windows are drawn inline on top.
  return (
    <div className={`absolute bottom-0 left-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- pixel art, no optimization wanted */}
      <img src={`/skyline-${name}.svg`} alt="" className="pixelated absolute inset-0 h-full w-full" />
      <svg
        viewBox={`0 0 ${TILE * 2} ${HEIGHT}`}
        shapeRendering="crispEdges"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        {[0, TILE].map((offset) =>
          twinkles.map((light, index) => (
            <rect
              key={`${offset}-${index}`}
              className="twinkle"
              style={{ "--i": index % 5 } as CSSProperties}
              x={light.x + offset}
              y={light.y}
              width={1}
              height={2}
              fill={light.color}
            />
          )),
        )}
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
        name="far"
        className="drift-slow h-[280px] w-[2560px] md:h-[420px] md:w-[3840px]"
      />
      <Layer
        name="near"
        className="drift-fast h-[280px] w-[2560px] md:h-[420px] md:w-[3840px]"
      />
      <div className="scanlines" />
    </div>
  );
}
