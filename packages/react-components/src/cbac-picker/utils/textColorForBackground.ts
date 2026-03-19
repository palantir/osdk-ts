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

const HEX_REGEX = /^#?[0-9A-F]{6}$/i;
const SHORT_HEX_REGEX = /^#?[0-9A-F]{3}$/i;
type RGB = [number, number, number];

function normalizeHex(color: string): string {
  if (color.match(SHORT_HEX_REGEX) == null) {
    return color;
  }
  const [r, g, b] = color.replace("#", "").split("");
  if (r == null) {
    throw new Error(`Unable to split color hex ${color}`);
  }
  return `#${r + r + g + g + b + b}`;
}

function hexToParts(hex: string): RGB {
  const parsed = parseInt(normalizeHex(hex).replace("#", ""), 16);

  return [(parsed >> 16) & 255, (parsed >> 8) & 255, parsed & 255];
}

function isHex(color: string): boolean {
  return color.match(HEX_REGEX) != null
    || color.match(SHORT_HEX_REGEX) != null;
}

function parseRgbaParts(color: string): RGB {
  if (isHex(color)) {
    return hexToParts(color);
  }
  throw new Error(`Provided color (${color}) is not a valid hex color`);
}

/**
 * Determines whether black or white text provides better contrast
 * against the given background hex color, using CIE L* luminance.
 *
 * @param color - A hex color string (e.g. "#FF8C00", "#FFF", "CED9E0")
 * @returns "#000000" for light backgrounds, "#FFFFFF" for dark backgrounds
 */
export function textColorForBackground(color: string): "#000000" | "#FFFFFF" {
  const [R, G, B] = parseRgbaParts(color);
  const eps = 216 / 24389;
  const k = 24389 / 27;
  const Yr = 1;
  let r = R / 255;
  let g = G / 255;
  let b = B / 255;

  r = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  const Y = 0.222491598 * r + 0.71688606 * g + 0.060621486 * b;

  const yr = Y / Yr;

  const fy = yr > eps ? Math.pow(yr, 1 / 3) : (k * yr + 16) / 116;

  return 2.55 * (116 * fy - 16) + 0.5 > 170 ? "#000000" : "#FFFFFF";
}
