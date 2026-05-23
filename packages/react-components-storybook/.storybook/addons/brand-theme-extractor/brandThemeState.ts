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
  type BrandThemePreset,
  type BrandThemePresetId,
  THEME_PRESETS,
} from "./brandThemePresets.js";

export const DEFAULT_BRAND_THEME_PRESET_ID: BrandThemePresetId =
  "workshop-light";
export const BRAND_THEME_PRESET_GLOBAL_KEY = "brandTheme";

export interface BrandThemePresetSelection {
  presetId: BrandThemePresetId;
}

export function parseBrandThemePresetGlobal(
  rawGlobal: unknown,
): BrandThemePresetSelection {
  if (typeof rawGlobal === "string" && isBrandThemePresetId(rawGlobal)) {
    return { presetId: rawGlobal };
  }

  if (isRecord(rawGlobal)) {
    const legacyPresetId = rawGlobal.selectedPresetId;
    if (
      typeof legacyPresetId === "string" && isBrandThemePresetId(legacyPresetId)
    ) {
      return { presetId: legacyPresetId };
    }
  }

  return { presetId: DEFAULT_BRAND_THEME_PRESET_ID };
}

function isBrandThemePresetId(value: string): value is BrandThemePresetId {
  return THEME_PRESETS.some((preset) => preset.id === value);
}

export interface ResolvedBrandThemePreset extends BrandThemePreset {}

export function resolveBrandThemePreset(
  selection: BrandThemePresetSelection,
): ResolvedBrandThemePreset {
  return THEME_PRESETS.find((preset) => preset.id === selection.presetId)
    ?? THEME_PRESETS[0];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
