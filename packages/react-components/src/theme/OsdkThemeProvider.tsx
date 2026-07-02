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
  OsdkThemeContextValue,
  OsdkThemeMode,
  ResolvedOsdkTheme,
} from "./types.js";
import { useSystemTheme } from "./useSystemTheme.js";

export const DATA_THEME_ATTR = "data-bp-color-scheme";

export interface OsdkThemeProviderProps {
  /**
   * Controlled theme. When provided, the provider does not maintain its
   * own state — the parent must respond to `onThemeChanged` (or update its
   * own external store) and re-render with the new value. Use this when an
   * external store already owns the theme value (e.g. Redux/Zustand, a
   * parent design-system provider, or a Storybook toolbar).
   */
  theme?: OsdkThemeMode;

  /**
   * Initial theme when uncontrolled. Ignored when `theme` is provided.
   *
   * @default "system"
   */
  defaultTheme?: OsdkThemeMode;

  /** Fires whenever `setTheme` is called from a descendant. */
  onThemeChanged?: (theme: OsdkThemeMode) => void;

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
 * `defaultTheme="system"` (default) follows the OS `prefers-color-scheme`
 * setting and re-renders when it changes. `defaultTheme="light"` /
 * `defaultTheme="dark"` start in the given theme regardless of the OS
 * preference. Call {@link useOsdkTheme}().setTheme from a descendant to
 * switch modes at runtime.
 *
 * To integrate with an external theme store, pass `theme` (controlled
 * mode)
 */
export function OsdkThemeProvider({
  theme: controlledTheme,
  defaultTheme = "system",
  onThemeChanged,
  target,
  children,
}: OsdkThemeProviderProps): React.ReactElement {
  const [internalTheme, setInternalTheme] =
    React.useState<OsdkThemeMode>(defaultTheme);
  const theme = controlledTheme ?? internalTheme;

  const systemTheme = useSystemTheme();
  const resolvedTheme: ResolvedOsdkTheme =
    theme === "system" ? systemTheme : theme;

  React.useLayoutEffect(() => {
    const element =
      target ??
      (typeof document !== "undefined" ? document.documentElement : null);
    if (element == null) return;

    const previous = element.getAttribute(DATA_THEME_ATTR);
    element.setAttribute(DATA_THEME_ATTR, resolvedTheme);
    return () => {
      if (previous == null) {
        element.removeAttribute(DATA_THEME_ATTR);
      } else {
        element.setAttribute(DATA_THEME_ATTR, previous);
      }
    };
  }, [resolvedTheme, target]);

  const setTheme = React.useCallback(
    (next: OsdkThemeMode) => {
      if (controlledTheme === undefined) {
        setInternalTheme(next);
      }
      onThemeChanged?.(next);
    },
    [controlledTheme, onThemeChanged]
  );

  const value = React.useMemo<OsdkThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme]
  );

  return (
    <OsdkThemeContext.Provider value={value}>
      {children}
    </OsdkThemeContext.Provider>
  );
}
