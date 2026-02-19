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

import {
  defineCreateObjectAction,
  defineObject,
  defineOntology,
  dumpOntologyFullMetadata,
} from "@osdk/maker";
import { beforeEach, describe, expect, it } from "vitest";
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
            "ri.ontology-metadata..temp.action-type.7ef4f048d13d233876b909417977a01117144f60ef0543b543c870d684df2131": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "addObjectRule": {
                          "logicRuleRid": undefined,
                          "objectTypeId": "a396ca23c-55b9-4d23-bb2b-d6fc3fe47767",
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
                  "notifications": [],
                  "validation": {
                    "actionTypeLevelValidation": {
                      "ordering": [
                        "ri.ontology-metadata..temp.6f9851f0aba163afbb0a9fe6b922812d3044ace7d2571fcc5445137085dd8be1",
                      ],
                      "rules": {
                        "ri.ontology-metadata..temp.6f9851f0aba163afbb0a9fe6b922812d3044ace7d2571fcc5445137085dd8be1": {
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
                        "structFieldValidations": {},
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
                        "structFieldValidations": {},
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
                        "structFieldValidations": {},
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
                        "structFieldValidations": {},
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
                      "a396ca23c-55b9-4d23-bb2b-d6fc3fe47767",
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
                        "structFields": {},
                        "structFieldsV2": [],
                        "typeClasses": [],
                      },
                      "id": "date",
                      "rid": "ri.ontology-metadata..temp.parameter.db29e9442ac11cd037c821b11dde811374d07c28502aa9f2ab3ac4c3c6551e92",
                      "type": {
                        "date": {},
                        "type": "date",
                      },
                    },
                    "id": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Id",
                        "structFields": {},
                        "structFieldsV2": [],
                        "typeClasses": [],
                      },
                      "id": "id",
                      "rid": "ri.ontology-metadata..temp.parameter.6d6162e7935a86e7c05d3dba61c8e4c0becf204c3c84a2d51932cd204f88e7b1",
                      "type": {
                        "string": {},
                        "type": "string",
                      },
                    },
                    "ref": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Ref",
                        "structFields": {},
                        "structFieldsV2": [],
                        "typeClasses": [],
                      },
                      "id": "ref",
                      "rid": "ri.ontology-metadata..temp.parameter.cf2eedf1e41e0d701dc5bb52ff180d1c3a1d988aa826a853c68ae1f86ab09b12",
                      "type": {
                        "objectReference": {
                          "objectTypeId": "a974128c9-108a-4bae-a0ee-328e7a448c97",
                        },
                        "type": "objectReference",
                      },
                    },
                    "team": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Team",
                        "structFields": {},
                        "structFieldsV2": [],
                        "typeClasses": [],
                      },
                      "id": "team",
                      "rid": "ri.ontology-metadata..temp.parameter.0885af514e8d08af3d3e8d9c14fb63bd7710fb9e0ed69e5446f198d4b774054e",
                      "type": {
                        "string": {},
                        "type": "string",
                      },
                    },
                  },
                  "rid": "ri.ontology-metadata..temp.ada0a4e824ecf8d15d99eb4c4d0d2072d06e00f973358876916a0b2a5a153658",
                  "sections": {},
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "version": "0.0.1",
                },
              },
              "parameterIds": {
                "05381ebb-f1f7-33ee-b023-b389e0a7e241": "date",
                "1fe20d7d-4962-3930-ac7f-57c7c32a7122": "ref",
                "32798d0c-6156-3f5c-bdfe-d878ce73ea7e": "team",
                "578a94b3-df1b-3f88-aab3-cbaea433bfcf": "id",
              },
            },
          },
          "blockOutputCompassLocations": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "knownIdentifiers": {
            "actionParameterIds": {
              "ri.ontology-metadata..temp.action-type.7ef4f048d13d233876b909417977a01117144f60ef0543b543c870d684df2131": {
                "date": "05381ebb-f1f7-33ee-b023-b389e0a7e241",
                "id": "578a94b3-df1b-3f88-aab3-cbaea433bfcf",
                "ref": "1fe20d7d-4962-3930-ac7f-57c7c32a7122",
                "team": "32798d0c-6156-3f5c-bdfe-d878ce73ea7e",
              },
            },
            "actionParameters": {
              "ri.ontology-metadata..temp.parameter.0885af514e8d08af3d3e8d9c14fb63bd7710fb9e0ed69e5446f198d4b774054e": "32798d0c-6156-3f5c-bdfe-d878ce73ea7e",
              "ri.ontology-metadata..temp.parameter.6d6162e7935a86e7c05d3dba61c8e4c0becf204c3c84a2d51932cd204f88e7b1": "578a94b3-df1b-3f88-aab3-cbaea433bfcf",
              "ri.ontology-metadata..temp.parameter.cf2eedf1e41e0d701dc5bb52ff180d1c3a1d988aa826a853c68ae1f86ab09b12": "1fe20d7d-4962-3930-ac7f-57c7c32a7122",
              "ri.ontology-metadata..temp.parameter.db29e9442ac11cd037c821b11dde811374d07c28502aa9f2ab3ac4c3c6551e92": "05381ebb-f1f7-33ee-b023-b389e0a7e241",
            },
            "actionTypes": {
              "ri.ontology-metadata..temp.action-type.7ef4f048d13d233876b909417977a01117144f60ef0543b543c870d684df2131": "06e83b2a-272e-351f-a502-27b40ac07955",
            },
            "datasourceColumns": {
              "9f55faac-4b63-36ae-b8e1-7936ba4a94ac": {
                "datasource": {
                  "dataset": {
                    "branch": "main",
                    "rid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                  },
                  "type": "dataset",
                },
                "name": "id",
              },
              "a4ed288b-0239-31f3-8429-e126e9a359b6": {
                "datasource": {
                  "dataset": {
                    "branch": "main",
                    "rid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                  },
                  "type": "dataset",
                },
                "name": "date",
              },
              "a7530cb9-07b6-3825-8db2-7929f1fd3999": {
                "datasource": {
                  "dataset": {
                    "branch": "main",
                    "rid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                  },
                  "type": "dataset",
                },
                "name": "team",
              },
            },
            "datasources": {
              "fa6e8839-caa0-307d-a840-f2e907342213": {
                "dataset": {
                  "branch": "main",
                  "rid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                },
                "type": "dataset",
              },
            },
            "filesDatasources": {},
            "functions": {},
            "geotimeSeriesSyncs": {},
            "groupIds": {},
            "interfaceLinkTypes": {},
            "interfacePropertyTypes": {},
            "interfaceTypes": {},
            "linkTypeIds": {},
            "linkTypes": {},
            "markings": {},
            "objectTypeIds": {
              "a396ca23c-55b9-4d23-bb2b-d6fc3fe47767": "835af9c0-d7d7-354a-9627-586dc906aa09",
            },
            "objectTypes": {
              "ri.ontology-metadata..temp.object-type.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9": "835af9c0-d7d7-354a-9627-586dc906aa09",
            },
            "propertyTypeIds": {
              "a396ca23c-55b9-4d23-bb2b-d6fc3fe47767": {
                "date": "2cbd437c-a5b7-315f-ba7c-8d228f6edad5",
                "id": "40e7dfb3-412c-3635-9e8f-6bd7a108d136",
                "team": "fa0210f1-e0ff-3a52-a2f6-dd9c1a7e2582",
              },
            },
            "propertyTypes": {
              "ri.ontology-metadata..temp.property-type.8ce32122957d3627785009df5551c550c1a59d8aece0ed1f8e88eb355898c9ae": "40e7dfb3-412c-3635-9e8f-6bd7a108d136",
              "ri.ontology-metadata..temp.property-type.e957a63a6384439883b62927ef32b5c216cc978a50968a40b0535759f15e1cdb": "2cbd437c-a5b7-315f-ba7c-8d228f6edad5",
              "ri.ontology-metadata..temp.property-type.f8ff76f77c7f988fb8c3613d4512f2066aff85fe3df2ad8eb424aaae1376eb61": "fa0210f1-e0ff-3a52-a2f6-dd9c1a7e2582",
            },
            "sharedPropertyTypes": {},
            "timeSeriesSyncs": {},
            "valueTypes": {},
            "webhooks": {},
            "workshopModules": {},
          },
          "linkTypes": {},
          "objectTypes": {
            "ri.ontology-metadata..temp.object-type.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "branchId": "main",
                      "datasetRid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                      "propertyMapping": {
                        "ri.ontology-metadata..temp.property-type.8ce32122957d3627785009df5551c550c1a59d8aece0ed1f8e88eb355898c9ae": {
                          "column": "id",
                          "type": "column",
                        },
                        "ri.ontology-metadata..temp.property-type.e957a63a6384439883b62927ef32b5c216cc978a50968a40b0535759f15e1cdb": {
                          "column": "date",
                          "type": "column",
                        },
                        "ri.ontology-metadata..temp.property-type.f8ff76f77c7f988fb8c3613d4512f2066aff85fe3df2ad8eb424aaae1376eb61": {
                          "column": "team",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                  "rid": "ri.ontology-metadata..temp.94de3404f8611b2fc78e55df25959dc8649c45cc0119c74e7caeb5e80819588e",
                },
              ],
              "entityMetadata": {
                "aliases": [],
                "arePatchesEnabled": false,
                "diffEdits": false,
                "entityConfig": {
                  "objectDbTypeConfigs": {},
                },
                "targetStorageBackend": {
                  "objectStorageV2": {},
                  "type": "objectStorageV2",
                },
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
                "id": "a396ca23c-55b9-4d23-bb2b-d6fc3fe47767",
                "implementsInterfaces": [],
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "ri.ontology-metadata..temp.property-type.8ce32122957d3627785009df5551c550c1a59d8aece0ed1f8e88eb355898c9ae",
                ],
                "propertyTypes": {
                  "ri.ontology-metadata..temp.property-type.8ce32122957d3627785009df5551c550c1a59d8aece0ed1f8e88eb355898c9ae": {
                    "apiName": "id",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Id",
                      "visibility": "NORMAL",
                    },
                    "id": "id",
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "rid": "ri.ontology-metadata..temp.property-type.8ce32122957d3627785009df5551c550c1a59d8aece0ed1f8e88eb355898c9ae",
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
                  "ri.ontology-metadata..temp.property-type.e957a63a6384439883b62927ef32b5c216cc978a50968a40b0535759f15e1cdb": {
                    "apiName": "date",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Date",
                      "visibility": "NORMAL",
                    },
                    "id": "date",
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "rid": "ri.ontology-metadata..temp.property-type.e957a63a6384439883b62927ef32b5c216cc978a50968a40b0535759f15e1cdb",
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
                  "ri.ontology-metadata..temp.property-type.f8ff76f77c7f988fb8c3613d4512f2066aff85fe3df2ad8eb424aaae1376eb61": {
                    "apiName": "team",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Team",
                      "visibility": "NORMAL",
                    },
                    "id": "team",
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "rid": "ri.ontology-metadata..temp.property-type.f8ff76f77c7f988fb8c3613d4512f2066aff85fe3df2ad8eb424aaae1376eb61",
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
                "rid": "ri.ontology-metadata..temp.object-type.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                "status": {
                  "active": {},
                  "type": "active",
                },
                "titlePropertyTypeRid": "ri.ontology-metadata..temp.property-type.8ce32122957d3627785009df5551c550c1a59d8aece0ed1f8e88eb355898c9ae",
                "traits": {
                  "workflowObjectTypeTraits": {},
                },
                "typeGroups": [],
              },
              "schemaMigrations": undefined,
              "writebackDatasets": [],
            },
          },
          "ruleSets": {},
          "sharedPropertyTypes": {},
        }
      `);
      expect(dumpOntologyFullMetadata().importedOntology).toMatchInlineSnapshot(
        `
        {
          "actionTypes": {},
          "blockOutputCompassLocations": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "knownIdentifiers": {
            "actionParameterIds": {
              "ri.ontology-metadata..temp.action-type.7ef4f048d13d233876b909417977a01117144f60ef0543b543c870d684df2131": {
                "date": "05381ebb-f1f7-33ee-b023-b389e0a7e241",
                "id": "578a94b3-df1b-3f88-aab3-cbaea433bfcf",
                "ref": "1fe20d7d-4962-3930-ac7f-57c7c32a7122",
                "team": "32798d0c-6156-3f5c-bdfe-d878ce73ea7e",
              },
            },
            "actionParameters": {
              "ri.ontology-metadata..temp.parameter.0885af514e8d08af3d3e8d9c14fb63bd7710fb9e0ed69e5446f198d4b774054e": "32798d0c-6156-3f5c-bdfe-d878ce73ea7e",
              "ri.ontology-metadata..temp.parameter.6d6162e7935a86e7c05d3dba61c8e4c0becf204c3c84a2d51932cd204f88e7b1": "578a94b3-df1b-3f88-aab3-cbaea433bfcf",
              "ri.ontology-metadata..temp.parameter.cf2eedf1e41e0d701dc5bb52ff180d1c3a1d988aa826a853c68ae1f86ab09b12": "1fe20d7d-4962-3930-ac7f-57c7c32a7122",
              "ri.ontology-metadata..temp.parameter.db29e9442ac11cd037c821b11dde811374d07c28502aa9f2ab3ac4c3c6551e92": "05381ebb-f1f7-33ee-b023-b389e0a7e241",
            },
            "actionTypes": {
              "ri.ontology-metadata..temp.action-type.7ef4f048d13d233876b909417977a01117144f60ef0543b543c870d684df2131": "06e83b2a-272e-351f-a502-27b40ac07955",
            },
            "datasourceColumns": {
              "821831a4-c7a6-391b-99e6-c85d62626e96": {
                "datasource": {
                  "dataset": {
                    "branch": "main",
                    "rid": "ri.ontology-metadata..temp.dataset.98a377718dcb9b2b8ac8b8f3861573ac4c35a664bd8cea01b64600d8878016ea",
                  },
                  "type": "dataset",
                },
                "name": "name",
              },
              "9e6c7b8e-6f0b-35cf-8f0f-7272e83c96f9": {
                "datasource": {
                  "dataset": {
                    "branch": "main",
                    "rid": "ri.ontology-metadata..temp.dataset.98a377718dcb9b2b8ac8b8f3861573ac4c35a664bd8cea01b64600d8878016ea",
                  },
                  "type": "dataset",
                },
                "name": "id",
              },
              "9f55faac-4b63-36ae-b8e1-7936ba4a94ac": {
                "datasource": {
                  "dataset": {
                    "branch": "main",
                    "rid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                  },
                  "type": "dataset",
                },
                "name": "id",
              },
              "a4ed288b-0239-31f3-8429-e126e9a359b6": {
                "datasource": {
                  "dataset": {
                    "branch": "main",
                    "rid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                  },
                  "type": "dataset",
                },
                "name": "date",
              },
              "a7530cb9-07b6-3825-8db2-7929f1fd3999": {
                "datasource": {
                  "dataset": {
                    "branch": "main",
                    "rid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                  },
                  "type": "dataset",
                },
                "name": "team",
              },
            },
            "datasources": {
              "1c45ee05-1ec2-3e0f-8356-c6b03a2e6448": {
                "dataset": {
                  "branch": "main",
                  "rid": "ri.ontology-metadata..temp.dataset.98a377718dcb9b2b8ac8b8f3861573ac4c35a664bd8cea01b64600d8878016ea",
                },
                "type": "dataset",
              },
              "fa6e8839-caa0-307d-a840-f2e907342213": {
                "dataset": {
                  "branch": "main",
                  "rid": "ri.ontology-metadata..temp.dataset.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9",
                },
                "type": "dataset",
              },
            },
            "filesDatasources": {},
            "functions": {},
            "geotimeSeriesSyncs": {},
            "groupIds": {},
            "interfaceLinkTypes": {},
            "interfacePropertyTypes": {},
            "interfaceTypes": {},
            "linkTypeIds": {},
            "linkTypes": {},
            "markings": {},
            "objectTypeIds": {
              "a85b92c4a-864a-4dad-a613-c97876fcbaf6": "80d0e392-f14c-3404-9ca7-9ee403b14479",
            },
            "objectTypes": {
              "ri.ontology-metadata..temp.object-type.98a377718dcb9b2b8ac8b8f3861573ac4c35a664bd8cea01b64600d8878016ea": "80d0e392-f14c-3404-9ca7-9ee403b14479",
              "ri.ontology-metadata..temp.object-type.c516aaeae10522f144e99a45e1b72af2d628c4655eaed0f48ec1f7bb865786c9": "835af9c0-d7d7-354a-9627-586dc906aa09",
            },
            "propertyTypeIds": {
              "a85b92c4a-864a-4dad-a613-c97876fcbaf6": {
                "id": "ec2e9a8e-ddd1-381e-9a00-97553ae4de80",
                "name": "0f4cce00-7f5f-3454-9743-d68ee6527b27",
              },
            },
            "propertyTypes": {
              "ri.ontology-metadata..temp.property-type.672677ff8b87a295505dcd751a8e526cbc4d4b8c2cdb401acb28374ca1e0373c": "0f4cce00-7f5f-3454-9743-d68ee6527b27",
              "ri.ontology-metadata..temp.property-type.8ce32122957d3627785009df5551c550c1a59d8aece0ed1f8e88eb355898c9ae": "40e7dfb3-412c-3635-9e8f-6bd7a108d136",
              "ri.ontology-metadata..temp.property-type.cbfd2c55c940d7276f7fbee43ea258b8bab87ac599c46365310733dce54748dd": "ec2e9a8e-ddd1-381e-9a00-97553ae4de80",
              "ri.ontology-metadata..temp.property-type.e957a63a6384439883b62927ef32b5c216cc978a50968a40b0535759f15e1cdb": "2cbd437c-a5b7-315f-ba7c-8d228f6edad5",
              "ri.ontology-metadata..temp.property-type.f8ff76f77c7f988fb8c3613d4512f2066aff85fe3df2ad8eb424aaae1376eb61": "fa0210f1-e0ff-3a52-a2f6-dd9c1a7e2582",
            },
            "sharedPropertyTypes": {},
            "timeSeriesSyncs": {},
            "valueTypes": {},
            "webhooks": {},
            "workshopModules": {},
          },
          "linkTypes": {},
          "objectTypes": {
            "ri.ontology-metadata..temp.object-type.98a377718dcb9b2b8ac8b8f3861573ac4c35a664bd8cea01b64600d8878016ea": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "branchId": "main",
                      "datasetRid": "ri.ontology-metadata..temp.dataset.98a377718dcb9b2b8ac8b8f3861573ac4c35a664bd8cea01b64600d8878016ea",
                      "propertyMapping": {
                        "ri.ontology-metadata..temp.property-type.672677ff8b87a295505dcd751a8e526cbc4d4b8c2cdb401acb28374ca1e0373c": {
                          "column": "name",
                          "type": "column",
                        },
                        "ri.ontology-metadata..temp.property-type.cbfd2c55c940d7276f7fbee43ea258b8bab87ac599c46365310733dce54748dd": {
                          "column": "id",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                  "rid": "ri.ontology-metadata..temp.1688c0395407781e0e0099b922fa523383669d337af3e09a995ca59c6091e0c3",
                },
              ],
              "entityMetadata": {
                "aliases": [],
                "arePatchesEnabled": false,
                "diffEdits": false,
                "entityConfig": {
                  "objectDbTypeConfigs": {},
                },
                "targetStorageBackend": {
                  "objectStorageV2": {},
                  "type": "objectStorageV2",
                },
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
                "id": "a85b92c4a-864a-4dad-a613-c97876fcbaf6",
                "implementsInterfaces": [],
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "ri.ontology-metadata..temp.property-type.cbfd2c55c940d7276f7fbee43ea258b8bab87ac599c46365310733dce54748dd",
                ],
                "propertyTypes": {
                  "ri.ontology-metadata..temp.property-type.672677ff8b87a295505dcd751a8e526cbc4d4b8c2cdb401acb28374ca1e0373c": {
                    "apiName": "name",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Name",
                      "visibility": "NORMAL",
                    },
                    "id": "name",
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "rid": "ri.ontology-metadata..temp.property-type.672677ff8b87a295505dcd751a8e526cbc4d4b8c2cdb401acb28374ca1e0373c",
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
                  "ri.ontology-metadata..temp.property-type.cbfd2c55c940d7276f7fbee43ea258b8bab87ac599c46365310733dce54748dd": {
                    "apiName": "id",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Id",
                      "visibility": "NORMAL",
                    },
                    "id": "id",
                    "indexedForSearch": true,
                    "inlineAction": undefined,
                    "rid": "ri.ontology-metadata..temp.property-type.cbfd2c55c940d7276f7fbee43ea258b8bab87ac599c46365310733dce54748dd",
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
                "rid": "ri.ontology-metadata..temp.object-type.98a377718dcb9b2b8ac8b8f3861573ac4c35a664bd8cea01b64600d8878016ea",
                "status": {
                  "active": {},
                  "type": "active",
                },
                "titlePropertyTypeRid": "ri.ontology-metadata..temp.property-type.cbfd2c55c940d7276f7fbee43ea258b8bab87ac599c46365310733dce54748dd",
                "traits": {
                  "workflowObjectTypeTraits": {},
                },
                "typeGroups": [],
              },
              "schemaMigrations": undefined,
              "writebackDatasets": [],
            },
          },
          "ruleSets": {},
          "sharedPropertyTypes": {},
        }
      `,
      );
    });
  });
});
