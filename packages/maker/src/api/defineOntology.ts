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
  Type,
} from "@osdk/client.unstable";
import type {
  Ontology,
  PropertyTypeType,
  SharedPropertyType,
} from "./types.js";

/** @internal */
export let ontologyDefinition: Ontology;

/** @internal */
export let namespace: string;

export async function defineOntology(
  ns: string,
  body: () => void | Promise<void>,
): Promise<OntologyIrOntologyBlockDataV2> {
  namespace = ns;
  ontologyDefinition = {
    actionTypes: {},
    objectTypes: {},
    queryTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
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

  return convertToWireOntology(ontologyDefinition);
}

function convertToWireOntology(
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
          ([apiName, { displayName, description, properties }]) => {
            return [apiName, {
              interfaceType: convertInterface(
                description,
                displayName,
                apiName,
                properties,
              ),
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
  description: string | undefined,
  displayName: string,
  apiName: string,
  properties: Record<string, SharedPropertyType>,
): OntologyIrInterfaceType {
  return {
    displayMetadata: {
      description,
      displayName: displayName ?? apiName,
      icon: undefined,
    },
    apiName,
    extendsInterfaces: [],
    links: [],
    status: {
      active: true,
      type: "active",
    },
    allExtendsInterfaces: [],
    allLinks: [],
    allProperties: [],
    properties: Object.values(properties)
      .map<OntologyIrSharedPropertyType>((spt) => convertSpt(spt)),
  };
}

export function dumpOntologyFullMetadata(): OntologyIrOntologyBlockDataV2 {
  return convertToWireOntology(ontologyDefinition);
}

function convertSpt(
  { type, array, description, apiName, displayName }: SharedPropertyType,
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
    valueType: undefined,
  };
}

function convertType(
  type: PropertyTypeType,
): Type {
  switch (type) {
    case "marking":
      return { type, marking: { markingType: "MANDATORY" } };

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
      return asdf(type);
  }
}

/**
 * Helper function to avoid duplication
 * @param type
 * @returns
 */
function asdf<T extends string>(
  type: T,
): T extends any ? { type: T } & { [K in T]: {} } : never {
  return { type, [type]: {} } as any; // any cast to match conditional return type
}
