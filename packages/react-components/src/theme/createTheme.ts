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
  SEMANTIC_TOKEN_MAP,
  type SemanticTokenRole,
} from "./semanticTokenMap.js";
import type {
  OsdkTheme,
  OsdkThemeOverride,
  OsdkThemeTokenValue,
} from "./types.js";

const COLOR_TOKEN_ROLES = {
  background: "background",
  border: "border",
  danger: "danger",
  icon: "icon-color",
  primary: "primary",
  primaryForeground: "primary-foreground",
  secondary: "secondary",
  secondaryForeground: "secondary-foreground",
  success: "success",
  surface: "surface",
  text: "text",
  textMuted: "text-muted",
  warning: "warning",
} as const satisfies Record<
  keyof NonNullable<OsdkThemeOverride["colors"]>,
  SemanticTokenRole
>;

const TYPOGRAPHY_TOKEN_ROLES = {
  bodyLarge: "font-size-large",
  bodyMedium: "font-size-medium",
  bodySmall: "font-size-small",
  fontFamily: "font-family",
  fontWeightBold: "font-weight-bold",
  fontWeightDefault: "font-weight-default",
  lineHeight: "line-height",
} as const satisfies Record<
  keyof NonNullable<OsdkThemeOverride["typography"]>,
  SemanticTokenRole
>;

const ROOT_TOKEN_ROLES = {
  borderWidth: "border-width",
  focusOffset: "focus-offset",
  focusWidth: "focus-width",
  radius: "border-radius",
  shadow: "shadow",
  spacing: "spacing",
  transitionDuration: "transition-duration",
} as const satisfies Record<
  keyof Omit<OsdkThemeOverride, "colors" | "cssVariables" | "typography">,
  SemanticTokenRole
>;

/**
 * Converts semantic OSDK theme overrides into the concrete CSS variables used
 * by OSDK and Blueprint components.
 */
export function createTheme(themeOverride: OsdkThemeOverride): OsdkTheme {
  const cssVariables = new Map<`--${string}`, string>();

  applyThemeSection(cssVariables, themeOverride.colors, COLOR_TOKEN_ROLES);
  applyThemeSection(
    cssVariables,
    themeOverride.typography,
    TYPOGRAPHY_TOKEN_ROLES,
  );
  applyThemeSection(cssVariables, {
    borderWidth: themeOverride.borderWidth,
    focusOffset: themeOverride.focusOffset,
    focusWidth: themeOverride.focusWidth,
    radius: themeOverride.radius,
    shadow: themeOverride.shadow,
    spacing: themeOverride.spacing,
    transitionDuration: themeOverride.transitionDuration,
  }, ROOT_TOKEN_ROLES);

  for (
    const [cssVariableName, cssVariableValue] of Object.entries(
      themeOverride.cssVariables ?? {},
    )
  ) {
    if (!isCssVariableName(cssVariableName)) {
      continue;
    }

    const formattedValue = formatTokenValue({
      role: "css-variable",
      value: cssVariableValue,
    });
    if (formattedValue == null) {
      continue;
    }

    cssVariables.set(cssVariableName, formattedValue);
  }

  return { cssVariables };
}

function applyThemeSection<TThemeSection extends object>(
  cssVariables: Map<`--${string}`, string>,
  themeSection: TThemeSection | undefined,
  tokenRoles: Record<keyof TThemeSection, SemanticTokenRole>,
): void {
  if (themeSection == null) {
    return;
  }

  for (
    const [themeKey, tokenValue] of Object.entries(themeSection) as Array<
      [keyof TThemeSection, OsdkThemeTokenValue | undefined]
    >
  ) {
    const tokenRole = tokenRoles[themeKey];
    if (tokenRole == null) {
      continue;
    }

    const formattedValue = formatTokenValue({
      role: tokenRole,
      value: tokenValue,
    });
    if (formattedValue == null) {
      continue;
    }

    for (const cssVariableName of SEMANTIC_TOKEN_MAP[tokenRole]) {
      cssVariables.set(cssVariableName, formattedValue);
    }
  }
}

export function formatTokenValue(
  { role, value }: {
    role: SemanticTokenRole | "css-variable";
    value: OsdkThemeTokenValue | undefined;
  },
): string | undefined {
  if (value == null) {
    return undefined;
  }

  const stringValue = String(value);
  if (stringValue.trim() === "" || stringValue === "initial") {
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
    && /^\d+(\.\d+)?$/.test(stringValue)
  ) {
    return `${stringValue}px`;
  }

  if (
    role === "transition-duration" && /^\d+(\.\d+)?$/.test(stringValue)
  ) {
    return `${stringValue}ms`;
  }

  return stringValue;
}

function isCssVariableName(name: string): name is `--${string}` {
  return name.startsWith("--");
}
