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
 * The proxy targets `smartClient.ts` expects to be wired up. Each entry maps
 * a path prefix served by the Vite dev server to a local foundry-cli
 * service published via its `.palantir/.<service>-discovery.json` file.
 *
 * Keep this list in sync with the URLs constructed in
 * `src/public/smartClient.ts`.
 */
const PROXY_ROUTES: ReadonlyArray<{
  prefix: string;
  service: DiscoveryService;
  /** Strip the prefix before forwarding. */
  rewrite: boolean;
}> = [
  { prefix: "/api/v2", service: "ontology", rewrite: false },
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
        throw new Error("Running outside a SuperRepo");
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
                + `Run \`foundry start ${route.service}\` and restart the dev `
                + `server to wire up the proxy.`,
            );
            break;
          case "stale":
            pendingWarnings.push(
              `discovery for ${route.service} is stale (recorded PID `
                + `${read.pid} is no longer running). Restart `
                + `\`foundry start ${route.service}\`, then restart the dev `
                + `server.`,
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
      return { server: { proxy } };
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
      const watchedFiles = new Set(
        PROXY_ROUTES.map((r) => `.${r.service}-discovery.json`),
      );

      let restartTimer: ReturnType<typeof setTimeout> | undefined;
      const scheduleRestart = () => {
        if (restartTimer) clearTimeout(restartTimer);
        // Coalesce inotify/FSEvents bursts (rename+write commonly emits
        // multiple events for a single discovery file update).
        restartTimer = setTimeout(() => {
          restartTimer = undefined;
          void server.restart();
        }, 100);
      };

      // foundry-cli creates `.palantir` lazily on the first `foundry start`.
      // Pre-create an empty dir so the watcher can attach immediately and
      // pick up the first discovery file the moment it lands.
      fs.mkdirSync(palantirDir, { recursive: true });

      const watcher = fs.watch(palantirDir, (_event, filename) => {
        if (filename != null && watchedFiles.has(filename)) scheduleRestart();
      });

      server.httpServer?.once("close", () => {
        if (restartTimer) clearTimeout(restartTimer);
        watcher.close();
      });
    },

    transform(code, id) {
      if (!id.endsWith("/src/client.ts")) return null;

      return (
        code
          .replace(/export const client\b/, "const __rawClient")
          .replace(/export default client\b/, "export default __rawClient")
        + `\nimport { smartClient as __sc } from "@osdk/vite-plugin-superrepo/smartClient";\n`
        + `export const client = __sc(__rawClient);\n`
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
