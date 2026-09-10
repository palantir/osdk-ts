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

// cspell:words NOSYSTEM worktree

import { execFileSync } from "node:child_process";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { devNull, tmpdir } from "node:os";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

import { build, createServer, type Plugin, type ViteDevServer } from "vite";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { branchPlugin, FOUNDRY_BRANCH_ENV_VAR } from "./branchPlugin.js";

const GIT_BRANCH = "zka/my-branch";
const META_NAME = "osdk-foundry-branch-rid";

const tempDirs: string[] = [];
const servers: ViteDevServer[] = [];

function makeProjectDir(envFiles: Record<string, string> = {}): string {
  const dir = mkdtempSync(
    path.join(realpathSync(tmpdir()), "osdk-branch-plugin-"),
  );
  tempDirs.push(dir);
  for (const [name, contents] of Object.entries(envFiles)) {
    mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    writeFileSync(path.join(dir, name), contents);
  }
  return dir;
}

function makeGitProject(files: Record<string, string> = {}) {
  const root = makeProjectDir({
    "index.html": "<html><head></head><body></body></html>",
    ...files,
  });
  const git = (...args: string[]): void => {
    execFileSync("git", args, {
      cwd: root,
      env: {
        ...process.env,
        // Test repositories must not inherit a developer's hooks or identity.
        GIT_CONFIG_GLOBAL: devNull,
        GIT_CONFIG_NOSYSTEM: "1",
        GIT_AUTHOR_NAME: "OSDK test",
        GIT_AUTHOR_EMAIL: "test@example.invalid",
        GIT_COMMITTER_NAME: "OSDK test",
        GIT_COMMITTER_EMAIL: "test@example.invalid",
      },
      stdio: "pipe",
    });
  };
  git("init", "--initial-branch", GIT_BRANCH);
  git("add", ".");
  git("commit", "-m", "Initial test commit");
  return { root, git };
}

async function startServer({
  root = makeProjectDir(),
  plugin = branchPlugin(),
  listen = true,
  middlewareMode = false,
} = {}): Promise<ViteDevServer> {
  const server = await createServer({
    root,
    configFile: false,
    logLevel: "silent",
    plugins: [plugin],
    server: { host: "127.0.0.1", port: 0, watch: null, middlewareMode },
  });
  servers.push(server);
  if (listen && !middlewareMode) await server.listen();
  return server;
}

async function readServedHtml(server: ViteDevServer): Promise<string> {
  const url = server.resolvedUrls?.local[0];
  if (url == null) throw new Error("expected a listening dev server");
  const response = await fetch(url);
  expect(response.status).toBe(200);
  return response.text();
}

function configurePlugin(
  plugin: Plugin,
  root: string,
  options: { envDir?: string | false; mode?: string } = {},
): string[] {
  const hook = plugin.configResolved;
  if (typeof hook !== "function") {
    throw new TypeError("expected configResolved to be a function hook");
  }
  const messages: string[] = [];
  Reflect.apply(hook, undefined, [
    {
      root,
      envDir: options.envDir ?? root,
      mode: options.mode ?? "development",
      logger: { info: (message: string) => messages.push(message) },
    },
  ]);
  return messages;
}

async function readInjectedMetaContent(plugin: Plugin): Promise<string> {
  const hook = plugin.transformIndexHtml;
  if (typeof hook !== "function") {
    throw new TypeError("expected transformIndexHtml to be a function hook");
  }
  const result: unknown = await Reflect.apply(hook, undefined, ["", {}]);
  if (!Array.isArray(result) || result.length !== 1) {
    throw new TypeError("expected one injected HTML tag");
  }
  const [tag] = result;
  if (
    tag.tag !== "meta" ||
    tag.injectTo !== "head-prepend" ||
    tag.attrs?.name !== META_NAME ||
    typeof tag.attrs.content !== "string"
  ) {
    throw new TypeError("expected a head-prepend branch meta tag");
  }
  return tag.attrs.content;
}

function pluginOn(gitBranch: string | undefined): Plugin {
  return branchPlugin({ readGitBranch: () => Promise.resolve(gitBranch) });
}

beforeEach(() => {
  Reflect.deleteProperty(process.env, FOUNDRY_BRANCH_ENV_VAR);
});

afterEach(async () => {
  await Promise.all(servers.splice(0).map((server) => server.close()));
  vi.useRealTimers();
  vi.restoreAllMocks();
  Reflect.deleteProperty(process.env, FOUNDRY_BRANCH_ENV_VAR);
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe(branchPlugin, () => {
  it("applies during development and production builds", () => {
    expect(branchPlugin().apply).toBeUndefined();
  });

  it("injects the current git branch into HTML", async () => {
    const plugin = pluginOn(GIT_BRANCH);
    configurePlugin(plugin, makeProjectDir());

    expect(await readInjectedMetaContent(plugin)).toBe(GIT_BRANCH);
  });

  it.each(["main", "master", "HEAD", undefined])(
    "injects an empty value for the default branch state %s",
    async (gitBranch) => {
      const plugin = pluginOn(gitBranch);
      configurePlugin(plugin, makeProjectDir());

      expect(await readInjectedMetaContent(plugin)).toBe("");
    },
  );

  it("uses a branch from a .env file instead of git", async () => {
    const configuredBranch = "ri.foundry.main.branch.pinned";
    const root = makeProjectDir({
      ".env.development": `${FOUNDRY_BRANCH_ENV_VAR}=${configuredBranch}\n`,
    });
    const readGitBranch = vi.fn(() => Promise.resolve(GIT_BRANCH));
    const plugin = branchPlugin({ readGitBranch });
    configurePlugin(plugin, root);

    expect(await readInjectedMetaContent(plugin)).toBe(configuredBranch);
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it("treats a blank .env override as the default branch", async () => {
    const root = makeProjectDir({
      ".env.development": `${FOUNDRY_BRANCH_ENV_VAR}=   \n`,
    });
    const readGitBranch = vi.fn(() => Promise.resolve(GIT_BRANCH));
    const plugin = branchPlugin({ readGitBranch });
    configurePlugin(plugin, root);

    expect(await readInjectedMetaContent(plugin)).toBe("");
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it("gives process.env precedence over .env files and git", async () => {
    const processBranch = "ri.foundry.main.branch.from-ci";
    process.env[FOUNDRY_BRANCH_ENV_VAR] = processBranch;
    const root = makeProjectDir({
      ".env.development": `${FOUNDRY_BRANCH_ENV_VAR}=from-file\n`,
    });
    const readGitBranch = vi.fn(() => Promise.resolve(GIT_BRANCH));
    const plugin = branchPlugin({ readGitBranch });
    configurePlugin(plugin, root);

    expect(await readInjectedMetaContent(plugin)).toBe(processBranch);
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it("reads .env files from the resolved envDir", async () => {
    const configuredBranch = "ri.foundry.main.branch.pinned";
    const root = makeProjectDir();
    const envDir = path.join(root, "config");
    mkdirSync(envDir);
    writeFileSync(
      path.join(envDir, ".env.development"),
      `${FOUNDRY_BRANCH_ENV_VAR}=${configuredBranch}\n`,
    );
    const plugin = pluginOn(GIT_BRANCH);
    configurePlugin(plugin, root, { envDir });

    expect(await readInjectedMetaContent(plugin)).toBe(configuredBranch);
  });

  it("resolves git again for every HTML transformation", async () => {
    let gitBranch = "first-branch";
    const plugin = branchPlugin({
      readGitBranch: () => Promise.resolve(gitBranch),
    });
    configurePlugin(plugin, makeProjectDir());

    expect(await readInjectedMetaContent(plugin)).toBe("first-branch");
    gitBranch = "second-branch";
    expect(await readInjectedMetaContent(plugin)).toBe("second-branch");
  });

  it("reports each newly resolved feature branch through Vite's logger", async () => {
    let gitBranch = "first-branch";
    const plugin = branchPlugin({
      readGitBranch: () => Promise.resolve(gitBranch),
    });
    const messages = configurePlugin(plugin, makeProjectDir());

    await readInjectedMetaContent(plugin);
    await readInjectedMetaContent(plugin);
    gitBranch = "second-branch";
    await readInjectedMetaContent(plugin);

    expect(messages).toEqual([
      expect.stringContaining("first-branch"),
      expect.stringContaining("second-branch"),
    ]);
  });

  it("preserves branch names for Vite to serialize as HTML attributes", async () => {
    const gitBranch = 'feature/"quote"><script>bad()</script>&suffix';
    const plugin = pluginOn(gitBranch);
    configurePlugin(plugin, makeProjectDir());

    expect(await readInjectedMetaContent(plugin)).toBe(gitBranch);
  });
});

describe("Vite integration", () => {
  it("prepends the branch meta tag to served HTML", async () => {
    const root = makeProjectDir();
    const html =
      '<html><head></head><body><script type="module" src="/main.js"></script></body></html>';
    const server = await createServer({
      root,
      configFile: false,
      logLevel: "silent",
      plugins: [pluginOn(GIT_BRANCH)],
    });
    try {
      const transformed = await server.transformIndexHtml("/", html);
      expect(transformed.indexOf(`name="${META_NAME}"`)).toBeLessThan(
        transformed.indexOf('src="/main.js"'),
      );
      expect(transformed).toContain(`content="${GIT_BRANCH}"`);
    } finally {
      await server.close();
    }
  });

  it("escapes the branch as inert HTML metadata", async () => {
    const gitBranch = 'feature/"quote"><script>bad()</script>&suffix';
    const root = makeProjectDir();
    const html =
      '<html><head></head><body><script type="module" src="/main.js"></script></body></html>';
    const server = await createServer({
      root,
      configFile: false,
      logLevel: "silent",
      plugins: [pluginOn(gitBranch)],
    });
    try {
      const transformed = await server.transformIndexHtml("/", html);
      expect(transformed).toContain(
        'content="feature/&quot;quote&quot;&gt;&lt;script&gt;bad()&lt;/script&gt;&amp;suffix"',
      );
      expect(transformed).not.toContain("<script>bad()</script>");
    } finally {
      await server.close();
    }
  });

  it("writes the branch to built HTML instead of JavaScript chunks", async () => {
    const buildBranch = "feature/build-branch";
    const root = makeProjectDir();
    writeFileSync(
      path.join(root, "index.html"),
      '<html><head></head><body><script type="module" src="/main.js"></script></body></html>',
    );
    writeFileSync(path.join(root, "main.js"), "globalThis.appStarted = true;");

    await build({
      root,
      configFile: false,
      logLevel: "silent",
      plugins: [pluginOn(buildBranch)],
      build: { minify: false },
    });

    const builtHtml = readFileSync(path.join(root, "dist/index.html"), "utf-8");
    expect(builtHtml).toContain(`content="${buildBranch}"`);
    expect(builtHtml.indexOf(`name="${META_NAME}"`)).toBeLessThan(
      builtHtml.indexOf('type="module"'),
    );

    const builtJavaScript = readdirSync(path.join(root, "dist/assets"))
      .filter((file) => file.endsWith(".js"))
      .map((file) =>
        readFileSync(path.join(root, "dist/assets", file), "utf-8"),
      )
      .join("\n");
    expect(builtJavaScript).not.toContain(buildBranch);
  });
});

describe("branch change reloads", () => {
  it.each([undefined, "ri.foundry.main.branch.pinned"])(
    "reloads unchanged files with fresh HTML without restarting (override: %s)",
    async (override) => {
      const { root, git } = makeGitProject(
        override == null
          ? {}
          : { ".env": `${FOUNDRY_BRANCH_ENV_VAR}=${override}\n` },
      );
      for (const branch of ["feature/b", "main", "master"])
        git("branch", branch);
      const server = await startServer({ root });
      const reload = vi.spyOn(server.ws, "send");
      const restart = vi.spyOn(server, "restart");
      const config = server.config;
      expect(await readServedHtml(server)).toContain(
        `content="${override ?? GIT_BRANCH}"`,
      );

      for (const next of ["feature/b", "main", "master", "", GIT_BRANCH]) {
        reload.mockClear();
        if (next === "") git("switch", "--detach", "HEAD");
        else git("switch", next);
        await vi.waitFor(
          () =>
            expect(reload).toHaveBeenCalledExactlyOnceWith({
              type: "full-reload",
            }),
          { timeout: 5000 },
        );
        const expected =
          override ?? (["main", "master", ""].includes(next) ? "" : next);
        expect(await readServedHtml(server)).toContain(`content="${expected}"`);
        expect(server.config).toBe(config);
      }

      reload.mockClear();
      git("commit", "--allow-empty", "-m", "Same-branch commit");
      await delay(1200);
      expect(reload).not.toHaveBeenCalled();
      expect(restart).not.toHaveBeenCalled();
    },
    15000,
  );

  it("detects the branch of a nested app in a linked worktree", async () => {
    const { git } = makeGitProject({
      "app/index.html": "<html><head></head><body></body></html>",
    });
    const worktree = makeProjectDir();
    git("worktree", "add", "-b", "feature/worktree", worktree);
    const server = await startServer({ root: path.join(worktree, "app") });
    const reload = vi.spyOn(server.ws, "send");
    expect(await readServedHtml(server)).toContain(
      'content="feature/worktree"',
    );

    git("switch", "-c", "feature/main-repo");
    await delay(1200);
    expect(reload).not.toHaveBeenCalled();

    git("-C", worktree, "switch", "-c", "feature/next");
    await vi.waitFor(
      () =>
        expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" }),
      { timeout: 5000 },
    );
    expect(await readServedHtml(server)).toContain('content="feature/next"');
  });
});

describe("branch polling lifecycle", () => {
  const readGitBranch = vi.fn<(cwd: string) => Promise<string | undefined>>();
  let branch = GIT_BRANCH;

  beforeEach(() => {
    vi.useFakeTimers();
    branch = GIT_BRANCH;
    readGitBranch.mockReset().mockImplementation(() => Promise.resolve(branch));
  });

  function start(listen = true) {
    return startServer({ plugin: branchPlugin({ readGitBranch }), listen });
  }

  it("starts polling when the client environment starts", async () => {
    const server = await start(false);
    const reload = vi.spyOn(server.ws, "send");
    await vi.advanceTimersByTimeAsync(1000);
    expect(server.httpServer?.listening).toBe(false);
    expect(readGitBranch).not.toHaveBeenCalled();

    await server.listen();
    expect(readGitBranch).toHaveBeenCalledTimes(1);
    branch = "feature/next";
    await vi.advanceTimersByTimeAsync(1000);
    expect(readGitBranch).toHaveBeenCalledTimes(2);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
  });

  it.each([true, false])(
    "does not poll after closing (started listening: %s)",
    async (listen) => {
      const server = await start(listen);
      await server.close();
      readGitBranch.mockClear();
      await vi.advanceTimersByTimeAsync(3000);
      expect(readGitBranch).not.toHaveBeenCalled();
    },
  );

  it.each([false, true])(
    "keeps one poller through restarts and stops on close (middleware: %s)",
    async (middlewareMode) => {
      const server = await startServer({
        plugin: branchPlugin({ readGitBranch }),
        middlewareMode,
      });
      for (const next of ["feature/next", "feature/latest"]) {
        await server.restart();
        const reload = vi.spyOn(server.ws, "send");
        readGitBranch.mockClear();
        branch = next;
        await vi.advanceTimersByTimeAsync(1000);
        expect(readGitBranch).toHaveBeenCalledExactlyOnceWith(
          server.config.root,
        );
        expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
      }

      await server.close();
      readGitBranch.mockClear();
      await vi.advanceTimersByTimeAsync(3000);
      expect(readGitBranch).not.toHaveBeenCalled();
    },
  );

  it("only stops the poller belonging to the closing server", async () => {
    const plugin = branchPlugin({ readGitBranch });
    const first = await startServer({ plugin });
    const second = await startServer({ plugin });
    await first.close();
    readGitBranch.mockClear();
    const reload = vi.spyOn(second.ws, "send");
    branch = "feature/next";
    await vi.advanceTimersByTimeAsync(1000);
    expect(readGitBranch).toHaveBeenCalledExactlyOnceWith(second.config.root);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
  });

  it("does not stop polling when only the SSR environment closes", async () => {
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    await server.environments.ssr.close();
    branch = "feature/next";
    await vi.advanceTimersByTimeAsync(1000);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
  });

  it("ignores unchanged branches and failed reads, but detects detached HEAD", async () => {
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    readGitBranch
      .mockResolvedValueOnce(GIT_BRANCH)
      .mockResolvedValueOnce(undefined)
      .mockResolvedValueOnce("");
    await vi.advanceTimersByTimeAsync(2000);
    expect(reload).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1000);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
  });

  it("keeps polling after a rejected Git read", async () => {
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    const error = vi.spyOn(server.environments.client.logger, "error");
    readGitBranch
      .mockRejectedValueOnce(new Error("Git unavailable"))
      .mockResolvedValueOnce("feature/next");
    await vi.advanceTimersByTimeAsync(2000);
    expect(error).toHaveBeenCalledExactlyOnceWith(
      "Unable to check for a git branch change: Git unavailable",
    );
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
  });

  it("waits for each Git read before scheduling another poll", async () => {
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    let resolve!: (value: string) => void;
    readGitBranch.mockReturnValueOnce(
      new Promise<string>((done) => {
        resolve = done;
      }),
    );
    await vi.advanceTimersByTimeAsync(3000);
    expect(readGitBranch).toHaveBeenCalledTimes(2);
    resolve("feature/next");
    await vi.advanceTimersByTimeAsync(0);
    expect(reload).toHaveBeenCalledTimes(1);

    branch = "feature/latest";
    await vi.advanceTimersByTimeAsync(1000);
    expect(readGitBranch).toHaveBeenCalledTimes(3);
    expect(reload).toHaveBeenCalledTimes(2);
  });

  it("ignores a Git read that finishes after the server closes", async () => {
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    let resolve!: (value: string) => void;
    readGitBranch.mockReturnValueOnce(
      new Promise<string>((done) => {
        resolve = done;
      }),
    );
    await vi.advanceTimersByTimeAsync(1000);
    await server.close();
    resolve("feature/next");
    await vi.advanceTimersByTimeAsync(3000);
    expect(reload).not.toHaveBeenCalled();
    expect(readGitBranch).toHaveBeenCalledTimes(2);
  });

  it("reloads fresh HTML in middleware mode and stops polling on close", async () => {
    const server = await startServer({
      plugin: branchPlugin({ readGitBranch }),
      middlewareMode: true,
    });
    const reload = vi.spyOn(server.ws, "send");
    expect(await server.transformIndexHtml("/", "<html></html>")).toContain(
      `content="${GIT_BRANCH}"`,
    );

    branch = "feature/next";
    await vi.advanceTimersByTimeAsync(1000);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
    expect(await server.transformIndexHtml("/", "<html></html>")).toContain(
      'content="feature/next"',
    );

    await server.close();
    readGitBranch.mockClear();
    await vi.advanceTimersByTimeAsync(3000);
    expect(readGitBranch).not.toHaveBeenCalled();
  });
});
