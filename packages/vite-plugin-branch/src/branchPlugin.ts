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

import { loadEnv, type Plugin, type ResolvedConfig } from "vite";

import { getGitBranch } from "./getGitBranch.js";
import { normalizeGitBranch } from "./normalizeGitBranch.js";

/**
 * The server-only environment variable used to override the Foundry branch
 * injected into the application HTML.
 */
export const FOUNDRY_BRANCH_ENV_VAR: string = "FOUNDRY_BRANCH_RID";

const FOUNDRY_BRANCH_META_NAME = "osdk-foundry-branch-rid";

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
 * Makes the current global Foundry branch available to `@osdk/client` by
 * injecting it into the application HTML.
 *
 * A server-side {@link FOUNDRY_BRANCH_ENV_VAR} value takes precedence.
 * Otherwise, the plugin uses the checked-out git branch. `main`, `master`, a
 * detached HEAD, and a directory outside a git repository use the default
 * Foundry branch. During development, switching git branches reloads connected
 * pages so they receive fresh HTML without restarting the dev server.
 *
 * @example
 * ```ts
 * export default defineConfig({ plugins: [react(), branchPlugin()] });
 * ```
 */
export function branchPlugin(options: BranchPluginOptions = {}): Plugin {
  const readGitBranch = options.readGitBranch ?? getGitBranch;
  let root = process.cwd();
  let mode = "development";
  let envDir: string | false = root;
  let logger: ResolvedConfig["logger"] | undefined;
  let lastReportedBranch: string | null | undefined;

  return {
    name: "osdk-branch",

    configResolved(config) {
      root = config.root;
      mode = config.mode;
      envDir = config.envDir;
      logger = config.logger;
    },

    applyToEnvironment(environment) {
      if (
        environment.name === "client" &&
        environment.config.command === "serve"
      ) {
        return branchPollingPlugin(readGitBranch);
      }
      return true;
    },

    async transformIndexHtml() {
      const configuredBranch = loadEnv(mode, envDir, FOUNDRY_BRANCH_ENV_VAR)[
        FOUNDRY_BRANCH_ENV_VAR
      ];
      const branch =
        (configuredBranch === undefined
          ? normalizeGitBranch(await readGitBranch(root))
          : normalizeGitBranch(configuredBranch)) ?? null;

      if (branch !== lastReportedBranch) {
        lastReportedBranch = branch;
        if (branch != null) {
          logger?.info(
            `Using Foundry branch "${branch}". Set ${FOUNDRY_BRANCH_ENV_VAR} to override.`,
          );
        }
      }

      return [
        {
          tag: "meta",
          attrs: {
            name: FOUNDRY_BRANCH_META_NAME,
            content: branch ?? "",
          },
          injectTo: "head-prepend",
        },
      ];
    },
  };
}

function branchPollingPlugin(
  readGitBranch: (cwd: string) => Promise<string | undefined>,
): Plugin {
  let closed = false;
  let timer: ReturnType<typeof setTimeout> | undefined;

  return {
    name: "osdk-branch:poll",

    async buildStart() {
      const { environment } = this;
      if (environment.mode !== "dev") return;
      const { config, hot, logger } = environment;
      let previousBranch = await readGitBranch(config.root);

      function schedule(): void {
        if (closed) return;
        timer = setTimeout(() => void poll(), 1000).unref();
      }

      async function poll(): Promise<void> {
        try {
          const branch = await readGitBranch(config.root);
          if (closed || branch == null || branch === previousBranch) return;

          previousBranch = branch;
          hot.send({ type: "full-reload" });
        } catch (error) {
          if (!closed) {
            logger.error(
              `Unable to check for a git branch change: ${error instanceof Error ? error.message : String(error)}`,
            );
          }
        } finally {
          schedule();
        }
      }

      schedule();
    },

    closeBundle() {
      closed = true;
      clearTimeout(timer);
    },
  };
}
