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
import type { PropertyTypeType } from "../api/properties/PropertyTypeType.js";

export const ONTOLOGY_SCHEMA_LOCKFILE_VERSION = 1;
export const DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME =
  "ontology-schema-lock.json";

/**
 * A record of the last-published shape of every interface type enrolled in schema migrations.
 *
 * `@osdk/maker` is otherwise a stateless `ontology.ts -> ontology.json` transformer, so it has
 * nothing to diff a new definition against. The lockfile supplies that baseline, letting us reject
 * at authoring-time the definitions that OMS would reject at installation-time.
 *
 * Generation is a pure function of the source ontology; only *validation* consults the previously
 * persisted lockfile.
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

/**
 * Total over the lockfile's sections by construction, so adding one is a compile error here rather
 * than a section that every fold over the document silently skips. A `switch` cannot stand in for
 * this: the set of sections is needed as runtime data, not control flow.
 */
const SECTIONS: Record<LockfileSection, true> = {
  interfaces: true,
};

/** Every section, as the single list that folds over the document go through. */
export const LOCKFILE_SECTIONS = Object.keys(SECTIONS) as LockfileSection[];

export interface LockedInterfaceType {
  /**
   * The interface's schema in its "lenient" form: as if none of the active transitions have
   * been finalized yet.
   */
  schema: LockedInterfaceSchema;
  migrations: LockedMigrations;
}

export interface LockedInterfaceSchema {
  /**
   * The interface's locally-declared properties, keyed by the api name they are published under.
   * Inherited properties are owned by the interface that declares them.
   */
  properties: Record<string, LockedProperty>;
}

export interface LockedProperty {
  type: PropertyTypeType;
  /** Whether implementing object types must provide this property. */
  required: boolean;
}

export interface LockedMigrations {
  /**
   * The transitions that are still in flight, i.e. declared by the source and not yet
   * finalized or deleted.
   *
   * Deliberately excludes `title`/`description`: those are free to change between versions,
   * and recording them would churn the lockfile without telling us anything about compatibility.
   */
  active: LockedTransition[];
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
 * The canonical on-disk form. Generation emits objects in a stable key order, so a
 * byte comparison of two serializations is a valid equality check.
 */
export function serializeLockfile(lockfile: OntologySchemaLockfile): string {
  return JSON.stringify(lockfile, undefined, 2) + "\n";
}

/** How a property's type is named in error messages and in the rendered lockfile diff. */
export function describeType(type: PropertyTypeType): string {
  return typeof type === "string" ? `"${type}"` : JSON.stringify(type);
}
