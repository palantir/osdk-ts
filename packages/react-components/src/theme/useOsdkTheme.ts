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

import { useContext } from "react";

import { OsdkThemeContext } from "./OsdkThemeContext.js";
import type { OsdkThemeContextValue } from "./types.js";

/**
 * Read the active OSDK theme and update it imperatively.
 *
 * Must be called from a descendant of `<OsdkThemeProvider>`; throws otherwise.
 *
 * @returns
 * - `theme` — the requested mode (`"light" | "dark" | "system"`).
 * - `resolvedTheme` — the concrete theme on the DOM (`"light" | "dark"`).
 *   When `theme === "system"`, this tracks `prefers-color-scheme` and
 *   updates as the OS preference changes.
 * - `setTheme(next)` — update the mode. In controlled mode this only
 *   invokes the provider's `onThemeChanged`; the consumer must re-render
 *   the provider with the new value.
 */
export function useOsdkTheme(): OsdkThemeContextValue {
  const ctx = useContext(OsdkThemeContext);
  if (ctx == null) {
    throw new Error("useOsdkTheme must be used within an <OsdkThemeProvider>.");
  }
  return ctx;
}
