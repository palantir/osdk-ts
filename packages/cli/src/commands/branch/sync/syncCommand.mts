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

import { consola } from "consola";

import { applyTargets } from "../utils/applyTargets.mjs";
import { discoverOsdkPackages } from "../utils/discoverOsdkPackages.mjs";
import { getGitBranch as defaultGetGitBranch } from "../utils/getGitBranch.js";
import { resolveBranch } from "../utils/resolveBranch.js";
import { resolveTargets } from "../utils/resolveTargets.mjs";
import {
  npmDistTags as defaultNpmDistTags,
  npmInstall as defaultNpmInstall,
} from "../utils/runNpm.js";
import type { SyncArgs } from "./SyncArgs.js";

export interface SyncDeps {
  cwd: string;
  readFile: (p: string) => Promise<string>;
  getGitBranch: () => Promise<string | undefined>;
  npmDistTags: (pkg: string) => Promise<Record<string, string>>;
  npmInstall: (
    specs: ReadonlyArray<{ pkg: string; version: string }>
  ) => Promise<void>;
}

export default async function syncCommand(
  args: SyncArgs,
  overrides: Partial<SyncDeps> = {}
): Promise<void> {
  const deps: SyncDeps = {
    cwd: process.cwd(),
    readFile: (p) => fs.readFile(p, "utf-8"),
    getGitBranch: defaultGetGitBranch,
    npmDistTags: defaultNpmDistTags,
    npmInstall: defaultNpmInstall,
    ...overrides,
  };

  // Branch context: a Foundry branch, or `undefined` off a branch (main/detached).
  const branch = resolveBranch(args.branchName, await deps.getGitBranch());

  const discovered = await discoverOsdkPackages(deps);
  let candidates = discovered;
  if (args.packageName != null) {
    candidates = candidates.filter((c) => c.name === args.packageName);
  }
  if (candidates.length === 0) {
    consola.info("No SDKs found among dependencies, nothing to sync.");
    return;
  }

  const targets = await resolveTargets(candidates, branch, deps);
  if (targets.length === 0) {
    consola.info("Nothing to sync.");
    return;
  }

  const toInstall = targets.filter((t) => t.current !== t.version);
  const alreadyInSync = targets.length - toInstall.length;
  if (toInstall.length === 0) {
    consola.info(`All ${targets.length} SDK(s) already in sync.`);
    return;
  }

  await applyTargets(toInstall, args, deps, alreadyInSync);
}
