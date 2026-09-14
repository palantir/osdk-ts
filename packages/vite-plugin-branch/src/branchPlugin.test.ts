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

import {
  build,
  createServer,
  type Logger,
  type Plugin,
  type ViteDevServer,
} from "vite";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { branchPlugin, FOUNDRY_BRANCH_ENV_VAR } from "./branchPlugin.js";

const GIT_BRANCH = "zka/my-branch";
const PINNED_BRANCH = "ri.foundry.main.branch.pinned";
const META_NAME = "osdk-foundry-branch-rid";
const UNRESOLVABLE_BRANCH_RID = "ri.branch..branch.unknown";

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
  warnings,
}: {
  root?: string;
  plugin?: Plugin[];
  listen?: boolean;
  middlewareMode?: boolean;
  warnings?: string[];
} = {}): Promise<ViteDevServer> {
  const server = await createServer({
    root,
    configFile: false,
    logLevel: "silent",
    customLogger: warnings == null ? undefined : collectWarnings(warnings),
    plugins: [plugin],
    server: { host: "127.0.0.1", port: 0, watch: null, middlewareMode },
  });
  servers.push(server);
  if (listen && !middlewareMode) await server.listen();
  return server;
}

function collectWarnings(warnings: string[]): Logger {
  return {
    info: () => {},
    warn: (message: string) => void warnings.push(message),
    warnOnce: (message: string) => void warnings.push(message),
    error: () => {},
    clearScreen: () => {},
    hasErrorLogged: () => false,
    hasWarned: false,
  };
}

async function readServedHtml(server: ViteDevServer): Promise<string> {
  const url = server.resolvedUrls?.local[0];
  if (url == null) throw new Error("expected a listening dev server");
  const response = await fetch(url);
  expect(response.status).toBe(200);
  return response.text();
}

function transformHtml(server: ViteDevServer): Promise<string> {
  return server.transformIndexHtml("/", "<html></html>");
}

function configurePluginForBuild(
  plugins: Plugin[],
  root: string,
  options: { envDir?: string | false; mode?: string } = {},
): string[] {
  const hook = plugins[0].configResolved;
  if (typeof hook !== "function") {
    throw new TypeError("expected configResolved to be a function hook");
  }
  const messages: string[] = [];
  const report = (message: string): number => messages.push(message);
  Reflect.apply(hook, undefined, [
    {
      root,
      envDir: options.envDir ?? root,
      mode: options.mode ?? "development",
      command: "build",
      logger: { info: report, warn: report },
    },
  ]);
  return messages;
}

async function readInjectedMetaContent(plugins: Plugin[]): Promise<string> {
  const hook = plugins[0].transformIndexHtml;
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

function pluginOn(gitBranch: string | undefined): Plugin[] {
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
  it.each(["main", "master", "", "   ", undefined])(
    "injects an empty value for the default branch state %j in builds",
    async (gitBranch) => {
      const plugin = pluginOn(gitBranch);
      configurePluginForBuild(plugin, makeProjectDir());

      expect(await readInjectedMetaContent(plugin)).toBe("");
    },
  );

  it("treats a branch that merely looks like a default as a real branch", async () => {
    for (const gitBranch of [
      "HEAD",
      "mainline",
      "zka/main-fix",
      "  main-x  ",
    ]) {
      const plugin = pluginOn(gitBranch);
      configurePluginForBuild(plugin, makeProjectDir());

      expect(await readInjectedMetaContent(plugin)).toBe(gitBranch.trim());
    }
  });

  it("uses the default branch in builds when the Git read rejects", async () => {
    const plugin = branchPlugin({
      readGitBranch: () => Promise.reject(new Error("Git unavailable")),
    });
    configurePluginForBuild(plugin, makeProjectDir());

    expect(await readInjectedMetaContent(plugin)).toBe("");
  });

  it.each([
    [PINNED_BRANCH, PINNED_BRANCH],
    ["   ", ""],
  ])(
    "uses the .env override %j during development instead of git",
    async (configuredBranch, expected) => {
      const root = makeProjectDir({
        ".env.development": `${FOUNDRY_BRANCH_ENV_VAR}=${configuredBranch}\n`,
      });
      const readGitBranch = vi.fn(() => Promise.resolve(GIT_BRANCH));
      const server = await startServer({
        root,
        plugin: branchPlugin({ readGitBranch }),
        listen: false,
      });

      expect(await transformHtml(server)).toContain(`content="${expected}"`);
      expect(readGitBranch).not.toHaveBeenCalled();
    },
  );

  it("gives process.env precedence over .env files and git", async () => {
    const processBranch = "ri.foundry.main.branch.from-ci";
    process.env[FOUNDRY_BRANCH_ENV_VAR] = processBranch;
    const root = makeProjectDir({
      ".env.development": `${FOUNDRY_BRANCH_ENV_VAR}=from-file\n`,
    });
    const readGitBranch = vi.fn(() => Promise.resolve(GIT_BRANCH));
    const plugin = branchPlugin({ readGitBranch });
    configurePluginForBuild(plugin, root);

    expect(await readInjectedMetaContent(plugin)).toBe(processBranch);
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it("reads .env files from the resolved envDir", async () => {
    const root = makeProjectDir({
      "config/.env.development": `${FOUNDRY_BRANCH_ENV_VAR}=${PINNED_BRANCH}\n`,
    });
    const envDir = path.join(root, "config");
    const plugin = pluginOn(GIT_BRANCH);
    configurePluginForBuild(plugin, root, { envDir });

    expect(await readInjectedMetaContent(plugin)).toBe(PINNED_BRANCH);
  });

  it("resolves git again for every HTML transformation", async () => {
    let gitBranch = "first-branch";
    const plugin = branchPlugin({
      readGitBranch: () => Promise.resolve(gitBranch),
    });
    configurePluginForBuild(plugin, makeProjectDir());

    expect(await readInjectedMetaContent(plugin)).toBe("first-branch");
    gitBranch = "second-branch";
    expect(await readInjectedMetaContent(plugin)).toBe("second-branch");
  });

  it("reports branch changes through Vite's logger, including the default branch", async () => {
    let gitBranch = "main";
    const plugin = branchPlugin({
      readGitBranch: () => Promise.resolve(gitBranch),
    });
    const messages = configurePluginForBuild(plugin, makeProjectDir());

    for (const next of ["main", "first", "first", "second", "main"]) {
      gitBranch = next;
      await readInjectedMetaContent(plugin);
    }

    expect(messages).toEqual([
      expect.stringContaining("the default Foundry branch"),
      expect.stringContaining('"first"'),
      expect.stringContaining('"second"'),
      expect.stringContaining("the default Foundry branch"),
    ]);
  });
});

describe("Vite integration", () => {
  it.each([false, true])(
    "starts, warns, and serves an unknown branch when Git cannot identify a branch (detached: %s)",
    async (detached) => {
      let root: string;
      if (detached) {
        const project = makeGitProject();
        project.git("switch", "--detach", "HEAD");
        root = project.root;
      } else {
        root = makeProjectDir({
          "index.html": "<html><head></head><body></body></html>",
        });
      }
      const warnings: string[] = [];
      const server = await startServer({ root, warnings });

      expect(await readServedHtml(server)).toContain(
        `content="${UNRESOLVABLE_BRANCH_RID}"`,
      );
      expect(warnings).toEqual([
        expect.stringContaining(FOUNDRY_BRANCH_ENV_VAR),
      ]);
    },
  );

  it("keeps the HTML plugin in every environment and polls only the client", async () => {
    const server = await startServer({ listen: false });
    const osdkPlugins = (environment: keyof typeof server.environments) =>
      server.environments[environment].plugins
        .map(({ name }) => name)
        .filter((name) => name.startsWith("osdk-"));

    expect(osdkPlugins("client")).toEqual([
      "osdk-branch",
      "osdk-branch-reload:client",
    ]);
    expect(osdkPlugins("ssr")).toEqual(["osdk-branch"]);
  });

  it("does not block the dev server on the first Git read", async () => {
    let finishRead!: () => void;
    const server = await startServer({
      plugin: branchPlugin({
        readGitBranch: () =>
          new Promise<string>((resolve) => {
            finishRead = () => resolve(GIT_BRANCH);
          }),
      }),
    });

    expect(server.httpServer?.listening).toBe(true);
    finishRead();
  });

  it("prepends escaped branch metadata before application scripts", async () => {
    const gitBranch = 'feature/"quote"><script>bad()</script>&suffix';
    const html =
      '<html><head></head><body><script type="module" src="/main.js"></script></body></html>';
    const server = await startServer({
      plugin: pluginOn(gitBranch),
      listen: false,
    });
    const transformed = await server.transformIndexHtml("/", html);
    expect(transformed).toContain(`name="${META_NAME}"`);
    expect(transformed.indexOf(`name="${META_NAME}"`)).toBeLessThan(
      transformed.indexOf('src="/main.js"'),
    );
    expect(transformed).toContain(
      'content="feature/&quot;quote&quot;&gt;&lt;script&gt;bad()&lt;/script&gt;&amp;suffix"',
    );
    expect(transformed).not.toContain("<script>bad()</script>");
  });

  it("writes the branch to built HTML instead of JavaScript chunks", async () => {
    const buildBranch = "feature/build-branch";
    const root = makeProjectDir({
      "index.html":
        '<html><head></head><body><script type="module" src="/main.js"></script></body></html>',
      "main.js": "globalThis.appStarted = true;",
    });

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
  it("reloads unchanged files on a branch switch, but not a same-branch commit", async () => {
    const { root, git } = makeGitProject();
    const server = await startServer({ root });
    const reload = vi.spyOn(server.ws, "send");
    const restart = vi.spyOn(server, "restart");
    expect(await readServedHtml(server)).toContain(`content="${GIT_BRANCH}"`);

    git("switch", "-c", "feature/next");
    await vi.waitFor(
      () =>
        expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" }),
      { timeout: 5000 },
    );
    expect(await readServedHtml(server)).toContain('content="feature/next"');

    reload.mockClear();
    git("commit", "--allow-empty", "-m", "Same-branch commit");
    await delay(1200);
    expect(reload).not.toHaveBeenCalled();
    expect(restart).not.toHaveBeenCalled();
  });

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
  let branch: string | undefined = GIT_BRANCH;

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

  it("starts with an unknown branch after an initial Git rejection and recovers", async () => {
    readGitBranch.mockRejectedValue(new Error("Git unavailable"));
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");

    expect(await transformHtml(server)).toContain(
      `content="${UNRESOLVABLE_BRANCH_RID}"`,
    );
    await vi.advanceTimersByTimeAsync(2000);
    expect(reload).not.toHaveBeenCalled();

    readGitBranch.mockImplementation(() => Promise.resolve(branch));
    await vi.advanceTimersByTimeAsync(1000);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
    expect(await transformHtml(server)).toContain(`content="${GIT_BRANCH}"`);
  });

  it("reads Git afresh for HTML between polls, including after a failed read", async () => {
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    branch = "feature/next";

    expect(await transformHtml(server)).toContain('content="feature/next"');
    readGitBranch.mockRejectedValueOnce(new Error("Git unavailable"));
    expect(await transformHtml(server)).toContain(
      `content="${UNRESOLVABLE_BRANCH_RID}"`,
    );
    expect(await transformHtml(server)).toContain('content="feature/next"');

    await vi.advanceTimersByTimeAsync(1000);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
  });

  it("does not reload when a branch switch leaves the injected branch unchanged", async () => {
    branch = "main";
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    expect(await transformHtml(server)).toContain('content=""');

    branch = "master";
    await vi.advanceTimersByTimeAsync(5000);
    expect(reload).not.toHaveBeenCalled();
    expect(await transformHtml(server)).toContain('content=""');
  });

  it("never reads Git while the .env override pins the branch", async () => {
    process.env[FOUNDRY_BRANCH_ENV_VAR] = PINNED_BRANCH;
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    expect(await transformHtml(server)).toContain(`content="${PINNED_BRANCH}"`);

    branch = "feature/next";
    await vi.advanceTimersByTimeAsync(5000);
    expect(reload).not.toHaveBeenCalled();
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it("does not poll when closed before listening", async () => {
    const server = await start(false);
    await server.close();
    await vi.advanceTimersByTimeAsync(3000);
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it.each([false, true])(
    "reloads fresh HTML with one poller through restarts and stops on close (middleware: %s)",
    async (middlewareMode) => {
      const server = await startServer({
        plugin: branchPlugin({ readGitBranch }),
        middlewareMode,
      });
      expect(await transformHtml(server)).toContain(`content="${GIT_BRANCH}"`);
      for (const iteration of [0, 1, 2]) {
        if (iteration > 0) await server.restart();
        const reload = vi.spyOn(server.ws, "send");
        readGitBranch.mockClear();
        branch = `feature/${iteration}`;
        await vi.advanceTimersByTimeAsync(1000);
        expect(readGitBranch).toHaveBeenCalledExactlyOnceWith(
          server.config.root,
        );
        expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
        expect(await transformHtml(server)).toContain(`content="${branch}"`);
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

  it("reloads once for a run of unreadable branches and again on recovery", async () => {
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    const pollWith = async (next: string | undefined): Promise<void> => {
      branch = next;
      await vi.advanceTimersByTimeAsync(1000);
    };

    await pollWith(GIT_BRANCH);
    expect(reload).not.toHaveBeenCalled();

    await pollWith(undefined);
    expect(reload).toHaveBeenCalledTimes(1);

    await pollWith("");
    await pollWith("   ");
    expect(reload).toHaveBeenCalledTimes(1);

    await pollWith(GIT_BRANCH);
    expect(reload).toHaveBeenCalledTimes(2);
    expect(reload).toHaveBeenLastCalledWith({ type: "full-reload" });
  });

  it("treats a rejected Git read as an unreadable branch and keeps polling", async () => {
    const server = await start();
    const reload = vi.spyOn(server.ws, "send");
    const error = vi.spyOn(server.environments.client.logger, "error");
    readGitBranch.mockRejectedValue(new Error("Git unavailable"));

    await vi.advanceTimersByTimeAsync(1000);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });

    reload.mockClear();
    await vi.advanceTimersByTimeAsync(3000);
    expect(reload).not.toHaveBeenCalled();
    readGitBranch.mockImplementation(() => Promise.resolve(branch));
    await vi.advanceTimersByTimeAsync(1000);
    expect(reload).toHaveBeenCalledExactlyOnceWith({ type: "full-reload" });
    expect(error).not.toHaveBeenCalled();
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

  it.each([false, true])(
    "ignores a Git read that finishes after the server closes (failed read: %s)",
    async (failedRead) => {
      const server = await start();
      const reload = vi.spyOn(server.ws, "send");
      const error = vi.spyOn(server.environments.client.logger, "error");
      let finish!: () => void;
      readGitBranch.mockReturnValueOnce(
        new Promise<string>((resolve, reject) => {
          finish = failedRead
            ? () => reject(new Error("Git unavailable"))
            : () => resolve("feature/next");
        }),
      );
      await vi.advanceTimersByTimeAsync(1000);
      await server.close();
      finish();
      await vi.advanceTimersByTimeAsync(3000);
      expect(reload).not.toHaveBeenCalled();
      expect(error).not.toHaveBeenCalled();
      expect(readGitBranch).toHaveBeenCalledTimes(2);
    },
  );
});
