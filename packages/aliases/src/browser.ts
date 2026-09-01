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

// Browser-safe alias runtime. Must stay free of `fs`/`process` so it can be
// bundled into a browser app.

import type { Custom } from "./types.js";

export type { Custom } from "./types.js";

/** Author defaults locally; installer-resolved values on an installed site. */
export const DEFAULT_RESOURCES_PATH = "resources.json";

interface InitAliasesOptions {
  /** Test seam; not exposed by the public browser entry point. */
  fetch?: typeof globalThis.fetch;
}

/** Aliases loaded for this application. */
export interface LoadedAliases {
  /** Returns a resolved custom alias. */
  custom(alias: string): Custom;
}

let cachedCustomAliases: Record<string, string> | undefined;
let inFlight: Promise<void> | undefined;

const loadedAliases: LoadedAliases = Object.freeze({ custom });

/**
 * Loads and caches the aliases for this installation, then returns a
 * synchronous reader. Repeated and concurrent calls share the same load.
 *
 * @experimental Exposed only via "@osdk/aliases/experimental". Both custom
 * aliases and the shape of this API are provisional and may change.
 */
export async function load(): Promise<LoadedAliases> {
  await initAliases();
  return loadedAliases;
}

/**
 * Populates the alias cache. Concurrent calls share a request, and failed
 * requests may be retried.
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
  const declarations = await fetchJson(fetchImpl, DEFAULT_RESOURCES_PATH);
  cachedCustomAliases =
    declarations === undefined
      ? {}
      : extractCustomAliases(declarations.value, declarations.url);
}

interface FetchedJson {
  value: unknown;
  url: string;
}

/** Returns `undefined` when the file appears absent. Any other failure throws. */
async function fetchJson(
  fetchImpl: typeof globalThis.fetch,
  path: string,
): Promise<FetchedJson | undefined> {
  const url = resolveUrl(path);
  const response = await fetchImpl(url);
  if (response.status === 404) {
    return undefined;
  }
  if (!response.ok) {
    throw new Error(
      `Failed to load aliases from ${url}: ${response.status} ${response.statusText}`,
    );
  }

  const body = await response.text();

  // Single-page-app hosts rewrite unknown paths to index.html and answer 200,
  // so an HTML document is how "not found" usually presents.
  if (isHtmlDocument(body)) {
    return undefined;
  }

  return { value: parseJson(body, url), url };
}

/**
 * Detects SPA fallback pages returned for missing files. Inspect the body because
 * Foundry website hosting does not reliably serve `.json` with an HTML type.
 */
function isHtmlDocument(body: string): boolean {
  const start = body.trimStart().slice(0, 32).toLowerCase();
  return start.startsWith("<!doctype html") || start.startsWith("<html");
}

function parseJson(body: string, url: string): unknown {
  try {
    return JSON.parse(body) as unknown;
  } catch (error) {
    throw new Error(`Failed to read aliases from ${url}: not valid JSON.`, {
      cause: error,
    });
  }
}

/** Converts `{ aliases: { custom: { key: { value: "value" } } } }` into `{ key: "value" }`. */
function extractCustomAliases(
  config: unknown,
  url: string,
): Record<string, string> {
  const aliases = getAliasesField(config, url);
  if (aliases == null) {
    return {};
  }
  if (!isJsonObject(aliases)) {
    throw new TypeError(
      `Failed to read aliases from ${url}: 'aliases' must be an object in resources.json.`,
    );
  }

  const declarations = aliases.custom;
  if (declarations == null) {
    return {};
  }
  if (!isJsonObject(declarations)) {
    throw new TypeError(
      `Failed to read aliases from ${url}: 'aliases.custom' must be an object.`,
    );
  }
  return toStringRecord(
    Object.fromEntries(
      Object.entries(declarations).map(([key, declaration]) => {
        if (!isJsonObject(declaration)) {
          throw new TypeError(
            `Failed to read alias '${key}' from ${url}: declaration must be an object.`,
          );
        }
        return [
          key,
          Object.hasOwn(declaration, "value") ? declaration.value : "",
        ];
      }),
    ),
  );
}

function getAliasesField(config: unknown, url: string): unknown {
  if (!isJsonObject(config)) {
    throw new TypeError(
      `Failed to read aliases from ${url}: expected a JSON object.`,
    );
  }
  return config.aliases;
}

function isJsonObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function resolveUrl(path: string): string {
  if (typeof document !== "undefined" && document.baseURI) {
    return new URL(path, document.baseURI).toString();
  }
  return path;
}

/**
 * Validates values loaded from JSON before treating them as strings. TypeScript
 * types do not validate runtime data, so without this check `custom()` could
 * return a number or object despite declaring a string return type.
 */
function toStringRecord(
  parsed: Record<string, unknown>,
): Record<string, string> {
  // Null prototype, so assigning a key named `__proto__` creates an own
  // property. On a normal object that assignment hits the inherited `__proto__`
  // setter, which ignores a string value, silently dropping the alias.
  const result = Object.create(null) as Record<string, string>;
  for (const [key, value] of Object.entries(parsed)) {
    if (typeof value !== "string") {
      throw new TypeError(
        `Alias '${key}' must be a string, got ${
          Array.isArray(value) ? "array" : typeof value
        }.`,
      );
    }
    result[key] = value;
  }
  return result;
}

/**
 * Returns the resolved value for a custom alias. Aliases must have been loaded
 * via {@link initAliases} first; otherwise this throws.
 *
 * @experimental Exposed only via "@osdk/aliases/experimental". Both custom
 * aliases and the shape of this API are provisional and may change.
 */
export function custom(alias: string): Custom {
  if (cachedCustomAliases === undefined) {
    throw new Error(
      "Aliases have not been initialized. Call `await initAliases()` before " +
        "reading aliases.",
    );
  }
  // Only accept names explicitly defined in the alias file. JavaScript objects
  // may also expose built-in names such as `toString` and `__proto__`.
  if (!Object.hasOwn(cachedCustomAliases, alias)) {
    const available = Object.keys(cachedCustomAliases);
    throw new Error(
      `Custom alias '${alias}' not found. Available aliases: [${available.join(
        ", ",
      )}]`,
    );
  }
  return cachedCustomAliases[alias] as Custom;
}

/** For tests. Deliberately not part of the public entry point. */
export function resetAliasesCache(): void {
  cachedCustomAliases = undefined;
  inFlight = undefined;
}
