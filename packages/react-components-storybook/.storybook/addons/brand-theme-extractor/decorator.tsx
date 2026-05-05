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
import React, { useEffect, useMemo } from "react";
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
  const brandTheme = React.useMemo(
    () => parseBrandThemeState(context.globals[GLOBALS_KEY]),
    [context.globals],
  );

  const cssText = useMemo(() => {
    if (!brandTheme?.active) return "";
    if (!brandTheme.assignments || brandTheme.assignments.length === 0) {
      return "";
    }

    const declarations: string[] = [];

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
        declarations.push(`  ${prop}: ${value};`);
      }
    }

    if (declarations.length === 0) return "";

    // Use @layer to ensure overrides sit above theme layers.
    // The styles.css layers are: storybook, osdk.styles, cbac.components, themes.
    // An unlayered style block always beats layered styles in the cascade.
    return `:root:root {\n${declarations.join("\n")}\n}`;
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
    root.setAttribute("data-bp-color-scheme", brandTheme.colorMode);

    return () => {
      root.removeAttribute("data-bp-color-scheme");
    };
  }, [brandTheme.colorMode]);

  return <Story />;
};
