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

import { contrastRatio, luminanceFromHex } from "./color-utils.js";
import { baseDefaults, valueAssignment } from "./presets.js";
import type { ThemeColorMode, TokenAssignment } from "./types.js";

export interface PaletteSwatch {
  hex: string;
  rgb: [number, number, number];
  /** Relative weight of this swatch — higher means more dominant/brand-like. */
  population: number;
}

/**
 * A small set of representative colors used to synthesize a coherent theme.
 * These are recovered from a site's (or uploaded) CSS rather than sampled from
 * an image, but the downstream {@link autoMapFromPalette} logic is the same.
 */
export interface ExtractedPalette {
  vibrant: PaletteSwatch | null;
  darkVibrant: PaletteSwatch | null;
  lightVibrant: PaletteSwatch | null;
  muted: PaletteSwatch | null;
  darkMuted: PaletteSwatch | null;
  lightMuted: PaletteSwatch | null;
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

  // Anchor the surfaces/background on the image's own dark tone (dark mode) or
  // light tone (light mode) so, e.g., a dark logo yields a dark surface with
  // white text — not a generic near-black. Text sits at the opposite end of
  // the lightness scale, guaranteeing contrast regardless of the anchor color.
  const neutral = rgbToHsl(pickNeutralAnchorRgb(palette, isDark));
  const tint = (lightness: number, satFraction: number): string =>
    hslToHex(neutral.h, clamp(neutral.s * satFraction, 0, 32), lightness);

  const backgroundHex = isDark ? tint(12, 0.35) : tint(98, 0.5);
  const surfaceHex = isDark ? tint(17, 0.4) : tint(96, 0.6);
  // Surface hover/active: darker than surface in light mode, lighter in dark
  // mode — the standard "press into" visual progression.
  const surfaceHoverHex = isDark ? tint(24, 0.4) : tint(90, 0.6);
  const surfaceActiveHex = isDark ? tint(28, 0.4) : tint(86, 0.6);
  const inputBgHex = isDark ? tint(15, 0.35) : "#ffffff";
  const borderHex = isDark ? tint(30, 0.45) : tint(86, 0.7);
  const textHex = isDark ? tint(95, 0.14) : tint(15, 0.5);
  const textMutedHex = isDark ? tint(70, 0.16) : tint(40, 0.4);
  const textSubtleHex = isDark ? tint(52, 0.18) : tint(58, 0.3);

  // Secondary is the neutral surface for secondary buttons / minimal controls:
  // a step brighter than the surface in dark mode, a step grayer (darker, less
  // tinted) than the surface in light mode — never the accent color.
  const secondaryHex = isDark ? tint(26, 0.35) : tint(92, 0.45);
  const secondaryFgHex = textHex;

  // Primary: a tinted button background that belongs to the same neutral family
  // as the surface — noticeable as interactive but not a vivid accent. Cap
  // saturation low so it reads as "muted brand tint", not "call to action".
  const primarySat = clamp(Math.min(brandSat, 32), 0, 40);
  const primaryL = clamp(brand.l, isDark ? 38 : 44, isDark ? 52 : 58);
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
  const primaryActiveHex = hslToHex(
    primaryHsl.h,
    primaryHsl.s,
    clamp(primaryHsl.l + (isDark ? 14 : -14), 4, 96)
  );
  const primaryFgHex = bestForeground(primaryHex);

  // Semantic status colors keep their canonical hues (red / green / amber) but
  // adopt the theme's vibrancy and are nudged to stay legible on the background.
  const bgLum = luminanceFromHex(backgroundHex) ?? (isDark ? 0 : 1);
  const semantic = (statusHue: number): string => {
    const hsl = ensureContrast(
      { h: statusHue, s: isDark ? 68 : 70, l: isDark ? 62 : 46 },
      bgLum,
      3,
      isDark ? "lighter" : "darker"
    );
    return hslToHex(hsl.h, hsl.s, hsl.l);
  };
  const dangerHex = semantic(2);
  const successHex = semantic(145);
  const warningHex = semantic(38);

  const shadow = isDark
    ? "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)"
    : "0 1px 3px oklch(0 0 0 / 0.12), 0 1px 2px oklch(0 0 0 / 0.08)";

  const colorAssignments: TokenAssignment[] = [
    valueAssignment("background", backgroundHex),
    valueAssignment("surface", surfaceHex),
    valueAssignment("surface-hover", surfaceHoverHex),
    valueAssignment("surface-active", surfaceActiveHex),
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
    valueAssignment("primary-active", primaryActiveHex),
    valueAssignment("primary-foreground", primaryFgHex),
    valueAssignment("secondary", secondaryHex),
    valueAssignment("secondary-foreground", secondaryFgHex),
    valueAssignment("icon-color", textMutedHex),
    valueAssignment("danger", dangerHex),
    valueAssignment("success", successHex),
    valueAssignment("warning", warningHex),
  ];

  // baseDefaults covers most non-color tokens; add the two it omits so every
  // role in the theme is populated by extraction.
  const remainingDefaults: TokenAssignment[] = [
    valueAssignment(
      "font-family-mono",
      "ui-monospace, SFMono-Regular, Menlo, monospace"
    ),
    valueAssignment("font-size-xsmall", "11"),
  ];

  return [
    ...colorAssignments,
    ...remainingDefaults,
    ...baseDefaults({ shadow }),
  ];
}

/**
 * Choose the swatch that anchors the neutral surfaces: the darkest swatch for a
 * dark theme, the lightest for a light theme, so the theme's background carries
 * the image's own dark/light tone. Falls back to the brand color.
 */
function pickNeutralAnchorRgb(
  palette: ExtractedPalette,
  isDark: boolean
): [number, number, number] {
  const candidates = [
    palette.vibrant,
    palette.darkVibrant,
    palette.lightVibrant,
    palette.muted,
    palette.darkMuted,
    palette.lightMuted,
  ].filter((s): s is PaletteSwatch => s != null);

  if (candidates.length === 0) return pickBrandRgb(palette);

  let best = candidates[0];
  let bestLum = luminanceFromHex(best.hex) ?? 0.5;
  for (const candidate of candidates) {
    const lum = luminanceFromHex(candidate.hex) ?? 0.5;
    if (isDark ? lum < bestLum : lum > bestLum) {
      bestLum = lum;
      best = candidate;
    }
  }
  return best.rgb;
}

/**
 * Choose the brand color: the most common (highest-population) swatch that is
 * an actual color — i.e. not near-white, near-black, or a flat grey. Falls back
 * to the most common swatch overall, then to a default blue.
 */
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

  // Prefer real colors: exclude near-white / near-black and unsaturated greys.
  const colorful = candidates.filter((s) => {
    const lum = luminanceFromHex(s.hex) ?? 0.5;
    return lum > 0.05 && lum < 0.92 && rgbToHsl(s.rgb).s >= 12;
  });
  const pool = colorful.length > 0 ? colorful : candidates;

  let best = pool[0];
  for (const candidate of pool) {
    if (candidate.population > best.population) best = candidate;
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
