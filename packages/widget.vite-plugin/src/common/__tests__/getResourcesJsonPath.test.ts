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

import { describe, expect, test } from "vitest";

import { getResourcesJsonPath } from "../getResourcesJsonPath.js";

describe("getResourcesJsonPath", () => {
  test("resolves resources.json in the default public directory", () => {
    expect(getResourcesJsonPath({ publicDir: "/project/public" })).toBe(
      "/project/public/resources.json",
    );
  });

  test("resolves resources.json in a custom public directory", () => {
    expect(getResourcesJsonPath({ publicDir: "/project/static" })).toBe(
      "/project/static/resources.json",
    );
  });

  test("returns undefined when the public directory is disabled", () => {
    expect(getResourcesJsonPath({ publicDir: "" })).toBeUndefined();
  });
});
