"use client";

import { useState, type CSSProperties } from "react";
import type { SkillCategory, SkillItem } from "@/content/skills";
import type { Locale } from "@/lib/i18n";
import type { UiStrings } from "@/locales";
import { ArrowNav } from "./arrow-nav";
import { PixelIcon } from "./pixel-icon";

type InventoryProps = {
  locale: Locale;
  categories: SkillCategory[];
  strings: UiStrings["skills"];
};

// Each category has its own accent (docs/STYLE_GUIDE.md#inventory).
const categoryAccent: Record<SkillCategory["id"], string> = {
  frontend: "var(--link)",
  backend: "var(--primary)",
  platforms: "var(--special)",
  creative: "var(--success)",
};

type Selection = { item: SkillItem; category: SkillCategory };

/**
 * Skills as an RPG inventory. Hovering, focusing or tapping a slot shows the
 * item in a fixed description panel (beside the grid on large screens, under
 * the item's category on small ones), so nothing floats over the grid.
 */
export function Inventory({ locale, categories, strings }: InventoryProps) {
  const [selected, setSelected] = useState<Selection>({
    item: categories[0].items[0],
    category: categories[0],
  });

  const details = <ItemDetails selection={selected} locale={locale} strings={strings} />;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div>
        <p className="mb-6 text-body-s text-muted">{strings.hint}</p>
        <ArrowNav className="flex flex-col gap-10">
          {categories.map((category) => {
            const accent = categoryAccent[category.id];
            return (
              <section key={category.id} aria-labelledby={`skills-${category.id}`}>
                <h3
                  id={`skills-${category.id}`}
                  className="mb-4 flex items-center gap-3 font-display text-title-s leading-none uppercase"
                  style={{ color: accent }}
                >
                  {category.name[locale]}
                  <span className="chip text-muted">
                    {category.items.length} {strings.itemsLabel}
                  </span>
                </h3>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-3">
                  {category.items.map((item) => {
                    const isSelected = selected.item.id === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          data-nav-item
                          aria-pressed={isSelected}
                          aria-describedby={item.usage ? `skill-usage-${item.id}` : undefined}
                          onMouseEnter={() => setSelected({ item, category })}
                          onFocus={() => setSelected({ item, category })}
                          onClick={() => setSelected({ item, category })}
                          className="group flex h-full min-h-[108px] w-full cursor-pointer flex-col items-center justify-center gap-2 border-3 border-border bg-surface-raised p-2 text-center"
                          style={{
                            boxShadow: isSelected
                              ? `inset 3px 3px 0 var(--bevel-light), inset -3px -3px 0 var(--bevel-dark), 0 0 calc(16px * var(--glow-strength)) ${accent}`
                              : "inset 3px 3px 0 var(--bevel-light), inset -3px -3px 0 var(--bevel-dark)",
                            borderColor: isSelected ? accent : undefined,
                          }}
                        >
                          <span style={{ color: accent }}>
                            <PixelIcon name={item.icon} scale={2} />
                          </span>
                          <span className="text-label leading-tight font-semibold">
                            {item.name[locale]}
                          </span>
                          {item.usage ? (
                            <span id={`skill-usage-${item.id}`} className="sr-only">
                              {item.usage[locale]}
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {selected.category.id === category.id ? (
                  <div className="mt-4 lg:hidden">{details}</div>
                ) : null}
              </section>
            );
          })}
        </ArrowNav>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-24">{details}</div>
      </aside>
    </div>
  );
}

function ItemDetails({
  selection,
  locale,
  strings,
}: {
  selection: Selection;
  locale: Locale;
  strings: UiStrings["skills"];
}) {
  const { item, category } = selection;
  const accent = categoryAccent[category.id];
  // A visual copy of the slot's description, which screen readers already get.
  return (
    <div
      aria-hidden="true"
      className="panel panel-glow"
      style={{ "--glow": accent } as CSSProperties}
    >
      <div className="flex items-center gap-4">
        <span
          className="flex size-[88px] shrink-0 items-center justify-center border-3 border-border bg-bg-deep"
          style={{ color: accent }}
        >
          <PixelIcon name={item.icon} scale={3} />
        </span>
        <div className="min-w-0">
          <span className="chip mb-2" style={{ color: accent }}>
            {category.name[locale]}
          </span>
          <p className="font-display text-title-s leading-none break-words">{item.name[locale]}</p>
        </div>
      </div>
      {item.usage ? (
        <div className="mt-5 border-t-3 border-dashed border-muted pt-4">
          <p className="text-label font-bold tracking-wider uppercase" style={{ color: accent }}>
            {strings.usageLabel}
          </p>
          <p className="mt-1 text-body">{item.usage[locale]}</p>
        </div>
      ) : null}
    </div>
  );
}
