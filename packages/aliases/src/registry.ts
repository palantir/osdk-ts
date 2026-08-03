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

import type { AliasesFile, DefaultAliases } from "./AliasesFile.js";
import { ALIASES_FILE_VERSION } from "./AliasesFile.js";

/**
 * One slot in the precedence chain. `file` is `undefined` when the slot is not populated;
 * the slot is still reported in error messages so a missing key names every layer that
 * was consulted rather than dying with "unknown alias".
 *
 * @internal
 */
export interface AliasLayer {
  readonly description: string;
  readonly file: AliasesFile | undefined;
}

/**
 * A lazily-invoked source of the two environment-variable layers. `src/index.ts` — the
 * default/browser entrypoint — never installs one, so `node:fs` stays out of the browser
 * module graph. `src/public/node.ts` installs the Node implementation.
 *
 * @internal
 */
export type EnvironmentLayerLoader = () => readonly AliasLayer[];

const EMPTY_DEFAULTS: DefaultAliases = {
  custom: {},
  datasets: {},
  egressConnections: {},
  mediasets: {},
  models: {},
  streams: {},
};

interface PackagedRegistration {
  readonly sdkId: string;
  readonly file: AliasesFile;
}

const packagedRegistrations: PackagedRegistration[] = [];
let override: AliasesFile | undefined;
let environmentLayerLoader: EnvironmentLayerLoader | undefined;
let memoizedLayers: readonly AliasLayer[] | undefined;

/**
 * Called once per generated SDK, from its `OntologyMetadata.ts`, with the packaged
 * defaults the SDK was generated against.
 *
 * Registrations merge into a single packaged layer, so two SDKs over the same ontology in
 * one process are the common case and a no-op. A key registered twice with *different*
 * values is a programming error — two SDKs cannot both be right about what to put on the
 * wire — and throws naming both SDKs.
 */
export function registerPackagedAliases(
  sdkId: string,
  file: AliasesFile,
): void {
  const existing = packagedRegistrations.find((r) => r.sdkId === sdkId);
  if (existing !== undefined) {
    if (deepEqual(existing.file, file)) return;
    throw new Error(
      `[@osdk/aliases] "${sdkId}" registered packaged aliases twice with different ` +
        `contents. Each SDK may register exactly one alias file.`,
    );
  }
  assertNoConflicts(sdkId, file);
  packagedRegistrations.push({ sdkId, file });
  memoizedLayers = undefined;
}

/**
 * Installs a programmatic override, the highest-precedence layer. A host that loads
 * several SDKs injects one file that all of them see, because the registry is
 * module-level and `@osdk/aliases` is a peer dependency.
 *
 * Pass `undefined` to remove it.
 */
export function setAliasOverride(file: AliasesFile | undefined): void {
  override = file;
  memoizedLayers = undefined;
}

/**
 * Installs the environment-variable layers. Called by `@osdk/aliases/node`, never by the
 * default entrypoint.
 *
 * @internal
 */
export function $setEnvironmentLayerLoader(
  loader: EnvironmentLayerLoader | undefined,
): void {
  environmentLayerLoader = loader;
  memoizedLayers = undefined;
}

/**
 * Drops every registration and memo. For tests only.
 *
 * @internal
 */
export function $resetAliasRegistry(): void {
  packagedRegistrations.length = 0;
  override = undefined;
  environmentLayerLoader = undefined;
  memoizedLayers = undefined;
}

/**
 * The precedence chain, highest first: programmatic override, `ALIASES_JSON_FILE`,
 * `RESOURCES_JSON_FILE`, packaged. Computed on first resolve and memoized; every mutator
 * clears the memo.
 *
 * @internal
 */
export function $aliasLayers(): readonly AliasLayer[] {
  if (memoizedLayers !== undefined) return memoizedLayers;
  memoizedLayers = [
    { description: "programmatic override", file: override },
    ...(environmentLayerLoader?.() ?? [
      { description: "ALIASES_JSON_FILE", file: undefined },
      { description: "RESOURCES_JSON_FILE", file: undefined },
    ]),
    {
      description:
        packagedRegistrations.length === 0
          ? "packaged aliases"
          : `packaged aliases (${packagedRegistrations
              .map((r) => r.sdkId)
              .join(", ")})`,
      file: mergePackaged(),
    },
  ];
  return memoizedLayers;
}

/**
 * The list of layers, annotated with whether each was populated, for error messages.
 *
 * @internal
 */
export function $describeLayers(): string {
  return $aliasLayers()
    .map((l) => `${l.description}${l.file === undefined ? " (not set)" : ""}`)
    .join(", ");
}

function mergePackaged(): AliasesFile | undefined {
  if (packagedRegistrations.length === 0) return undefined;
  if (packagedRegistrations.length === 1) return packagedRegistrations[0].file;
  const defaults: Record<string, Record<string, unknown>> = {};
  for (const { file } of packagedRegistrations) {
    for (const [mapName, map] of Object.entries(file.defaults)) {
      Object.assign((defaults[mapName] ??= {}), map);
    }
  }
  return {
    version: ALIASES_FILE_VERSION,
    defaults: { ...EMPTY_DEFAULTS, ...defaults } as DefaultAliases,
  };
}

function assertNoConflicts(sdkId: string, file: AliasesFile): void {
  const incoming = flatten(file.defaults);
  for (const registration of packagedRegistrations) {
    for (const [location, theirs] of flatten(registration.file.defaults)) {
      const ours = incoming.get(location);
      if (ours === undefined || deepEqual(theirs, ours)) continue;
      throw new Error(
        `[@osdk/aliases] conflicting packaged aliases for defaults.${location}: ` +
          `"${registration.sdkId}" registered ${JSON.stringify(theirs)} but ` +
          `"${sdkId}" registered ${JSON.stringify(
            ours,
          )}. Two SDKs in one process ` +
          `must agree on every alias they share.`,
      );
    }
  }
}

function flatten(defaults: DefaultAliases): Map<string, unknown> {
  const out = new Map<string, unknown>();
  for (const [mapName, map] of Object.entries(defaults)) {
    if (map == null) continue;
    for (const [key, value] of Object.entries(map as Record<string, unknown>)) {
      out.set(`${mapName}.${key}`, value);
    }
  }
  return out;
}

function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a == null ||
    b == null
  ) {
    return false;
  }
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  const aRecord = a as Record<string, unknown>;
  const bRecord = b as Record<string, unknown>;
  const aKeys = Object.keys(aRecord).filter((k) => aRecord[k] !== undefined);
  const bKeys = Object.keys(bRecord).filter((k) => bRecord[k] !== undefined);
  return (
    aKeys.length === bKeys.length &&
    aKeys.every((k) => deepEqual(aRecord[k], bRecord[k]))
  );
}
