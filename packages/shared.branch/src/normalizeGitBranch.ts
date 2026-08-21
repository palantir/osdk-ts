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

const NON_BRANCH: ReadonlySet<string> = new Set(["main", "master", "HEAD"]);

/**
 * The Foundry branch a git branch corresponds to: `branch` trimmed, or
 * `undefined` if it is blank or names no branch (`main`/`master`/detached HEAD).
 */
export function normalizeGitBranch(
  branch: string | undefined,
): string | undefined {
  const trimmed = branch?.trim();
  if (trimmed == null || trimmed === "" || NON_BRANCH.has(trimmed)) {
    return undefined;
  }
  return trimmed;
}
