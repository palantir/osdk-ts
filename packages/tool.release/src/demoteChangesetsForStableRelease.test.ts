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

import type { NewChangeset } from "@changesets/types";
import { describe, expect, it } from "vitest";
import { demoteChangesetsForStableRelease } from "./demoteChangesetsForStableRelease.js";

describe(demoteChangesetsForStableRelease, () => {
  it("demotes minor to patch", () => {
    const changesets: NewChangeset[] = [
      {
        id: "cool-change",
        summary: "added a feature",
        releases: [{ name: "foo", type: "minor" }],
      },
    ];

    demoteChangesetsForStableRelease(changesets);

    expect(changesets[0].releases[0].type).toBe("patch");
  });

  it("leaves patch unchanged", () => {
    const changesets: NewChangeset[] = [
      {
        id: "small-fix",
        summary: "fixed a bug",
        releases: [{ name: "foo", type: "patch" }],
      },
    ];

    demoteChangesetsForStableRelease(changesets);

    expect(changesets[0].releases[0].type).toBe("patch");
  });

  it("throws on major", () => {
    const changesets: NewChangeset[] = [
      {
        id: "breaking-change",
        summary: "broke everything",
        releases: [{ name: "foo", type: "major" }],
      },
    ];

    expect(() => demoteChangesetsForStableRelease(changesets))
      .toThrowErrorMatchingInlineSnapshot(
        `[FailedWithUserMessage: Major changes are not allowed outside of prerelease mode.]`,
      );
  });

  it("demotes multiple minor releases across changesets", () => {
    const changesets: NewChangeset[] = [
      {
        id: "change-1",
        summary: "first",
        releases: [
          { name: "foo", type: "minor" },
          { name: "bar", type: "patch" },
        ],
      },
      {
        id: "change-2",
        summary: "second",
        releases: [{ name: "baz", type: "minor" }],
      },
    ];

    demoteChangesetsForStableRelease(changesets);

    expect(changesets[0].releases[0].type).toBe("patch");
    expect(changesets[0].releases[1].type).toBe("patch");
    expect(changesets[1].releases[0].type).toBe("patch");
  });

  it("throws on major even when mixed with minor", () => {
    const changesets: NewChangeset[] = [
      {
        id: "mixed",
        summary: "mixed changes",
        releases: [
          { name: "foo", type: "minor" },
          { name: "bar", type: "major" },
        ],
      },
    ];

    expect(() => demoteChangesetsForStableRelease(changesets))
      .toThrowErrorMatchingInlineSnapshot(
        `[FailedWithUserMessage: Major changes are not allowed outside of prerelease mode.]`,
      );
  });

  it("leaves none unchanged", () => {
    const changesets: NewChangeset[] = [
      {
        id: "no-op",
        summary: "no release",
        releases: [{ name: "foo", type: "none" }],
      },
    ];

    demoteChangesetsForStableRelease(changesets);

    expect(changesets[0].releases[0].type).toBe("none");
  });
});
