/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import { determineTag, findGreatestVersion } from "./ciPublish.js";

describe("findGreatestVersion", () => {
  it("should find the highest semver version from release branch names", () => {
    const branches = [
      "release/1.0.x",
      "release/2.0.x",
      "release/1.5.x",
      "release/2.1.x",
    ];

    const result = findGreatestVersion(branches);

    expect(result).toBe("release/2.1.x");
  });

  it("should handle empty array input", () => {
    const branches: string[] = [];

    const result = findGreatestVersion(branches);

    expect(result).toBeNull();
  });
});

describe("determineTag", () => {
  it("should return 'latest' when current branch is main", () => {
    const currentBranch = "main";
    const greatestVersion = "release/2.1.x";
    const defaultTag = "latest";

    const result = determineTag(currentBranch, greatestVersion, defaultTag);

    expect(result).toBe("latest");
  });

  it("should return 'latest' when current release branch is the greatest version", () => {
    const currentBranch = "release/2.1.x";
    const greatestVersion = "release/2.1.x";
    const defaultTag = "latest";

    const result = determineTag(currentBranch, greatestVersion, defaultTag);

    expect(result).toBe("latest");
  });

  it("should return 'tag-version' when current release branch is not the greatest version", () => {
    const currentBranch = "release/2.0.x";
    const greatestVersion = "2.1.x";
    const defaultTag = "latest";

    const result = determineTag(currentBranch, greatestVersion, defaultTag);

    expect(result).toBe("latest-2.0.x");
  });
});
