"use client";

import { useState } from "react";
import type { TimelineStage } from "@/content/timeline";
import type { Locale } from "@/lib/i18n";
import type { PixelIconName } from "@/lib/pixel-icons";
import type { UiStrings } from "@/locales";
import { ArrowNav } from "./arrow-nav";
import { PixelIcon } from "./pixel-icon";
import { TrackedLink } from "./tracked-link";
import { TypedText } from "./typed-text";

type WorldMapProps = {
  locale: Locale;
  stages: TimelineStage[];
  strings: UiStrings["timeline"];
};

function years(stage: TimelineStage, present: string) {
  if (stage.from === null) return "???";
  if (stage.to === null) return String(stage.from);
  return `${stage.from}–${stage.to === "present" ? present : stage.to}`;
}

function stageIcon(stage: TimelineStage): PixelIconName {
  if (stage.status === "offline") return "power-off";
  if (stage.status === "next") return "circle-question";
  return "map-pin";
}

/** Timeline as a static world map: pick a stage to open its dialog. */
export function WorldMap({ locale, stages, strings }: WorldMapProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = stages.find((stage) => stage.id === selectedId);

  return (
    <div>
      <ArrowNav as="ol" className="grid gap-4 sm:grid-cols-2">
        {stages.map((stage, index) => {
          const isSelected = stage.id === selectedId;
          const offline = stage.status === "offline";
          return (
            <li key={stage.id} className="relative">
              {index < stages.length - 1 ? (
                // Dotted path to the next stage (mobile, single column).
                <span
                  aria-hidden="true"
                  className="absolute top-full left-10 h-4 border-l-4 border-dotted border-border-inner sm:hidden"
                />
              ) : null}
              <button
                type="button"
                data-nav-item
                aria-expanded={isSelected}
                aria-controls="world-map-dialog"
                onClick={() => setSelectedId(isSelected ? null : stage.id)}
                className={`flex h-full w-full cursor-pointer items-center gap-4 border-4 p-4 text-left ${
                  isSelected ? "border-primary bg-surface" : "border-border-inner bg-bg"
                } ${stage.status === "next" ? "border-dashed" : ""}`}
              >
                <span className={offline ? "text-danger opacity-80" : "text-link"}>
                  <PixelIcon name={stageIcon(stage)} scale={2} />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-pixel text-display-m break-words">
                    {stage.title[locale]}
                  </span>
                  <span className="text-body-s text-muted">{years(stage, strings.present)}</span>
                  {offline ? (
                    <span className="text-body-s text-danger">{strings.offline}</span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ArrowNav>

      <div id="world-map-dialog" aria-live="polite" className="mt-6">
        {selected ? (
          <div key={selected.id} className="dialog-box screen-in">
            <p className="mb-2 font-pixel text-display-m text-primary">
              {selected.title[locale]}
            </p>
            <p className="text-body">
              <TypedText text={selected.text[locale]} />
            </p>
            {selected.status === "next" ? (
              <TrackedLink
                href="#partnerships"
                event={{ name: "contact_click", channel: "timeline" }}
                className="pixel-button pixel-button-primary mt-4"
              >
                {strings.buildWithMe}
              </TrackedLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
