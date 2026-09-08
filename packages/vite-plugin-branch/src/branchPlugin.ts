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

import { loadEnv, type Plugin } from "vite";

import { getGitBranch } from "./getGitBranch.js";
import { normalizeGitBranch } from "./normalizeGitBranch.js";

/**
 * The environment variable used to expose either a Foundry branch RID or a
 * local git branch name to `@osdk/client`.
 */
export const FOUNDRY_BRANCH_ENV_VAR: string = "VITE_FOUNDRY_BRANCH_RID";

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
 * Makes the current global Foundry branch available to `@osdk/client` through
 * `import.meta.env.VITE_FOUNDRY_BRANCH_RID` during local development.
 *
 * An existing environment value takes precedence. Otherwise, the plugin uses
 * the checked-out git branch, except for `main`, `master`, a detached HEAD, or
 * a directory outside a git repository, which use the default Foundry branch.
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

      const configuredBranch = loadEnv(mode, envDir, "VITE_")[
        FOUNDRY_BRANCH_ENV_VAR
      ];
      if (configuredBranch?.trim() != null) {
        return;
      }

      injectedBranch = normalizeGitBranch(await readGitBranch(root));
      if (injectedBranch == null) {
        return;
      }

      process.env[FOUNDRY_BRANCH_ENV_VAR] = injectedBranch;
    },

    configResolved(config) {
      if (injectedBranch != null) {
        config.logger.info(
          `Using Foundry branch "${injectedBranch}". Set ${FOUNDRY_BRANCH_ENV_VAR} to override.`,
        );
      }
    },
  };
}
