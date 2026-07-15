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

/**
 * Pick the npm dist tag for `branch` from a package's published tags, or
 * `undefined` when the branch has no published tag on this package.
 *
 * A branched SDK is published under the exact tag `${branch}-latest`.
 * Anything else yields `undefined` (no branched release for this branch). To
 * target a specific branch, pass `--branchName`.
 */
export function selectDistTag({
  branch,
  availableTags,
}: {
  branch: string;
  availableTags: string[];
}): string | undefined {
  const exact = `${branch}-latest`;
  return availableTags.includes(exact) ? exact : undefined;
}
