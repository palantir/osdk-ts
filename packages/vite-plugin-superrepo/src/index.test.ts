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
import { fileURLToPath } from "node:url";
import type { ProxyOptions, UserConfig } from "vite";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { PROXY_ROUTES, smartClientPlugin } from "./index.js";
import { DISCOVERY_DIR } from "./internal/discovery.js";

/**
 * Invoke the plugin's `config` hook the way Vite would and return the
 * mutated user config. The plugin mutates in place (so its discovered
 * targets override any same-named user-defined keys) and returns
 * undefined; tests inspect `userConfig.server.proxy` directly.
 */
function callConfigHook(
  userRoot: string,
  userConfig: UserConfig = { root: userRoot },
): UserConfig {
  const plugin = smartClientPlugin();
  const hook = plugin.config;
  const fn = typeof hook === "function" ? hook : hook?.handler;
  if (!fn) throw new Error("smartClientPlugin must declare a `config` hook");
  const callable = fn as unknown as (
    cfg: UserConfig,
    env: { command: "serve" | "build"; mode: string },
  ) => UserConfig | null | undefined;
  callable(userConfig, { command: "serve", mode: "development" });
  return userConfig;
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
  it("no-ops silently when no foundry.yml ancestor exists", () => {
    // The plugin only makes sense inside a superrepo, but it must not
    // kill `vite dev` startup if it happens to be loaded elsewhere —
    // matching how the status-reporter plugin handles the same case.
    expect(() => callConfigHook(workDir)).not.toThrow();
    expect(callConfigHook(workDir).server?.proxy).toBeUndefined();
  });

  it("leaves the user config untouched when no discovery files exist", () => {
    makeSuperrepo();
    const cfg = callConfigHook(workDir);
    expect(cfg.server?.proxy).toBeUndefined();
  });

  it("installs all three ontology prefixes when its discovery file is present", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", {
      pid: process.pid,
      url: "https://127.0.0.1:51000",
      // No caCertPath → expect secure: false fallback.
    });
    const cfg = callConfigHook(root);
    const proxy = cfg.server?.proxy as Record<string, ProxyOptions>;
    expect(proxy).toBeDefined();
    // The ontology service serves three distinct prefixes: REST, Conjure
    // metadata, and the object-set service. All three must be proxied to
    // the same discovered target.
    for (
      const prefix of ["/api/v2", "/ontology-metadata", "/object-set-service"]
    ) {
      expect(proxy[prefix].target).toBe("https://127.0.0.1:51000");
      expect(proxy[prefix].changeOrigin).toBe(true);
      expect(proxy[prefix].secure).toBe(false);
      // No rewrite — the ontology server serves these prefixes directly.
      expect(proxy[prefix].rewrite).toBeUndefined();
    }
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

  it("ignores discovery files with an invalid pid", () => {
    // pid: 0 fails schema validation outright; the hook must not wire up
    // a proxy regardless of whether the failure is classified as
    // "malformed" or "stale".
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", { pid: 0, url: "https://127.0.0.1:1" });
    const cfg = callConfigHook(root);
    expect(cfg.server?.proxy).toBeUndefined();
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
    const proxy = cfg.server?.proxy as Record<string, ProxyOptions>;
    expect(Object.keys(proxy).sort()).toEqual([
      "/api/v2",
      "/local-python-functions",
      "/object-set-service",
      "/ontology-metadata",
    ]);
  });

  it("prepends its routes ahead of pre-existing user proxies", () => {
    // Iteration order matters: vite matches by `startsWith` in insertion
    // order, so a user-defined broad `/api` would otherwise shadow the
    // plugin's more specific `/api/v2`.
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", {
      pid: process.pid,
      url: "https://127.0.0.1:51000",
    });
    const userProxy: Record<string, ProxyOptions> = {
      "/ontology-metadata": { target: "http://wrong:1" },
      "/api": { target: "http://wrong:2" },
    };
    const cfg = callConfigHook(root, {
      root,
      server: { proxy: userProxy },
    });
    const keys = Object.keys(cfg.server?.proxy as Record<string, unknown>);
    // Plugin keys must appear before any user key.
    const firstUserKey = keys.findIndex(k => k === "/api");
    const lastPluginKey = keys.findIndex(k => k === "/object-set-service");
    expect(lastPluginKey).toBeGreaterThanOrEqual(0);
    expect(firstUserKey).toBeGreaterThan(lastPluginKey);
    // Plugin's value wins for keys we own (mutation order via spread).
    const proxy = cfg.server?.proxy as Record<string, ProxyOptions>;
    expect(proxy["/ontology-metadata"].target).toBe("https://127.0.0.1:51000");
    // User keys we don't own pass through untouched.
    expect(proxy["/api"].target).toBe("http://wrong:2");
  });
});

describe("smartClientPlugin transform hook", () => {
  function callTransform(code: string, id: string): string | null {
    const plugin = smartClientPlugin();
    const hook = plugin.transform;
    const fn = typeof hook === "function" ? hook : hook?.handler;
    if (!fn) {
      throw new Error("smartClientPlugin must declare a `transform` hook");
    }
    const callable = fn as unknown as (
      c: string,
      i: string,
    ) => string | null;
    return callable(code, id);
  }

  it("redirects the @osdk/client import to the plugin shim", () => {
    const src = `
import { createClient, type Client } from "@osdk/client";
const foundryUrl = "http://localhost:8080";
const ontologyRid = "ri.ontology.main.ontology.x";
const auth = () => "tok";
export const client: Client = createClient(foundryUrl, ontologyRid, auth);
export default client;
`;
    const out = callTransform(src, "/abs/app/src/client.ts");
    expect(out).not.toBeNull();
    // The import source is rewritten; everything else is untouched.
    expect(out).toContain(
      `from "@osdk/vite-plugin-superrepo/osdkClient"`,
    );
    expect(out).not.toContain(`from "@osdk/client"`);
    expect(out).toContain("createClient(foundryUrl, ontologyRid, auth)");
    expect(out).toContain("export const client");
    expect(out).toContain("export default client");
  });

  it("survives non-trivial createClient call shapes", () => {
    // A previous implementation tried to rewrite the first call argument
    // with a regex and broke on commas inside expressions or multi-line
    // calls. The shim-based rewrite touches only the import source, so
    // these shapes round-trip unchanged.
    const src = `
import { createClient } from "@osdk/client";
const pickUrl = (a: string, b: string) => a || b;
export const client = createClient(
  pickUrl(envUrl, defaultUrl),
  ontologyRid,
  auth,
);
`;
    const out = callTransform(src, "/abs/app/src/client.ts") ?? "";
    expect(out).toContain(`from "@osdk/vite-plugin-superrepo/osdkClient"`);
    // The original call shape is preserved verbatim.
    expect(out).toContain("createClient(\n  pickUrl(envUrl, defaultUrl),");
  });

  it("leaves @osdk/oauth and other imports alone", () => {
    const src = `
import { createPublicOauthClient } from "@osdk/oauth";
import { createClient } from "@osdk/client";
import { something } from "@osdk/client-extras";
const foundryUrl = "https://stack.foundry.example";
export const auth = createPublicOauthClient("cid", foundryUrl, "/cb");
export const client = createClient(foundryUrl, "rid", auth);
`;
    const out = callTransform(src, "/abs/app/src/client.ts") ?? "";
    expect(out).toContain(`from "@osdk/oauth"`);
    expect(out).toContain(`from "@osdk/client-extras"`);
    expect(out).toContain(`from "@osdk/vite-plugin-superrepo/osdkClient"`);
    expect(out).not.toMatch(/from\s+["']@osdk\/client["']/);
  });

  it("only touches /src/client.ts", () => {
    expect(callTransform("export const client = 1;", "/abs/other.ts"))
      .toBeNull();
  });
});

describe("PROXY_ROUTES vs smartClient.ts (drift guard)", () => {
  it("every rewriting prefix is actually requested by smartClient.ts", () => {
    // Only routes with `rewrite: true` correspond to URLs that
    // `smartClient.ts` itself constructs (local function runtimes).
    // The ontology prefixes (`/api/v2`, `/ontology-metadata`, etc.)
    // are owned by `@osdk/client`'s internals and aren't grep-able
    // from this file. If you add a *new* rewriting route without
    // wiring it up in smartClient.ts (or vice versa), this fails.
    const here = path.dirname(fileURLToPath(import.meta.url));
    const smartClientSource = fs.readFileSync(
      path.join(here, "public", "smartClient.ts"),
      "utf-8",
    );
    for (const route of PROXY_ROUTES.filter((r) => r.rewrite)) {
      expect(
        smartClientSource.includes(`"${route.prefix}/`)
          || smartClientSource.includes(`"${route.prefix}"`),
        `PROXY_ROUTES declares ${route.prefix} but smartClient.ts never `
          + `references it — either remove the route or wire it up.`,
      ).toBe(true);
    }
  });
});
