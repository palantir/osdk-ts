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
import { once } from "node:events";
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
import { runInNewContext } from "node:vm";

import {
  build,
  createServer,
  type HotPayload,
  type HtmlTagDescriptor,
  type Logger,
  type Plugin,
  type ViteDevServer,
} from "vite";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { WebSocket } from "ws";

import { branchPlugin, FOUNDRY_BRANCH_ENV_VAR } from "./branchPlugin.js";

const GIT_BRANCH = "zka/my-branch";
const PINNED_BRANCH = "ri.foundry.main.branch.pinned";
const META_NAME = "osdk-foundry-branch-rid";
const UNRESOLVABLE_BRANCH_RID = "ri.branch..branch.unknown";
const BRANCH_EVENT = "osdk:branch";

const tempDirs: string[] = [];
const servers: ViteDevServer[] = [];
const sockets: WebSocket[] = [];

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
  base = "/",
  plugin = branchPlugin(),
  listen = true,
  middlewareMode = false,
  warnings,
}: {
  root?: string;
  base?: string;
  plugin?: Plugin[];
  listen?: boolean;
  middlewareMode?: boolean;
  warnings?: string[];
} = {}): Promise<ViteDevServer> {
  const server = await createServer({
    root,
    base,
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

function getServerUrl(server: ViteDevServer): string {
  const url = server.resolvedUrls?.local[0];
  if (url == null) throw new Error("expected a listening dev server");
  return url;
}

async function readServedHtml(server: ViteDevServer): Promise<string> {
  const response = await fetch(getServerUrl(server));
  expect(response.status).toBe(200);
  return response.text();
}

function transformHtml(server: ViteDevServer): Promise<string> {
  return server.transformIndexHtml("/", "<html></html>");
}

async function readReloadClient(server: ViteDevServer): Promise<string> {
  const tags = await readInjectedTags(
    server.config.plugins,
    "osdk-branch-reload",
  );
  const script = tags.find((tag) => tag.tag === "script");
  if (typeof script?.children !== "string") {
    throw new TypeError("expected the inline branch reload script");
  }
  return script.children;
}

function runReloadClient(
  code: string,
  branch: string | null,
  reload: () => void,
): (branch: string) => void {
  let receiveBranch: (branch: string) => void = () => {};
  // Supply the browser and HMR globals to the inline script injected by the plugin.
  runInNewContext(code.replaceAll("import.meta.hot", "hot"), {
    hot: {
      on: (event: string, listener: (branch: string) => void) => {
        expect(event).toBe(BRANCH_EVENT);
        receiveBranch = listener;
      },
    },
    location: { reload },
    document: {
      querySelector: (selector: string) =>
        selector === `meta[name="${META_NAME}"]` && branch != null
          ? {
              getAttribute: (name: string) =>
                name === "content" ? branch : null,
            }
          : null,
    },
  });
  return receiveBranch;
}

async function connectPage(server: ViteDevServer, html: string) {
  const branch =
    html.match(/name="osdk-foundry-branch-rid" content="([^"]*)"/u)?.[1] ??
    null;
  const reload = vi.fn();
  const receiveBranch = runReloadClient(
    await readReloadClient(server),
    branch,
    reload,
  );
  const url = new URL(getServerUrl(server));
  url.protocol = "ws:";
  url.searchParams.set("token", server.config.webSocketToken);
  const socket = new WebSocket(url, "vite-hmr");
  sockets.push(socket);
  const messages: HotPayload[] = [];
  await new Promise<void>((resolve, reject) => {
    socket.on("error", reject);
    socket.on("message", (raw) => {
      const message = JSON.parse(String(raw)) as HotPayload;
      messages.push(message);
      if (message.type === "connected") resolve();
      if (message.type === "custom" && message.event === BRANCH_EVENT) {
        receiveBranch(message.data);
      }
    });
  });

  return { socket, messages, reload };
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

async function readInjectedTags(
  plugins: readonly Plugin[],
  pluginName: string,
): Promise<HtmlTagDescriptor[]> {
  const transform = plugins.find(
    (plugin) => plugin.name === pluginName,
  )?.transformIndexHtml;
  const hook =
    typeof transform === "object" && "handler" in transform
      ? transform.handler
      : transform;
  if (typeof hook !== "function") {
    throw new TypeError("expected an HTML transform handler");
  }
  const result: unknown = await Reflect.apply(hook, undefined, ["", {}]);
  if (!Array.isArray(result)) {
    throw new TypeError("expected injected HTML tags");
  }
  return result;
}

async function readInjectedMetaContent(plugins: Plugin[]): Promise<string> {
  const result = await readInjectedTags(plugins, "osdk-branch");
  if (result.length !== 1) {
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
  for (const socket of sockets.splice(0)) socket.terminate();
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
  it.each(["/", "/nested/"])(
    "serves the inline reload module with HMR under the base %s",
    async (base) => {
      const root = makeProjectDir({ "index.html": "<html></html>" });
      const server = await startServer({
        root,
        base,
        plugin: pluginOn(GIT_BRANCH),
      });
      const html = await readServedHtml(server);
      const scriptPath = html.match(
        /<script type="module" src="([^"]+\?html-proxy[^"]*)"/u,
      )?.[1];
      if (scriptPath == null) {
        throw new Error("expected Vite to serve the inline reload module");
      }
      expect(scriptPath.startsWith(base)).toBe(true);

      const response = await fetch(new URL(scriptPath, getServerUrl(server)));
      expect(response.status).toBe(200);
      const code = await response.text();
      expect(code).toContain(`${base}@vite/client`);
      expect(code).toContain("createHotContext");
      expect(code).toContain(BRANCH_EVENT);
    },
  );

  it.each([GIT_BRANCH, "", UNRESOLVABLE_BRANCH_RID])(
    "reloads a page on %j only once when broadcasts disagree with its metadata",
    async (branch) => {
      const server = await startServer({ listen: false });
      const reload = vi.fn();
      const receiveBranch = runReloadClient(
        await readReloadClient(server),
        branch,
        reload,
      );
      receiveBranch(branch);
      expect(reload).not.toHaveBeenCalled();

      receiveBranch("feature/next");
      expect(reload).toHaveBeenCalledTimes(1);
      receiveBranch("feature/next");
      receiveBranch("feature/latest");
      receiveBranch(branch);
      expect(reload).toHaveBeenCalledTimes(1);
    },
  );

  it("ignores branch broadcasts when the page has no branch metadata", async () => {
    const server = await startServer({ listen: false });
    const reload = vi.fn();
    const receiveBranch = runReloadClient(
      await readReloadClient(server),
      null,
      reload,
    );
    receiveBranch(GIT_BRANCH);
    expect(reload).not.toHaveBeenCalled();
  });

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
    const gitBranch = 'feature/"quote"><script>bad()</script>&%MODE%';
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
      'content="feature/&quot;quote&quot;&gt;&lt;script&gt;bad()&lt;/script&gt;&amp;%MODE%"',
    );
    expect(transformed).not.toContain("<script>bad()</script>");
  });

  it("writes the branch to built HTML instead of JavaScript chunks", async () => {
    const buildBranch = "feature/%MODE%";
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
    expect(builtHtml).not.toContain(BRANCH_EVENT);
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
    expect(builtJavaScript).not.toContain(BRANCH_EVENT);
  });
});

describe("branch change reloads", () => {
  it("reloads a stale page after missing branch broadcasts during navigation", async () => {
    let branch = "A";
    const server = await startServer({
      plugin: branchPlugin({ readGitBranch: () => Promise.resolve(branch) }),
    });
    const broadcast = vi.spyOn(server.ws, "send");
    const initialHtml = await transformHtml(server);
    const first = await connectPage(server, initialHtml);

    branch = "B";
    await vi.waitFor(() => expect(first.reload).toHaveBeenCalledTimes(1), {
      timeout: 5000,
    });
    const disconnected = once(first.socket, "close");
    first.socket.close();
    await disconnected;
    const staleHtml = await transformHtml(server);
    expect(staleHtml).toContain('content="B"');

    broadcast.mockClear();
    branch = "A";
    await vi.waitFor(
      () => expect(broadcast).toHaveBeenCalledWith(BRANCH_EVENT, "A"),
      {
        timeout: 5000,
      },
    );
    expect(server.ws.clients.size).toBe(0);

    const fresh = await connectPage(server, await transformHtml(server));
    const stale = await connectPage(server, staleHtml);
    await vi.waitFor(() => expect(stale.reload).toHaveBeenCalledTimes(1), {
      timeout: 5000,
    });
    expect(fresh.reload).not.toHaveBeenCalled();
    expect(broadcast.mock.calls.length).toBeGreaterThanOrEqual(2);
    expect(stale.messages).toContainEqual({
      type: "custom",
      event: BRANCH_EVENT,
      data: "A",
    });
  }, 10000);

  it("broadcasts the override to connecting pages without reading Git", async () => {
    process.env[FOUNDRY_BRANCH_ENV_VAR] = PINNED_BRANCH;
    const readGitBranch = vi.fn(() => Promise.resolve(GIT_BRANCH));
    const server = await startServer({
      plugin: branchPlugin({ readGitBranch }),
    });
    const html = await transformHtml(server);
    const fresh = await connectPage(server, html);
    const stale = await connectPage(
      server,
      html.replace(`content="${PINNED_BRANCH}"`, `content="${GIT_BRANCH}"`),
    );

    await vi.waitFor(() => expect(stale.reload).toHaveBeenCalledTimes(1), {
      timeout: 5000,
    });
    expect(fresh.reload).not.toHaveBeenCalled();
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it("reloads unchanged files on a branch switch, but not a same-branch commit", async () => {
    const { root, git } = makeGitProject();
    const server = await startServer({ root });
    const restart = vi.spyOn(server, "restart");
    const html = await readServedHtml(server);
    expect(html).toContain(`content="${GIT_BRANCH}"`);
    const first = await connectPage(server, html);

    git("switch", "-c", "feature/next");
    await vi.waitFor(() => expect(first.reload).toHaveBeenCalledTimes(1), {
      timeout: 5000,
    });
    const nextHtml = await readServedHtml(server);
    expect(nextHtml).toContain('content="feature/next"');
    first.socket.close();
    const next = await connectPage(server, nextHtml);

    git("commit", "--allow-empty", "-m", "Same-branch commit");
    await delay(1200);
    expect(next.reload).not.toHaveBeenCalled();
    expect(restart).not.toHaveBeenCalled();
  });

  it("detects the branch of a nested app in a linked worktree", async () => {
    const { git } = makeGitProject({
      "app/index.html": "<html><head></head><body></body></html>",
    });
    const worktree = makeProjectDir();
    git("worktree", "add", "-b", "feature/worktree", worktree);
    const server = await startServer({ root: path.join(worktree, "app") });
    const html = await readServedHtml(server);
    expect(html).toContain('content="feature/worktree"');
    const page = await connectPage(server, html);

    git("switch", "-c", "feature/main-repo");
    await delay(1200);
    expect(page.reload).not.toHaveBeenCalled();

    git("-C", worktree, "switch", "-c", "feature/next");
    await vi.waitFor(() => expect(page.reload).toHaveBeenCalledTimes(1), {
      timeout: 5000,
    });
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
    const broadcast = vi.spyOn(server.ws, "send");
    await vi.advanceTimersByTimeAsync(1000);
    expect(server.httpServer?.listening).toBe(false);
    expect(readGitBranch).not.toHaveBeenCalled();

    await server.listen();
    expect(readGitBranch).toHaveBeenCalledTimes(1);
    expect(broadcast).toHaveBeenCalledExactlyOnceWith(BRANCH_EVENT, GIT_BRANCH);
    broadcast.mockClear();
    branch = "feature/next";
    await vi.advanceTimersByTimeAsync(1000);
    expect(readGitBranch).toHaveBeenCalledTimes(2);
    expect(broadcast).toHaveBeenCalledExactlyOnceWith(BRANCH_EVENT, branch);
  });

  it("starts with an unknown branch after an initial Git rejection and recovers", async () => {
    readGitBranch.mockRejectedValue(new Error("Git unavailable"));
    const server = await start();
    const broadcast = vi.spyOn(server.ws, "send");

    expect(await transformHtml(server)).toContain(
      `content="${UNRESOLVABLE_BRANCH_RID}"`,
    );
    await vi.advanceTimersByTimeAsync(2000);
    expect(broadcast).toHaveBeenCalledTimes(2);
    expect(broadcast).toHaveBeenLastCalledWith(
      BRANCH_EVENT,
      UNRESOLVABLE_BRANCH_RID,
    );

    readGitBranch.mockImplementation(() => Promise.resolve(branch));
    await vi.advanceTimersByTimeAsync(1000);
    expect(broadcast).toHaveBeenCalledTimes(3);
    expect(broadcast).toHaveBeenLastCalledWith(BRANCH_EVENT, GIT_BRANCH);
    expect(await transformHtml(server)).toContain(`content="${GIT_BRANCH}"`);
  });

  it("reads Git afresh for HTML between polls, including after a failed read", async () => {
    const server = await start();
    const broadcast = vi.spyOn(server.ws, "send");
    branch = "feature/next";

    expect(await transformHtml(server)).toContain('content="feature/next"');
    readGitBranch.mockRejectedValueOnce(new Error("Git unavailable"));
    expect(await transformHtml(server)).toContain(
      `content="${UNRESOLVABLE_BRANCH_RID}"`,
    );
    expect(await transformHtml(server)).toContain('content="feature/next"');

    await vi.advanceTimersByTimeAsync(1000);
    expect(broadcast).toHaveBeenCalledExactlyOnceWith(BRANCH_EVENT, branch);
  });

  it("repeats the same default branch for main and master", async () => {
    branch = "main";
    const server = await start();
    const broadcast = vi.spyOn(server.ws, "send");
    expect(await transformHtml(server)).toContain('content=""');

    branch = "master";
    await vi.advanceTimersByTimeAsync(5000);
    expect(broadcast).toHaveBeenCalledTimes(5);
    expect(broadcast.mock.calls).toEqual(new Array(5).fill([BRANCH_EVENT, ""]));
    expect(await transformHtml(server)).toContain('content=""');
  });

  it.each([PINNED_BRANCH, ""])(
    "broadcasts the pinned branch %j without reading Git",
    async (pinnedBranch) => {
      process.env[FOUNDRY_BRANCH_ENV_VAR] = pinnedBranch;
      const server = await start();
      const broadcast = vi.spyOn(server.ws, "send");
      expect(await transformHtml(server)).toContain(
        `content="${pinnedBranch}"`,
      );

      branch = "feature/next";
      await vi.advanceTimersByTimeAsync(5000);
      expect(broadcast).toHaveBeenCalledTimes(5);
      expect(broadcast).toHaveBeenLastCalledWith(BRANCH_EVENT, pinnedBranch);
      expect(readGitBranch).not.toHaveBeenCalled();

      await server.close();
      broadcast.mockClear();
      await vi.advanceTimersByTimeAsync(3000);
      expect(broadcast).not.toHaveBeenCalled();
    },
  );

  it("does not poll when closed before listening", async () => {
    const server = await start(false);
    await server.close();
    await vi.advanceTimersByTimeAsync(3000);
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it.each([false, true])(
    "broadcasts with one poller through restarts and stops on close (middleware: %s)",
    async (middlewareMode) => {
      const server = await startServer({
        plugin: branchPlugin({ readGitBranch }),
        middlewareMode,
      });
      expect(await transformHtml(server)).toContain(`content="${GIT_BRANCH}"`);
      for (const iteration of [0, 1, 2]) {
        if (iteration > 0) await server.restart();
        const broadcast = vi.spyOn(server.ws, "send");
        readGitBranch.mockClear();
        branch = `feature/${iteration}`;
        await vi.advanceTimersByTimeAsync(1000);
        expect(readGitBranch).toHaveBeenCalledExactlyOnceWith(
          server.config.root,
        );
        expect(broadcast).toHaveBeenCalledExactlyOnceWith(BRANCH_EVENT, branch);
        expect(await transformHtml(server)).toContain(`content="${branch}"`);
      }

      await server.close();
      const broadcast = vi.spyOn(server.ws, "send");
      broadcast.mockClear();
      readGitBranch.mockClear();
      await vi.advanceTimersByTimeAsync(3000);
      expect(readGitBranch).not.toHaveBeenCalled();
      expect(broadcast).not.toHaveBeenCalled();
    },
  );

  it("only stops the poller belonging to the closing server", async () => {
    const plugin = branchPlugin({ readGitBranch });
    const first = await startServer({ plugin });
    const second = await startServer({ plugin });
    await first.close();
    readGitBranch.mockClear();
    const broadcast = vi.spyOn(second.ws, "send");
    branch = "feature/next";
    await vi.advanceTimersByTimeAsync(1000);
    expect(readGitBranch).toHaveBeenCalledExactlyOnceWith(second.config.root);
    expect(broadcast).toHaveBeenCalledExactlyOnceWith(BRANCH_EVENT, branch);
  });

  it("does not stop polling when only the SSR environment closes", async () => {
    const server = await start();
    const broadcast = vi.spyOn(server.ws, "send");
    await server.environments.ssr.close();
    branch = "feature/next";
    await vi.advanceTimersByTimeAsync(1000);
    expect(broadcast).toHaveBeenCalledExactlyOnceWith(BRANCH_EVENT, branch);
  });

  it("broadcasts unreadable branch states and their recovery", async () => {
    const server = await start();
    const broadcast = vi.spyOn(server.ws, "send");
    const pollWith = async (next: string | undefined): Promise<void> => {
      branch = next;
      await vi.advanceTimersByTimeAsync(1000);
    };

    await pollWith(GIT_BRANCH);
    await pollWith(undefined);
    await pollWith("");
    await pollWith("   ");
    await pollWith(GIT_BRANCH);
    expect(broadcast.mock.calls).toEqual([
      [BRANCH_EVENT, GIT_BRANCH],
      [BRANCH_EVENT, UNRESOLVABLE_BRANCH_RID],
      [BRANCH_EVENT, UNRESOLVABLE_BRANCH_RID],
      [BRANCH_EVENT, UNRESOLVABLE_BRANCH_RID],
      [BRANCH_EVENT, GIT_BRANCH],
    ]);
  });

  it("treats a rejected Git read as an unreadable branch and keeps polling", async () => {
    const server = await start();
    const broadcast = vi.spyOn(server.ws, "send");
    const error = vi.spyOn(server.environments.client.logger, "error");
    readGitBranch.mockRejectedValue(new Error("Git unavailable"));

    await vi.advanceTimersByTimeAsync(1000);
    expect(broadcast).toHaveBeenCalledExactlyOnceWith(
      BRANCH_EVENT,
      UNRESOLVABLE_BRANCH_RID,
    );

    broadcast.mockClear();
    await vi.advanceTimersByTimeAsync(3000);
    expect(broadcast).toHaveBeenCalledTimes(3);
    expect(broadcast).toHaveBeenLastCalledWith(
      BRANCH_EVENT,
      UNRESOLVABLE_BRANCH_RID,
    );
    readGitBranch.mockImplementation(() => Promise.resolve(branch));
    await vi.advanceTimersByTimeAsync(1000);
    expect(broadcast).toHaveBeenCalledTimes(4);
    expect(broadcast).toHaveBeenLastCalledWith(BRANCH_EVENT, branch);
    expect(error).not.toHaveBeenCalled();
  });

  it("waits for each Git read before scheduling another poll", async () => {
    const server = await start();
    const broadcast = vi.spyOn(server.ws, "send");
    let resolve!: (value: string) => void;
    readGitBranch.mockReturnValueOnce(
      new Promise<string>((done) => {
        resolve = done;
      }),
    );
    await vi.advanceTimersByTimeAsync(3000);
    expect(readGitBranch).toHaveBeenCalledTimes(2);
    expect(broadcast).not.toHaveBeenCalled();
    resolve("feature/next");
    await vi.advanceTimersByTimeAsync(0);
    expect(broadcast).toHaveBeenCalledTimes(1);

    branch = "feature/latest";
    await vi.advanceTimersByTimeAsync(1000);
    expect(readGitBranch).toHaveBeenCalledTimes(3);
    expect(broadcast).toHaveBeenCalledTimes(2);
  });

  it.each([false, true])(
    "ignores a Git read that finishes after the server closes (failed read: %s)",
    async (failedRead) => {
      const server = await start();
      const broadcast = vi.spyOn(server.ws, "send");
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
      expect(broadcast).not.toHaveBeenCalled();
      expect(error).not.toHaveBeenCalled();
      expect(readGitBranch).toHaveBeenCalledTimes(2);
    },
  );
});
