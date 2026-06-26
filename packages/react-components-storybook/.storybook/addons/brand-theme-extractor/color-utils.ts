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

/** Linearize an sRGB channel (0-255 to 0-1 linear) */
function linearize(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/** WCAG relative luminance (0-1) from RGB (0-255) */
function relativeLuminance(
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
function hexToRgb(hex: string): [number, number, number] | null {
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
