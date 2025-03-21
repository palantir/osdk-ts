/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import { isValidSemver } from "./isValidSemver.js";
describe("isValidSemver", () => {
  it("should return true for a valid SemVer version", () => {
    expect(isValidSemver("1.0.0")).toBe(true);
  });
  it("should return true for a valid SemVer version with prerelease", () => {
    expect(isValidSemver("1.0.0-alpha.1")).toBe(true);
  });
  it("should return true for a valid SemVer version with build metadata", () => {
    expect(isValidSemver("1.0.0+20130313144700")).toBe(true);
  });
  it("should return false for a version missing patch number", () => {
    expect(isValidSemver("1.0")).toBe(false);
  });
  it("should return false for a version with non-numeric components", () => {
    expect(isValidSemver("1.a.b")).toBe(false);
  });
  it("should return false for a version with a single number", () => {
    expect(isValidSemver("1")).toBe(false);
  });
  it("should return false for a completely non-compliant string", () => {
    expect(isValidSemver("not-a-version")).toBe(false);
  });
});
//# sourceMappingURL=isValidSemver.test.js.map