import { Jersey_10, Pixelify_Sans } from "next/font/google";

// Self-hosted at build time by next/font. Both fonts are SIL OFL 1.1.

/** Arcade marquee face: logo, section titles, big numbers. */
export const displayFont = Jersey_10({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-jersey",
  display: "swap",
});

/** Modern pixel face for UI and body text (variable weight 400–700). */
export const uiFont = Pixelify_Sans({
  weight: "variable",
  subsets: ["latin", "latin-ext"],
  variable: "--font-pixelify",
  display: "swap",
});
