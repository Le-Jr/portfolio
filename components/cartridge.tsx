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

/** The cartridge shell: grip ridges on top, a label window, then the details. */
function Shell({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <article className="flex flex-col border-4 border-border bg-surface">
      <div
        aria-hidden="true"
        className="h-4 border-b-4 border-border bg-[repeating-linear-gradient(90deg,var(--border-inner)_0_8px,transparent_8px_16px)]"
      />
      <div className="p-4">
        <div className="border-4 border-border-inner">{label}</div>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-4 pb-4">{children}</div>
    </article>
  );
}

export function Cartridge({ project, locale, strings }: CartridgeProps) {
  if (project.kind === "coming-soon") {
    return (
      <Shell
        label={
          <div className="flex h-32 items-center justify-center bg-bg font-pixel text-display-l text-muted">
            ???
          </div>
        }
      >
        <p className="font-pixel text-display-m text-muted">{strings.comingSoon}</p>
        <p className="text-body-s text-muted">{project.description[locale]}</p>
      </Shell>
    );
  }

  return (
    <Shell
      label={
        // Each cartridge shows its own project's look; Lords of Logic is a terminal.
        <div className="flex h-32 flex-col justify-center gap-1 bg-night px-4 font-mono text-[18px] leading-tight text-green">
          <span aria-hidden="true">$ ./play</span>
          <span className="font-bold">&gt; {project.name.toUpperCase()}_</span>
        </div>
      }
    >
      <h3 className="font-pixel text-display-m text-primary">{project.name}</h3>
      <dl className="grid gap-1 text-body-s">
        <div>
          <dt className="inline text-muted">{strings.genreLabel}: </dt>
          <dd className="inline">{project.genre[locale]}</dd>
        </div>
        <div>
          <dt className="inline text-muted">{strings.builtWithLabel}: </dt>
          <dd className="inline">{project.builtWith[locale]}</dd>
        </div>
      </dl>
      <p className="text-body-s">{project.description[locale]}</p>
      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <TrackedLink
          href={project.url}
          target="_blank"
          rel="noopener"
          event={{ name: "play_click", project: project.id }}
          className="pixel-button pixel-button-primary"
        >
          {strings.play}
          <PixelIcon name="external-link" />
          <span className="sr-only">{strings.opensInNewTab}</span>
        </TrackedLink>
      </div>
    </Shell>
  );
}
