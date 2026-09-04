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
import { normalizePropertyType } from "./LockedPropertyType.js";
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
 * This enables disambiguating "this entity was deleted" vs "this entity was unenrolled from
 * being locked", which may have different consequences.
 */
export type SourceCensus = Record<LockfileSection, ReadonlySet<string>>;

/**
 * Derives the lockfile that the given ontology *should* have, purely from source.
 *
 * NB: Deliberately does not consult the previously-persisted lockfile, and instead keeps
 * generation a pure function of the source (simpler to reason about, test, etc.).
 * Any history-dependent logic (e.g. backwards-compatibility checking) is only a validation concern.
 */
export function generateOntologySchemaLockfile(
  ontology: OntologyDefinition,
): OntologySchemaLockfile {
  const interfaces: Record<string, LockedInterfaceType> = {};
  for (const interfaceType of sortedByApiName(
    Object.values(ontology[OntologyEntityTypeEnum.INTERFACE_TYPE]),
  )) {
    if (!shouldLockInterface(interfaceType)) {
      continue;
    }
    interfaces[interfaceType.apiName] = lockInterface(interfaceType);
  }

  return { version: ONTOLOGY_SCHEMA_LOCKFILE_VERSION, interfaces };
}

/**
 * The api names of every entity each section could track, enrolled or not.
 */
export function censusOfSource(ontology: OntologyDefinition): SourceCensus {
  return {
    interfaces: new Set(
      Object.keys(ontology[OntologyEntityTypeEnum.INTERFACE_TYPE]),
    ),
  };
}

export function shouldLockInterface(interfaceType: InterfaceType): boolean {
  return interfaceType.schemaMigrations !== undefined;
}

function lockInterface(interfaceType: InterfaceType): LockedInterfaceType {
  return {
    schema: lockInterfaceSchema(interfaceType),
    transitions: lockInterfaceSchemaMigrationTransitions(interfaceType),
  };
}

function lockInterfaceSchema(
  interfaceType: InterfaceType,
): LockedInterfaceSchema {
  const locked = Object.entries(interfaceType.propertiesV3)
    .map(
      ([propertyApiName, property]) =>
        [
          interfacePropertyWireApiName(property, propertyApiName),
          {
            type: normalizePropertyType(getInterfacePropertyTypeType(property)),
            required: isInterfacePropertyRequired(property),
          },
        ] as const,
    )
    .sort(([a], [b]) => compare(a, b));
  return { properties: Object.fromEntries(locked) };
}

function lockInterfaceSchemaMigrationTransitions(
  interfaceType: InterfaceType,
): LockedTransition[] {
  const { schemaMigrations, propertiesV3 } = interfaceType;
  if (schemaMigrations === undefined) {
    return [];
  }

  return schemaMigrations.transitions
    .map((transition) => ({
      id: transition.id,
      gracePeriod: transition.gracePeriod,
      instructions: transition.instructions
        .map((instruction) => resolveWireNames(instruction, propertiesV3))
        // Instructions have no unique stable identifier, so JSON them instead for sort stability
        .sort((a, b) => compare(JSON.stringify(a), JSON.stringify(b))),
    }))
    .sort((a, b) => compare(a.id, b.id));
}

/**
 * Rewrites each instruction's property references from the keys the author used to the api names
 * the properties are published under, matching what the ontology-ir carries.
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
  propertyApiName: string,
  propertiesV3: Record<string, InterfacePropertyType>,
): string {
  const property = propertiesV3[propertyApiName];
  if (property === undefined) {
    throw new Error(
      `Schema migration instruction ${instructionType} references property "${propertyApiName}", which the interface does not declare.`,
    );
  }
  return interfacePropertyWireApiName(property, propertyApiName);
}

function sortedByApiName(interfaceTypes: InterfaceType[]): InterfaceType[] {
  return [...interfaceTypes].sort((a, b) => compare(a.apiName, b.apiName));
}

function compare(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}
