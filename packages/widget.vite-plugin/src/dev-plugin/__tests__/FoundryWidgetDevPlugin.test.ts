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

import { mkdir, mkdtemp, realpath, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { createServer, type ViteDevServer } from "vite";
import { afterEach, expect, test, vi } from "vitest";

import FoundryWidgetPlugin from "../../index.js";
import { setWidgetSetManifest } from "../network.js";

vi.mock("../network.js", () => ({
  setWidgetSetManifest: vi.fn(() => Promise.resolve(new Response("{}"))),
  enableDevMode: vi.fn(() => Promise.resolve(new Response("{}"))),
}));

const originalCwd = process.cwd();
let parent: string;
let server: ViteDevServer;

afterEach(async () => {
  await server.close();
  vi.unstubAllEnvs();
  process.chdir(originalCwd);
  await rm(parent, { recursive: true, force: true });
});

test.each([
  { layout: "the project directory", htmlDir: "", cwd: "project", arg: "" },
  { layout: "a root set to src", htmlDir: "src", cwd: "project", arg: "" },
  { layout: "a parent directory", htmlDir: "", cwd: "", arg: "project" },
])("sets up dev mode from $layout", async ({ htmlDir, cwd, arg }) => {
  // The dev plugin disables itself under Vitest
  vi.stubEnv("VITEST", undefined);
  vi.stubEnv("FOUNDRY_TOKEN", "token");
  parent = await realpath(await mkdtemp(path.join(tmpdir(), "widget-dev-")));
  const project = path.join(parent, "project");
  const files = {
    "vite.config.mjs": `import { fileURLToPath } from "node:url";
      export default {
        ${htmlDir === "" ? "" : `root: "${htmlDir}",`}
        build: {
          rollupOptions: {
            input: [fileURLToPath(new URL("./${htmlDir}/index.html", import.meta.url))],
          },
        },
      };`,
    "foundry.config.json": JSON.stringify({
      foundryUrl: "https://example.com",
      widgetSet: { rid: "ri.widget-set", directory: "dist" },
    }),
    "package.json": JSON.stringify({ version: "1.2.3", type: "module" }),
    [path.join(htmlDir, "public", "resources.json")]: JSON.stringify({
      version: 1,
      authorizations: { read: { all: true } },
    }),
    [path.join(htmlDir, "index.html")]:
      `<script type="module" src="${htmlDir === "" ? "/src" : ""}/widget.ts"></script>`,
    "src/widget.ts": `import config from "./widget.config"; document.title = config.name;`,
    "src/widget.config.ts": `export default { id: "widget", name: "widget", type: "workshop", parameters: {}, events: {} };`,
  };
  await mkdir(path.join(project, "src"), { recursive: true });
  await mkdir(path.join(project, htmlDir, "public"), { recursive: true });
  for (const [file, content] of Object.entries(files)) {
    await writeFile(path.join(project, file), content);
  }
  process.chdir(path.join(parent, cwd));

  // Same as running `vite` with an optional directory argument
  server = await createServer({
    root: arg === "" ? undefined : arg,
    logLevel: "silent",
    server: { port: 0 },
    plugins: [FoundryWidgetPlugin()],
  });
  await server.listen();
  const url = server.resolvedUrls?.local[0];

  // Load the entrypoint and its script, as the setup page does
  const entrypoints = (await (
    await fetch(new URL(".palantir/entrypoints", url))
  ).json()) as string[];
  for (const entrypoint of entrypoints) {
    await fetch(new URL(entrypoint, url));
  }
  await fetch(new URL(htmlDir === "" ? "src/widget.ts" : "widget.ts", url));
  const finish = await (await fetch(new URL(".palantir/finish", url))).json();

  expect(finish).toMatchObject({ status: "success" });
  expect(setWidgetSetManifest).toHaveBeenLastCalledWith(
    "https://example.com/",
    "ri.widget-set",
    expect.objectContaining({
      devSettings: expect.objectContaining({
        inputSpec: expect.objectContaining({
          discovered: expect.objectContaining({
            authorizations: { read: { all: true } },
          }),
        }),
        widgets: { widget: expect.anything() },
      }),
    }),
    "development",
  );
});
