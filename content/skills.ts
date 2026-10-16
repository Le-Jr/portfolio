import type { Localized } from "@/lib/i18n";
import type { PixelIconName } from "@/lib/pixel-icons";

export type SkillItem = {
  id: string;
  name: Localized;
  /** Generic glyph, never a brand logo. See docs/ASSETS.md#mapping. */
  icon: PixelIconName;
  /** "Where I use it" tooltip. Placeholder drafts; see docs/CONTENT.md. */
  usage?: Localized;
};

export type SkillCategory = {
  id: "frontend" | "backend" | "platforms" | "creative";
  name: Localized;
  items: SkillItem[];
};

const same = (value: string): Localized => ({ en: value, "pt-BR": value });

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: same("Front-end"),
    items: [
      {
        id: "nextjs",
        name: same("Next.js"),
        icon: "forward",
        usage: {
          en: "My go-to framework. Lords of Logic is built with it.",
          "pt-BR": "Meu framework principal. O Lords of Logic é feito com ele.",
        },
      },
      {
        id: "lwc",
        name: same("LWC"),
        icon: "blocks",
        usage: {
          en: "Storefront components in Salesforce B2B Commerce projects.",
          "pt-BR": "Componentes de loja em projetos Salesforce B2B Commerce.",
        },
      },
      {
        id: "react",
        name: same("React"),
        icon: "layout",
        usage: {
          en: "Learned in Vai Na Web; the base for everything I build with Next.js.",
          "pt-BR": "Aprendi no Vai Na Web; é a base de tudo que faço com Next.js.",
        },
      },
      {
        id: "vue",
        name: same("Vue.js"),
        icon: "eye",
        usage: {
          en: "Learned in Vai Na Web, building front-end projects.",
          "pt-BR": "Aprendi no Vai Na Web, em projetos de front-end.",
        },
      },
      {
        id: "tailwind",
        name: same("Tailwind CSS"),
        icon: "brush",
        usage: {
          en: "Styling for my own projects, including this site.",
          "pt-BR": "Estilo dos meus projetos, incluindo este site.",
        },
      },
      {
        id: "shadcn",
        name: same("shadcn/ui"),
        icon: "tool-case",
        usage: {
          en: "Accessible UI building blocks for my own projects.",
          "pt-BR": "Componentes de interface acessíveis nos meus projetos.",
        },
      },
    ],
  },
  {
    id: "backend",
    name: same("Back-end"),
    items: [
      {
        id: "apex",
        name: same("Apex"),
        icon: "braces",
        usage: {
          en: "Back-end logic and integrations in Salesforce B2B Commerce.",
          "pt-BR": "Lógica de back-end e integrações no Salesforce B2B Commerce.",
        },
      },
      {
        id: "soql",
        name: same("SOQL"),
        icon: "search",
        usage: {
          en: "Querying store and order data in Salesforce.",
          "pt-BR": "Consultas de dados de loja e pedidos no Salesforce.",
        },
      },
      {
        id: "sql",
        name: same("SQL"),
        icon: "grid-3x3",
        usage: {
          en: "Modeling and querying relational data.",
          "pt-BR": "Modelagem e consulta de dados relacionais.",
        },
      },
      {
        id: "mongodb",
        name: same("MongoDB"),
        icon: "files",
        usage: {
          en: "Document storage for APIs and side projects.",
          "pt-BR": "Armazenamento de documentos em APIs e projetos paralelos.",
        },
      },
      {
        id: "nodejs",
        name: same("Node.js"),
        icon: "terminal",
        usage: { en: "APIs, scripts and integrations.", "pt-BR": "APIs, scripts e integrações." },
      },
      {
        id: "nestjs",
        name: same("NestJS"),
        icon: "home",
        usage: { en: "Structured back-end APIs.", "pt-BR": "APIs de back-end bem estruturadas." },
      },
      {
        id: "prisma",
        name: same("Prisma"),
        icon: "script",
        usage: {
          en: "Type-safe database access in Node.js projects.",
          "pt-BR": "Acesso a banco de dados com tipos em projetos Node.js.",
        },
      },
      {
        id: "postgresql",
        name: same("PostgreSQL"),
        icon: "database",
        usage: {
          en: "Relational database for my own products.",
          "pt-BR": "Banco de dados relacional dos meus produtos.",
        },
      },
      {
        id: "supabase",
        name: same("Supabase"),
        icon: "cloud-server",
        usage: {
          en: "Database and Google and Discord sign-in for Lords of Logic.",
          "pt-BR": "Banco de dados e login com Google e Discord no Lords of Logic.",
        },
      },
    ],
  },
  {
    id: "platforms",
    name: { en: "Platforms", "pt-BR": "Plataformas" },
    items: [
      {
        id: "salesforce-b2b",
        name: same("Salesforce B2B Commerce (Core)"),
        icon: "warehouse",
        usage: {
          en: "B2B stores with ERP and payment integrations at Develoci.",
          "pt-BR": "Lojas B2B com integrações de ERP e pagamentos na Develoci.",
        },
      },
      {
        id: "shopify",
        name: same("Shopify"),
        icon: "store",
        usage: {
          en: "Store builds and integrations at Develoci.",
          "pt-BR": "Lojas e integrações na Develoci.",
        },
      },
      {
        id: "wordpress-woocommerce",
        name: { en: "WordPress & WooCommerce", "pt-BR": "WordPress e WooCommerce" },
        icon: "shopping-cart",
        usage: {
          en: "E-commerce implementations with ERP and payment integrations.",
          "pt-BR": "Implementações de e-commerce com integrações de ERP e pagamentos.",
        },
      },
    ],
  },
  {
    id: "creative",
    name: { en: "Creative & Strategy", "pt-BR": "Criação e estratégia" },
    items: [
      {
        id: "marketing-strategy",
        name: { en: "Marketing strategy", "pt-BR": "Estratégia de marketing" },
        icon: "megaphone",
        usage: {
          en: "Freelance strategy work, 2021–2023. Still shapes how I launch products.",
          "pt-BR": "Estratégia como freelancer, 2021–2023. Ainda guia como lanço produtos.",
        },
      },
      {
        id: "video-editing",
        name: { en: "Video editing", "pt-BR": "Edição de vídeo" },
        icon: "clapperboard",
        usage: {
          en: "Freelance video editing, 2021–2023.",
          "pt-BR": "Edição de vídeo como freelancer, 2021–2023.",
        },
      },
    ],
  },
];
