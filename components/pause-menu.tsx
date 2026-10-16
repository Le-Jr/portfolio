"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { playSelect } from "@/lib/sound";
import type { UiStrings } from "@/locales";
import { ArrowNav } from "./arrow-nav";
import { SettingsMenu } from "./settings-menu";

export type MenuSection = { id: string; label: string };

type PauseMenuProps = {
  locale: Locale;
  sections: MenuSection[];
  strings: UiStrings;
};

/** Scrolls to a section, updates the URL hash and moves focus to its heading. */
function goToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  history.replaceState(null, "", `#${id}`);
  section.querySelector<HTMLElement>("h1, h2")?.focus({ preventScroll: true });
}

export function PauseMenu({ locale, sections, strings }: PauseMenuProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLElement>("[data-nav-item]")?.focus();
  }, [open]);

  function close(returnFocus: boolean) {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }

  // Escape closes; Tab stays inside the open menu.
  function handlePanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      close(true);
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? [],
    );
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="pause-menu"
        aria-label={open ? strings.menu.close : strings.menu.open}
        className="pixel-button pixel-button-secondary relative z-10"
        onClick={() => {
          playSelect();
          setOpen((value) => !value);
        }}
      >
        <span aria-hidden="true" className="flex gap-1">
          <span className="block h-4 w-1.5 bg-current" />
          <span className="block h-4 w-1.5 bg-current" />
        </span>
        {strings.menu.label}
      </button>

      {open ? (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-0 bg-night/80"
            onClick={() => close(false)}
          />
          <div
            id="pause-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={strings.menu.label}
            onKeyDown={handlePanelKeyDown}
            className="dialog-box screen-in fixed inset-x-4 top-24 bottom-4 overflow-y-auto md:absolute md:inset-auto md:top-16 md:right-0 md:bottom-auto md:w-[480px]"
          >
            <ArrowNav className="flex flex-col gap-6">
              <nav aria-label={strings.menu.navLabel}>
                <ul className="flex flex-col gap-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        data-nav-item
                        href={`#${section.id}`}
                        className="menu-item flex min-h-11 items-center font-pixel text-display-m text-text no-underline"
                        onClick={(event) => {
                          event.preventDefault();
                          close(false);
                          goToSection(section.id);
                        }}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      data-nav-item
                      href="#about"
                      className="menu-item flex min-h-11 items-center text-body-s text-link"
                      onClick={(event) => {
                        event.preventDefault();
                        close(false);
                        goToSection("about");
                      }}
                    >
                      {strings.skipToSummary}
                    </a>
                  </li>
                </ul>
              </nav>
              <SettingsMenu locale={locale} strings={strings.settings} />
            </ArrowNav>
          </div>
        </>
      ) : null}
    </div>
  );
}
