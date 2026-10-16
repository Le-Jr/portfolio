import type { Localized } from "@/lib/i18n";

// Copy reference: docs/CONTENT.md.

export const site = {
  name: "Leandro Junior",
  title: {
    en: "Leandro Junior — Full-Stack Developer",
    "pt-BR": "Leandro Junior — Desenvolvedor Fullstack",
  } satisfies Localized,
  description: {
    en: "Full-stack developer and former marketing strategist. I build digital products people want to use.",
    "pt-BR":
      "Desenvolvedor fullstack que já foi estrategista de marketing. Eu construo produtos digitais que as pessoas querem usar.",
  } satisfies Localized,
  ogImageAlt: {
    en: "Leandro Junior's arcade portfolio title screen",
    "pt-BR": "Tela de título do portfólio arcade de Leandro Junior",
  } satisfies Localized,
};

export const start = {
  title: "LEANDRO JUNIOR",
  /** Shown under the logo. */
  tagline: { en: "FULL STACK DEVELOPER", "pt-BR": "DESENVOLVEDOR FULL STACK" } satisfies Localized,
  subtitle: site.description,
  play: { en: "PRESS START", "pt-BR": "PRESS START" } satisfies Localized,
  contact: {
    en: "Let's build a project together",
    "pt-BR": "Quero fazer um projeto com você",
  } satisfies Localized,
};

export const contact = {
  email: "nascimentoleandrojr@gmail.com",
  linkedin: "https://www.linkedin.com/in/leandro-jr23",
  /** Shown in the footer. Hidden when null. */
  github: "https://github.com/Le-Jr/portfolio" as string | null,
};
