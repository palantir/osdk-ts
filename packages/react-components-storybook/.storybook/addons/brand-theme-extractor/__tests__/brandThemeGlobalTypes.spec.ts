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

import { describe, expect, it } from "vitest";
import {
  brandThemeGlobalTypes,
  initialBrandThemeGlobals,
} from "../brandThemeGlobalTypes.js";
import { THEME_PRESETS } from "../brandThemePresets.js";
import {
  BRAND_THEME_PRESET_GLOBAL_KEY,
  DEFAULT_BRAND_THEME_PRESET_ID,
} from "../brandThemeState.js";

describe("brandThemeGlobalTypes", () => {
  it("registers one native Storybook toolbar item per theme preset", () => {
    const brandThemeToolbarItems =
      brandThemeGlobalTypes[BRAND_THEME_PRESET_GLOBAL_KEY].toolbar.items;

    expect(brandThemeToolbarItems.map((item) => item.value)).toEqual(
      THEME_PRESETS.map((preset) => preset.id),
    );
    expect(brandThemeToolbarItems).toContainEqual(
      expect.objectContaining({ value: "modern", title: "Modern" }),
    );
    expect(brandThemeToolbarItems).toContainEqual(
      expect.objectContaining({ value: "devcon", title: "DevCon" }),
    );
  });

  it("stores only the selected preset id in initial Storybook globals", () => {
    expect(initialBrandThemeGlobals).toEqual({
      [BRAND_THEME_PRESET_GLOBAL_KEY]: DEFAULT_BRAND_THEME_PRESET_ID,
    });
  });
});
