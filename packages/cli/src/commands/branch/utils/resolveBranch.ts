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

const NON_BRANCH = new Set(["main", "master", "HEAD"]);

/**
 * Resolve the branch context: `argBranchName` wins; else `gitBranchName`, with
 * main/master/detached `HEAD`/empty normalized to `undefined`.
 */
export function resolveBranch(
  argBranchName: string | undefined,
  gitBranchName: string | undefined
): string | undefined {
  const argBranch = argBranchName?.trim();
  if (argBranch != null && argBranch !== "") {
    return argBranch;
  }
  const gitBranch = gitBranchName?.trim();
  if (gitBranch == null || gitBranch === "" || NON_BRANCH.has(gitBranch)) {
    return undefined;
  }
  return gitBranch;
}
