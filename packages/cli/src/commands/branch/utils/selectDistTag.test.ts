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

import { selectDistTag } from "./selectDistTag.js";

describe("selectDistTag", () => {
  it("matches the exact <branch>-latest tag", () => {
    expect(
      selectDistTag({
        branch: "my-feature-a3x9fb",
        availableTags: ["latest", "my-feature-a3x9fb-latest"],
      })
    ).toBe("my-feature-a3x9fb-latest");
  });
  it("returns undefined when the exact tag is absent (no prefix matching)", () => {
    expect(
      selectDistTag({
        branch: "my-feature",
        availableTags: ["latest", "my-feature-a3x9fb-latest"],
      })
    ).toBeUndefined();
  });
  it("returns undefined when nothing matches", () => {
    expect(
      selectDistTag({ branch: "my-feature", availableTags: ["latest"] })
    ).toBeUndefined();
  });
});
