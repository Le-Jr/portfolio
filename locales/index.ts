import type { Locale } from "@/lib/i18n";
import { en, type UiStrings } from "./en";
import { ptBR } from "./pt-BR";

const strings: Record<Locale, UiStrings> = { en, "pt-BR": ptBR };

export function getUiStrings(locale: Locale): UiStrings {
  return strings[locale];
}

export type { UiStrings };
