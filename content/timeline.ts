import type { Localized } from "@/lib/i18n";

export type TimelineStage = {
  id: string;
  title: Localized;
  /** Start year, or null for the open "next stage". */
  from: number | null;
  /** End year; "present" for ongoing, null for a single year. */
  to: number | "present" | null;
  text: Localized;
  status?: "offline" | "next";
};

// Years exactly as in docs/PLANNING.md. Copy reference: docs/CONTENT.md.
export const timeline: TimelineStage[] = [
  {
    id: "marketing-video",
    title: { en: "World 1: Marketing & Video", "pt-BR": "Mundo 1: Marketing e vídeo" },
    from: 2021,
    to: 2023,
    text: {
      en: "Freelance marketing strategy and video editing.",
      "pt-BR": "Estratégia e edição como freelancer.",
    },
  },
  {
    id: "front-end",
    title: { en: "World 2: Front-end", "pt-BR": "Mundo 2: Front-end" },
    from: 2023,
    to: 2024,
    text: {
      en: "Front-end training in the Vai Na Web program (HTML, SASS, React, Vue).",
      "pt-BR": "Formação no programa Vai Na Web (HTML, SASS, React, Vue).",
    },
  },
  {
    id: "college",
    title: { en: "World 3: College", "pt-BR": "Mundo 3: Faculdade" },
    from: 2024,
    to: null,
    text: {
      en: "Started a degree in Computer Systems Technology at UFF.",
      "pt-BR": "Início de Tecnologia em Sistemas de Computação na UFF.",
    },
  },
  {
    id: "mercuriochat",
    title: { en: "World 4: MercurioChat", "pt-BR": "Mundo 4: MercurioChat" },
    from: 2024,
    to: 2025,
    text: {
      en: "A project built with classmates: AI-powered customer service automation on WhatsApp. Currently offline.",
      "pt-BR":
        "Projeto em parceria com colegas, automação de atendimento no WhatsApp com IA. Fora do ar no momento.",
    },
    status: "offline",
  },
  {
    id: "b2b-ecommerce",
    title: { en: "World 5: B2B E-commerce", "pt-BR": "Mundo 5: E-commerce B2B" },
    from: 2025,
    to: "present",
    text: {
      en: "Implementations on Salesforce B2B Commerce, Shopify and WooCommerce, with ERP and payment integrations, on teams that work in English.",
      "pt-BR":
        "Implementações em Salesforce B2B Commerce, Shopify e WooCommerce, com integrações de ERP e pagamentos, em equipes que trabalham em inglês.",
    },
  },
  {
    id: "own-projects",
    title: { en: "World 6: Own Projects", "pt-BR": "Mundo 6: Projetos próprios" },
    from: 2026,
    to: null,
    text: {
      en: "Lords of Logic and the launches that come next.",
      "pt-BR": "Lords of Logic e os próximos lançamentos.",
    },
  },
  {
    id: "next",
    title: { en: "Next Stage", "pt-BR": "Próxima fase" },
    from: null,
    to: null,
    text: {
      en: "??? Build the next world with me.",
      "pt-BR": "??? Construa a próxima fase comigo.",
    },
    status: "next",
  },
];
