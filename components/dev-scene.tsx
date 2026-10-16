import type { CSSProperties } from "react";

// Animated pixel-art scene: the developer coding at his desk.
// 96×64 sprite grid drawn with rects, shown at an integer scale.
//
// A 14 s loop (classes ds-* in app/globals.css):
//   typing → sips coffee → typing → an ERROR flashes on the monitor and he
//   jumps with his hands up → back to typing.
// Under reduced motion only the default typing pose is shown, still.

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
  red: "#ff4b4b",
  crimson: "#a3261a",
  olive: "#9fd14a",
  parchment: "#f6e7c8",
};

const floor: Rect[] = [
  [4, 57, 88, 3, c.umber],
  [4, 57, 88, 1, c.leather],
  [8, 60, 80, 2, c.dusk],
];

const chair: Rect[] = [
  [21, 20, 5, 22, c.dusk],
  [21, 20, 1, 22, c.leather],
  [25, 40, 21, 3, c.dusk],
  [25, 40, 21, 1, c.leather],
  [34, 43, 3, 9, c.monitor],
  [26, 52, 19, 2, c.monitor],
  [26, 54, 3, 2, c.void],
  [42, 54, 3, 2, c.void],
];

const desk: Rect[] = [
  [46, 38, 48, 3, c.wood],
  [46, 38, 48, 1, c.woodLight],
  [46, 41, 48, 1, c.woodDark],
  [49, 42, 3, 15, c.woodDark],
  [89, 42, 3, 15, c.woodDark],
  [72, 42, 15, 9, c.woodDark],
  [78, 45, 3, 1, c.woodDeep],
  // plant
  [88, 33, 5, 5, c.rust],
  [88, 33, 5, 1, c.orange],
  [89, 28, 1, 5, c.olive],
  [91, 26, 1, 7, c.olive],
  [87, 29, 2, 1, c.olive],
  [92, 27, 2, 1, c.olive],
  // monitor
  [56, 10, 32, 24, c.monitor],
  [56, 10, 32, 1, c.monitorLight],
  [58, 12, 28, 19, c.void],
  [69, 34, 6, 3, c.monitor],
  [65, 37, 14, 1, c.monitorLight],
  // keyboard
  [50, 36, 13, 2, c.monitorLight],
  [50, 36, 13, 1, c.parchment],
];

// The mug rests right of the keyboard, clear of his arms.
const mugOnDesk: Rect[] = [
  [64, 32, 4, 6, c.coral],
  [64, 32, 4, 1, c.parchment],
  [68, 33, 1, 3, c.coral],
];

// Code on the monitor: [x, y, width, color]; revealed line by line.
const codeLines: [number, number, number, string][] = [
  [60, 14, 12, c.coral],
  [62, 16, 18, c.hoodie],
  [64, 18, 14, c.amber],
  [64, 20, 20, c.parchment],
  [62, 22, 9, c.hoodie],
  [60, 24, 6, c.coral],
  [60, 26, 16, c.olive],
];

// Error dialog that takes over the screen.
const errorScreen: Rect[] = [
  [58, 12, 28, 19, c.crimson],
  [60, 14, 24, 3, c.red],
  [61, 15, 10, 1, c.parchment],
  [81, 15, 2, 1, c.parchment],
  [70, 19, 4, 6, c.parchment],
  [70, 26, 4, 2, c.parchment],
];

const body: Rect[] = [
  // legs
  [30, 35, 16, 5, c.pants],
  [30, 39, 16, 1, c.pantsShade],
  [43, 39, 5, 14, c.pants],
  [43, 39, 1, 14, c.pantsShade],
  [43, 53, 9, 3, c.void],
  [43, 55, 9, 1, c.monitor],
  // torso (hoodie)
  [29, 18, 12, 18, c.hoodie],
  [29, 18, 3, 18, c.hoodieShade],
  [27, 17, 5, 6, c.hoodieShade],
  [38, 19, 2, 15, c.hoodieLight],
  [29, 34, 12, 2, c.hoodieShade],
  // neck
  [35, 16, 4, 3, c.skinShade],
];

const head: Rect[] = [
  [32, 3, 9, 1, c.hair],
  [31, 4, 11, 4, c.hair],
  [34, 4, 4, 1, c.hairLight],
  [30, 7, 5, 8, c.hair],
  [30, 7, 2, 8, c.hairDark],
  [35, 7, 8, 9, c.skin],
  [35, 15, 6, 1, c.skin],
  [41, 7, 2, 1, c.hair],
  [35, 10, 1, 3, c.skinShade],
  [43, 11, 1, 2, c.skin],
  // screen light on the face
  [42, 8, 1, 3, c.butter],
];

const faceCalm: Rect[] = [
  [39, 9, 3, 1, c.hairDark],
  [40, 10, 1, 2, c.void],
  [41, 14, 2, 1, c.skinShade],
];

const faceShock: Rect[] = [
  [39, 7, 3, 1, c.hairDark],
  [39, 9, 3, 3, c.parchment],
  [40, 10, 1, 1, c.void],
  [41, 13, 2, 2, c.void],
  // sweat drop
  [36, 5, 1, 2, c.hoodieLight],
];

// Arms. Shoulder around (36, 21), keyboard around (51, 35).
const backArmTyping: Rect[] = [
  [36, 21, 4, 5, c.hoodieShade],
  [39, 25, 4, 4, c.hoodieShade],
  [42, 28, 5, 3, c.hoodieShade],
  [46, 31, 4, 2, c.hoodieShade],
  [50, 33, 3, 2, c.skinShade],
];

const frontArmTyping: Rect[] = [
  [35, 21, 5, 5, c.hoodie],
  [38, 25, 4, 4, c.hoodie],
  [41, 28, 5, 3, c.hoodie],
  [45, 31, 4, 3, c.hoodie],
  [48, 33, 2, 2, c.hoodieLight],
  [50, 34, 3, 2, c.skin],
];

// Drinking: the forearm comes up with the mug, first to the chest, then to the mouth.
const frontArmLift: Rect[] = [
  [35, 21, 5, 5, c.hoodie],
  [38, 25, 4, 4, c.hoodie],
  [41, 24, 3, 5, c.hoodie],
  [42, 22, 2, 2, c.hoodieLight],
  [42, 20, 3, 3, c.skin],
  [44, 18, 4, 6, c.coral],
  [44, 18, 4, 1, c.parchment],
];

const frontArmSip: Rect[] = [
  [35, 21, 5, 5, c.hoodie],
  [38, 25, 4, 3, c.hoodie],
  [41, 19, 3, 8, c.hoodie],
  [42, 17, 2, 2, c.hoodieLight],
  [42, 14, 3, 3, c.skin],
  [44, 11, 4, 6, c.coral],
  [44, 11, 4, 1, c.parchment],
];

// Startled: both hands thrown up.
const armsShock: Rect[] = [
  // back arm, behind the head
  [33, 13, 3, 8, c.hoodieShade],
  [33, 9, 3, 4, c.skinShade],
  // front arm
  [35, 20, 5, 4, c.hoodie],
  [39, 15, 3, 6, c.hoodie],
  [40, 12, 2, 3, c.hoodieLight],
  [40, 8, 3, 4, c.skin],
];

const exclamation: Rect[] = [
  [45, 0, 6, 9, c.parchment],
  [44, 1, 1, 7, c.parchment],
  [51, 1, 1, 7, c.parchment],
  [47, 1, 2, 4, c.crimson],
  [47, 6, 2, 2, c.crimson],
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
      <rect x="48" y="4" width="46" height="34" fill={c.hoodie} opacity="0.08" />
      <rect x="52" y="7" width="38" height="30" fill={c.hoodie} opacity="0.08" />
      <Rects rects={floor} />
      <Rects rects={chair} />
      <Rects rects={desk} />

      <g className="ds-code-screen">
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
        <rect className="ds-blink" x="77" y="26" width="2" height="2" fill={c.amber} />
      </g>
      <g className="ds-error-screen">
        <g className="ds-error-flash">
          <Rects rects={errorScreen} />
        </g>
      </g>
      <rect className="ds-blink" x="86" y="32" width="1" height="1" fill={c.olive} />

      <g className="ds-mug-desk">
        <Rects rects={mugOnDesk} />
        {[0, 1, 2].map((index) => (
          <rect
            key={index}
            className="ds-steam"
            style={{ "--i": index } as CSSProperties}
            x={65 + index}
            y={29 - index}
            width="1"
            height="2"
            fill={c.khaki}
            opacity="0"
          />
        ))}
      </g>

      <g className="ds-calm">
        <g className="ds-hand-alt">
          <Rects rects={backArmTyping} />
        </g>
      </g>
      <Rects rects={body} />

      <g className="ds-jump">
        <g className="ds-head">
          <Rects rects={head} />
          <g className="ds-calm">
            <Rects rects={faceCalm} />
          </g>
          <g className="ds-shock">
            <Rects rects={faceShock} />
          </g>
        </g>
      </g>

      <g className="ds-type">
        <g className="ds-hand">
          <Rects rects={frontArmTyping} />
        </g>
      </g>
      <g className="ds-drink-lift">
        <Rects rects={frontArmLift} />
      </g>
      <g className="ds-drink-sip">
        <Rects rects={frontArmSip} />
      </g>
      <g className="ds-shock">
        <Rects rects={armsShock} />
        <Rects rects={exclamation} />
      </g>
    </svg>
  );
}
