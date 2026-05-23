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
  DEFAULT_BRAND_THEME_PRESET_ID,
  parseBrandThemePresetGlobal,
  resolveBrandThemePreset,
} from "../brandThemeState.js";

describe("parseBrandThemePresetGlobal", () => {
  it("uses the default preset when the Storybook global is unset", () => {
    expect(parseBrandThemePresetGlobal(undefined)).toEqual({
      presetId: DEFAULT_BRAND_THEME_PRESET_ID,
    });
  });

  it("uses the default preset when the Storybook global is unknown", () => {
    expect(parseBrandThemePresetGlobal("missing-theme")).toEqual({
      presetId: DEFAULT_BRAND_THEME_PRESET_ID,
    });
  });

  it("accepts legacy object globals without trusting persisted assignments", () => {
    expect(
      parseBrandThemePresetGlobal({
        selectedPresetId: "devcon",
        assignments: [{ role: "primary", customValue: "#ffffff" }],
      }),
    ).toEqual({ presetId: "devcon" });
  });
});

describe("resolveBrandThemePreset", () => {
  it("resolves a light preset as light after resolving a dark preset", () => {
    expect(resolveBrandThemePreset({ presetId: "devcon" }).colorMode).toBe(
      "dark",
    );
    expect(resolveBrandThemePreset({ presetId: "workshop-light" }).colorMode)
      .toBe("light");
  });
});
