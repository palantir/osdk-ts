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
 * Requested theme mode.
 *
 * - `"light"` / `"dark"` — force the given theme regardless of OS preference.
 * - `"system"` — follow `prefers-color-scheme` and react to changes at runtime.
 */
export type OsdkColorScheme = "light" | "dark" | "system";

/**
 * The concrete color scheme actually applied to the DOM. `OsdkColorScheme` of
 * `"system"` resolves to either `"light"` or `"dark"` depending on the
 * current value of `prefers-color-scheme`.
 */
export type ResolvedOsdkColorScheme = "light" | "dark";

export type OsdkThemeTokenValue = string | number;

export interface OsdkThemeColors {
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  icon: string;
  border: string;
  danger: string;
  success: string;
  warning: string;
}

export interface OsdkThemeTypography {
  fontFamily: string;
  bodySmall: OsdkThemeTokenValue;
  bodyMedium: OsdkThemeTokenValue;
  bodyLarge: OsdkThemeTokenValue;
  fontWeightDefault: OsdkThemeTokenValue;
  fontWeightBold: OsdkThemeTokenValue;
  lineHeight: OsdkThemeTokenValue;
}

export interface OsdkThemeOverride {
  colors?: Partial<OsdkThemeColors>;
  typography?: Partial<OsdkThemeTypography>;
  radius?: OsdkThemeTokenValue;
  spacing?: OsdkThemeTokenValue;
  borderWidth?: OsdkThemeTokenValue;
  shadow?: string;
  focusWidth?: OsdkThemeTokenValue;
  focusOffset?: OsdkThemeTokenValue;
  transitionDuration?: OsdkThemeTokenValue;
  cssVariables?: Partial<Record<`--${string}`, string>>;
}

export interface OsdkTheme {
  cssVariables: ReadonlyMap<`--${string}`, string>;
}

export interface OsdkThemeContextValue {
  /** The requested color scheme, including `"system"`. */
  colorScheme: OsdkColorScheme;
  /** The concrete color scheme currently applied to the DOM. */
  resolvedColorScheme: ResolvedOsdkColorScheme;
  /** The custom design-token theme currently applied to the DOM. */
  theme: OsdkTheme | undefined;
  /**
   * Update the requested color scheme. In controlled mode (`colorScheme` prop
   * on the provider) this only invokes `onColorSchemeChanged`; the consumer is
   * expected to re-render the provider with the new value.
   */
  setColorScheme: (colorScheme: OsdkColorScheme) => void;
}
