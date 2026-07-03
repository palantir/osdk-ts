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
import {
  autoMapFromPalette,
  type ExtractedPalette,
  type PaletteSwatch,
} from "./palette-extractor.js";
import { valueAssignment } from "./presets.js";
import type {
  ColorTokenRole,
  ThemeColorMode,
  TokenAssignment,
  TokenRole,
} from "./types.js";

/**
 * A partial map from a token role to the raw value we recovered from a site's
 * real CSS. Colors are normalized to `#rrggbb`; lengths/sizes to a unitless px
 * number; weights/durations to a number; fonts and shadows are kept verbatim.
 */
export type CssTokenMap = Partial<Record<TokenRole, string>>;

/** How the CSS was obtained. Only uploaded files are supported today, but the
 * field is kept so the result shape can describe other sources later. */
export type FetchSource = "file";

export interface CssExtractionResult {
  /** Complete set of token assignments — real values where found, synthesized
   * (and harmonized) values everywhere else. */
  assignments: TokenAssignment[];
  /**
   * How many roles were filled from real CSS (vs synthesized). Zero means the
   * source had no usable design tokens; the caller surfaces that as an error
   * rather than applying a theme — we require at least one real color before
   * considering CSS extraction a success.
   */
  directMappedCount: number;
  /** The roles that were populated directly from real CSS, for diagnostics. */
  mappedRoles: TokenRole[];
  /** Inferred color mode based on background luminance. */
  colorMode: ThemeColorMode;
  /** How the source CSS was obtained. */
  fetchSource: FetchSource;
}

/** Roles that hold colors — used to build the gap-fill palette and to decide
 * whether extraction produced anything worth keeping. */
const COLOR_ROLES: ColorTokenRole[] = [
  "background",
  "surface",
  "text",
  "text-muted",
  "primary",
  "border",
  "danger",
  "success",
  "warning",
];

// ---------------------------------------------------------------------------
// Limits — ceilings the extraction clamps to so a roomy marketing source can't
// blow out these data-dense components.
// ---------------------------------------------------------------------------

/** Cap per-file work so a pathological stylesheet can't stall the regex scans. */
const MAX_CSS_CHARS = 800_000;
/**
 * Upper bound (px) on the extracted base spacing unit. These components are
 * data-dense, so a roomy marketing-site base (Apple's ~16-22px) would blow up
 * padding across the whole UI — and even leave controls looking mis-centered.
 * We keep any tighter site value but clamp generous ones down to this ceiling,
 * which is also the built-in default (so extracted spacing never exceeds it).
 */
const MAX_SPACING_PX = 4;
/**
 * Per-role ceilings (px) for the font-size ramp. These components are
 * data-dense, so a site with large marketing type shouldn't push the base sizes
 * up — we keep any smaller extracted value but clamp larger ones to these.
 */
const MAX_FONT_SIZE: Partial<Record<TokenRole, number>> = {
  "font-size-xsmall": 10,
  "font-size-small": 12,
  "font-size-medium": 14,
  "font-size-large": 16,
};
/**
 * Upper bound (px) on the extracted corner radius. A marketing site's big
 * rounding looks wrong on small, data-dense controls, so keep any tighter value
 * but clamp generous ones down to this ceiling.
 */
const MAX_BORDER_RADIUS_PX = 8;
/** Buttons may be rounder than inputs/cards, so they get a higher ceiling. */
const MAX_BUTTON_RADIUS_PX = 20;

// ---------------------------------------------------------------------------
// CSS parsing — read custom properties and map a curated set of known names to
// token roles. The synthesis step then fills every gap around the real values.
// ---------------------------------------------------------------------------

// ── Known CSS variable names → token roles ────────────────
// A curated set of common custom-property names: OSDK's own tokens plus
// widespread third-party conventions. We deliberately favor this small,
// predictable mapping over guessing from arbitrary declarations — anything not
// listed is ignored, and the synthesis step fills every gap.

const CSS_COLOR_ALIASES: Partial<Record<TokenRole, string[]>> = {
  background: [
    "background",
    "bg",
    "background-color",
    "color-background",
    "color-bg",
    "canvas",
    "body-bg",
    "osdk-background-primary",
  ],
  surface: [
    "surface",
    "card",
    "panel",
    "color-surface",
    "background-secondary",
    "osdk-surface-background-color-default",
  ],
  text: [
    "text",
    "foreground",
    "fg",
    "color-text",
    "color-foreground",
    "body-color",
    "ink",
    "text-primary",
    "osdk-typography-color-default-rest",
  ],
  "text-muted": [
    "text-muted",
    "muted-foreground",
    "text-secondary",
    "color-muted",
    "foreground-muted",
  ],
  primary: [
    "primary",
    "brand",
    "accent",
    "primary-color",
    "color-primary",
    "brand-primary",
    "accent-color",
    "osdk-intent-primary-rest",
  ],
  "primary-foreground": [
    "primary-foreground",
    "on-primary",
    "primary-contrast",
    "color-on-primary",
  ],
  border: [
    "border",
    "border-color",
    "color-border",
    "divider",
    "outline",
    "ring",
    "hairline",
  ],
  danger: ["danger", "destructive", "error", "negative"],
  success: ["success", "positive"],
  warning: ["warning", "caution"],
};
const CSS_FONT_ALIASES = [
  "font-family",
  "font-sans",
  "font-family-base",
  "font-family-sans",
  "font-body",
  "font",
];
const CSS_MONO_ALIASES = [
  "font-mono",
  "font-family-mono",
  "font-family-monospace",
  "font-code",
];
const CSS_FONT_SIZE_ALIASES = [
  "font-size",
  "font-size-base",
  "font-size-md",
  "text-base-size",
];
const CSS_RADIUS_ALIASES = [
  "radius",
  "border-radius",
  "radius-md",
  "rounded",
  "radius-base",
  "osdk-surface-border-radius",
];
const CSS_BUTTON_RADIUS_ALIASES = [
  "button-radius",
  "btn-radius",
  "radius-button",
  "osdk-button-border-radius",
];
const CSS_SPACING_ALIASES = ["spacing", "space", "spacing-unit", "spacing-md"];

/**
 * Parse CSS into a partial token map by reading custom properties (resolving one
 * level of `var()`) and mapping the curated set of known names above to token
 * roles. Unknown declarations are ignored. `brandHint` is unused but kept for
 * signature compatibility with earlier callers.
 */
export function parseCssTokens(
  cssTexts: string[],
  _brandHint?: string | null
): CssTokenMap {
  const css = cssTexts.map((c) => c.slice(0, MAX_CSS_CHARS)).join("\n");
  const vars = resolveVars(collectCustomProps(css));

  // Index declarations by their normalized name (lowercased, "--" stripped).
  const byName: Record<string, string> = {};
  for (const [name, value] of Object.entries(vars)) {
    byName[name.toLowerCase().replace(/^-+/, "")] = value;
  }
  const pick = (names: string[]): string | undefined => {
    for (const name of names) {
      if (byName[name] != null) return byName[name];
    }
    return undefined;
  };

  const map: CssTokenMap = {};

  for (const [role, names] of Object.entries(CSS_COLOR_ALIASES)) {
    const raw = pick(names ?? []);
    const hex = raw != null ? firstColorInValue(raw) : null;
    if (hex != null) map[role as TokenRole] = hex;
  }

  const family = pick(CSS_FONT_ALIASES);
  if (family != null) map["font-family"] = family;
  const mono = pick(CSS_MONO_ALIASES);
  if (mono != null) map["font-family-mono"] = mono;

  const fontSize = toPx(pick(CSS_FONT_SIZE_ALIASES));
  if (fontSize != null) map["font-size-medium"] = String(fontSize);

  const radius = toPx(pick(CSS_RADIUS_ALIASES));
  if (radius != null) map["border-radius"] = String(radius);
  const buttonRadius = toPx(pick(CSS_BUTTON_RADIUS_ALIASES));
  if (buttonRadius != null) map["button-border-radius"] = String(buttonRadius);

  const spacing = toPx(pick(CSS_SPACING_ALIASES));
  if (spacing != null) map.spacing = String(Math.min(spacing, MAX_SPACING_PX));

  return map;
}

/** First length in a value as a unitless px number, or null. */
function toPx(value: string | undefined): number | null {
  if (value == null) return null;
  const token = firstLengthToken(value);
  return token != null ? lengthToPx(token) : null;
}

/**
 * Phase A (part 1): scan for `--name: value` declarations. `:root` blocks are
 * read first so their (typically light-mode default) values win; a global scan
 * then backfills any custom property declared elsewhere. First declaration of a
 * given name wins, biasing toward the top-of-file / light defaults.
 */
function collectCustomProps(css: string): Record<string, string> {
  const vars: Record<string, string> = {};
  const declRe = /--([\w-]+)\s*:\s*([^;{}]+)/g;

  const addFrom = (source: string): void => {
    declRe.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = declRe.exec(source)) != null) {
      const name = match[1];
      const value = match[2].trim();
      if (value.length > 0 && !(name in vars)) vars[name] = value;
    }
  };

  const rootRe = /:root[^{}]*\{([^{}]*)\}/g;
  let rootBlock: RegExpExecArray | null;
  while ((rootBlock = rootRe.exec(css)) != null) addFrom(rootBlock[1]);

  addFrom(css);
  return vars;
}

/**
 * Phase A (part 2): resolve `var(--x)` references one level deep, substituting
 * the referenced value (or the inline fallback) so keyword matching sees a
 * concrete value rather than an indirection.
 */
function resolveVars(vars: Record<string, string>): Record<string, string> {
  const resolved: Record<string, string> = {};
  for (const [name, value] of Object.entries(vars)) {
    resolved[name] = value.replaceAll(
      /var\(\s*--([\w-]+)\s*(?:,\s*([^)]*))?\)/g,
      (_full, ref: string, fallback?: string) => {
        const target = vars[ref];
        if (target != null) return target;
        return fallback != null ? fallback.trim() : "";
      }
    );
  }
  return resolved;
}

export function extractTokensFromCssText(cssText: string): CssExtractionResult {
  const map = parseCssTokens([cssText], null);
  return buildCssExtractionResult(map, "file");
}

/**
 * Turn a recovered {@link CssTokenMap} into a complete theme: synthesize a
 * harmonized palette around the real anchors, overlay derived scales and the
 * real values, then clamp to the data-dense ceilings. Shared by the website,
 * uploaded-CSS, and uploaded-DESIGN.md entry points.
 */
export function buildCssExtractionResult(
  map: CssTokenMap,
  fetchSource: FetchSource
): CssExtractionResult {
  const mappedRoles = (Object.keys(map) as TokenRole[]).filter(
    (r) => map[r] != null
  );
  const colorRolesFound = mappedRoles.filter((r) =>
    (COLOR_ROLES as string[]).includes(r)
  );
  // Require at least one real color before trusting the CSS result; a font-only
  // hit isn't enough to reconstruct a palette, so report zero and let the
  // caller surface it as "no usable tokens" instead of applying a guess.
  const directMappedCount = colorRolesFound.length > 0 ? mappedRoles.length : 0;

  const colorMode = inferColorMode(map);
  const derived = deriveScale(map);

  // autoMapFromPalette returns a *complete* theme (colors synthesized around the
  // brand hue, plus every non-color default). We use it as the base and overlay
  // derived values, then the roles recovered from real CSS, so the synthesized
  // gaps harmonize with the real anchors and no real value is overwritten.
  const base = autoMapFromPalette(paletteFromMap(map), colorMode);
  const byRole = new Map(base.map((a) => [a.role, a] as const));
  for (const [role, value] of Object.entries(derived)) {
    byRole.set(role, valueAssignment(role, value));
  }
  for (const role of mappedRoles) {
    const value = map[role];
    if (value != null) byRole.set(role, valueAssignment(role, value));
  }

  // If the site's button radius wasn't clearly rounder, buttons follow the
  // surface radius rather than an unrelated default.
  if (map["button-border-radius"] == null) {
    const surfaceRadius = byRole.get("border-radius")?.customValue;
    if (surfaceRadius != null) {
      byRole.set(
        "button-border-radius",
        valueAssignment("button-border-radius", surfaceRadius)
      );
    }
  }

  // The synthesized primary-foreground was chosen for the synthesized primary;
  // once we've overlaid the real primary it may no longer contrast (e.g. black
  // text on a mid purple button). Recompute it against the *final* primary.
  const finalPrimary = byRole.get("primary")?.customValue;
  if (finalPrimary != null) {
    byRole.set(
      "primary-foreground",
      valueAssignment(
        "primary-foreground",
        primaryForeground(map["primary-foreground"], finalPrimary)
      )
    );
  }

  // Clamp the font-size ramp and corner radius to the data-dense ceilings
  // (applied last so they bound both extracted and derived values).
  const caps: Partial<Record<TokenRole, number>> = {
    ...MAX_FONT_SIZE,
    "border-radius": MAX_BORDER_RADIUS_PX,
    // Buttons may be rounder than inputs/cards, so allow a higher ceiling.
    "button-border-radius": MAX_BUTTON_RADIUS_PX,
  };
  for (const [role, max] of Object.entries(caps)) {
    const current = byRole.get(role)?.customValue;
    if (current == null) continue;
    const px = parseInt(current, 10);
    if (!Number.isNaN(px) && px > max) {
      byRole.set(role, valueAssignment(role, String(max)));
    }
  }

  return {
    assignments: [...byRole.values()],
    directMappedCount,
    mappedRoles,
    colorMode,
    fetchSource,
  };
}

/** Infer light vs dark from the recovered background (or text) luminance. */
function inferColorMode(map: CssTokenMap): ThemeColorMode {
  const bgLum =
    map.background != null ? luminanceFromHex(map.background) : null;
  if (bgLum != null) return bgLum < 0.45 ? "dark" : "light";
  const textLum = map.text != null ? luminanceFromHex(map.text) : null;
  if (textLum != null) return textLum > 0.6 ? "dark" : "light";
  return "light";
}

/**
 * Derive the font-size steps we didn't find directly by scaling the site's own
 * base size, so the ramp reflects the site rather than fixed defaults.
 */
function deriveScale(map: CssTokenMap): Record<string, string> {
  const derived: Record<string, string> = {};
  const medium =
    map["font-size-medium"] != null
      ? parseInt(map["font-size-medium"], 10)
      : null;
  if (medium != null && !Number.isNaN(medium)) {
    if (map["font-size-small"] == null) {
      derived["font-size-small"] = String(
        Math.max(10, Math.round(medium * 0.86))
      );
    }
    if (map["font-size-large"] == null) {
      derived["font-size-large"] = String(Math.round(medium * 1.15));
    }
    if (map["font-size-xsmall"] == null) {
      derived["font-size-xsmall"] = String(
        Math.max(9, Math.round(medium * 0.79))
      );
    }
  }
  return derived;
}

/**
 * Build a synthetic {@link ExtractedPalette} from the recovered colors so
 * autoMapFromPalette can derive harmonized gap-fills. The real primary becomes
 * the dominant (brand) swatch; the lightest/darkest colors anchor the neutral
 * surfaces at each end of the lightness scale.
 */
function paletteFromMap(map: CssTokenMap): ExtractedPalette {
  const empty: ExtractedPalette = {
    vibrant: null,
    darkVibrant: null,
    lightVibrant: null,
    muted: null,
    darkMuted: null,
    lightMuted: null,
  };

  const colors: Array<{ hex: string; lum: number; sat: number; role: string }> =
    [];
  for (const role of COLOR_ROLES) {
    const value = map[role];
    if (value == null) continue;
    colors.push({
      hex: value,
      lum: luminanceFromHex(value) ?? 0.5,
      sat: saturationFromHex(value),
      role,
    });
  }
  if (colors.length === 0) return empty;

  const swatch = (hex: string, population: number): PaletteSwatch => ({
    hex,
    rgb: hexToRgb(hex) ?? [0, 0, 0],
    population,
  });

  // The brand swatch drives the derived hue: prefer the real primary, else the
  // most saturated color. Give it an outsized population so it wins the pick.
  const brand =
    colors.find((c) => c.role === "primary") ??
    [...colors].sort((a, b) => b.sat - a.sat)[0];
  const lightest = [...colors].sort((a, b) => b.lum - a.lum)[0];
  const darkest = [...colors].sort((a, b) => a.lum - b.lum)[0];

  return {
    vibrant: swatch(brand.hex, 1000),
    darkVibrant: swatch(darkest.hex, 1),
    lightVibrant: swatch(lightest.hex, 1),
    muted: swatch(colors[Math.floor(colors.length / 2)].hex, 1),
    darkMuted: swatch(darkest.hex, 1),
    lightMuted: swatch(lightest.hex, 1),
  };
}

// ---------------------------------------------------------------------------
// Color + length helpers — self-contained so this module doesn't reach into
// palette-extractor's private internals.
// ---------------------------------------------------------------------------

const NAMED_COLORS: Record<string, string> = {
  white: "#ffffff",
  black: "#000000",
  red: "#ff0000",
  green: "#008000",
  blue: "#0000ff",
  yellow: "#ffff00",
  orange: "#ffa500",
  purple: "#800080",
  gray: "#808080",
  grey: "#808080",
  silver: "#c0c0c0",
  navy: "#000080",
  teal: "#008080",
  cyan: "#00ffff",
  aqua: "#00ffff",
  lime: "#00ff00",
  maroon: "#800000",
  olive: "#808000",
  magenta: "#ff00ff",
  fuchsia: "#ff00ff",
  pink: "#ffc0cb",
  brown: "#a52a2a",
  gold: "#ffd700",
  indigo: "#4b0082",
  violet: "#ee82ee",
  crimson: "#dc143c",
  coral: "#ff7f50",
  slategray: "#708090",
};

const COLOR_TOKEN_RE = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)/g;

/** Find the first parseable color token inside a compound value (e.g. the color
 * within a `background` or `border` shorthand). */
function firstColorInValue(value: string): string | null {
  const tokens = value.match(COLOR_TOKEN_RE);
  if (tokens) {
    for (const token of tokens) {
      const hex = parseColorToHex(token);
      if (hex) return hex;
    }
  }
  const lower = value.toLowerCase();
  for (const [name, hex] of Object.entries(NAMED_COLORS)) {
    if (new RegExp(`\\b${name}\\b`).test(lower)) return hex;
  }
  return null;
}

/** Parse a single CSS color (hex / rgb / hsl / named) into `#rrggbb`, dropping
 * any alpha channel. Returns null for keywords like `transparent` or values we
 * can't resolve to an opaque color. */
function parseColorToHex(input: string): string | null {
  const value = input.trim().toLowerCase();
  if (
    value === "" ||
    value === "inherit" ||
    value === "initial" ||
    value === "unset" ||
    value === "none" ||
    value === "transparent" ||
    value === "currentcolor"
  ) {
    return null;
  }

  const hex = /^#([0-9a-f]{3,8})$/i.exec(value);
  if (hex) {
    const digits = hex[1];
    if (digits.length === 3 || digits.length === 4) {
      const [r, g, b] = [digits[0], digits[1], digits[2]];
      return `#${r}${r}${g}${g}${b}${b}`;
    }
    if (digits.length === 6 || digits.length === 8) {
      return `#${digits.slice(0, 6)}`;
    }
    return null;
  }

  const rgb = /^rgba?\(([^)]+)\)$/.exec(value);
  if (rgb) {
    const parts = rgb[1].split(/[\s,/]+/).filter((p) => p.length > 0);
    if (parts.length >= 3) {
      const channel = (p: string): number => {
        const n = p.endsWith("%") ? (parseFloat(p) / 100) * 255 : parseFloat(p);
        return clampByte(n);
      };
      return rgbToHex([
        channel(parts[0]),
        channel(parts[1]),
        channel(parts[2]),
      ]);
    }
    return null;
  }

  const hsl = /^hsla?\(([^)]+)\)$/.exec(value);
  if (hsl) {
    const parts = hsl[1].split(/[\s,/]+/).filter((p) => p.length > 0);
    if (parts.length >= 3) {
      const h = parseFloat(parts[0]);
      const s = parseFloat(parts[1]);
      const l = parseFloat(parts[2]);
      if (!Number.isNaN(h) && !Number.isNaN(s) && !Number.isNaN(l)) {
        return hslToHex(h, s, l);
      }
    }
    return null;
  }

  return NAMED_COLORS[value] ?? null;
}

/** The first length token in a value (e.g. "8px" from "8px 16px"). */
function firstLengthToken(value: string): string | null {
  const match = /(-?\d*\.?\d+\s*(?:px|rem|em)?)/i.exec(value.trim());
  return match ? match[1] : null;
}

/** Normalize a CSS length to a unitless px number; rem/em assume 16px. */
function lengthToPx(value: string): number | null {
  const match = /(-?\d*\.?\d+)\s*(px|rem|em|%)?/i.exec(value.trim());
  if (!match) return null;
  const n = parseFloat(match[1]);
  if (Number.isNaN(n)) return null;
  const unit = (match[2] ?? "").toLowerCase();
  if (unit === "%") return null;
  return unit === "rem" || unit === "em" ? n * 16 : n;
}

/** Whether `fg` is legible on `bg` (WCAG-ish floor) — used to decide whether to
 * trust the button's own CSS text color as the primary foreground. */
function hasAdequateContrast(fg: string, bg: string): boolean {
  const a = luminanceFromHex(fg);
  const b = luminanceFromHex(bg);
  return a != null && b != null && contrastRatio(a, b) >= 3;
}

const WHITE = "#ffffff";
const NEAR_BLACK = "#111418";

/**
 * Decide the primary button's text color — always a clean white or near-black,
 * never a tinted in-between. If the site's own button text tells us whether it
 * intends light or dark text, honor that (snapped to pure white/black) as long
 * as it's legible on the final primary; otherwise infer from the primary's
 * darkness.
 */
function primaryForeground(cssFg: string | undefined, primary: string): string {
  if (cssFg != null) {
    const l = luminanceFromHex(cssFg);
    if (l != null) {
      const wanted = l >= 0.5 ? WHITE : NEAR_BLACK;
      if (hasAdequateContrast(wanted, primary)) return wanted;
    }
  }
  return bestForeground(primary);
}

/**
 * Choose legible text for the primary button, inferred from the primary
 * background. Biased toward white — colored brand buttons (blue/purple/red/
 * green) conventionally use white text — and only falls back to near-black when
 * white would be illegible on a genuinely light primary (e.g. yellow).
 */
function bestForeground(hex: string): string {
  const bgLum = luminanceFromHex(hex) ?? 0;
  const whiteContrast = contrastRatio(1, bgLum);
  const darkContrast = contrastRatio(luminanceFromHex(NEAR_BLACK) ?? 0, bgLum);
  // White if it's at least reasonably legible (WCAG AA for large/UI text), or
  // if it simply beats dark; dark only on light primaries where white fails.
  return whiteContrast >= 3 || whiteContrast >= darkContrast
    ? WHITE
    : NEAR_BLACK;
}

function clampByte(n: number): number {
  return Math.min(255, Math.max(0, Math.round(n)));
}

function hexToRgb(hex: string): [number, number, number] | null {
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) return null;
  const digits = match[1];
  return [
    parseInt(digits.slice(0, 2), 16),
    parseInt(digits.slice(2, 4), 16),
    parseInt(digits.slice(4, 6), 16),
  ];
}

function rgbToHex([r, g, b]: [number, number, number]): string {
  const toHex = (v: number): string =>
    clampByte(v).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hslToHex(h: number, s: number, l: number): string {
  const sn = Math.min(100, Math.max(0, s)) / 100;
  const ln = Math.min(100, Math.max(0, l)) / 100;
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
  return rgbToHex([(r + m) * 255, (g + m) * 255, (b + m) * 255]);
}

/** HSL saturation (0-100) of a hex color, for ranking "how colorful" a value is. */
function saturationFromHex(hex: string): number {
  return hslFromHex(hex)?.s ?? 0;
}

/** Full HSL (h 0-360, s/l 0-100) of a hex color, or null if unparseable. */
function hslFromHex(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const [r, g, b] = rgb.map((v) => v / 255) as [number, number, number];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r:
        h = ((g - b) / delta) % 6;
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      default:
        h = (r - g) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s: s * 100, l: l * 100 };
}
