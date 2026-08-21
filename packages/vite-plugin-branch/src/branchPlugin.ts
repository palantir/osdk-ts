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

import path from "node:path";

import { getGitBranch } from "@osdk/shared.branch";
import { loadEnv, type Plugin } from "vite";

import { resolveBranchToInject } from "./resolveBranchToInject.js";

/**
 * The environment variable a Foundry runtime sets to the branch the application
 * is checked out on. `@osdk/client` reads it to scope every request.
 */
export const FOUNDRY_BRANCH_RID_ENV_VAR: string = "VITE_FOUNDRY_BRANCH_RID";

export interface BranchPluginOptions {
  /**
   * Overrides how the git branch is read, for tests. Production callers should
   * leave this unset.
   *
   * @internal
   */
  readGitBranch?: (cwd: string) => Promise<string | undefined>;
}

/**
 * Vite plugin that makes local development branch-aware.
 *
 * On dev server start it sets {@link FOUNDRY_BRANCH_RID_ENV_VAR} to the checked
 * out git branch name, so `@osdk/client` scopes objects, actions, and queries to
 * the matching Foundry branch without the application passing anything to
 * `createClient`. This relies on the git branch name matching the Foundry
 * branch, which holds for a branch checked out with `osdk unstable branch`.
 *
 * Nothing is injected when the variable already has a value, when git reports
 * `main`/`master`/a detached HEAD, or when the directory is not a git
 * repository — in each case the client falls back to the default branch.
 *
 * @example
 * ```ts
 * export default defineConfig({ plugins: [react(), branchPlugin()] });
 * ```
 */
export function branchPlugin(options: BranchPluginOptions = {}): Plugin {
  const readGitBranch = options.readGitBranch ?? getGitBranch;
  let injectedBranch: string | undefined;

  return {
    name: "osdk-branch",
    apply: "serve",

    async config(config, { mode }) {
      const root = path.resolve(config.root ?? process.cwd());
      const envDir =
        config.envDir === false
          ? false
          : path.resolve(root, config.envDir ?? ".");

      const pinnedBranch = loadEnv(mode, envDir, "VITE_")[
        FOUNDRY_BRANCH_RID_ENV_VAR
      ];

      injectedBranch = resolveBranchToInject(
        pinnedBranch,
        await readGitBranch(root),
      );
      if (injectedBranch === undefined) {
        return;
      }

      process.env[FOUNDRY_BRANCH_RID_ENV_VAR] = injectedBranch;
    },

    configResolved(config) {
      if (injectedBranch !== undefined) {
        config.logger.info(
          `[osdk] Using Foundry branch "${injectedBranch}" from the current git ` +
            `branch. Set ${FOUNDRY_BRANCH_RID_ENV_VAR} to override.`,
        );
      }
    },
  };
}
