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

import type { Release, ReleasePlan } from "@changesets/types";
import chalk from "chalk";
import micromatch from "micromatch";
import path from "path";
import { inc, parse } from "semver";
import { FailedWithUserMessage } from "./FailedWithUserMessage.js";

function isPackageIgnored(
  packageName: string,
  ignorePatterns: readonly string[],
): boolean {
  return ignorePatterns.some(pattern =>
    micromatch.isMatch(packageName, pattern)
  );
}

function isFirstMinorRelease(oldVersion: string, newVersion: string): boolean {
  const oldSemver = parse(oldVersion);
  const newSemver = parse(newVersion);
  if (oldSemver == null || newSemver == null) {
    throw new FailedWithUserMessage(
      `Invalid version(s): ${oldVersion}, ${newVersion}`,
    );
  }
  return (
    oldSemver.prerelease.length > 0
    && newSemver.prerelease.length === 0
    && oldSemver.compareMain(newSemver) === 0
    && newSemver.patch === 0
  );
}

function isPrereleaseWithPatchZero(newVersion: string): boolean {
  const newSemver = parse(newVersion);
  if (newSemver == null) {
    throw new FailedWithUserMessage(
      `Invalid version: ${newVersion}`,
    );
  }
  return newSemver.prerelease.length > 0 && newSemver.patch === 0;
}

/**
 * Checks that a release for a given changeset is valid.
 * @param releasePlan The entire release plan
 * @param releaseForChangeset A release entry from a specific changeset
 * @returns
 */
function isPatchVersionOrFirstMinorRelease(
  releasePlan: ReleasePlan,
  releaseForChangeset: Release,
): boolean {
  if (releaseForChangeset.type === "patch") {
    return true;
  }
  if (releaseForChangeset.type === "minor") {
    // Find the matching release entry in the overall release plan
    const releaseName = releaseForChangeset.name;
    const matchingReleases = releasePlan.releases.filter((r) =>
      r.name === releaseForChangeset.name
    );
    if (matchingReleases.length !== 1) {
      throw new FailedWithUserMessage(
        `Expected exactly one release entry for package "${releaseName}", but found ${matchingReleases.length}.`,
      );
    }
    const release = matchingReleases[0];
    return isFirstMinorRelease(release.oldVersion, release.newVersion)
      || isPrereleaseWithPatchZero(release.newVersion);
  }
  return false;
}

export function mutateReleasePlan(
  cwd: string,
  releasePlan: ReleasePlan,
  releaseType: "release branch" | "main",
  ignorePatterns: readonly string[] = [],
): void {
  let bulkErrorMsg = "";
  for (const changeSet of releasePlan.changesets) {
    let errorStarted = false;
    for (const release of changeSet.releases) {
      // Skip ignored packages
      if (isPackageIgnored(release.name, ignorePatterns)) {
        continue;
      }

      if (releaseType === "main" && release.type === "patch") {
        release.type = "minor";
      } else if (
        releaseType === "release branch"
        && (!isPatchVersionOrFirstMinorRelease(releasePlan, release))
        && (release.type !== "none")
      ) {
        if (!errorStarted) {
          bulkErrorMsg = `\n${
            chalk.cyan(
              path.relative(
                cwd,
                `${path.join(cwd, ".changeset", changeSet.id)}.md`,
              ),
            )
          }:\n`;
          errorStarted = true;
        }
        bulkErrorMsg += `  - ${
          chalk.red(`${release.name}: ${release.type}`)
        }\n`;
      }

      if (release.type === "major") {
        throw new FailedWithUserMessage(
          `Major changes are not allowed without explicit human intervention.`,
        );
      }
    }
  }

  if (bulkErrorMsg.length > 0) {
    throw new FailedWithUserMessage(
      `Unable to create a release for the stable branch.\n\n`
        + `Our branching model requires that we only release patch changes on a stable branch `
        + `to avoid version number collisions with main and the other release branches. `
        + `Problems:\n${bulkErrorMsg}`,
    );
  }

  const ignoredIndexes = new Set<number>();
  for (let i = 0; i < releasePlan.releases.length; i++) {
    if (isPackageIgnored(releasePlan.releases[i].name, ignorePatterns)) {
      ignoredIndexes.add(i);
    }
  }

  for (let i = 0; i < releasePlan.releases.length; i++) {
    if (ignoredIndexes.has(i)) {
      continue;
    }

    const q = releasePlan.releases[i];
    if (releaseType === "main" && q.type === "patch") {
      q.type = "minor";
      const suffix = q.newVersion.split("-")[1];
      q.newVersion = inc(q.oldVersion, "minor")!;
      if (suffix) {
        // restore suffix
        q.newVersion += `-${suffix}`;
      }
    }
  }

  releasePlan.releases = releasePlan.releases.filter((_, index) =>
    !ignoredIndexes.has(index)
  );
}
