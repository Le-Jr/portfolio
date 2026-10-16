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
// Stage labels ("STAGE 1"...) come from the order of this list.
export const timeline: TimelineStage[] = [
  {
    id: "marketing-video",
    title: { en: "Marketing & Video", "pt-BR": "Marketing e vídeo" },
    from: 2021,
    to: 2023,
    text: {
      en: "Freelance marketing strategy and video editing.",
      "pt-BR": "Estratégia e edição como freelancer.",
    },
  },
  {
    id: "front-end",
    title: { en: "Front-end", "pt-BR": "Front-end" },
    from: 2023,
    to: 2024,
    text: {
      en: "Front-end training in the Vai Na Web program (HTML, SASS, React, Vue).",
      "pt-BR": "Formação no programa Vai Na Web (HTML, SASS, React, Vue).",
    },
  },
  {
    id: "college",
    title: { en: "College", "pt-BR": "Faculdade" },
    from: 2024,
    to: null,
    text: {
      en: "Started a degree in Computer Systems Technology at UFF.",
      "pt-BR": "Início de Tecnologia em Sistemas de Computação na UFF.",
    },
  },
  {
    id: "mercuriochat",
    title: { en: "MercurioChat", "pt-BR": "MercurioChat" },
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
    title: { en: "Develoci: E-commerce", "pt-BR": "Develoci: E-commerce" },
    from: 2025,
    to: "present",
    text: {
      en: "Joined Develoci as a full-stack developer. I build and integrate e-commerce stores on platforms like Salesforce B2B Commerce and Shopify: storefronts, ERP and payment integrations, and the custom logic that keeps B2B operations running smoothly from catalog to checkout.",
      "pt-BR":
        "Entrei na Develoci como desenvolvedor fullstack. Desenvolvo e integro lojas virtuais em plataformas como Salesforce B2B Commerce e Shopify: vitrines, integrações com ERP e meios de pagamento, e a lógica sob medida que mantém operações B2B rodando sem atrito do catálogo ao checkout.",
    },
  },
  {
    id: "own-projects",
    title: { en: "Own Projects", "pt-BR": "Projetos próprios" },
    from: 2026,
    to: null,
    text: {
      en: "Alongside client work, I'm also building my own products: Lords of Logic is live, and more are on the way.",
      "pt-BR":
        "Em paralelo ao trabalho com clientes, também construo meus próprios produtos: o Lords of Logic já está no ar e outros estão a caminho.",
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
