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
  OntologyIr,
  OntologyIrInterfaceType,
  OntologyIrInterfaceTypeBlockDataV2,
  OntologyIrSharedPropertyType,
  OntologyIrSharedPropertyTypeBlockDataV2,
  OntologyIrStructFieldType,
  OntologyIrType,
  OntologyIrValueTypeBlockData,
  OntologyIrValueTypeBlockDataEntry,
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
  ontology: OntologyIr;
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
    importedTypes: {
      sharedPropertyTypes: [],
    },
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
): OntologyIr {
  return {
    blockData: {
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
    },
    importedTypes: ontology.importedTypes,
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

export function dumpOntologyFullMetadata(): OntologyIr {
  return convertToWireOntologyIr(ontologyDefinition);
}

export function dumpValueTypeWireType(): OntologyIrValueTypeBlockData {
  return convertOntologyToValueTypeIr(ontologyDefinition);
}

function convertSpt(
  {
    type,
    array,
    description,
    apiName,
    displayName,
    gothamMapping,
    typeClasses,
    valueType,
  }: SharedPropertyType,
): OntologyIrSharedPropertyType {
  const dataConstraint:
    | OntologyIrSharedPropertyType["dataConstraints"]
    | undefined = (typeof type === "object" && type.type === "marking")
      ? {
        propertyTypeConstraints: [],
        nullability: "NO_EXPLICIT_NULLS",
        nullabilityV2: { noEmptyCollections: true, noNulls: true },
      }
      : undefined;
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
    dataConstraints: dataConstraint,
    gothamMapping: gothamMapping,
    indexedForSearch: true,
    provenance: undefined,
    typeClasses: typeClasses ?? [],
    valueType: valueType,
  };
}

function convertType(
  type: PropertyTypeType,
): OntologyIrType {
  switch (true) {
    case (typeof type === "object" && "markingType" in type):
      return {
        "type": "marking",
        marking: { markingType: type.markingType },
      };

    case (typeof type === "object" && "structDefinition" in type):
      const structFields: Array<OntologyIrStructFieldType> = new Array();
      for (const key in type.structDefinition) {
        const fieldTypeDefinition = type.structDefinition[key];
        var field: OntologyIrStructFieldType;
        if (typeof fieldTypeDefinition === "string") {
          field = {
            apiName: key,
            displayMetadata: { displayName: key, description: undefined },
            typeClasses: [],
            aliases: [],
            fieldType: convertType(fieldTypeDefinition),
          };
        } else {
          // If it is a full form type definition then process it as such
          if ("fieldType" in fieldTypeDefinition) {
            field = {
              ...fieldTypeDefinition,
              apiName: key,
              fieldType: convertType(fieldTypeDefinition.fieldType),
              typeClasses: fieldTypeDefinition.typeClasses ?? [],
              aliases: fieldTypeDefinition.aliases ?? [],
            };
          } else {
            field = {
              apiName: key,
              displayMetadata: { displayName: key, description: undefined },
              typeClasses: [],
              aliases: [],
              fieldType: convertType(fieldTypeDefinition),
            };
          }
        }

        structFields.push(field);
      }

      return {
        type: "struct",
        struct: { structFields },
      };

    case (type === "geopoint"):
      return { type: "geohash", geohash: {} };

    case (type === "decimal"):
      return { type, [type]: { precision: undefined, scale: undefined } };

    case (type === "string"):
      return {
        type,
        [type]: {
          analyzerOverride: undefined,
          enableAsciiFolding: undefined,
          isLongText: false,
          supportsExactMatching: true,
        },
      };

    case (type === "mediaReference"):
      return {
        type: type,
        mediaReference: {},
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
