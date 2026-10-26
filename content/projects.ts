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
      label: "terminal" | { src: string; alt: Localized; width: number; height: number };
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
    id: "brainrot-battaglia",
    name: "Brainrot Battaglia: Ultra Caos",
    url: "https://brainrot-battle-nine.vercel.app/",
    genre: { en: "2D arcade fighter", "pt-BR": "Luta arcade 2D" },
    description: {
      en: "Italian brainrot memes face off in a 2D arcade fighter with a story campaign, local versus, combos and special moves. Original pixel art and music synthesized in the browser.",
      "pt-BR":
        "Memes do Italian brainrot se enfrentam em um jogo de luta arcade 2D com campanha, versus local, combos e golpes especiais. Pixel art original e música sintetizada no navegador.",
    },
    builtWith: {
      en: "Next.js, TypeScript, Canvas 2D and Web Audio",
      "pt-BR": "Next.js, TypeScript, Canvas 2D e Web Audio",
    },
    label: {
      src: "/projects/brainrot-battaglia.webp",
      alt: {
        en: "Brainrot Battaglia: Ultra Caos title screen with its pixel-art fighters against a cosmic backdrop.",
        "pt-BR": "Tela de título de Brainrot Battaglia: Ultra Caos com seus lutadores em pixel art em um cenário cósmico.",
      },
      width: 640,
      height: 360,
    },
  },
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
