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

import React from "react";
import { OsdkThemeContext } from "./OsdkThemeContext.js";
import type {
  OsdkColorScheme,
  OsdkTheme,
  OsdkThemeContextValue,
  ResolvedOsdkColorScheme,
} from "./types.js";
import { useSystemTheme } from "./useSystemTheme.js";

export const DATA_THEME_ATTR = "data-bp-color-scheme";

interface PreviousCssVariableValue {
  priority: string;
  value: string;
}

export interface OsdkThemeProviderProps {
  /**
   * Controlled color scheme. When provided, the provider does not maintain
   * its own state — the parent must respond to `onColorSchemeChanged` (or
   * update its own external store) and re-render with the new value.
   */
  colorScheme?: OsdkColorScheme;

  /**
   * Initial color scheme when uncontrolled. Ignored when `colorScheme` is
   * provided.
   *
   * @default "system"
   */
  defaultColorScheme?: OsdkColorScheme;

  /** Fires whenever `setColorScheme` is called from a descendant. */
  onColorSchemeChanged?: (colorScheme: OsdkColorScheme) => void;

  /**
   * Custom design-token theme created with {@link createTheme}. Color scheme
   * state remains separate so runtime light/dark toggles do not need to
   * recreate brand-token objects.
   */
  theme?: OsdkTheme;

  /**
   * Element to write `data-bp-color-scheme` onto.
   *
   * @default `document.documentElement` - (the `<html>` element), which is
   * the safest target because Blueprint portals (popovers, dialogs,
   * tooltips) render outside the React tree.
   */
  target?: HTMLElement | null;

  children: React.ReactNode;
}

/**
 * Provides OSDK theme state to descendants and writes a
 * `data-bp-color-scheme` attribute onto the document so the CSS in
 * `tokens/base-tokens/dark.css` activates the right theme.
 *
 * `defaultColorScheme="system"` (default) follows the OS
 * `prefers-color-scheme` setting and re-renders when it changes.
 * `defaultColorScheme="light"` / `defaultColorScheme="dark"` start in the
 * given color scheme regardless of the OS preference. Call
 * {@link useOsdkTheme}().setColorScheme from a descendant to switch modes at
 * runtime.
 *
 * To integrate with an external color-scheme store, pass `colorScheme`
 * (controlled mode). Pass `theme` for custom design tokens created with
 * {@link createTheme}.
 */
export function OsdkThemeProvider({
  colorScheme: controlledColorScheme,
  defaultColorScheme = "system",
  onColorSchemeChanged,
  theme,
  target,
  children,
}: OsdkThemeProviderProps): React.ReactElement {
  const [internalColorScheme, setInternalColorScheme] = React.useState<
    OsdkColorScheme
  >(
    defaultColorScheme,
  );
  const colorScheme = controlledColorScheme ?? internalColorScheme;

  const systemTheme = useSystemTheme();
  const resolvedColorScheme: ResolvedOsdkColorScheme = colorScheme === "system"
    ? systemTheme
    : colorScheme;

  React.useLayoutEffect(function applyColorSchemeAttribute() {
    const element = getThemeTarget(target);
    if (element == null) return;

    const previous = element.getAttribute(DATA_THEME_ATTR);
    element.setAttribute(DATA_THEME_ATTR, resolvedColorScheme);
    return () => {
      if (previous == null) {
        element.removeAttribute(DATA_THEME_ATTR);
      } else {
        element.setAttribute(DATA_THEME_ATTR, previous);
      }
    };
  }, [resolvedColorScheme, target]);

  React.useLayoutEffect(function applyThemeCssVariables() {
    const element = getThemeTarget(target);
    if (element == null || theme == null || theme.cssVariables.size === 0) {
      return;
    }

    const previousValues = new Map<string, PreviousCssVariableValue>();

    for (const [cssVariableName, cssVariableValue] of theme.cssVariables) {
      previousValues.set(cssVariableName, {
        priority: element.style.getPropertyPriority(cssVariableName),
        value: element.style.getPropertyValue(cssVariableName),
      });
      element.style.setProperty(cssVariableName, cssVariableValue);
    }

    return () => {
      for (const [cssVariableName, previousValue] of previousValues) {
        if (previousValue.value === "") {
          element.style.removeProperty(cssVariableName);
        } else {
          element.style.setProperty(
            cssVariableName,
            previousValue.value,
            previousValue.priority,
          );
        }
      }
    };
  }, [target, theme]);

  const setColorScheme = React.useCallback(
    (next: OsdkColorScheme) => {
      if (controlledColorScheme === undefined) {
        setInternalColorScheme(next);
      }
      onColorSchemeChanged?.(next);
    },
    [controlledColorScheme, onColorSchemeChanged],
  );

  const value = React.useMemo<OsdkThemeContextValue>(
    () => ({
      colorScheme,
      resolvedColorScheme,
      setColorScheme,
      theme,
    }),
    [colorScheme, resolvedColorScheme, setColorScheme, theme],
  );

  return (
    <OsdkThemeContext.Provider value={value}>
      {children}
    </OsdkThemeContext.Provider>
  );
}

function getThemeTarget(target: HTMLElement | null | undefined) {
  return target
    ?? (typeof document !== "undefined" ? document.documentElement : null);
}
