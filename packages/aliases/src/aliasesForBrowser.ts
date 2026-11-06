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

import { getAlias } from "./getAlias.js";
import type { Custom, Workshop } from "./types.js";

export type { Custom } from "./types.js";

declare global {
  interface ImportMetaEnv {
    DEV: boolean;
    MODE: string;
    BASE_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

/**
 * `resources.json` contains author defaults during local development and
 * installer-resolved values on an installed site.
 */
export const DEFAULT_RESOURCES_PATH = "/resources.json";

interface InitAliasesOptions {
  fetch?: typeof globalThis.fetch;
}

interface BrowserAliases {
  custom: Record<string, string>;
  workshops: Record<string, Workshop>;
}

let cachedAliases: BrowserAliases | undefined;
let inFlight: Promise<void> | undefined;

/**
 * Website implementation of `Aliases.custom`. Loads aliases from the
 * `resources.json` served with the website, then returns the resolved value.
 * Repeated and concurrent calls share the same load.
 */
export async function customForBrowser(alias: string): Promise<Custom> {
  await initAliases();
  const aliases = cachedAliases;
  if (aliases === undefined) {
    throw new Error("Aliases failed to initialize.");
  }

  return getAlias(aliases.custom, alias, "Custom") as Custom;
}

/** Returns the Workshop module RID declared in the website's resources.json. */
export async function workshopForBrowser(alias: string): Promise<Workshop> {
  await initAliases();
  const aliases = cachedAliases;
  if (aliases === undefined) {
    throw new Error("Aliases failed to initialize.");
  }

  return getAlias(aliases.workshops, alias, "Workshop");
}

/** Deduplicates concurrent loads; a later call can retry if failure occurs. */
export async function initAliases(options?: InitAliasesOptions): Promise<void> {
  if (cachedAliases !== undefined) {
    return;
  }
  if (inFlight === undefined) {
    inFlight = loadAliases(options).catch((error: unknown) => {
      inFlight = undefined;
      throw error;
    });
  }
  await inFlight;
}

async function loadAliases(options?: InitAliasesOptions): Promise<void> {
  const fetchImpl = options?.fetch ?? globalThis.fetch;
  const declarations = await fetchJson(fetchImpl, DEFAULT_RESOURCES_PATH);
  cachedAliases =
    declarations === undefined
      ? { custom: {}, workshops: {} }
      : extractAliases(declarations.value, declarations.url);
}

interface FetchedJson {
  value: unknown;
  url: string;
}

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

  if (isHtmlDocument(body)) {
    return undefined;
  }

  return { value: parseJson(body, url), url };
}

function resolveUrl(path: string): string {
  if (typeof window !== "undefined") {
    // Code Workspaces live previews serve the app under a proxy path.
    // Vite exposes that path as BASE_URL; published sites use the origin root.
    if (
      import.meta.env?.DEV &&
      import.meta.env.MODE === "code-workspaces" &&
      import.meta.env.BASE_URL
    ) {
      path = `${import.meta.env.BASE_URL.replace(/\/$/u, "")}${path}`;
    }
    return new URL(path, window.location.origin).toString();
  }
  return path;
}

/** A missing `resources.json` may return the website's HTML page instead of a 404. */
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

function extractAliases(config: unknown, url: string): BrowserAliases {
  const aliases = getAliasesField(config, url);
  if (aliases == null) {
    return { custom: {}, workshops: {} };
  }
  if (!isJsonObject(aliases)) {
    throw new TypeError(
      `Failed to read aliases from ${url}: expected 'aliases' to be a JSON object.`,
    );
  }

  return {
    custom: extractCustomAliases(aliases.custom, url),
    workshops: extractWorkshopAliases(aliases.workshops, url),
  };
}

function extractCustomAliases(
  declarations: unknown,
  url: string,
): Record<string, string> {
  if (declarations == null) {
    return {};
  }
  if (!isJsonObject(declarations)) {
    throw new TypeError(
      `Failed to read aliases from ${url}: expected 'aliases.custom' to map ` +
        `alias names to declarations, for example ` +
        `{ "myAlias": { "value": "..." } }.`,
    );
  }
  const result = Object.create(null) as Record<string, string>;
  for (const [key, declaration] of Object.entries(declarations)) {
    if (!isJsonObject(declaration)) {
      throw new TypeError(
        `Failed to read alias '${key}' from ${url}: expected its declaration ` +
          `to be an object, for example { "value": "..." }.`,
      );
    }
    if (!Object.hasOwn(declaration, "value")) {
      throw new TypeError(
        `Failed to read alias '${key}' from ${url}: expected its declaration ` +
          `to include a string 'value'.`,
      );
    }
    const value = declaration.value;
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

function extractWorkshopAliases(
  declarations: unknown,
  url: string,
): Record<string, Workshop> {
  if (declarations === undefined) {
    return {};
  }
  if (!Array.isArray(declarations)) {
    throw new TypeError(
      `Failed to read aliases from ${url}: expected 'aliases.workshops' to be an array.`,
    );
  }

  const result = Object.create(null) as Record<string, Workshop>;
  for (const declaration of declarations) {
    if (
      !isJsonObject(declaration) ||
      typeof declaration.alias !== "string" ||
      declaration.alias.length === 0 ||
      typeof declaration.rid !== "string" ||
      declaration.rid.length === 0
    ) {
      throw new TypeError(
        `Failed to read aliases from ${url}: expected each entry in ` +
          `'aliases.workshops' to contain non-empty string 'alias' and 'rid' fields.`,
      );
    }
    const { alias, rid } = declaration;
    if (Object.hasOwn(result, alias)) {
      throw new TypeError(`Duplicate Workshop alias '${alias}' in ${url}.`);
    }
    result[alias] = { rid };
  }
  return result;
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

export function resetAliasesCache(): void {
  cachedAliases = undefined;
  inFlight = undefined;
}
