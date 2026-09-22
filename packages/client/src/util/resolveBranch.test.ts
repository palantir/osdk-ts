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

import { afterEach, describe, expect, it, vi } from "vitest";

import { resolveBranch } from "./resolveBranch.js";

const INJECTED_BRANCH = "ri.foundry.main.branch.from-html";
const EXPLICIT_BRANCH = "ri.foundry.main.branch.from-code";
const META_SELECTOR = 'meta[name="osdk-foundry-branch-rid"]';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe(resolveBranch, () => {
  it.each<
    [
      string,
      string | null | undefined,
      string | null | undefined,
      string | undefined,
    ]
  >([
    [
      "falls back to the injected branch",
      undefined,
      INJECTED_BRANCH,
      INJECTED_BRANCH,
    ],
    [
      "prefers an explicit branch over the injected branch",
      EXPLICIT_BRANCH,
      INJECTED_BRANCH,
      EXPLICIT_BRANCH,
    ],
    [
      "treats null as pinning to the default branch",
      null,
      INJECTED_BRANCH,
      undefined,
    ],
    [
      "does not fall back for a blank explicit branch",
      "  ",
      INJECTED_BRANCH,
      undefined,
    ],
    [
      "trims the injected value",
      undefined,
      `  ${INJECTED_BRANCH}\n`,
      INJECTED_BRANCH,
    ],
    ["treats a blank injected value as unset", undefined, "   ", undefined],
    [
      "accepts a branch name that is not a rid",
      undefined,
      "my-feature-branch",
      "my-feature-branch",
    ],
    ["returns undefined for injected null", undefined, null, undefined],
    [
      "returns undefined when no branch was injected",
      undefined,
      undefined,
      undefined,
    ],
  ])("%s", (_description, explicitBranch, injectedBranch, expected) => {
    expect(resolveBranch(explicitBranch, injectedBranch)).toBe(expected);
  });

  describe("window query parameters", () => {
    it.each([
      [
        "?foundryBranchRid=ri.foundry.main.branch.from-url",
        "ri.foundry.main.branch.from-url",
      ],
      [
        `?other=value&foundryBranchRid=${encodeURIComponent("feature/my branch+test")}`,
        "feature/my branch+test",
      ],
      ["?foundryBranchRid=%20my-branch%20", "my-branch"],
      ["?foundryBranchRid=first&foundryBranchRid=second", "first"],
      ["?foundryBranchRid=", INJECTED_BRANCH],
      ["?foundryBranchRid=%20%09", INJECTED_BRANCH],
      ["?other=value", INJECTED_BRANCH],
      ["", INJECTED_BRANCH],
    ])("resolves %s before the injected branch", (search, expected) => {
      vi.stubGlobal("window", { location: { search } });
      expect(resolveBranch(undefined, INJECTED_BRANCH)).toBe(expected);
    });

    it.each([EXPLICIT_BRANCH, null, "", "  "])(
      "honors the explicit branch %s over the URL and meta tag",
      (branch) => {
        vi.stubGlobal("window", {
          location: { search: "?foundryBranchRid=url-branch" },
        });
        expect(resolveBranch(branch, INJECTED_BRANCH)).toBe(
          branch === EXPLICIT_BRANCH ? EXPLICIT_BRANCH : undefined,
        );
      },
    );

    it("reads the current window each time a branch is resolved", () => {
      const location = { search: "?foundryBranchRid=first" };
      vi.stubGlobal("window", { location });
      expect(resolveBranch(undefined)).toBe("first");
      location.search = "?foundryBranchRid=second";
      expect(resolveBranch(undefined)).toBe("second");
    });

    it("falls back to HTML metadata without a window", () => {
      vi.stubGlobal("window", undefined);
      expect(resolveBranch(undefined, INJECTED_BRANCH)).toBe(INJECTED_BRANCH);
    });
  });

  it("reads the branch from HTML metadata by default", () => {
    const getAttribute = vi.fn(() => INJECTED_BRANCH);
    const querySelector = vi.fn(() => ({ getAttribute }));
    vi.stubGlobal("document", {
      querySelector,
    });

    expect(resolveBranch(undefined)).toBe(INJECTED_BRANCH);
    expect(querySelector).toHaveBeenCalledWith(META_SELECTOR);
    expect(getAttribute).toHaveBeenCalledWith("content");
  });

  it("uses the default branch when document is missing", () => {
    vi.stubGlobal("document", undefined);

    expect(resolveBranch(undefined)).toBeUndefined();
  });

  it("uses the default branch when the meta tag or content is missing", () => {
    vi.stubGlobal("document", { querySelector: () => null });
    expect(resolveBranch(undefined)).toBeUndefined();

    vi.stubGlobal("document", {
      querySelector: () => ({ getAttribute: () => null }),
    });
    expect(resolveBranch(undefined)).toBeUndefined();
  });
});
