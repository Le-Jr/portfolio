import { track } from "@vercel/analytics";

// Custom events are only recorded on Vercel's Pro plan. On Hobby these calls
// are harmless no-ops, and page views are still counted.
// See docs/PROJECT.md#success-metrics.

export type AnalyticsEvent =
  | { name: "start_click" }
  | { name: "play_click"; project: string }
  | { name: "contact_click"; channel: "hero" | "email" | "linkedin" | "timeline" };

export function trackEvent(event: AnalyticsEvent) {
  const { name, ...properties } = event;
  try {
    track(name, properties);
  } catch {
    // Analytics must never break the page.
  }
}
