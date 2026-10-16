import type { Localized } from "@/lib/i18n";

export type Project =
  | {
      kind: "released";
      id: string;
      name: string;
      url: string;
      genre: Localized;
      description: Localized;
      builtWith: Localized;
      /** Optional "behind the scenes" paragraph. The button is hidden while unset. */
      behindTheScenes?: Localized;
      /** Cartridge label look. Each project keeps its own visual identity. */
      label: "terminal";
    }
  | {
      kind: "coming-soon";
      id: string;
      description: Localized;
    };

// Copy reference: docs/CONTENT.md. Add a cartridge by adding an entry here.
export const projects: Project[] = [
  {
    kind: "released",
    id: "lords-of-logic",
    name: "Lords of Logic",
    url: "https://lords-of-logic.vercel.app/",
    genre: { en: "Trivia for developers", "pt-BR": "Trivia para desenvolvedores" },
    description: {
      en: "Quick 3-to-7-minute matches on the web stack, platforms and best practices, with a leaderboard and an XP system.",
      "pt-BR":
        "Partidas rápidas de 3 a 7 minutos sobre stack web, plataformas e boas práticas, com ranking e sistema de XP.",
    },
    builtWith: {
      en: "Next.js, Supabase, Google and Discord sign-in",
      "pt-BR": "Next.js, Supabase, login com Google e Discord",
    },
    label: "terminal",
  },
  {
    kind: "coming-soon",
    id: "coming-soon",
    description: {
      en: "A new cartridge is being built.",
      "pt-BR": "Um novo cartucho está em produção.",
    },
  },
];
