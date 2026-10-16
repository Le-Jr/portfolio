import { layerSvg, skylineLayers } from "@/lib/skyline";

// Prerendered to /skyline-near.svg by the static export.
export const dynamic = "force-static";

export function GET() {
  return new Response(layerSvg(skylineLayers.near), {
    headers: { "Content-Type": "image/svg+xml" },
  });
}
