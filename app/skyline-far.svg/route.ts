import { layerSvg, skylineLayers } from "@/lib/skyline";

// Prerendered to /skyline-far.svg by the static export.
export const dynamic = "force-static";

export function GET() {
  return new Response(layerSvg(skylineLayers.far), {
    headers: { "Content-Type": "image/svg+xml" },
  });
}
