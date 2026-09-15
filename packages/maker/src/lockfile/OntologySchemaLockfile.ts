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

import { isDeepStrictEqual } from "node:util";

import type {
  InterfaceSchemaGracePeriod,
  InterfaceSchemaMigrationInstruction,
} from "../api/interface/InterfaceSchemaMigrations.js";
import type { LockedPropertyType } from "./LockedPropertyType.js";

export const ONTOLOGY_SCHEMA_LOCKFILE_VERSION = 1;
export const DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME =
  "ontology-schema-lock.json";

/**
 * A record of the last-published shape of every interface type enrolled in schema migrations.
 *
 * `@osdk/maker` is a stateless `ontology.ts -> ontology.json` transformer, so it has nothing to
 * diff a new definition against to run backwards-compatibility checks. This lockfile supplies
 * that baseline (as a checked in source file), letting us reject at authoring-time any
 * definitions that would otherwise be rejected at installation-time.
 */
export interface OntologySchemaLockfile {
  version: number;
  /**
   * Keyed by fully-qualified interface api name. Only interfaces enrolled in schema migrations
   * (i.e. those declaring a `schemaMigrations` block) appear here.
   */
  interfaces: Record<string, LockedInterfaceType>;
}

export interface LockedInterfaceType {
  /**
   * The interface's schema in its "lenient" form: as if none of the active transitions have
   * been finalized yet.
   */
  schema: LockedInterfaceSchema;
  /**
   * The transitions that are still in flight, i.e. declared by the source and not yet
   * finalized or deleted.
   */
  transitions: LockedTransition[];
}

export interface LockedInterfaceSchema {
  /**
   * The interface's locally-declared properties (i.e. non-inherited), keyed by the api name they are published under.
   */
  properties: Record<string, LockedProperty>;
}

export interface LockedProperty {
  type: LockedPropertyType;
  required: boolean;
}

export interface LockedTransition {
  id: string;
  gracePeriod: InterfaceSchemaGracePeriod;
  instructions: InterfaceSchemaMigrationInstruction[];
}

/**
 * `record`'s own value for `key`, or `undefined`.
 *
 * Every record in a lockfile is keyed by an author-chosen api name, and `API_NAME_PATTERN` admits
 * `constructor`, `toString` and friends. A persisted lockfile also arrives from `JSON.parse`, so
 * its records inherit from `Object.prototype`. A bare index read for one of those names would find
 * the inherited function instead of `undefined` and mistake it for a recorded entry.
 */
export function own<T>(record: Record<string, T>, key: string): T | undefined {
  return Object.hasOwn(record, key) ? record[key] : undefined;
}

/** The api names of every locked interface whose recorded shape no longer matches the source. */
export function staleInterfaces(
  previousLockfile: OntologySchemaLockfile,
  nextLockfile: OntologySchemaLockfile,
): string[] {
  const previous = new Map(Object.entries(previousLockfile.interfaces));
  const next = new Map(Object.entries(nextLockfile.interfaces));

  const apiNames = [...new Set([...previous.keys(), ...next.keys()])].sort(
    (a, b) => (a < b ? -1 : a > b ? 1 : 0),
  );
  return apiNames.filter(
    (apiName) => !isDeepStrictEqual(previous.get(apiName), next.get(apiName)),
  );
}

// JSON has no comment syntax, but a `"//"` key is a conventional stand-in for one.
export const LOCKFILE_HEADER_KEY = "//";

const LOCKFILE_HEADER = [
  "This is a generated file, do not modify manually.",
  "Run `maker --write-locks` to regenerate this file.",
];

export function serializeLockfile(lockfile: OntologySchemaLockfile): string {
  // Insertion order is preserved for non-index keys, so the header serializes first.
  const withHeader = { [LOCKFILE_HEADER_KEY]: LOCKFILE_HEADER, ...lockfile };
  return JSON.stringify(withHeader, undefined, 2) + "\n";
}
