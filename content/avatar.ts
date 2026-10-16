// Placeholder avatar sprite (16×16), self-made, until the final avatar exists.
// Each character is one pixel; "." is transparent. See docs/ASSETS.md.

export const avatarSprite = [
  "................",
  ".....OOOOOO.....",
  "....OHHHHHHO....",
  "...OHHHHHHHHO...",
  "...OHHSSSSHHO...",
  "...OHSSSSSSHO...",
  "...OSNSSSSNSO...",
  "...OSSSSSSSSO...",
  "...OSSSDDSSSO...",
  "....OSSSSSSO....",
  ".....OOSSOO.....",
  "...OOCCSSCCOO...",
  "..OCCCCCCCCCCO..",
  ".OCCCTCCCCTCCCO.",
  ".OCCCTCCCCTCCCO.",
  ".OOOOOOOOOOOOOO.",
];

/** Palette colors only (docs/STYLE_GUIDE.md). */
export const avatarColors: Record<string, string> = {
  O: "#0f0e2a", // night (outline)
  H: "#7a5600", // gold (hair)
  S: "#f4ecd8", // cream (skin)
  D: "#e6dcc2", // sand (shading)
  N: "#0f0e2a", // night (eyes)
  C: "#3fe0f0", // cyan (shirt)
  T: "#006b75", // teal (shirt detail)
};
