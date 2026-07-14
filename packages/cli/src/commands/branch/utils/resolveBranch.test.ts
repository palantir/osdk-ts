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

import { resolveBranch } from "./resolveBranch.js";

describe("resolveBranch", () => {
  it("returns the git branch when on a feature branch", () => {
    expect(resolveBranch(undefined, "my-feature")).toBe("my-feature");
  });
  it("returns undefined on main/master/detached", () => {
    expect(resolveBranch(undefined, "main")).toBeUndefined();
    expect(resolveBranch(undefined, "master")).toBeUndefined();
    expect(resolveBranch(undefined, "HEAD")).toBeUndefined();
  });
  it("returns undefined when git branch is missing/empty", () => {
    expect(resolveBranch(undefined, undefined)).toBeUndefined();
    expect(resolveBranch(undefined, "")).toBeUndefined();
  });
  it("honors --branchName override even over main", () => {
    expect(resolveBranch("main", "my-feature")).toBe("main");
    expect(resolveBranch("override", "main")).toBe("override");
  });
  it("trims whitespace", () => {
    expect(resolveBranch(undefined, "  feature/x  ")).toBe("feature/x");
  });
});
