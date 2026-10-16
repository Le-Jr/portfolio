// Placeholder portrait sprite (32×32), self-made, until the final avatar exists.
// Each character is one pixel; "." is transparent. See docs/ASSETS.md.
// After editing, run `npm run assets` to refresh the favicons and Open Graph image.

export const avatarSprite = [
  "................................",
  ".............oooooo.............",
  "...........ooHHHHHHoo...........",
  "..........oHHHgggHHHHo..........",
  ".........oHHggHHHHHHHho.........",
  "........oHHgHHHHHHHHHhho........",
  ".......oHHHHHHHHHHHHHhhho.......",
  ".......oHHHHHHHHHHHHHhhho.......",
  ".......oHHHHHHHHHHHHHhhho.......",
  "......oHHHHHHHHHHHHHHhhhho......",
  "......ohhSHHSSHHSSSHssshho......",
  ".......ohSShhhSSSShhhssho.......",
  "......oshhSSSSSSSSSssshhso......",
  "......ossSSSweSSSSewssssso......",
  "......ossSSSeeSSSSeessssso......",
  ".......ooSSSSSSSsSSssssoo.......",
  "........oSSSSSSSsSSsssso........",
  ".........oSSSsSsSSSssso.........",
  ".........oSSSSmmmmSssso.........",
  "..........oSSSSSSSSsso..........",
  "...........oSSSSSSSso...........",
  "............oSSSSsso............",
  "............okssssko............",
  "........ooooCSkssksCoooo........",
  "......ooCCCCCCCkkCCCCCccoo......",
  ".....oCCCCCCCCCkkCCCCCcccco.....",
  "....oiiiiCCCCCkCCkCCCCccccco....",
  "...oiiiiiCCCCCiCCiCCCCcccccco...",
  "..oiiiiiiCCCCCiCCiCCCCccccccco..",
  ".oiiiiiiiCCCCCCCCCCCCCcccccccco.",
  ".oiiiiiiiCCCCCCCCCCCCCcccccccco.",
  "oiiiiiiiiCCCCCCCCCCCCCccccccccco",
];

/** Palette and sprite ramps only (docs/STYLE_GUIDE.md#color). */
export const avatarColors: Record<string, string> = {
  o: "#07061a", // outline
  h: "#3a2218", // hair shadow
  H: "#6b3e2e", // hair
  g: "#a0705a", // hair highlight
  S: "#f2c29b", // skin
  s: "#c98a64", // skin shade
  e: "#07061a", // eyes
  w: "#ffffff", // eye shine
  m: "#8a3a3a", // mouth
  C: "#3fe0f0", // hoodie
  c: "#00a3c4", // hoodie shade
  i: "#b8fbff", // hoodie highlight
  k: "#1c1a4a", // collar
};
