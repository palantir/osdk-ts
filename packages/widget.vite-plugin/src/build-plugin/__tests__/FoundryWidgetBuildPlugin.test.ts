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
  mkdir,
  mkdtemp,
  readFile,
  realpath,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { MANIFEST_FILE_LOCATION } from "@osdk/widget.api";
import { build } from "vite";
import { afterEach, expect, test } from "vitest";

import FoundryWidgetPlugin from "../../index.js";

const originalCwd = process.cwd();
let parent: string | undefined;

afterEach(async () => {
  process.chdir(originalCwd);
  if (parent != null) {
    await rm(parent, { recursive: true, force: true });
  }
});

test.each([
  { layout: "the project directory", htmlDir: "", cwd: "project", arg: "" },
  { layout: "a root set to src", htmlDir: "src", cwd: "project", arg: "" },
  { layout: "a parent directory", htmlDir: "", cwd: "", arg: "project" },
])("builds from $layout", async ({ htmlDir, cwd, arg }) => {
  parent = await realpath(await mkdtemp(path.join(tmpdir(), "widget-build-")));
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

  // Same as running `vite build` with an optional directory argument
  await build({
    root: arg === "" ? undefined : arg,
    logLevel: "silent",
    plugins: [FoundryWidgetPlugin()],
  });

  const manifest = JSON.parse(
    await readFile(
      path.join(project, htmlDir, "dist", MANIFEST_FILE_LOCATION),
      "utf-8",
    ),
  );
  expect(manifest.widgetSet).toMatchObject({
    rid: "ri.widget-set",
    version: "1.2.3",
    inputSpec: { discovered: { authorizations: { read: { all: true } } } },
    widgets: {
      widget: {
        entrypointJs: [
          { path: expect.stringMatching(/^assets\/.*\.js$/u), type: "module" },
        ],
      },
    },
  });
});

test.each(["/widgets/", "./"])("rejects base %s", async (base) => {
  await expect(
    build({
      base,
      configFile: false,
      logLevel: "silent",
      plugins: [FoundryWidgetPlugin()],
    }),
  ).rejects.toThrow(`Found base "${base}"`);
});
