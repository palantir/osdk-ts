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
import { entityJsdoc } from "./entityJsdoc.js";

describe("entityJsdoc", () => {
  it("renders display names and descriptions", () => {
    expect(entityJsdoc("Todo", "Todo item", "Tracks work.")).toBe(`/**
 * Display name: Todo item
 * Tracks work.
 */
`);
  });

  it("omits display names matching the API name", () => {
    expect(entityJsdoc("Todo", "Todo", undefined)).toBe("");
  });

  it("neutralizes tag-like display name lines", () => {
    expect(entityJsdoc("Todo", "@experimental\n@deprecated", undefined)).toBe(
      `/**
 * Display name: &#64;experimental
 * &#64;deprecated
 */
`,
    );
  });

  it("neutralizes tag-like description lines", () => {
    expect(
      entityJsdoc(
        "Todo",
        undefined,
        "@experimental\nTracks work.\n@deprecated\nContains */ safely.",
      ),
    ).toBe(`/**
 * &#64;experimental
 * Tracks work.
 * &#64;deprecated
 * Contains *\\/ safely.
 */
`);
  });
});
