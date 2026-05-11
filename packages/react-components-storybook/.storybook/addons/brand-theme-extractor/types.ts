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

export interface ExtractedColor {
  rgb: [number, number, number];
  hex: string;
  luminance: number;
  chroma: number;
  count: number;
}

export interface TokenAssignment {
  role: string;
  /** Index into the palette array, or -1 for a custom value */
  colorIndex: number;
  /** Custom value (hex for colors, string for other tokens) */
  customValue?: string;
}

export type ThemeColorMode = "light" | "dark";

export interface BrandThemeGlobals {
  active: boolean;
  colorMode: ThemeColorMode;
  selectedPresetId: string;
  palette: ExtractedColor[];
  assignments: TokenAssignment[];
}

export type ColorTokenRole =
  | "background"
  | "surface"
  | "text"
  | "text-muted"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "icon-color"
  | "border"
  | "danger"
  | "success";

export type TypographyTokenRole =
  | "font-family"
  | "font-size-small"
  | "font-size-medium"
  | "font-size-large"
  | "font-weight-default"
  | "font-weight-bold"
  | "line-height";

export type SurfaceTokenRole =
  | "border-radius"
  | "spacing"
  | "border-width"
  | "shadow";

export type EmphasisTokenRole =
  | "focus-width"
  | "focus-offset"
  | "transition-duration";

export type TokenRole =
  | ColorTokenRole
  | TypographyTokenRole
  | SurfaceTokenRole
  | EmphasisTokenRole;

export type TokenCategory = "color" | "typography" | "surface" | "emphasis";

export interface TokenRoleDefinition {
  role: TokenRole;
  label: string;
  category: TokenCategory;
  cssProperties: string[];
  inputType: "color" | "text" | "px" | "number" | "ms" | "shadow" | "font";
  defaultValue?: string;
}
