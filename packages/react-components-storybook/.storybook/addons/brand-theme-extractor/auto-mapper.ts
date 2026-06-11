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

import {
  adjustForContrast,
  contrastRatio,
  luminanceFromHex,
  WCAG_AA_LARGE,
  WCAG_AA_NORMAL,
} from "./color-utils.js";
import type { ExtractedColor, TokenAssignment } from "./types.js";

/** Threshold: if the dominant color's luminance is below this, treat as dark mode */
const DARK_MODE_THRESHOLD = 0.4;

function getNonColorDefaults(isDark: boolean): TokenAssignment[] {
  return [
    // Typography
    {
      role: "font-family",
      colorIndex: -1,
      customValue: "Inter, system-ui, -apple-system, sans-serif",
    },
    { role: "font-size-small", colorIndex: -1, customValue: "12" },
    { role: "font-size-medium", colorIndex: -1, customValue: "14" },
    { role: "font-size-large", colorIndex: -1, customValue: "16" },
    { role: "font-weight-default", colorIndex: -1, customValue: "400" },
    { role: "font-weight-bold", colorIndex: -1, customValue: "600" },
    { role: "line-height", colorIndex: -1, customValue: "1.5" },
    // Surface
    { role: "border-radius", colorIndex: -1, customValue: "4" },
    { role: "spacing", colorIndex: -1, customValue: "4" },
    { role: "border-width", colorIndex: -1, customValue: "1" },
    {
      role: "shadow",
      colorIndex: -1,
      customValue: isDark
        ? "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)"
        : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
    },
    // Emphasis
    { role: "focus-width", colorIndex: -1, customValue: "2" },
    { role: "focus-offset", colorIndex: -1, customValue: "2" },
    { role: "transition-duration", colorIndex: -1, customValue: "150" },
  ];
}

/**
 * Detect whether the extracted palette represents a dark mode design.
 *
 * Heuristic: the dominant color (largest cluster) represents the
 * background/canvas of the source image. If it's dark, the design
 * is dark mode.
 */
function isDarkMode(palette: ExtractedColor[]): boolean {
  // Palette is sorted by cluster size (dominant first)
  const dominant = palette[0];
  return dominant.luminance < DARK_MODE_THRESHOLD;
}

/**
 * Auto-assign extracted palette colors to token roles using
 * luminance and chroma heuristics, and populate non-color tokens
 * with sensible defaults.
 *
 * Detects dark vs light mode from the dominant color and adjusts
 * the mapping direction accordingly.
 */
export function autoMapColors(
  palette: ExtractedColor[],
): TokenAssignment[] {
  if (palette.length === 0) return [];

  const dark = isDarkMode(palette);

  // Sort by luminance: index 0 = lightest, last = darkest
  const byLuminance = palette
    .map((c, i) => ({ i, l: c.luminance }))
    .sort((a, b) => b.l - a.l);

  const byChroma = palette
    .map((c, i) => ({ i, c: c.chroma }))
    .sort((a, b) => b.c - a.c);

  const used = new Set<number>();
  const assignments: TokenAssignment[] = [];

  function pick(index: number, role: string): void {
    used.add(index);
    assignments.push({ role, colorIndex: index });
  }

  function pickUnused(
    sorted: Array<{ i: number }>,
    role: string,
  ): void {
    const entry = sorted.find((e) => !used.has(e.i));
    if (entry) {
      pick(entry.i, role);
    }
  }

  // Background & text: direction depends on light/dark mode
  const lightestIdx = byLuminance[0].i;
  const darkestIdx = byLuminance[byLuminance.length - 1].i;

  const bgIndex = dark ? darkestIdx : lightestIdx;
  const textIndex = dark ? lightestIdx : darkestIdx;
  const bgLuminance = palette[bgIndex].luminance;

  pick(bgIndex, "background");
  pick(textIndex, "text");

  // Primary foreground: same direction as background (text on primary buttons)
  assignments.push({
    role: "primary-foreground",
    colorIndex: dark ? darkestIdx : lightestIdx,
  });

  // Most saturated -> primary
  pickUnused(byChroma, "primary");

  // Surface: closest in luminance to background (subtle elevation layer)
  const surfaceSorted = palette
    .map((c, i) => ({ i, dist: Math.abs(c.luminance - bgLuminance) }))
    .sort((a, b) => a.dist - b.dist);
  pickUnused(surfaceSorted, "surface");

  // Border: moderate contrast from background
  const borderTarget = dark ? bgLuminance + 0.15 : bgLuminance - 0.15;
  const borderSorted = palette
    .map((c, i) => ({ i, dist: Math.abs(c.luminance - borderTarget) }))
    .sort((a, b) => a.dist - b.dist);
  pickUnused(borderSorted, "border");

  // Text muted: midpoint between background and text luminance
  const textLuminance = palette[textIndex].luminance;
  const mutedTarget = (bgLuminance + textLuminance) / 2;
  const mutedSorted = palette
    .map((c, i) => ({ i, dist: Math.abs(c.luminance - mutedTarget) }))
    .sort((a, b) => a.dist - b.dist);
  pickUnused(mutedSorted, "text-muted");

  // Secondary: close to surface but slightly different (for secondary buttons)
  pickUnused(surfaceSorted, "secondary");

  // Secondary foreground: reuse text color (text on secondary buttons)
  assignments.push({
    role: "secondary-foreground",
    colorIndex: textIndex,
  });

  // Icon color: same as text-muted (icons are typically muted)
  const iconSorted = palette
    .map((c, i) => ({ i, dist: Math.abs(c.luminance - mutedTarget) }))
    .sort((a, b) => a.dist - b.dist);
  pickUnused(iconSorted, "icon-color");

  // ── Accessibility enforcement ──────────────────────────────
  // Adjust colors to meet WCAG AA. Order matters: fix primary first
  // since text/primary-foreground are checked against it.

  // 1. Primary must contrast against background (large text: 3:1)
  enforceContrast(assignments, palette, "primary", "background", WCAG_AA_LARGE);

  // 2. Text must contrast against both background (4.5:1) and primary (4.5:1)
  enforceContrastMulti(
    assignments,
    palette,
    "text",
    ["background", "primary"],
    WCAG_AA_NORMAL,
  );

  // 3. Text muted must contrast against both background and primary
  enforceContrastMulti(assignments, palette, "text-muted", [
    "background",
    "primary",
  ], WCAG_AA_NORMAL);

  // 4. Primary foreground must contrast against primary (its main bg)
  enforceContrast(
    assignments,
    palette,
    "primary-foreground",
    "primary",
    WCAG_AA_NORMAL,
  );

  // 5. Border must be visible against background
  enforceContrast(assignments, palette, "border", "background", WCAG_AA_LARGE);

  // Non-color defaults (shadow intensity differs for dark mode)
  assignments.push(...getNonColorDefaults(dark));

  return assignments;
}

/** Resolve the hex color and luminance for an assignment */
function resolveColorInfo(
  assignment: TokenAssignment,
  palette: ExtractedColor[],
): { hex: string; luminance: number } | undefined {
  if (assignment.colorIndex >= 0 && palette[assignment.colorIndex]) {
    const c = palette[assignment.colorIndex];
    return { hex: c.hex, luminance: c.luminance };
  }
  if (assignment.customValue) {
    const lum = luminanceFromHex(assignment.customValue);
    if (lum != null) {
      return { hex: assignment.customValue, luminance: lum };
    }
  }
  return undefined;
}

/**
 * Check a foreground/background pair for WCAG contrast and auto-fix
 * by adjusting the foreground color if it fails.
 */
function enforceContrast(
  assignments: TokenAssignment[],
  palette: ExtractedColor[],
  fgRole: string,
  bgRole: string,
  minRatio: number,
): void {
  const fgAssignment = assignments.find((a) => a.role === fgRole);
  const bgAssignment = assignments.find((a) => a.role === bgRole);
  if (!fgAssignment || !bgAssignment) return;

  const fg = resolveColorInfo(fgAssignment, palette);
  const bg = resolveColorInfo(bgAssignment, palette);
  if (!fg || !bg) return;

  const ratio = contrastRatio(fg.luminance, bg.luminance);
  if (ratio >= minRatio) return;

  const adjusted = adjustForContrast(fg.hex, bg.luminance, minRatio);
  fgAssignment.colorIndex = -1;
  fgAssignment.customValue = adjusted;
}

/**
 * Enforce contrast against multiple backgrounds. Adjusts the foreground
 * to meet the required ratio against the WORST background (the one
 * that needs the most adjustment).
 */
function enforceContrastMulti(
  assignments: TokenAssignment[],
  palette: ExtractedColor[],
  fgRole: string,
  bgRoles: string[],
  minRatio: number,
): void {
  const fgAssignment = assignments.find((a) => a.role === fgRole);
  if (!fgAssignment) return;

  let fg = resolveColorInfo(fgAssignment, palette);
  if (!fg) return;

  for (const bgRole of bgRoles) {
    // Re-resolve fg each iteration since it may have been adjusted
    fg = resolveColorInfo(fgAssignment, palette);
    if (!fg) return;

    const bgAssignment = assignments.find((a) => a.role === bgRole);
    if (!bgAssignment) continue;

    const bg = resolveColorInfo(bgAssignment, palette);
    if (!bg) continue;

    const ratio = contrastRatio(fg.luminance, bg.luminance);
    if (ratio >= minRatio) continue;

    const adjusted = adjustForContrast(fg.hex, bg.luminance, minRatio);
    fgAssignment.colorIndex = -1;
    fgAssignment.customValue = adjusted;
  }
}
