"use client";

import { useEffect, type CSSProperties } from "react";
import { markBootSeen } from "@/lib/preferences";
import type { UiStrings } from "@/locales";

const BOOT_DURATION_MS = 2600;

type BootScreenProps = {
  strings: UiStrings["boot"];
  title: string;
  tagline: string;
};

function finishBoot() {
  document.documentElement.classList.remove("boot-active");
  markBootSeen();
}

/**
 * Arcade boot sequence shown once per session over the title screen.
 * It only appears when the <head> script sets "boot-active" (JS on, no
 * reduced-motion preference). Any key, click or tap skips it, and CSS hides
 * it on its own after a few seconds even if this component never runs.
 */
export function BootScreen({ strings, title, tagline }: BootScreenProps) {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("boot-active")) return;

    const timer = window.setTimeout(finishBoot, BOOT_DURATION_MS);
    const skip = () => {
      window.clearTimeout(timer);
      finishBoot();
    };
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("pointerdown", skip, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  return (
    <div aria-hidden="true" className="boot-screen">
      <div className="absolute top-12 w-[min(420px,calc(100%-48px))] font-ui text-[15px] tracking-[0.1em] md:top-16">
        <p className="boot-line text-cyan" style={{ "--d": "0ms" } as CSSProperties}>
          {strings.system}
        </p>
        {strings.checks.map((check, index) => (
          <p
            key={check}
            className="boot-line flex justify-between gap-6"
            style={{ "--d": `${150 + index * 180}ms` } as CSSProperties}
          >
            <span>{check}</span>
            <span className="text-green">{strings.ok}</span>
          </p>
        ))}
        <div className="boot-line mt-4" style={{ "--d": "700ms" } as CSSProperties}>
          <p className="text-yellow">{strings.loading}</p>
          <div className="mt-2 h-4 border-2 border-cream p-0.5">
            <div className="boot-bar h-full bg-[repeating-linear-gradient(90deg,#ffd23f_0_10px,#ff8a3d_10px_12px)]" />
          </div>
        </div>
      </div>

      <div className="boot-line text-center" style={{ "--d": "1500ms" } as CSSProperties}>
        <p
          className="arcade-text logo-in text-[56px] leading-[0.85] md:text-logo"
          style={{ animationDelay: "1500ms" }}
        >
          {title}
        </p>
        <p className="mt-4 font-ui text-label font-bold tracking-[0.3em] text-cyan">{tagline}</p>
      </div>

      <p
        className="boot-line absolute bottom-12 font-ui text-label font-bold tracking-[0.2em] text-cream"
        style={{ "--d": "300ms" } as CSSProperties}
      >
        <span className="blink">{strings.skip}</span>
      </p>
      <p className="absolute bottom-4 font-ui text-[12px] text-haze">{strings.copyright}</p>
      <div className="scanlines" />
    </div>
  );
}
