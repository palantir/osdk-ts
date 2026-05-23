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
import { resolveThemeCssVariables } from "../brandThemeCssVariables.js";

describe("resolveThemeCssVariables", () => {
  it("maps preset semantic roles to CSS custom properties", () => {
    const variables = resolveThemeCssVariables({ presetId: "devcon" });

    expect(variables.get("--osdk-intent-primary-rest")).toBe("#16a34a");
  });

  it("returns only known custom properties without initial resets", () => {
    const variables = resolveThemeCssVariables({ presetId: "devcon" });

    for (const [name, value] of variables) {
      expect(name).toMatch(/^--(?:osdk|bp)-/);
      expect(value).not.toBe("initial");
    }
  });

  it("ports previous modern and devcon themes into preset variables", () => {
    expect(
      resolveThemeCssVariables({ presetId: "modern" }).get(
        "--osdk-table-row-bg-default",
      ),
    ).toBe("#ffffff");
    expect(
      resolveThemeCssVariables({ presetId: "devcon" }).get(
        "--osdk-table-header-bg",
      ),
    ).toBe("#14532d");
    expect(
      resolveThemeCssVariables({ presetId: "devcon" }).get(
        "--osdk-table-skeleton-color-from",
      ),
    ).toBe(
      "rgba(34, 197, 94, 0.1)",
    );
  });
});
