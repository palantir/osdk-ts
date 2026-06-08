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
export type OsdkThemeMode = "light" | "dark" | "system";

/**
 * The concrete theme actually applied to the DOM. `OsdkThemeMode` of
 * `"system"` resolves to either `"light"` or `"dark"` depending on the
 * current value of `prefers-color-scheme`.
 */
export type ResolvedOsdkTheme = "light" | "dark";

export interface OsdkThemeContextValue {
  /** The requested mode, including `"system"`. */
  theme: OsdkThemeMode;
  /** The concrete theme currently applied to the DOM. */
  resolvedTheme: ResolvedOsdkTheme;
  /**
   * Update the requested mode. In controlled mode (`theme` prop on the
   * provider) this only invokes `onThemeChanged`; the consumer is expected
   * to re-render the provider with the new value.
   */
  setTheme: (theme: OsdkThemeMode) => void;
}
