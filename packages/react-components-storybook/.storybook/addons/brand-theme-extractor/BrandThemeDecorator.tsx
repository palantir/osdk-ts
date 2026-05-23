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

import type { Decorator } from "@storybook/react-vite";
import React, { useLayoutEffect, useMemo } from "react";
import { resolveThemeCssVariables } from "./brandThemeCssVariables.js";
import {
  BRAND_THEME_PRESET_GLOBAL_KEY,
  parseBrandThemePresetGlobal,
} from "./brandThemeState.js";

interface BrandThemeDecoratorProps {
  Story: React.ComponentType;
  globals: Record<string, unknown>;
}

interface PreviousCssVariableValue {
  value: string;
  priority: string;
}

export const BrandThemeDecorator = React.memo(function BrandThemeDecoratorFn(
  { Story, globals }: BrandThemeDecoratorProps,
) {
  const selectedPresetGlobal = globals[BRAND_THEME_PRESET_GLOBAL_KEY];
  const cssVariables = useMemo(
    () =>
      resolveThemeCssVariables(
        parseBrandThemePresetGlobal(selectedPresetGlobal),
      ),
    [selectedPresetGlobal],
  );

  useLayoutEffect(function applyBrandThemeCssVariables() {
    const rootStyle = document.documentElement.style;
    const previousValues = new Map<string, PreviousCssVariableValue>();

    for (const [cssPropertyName, cssPropertyValue] of cssVariables) {
      previousValues.set(
        cssPropertyName,
        {
          priority: rootStyle.getPropertyPriority(cssPropertyName),
          value: rootStyle.getPropertyValue(cssPropertyName),
        },
      );
      rootStyle.setProperty(cssPropertyName, cssPropertyValue);
    }

    return () => {
      for (const [cssPropertyName, previous] of previousValues) {
        if (previous.value === "") {
          rootStyle.removeProperty(cssPropertyName);
        } else {
          rootStyle.setProperty(
            cssPropertyName,
            previous.value,
            previous.priority,
          );
        }
      }
    };
  }, [cssVariables]);

  return <Story />;
});

export const withBrandThemeDecorator: Decorator = (Story, context) => (
  <BrandThemeDecorator Story={Story} globals={context.globals} />
);
