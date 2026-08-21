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

import { normalizeGitBranch } from "./normalizeGitBranch.js";

describe("normalizeGitBranch", () => {
  it("returns the branch when on a feature branch", () => {
    expect(normalizeGitBranch("my-feature")).toBe("my-feature");
    expect(normalizeGitBranch("zka/my-branch")).toBe("zka/my-branch");
  });

  it("returns undefined on main/master/detached", () => {
    expect(normalizeGitBranch("main")).toBeUndefined();
    expect(normalizeGitBranch("master")).toBeUndefined();
    expect(normalizeGitBranch("HEAD")).toBeUndefined();
  });

  it("returns undefined when the branch is missing/empty", () => {
    expect(normalizeGitBranch(undefined)).toBeUndefined();
    expect(normalizeGitBranch("")).toBeUndefined();
    expect(normalizeGitBranch("   ")).toBeUndefined();
  });

  it("trims whitespace", () => {
    expect(normalizeGitBranch("  feature/x  ")).toBe("feature/x");
    expect(normalizeGitBranch("  main  ")).toBeUndefined();
  });

  it("keeps a branch that merely contains a non-branch name", () => {
    expect(normalizeGitBranch("zka/main-fix")).toBe("zka/main-fix");
    expect(normalizeGitBranch("mainline")).toBe("mainline");
  });
});
