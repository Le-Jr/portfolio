import type { CSSProperties } from "react";

// Animated pixel-art scene: the developer coding at his desk.
// 96×64 sprite grid drawn with rects, shown at an integer scale.
// Animation classes (ds-*) live in app/globals.css and stop under reduced motion.

type Rect = [x: number, y: number, w: number, h: number, color: string];

const c = {
  void: "#0e0a06",
  night: "#15100b",
  dusk: "#241b12",
  umber: "#35281a",
  leather: "#574330",
  khaki: "#b8a07a",
  monitor: "#4a4540",
  monitorLight: "#8a8178",
  wood: "#8d6650",
  woodLight: "#a87e66",
  woodDark: "#6b4a3a",
  woodDeep: "#3a2218",
  hair: "#6b3e2e",
  hairDark: "#3a2218",
  hairLight: "#a0705a",
  skin: "#f2c29b",
  skinShade: "#c98a64",
  hoodie: "#4fc3d9",
  hoodieShade: "#3a9fb5",
  hoodieLight: "#a8e6f0",
  pants: "#574330",
  pantsShade: "#35281a",
  amber: "#ffb000",
  butter: "#ffe08a",
  orange: "#e8761e",
  rust: "#8c3b1f",
  coral: "#ff6a4d",
  olive: "#9fd14a",
  parchment: "#f6e7c8",
};

const floor: Rect[] = [
  [4, 57, 88, 3, c.umber],
  [4, 57, 88, 1, c.leather],
  [8, 60, 80, 2, c.dusk],
];

const chair: Rect[] = [
  [9, 20, 5, 22, c.dusk],
  [9, 20, 1, 22, c.leather],
  [13, 40, 21, 3, c.dusk],
  [13, 40, 21, 1, c.leather],
  [22, 43, 3, 9, c.monitor],
  [14, 52, 19, 2, c.monitor],
  [14, 54, 3, 2, c.void],
  [30, 54, 3, 2, c.void],
];

const desk: Rect[] = [
  [44, 38, 50, 3, c.wood],
  [44, 38, 50, 1, c.woodLight],
  [44, 41, 50, 1, c.woodDark],
  [47, 42, 3, 15, c.woodDark],
  [89, 42, 3, 15, c.woodDark],
  [70, 42, 17, 9, c.woodDark],
  [77, 45, 3, 1, c.woodDeep],
  // plant
  [46, 33, 5, 5, c.rust],
  [46, 33, 5, 1, c.orange],
  [47, 28, 1, 5, c.olive],
  [49, 26, 1, 7, c.olive],
  [45, 29, 2, 1, c.olive],
  [50, 27, 2, 1, c.olive],
  // monitor
  [52, 10, 34, 24, c.monitor],
  [52, 10, 34, 1, c.monitorLight],
  [54, 12, 30, 19, c.void],
  [66, 34, 6, 3, c.monitor],
  [62, 37, 14, 1, c.monitorLight],
  // keyboard
  [55, 36, 15, 2, c.monitorLight],
  [55, 36, 15, 1, c.parchment],
  // mug
  [87, 32, 5, 6, c.coral],
  [87, 32, 5, 1, c.parchment],
  [92, 33, 1, 3, c.coral],
];

// Code on the monitor: [x, y, width, color]; revealed line by line.
const codeLines: [number, number, number, string][] = [
  [56, 14, 12, c.coral],
  [58, 16, 18, c.hoodie],
  [60, 18, 14, c.amber],
  [60, 20, 20, c.parchment],
  [58, 22, 9, c.hoodie],
  [56, 24, 6, c.coral],
  [56, 26, 16, c.olive],
];

const body: Rect[] = [
  // legs
  [18, 35, 18, 5, c.pants],
  [18, 39, 18, 1, c.pantsShade],
  [32, 39, 5, 14, c.pants],
  [32, 39, 1, 14, c.pantsShade],
  [32, 53, 9, 3, c.void],
  [32, 55, 9, 1, c.monitor],
  // torso (hoodie)
  [17, 18, 12, 18, c.hoodie],
  [17, 18, 3, 18, c.hoodieShade],
  [15, 17, 5, 6, c.hoodieShade],
  [26, 19, 2, 15, c.hoodieLight],
  [17, 34, 12, 2, c.hoodieShade],
  // neck
  [23, 16, 4, 3, c.skinShade],
];

const head: Rect[] = [
  [20, 3, 9, 1, c.hair],
  [19, 4, 11, 4, c.hair],
  [22, 4, 4, 1, c.hairLight],
  [18, 7, 5, 8, c.hair],
  [18, 7, 2, 8, c.hairDark],
  [23, 7, 8, 9, c.skin],
  [23, 15, 6, 1, c.skin],
  [29, 7, 2, 1, c.hair],
  [23, 10, 1, 3, c.skinShade],
  [27, 9, 3, 1, c.hairDark],
  [28, 10, 1, 2, c.void],
  [31, 11, 1, 2, c.skin],
  [29, 14, 2, 1, c.skinShade],
  // screen light on the face
  [30, 8, 1, 6, c.butter],
];

const armBack: Rect[] = [
  [24, 21, 5, 6, c.hoodieShade],
  [28, 25, 6, 4, c.hoodieShade],
  [33, 28, 7, 3, c.hoodieShade],
  [39, 30, 8, 3, c.hoodieShade],
  [46, 32, 6, 2, c.hoodieShade],
];

const armFront: Rect[] = [
  [22, 22, 5, 6, c.hoodie],
  [26, 26, 6, 4, c.hoodie],
  [31, 29, 7, 3, c.hoodie],
  [37, 31, 9, 3, c.hoodie],
  [44, 33, 6, 2, c.hoodieLight],
];

function Rects({ rects }: { rects: Rect[] }) {
  return rects.map(([x, y, w, h, fill], index) => (
    <rect key={index} x={x} y={y} width={w} height={h} fill={fill} />
  ));
}

export function DevScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 64"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* Monitor glow on the wall behind */}
      <rect x="44" y="4" width="50" height="34" fill={c.hoodie} opacity="0.08" />
      <rect x="48" y="7" width="42" height="30" fill={c.hoodie} opacity="0.08" />
      <Rects rects={floor} />
      <Rects rects={chair} />
      <Rects rects={desk} />

      {codeLines.map(([x, y, w, fill], index) => (
        <rect
          key={index}
          className="ds-code"
          style={{ "--i": index } as CSSProperties}
          x={x}
          y={y}
          width={w}
          height={1}
          fill={fill}
        />
      ))}
      <rect className="ds-blink" x="74" y="26" width="2" height="2" fill={c.amber} />
      <rect className="ds-blink" x="84" y="32" width="1" height="1" fill={c.olive} />

      {[0, 1, 2].map((index) => (
        <rect
          key={index}
          className="ds-steam"
          style={{ "--i": index } as CSSProperties}
          x={88 + index}
          y={29 - index}
          width="1"
          height="2"
          fill={c.khaki}
          opacity="0"
        />
      ))}

      <g className="ds-hand-alt">
        <Rects rects={armBack} />
        <rect x="51" y="32" width="3" height="2" fill={c.skinShade} />
      </g>
      <Rects rects={body} />
      <g className="ds-head">
        <Rects rects={head} />
      </g>
      <g className="ds-hand">
        <Rects rects={armFront} />
        <rect x="49" y="33" width="4" height="2" fill={c.skin} />
      </g>
    </svg>
  );
}
