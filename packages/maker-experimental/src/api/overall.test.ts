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

import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

import type {
  ActionType,
  InterfaceType,
  PropertyTypeTypeVector,
} from "@osdk/maker";
import {
  addDependency,
  defineCreateObjectAction,
  defineInterface,
  defineInterfaceActionTypeConstraint,
  defineLink,
  defineObject,
  defineOntology,
  defineSharedPropertyType,
  defineValueType,
  dumpOntologyFullMetadata,
  importOntologyEntity,
  importSharedPropertyType,
  OntologyEntityTypeEnum,
} from "@osdk/maker";
import invariant from "tiny-invariant";
import { beforeEach, describe, expect, it } from "vitest";

import { ReadableIdGenerator } from "../util/generateRid.js";
import { defineOntologyV2 } from "./defineOntologyV2.js";
import { defineImportObject } from "./importObjectType.js";

function apiNamePreset(apiName: string) {
  return {
    value: {
      type: "fromSource",
      fromSource: {
        resolver: {
          type: "apiNameResolver",
          apiNameResolver: { apiName },
        },
      },
    },
    exportCompatibility: "COMPATIBLE",
    enforcement: "SUGGESTED",
    isDefault: false,
  };
}

describe("Experimental Test Suite", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  describe("Empty backing Media Sets", () => {
    it("requires opted-in Media Sets to exist before reconciliation", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        defineObject({
          apiName: "Document",
          displayName: "Document",
          pluralDisplayName: "Documents",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
            file: {
              type: "mediaReference",
              includeEmptyBackingMediaSet: true,
            },
          },
        });
      });

      const mediaSetName = "com.palantir.Document.file";
      const inputReadableId =
        ReadableIdGenerator.getForMediaSetView(mediaSetName);
      expect(result.backingMediaSetNames).toEqual([mediaSetName]);
      expect(result.shapes.inputShapes.get(inputReadableId)?.type).toBe(
        "filesDatasource",
      );
      expect(result.shapes.inputShapeMetadata.get(inputReadableId)).toEqual({
        isOptional: false,
        isAccessedInReconcile: true,
        reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      });
    });
  });

  describe("Dependencies", () => {
    it("writes dependencies to the configured file", async () => {
      const outputDir = fs.mkdtempSync(
        path.join(os.tmpdir(), "maker-experimental-dependencies-"),
      );
      const dependencyFile = path.join(outputDir, "dependencies.json");

      try {
        await defineOntologyV2(
          "com.palantir.",
          () => {
            addDependency("com.palantir", fileURLToPath(import.meta.url));
          },
          undefined,
          dependencyFile,
        );

        const packageJson = JSON.parse(
          fs.readFileSync(
            new URL("../../package.json", import.meta.url),
            "utf8",
          ),
        );
        expect(JSON.parse(fs.readFileSync(dependencyFile, "utf8"))).toEqual({
          "com.palantir": packageJson.version,
        });
      } finally {
        fs.rmSync(outputDir, { recursive: true, force: true });
      }
    });
  });

  describe("Imports", () => {
    it("Imported object types as action parameters are properly defined", () => {
      const importedObject = defineImportObject({
        apiName: "myImport",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
        },
      });
      const foo = defineObject({
        apiName: "foo",
        displayName: "Foo",
        pluralDisplayName: "Foos",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string" },
          date: { type: "date" },
          team: { type: "string" },
        },
      });
      defineCreateObjectAction({
        objectType: foo,
        parameterOrdering: ["ref", "team", "id", "date"],
        parameterConfiguration: {
          ref: {
            customParameterType: {
              type: "objectReference",
              objectReference: {
                objectTypeId: importedObject.apiName,
              },
            },
          },
          team: {
            defaultValue: {
              type: "objectParameterPropertyValue",
              objectParameterPropertyValue: {
                parameterId: "ref",
                propertyTypeId: "foo",
              },
            },
          },
        },
      });
      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {
            "com.palantir.create-object-foo": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "addObjectRule": {
                          "objectTypeId": "com.palantir.foo",
                          "propertyValues": {
                            "date": {
                              "parameterId": "date",
                              "type": "parameterId",
                            },
                            "id": {
                              "parameterId": "id",
                              "type": "parameterId",
                            },
                            "team": {
                              "parameterId": "team",
                              "type": "parameterId",
                            },
                          },
                          "structFieldValues": {},
                        },
                        "type": "addObjectRule",
                      },
                    ],
                  },
                  "validation": {
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "true": {},
                            "type": "true",
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "date": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "dateTimePicker": {},
                              "type": "dateTimePicker",
                            },
                            "visibility": {
                              "editable": {},
                              "type": "editable",
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "datetime": {
                                "datetime": {
                                  "maximum": undefined,
                                  "minimum": undefined,
                                },
                                "type": "datetime",
                              },
                              "type": "datetime",
                            },
                            "required": {
                              "notRequired": {},
                              "type": "notRequired",
                            },
                          },
                        },
                      },
                      "id": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "textInput": {},
                              "type": "textInput",
                            },
                            "visibility": {
                              "editable": {},
                              "type": "editable",
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "text": {
                                "text": {},
                                "type": "text",
                              },
                              "type": "text",
                            },
                            "required": {
                              "notRequired": {},
                              "type": "notRequired",
                            },
                          },
                        },
                      },
                      "ref": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "dropdown": {},
                              "type": "dropdown",
                            },
                            "visibility": {
                              "editable": {},
                              "type": "editable",
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "objectQuery": {
                                "objectQuery": {},
                                "type": "objectQuery",
                              },
                              "type": "objectQuery",
                            },
                            "required": {
                              "notRequired": {},
                              "type": "notRequired",
                            },
                          },
                        },
                      },
                      "team": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "prefill": {
                              "objectParameterPropertyValue": {
                                "parameterId": "ref",
                                "propertyTypeId": "foo",
                              },
                              "type": "objectParameterPropertyValue",
                            },
                            "renderHint": {
                              "textInput": {},
                              "type": "textInput",
                            },
                            "visibility": {
                              "editable": {},
                              "type": "editable",
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "text": {
                                "text": {},
                                "type": "text",
                              },
                              "type": "text",
                            },
                            "required": {
                              "notRequired": {},
                              "type": "notRequired",
                            },
                          },
                        },
                      },
                    },
                    "sectionValidations": {},
                  },
                },
                "metadata": {
                  "apiName": "com.palantir.create-object-foo",
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
                    "displayName": "Create Foo",
                    "icon": {
                      "blueprint": {
                        "color": "#000000",
                        "locator": "edit",
                      },
                      "type": "blueprint",
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "entities": {
                    "affectedInterfaceTypes": [],
                    "affectedLinkTypes": [],
                    "affectedObjectTypes": [
                      "com.palantir.foo",
                    ],
                    "typeGroups": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "ref",
                    "team",
                    "id",
                    "date",
                  ],
                  "parameters": {
                    "date": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Date",
                        "typeClasses": [],
                      },
                      "id": "date",
                      "type": {
                        "date": {},
                        "type": "date",
                      },
                    },
                    "id": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Id",
                        "typeClasses": [],
                      },
                      "id": "id",
                      "type": {
                        "string": {},
                        "type": "string",
                      },
                    },
                    "ref": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Ref",
                        "typeClasses": [],
                      },
                      "id": "ref",
                      "type": {
                        "objectReference": {
                          "objectTypeId": "myImport",
                        },
                        "type": "objectReference",
                      },
                    },
                    "team": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Team",
                        "typeClasses": [],
                      },
                      "id": "team",
                      "type": {
                        "string": {},
                        "type": "string",
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "active": {},
                    "type": "active",
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
          "interfaceTypes": {},
          "linkTypes": {},
          "objectTypes": {
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "date": {
                          "column": "date",
                          "type": "column",
                        },
                        "id": {
                          "column": "id",
                          "type": "column",
                        },
                        "team": {
                          "column": "team",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.foo",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "aliases": [],
                "arePatchesEnabled": false,
                "editsHistory": undefined,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.foo",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Foo",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Foos",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "id",
                ],
                "propertyTypes": {
                  "date": {
                    "apiName": "date",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Date",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "ruleSetBinding": undefined,
                    "sharedPropertyTypeApiName": undefined,
                    "sharedPropertyTypeRid": undefined,
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                    "type": {
                      "date": {},
                      "type": "date",
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
                    "valueType": undefined,
                  },
                  "id": {
                    "apiName": "id",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Id",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "ruleSetBinding": undefined,
                    "sharedPropertyTypeApiName": undefined,
                    "sharedPropertyTypeRid": undefined,
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                    "type": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                      "type": "string",
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
                    "valueType": undefined,
                  },
                  "team": {
                    "apiName": "team",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Team",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "ruleSetBinding": undefined,
                    "sharedPropertyTypeApiName": undefined,
                    "sharedPropertyTypeRid": undefined,
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                    "type": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                      "type": "string",
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
                    "valueType": undefined,
                  },
                },
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
                "titlePropertyTypeRid": "id",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
      expect(dumpOntologyFullMetadata().importedOntology).toMatchInlineSnapshot(
        `
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {},
          "objectTypes": {
            "myImport": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "myImport",
                      "propertyMapping": {
                        "id": {
                          "column": "id",
                          "type": "column",
                        },
                        "name": {
                          "column": "name",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "myImport",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "aliases": [],
                "arePatchesEnabled": false,
                "editsHistory": undefined,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "myImport",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "MyImport",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "MyImports",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "id",
                ],
                "propertyTypes": {
                  "id": {
                    "apiName": "id",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Id",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "ruleSetBinding": undefined,
                    "sharedPropertyTypeApiName": undefined,
                    "sharedPropertyTypeRid": undefined,
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                    "type": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                      "type": "string",
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
                    "valueType": undefined,
                  },
                  "name": {
                    "apiName": "name",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Name",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "ruleSetBinding": undefined,
                    "sharedPropertyTypeApiName": undefined,
                    "sharedPropertyTypeRid": undefined,
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                    "type": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                      "type": "string",
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
                    "valueType": undefined,
                  },
                },
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
                "titlePropertyTypeRid": "id",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `,
      );
    });
  });

  it("writes configurable descriptions to V2 block data", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      defineImportObject({
        apiName: "importedEmployee",
        displayName: "Imported Employee",
        description: "An employee supplied by another ontology",
        properties: {
          id: {
            type: "string",
            displayName: "Employee ID",
            description: "The imported employee identifier",
          },
        },
      });

      const department = defineObject({
        apiName: "department",
        displayName: "Department",
        pluralDisplayName: "Departments",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
      const employee = defineObject({
        apiName: "employee",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string" },
          departmentId: { type: "string" },
        },
      });

      defineLink({
        apiName: "department-employees",
        description: "Employees belonging to a department",
        one: {
          object: department,
          metadata: { apiName: "department" },
        },
        toMany: {
          object: employee,
          metadata: { apiName: "employees" },
        },
        manyForeignKeyProperty: "departmentId",
      });
      defineCreateObjectAction({
        objectType: employee,
        description: "Create an employee",
      });
    });

    const link = Object.values(result.ontologyIr.ontology.linkTypes)[0];
    expect(link.linkType.description).toBe(
      "Employees belonging to a department",
    );

    const action = Object.values(result.ontologyIr.ontology.actionTypes)[0];
    expect(action.actionType.metadata.displayMetadata.description).toBe(
      "Create an employee",
    );

    const importedObject = Object.values(
      result.ontologyIr.importedOntology.objectTypes,
    )[0].objectType;
    expect(importedObject.displayMetadata.description).toBe(
      "An employee supplied by another ontology",
    );
    expect(
      Object.values(importedObject.propertyTypes)[0].displayMetadata
        .description,
    ).toBe("The imported employee identifier");
  });

  it("preserves required nullability for value-typed object properties", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      const classification = defineValueType({
        apiName: "classification",
        displayName: "Classification",
        type: { type: "string" },
        version: "1.0.0",
      });

      defineObject({
        apiName: "classifiedObject",
        displayName: "Classified Object",
        pluralDisplayName: "Classified Objects",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string" },
          classification: {
            type: "string",
            valueType: classification,
            nullability: {
              noNulls: true,
              noEmptyCollections: true,
            },
          },
        },
      });
    });

    const objectType = Object.values(result.ontologyIr.ontology.objectTypes)[0]
      .objectType;
    const classification = Object.values(objectType.propertyTypes).find(
      (property) => property.apiName === "classification",
    );

    expect(classification?.dataConstraints).toEqual({
      propertyTypeConstraints: [],
      nullability: undefined,
      nullabilityV2: {
        noNulls: true,
        noEmptyCollections: true,
      },
    });
  });

  describe("defineOntologyV2 import shapes", () => {
    it("generates input shapes for imported object types", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        defineImportObject({
          apiName: "importedFoo",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
          },
        });
        defineObject({
          apiName: "localBar",
          displayName: "Local Bar",
          pluralDisplayName: "Local Bars",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
          },
        });
      });

      // Imported object should have an input shape
      const objectInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "objectType");
      expect(objectInputShapes).toHaveLength(1);
      expect(objectInputShapes[0][1]).toMatchObject({
        type: "objectType",
        objectType: {
          about: { fallbackTitle: "ImportedFoo" },
          editsSupport: "ANY",
          objectsBackendVersion: "V2",
        },
      });

      // Imported object properties should have input shapes
      const propertyInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(
        ([key, shape]) =>
          shape.type === "property" && key.includes("importedFoo"),
      );
      expect(propertyInputShapes).toHaveLength(2);
      expect(result.importedInputPresets).toEqual(
        new Map([
          ["object-type-importedFoo", apiNamePreset("importedFoo")],
          ["importedFoo-property-type-id", apiNamePreset("id")],
          ["importedFoo-property-type-name", apiNamePreset("name")],
        ]),
      );

      // Local object should have an output shape, not input
      const objectOutputShapes = Array.from(
        result.shapes.outputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "objectType");
      expect(objectOutputShapes.length).toBeGreaterThanOrEqual(1);
    });

    it("handles local links referencing imported objects", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const importedObj = defineImportObject({
          apiName: "importedEmployee",
          properties: {
            empId: { type: "string" },
            name: { type: "string" },
          },
        });
        const localObj = defineObject({
          apiName: "localTeam",
          displayName: "Local Team",
          pluralDisplayName: "Local Teams",
          titlePropertyApiName: "teamId",
          primaryKeyPropertyApiName: "teamId",
          properties: {
            teamId: { type: "string" },
            empId: { type: "string" },
          },
        });
        defineLink({
          apiName: "emp-to-team",
          one: {
            object: importedObj.apiName,
            metadata: {
              apiName: "team",
              displayName: "Team",
            },
          },
          toMany: {
            object: localObj,
            metadata: {
              apiName: "employees",
              displayName: "Employees",
            },
          },
          manyForeignKeyProperty: "empId",
        });
      });

      // The link should have an output shape
      const linkOutputShapes = Array.from(
        result.shapes.outputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "linkType");
      expect(linkOutputShapes).toHaveLength(1);

      // The imported object should have an input shape
      const objectInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "objectType");
      expect(objectInputShapes).toHaveLength(1);
      expect(objectInputShapes[0][1]).toMatchObject({
        type: "objectType",
        objectType: {
          about: { fallbackTitle: "ImportedEmployee" },
        },
      });
    });

    it("resolves imported objects in action parameter knownIdentifiers", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const importedObj = defineImportObject({
          apiName: "imported",
          properties: {
            id: { type: "string" },
          },
        });
        const localObj = defineObject({
          apiName: "localObj",
          displayName: "Local Obj",
          pluralDisplayName: "Local Objs",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
          },
        });
        defineCreateObjectAction({
          objectType: localObj,
          parameterOrdering: ["ref", "id"],
          parameterConfiguration: {
            ref: {
              customParameterType: {
                type: "objectReference",
                objectReference: {
                  objectTypeId: importedObj.apiName,
                },
              },
            },
          },
        });
      });

      // The main ontology's knownIdentifiers should include the imported
      // object type in objectTypeIds
      const knownIds = result.ontologyIr.ontology.knownIdentifiers;
      const importedObjId = Object.keys(knownIds.objectTypeIds ?? {}).find(
        (id) => id === "imported",
      );
      expect(importedObjId).toBeDefined();

      // The action output shape should exist
      const actionShapes = Array.from(
        result.shapes.outputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "action");
      expect(actionShapes).toHaveLength(1);
    });

    it("generates input shapes for imported SPTs", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        importSharedPropertyType({
          apiName: "externalId",
          packageName: "com.external.pkg",
          typeHint: "string",
        });
        defineObject({
          apiName: "localObj",
          displayName: "Local Obj",
          pluralDisplayName: "Local Objs",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
          },
        });
      });

      // The imported SPT should have an input shape
      const sptInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "sharedPropertyType");
      expect(sptInputShapes).toHaveLength(1);
      expect(sptInputShapes[0][1]).toMatchObject({
        type: "sharedPropertyType",
        sharedPropertyType: {
          about: { fallbackTitle: "com.external.pkg.externalId" },
        },
      });
      expect(result.importedInputPresets.get(sptInputShapes[0][0])).toEqual(
        apiNamePreset("com.external.pkg.externalId"),
      );
    });

    it("generates input shapes for imported action types", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const importedAction: ActionType = {
          apiName: "importedAction",
          displayName: "Imported Action",
          rules: [],
          status: "active",
          __type: OntologyEntityTypeEnum.ACTION_TYPE,
        };
        importOntologyEntity(importedAction);

        defineObject({
          apiName: "localObj",
          displayName: "Local Obj",
          pluralDisplayName: "Local Objs",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
          },
        });
      });

      // The imported action should have an input shape
      const actionInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "action");
      expect(actionInputShapes).toHaveLength(1);
      expect(actionInputShapes[0][1]).toMatchObject({
        type: "action",
        action: {
          about: { fallbackTitle: "Imported Action" },
        },
      });
      expect(
        result.importedInputPresets.get(
          ReadableIdGenerator.getForActionType("importedAction"),
        ),
      ).toEqual(apiNamePreset("importedAction"));

      // No parameters on this action, so no parameter input shapes
      const paramInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "actionParameter");
      expect(paramInputShapes).toHaveLength(0);
    });

    it("generates input shapes for imported interface types", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const spt = defineSharedPropertyType({
          apiName: "sharedName",
          type: "string",
        });

        const importedInterface: InterfaceType = {
          apiName: "importedInterface",
          displayMetadata: {
            displayName: "Imported Interface",
            description: "An imported interface",
          },
          propertiesV2: {
            sharedName: {
              sharedPropertyType: spt,
              required: false,
            },
          },
          propertiesV3: {
            sharedName: {
              sharedPropertyType: spt,
              required: false,
            },
          },
          extendsInterfaces: [],
          actionTypeConstraints: [],
          status: { type: "active", active: {} },
          links: [],
          __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
        };
        importOntologyEntity(importedInterface);

        defineObject({
          apiName: "localObj",
          displayName: "Local Obj",
          pluralDisplayName: "Local Objs",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
          },
        });
      });

      // The imported interface should have an input shape
      const interfaceInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "interfaceType");
      expect(interfaceInputShapes).toHaveLength(1);
      expect(interfaceInputShapes[0][1]).toMatchObject({
        type: "interfaceType",
        interfaceType: {
          about: { fallbackTitle: "Imported Interface" },
        },
      });
      expect(
        result.importedInputPresets.get(
          ReadableIdGenerator.getForInterface("importedInterface"),
        ),
      ).toEqual(apiNamePreset("importedInterface"));
    });

    it("maps imported SPT-backed interface properties using the SPT API name", async () => {
      const interfaceApiName =
        "com.palantir.core.ontology.types.sourceSystemMetadata";
      const sptApiName =
        "com.palantir.core.ontology.types.sourceSystemMetadataList";
      const result = await defineOntologyV2("com.palantir.", () => {
        const spt = importSharedPropertyType({
          apiName: "sourceSystemMetadataList",
          packageName: "com.palantir.core.ontology.types",
          typeHint: "string",
        });
        const importedInterface: InterfaceType = {
          apiName: interfaceApiName,
          displayMetadata: {
            displayName: "Source System Metadata",
          },
          propertiesV2: {
            [spt.apiName]: {
              sharedPropertyType: spt,
              required: true,
            },
          },
          propertiesV3: {
            sourceSystemMetadataList: {
              sharedPropertyType: spt,
              required: true,
            },
          },
          extendsInterfaces: [],
          actionTypeConstraints: [],
          status: { type: "active", active: {} },
          links: [],
          __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
        };
        importOntologyEntity(importedInterface);

        defineObject({
          apiName: "country",
          displayName: "Country",
          pluralDisplayName: "Countries",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
            sourceSystemMetadataList: { type: "string" },
          },
          implementsInterfaces: [
            {
              implements: importedInterface,
              propertyMapping: [
                {
                  interfaceProperty: spt.apiName,
                  mapsTo: "sourceSystemMetadataList",
                },
              ],
            },
          ],
        });
      });

      const country = Object.values(
        result.ontologyIr.ontology.objectTypes,
      ).find(
        (objectType) =>
          objectType.objectType.apiName === "com.palantir.country",
      );
      const sptRid = Object.keys(
        result.ontologyIr.importedOntology.sharedPropertyTypes,
      )[0];
      expect(
        Object.keys(country!.objectType.implementsInterfaces2[0].propertiesV2),
      ).toEqual([
        sptRid.replace("shared-property-type", "interface-property-type"),
      ]);
      expect(country!.objectType.implementsInterfaces2[0].properties).toEqual(
        {},
      );

      const interfaceReadableId =
        ReadableIdGenerator.getForInterface(interfaceApiName);
      const interfacePropertyReadableId =
        ReadableIdGenerator.getForSptBackedInterfaceProperty(
          interfaceApiName,
          sptApiName,
        );
      const sptReadableId = ReadableIdGenerator.getForSpt(sptApiName);
      const interfaceShape = result.shapes.inputShapes.get(interfaceReadableId);
      const interfacePropertyShape = result.shapes.inputShapes.get(
        interfacePropertyReadableId,
      );
      const sptShape = result.shapes.inputShapes.get(sptReadableId);
      expect(interfaceShape).toMatchObject({
        type: "interfaceType",
        interfaceType: {
          properties: [expect.any(String)],
          propertiesV2: [],
        },
      });
      expect(interfacePropertyShape).toBeUndefined();
      expect(sptShape).toMatchObject({
        type: "sharedPropertyType",
        sharedPropertyType: {
          about: { fallbackTitle: sptApiName },
        },
      });
      expect(result.importedInputPresets.get(sptReadableId)).toEqual(
        apiNamePreset(sptApiName),
      );
    });
  });

  describe("Action Type Constraints", () => {
    it("includes SPT-backed properties in both interface output reference lists", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const sharedName = defineSharedPropertyType({
          apiName: "sharedName",
          type: "string",
        });
        defineInterface({
          apiName: "sharedPropertyInterface",
          properties: {
            sharedName: {
              sharedPropertyType: sharedName,
              required: true,
            },
          },
        });
      });

      const interfaceShape = result.shapes.outputShapes.get(
        ReadableIdGenerator.getForInterface(
          "com.palantir.sharedPropertyInterface",
        ),
      );
      expect(interfaceShape).toMatchObject({
        type: "interfaceType",
        interfaceType: {
          properties: [expect.any(String)],
          propertiesV2: [expect.any(String)],
        },
      });
    });

    it("produces output shapes for interface with action type constraints", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const iface = defineInterface({ apiName: "MyInterface" });

        defineInterfaceActionTypeConstraint({
          interfaceType: iface,
          apiName: "myConstraint",
          displayName: "My Constraint",
          description: "A constraint",
          requireImplementation: false,
          parameters: [
            {
              apiName: "boolParam",
              displayName: "Bool Param",
              type: { type: "boolean", boolean: {} },
              requireImplementation: false,
            },
          ],
        });
      });

      const constraintOutputShapes = Array.from(
        result.shapes.outputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "interfaceActionTypeConstraint");
      expect(constraintOutputShapes).toHaveLength(1);
      expect(constraintOutputShapes[0][1]).toMatchObject({
        type: "interfaceActionTypeConstraint",
        interfaceActionTypeConstraint: {
          about: { fallbackTitle: "My Constraint" },
          requireImplementation: false,
        },
      });

      const paramOutputShapes = Array.from(
        result.shapes.outputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "interfaceParameterConstraint");
      expect(paramOutputShapes).toHaveLength(1);
      expect(paramOutputShapes[0][1]).toMatchObject({
        type: "interfaceParameterConstraint",
        interfaceParameterConstraint: {
          about: { fallbackTitle: "Bool Param" },
          requireImplementation: false,
        },
      });
    });

    it("produces input shapes for imported interface with action type constraints", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const importedInterface: InterfaceType = {
          apiName: "importedInterface",
          displayMetadata: {
            displayName: "Imported Interface",
            description: "An imported interface",
          },
          propertiesV2: {},
          propertiesV3: {},
          extendsInterfaces: [],
          actionTypeConstraints: [
            {
              metadata: {
                apiName: "importedConstraint",
                displayName: "Imported Constraint",
                description: "An imported constraint",
              },
              parameters: {
                boolParam: {
                  displayMetadata: {
                    displayName: "Bool Param",
                    apiName: "boolParam",
                  },
                  type: { type: "boolean", boolean: {} },
                  requireImplementation: false,
                },
              },
              requireImplementation: false,
            },
          ],
          status: { type: "active", active: {} },
          links: [],
          __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
        };
        importOntologyEntity(importedInterface);

        defineObject({
          apiName: "localObj",
          displayName: "Local Obj",
          pluralDisplayName: "Local Objs",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
          },
        });
      });

      const constraintInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "interfaceActionTypeConstraint");
      expect(constraintInputShapes).toHaveLength(1);
      expect(constraintInputShapes[0][1]).toMatchObject({
        type: "interfaceActionTypeConstraint",
        interfaceActionTypeConstraint: {
          about: { fallbackTitle: "Imported Constraint" },
          requireImplementation: false,
        },
      });

      const paramInputShapes = Array.from(
        result.shapes.inputShapes.entries(),
      ).filter(([_, shape]) => shape.type === "interfaceParameterConstraint");
      expect(paramInputShapes).toHaveLength(1);
      expect(paramInputShapes[0][1]).toMatchObject({
        type: "interfaceParameterConstraint",
        interfaceParameterConstraint: {
          about: { fallbackTitle: "Bool Param" },
          requireImplementation: false,
        },
      });
    });
  });

  it("converts direct datasources into marketplace inputs and mappings", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      defineObject({
        apiName: "directObject",
        displayName: "Direct Object",
        pluralDisplayName: "Direct Objects",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string", displayName: "ID" },
          count: { type: "integer", displayName: "Count" },
        },
        datasources: [{ type: "direct" }],
      });
    });

    const apiName = "com.palantir.directObject";
    const datasourceReadableId = ReadableIdGenerator.getForDataset(apiName);
    const idColumnReadableId = ReadableIdGenerator.getForDatasetColumn(
      apiName,
      "id",
    );

    expect(result.shapes.inputShapes.get(datasourceReadableId)).toMatchObject({
      type: "tabularDatasource",
      tabularDatasource: {
        supportedTypes: ["DATASET", "RESTRICTED_VIEW", "VIRTUAL_TABLE"],
      },
    });
    expect(result.shapes.inputShapes.get(idColumnReadableId)?.type).toBe(
      "datasourceColumn",
    );
    expect(result.shapes.inputMappings).toContainEqual({
      input: datasourceReadableId,
      output: ReadableIdGenerator.getProducedReadableId(datasourceReadableId),
    });
    expect(result.shapes.inputMappings).toContainEqual({
      input: idColumnReadableId,
      output: ReadableIdGenerator.getProducedReadableId(idColumnReadableId),
    });

    const objectType = Object.values(result.ontologyIr.ontology.objectTypes)[0];
    const directDatasource = objectType.datasources.find(
      ({ datasource }) => datasource.type === "direct",
    );
    expect(directDatasource?.datasource).toMatchObject({
      type: "direct",
      direct: {
        directSourceRid: expect.stringMatching(
          /^ri\.ontology-metadata\.temp\.dataset\./u,
        ),
      },
    });
    if (directDatasource?.datasource.type !== "direct") {
      throw new Error("Expected a direct datasource");
    }
    const directDatasourceLocator = {
      type: "dataset" as const,
      dataset: {
        rid: directDatasource.datasource.direct.directSourceRid,
        branch: "master",
      },
    };
    expect(
      Object.values(result.ontologyIr.ontology.knownIdentifiers.datasources),
    ).toContainEqual(directDatasourceLocator);
    expect(
      Object.values(
        result.ontologyIr.ontology.knownIdentifiers.datasourceColumns,
      ),
    ).toContainEqual({
      datasource: directDatasourceLocator,
      name: "id",
    });
  });

  it("Fails if a derived datasource added after defineObject maps a property not on the object", async () => {
    await expect(
      defineOntologyV2("com.palantir.", () => {
        const passenger = defineObject({
          displayName: "Passenger",
          pluralDisplayName: "Passengers",
          apiName: "passenger",
          primaryKeyPropertyApiName: "name",
          titlePropertyApiName: "name",
          editsEnabled: true,
          properties: {
            name: { type: "string", displayName: "Name" },
            flight_id: { type: "string", displayName: "Flight ID" },
          },
        });
        const flightToPassengers = defineLink({
          apiName: "flightToPassengersLink",
          one: {
            object: "com.palantir.flight",
            metadata: { apiName: "flightFromPassengers" },
          },
          toMany: {
            object: passenger.apiName,
            metadata: { apiName: "passengersFromFlight" },
          },
          manyForeignKeyProperty: "flight_id",
        });
        const flight = defineObject({
          displayName: "Flight",
          pluralDisplayName: "Flights",
          apiName: "flight",
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          editsEnabled: true,
          properties: {
            id: { type: "string", displayName: "ID" },
            passengersList: {
              type: "string",
              array: true,
              displayName: "Passengers",
            },
          },
          datasources: [{ type: "dataset" }],
        });
        // Pushed AFTER defineObject() returns, mirroring the real factory
        // pattern that bypasses defineObject's own validation.
        flight.datasources!.push({
          type: "derived",
          linkDefinition: [{ linkType: flightToPassengers }],
          propertyMapping: {
            ghostProperty: {
              type: "collectList",
              property: "name",
              limit: 100,
            },
          },
        });
      }),
    ).rejects.toThrow(
      /Property 'ghostProperty' used in derived datasource .* is not (defined|a property)/u,
    );
  });

  describe("Vector properties", () => {
    const vector: PropertyTypeTypeVector = {
      type: "vector",
      dimension: 1536,
      supportsSearchWith: "COSINE_SIMILARITY",
      embeddingModel: {
        type: "text",
        text: { type: "lms", lms: "OPENAI_TEXT_EMBEDDING_ADA_002" },
      },
      quantization: "BYTE",
    };

    const expectedIr = {
      type: "vector",
      vector: {
        dimension: 1536,
        supportsSearchWith: ["COSINE_SIMILARITY"],
        embeddingModel: {
          type: "text",
          text: { type: "lms", lms: "OPENAI_TEXT_EMBEDDING_ADA_002" },
        },
        quantization: "BYTE",
      },
    };

    it("converts a vector object property", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        defineObject({
          apiName: "foo",
          displayName: "Foo",
          pluralDisplayName: "Foos",
          titlePropertyApiName: "bar",
          primaryKeyPropertyApiName: "bar",
          properties: {
            bar: { type: "string" },
            embedding: { type: vector },
          },
        });
      });

      const objectType = Object.values(
        result.ontologyIr.ontology.objectTypes,
      )[0].objectType;
      const embedding = Object.values(objectType.propertyTypes).find(
        (p) => p.apiName === "embedding",
      )!;
      expect(embedding.type).toEqual(expectedIr);
      expect(embedding.indexedForSearch).toBe(true);
    });

    it("converts a vector shared property type", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        defineSharedPropertyType({ apiName: "embedding", type: vector });
      });

      const spt = Object.values(
        result.ontologyIr.ontology.sharedPropertyTypes,
      )[0].sharedPropertyType;
      expect(spt.type).toEqual(expectedIr);
      expect(spt.indexedForSearch).toBe(true);
    });

    it("converts a vector interface-defined property", async () => {
      const result = await defineOntologyV2("com.palantir.", () => {
        defineInterface({
          apiName: "bar",
          displayName: "Bar",
          properties: { embedding: { type: vector } },
        });
      });

      const interfaceType = Object.values(
        result.ontologyIr.ontology.interfaceTypes,
      )[0].interfaceType;
      const prop = Object.values(interfaceType.propertiesV3)[0];
      invariant(prop.type === "interfaceDefinedPropertyType");
      expect(prop.interfaceDefinedPropertyType.type).toEqual(expectedIr);
      expect(
        prop.interfaceDefinedPropertyType.constraints.indexedForSearch,
      ).toBe(true);
    });

    it("rejects a vector object property declared as an array", async () => {
      await expect(
        defineOntologyV2("com.palantir.", () => {
          defineObject({
            apiName: "foo",
            displayName: "Foo",
            pluralDisplayName: "Foos",
            titlePropertyApiName: "bar",
            primaryKeyPropertyApiName: "bar",
            properties: {
              bar: { type: "string" },
              embedding: { type: vector, array: true },
            },
          });
        }),
      ).rejects.toThrow(
        "Vector property 'com.palantir.embedding' cannot be an array",
      );
    });

    it("rejects a vector shared property type with a non-positive dimension", async () => {
      await expect(
        defineOntologyV2("com.palantir.", () => {
          defineSharedPropertyType({
            apiName: "embedding",
            type: { ...vector, dimension: 0 },
          });
        }),
      ).rejects.toThrow(
        "Vector property 'com.palantir.embedding' must have an integer 'dimension' of at least 1, but got 0",
      );
    });
  });
});
