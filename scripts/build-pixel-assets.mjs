// Generates the pixel-art bitmaps in public/ from the avatar sprite:
// og.png (1200×630), favicon.svg, favicon-32.png and apple-touch-icon.png.
// No dependencies: PNGs are encoded with node:zlib, and content/avatar.ts is
// imported through Node's built-in TypeScript support (Node 22.18+).
// Run with `npm run assets`.

import { writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";
import { avatarColors as spriteColors, avatarSprite as sprite } from "../content/avatar.ts";

const palette = {
  void: "#0e0a06",
  night: "#15100b",
  dusk: "#241b12",
  umber: "#35281a",
  clay: "#7a4a26",
  rust: "#8c3b1f",
  orange: "#e8761e",
  amber: "#ffb000",
  butter: "#ffe08a",
  parchment: "#f6e7c8",
  khaki: "#b8a07a",
};

// 5×7 bitmap glyphs for the few letters the image needs.
const glyphs = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  J: ["00111", "00010", "00010", "00010", "00010", "10010", "01100"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
};

function hexToRgba(hex) {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255, 255];
}

function createCanvas(width, height) {
  const pixels = new Uint8Array(width * height * 4);
  const canvas = {
    width,
    height,
    pixels,
    rect(x, y, w, h, hex) {
      const rgba = hexToRgba(hex);
      for (let row = y; row < y + h; row++) {
        for (let col = x; col < x + w; col++) {
          if (col < 0 || row < 0 || col >= width || row >= height) continue;
          pixels.set(rgba, (row * width + col) * 4);
        }
      }
    },
    sprite(x, y, scale) {
      sprite.forEach((line, row) => {
        [...line].forEach((key, col) => {
          const color = spriteColors[key];
          if (color) canvas.rect(x + col * scale, y + row * scale, scale, scale, color);
        });
      });
    },
    text(x, y, scale, value, hex) {
      [...value].forEach((char, index) => {
        glyphs[char].forEach((line, row) => {
          [...line].forEach((bit, col) => {
            if (bit === "1") {
              canvas.rect(x + (index * 6 + col) * scale, y + row * scale, scale, scale, hex);
            }
          });
        });
      });
    },
  };
  return canvas;
}

/** Nearest-neighbor upscale by an integer factor. */
function upscale(source, factor) {
  const target = createCanvas(source.width * factor, source.height * factor);
  for (let y = 0; y < target.height; y++) {
    for (let x = 0; x < target.width; x++) {
      const from = ((Math.floor(y / factor) * source.width) + Math.floor(x / factor)) * 4;
      target.pixels.set(source.pixels.subarray(from, from + 4), (y * target.width + x) * 4);
    }
  }
  return target;
}

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = crcTable[(crc ^ byte) & 255] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
}

function encodePng({ width, height, pixels }) {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8; // bit depth
  header[9] = 6; // RGBA
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0; // no filter
    Buffer.from(pixels.buffer, y * width * 4, width * 4).copy(raw, y * (width * 4 + 1) + 1);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// Open Graph image: 400×210 art at 3x = 1200×630. A sunset frame in the
// site's "Metal Slug" palette, with the portrait and the name.
const og = createCanvas(400, 210);
const skyBands = [
  [0, palette.void],
  [40, palette.night],
  [70, palette.dusk],
  [95, palette.umber],
  [118, palette.clay],
  [140, palette.rust],
  [158, palette.orange],
  [176, palette.amber],
];
skyBands.forEach(([y], index) => {
  const next = skyBands[index + 1]?.[0] ?? 210;
  og.rect(0, y, 400, next - y, skyBands[index][1]);
});
og.rect(12, 12, 376, 186, palette.parchment);
og.rect(16, 16, 368, 178, palette.void);
og.rect(18, 18, 364, 174, palette.khaki);
const innerBands = [
  [20, palette.void],
  [62, palette.night],
  [88, palette.dusk],
  [110, palette.umber],
  [130, palette.clay],
  [152, palette.rust],
  [166, palette.orange],
  [178, palette.amber],
];
innerBands.forEach(([y, color], index) => {
  const next = innerBands[index + 1]?.[0] ?? 190;
  og.rect(20, y, 360, next - y, color);
});
og.sprite(81, 54, 3); // 96×96
og.text(193, 64, 3, "LEANDRO", palette.amber);
og.text(193, 94, 3, "JUNIOR", palette.butter);
og.text(193, 134, 2, "PRESS START", palette.parchment);
writeFileSync("public/og.png", encodePng(upscale(og, 3)));

// Favicons: the sprite on a night background.
const icon = createCanvas(32, 32);
icon.rect(0, 0, 32, 32, palette.night);
icon.sprite(0, 0, 1);
writeFileSync("public/favicon-32.png", encodePng(icon));

const touch = createCanvas(36, 36); // 32 px art + 2 px padding, at 5x = 180
touch.rect(0, 0, 36, 36, palette.night);
touch.sprite(2, 2, 1);
writeFileSync("public/apple-touch-icon.png", encodePng(upscale(touch, 5)));

const rects = sprite
  .flatMap((line, y) =>
    [...line].map((key, x) =>
      spriteColors[key] ? `<rect x="${x}" y="${y}" width="1" height="1" fill="${spriteColors[key]}"/>` : "",
    ),
  )
  .join("");
writeFileSync(
  "public/favicon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges"><rect width="32" height="32" fill="${palette.night}"/>${rects}</svg>\n`,
);

console.log("Wrote public/og.png, favicon.svg, favicon-32.png, apple-touch-icon.png");
