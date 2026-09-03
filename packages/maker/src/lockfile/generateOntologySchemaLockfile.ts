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

import type { OntologyDefinition } from "../api/common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../api/common/OntologyEntityTypeEnum.js";
import {
  getInterfacePropertyTypeType,
  type InterfacePropertyType,
  interfacePropertyWireApiName,
  isInterfacePropertyRequired,
} from "../api/interface/InterfacePropertyType.js";
import type { InterfaceSchemaMigrationInstruction } from "../api/interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../api/interface/InterfaceType.js";
import type {
  LockedInterfaceSchema,
  LockedInterfaceType,
  LockedTransition,
  LockfileSection,
  OntologySchemaLockfile,
} from "./OntologySchemaLockfile.js";
import { ONTOLOGY_SCHEMA_LOCKFILE_VERSION } from "./OntologySchemaLockfile.js";

/**
 * The api names of every entity each section could track, enrolled or not.
 *
 * Keyed by section so that adding one is a compile error in {@link censusOfSource} rather than a
 * section the census silently omits.
 */
export type SourceCensus = Record<LockfileSection, ReadonlySet<string>>;

/**
 * Derives the lockfile that the given ontology *should* have, purely from source.
 *
 * Deliberately does not consult the previously persisted lockfile: keeping generation a pure
 * function of source makes it trivial to reason about and to test, and pushes all of the
 * history-dependent logic into {@link validateOntologySchemaLockfile}.
 */
export function generateOntologySchemaLockfile(
  ontology: OntologyDefinition,
): OntologySchemaLockfile {
  const interfaces: Record<string, LockedInterfaceType> = {};
  for (const interfaceType of sortedByApiName(
    Object.values(ontology[OntologyEntityTypeEnum.INTERFACE_TYPE]),
  )) {
    if (!isEnrolledInterface(interfaceType)) {
      continue;
    }
    interfaces[interfaceType.apiName] = lockInterfaceType(interfaceType);
  }
  return { version: ONTOLOGY_SCHEMA_LOCKFILE_VERSION, interfaces };
}

/**
 * Whether the lockfile tracks this interface.
 *
 * Enrollment is the entire gate: an interface that declares no `schemaMigrations` block is held to
 * no backwards-compatibility check at all, and one that drops its block opts back out of them.
 * Every section the lockfile grows to cover states its own enrollment rule.
 */
export function isEnrolledInterface(interfaceType: InterfaceType): boolean {
  return interfaceType.schemaMigrations !== undefined;
}

/**
 * The api names of every entity each section could track, enrolled or not.
 *
 * Only the change renderer consults this, to tell "this entity was deleted" from "this entity
 * opted out". Both are legal, but they read very differently to someone reviewing the diff of a
 * checked-in lockfile, and opting out — which silently ends all checking — is the one worth
 * stopping on.
 */
export function censusOfSource(ontology: OntologyDefinition): SourceCensus {
  return {
    interfaces: new Set(
      Object.keys(ontology[OntologyEntityTypeEnum.INTERFACE_TYPE]),
    ),
  };
}

function lockInterfaceType(interfaceType: InterfaceType): LockedInterfaceType {
  return {
    schema: lockSchema(interfaceType),
    migrations: {
      active: lockTransitions(interfaceType),
    },
  };
}

function lockSchema(interfaceType: InterfaceType): LockedInterfaceSchema {
  const locked = Object.entries(interfaceType.propertiesV3)
    .map(
      ([authoredApiName, property]) =>
        [
          interfacePropertyWireApiName(property, authoredApiName),
          {
            type: getInterfacePropertyTypeType(property),
            required: isInterfacePropertyRequired(property),
          },
        ] as const,
    )
    .sort(([a], [b]) => compare(a, b));
  return { properties: Object.fromEntries(locked) };
}

function lockTransitions(interfaceType: InterfaceType): LockedTransition[] {
  const { schemaMigrations, propertiesV3 } = interfaceType;
  if (schemaMigrations === undefined) {
    return [];
  }
  // The authored order of transitions and of the instructions within them carries no meaning,
  // so we sort both: an author reshuffling their source should not churn the lockfile.
  return schemaMigrations.transitions
    .map((transition) => ({
      id: transition.id,
      gracePeriod: transition.gracePeriod,
      instructions: transition.instructions
        .map((instruction) => resolveWireNames(instruction, propertiesV3))
        // Ordering by the serialized instruction rather than by some projection of it keeps the
        // sort total: two instructions can only tie if they would be written identically, so no
        // pair is left to fall back on the authored order this sort exists to discard.
        .sort((a, b) => compare(JSON.stringify(a), JSON.stringify(b))),
    }))
    .sort((a, b) => compare(a.id, b.id));
}

/**
 * Rewrites each instruction's property references from the keys the author used to the api names
 * the properties are published under, matching what the ontology-ir carries. Renaming the source
 * key of an SPT-backed property is then correctly a no-op rather than an apparent breaking change.
 *
 * An instruction that names no property passes through unchanged.
 *
 * Each variant is rebuilt field by field rather than spread over, because the lockfile is written
 * with `JSON.stringify` and so records keys in insertion order: spreading would carry whatever
 * order the author happened to write their object literal in through to the persisted bytes.
 */
function resolveWireNames(
  instruction: InterfaceSchemaMigrationInstruction,
  propertiesV3: Record<string, InterfacePropertyType>,
): InterfaceSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty":
      return {
        type: "addRequiredProperty",
        property: wireApiNameOf(
          instruction.type,
          instruction.property,
          propertiesV3,
        ),
      };
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}

function wireApiNameOf(
  instructionType: string,
  authoredApiName: string,
  propertiesV3: Record<string, InterfacePropertyType>,
): string {
  const property = propertiesV3[authoredApiName];
  // `validateInterfaceSchemaMigrations` has already rejected instructions that reference an
  // undeclared property, so this only guards against being called on an unvalidated definition.
  if (property === undefined) {
    throw new Error(
      `Schema migration instruction ${instructionType} references property "${authoredApiName}", which the interface does not declare.`,
    );
  }
  return interfacePropertyWireApiName(property, authoredApiName);
}

function sortedByApiName(interfaceTypes: InterfaceType[]): InterfaceType[] {
  return [...interfaceTypes].sort((a, b) => compare(a.apiName, b.apiName));
}

function compare(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}
