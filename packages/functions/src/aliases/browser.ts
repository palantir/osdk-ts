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

// Browser-safe alias runtime for Dev Console applications.
//
// Unlike the Node loaders (which read a file from the container filesystem via
// fs), a browser has no filesystem or process.env. Instead the platform writes
// the installer's resolved values into the served deployment config file, and
// this module fetches that file once, caches it, and then serves custom()
// synchronously. This file must stay free of `fs`/`process` so it can be
// bundled into a browser app.

import type { Custom, DeploymentConfig } from "./types.js";

export type { Custom } from "./types.js";

/**
 * Default path to the deployment config file served by Foundry website
 * hosting. Resolved relative to the document base URI so apps served under a
 * subpath still find it.
 */
export const DEFAULT_DEPLOYMENT_CONFIG_PATH =
  ".palantir/deployment.config.json";

export interface InitAliasesOptions {
  /**
   * Path or URL to the deployment config file. Relative paths are resolved
   * against `document.baseURI`. Defaults to
   * {@link DEFAULT_DEPLOYMENT_CONFIG_PATH}.
   */
  path?: string;
  /**
   * Custom fetch implementation. Defaults to the global `fetch`. Useful for
   * testing or non-standard hosting.
   */
  fetch?: typeof globalThis.fetch;
}

let cachedCustomAliases: Record<string, string> | undefined;
let inFlight: Promise<void> | undefined;

/**
 * Fetches and caches the resolved aliases for this installation. Call once at
 * application startup and await it before reading any aliases. Repeated calls
 * are deduplicated and become no-ops once the aliases are cached.
 */
export async function initAliases(options?: InitAliasesOptions): Promise<void> {
  if (cachedCustomAliases !== undefined) {
    return;
  }
  if (inFlight === undefined) {
    inFlight = loadAliases(options).catch((error: unknown) => {
      // Clear the in-flight promise so a failed load can be retried.
      inFlight = undefined;
      throw error;
    });
  }
  await inFlight;
}

async function loadAliases(options?: InitAliasesOptions): Promise<void> {
  const fetchImpl = options?.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new TypeError(
      "No fetch implementation available to load aliases. Pass one via " +
        "initAliases({ fetch }).",
    );
  }

  const url = resolveUrl(options?.path ?? DEFAULT_DEPLOYMENT_CONFIG_PATH);
  const response = await fetchImpl(url);
  if (!response.ok) {
    throw new Error(
      `Failed to load aliases from ${url}: ${response.status} ${
        response.statusText
      }`,
    );
  }

  const config = (await response.json()) as DeploymentConfig;
  cachedCustomAliases = parseAliases(config.aliases);
}

function resolveUrl(path: string): string {
  if (typeof document !== "undefined" && document.baseURI) {
    return new URL(path, document.baseURI).toString();
  }
  return path;
}

function parseAliases(raw: string | undefined): Record<string, string> {
  // Apps with no aliases declared simply omit the key.
  if (raw == null || raw === "") {
    return {};
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(
      `Failed to parse resolved aliases: ${(error as Error).message}`,
    );
  }
  if (typeof parsed !== "object" || parsed == null || Array.isArray(parsed)) {
    throw new Error("Resolved aliases must be a JSON object of string values.");
  }
  return parsed as Record<string, string>;
}

/**
 * Returns the resolved value for a custom alias. Aliases must have been loaded
 * via {@link initAliases} first; otherwise this throws.
 */
export function custom(alias: string): Custom {
  if (cachedCustomAliases === undefined) {
    throw new Error(
      "Aliases have not been initialized. Call `await initAliases()` before " +
        "reading aliases.",
    );
  }
  if (!(alias in cachedCustomAliases)) {
    const available = Object.keys(cachedCustomAliases);
    throw new Error(
      `Custom alias '${alias}' not found. Available aliases: [${available.join(
        ", ",
      )}]`,
    );
  }
  return cachedCustomAliases[alias] as Custom;
}

/**
 * Clears the cached aliases. Primarily for tests; production code should not
 * need to reset the cache.
 */
export function resetAliasesCache(): void {
  cachedCustomAliases = undefined;
  inFlight = undefined;
}
