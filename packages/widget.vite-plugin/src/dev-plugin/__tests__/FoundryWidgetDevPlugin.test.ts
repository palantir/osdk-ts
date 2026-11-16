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

import { mkdtemp, realpath, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { createServer } from "vite";
import { expect, test, vi } from "vitest";

import { FoundryWidgetDevPlugin } from "../FoundryWidgetDevPlugin.js";

test("lists relative and absolute HTML inputs at URLs the dev server serves", async () => {
  // The dev plugin disables itself under Vitest
  vi.stubEnv("VITEST", undefined);
  vi.stubEnv("FOUNDRY_TOKEN", "token");
  const root = await realpath(
    await mkdtemp(path.join(tmpdir(), "widget-dev-")),
  );
  const cwd = process.cwd();
  // Vite resolves relative inputs from the working directory
  process.chdir(root);
  await writeFile(path.join(root, "index.html"), "index");
  await writeFile(path.join(root, "second.html"), "second");
  const server = await createServer({
    root,
    configFile: false,
    logLevel: "silent",
    plugins: [FoundryWidgetDevPlugin()],
    build: {
      rollupOptions: {
        input: ["./index.html", path.join(root, "second.html")],
      },
    },
  });
  try {
    await server.listen();
    const url = server.resolvedUrls?.local[0];
    const entrypoints = (await (
      await fetch(new URL(".palantir/entrypoints", url))
    ).json()) as string[];
    expect(entrypoints).toEqual(["/index.html", "/second.html"]);
    const pages = await Promise.all(
      entrypoints.map(async (entrypoint) =>
        (await fetch(new URL(entrypoint, url))).text(),
      ),
    );
    expect(pages).toEqual([
      expect.stringContaining("index"),
      expect.stringContaining("second"),
    ]);
  } finally {
    await server.close();
    process.chdir(cwd);
    vi.unstubAllEnvs();
    await rm(root, { recursive: true, force: true });
  }
});
