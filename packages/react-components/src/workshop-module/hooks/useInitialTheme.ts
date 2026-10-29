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

import type { OsdkThemeMode, ResolvedOsdkTheme } from "../../theme/types.js";
import { getSystemTheme } from "../../theme/useSystemTheme.js";

/** Captures the initial theme, resolving system mode after hydration. */
export function useInitialTheme(defaultTheme?: OsdkThemeMode): {
  theme: ResolvedOsdkTheme | undefined;
  isLoading: boolean;
} {
  const [theme, setTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    if (theme === "system") {
      setTheme(getSystemTheme());
    }
  }, [theme]);

  return {
    theme: theme === "system" ? undefined : theme,
    isLoading: theme === "system",
  };
}
