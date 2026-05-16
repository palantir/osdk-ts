/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Package } from "@manypkg/get-packages";
import { getPackages } from "@manypkg/get-packages";
import { consola } from "consola";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import pMap from "p-map";
import { packageVersionsOrEmptySet } from "./publishPackages.js";

export interface UnreleasablePackage {
  name: string;
  dir: string;
  version: string;
}

export type LookupVersions = (name: string) => Promise<Set<string>>;

const NPM_LOOKUP_CONCURRENCY = 4;

export async function findUnreleasablePackagesFromList(
  packages: Package[],
  lookupVersions: LookupVersions = packageVersionsOrEmptySet,
): Promise<UnreleasablePackage[]> {
  const publicPackages = packages.filter((pkg) => !pkg.packageJson.private);
  const results = await pMap(publicPackages, async (pkg) => {
    const { name, version } = pkg.packageJson;
    let versions: Set<string>;
    try {
      versions = await lookupVersions(name);
    } catch (e) {
      // Transient registry failure: assume the package is published so we
      // don't mark it private (release) or fail the PR check on flaky npm.
      consola.warn(
        `Could not check npm versions for ${name} (${
          String(e)
        }); assuming published`,
      );
      return null;
    }
    if (versions.size > 0) {
      return null;
    }
    return { name, dir: pkg.dir, version };
  }, { concurrency: NPM_LOOKUP_CONCURRENCY });
  return results.filter((r): r is UnreleasablePackage => r != null);
}

export async function findUnreleasablePackages(
  cwd: string,
  lookupVersions: LookupVersions = packageVersionsOrEmptySet,
): Promise<UnreleasablePackage[]> {
  const { packages } = await getPackages(cwd);
  return findUnreleasablePackagesFromList(packages, lookupVersions);
}

export async function markPackagesPrivate(
  packages: UnreleasablePackage[],
): Promise<void> {
  for (const pkg of packages) {
    const pkgJsonPath = path.join(pkg.dir, "package.json");
    const raw = await fs.readFile(pkgJsonPath, "utf-8");
    const trailingNewline = raw.endsWith("\n") ? "\n" : "";
    const parsed = JSON.parse(raw);
    parsed.private = true;
    await fs.writeFile(
      pkgJsonPath,
      JSON.stringify(parsed, null, 2) + trailingNewline,
    );
    consola.warn(
      `Skipping unreleasable package ${pkg.name}: no versions found on npm. `
        + `A maintainer must manually publish a placeholder version and configure `
        + `trusted publishing before this package can release.`,
    );
  }
}
