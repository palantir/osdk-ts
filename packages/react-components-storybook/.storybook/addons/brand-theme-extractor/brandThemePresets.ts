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

import type { SemanticTokenRole } from "./semanticTokenMap.js";

export type BrandThemeColorMode = "light" | "dark";

export interface BrandThemePreset {
  id: string;
  label: string;
  description: string;
  colorMode: BrandThemeColorMode;
  swatches: readonly [string, string, string];
  assignments: readonly BrandThemeTokenAssignment[];
  cssVariables?: readonly BrandThemeCssVariable[];
}

export interface BrandThemeTokenAssignment {
  role: SemanticTokenRole;
  value: string;
}

export interface BrandThemeCssVariable {
  name: `--${string}`;
  value: string;
}

interface TokenAssignmentParams {
  role: SemanticTokenRole;
  value: string;
}

interface CssVariableParams {
  name: `--${string}`;
  value: string;
}

function tokenAssignment(
  { role, value }: TokenAssignmentParams,
): BrandThemeTokenAssignment {
  return { role, value };
}

function cssVariable(
  { name, value }: CssVariableParams,
): BrandThemeCssVariable {
  return { name, value };
}

function baseDefaults(overrides?: {
  radius?: string;
  spacing?: string;
  shadow?: string;
}): BrandThemeTokenAssignment[] {
  return [
    tokenAssignment({
      role: "font-family",
      value: "Inter, system-ui, -apple-system, sans-serif",
    }),
    tokenAssignment({ role: "font-size-small", value: "12" }),
    tokenAssignment({ role: "font-size-medium", value: "14" }),
    tokenAssignment({ role: "font-size-large", value: "16" }),
    tokenAssignment({ role: "font-weight-default", value: "400" }),
    tokenAssignment({ role: "font-weight-bold", value: "600" }),
    tokenAssignment({ role: "line-height", value: "1.5" }),
    tokenAssignment({ role: "border-radius", value: overrides?.radius ?? "4" }),
    tokenAssignment({ role: "spacing", value: overrides?.spacing ?? "4" }),
    tokenAssignment({ role: "border-width", value: "1" }),
    tokenAssignment({
      role: "shadow",
      value: overrides?.shadow
        ?? "0 1px 3px oklch(0 0 0 / 0.12), 0 1px 2px oklch(0 0 0 / 0.08)",
    }),
    tokenAssignment({ role: "focus-width", value: "2" }),
    tokenAssignment({ role: "focus-offset", value: "2" }),
    tokenAssignment({ role: "transition-duration", value: "150" }),
  ];
}

export const THEME_PRESETS = [
  {
    id: "workshop-light",
    label: "Workshop Light",
    description: "Default Blueprint light theme used by Workshop-style apps",
    colorMode: "light",
    swatches: ["#ffffff", "#2d72d2", "#1c2127"],
    assignments: [
      tokenAssignment({ role: "background", value: "#ffffff" }),
      tokenAssignment({ role: "surface", value: "#f6f7f9" }),
      tokenAssignment({ role: "text", value: "#1c2127" }),
      tokenAssignment({ role: "text-muted", value: "#5f6b7c" }),
      tokenAssignment({ role: "primary", value: "#2d72d2" }),
      tokenAssignment({ role: "primary-foreground", value: "#ffffff" }),
      tokenAssignment({ role: "secondary", value: "#f6f7f9" }),
      tokenAssignment({ role: "secondary-foreground", value: "#1c2127" }),
      tokenAssignment({ role: "icon-color", value: "#5f6b7c" }),
      tokenAssignment({ role: "border", value: "#dce0e5" }),
      tokenAssignment({ role: "danger", value: "#cd4246" }),
      tokenAssignment({ role: "success", value: "#238551" }),
      tokenAssignment({ role: "warning", value: "#c87619" }),
      ...baseDefaults({ shadow: "inset 0 1px 1px oklch(0 0 0 / 0.15)" }),
    ],
  },
  {
    id: "workshop-dark",
    label: "Workshop Dark",
    description: "Default Blueprint dark theme used by Workshop-style apps",
    colorMode: "dark",
    swatches: ["#111418", "#2d72d2", "#a5aab3"],
    assignments: [
      tokenAssignment({ role: "background", value: "#111418" }),
      tokenAssignment({ role: "surface", value: "#1c2127" }),
      tokenAssignment({ role: "text", value: "#a5aab3" }),
      tokenAssignment({ role: "text-muted", value: "#8f99a8" }),
      tokenAssignment({ role: "primary", value: "#2d72d2" }),
      tokenAssignment({ role: "primary-foreground", value: "#ffffff" }),
      tokenAssignment({ role: "secondary", value: "#252a31" }),
      tokenAssignment({ role: "secondary-foreground", value: "#f6f7f9" }),
      tokenAssignment({ role: "icon-color", value: "#8f99a8" }),
      tokenAssignment({ role: "border", value: "#ffffff33" }),
      tokenAssignment({ role: "danger", value: "#cd4246" }),
      tokenAssignment({ role: "success", value: "#238551" }),
      tokenAssignment({ role: "warning", value: "#c87619" }),
      ...baseDefaults({
        shadow:
          "inset 0 0 0 1px oklch(1 0 0 / 0.2), 0 4px 6px -4px oklch(0 0 0 / 0.5), 0 10px 30px -5px oklch(0 0 0 / 0.5)",
      }),
    ],
  },
  {
    id: "modern",
    label: "Modern",
    description:
      "Light people-app inspired theme previously provided by Storybook data-theme CSS",
    colorMode: "light",
    swatches: ["#ffffff", "#2d72d2", "#1c2127"],
    assignments: [
      tokenAssignment({ role: "background", value: "#ffffff" }),
      tokenAssignment({ role: "surface", value: "#f6f7f9" }),
      tokenAssignment({ role: "text", value: "#1c2127" }),
      tokenAssignment({ role: "text-muted", value: "#5f6b7c" }),
      tokenAssignment({ role: "primary", value: "#2d72d2" }),
      tokenAssignment({ role: "primary-foreground", value: "#ffffff" }),
      tokenAssignment({ role: "secondary", value: "#f6f7f9" }),
      tokenAssignment({ role: "secondary-foreground", value: "#1c2127" }),
      tokenAssignment({ role: "icon-color", value: "#5f6b7c" }),
      tokenAssignment({ role: "border", value: "#dce0e5" }),
      tokenAssignment({ role: "danger", value: "#cd4246" }),
      tokenAssignment({ role: "success", value: "#238551" }),
      tokenAssignment({ role: "warning", value: "#c87619" }),
      ...baseDefaults(),
    ],
    cssVariables: [
      cssVariable({
        name: "--bp-palette-black",
        value: "oklch(0.2827 0.019 238.86)",
      }),
      cssVariable({ name: "--bp-palette-white", value: "oklch(1 0 89.88)" }),
      cssVariable({
        name: "--bp-palette-dark-gray-1",
        value: "oklch(0.2519 0.0152 244.29)",
      }),
      cssVariable({
        name: "--bp-palette-dark-gray-2",
        value: "oklch(0.312 0.0154 240.46)",
      }),
      cssVariable({
        name: "--bp-palette-dark-gray-3",
        value: "oklch(0.404 0.032 243.49)",
      }),
      cssVariable({
        name: "--bp-palette-dark-gray-4",
        value: "oklch(0.5926 0.0263 240.38)",
      }),
      cssVariable({
        name: "--bp-palette-dark-gray-5",
        value: "oklch(0.6109 0.0257 244.46)",
      }),
      cssVariable({
        name: "--bp-palette-gray-1",
        value: "oklch(0.6792 0.0229 243.66)",
      }),
      cssVariable({
        name: "--bp-palette-gray-2",
        value: "oklch(0.6792 0.0229 243.66)",
      }),
      cssVariable({
        name: "--bp-palette-gray-3",
        value: "oklch(0.8562 0.0148 244.74)",
      }),
      cssVariable({
        name: "--bp-palette-gray-4",
        value: "oklch(0.8562 0.0148 244.74)",
      }),
      cssVariable({
        name: "--bp-palette-gray-5",
        value: "oklch(0.9178 0.0101 227.89)",
      }),
      cssVariable({
        name: "--bp-palette-gray-100",
        value: "oklch(0.93 0.008 240)",
      }),
      cssVariable({
        name: "--bp-palette-gray-200",
        value: "oklch(0.88 0.012 240)",
      }),
      cssVariable({
        name: "--bp-palette-light-gray-1",
        value: "oklch(0.9178 0.0101 227.89)",
      }),
      cssVariable({
        name: "--bp-palette-light-gray-2",
        value: "oklch(0.9587 0.0051 228.82)",
      }),
      cssVariable({
        name: "--bp-palette-light-gray-3",
        value: "oklch(0.9587 0.0051 228.82)",
      }),
      cssVariable({
        name: "--bp-palette-light-gray-4",
        value: "oklch(0.9809 0.0025 228.78)",
      }),
      cssVariable({
        name: "--bp-palette-light-gray-5",
        value: "oklch(0.9809 0.0025 228.78)",
      }),
      cssVariable({
        name: "--bp-palette-blue-1",
        value: "oklch(0.3466 0.153 261.33)",
      }),
      cssVariable({
        name: "--bp-palette-blue-2",
        value: "oklch(0.4996 0.1637 254.86)",
      }),
      cssVariable({
        name: "--bp-palette-blue-3",
        value: "oklch(0.51 0.1695 254.68)",
      }),
      cssVariable({
        name: "--bp-palette-blue-4",
        value: "oklch(0.7307 0.1063 236.4)",
      }),
      cssVariable({
        name: "--bp-palette-blue-5",
        value: "oklch(0.917 0.0248 254.68)",
      }),
      cssVariable({
        name: "--bp-palette-green-1",
        value: "oklch(0.3681 0.0965 152.16)",
      }),
      cssVariable({
        name: "--bp-palette-green-2",
        value: "oklch(0.4717 0.1263 151.24)",
      }),
      cssVariable({
        name: "--bp-palette-green-3",
        value: "oklch(0.4967 0.1412 150.75)",
      }),
      cssVariable({
        name: "--bp-palette-green-4",
        value: "oklch(0.6507 0.1428 154.17)",
      }),
      cssVariable({
        name: "--bp-palette-green-5",
        value: "oklch(0.9272 0.0284 150.75)",
      }),
      cssVariable({
        name: "--bp-palette-orange-1",
        value: "oklch(0.4409 0.0946 62.22)",
      }),
      cssVariable({
        name: "--bp-palette-orange-2",
        value: "oklch(0.5558 0.1209 62.16)",
      }),
      cssVariable({
        name: "--bp-palette-orange-3",
        value: "oklch(0.599 0.1403 61.84)",
      }),
      cssVariable({
        name: "--bp-palette-orange-4",
        value: "oklch(0.753 0.1439 65.59)",
      }),
      cssVariable({
        name: "--bp-palette-orange-5",
        value: "oklch(0.9056 0.0455 61.84)",
      }),
      cssVariable({
        name: "--bp-palette-red-1",
        value: "oklch(0.4614 0.1643 29.2)",
      }),
      cssVariable({
        name: "--bp-palette-red-2",
        value: "oklch(0.5378 0.1973 29.19)",
      }),
      cssVariable({
        name: "--bp-palette-red-3",
        value: "oklch(0.5513 0.2089 29.6)",
      }),
      cssVariable({
        name: "--bp-palette-red-4",
        value: "oklch(0.6553 0.1748 27.42)",
      }),
      cssVariable({
        name: "--bp-palette-red-5",
        value: "oklch(0.8913 0.0408 29.6)",
      }),
      cssVariable({
        name: "--osdk-checkbox-border",
        value:
          "var(--bp-surface-border-width) solid var(--bp-surface-border-color-strong)",
      }),
      cssVariable({
        name: "--osdk-checkbox-bg-hover",
        value: "var(--bp-palette-gray-5)",
      }),
      cssVariable({
        name: "--osdk-checkbox-bg-active",
        value: "var(--bp-palette-gray-4)",
      }),
      cssVariable({
        name: "--osdk-checkbox-bg-checked",
        value: "var(--bp-palette-white)",
      }),
      cssVariable({
        name: "--osdk-checkbox-bg-checked-hover",
        value: "var(--bp-palette-light-gray-5)",
      }),
      cssVariable({
        name: "--osdk-checkbox-bg-checked-active",
        value: "var(--osdk-checkbox-bg-active)",
      }),
      cssVariable({
        name: "--osdk-checkbox-checked-foreground",
        value: "var(--bp-palette-dark-gray-1)",
      }),
      cssVariable({
        name: "--osdk-table-row-bg-alternate",
        value: "oklch(from var(--bp-palette-light-gray-5) l c h / 0.5)",
      }),
      cssVariable({
        name: "--osdk-table-row-bg-hover",
        value: "var(--bp-surface-background-color-default-hover)",
      }),
      cssVariable({
        name: "--osdk-table-row-border-color-hover",
        value: "var(--osdk-table-border-color)",
      }),
      cssVariable({
        name: "--osdk-table-row-bg-active",
        value: "var(--bp-palette-blue-5)",
      }),
    ],
  },
  {
    id: "devcon",
    label: "DevCon",
    description: "Dark theme with green accents for DevCon demos",
    colorMode: "dark",
    swatches: ["#0a0a0a", "#16a34a", "#86efac"],
    assignments: [
      tokenAssignment({ role: "background", value: "#0a0a0a" }),
      tokenAssignment({ role: "surface", value: "#111111" }),
      tokenAssignment({ role: "text", value: "#86efac" }),
      tokenAssignment({ role: "text-muted", value: "#16a34a" }),
      tokenAssignment({ role: "primary", value: "#16a34a" }),
      tokenAssignment({ role: "primary-foreground", value: "#0a0a0a" }),
      tokenAssignment({ role: "secondary", value: "#1a1a1a" }),
      tokenAssignment({ role: "secondary-foreground", value: "#86efac" }),
      tokenAssignment({ role: "icon-color", value: "#22c55e" }),
      tokenAssignment({ role: "border", value: "#15803d" }),
      tokenAssignment({ role: "danger", value: "#ef4444" }),
      tokenAssignment({ role: "success", value: "#4ade80" }),
      tokenAssignment({ role: "warning", value: "#f59e0b" }),
      ...baseDefaults({
        shadow: "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)",
      }),
    ],
    cssVariables: [
      cssVariable({ name: "--osdk-intent-default-foreground", value: "black" }),
      cssVariable({ name: "--osdk-intent-default-hover", value: "#2a2a2a" }),
      cssVariable({ name: "--osdk-intent-primary-hover", value: "#22c55e" }),
      cssVariable({ name: "--osdk-intent-primary-active", value: "#4ade80" }),
      cssVariable({
        name: "--osdk-checkbox-border",
        value: "1px solid #16a34a",
      }),
      cssVariable({ name: "--osdk-checkbox-bg", value: "transparent" }),
      cssVariable({
        name: "--osdk-checkbox-bg-hover",
        value: "rgba(34, 197, 94, 0.1)",
      }),
      cssVariable({
        name: "--osdk-checkbox-bg-active",
        value: "rgba(34, 197, 94, 0.2)",
      }),
      cssVariable({
        name: "--osdk-checkbox-bg-checked-hover",
        value: "#22c55e",
      }),
      cssVariable({
        name: "--osdk-checkbox-bg-checked-active",
        value: "#4ade80",
      }),
      cssVariable({ name: "--osdk-table-header-bg", value: "#14532d" }),
      cssVariable({
        name: "--osdk-table-row-bg-active",
        value: "rgba(34, 197, 94, 0.2)",
      }),
      cssVariable({
        name: "--osdk-table-row-border-color-hover",
        value: "#22c55e",
      }),
      cssVariable({
        name: "--osdk-table-row-border-color-active",
        value: "#4ade80",
      }),
      cssVariable({
        name: "--osdk-table-pinned-column-border",
        value: "1px solid #22c55e",
      }),
      cssVariable({
        name: "--osdk-table-skeleton-color-from",
        value: "rgba(34, 197, 94, 0.1)",
      }),
      cssVariable({
        name: "--osdk-table-skeleton-color-to",
        value: "rgba(34, 197, 94, 0.2)",
      }),
      cssVariable({
        name: "--osdk-background-backdrop",
        value: "color-mix(in srgb, var(--osdk-palette-white) 50%, transparent)",
      }),
      cssVariable({
        name: "--osdk-table-header-menu-bg",
        value: "transparent",
      }),
      cssVariable({
        name: "--osdk-table-header-menu-bg-hover",
        value: "rgba(34, 197, 94, 0.15)",
      }),
      cssVariable({
        name: "--osdk-table-header-menu-bg-active",
        value: "rgba(34, 197, 94, 0.25)",
      }),
      cssVariable({ name: "--osdk-table-header-menu-color", value: "#4ade80" }),
    ],
  },
  {
    id: "midnight-blue",
    label: "Midnight Blue",
    description: "Dark theme with blue accents",
    colorMode: "dark",
    swatches: ["#0f172a", "#2563eb", "#e2e8f0"],
    assignments: [
      tokenAssignment({ role: "background", value: "#0f172a" }),
      tokenAssignment({ role: "surface", value: "#1e293b" }),
      tokenAssignment({ role: "text", value: "#e2e8f0" }),
      tokenAssignment({ role: "text-muted", value: "#94a3b8" }),
      tokenAssignment({ role: "primary", value: "#2563eb" }),
      tokenAssignment({ role: "primary-foreground", value: "#ffffff" }),
      tokenAssignment({ role: "secondary", value: "#334155" }),
      tokenAssignment({ role: "secondary-foreground", value: "#e2e8f0" }),
      tokenAssignment({ role: "icon-color", value: "#8b9bb5" }),
      tokenAssignment({ role: "border", value: "#334155" }),
      tokenAssignment({ role: "danger", value: "#ef4444" }),
      tokenAssignment({ role: "success", value: "#22c55e" }),
      tokenAssignment({ role: "warning", value: "#f59e0b" }),
      ...baseDefaults({
        radius: "6",
        shadow: "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)",
      }),
    ],
  },
  {
    id: "warm-sand",
    label: "Warm Sand",
    description: "Warm neutral light theme",
    colorMode: "light",
    swatches: ["#faf8f5", "#c2410c", "#44403c"],
    assignments: [
      tokenAssignment({ role: "background", value: "#faf8f5" }),
      tokenAssignment({ role: "surface", value: "#f5f0eb" }),
      tokenAssignment({ role: "text", value: "#1c1917" }),
      tokenAssignment({ role: "text-muted", value: "#78716c" }),
      tokenAssignment({ role: "primary", value: "#c2410c" }),
      tokenAssignment({ role: "primary-foreground", value: "#ffffff" }),
      tokenAssignment({ role: "secondary", value: "#e7e5e4" }),
      tokenAssignment({ role: "secondary-foreground", value: "#44403c" }),
      tokenAssignment({ role: "icon-color", value: "#78716c" }),
      tokenAssignment({ role: "border", value: "#d6d3d1" }),
      tokenAssignment({ role: "danger", value: "#dc2626" }),
      tokenAssignment({ role: "success", value: "#15803d" }),
      tokenAssignment({ role: "warning", value: "#d97706" }),
      ...baseDefaults({ radius: "8" }),
    ],
  },
  {
    id: "royal-purple",
    label: "Royal Purple",
    description: "Dark theme with purple accents",
    colorMode: "dark",
    swatches: ["#1a1025", "#a855f7", "#e9d5ff"],
    assignments: [
      tokenAssignment({ role: "background", value: "#1a1025" }),
      tokenAssignment({ role: "surface", value: "#2d1b4e" }),
      tokenAssignment({ role: "text", value: "#e9d5ff" }),
      tokenAssignment({ role: "text-muted", value: "#a78bfa" }),
      tokenAssignment({ role: "primary", value: "#9333ea" }),
      tokenAssignment({ role: "primary-foreground", value: "#ffffff" }),
      tokenAssignment({ role: "secondary", value: "#3b2563" }),
      tokenAssignment({ role: "secondary-foreground", value: "#e9d5ff" }),
      tokenAssignment({ role: "icon-color", value: "#c084fc" }),
      tokenAssignment({ role: "border", value: "#4c1d95" }),
      tokenAssignment({ role: "danger", value: "#f43f5e" }),
      tokenAssignment({ role: "success", value: "#34d399" }),
      tokenAssignment({ role: "warning", value: "#f59e0b" }),
      ...baseDefaults({
        radius: "6",
        shadow: "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)",
      }),
    ],
  },
] as const satisfies readonly BrandThemePreset[];

export type BrandThemePresetId = (typeof THEME_PRESETS)[number]["id"];
