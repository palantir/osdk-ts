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
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { runInNewContext } from "node:vm";

import {
  build,
  createServer,
  type IndexHtmlTransformContext,
  type Plugin,
  type ResolvedConfig,
} from "vite";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { branchPlugin, FOUNDRY_BRANCH_ENV_VAR } from "./branchPlugin.js";

const GIT_BRANCH = "zka/my-branch";
const WINDOW_PROPERTY = "__OSDK_FOUNDRY_BRANCH_RID__";

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
  hook({
    root,
    envDir: options.envDir ?? root,
    mode: options.mode ?? "development",
    logger: { info: (message: string) => messages.push(message) },
  } as unknown as ResolvedConfig);
  return messages;
}

async function readInjectedScript(plugin: Plugin): Promise<string> {
  const hook = plugin.transformIndexHtml;
  if (typeof hook !== "function") {
    throw new TypeError("expected transformIndexHtml to be a function hook");
  }
  const result = await hook("", {} as unknown as IndexHtmlTransformContext);
  if (!Array.isArray(result) || result.length !== 1) {
    throw new TypeError("expected one injected HTML tag");
  }
  const [tag] = result;
  if (
    tag.tag !== "script" ||
    tag.injectTo !== "head-prepend" ||
    typeof tag.children !== "string"
  ) {
    throw new TypeError("expected a head-prepend script");
  }
  return tag.children;
}

function pluginOn(gitBranch: string | undefined): Plugin {
  return branchPlugin({ readGitBranch: () => Promise.resolve(gitBranch) });
}

beforeEach(() => {
  Reflect.deleteProperty(process.env, FOUNDRY_BRANCH_ENV_VAR);
});

afterEach(() => {
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

    expect(await readInjectedScript(plugin)).toBe(
      `window.${WINDOW_PROPERTY} = "${GIT_BRANCH}";`,
    );
  });

  it.each(["main", "master", "HEAD", undefined])(
    "injects null for the default branch state %s",
    async (gitBranch) => {
      const plugin = pluginOn(gitBranch);
      configurePlugin(plugin, makeProjectDir());

      expect(await readInjectedScript(plugin)).toBe(
        `window.${WINDOW_PROPERTY} = null;`,
      );
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

    expect(await readInjectedScript(plugin)).toContain(
      JSON.stringify(configuredBranch),
    );
    expect(readGitBranch).not.toHaveBeenCalled();
  });

  it("treats a blank .env override as the default branch", async () => {
    const root = makeProjectDir({
      ".env.development": `${FOUNDRY_BRANCH_ENV_VAR}=   \n`,
    });
    const readGitBranch = vi.fn(() => Promise.resolve(GIT_BRANCH));
    const plugin = branchPlugin({ readGitBranch });
    configurePlugin(plugin, root);

    expect(await readInjectedScript(plugin)).toBe(
      `window.${WINDOW_PROPERTY} = null;`,
    );
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

    expect(await readInjectedScript(plugin)).toContain(
      JSON.stringify(processBranch),
    );
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

    expect(await readInjectedScript(plugin)).toContain(
      JSON.stringify(configuredBranch),
    );
  });

  it("resolves git again for every HTML transformation", async () => {
    let gitBranch = "first-branch";
    const plugin = branchPlugin({
      readGitBranch: () => Promise.resolve(gitBranch),
    });
    configurePlugin(plugin, makeProjectDir());

    expect(await readInjectedScript(plugin)).toContain('"first-branch"');
    gitBranch = "second-branch";
    expect(await readInjectedScript(plugin)).toContain('"second-branch"');
  });

  it("reports each newly resolved feature branch through Vite's logger", async () => {
    let gitBranch = "first-branch";
    const plugin = branchPlugin({
      readGitBranch: () => Promise.resolve(gitBranch),
    });
    const messages = configurePlugin(plugin, makeProjectDir());

    await readInjectedScript(plugin);
    await readInjectedScript(plugin);
    gitBranch = "second-branch";
    await readInjectedScript(plugin);

    expect(messages).toEqual([
      expect.stringContaining("first-branch"),
      expect.stringContaining("second-branch"),
    ]);
  });

  it("serializes hostile branch names without terminating the script", async () => {
    const gitBranch =
      'feature/"quote"\n</script><script>bad()</script>\u2028\u2029suffix';
    const plugin = pluginOn(gitBranch);
    configurePlugin(plugin, makeProjectDir());

    const script = await readInjectedScript(plugin);
    expect(script).not.toContain("</script>");
    expect(script).toContain("\\u003c/script>");
    expect(script).toContain("\\n");
    expect(script).toContain("\\u2028");
    expect(script).toContain("\\u2029");

    const context = { window: {} as Record<string, unknown> };
    runInNewContext(script, context);
    expect(context.window).toEqual({ [WINDOW_PROPERTY]: gitBranch });
  });
});

describe("Vite integration", () => {
  it("prepends the branch script to served HTML", async () => {
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
      expect(transformed.indexOf(WINDOW_PROPERTY)).toBeLessThan(
        transformed.indexOf('src="/main.js"'),
      );
      expect(transformed).toContain(JSON.stringify(GIT_BRANCH));
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
    expect(builtHtml).toContain(JSON.stringify(buildBranch));
    expect(builtHtml.indexOf(WINDOW_PROPERTY)).toBeLessThan(
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
