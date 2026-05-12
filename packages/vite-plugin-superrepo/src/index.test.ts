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
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { smartClientPlugin } from "./index.js";
import { DISCOVERY_DIR } from "./internal/discovery.js";

/**
 * Invoke the plugin's `config` hook directly, the way Vite would, and
 * return the partial config it produced.
 */
function callConfigHook(userRoot: string): UserConfig | undefined {
  const plugin = smartClientPlugin();
  const hook = plugin.config;
  // Vite's `config` hook can also be `{ handler, order }`.
  const fn = typeof hook === "function" ? hook : hook?.handler;
  if (!fn) throw new Error("smartClientPlugin must declare a `config` hook");
  // Cast to a plain callable to bypass rollup's `ConfigPluginContext` `this`
  // requirement; the hook doesn't use any plugin-context fields.
  const callable = fn as unknown as (
    cfg: UserConfig,
    env: { command: "serve" | "build"; mode: string },
  ) => UserConfig | null | undefined;
  return callable({ root: userRoot }, { command: "serve", mode: "development" })
    ?? undefined;
}

let workDir: string;

beforeEach(() => {
  workDir = fs.mkdtempSync(path.join(os.tmpdir(), "vps-plugin-test-"));
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

function writeDiscovery(root: string, kebab: string, body: object): void {
  const dir = path.join(root, DISCOVERY_DIR);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, `.${kebab}-discovery.json`),
    JSON.stringify(body),
  );
}

describe("smartClientPlugin config hook", () => {
  it("returns undefined when no foundry.yml ancestor exists", () => {
    expect(callConfigHook(workDir)).toBeUndefined();
  });

  it("returns undefined when no discovery files exist", () => {
    makeSuperrepo();
    expect(callConfigHook(workDir)).toBeUndefined();
  });

  it("installs the ontology proxy when its discovery file is present", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", {
      pid: process.pid,
      url: "https://127.0.0.1:51000",
      // No caCertPath → expect secure: false fallback.
    });
    const cfg = callConfigHook(root);
    const proxy = cfg?.server?.proxy as Record<string, ProxyOptions>;
    expect(proxy).toBeDefined();
    expect(proxy["/api/v2"].target).toBe("https://127.0.0.1:51000");
    expect(proxy["/api/v2"].changeOrigin).toBe(true);
    expect(proxy["/api/v2"].secure).toBe(false);
    // /api/v2 must NOT rewrite — the ontology server serves /api/v2/* directly.
    expect(proxy["/api/v2"].rewrite).toBeUndefined();
  });

  it("strips the prefix when proxying typescript-functions", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "typescript-functions", {
      pid: process.pid,
      url: "https://127.0.0.1:52000",
    });
    const cfg = callConfigHook(root);
    const proxy = cfg?.server?.proxy as Record<string, ProxyOptions>;
    const local = proxy["/local-functions"];
    expect(local.target).toBe("https://127.0.0.1:52000");
    const rewrite = local.rewrite as (p: string) => string;
    expect(rewrite("/local-functions/functions-typescript-runtime/api/x")).toBe(
      "/functions-typescript-runtime/api/x",
    );
    // Untouched path stays the same.
    expect(rewrite("/unrelated")).toBe("/unrelated");
  });

  it("strips the prefix when proxying python-functions and skips TLS agent on HTTP", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "python-functions", {
      pid: process.pid,
      url: "http://127.0.0.1:53000",
    });
    const cfg = callConfigHook(root);
    const proxy = cfg?.server?.proxy as Record<string, ProxyOptions>;
    const py = proxy["/local-python-functions"];
    expect(py.target).toBe("http://127.0.0.1:53000");
    expect(py.agent).toBeUndefined();
    const rewrite = py.rewrite as (p: string) => string;
    expect(rewrite("/local-python-functions/api/functions/preview/specs")).toBe(
      "/api/functions/preview/specs",
    );
  });

  it("ignores stale discovery files (PID 0)", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", { pid: 0, url: "https://127.0.0.1:1" });
    expect(callConfigHook(root)).toBeUndefined();
  });

  it("trusts the published CA cert when caCertPath is supplied", () => {
    const root = makeSuperrepo();
    // Generate a believable PEM blob; we don't need a real cert chain
    // because we only assert the agent reads the file.
    const caPath = path.join(workDir, "ca.cer");
    fs.writeFileSync(
      caPath,
      "-----BEGIN CERTIFICATE-----\nfake\n-----END CERTIFICATE-----\n",
    );
    writeDiscovery(root, "ontology", {
      pid: process.pid,
      url: "https://127.0.0.1:54000",
      caCertPath: caPath,
    });
    const cfg = callConfigHook(root);
    const proxy = cfg?.server?.proxy as Record<string, ProxyOptions>;
    expect(proxy["/api/v2"].secure).toBe(true);
    // `agent` is a https.Agent instance; just verify it exists and is non-null.
    expect(proxy["/api/v2"].agent).toBeDefined();
  });

  it("can install multiple proxies at once", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", {
      pid: process.pid,
      url: "https://127.0.0.1:51000",
    });
    writeDiscovery(root, "python-functions", {
      pid: process.pid,
      url: "http://127.0.0.1:53000",
    });
    const cfg = callConfigHook(root);
    const proxy = cfg?.server?.proxy as Record<string, ProxyOptions>;
    expect(Object.keys(proxy).sort()).toEqual([
      "/api/v2",
      "/local-python-functions",
    ]);
  });
});
