export const locales = ["en", "pt-BR"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** A user-facing string (or value) that must exist in every locale. */
export type Localized<T = string> = Record<Locale, T>;

/** Home URL for each locale. English lives at the root. */
export const localeHome: Record<Locale, string> = {
  en: "/",
  "pt-BR": "/pt-BR/",
};

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "pt-BR" : "en";
}
