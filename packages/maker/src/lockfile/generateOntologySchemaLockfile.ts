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

import type { OntologyIrValueTypeReferenceWithMetadata } from "@osdk/client.unstable";

import type { OntologyDefinition } from "../api/common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../api/common/OntologyEntityTypeEnum.js";
import type { TypeClass } from "../api/common/TypeClass.js";
import { mapPropertyNames } from "../api/interface/describeInterfaceSchemaMigrationInstruction.js";
import {
  getInterfacePropertyTypeType,
  type InterfacePropertyType,
  interfacePropertyNullability,
  interfacePropertyPrimaryKeyConstraint,
  interfacePropertyTypeClasses,
  interfacePropertyValueType,
  interfacePropertyWireApiName,
  isInterfacePropertyArray,
  isInterfacePropertyRequired,
  isInterfaceSharedPropertyType,
} from "../api/interface/InterfacePropertyType.js";
import type { InterfaceType } from "../api/interface/InterfaceType.js";
import type { Nullability } from "../api/properties/Nullability.js";
import { normalizePropertyType } from "./LockedPropertyType.js";
import type {
  LockedInterfaceSchema,
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  LockedValueType,
  OntologySchemaLockfile,
} from "./OntologySchemaLockfile.js";
import { ONTOLOGY_SCHEMA_LOCKFILE_VERSION } from "./OntologySchemaLockfile.js";

/**
 * Every interface the lockfile could track, enrolled or not, with the schema it declares now.
 *
 * This enables disambiguating "this interface was deleted from source" vs "this interface was
 * unenrolled from being locked, but still exists in source", which may have different consequences.
 */
export interface SourceCensus {
  interfaces: ReadonlyMap<string, LockedInterfaceSchema>;
}

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

export function censusOfSource(ontology: OntologyDefinition): SourceCensus {
  return {
    interfaces: new Map(
      Object.values(ontology[OntologyEntityTypeEnum.INTERFACE_TYPE]).map(
        (interfaceType) =>
          [interfaceType.apiName, lockInterfaceSchema(interfaceType)] as const,
      ),
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
          lockProperty(property),
        ] as const,
    )
    .sort(([a], [b]) => compare(a, b));
  return { properties: Object.fromEntries(locked) };
}

function lockProperty(property: InterfacePropertyType): LockedProperty {
  const typeClasses = lockTypeClasses(interfacePropertyTypeClasses(property));
  const primaryKeyConstraint = interfacePropertyPrimaryKeyConstraint(property);
  const nullability = lockNullability(interfacePropertyNullability(property));
  const valueType = lockValueType(interfacePropertyValueType(property));
  return {
    type: normalizePropertyType(
      getInterfacePropertyTypeType(property),
      isInterfacePropertyArray(property),
    ),
    required: isInterfacePropertyRequired(property),
    // NB: spread rather than assigned `undefined` so a lockfile read back from disk (where absents
    // have no key at all) still compare equal.
    ...(typeClasses !== undefined && { typeClasses }),
    ...(isInterfaceSharedPropertyType(property) && {
      declaredBy: "sharedPropertyType" as const,
    }),
    ...(primaryKeyConstraint !== "NO_RESTRICTION" && { primaryKeyConstraint }),
    ...(nullability !== undefined && { nullability }),
    ...(valueType !== undefined && { valueType }),
  };
}

function lockValueType(
  valueType: OntologyIrValueTypeReferenceWithMetadata | undefined,
): LockedValueType | undefined {
  if (valueType === undefined) {
    return undefined;
  }

  // Re-built field-by-field so key order is stable
  return {
    packageNamespace: valueType.packageNamespace,
    apiName: valueType.apiName,
  };
}

function lockNullability(
  nullability: Nullability | undefined,
): Nullability | undefined {
  if (
    nullability === undefined ||
    (!nullability.noNulls && !nullability.noEmptyCollections)
  ) {
    return undefined;
  }

  // Rebuild to have firm key order
  return {
    noNulls: nullability.noNulls,
    noEmptyCollections: nullability.noEmptyCollections,
  };
}

function lockTypeClasses(
  typeClasses: TypeClass[] | undefined,
): TypeClass[] | undefined {
  if (typeClasses === undefined || typeClasses.length === 0) {
    return undefined;
  }

  return [...typeClasses].sort(
    (a, b) => compare(a.kind, b.kind) || compare(a.name, b.name),
  );
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
        .map((instruction) =>
          mapPropertyNames(instruction, (propertyApiName) =>
            wireApiNameOf(instruction.type, propertyApiName, propertiesV3),
          ),
        )
        // Instructions have no unique stable identifier, so JSON them instead for sort stability
        .sort((a, b) => compare(JSON.stringify(a), JSON.stringify(b))),
    }))
    .sort((a, b) => compare(a.id, b.id));
}

/**
 * The api name a property the author referenced by key is published under, matching what the
 * ontology-ir carries.
 */
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
