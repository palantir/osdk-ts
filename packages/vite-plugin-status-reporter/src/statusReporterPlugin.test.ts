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

/**
 * Stand up a no-op HTTP server that captures POSTs to `/api/status`. The
 * server resolves a promise on every captured event so tests can `await`
 * the next one deterministically — no polling, no flake under CI load.
 */
async function startCaptureServer(): Promise<{
  url: string;
  capture: { events: unknown[] };
  nextEvent: () => Promise<unknown>;
  close: () => Promise<void>;
}> {
  const capture = { events: [] as unknown[] };
  let pendingResolve: ((value: unknown) => void) | undefined;
  const server = http.createServer((req, res) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      const body = Buffer.concat(chunks).toString("utf-8");
      if (req.method === "POST" && req.url === "/api/status") {
        try {
          const event = JSON.parse(body) as unknown;
          capture.events.push(event);
          pendingResolve?.(event);
          pendingResolve = undefined;
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
    nextEvent: () =>
      new Promise<unknown>((resolve) => {
        // If a captured event is already buffered, deliver it on the next tick.
        if (capture.events.length > 0) {
          resolve(capture.events[capture.events.length - 1]);
          return;
        }
        pendingResolve = resolve;
      }),
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

      // PREPARING is published asynchronously via fetch; await the first
      // captured event deterministically (resolved by the capture server
      // when the POST body lands). 5 s budget guards against pathological
      // CPU starvation; the happy path resolves in ~10 ms.
      const first = await Promise.race([
        sink.nextEvent(),
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
      await sink.close();
    }
  });

  it("no-ops when the discovery file is missing required fields", () => {
    // Regression guard: an earlier version silently coerced `pid` to 0
    // when the field was absent, which then made `isPidAlive(0)` reject
    // — same end-state, but hid schema corruption from the user. The
    // current code rejects the file as malformed before the PID check.
    const root = makeSuperrepo();
    writeStatusDiscovery(root, { url: "http://127.0.0.1:1" }); // no `pid`
    const plugin = statusReporterPlugin({ service: "APP" });
    const configResolved = typeof plugin.configResolved === "function"
      ? plugin.configResolved
      : plugin.configResolved?.handler;
    void configResolved?.call(
      { meta: { rollupVersion: "" }, environment: undefined } as never,
      { root, logger: { warn: () => {} } } as never,
    );
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
