"use client";

import { useEffect, useState } from "react";

const CHARACTER_DELAY_MS = 30;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * RPG typing effect for short lines. The full text is always in the DOM for
 * screen readers; only the visible copy is revealed letter by letter. Click
 * to finish at once. Off under prefers-reduced-motion.
 */
export function TypedText({ text }: { text: string }) {
  const [shown, setShown] = useState(() => (prefersReducedMotion() ? text.length : 0));

  useEffect(() => {
    if (shown >= text.length) return;
    const timer = window.setTimeout(() => setShown((count) => count + 1), CHARACTER_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [shown, text.length]);

  return (
    <span onClick={() => setShown(text.length)}>
      <span aria-hidden="true">{text.slice(0, shown)}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
