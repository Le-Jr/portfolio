import type { Localized } from "@/lib/i18n";

export const about = {
  class: { en: "Full-Stack Dev", "pt-BR": "Dev Fullstack" } satisfies Localized,
  specialty: {
    en: "E-commerce and digital products",
    "pt-BR": "E-commerce e produtos digitais",
  } satisfies Localized,
  // TODO: attribute values. Shown as a plain list until they exist.
  attributes: [
    { id: "code", label: { en: "Code", "pt-BR": "Código" } },
    { id: "business", label: { en: "Business", "pt-BR": "Negócio" } },
    { id: "marketing", label: { en: "Marketing", "pt-BR": "Marketing" } },
    { id: "video", label: { en: "Video", "pt-BR": "Vídeo" } },
    { id: "english", label: { en: "English", "pt-BR": "Inglês" } },
  ] satisfies { id: string; label: Localized }[],
  bio: {
    en: "I'm a full-stack developer who started out building marketing strategies and editing videos. Today I work on e-commerce projects on platforms like Salesforce and Shopify. In my spare time, I build my own games and apps. That mix makes me comfortable on both sides of a product: building it, and making people want to use it.",
    "pt-BR":
      "Sou desenvolvedor fullstack e comecei criando estratégias de marketing e editando vídeos. Hoje trabalho em projetos de e-commerce em plataformas como Salesforce e Shopify. Nas horas vagas, crio meus próprios jogos e apps. Essa mistura me deixa à vontade nos dois lados de um produto: construir e fazer as pessoas quererem usar.",
  } satisfies Localized,
};
