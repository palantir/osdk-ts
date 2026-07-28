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

import { dirname } from "node:path";

import { ExitProcessError } from "@osdk/cli.common";
import { findUp } from "find-up";
import resolvePackagePath from "resolve-package-path";

import type { OsdkPackageJson } from "./OsdkPackageJson.js";

/** A single OSDK-generated SDK found among the project's immediate deps. */
export interface DiscoveredOsdkPackage {
  name: string;
  /** Version of the installed package. */
  installedVersion: string;
  /** `osdk.branch` (a branch RID); present only on branched releases. */
  branch: string | undefined;
  /** Version declared in the root package.json, or `undefined` if absent. */
  declaredVersion: string | undefined;
}

export interface DiscoverDeps {
  cwd: string;
  readFile: (p: string) => Promise<string>;
}

/**
 * Discover the OSDKs a project consumes by reading the `osdk`
 * metadata block from each **immediate** dependency's installed package.json.
 *
 * A dependency is treated as an OSDK when its installed package.json carries
 * an `osdk` object. Non-recursive: only the root package.json's `dependencies` are inspected.
 */
export async function discoverOsdkPackages(
  deps: DiscoverDeps
): Promise<DiscoveredOsdkPackage[]> {
  const rootPath = await findUp("package.json", { cwd: deps.cwd });
  if (rootPath == null) {
    throw new ExitProcessError(
      1,
      "Could not find a package.json in the current directory or any parent.",
      "Run `@osdk/cli unstable branch sync` from within your project."
    );
  }

  let root: OsdkPackageJson;
  try {
    root = JSON.parse(await deps.readFile(rootPath)) as OsdkPackageJson;
  } catch (e) {
    throw new ExitProcessError(
      1,
      `Could not read ${rootPath}.`,
      "Ensure it is valid JSON.",
      e instanceof Error ? e : undefined
    );
  }

  const baseDir = dirname(rootPath);
  const found: DiscoveredOsdkPackage[] = [];
  for (const [name, declaredVersion] of Object.entries(
    root.dependencies ?? {}
  )) {
    const installedPath = resolvePackageJsonPath(name, baseDir);
    if (installedPath == null) continue;

    let installed: OsdkPackageJson;
    try {
      installed = JSON.parse(
        await deps.readFile(installedPath)
      ) as OsdkPackageJson;
    } catch {
      continue; // unreadable installed package.json — skip
    }
    if (installed.osdk == null) continue;

    found.push({
      name,
      installedVersion: installed.version,
      branch: installed.osdk.branch,
      declaredVersion,
    });
  }
  return found;
}

/**
 * Resolve a dependency's installed `package.json` path from `baseDir`
 * (pnpm/hoist-aware). `undefined` when the dependency is not installed.
 */
function resolvePackageJsonPath(
  name: string,
  baseDir: string
): string | undefined {
  return resolvePackagePath(name, baseDir) ?? undefined;
}
