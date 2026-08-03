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

export interface AliasesFile {
  defaults: DefaultAliases;
  version: number;
}

export interface DefaultAliases {
  // ---- existing, unchanged ----
  custom: Record<string, string>;
  models: Record<string, ModelValue>;
  egressConnections: Record<string, EgressConnectionValue>;
  datasets: Record<string, DatasetValue>;
  mediasets: Record<string, MediasetValue>;
  streams: Record<string, StreamValue>;

  // ---- new ----
  ontologies?: Record<string, OntologyValue>;
  objects?: Record<string, ObjectTypeValue>;
  interfaces?: Record<string, InterfaceTypeValue>;
  actions?: Record<string, ActionTypeValue>;
  queries?: Record<string, QueryTypeValue>;
}

export interface OntologyValue {
  id: RidIdentifier;
  branch?: RidIdentifier | null;
}

export interface ObjectTypeValue {
  apiName: string;
  primaryKeyApiName: string;
  properties: Record<string, PropertyValue>;
  links: Record<string, LinkValue>;
  id?: RidIdentifier;
}

export interface InterfaceTypeValue {
  apiName: string;
  properties: Record<string, PropertyValue>;
  links: Record<string, LinkValue>;
  id?: RidIdentifier;
}

export interface ActionTypeValue {
  apiName: string;
  id?: RidIdentifier;
}

export interface QueryTypeValue {
  apiName: string;
  version?: string;
  id?: VersionedRidIdentifier;
}

export interface PropertyValue {
  apiName: string;
  id?: RidIdentifier;
}

export interface LinkValue {
  apiName: string;
  id?: RidIdentifier;
}

export interface RidIdentifier {
  rid: string;
}

export interface VersionedRidIdentifier {
  rid: string;
  version?: string;
}

/**
 * The five platform-resource maps that predate this schema. `loadPublishedAliases()`
 * in `@osdk/functions` calls `Object.entries()` on each of these plus `custom` with no
 * guard, and `Object.entries(undefined)` throws, so every file we write must carry all
 * six even when empty.
 */
export interface ModelValue {
  id: RidIdentifier;
}

export interface EgressConnectionValue {
  id: RidIdentifier;
}

export interface DatasetValue {
  id: RidIdentifier;
}

export interface MediasetValue {
  id: RidIdentifier;
}

export interface StreamValue {
  id: RidIdentifier;
}

export const ALIASES_FILE_VERSION = 1;

const LEGACY_MAP_NAMES = [
  "custom",
  "datasets",
  "egressConnections",
  "mediasets",
  "models",
  "streams",
] as const;

function fail(path: string, message: string): never {
  throw new Error(
    `[@osdk/aliases] Invalid aliases file at ${path}: ${message}`,
  );
}

function asRecord(value: unknown, path: string): Record<string, unknown> {
  if (typeof value !== "object" || value == null || Array.isArray(value)) {
    return fail(path, `expected an object, found ${describe(value)}`);
  }
  return value as Record<string, unknown>;
}

function describe(value: unknown): string {
  // Strict on purpose: `describe` is what names the offending value in a parse error, and
  // a *missing* key must read "undefined", not "null".
  // oxlint-disable-next-line eqeqeq
  if (value === null) return "null";
  if (Array.isArray(value)) return "an array";
  return `${typeof value} (${JSON.stringify(value)})`;
}

function asApiName(value: unknown, path: string): string {
  if (typeof value !== "string") {
    return fail(path, `expected a string, found ${describe(value)}`);
  }
  if (value.length === 0) {
    // Rule 3: an empty apiName produces a request the server answers with a
    // confusing 404 instead of a clear client-side error.
    return fail(path, "apiName must be a non-empty string");
  }
  return value;
}

function asOptionalString(value: unknown, path: string): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== "string") {
    return fail(path, `expected a string, found ${describe(value)}`);
  }
  return value;
}

function parseRid(value: unknown, path: string): RidIdentifier {
  const record = asRecord(value, path);
  const rid = record["rid"];
  if (typeof rid !== "string" || rid.length === 0) {
    return fail(
      `${path}.rid`,
      `expected a non-empty string, found ${describe(rid)}`,
    );
  }
  return { rid };
}

function parseOptionalRid(
  value: unknown,
  path: string,
): RidIdentifier | undefined {
  return value === undefined ? undefined : parseRid(value, path);
}

function parseVersionedRid(
  value: unknown,
  path: string,
): VersionedRidIdentifier | undefined {
  if (value === undefined) return undefined;
  const { rid } = parseRid(value, path);
  const version = asOptionalString(
    asRecord(value, path)["version"],
    `${path}.version`,
  );
  return version === undefined ? { rid } : { rid, version };
}

function parseLegacyValueMap<T extends { id: RidIdentifier }>(
  value: unknown,
  path: string,
): Record<string, T> {
  if (value === undefined) return {};
  const record = asRecord(value, path);
  const out: Record<string, T> = {};
  for (const [key, entry] of Object.entries(record)) {
    out[key] = {
      id: parseRid(
        asRecord(entry, `${path}.${key}`)["id"],
        `${path}.${key}.id`,
      ),
    } as T;
  }
  return out;
}

function parseCustom(value: unknown, path: string): Record<string, string> {
  if (value === undefined) return {};
  const record = asRecord(value, path);
  const out: Record<string, string> = {};
  for (const [key, entry] of Object.entries(record)) {
    if (typeof entry !== "string") {
      fail(`${path}.${key}`, `expected a string, found ${describe(entry)}`);
    }
    out[key] = entry;
  }
  return out;
}

function parseNamedValues<T extends { apiName: string; id?: RidIdentifier }>(
  value: unknown,
  path: string,
): Record<string, T> {
  if (value === undefined) return {};
  const record = asRecord(value, path);
  const out: Record<string, T> = {};
  for (const [key, entry] of Object.entries(record)) {
    const entryPath = `${path}.${key}`;
    const entryRecord = asRecord(entry, entryPath);
    const id = parseOptionalRid(entryRecord["id"], `${entryPath}.id`);
    out[key] = {
      apiName: asApiName(entryRecord["apiName"], `${entryPath}.apiName`),
      ...(id === undefined ? {} : { id }),
    } as T;
  }
  assertNoDuplicateApiNames(out, path);
  return out;
}

function assertNoDuplicateApiNames(
  map: Record<string, { apiName: string }>,
  path: string,
): void {
  // Rule 6: two source names collapsing onto one target cannot be undone in the
  // response direction, where the target name is all we have to key off.
  const seen = new Map<string, string>();
  for (const [key, value] of Object.entries(map)) {
    const previous = seen.get(value.apiName);
    if (previous !== undefined) {
      fail(
        `${path}.${key}.apiName`,
        `target apiName "${value.apiName}" is already used by ${path}.${previous}`,
      );
    }
    seen.set(value.apiName, key);
  }
}

function parseOntologies(
  value: unknown,
  path: string,
): Record<string, OntologyValue> {
  if (value === undefined) return {};
  const record = asRecord(value, path);
  const out: Record<string, OntologyValue> = {};
  for (const [key, entry] of Object.entries(record)) {
    const entryPath = `${path}.${key}`;
    const entryRecord = asRecord(entry, entryPath);
    const rawBranch = entryRecord["branch"];
    out[key] = {
      id: parseRid(entryRecord["id"], `${entryPath}.id`),
      // `null` is meaningful here: it is how the emitter says "no branch", and the
      // identity fixture pins it, so it must survive a parse/serialize round trip.
      branch:
        rawBranch === undefined
          ? undefined
          : rawBranch == null
            ? null
            : parseRid(rawBranch, `${entryPath}.branch`),
    };
  }
  return out;
}

function parseObjects(
  value: unknown,
  path: string,
): Record<string, ObjectTypeValue> {
  if (value === undefined) return {};
  const record = asRecord(value, path);
  const out: Record<string, ObjectTypeValue> = {};
  for (const [key, entry] of Object.entries(record)) {
    const entryPath = `${path}.${key}`;
    const entryRecord = asRecord(entry, entryPath);
    const properties = parseNamedValues<PropertyValue>(
      entryRecord["properties"],
      `${entryPath}.properties`,
    );
    const primaryKeyApiName = asApiName(
      entryRecord["primaryKeyApiName"],
      `${entryPath}.primaryKeyApiName`,
    );
    // Rule 4: the primary key must be one of the (possibly renamed) properties. Only
    // checkable when `properties` is populated; a file that carries no properties at
    // all is still a legal Tier 1 file.
    if (
      Object.keys(properties).length > 0 &&
      !Object.values(properties).some((p) => p.apiName === primaryKeyApiName)
    ) {
      fail(
        `${entryPath}.primaryKeyApiName`,
        `"${primaryKeyApiName}" does not match the target apiName of any entry in ` +
          `${entryPath}.properties (found ${Object.values(properties)
            .map((p) => `"${p.apiName}"`)
            .join(
              ", ",
            )}). A renamed primary key property must be renamed here too.`,
      );
    }
    const id = parseOptionalRid(entryRecord["id"], `${entryPath}.id`);
    out[key] = {
      apiName: asApiName(entryRecord["apiName"], `${entryPath}.apiName`),
      primaryKeyApiName,
      properties,
      links: parseNamedValues<LinkValue>(
        entryRecord["links"],
        `${entryPath}.links`,
      ),
      ...(id === undefined ? {} : { id }),
    };
  }
  assertNoDuplicateApiNames(out, path);
  return out;
}

function parseInterfaces(
  value: unknown,
  path: string,
): Record<string, InterfaceTypeValue> {
  if (value === undefined) return {};
  const record = asRecord(value, path);
  const out: Record<string, InterfaceTypeValue> = {};
  for (const [key, entry] of Object.entries(record)) {
    const entryPath = `${path}.${key}`;
    const entryRecord = asRecord(entry, entryPath);
    const id = parseOptionalRid(entryRecord["id"], `${entryPath}.id`);
    out[key] = {
      apiName: asApiName(entryRecord["apiName"], `${entryPath}.apiName`),
      properties: parseNamedValues<PropertyValue>(
        entryRecord["properties"],
        `${entryPath}.properties`,
      ),
      links: parseNamedValues<LinkValue>(
        entryRecord["links"],
        `${entryPath}.links`,
      ),
      ...(id === undefined ? {} : { id }),
    };
  }
  assertNoDuplicateApiNames(out, path);
  return out;
}

function parseQueries(
  value: unknown,
  path: string,
): Record<string, QueryTypeValue> {
  if (value === undefined) return {};
  const record = asRecord(value, path);
  const out: Record<string, QueryTypeValue> = {};
  for (const [key, entry] of Object.entries(record)) {
    const entryPath = `${path}.${key}`;
    const entryRecord = asRecord(entry, entryPath);
    const version = asOptionalString(
      entryRecord["version"],
      `${entryPath}.version`,
    );
    const id = parseVersionedRid(entryRecord["id"], `${entryPath}.id`);
    out[key] = {
      apiName: asApiName(entryRecord["apiName"], `${entryPath}.apiName`),
      ...(version === undefined ? {} : { version }),
      ...(id === undefined ? {} : { id }),
    };
  }
  assertNoDuplicateApiNames(out, path);
  return out;
}

function parseActions(
  value: unknown,
  path: string,
): Record<string, ActionTypeValue> {
  return parseNamedValues<ActionTypeValue>(value, path);
}

/**
 * Structural validation of an untrusted `aliases.json`, per
 * `05-aliases-file-schema.md` §5. Throws with the offending JSON path.
 *
 * The file format is deliberately *permissive*: a file written by today's
 * function-registry carries none of the five ontology maps and still parses (they
 * become empty maps). Strictness lives in the resolvers, which fail loudly when asked
 * for a key that is not there.
 */
export function parseAliasesFile(json: unknown): AliasesFile {
  const root = asRecord(json, "$");
  const version = root["version"];
  if (version !== ALIASES_FILE_VERSION) {
    fail(
      "$.version",
      `unsupported version ${JSON.stringify(
        version,
      )}; only ${ALIASES_FILE_VERSION} is supported`,
    );
  }

  const defaults = asRecord(root["defaults"], "$.defaults");
  const missingLegacyMaps = LEGACY_MAP_NAMES.filter(
    (n) => defaults[n] === undefined,
  );
  if (missingLegacyMaps.length > 0) {
    // Rule 1: tolerate on read, warn, and normalize to {} so that a downstream
    // `Object.entries()` on any of them cannot throw.
    globalThis.console?.warn(
      `[@osdk/aliases] aliases file is missing the legacy resource ` +
        `map(s) ${missingLegacyMaps.join(", ")}; treating them as empty.`,
    );
  }

  return {
    version: ALIASES_FILE_VERSION,
    defaults: {
      custom: parseCustom(defaults["custom"], "$.defaults.custom"),
      datasets: parseLegacyValueMap<DatasetValue>(
        defaults["datasets"],
        "$.defaults.datasets",
      ),
      egressConnections: parseLegacyValueMap<EgressConnectionValue>(
        defaults["egressConnections"],
        "$.defaults.egressConnections",
      ),
      mediasets: parseLegacyValueMap<MediasetValue>(
        defaults["mediasets"],
        "$.defaults.mediasets",
      ),
      models: parseLegacyValueMap<ModelValue>(
        defaults["models"],
        "$.defaults.models",
      ),
      streams: parseLegacyValueMap<StreamValue>(
        defaults["streams"],
        "$.defaults.streams",
      ),
      actions: parseActions(defaults["actions"], "$.defaults.actions"),
      interfaces: parseInterfaces(
        defaults["interfaces"],
        "$.defaults.interfaces",
      ),
      objects: parseObjects(defaults["objects"], "$.defaults.objects"),
      ontologies: parseOntologies(
        defaults["ontologies"],
        "$.defaults.ontologies",
      ),
      queries: parseQueries(defaults["queries"], "$.defaults.queries"),
    },
  };
}

function sortDeep(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(sortDeep);
  }
  if (typeof value !== "object" || value == null) {
    return value;
  }
  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([, v]) => v !== undefined)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  const out: Record<string, unknown> = {};
  for (const [k, v] of entries) {
    out[k] = sortDeep(v);
  }
  return out;
}

/**
 * The one serializer. Emits keys in ascending code-unit order at every level, two-space
 * indent, trailing newline (§1.4), and always emits all six legacy resource maps —
 * `{}` when empty — because `loadPublishedAliases()` in `@osdk/functions` calls
 * `Object.entries()` on each of them with no guard.
 */
export function serializeAliasesFile(file: AliasesFile): string {
  const defaults = file.defaults;
  // The `?? {}`s look redundant against the type, and that is the point: the six legacy
  // maps are non-optional in `DefaultAliases`, but a caller that built its object from
  // parsed JSON rather than through `parseAliasesFile` can still be missing them at
  // runtime, and an emitted file without them breaks `loadPublishedAliases()`.
  const canonical: AliasesFile = {
    ...file,
    defaults: {
      ...defaults,
      custom: defaults.custom ?? {},
      datasets: defaults.datasets ?? {},
      egressConnections: defaults.egressConnections ?? {},
      mediasets: defaults.mediasets ?? {},
      models: defaults.models ?? {},
      streams: defaults.streams ?? {},
    },
  };
  return `${JSON.stringify(sortDeep(canonical), undefined, 2)}\n`;
}
