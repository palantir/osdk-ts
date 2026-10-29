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

import type { HostMessage } from "@osdk/widget.client";
import * as React from "react";

import { customThemeToBlueprintTokens } from "./customThemeToBlueprintTokens.js";

export const BlueprintThemeContext = React.createContext<
  React.CSSProperties | undefined
>(undefined);

// Move this provider and its theme translation to a shared package for custom widgets and OSDK apps.
export function BlueprintThemeProvider({
  children,
  enabled = true,
  theme,
}: React.PropsWithChildren<{
  enabled?: boolean;
  theme: HostMessage.ThemeV1 | undefined;
}>) {
  const tokens = React.useMemo(
    () =>
      enabled && theme != null
        ? customThemeToBlueprintTokens(theme)
        : undefined,
    [enabled, theme],
  );

  return (
    <BlueprintThemeContext.Provider value={tokens}>
      {children}
    </BlueprintThemeContext.Provider>
  );
}
