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

/** Convert RGB (0-255) to hex string */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (c: number) => Math.round(c).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Linearize an sRGB channel (0-255 to 0-1 linear) */
function linearize(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/** WCAG relative luminance (0-1) from RGB (0-255) */
export function relativeLuminance(
  r: number,
  g: number,
  b: number,
): number {
  return 0.2126 * linearize(r) + 0.7152 * linearize(g)
    + 0.0722 * linearize(b);
}

/** WCAG contrast ratio between two relative luminance values */
export function contrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** WCAG AA minimum contrast for normal text */
export const WCAG_AA_NORMAL = 4.5;
/** WCAG AA minimum contrast for large text (18px+ bold or 24px+) */
export const WCAG_AA_LARGE = 3;

/** Parse hex color to RGB tuple */
export function hexToRgb(hex: string): [number, number, number] | null {
  const match = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
  if (!match) return null;
  return [
    parseInt(match[1], 16),
    parseInt(match[2], 16),
    parseInt(match[3], 16),
  ];
}

/** Get luminance from hex color */
export function luminanceFromHex(hex: string): number | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return relativeLuminance(rgb[0], rgb[1], rgb[2]);
}

/**
 * Adjust a hex color to meet a target contrast ratio against a background.
 * Darkens or lightens the color as needed.
 */
export function adjustForContrast(
  hex: string,
  bgLuminance: number,
  targetRatio: number,
): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const fgLuminance = relativeLuminance(rgb[0], rgb[1], rgb[2]);
  const currentRatio = contrastRatio(fgLuminance, bgLuminance);

  if (currentRatio >= targetRatio) return hex;

  // Determine direction: darken if fg is darker than bg, lighten if fg is lighter
  const shouldDarken = fgLuminance < bgLuminance;
  // If bg is very dark and fg is also dark, we need to lighten fg instead
  const shouldLighten = !shouldDarken;

  let [r, g, b] = rgb;
  const step = shouldLighten ? 3 : -3;

  // Iteratively adjust until contrast is met (max 100 steps)
  for (let i = 0; i < 100; i++) {
    r = Math.max(0, Math.min(255, r + step));
    g = Math.max(0, Math.min(255, g + step));
    b = Math.max(0, Math.min(255, b + step));

    const newLum = relativeLuminance(r, g, b);
    if (contrastRatio(newLum, bgLuminance) >= targetRatio) {
      break;
    }
  }

  return rgbToHex(r, g, b);
}

/**
 * Compute chroma (saturation proxy) via OKLab color space.
 * Only the relative ranking matters for auto-mapping heuristics.
 */
export function chromaFromRgb(
  r: number,
  g: number,
  b: number,
): number {
  const lr = linearize(r);
  const lg = linearize(g);
  const lb = linearize(b);

  // Linear RGB to LMS
  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  // LMS to cube root
  const lc = Math.cbrt(l);
  const mc = Math.cbrt(m);
  const sc = Math.cbrt(s);

  // LMS cube root to OKLab a, b
  const a = 1.9779984951 * lc - 2.4285922050 * mc + 0.4505937099 * sc;
  const okb = 0.0259040371 * lc + 0.7827717662 * mc - 0.8086757660 * sc;

  return Math.sqrt(a * a + okb * okb);
}
