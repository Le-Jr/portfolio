"use client";

import { useEffect, useState } from "react";
import type { SkillCategory } from "@/content/skills";
import type { Locale } from "@/lib/i18n";
import type { UiStrings } from "@/locales";
import { ArrowNav } from "./arrow-nav";
import { PixelIcon } from "./pixel-icon";

type InventoryProps = {
  locale: Locale;
  categories: SkillCategory[];
  strings: UiStrings["skills"];
};

type Align = "left" | "center" | "right";

const TOOLTIP_HALF_WIDTH = 136; // half of w-64 plus a margin

// Keep the tooltip inside the viewport for slots near the screen edges.
function alignFor(element: HTMLElement): Align {
  const { left, right } = element.getBoundingClientRect();
  const center = (left + right) / 2;
  if (center < TOOLTIP_HALF_WIDTH) return "left";
  if (window.innerWidth - center < TOOLTIP_HALF_WIDTH) return "right";
  return "center";
}

const alignClass: Record<Align, string> = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
  right: "right-0",
};

// Each category has its own frame color (docs/STYLE_GUIDE.md#inventory-slot).
const categoryColor: Record<SkillCategory["id"], string> = {
  frontend: "border-link",
  backend: "border-primary",
  platforms: "border-special",
  creative: "border-success",
};

/** Skills as an RPG inventory: hover, focus or tap a slot to read where it's used. */
export function Inventory({ locale, categories, strings }: InventoryProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [align, setAlign] = useState<Align>("center");

  function openSlot(id: string, element: HTMLElement) {
    setAlign(alignFor(element));
    setOpenId(id);
  }

  // Tapping anywhere outside a slot closes the open tooltip.
  useEffect(() => {
    if (!openId) return;
    function handlePointerDown(event: PointerEvent) {
      if (!(event.target as HTMLElement).closest("[data-slot]")) setOpenId(null);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openId]);

  return (
    <ArrowNav className="flex flex-col gap-10">
      {categories.map((category) => (
        <section key={category.id} aria-labelledby={`skills-${category.id}`}>
          <h3
            id={`skills-${category.id}`}
            className="mb-4 font-pixel text-display-m text-muted"
          >
            {category.name[locale]}
          </h3>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(104px,1fr))] gap-3">
            {category.items.map((item) => {
              const isOpen = openId === item.id;
              const tooltipId = `skill-tip-${item.id}`;
              return (
                <li
                  key={item.id}
                  data-slot
                  className="relative"
                  onMouseEnter={(event) => item.usage && openSlot(item.id, event.currentTarget)}
                  onMouseLeave={() => setOpenId((id) => (id === item.id ? null : id))}
                >
                  <button
                    type="button"
                    data-nav-item
                    aria-describedby={item.usage ? tooltipId : undefined}
                    aria-expanded={item.usage ? isOpen : undefined}
                    // Opens only: a tap also fires focus first, so toggling here would close it again.
                    onClick={(event) => item.usage && openSlot(item.id, event.currentTarget)}
                    onFocus={(event) => item.usage && openSlot(item.id, event.currentTarget)}
                    onBlur={() => setOpenId((id) => (id === item.id ? null : id))}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") setOpenId(null);
                    }}
                    className={`flex h-full w-full cursor-pointer flex-col items-center gap-2 border-4 bg-surface p-3 text-center ${
                      categoryColor[category.id]
                    }`}
                  >
                    <span className="text-link">
                      <PixelIcon name={item.icon} scale={2} />
                    </span>
                    <span className="text-body-s leading-tight">{item.name[locale]}</span>
                  </button>
                  {item.usage ? (
                    <div
                      id={tooltipId}
                      role="tooltip"
                      hidden={!isOpen}
                      className={`dialog-box absolute top-full z-20 mt-2 w-64 p-3! md:p-4! ${alignClass[align]}`}
                    >
                      <span className="block text-body-s text-primary">
                        {strings.usageLabel}
                      </span>
                      <span className="mt-1 block text-body-s">{item.usage[locale]}</span>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </ArrowNav>
  );
}
