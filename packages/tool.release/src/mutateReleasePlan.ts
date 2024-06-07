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
import { inc } from "semver";
import { FailedWithUserMessage } from "./FailedWithUserMessage.js";

export function mutateReleasePlan(
  releasePlan: ReleasePlan,
  releaseType: "patch" | "main",
): void {
  for (const changeSet of releasePlan.changesets) {
    for (const release of changeSet.releases) {
      if (releaseType === "main" && release.type === "patch") {
        release.type = "minor";
      } else if (
        releaseType === "patch" && (release.type !== "patch")
        && (release.type !== "none")
      ) {
        throw new FailedWithUserMessage(
          `Releasing requires converting a ${release.type} to a patch, but that may not be safe.`,
        );
      }
    }
  }

  for (const q of releasePlan.releases) {
    if (releaseType === "main" && q.type === "patch") {
      q.type = "minor";
      q.newVersion = inc(q.oldVersion, "minor")!;
    }
  }
}
