import type { ReactNode } from "react";
import { bodyFont, pixelFont } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";
import { themeInitScript } from "@/lib/preferences";
import { DeferredAnalytics } from "./deferred-analytics";

type RootDocumentProps = {
  locale: Locale;
  children: ReactNode;
};

/** The <html> shell shared by the English and Portuguese root layouts. */
export function RootDocument({ locale, children }: RootDocumentProps) {
  return (
    <html
      lang={locale}
      data-theme="dark"
      // The inline script below may switch data-theme before hydration.
      suppressHydrationWarning
      className={`${pixelFont.variable} ${bodyFont.variable}`}
    >
      {/* App Router root layouts may render <head> directly; the rule targets the Pages Router. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
