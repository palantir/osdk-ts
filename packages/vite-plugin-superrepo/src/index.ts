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
  readDiscovery,
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
      const missing: DiscoveryService[] = [];

      for (const route of PROXY_ROUTES) {
        const entry = readDiscovery(superrepoRoot, route.service);
        if (!entry) {
          missing.push(route.service);
          continue;
        }
        proxy[route.prefix] = buildProxyOptions(entry, route);
      }

      if (missing.length > 0) {
        // eslint-disable-next-line no-console
        console.warn(
          `[osdk] vite-plugin-superrepo: no live discovery file under `
            + `${path.join(superrepoRoot, ".palantir")} for ${
              missing.join(", ")
            }. `
            + `Start the matching \`foundry start\` services and restart the dev server `
            + `if you need them proxied.`,
        );
      }

      if (Object.keys(proxy).length === 0) return undefined;
      return { server: { proxy } };
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
      // eslint-disable-next-line no-console
      console.warn(
        `[osdk] vite-plugin-superrepo: discovery for ${entry.url} has no `
          + `caCertPath; TLS verification disabled for this proxy.`,
      );
    }
  }
  return options;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
