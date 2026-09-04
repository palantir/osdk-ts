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
 * definitions that OMS would reject at installation-time.
 */
export interface OntologySchemaLockfile {
  version: number;
  /**
   * Keyed by fully-qualified interface api name. Only interfaces enrolled in schema migrations
   * (i.e. those declaring a `schemaMigrations` block) appear here.
   */
  interfaces: Record<string, LockedInterfaceType>;
}

/** A top-level section of the lockfile, one per kind of ontology entity it tracks. */
export type LockfileSection = keyof Omit<OntologySchemaLockfile, "version">;

// Enforces compile-time exhaustive checks for new top-level sections (since we rely
// on these for determining if a lockfile is empty)
const SECTIONS: Record<LockfileSection, true> = {
  interfaces: true,
};

export const LOCKFILE_SECTIONS = Object.keys(SECTIONS) as LockfileSection[];

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
   * The interface's locally-declared properties, keyed by the api name they are published under.
   */
  properties: Record<string, LockedProperty>;
}

export interface LockedProperty {
  /**
   * The type as the author spelled it, less the parts that carry no compatibility meaning.
   */
  type: LockedPropertyType;
  required: boolean;
}

export interface LockedTransition {
  id: string;
  gracePeriod: InterfaceSchemaGracePeriod;
  instructions: InterfaceSchemaMigrationInstruction[];
}

export function isEmptyLockfile(lockfile: OntologySchemaLockfile): boolean {
  return lockedEntityCount(lockfile) === 0;
}

/** How many entities the lockfile tracks, across every section. */
export function lockedEntityCount(lockfile: OntologySchemaLockfile): number {
  return LOCKFILE_SECTIONS.reduce(
    (count, section) => count + Object.keys(lockfile[section]).length,
    0,
  );
}

/**
 * JSON has no comment syntax, but a `"//"` key is a conventional stand-in for one.
 */
export const LOCKFILE_HEADER_KEY = "//";

const LOCKFILE_HEADER = [
  "This is a generated file, do not modify manually.",
  "Run `maker --write-locks` to regenerate this file.",
];

/** The canonical on-disk form. */
export function serializeLockfile(lockfile: OntologySchemaLockfile): string {
  // Insertion order is preserved for non-index keys, so the header serializes first.
  const withHeader = { [LOCKFILE_HEADER_KEY]: LOCKFILE_HEADER, ...lockfile };
  return JSON.stringify(withHeader, undefined, 2) + "\n";
}
