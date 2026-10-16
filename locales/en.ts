// UI chrome strings. Copy reference: docs/CONTENT.md.
export const en = {
  skipToSummary: "Skip to summary",
  menu: {
    label: "PAUSE",
    open: "Open menu",
    close: "Close menu",
    navLabel: "Sections",
    start: "START",
    about: "ABOUT",
    timeline: "TIMELINE",
    skills: "SKILLS",
    projects: "PROJECTS",
    partnerships: "PARTNERSHIPS",
    contact: "CONTACT",
  },
  settings: {
    title: "SETTINGS",
    theme: { label: "THEME", dark: "DARK", light: "LIGHT" },
    language: { label: "LANGUAGE", en: "EN", ptBR: "PT-BR" },
    sound: { label: "SOUND", off: "OFF", on: "ON" },
  },
  about: {
    title: "CHOOSE YOUR PLAYER",
    classLabel: "Class",
    specialtyLabel: "Specialty",
    attributesLabel: "Attributes",
    avatarAlt: "Pixel-art portrait of Leandro Junior",
  },
  timeline: {
    title: "WORLD MAP",
    offline: "Offline",
    present: "present",
    buildWithMe: "LET'S BUILD IT",
  },
  skills: {
    title: "INVENTORY",
    usageLabel: "Where I use it",
  },
  projects: {
    title: "SELECT A CARTRIDGE",
    genreLabel: "Genre",
    builtWithLabel: "Built with",
    play: "PLAY NOW",
    behindTheScenes: "BEHIND THE SCENES",
    comingSoon: "COMING SOON",
    opensInNewTab: "(opens in a new tab)",
  },
  partnerships: {
    title: "PLAYER 2, PRESS START",
    howItWorksTitle: "HOW IT WORKS",
    contactTitle: "CONTACT",
  },
  contact: {
    emailLabel: "Email me",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  footer: {
    title: "CREDITS",
    madeBy: "Made by Leandro Junior",
    creditsIcons: "Icons: pixelarticons by Gerrit Halfmann (MIT)",
    creditsFonts: "Fonts: Press Start 2P and VT323 (SIL OFL)",
  },
};

export type UiStrings = typeof en;
