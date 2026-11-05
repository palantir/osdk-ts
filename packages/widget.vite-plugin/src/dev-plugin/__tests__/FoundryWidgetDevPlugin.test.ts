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

let root: string;
let server: ViteDevServer;

afterEach(async () => {
  await server.close();
  vi.unstubAllEnvs();
  await rm(root, { recursive: true, force: true });
});

test("sets up dev mode from a Vite root outside the working directory", async () => {
  // The dev plugin disables itself under Vitest
  vi.stubEnv("VITEST", undefined);
  vi.stubEnv("FOUNDRY_TOKEN", "token");
  root = await realpath(await mkdtemp(path.join(tmpdir(), "widget-dev-")));
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
  await writeFile(
    path.join(root, "index.html"),
    `<script type="module" src="/src/widget.ts"></script>`,
  );
  await writeFile(
    path.join(root, "src/widget.ts"),
    `import config from "./widget.config"; document.title = config.name;`,
  );
  await writeFile(
    path.join(root, "src/widget.config.ts"),
    `export default { id: "widget", name: "widget", type: "workshop", parameters: {}, events: {} };`,
  );

  server = await createServer({
    root,
    configFile: false,
    logLevel: "silent",
    server: { port: 0 },
    plugins: [FoundryWidgetPlugin()],
    build: { rollupOptions: { input: ["./index.html"] } },
  });
  await server.listen();
  const url = server.resolvedUrls?.local[0];

  // Load the entrypoint and its script, as the setup page does
  const entrypoints = (await (
    await fetch(new URL(".palantir/entrypoints", url))
  ).json()) as string[];
  expect(entrypoints).toEqual(["/index.html"]);
  await fetch(new URL("index.html", url));
  await fetch(new URL("src/widget.ts", url));
  const finish = await (await fetch(new URL(".palantir/finish", url))).json();

  expect(finish).toMatchObject({ status: "success" });
  expect(setWidgetSetManifest).toHaveBeenCalledWith(
    "https://example.com/",
    "ri.widget-set",
    expect.objectContaining({
      devSettings: expect.objectContaining({
        widgets: {
          widget: expect.objectContaining({
            entrypointJs: expect.arrayContaining([
              {
                path: expect.stringMatching(/\/src\/widget\.ts$/u),
                type: "module",
              },
            ]),
          }),
        },
      }),
    }),
    "development",
  );
  expect(enableDevMode).toHaveBeenCalled();
});
