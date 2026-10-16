// Short menu blips synthesized with the Web Audio API.
// No audio files. Nothing plays unless the visitor has turned sound on.

import { loadSound, saveSound } from "./preferences";

type Listener = () => void;

let enabled: boolean | null = null;
let context: AudioContext | null = null;
const listeners = new Set<Listener>();

export function isSoundOn(): boolean {
  if (enabled === null) enabled = loadSound();
  return enabled;
}

export function setSoundOn(on: boolean) {
  enabled = on;
  saveSound(on);
  // Browsers only allow an AudioContext to start from a user gesture,
  // and this runs from the toggle's click handler.
  if (on) getContext();
  listeners.forEach((listener) => listener());
}

export function subscribeSound(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getContext(): AudioContext | null {
  if (context) return context;
  try {
    context = new AudioContext();
  } catch {
    context = null;
  }
  return context;
}

function blip(frequency: number, duration: number) {
  if (!isSoundOn()) return;
  const ctx = getContext();
  if (!ctx) return;
  if (ctx.state === "suspended") void ctx.resume();

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "square";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.04, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + duration);
}

export function playMove() {
  blip(660, 0.05);
}

export function playSelect() {
  blip(990, 0.09);
}
