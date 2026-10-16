import type { Metadata } from "next";
import { site } from "@/content/site";
import { localeHome, type Locale } from "./i18n";

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time (host only, no scheme).
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = productionHost ? `https://${productionHost}` : "http://localhost:3000";

export function buildMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: site.title[locale],
    description: site.description[locale],
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: localeHome[locale],
      languages: {
        en: localeHome.en,
        "pt-BR": localeHome["pt-BR"],
        "x-default": localeHome.en,
      },
    },
    openGraph: {
      type: "website",
      url: localeHome[locale],
      siteName: site.name,
      title: site.title[locale],
      description: site.description[locale],
      locale: locale === "en" ? "en_US" : "pt_BR",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.ogImageAlt[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: site.title[locale],
      description: site.description[locale],
      images: ["/og.png"],
    },
  };
}
