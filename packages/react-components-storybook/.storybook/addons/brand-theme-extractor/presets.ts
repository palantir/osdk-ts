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

export interface ThemePreset {
  id: string;
  label: string;
  description: string;
  /** The color mode this preset targets. Defaults to "light". */
  colorMode?: ThemeColorMode;
  /** Preview swatch colors: [background, primary, text] */
  swatches: [string, string, string];
  /** Token assignments for the preset. */
  assignments: TokenAssignment[];
}

function valueAssignment(role: string, value: string): TokenAssignment {
  return { role, colorIndex: -1, customValue: value };
}

/** Shared non-color defaults used across most presets */
function baseDefaults(overrides?: {
  radius?: string;
  spacing?: string;
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
    valueAssignment("spacing", overrides?.spacing ?? "4"),
    valueAssignment("border-width", "1"),
    valueAssignment(
      "shadow",
      overrides?.shadow
        ?? "0 1px 3px oklch(0 0 0 / 0.12), 0 1px 2px oklch(0 0 0 / 0.08)",
    ),
    valueAssignment("focus-width", "2"),
    valueAssignment("focus-offset", "2"),
    valueAssignment("transition-duration", "150"),
  ];
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "workshop-light",
    label: "Workshop Light",
    description: "Default Blueprint light theme used by Workshop-style apps",
    swatches: ["#ffffff", "#2d72d2", "#1c2127"],
    assignments: [
      valueAssignment("background", "#ffffff"),
      valueAssignment("surface", "#f6f7f9"),
      valueAssignment("text", "#1c2127"),
      valueAssignment("text-muted", "#5f6b7c"),
      valueAssignment("primary", "#2d72d2"),
      valueAssignment("primary-foreground", "#ffffff"),
      valueAssignment("secondary", "#f6f7f9"),
      valueAssignment("secondary-foreground", "#1c2127"),
      valueAssignment("icon-color", "#5f6b7c"),
      valueAssignment("border", "#dce0e5"),
      valueAssignment("danger", "#cd4246"),
      valueAssignment("success", "#238551"),
      valueAssignment("warning", "#c87619"),
      ...baseDefaults({
        shadow: "inset 0 1px 1px oklch(0 0 0 / 0.15)",
      }),
    ],
  },
  {
    id: "workshop-dark",
    label: "Workshop Dark",
    description: "Default Blueprint dark theme used by Workshop-style apps",
    colorMode: "dark",
    swatches: ["#111418", "#2d72d2", "#a5aab3"],
    assignments: [
      valueAssignment("background", "#111418"),
      valueAssignment("surface", "#1c2127"),
      valueAssignment("text", "#a5aab3"),
      valueAssignment("text-muted", "#8f99a8"),
      valueAssignment("primary", "#2d72d2"),
      valueAssignment("primary-foreground", "#ffffff"),
      valueAssignment("secondary", "#252a31"),
      valueAssignment("secondary-foreground", "#f6f7f9"),
      valueAssignment("icon-color", "#8f99a8"),
      valueAssignment("border", "#ffffff33"),
      valueAssignment("danger", "#cd4246"),
      valueAssignment("success", "#238551"),
      valueAssignment("warning", "#c87619"),
      ...baseDefaults({
        shadow:
          "inset 0 0 0 1px oklch(1 0 0 / 0.2), 0 4px 6px -4px oklch(0 0 0 / 0.5), 0 10px 30px -5px oklch(0 0 0 / 0.5)",
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
      valueAssignment("background", "#0a0a0a"),
      valueAssignment("surface", "#111111"),
      valueAssignment("text", "#86efac"),
      valueAssignment("text-muted", "#16a34a"),
      valueAssignment("primary", "#16a34a"),
      valueAssignment("primary-foreground", "#0a0a0a"),
      valueAssignment("secondary", "#1a1a1a"),
      valueAssignment("secondary-foreground", "#86efac"),
      valueAssignment("icon-color", "#22c55e"),
      valueAssignment("border", "#15803d"),
      valueAssignment("danger", "#ef4444"),
      valueAssignment("success", "#4ade80"),
      valueAssignment("warning", "#f59e0b"),
      ...baseDefaults({
        shadow: "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)",
      }),
    ],
  },
  {
    id: "midnight-blue",
    label: "Midnight Blue",
    description: "Dark theme with blue accents",
    colorMode: "dark",
    swatches: ["#0f172a", "#2563eb", "#e2e8f0"],
    assignments: [
      valueAssignment("background", "#0f172a"),
      valueAssignment("surface", "#1e293b"),
      valueAssignment("text", "#e2e8f0"),
      valueAssignment("text-muted", "#94a3b8"),
      valueAssignment("primary", "#2563eb"),
      valueAssignment("primary-foreground", "#ffffff"),
      valueAssignment("secondary", "#334155"),
      valueAssignment("secondary-foreground", "#e2e8f0"),
      valueAssignment("icon-color", "#8b9bb5"),
      valueAssignment("border", "#334155"),
      valueAssignment("danger", "#ef4444"),
      valueAssignment("success", "#22c55e"),
      valueAssignment("warning", "#f59e0b"),
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
    swatches: ["#faf8f5", "#c2410c", "#44403c"],
    assignments: [
      valueAssignment("background", "#faf8f5"),
      valueAssignment("surface", "#f5f0eb"),
      valueAssignment("text", "#1c1917"),
      valueAssignment("text-muted", "#78716c"),
      valueAssignment("primary", "#c2410c"),
      valueAssignment("primary-foreground", "#ffffff"),
      valueAssignment("secondary", "#f2efec"),
      valueAssignment("secondary-foreground", "#44403c"),
      valueAssignment("icon-color", "#78716c"),
      valueAssignment("border", "#d6d3d1"),
      valueAssignment("danger", "#dc2626"),
      valueAssignment("success", "#15803d"),
      valueAssignment("warning", "#d97706"),
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
      valueAssignment("background", "#1a1025"),
      valueAssignment("surface", "#2d1b4e"),
      valueAssignment("text", "#e9d5ff"),
      valueAssignment("text-muted", "#a78bfa"),
      valueAssignment("primary", "#9333ea"),
      valueAssignment("primary-foreground", "#ffffff"),
      valueAssignment("secondary", "#3b2563"),
      valueAssignment("secondary-foreground", "#e9d5ff"),
      valueAssignment("icon-color", "#c084fc"),
      valueAssignment("border", "#4c1d95"),
      valueAssignment("danger", "#f43f5e"),
      valueAssignment("success", "#34d399"),
      valueAssignment("warning", "#f59e0b"),
      ...baseDefaults({
        radius: "6",
        shadow: "0 1px 3px oklch(0 0 0 / 0.4), 0 1px 2px oklch(0 0 0 / 0.3)",
      }),
    ],
  },
];
