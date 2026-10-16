"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { UiStrings } from "@/locales";
import { PauseMenu, type MenuSection } from "./pause-menu";

type HudProps = {
  locale: Locale;
  /** Sections tracked by the stage counter, in page order. */
  stages: MenuSection[];
  /** Everything the pause menu links to. */
  menuItems: MenuSection[];
  strings: UiStrings;
};

/** Fixed arcade HUD: player tag, the stage currently on screen, and the pause menu. */
export function Hud({ locale, stages, menuItems, strings }: HudProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const elements = stages
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrent(elements.indexOf(entry.target as HTMLElement));
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [stages]);

  const stage = stages[current];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-3 border-void bg-void/90 text-parchment backdrop-blur-[2px]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <a
          href="#start"
          className="flex items-center gap-3 font-ui font-bold tracking-[0.12em] text-parchment no-underline"
        >
          <span className="chip text-amber">{strings.hud.player}</span>
          <span className="text-[15px]">{strings.hud.playerName}</span>
        </a>

        <p className="hidden items-center gap-3 font-ui text-[15px] font-bold tracking-[0.12em] md:flex">
          <span className="text-khaki">{strings.hud.stage}</span>
          <span className="font-display text-[28px] leading-none text-sky">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span>{stage?.label}</span>
        </p>

        <PauseMenu locale={locale} sections={menuItems} strings={strings} />
      </div>
    </header>
  );
}
