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

import {
  type DevEnvironment,
  loadEnv,
  type Logger,
  type Plugin,
  type ResolvedConfig,
} from "vite";

import { getGitBranch } from "./getGitBranch.js";

/**
 * The server-only environment variable used to override the Foundry branch
 * injected into the application HTML.
 */
export const FOUNDRY_BRANCH_ENV_VAR = "FOUNDRY_BRANCH_RID";

const FOUNDRY_BRANCH_META_NAME = "osdk-foundry-branch-rid";

/** `@osdk/client` reads empty metadata as "use the default Foundry branch". */
const DEFAULT_FOUNDRY_BRANCH = "";

// Fail dev requests on unknown Git branches to avoid reading the default branch.
const UNRESOLVABLE_BRANCH_RID = "ri.branch..branch.unknown";

const DEFAULT_BRANCH_ALIASES: ReadonlySet<string> = new Set(["main", "master"]);

const POLL_INTERVAL_MS = 1000;

type ReadGitBranch = (cwd: string) => Promise<string | undefined>;

export interface BranchPluginOptions {
  /**
   * Overrides how the git branch is read, for tests. Production callers should
   * leave this unset.
   *
   * @internal
   */
  readGitBranch?: ReadGitBranch;
}

/**
 * Makes the current global Foundry branch available to `@osdk/client` by
 * injecting it into the application HTML.
 *
 * A server-side {@link FOUNDRY_BRANCH_ENV_VAR} value always wins. Otherwise
 * the checked-out git branch is used, except that `main` and `master` mean the
 * default Foundry branch. When git names no branch — a detached HEAD, or no
 * repository at all — development servers use an unresolvable branch rid and
 * production builds use the default Foundry branch.
 *
 * Switching git branches during development reloads connected pages so they
 * pick up fresh HTML without restarting the dev server.
 *
 * @example
 * ```ts
 * export default defineConfig({ plugins: [react(), branchPlugin()] });
 * ```
 */
export function branchPlugin(options: BranchPluginOptions = {}): Plugin[] {
  const readGitBranch = options.readGitBranch ?? getGitBranch;
  let config: ResolvedConfig;
  let lastReportedBranch: string | undefined;

  return [
    {
      name: "osdk-branch",

      configResolved(resolved) {
        config = resolved;
      },

      async transformIndexHtml() {
        const branch =
          readBranchOverride(config) ??
          (await readBranchFromGit(config, readGitBranch));

        if (branch !== lastReportedBranch) {
          lastReportedBranch = branch;
          reportBranch(config.logger, branch);
        }

        return [
          {
            tag: "meta",
            attrs: { name: FOUNDRY_BRANCH_META_NAME, content: branch },
            injectTo: "head-prepend",
          },
        ];
      },
    },
    {
      name: "osdk-branch-reload",
      apply: "serve",

      applyToEnvironment: (environment) =>
        environment.name === "client" && branchReloadPlugin(readGitBranch),
    },
  ];
}

function readBranchOverride(config: ResolvedConfig): string | undefined {
  return loadEnv(config.mode, config.envDir, FOUNDRY_BRANCH_ENV_VAR)[
    FOUNDRY_BRANCH_ENV_VAR
  ]?.trim();
}

async function readBranchFromGit(
  config: ResolvedConfig,
  readGitBranch: ReadGitBranch,
): Promise<string> {
  const branch = (
    await readGitBranch(config.root).catch(() => undefined)
  )?.trim();

  if (branch == null || branch === "") {
    return config.command === "serve"
      ? UNRESOLVABLE_BRANCH_RID
      : DEFAULT_FOUNDRY_BRANCH;
  }
  return DEFAULT_BRANCH_ALIASES.has(branch) ? DEFAULT_FOUNDRY_BRANCH : branch;
}

function reportBranch(logger: Logger, branch: string): void {
  const override = `Set ${FOUNDRY_BRANCH_ENV_VAR} to override.`;

  if (branch === UNRESOLVABLE_BRANCH_RID) {
    logger.warn(
      `Could not read a git branch, so Foundry requests will fail rather than ` +
        `read the default branch. Check out a branch, or set ` +
        `${FOUNDRY_BRANCH_ENV_VAR}.`,
    );
  } else if (branch === DEFAULT_FOUNDRY_BRANCH) {
    logger.info(`Using the default Foundry branch. ${override}`);
  } else {
    logger.info(`Using Foundry branch "${branch}". ${override}`);
  }
}

function branchReloadPlugin(readGitBranch: ReadGitBranch): Plugin {
  const stopped = new AbortController();

  return {
    name: "osdk-branch-reload:client",

    buildStart() {
      const { environment } = this;
      if (environment.mode !== "dev") return;

      void reloadOnBranchChange(
        environment,
        readGitBranch,
        stopped.signal,
      ).catch((error: unknown) => {
        environment.logger.error(
          `Stopped watching for git branch changes: ${String(error)}`,
        );
      });
    },

    closeBundle() {
      stopped.abort();
    },
  };
}

async function reloadOnBranchChange(
  environment: DevEnvironment,
  readGitBranch: ReadGitBranch,
  stopped: AbortSignal,
): Promise<void> {
  const { config, hot } = environment;

  // Vite restarts the dev server when a .env file changes, so an override
  // cannot change underneath a running poller.
  if (readBranchOverride(config) !== undefined) return;

  let injectedBranch = await readBranchFromGit(config, readGitBranch);

  while (!stopped.aborted) {
    await sleep(POLL_INTERVAL_MS);
    if (stopped.aborted) return;

    const branch = await readBranchFromGit(config, readGitBranch);
    if (stopped.aborted) return;
    if (branch === injectedBranch) continue;

    injectedBranch = branch;
    hot.send({ type: "full-reload" });
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => void setTimeout(resolve, ms).unref());
}
