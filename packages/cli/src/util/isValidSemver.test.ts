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

import { isValidSemver } from "@osdk/cli.common";
import { describe, expect, it } from "vitest";

describe("isValidSemver", () => {
  it("should return true for a valid SemVer version", () => {
    const validVersion = "1.0.0";
    expect(isValidSemver(validVersion)).toBe(true);
  });

  it("should return true for a valid SemVer version with prerelease", () => {
    const validVersionWithPrerelease = "1.0.0-alpha.1";
    expect(isValidSemver(validVersionWithPrerelease)).toBe(true);
  });

  it("should return true for a valid SemVer version with build metadata", () => {
    const validVersionWithBuild = "1.0.0+20130313144700";
    expect(isValidSemver(validVersionWithBuild)).toBe(true);
  });

  it("should return false for a version missing patch number", () => {
    const invalidVersionMissingPatch = "1.0";
    expect(isValidSemver(invalidVersionMissingPatch)).toBe(false);
  });

  it("should return false for a version with non-numeric components", () => {
    const invalidVersionNonNumeric = "1.a.b";
    expect(isValidSemver(invalidVersionNonNumeric)).toBe(false);
  });

  it("should return false for a version with a single number", () => {
    const invalidVersionNonNumeric = "1";
    expect(isValidSemver(invalidVersionNonNumeric)).toBe(false);
  });

  it("should return false for a completely non-compliant string", () => {
    const nonCompliantString = "not-a-version";
    expect(isValidSemver(nonCompliantString)).toBe(false);
  });
});
