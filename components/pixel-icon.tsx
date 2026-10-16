import { pixelIcons, type PixelIconName } from "@/lib/pixel-icons";

type PixelIconProps = {
  name: PixelIconName;
  /** Integer multiple of the 24 px grid, so pixels stay square. */
  scale?: 1 | 2 | 3;
  className?: string;
};

/** A decorative pixelarticons glyph, colored with currentColor. */
export function PixelIcon({ name, scale = 1, className }: PixelIconProps) {
  const Icon = pixelIcons[name];
  const size = 24 * scale;
  return (
    <Icon
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={className}
    />
  );
}
