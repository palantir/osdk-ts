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

import { OsdkThemeProvider } from "@osdk/react-components/experimental/theme";
import type { Decorator } from "@storybook/react-vite";
import React, { useMemo } from "react";
import { resolveBrandTheme } from "./brandThemeCssVariables.js";
import {
  BRAND_THEME_PRESET_GLOBAL_KEY,
  parseBrandThemePresetGlobal,
  resolveBrandThemePreset,
} from "./brandThemeState.js";

interface BrandThemeDecoratorProps {
  Story: React.ComponentType;
  globals: Record<string, unknown>;
}

export const BrandThemeDecorator = React.memo(function BrandThemeDecoratorFn(
  { Story, globals }: BrandThemeDecoratorProps,
) {
  const selectedPresetGlobal = globals[BRAND_THEME_PRESET_GLOBAL_KEY];
  const selectedPreset = useMemo(
    () => parseBrandThemePresetGlobal(selectedPresetGlobal),
    [selectedPresetGlobal],
  );
  const themePreset = useMemo(
    () => resolveBrandThemePreset(selectedPreset),
    [selectedPreset],
  );
  const theme = useMemo(
    () => resolveBrandTheme(selectedPreset),
    [selectedPreset],
  );

  return (
    <OsdkThemeProvider colorScheme={themePreset.colorMode} theme={theme}>
      <Story />
    </OsdkThemeProvider>
  );
});

export const withBrandThemeDecorator: Decorator = (Story, context) => (
  <BrandThemeDecorator Story={Story} globals={context.globals} />
);
