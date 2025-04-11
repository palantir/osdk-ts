/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ReleasePlan } from "@changesets/types";
import { describe, expect, it } from "vitest";
import { mutateReleasePlan } from "./mutateReleasePlan.js";

describe(mutateReleasePlan, () => {
  describe("for main", () => {
    it("promotes patches to minor", () => {
      const plan: ReleasePlan = {
        changesets: [
          {
            id: "5",
            releases: [
              { name: "foo", type: "patch" },
            ],
            summary: "foo summary",
          },
        ],
        preState: undefined,
        releases: [
          {
            changesets: ["5"],
            oldVersion: "2.1.3",
            newVersion: "2.1.4",
            name: "foo",
            type: "patch",
          },
        ],
      };

      mutateReleasePlan("/faux/cwd", plan, "main");

      expect(plan).toEqual({
        changesets: [
          {
            id: "5",
            releases: [
              { name: "foo", type: "minor" },
            ],
            summary: "foo summary",
          },
        ],
        preState: undefined,
        releases: [
          {
            changesets: ["5"],
            oldVersion: "2.1.3",
            newVersion: "2.2.0",
            name: "foo",
            type: "minor",
          },
        ],
      });
    });
  });

  describe("for patch", () => {
    it("fails to demote minor and major to patch", () => {
      const plan: ReleasePlan = {
        changesets: [
          {
            id: "breezy-adults-call",
            releases: [
              { name: "foo", type: "minor" },
            ],
            summary: "foo summary",
          },
        ],
        preState: undefined,
        releases: [
          {
            changesets: ["breezy-adults-call"],
            oldVersion: "2.1.3",
            newVersion: "2.1.4",
            name: "foo",
            type: "minor",
          },
        ],
      };

      expect(() => {
        mutateReleasePlan("/faux/cwd", plan, "release branch");
      }).toThrowErrorMatchingInlineSnapshot(`
        [FailedWithUserMessage: Unable to create a release for the stable branch.

        Our branching model requires that we only release patch changes on a stable branch to avoid version number collisions with main and the other release branches. Problems:

        .changeset/breezy-adults-call.md:
          - foo: minor
        ]
      `);
    });
  });
});
