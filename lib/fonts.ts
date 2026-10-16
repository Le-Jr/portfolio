import { Press_Start_2P, VT323 } from "next/font/google";

// Self-hosted at build time by next/font. Both fonts are SIL OFL 1.1.

export const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-press-start",
  display: "swap",
});

export const bodyFont = VT323({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-vt323",
  display: "swap",
});
