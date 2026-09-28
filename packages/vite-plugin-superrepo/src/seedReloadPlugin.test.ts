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

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { setTimeout } from "node:timers/promises";

import { createServer, type ViteDevServer } from "vite";
import {
  afterEach,
  beforeEach,
  expect,
  it,
  type MockInstance,
  vi,
} from "vitest";

import { seedReloadPlugin } from "./index.js";

let root: string;
let servers: ViteDevServer[];

beforeEach(() => {
  root = fs.realpathSync(
    fs.mkdtempSync(path.join(os.tmpdir(), "superrepo-seed-reload-")),
  );
  fs.writeFileSync(path.join(root, "foundry.yml"), "components: []\n");
  servers = [];
});
afterEach(async () => {
  await Promise.all(servers.map((server) => server.close()));
  fs.rmSync(root, { recursive: true, force: true });
});

it("reloads app and widget previews only after ontology sync completes", async () => {
  const senders: MockInstance<ViteDevServer["ws"]["send"]>[] = [];
  for (const component of ["app", "widgets"]) {
    const directory = path.join(root, component);
    fs.mkdirSync(directory);
    const server = await createServer({
      root: directory,
      configFile: false,
      logLevel: "silent",
      server: { port: 0 },
      optimizeDeps: { noDiscovery: true, include: [] },
      plugins: [seedReloadPlugin()],
    });
    servers.push(server);
    senders.push(vi.spyOn(server.ws, "send"));
    await server.listen();
  }

  const discovery = path.join(root, ".palantir");
  fs.mkdirSync(discovery, { recursive: true });

  fs.writeFileSync(path.join(root, "seed-data.json"), '{"objects": {}}');
  await setTimeout(100);
  for (const send of senders) expect(send).not.toHaveBeenCalled();

  const marker = path.join(discovery, ".ontology-sync");
  for (const revision of ["first", "second"]) {
    const temporary = path.join(discovery, ".ontology-sync.tmp");
    fs.writeFileSync(temporary, revision);
    fs.renameSync(temporary, marker);
    for (const send of senders) {
      const count = revision === "first" ? 1 : 2;
      await expect.poll(() => send.mock.calls.length).toBe(count);
      expect(send).toHaveBeenNthCalledWith(count, { type: "full-reload" });
    }
  }

  await servers[0].close();
  fs.writeFileSync(marker, "third");
  await expect.poll(() => senders[1].mock.calls.length).toBe(3);
  expect(senders[0]).toHaveBeenCalledTimes(2);
});
