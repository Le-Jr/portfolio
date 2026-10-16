"use client";

import dynamic from "next/dynamic";

// Loaded after hydration so analytics never delays the first paint.
export const DeferredAnalytics = dynamic(
  () => import("@vercel/analytics/next").then((mod) => mod.Analytics),
  { ssr: false },
);
