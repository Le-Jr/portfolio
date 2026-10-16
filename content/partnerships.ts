import type { Localized } from "@/lib/i18n";

// How results are split is deliberately not on the site. See docs/PROJECT.md.
export const partnerships = {
  /** The partnership pitch, split across the co-op screen. */
  coop: {
    player2: {
      en: "You have an audience, or you know a problem inside out.",
      "pt-BR": "Você tem uma audiência ou conhece bem um problema.",
    } satisfies Localized,
    player1: {
      en: "I bring the tech and the product side.",
      "pt-BR": "Eu tenho a parte técnica e a de produto.",
    } satisfies Localized,
    result: {
      en: "Together, we turn it into an app, a SaaS or a game.",
      "pt-BR": "Juntos, transformamos isso em um app, SaaS ou jogo.",
    } satisfies Localized,
  },
  steps: [
    {
      en: "You tell me the idea, or the problem your audience has.",
      "pt-BR": "Você me conta a ideia ou o problema do seu público.",
    },
    {
      en: "We decide together whether it's worth turning into a product.",
      "pt-BR": "Avaliamos juntos se vale virar produto.",
    },
    {
      en: "I build it and run it. You spread the word.",
      "pt-BR": "Eu construo e opero. Você divulga.",
    },
    { en: "We share the results.", "pt-BR": "Dividimos o resultado." },
  ] satisfies Localized[],
};
