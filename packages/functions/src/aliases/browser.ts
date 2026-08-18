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
// fs), a browser has no filesystem or process.env. Instead this module fetches a
// served JSON file once, caches it, and then serves custom() synchronously. This
// file must stay free of `fs`/`process` so it can be bundled into a browser app.
//
// Two files can supply aliases, mirroring how the Node runtime has PUBLISHED and
// LIVE_PREVIEW modes:
//
//   production  .palantir/deployment.config.json  written at install, so it
//                                                 carries the INSTALLER's values
//   development public/resources.json             the author's declaration file,
//                                                 so it carries the DEFAULTS
//
// Callers do not choose: we try the deployment config and fall back to the
// declaration file only when it is absent. Absence takes two forms, because a
// single-page-app host rewrites unknown paths to index.html and answers 200
// rather than 404: either a 404, or a 200 carrying markup. Both mean the file
// genuinely is not there (local dev, or a site deployed without going through
// Marketplace). Any other failure throws, because in production BOTH files are
// served, so falling back on a transient error would silently serve the
// developer's defaults in place of the installer's values.
//
// The two files are told apart by the runtime type of their `aliases` field
// (string vs object), which is unambiguous.

import type {
  AliasDeclarationsFile,
  Custom,
  DeploymentConfig,
} from "./types.js";

export type { Custom } from "./types.js";

/**
 * Default path to the deployment config file served by Foundry website
 * hosting. Resolved relative to the document base URI so apps served under a
 * subpath still find it. Carries the installer's resolved values.
 */
export const DEFAULT_DEPLOYMENT_CONFIG_PATH =
  ".palantir/deployment.config.json";

/**
 * Path to the author-maintained declaration file, served from `public/` by the
 * Vite dev server. Carries the developer's declared defaults, so it is the
 * right source during local development where there is no installer.
 */
export const DEFAULT_DECLARATIONS_PATH = "resources.json";

export interface InitAliasesOptions {
  /**
   * Escape hatch to force a single specific file. Relative paths are resolved
   * against `document.baseURI`.
   *
   * Normal applications should omit this. By default `initAliases()` tries
   * {@link DEFAULT_DEPLOYMENT_CONFIG_PATH} and falls back to
   * {@link DEFAULT_DECLARATIONS_PATH} on a 404, which covers local development
   * and installed sites alike. When this option is set there is no fallback: a
   * missing file throws.
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

  // An explicit path is honored as given: the caller chose that file, so a
  // missing file is an error rather than a cue to look somewhere else.
  if (options?.path != null) {
    const explicit = await fetchAliases(fetchImpl, options.path);
    if (explicit === undefined) {
      throw new Error(
        `Failed to load aliases from ${resolveUrl(options.path)}: 404`,
      );
    }
    cachedCustomAliases = explicit;
    return;
  }

  const resolved = await fetchAliases(
    fetchImpl,
    DEFAULT_DEPLOYMENT_CONFIG_PATH,
  );
  if (resolved !== undefined) {
    cachedCustomAliases = resolved;
    return;
  }

  // The deployment config only exists on a site installed through Marketplace,
  // so a 404 is expected during local development and for a site deployed
  // straight from Developer Console. Fall back to the author's declared
  // defaults. Warn so that a fallback on a real installed site is visible.
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

/**
 * Fetches and reads one alias file. Returns `undefined` when the file is absent,
 * which callers may treat as a cue to fall back. Any other failure throws, so a
 * transient server error never silently degrades to the declared defaults.
 */
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
      `Failed to load aliases from ${url}: ${response.status} ${
        response.statusText
      }`,
    );
  }

  const body = await response.text();

  // A single-page-app host rewrites unknown paths to index.html and answers 200
  // rather than 404 (the Vite dev server and Foundry website hosting both do
  // this). Markup where JSON was expected therefore means "this file is not
  // here", exactly like a 404, so treat it the same way.
  if (isMarkup(body)) {
    return undefined;
  }

  return extractAliases(parseJson(body, url), url);
}

/**
 * True when the body is markup rather than the JSON we asked for, which indicates
 * a single-page-app rewrite rather than a real config file.
 *
 * The body is sniffed rather than the declared content type because that type is
 * not a reliable signal: Foundry website hosting derives it from the file
 * extension and does not recognize `.json`, so even a real config file can arrive
 * as `application/octet-stream`. A leading `<` is unambiguous, since valid JSON
 * can never begin with one.
 */
function isMarkup(body: string): boolean {
  return body.trimStart().startsWith("<");
}

/**
 * Parses a fetched alias file. A body that is neither markup nor valid JSON is a
 * genuine error and must surface rather than being mistaken for an absent file.
 */
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

/**
 * Reads aliases out of either supported file shape. The deployment config packs
 * resolved values into a stringified JSON object; the declaration file nests
 * them under `aliases.custom` with packaging metadata alongside each value.
 */
function extractAliases(
  config: DeploymentConfig | AliasDeclarationsFile,
  url: string,
): Record<string, string> {
  const aliases = config.aliases;

  // Apps that declare no aliases simply omit the key.
  if (aliases == null || aliases === "") {
    return {};
  }

  // Production: deployment.config.json stores a stringified JSON object.
  if (typeof aliases === "string") {
    return parseResolvedAliases(aliases);
  }

  // Development: the declaration file nests { custom: { key: { value } } }.
  const declarations = aliases.custom;
  if (declarations == null) {
    return {};
  }
  if (typeof declarations !== "object" || Array.isArray(declarations)) {
    throw new TypeError(
      `Failed to read aliases from ${url}: 'aliases.custom' must be an object.`,
    );
  }
  return Object.fromEntries(
    Object.entries(declarations).map(([key, declaration]) => [
      key,
      declaration?.value ?? "",
    ]),
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
