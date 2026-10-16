import type { CSSProperties } from "react";
import type { TimelineStage } from "@/content/timeline";
import type { Locale } from "@/lib/i18n";
import type { PixelIconName } from "@/lib/pixel-icons";
import type { UiStrings } from "@/locales";
import { PixelIcon } from "./pixel-icon";
import { Reveal } from "./reveal";
import { TrackedLink } from "./tracked-link";

type CareerTimelineProps = {
  locale: Locale;
  stages: TimelineStage[];
  strings: UiStrings;
};

function years(stage: TimelineStage, present: string) {
  if (stage.from === null) return "20??";
  if (stage.to === null) return String(stage.from);
  return `${stage.from}–${stage.to === "present" ? present : stage.to}`;
}

function stageIcon(stage: TimelineStage): PixelIconName {
  if (stage.status === "offline") return "power-off";
  if (stage.status === "next") return "circle-question";
  return "map-pin";
}

/** Career as a vertical run of stages, one after another, top to bottom. */
export function CareerTimeline({ locale, stages, strings }: CareerTimelineProps) {
  const t = strings.timeline;
  return (
    <ol className="relative flex flex-col gap-10">
      {/* The track that links every stage, like a level path. */}
      <span
        aria-hidden="true"
        className="absolute top-6 bottom-6 left-[27px] w-1.5 bg-[repeating-linear-gradient(180deg,var(--link)_0_10px,transparent_10px_18px)] opacity-70 md:left-[35px]"
      />
      {stages.map((stage, index) => {
        const offline = stage.status === "offline";
        const isNext = stage.status === "next";
        const isCurrent = stage.to === "present";
        const accent = offline ? "var(--danger)" : isNext ? "var(--special)" : isCurrent ? "var(--primary)" : "var(--link)";
        return (
          <li key={stage.id} className="relative grid grid-cols-[60px_1fr] gap-4 md:grid-cols-[76px_1fr] md:gap-6">
            {/* Stage node */}
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="flex size-[60px] items-center justify-center border-3 border-border bg-surface md:size-[76px]"
                style={{ color: accent, boxShadow: `inset 3px 3px 0 var(--bevel-light), inset -3px -3px 0 var(--bevel-dark), 0 0 calc(18px * var(--glow-strength)) ${accent}` }}
              >
                <PixelIcon name={stageIcon(stage)} scale={2} />
              </span>
            </div>

            <Reveal>
              <article className={`panel ${isCurrent || isNext ? "panel-glow" : ""}`} style={{ "--glow": accent } as CSSProperties}>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="chip" style={{ color: accent }}>
                    {isNext ? "???" : `${strings.stageLabel} ${index + 1}`}
                  </span>
                  <span className="font-display text-title-s leading-none text-muted">
                    {years(stage, t.present)}
                  </span>
                  {isCurrent ? <span className="chip text-primary">{t.current}</span> : null}
                  {offline ? (
                    <span className="chip text-danger">
                      <PixelIcon name="power-off" />
                      {t.offline}
                    </span>
                  ) : null}
                </div>
                <h3 className="arcade-text section-title text-title leading-none md:text-title-l">
                  {stage.title[locale]}
                </h3>
                <p className="mt-3 max-w-3xl text-body">{stage.text[locale]}</p>
                {isNext ? (
                  <TrackedLink
                    href="#partnerships"
                    event={{ name: "contact_click", channel: "timeline" }}
                    className="arcade-button arcade-button-primary mt-5"
                  >
                    {t.buildWithMe}
                  </TrackedLink>
                ) : null}
              </article>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
