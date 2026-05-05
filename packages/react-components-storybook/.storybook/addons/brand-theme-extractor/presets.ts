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
  modes?: Record<ThemeColorMode, ThemePresetMode>;
  /** Preview swatch colors for legacy single-mode presets. */
  swatches?: [string, string, string];
  /** Token assignments for legacy single-mode presets. */
  assignments?: TokenAssignment[];
}

export interface ThemePresetMode {
  /** Preview swatch colors: [background, primary, text] */
  swatches: [string, string, string];
  assignments: TokenAssignment[];
}

function colorAssignment(role: string, hex: string): TokenAssignment {
  return { role, colorIndex: -1, customValue: hex };
}

function valueAssignment(role: string, value: string): TokenAssignment {
  return { role, colorIndex: -1, customValue: value };
}

export function getThemePresetMode(
  preset: ThemePreset,
  colorMode: ThemeColorMode,
): ThemePresetMode {
  if (preset.modes) {
    return preset.modes[colorMode];
  }

  return {
    swatches: preset.swatches ?? ["#ffffff", "#2d72d2", "#1c2127"],
    assignments: preset.assignments ?? [],
  };
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
        ?? "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
    ),
    valueAssignment("focus-width", "2"),
    valueAssignment("focus-offset", "2"),
    valueAssignment("transition-duration", "150"),
  ];
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "workshop",
    label: "Workshop",
    description: "Default Blueprint theme used by Workshop-style apps",
    modes: {
      light: {
        swatches: ["#ffffff", "#2d72d2", "#1c2127"],
        assignments: [
          colorAssignment("background", "#ffffff"),
          colorAssignment("surface", "#f6f7f9"),
          colorAssignment("text", "#1c2127"),
          colorAssignment("text-muted", "#5f6b7c"),
          colorAssignment("primary", "#2d72d2"),
          colorAssignment("primary-foreground", "#ffffff"),
          colorAssignment("secondary", "#edeff2"),
          colorAssignment("secondary-foreground", "#1c2127"),
          colorAssignment("icon-color", "#5f6b7c"),
          colorAssignment("border", "#dce0e5"),
          colorAssignment("danger", "#cd4246"),
          colorAssignment("success", "#238551"),
          ...baseDefaults(),
        ],
      },
      dark: {
        swatches: ["#111418", "#2d72d2", "#a5aab3"],
        assignments: [
          colorAssignment("background", "#111418"),
          colorAssignment("surface", "#1c2127"),
          colorAssignment("text", "#a5aab3"),
          colorAssignment("text-muted", "#8f99a8"),
          colorAssignment("primary", "#2d72d2"),
          colorAssignment("primary-foreground", "#ffffff"),
          colorAssignment("secondary", "#252a31"),
          colorAssignment("secondary-foreground", "#f6f7f9"),
          colorAssignment("icon-color", "#8f99a8"),
          colorAssignment("border", "#ffffff33"),
          colorAssignment("danger", "#cd4246"),
          colorAssignment("success", "#238551"),
          ...baseDefaults({
            shadow:
              "inset 0 0 0 1px rgba(255,255,255,0.2), 0 4px 6px -4px rgba(0,0,0,0.5), 0 10px 30px -5px rgba(0,0,0,0.5)",
          }),
        ],
      },
    },
  },
  {
    id: "devcon",
    label: "DevCon",
    description: "Dark theme with green accents for DevCon demos",
    swatches: ["#0a0a0a", "#16a34a", "#86efac"],
    assignments: [
      colorAssignment("background", "#0a0a0a"),
      colorAssignment("surface", "#111111"),
      colorAssignment("text", "#86efac"),
      colorAssignment("text-muted", "#16a34a"),
      colorAssignment("primary", "#16a34a"),
      colorAssignment("primary-foreground", "#0a0a0a"),
      colorAssignment("secondary", "#1a1a1a"),
      colorAssignment("secondary-foreground", "#86efac"),
      colorAssignment("icon-color", "#22c55e"),
      colorAssignment("border", "#15803d"),
      colorAssignment("danger", "#ef4444"),
      colorAssignment("success", "#4ade80"),
      ...baseDefaults({
        shadow: "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
      }),
    ],
  },
  {
    id: "midnight-blue",
    label: "Midnight Blue",
    description: "Dark theme with blue accents",
    swatches: ["#0f172a", "#3b82f6", "#e2e8f0"],
    assignments: [
      colorAssignment("background", "#0f172a"),
      colorAssignment("surface", "#1e293b"),
      colorAssignment("text", "#e2e8f0"),
      colorAssignment("text-muted", "#94a3b8"),
      colorAssignment("primary", "#3b82f6"),
      colorAssignment("primary-foreground", "#ffffff"),
      colorAssignment("secondary", "#334155"),
      colorAssignment("secondary-foreground", "#e2e8f0"),
      colorAssignment("icon-color", "#64748b"),
      colorAssignment("border", "#334155"),
      colorAssignment("danger", "#ef4444"),
      colorAssignment("success", "#22c55e"),
      ...baseDefaults({
        radius: "6",
        shadow: "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
      }),
    ],
  },
  {
    id: "warm-sand",
    label: "Warm Sand",
    description: "Warm neutral light theme",
    swatches: ["#faf8f5", "#c2410c", "#44403c"],
    assignments: [
      colorAssignment("background", "#faf8f5"),
      colorAssignment("surface", "#f5f0eb"),
      colorAssignment("text", "#1c1917"),
      colorAssignment("text-muted", "#78716c"),
      colorAssignment("primary", "#c2410c"),
      colorAssignment("primary-foreground", "#ffffff"),
      colorAssignment("secondary", "#e7e5e4"),
      colorAssignment("secondary-foreground", "#44403c"),
      colorAssignment("icon-color", "#a8a29e"),
      colorAssignment("border", "#d6d3d1"),
      colorAssignment("danger", "#dc2626"),
      colorAssignment("success", "#16a34a"),
      ...baseDefaults({ radius: "8" }),
    ],
  },
  {
    id: "ocean-breeze",
    label: "Ocean Breeze",
    description: "Cool light theme with teal accents",
    swatches: ["#f0fdfa", "#0d9488", "#134e4a"],
    assignments: [
      colorAssignment("background", "#f0fdfa"),
      colorAssignment("surface", "#ccfbf1"),
      colorAssignment("text", "#134e4a"),
      colorAssignment("text-muted", "#5eead4"),
      colorAssignment("primary", "#0d9488"),
      colorAssignment("primary-foreground", "#ffffff"),
      colorAssignment("secondary", "#99f6e4"),
      colorAssignment("secondary-foreground", "#134e4a"),
      colorAssignment("icon-color", "#2dd4bf"),
      colorAssignment("border", "#99f6e4"),
      colorAssignment("danger", "#e11d48"),
      colorAssignment("success", "#059669"),
      ...baseDefaults({ radius: "8" }),
    ],
  },
  {
    id: "royal-purple",
    label: "Royal Purple",
    description: "Dark theme with purple accents",
    swatches: ["#1a1025", "#a855f7", "#e9d5ff"],
    assignments: [
      colorAssignment("background", "#1a1025"),
      colorAssignment("surface", "#2d1b4e"),
      colorAssignment("text", "#e9d5ff"),
      colorAssignment("text-muted", "#a78bfa"),
      colorAssignment("primary", "#a855f7"),
      colorAssignment("primary-foreground", "#ffffff"),
      colorAssignment("secondary", "#3b2563"),
      colorAssignment("secondary-foreground", "#e9d5ff"),
      colorAssignment("icon-color", "#c084fc"),
      colorAssignment("border", "#4c1d95"),
      colorAssignment("danger", "#f43f5e"),
      colorAssignment("success", "#34d399"),
      ...baseDefaults({
        radius: "6",
        shadow: "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
      }),
    ],
  },
];
