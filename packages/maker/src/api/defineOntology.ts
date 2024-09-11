/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  OntologyIrInterfaceType,
  OntologyIrInterfaceTypeBlockDataV2,
  OntologyIrOntologyBlockDataV2,
  OntologyIrSharedPropertyType,
  OntologyIrSharedPropertyTypeBlockDataV2,
  OntologyIrValueTypeBlockData,
  OntologyIrValueTypeBlockDataEntry,
  Type,
} from "@osdk/client.unstable";
import type {
  InterfaceType,
  Ontology,
  PropertyTypeType,
  SharedPropertyType,
} from "./types.js";

/** @internal */
export let ontologyDefinition: Ontology;

/** @internal */
export let namespace: string;

type OntologyAndValueTypeIrs = {
  ontology: OntologyIrOntologyBlockDataV2;
  valueType: OntologyIrValueTypeBlockData;
};

export async function defineOntology(
  ns: string,
  body: () => void | Promise<void>,
): Promise<OntologyAndValueTypeIrs> {
  namespace = ns;
  ontologyDefinition = {
    actionTypes: {},
    objectTypes: {},
    queryTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
    valueTypes: {},
  };

  try {
    await body();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      "Unexpected error while processing the body of the ontology",
      e,
    );
    throw e;
  }

  return {
    ontology: convertToWireOntologyIr(ontologyDefinition),
    valueType: convertOntologyToValueTypeIr(ontologyDefinition),
  };
}

function convertOntologyToValueTypeIr(
  ontology: Ontology,
): OntologyIrValueTypeBlockData {
  return {
    valueTypes: Object.values(ontology.valueTypes).map<
      OntologyIrValueTypeBlockDataEntry
    >(definitions => ({
      metadata: {
        apiName: definitions[0].apiName,
        displayMetadata: definitions[0].displayMetadata,
        status: definitions[0].status,
      },
      versions: definitions.map(definition => ({
        version: definition.version,
        baseType: definition.baseType,
        constraints: definition.constraints,
        exampleValues: definition.exampleValues,
      })),
    })),
  };
}

function convertToWireOntologyIr(
  ontology: Ontology,
): OntologyIrOntologyBlockDataV2 {
  return {
    sharedPropertyTypes: Object.fromEntries(
      Object.entries(
        ontology.sharedPropertyTypes,
      )
        .map<[string, OntologyIrSharedPropertyTypeBlockDataV2]>((
          [apiName, spt],
        ) => [apiName, { sharedPropertyType: convertSpt(spt) }]),
    ),
    interfaceTypes: Object.fromEntries(
      Object.entries(
        ontology.interfaceTypes,
      )
        .map<[string, OntologyIrInterfaceTypeBlockDataV2]>(
          ([apiName, interfaceType]) => {
            return [apiName, {
              interfaceType: convertInterface(interfaceType),
            }];
          },
        ),
    ),
    blockPermissionInformation: {
      actionTypes: {},
      linkTypes: {},
      objectTypes: {},
    },
  };
}

function convertInterface(
  interfaceType: InterfaceType,
): OntologyIrInterfaceType {
  return {
    ...interfaceType,
    properties: Object.values(interfaceType.properties)
      .map<OntologyIrSharedPropertyType>((spt) => convertSpt(spt)),
    // these are omitted from our internal types but we need to re-add them for the final json
    allExtendsInterfaces: [],
    allLinks: [],
    allProperties: [],
  };
}

export function dumpOntologyFullMetadata(): OntologyIrOntologyBlockDataV2 {
  return convertToWireOntologyIr(ontologyDefinition);
}

export function dumpValueTypeWireType(): OntologyIrValueTypeBlockData {
  return convertOntologyToValueTypeIr(ontologyDefinition);
}

function convertSpt(
  { type, array, description, apiName, displayName, valueType }:
    SharedPropertyType,
): OntologyIrSharedPropertyType {
  return {
    apiName,
    displayMetadata: {
      displayName: displayName ?? apiName,
      visibility: "NORMAL",
      description,
    },
    type: array
      ? {
        type: "array" as const,
        array: {
          subtype: convertType(type),
        },
      }
      : convertType(type),
    aliases: [],
    baseFormatter: undefined,
    dataConstraints: undefined,
    gothamMapping: undefined,
    indexedForSearch: true,
    provenance: undefined,
    typeClasses: [],
    valueType: valueType,
  };
}

function convertType(
  type: PropertyTypeType,
): Type {
  switch (type) {
    case "marking":
      return { type, [type]: { markingType: "MANDATORY" } };

    case "geopoint":
      return { type: "geohash", geohash: {} };

    case "decimal":
      return { type, [type]: { precision: undefined, scale: undefined } };

    case "string":
      return {
        type,
        [type]: {
          analyzerOverride: undefined,
          enableAsciiFolding: undefined,
          isLongText: false,
          supportsExactMatching: true,
        },
      };

    default:
      // use helper function to distribute `type` properly
      return distributeTypeHelper(type);
  }
}

/**
 * Helper function to avoid duplication. Makes the types match properly with the correct
 * behavior without needing to switch on type.
 * @param type
 * @returns
 */
function distributeTypeHelper<T extends string>(
  type: T,
): T extends any ? { type: T } & { [K in T]: {} } : never {
  return { type, [type]: {} } as any; // any cast to match conditional return type
}
