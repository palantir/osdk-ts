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

import { ExitProcessError } from "@osdk/cli.common";

import { chooseDistTag } from "./chooseDistTag.js";
import type { DiscoveredOsdkPackage } from "./discoverOsdkPackages.mjs";

/** An SDK package with its resolved target version and currently-declared version. */
export interface SdkPackageVersion {
  pkg: string;
  version: string;
  current: string | undefined;
}

export interface ResolveSdkPackageVersionsDeps {
  npmDistTags: (pkg: string) => Promise<Record<string, string>>;
}

/**
 * For each candidate, read its published dist tags and pick the target version
 * via `chooseDistTag` (branch release for `branch`, else stable when currently
 * branched). Candidates with no matching tag (or not resolvable) are dropped.
 * `current` carries the declared version so the caller can skip in-sync packages.
 */
export async function resolveSdkPackageVersions(
  candidates: ReadonlyArray<DiscoveredOsdkPackage>,
  branch: string | undefined,
  deps: ResolveSdkPackageVersionsDeps
): Promise<SdkPackageVersion[]> {
  const resolved: SdkPackageVersion[] = [];
  for (const c of candidates) {
    let tags: Record<string, string>;
    try {
      tags = await deps.npmDistTags(c.name);
    } catch (e) {
      if (isNotFound(e)) continue;
      throw mapNpmViewError(e, c.name);
    }

    const tagName = chooseDistTag({
      branch,
      isBranchedSdk: c.branch != null,
      availableTags: Object.keys(tags),
    });
    if (tagName == null) continue;
    const version = tags[tagName];
    if (version == null) continue;

    resolved.push({ pkg: c.name, version, current: c.declaredVersion });
  }
  return resolved;
}

function isNotFound(e: unknown): boolean {
  const detail = e instanceof Error ? e.message : String(e);
  return /E404|404 Not Found/iu.test(detail);
}

function mapNpmViewError(e: unknown, pkg: string): ExitProcessError {
  const detail = e instanceof Error ? e.message : String(e);
  if (/E401|Unauthorized/iu.test(detail)) {
    return new ExitProcessError(
      1,
      `Not authorized to read ${pkg}.`,
      "Ensure FOUNDRY_TOKEN is set and your .npmrc registry is correct.",
      e instanceof Error ? e : undefined
    );
  }
  return new ExitProcessError(1, `Failed to read dist tags for ${pkg}.`);
}
