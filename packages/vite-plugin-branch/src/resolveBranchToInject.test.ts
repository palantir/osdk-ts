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

import { resolveBranchToInject } from "./resolveBranchToInject.js";

const PINNED = "ri.foundry.main.branch.pinned";

describe(resolveBranchToInject, () => {
  it.each<[string, string | undefined, string | undefined, string | undefined]>(
    [
      [
        "injects the git branch when nothing is pinned",
        undefined,
        "feature",
        "feature",
      ],
      ["leaves a pinned branch untouched", PINNED, "feature", undefined],
      [
        "prefers a pinned branch even on a git branch",
        PINNED,
        "other",
        undefined,
      ],
      ["treats a blank pinned value as unpinned", "   ", "feature", "feature"],
      ["trims the git branch", undefined, "  feature\n", "feature"],
      [
        "injects nothing when git is unavailable",
        undefined,
        undefined,
        undefined,
      ],
      [
        "keeps a slash-delimited branch",
        undefined,
        "zka/my-branch",
        "zka/my-branch",
      ],
    ],
  )("%s", (_description, pinnedBranch, gitBranch, expected) => {
    expect(resolveBranchToInject(pinnedBranch, gitBranch)).toBe(expected);
  });
});
