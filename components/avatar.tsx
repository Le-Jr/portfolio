import { avatarColors, avatarSprite } from "@/content/avatar";

const SCALE = 6; // 32 px sprite shown at 192 px: an integer scale.

type Run = { x: number; y: number; width: number; color: string };

// Merge horizontal runs of the same color to keep the SVG small.
const runs: Run[] = avatarSprite.flatMap((row, y) => {
  const rowRuns: Run[] = [];
  for (let x = 0; x < row.length; x++) {
    const color = avatarColors[row[x]];
    if (!color) continue;
    const last = rowRuns.at(-1);
    if (last && last.color === color && last.x + last.width === x) last.width++;
    else rowRuns.push({ x, y, width: 1, color });
  }
  return rowRuns;
});

export function Avatar({ label, scale = SCALE }: { label: string; scale?: number }) {
  const size = avatarSprite.length;
  return (
    <svg
      role="img"
      aria-label={label}
      width={size * scale}
      height={size * scale}
      viewBox={`0 0 ${size} ${size}`}
      shapeRendering="crispEdges"
    >
      {runs.map((run) => (
        <rect
          key={`${run.x}-${run.y}`}
          x={run.x}
          y={run.y}
          width={run.width}
          height={1}
          fill={run.color}
        />
      ))}
    </svg>
  );
}
