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

import {
  type BrandThemePresetSelection,
  resolveBrandThemePreset,
} from "./brandThemeState.js";
import { SEMANTIC_TOKEN_MAP } from "./semanticTokenMap.js";

export function resolveThemeCssVariables(
  selection: BrandThemePresetSelection,
): Map<string, string> {
  const preset = resolveBrandThemePreset(selection);
  const variables = new Map<string, string>();

  for (const assignment of preset.assignments) {
    const cssPropertyNames = SEMANTIC_TOKEN_MAP[assignment.role];
    const value = formatTokenValue({
      role: assignment.role,
      value: assignment.value,
    });
    if (value == null) {
      continue;
    }

    for (const cssPropertyName of cssPropertyNames) {
      variables.set(cssPropertyName, value);
    }
  }

  for (const cssVariable of preset.cssVariables ?? []) {
    if (cssVariable.value.trim() === "" || cssVariable.value === "initial") {
      continue;
    }

    variables.set(cssVariable.name, cssVariable.value);
  }

  return variables;
}

function formatTokenValue(
  { role, value }: { role: string; value: string },
): string | undefined {
  if (value.trim() === "" || value === "initial") {
    return undefined;
  }

  if (
    (role === "font-size-small"
      || role === "font-size-medium"
      || role === "font-size-large"
      || role === "border-radius"
      || role === "spacing"
      || role === "border-width"
      || role === "focus-width"
      || role === "focus-offset")
    && /^\d+(\.\d+)?$/.test(value)
  ) {
    return `${value}px`;
  }

  if (role === "transition-duration" && /^\d+(\.\d+)?$/.test(value)) {
    return `${value}ms`;
  }

  return value;
}
