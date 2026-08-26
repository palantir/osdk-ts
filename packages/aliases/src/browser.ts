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
//
// Two files can supply aliases:
//
//   .palantir/deployment.config.json  the installer's values, written at install
//   public/resources.json            the author's declared defaults
//
// The deployment config is tried first; the declaration file is used only when it
// appears absent. Any other failure throws rather than falling back, because on
// an installed site both files are served, so treating an error as absence would
// serve the author's defaults in place of the installer's values.

import type {
  AliasDeclarationsFile,
  Custom,
  DeploymentConfig,
} from "./types.js";

export type { Custom } from "./types.js";

/** Written at install time, so it carries the installer's resolved values. */
export const DEFAULT_DEPLOYMENT_CONFIG_PATH =
  ".palantir/deployment.config.json";

/** The author's declaration file, so it carries the declared defaults. */
export const DEFAULT_DECLARATIONS_PATH = "resources.json";

export interface LoadAliasesOptions {
  /**
   * Custom fetch implementation. Defaults to the global `fetch`. Useful for
   * testing or non-standard hosting.
   */
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
export async function load(
  options?: LoadAliasesOptions,
): Promise<LoadedAliases> {
  await initAliases(options);
  return loadedAliases;
}

/**
 * Populates the alias cache. Concurrent calls share a request, and failed
 * requests may be retried.
 */
export async function initAliases(options?: LoadAliasesOptions): Promise<void> {
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

async function loadAliases(options?: LoadAliasesOptions): Promise<void> {
  const fetchImpl = options?.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new TypeError(
      "No fetch implementation available to load aliases. Pass one via " +
        "Aliases.load({ fetch }).",
    );
  }

  // Prefer installer values from `.palantir/deployment.config.json`; fall back
  // to author defaults in `resources.json` only when it is absent.
  const resolved = await fetchAliases(
    fetchImpl,
    DEFAULT_DEPLOYMENT_CONFIG_PATH,
  );
  if (resolved !== undefined) {
    cachedCustomAliases = resolved;
    return;
  }

  console.warn(
    `No alias config at ${resolveUrl(DEFAULT_DEPLOYMENT_CONFIG_PATH)}, ` +
      `falling back to declared defaults in ${resolveUrl(
        DEFAULT_DECLARATIONS_PATH,
      )}. ` +
      "This is expected during local development.",
  );
  cachedCustomAliases =
    (await fetchAliases(fetchImpl, DEFAULT_DECLARATIONS_PATH)) ?? {};
}

/** Returns `undefined` when the file appears absent. Any other failure throws. */
async function fetchAliases(
  fetchImpl: typeof globalThis.fetch,
  path: string,
): Promise<Record<string, string> | undefined> {
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

  return extractAliases(parseJson(body, url), url);
}

/**
 * A document preamble only, not any body starting with `<`. This result means
 * "absent", which triggers the fallback, and a proxy or auth page can also be a
 * 200 with markup; requiring a preamble keeps XML and partial-HTML error bodies
 * from qualifying. Sniffed rather than read from the content type because
 * Foundry website hosting derives that from the file extension and does not
 * recognize `.json`.
 */
function isHtmlDocument(body: string): boolean {
  const start = body.trimStart().slice(0, 32).toLowerCase();
  return start.startsWith("<!doctype html") || start.startsWith("<html");
}

function parseJson(
  body: string,
  url: string,
): DeploymentConfig | AliasDeclarationsFile {
  try {
    return JSON.parse(body) as DeploymentConfig | AliasDeclarationsFile;
  } catch (error) {
    throw new Error(`Failed to read aliases from ${url}: not valid JSON.`, {
      cause: error,
    });
  }
}

/** Reads aliases out of either supported file shape. */
function extractAliases(
  config: DeploymentConfig | AliasDeclarationsFile,
  url: string,
): Record<string, string> {
  const aliases = config.aliases;

  if (aliases == null || aliases === "") {
    return {};
  }

  // Production packs resolved values into a stringified JSON object.
  if (typeof aliases === "string") {
    return parseResolvedAliases(aliases);
  }

  // Development nests { custom: { key: { value } } }.
  const declarations = aliases.custom;
  if (declarations == null) {
    return {};
  }
  if (typeof declarations !== "object" || Array.isArray(declarations)) {
    throw new TypeError(
      `Failed to read aliases from ${url}: 'aliases.custom' must be an object.`,
    );
  }
  return toStringRecord(
    Object.fromEntries(
      Object.entries(declarations).map(([key, declaration]) => [
        key,
        declaration?.value ?? "",
      ]),
    ),
  );
}

function resolveUrl(path: string): string {
  if (typeof document !== "undefined" && document.baseURI) {
    return new URL(path, document.baseURI).toString();
  }
  return path;
}

function parseResolvedAliases(raw: string): Record<string, string> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(
      `Failed to parse resolved aliases: ${(error as Error).message}`,
      { cause: error },
    );
  }
  if (typeof parsed !== "object" || parsed == null || Array.isArray(parsed)) {
    throw new Error("Resolved aliases must be a JSON object of string values.");
  }
  return toStringRecord(parsed as Record<string, unknown>);
}

/**
 * Narrows to string values. The file is served rather than written by
 * application code, so without this a number would reach `custom()` and violate
 * its declared return type.
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
  // `hasOwn`, not `in`: `in` matches inherited properties, so `toString` would
  // resolve to a function and `__proto__` to the prototype.
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
