/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { ProxyOptions, UserConfig } from "vite";
import { afterEach, beforeEach, expect, it } from "vitest";
import { smartClientPlugin } from "./index.js";
import { DISCOVERY_DIR } from "./public/discovery.js";

let workDir: string;

beforeEach(() => {
  workDir = fs.mkdtempSync(path.join(os.tmpdir(), "vps-plugin-test-"));
});
afterEach(() => {
  fs.rmSync(workDir, { recursive: true, force: true });
});

it("installs ontology proxy prefixes from a live discovery file", () => {
  fs.writeFileSync(
    path.join(workDir, "foundry.yml"),
    "minCliVersion: \"0.0.0\"\n",
  );
  const dir = path.join(workDir, DISCOVERY_DIR);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, ".ontology-discovery.json"),
    JSON.stringify({ pid: process.pid, url: "https://127.0.0.1:51000" }),
  );

  const userConfig: UserConfig = { root: workDir };
  const plugin = smartClientPlugin();
  const hook = plugin.config;
  const fn = typeof hook === "function" ? hook : hook?.handler;
  if (!fn) throw new Error("smartClientPlugin must declare a `config` hook");
  (fn as unknown as (
    cfg: UserConfig,
    env: { command: "serve" | "build"; mode: string },
  ) => unknown)(userConfig, { command: "serve", mode: "development" });

  const proxy = userConfig.server?.proxy as Record<string, ProxyOptions>;
  for (const prefix of ["/ontology-metadata", "/object-set-service"]) {
    expect(proxy[prefix].target).toBe("https://127.0.0.1:51000");
    expect(proxy[prefix].changeOrigin).toBe(true);
    expect(proxy[prefix].secure).toBe(false);
  }
});
