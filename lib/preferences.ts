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

/**
 * Runs in <head> before first paint, so the page never flashes the wrong theme.
 * Order: saved choice, then prefers-color-scheme, then dark.
 */
export const themeInitScript = `(function(){var t;try{t=localStorage.getItem("${THEME_KEY}")}catch(e){}if(t!=="dark"&&t!=="light"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t})();`;
