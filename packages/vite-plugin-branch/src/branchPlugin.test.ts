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
const META_NAME = "osdk-foundry-branch-rid";

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

async function readInjectedMetaContent(plugin: Plugin): Promise<string> {
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
