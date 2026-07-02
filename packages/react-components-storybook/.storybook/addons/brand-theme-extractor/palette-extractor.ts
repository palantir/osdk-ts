/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Vibrant } from "node-vibrant/browser";

import { contrastRatio, luminanceFromHex } from "./color-utils.js";
import { baseDefaults, valueAssignment } from "./presets.js";
import type { ThemeColorMode, TokenAssignment } from "./types.js";

export interface PaletteSwatch {
  hex: string;
  rgb: [number, number, number];
}

export interface ExtractedPalette {
  vibrant: PaletteSwatch | null;
  darkVibrant: PaletteSwatch | null;
  lightVibrant: PaletteSwatch | null;
  muted: PaletteSwatch | null;
  darkMuted: PaletteSwatch | null;
  lightMuted: PaletteSwatch | null;
}

/** Extract a 6-swatch palette from an image file using node-vibrant. */
export async function extractPalette(file: File): Promise<ExtractedPalette> {
  const dataUrl = await readFileAsDataUrl(file);
  return paletteFromSource(dataUrl);
}

/** Extract a palette from a direct image URL (data: or remote). */
export async function extractPaletteFromImageUrl(
  url: string
): Promise<ExtractedPalette> {
  return paletteFromSource(url);
}

/**
 * Extract a palette from a website by rendering it to a screenshot and reading
 * the pixels. Client-side JS cannot screenshot an arbitrary cross-origin page,
 * so we route through a public screenshot service that returns a CORS-friendly
 * image. Returns both the palette and the screenshot URL (for preview).
 */
export function websiteScreenshotUrl(rawUrl: string): string {
  const normalized = /^https?:\/\//i.test(rawUrl)
    ? rawUrl
    : `https://${rawUrl}`;
  // thum.io returns a screenshot image with permissive CORS and needs no key.
  return `https://image.thum.io/get/width/1200/crop/900/${normalized}`;
}

export async function extractPaletteFromWebsite(
  rawUrl: string
): Promise<{ palette: ExtractedPalette; screenshotUrl: string }> {
  const screenshotUrl = websiteScreenshotUrl(rawUrl);
  const palette = await paletteFromSource(screenshotUrl);
  return { palette, screenshotUrl };
}

async function paletteFromSource(source: string): Promise<ExtractedPalette> {
  const palette = await Vibrant.from(source).getPalette();

  function toSwatch(
    swatch: { hex: string; rgb: [number, number, number] } | null
  ): PaletteSwatch | null {
    if (!swatch) return null;
    return { hex: swatch.hex, rgb: swatch.rgb };
  }

  return {
    vibrant: toSwatch(palette.Vibrant),
    darkVibrant: toSwatch(palette.DarkVibrant),
    lightVibrant: toSwatch(palette.LightVibrant),
    muted: toSwatch(palette.Muted),
    darkMuted: toSwatch(palette.DarkMuted),
    lightMuted: toSwatch(palette.LightMuted),
  };
}

/**
 * Map an extracted palette to token assignments.
 *
 * Rather than dropping the raw palette swatches straight onto structural roles
 * (which produces muddy, low-contrast, "everything is the same hue" themes when
 * the source image is dominated by one color), we extract only the *brand hue*
 * from the image and then synthesize a coherent theme around it:
 *
 *   - Backgrounds/surfaces/borders are tinted neutrals: the brand hue carried at
 *     a small fraction of its saturation with lightness fixed per role, so the
 *     page is near-white (light) or near-black (dark) with a subtle brand cast.
 *   - Text is a near-neutral at the opposite end of the lightness scale, so
 *     body copy always clears WCAG AA against the background by construction.
 *   - Primary keeps the brand's hue and saturation but is clamped into a usable
 *     lightness band and nudged until it meets UI contrast against the surface,
 *     with its foreground chosen (white vs near-black) for maximum legibility.
 */
export function autoMapFromPalette(
  palette: ExtractedPalette,
  colorMode: ThemeColorMode
): TokenAssignment[] {
  const isDark = colorMode === "dark";
  const brand = rgbToHsl(pickBrandRgb(palette));
  const hue = brand.h;
  const brandSat = brand.s;

  // A tinted neutral: brand hue, a capped fraction of its saturation, fixed L.
  const tint = (lightness: number, satFraction: number): string =>
    hslToHex(hue, clamp(brandSat * satFraction, 0, 32), lightness);

  const backgroundHex = isDark ? tint(12, 0.35) : tint(98, 0.5);
  const surfaceHex = isDark ? tint(17, 0.4) : tint(96, 0.6);
  const inputBgHex = isDark ? tint(15, 0.35) : "#ffffff";
  const borderHex = isDark ? tint(30, 0.45) : tint(86, 0.7);
  const textHex = isDark ? tint(95, 0.14) : tint(15, 0.5);
  const textMutedHex = isDark ? tint(70, 0.16) : tint(40, 0.4);
  const textSubtleHex = isDark ? tint(52, 0.18) : tint(58, 0.3);
  const secondaryHex = isDark ? tint(24, 0.45) : tint(93, 0.7);

  // Primary: preserve the brand's character (hue + a vivid-enough saturation)
  // but land it in a lightness band that reads as an actionable accent, then
  // guarantee it stands out from the surface behind it.
  const primarySat = clamp(Math.max(brandSat, 45), 0, 100);
  const primaryL = clamp(brand.l, isDark ? 48 : 38, isDark ? 68 : 54);
  const surfaceLum = luminanceFromHex(surfaceHex) ?? (isDark ? 0 : 1);
  const primaryHsl = ensureContrast(
    { h: hue, s: primarySat, l: primaryL },
    surfaceLum,
    3, // WCAG AA for UI components / large text
    isDark ? "lighter" : "darker"
  );
  const primaryHex = hslToHex(primaryHsl.h, primaryHsl.s, primaryHsl.l);
  const primaryHoverHex = hslToHex(
    primaryHsl.h,
    primaryHsl.s,
    clamp(primaryHsl.l + (isDark ? 8 : -8), 4, 96)
  );
  const primaryFgHex = bestForeground(primaryHex);

  const shadow = isDark
    ? "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)"
    : "0 1px 3px oklch(0 0 0 / 0.12), 0 1px 2px oklch(0 0 0 / 0.08)";

  const colorAssignments: TokenAssignment[] = [
    valueAssignment("background", backgroundHex),
    valueAssignment("surface", surfaceHex),
    valueAssignment("input-bg", inputBgHex),
    valueAssignment(
      "overlay",
      isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(16, 22, 26, 0.7)"
    ),
    valueAssignment("border", borderHex),
    valueAssignment("text", textHex),
    valueAssignment("text-muted", textMutedHex),
    valueAssignment("text-subtle", textSubtleHex),
    valueAssignment("primary", primaryHex),
    valueAssignment("primary-hover", primaryHoverHex),
    valueAssignment("primary-foreground", primaryFgHex),
    valueAssignment("secondary", secondaryHex),
    valueAssignment("secondary-foreground", textHex),
    valueAssignment("icon-color", textMutedHex),
  ];

  return [...colorAssignments, ...baseDefaults({ shadow })];
}

/** Choose the most saturated swatch as the brand color (falls back to a blue). */
function pickBrandRgb(palette: ExtractedPalette): [number, number, number] {
  const candidates = [
    palette.vibrant,
    palette.darkVibrant,
    palette.lightVibrant,
    palette.muted,
    palette.darkMuted,
    palette.lightMuted,
  ].filter((s): s is PaletteSwatch => s != null);

  if (candidates.length === 0) return [45, 114, 210];

  let best = candidates[0];
  let bestSat = -1;
  for (const candidate of candidates) {
    const sat = rgbToHsl(candidate.rgb).s;
    if (sat > bestSat) {
      bestSat = sat;
      best = candidate;
    }
  }
  return best.rgb;
}

interface Hsl {
  /** Hue in degrees, 0-360 */
  h: number;
  /** Saturation, 0-100 */
  s: number;
  /** Lightness, 0-100 */
  l: number;
}

function rgbToHsl([r, g, b]: [number, number, number]): Hsl {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;
  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case rn:
        h = ((gn - bn) / delta) % 6;
        break;
      case gn:
        h = (bn - rn) / delta + 2;
        break;
      default:
        h = (rn - gn) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s: s * 100, l: l * 100 };
}

function hslToHex(h: number, s: number, l: number): string {
  const sn = clamp(s, 0, 100) / 100;
  const ln = clamp(l, 0, 100) / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const hp = (((h % 360) + 360) % 360) / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r = 0;
  let g = 0;
  let b = 0;
  if (hp < 1) [r, g, b] = [c, x, 0];
  else if (hp < 2) [r, g, b] = [x, c, 0];
  else if (hp < 3) [r, g, b] = [0, c, x];
  else if (hp < 4) [r, g, b] = [0, x, c];
  else if (hp < 5) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const m = ln - c / 2;
  const toHex = (v: number): string =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Nudge a color's lightness until it clears `minContrast` against `bgLum`. */
function ensureContrast(
  color: Hsl,
  bgLum: number,
  minContrast: number,
  direction: "lighter" | "darker"
): Hsl {
  const step = direction === "lighter" ? 3 : -3;
  const result = { ...color };
  for (let i = 0; i < 34; i++) {
    const lum = luminanceFromHex(hslToHex(result.h, result.s, result.l)) ?? 0;
    if (contrastRatio(lum, bgLum) >= minContrast) break;
    const next = result.l + step;
    if (next <= 0 || next >= 100) break;
    result.l = next;
  }
  return result;
}

/** Pick white or near-black for text on top of `hex`, whichever contrasts more. */
function bestForeground(hex: string): string {
  const lum = luminanceFromHex(hex) ?? 0;
  const darkText = "#111418";
  const whiteContrast = contrastRatio(1, lum);
  const darkContrast = contrastRatio(luminanceFromHex(darkText) ?? 0, lum);
  return whiteContrast >= darkContrast ? "#ffffff" : darkText;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result as string));
    reader.addEventListener("error", () =>
      reject(new Error("Failed to read file"))
    );
    reader.readAsDataURL(file);
  });
}
