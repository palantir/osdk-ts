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
import { FailedWithUserMessage } from "./FailedWithUserMessage.js";

export function demoteChangesetsForStableRelease(
  changesets: NewChangeset[],
): void {
  for (const changeset of changesets) {
    for (const release of changeset.releases) {
      if (release.type === "major") {
        throw new FailedWithUserMessage(
          `Major changes are not allowed outside of prerelease mode.`,
        );
      }
      if (release.type === "minor") {
        release.type = "patch";
      }
    }
  }
}
