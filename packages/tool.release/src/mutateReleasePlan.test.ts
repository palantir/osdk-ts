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

function createMajorReleasePlan(): ReleasePlan {
  return {
    changesets: [
      {
        id: "unit-testing-ga",
        releases: [{ name: "@osdk/unit-testing", type: "major" }],
        summary: "Make unit testing generally available",
      },
    ],
    preState: undefined,
    releases: [
      {
        changesets: ["unit-testing-ga"],
        oldVersion: "0.27.0",
        newVersion: "1.0.0",
        name: "@osdk/unit-testing",
        type: "major",
      },
    ],
  };
}

describe(mutateReleasePlan, () => {
  describe("for main", () => {
    it("promotes patches to minor", () => {
      const plan: ReleasePlan = {
        changesets: [
          {
            id: "5",
            releases: [{ name: "foo", type: "patch" }],
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
            releases: [{ name: "foo", type: "minor" }],
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

  describe("major releases", () => {
    it("rejects major changesets by default with the package-specific option", () => {
      const plan = createMajorReleasePlan();

      expect(() => mutateReleasePlan("/faux/cwd", plan, "main")).toThrow(
        "--allow-major-release @osdk/unit-testing",
      );
    });

    it("allows a major release for the named package on main", () => {
      const plan = createMajorReleasePlan();

      mutateReleasePlan("/faux/cwd", plan, "main", ["@osdk/unit-testing"]);

      expect(plan.releases).toEqual([
        {
          changesets: ["unit-testing-ga"],
          oldVersion: "0.27.0",
          newVersion: "1.0.0",
          name: "@osdk/unit-testing",
          type: "major",
        },
      ]);
    });

    it.each(["@osdk/unit-testing-extra", "*"])(
      "does not allow a major release with a different package name: %s",
      (allowedPackage) => {
        const plan = createMajorReleasePlan();

        expect(() =>
          mutateReleasePlan("/faux/cwd", plan, "main", [allowedPackage]),
        ).toThrow("--allow-major-release @osdk/unit-testing");
      },
    );

    it("still rejects a major changeset for another package", () => {
      const plan = createMajorReleasePlan();
      plan.changesets[0].releases.push({ name: "other", type: "major" });
      plan.releases.push({
        changesets: ["unit-testing-ga"],
        oldVersion: "1.0.0",
        newVersion: "2.0.0",
        name: "other",
        type: "major",
      });

      expect(() =>
        mutateReleasePlan("/faux/cwd", plan, "main", ["@osdk/unit-testing"]),
      ).toThrow("--allow-major-release other");
    });

    it("requires a separate option for a dependent major release", () => {
      const plan = createMajorReleasePlan();
      plan.releases.push({
        changesets: [],
        oldVersion: "0.12.0",
        newVersion: "1.0.0",
        name: "@osdk/integration-testing",
        type: "major",
      });

      expect(() =>
        mutateReleasePlan("/faux/cwd", plan, "main", ["@osdk/unit-testing"]),
      ).toThrow("--allow-major-release @osdk/integration-testing");
    });

    it("allows dependent major releases when each package is named", () => {
      const plan = createMajorReleasePlan();
      plan.releases.push({
        changesets: [],
        oldVersion: "0.12.0",
        newVersion: "1.0.0",
        name: "@osdk/integration-testing",
        type: "major",
      });

      mutateReleasePlan("/faux/cwd", plan, "main", [
        "@osdk/unit-testing",
        "@osdk/integration-testing",
      ]);

      expect(plan.releases).toMatchObject([
        { name: "@osdk/unit-testing", type: "major", newVersion: "1.0.0" },
        {
          name: "@osdk/integration-testing",
          type: "major",
          newVersion: "1.0.0",
        },
      ]);
    });

    it.each(["major", "patch"] as const)(
      "rejects a major release on a stable branch even when named (%s changeset)",
      (changesetType) => {
        const plan = createMajorReleasePlan();
        plan.changesets[0].releases[0].type = changesetType;

        expect(() =>
          mutateReleasePlan("/faux/cwd", plan, "release branch", [
            "@osdk/unit-testing",
          ]),
        ).toThrow("To allow this package on main");
      },
    );
  });

  describe("for patch", () => {
    it("fails to demote minor and major to patch", () => {
      const plan: ReleasePlan = {
        changesets: [
          {
            id: "breezy-adults-call",
            releases: [{ name: "foo", type: "minor" }],
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

  describe("first minor after patches", () => {
    it("allows first minor after pre-release", () => {
      const plan: ReleasePlan = {
        changesets: [
          {
            id: "first-minor",
            releases: [{ name: "foo", type: "minor" }],
            summary: "foo summary",
          },
        ],
        preState: undefined,
        releases: [
          {
            changesets: ["first-minor"],
            oldVersion: "2.2.0-beta.5",
            newVersion: "2.2.0",
            name: "foo",
            type: "minor",
          },
        ],
      };

      mutateReleasePlan("/faux/cwd", plan, "release branch");
    });
    it("disallows minor without 0 patch version", () => {
      const plan: ReleasePlan = {
        changesets: [
          {
            id: "first-minor",
            releases: [{ name: "foo", type: "minor" }],
            summary: "foo summary",
          },
        ],
        preState: undefined,
        releases: [
          {
            changesets: ["first-minor"],
            oldVersion: "2.2.0-beta.6",
            newVersion: "2.2.1",
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

        .changeset/first-minor.md:
          - foo: minor
        ]
      `);
    });
    it("disallows minor not after pre-release", () => {
      const plan: ReleasePlan = {
        changesets: [
          {
            id: "first-minor",
            releases: [{ name: "foo", type: "minor" }],
            summary: "foo summary",
          },
        ],
        preState: undefined,
        releases: [
          {
            changesets: ["first-minor"],
            oldVersion: "2.1.4",
            newVersion: "2.2.0",
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

        .changeset/first-minor.md:
          - foo: minor
        ]
      `);
    });
  });
});
