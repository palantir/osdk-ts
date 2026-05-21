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

import { THEME_PRESETS } from "./brandThemePresets.js";
import {
  BRAND_THEME_PRESET_GLOBAL_KEY,
  DEFAULT_BRAND_THEME_PRESET_ID,
} from "./brandThemeState.js";

export const initialBrandThemeGlobals = {
  [BRAND_THEME_PRESET_GLOBAL_KEY]: DEFAULT_BRAND_THEME_PRESET_ID,
};

export const brandThemeGlobalTypes = {
  [BRAND_THEME_PRESET_GLOBAL_KEY]: {
    description: "CSS token preset applied to OSDK React components",
    toolbar: {
      title: "Theme",
      icon: "paintbrush" as const,
      dynamicTitle: true,
      items: THEME_PRESETS.map((preset) => ({
        value: preset.id,
        title: preset.label,
      })),
    },
  },
};
