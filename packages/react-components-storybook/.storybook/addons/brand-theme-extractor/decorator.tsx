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

import { Classes } from "@blueprintjs/core";
import type { Decorator } from "@storybook/react-vite";
import { useEffect, useMemo } from "react";

import { GLOBALS_KEY } from "./constants.js";
import { parseBrandThemeState } from "./state.js";

export const BrandThemeDecorator: Decorator = (Story, context) => {
  const rawState = context.globals[GLOBALS_KEY];
  const brandTheme = useMemo(() => parseBrandThemeState(rawState), [rawState]);

  useEffect(() => {
    const root = document.documentElement;
    const customTheme = brandTheme.selectedPresetId.startsWith("workshop-")
      ? undefined
      : brandTheme.selectedPresetId;

    if (customTheme) {
      root.dataset.theme = customTheme;
    } else {
      delete root.dataset.theme;
    }

    if (brandTheme.colorMode === "dark") {
      root.setAttribute("data-bp-color-scheme", "dark");
      root.classList.add(Classes.DARK);
    } else {
      root.removeAttribute("data-bp-color-scheme");
      root.classList.remove(Classes.DARK);
    }

    return () => {
      delete root.dataset.theme;
      root.removeAttribute("data-bp-color-scheme");
      root.classList.remove(Classes.DARK);
    };
  }, [brandTheme.colorMode, brandTheme.selectedPresetId]);

  return <Story />;
};
