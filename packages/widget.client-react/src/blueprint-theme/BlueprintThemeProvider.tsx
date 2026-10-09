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
import React, { useLayoutEffect, useMemo } from "react";

import { customThemeToBlueprintTokens } from "./customThemeToBlueprintTokens.js";

// This provider and token mapping will be imported from a shared library with Workshop.
export function BlueprintThemeProvider({
  children,
  theme,
}: React.PropsWithChildren<{ theme: HostMessage.ThemeV1 | undefined }>) {
  const tokens = useMemo(
    () => (theme == null ? undefined : customThemeToBlueprintTokens(theme)),
    [theme],
  );

  useLayoutEffect(() => {
    if (tokens == null) {
      return;
    }
    // The iframe is dedicated to this widget; root tokens also reach Blueprint portals.
    const style = document.documentElement.style;
    const previous = Object.entries(tokens).map(([name, value]) => {
      const previousValue = style.getPropertyValue(name);
      const priority = style.getPropertyPriority(name);
      style.setProperty(name, value);
      return { name, previousValue, priority };
    });
    return () => {
      for (const { name, previousValue, priority } of previous) {
        if (previousValue === "") {
          style.removeProperty(name);
        } else {
          style.setProperty(name, previousValue, priority);
        }
      }
    };
  }, [tokens]);

  return <>{children}</>;
}
