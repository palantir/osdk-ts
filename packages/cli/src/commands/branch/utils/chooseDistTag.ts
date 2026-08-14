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
 * Pick the npm dist tag to pin an OSDK to:
 * - on a branch → that branch's latest release (`${branch}-latest`) if published, else leave it as-is;
 * - off a branch → stable `latest` if the SDK is currently branched, else leave it as-is.
 *
 * So a branched SDK is reset to stable only off a branch, never while on one.
 */
export function chooseDistTag({
  branch,
  isBranchedSdk,
  availableTags,
}: {
  branch: string | undefined;
  isBranchedSdk: boolean;
  availableTags: string[];
}): string | undefined {
  if (branch != null) {
    const branchTag = `${branch}-latest`;
    return availableTags.includes(branchTag) ? branchTag : undefined;
  }
  if (isBranchedSdk && availableTags.includes("latest")) {
    return "latest";
  }
  return undefined;
}
