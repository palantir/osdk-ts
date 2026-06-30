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

const STYLE_ID = "brand-theme-overrides";

/**
 * Preview-side decorator that reads brand theme globals and injects
 * a <style> tag with CSS custom property overrides into the preview
 * document head. Uses :root with high specificity to override theme values.
 */
export const BrandThemeDecorator: Decorator = (Story, context) => {
  const rawState = context.globals[GLOBALS_KEY];
  const brandTheme = useMemo(() => parseBrandThemeState(rawState), [rawState]);

  // Depend on rawState (a stable string) instead of brandTheme.assignments
  // (a new array reference each render) so the memo actually memoizes.
  const cssText = useMemo(() => {
    const parsed = parseBrandThemeState(rawState);
    if (!parsed.assignments || parsed.assignments.length === 0) {
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

    for (const assignment of parsed.assignments) {
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
  }, [rawState]);

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
