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
  mkdirSync,
  mkdtempSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import {
  createServer,
  type ConfigEnv,
  type Plugin,
  type ResolvedConfig,
  type UserConfig,
} from "vite";
import { afterEach, describe, expect, it } from "vitest";

import { branchPlugin, FOUNDRY_BRANCH_ENV_VAR } from "./branchPlugin.js";

const GIT_BRANCH = "zka/my-branch";

const tempDirs: string[] = [];

function makeProjectDir(envFiles: Record<string, string> = {}): string {
  const dir = mkdtempSync(
    path.join(realpathSync(tmpdir()), "osdk-branch-plugin-"),
  );
  tempDirs.push(dir);
  for (const [name, contents] of Object.entries(envFiles)) {
    writeFileSync(path.join(dir, name), contents);
  }
  return dir;
}

async function runConfigHook(
  plugin: Plugin,
  config: UserConfig,
  mode = "development",
): Promise<void> {
  const hook = plugin.config;
  if (typeof hook !== "function") {
    throw new TypeError("expected config to be a function hook");
  }
  const env: ConfigEnv = {
    command: "serve",
    mode,
    isSsrBuild: false,
    isPreview: false,
  };
  await hook(config, env);
}

function runConfigResolvedHook(plugin: Plugin): string[] {
  const hook = plugin.configResolved;
  if (typeof hook !== "function") {
    throw new TypeError("expected configResolved to be a function hook");
  }
  const messages: string[] = [];
  hook({
    logger: { info: (msg: string) => messages.push(msg) },
  } as unknown as ResolvedConfig);
  return messages;
}

function pluginOn(gitBranch: string | undefined): Plugin {
  return branchPlugin({ readGitBranch: () => Promise.resolve(gitBranch) });
}

afterEach(() => {
  Reflect.deleteProperty(process.env, FOUNDRY_BRANCH_ENV_VAR);
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe(branchPlugin, () => {
  it("only applies to the dev server", () => {
    expect(branchPlugin().apply).toBe("serve");
  });

  it("injects the current git branch", async () => {
    await runConfigHook(pluginOn(GIT_BRANCH), { root: makeProjectDir() });

    expect(process.env[FOUNDRY_BRANCH_ENV_VAR]).toBe(GIT_BRANCH);
  });

  it("injects nothing on main", async () => {
    await runConfigHook(pluginOn("main"), { root: makeProjectDir() });

    expect(process.env[FOUNDRY_BRANCH_ENV_VAR]).toBeUndefined();
  });

  it("injects nothing when the directory is not a repository", async () => {
    await runConfigHook(pluginOn(undefined), { root: makeProjectDir() });

    expect(process.env[FOUNDRY_BRANCH_ENV_VAR]).toBeUndefined();
  });

  it("does not overwrite a branch pinned in a .env file", async () => {
    const root = makeProjectDir({
      ".env.development": `${FOUNDRY_BRANCH_ENV_VAR}=ri.foundry.main.branch.pinned\n`,
    });

    await runConfigHook(pluginOn(GIT_BRANCH), { root });

    expect(process.env[FOUNDRY_BRANCH_ENV_VAR]).toBeUndefined();
  });

  it("does not overwrite a blank value in a .env file", async () => {
    const root = makeProjectDir({
      ".env.development": `${FOUNDRY_BRANCH_ENV_VAR}=   \n`,
    });

    await runConfigHook(pluginOn(GIT_BRANCH), { root });

    expect(process.env[FOUNDRY_BRANCH_ENV_VAR]).toBeUndefined();
  });

  it("does not overwrite a branch already in process.env", async () => {
    process.env[FOUNDRY_BRANCH_ENV_VAR] = "ri.foundry.main.branch.from-ci";

    await runConfigHook(pluginOn(GIT_BRANCH), { root: makeProjectDir() });

    expect(process.env[FOUNDRY_BRANCH_ENV_VAR]).toBe(
      "ri.foundry.main.branch.from-ci",
    );
  });

  it("reads .env files from a relative envDir", async () => {
    const root = makeProjectDir();
    mkdirSync(path.join(root, "config"));
    writeFileSync(
      path.join(root, "config", ".env.development"),
      `${FOUNDRY_BRANCH_ENV_VAR}=ri.foundry.main.branch.pinned\n`,
    );

    await runConfigHook(pluginOn(GIT_BRANCH), { root, envDir: "config" });

    expect(process.env[FOUNDRY_BRANCH_ENV_VAR]).toBeUndefined();
  });

  it("reports the injected branch through Vite's logger", async () => {
    const plugin = pluginOn(GIT_BRANCH);
    await runConfigHook(plugin, { root: makeProjectDir() });

    expect(runConfigResolvedHook(plugin)).toEqual([
      expect.stringContaining(GIT_BRANCH),
    ]);
  });

  it("stays quiet when nothing is injected", async () => {
    const plugin = pluginOn("main");
    await runConfigHook(plugin, { root: makeProjectDir() });

    expect(runConfigResolvedHook(plugin)).toEqual([]);
  });
});

describe("injection reaches import.meta.env", () => {
  it("substitutes the branch into a served module", async () => {
    const root = makeProjectDir();
    writeFileSync(
      path.join(root, "read.js"),
      [
        `const KEY = ${JSON.stringify(FOUNDRY_BRANCH_ENV_VAR)};`,
        `function getEnv() { return import.meta.env; }`,
        `export const branch = getEnv()?.[KEY];`,
      ].join("\n"),
    );

    const server = await createServer({
      root,
      configFile: false,
      logLevel: "silent",
      plugins: [pluginOn(GIT_BRANCH)],
    });
    try {
      const result =
        await server.environments.client.transformRequest("/read.js");

      expect(result?.code).toContain(
        `"${FOUNDRY_BRANCH_ENV_VAR}": "${GIT_BRANCH}"`,
      );
    } finally {
      await server.close();
    }
  });
});
