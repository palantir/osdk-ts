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

export interface TokenAssignment {
  role: string;
  /** Legacy field, always -1. Kept for state compatibility. */
  colorIndex: number;
  /** Custom value (hex for colors, string for other tokens) */
  customValue?: string;
}

export type ThemeColorMode = "light" | "dark";

export interface BrandThemeGlobals {
  active: boolean;
  colorMode: ThemeColorMode;
  selectedPresetId: string;
  assignments: TokenAssignment[];
}

export type ColorTokenRole =
  | "background"
  | "surface"
  | "surface-hover"
  | "surface-active"
  | "text"
  | "text-muted"
  | "text-subtle"
  | "primary"
  | "primary-hover"
  | "primary-active"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "icon-color"
  | "border"
  | "input-bg"
  | "overlay"
  | "danger"
  | "success"
  | "warning";

export type TypographyTokenRole =
  | "font-family"
  | "font-family-mono"
  | "font-size-xsmall"
  | "font-size-small"
  | "font-size-medium"
  | "font-size-large"
  | "font-weight-default"
  | "font-weight-bold"
  | "line-height";

export type SurfaceTokenRole =
  | "border-radius"
  | "button-border-radius"
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
  /** Semantic key used in DESIGN.md YAML frontmatter (e.g. "canvas", "ink", "primary") */
  designMdKey: string;
  /** DESIGN.md section this token belongs to (e.g. "colors", "typography", "rounded") */
  designMdSection: string;
}
