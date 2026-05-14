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
import https from "node:https";
import path from "node:path";
import type { Plugin, ProxyOptions, UserConfig } from "vite";
import {
  type DiscoveryEntry,
  type DiscoveryService,
  findSuperrepoRoot,
  inspectDiscovery,
} from "./internal/discovery.js";

/**
 * Each entry maps a path prefix served by the Vite dev server to a
 * local foundry-cli service published via its
 * `.palantir/.<service>-discovery.json` file.
 */
export const PROXY_ROUTES: ReadonlyArray<{
  prefix: string;
  service: DiscoveryService;
  /** Strip the prefix before forwarding. */
  rewrite: boolean;
}> = [
  { prefix: "/api/v2", service: "ontology", rewrite: false },
  { prefix: "/ontology-metadata", service: "ontology", rewrite: false },
  { prefix: "/object-set-service", service: "ontology", rewrite: false },
  {
    prefix: "/local-functions",
    service: "typescript-functions",
    rewrite: true,
  },
  {
    prefix: "/local-python-functions",
    service: "python-functions",
    rewrite: true,
  },
];

/**
 * Vite plugin that transparently wraps the OSDK client with smartClient
 * during development. Any import of `client` from `src/client.ts`
 * automatically gets the local-function-routing wrapper applied.
 * Production builds are completely untouched.
 */
export function smartClientPlugin(): Plugin {
  const pendingWarnings: string[] = [];

  return {
    name: "vite-plugin-smart-client",
    apply: "serve",

    config(userConfig): UserConfig | undefined {
      const root = userConfig.root ?? process.cwd();
      const superrepoRoot = findSuperrepoRoot(root);
      if (!superrepoRoot) {
        pendingWarnings.push(
          "running outside a SuperRepo (no `foundry.yml` ancestor found "
            + `from ${root}); proxy routes will not be installed.`,
        );
        return undefined;
      }

      const proxy: Record<string, ProxyOptions> = {};
      const palantirDir = path.join(superrepoRoot, ".palantir");

      for (const route of PROXY_ROUTES) {
        const read = inspectDiscovery(superrepoRoot, route.service);
        if (read.kind === "ok") {
          proxy[route.prefix] = buildProxyOptions(
            read.entry,
            route,
            pendingWarnings,
          );
          continue;
        }
        switch (read.kind) {
          case "missing":
            pendingWarnings.push(
              `no live discovery for ${route.service} under ${palantirDir}. `
                + `Run \`foundry start ${route.service}\` and the dev server `
                + `will pick it up automatically.`,
            );
            break;
          case "stale":
            pendingWarnings.push(
              `discovery for ${route.service} is stale (recorded PID `
                + `${read.pid} is no longer running). Restart `
                + `\`foundry start ${route.service}\`.`,
            );
            break;
          case "malformed":
            pendingWarnings.push(
              `${route.service} discovery file is corrupt (${read.reason}). `
                + `Delete ${palantirDir}/.${route.service}-discovery.json and `
                + `restart \`foundry start ${route.service}\`.`,
            );
            break;
        }
      }

      if (Object.keys(proxy).length === 0) return undefined;

      userConfig.server ??= {};
      const existing = {
        ...(userConfig.server.proxy ?? {}),
      } as Record<string, ProxyOptions>;
      for (const key of Object.keys(proxy)) delete existing[key];
      userConfig.server.proxy = { ...proxy, ...existing };
      return undefined;
    },

    configResolved(resolvedConfig) {
      for (const message of pendingWarnings) {
        resolvedConfig.logger.warn(`[vite-plugin-superrepo] ${message}`);
      }
      pendingWarnings.length = 0;
    },

    configureServer(server) {
      const superrepoRoot = findSuperrepoRoot(server.config.root);
      if (!superrepoRoot) return;

      const palantirDir = path.join(superrepoRoot, ".palantir");
      const expectedFiles = PROXY_ROUTES.map((r) =>
        path.join(palantirDir, `.${r.service}-discovery.json`)
      );
      const expectedFileSet = new Set(expectedFiles);

      let restartTimer: ReturnType<typeof setTimeout> | undefined;
      const scheduleRestart = (): void => {
        if (restartTimer) clearTimeout(restartTimer);
        // Coalesce rename+write bursts that commonly emit multiple events
        // for a single discovery file update.
        restartTimer = setTimeout(() => {
          restartTimer = undefined;
          void server.restart();
        }, 100);
      };

      const onPathChange = (file: string): void => {
        if (expectedFileSet.has(file)) scheduleRestart();
      };

      server.watcher.add(expectedFiles);
      server.watcher.on("add", onPathChange);
      server.watcher.on("change", onPathChange);
      server.watcher.on("unlink", onPathChange);

      const cleanup = (): void => {
        if (restartTimer) clearTimeout(restartTimer);
        server.watcher.off("add", onPathChange);
        server.watcher.off("change", onPathChange);
        server.watcher.off("unlink", onPathChange);
      };

      if (server.httpServer) {
        server.httpServer.once("close", cleanup);
      } else {
        // Middleware mode: there's no httpServer to hook into and Vite
        // exposes no plugin teardown for it. Fall back to process signals
        // so we at least don't leak the timer when the host process exits.
        process.once("SIGINT", cleanup);
        process.once("SIGTERM", cleanup);
      }
    },

    transform(code, id) {
      if (!id.endsWith("/src/client.ts")) return null;

      // Redirect the `@osdk/client` import to our shim. The shim
      // re-exports the real module but replaces `createClient` with one
      // that (a) forces `window.location.origin` as the base URL so
      // every OSDK request flows through Vite's proxy, and (b) wraps
      // the resulting client with `smartClient` so `executeFunction`
      // calls are routed to the local function runtimes. `@osdk/oauth`
      // and any other imports are untouched. Dev-only via
      // `apply: "serve"`.
      return code.replace(
        /from\s+(["'])@osdk\/client\1/,
        `from "@osdk/vite-plugin-superrepo/osdkClient"`,
      );
    },
  };
}

/**
 * Build the `ProxyOptions` for one discovered target. HTTPS targets get a
 * dedicated `https.Agent` configured with the published CA cert so we
 * properly verify the foundry-cli's self-signed certificate instead of
 * disabling TLS verification wholesale.
 */
function buildProxyOptions(
  entry: DiscoveryEntry,
  route: { prefix: string; rewrite: boolean },
  pendingWarnings: string[],
): ProxyOptions {
  const isHttps = entry.url.startsWith("https://");
  const options: ProxyOptions = {
    target: entry.url,
    changeOrigin: true,
  };
  if (route.rewrite) {
    options.rewrite = (p) =>
      p.replace(new RegExp(`^${escapeRegExp(route.prefix)}`), "");
  }
  if (isHttps) {
    if (entry.caCertPath !== undefined && fs.existsSync(entry.caCertPath)) {
      options.agent = new https.Agent({
        ca: fs.readFileSync(entry.caCertPath),
      });
      options.secure = true;
    } else {
      // No published CA — fall back to skipping verification. We log so the
      // user knows TLS pinning was downgraded.
      options.secure = false;
      pendingWarnings.push(
        `discovery for ${entry.url} has no caCertPath; `
          + `TLS verification disabled for this proxy.`,
      );
    }
  }
  return options;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
