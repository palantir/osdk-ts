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
import chalk from "chalk";
import * as path from "node:path";
import { inc } from "semver";
import { FailedWithUserMessage } from "./FailedWithUserMessage.js";

export function mutateReleasePlan(
  cwd: string,
  releasePlan: ReleasePlan,
  releaseType: "release branch" | "main",
): void {
  let bulkErrorMsg = "";
  for (const changeSet of releasePlan.changesets) {
    let errorStarted = false;
    for (const release of changeSet.releases) {
      if (releaseType === "main" && release.type === "patch") {
        release.type = "minor";
      } else if (
        releaseType === "release branch" && (release.type !== "patch")
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

  for (const q of releasePlan.releases) {
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
}
