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
import { getTokenRole, TOKEN_ROLES } from "./token-map.js";

const STYLE_ID = "brand-theme-overrides";

/**
 * Preview-side decorator that reads brand theme globals and injects
 * a <style> tag with CSS custom property overrides into the preview
 * document head. Uses :root with high specificity to override theme values.
 */
export const BrandThemeDecorator: Decorator = (Story, context) => {
  const brandTheme = useMemo(
    () => parseBrandThemeState(context.globals[GLOBALS_KEY]),
    [context.globals[GLOBALS_KEY]],
  );

  const cssText = useMemo(() => {
    if (!brandTheme?.active) return "";
    if (!brandTheme.assignments || brandTheme.assignments.length === 0) {
      return "";
    }

    // First, reset ALL token-map properties so stale values from a
    // previous preset don't linger when switching themes.
    const resets: string[] = [];
    for (const role of TOKEN_ROLES) {
      for (const prop of role.cssProperties) {
        resets.push(`  ${prop}: initial;`);
      }
    }

    // Then apply the current preset's overrides.
    const overrides: string[] = [];

    for (const assignment of brandTheme.assignments) {
      const roleDef = getTokenRole(assignment.role);
      if (!roleDef) continue;

      let value: string | undefined;
      if (
        assignment.colorIndex >= 0
        && brandTheme.palette?.[assignment.colorIndex]
      ) {
        value = brandTheme.palette[assignment.colorIndex].hex;
      } else if (assignment.customValue) {
        value = assignment.customValue;
      }

      if (!value) continue;

      if (
        (roleDef.inputType === "px" || roleDef.inputType === "ms")
        && /^\d+(\.\d+)?$/.test(value)
      ) {
        value = `${value}${roleDef.inputType}`;
      }

      for (const prop of roleDef.cssProperties) {
        overrides.push(`  ${prop}: ${value};`);
      }
    }

    if (overrides.length === 0) return "";

    // Use :root:root (doubled specificity) to override theme layers.
    // Reset block reverts stale tokens; override block applies the new theme.
    return `:root:root {\n${resets.join("\n")}\n${overrides.join("\n")}\n}`;
  }, [brandTheme]);

  useEffect(function syncBrandThemeOverrideStyle() {
    let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement | null;

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
      const el = document.getElementById(STYLE_ID);
      if (el) el.remove();
    };
  }, [cssText]);

  useEffect(function applyBlueprintColorMode() {
    const root = document.documentElement;
    if (brandTheme.colorMode === "dark") {
      root.setAttribute("data-bp-color-scheme", "dark");
    } else {
      root.removeAttribute("data-bp-color-scheme");
    }

    return () => {
      root.removeAttribute("data-bp-color-scheme");
    };
  }, [brandTheme.colorMode]);

  return <Story />;
};
