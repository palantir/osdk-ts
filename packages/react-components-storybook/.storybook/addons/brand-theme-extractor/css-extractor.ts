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

/** How the CSS was obtained: from the dev server, a public proxy, or an
 * uploaded file (no network fetch at all). */
export type FetchSource = "server" | "proxy" | "file";

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
  /** Whether the page came from the dev server or a public proxy. */
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
// Networking
//
// Fetch order: the same-origin dev-server endpoint first (reliable, no CORS),
// then public CORS proxies as a fallback (for the deployed static Storybook).
// Bare-domain and www. variants are both tried so a site served only from
// www. still resolves.
// ---------------------------------------------------------------------------

const FETCH_TIMEOUT_MS = 16_000;
/** Cap per-file work so a pathological stylesheet can't stall the regex scans. */
const MAX_CSS_CHARS = 800_000;
/** Only chase a handful of linked stylesheets — the first few carry the tokens. */
const MAX_STYLESHEETS = 6;
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

interface FetchedPage {
  html: string;
  /** Post-redirect URL, used as the base for resolving relative stylesheets. */
  finalUrl: string;
  fetchSource: FetchSource;
}

function normalizeUrl(raw: string): string {
  const trimmed = raw.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

/**
 * The URL forms worth trying, in preference order. For an apex domain typed
 * without www (e.g. "stripe.com"), prefer the `www.` host first: sites commonly
 * serve their canonical, fully-styled page from www and only a redirect or
 * localized stub from the apex, so the two hosts can yield very different
 * extractions. The bare host stays as a fallback for apex-only sites. This also
 * makes "stripe.com" and "www.stripe.com" converge on the same result.
 */
function urlCandidates(raw: string): string[] {
  const normalized = normalizeUrl(raw);
  try {
    const parsed = new URL(normalized);
    if (
      !parsed.hostname.startsWith("www.")
      && parsed.hostname.split(".").length === 2
    ) {
      const bare = parsed.href;
      parsed.hostname = `www.${parsed.hostname}`;
      return [parsed.href, bare];
    }
  } catch {
    // ignore an unparseable URL — the single normalized form is our best effort
  }
  return [normalized];
}

async function fetchWithTimeout(url: string): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Try the same-origin dev-server endpoint. Returns null (rather than throwing)
 * on any failure, including the static-build case where the endpoint doesn't
 * exist — detected by the absence of our marker header.
 */
async function tryDevServer(
  url: string
): Promise<{ html: string; finalUrl: string } | null> {
  try {
    const res = await fetchWithTimeout(
      `/__brand-theme-fetch?url=${encodeURIComponent(url)}`
    );
    if (!res.ok) return null;
    const finalUrl = res.headers.get("x-brand-theme-final-url");
    // No marker header means this wasn't our endpoint (e.g. a static host
    // returning index.html), so don't trust the body.
    if (finalUrl == null) return null;
    const html = await res.text();
    return html.length > 0 ? { html, finalUrl } : null;
  } catch {
    return null;
  }
}

/** Try public CORS proxies. Returns null on failure rather than throwing. */
async function tryProxies(
  url: string
): Promise<{ html: string; finalUrl: string } | null> {
  try {
    const res = await fetchWithTimeout(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );
    if (res.ok) {
      const json = (await res.json()) as { contents?: unknown };
      if (typeof json.contents === "string" && json.contents.length > 0) {
        return { html: json.contents, finalUrl: url };
      }
    }
  } catch {
    // fall through to the secondary proxy
  }
  try {
    const res = await fetchWithTimeout(
      `https://corsproxy.io/?url=${encodeURIComponent(url)}`
    );
    if (res.ok) {
      const text = await res.text();
      if (text.length > 0) return { html: text, finalUrl: url };
    }
  } catch {
    // both proxies exhausted
  }
  return null;
}

/**
 * Fetch a page's HTML, trying the dev server for every URL candidate before
 * falling back to public proxies. Returns the post-redirect URL for base
 * resolution and which transport succeeded.
 */
export async function fetchPage(rawUrl: string): Promise<FetchedPage> {
  const candidates = urlCandidates(rawUrl);
  for (const candidate of candidates) {
    const viaServer = await tryDevServer(candidate);
    if (viaServer) return { ...viaServer, fetchSource: "server" };
  }
  for (const candidate of candidates) {
    const viaProxy = await tryProxies(candidate);
    if (viaProxy) return { ...viaProxy, fetchSource: "proxy" };
  }
  throw new Error("Unable to fetch page via dev server or proxies");
}

/** Fetch arbitrary text (a stylesheet), server first then proxy; "" on failure. */
async function fetchText(url: string): Promise<string> {
  const viaServer = await tryDevServer(url);
  if (viaServer && viaServer.html.length > 0) return viaServer.html;
  const viaProxy = await tryProxies(url);
  return viaProxy?.html ?? "";
}

/**
 * Pull every scrap of CSS out of a fetched HTML document: inline `<style>` tags
 * plus up to {@link MAX_STYLESHEETS} linked stylesheets (resolved against the
 * page's final URL and fetched through the same transport chain). Stylesheets
 * that fail to load are skipped rather than aborting the whole extraction.
 */
export async function extractCssFromHtml(
  html: string,
  baseUrl: string
): Promise<string[]> {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const cssTexts: string[] = [];

  doc.querySelectorAll("style").forEach((styleEl) => {
    const text = styleEl.textContent;
    if (text && text.trim().length > 0) cssTexts.push(text);
  });

  const hrefs: string[] = [];
  doc.querySelectorAll('link[rel~="stylesheet"]').forEach((linkEl) => {
    const href = linkEl.getAttribute("href");
    if (href && hrefs.length < MAX_STYLESHEETS) {
      try {
        hrefs.push(new URL(href, baseUrl).href);
      } catch {
        // ignore hrefs that don't resolve to a valid absolute URL
      }
    }
  });

  const fetched = await Promise.all(hrefs.map((href) => fetchText(href)));
  for (const css of fetched) {
    if (css.trim().length > 0) cssTexts.push(css);
  }

  return cssTexts;
}

// ---------------------------------------------------------------------------
// CSS parsing — recover a partial role→value map through four escalating
// phases (custom properties → keyword match → property context → value
// heuristic), each only filling roles the earlier phases missed.
// ---------------------------------------------------------------------------

/**
 * Parse a set of CSS texts into a partial map of token role → value. Runs the
 * four extraction phases in order; earlier phases win, later phases only fill
 * gaps.
 */
export function parseCssTokens(
  cssTexts: string[],
  brandHint?: string | null
): CssTokenMap {
  const css = cssTexts.map((c) => c.slice(0, MAX_CSS_CHARS)).join("\n");
  const map: CssTokenMap = {};

  // Phase A — collect + resolve CSS custom properties.
  const vars = resolveVars(collectCustomProps(css));

  // Phase B — assign roles by matching variable names against keyword patterns.
  keywordMatch(vars, map);

  // Learn primary from a real button (fill or stroke) — the ground truth for the
  // brand color — overriding a keyword guess that may be a framework default.
  primaryFromButton(css, vars, map);

  // Learn the button's own corner radius (may live in a separate rule).
  buttonRadiusFromCss(css, vars, map);

  // The site's declared brand color (<meta name="theme-color">) is the most
  // authoritative signal of its identity — it distinguishes the *site's* brand
  // (Bootstrap's docs purple) from a framework default on demo buttons (its
  // blue). Apply it over the button/keyword guess when it's a real color.
  if (
    brandHint != null && scoreColor("primary", brandHint, map, "") !== REJECT
  ) {
    map.primary = brandHint;
  }

  // Phase C — fall back to property context (body/anchor/button/… rules).
  propertyContext(css, map);

  // Phase D — last-resort color heuristic over every color value we saw.
  valueHeuristic(css, vars, map);

  // Final pass — drop relative colors that conflict with the settled background.
  reconcile(map);

  // Guardrail — clamp the base spacing so a roomy marketing site doesn't inflate
  // padding across these data-dense components.
  if (map.spacing != null) {
    const px = parseInt(map.spacing, 10);
    if (!Number.isNaN(px) && px > MAX_SPACING_PX) {
      map.spacing = String(MAX_SPACING_PX);
    }
  }

  return map;
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

/**
 * The site's declared brand color from `<meta name="theme-color">`, but only
 * when it's an actual saturated color — a white/black bar color (e.g.
 * YouTube's) is not a brand primary, so it's ignored.
 */
function themeColorFromHtml(html: string): string | null {
  for (const tag of html.matchAll(/<meta[^>]+name=["']theme-color["'][^>]*>/gi)) {
    const content = /content=["']([^"']+)["']/i.exec(tag[0]);
    const hex = content ? parseColorToHex(content[1]) : null;
    const c = hex != null ? hslFromHex(hex) : null;
    if (hex != null && c != null && c.s >= 20 && c.l >= 12 && c.l <= 85) {
      return hex;
    }
  }
  return null;
}

/** Substitute `var(--x[, fallback])` references in a single value one level deep
 * using the resolved custom-property map. */
function substituteVars(value: string, vars: Record<string, string>): string {
  return value.replaceAll(
    /var\(\s*--([\w-]+)\s*(?:,\s*([^)]*))?\)/g,
    (_full, ref: string, fallback?: string) => {
      const target = vars[ref];
      if (target != null) return target;
      return fallback != null ? fallback.trim() : "";
    }
  );
}

/**
 * Selectors that carry the brand primary, most-reliable first: an explicit
 * primary/CTA/submit button, then any button. The brand color shows on buttons,
 * so this is a stronger signal than a keyword-named variable (which on some
 * sites is a framework default, e.g. Material's deep-orange on YouTube).
 */
const PRIMARY_BUTTON_SELECTORS: RegExp[] = [
  /(?:^|[{}])[^{}]*primary[^{}]*(?:btn|button)[^{}]*\{([^{}]*)\}/gi,
  /(?:^|[{}])[^{}]*(?:btn|button)[^{}]*primary[^{}]*\{([^{}]*)\}/gi,
  /(?:^|[{}])[^{}]*(?:call-to-action|cta)[^{}]*\{([^{}]*)\}/gi,
  /(?:^|[{}])[^{}]*\[type=["']?submit["']?\][^{}]*\{([^{}]*)\}/gi,
  /(?:^|[{}])\s*(?:button|\.btn|\.button)\b[^{}]*\{([^{}]*)\}/gi,
];

/**
 * Learn the primary color from an actual button — its fill, or its border/stroke
 * for outlined buttons — resolving any `var()` so custom-token sites work. This
 * overrides the keyword guess because the button is the ground truth for what
 * the brand's primary actually looks like.
 */
function primaryFromButton(
  css: string,
  vars: Record<string, string>,
  map: CssTokenMap
): void {
  for (const selector of PRIMARY_BUTTON_SELECTORS) {
    selector.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = selector.exec(css)) != null) {
      // Skip interaction states so we get the resting brand color, not its
      // hover/active shade (which reads a step darker/lighter).
      const selectorText = match[0].slice(0, match[0].indexOf("{"));
      if (/:(hover|active|focus|focus-visible|focus-within|disabled|visited)/i.test(selectorText)) {
        continue;
      }
      const body = match[1];
      const textColor = readProp(body, ["color"]);
      // Prefer the fill (a solid brand button). When it's the primary, the
      // button's own text color is the truest primary-foreground.
      const fill = readProp(body, ["background-color", "background"]);
      const fillHex = fill != null
        ? firstColorInValue(substituteVars(fill, vars))
        : null;
      if (fillHex != null && scoreColor("primary", fillHex, map, "") !== REJECT) {
        map.primary = fillHex;
        const fg = textColor != null
          ? firstColorInValue(substituteVars(textColor, vars))
          : null;
        if (fg != null) map["primary-foreground"] = fg;
        return;
      }
      // Otherwise an outlined button: its border/stroke is the brand color. Its
      // text color equals the stroke (transparent fill), so it isn't a valid
      // foreground for our filled primary — leave that to be computed.
      const stroke = readProp(body, ["border-color", "border"]);
      const strokeHex = stroke != null
        ? firstColorInValue(substituteVars(stroke, vars))
        : null;
      if (
        strokeHex != null && scoreColor("primary", strokeHex, map, "") !== REJECT
      ) {
        map.primary = strokeHex;
        return;
      }
    }
  }
}

/**
 * Learn the button corner radius from button rules (the `border-radius` often
 * lives in a different rule than the background, so this scans independently).
 * Takes the *largest* plausible radius across button rules — buttons express
 * their intended roundness at the max — while ignoring 0 resets and huge pill
 * values. Only sets it when buttons are meaningfully rounded (>= 4px); smaller
 * values are left to default to the surface radius.
 */
function buttonRadiusFromCss(
  css: string,
  vars: Record<string, string>,
  map: CssTokenMap
): void {
  if (map["button-border-radius"] != null) return;
  let best = 0;
  for (const selector of PRIMARY_BUTTON_SELECTORS) {
    selector.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = selector.exec(css)) != null) {
      const selectorText = match[0].slice(0, match[0].indexOf("{"));
      if (/:(hover|active|focus|focus-visible|disabled|visited)/i.test(selectorText)) {
        continue;
      }
      const raw = readProp(match[1], ["border-radius"]);
      if (raw == null) continue;
      // Ignore pills (border-radius: 50%/9999px…) — clampLength rejects >40.
      const r = clampLength(
        firstLengthToken(substituteVars(raw, vars)) ?? raw,
        0,
        40
      );
      if (r != null) best = Math.max(best, parseInt(r, 10));
    }
  }
  if (best >= 4) map["button-border-radius"] = String(best);
}

type RoleKind =
  | "color"
  | "font"
  | "weight"
  | "fontsize"
  | "lineheight"
  | "radius"
  | "space"
  | "width"
  | "ms"
  | "shadow";

interface KeywordRule {
  role: TokenRole;
  keywords: string[];
  kind: RoleKind;
}

/**
 * Keyword patterns matched against variable names. Order matters: more specific
 * roles come first so they consume their variable before a broader role (e.g.
 * `text-muted` before `text`, `font-family-mono` before `font-family`,
 * `font-weight-bold` before `font-weight-default`, the sized `font-size-*`
 * before the generic `font-size`).
 */
// Ordering matters twice over: specificity (so `text-muted` claims its variable
// before `text`), and scoring context (background is resolved before the roles
// whose quality is judged relative to it — text/surface/border/muted).
const KEYWORD_RULES: KeywordRule[] = [
  // Colors
  { role: "primary", keywords: ["primary", "brand", "accent"], kind: "color" },
  {
    role: "background",
    keywords: ["background", "bg-page", "bg-base", "bg-body", "page-bg", "canvas"],
    kind: "color",
  },
  {
    role: "text",
    keywords: ["text", "foreground", "body-color", "ink", "copy"],
    kind: "color",
  },
  {
    role: "surface",
    keywords: ["surface", "card", "panel", "bg-secondary", "bg-subtle", "elevated"],
    kind: "color",
  },
  {
    role: "text-muted",
    keywords: ["text-muted", "muted", "subtle", "text-secondary", "secondary-text", "text-tertiary"],
    kind: "color",
  },
  {
    role: "border",
    keywords: ["border", "divider", "separator", "stroke", "outline"],
    kind: "color",
  },
  {
    role: "danger",
    keywords: ["danger", "error", "destructive", "critical", "red"],
    kind: "color",
  },
  { role: "success", keywords: ["success", "positive", "green"], kind: "color" },
  {
    role: "warning",
    keywords: ["warning", "caution", "amber", "yellow"],
    kind: "color",
  },
  // Typography
  {
    role: "font-family-mono",
    keywords: ["font-mono", "monospace", "mono", "font-code", "code-font"],
    kind: "font",
  },
  {
    role: "font-family",
    keywords: ["font-family", "font-sans", "font-base", "typeface", "font-body", "body-font"],
    kind: "font",
  },
  {
    role: "font-weight-bold",
    keywords: ["font-weight-bold", "weight-bold", "font-bold", "font-weight-semibold", "font-semibold", "weight-semibold"],
    kind: "weight",
  },
  {
    role: "font-weight-default",
    keywords: ["font-weight-normal", "font-weight-regular", "weight-normal", "font-normal", "font-weight-base", "font-weight"],
    kind: "weight",
  },
  {
    role: "font-size-large",
    keywords: ["font-size-lg", "text-lg", "font-size-large", "size-lg", "fs-lg"],
    kind: "fontsize",
  },
  {
    role: "font-size-small",
    keywords: ["font-size-sm", "text-sm", "font-size-small", "size-sm", "fs-sm"],
    kind: "fontsize",
  },
  {
    role: "font-size-xsmall",
    keywords: ["font-size-xs", "text-xs", "font-size-xsmall", "size-xs", "fs-xs"],
    kind: "fontsize",
  },
  {
    role: "font-size-medium",
    keywords: ["font-size-base", "text-base", "font-size-md", "font-size", "body-font-size", "size-base"],
    kind: "fontsize",
  },
  {
    role: "line-height",
    keywords: ["line-height", "leading", "lineheight"],
    kind: "lineheight",
  },
  // Surface
  {
    role: "border-radius",
    keywords: ["border-radius", "radius", "rounded", "corner", "rounding"],
    kind: "radius",
  },
  {
    role: "border-width",
    keywords: ["border-width", "stroke-width"],
    kind: "width",
  },
  {
    role: "spacing",
    keywords: ["spacing", "gap", "gutter", "space", "spacer"],
    kind: "space",
  },
  {
    role: "shadow",
    keywords: ["box-shadow", "shadow", "elevation"],
    kind: "shadow",
  },
  // Emphasis
  {
    role: "transition-duration",
    keywords: ["transition-duration", "duration", "transition", "animation-duration"],
    kind: "ms",
  },
  {
    role: "focus-width",
    keywords: ["focus-width", "focus-ring-width", "ring-width"],
    kind: "width",
  },
  {
    role: "focus-offset",
    keywords: ["focus-offset", "focus-ring-offset", "ring-offset"],
    kind: "width",
  },
];

/**
 * Phase B: for each role, choose the best-scoring variable whose name contains
 * one of the role's keywords and whose value both parses for the role's kind and
 * makes *semantic* sense for it (a primary that isn't near-white, a border
 * that's actually grey, a base font size that isn't 9px…). A name-matched but
 * semantically wrong value is rejected so a later phase can do better rather
 * than locking in garbage. Ties break toward the shorter (more canonical) name.
 * Once a variable is claimed it can't be reused.
 */
function keywordMatch(vars: Record<string, string>, map: CssTokenMap): void {
  const used = new Set<string>();
  const names = Object.keys(vars).sort((a, b) => a.length - b.length);

  for (const { role, keywords, kind } of KEYWORD_RULES) {
    if (map[role] != null) continue;
    let bestName: string | null = null;
    let bestValue: string | null = null;
    let bestScore = Number.NEGATIVE_INFINITY;
    for (const name of names) {
      if (used.has(name)) continue;
      const lower = name.toLowerCase();
      if (!keywords.some((kw) => lower.includes(kw))) continue;
      const value = validateValue(vars[name], kind);
      if (value == null) continue;
      const score = scoreForRole(role, kind, value, map, lower);
      // Strictly-greater keeps the first (shortest, since names are sorted) on
      // ties, preferring the canonical `--primary` over `--primary-hover`.
      if (score > bestScore) {
        bestScore = score;
        bestName = name;
        bestValue = value;
      }
    }
    if (bestName != null && bestValue != null) {
      map[role] = bestValue;
      used.add(bestName);
    }
  }
}

const REJECT = Number.NEGATIVE_INFINITY;

/**
 * Score how well a validated value fits a role. Returns REJECT when the value is
 * name-plausible but semantically wrong (so the role stays open for the
 * property-context / heuristic phases). Higher is better.
 */
function scoreForRole(
  role: TokenRole,
  kind: RoleKind,
  value: string,
  map: CssTokenMap,
  name: string
): number {
  if (kind === "color") return scoreColor(role, value, map, name);
  const num = parseFloat(value);
  switch (role) {
    case "font-size-medium":
      return num >= 13 && num <= 18 ? -Math.abs(num - 16) : REJECT;
    case "font-size-large":
      return num >= 15 && num <= 30 ? -Math.abs(num - 18) : REJECT;
    case "font-size-small":
      return num >= 11 && num <= 15 ? -Math.abs(num - 13) : REJECT;
    case "font-size-xsmall":
      return num >= 9 && num <= 13 ? -Math.abs(num - 11) : REJECT;
    case "font-weight-bold":
      return num >= 600 ? num : REJECT;
    case "font-weight-default":
      return num >= 350 && num <= 550 ? -Math.abs(num - 400) : REJECT;
    case "spacing":
      return num >= 3 && num <= 24 ? -Math.abs(num - 8) : REJECT;
    case "border-width":
      return num >= 1 && num <= 4 ? -Math.abs(num - 1) : REJECT;
    case "transition-duration":
      return num >= 50 && num <= 500 ? -Math.abs(num - 200) : REJECT;
    case "line-height":
      return num >= 1 && num <= 2.4 ? 0 : REJECT;
    default:
      // fonts, mono, shadow, radius, focus widths — validateValue already gated.
      return 0;
  }
}

/** Score a color for a role using perceptual constraints, judged against any
 * already-resolved background/text so relative roles land sensibly. `name` is
 * the source variable name (lowercased, "" for property-context reads). */
function scoreColor(
  role: TokenRole,
  hex: string,
  map: CssTokenMap,
  name: string
): number {
  const c = hslFromHex(hex);
  if (!c) return REJECT;
  const bg = map.background != null ? hslFromHex(map.background) : null;
  const text = map.text != null ? hslFromHex(map.text) : null;

  switch (role) {
    case "primary": {
      // A brand color is saturated and neither near-white nor near-black.
      if (c.s < 25 || c.l < 12 || c.l > 80) return REJECT;
      // Prefer the canonical brand token over a punchier/darker *variant*
      // (`--primary-hover`, `--brand-emphasis`, a `-600` scale step), which is
      // what made the applied primary read a shade off. Then prefer a lightness
      // suited to the mode (brand buttons sit a touch brighter in dark themes).
      const isVariant =
        /(hover|active|focus|pressed|visited|darker|lighter|emphasis|strong|vivid|intense|deep|subtle|muted|soft|pale|disabled|gradient|ring|shadow)/
          .test(name);
      const idealL = bg != null && bg.l < 50 ? 62 : 52;
      return -(isVariant ? 200 : 0) - Math.abs(c.l - idealL) + c.s * 0.02;
    }
    case "background":
      // Near-neutral and at an extreme of the lightness scale.
      if (c.s > 28 || (c.l > 30 && c.l < 70)) return REJECT;
      return Math.max(c.l, 100 - c.l);
    case "surface":
      // Near-neutral and on the same light/dark side as the background.
      if (c.s > 30) return REJECT;
      if (bg) {
        return (c.l >= 50) === (bg.l >= 50) ? 100 - Math.abs(c.l - bg.l) : REJECT;
      }
      return c.l > 30 && c.l < 70 ? REJECT : Math.max(c.l, 100 - c.l);
    case "text":
      // Must contrast the background; prefer the more neutral, farther option.
      if (bg) {
        const distance = Math.abs(c.l - bg.l);
        return distance >= 35 ? distance - c.s * 0.1 : REJECT;
      }
      return Math.max(c.l, 100 - c.l) - c.s * 0.1;
    case "text-muted":
      // Should sit *between* text and background in lightness.
      if (bg && text) {
        const lo = Math.min(text.l, bg.l) + 8;
        const hi = Math.max(text.l, bg.l) - 8;
        return c.l >= lo && c.l <= hi
          ? 100 - Math.abs(c.l - (text.l + bg.l) / 2)
          : REJECT;
      }
      if (c.s > 45) return REJECT;
      return c.l > 25 && c.l < 75 ? -Math.abs(c.l - 50) : REJECT;
    case "border": {
      // Grey-ish, visibly distinct from the background but not a heavy slab.
      if (c.s > 25) return REJECT;
      if (bg) {
        const diff = Math.abs(c.l - bg.l);
        if (diff < 6 || diff > 55) return REJECT;
        const rightSide = bg.l >= 50 ? c.l >= 45 : c.l <= 55;
        return rightSide ? 100 - c.s - diff * 0.1 : REJECT;
      }
      return c.l > 60 || c.l < 25 ? 100 - c.s : REJECT;
    }
    // Semantic colors: correct hue, saturated, and a mid lightness — so we take
    // the solid `danger`, not its pale `danger-subtle` border variant.
    case "danger":
      return (isHue(c.h, 0, 20) || isHue(c.h, 335, 360))
          && c.s >= 35 && c.l >= 25 && c.l <= 70
        ? c.s
        : REJECT;
    case "success":
      return isHue(c.h, 90, 170) && c.s >= 25 && c.l >= 20 && c.l <= 70
        ? c.s
        : REJECT;
    case "warning":
      return isHue(c.h, 30, 70) && c.s >= 35 && c.l >= 40 && c.l <= 75
        ? c.s
        : REJECT;
    default:
      return 0;
  }
}

function isHue(h: number, lo: number, hi: number): boolean {
  return h >= lo && h <= hi;
}

/** Coerce a raw CSS value into the normalized form a role expects, or null when
 * the value doesn't fit the role's kind. */
function validateValue(raw: string, kind: RoleKind): string | null {
  const value = raw.trim();
  switch (kind) {
    case "color":
      return parseColorToHex(value);
    case "font":
      return isFontStack(value) ? value.replace(/;$/, "").trim() : null;
    case "weight":
      return parseWeight(value);
    case "fontsize":
      return clampLength(value, 8, 96);
    case "lineheight":
      return parseLineHeight(value);
    case "radius":
      return clampLength(value, 0, 48);
    case "space":
      return clampLength(value, 3, 64);
    case "width":
      return clampLength(value, 0, 8);
    case "ms":
      return parseDurationMs(value);
    case "shadow":
      return isPlausibleShadow(value) ? value.replace(/;$/, "").trim() : null;
  }
}

/**
 * A real font stack: has letters, isn't a color, and looks like a font — it
 * contains a comma, a generic family, or a quoted name. This rejects a stray
 * length like `1rem` that a `--…-body-font-size` variable would otherwise slip
 * into a font role.
 */
function isFontStack(value: string): boolean {
  if (parseColorToHex(value) != null || !/[a-z]/i.test(value)) return false;
  return (
    value.includes(",")
    || /["']/.test(value)
    || /\b(serif|sans-serif|monospace|system-ui|ui-sans-serif|ui-monospace|ui-serif|cursive|fantasy|-apple-system|blinkmacsystemfont)\b/i
      .test(value)
  );
}

/**
 * A usable box-shadow: has a px offset and an actual color, and its parentheses
 * balance (guards against a truncated `var()`/`color-mix()` capture producing a
 * malformed string like `…#0037700f),…`).
 */
function isPlausibleShadow(value: string): boolean {
  if (!/\d\s*px/i.test(value)) return false;
  if (firstColorInValue(value) == null) return false;
  let depth = 0;
  for (const ch of value) {
    if (ch === "(") depth++;
    else if (ch === ")" && --depth < 0) return false;
  }
  return depth === 0;
}

// ---------------------------------------------------------------------------
// Phase C — property context. For roles the keyword pass missed, read the value
// straight off common element rules.
// ---------------------------------------------------------------------------

interface SelectorRead {
  /** Global regex whose group 1 captures the rule body. */
  selector: RegExp;
  reads: Array<{
    role: TokenRole;
    props: string[];
    kind: RoleKind;
    /** Extract the first color from a shorthand rather than the whole value. */
    color?: boolean;
    /** Extract the first length from a shorthand (e.g. padding/border). */
    length?: boolean;
  }>;
}

const SELECTOR_READS: SelectorRead[] = [
  {
    selector: /(?:^|[{}])\s*(?:html|body)\b[^{}]*\{([^{}]*)\}/gi,
    reads: [
      { role: "background", props: ["background-color", "background"], kind: "color", color: true },
      { role: "text", props: ["color"], kind: "color" },
      { role: "font-family", props: ["font-family"], kind: "font" },
      { role: "font-size-medium", props: ["font-size"], kind: "fontsize" },
      { role: "font-weight-default", props: ["font-weight"], kind: "weight" },
      { role: "line-height", props: ["line-height"], kind: "lineheight" },
    ],
  },
  {
    selector: /(?:^|[{}])\s*(?:code|pre|kbd|samp)\b[^{}]*\{([^{}]*)\}/gi,
    reads: [
      { role: "font-family-mono", props: ["font-family"], kind: "font" },
    ],
  },
  {
    selector: /(?:^|[{}])\s*(?:button|\.btn|\.button)\b[^{}]*\{([^{}]*)\}/gi,
    reads: [
      { role: "primary", props: ["background-color", "background"], kind: "color", color: true },
      { role: "border-radius", props: ["border-radius"], kind: "radius", length: true },
      { role: "shadow", props: ["box-shadow"], kind: "shadow" },
      { role: "transition-duration", props: ["transition-duration", "transition"], kind: "ms" },
      { role: "spacing", props: ["padding"], kind: "space", length: true },
    ],
  },
  {
    selector: /(?:^|[{}])\s*a\b[^{}]*\{([^{}]*)\}/gi,
    reads: [
      { role: "primary", props: ["color"], kind: "color", color: true },
    ],
  },
  {
    selector: /(?:^|[{}])\s*(?:input|textarea|select)\b[^{}]*\{([^{}]*)\}/gi,
    reads: [
      { role: "input-bg", props: ["background-color", "background"], kind: "color", color: true },
      { role: "border", props: ["border-color", "border"], kind: "color", color: true },
      { role: "border-radius", props: ["border-radius"], kind: "radius", length: true },
      { role: "border-width", props: ["border-width", "border"], kind: "width", length: true },
    ],
  },
  {
    selector: /(?:^|[{}])\s*(?:strong|b|h1|h2)\b[^{}]*\{([^{}]*)\}/gi,
    reads: [
      { role: "font-weight-bold", props: ["font-weight"], kind: "weight" },
    ],
  },
];

/**
 * Phase C: for any role still unmapped, read the value straight off common
 * element rules — `body` for background/text/type, `a`/`button` for a primary
 * candidate and interaction tokens, `input` for the border/input surface, and
 * `code` for the mono font.
 */
function propertyContext(css: string, map: CssTokenMap): void {
  for (const { selector, reads } of SELECTOR_READS) {
    const pending = reads.filter((r) => map[r.role] == null);
    if (pending.length === 0) continue;

    selector.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = selector.exec(css)) != null) {
      const body = match[1];
      for (const read of pending) {
        if (map[read.role] != null) continue;
        const raw = readProp(body, read.props);
        if (raw == null) continue;
        const value = read.color
          ? firstColorInValue(raw)
          : read.length
          ? clampLength(firstLengthToken(raw) ?? raw, ...kindBounds(read.kind))
          : validateValue(raw, read.kind);
        // Apply the same semantic gate as Phase B so a real-but-wrong value
        // (a white border, a 9px "base" size) doesn't lock the role. The empty
        // name means a property-context read is never treated as a "variant".
        if (value != null && scoreForRole(read.role, read.kind, value, map, "") !== REJECT) {
          map[read.role] = value;
        }
      }
      if (pending.every((r) => map[r.role] != null)) break;
    }
  }
}

/** Read the first present property from a rule body, in preference order. */
function readProp(body: string, props: string[]): string | null {
  for (const prop of props) {
    const re = new RegExp(`(?:^|;)\\s*${prop}\\s*:\\s*([^;]+)`, "i");
    const match = re.exec(body);
    if (match) return match[1].trim();
  }
  return null;
}

/** The (min, max) length bounds for a role kind, for shorthand extraction. */
function kindBounds(kind: RoleKind): [number, number] {
  switch (kind) {
    case "radius":
      return [0, 48];
    case "space":
      return [3, 64];
    case "width":
      return [0, 8];
    case "fontsize":
      return [8, 96];
    default:
      return [0, 400];
  }
}

// ---------------------------------------------------------------------------
// Phase D — value heuristic. Last resort for the structural colors.
// ---------------------------------------------------------------------------

/**
 * Phase D: group every color value we saw (custom props + raw literals) by
 * luminance — lightest anchors the background, darkest the text — and take the
 * most saturated mid-tone as the primary.
 */
function valueHeuristic(
  css: string,
  vars: Record<string, string>,
  map: CssTokenMap
): void {
  const needsBg = map.background == null;
  const needsText = map.text == null;
  const needsPrimary = map.primary == null;
  if (!needsBg && !needsText && !needsPrimary) return;

  const seen = new Set<string>();
  const colors: Array<{ hex: string; lum: number; sat: number }> = [];
  const add = (hex: string | null): void => {
    if (!hex || seen.has(hex)) return;
    seen.add(hex);
    colors.push({
      hex,
      lum: luminanceFromHex(hex) ?? 0.5,
      sat: saturationFromHex(hex),
    });
  };

  for (const value of Object.values(vars)) add(parseColorToHex(value));
  const literals = css.match(COLOR_TOKEN_RE);
  if (literals) for (const token of literals) add(parseColorToHex(token));
  if (colors.length === 0) return;

  const byLumDesc = [...colors].sort((a, b) => b.lum - a.lum);
  if (needsBg) map.background = byLumDesc[0].hex;
  if (needsText) {
    const darkest = byLumDesc[byLumDesc.length - 1].hex;
    // Avoid collapsing background and text onto the same single color.
    if (darkest !== map.background) map.text = darkest;
  }
  if (needsPrimary) {
    // A usable primary is colorful and neither too light nor too dark — filter
    // by HSL lightness (not relative luminance) so a pale lavender like #ddd6ff
    // doesn't win just for being saturated.
    const usable = colors.filter((c) => {
      const hsl = hslFromHex(c.hex);
      return hsl != null && hsl.l >= 20 && hsl.l <= 72 && c.sat >= 18;
    });
    if (usable.length > 0) {
      map.primary = usable.reduce((b, c) => (c.sat > b.sat ? c : b)).hex;
    }
  }
}

/**
 * Final consistency pass. The relative color roles (text/surface/border/muted)
 * may have been resolved before the background was known (the background can be
 * settled as late as Phase D). Re-judge each against the now-final background
 * and drop any that no longer make sense — e.g. a black border on a black
 * background — so the assembly step synthesizes a sensible replacement.
 */
function reconcile(map: CssTokenMap): void {
  for (const role of ["text", "surface", "border", "text-muted"] as const) {
    const value = map[role];
    if (value != null && scoreColor(role, value, map, "") === REJECT) {
      // Clear it (treated as unmapped downstream) so the assembly synthesizes a
      // replacement. Assigned undefined rather than `delete` for a static key.
      map[role] = undefined;
    }
  }
}

// ---------------------------------------------------------------------------
// Assembly — turn the partial role map into a complete, coherent theme by
// synthesizing the gaps around whatever real values we recovered.
// ---------------------------------------------------------------------------

/**
 * Fetch a site, recover real design tokens from its CSS, and assemble a full set
 * of token assignments — real values where we found them, synthesized (and
 * harmonized) values everywhere else.
 */
export async function extractTokensFromWebsite(
  url: string
): Promise<CssExtractionResult> {
  const { html, finalUrl, fetchSource } = await fetchPage(url);
  const cssTexts = await extractCssFromHtml(html, finalUrl);
  const map = parseCssTokens(cssTexts, themeColorFromHtml(html));
  return buildCssExtractionResult(map, fetchSource);
}

/**
 * Extract theme tokens from a raw CSS string — e.g. a stylesheet the user
 * uploads directly. Runs the same parse + synthesis pipeline as
 * {@link extractTokensFromWebsite} but skips all networking, so it works
 * offline and never depends on the dev-server proxy.
 */
export function extractTokensFromCssText(
  cssText: string
): CssExtractionResult {
  const map = parseCssTokens([cssText], null);
  return buildCssExtractionResult(map, "file");
}

/**
 * Turn a recovered {@link CssTokenMap} into a complete theme: synthesize a
 * harmonized palette around the real anchors, overlay derived scales and the
 * real values, then clamp to the data-dense ceilings. Shared by the website
 * and uploaded-CSS entry points.
 */
function buildCssExtractionResult(
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
  const bgLum = map.background != null ? luminanceFromHex(map.background) : null;
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
  const medium = map["font-size-medium"] != null
    ? parseInt(map["font-size-medium"], 10)
    : null;
  if (medium != null && !Number.isNaN(medium)) {
    if (map["font-size-small"] == null) {
      derived["font-size-small"] = String(Math.max(10, Math.round(medium * 0.86)));
    }
    if (map["font-size-large"] == null) {
      derived["font-size-large"] = String(Math.round(medium * 1.15));
    }
    if (map["font-size-xsmall"] == null) {
      derived["font-size-xsmall"] = String(Math.max(9, Math.round(medium * 0.79)));
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
    value === ""
    || value === "inherit"
    || value === "initial"
    || value === "unset"
    || value === "none"
    || value === "transparent"
    || value === "currentcolor"
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
        const n = p.endsWith("%")
          ? (parseFloat(p) / 100) * 255
          : parseFloat(p);
        return clampByte(n);
      };
      return rgbToHex([channel(parts[0]), channel(parts[1]), channel(parts[2])]);
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

/** Parse a length and keep it only when it lands within a plausible range for
 * its role (so a pill's `border-radius: 9999px` doesn't become the base). */
function clampLength(value: string, min: number, max: number): string | null {
  const px = lengthToPx(value);
  if (px == null) return null;
  const rounded = Math.round(px);
  if (rounded < min || rounded > max) return null;
  return String(rounded);
}

const WEIGHT_WORDS: Record<string, number> = {
  thin: 100,
  hairline: 100,
  extralight: 200,
  ultralight: 200,
  light: 300,
  normal: 400,
  regular: 400,
  book: 400,
  medium: 500,
  semibold: 600,
  demibold: 600,
  bold: 700,
  extrabold: 800,
  ultrabold: 800,
  black: 900,
  heavy: 900,
};

/** Parse a font-weight (numeric 100-900 or a keyword) to a numeric string. */
function parseWeight(value: string): string | null {
  const v = value.trim().toLowerCase();
  const num = parseInt(v, 10);
  if (!Number.isNaN(num) && num >= 100 && num <= 900) return String(num);
  for (const [word, weight] of Object.entries(WEIGHT_WORDS)) {
    if (v === word) return String(weight);
  }
  return null;
}

/** Parse a unitless (or %) line-height into a ratio string. */
function parseLineHeight(value: string): string | null {
  const v = value.trim().toLowerCase();
  if (v === "normal") return "1.5";
  const match = /^(-?\d*\.?\d+)\s*(px|rem|em|%)?$/.exec(v);
  if (!match) return null;
  let n = parseFloat(match[1]);
  const unit = match[2];
  if (unit === "%") n /= 100;
  // px/rem/em line-heights are ambiguous without the font size — skip them.
  else if (unit === "px" || unit === "rem" || unit === "em") return null;
  if (Number.isNaN(n) || n < 0.5 || n > 4) return null;
  return String(Math.round(n * 100) / 100);
}

/** Parse the first time value in a shorthand ("all .2s ease" → "200"). */
function parseDurationMs(value: string): string | null {
  const match = /(-?\d*\.?\d+)\s*(ms|s)\b/i.exec(value);
  if (!match) return null;
  let n = parseFloat(match[1]);
  if (Number.isNaN(n)) return null;
  if (match[2].toLowerCase() === "s") n *= 1000;
  if (n <= 0 || n > 2000) return null;
  return String(Math.round(n));
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
  return whiteContrast >= 3 || whiteContrast >= darkContrast ? WHITE : NEAR_BLACK;
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
