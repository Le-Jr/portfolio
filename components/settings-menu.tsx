"use client";

import { useState } from "react";
import { localeHome, otherLocale, type Locale } from "@/lib/i18n";
import { saveTheme, type Theme } from "@/lib/preferences";
import { isSoundOn, playSelect, setSoundOn } from "@/lib/sound";
import type { UiStrings } from "@/locales";
import { PixelIcon } from "./pixel-icon";

type SettingsMenuProps = {
  locale: Locale;
  strings: UiStrings["settings"];
};

// Only mounted while the pause menu is open (never server-rendered),
// so reading the DOM and localStorage during the first render is safe.

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

const optionClass =
  "menu-item min-h-11 cursor-pointer pr-2 font-pixel text-display-m aria-pressed:text-primary";

export function SettingsMenu({ locale, strings }: SettingsMenuProps) {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const [sound, setSound] = useState(isSoundOn);

  function chooseTheme(next: Theme) {
    document.documentElement.dataset.theme = next;
    saveTheme(next);
    setTheme(next);
    playSelect();
  }

  function chooseSound(on: boolean) {
    setSoundOn(on);
    setSound(on);
    playSelect();
  }

  const target = otherLocale(locale);

  return (
    <div className="flex flex-col gap-3">
      <p className="font-pixel text-display-m text-muted">{strings.title}</p>

      <div role="group" aria-label={strings.theme.label} className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="flex w-full items-center gap-2 font-pixel sm:w-48 text-display-m">
          <PixelIcon name={theme === "dark" ? "moon" : "sun"} />
          {strings.theme.label}
        </span>
        <button
          type="button"
          data-nav-item
          aria-pressed={theme === "dark"}
          className={optionClass}
          onClick={() => chooseTheme("dark")}
        >
          {strings.theme.dark}
        </button>
        <button
          type="button"
          data-nav-item
          aria-pressed={theme === "light"}
          className={optionClass}
          onClick={() => chooseTheme("light")}
        >
          {strings.theme.light}
        </button>
      </div>

      <div role="group" aria-label={strings.language.label} className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="flex w-full items-center gap-2 font-pixel sm:w-48 text-display-m">
          <PixelIcon name="languages" />
          {strings.language.label}
        </span>
        <span aria-current="true" className="menu-item pr-2 font-pixel text-display-m text-primary">
          {locale === "en" ? strings.language.en : strings.language.ptBR}
        </span>
        <a
          data-nav-item
          href={localeHome[target]}
          hrefLang={target}
          lang={target}
          className={`${optionClass} flex items-center text-text no-underline`}
        >
          {target === "en" ? strings.language.en : strings.language.ptBR}
        </a>
      </div>

      <div role="group" aria-label={strings.sound.label} className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="flex w-full items-center gap-2 font-pixel sm:w-48 text-display-m">
          <PixelIcon name={sound ? "volume-2" : "volume-x"} />
          {strings.sound.label}
        </span>
        <button
          type="button"
          data-nav-item
          aria-pressed={!sound}
          className={optionClass}
          onClick={() => chooseSound(false)}
        >
          {strings.sound.off}
        </button>
        <button
          type="button"
          data-nav-item
          aria-pressed={sound}
          className={optionClass}
          onClick={() => chooseSound(true)}
        >
          {strings.sound.on}
        </button>
      </div>
    </div>
  );
}
