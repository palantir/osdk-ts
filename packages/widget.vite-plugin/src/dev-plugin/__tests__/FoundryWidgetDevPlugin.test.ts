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
import { enableDevMode, setWidgetSetManifest } from "../network.js";

vi.mock("../network.js", () => ({
  setWidgetSetManifest: vi.fn(() => Promise.resolve(new Response("{}"))),
  enableDevMode: vi.fn(() => Promise.resolve(new Response("{}"))),
}));

const cwd = process.cwd();
let root: string;
let server: ViteDevServer;

afterEach(async () => {
  await server.close();
  process.chdir(cwd);
  vi.unstubAllEnvs();
  await rm(root, { recursive: true, force: true });
});

test("sets up dev mode for absolute HTML inputs", async () => {
  // The dev plugin disables itself under Vitest
  vi.stubEnv("VITEST", undefined);
  vi.stubEnv("FOUNDRY_TOKEN", "token");
  root = await realpath(await mkdtemp(path.join(tmpdir(), "widget-dev-")));
  process.chdir(root);
  await mkdir(path.join(root, "src"));
  await writeFile(
    path.join(root, "foundry.config.json"),
    JSON.stringify({
      foundryUrl: "https://example.com",
      widgetSet: { rid: "ri.widget-set", directory: "dist" },
    }),
  );
  await writeFile(
    path.join(root, "package.json"),
    JSON.stringify({ version: "1.0.0", type: "module" }),
  );
  const ids = ["first", "second"];
  for (const id of ids) {
    await writeFile(
      path.join(root, `${id}.html`),
      `<script type="module" src="/src/${id}.ts"></script>`,
    );
    await writeFile(
      path.join(root, `src/${id}.ts`),
      `import config from "./${id}.config"; document.title = config.name;`,
    );
    await writeFile(
      path.join(root, `src/${id}.config.ts`),
      `export default { id: "${id}", name: "${id}", type: "workshop", parameters: {}, events: {} };`,
    );
  }

  server = await createServer({
    root,
    configFile: false,
    logLevel: "silent",
    server: { port: 0 },
    plugins: [FoundryWidgetPlugin()],
    build: {
      rollupOptions: { input: ids.map((id) => path.join(root, `${id}.html`)) },
    },
  });
  await server.listen();
  const url = server.resolvedUrls?.local[0];

  // Load each entrypoint and its script, as the setup page does
  const entrypoints = (await (
    await fetch(new URL(".palantir/entrypoints", url))
  ).json()) as string[];
  expect(entrypoints).toEqual(["/first.html", "/second.html"]);
  for (const [index, entrypoint] of entrypoints.entries()) {
    const html = await (await fetch(new URL(entrypoint, url))).text();
    expect(html).toContain(`src="/src/${ids[index]}.ts"`);
    await fetch(new URL(`src/${ids[index]}.ts`, url));
  }
  const finish = await (await fetch(new URL(".palantir/finish", url))).json();

  expect(finish).toMatchObject({ status: "success" });
  expect(setWidgetSetManifest).toHaveBeenCalledWith(
    "https://example.com/",
    "ri.widget-set",
    expect.objectContaining({
      devSettings: expect.objectContaining({
        widgets: {
          first: expect.objectContaining({ id: "first" }),
          second: expect.objectContaining({ id: "second" }),
        },
      }),
    }),
    "development",
  );
  expect(enableDevMode).toHaveBeenCalled();
});
