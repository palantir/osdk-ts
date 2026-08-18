/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  BaseType,
  OntologyIr,
  OntologyIrValueTypeBlockData,
  OntologyIrValueTypeBlockDataEntry,
  OntologyIrValueTypeReferenceWithMetadata,
  ValueTypeDataConstraint,
} from "@osdk/client.unstable";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { isInjectedRuntimeInput } from "./convertDataType.js";
import {
  type IDiscoveredFunction,
  OntologyIrToFullMetadataConverter,
} from "./OntologyIrToFullMetadataConverter.js";

const discoveredFunctions = vi.hoisted<IDiscoveredFunction[]>(() => []);

function isOntologyIr(value: object): value is OntologyIr {
  return "ontology" in value
    && typeof value.ontology === "object"
    && value.ontology != null
    && "importedOntology" in value
    && typeof value.importedOntology === "object"
    && value.importedOntology != null;
}

function readOntologyIrFixture(url: URL): OntologyIr {
  const parsed: object = JSON.parse(readFileSync(fileURLToPath(url), "utf8"));
  if (!isOntologyIr(parsed)) {
    throw new Error("Invalid Ontology IR fixture");
  }
  return parsed;
}

type OntologyBlock = OntologyIr["ontology"];
type ObjectBlock = OntologyBlock["objectTypes"][string];
type ObjectProperty = ObjectBlock["objectType"]["propertyTypes"][string];
type LinkBlock = OntologyBlock["linkTypes"][string];
type OneToManyDefinition = Extract<
  LinkBlock["linkType"]["definition"],
  { type: "oneToMany" }
>["oneToMany"];
type LinkMetadata = OneToManyDefinition["manyToOneLinkMetadata"];
type SharedPropertyBlock = OntologyBlock["sharedPropertyTypes"][string];
type TypedValueTypeVersion = {
  baseType: BaseType;
  constraints: ValueTypeDataConstraint[];
  exampleValues: [];
  version: string;
};

function emptyOntologyBlock(): OntologyBlock {
  return {
    actionTypes: {},
    interfaceTypes: {},
    linkTypes: {},
    objectTypes: {},
    sharedPropertyTypes: {},
  };
}

function stringProperty(apiName: string): ObjectProperty {
  return {
    apiName,
    displayMetadata: {
      displayName: apiName,
      visibility: "NORMAL",
    },
    indexedForSearch: true,
    status: {
      type: "active",
      active: {},
    },
    type: {
      type: "string",
      string: {
        isLongText: false,
        supportsExactMatching: true,
      },
    },
    typeClasses: [],
  };
}

function linkRidTestObject(
  apiName: string,
  foreignKey?: string,
): ObjectBlock {
  const propertyTypes: ObjectBlock["objectType"]["propertyTypes"] = {
    id: stringProperty("id"),
  };
  if (foreignKey !== undefined) {
    propertyTypes[foreignKey] = stringProperty(foreignKey);
  }

  return {
    datasources: [],
    objectType: {
      allImplementsInterfaces: {},
      apiName,
      displayMetadata: {
        displayName: apiName,
        icon: {
          type: "blueprint",
          blueprint: {
            color: "#2D72D2",
            locator: "cube",
          },
        },
        pluralDisplayName: `${apiName}s`,
        visibility: "NORMAL",
      },
      implementsInterfaces2: [],
      primaryKeys: ["id"],
      propertyTypes,
      status: {
        type: "active",
        active: {},
      },
      titlePropertyTypeRid: "id",
    },
  };
}

function linkMetadata(
  apiName: string,
  displayName: string,
): LinkMetadata {
  return {
    apiName,
    displayMetadata: {
      displayName,
      pluralDisplayName: `${displayName}s`,
      visibility: "NORMAL",
    },
    typeClasses: [],
  };
}

function valueTypeVersion(
  version: string,
  baseType: BaseType,
  constraints: ValueTypeDataConstraint[] = [],
): TypedValueTypeVersion {
  return {
    baseType,
    constraints,
    exampleValues: [],
    version,
  };
}

function integerRangeConstraint(
  minimumValue: number,
  maximumValue: number,
): ValueTypeDataConstraint {
  return {
    constraint: {
      failureMessage: undefined,
      constraint: {
        type: "integer",
        integer: {
          type: "range",
          range: {
            min: minimumValue,
            max: maximumValue,
          },
        },
      },
    },
  };
}

function valueTypeRegistryFromFixture(
  source: OntologyIrValueTypeBlockData,
  versions: ReadonlyArray<TypedValueTypeVersion>,
): OntologyIrValueTypeBlockData {
  const sourceEntry = source.valueTypes[0];
  if (sourceEntry === undefined) {
    throw new Error("Expected fixture value type");
  }
  const entry: OntologyIrValueTypeBlockDataEntry = {
    ...sourceEntry,
    versions: [...versions],
  };
  return { valueTypes: [entry] };
}

function requireSharedPropertyBlock(
  ontology: OntologyBlock,
  apiName: string,
): SharedPropertyBlock {
  const block = ontology.sharedPropertyTypes[apiName];
  if (block === undefined) {
    throw new Error(`Expected fixture shared property '${apiName}'`);
  }
  return block;
}

function requireEmbeddedValueType(
  block: SharedPropertyBlock,
): OntologyIrValueTypeReferenceWithMetadata {
  const valueType = block.sharedPropertyType.valueType;
  if (valueType == null) {
    throw new Error("Expected fixture embedded value type");
  }
  return valueType;
}

function sharedPropertyWithEmbeddedVersion(
  source: SharedPropertyBlock,
  propertyApiName: string,
  valueType: OntologyIrValueTypeReferenceWithMetadata,
  version: string,
): SharedPropertyBlock {
  return {
    ...source,
    sharedPropertyType: {
      ...source.sharedPropertyType,
      apiName: propertyApiName,
      valueType: {
        ...valueType,
        version,
      },
    },
  };
}

function embeddedValueTypeEnvelope(
  source: OntologyIr,
  registry: OntologyIrValueTypeBlockData,
  versions: ReadonlyArray<string>,
): OntologyIr {
  const sourceProperty = requireSharedPropertyBlock(
    source.ontology,
    "trackQuality",
  );
  const sourceValueType = requireEmbeddedValueType(sourceProperty);
  const sharedPropertyTypes: OntologyBlock["sharedPropertyTypes"] = {};
  for (const [index, version] of versions.entries()) {
    const apiName = `embeddedProperty${index}`;
    sharedPropertyTypes[apiName] = sharedPropertyWithEmbeddedVersion(
      sourceProperty,
      apiName,
      sourceValueType,
      version,
    );
  }

  return {
    ...source,
    importedOntology: emptyOntologyBlock(),
    importedValueTypes: { valueTypes: [] },
    ontology: {
      ...emptyOntologyBlock(),
      sharedPropertyTypes,
    },
    valueTypes: registry,
  };
}

function linkRidTestIr(): OntologyIr {
  const link: LinkBlock = {
    datasources: [],
    linkType: {
      definition: {
        type: "oneToMany",
        oneToMany: {
          cardinalityHint: "ONE_TO_MANY",
          manyToOneLinkMetadata: linkMetadata("a", "A"),
          objectTypeRidManySide: "B",
          objectTypeRidOneSide: "A",
          oneSidePrimaryKeyToManySidePropertyMapping: [
            {
              from: {
                apiName: "id",
                object: "A",
              },
              to: {
                apiName: "aId",
                object: "B",
              },
            },
          ],
          oneToManyLinkMetadata: linkMetadata("bs", "B"),
        },
      },
      id: "AtoB",
      status: {
        type: "active",
        active: {},
      },
    },
  };

  return {
    importedOntology: emptyOntologyBlock(),
    importedValueTypes: { valueTypes: [] },
    ontology: {
      ...emptyOntologyBlock(),
      linkTypes: { AtoB: link },
      objectTypes: {
        A: linkRidTestObject("A"),
        B: linkRidTestObject("B", "aId"),
      },
    },
    randomnessKey: "link-rid-test",
    valueTypes: { valueTypes: [] },
  };
}

vi.mock("@foundry/functions-typescript-osdk-discovery", () => ({
  FunctionDiscoverer: class {
    discover() {
      return { discoveredFunctions };
    }
  },
}));

describe(OntologyIrToFullMetadataConverter, () => {
  it("should convert ontology IR to full metadata", async () => {
    const result = OntologyIrToFullMetadataConverter
      .getFullMetadataFromIr(
        {
          "objectTypes": {
            "Dc3DistributionCenterProposal": {
              "objectType": {
                "displayMetadata": {
                  "displayName": "[DC3] Distribution Center Proposal",
                  "icon": {
                    "type": "blueprint",
                    "blueprint": {
                      "locator": "cube",
                      "color": "#2D72D2",
                    },
                  },
                  "pluralDisplayName": "[DC3] Distribution Center Proposals",
                  "visibility": "NORMAL",
                },
                "primaryKeys": [
                  "primaryKey_",
                ],
                "propertyTypes": {
                  "primaryKey_": {
                    "apiName": "primaryKey_",
                    "displayMetadata": {
                      "displayName": "Primary Key",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "name": {
                    "apiName": "name",
                    "displayMetadata": {
                      "displayName": "Name",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "price": {
                    "apiName": "price",
                    "displayMetadata": {
                      "displayName": "Price",
                      "description":
                        "The price of the distribution center proposal in USD",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "float",
                      "float": {},
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "proposedLocation": {
                    "apiName": "proposedLocation",
                    "displayMetadata": {
                      "displayName": "Proposed Location",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "geohash",
                      "geohash": {},
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "footprint": {
                    "apiName": "footprint",
                    "displayMetadata": {
                      "displayName": "Footprint",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "struct",
                      "struct": {
                        "structFields": [
                          {
                            "apiName": "length",
                            "aliases": [],
                            "displayMetadata": {
                              "displayName": "Length",
                            },
                            "fieldType": {
                              "type": "double",
                              "double": {},
                            },
                            "typeClasses": [],
                          },
                          {
                            "apiName": "width",
                            "aliases": [],
                            "displayMetadata": {
                              "displayName": "Width",
                            },
                            "fieldType": {
                              "type": "double",
                              "double": {},
                            },
                            "typeClasses": [],
                          },
                        ],
                      },
                    },
                    "typeClasses": [],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                },
                "titlePropertyTypeRid": "name",
                "apiName": "Dc3DistributionCenterProposal",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
                "implementsInterfaces2": [],
                "allImplementsInterfaces": {},
              },
              "datasources": [
                {
                  "datasourceName": "Dc3DistributionCenterProposal",
                  "datasource": {
                    "type": "datasetV2",
                    "datasetV2": {
                      "datasetRid": "Dc3DistributionCenterProposal",
                      "propertyMapping": {
                        "primaryKey_": {
                          "type": "column",
                          "column": "primaryKey_",
                        },
                        "name": {
                          "type": "column",
                          "column": "name",
                        },
                        "price": {
                          "type": "column",
                          "column": "price",
                        },
                        "proposedLocation": {
                          "type": "column",
                          "column": "proposedLocation",
                        },
                      },
                    },
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
                "aliases": [],
              },
            },
            "Dc3Restaurant": {
              "objectType": {
                "displayMetadata": {
                  "displayName": "[DC3] Restaurant",
                  "icon": {
                    "type": "blueprint",
                    "blueprint": {
                      "locator": "cube",
                      "color": "#2D72D2",
                    },
                  },
                  "pluralDisplayName": "[DC3] Restaurants",
                  "visibility": "NORMAL",
                },
                "primaryKeys": [
                  "primaryKey_",
                ],
                "propertyTypes": {
                  "primaryKey_": {
                    "apiName": "primaryKey_",
                    "displayMetadata": {
                      "displayName": "Primary Key",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "name": {
                    "apiName": "name",
                    "displayMetadata": {
                      "displayName": "Name",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "location": {
                    "apiName": "location",
                    "displayMetadata": {
                      "displayName": "Location",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "geohash",
                      "geohash": {},
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "rating": {
                    "apiName": "rating",
                    "displayMetadata": {
                      "displayName": "Rating",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "integer",
                      "integer": {},
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                },
                "titlePropertyTypeRid": "name",
                "apiName": "Dc3Restaurant",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
                "implementsInterfaces2": [],
                "allImplementsInterfaces": {},
              },
              "datasources": [
                {
                  "datasourceName": "Dc3Restaurant",
                  "datasource": {
                    "type": "datasetV2",
                    "datasetV2": {
                      "datasetRid": "Dc3Restaurant",
                      "propertyMapping": {
                        "primaryKey_": {
                          "type": "column",
                          "column": "primaryKey_",
                        },
                        "name": {
                          "type": "column",
                          "column": "name",
                        },
                        "location": {
                          "type": "column",
                          "column": "location",
                        },
                        "rating": {
                          "type": "column",
                          "column": "rating",
                        },
                      },
                    },
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
                "aliases": [],
              },
            },
            "Dc3DistributionRouteAnalysis": {
              "objectType": {
                "displayMetadata": {
                  "displayName": "[DC3] Distribution Route Analysis",
                  "icon": {
                    "type": "blueprint",
                    "blueprint": {
                      "locator": "cube",
                      "color": "#2D72D2",
                    },
                  },
                  "pluralDisplayName": "[DC3] Distribution Route Analyses",
                  "visibility": "NORMAL",
                },
                "primaryKeys": [
                  "primaryKey_",
                ],
                "propertyTypes": {
                  "primaryKey_": {
                    "apiName": "primaryKey_",
                    "displayMetadata": {
                      "displayName": "Primary Key",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "distributionProposal": {
                    "apiName": "distributionProposal",
                    "displayMetadata": {
                      "displayName": "Distribution Proposal",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "restaurant": {
                    "apiName": "restaurant",
                    "displayMetadata": {
                      "displayName": "Restaurant",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "timeMinutes": {
                    "apiName": "timeMinutes",
                    "displayMetadata": {
                      "displayName": "Time (Minutes)",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                    },
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE",
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE",
                      },
                    ],
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                },
                "titlePropertyTypeRid": "primaryKey_",
                "apiName": "Dc3DistributionRouteAnalysis",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
                "implementsInterfaces2": [],
                "allImplementsInterfaces": {},
              },
              "datasources": [
                {
                  "datasourceName": "Dc3DistributionRouteAnalysis",
                  "datasource": {
                    "type": "datasetV2",
                    "datasetV2": {
                      "datasetRid": "Dc3DistributionRouteAnalysis",
                      "propertyMapping": {
                        "primaryKey_": {
                          "type": "column",
                          "column": "primaryKey_",
                        },
                        "distributionProposal": {
                          "type": "column",
                          "column": "distributionProposal",
                        },
                        "restaurant": {
                          "type": "column",
                          "column": "restaurant",
                        },
                        "timeMinutes": {
                          "type": "column",
                          "column": "timeMinutes",
                        },
                      },
                    },
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
                "aliases": [],
              },
            },
          },
          "sharedPropertyTypes": {},
          "interfaceTypes": {},
          "linkTypes": {
            "Dc3RestaurantToDistributionRoute": {
              "linkType": {
                "definition": {
                  "type": "oneToMany",
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_ONE",
                    "manyToOneLinkMetadata": {
                      "displayMetadata": {
                        "displayName": "Distribution Route Analysis",
                        "pluralDisplayName": "Distribution Route Analyses",
                        "visibility": "NORMAL",
                      },
                      "apiName": "distributionRouteAnalysis",
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "Dc3DistributionRouteAnalysis",
                    "objectTypeRidOneSide": "Dc3Restaurant",
                    "oneToManyLinkMetadata": {
                      "displayMetadata": {
                        "displayName": "Restaurant",
                        "pluralDisplayName": "Restaurants",
                        "visibility": "NORMAL",
                      },
                      "apiName": "restaurant",
                      "typeClasses": [],
                    },
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "primaryKey_",
                          "object": "Dc3Restaurant",
                        },
                        "to": {
                          "apiName": "restaurant",
                          "object": "Dc3DistributionRouteAnalysis",
                        },
                      },
                    ],
                  },
                },
                "id": "Dc3RestaurantToDistributionRoute",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
              },
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
            },
            "Dc3DistributionCenterProposalToDistributionRoute": {
              "linkType": {
                "definition": {
                  "type": "oneToMany",
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_ONE",
                    "manyToOneLinkMetadata": {
                      "displayMetadata": {
                        "displayName": "Distribution Route Analysis",
                        "pluralDisplayName": "Distribution Route Analyses",
                        "visibility": "NORMAL",
                      },
                      "apiName": "distributionRouteAnalysis",
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "Dc3DistributionRouteAnalysis",
                    "objectTypeRidOneSide": "Dc3DistributionCenterProposal",
                    "oneToManyLinkMetadata": {
                      "displayMetadata": {
                        "displayName": "Distribution Center Proposal",
                        "pluralDisplayName": "Distribution Center Proposals",
                        "visibility": "NORMAL",
                      },
                      "apiName": "distributionCenterProposal",
                      "typeClasses": [],
                    },
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "primaryKey_",
                          "object": "Dc3DistributionCenterProposal",
                        },
                        "to": {
                          "apiName": "distributionProposal",
                          "object": "Dc3DistributionRouteAnalysis",
                        },
                      },
                    ],
                  },
                },
                "id": "Dc3DistributionCenterProposalToDistributionRoute",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
              },
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
            },
          },
          "actionTypes": {
            "create-object-dc3distribution-center-proposal": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "addObjectRule",
                        "addObjectRule": {
                          "objectTypeId": "Dc3DistributionCenterProposal",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "name": {
                              "type": "parameterId",
                              "parameterId": "name",
                            },
                            "price": {
                              "type": "parameterId",
                              "parameterId": "price",
                            },
                            "proposedLocation": {
                              "type": "parameterId",
                              "parameterId": "proposedLocation",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "price": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "numericInput",
                              "numericInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "range",
                              "range": {
                                "type": "range",
                                "range": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "proposedLocation": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "geoshape",
                              "geoshape": {
                                "type": "geoshape",
                                "geoshape": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "create-object-dc3distribution-center-proposal",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Create [DC3] Distribution Center Proposal",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "primaryKey_",
                    "name",
                    "price",
                    "proposedLocation",
                  ],
                  "parameters": {
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "name": {
                      "id": "name",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Name",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "price": {
                      "id": "price",
                      "type": {
                        "type": "double",
                        "double": {},
                      },
                      "displayMetadata": {
                        "displayName": "Price",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "proposedLocation": {
                      "id": "proposedLocation",
                      "type": {
                        "type": "geoshape",
                        "geoshape": {},
                      },
                      "displayMetadata": {
                        "displayName": "Proposed Location",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "modify-object-dc3distribution-center-proposal": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "modifyObjectRule",
                        "modifyObjectRule": {
                          "objectToModify": "objectToModifyParameter",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "name": {
                              "type": "parameterId",
                              "parameterId": "name",
                            },
                            "price": {
                              "type": "parameterId",
                              "parameterId": "price",
                            },
                            "proposedLocation": {
                              "type": "parameterId",
                              "parameterId": "proposedLocation",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToModifyParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "price": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "numericInput",
                              "numericInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "range",
                              "range": {
                                "type": "range",
                                "range": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "proposedLocation": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "geoshape",
                              "geoshape": {
                                "type": "geoshape",
                                "geoshape": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "modify-object-dc3distribution-center-proposal",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Modify [DC3] Distribution Center Proposal",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToModifyParameter",
                    "primaryKey_",
                    "name",
                    "price",
                    "proposedLocation",
                  ],
                  "parameters": {
                    "objectToModifyParameter": {
                      "id": "objectToModifyParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3DistributionCenterProposal",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Modify object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "name": {
                      "id": "name",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Name",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "price": {
                      "id": "price",
                      "type": {
                        "type": "double",
                        "double": {},
                      },
                      "displayMetadata": {
                        "displayName": "Price",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "proposedLocation": {
                      "id": "proposedLocation",
                      "type": {
                        "type": "geoshape",
                        "geoshape": {},
                      },
                      "displayMetadata": {
                        "displayName": "Proposed Location",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "delete-object-dc3distribution-center-proposal": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "deleteObjectRule",
                        "deleteObjectRule": {
                          "objectToDelete": "objectToDeleteParameter",
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToDeleteParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "delete-object-dc3distribution-center-proposal",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Delete [DC3] Distribution Center Proposal",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToDeleteParameter",
                  ],
                  "parameters": {
                    "objectToDeleteParameter": {
                      "id": "objectToDeleteParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3DistributionCenterProposal",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Delete object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "create-object-dc3restaurant": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "addObjectRule",
                        "addObjectRule": {
                          "objectTypeId": "Dc3Restaurant",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "name": {
                              "type": "parameterId",
                              "parameterId": "name",
                            },
                            "location": {
                              "type": "parameterId",
                              "parameterId": "location",
                            },
                            "rating": {
                              "type": "parameterId",
                              "parameterId": "rating",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "location": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "geoshape",
                              "geoshape": {
                                "type": "geoshape",
                                "geoshape": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "rating": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "numericInput",
                              "numericInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "range",
                              "range": {
                                "type": "range",
                                "range": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "create-object-dc3restaurant",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Create [DC3] Restaurant",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "primaryKey_",
                    "name",
                    "location",
                    "rating",
                  ],
                  "parameters": {
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "name": {
                      "id": "name",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Name",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "location": {
                      "id": "location",
                      "type": {
                        "type": "geoshape",
                        "geoshape": {},
                      },
                      "displayMetadata": {
                        "displayName": "Location",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "rating": {
                      "id": "rating",
                      "type": {
                        "type": "integer",
                        "integer": {},
                      },
                      "displayMetadata": {
                        "displayName": "Rating",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "modify-object-dc3restaurant": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "modifyObjectRule",
                        "modifyObjectRule": {
                          "objectToModify": "objectToModifyParameter",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "name": {
                              "type": "parameterId",
                              "parameterId": "name",
                            },
                            "location": {
                              "type": "parameterId",
                              "parameterId": "location",
                            },
                            "rating": {
                              "type": "parameterId",
                              "parameterId": "rating",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToModifyParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "location": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "geoshape",
                              "geoshape": {
                                "type": "geoshape",
                                "geoshape": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "rating": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "numericInput",
                              "numericInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "range",
                              "range": {
                                "type": "range",
                                "range": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "modify-object-dc3restaurant",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Modify [DC3] Restaurant",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToModifyParameter",
                    "primaryKey_",
                    "name",
                    "location",
                    "rating",
                  ],
                  "parameters": {
                    "objectToModifyParameter": {
                      "id": "objectToModifyParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3Restaurant",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Modify object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "name": {
                      "id": "name",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Name",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "location": {
                      "id": "location",
                      "type": {
                        "type": "geoshape",
                        "geoshape": {},
                      },
                      "displayMetadata": {
                        "displayName": "Location",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "rating": {
                      "id": "rating",
                      "type": {
                        "type": "integer",
                        "integer": {},
                      },
                      "displayMetadata": {
                        "displayName": "Rating",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "delete-object-dc3restaurant": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "deleteObjectRule",
                        "deleteObjectRule": {
                          "objectToDelete": "objectToDeleteParameter",
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToDeleteParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "delete-object-dc3restaurant",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Delete [DC3] Restaurant",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToDeleteParameter",
                  ],
                  "parameters": {
                    "objectToDeleteParameter": {
                      "id": "objectToDeleteParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3Restaurant",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Delete object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "create-object-dc3distribution-route-analysis": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "addObjectRule",
                        "addObjectRule": {
                          "objectTypeId": "Dc3DistributionRouteAnalysis",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "distributionProposal": {
                              "type": "parameterId",
                              "parameterId": "distributionProposal",
                            },
                            "restaurant": {
                              "type": "parameterId",
                              "parameterId": "restaurant",
                            },
                            "timeMinutes": {
                              "type": "parameterId",
                              "parameterId": "timeMinutes",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "distributionProposal": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "restaurant": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "timeMinutes": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "create-object-dc3distribution-route-analysis",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Create [DC3] Distribution Route Analysis",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "primaryKey_",
                    "distributionProposal",
                    "restaurant",
                    "timeMinutes",
                  ],
                  "parameters": {
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "distributionProposal": {
                      "id": "distributionProposal",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Distribution Proposal",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "restaurant": {
                      "id": "restaurant",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Restaurant",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "timeMinutes": {
                      "id": "timeMinutes",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Time (Minutes)",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "modify-object-dc3distribution-route-analysis": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "modifyObjectRule",
                        "modifyObjectRule": {
                          "objectToModify": "objectToModifyParameter",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "distributionProposal": {
                              "type": "parameterId",
                              "parameterId": "distributionProposal",
                            },
                            "restaurant": {
                              "type": "parameterId",
                              "parameterId": "restaurant",
                            },
                            "timeMinutes": {
                              "type": "parameterId",
                              "parameterId": "timeMinutes",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToModifyParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "distributionProposal": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "restaurant": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "timeMinutes": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "modify-object-dc3distribution-route-analysis",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Modify [DC3] Distribution Route Analysis",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToModifyParameter",
                    "primaryKey_",
                    "distributionProposal",
                    "restaurant",
                    "timeMinutes",
                  ],
                  "parameters": {
                    "objectToModifyParameter": {
                      "id": "objectToModifyParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3DistributionRouteAnalysis",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Modify object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "distributionProposal": {
                      "id": "distributionProposal",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Distribution Proposal",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "restaurant": {
                      "id": "restaurant",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Restaurant",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "timeMinutes": {
                      "id": "timeMinutes",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Time (Minutes)",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "delete-object-dc3distribution-route-analysis": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "deleteObjectRule",
                        "deleteObjectRule": {
                          "objectToDelete": "objectToDeleteParameter",
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToDeleteParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "delete-object-dc3distribution-route-analysis",
                  "displayMetadata": {
                    "applyingMessage": [],
                    "configuration": {
                      "defaultLayout": "FORM",
                      "displayAndFormat": {
                        "table": {
                          "columnWidthByParameterRid": {},
                          "enableFileImport": true,
                          "fitHorizontally": false,
                          "frozenColumnCount": 0,
                          "rowHeightInLines": 1,
                        },
                      },
                      "enableLayoutUserSwitch": false,
                    },
                    "description": "",
                    "displayName": "Delete [DC3] Distribution Route Analysis",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToDeleteParameter",
                  ],
                  "parameters": {
                    "objectToDeleteParameter": {
                      "id": "objectToDeleteParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3DistributionRouteAnalysis",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Delete object",
                        "description": "",
                        typeClasses: [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
          },
          "blockPermissionInformation": {
            "actionTypes": {},
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
        } as const,
      );

    expect(result).toMatchInlineSnapshot(`
      {
        "actionTypes": {
          "create-object-dc3distribution-center-proposal": {
            "apiName": "create-object-dc3distribution-center-proposal",
            "description": "",
            "displayName": "Create [DC3] Distribution Center Proposal",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionCenterProposal",
                "type": "createObject",
              },
            ],
            "parameters": {
              "name": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Name",
                "required": true,
                "typeClasses": [],
              },
              "price": {
                "dataType": {
                  "type": "double",
                },
                "description": "",
                "displayName": "Price",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "proposedLocation": {
                "dataType": {
                  "type": "geoshape",
                },
                "description": "",
                "displayName": "Proposed Location",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.create-object-dc3distribution-center-proposal",
            "status": "ACTIVE",
          },
          "create-object-dc3distribution-route-analysis": {
            "apiName": "create-object-dc3distribution-route-analysis",
            "description": "",
            "displayName": "Create [DC3] Distribution Route Analysis",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "type": "createObject",
              },
            ],
            "parameters": {
              "distributionProposal": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Distribution Proposal",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "restaurant": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Restaurant",
                "required": true,
                "typeClasses": [],
              },
              "timeMinutes": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Time (Minutes)",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.create-object-dc3distribution-route-analysis",
            "status": "ACTIVE",
          },
          "create-object-dc3restaurant": {
            "apiName": "create-object-dc3restaurant",
            "description": "",
            "displayName": "Create [DC3] Restaurant",
            "operations": [
              {
                "objectTypeApiName": "Dc3Restaurant",
                "type": "createObject",
              },
            ],
            "parameters": {
              "location": {
                "dataType": {
                  "type": "geoshape",
                },
                "description": "",
                "displayName": "Location",
                "required": true,
                "typeClasses": [],
              },
              "name": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Name",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "rating": {
                "dataType": {
                  "type": "integer",
                },
                "description": "",
                "displayName": "Rating",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.create-object-dc3restaurant",
            "status": "ACTIVE",
          },
          "delete-object-dc3distribution-center-proposal": {
            "apiName": "delete-object-dc3distribution-center-proposal",
            "description": "",
            "displayName": "Delete [DC3] Distribution Center Proposal",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionCenterProposal",
                "type": "deleteObject",
              },
            ],
            "parameters": {
              "objectToDeleteParameter": {
                "dataType": {
                  "objectApiName": "Dc3DistributionCenterProposal",
                  "objectTypeApiName": "Dc3DistributionCenterProposal",
                  "type": "object",
                },
                "description": "",
                "displayName": "Delete object",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.delete-object-dc3distribution-center-proposal",
            "status": "ACTIVE",
          },
          "delete-object-dc3distribution-route-analysis": {
            "apiName": "delete-object-dc3distribution-route-analysis",
            "description": "",
            "displayName": "Delete [DC3] Distribution Route Analysis",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "type": "deleteObject",
              },
            ],
            "parameters": {
              "objectToDeleteParameter": {
                "dataType": {
                  "objectApiName": "Dc3DistributionRouteAnalysis",
                  "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                  "type": "object",
                },
                "description": "",
                "displayName": "Delete object",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.delete-object-dc3distribution-route-analysis",
            "status": "ACTIVE",
          },
          "delete-object-dc3restaurant": {
            "apiName": "delete-object-dc3restaurant",
            "description": "",
            "displayName": "Delete [DC3] Restaurant",
            "operations": [
              {
                "objectTypeApiName": "Dc3Restaurant",
                "type": "deleteObject",
              },
            ],
            "parameters": {
              "objectToDeleteParameter": {
                "dataType": {
                  "objectApiName": "Dc3Restaurant",
                  "objectTypeApiName": "Dc3Restaurant",
                  "type": "object",
                },
                "description": "",
                "displayName": "Delete object",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.delete-object-dc3restaurant",
            "status": "ACTIVE",
          },
          "modify-object-dc3distribution-center-proposal": {
            "apiName": "modify-object-dc3distribution-center-proposal",
            "description": "",
            "displayName": "Modify [DC3] Distribution Center Proposal",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionCenterProposal",
                "type": "modifyObject",
              },
            ],
            "parameters": {
              "name": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Name",
                "required": true,
                "typeClasses": [],
              },
              "objectToModifyParameter": {
                "dataType": {
                  "objectApiName": "Dc3DistributionCenterProposal",
                  "objectTypeApiName": "Dc3DistributionCenterProposal",
                  "type": "object",
                },
                "description": "",
                "displayName": "Modify object",
                "required": true,
                "typeClasses": [],
              },
              "price": {
                "dataType": {
                  "type": "double",
                },
                "description": "",
                "displayName": "Price",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "proposedLocation": {
                "dataType": {
                  "type": "geoshape",
                },
                "description": "",
                "displayName": "Proposed Location",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.modify-object-dc3distribution-center-proposal",
            "status": "ACTIVE",
          },
          "modify-object-dc3distribution-route-analysis": {
            "apiName": "modify-object-dc3distribution-route-analysis",
            "description": "",
            "displayName": "Modify [DC3] Distribution Route Analysis",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "type": "modifyObject",
              },
            ],
            "parameters": {
              "distributionProposal": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Distribution Proposal",
                "required": true,
                "typeClasses": [],
              },
              "objectToModifyParameter": {
                "dataType": {
                  "objectApiName": "Dc3DistributionRouteAnalysis",
                  "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                  "type": "object",
                },
                "description": "",
                "displayName": "Modify object",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "restaurant": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Restaurant",
                "required": true,
                "typeClasses": [],
              },
              "timeMinutes": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Time (Minutes)",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.modify-object-dc3distribution-route-analysis",
            "status": "ACTIVE",
          },
          "modify-object-dc3restaurant": {
            "apiName": "modify-object-dc3restaurant",
            "description": "",
            "displayName": "Modify [DC3] Restaurant",
            "operations": [
              {
                "objectTypeApiName": "Dc3Restaurant",
                "type": "modifyObject",
              },
            ],
            "parameters": {
              "location": {
                "dataType": {
                  "type": "geoshape",
                },
                "description": "",
                "displayName": "Location",
                "required": true,
                "typeClasses": [],
              },
              "name": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Name",
                "required": true,
                "typeClasses": [],
              },
              "objectToModifyParameter": {
                "dataType": {
                  "objectApiName": "Dc3Restaurant",
                  "objectTypeApiName": "Dc3Restaurant",
                  "type": "object",
                },
                "description": "",
                "displayName": "Modify object",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "rating": {
                "dataType": {
                  "type": "integer",
                },
                "description": "",
                "displayName": "Rating",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.modify-object-dc3restaurant",
            "status": "ACTIVE",
          },
        },
        "interfaceTypes": {},
        "objectTypes": {
          "Dc3DistributionCenterProposal": {
            "implementsInterfaces": [],
            "implementsInterfaces2": {},
            "linkTypes": [
              {
                "apiName": "distributionCenterProposal",
                "cardinality": "MANY",
                "displayName": "Distribution Center Proposal",
                "linkTypeRid": "ri.link-type.Dc3DistributionCenterProposalToDistributionRoute",
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "status": "ACTIVE",
              },
            ],
            "objectType": {
              "aliases": [],
              "apiName": "Dc3DistributionCenterProposal",
              "datasources": [],
              "description": undefined,
              "displayName": "[DC3] Distribution Center Proposal",
              "icon": {
                "color": "#2D72D2",
                "name": "cube",
                "type": "blueprint",
              },
              "pluralDisplayName": "",
              "primaryKey": "primaryKey_",
              "properties": {
                "footprint": {
                  "dataType": {
                    "structFieldTypes": [
                      {
                        "apiName": "length",
                        "dataType": {
                          "type": "double",
                        },
                        "rid": "ri.ontology.main.struct-field.490f8661-78fc-53f9-9243-6e02531057ce",
                        "typeClasses": [],
                      },
                      {
                        "apiName": "width",
                        "dataType": {
                          "type": "double",
                        },
                        "rid": "ri.ontology.main.struct-field.850f2c3a-d97f-52ab-b9d3-a711468eb63f",
                        "typeClasses": [],
                      },
                    ],
                    "type": "struct",
                  },
                  "description": undefined,
                  "displayName": "Footprint",
                  "rid": "ri.Dc3DistributionCenterProposal.footprint",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "name": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Name",
                  "rid": "ri.Dc3DistributionCenterProposal.name",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "price": {
                  "dataType": {
                    "type": "float",
                  },
                  "description": "The price of the distribution center proposal in USD",
                  "displayName": "Price",
                  "rid": "ri.Dc3DistributionCenterProposal.price",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "primaryKey_": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Primary Key",
                  "rid": "ri.Dc3DistributionCenterProposal.primaryKey_",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "proposedLocation": {
                  "dataType": {
                    "type": "geopoint",
                  },
                  "description": undefined,
                  "displayName": "Proposed Location",
                  "rid": "ri.Dc3DistributionCenterProposal.proposedLocation",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
              },
              "rid": "ri.Dc3DistributionCenterProposal",
              "status": "ACTIVE",
              "titleProperty": "name",
            },
            "sharedPropertyTypeMapping": {},
          },
          "Dc3DistributionRouteAnalysis": {
            "implementsInterfaces": [],
            "implementsInterfaces2": {},
            "linkTypes": [
              {
                "apiName": "distributionRouteAnalysis",
                "cardinality": "ONE",
                "displayName": "Distribution Route Analysis",
                "foreignKeyPropertyApiName": "restaurant",
                "linkTypeRid": "ri.link-type.Dc3RestaurantToDistributionRoute",
                "objectTypeApiName": "Dc3Restaurant",
                "status": "ACTIVE",
              },
              {
                "apiName": "distributionRouteAnalysis",
                "cardinality": "ONE",
                "displayName": "Distribution Route Analysis",
                "foreignKeyPropertyApiName": "distributionProposal",
                "linkTypeRid": "ri.link-type.Dc3DistributionCenterProposalToDistributionRoute",
                "objectTypeApiName": "Dc3DistributionCenterProposal",
                "status": "ACTIVE",
              },
            ],
            "objectType": {
              "aliases": [],
              "apiName": "Dc3DistributionRouteAnalysis",
              "datasources": [],
              "description": undefined,
              "displayName": "[DC3] Distribution Route Analysis",
              "icon": {
                "color": "#2D72D2",
                "name": "cube",
                "type": "blueprint",
              },
              "pluralDisplayName": "",
              "primaryKey": "primaryKey_",
              "properties": {
                "distributionProposal": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Distribution Proposal",
                  "rid": "ri.Dc3DistributionRouteAnalysis.distributionProposal",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "primaryKey_": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Primary Key",
                  "rid": "ri.Dc3DistributionRouteAnalysis.primaryKey_",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "restaurant": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Restaurant",
                  "rid": "ri.Dc3DistributionRouteAnalysis.restaurant",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "timeMinutes": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Time (Minutes)",
                  "rid": "ri.Dc3DistributionRouteAnalysis.timeMinutes",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
              },
              "rid": "ri.Dc3DistributionRouteAnalysis",
              "status": "ACTIVE",
              "titleProperty": "primaryKey_",
            },
            "sharedPropertyTypeMapping": {},
          },
          "Dc3Restaurant": {
            "implementsInterfaces": [],
            "implementsInterfaces2": {},
            "linkTypes": [
              {
                "apiName": "restaurant",
                "cardinality": "MANY",
                "displayName": "Restaurant",
                "linkTypeRid": "ri.link-type.Dc3RestaurantToDistributionRoute",
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "status": "ACTIVE",
              },
            ],
            "objectType": {
              "aliases": [],
              "apiName": "Dc3Restaurant",
              "datasources": [],
              "description": undefined,
              "displayName": "[DC3] Restaurant",
              "icon": {
                "color": "#2D72D2",
                "name": "cube",
                "type": "blueprint",
              },
              "pluralDisplayName": "",
              "primaryKey": "primaryKey_",
              "properties": {
                "location": {
                  "dataType": {
                    "type": "geopoint",
                  },
                  "description": undefined,
                  "displayName": "Location",
                  "rid": "ri.Dc3Restaurant.location",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "name": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Name",
                  "rid": "ri.Dc3Restaurant.name",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "primaryKey_": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Primary Key",
                  "rid": "ri.Dc3Restaurant.primaryKey_",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "rating": {
                  "dataType": {
                    "type": "integer",
                  },
                  "description": undefined,
                  "displayName": "Rating",
                  "rid": "ri.Dc3Restaurant.rating",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
              },
              "rid": "ri.Dc3Restaurant",
              "status": "ACTIVE",
              "titleProperty": "name",
            },
            "sharedPropertyTypeMapping": {},
          },
        },
        "ontology": {
          "apiName": "ontology",
          "description": "",
          "displayName": "ontology",
          "rid": "ri.00000",
        },
        "queryTypes": {},
        "sharedPropertyTypes": {},
        "valueTypes": {},
      }
    `);
  });

  describe(isInjectedRuntimeInput, () => {
    it("identifies injected runtime function inputs", () => {
      expect(isInjectedRuntimeInput({
        type: "client",
        client: {
          type: "ontologySdkClient",
          ontologySdkClient: {},
        },
      })).toBe(true);
      expect(isInjectedRuntimeInput({
        type: "durableContext",
        durableContext: {},
      })).toBe(true);
      expect(isInjectedRuntimeInput({
        type: "anonymousCustomType",
        anonymousCustomType: {
          fields: {
            client: {
              type: "client",
              client: {
                type: "ontologySdkClient",
                ontologySdkClient: {},
              },
            },
            context: {
              type: "durableContext",
              durableContext: {},
            },
          },
        },
      })).toBe(true);
    });

    it("does not treat every anonymous custom type as injected", () => {
      expect(isInjectedRuntimeInput({
        type: "anonymousCustomType",
        anonymousCustomType: {
          fields: {
            value: {
              type: "string",
            },
          },
        },
      })).toBe(false);
      expect(isInjectedRuntimeInput({
        type: "anonymousCustomType",
        anonymousCustomType: {
          fields: {},
        },
      })).toBe(false);
    });
  });

  it("only omits injected runtime inputs in the first position", async () => {
    const createProgramSpy = vi.spyOn(
      OntologyIrToFullMetadataConverter,
      "createProgram",
    ).mockReturnValue({} as never);
    const clientInput = {
      name: "client",
      dataType: {
        type: "client",
        client: {
          type: "ontologySdkClient",
          ontologySdkClient: {},
        },
      },
      required: true,
    };
    const valueInput = {
      name: "value",
      dataType: { type: "string" },
      required: true,
    };

    discoveredFunctions.splice(0, discoveredFunctions.length, {
      locator: {
        type: "typescript",
        typescript: { functionName: "contextFirst" },
      },
      inputs: [clientInput, valueInput],
      output: { single: { dataType: { type: "string" } } },
      customTypes: {},
    }, {
      locator: {
        type: "typescript",
        typescript: { functionName: "contextSecond" },
      },
      inputs: [valueInput, clientInput],
      output: { single: { dataType: { type: "string" } } },
      customTypes: {},
    });

    try {
      const queryTypes = await OntologyIrToFullMetadataConverter
        .discoverTypeScriptFunctions(
          fileURLToPath(new URL(".", import.meta.url)),
        );

      expect(queryTypes.map(queryType => queryType.parameters)).toEqual([
        {
          value: {
            dataType: { type: "string" },
            required: true,
          },
        },
        {
          value: {
            dataType: { type: "string" },
            required: true,
          },
          client: {
            dataType: { type: "string" },
            required: true,
          },
        },
      ]);
    } finally {
      createProgramSpy.mockRestore();
    }
  });

  describe("full ontology envelope", () => {
    const fixtureIr = readOntologyIrFixture(
      new URL("./__fixtures__/envelope/ontology.json", import.meta.url),
    );

    it("preserves value types, propertiesV3, unknown implementers, and interface-link operations", () => {
      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(fixtureIr);
      const interfaceTypes = OntologyIrToFullMetadataConverter
        .getOsdkInterfaceTypes([
          ...Object.values(fixtureIr.importedOntology.interfaceTypes),
          ...Object.values(fixtureIr.ontology.interfaceTypes),
        ]);
      const actionTypes = OntologyIrToFullMetadataConverter.getOsdkActionTypes([
        ...Object.values(fixtureIr.importedOntology.actionTypes),
        ...Object.values(fixtureIr.ontology.actionTypes),
      ]);

      expect(metadata.valueTypes.trackQuality).toMatchObject({
        apiName: "trackQuality",
        version: "1.0.0",
      });
      expect(metadata.valueTypes.headingValue).toMatchObject({
        apiName: "headingValue",
        version: "1.0.0",
      });

      const child = interfaceTypes["local.Item"];
      expect(metadata.interfaceTypes["local.Item"]?.rid).toMatch(
        /^ri\.ontology\.oac\.interface-type\.[0-9a-f]{32}$/,
      );
      expect(metadata.sharedPropertyTypes.trackQuality).toMatchObject({
        valueTypeApiName: "trackQuality",
      });
      expect(child.properties.trackQuality).toMatchObject({
        valueTypeApiName: "trackQuality",
      });
      expect(child.propertiesV2.trackQuality).toBeDefined();
      expect(child.propertiesV2["inline" + "Call" + "sign"]).toMatchObject({
        type: "interfaceDefinedPropertyType",
        requireImplementation: true,
      });
      expect(child.implementedByObjectTypes).toEqual([]);
      expect(child.extendsInterfaces).toContain("imported.Parent");

      const metadataChild = metadata.interfaceTypes["local.Item"];
      const metadataParent = metadata.interfaceTypes["imported.Parent"];
      expect(metadataChild.properties.trackQuality.rid).toBe(
        metadataChild.propertiesV2.trackQuality.rid,
      );
      expect(metadataChild.allProperties.heading.rid).toBe(
        metadataParent.properties.heading.rid,
      );
      expect(metadataChild.allPropertiesV2.heading.rid).toBe(
        metadataParent.propertiesV2.heading.rid,
      );

      const createLink = actionTypes.createItemLink;
      expect(createLink.operations).toContainEqual({
        type: "createInterfaceLink",
        interfaceTypeApiName: "local.Item",
        interfaceLinkTypeApiName: "observations",
        sourceObject: "source",
        targetObject: "target",
      });
      const deleteLink = actionTypes.deleteItemLink;
      expect(deleteLink.operations).toContainEqual({
        type: "deleteInterfaceLink",
        interfaceTypeApiName: "local.Item",
        interfaceLinkTypeApiName: "observations",
        sourceObject: "source",
        targetObject: "target",
      });
    });

    it("uses one deterministic rid for both sides of a link", () => {
      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(linkRidTestIr());
      const aSides = metadata.objectTypes.A?.linkTypes ?? [];
      const bSides = metadata.objectTypes.B?.linkTypes ?? [];

      expect(aSides).toHaveLength(1);
      expect(bSides).toHaveLength(1);

      const aSide = aSides[0];
      const bSide = bSides[0];
      if (aSide === undefined || bSide === undefined) {
        throw new Error("Expected A and B to each have one link side");
      }

      expect(aSide.linkTypeRid).toBe(bSide.linkTypeRid);
    });

    const interfaceLinkObjectFields: ReadonlyArray<
      "sourceObjects" | "targetObjects"
    > = ["sourceObjects", "targetObjects"];
    it.each(interfaceLinkObjectFields)(
      "rejects multiple %s in an interface-link rule",
      field => {
        const createLink = fixtureIr.ontology.actionTypes.createItemLink;
        const rule = createLink.actionType.actionTypeLogic.logic.rules[0];
        if (rule.type !== "addInterfaceLinkRuleV2") {
          throw new Error("Expected addInterfaceLinkRuleV2");
        }
        const references = rule.addInterfaceLinkRuleV2[field];
        references.push(references[0]);

        try {
          expect(() =>
            OntologyIrToFullMetadataConverter.getOsdkActionTypes([createLink])
          ).toThrow(
            `Interface-link rule ${field} must reference exactly one existing object`,
          );
        } finally {
          references.pop();
        }
      },
    );

    it("selects the highest semantic value type version", () => {
      const registry = valueTypeRegistryFromFixture(fixtureIr.valueTypes, [
        valueTypeVersion("2.0.0", {
          type: "string",
          string: {},
        }),
        valueTypeVersion(
          "10.0.0",
          {
            type: "integer",
            integer: {},
          },
          [integerRangeConstraint(10, 20)],
        ),
        valueTypeVersion("1.0.0", {
          type: "string",
          string: {},
        }),
      ]);

      const valueTypes = OntologyIrToFullMetadataConverter.getOsdkValueTypes(
        registry,
        { valueTypes: [] },
      );

      expect(valueTypes.trackQuality).toMatchObject({
        version: "10.0.0",
        fieldType: { type: "integer" },
        constraints: [{
          type: "range",
          minimumValue: 10,
          maximumValue: 20,
        }],
      });
    });

    it("keeps the latest registry version for historical property references", () => {
      const registry = valueTypeRegistryFromFixture(fixtureIr.valueTypes, [
        valueTypeVersion("1.0.0", {
          type: "string",
          string: {},
        }),
        valueTypeVersion("2.0.0", {
          type: "string",
          string: {},
        }),
      ]);

      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(
          embeddedValueTypeEnvelope(fixtureIr, registry, ["1.0.0"]),
        );

      expect(metadata.valueTypes.trackQuality).toMatchObject({
        apiName: "trackQuality",
        version: "2.0.0",
        fieldType: { type: "string" },
      });
    });

    it("selects the latest embedded-only version independently of traversal order", () => {
      const emptyRegistry: OntologyIrValueTypeBlockData = { valueTypes: [] };
      const versions = [["1.0.0", "2.0.0"], ["2.0.0", "1.0.0"]];

      for (const order of versions) {
        const metadata = OntologyIrToFullMetadataConverter
          .getFullMetadataFromEnvelope(
            embeddedValueTypeEnvelope(fixtureIr, emptyRegistry, order),
          );

        expect(metadata.valueTypes.trackQuality).toMatchObject({
          apiName: "trackQuality",
          version: "2.0.0",
          fieldType: { type: "string" },
          constraints: [],
        });
      }
    });

    it("is deterministic across two conversions", () => {
      const a = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(fixtureIr);
      const b = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(fixtureIr);
      expect(a).toEqual(b);
    });
  });
});
