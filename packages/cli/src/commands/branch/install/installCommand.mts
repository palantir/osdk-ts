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

import { promises as fs } from "node:fs";

import { ExitProcessError } from "@osdk/cli.common";
import { consola } from "consola";

import { getGitBranch as defaultGetGitBranch } from "../utils/getGitBranch.js";
import {
  resolveBranchedPackages,
  resolveFoundryBranch,
  type ResolveDeps,
} from "../utils/resolveBranchedPackages.mjs";
import {
  npmDistTags as defaultNpmDistTags,
  npmInstall as defaultNpmInstall,
} from "../utils/runNpm.js";
import type { InstallArgs } from "./InstallArgs.js";

export interface InstallDeps extends ResolveDeps {
  npmInstall: (
    specs: ReadonlyArray<{ pkg: string; version: string }>
  ) => Promise<void>;
}

export default async function installCommand(
  args: InstallArgs,
  overrides: Partial<InstallDeps> = {}
): Promise<void> {
  const deps: InstallDeps = {
    getGitBranch: defaultGetGitBranch,
    npmDistTags: defaultNpmDistTags,
    npmInstall: defaultNpmInstall,
    readFile: (p) => fs.readFile(p, "utf-8"),
    cwd: process.cwd(),
    ...overrides,
  };

  const branch = await resolveFoundryBranch(args, deps);
  if (branch == null) {
    consola.info(
      "On main or no determinable branch — nothing to sync. Use --branchName to force."
    );
    return;
  }

  const packages = await resolveBranchedPackages(branch, args, deps);
  if (packages.length === 0) {
    consola.info(`No branched release for "${branch}" yet — nothing to sync.`);
    return;
  }

  // Only install packages whose declared version differs from the resolved branched version.
  const toInstall = packages.filter((p) => p.current !== p.version);
  const alreadyInSync = packages.length - toInstall.length;

  if (toInstall.length === 0) {
    consola.info(
      `All ${packages.length} branched SDK(s) already in sync for "${branch}".`
    );
    return;
  }

  if (args.dryRun) {
    for (const p of toInstall) {
      consola.info(
        `Would install ${p.pkg}@${p.version} (currently ${p.current ?? "unset"}).`
      );
    }
    return;
  }

  try {
    await deps.npmInstall(
      toInstall.map((p) => ({ pkg: p.pkg, version: p.version }))
    );
  } catch (e) {
    const detail =
      e instanceof Error
        ? ((e as { stderr?: string }).stderr ?? e.message)
        : String(e);
    throw new ExitProcessError(
      1,
      `Failed to install ${toInstall.length} branched SDK(s).`,
      `Check your network and .npmrc registry auth (FOUNDRY_TOKEN), then re-run.\n${detail}`,
      e instanceof Error ? e : undefined
    );
  }
  for (const p of toInstall) {
    consola.success(`${p.pkg}: ${p.current ?? "unset"} → ${p.version}`);
  }
  consola.success(
    `Synced ${toInstall.length} branched SDK(s)${
      alreadyInSync > 0 ? ` (${alreadyInSync} already in sync)` : ""
    }`
  );
}
