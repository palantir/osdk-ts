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

import type { Decorator } from "@storybook/react-vite";
import { useEffect, useMemo } from "react";

import { GLOBALS_KEY } from "./constants.js";
import { parseBrandThemeState } from "./state.js";
import { getTokenRole } from "./token-map.js";
import type { TokenAssignment } from "./types.js";

const STYLE_ID = "brand-theme-overrides";
const FONTS_LINK_ID = "brand-theme-fonts";

/**
 * First families that are system/preinstalled or proprietary — never on Google
 * Fonts, so we don't try to load them (the font stack's fallbacks handle them).
 */
const NON_GOOGLE_FONT =
  /^(system-ui|-apple-system|blinkmacsystemfont|ui-(?:sans-serif|serif|monospace)|sans-serif|serif|monospace|cursive|fantasy|segoe ui|helvetica(?: neue)?|arial|sf ?(?:pro|mono).*|apple.*|.*emoji.*|.*fallback.*|inherit|initial|unset)$/i;

/** Turn a font stack into a Google Fonts `family=` token from its first family
 * (e.g. `"inter", …` → `Inter:wght@…`), or null when it isn't a Google font. */
function googleFamilyToken(stack: string, withWeights: boolean): string | null {
  const first = stack.split(",")[0]?.replaceAll(/["']/g, "").trim();
  if (!first || NON_GOOGLE_FONT.test(first)) return null;
  const family = first
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("+");
  return withWeights ? `${family}:wght@400;500;600;700` : family;
}

/**
 * Build a Google Fonts stylesheet URL for the extracted body + mono families, so
 * the preview renders in the site's actual typeface. Returns "" when neither
 * family is a Google font.
 */
function googleFontsHref(assignments: TokenAssignment[] | undefined): string {
  if (!assignments) return "";
  const bodyStack = assignments.find(
    (a) => a.role === "font-family"
  )?.customValue;
  const monoStack = assignments.find(
    (a) => a.role === "font-family-mono"
  )?.customValue;
  const body = bodyStack ? googleFamilyToken(bodyStack, true) : null;
  const mono = monoStack ? googleFamilyToken(monoStack, false) : null;

  const families: string[] = [];
  if (body) families.push(body);
  // Skip the mono family if it's the same base as the body family.
  if (mono && mono.split(":")[0] !== (body ? body.split(":")[0] : "")) {
    families.push(mono);
  }
  if (families.length === 0) return "";
  return `https://fonts.googleapis.com/css2?${families
    .map((f) => `family=${f}`)
    .join("&")}&display=swap`;
}

/**
 * Preview-side decorator that reads brand theme globals and injects
 * a <style> tag with CSS custom property overrides into the preview
 * document head. Uses :root with high specificity to override theme values.
 */
export const BrandThemeDecorator: Decorator = (Story, context) => {
  const rawState = context.globals[GLOBALS_KEY];
  const brandTheme = useMemo(() => parseBrandThemeState(rawState), [rawState]);

  const cssText = useMemo(() => {
    if (!brandTheme.assignments || brandTheme.assignments.length === 0) {
      return "";
    }

    // Apply the current preset's overrides. No reset phase is needed:
    // the style element's textContent is fully replaced on each theme
    // switch, so stale values from a previous preset cannot linger.
    // Avoiding `initial` resets preserves compound tokens (e.g.
    // --osdk-input-bg, --osdk-dialog-bg) that reference overridden
    // properties via var() — `initial` would make them the
    // guaranteed-invalid value, breaking the entire derivation chain.
    const overrides: string[] = [];

    for (const assignment of brandTheme.assignments) {
      const roleDef = getTokenRole(assignment.role);
      if (!roleDef) continue;

      let value: string | undefined = assignment.customValue;

      if (!value) continue;

      if (
        (roleDef.inputType === "px" || roleDef.inputType === "ms") &&
        /^\d+(\.\d+)?$/.test(value)
      ) {
        value = `${value}${roleDef.inputType}`;
      }

      for (const prop of roleDef.cssProperties) {
        overrides.push(`  ${prop}: ${value};`);
      }
    }

    if (overrides.length === 0) return "";

    // Re-assert compound tokens so custom themes use the themed surface
    // border instead of the Blueprint palette-based box-shadow defaults.
    overrides.push(
      "  --osdk-input-focus-outline: 1px solid var(--osdk-intent-primary-rest);",
      "  --osdk-surface-border: var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default);",
      "  --osdk-input-shadow: inset 0 0 0 var(--osdk-surface-border-width) var(--osdk-surface-border-color-default);",
      "  --osdk-input-shadow-error: inset 0 0 0 var(--osdk-surface-border-width) var(--osdk-intent-danger-rest);",
      "  --osdk-input-focus-shadow: inset 0 0 0 var(--osdk-surface-border-width) var(--osdk-surface-border-color-default);",
      "  --osdk-input-focus-shadow-error: inset 0 0 0 var(--osdk-surface-border-width) var(--osdk-intent-danger-rest);",
      "  --osdk-button-shadow: inset 0 0 0 var(--osdk-surface-border-width) var(--osdk-surface-border-color-default);"
    );

    // Use :root:root (doubled specificity) to override theme layers.
    return `:root:root {\n${overrides.join("\n")}\n}`;
  }, [brandTheme.assignments]);

  const fontsHref = useMemo(
    () => googleFontsHref(brandTheme.assignments),
    [brandTheme.assignments]
  );

  useEffect(
    function syncBrandThemeOverrideStyle() {
      let styleEl = document.getElementById(STYLE_ID);

      if (cssText) {
        if (!styleEl) {
          styleEl = document.createElement("style");
          styleEl.id = STYLE_ID;
          document.head.appendChild(styleEl);
        }
        styleEl.textContent = cssText;
      } else if (styleEl) {
        styleEl.remove();
      }

      return () => {
        if (styleEl) styleEl.remove();
      };
    },
    [cssText]
  );

  useEffect(
    function syncBrandThemeFontLink() {
      let linkEl = document.getElementById(FONTS_LINK_ID);

      if (fontsHref) {
        if (!linkEl) {
          linkEl = document.createElement("link");
          linkEl.id = FONTS_LINK_ID;
          linkEl.setAttribute("rel", "stylesheet");
          document.head.appendChild(linkEl);
        }
        if (linkEl.getAttribute("href") !== fontsHref) {
          linkEl.setAttribute("href", fontsHref);
        }
      } else if (linkEl) {
        linkEl.remove();
      }

      return () => {
        if (linkEl) linkEl.remove();
      };
    },
    [fontsHref]
  );

  useEffect(
    function applyBlueprintColorMode() {
      const root = document.documentElement;
      if (brandTheme.colorMode === "dark") {
        root.setAttribute("data-bp-color-scheme", "dark");
      } else {
        root.removeAttribute("data-bp-color-scheme");
      }

      return () => {
        root.removeAttribute("data-bp-color-scheme");
      };
    },
    [brandTheme.colorMode]
  );

  return <Story />;
};
