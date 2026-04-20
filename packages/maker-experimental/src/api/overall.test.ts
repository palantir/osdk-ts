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

import type { ActionType, InterfaceType } from "@osdk/maker";
import {
  defineCreateObjectAction,
  defineLink,
  defineObject,
  defineOntology,
  defineSharedPropertyType,
  dumpOntologyFullMetadata,
  importOntologyEntity,
  importSharedPropertyType,
  OntologyEntityTypeEnum,
} from "@osdk/maker";
import { beforeEach, describe, expect, it } from "vitest";
import { defineOntologyV2 } from "./defineOntologyV2.js";
import { defineImportObject } from "./importObjectType.js";

describe("Experimental Test Suite", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
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
          "id": { type: "string" },
          "date": { type: "date" },
          "team": { type: "string" },
        },
      });
      defineCreateObjectAction({
        objectType: foo,
        parameterOrdering: ["ref", "team", "id", "date"],
        parameterConfiguration: {
          "ref": {
            customParameterType: {
              type: "objectReference",
              objectReference: {
                objectTypeId: importedObject.apiName,
              },
            },
          },
          "team": {
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
            "linkTypes": {},
            "objectTypes": {},
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
            "linkTypes": {},
            "objectTypes": {},
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
            "id": { type: "string" },
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
          shape.type === "property"
          && key.includes("importedFoo"),
      );
      expect(propertyInputShapes).toHaveLength(2);

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
            "teamId": { type: "string" },
            "empId": { type: "string" },
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
            "id": { type: "string" },
          },
        });
        defineCreateObjectAction({
          objectType: localObj,
          parameterOrdering: ["ref", "id"],
          parameterConfiguration: {
            "ref": {
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
        id => id === "imported",
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
            "id": { type: "string" },
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
            "id": { type: "string" },
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
            "id": { type: "string" },
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
    });
  });
});
