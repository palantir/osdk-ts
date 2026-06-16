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
import type { Logger, Plugin, ProxyOptions, UserConfig } from "vite";
import {
  type DiscoveryEntry,
  type DiscoveryService,
  findSuperrepoRoot,
  inspectDiscovery,
} from "./public/discovery.js";

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
  { prefix: "/api", service: "platform-api-proxy", rewrite: false },
];

/**
 * Vite plugin that transparently wraps the OSDK client with smartClient
 * during development. Any import of `client` from `src/client.ts`
 * automatically gets the local-function-routing wrapper applied.
 * Production builds are completely untouched.
 */
export function smartClientPlugin(): Plugin {
  const pendingWarnings: string[] = [];
  const setupProxies: Array<{ prefix: string; target: string }> = [];
  let logger: Logger | undefined;
  const getLogger = (): Logger | undefined => logger;

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

      // Vite's proxy middleware runs before `base` is stripped from the URL,
      // so each context must carry the base prefix and each rewrite must strip
      // it back off before forwarding to the foundry-cli service.
      const basePrefix = normalizeBasePrefix(userConfig.base);

      const proxy: Record<string, ProxyOptions> = {};
      const palantirDir = path.join(superrepoRoot, ".palantir");

      for (const route of PROXY_ROUTES) {
        const read = inspectDiscovery(superrepoRoot, route.service);
        if (read.kind === "ok") {
          const context = `${basePrefix}${route.prefix}`;
          proxy[context] = buildProxyOptions(
            read.entry,
            route,
            basePrefix,
            pendingWarnings,
            getLogger,
          );
          setupProxies.push({ prefix: context, target: read.entry.url });
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
      logger = resolvedConfig.logger;
      for (const message of pendingWarnings) {
        resolvedConfig.logger.warn(`[vite-plugin-superrepo] ${message}`);
      }
      pendingWarnings.length = 0;

      if (setupProxies.length > 0) {
        const width = Math.max(...setupProxies.map((p) => p.prefix.length));
        resolvedConfig.logger.info("[vite-plugin-superrepo] proxies:");
        for (const { prefix, target } of setupProxies) {
          resolvedConfig.logger.info(
            `  ${prefix.padEnd(width)} → ${target}`,
          );
        }
      }
    },

    configureServer(server) {
      const superrepoRoot = findSuperrepoRoot(server.config.root);
      if (!superrepoRoot) return;

      const ownWatcher = server.watcher;

      const palantirDir = path.join(superrepoRoot, ".palantir");
      const expectedFiles = PROXY_ROUTES.map((r) =>
        path.join(palantirDir, `.${r.service}-discovery.json`)
      );
      const expectedFileSet = new Set(expectedFiles);

      // Fingerprint of the current set of live discovery files. We compare
      // against this after every restart to detect changes that vite swallowed
      // via its `_restartPromise` dedup, and on every poll tick to detect
      // chokidar events the watcher never delivered.
      const snapshot = (): string =>
        PROXY_ROUTES.map((r) => {
          const read = inspectDiscovery(superrepoRoot, r.service);
          return read.kind === "ok"
            ? `${r.service}:${read.entry.url}`
            : `${r.service}:${read.kind}`;
        }).join("|");

      let lastObserved = snapshot();
      let restartChain: Promise<void> | undefined;
      let restartTimer: ReturnType<typeof setTimeout> | undefined;

      // Restart in a loop until the discovery fingerprint is stable across a
      // full restart cycle
      const doRestart = (): Promise<void> => {
        if (restartChain) return restartChain;
        restartChain = (async () => {
          let before: string;
          do {
            before = snapshot();
            await server.restart();
          } while (snapshot() !== before);
          lastObserved = before;
        })().finally(() => {
          restartChain = undefined;
        });
        return restartChain;
      };

      const scheduleRestart = (): void => {
        if (restartTimer) clearTimeout(restartTimer);
        // Coalesce rename+write bursts that commonly emit multiple events
        // for a single discovery file update.
        restartTimer = setTimeout(() => {
          restartTimer = undefined;
          void doRestart();
        }, 100);
      };

      const onPathChange = (file: string): void => {
        if (expectedFileSet.has(file)) scheduleRestart();
      };

      server.watcher.add(expectedFiles);
      server.watcher.on("add", onPathChange);
      server.watcher.on("change", onPathChange);
      server.watcher.on("unlink", onPathChange);

      // Polling fallback. Chokidar on Linux can drop the `add` event for a
      // path that did not exist when `server.watcher.add()` ran (vite passes
      // `ignoreInitial: true`
      const pollInterval = setInterval(() => {
        // Vite restart swaps `server.watcher` for a fresh instance; stop
        // polling once that happens so we don't leak a timer per restart.
        if (server.watcher !== ownWatcher) {
          clearInterval(pollInterval);
          return;
        }
        const current = snapshot();
        if (current !== lastObserved) {
          lastObserved = current;
          scheduleRestart();
        }
      }, 1000);

      const cleanup = (): void => {
        clearInterval(pollInterval);
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
      // that (a) forces the dev server's origin and base path as the base
      // URL so every OSDK request flows through Vite's proxy, and (b) wraps
      // the resulting client with `smartClient` so `executeFunction`
      // calls are routed to the local function runtimes. `@osdk/oauth`
      // and any other imports are untouched.
      return code.replace(
        /from\s+(["'])@osdk\/client\1/,
        `from "@osdk/vite-plugin-superrepo/osdkClient"`,
      );
    },
  };
}

function buildProxyOptions(
  entry: DiscoveryEntry,
  route: { prefix: string; rewrite: boolean },
  basePrefix: string,
  pendingWarnings: string[],
  getLogger: () => Logger | undefined,
): ProxyOptions {
  const isHttps = entry.url.startsWith("https://");
  const options: ProxyOptions = {
    target: entry.url,
    changeOrigin: true,
    configure: (proxy) => {
      proxy.on("proxyReq", (_proxyReq, req) => {
        getLogger()?.info(
          `[vite-plugin-superrepo] ${route.prefix} ${req.method} ${req.url}`
            + ` → ${entry.url}`,
        );
      });
    },
  };
  // Always strip the base prefix; additionally strip the route prefix for
  // routes whose backend is not mounted under it.
  const stripPrefix = route.rewrite
    ? `${basePrefix}${route.prefix}`
    : basePrefix;
  if (stripPrefix) {
    options.rewrite = (p) =>
      p.replace(new RegExp(`^${escapeRegExp(stripPrefix)}`), "");
  }
  if (isHttps) {
    if (entry.caCertPath !== undefined && fs.existsSync(entry.caCertPath)) {
      options.agent = new https.Agent({
        ca: fs.readFileSync(entry.caCertPath),
      });
      options.secure = true;
    } else {
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

/**
 * Reduce a Vite `base` to a bare path prefix with no trailing slash, so
 * `${basePrefix}${route.prefix}` reads as a clean path (`/base/api`). The root
 * base (`/`, the default) yields an empty prefix, leaving proxy contexts
 * identical to a non-prefixed dev server.
 */
function normalizeBasePrefix(base: string | undefined): string {
  if (base == null || base === "/" || base === "") return "";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}
