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

import { luminanceFromHex } from "./color-utils.js";
import {
  buildCssExtractionResult,
  type CssExtractionResult,
  type CssTokenMap,
} from "./css-extractor.js";
import type { TokenRole } from "./types.js";

/**
 * Read a `DESIGN.md` file (the Google `design.md` format — YAML frontmatter with
 * `colors` / `typography` / `rounded` / `spacing` / `components` sections) and
 * turn it into a complete OSDK brand theme.
 *
 * The frontmatter uses brand-authored token names that mostly follow a shared
 * convention (`canvas`, `ink`, `hairline`, `on-primary`, …) — the same keys the
 * extractor emits on export. We map those names to our token roles (with
 * aliases for common third-party variants like `ink-mute` or `primary-press`),
 * then reuse the exact synthesis + clamping pipeline the CSS path uses, so
 * missing roles are harmonized around the brand and every value is bounded.
 */
export function extractTokensFromDesignMarkdown(
  markdown: string
): CssExtractionResult {
  const front = extractFrontmatter(markdown);
  const parsed = front != null ? parseFrontmatter(front) : emptyParsed();
  const map = tokenMapFromParsed(parsed);

  // Prose-style DESIGN.md files (brand analyses) have no structured `colors`
  // map — they list hex codes inline under headings. When the frontmatter gave
  // us no colors, fall back to harvesting them from the document body.
  if (!hasAnyColor(map)) {
    for (const [role, hex] of Object.entries(parseColorsFromProse(markdown))) {
      map[role as TokenRole] = hex;
    }
  }

  return buildCssExtractionResult(map, "file");
}

const COLOR_ROLE_LIST: TokenRole[] = [
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

function hasAnyColor(map: CssTokenMap): boolean {
  return COLOR_ROLE_LIST.some((r) => map[r] != null);
}

// ── Frontmatter parsing ───────────────────────────────────

interface ParsedDesign {
  colors: Record<string, string>;
  rounded: Record<string, string>;
  spacing: Record<string, string>;
  /** Nested: role name → its properties (fontFamily, fontSize, …). */
  typography: Record<string, Record<string, string>>;
  /** Nested: component name → its properties (backgroundColor, rounded, …). */
  components: Record<string, Record<string, string>>;
}

function emptyParsed(): ParsedDesign {
  return { colors: {}, rounded: {}, spacing: {}, typography: {}, components: {} };
}

/** Pull the text between the leading `---` fences, or null if there isn't one. */
function extractFrontmatter(markdown: string): string | null {
  const match = markdown.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/);
  return match ? match[1] : null;
}

const FLAT_SECTIONS = new Set(["colors", "rounded", "spacing"]);
const NESTED_SECTIONS = new Set(["typography", "components"]);

/**
 * A forgiving, indentation-driven parser for the subset of YAML these files
 * use (2-space nesting, `key: value`, optional quotes). We avoid a full YAML
 * dependency; anything we don't recognize is simply skipped.
 */
function parseFrontmatter(front: string): ParsedDesign {
  const parsed = emptyParsed();
  let section: string | null = null;
  let subKey: string | null = null;

  for (const rawLine of front.split("\n")) {
    const line = rawLine.replace(/\r$/, "");
    if (line.trim() === "" || line.trim().startsWith("#")) continue;

    const indent = line.length - line.trimStart().length;
    const content = line.trim();
    const colon = content.indexOf(":");
    if (colon === -1) continue;
    const key = content.slice(0, colon).trim();
    const value = stripQuotes(content.slice(colon + 1).trim());

    if (indent === 0) {
      section = key;
      subKey = null;
      continue;
    }

    if (section == null) continue;

    if (FLAT_SECTIONS.has(section)) {
      if (value !== "") {
        (parsed as unknown as Record<string, Record<string, string>>)[section][
          key
        ] = value;
      }
      continue;
    }

    if (NESTED_SECTIONS.has(section)) {
      const bucket = section === "typography"
        ? parsed.typography
        : parsed.components;
      if (indent <= 2) {
        subKey = key;
        if (bucket[subKey] == null) bucket[subKey] = {};
      } else if (subKey != null && value !== "") {
        bucket[subKey][key] = value;
      }
    }
  }

  return parsed;
}

function stripQuotes(value: string): string {
  if (value.length >= 2) {
    const first = value[0];
    const last = value[value.length - 1];
    if ((first === "\"" || first === "'") && first === last) {
      return value.slice(1, -1);
    }
  }
  return value;
}

// ── Mapping DESIGN.md names → token roles ─────────────────

/**
 * Candidate DESIGN.md key names for each color role, in priority order. The
 * first name present in the file's `colors` map wins, so a canonical name is
 * preferred over a brand-specific alias and accent colors (ruby, magenta, …)
 * are never pulled into a semantic role.
 */
const COLOR_ALIASES: Partial<Record<TokenRole, string[]>> = {
  background: ["canvas", "background", "bg", "base", "canvas-default"],
  surface: ["surface", "canvas-soft", "canvas-subtle", "card", "panel", "elevated"],
  "surface-hover": ["surface-hover", "canvas-hover"],
  "surface-active": ["surface-active", "canvas-active"],
  text: ["ink", "text", "foreground", "fg", "content", "ink-primary", "text-primary"],
  "text-muted": [
    "ink-muted",
    "ink-mute",
    "ink-secondary",
    "ink-mute-2",
    "text-secondary",
    "text-muted",
    "muted",
  ],
  "text-subtle": [
    "ink-subtle",
    "ink-tertiary",
    "text-tertiary",
    "text-subtle",
    "subtle",
    "placeholder",
  ],
  primary: ["primary", "brand", "accent"],
  "primary-hover": ["primary-hover", "primary-soft", "primary-light", "brand-hover"],
  "primary-active": [
    "primary-active",
    "primary-press",
    "primary-pressed",
    "primary-deep",
    "primary-dark",
    "brand-active",
  ],
  "primary-foreground": [
    "on-primary",
    "primary-foreground",
    "primary-fg",
    "text-on-primary",
    "on-brand",
  ],
  secondary: ["secondary"],
  border: ["hairline", "border", "divider", "outline", "stroke", "edge"],
  "input-bg": ["input-bg", "input", "field-bg"],
  danger: ["semantic-danger", "danger", "error", "negative", "destructive"],
  success: ["semantic-success", "success", "positive"],
  warning: ["semantic-warning", "warning", "caution"],
};

/** Upper bound (px) on imported spacing — mirrors the CSS path's data-dense
 * ceiling so a roomy marketing base (8px+) doesn't blow up padding. */
const MAX_SPACING_PX = 4;

function tokenMapFromParsed(parsed: ParsedDesign): CssTokenMap {
  const map: CssTokenMap = {};
  const colors = lowerKeys(parsed.colors);

  // Colors — first matching alias wins per role.
  for (const [role, names] of Object.entries(COLOR_ALIASES)) {
    for (const name of names ?? []) {
      const raw = colors[name];
      const hex = raw != null ? normalizeColor(raw) : null;
      if (hex != null) {
        map[role as TokenRole] = hex;
        break;
      }
    }
  }

  // Typography — anchor on the body role (or the closest thing to it).
  const body = pickBodyTypography(parsed.typography);
  if (body != null) {
    if (body.fontFamily) map["font-family"] = body.fontFamily;
    const size = firstPx(body.fontSize);
    if (size != null) map["font-size-medium"] = String(size);
    const lh = body.lineHeight?.replace(/px$/, "").trim();
    if (lh && /^\d+(\.\d+)?$/.test(lh)) map["line-height"] = lh;
  }
  const mono = pickMonoFamily(parsed.typography);
  if (mono != null) map["font-family-mono"] = mono;

  // Corner radius — prefer the mid step; the builder clamps to its ceiling.
  const radius = firstPx(parsed.rounded["md"] ?? parsed.rounded["sm"])
    ?? firstNumericValue(parsed.rounded);
  if (radius != null) map["border-radius"] = String(radius);

  const buttonRadius = buttonRadiusFromComponents(parsed);
  if (buttonRadius != null) map["button-border-radius"] = String(buttonRadius);

  // Spacing — take the smallest defined step, clamped to the dense ceiling.
  const spacing = firstPx(
    parsed.spacing["xs"] ?? parsed.spacing["sm"] ?? parsed.spacing["md"]
  ) ?? firstNumericValue(parsed.spacing);
  if (spacing != null) {
    map.spacing = String(Math.min(spacing, MAX_SPACING_PX));
  }

  return map;
}

function pickBodyTypography(
  typography: Record<string, Record<string, string>>
): Record<string, string> | null {
  const keys = Object.keys(typography);
  if (keys.length === 0) return null;
  const exact = keys.find((k) => k.toLowerCase() === "body");
  if (exact) return typography[exact];
  const bodyish = keys.find((k) => /^body/i.test(k));
  if (bodyish) return typography[bodyish];
  // Otherwise the smallest text role is the best body proxy.
  return typography[keys[0]];
}

function pickMonoFamily(
  typography: Record<string, Record<string, string>>
): string | null {
  for (const [role, props] of Object.entries(typography)) {
    const family = props.fontFamily;
    if (family && (/mono|code/i.test(role) || /mono/i.test(family))) {
      return family;
    }
  }
  return null;
}

/** Resolve a button component's `rounded: "{rounded.X}"` reference to px. */
function buttonRadiusFromComponents(parsed: ParsedDesign): number | null {
  for (const [name, props] of Object.entries(parsed.components)) {
    if (!/button/i.test(name)) continue;
    const ref = props.rounded;
    if (!ref) continue;
    const token = ref.match(/\{rounded\.([\w-]+)\}/)?.[1];
    const value = token != null ? parsed.rounded[token] : ref;
    const px = firstPx(value);
    if (px != null) return px;
  }
  return null;
}

// ── Value helpers ─────────────────────────────────────────

function lowerKeys(obj: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) out[k.toLowerCase()] = v;
  return out;
}

function firstPx(value: string | undefined): number | null {
  if (value == null) return null;
  const match = value.match(/-?\d+(\.\d+)?/);
  if (!match) return null;
  const n = Number(match[0]);
  return Number.isFinite(n) ? Math.round(n) : null;
}

function firstNumericValue(obj: Record<string, string>): number | null {
  for (const value of Object.values(obj)) {
    const px = firstPx(value);
    if (px != null) return px;
  }
  return null;
}

/** Normalize a color to `#rrggbb`, or null when it isn't a plain hex/rgb color
 * (so brand gradients/keywords are skipped rather than mis-mapped). */
function normalizeColor(raw: string): string | null {
  const value = raw.trim().toLowerCase();

  const short = value.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/);
  if (short) return `#${short[1]}${short[1]}${short[2]}${short[2]}${short[3]}${short[3]}`;

  const long = value.match(/^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/);
  if (long) return `#${long[1]}`;

  const rgb = value.match(
    /^rgba?\(\s*(\d+)\s*[, ]\s*(\d+)\s*[, ]\s*(\d+)/
  );
  if (rgb) {
    const [r, g, b] = [rgb[1], rgb[2], rgb[3]].map((n) =>
      Math.min(255, Number(n)).toString(16).padStart(2, "0")
    );
    return `#${r}${g}${b}`;
  }

  return null;
}

// ── Prose fallback (freeform brand-analysis DESIGN.md) ────

interface ColorMention {
  hex: string;
  /** The bullet/line text the color appeared on, lowercased. */
  line: string;
  /** The nearest `###`/`##` heading above it, lowercased. */
  heading: string;
}

/**
 * Harvest colors from a prose DESIGN.md that describes them inline (e.g.
 * `- **Spotify Green** (`#1ed760`): Primary brand accent`). We gather every hex
 * with the heading + line it sits under, then assign roles by keyword — using
 * saturation/luminance to disambiguate (the brand color is the saturated one;
 * backgrounds/text are the near-neutral extremes).
 */
function parseColorsFromProse(markdown: string): Partial<Record<TokenRole, string>> {
  const mentions = collectColorMentions(markdown);
  if (mentions.length === 0) return {};

  const out: Partial<Record<TokenRole, string>> = {};
  const used = new Set<string>();

  const take = (role: TokenRole, hex: string | undefined) => {
    if (hex != null && out[role] == null) {
      out[role] = hex;
      used.add(hex);
    }
  };

  // Primary: the most saturated color under a brand/primary/accent heading,
  // else the most saturated color overall.
  const brandPool = mentions.filter((m) =>
    /primary|brand|accent/.test(m.heading) && !/background|surface|text/.test(m.heading)
  );
  const primary = mostSaturated(brandPool.length > 0 ? brandPool : mentions);
  take("primary", primary?.hex);

  // Background: prefer a color explicitly called out as page/background/canvas,
  // otherwise the most extreme neutral (lightest for light UIs, darkest for dark).
  const bgMention = firstMatch(mentions, [
    "background",
    "canvas",
    "deepest",
    "page background",
    "base surface",
  ], used) ?? extremeNeutral(mentions, used);
  take("background", bgMention?.hex);

  const bgLum = out.background != null
    ? luminanceFromHex(out.background) ?? 0.5
    : 0.5;
  const isDark = bgLum < 0.4;

  take("surface", firstMatch(mentions, ["card", "surface", "container", "elevated", "panel"], used)?.hex);
  take("text", firstMatch(mentions, ["primary text", "body text", "default", "text-base", "heading", "ink"], used)?.hex);
  take("text-muted", firstMatch(mentions, ["secondary", "muted", "tertiary", "silver", "subdued"], used)?.hex);
  take("border", firstMatch(mentions, ["border", "divider", "separator", "hairline", "outline"], used)?.hex);
  take("danger", firstMatch(mentions, ["negative", "error", "danger", "destructive"], used)?.hex);
  take("success", firstMatch(mentions, ["success", "positive", "confirm"], used)?.hex);
  take("warning", firstMatch(mentions, ["warning", "caution", "alert"], used)?.hex);

  // Fall back for text: the neutral at the opposite end from the background, so
  // there's always a legible body color even when nothing was labelled "text".
  if (out.text == null) {
    const opposite = mentions
      .filter((m) => !used.has(m.hex) && isNeutral(m.hex))
      .sort((a, b) =>
        isDark
          ? (luminanceFromHex(b.hex) ?? 0) - (luminanceFromHex(a.hex) ?? 0)
          : (luminanceFromHex(a.hex) ?? 1) - (luminanceFromHex(b.hex) ?? 1)
      )[0];
    take("text", opposite?.hex);
  }

  return out;
}

function collectColorMentions(markdown: string): ColorMention[] {
  const mentions: ColorMention[] = [];
  let heading = "";
  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();
    const headingMatch = line.match(/^#{2,}\s+(.*)$/);
    if (headingMatch) {
      heading = headingMatch[1].toLowerCase();
      continue;
    }
    // Multiple hex codes can appear on one line; record each.
    const hexes = line.match(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g);
    if (!hexes) continue;
    for (const raw of hexes) {
      const hex = normalizeColor(raw);
      if (hex != null) mentions.push({ hex, line: line.toLowerCase(), heading });
    }
  }
  return mentions;
}

function firstMatch(
  mentions: ColorMention[],
  keywords: string[],
  used: Set<string>
): ColorMention | undefined {
  return mentions.find(
    (m) =>
      !used.has(m.hex)
      && keywords.some((k) => m.line.includes(k) || m.heading.includes(k))
  );
}

function mostSaturated(mentions: ColorMention[]): ColorMention | undefined {
  let best: ColorMention | undefined;
  let bestSat = -1;
  for (const m of mentions) {
    const sat = saturation(m.hex);
    if (sat > bestSat) {
      bestSat = sat;
      best = m;
    }
  }
  return best;
}

/** The lightest or darkest near-neutral, whichever is more extreme — the most
 * likely page background in an achromatic UI. */
function extremeNeutral(
  mentions: ColorMention[],
  used: Set<string>
): ColorMention | undefined {
  const neutrals = mentions.filter((m) => !used.has(m.hex) && isNeutral(m.hex));
  if (neutrals.length === 0) return undefined;
  let best = neutrals[0];
  let bestDist = 0;
  for (const m of neutrals) {
    const lum = luminanceFromHex(m.hex) ?? 0.5;
    const dist = Math.max(lum, 1 - lum); // distance from mid-grey
    if (dist > bestDist) {
      bestDist = dist;
      best = m;
    }
  }
  return best;
}

function rgbOf(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

/** HSL saturation (0-1) — used to tell brand accents from neutral greys. */
function saturation(hex: string): number {
  const [r, g, b] = rgbOf(hex).map((n) => n / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max === min) return 0;
  const l = (max + min) / 2;
  return (max - min) / (1 - Math.abs(2 * l - 1));
}

function isNeutral(hex: string): boolean {
  return saturation(hex) < 0.18;
}
