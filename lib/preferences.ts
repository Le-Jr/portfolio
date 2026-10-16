// Visitor preferences persisted in localStorage.
// Every access is wrapped in try/catch: storage throws in some private modes
// or when blocked, and the site must work without it.

export type Theme = "dark" | "light";

const THEME_KEY = "pref:v1:theme";
const SOUND_KEY = "pref:v1:sound";

function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage unavailable: the choice lasts for this page view only.
  }
}

export function saveTheme(theme: Theme) {
  write(THEME_KEY, theme);
}

export function loadSound(): boolean {
  return read(SOUND_KEY) === "on";
}

export function saveSound(on: boolean) {
  write(SOUND_KEY, on ? "on" : "off");
}

export const BOOT_SEEN_KEY = "session:v1:boot-seen";

/** Marks the arcade boot screen as seen for this browser session. */
export function markBootSeen() {
  try {
    window.sessionStorage.setItem(BOOT_SEEN_KEY, "1");
  } catch {
    // Without storage the boot screen simply plays again next visit.
  }
}

/**
 * Runs in <head> before first paint, so the page never flashes the wrong theme.
 * - Theme order: saved choice, then prefers-color-scheme, then dark.
 * - "motion-ok": the visitor has not asked for reduced motion (enables reveals).
 * - "boot-active": show the arcade boot screen once per session, never with
 *   reduced motion. Without JS none of these classes are set, and all content
 *   stays visible.
 */
export const themeInitScript = `(function(){var d=document.documentElement,t;try{t=localStorage.getItem("${THEME_KEY}")}catch(e){}if(t!=="dark"&&t!=="light"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}d.dataset.theme=t;var m=!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);if(m){d.classList.add("motion-ok");var s=null;try{s=sessionStorage.getItem("${BOOT_SEEN_KEY}")}catch(e){}if(!s)d.classList.add("boot-active")}})();`;
