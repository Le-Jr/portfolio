import type { ReactNode } from "react";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";
import type { UiStrings } from "@/locales";
import { PixelIcon } from "./pixel-icon";
import { TrackedLink } from "./tracked-link";

type CartridgeProps = {
  project: Project;
  locale: Locale;
  strings: UiStrings["projects"];
};

/**
 * A big arcade cartridge: dark plastic shell with grip ridges and a label
 * window. The shell is always dark (it's an object, not a themed surface);
 * the label shows the project's own look.
 */
function Shell({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <article className="flex h-full flex-col border-3 border-void bg-[linear-gradient(180deg,#2c2870_0_8px,#1c1a4a_8px)] text-cream shadow-[inset_3px_3px_0_#4a4680,inset_-3px_-3px_0_#07061a,8px_8px_0_rgb(7_6_26/0.5)]">
      <div
        aria-hidden="true"
        className="mx-6 mt-3 h-3 bg-[repeating-linear-gradient(90deg,#07061a_0_6px,transparent_6px_12px)]"
      />
      <div className="p-4">
        <div className="relative overflow-hidden border-3 border-void shadow-[inset_0_0_0_2px_#4a4680]">
          {label}
          <div className="scanlines" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 pb-5">{children}</div>
    </article>
  );
}

export function Cartridge({ project, locale, strings }: CartridgeProps) {
  if (project.kind === "coming-soon") {
    return (
      <Shell
        label={
          <div className="flex h-44 items-center justify-center bg-[repeating-linear-gradient(0deg,#1c1a4a_0_2px,#0f0e2a_2px_4px)]">
            <span className="font-display text-[72px] leading-none text-haze">???</span>
          </div>
        }
      >
        <p className="font-display text-title leading-none text-haze uppercase">
          {strings.comingSoon}
        </p>
        <p className="text-body-s text-haze">{project.description[locale]}</p>
      </Shell>
    );
  }

  return (
    <Shell
      label={
        // Each cartridge shows its own project's look; Lords of Logic is a terminal.
        <div className="flex h-44 flex-col justify-center gap-1 bg-void px-5 font-mono text-[17px] leading-snug text-green">
          <span aria-hidden="true" className="text-haze">
            $ ./lords-of-logic --start
          </span>
          <span aria-hidden="true">[ok] loading questions...</span>
          <span className="text-[22px] font-bold">
            &gt; {project.name.toUpperCase()}
            <span className="blink">_</span>
          </span>
        </div>
      }
    >
      <h3 className="arcade-text text-title leading-none">{project.name}</h3>
      <dl className="grid gap-1 text-body-s">
        <div>
          <dt className="inline text-haze">{strings.genreLabel}: </dt>
          <dd className="inline">{project.genre[locale]}</dd>
        </div>
        <div>
          <dt className="inline text-haze">{strings.builtWithLabel}: </dt>
          <dd className="inline">{project.builtWith[locale]}</dd>
        </div>
      </dl>
      <p className="text-body-s">{project.description[locale]}</p>
      <div className="mt-auto flex flex-wrap gap-3 pt-3">
        <TrackedLink
          href={project.url}
          target="_blank"
          rel="noopener"
          event={{ name: "play_click", project: project.id }}
          className="arcade-button arcade-button-primary"
        >
          {strings.play}
          <PixelIcon name="external-link" />
          <span className="sr-only">{strings.opensInNewTab}</span>
        </TrackedLink>
      </div>
    </Shell>
  );
}
