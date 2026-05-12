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
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { statusReporterPlugin } from "./statusReporterPlugin.js";

let workDir: string;

beforeEach(() => {
  workDir = fs.mkdtempSync(path.join(os.tmpdir(), "vps-status-test-"));
});
afterEach(() => {
  fs.rmSync(workDir, { recursive: true, force: true });
});

function makeSuperrepo(): string {
  fs.writeFileSync(
    path.join(workDir, "foundry.yml"),
    "minCliVersion: \"0.0.0\"\n",
  );
  return workDir;
}

function writeStatusDiscovery(root: string, body: object): void {
  const dir = path.join(root, ".palantir");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, ".status-server-discovery.json"),
    JSON.stringify(body),
  );
}

/** Stand up a no-op HTTP server that captures POSTs to `/api/status`. */
async function startCaptureServer(): Promise<{
  url: string;
  capture: { events: unknown[] };
  close: () => Promise<void>;
}> {
  const capture = { events: [] as unknown[] };
  const server = http.createServer((req, res) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      const body = Buffer.concat(chunks).toString("utf-8");
      if (req.method === "POST" && req.url === "/api/status") {
        try {
          capture.events.push(JSON.parse(body));
        } catch {
          // ignore malformed bodies in the test sink
        }
      }
      res.statusCode = 204;
      res.end();
    });
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = (server.address() as AddressInfo).port;
  return {
    url: `http://127.0.0.1:${port}`,
    capture,
    close: () =>
      new Promise<void>((resolve, reject) => {
        server.close((err) => (err ? reject(err) : resolve()));
      }),
  };
}

describe("statusReporterPlugin", () => {
  it("exposes the configResolved + configureServer hooks", () => {
    const plugin = statusReporterPlugin({ service: "APP" });
    expect(plugin.name).toBe("vite-plugin-status-reporter");
    expect(plugin.apply).toBe("serve");
    expect(plugin.configResolved).toBeDefined();
    expect(plugin.configureServer).toBeDefined();
  });

  it("publishes PREPARING through the discovered status server URL", async () => {
    const root = makeSuperrepo();
    const sink = await startCaptureServer();
    try {
      writeStatusDiscovery(root, { pid: process.pid, url: sink.url });

      const plugin = statusReporterPlugin({ service: "APP" });
      // Run configResolved with our temp root so it walks up to foundry.yml.
      const configResolved = typeof plugin.configResolved === "function"
        ? plugin.configResolved
        : plugin.configResolved?.handler;
      void configResolved?.call(
        { meta: { rollupVersion: "" }, environment: undefined } as never,
        // Only `root` and `logger` are actually read.
        {
          root,
          logger: { warn: () => {} },
        } as never,
      );

      // configureServer kicks off the PREPARING publish.
      const configureServer = typeof plugin.configureServer === "function"
        ? plugin.configureServer
        : plugin.configureServer?.handler;
      void configureServer?.call(
        { meta: { rollupVersion: "" }, environment: undefined } as never,
        // Minimal ViteDevServer shape: only `httpServer.on` is used here.
        { httpServer: { on: () => undefined } } as never,
      );

      // PREPARING is published asynchronously via fetch; wait for the
      // capture to land. Use a small poll loop to keep the test snappy
      // when fakeTimers is enabled by the vitest config.
      await waitFor(() => sink.capture.events.length >= 1, 2000);
      expect(sink.capture.events[0]).toMatchObject({
        service: "APP",
        status: "PREPARING",
        level: "INFO",
      });
    } finally {
      await sink.close();
    }
  });

  it("no-ops silently when no foundry.yml ancestor exists", () => {
    const plugin = statusReporterPlugin({ service: "APP" });
    const configResolved = typeof plugin.configResolved === "function"
      ? plugin.configResolved
      : plugin.configResolved?.handler;
    void configResolved?.call(
      { meta: { rollupVersion: "" }, environment: undefined } as never,
      { root: workDir, logger: { warn: () => {} } } as never,
    );
    // No discovery, no foundry.yml — publish must early-return without
    // attempting any fetch. We assert by simply running configureServer
    // and not throwing.
    const configureServer = typeof plugin.configureServer === "function"
      ? plugin.configureServer
      : plugin.configureServer?.handler;
    expect(() => {
      void configureServer?.call(
        { meta: { rollupVersion: "" }, environment: undefined } as never,
        { httpServer: { on: () => undefined } } as never,
      );
    }).not.toThrow();
  });
});

async function waitFor(
  predicate: () => boolean,
  timeoutMs: number,
): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (predicate()) return;
    await new Promise((r) => setTimeout(r, 20));
  }
  throw new Error(`waitFor timed out after ${timeoutMs}ms`);
}
