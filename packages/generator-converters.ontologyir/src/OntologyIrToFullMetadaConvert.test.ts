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
  OntologyIrV2,
  ValueTypeBlockData,
  ValueTypeDataConstraint,
  ValueTypeReference,
} from "@osdk/client.unstable";
import {
  generateClientSdkVersionTwoPointZero,
  type MinimalFs,
} from "@osdk/generator";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { isInjectedRuntimeInput } from "./convertDataType.js";
import {
  type IDiscoveredFunction,
  OntologyIrToFullMetadataConverter,
} from "./OntologyIrToFullMetadataConverter.js";

const discoveredFunctions = vi.hoisted<IDiscoveredFunction[]>(() => []);

type OntologyBlock = OntologyIrV2["ontology"];
type ActionBlock = OntologyBlock["actionTypes"][string];
type InterfaceBlock = OntologyBlock["interfaceTypes"][string];
type InterfaceType = InterfaceBlock["interfaceType"];
type InterfaceProperty = InterfaceType["propertiesV3"][string];
type SharedProperty = Extract<
  InterfaceProperty,
  { type: "sharedPropertyBasedPropertyType" }
>["sharedPropertyBasedPropertyType"]["sharedPropertyType"];
type InterfaceDefinedProperty = Extract<
  InterfaceProperty,
  { type: "interfaceDefinedPropertyType" }
>["interfaceDefinedPropertyType"];
type StringValueTypeConstraint = Extract<
  ValueTypeDataConstraint["constraint"]["constraint"],
  { type: "string" }
>;

type ValueTypeLocation = "owned" | "imported";

const RANDOMNESS_KEY = "current-v2-envelope";
const VALUE_TYPE_API_NAME = "trackQuality";
const VALUE_TYPE_VERSION = "10.0.0";
const LEGACY_VALUE_TYPE_REFERENCE = legacyValueTypeReference(
  VALUE_TYPE_API_NAME,
  VALUE_TYPE_VERSION,
  RANDOMNESS_KEY,
);
function emptyOntologyBlock(): OntologyBlock {
  return {
    actionTypes: {},
    blockOutputCompassLocations: {},
    interfaceTypes: {},
    knownIdentifiers: {
      actionParameterIds: {},
      actionParameters: {},
      actionTypes: {},
      datasourceColumns: {},
      datasources: {},
      filesDatasources: {},
      functions: {},
      geotimeSeriesSyncs: {},
      groupIds: {},
      interfaceActionTypeConstraints: {},
      interfaceLinkTypes: {},
      interfaceParameterConstraints: {},
      interfacePropertyTypes: {},
      interfaceTypes: {},
      linkTypeIds: {},
      linkTypes: {},
      markings: {},
      objectPropertyTypeIdsToRids: {},
      objectTypeIds: {},
      objectTypes: {},
      propertyTypeIds: {},
      propertyTypes: {},
      sharedPropertyTypes: {},
      structFieldRidsToApiNames: {},
      timeSeriesSyncs: {},
      valueTypes: {},
      webhooks: {},
      workshopModules: {},
    },
    linkTypes: {},
    objectTypes: {},
    ruleSets: {},
    sharedPropertyTypes: {},
  };
}

function legacyValueTypeReference(
  apiName: string,
  version: string,
  randomnessKey?: string,
): ValueTypeReference {
  const ridInput = randomnessKey
    ? `${apiName}-${randomnessKey}`
    : apiName;
  const versionHash = createHash("md5").update(version, "utf8").digest("hex");
  return {
    rid: `ri.ontology-metadata.temp.value-type.${
      createHash("sha256").update(ridInput, "utf8").digest("hex")
    }`,
    versionId: `${versionHash.slice(0, 8)}-${
      versionHash.slice(
        8,
        12,
      )
    }-${versionHash.slice(12, 16)}-${
      versionHash.slice(
        16,
        20,
      )
    }-${versionHash.slice(20)}`,
  };
}

function stringOneOfConstraint(
  values: string[],
): StringValueTypeConstraint {
  return {
    type: "string",
    string: {
      type: "oneOf",
      oneOf: {
        useIgnoreCase: undefined,
        values,
      },
    },
  };
}

function valueType(
  apiName: string,
  versions: string[],
  displayName = `Display ${apiName}`,
): ValueTypeBlockData {
  return {
    metadata: {
      apiName,
      baseType: { type: "string", string: {} },
      displayMetadata: {
        description: `Description for ${apiName}`,
        displayName,
      },
      status: { type: "active", active: {} },
    },
    versions: versions.map((version) => ({
      baseType: { type: "string", string: {} },
      constraints: [{
        constraint: {
          constraint: stringOneOfConstraint(["HIGH", "MEDIUM", "LOW"]),
          failureMessage: undefined,
        },
      }],
      exampleValues: [],
      version,
    })),
  };
}

function sharedProperty(
  apiName: string,
  valueTypeReference: ValueTypeReference,
): SharedProperty {
  return {
    aliases: [],
    apiName,
    displayMetadata: {
      displayName: apiName,
      visibility: "NORMAL",
    },
    indexedForSearch: true,
    rid: `ri.shared-property.${apiName}`,
    type: {
      type: "string",
      string: {
        isLongText: false,
        supportsExactMatching: true,
      },
    },
    typeClasses: [],
    valueType: valueTypeReference,
  };
}

function interfaceDefinedProperty(
  apiName: string,
  valueTypeReference: ValueTypeReference,
): InterfaceDefinedProperty {
  return {
    apiName,
    constraints: {
      indexedForSearch: true,
      primaryKeyConstraint: "NO_RESTRICTION",
      requireImplementation: true,
      typeClasses: [],
      valueType: valueTypeReference,
    },
    displayMetadata: {
      displayName: apiName,
      visibility: "NORMAL",
    },
    rid: `ri.interface-property.${apiName}`,
    type: {
      type: "string",
      string: {
        isLongText: false,
        supportsExactMatching: true,
      },
    },
  };
}

function interfaceType(
  apiName: string,
  extendsInterfaces: string[],
  propertyApiName?: string,
  linkedInterfaceRid?: string,
): InterfaceBlock {
  return {
    interfaceType: {
      actionTypeConstraints: [],
      apiName,
      displayMetadata: { displayName: apiName },
      extendsInterfaces,
      links: linkedInterfaceRid === undefined
        ? []
        : [{
          cardinality: "SINGLE",
          linkedEntityTypeId: {
            interfaceType: linkedInterfaceRid,
            type: "interfaceType",
          },
          metadata: {
            apiName: "related",
            description: "",
            displayName: "Related",
          },
          required: false,
          rid:
            "ri.ontology.main.interface-link.830df50e-1bad-4dab-b352-dd55b01191ec",
        }],
      properties: [],
      propertiesV2: {},
      propertiesV3: propertyApiName === undefined
        ? {}
        : {
          [propertyApiName]: {
            type: "interfaceDefinedPropertyType",
            interfaceDefinedPropertyType: {
              apiName: propertyApiName,
              constraints: {
                indexedForSearch: true,
                primaryKeyConstraint: "NO_RESTRICTION",
                requireImplementation: true,
                typeClasses: [],
              },
              displayMetadata: {
                displayName: propertyApiName,
                visibility: "NORMAL",
              },
              rid: `ri.interface-property.${propertyApiName}`,
              type: {
                type: "string",
                string: {
                  isLongText: false,
                  supportsExactMatching: true,
                },
              },
            },
          },
        },
      rid: `ri.interface.${apiName}`,
      status: { type: "active", active: {} },
    },
  };
}

function unsupportedImportedAction(): ActionBlock {
  return {
    actionType: {
      actionTypeLogic: {
        logic: {
          rules: [{
            type: "addLinkRule",
            addLinkRule: {
              linkTypeId: "unsupported-link",
              sourceObject: "source",
              targetObject: "target",
            },
          }],
        },
        notifications: [],
        validation: {
          actionTypeLevelValidation: {
            ordering: [],
            rules: {},
          },
          parameterValidations: {},
          sectionValidations: {},
        },
      },
      metadata: {
        apiName: "importedUnsupported",
        displayMetadata: {
          applyingMessage: [],
          description: "",
          displayName: "Imported Unsupported",
          successMessage: [],
          typeClasses: [],
        },
        formContentOrdering: [],
        parameterOrdering: [],
        parameters: {},
        rid: "ri.ontology.main.action-type.imported-unsupported",
        sections: {},
        status: {
          type: "active",
          active: {},
        },
        version: "",
      },
    },
    parameterIds: {},
  };
}

function importedDefinitionsEnvelope(): OntologyIrV2 {
  const ancestor = interfaceType(
    "TransitiveAncestor",
    [],
    "ancestorProperty",
  );
  const parent = interfaceType(
    "ImportedParent",
    [ancestor.interfaceType.rid],
    "parentProperty",
    ancestor.interfaceType.rid,
  );
  const child = interfaceType(
    "LocalItem",
    [parent.interfaceType.rid],
    "localProperty",
  );

  return {
    importedOntology: {
      ...emptyOntologyBlock(),
      actionTypes: {
        "ri.ontology.main.action-type.imported-unsupported":
          unsupportedImportedAction(),
      },
      interfaceTypes: { [parent.interfaceType.rid]: parent },
    },
    importedValueTypes: [],
    ontology: {
      ...emptyOntologyBlock(),
      interfaceTypes: { [child.interfaceType.rid]: child },
    },
    transitiveImportedOntology: {
      ...emptyOntologyBlock(),
      interfaceTypes: { [ancestor.interfaceType.rid]: ancestor },
    },
    valueTypes: [],
  };
}

function valueTypeEnvelope(
  propertyReference: ValueTypeReference = LEGACY_VALUE_TYPE_REFERENCE,
  ownedValueTypes: ValueTypeBlockData[] = [
    valueType(VALUE_TYPE_API_NAME, ["2.0.0", VALUE_TYPE_VERSION, "1.0.0"]),
  ],
  importedValueTypes: ValueTypeBlockData[] = [],
): OntologyIrV2 {
  const ancestor = interfaceType("transitive.Ancestor", []);
  ancestor.interfaceType.propertiesV3 = {
    inheritedQuality: {
      type: "interfaceDefinedPropertyType",
      interfaceDefinedPropertyType: interfaceDefinedProperty(
        "inheritedQuality",
        propertyReference,
      ),
    },
  };
  const parent = interfaceType("imported.Parent", [ancestor.interfaceType.rid]);
  const child = interfaceType("local.Item", [parent.interfaceType.rid]);
  child.interfaceType.propertiesV3 = {
    inlineQuality: {
      type: "interfaceDefinedPropertyType",
      interfaceDefinedPropertyType: interfaceDefinedProperty(
        "inlineQuality",
        propertyReference,
      ),
    },
    trackQuality: {
      type: "sharedPropertyBasedPropertyType",
      sharedPropertyBasedPropertyType: {
        requireImplementation: true,
        sharedPropertyType: sharedProperty("trackQuality", propertyReference),
      },
    },
  };

  return {
    importedOntology: {
      ...emptyOntologyBlock(),
      interfaceTypes: { [parent.interfaceType.rid]: parent },
    },
    importedValueTypes,
    ontology: {
      ...emptyOntologyBlock(),
      interfaceTypes: { [child.interfaceType.rid]: child },
    },
    randomnessKey: RANDOMNESS_KEY,
    transitiveImportedOntology: {
      ...emptyOntologyBlock(),
      interfaceTypes: { [ancestor.interfaceType.rid]: ancestor },
    },
    valueTypes: ownedValueTypes,
  };
}

function createInMemoryFiles(): {
  fs: MinimalFs;
  files: Map<string, string>;
} {
  const files = new Map<string, string>();
  return {
    files,
    fs: {
      mkdir: () => Promise.resolve(),
      readdir: () => Promise.resolve([]),
      writeFile: (path, contents) => {
        files.set(path, contents);
        return Promise.resolve();
      },
    },
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
                "linkTypeRid": "ri.Dc3DistributionCenterProposal.Dc3DistributionCenterProposalToDistributionRoute.Dc3DistributionRouteAnalysis",
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
                "linkTypeRid": "ri.Dc3Restaurant.Dc3RestaurantToDistributionRoute.Dc3DistributionRouteAnalysis",
                "objectTypeApiName": "Dc3Restaurant",
                "status": "ACTIVE",
              },
              {
                "apiName": "distributionRouteAnalysis",
                "cardinality": "ONE",
                "displayName": "Distribution Route Analysis",
                "foreignKeyPropertyApiName": "distributionProposal",
                "linkTypeRid": "ri.Dc3DistributionCenterProposal.Dc3DistributionCenterProposalToDistributionRoute.Dc3DistributionRouteAnalysis",
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
                "linkTypeRid": "ri.Dc3Restaurant.Dc3RestaurantToDistributionRoute.Dc3DistributionRouteAnalysis",
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

  describe("full ontology V2 Value Types", () => {
    it("preserves metadata and property api names", () => {
      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(valueTypeEnvelope());
      const child = metadata.interfaceTypes["local.Item"];

      expect(metadata.valueTypes.trackQuality).toMatchObject({
        apiName: VALUE_TYPE_API_NAME,
        rid: LEGACY_VALUE_TYPE_REFERENCE.rid,
        version: VALUE_TYPE_VERSION,
      });
      expect(child.propertiesV2.trackQuality.valueTypeApiName).toBe(
        VALUE_TYPE_API_NAME,
      );
      expect(child.propertiesV2.inlineQuality.valueTypeApiName).toBe(
        VALUE_TYPE_API_NAME,
      );
      expect(child.allPropertiesV2.inheritedQuality.valueTypeApiName).toBe(
        VALUE_TYPE_API_NAME,
      );
    });

    it.each([RANDOMNESS_KEY, ""])(
      "resolves legacy property references with randomness key %s",
      (randomnessKey) => {
        const propertyReference = legacyValueTypeReference(
          VALUE_TYPE_API_NAME,
          VALUE_TYPE_VERSION,
          randomnessKey,
        );
        const input = valueTypeEnvelope(propertyReference);
        input.randomnessKey = randomnessKey;
        const metadata = OntologyIrToFullMetadataConverter
          .getFullMetadataFromEnvelope(input);

        expect(
          metadata.interfaceTypes["local.Item"].propertiesV2.trackQuality
            .valueTypeApiName,
        ).toBe(VALUE_TYPE_API_NAME);
        expect(metadata.valueTypes.trackQuality.rid).toBe(
          propertyReference.rid,
        );
      },
    );

    it("selects a stable version over a prerelease", () => {
      const stableReference = legacyValueTypeReference(
        VALUE_TYPE_API_NAME,
        "1.0.0",
        RANDOMNESS_KEY,
      );
      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(
          valueTypeEnvelope(
            stableReference,
            [valueType(VALUE_TYPE_API_NAME, ["1.0.0-alpha", "1.0.0"])],
          ),
        );

      expect(metadata.valueTypes.trackQuality).toMatchObject({
        rid: stableReference.rid,
        version: "1.0.0",
      });
    });

    it("orders prerelease identifiers and build metadata consistently", () => {
      const stableReference = legacyValueTypeReference(
        "stableCase",
        "1.0.0",
        RANDOMNESS_KEY,
      );
      const buildFirstReference = legacyValueTypeReference(
        "buildCase",
        "1.0.0+first",
        RANDOMNESS_KEY,
      );

      const stableMetadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(
          valueTypeEnvelope(
            stableReference,
            [
              valueType("stableCase", [
                "1.0.0-A",
                "1.0.0-a",
                "1.0.0-999999999999999999999999999999",
                "1.0.0",
              ]),
              valueType("buildCase", ["1.0.0+first", "1.0.0+second"]),
            ],
          ),
        );

      expect(stableMetadata.valueTypes.stableCase).toMatchObject({
        rid: stableReference.rid,
        version: "1.0.0",
      });
      expect(stableMetadata.valueTypes.buildCase).toMatchObject({
        rid: buildFirstReference.rid,
        version: "1.0.0+first",
      });
    });

    it("uses owned definitions for equal-version duplicates", () => {
      const reference = legacyValueTypeReference(
        VALUE_TYPE_API_NAME,
        VALUE_TYPE_VERSION,
        RANDOMNESS_KEY,
      );
      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(
          valueTypeEnvelope(
            reference,
            [valueType(VALUE_TYPE_API_NAME, [VALUE_TYPE_VERSION], "Owned")],
            [
              valueType(
                VALUE_TYPE_API_NAME,
                [VALUE_TYPE_VERSION],
                "Imported",
              ),
            ],
          ),
        );

      expect(metadata.valueTypes.trackQuality).toMatchObject({
        displayName: "Owned",
        rid: reference.rid,
      });
    });
  });

  describe("full ontology V2 imports", () => {
    it("preserves owned, direct, and transitive interface metadata", () => {
      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(importedDefinitionsEnvelope());
      const child = metadata.interfaceTypes.LocalItem;
      const parent = metadata.interfaceTypes.ImportedParent;

      expect(metadata.actionTypes).toEqual({});
      expect(Object.keys(metadata.interfaceTypes)).toEqual([
        "TransitiveAncestor",
        "ImportedParent",
        "LocalItem",
      ]);
      expect(child.extendsInterfaces).toEqual(["ImportedParent"]);
      expect(child.allExtendsInterfaces).toEqual([
        "ImportedParent",
        "TransitiveAncestor",
      ]);
      expect(Object.keys(child.allPropertiesV2)).toEqual([
        "ancestorProperty",
        "parentProperty",
        "localProperty",
      ]);
      expect(parent.links.related).toMatchObject({
        linkedEntityApiName: {
          apiName: "TransitiveAncestor",
          type: "interfaceTypeApiName",
        },
      });
    });

    it.each(
      [
        ["transitiveImportedOntology", "importedOntology"],
        ["transitiveImportedOntology", "ontology"],
        ["importedOntology", "ontology"],
      ] as const,
    )(
      "rejects duplicate interface api names across %s and %s",
      (firstScope, secondScope) => {
        const ir = importedDefinitionsEnvelope();
        const first = interfaceType("DuplicateInterface", []);
        const second = interfaceType("DuplicateInterface", []);
        first.interfaceType.rid = `ri.interface.${firstScope}`;
        second.interfaceType.rid = `ri.interface.${secondScope}`;
        ir[firstScope].interfaceTypes[first.interfaceType.rid] = first;
        ir[secondScope].interfaceTypes[second.interfaceType.rid] = second;

        expect(() =>
          OntologyIrToFullMetadataConverter.getFullMetadataFromEnvelope(ir)
        ).toThrow(
          `Duplicate interface API name "DuplicateInterface" is associated with multiple RIDs: "ri.interface.${firstScope}", "ri.interface.${secondScope}"`,
        );
      },
    );

    it("uses the owned interface when the same rid is repeated", () => {
      const ir = importedDefinitionsEnvelope();
      const imported = interfaceType("RepeatedInterface", [], "importedOnly");
      const owned = interfaceType("RepeatedInterface", [], "ownedOnly");
      imported.interfaceType.rid = "ri.interface.repeated";
      owned.interfaceType.rid = "ri.interface.repeated";
      ir.importedOntology.interfaceTypes[imported.interfaceType.rid] = imported;
      ir.ontology.interfaceTypes[owned.interfaceType.rid] = owned;

      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(ir);

      expect(
        Object.keys(metadata.interfaceTypes.RepeatedInterface.propertiesV2),
      )
        .toEqual(["ownedOnly"]);
    });

    it("rejects different interface api names under the same rid", () => {
      const ir = importedDefinitionsEnvelope();
      const imported = interfaceType("ImportedName", []);
      const owned = interfaceType("OwnedName", []);
      imported.interfaceType.rid = "ri.interface.repeated";
      owned.interfaceType.rid = "ri.interface.repeated";
      ir.importedOntology.interfaceTypes[imported.interfaceType.rid] = imported;
      ir.ontology.interfaceTypes[owned.interfaceType.rid] = owned;

      expect(() =>
        OntologyIrToFullMetadataConverter.getFullMetadataFromEnvelope(ir)
      ).toThrow(
        "Interface RID \"ri.interface.repeated\" is associated with multiple API names: \"ImportedName\", \"OwnedName\"",
      );
    });

    it("generates imported interfaces as local package exports", async () => {
      const metadata = OntologyIrToFullMetadataConverter
        .getFullMetadataFromEnvelope(importedDefinitionsEnvelope());
      const generated = createInMemoryFiles();

      await generateClientSdkVersionTwoPointZero(
        metadata,
        "osdk-oac/test",
        generated.fs,
        "generated",
        "module",
      );

      expect(
        generated.files.get("generated/ontology/interfaces/ImportedParent.ts"),
      ).toContain("apiName: 'ImportedParent'");
      expect(
        generated.files.get(
          "generated/ontology/interfaces/TransitiveAncestor.ts",
        ),
      ).toContain("apiName: 'TransitiveAncestor'");
      expect(generated.files.get("generated/ontology/interfaces.ts"))
        .toContain(
          "export { ImportedParent } from './interfaces/ImportedParent.js';",
        );
      expect(generated.files.get("generated/ontology/interfaces.ts"))
        .toContain(
          "export { TransitiveAncestor } from './interfaces/TransitiveAncestor.js';",
        );
      expect(generated.files.get("generated/index.ts")).toContain(
        "export * as $Interfaces from './ontology/interfaces.js';",
      );
    });
  });
});
