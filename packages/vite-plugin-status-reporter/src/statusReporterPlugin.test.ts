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
import http from "node:http";
import type { AddressInfo } from "node:net";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, expect, it } from "vitest";
import { statusReporterPlugin } from "./statusReporterPlugin.js";

let workDir: string;

beforeEach(() => {
  workDir = fs.mkdtempSync(path.join(os.tmpdir(), "plugin-status-test-"));
});
afterEach(() => {
  fs.rmSync(workDir, { recursive: true, force: true });
});

it("publishes PREPARING through the discovered status server URL", async () => {
  fs.writeFileSync(
    path.join(workDir, "foundry.yml"),
    "minCliVersion: \"0.0.0\"\n",
  );

  const events: unknown[] = [];
  let resolveEvent: ((value: unknown) => void) | undefined;
  const server = http.createServer((req, res) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", () => {
      if (req.method === "POST" && req.url === "/api/status") {
        const event = JSON.parse(Buffer.concat(chunks).toString("utf-8"));
        events.push(event);
        resolveEvent?.(event);
      }
      res.statusCode = 204;
      res.end();
    });
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = (server.address() as AddressInfo).port;

  try {
    const dir = path.join(workDir, ".palantir");
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, ".status-server-discovery.json"),
      JSON.stringify({
        pid: process.pid,
        url: `http://127.0.0.1:${port}`,
      }),
    );

    const plugin = statusReporterPlugin({ service: "APP" });
    const configResolved = typeof plugin.configResolved === "function"
      ? plugin.configResolved
      : plugin.configResolved?.handler;
    const configureServer = typeof plugin.configureServer === "function"
      ? plugin.configureServer
      : plugin.configureServer?.handler;
    (configResolved as unknown as (cfg: unknown) => void)({
      root: workDir,
      logger: { warn: () => {} },
    });
    (configureServer as unknown as (s: unknown) => void)({
      httpServer: { on: () => undefined },
    });

    const first = await Promise.race([
      new Promise<unknown>((resolve) => {
        if (events.length > 0) resolve(events[0]);
        else resolveEvent = resolve;
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("PREPARING never published")), 5000)
      ),
    ]);
    expect(first).toMatchObject({
      service: "APP",
      status: "PREPARING",
      level: "INFO",
    });
  } finally {
    server.closeAllConnections();
    await new Promise<void>((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
  }
});
