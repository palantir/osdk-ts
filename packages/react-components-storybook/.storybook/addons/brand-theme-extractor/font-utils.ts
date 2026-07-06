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

/**
 * CSS generic font-family keywords. These always "resolve" — they never name a
 * concrete installed face — so they're kept in a stack without an availability
 * check and never counted as a "named font we have locally".
 */
const GENERIC_FAMILIES = new Set([
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "ui-rounded",
  "math",
  "emoji",
  "fangsong",
  // -apple-system / BlinkMacSystemFont are platform aliases that resolve to the
  // OS UI font rather than a nameable installed face; treat them as generic.
  "-apple-system",
  "blinkmacsystemfont",
]);

function stripQuotes(family: string): string {
  return family
    .trim()
    .replaceAll(/^["']|["']$/gu, "")
    .trim();
}

function isGenericFamily(family: string): boolean {
  return GENERIC_FAMILIES.has(stripQuotes(family).toLowerCase());
}

function isVarReference(family: string): boolean {
  return family.trim().startsWith("var(");
}

/**
 * Detects whether a concrete font family is actually installed/available on the
 * current machine, using the canvas width-measurement technique.
 *
 * We can't use `document.fonts.check()` here: for a family that has no matching
 * `@font-face`, the spec has it return `true` (it assumes a system font is
 * present), so it can't distinguish an installed font from a missing one. The
 * canvas approach renders a probe string in the target family layered over each
 * generic baseline and reports "available" only when the measured width differs
 * from every baseline — i.e. the browser actually swapped in a distinct face.
 */
export function isFontFamilyAvailable(family: string): boolean {
  const name = stripQuotes(family);
  if (name === "") return false;
  if (isGenericFamily(name)) return true;

  if (typeof document === "undefined") return false;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return false;

  // A string mixing wide/narrow glyphs so a fallback swap changes the width.
  const probe = "mmmmmmmmmmlliWWWW0Oo1234567890";
  const size = 72;
  const baselines = ["monospace", "serif", "sans-serif"];

  return baselines.some((baseline) => {
    ctx.font = `${size}px ${baseline}`;
    const baselineWidth = ctx.measureText(probe).width;

    // If the named family is unavailable, the browser falls back to `baseline`
    // and the widths match. A different width means a distinct face was used.
    ctx.font = `${size}px "${name}", ${baseline}`;
    return ctx.measureText(probe).width !== baselineWidth;
  });
}

/**
 * Filters a CSS font-family value down to the parts we can actually render:
 * generic keywords, `var()` references, and named families that are installed
 * locally. Named families that aren't available are dropped so the browser
 * never silently substitutes its default (serif) for a missing brand font.
 *
 * Returns:
 * - the value unchanged when it names no concrete face (pure generics/`var()`) —
 *   nothing to check, and it's a deliberate, valid choice;
 * - the filtered stack when at least one named face is installed locally;
 * - `undefined` when the value named fonts but none are installed — signalling
 *   the caller to skip the override so the base token's default stack stands.
 *
 * Note: this splits on commas and does not parse a `var()` with a comma-bearing
 * fallback (e.g. `var(--x, Arial)`). The plugin's inputs are plain stacks, so
 * that form never occurs here.
 */
export function resolveAvailableFontFamily(value: string): string | undefined {
  const parts = value
    .split(",")
    .map((p) => p.trim())
    .filter((p) => p !== "");
  if (parts.length === 0) return undefined;

  let namedFontCount = 0;
  let hasAvailableNamedFont = false;
  const kept = parts.filter((part) => {
    if (isVarReference(part) || isGenericFamily(part)) return true;
    namedFontCount++;
    if (isFontFamilyAvailable(part)) {
      hasAvailableNamedFont = true;
      return true;
    }
    return false;
  });

  // Pure generics / var() refs — always resolvable, so honor the theme as-is.
  if (namedFontCount === 0) return value;

  // Named fonts were requested but none are installed — let the base default
  // token stand instead of forcing a bare generic that may differ from
  // surrounding surfaces.
  if (!hasAvailableNamedFont) return undefined;

  return kept.join(", ");
}
