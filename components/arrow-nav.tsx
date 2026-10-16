"use client";

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { playMove, playSelect } from "@/lib/sound";

type ArrowNavProps = {
  as?: "ul" | "ol" | "div";
  className?: string;
  children: ReactNode;
};

const ITEM_SELECTOR = "[data-nav-item]";

/**
 * Moves focus between descendant [data-nav-item] elements with the arrow keys
 * (plus Home/End), like a game menu cursor. Enter and Space keep their native
 * behavior on links and buttons. Only handles keys while focus is inside, so
 * page scrolling is never hijacked.
 */
export function ArrowNav({ as: Tag = "div", className, children }: ArrowNavProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    const container = event.currentTarget;
    const items = Array.from(container.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
    const current = items.findIndex((item) => item.contains(document.activeElement));
    if (current === -1) return;

    let next: number;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (current + 1) % items.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (current - 1 + items.length) % items.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = items.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    items[next].focus();
    playMove();
  }

  function handleClick(event: MouseEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest(ITEM_SELECTOR)) playSelect();
  }

  return (
    <Tag className={className} onKeyDown={handleKeyDown} onClick={handleClick}>
      {children}
    </Tag>
  );
}
