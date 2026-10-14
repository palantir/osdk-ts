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

import type { ThemeColorMode, TokenAssignment } from "./types.js";

export type ThemePresetCategory = "built-in" | "custom";

export interface ThemePreset {
  id: string;
  label: string;
  description: string;
  /** The color mode this preset targets. Defaults to "light". */
  colorMode?: ThemeColorMode;
  /** Grouping in the theme picker dropdown. */
  category: ThemePresetCategory;
  /** Preview swatch colors: [background, primary, text] */
  swatches: [string, string, string];
  /** Token assignments for the preset. Empty = use built-in component tokens. */
  assignments: TokenAssignment[];
}

export function valueAssignment(role: string, value: string): TokenAssignment {
  return { role, colorIndex: -1, customValue: value };
}

/** Shared non-color defaults used across most presets */
export function baseDefaults(overrides?: {
  radius?: string;
  buttonRadius?: string;
  spacing?: string;
  borderWidth?: string;
  shadow?: string;
}): TokenAssignment[] {
  return [
    valueAssignment(
      "font-family",
      "Inter, system-ui, -apple-system, sans-serif",
    ),
    valueAssignment("font-size-small", "12"),
    valueAssignment("font-size-medium", "14"),
    valueAssignment("font-size-large", "16"),
    valueAssignment("font-weight-default", "400"),
    valueAssignment("font-weight-bold", "600"),
    valueAssignment("line-height", "1.5"),
    valueAssignment("border-radius", overrides?.radius ?? "4"),
    valueAssignment(
      "button-border-radius",
      overrides?.buttonRadius ?? overrides?.radius ?? "4",
    ),
    valueAssignment("spacing", overrides?.spacing ?? "4"),
    valueAssignment("border-width", overrides?.borderWidth ?? "1"),
    valueAssignment(
      "shadow",
      overrides?.shadow ??
        "0 1px 3px oklch(0 0 0 / 0.12), 0 1px 2px oklch(0 0 0 / 0.08)",
    ),
    valueAssignment("focus-width", "2"),
    valueAssignment("focus-offset", "2"),
    valueAssignment("transition-duration", "150"),
  ];
}

/**
 * Blueprint default color tokens for the light color mode.
 * Snapshot of Blueprint 5.x defaults — verify if upgrading Blueprint.
 */
function workshopLightColors(): TokenAssignment[] {
  return [
    valueAssignment("background", "#ffffff"),
    valueAssignment("surface", "#f6f7f9"),
    valueAssignment("surface-hover", "#ebecef"),
    valueAssignment("surface-active", "#dce0e5"),
    valueAssignment("text", "#1c2127"),
    valueAssignment("text-muted", "#5f6b7c"),
    valueAssignment("text-subtle", "#abb3bf"),
    valueAssignment("primary", "#2d72d2"),
    valueAssignment("primary-foreground", "#ffffff"),
    valueAssignment("secondary", "#edeff2"),
    valueAssignment("secondary-foreground", "#1c2127"),
    valueAssignment("icon-color", "#5f6b7c"),
    valueAssignment("border", "#d3d8de"),
    valueAssignment("input-bg", "#ffffff"),
    valueAssignment("overlay", "rgba(16, 22, 26, 0.7)"),
    valueAssignment("danger", "#cd4246"),
    valueAssignment("success", "#238551"),
    valueAssignment("warning", "#c87619"),
    valueAssignment("primary-hover", "#215db0"),
    valueAssignment("primary-active", "#184a90"),
  ];
}

/**
 * Blueprint default color tokens for the dark color mode.
 * Snapshot of Blueprint 5.x defaults — verify if upgrading Blueprint.
 */
function workshopDarkColors(): TokenAssignment[] {
  return [
    valueAssignment("background", "#111418"),
    valueAssignment("surface", "#1c2127"),
    valueAssignment("surface-hover", "#252a31"),
    valueAssignment("surface-active", "#2f343c"),
    valueAssignment("text", "#f6f7f9"),
    valueAssignment("text-muted", "#abb3bf"),
    valueAssignment("text-subtle", "#5f6b7c"),
    valueAssignment("primary", "#2d72d2"),
    valueAssignment("primary-foreground", "#ffffff"),
    valueAssignment("secondary", "#2f343c"),
    valueAssignment("secondary-foreground", "#f6f7f9"),
    valueAssignment("icon-color", "#abb3bf"),
    valueAssignment("border", "#404854"),
    valueAssignment("input-bg", "#1c2127"),
    valueAssignment("overlay", "rgba(16, 22, 26, 0.85)"),
    valueAssignment("danger", "#e76a6e"),
    valueAssignment("success", "#32a467"),
    valueAssignment("warning", "#ec9a3c"),
    valueAssignment("primary-hover", "#4c90f0"),
    valueAssignment("primary-active", "#5ea3ff"),
  ];
}

/**
 * Returns the full set of default token assignments for a built-in theme.
 * Used for export when the user hasn't added custom overrides.
 */
export function getBuiltInDefaults(
  colorMode: ThemeColorMode,
): TokenAssignment[] {
  const colors =
    colorMode === "dark" ? workshopDarkColors() : workshopLightColors();
  return [...colors, ...baseDefaults()];
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "workshop-light",
    label: "Workshop Light",
    description:
      "Built-in Blueprint light theme — no overrides, uses base tokens as-is",
    category: "built-in",
    swatches: ["#ffffff", "#2d72d2", "#1c2127"],
    assignments: [],
  },
  {
    id: "workshop-dark",
    label: "Workshop Dark",
    description:
      "Built-in Blueprint dark theme — no overrides, just enables dark mode",
    colorMode: "dark",
    category: "built-in",
    swatches: ["#111418", "#2d72d2", "#a5aab3"],
    assignments: [],
  },
  {
    id: "devcon",
    label: "DevCon",
    description: "Near-black theme with vivid DevCon green accents",
    colorMode: "dark",
    category: "custom",
    swatches: ["#0f1412", "#00ff00", "#f3f8f5"],
    assignments: [
      valueAssignment("background", "#0f1412"),
      valueAssignment("surface", "#18201c"),
      valueAssignment("surface-hover", "#29372f"),
      valueAssignment("surface-active", "#34483d"),
      valueAssignment("text", "#f3f8f5"),
      valueAssignment("text-muted", "#a8b8af"),
      valueAssignment("text-subtle", "#718078"),
      valueAssignment("primary", "#00ff00"),
      valueAssignment("primary-foreground", "#0b1a12"),
      valueAssignment("primary-hover", "#39ff39"),
      valueAssignment("primary-active", "#70ff70"),
      valueAssignment("secondary", "#2d3933"),
      valueAssignment("secondary-foreground", "#edf5f0"),
      valueAssignment("icon-color", "#a8b8af"),
      valueAssignment("border", "#2a352f"),
      valueAssignment("input-bg", "#202a25"),
      valueAssignment("overlay", "rgba(0, 0, 0, 0.7)"),
      valueAssignment("danger", "#f47c86"),
      valueAssignment("success", "#52c987"),
      valueAssignment("warning", "#f2a84b"),
      valueAssignment("table-border", "0 solid transparent"),
      valueAssignment("table-header-divider", "0 solid transparent"),
      valueAssignment("table-row-divider", "0 solid transparent"),
      valueAssignment(
        "table-pinned-column-border",
        "var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default)",
      ),
      ...baseDefaults({
        shadow: "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)",
      }),
    ],
  },
  {
    id: "onyx",
    label: "Onyx",
    description: "Charcoal dark theme with restrained violet accents",
    colorMode: "dark",
    category: "custom",
    swatches: ["#0d0f14", "#8b7ae2", "#f4f3f8"],
    assignments: [
      valueAssignment("background", "#0d0f14"),
      valueAssignment("surface", "#17191f"),
      valueAssignment("surface-hover", "#252831"),
      valueAssignment("surface-active", "#303540"),
      valueAssignment("text", "#f4f3f8"),
      valueAssignment("text-muted", "#aaa7b7"),
      valueAssignment("text-subtle", "#747080"),
      valueAssignment("primary", "#8b7ae2"),
      valueAssignment("primary-foreground", "#0d0f14"),
      valueAssignment("primary-hover", "#9a88eb"),
      valueAssignment("primary-active", "#a99af0"),
      valueAssignment("secondary", "#292d36"),
      valueAssignment("secondary-foreground", "#f2f0f7"),
      valueAssignment("icon-color", "#aaa7b7"),
      valueAssignment("border", "#30343d"),
      valueAssignment("input-bg", "#1c1e24"),
      valueAssignment("overlay", "rgba(5, 4, 9, 0.82)"),
      valueAssignment("danger", "#ef7c87"),
      valueAssignment("success", "#59c991"),
      valueAssignment("warning", "#dda95e"),
      valueAssignment("table-border", "0 solid transparent"),
      valueAssignment("table-header-divider", "0 solid transparent"),
      valueAssignment("table-row-divider", "0 solid transparent"),
      valueAssignment(
        "table-pinned-column-border",
        "var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default)",
      ),
      ...baseDefaults({
        radius: "4",
        shadow: "0 1px 3px oklch(0 0 0 / 0.45), 0 1px 2px oklch(0 0 0 / 0.35)",
      }),
    ],
  },
  {
    id: "stone",
    label: "Mica",
    description: "Warm monochrome light theme with pill-shaped controls",
    category: "custom",
    swatches: ["#f6f5f3", "#302925", "#171412"],
    assignments: [
      valueAssignment("background", "#f6f5f3"),
      valueAssignment("surface", "#fbfaf8"),
      valueAssignment("surface-hover", "#f5f1ed"),
      valueAssignment("surface-active", "#ede7e1"),
      valueAssignment("text", "#171412"),
      valueAssignment("text-muted", "#746c65"),
      valueAssignment("text-subtle", "#9a928b"),
      valueAssignment("primary", "#302925"),
      valueAssignment("primary-foreground", "#ffffff"),
      valueAssignment("primary-hover", "#6c5f58"),
      valueAssignment("primary-active", "#191512"),
      valueAssignment("secondary", "#fffefd"),
      valueAssignment("secondary-foreground", "#302925"),
      valueAssignment("icon-color", "#6f6862"),
      valueAssignment("border", "#e8e3de"),
      valueAssignment("input-bg", "#fffefd"),
      valueAssignment("overlay", "rgba(16, 22, 26, 0.7)"),
      valueAssignment("danger", "#c72923"),
      valueAssignment("success", "#16a34a"),
      valueAssignment("warning", "#ba8221"),
      valueAssignment("table-border", "0 solid transparent"),
      valueAssignment("table-header-divider", "0 solid transparent"),
      valueAssignment("table-row-divider", "0 solid transparent"),
      valueAssignment(
        "table-pinned-column-border",
        "var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default)",
      ),
      ...baseDefaults({
        radius: "8",
        buttonRadius: "20",
        borderWidth: "0.5",
      }),
    ],
  },
  {
    id: "mono",
    label: "Cloud",
    description: "Minimal white theme with monochrome controls",
    category: "custom",
    swatches: ["#fcfcfc", "#242424", "#686868"],
    assignments: [
      valueAssignment("background", "#fcfcfc"),
      valueAssignment("surface", "#f6f6f6"),
      valueAssignment("surface-hover", "#f7f7f7"),
      valueAssignment("surface-active", "#ededed"),
      valueAssignment("text", "#1a1a1a"),
      valueAssignment("text-muted", "#686868"),
      valueAssignment("text-subtle", "#969696"),
      valueAssignment("primary", "#242424"),
      valueAssignment("primary-foreground", "#ffffff"),
      valueAssignment("primary-hover", "#444444"),
      valueAssignment("primary-active", "#111111"),
      valueAssignment("secondary", "#ffffff"),
      valueAssignment("secondary-foreground", "#242424"),
      valueAssignment("icon-color", "#686868"),
      valueAssignment("border", "#e5e5e5"),
      valueAssignment("input-bg", "#ffffff"),
      valueAssignment("overlay", "rgba(0, 0, 0, 0.7)"),
      valueAssignment("danger", "#d92d20"),
      valueAssignment("success", "#14804a"),
      valueAssignment("warning", "#d97706"),
      valueAssignment("table-border", "0 solid transparent"),
      valueAssignment("table-header-divider", "0 solid transparent"),
      valueAssignment("table-row-divider", "0 solid transparent"),
      valueAssignment(
        "table-pinned-column-border",
        "var(--osdk-surface-border-width) solid var(--osdk-surface-border-color-default)",
      ),
      ...baseDefaults({
        radius: "8",
        buttonRadius: "20",
        borderWidth: "0.5",
      }),
    ],
  },
];
