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
  getThemePresetMode,
  THEME_PRESETS,
  type ThemePreset,
} from "./presets.js";
import type {
  BrandThemeGlobals,
  ExtractedColor,
  ThemeColorMode,
  TokenAssignment,
} from "./types.js";

export const WORKSHOP_PRESET_ID = "workshop-light";
export const DEFAULT_COLOR_MODE: ThemeColorMode = "light";

interface CreateThemeStateParams {
  presetId: string;
  colorMode: ThemeColorMode;
}

export function getDefaultBrandThemeState(): BrandThemeGlobals {
  return createThemeStateForMode({
    presetId: WORKSHOP_PRESET_ID,
    colorMode: DEFAULT_COLOR_MODE,
  });
}

export function createThemeStateForMode(
  { presetId, colorMode }: CreateThemeStateParams,
): BrandThemeGlobals {
  const preset = findThemePreset(presetId) ?? THEME_PRESETS[0];
  if (!preset) {
    return {
      active: false,
      colorMode,
      selectedPresetId: "",
      palette: [],
      assignments: [],
    };
  }

  const effectiveColorMode = preset.colorMode ?? colorMode;
  const presetMode = getThemePresetMode(preset, effectiveColorMode);

  return {
    active: true,
    colorMode: effectiveColorMode,
    selectedPresetId: preset.id,
    palette: [],
    assignments: presetMode.assignments,
  };
}

export function parseBrandThemeState(raw: unknown): BrandThemeGlobals {
  if (raw == null || raw === "") {
    return getDefaultBrandThemeState();
  }

  const parsed = parseRawState(raw);
  if (!parsed) {
    return getDefaultBrandThemeState();
  }

  return {
    active: getBoolean(parsed.active, getDefaultBrandThemeState().active),
    colorMode: getThemeColorMode(parsed.colorMode),
    selectedPresetId: getString(
      parsed.selectedPresetId,
      getDefaultBrandThemeState().selectedPresetId,
    ),
    palette: getExtractedColors(parsed.palette),
    assignments: getTokenAssignments(parsed.assignments),
  };
}

export function stringifyBrandThemeState(state: BrandThemeGlobals): string {
  return JSON.stringify(state);
}

export function findThemePreset(presetId: string): ThemePreset | undefined {
  return THEME_PRESETS.find((preset) => preset.id === presetId);
}

function parseRawState(raw: unknown): Record<string, unknown> | undefined {
  if (typeof raw === "string") {
    try {
      const parsed: unknown = JSON.parse(raw);
      return isRecord(parsed) ? parsed : undefined;
    } catch {
      return undefined;
    }
  }

  return isRecord(raw) ? raw : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function getBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function getString(value: unknown, fallback: string): string {
  return typeof value === "string" ? value : fallback;
}

function getThemeColorMode(value: unknown): ThemeColorMode {
  return value === "dark" ? "dark" : DEFAULT_COLOR_MODE;
}

function getExtractedColors(value: unknown): ExtractedColor[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(isExtractedColor);
}

function isExtractedColor(value: unknown): value is ExtractedColor {
  if (!isRecord(value)) {
    return false;
  }

  return Array.isArray(value.rgb)
    && value.rgb.length === 3
    && value.rgb.every((channel) => typeof channel === "number")
    && typeof value.hex === "string"
    && typeof value.luminance === "number"
    && typeof value.chroma === "number"
    && typeof value.count === "number";
}

function getTokenAssignments(value: unknown): TokenAssignment[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(isTokenAssignment);
}

function isTokenAssignment(value: unknown): value is TokenAssignment {
  if (!isRecord(value)) {
    return false;
  }

  return typeof value.role === "string"
    && typeof value.colorIndex === "number"
    && (
      value.customValue === undefined
      || typeof value.customValue === "string"
    );
}
