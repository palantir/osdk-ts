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
  const palette = await Vibrant.from(dataUrl).getPalette();

  function toSwatch(
    swatch: { hex: string; rgb: [number, number, number] } | null,
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
 * Map an extracted palette to token assignments using simple heuristics.
 * In dark mode, dark swatches become backgrounds; in light mode, light swatches do.
 */
export function autoMapFromPalette(
  palette: ExtractedPalette,
  colorMode: ThemeColorMode,
): TokenAssignment[] {
  const isDark = colorMode === "dark";

  const background = pick(
    isDark ? palette.darkMuted : palette.lightMuted,
    isDark ? palette.darkVibrant : palette.lightVibrant,
    palette.muted,
  );
  const surface = pick(
    isDark ? palette.darkVibrant : palette.lightVibrant,
    isDark ? palette.darkMuted : palette.lightMuted,
    palette.muted,
  );
  const text = pick(
    isDark ? palette.lightMuted : palette.darkMuted,
    isDark ? palette.lightVibrant : palette.darkVibrant,
  );
  const textMuted = pick(
    palette.muted,
    isDark ? palette.lightMuted : palette.darkMuted,
  );
  const primary = pick(
    palette.vibrant,
    isDark ? palette.lightVibrant : palette.darkVibrant,
  );
  const primaryFg = pick(
    isDark ? palette.darkMuted : palette.lightMuted,
    background,
  );
  const secondary = pick(
    surface,
    palette.muted,
  );
  const secondaryFg = pick(text, textMuted);
  const iconColor = pick(textMuted, palette.muted);
  const border = pick(
    palette.muted,
    isDark ? palette.darkVibrant : palette.lightVibrant,
  );

  const shadow = isDark
    ? "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)"
    : "0 1px 3px oklch(0 0 0 / 0.12), 0 1px 2px oklch(0 0 0 / 0.08)";

  const colorAssignments: TokenAssignment[] = [];

  function addColor(role: string, swatch: PaletteSwatch | undefined) {
    if (swatch) {
      colorAssignments.push(valueAssignment(role, swatch.hex));
    }
  }

  addColor("background", background);
  addColor("surface", surface);
  addColor("text", text);
  addColor("text-muted", textMuted);
  addColor("primary", primary);
  addColor("primary-foreground", primaryFg);
  addColor("secondary", secondary);
  addColor("secondary-foreground", secondaryFg);
  addColor("icon-color", iconColor);
  addColor("border", border);

  return [
    ...colorAssignments,
    ...baseDefaults({ shadow }),
  ];
}

/** Pick the first non-null swatch. */
function pick(
  ...candidates: Array<PaletteSwatch | null | undefined>
): PaletteSwatch | undefined {
  for (const candidate of candidates) {
    if (candidate) return candidate;
  }
  return undefined;
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
