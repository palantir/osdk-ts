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

import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { beforeEach, describe, expect, it } from "vitest";
import { addDependency } from "./addDependency.js";
import {
  defineAction,
  defineCreateInterfaceObjectAction,
  defineCreateObjectAction,
  defineDeleteObjectAction,
  defineModifyInterfaceObjectAction,
  defineModifyObjectAction,
} from "./defineAction.js";
import { importSharedPropertyType } from "./defineImportSpt.js";
import { defineInterface } from "./defineInterface.js";
import { defineInterfaceLinkConstraint } from "./defineInterfaceLinkConstraint.js";
import { defineLink } from "./defineLink.js";
import { defineObject } from "./defineObject.js";
import {
  defineOntology,
  dumpOntologyFullMetadata,
  dumpValueTypeWireType,
} from "./defineOntology.js";
import { defineSharedPropertyType } from "./defineSpt.js";
import { defineValueType } from "./defineValueType.js";
import { importOntologyEntity } from "./importOntologyEntity.js";
import {
  type InterfaceType,
  OntologyEntityTypeEnum,
  type SharedPropertyType,
} from "./types.js";

describe("Ontology Defining", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  describe("ValueTypes", () => {
    it("Fails to define value type with incorrect semver", () => {
      expect(() =>
        defineValueType({
          apiName: "apiName",
          displayName: "displayName",
          type: {
            "type": "boolean",
            constraints: [{ constraint: { "allowedValues": ["TRUE_VALUE"] } }],
          },
          version: "not a version",
        })
      ).toThrowErrorMatchingInlineSnapshot(
        "[Error: Invariant failed: Version is not a valid semver]",
      );
    });

    it("Tests convertProperty function with valueType constraints for string", () => {
      const testStringValueType = defineValueType({
        apiName: "stringWithConstraints",
        displayName: "String With Constraints",
        description: "A string type with additional constraints",
        type: {
          "type": "string",
          constraints: [
            {
              constraint: {
                type: "length",
                length: {
                  minSize: 5,
                  maxSize: 20,
                },
              },
              failureMessage: {
                message: "String must be between 5 and 20 characters",
              },
            },
          ],
        },
        version: "1.0.0",
      });

      const object = defineObject({
        titlePropertyApiName: "constrainedString",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        apiName: "testObject",
        primaryKeyPropertyApiName: "constrainedString",
        properties: [
          {
            apiName: "constrainedString",
            type: "string",
            displayName: "Constrained String",
            valueType: testStringValueType,
          },
        ],
      });

      const ontology = dumpOntologyFullMetadata();
      const objectPropertyType =
        ontology.blockData.objectTypes["com.palantir.testObject"]
          .objectType.propertyTypes["constrainedString"];

      expect(objectPropertyType.valueType).toEqual({
        apiName: "stringWithConstraints",
        version: "1.0.0",
      });

      expect(objectPropertyType.dataConstraints).toBeDefined();
      expect(objectPropertyType.dataConstraints?.propertyTypeConstraints)
        .toHaveLength(1);

      const constraintWrapper = objectPropertyType.dataConstraints
        ?.propertyTypeConstraints[0];
      expect(constraintWrapper?.constraints?.type).toBe("string");
      expect(
        (constraintWrapper?.constraints as {
          type: "string";
          string: { length: { minSize: number; maxSize: number } };
        }).string.length.minSize,
      ).toBe(5);
      expect(
        (constraintWrapper?.constraints as {
          type: "string";
          string: { length: { minSize: number; maxSize: number } };
        }).string.length.maxSize,
      ).toBe(20);
      expect(constraintWrapper?.failureMessage?.message).toBe(
        "String must be between 5 and 20 characters",
      );
    });

    it("Correctly serializes a value type", () => {
      defineValueType({
        apiName: "apiName",
        displayName: "displayName",
        type: {
          "type": "boolean",
          constraints: [{ constraint: { "allowedValues": ["TRUE_VALUE"] } }],
        },
        version: "0.1.0",
      });
      expect(dumpValueTypeWireType()).toMatchInlineSnapshot(`
 {
   "valueTypes": [
     {
       "metadata": {
         "apiName": "apiName",
         "displayMetadata": {
           "description": "",
           "displayName": "displayName",
         },
         "status": {
           "active": {},
           "type": "active",
         },
       },
       "versions": [
         {
           "baseType": {
             "boolean": {},
             "type": "boolean",
           },
           "constraints": [
             {
               "constraint": {
                 "constraint": {
                   "boolean": {
                     "allowedValues": [
                       "TRUE_VALUE",
                     ],
                   },
                   "type": "boolean",
                 },
                 "failureMessage": undefined,
               },
             },
           ],
           "exampleValues": [],
           "version": "0.1.0",
         },
       ],
     },
   ],
 }
        `);
    });

    // N.B Not sure what this is for but I don't want to break anything so I added the eslint ignore
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  describe("Interfaces", () => {
    it("doesn't let you define the same interface twice", () => {
      defineInterface({ apiName: "Foo" });
      expect(() => {
        defineInterface({ apiName: "Foo" });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Interface com.palantir.Foo already exists]`,
      );
    });

    it("defaults displayName to apiName", () => {
      const result = defineInterface({ apiName: "Foo" });
      expect(result.displayMetadata.displayName).toBe("Foo");
    });

    it("defaults description to displayName", () => {
      const result = defineInterface({ apiName: "Foo", displayName: "d" });
      expect(result.displayMetadata.description).toBe("d");
    });

    it("defaults description to displayName to apiName", () => {
      const result = defineInterface({ apiName: "Foo" });
      expect(result.displayMetadata.description).toBe("Foo");
    });

    describe("auto spts", () => {
      it("auto creates spts", () => {
        defineInterface({
          apiName: "Foo",
          properties: {
            foo: "string",
          },
        });

        expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
          {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.Foo": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.Foo",
                  "displayMetadata": {
                    "description": "Foo",
                    "displayName": "Foo",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.foo": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.foo",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "foo",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
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
                  },
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {
              "com.palantir.foo": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.foo",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "foo",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
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
            },
          }
        `);
      });

      it("does not let you conflict spts", () => {
        defineSharedPropertyType({
          apiName: "foo",
          type: "string",
        });

        expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
          {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {
              "com.palantir.foo": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.foo",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "foo",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
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
            },
          }
        `);

        expect(() => {
          defineInterface({
            apiName: "Foo",
            properties: {
              foo: "string",
            },
          });
        }).toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Shared property type com.palantir.foo already exists]`,
        );
      });
    });

    it("allows extends interfaces with InterfaceType provided", () => {
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        properties: {
          property1: "string",
        },
      });
      const childInterface = defineInterface({
        apiName: "childInterface",
        properties: {
          property2: "string",
        },
        extends: [parentInterface],
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.childInterface": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.childInterface",
                "displayMetadata": {
                  "description": "childInterface",
                  "displayName": "childInterface",
                  "icon": undefined,
                },
                "extendsInterfaces": [
                  "com.palantir.parentInterface",
                ],
                "links": [],
                "properties": [],
                "propertiesV2": {
                  "com.palantir.property2": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property2",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property2",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
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
                },
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
            "com.palantir.parentInterface": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [],
                "propertiesV2": {
                  "com.palantir.property1": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property1",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
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
                },
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {
            "com.palantir.property1": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property1",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property1",
                  "visibility": "NORMAL",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
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
            "com.palantir.property2": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property2",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property2",
                  "visibility": "NORMAL",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
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
          },
        }
      `);
    });

    it("supports optional properties", () => {
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        properties: {
          property1: { required: false, propertyDefinition: "string" },
        },
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
          {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.parentInterface": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.parentInterface",
                  "displayMetadata": {
                    "description": "parentInterface",
                    "displayName": "parentInterface",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.property1": {
                      "required": false,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
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
                  },
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {
              "com.palantir.property1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property1",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
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
            },
          }
        `);
    });

    it("allows extends interfaces with apiName provided", () => {
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        properties: {
          property1: "string",
        },
      });
      const childInterface = defineInterface({
        apiName: "childInterface",
        properties: {
          property2: "string",
        },
        extends: parentInterface,
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.childInterface": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.childInterface",
                "displayMetadata": {
                  "description": "childInterface",
                  "displayName": "childInterface",
                  "icon": undefined,
                },
                "extendsInterfaces": [
                  "com.palantir.parentInterface",
                ],
                "links": [],
                "properties": [],
                "propertiesV2": {
                  "com.palantir.property2": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property2",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property2",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
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
                },
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
            "com.palantir.parentInterface": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [],
                "propertiesV2": {
                  "com.palantir.property1": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property1",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
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
                },
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {
            "com.palantir.property1": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property1",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property1",
                  "visibility": "NORMAL",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
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
            "com.palantir.property2": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property2",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property2",
                  "visibility": "NORMAL",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
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
          },
        }
      `);
    });

    it("supports specifying searchable", () => {
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        searchable: false,
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
          {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.parentInterface": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.parentInterface",
                  "displayMetadata": {
                    "description": "parentInterface",
                    "displayName": "parentInterface",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {},
                  "propertiesV3": {},
                  "searchable": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          }
        `);
    });
  });

  describe("ILTs", () => {
    let a: InterfaceType;
    let b: InterfaceType;

    beforeEach(() => {
      a = defineInterface({ apiName: "A" });
      b = defineInterface({ apiName: "B" });
    });

    it("single link works", () => {
      expect(a).not.toBeUndefined();
      defineInterfaceLinkConstraint({
        from: a,
        toOne: b,
        apiName: "singleLink",
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.A": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.A",
                "displayMetadata": {
                  "description": "A",
                  "displayName": "A",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [
                  {
                    "cardinality": "SINGLE",
                    "linkedEntityTypeId": {
                      "interfaceType": "com.palantir.B",
                      "type": "interfaceType",
                    },
                    "metadata": {
                      "apiName": "com.palantir.singleLink",
                      "description": "singleLink",
                      "displayName": "singleLink",
                    },
                    "required": true,
                  },
                ],
                "properties": [],
                "propertiesV2": {},
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
            "com.palantir.B": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [],
                "propertiesV2": {},
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("many link works", () => {
      defineInterfaceLinkConstraint({
        from: a,
        toMany: b,
        apiName: "manyLink",
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.A": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.A",
                "displayMetadata": {
                  "description": "A",
                  "displayName": "A",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [
                  {
                    "cardinality": "MANY",
                    "linkedEntityTypeId": {
                      "interfaceType": "com.palantir.B",
                      "type": "interfaceType",
                    },
                    "metadata": {
                      "apiName": "com.palantir.manyLink",
                      "description": "manyLink",
                      "displayName": "manyLink",
                    },
                    "required": true,
                  },
                ],
                "properties": [],
                "propertiesV2": {},
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
            "com.palantir.B": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [],
                "propertiesV2": {},
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {},
        }
      `);
    });
  });

  describe("SPTs", () => {
    it("doesn't let you create the same spt twice", () => {
      defineSharedPropertyType({
        apiName: "foo",
        type: "string",
      });

      expect(() => {
        defineSharedPropertyType({
          apiName: "foo",
          type: "string",
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Shared property type com.palantir.foo already exists]`,
      );
    });
  });

  it("uses a predefined spt", () => {
    const fooSpt = defineSharedPropertyType({
      apiName: "fooSpt",
      type: "string",
    });

    const FooInterface = defineInterface({
      apiName: "FooInterface",
      displayName: "Foo Interface",
      properties: {
        fooSpt,
      },
      icon: { color: "#00000", locator: "airplane" },
    });

    expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
      {
        "actionTypes": {},
        "blockPermissionInformation": {
          "actionTypes": {},
          "linkTypes": {},
          "objectTypes": {},
        },
        "interfaceTypes": {
          "com.palantir.FooInterface": {
            "interfaceType": {
              "allExtendsInterfaces": [],
              "allLinks": [],
              "allProperties": [],
              "allPropertiesV2": {},
              "allPropertiesV3": {},
              "apiName": "com.palantir.FooInterface",
              "displayMetadata": {
                "description": "Foo Interface",
                "displayName": "Foo Interface",
                "icon": {
                  "blueprint": {
                    "color": "#00000",
                    "locator": "airplane",
                  },
                  "type": "blueprint",
                },
              },
              "extendsInterfaces": [],
              "links": [],
              "properties": [],
              "propertiesV2": {
                "com.palantir.fooSpt": {
                  "required": true,
                  "sharedPropertyType": {
                    "aliases": [],
                    "apiName": "com.palantir.fooSpt",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "fooSpt",
                      "visibility": "NORMAL",
                    },
                    "gothamMapping": undefined,
                    "indexedForSearch": true,
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
              },
              "propertiesV3": {},
              "searchable": true,
              "status": {
                "active": {},
                "type": "active",
              },
            },
          },
        },
        "linkTypes": {},
        "objectTypes": {},
        "sharedPropertyTypes": {
          "com.palantir.fooSpt": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "com.palantir.fooSpt",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "fooSpt",
                "visibility": "NORMAL",
              },
              "gothamMapping": undefined,
              "indexedForSearch": true,
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
        },
      }
    `);
  });

  it("properly serializes both types of struct SPTs", () => {
    const fooSpt = defineSharedPropertyType({
      apiName: "fooSpt",
      type: {
        type: "struct",
        structDefinition: {
          "simpleProperty": "boolean",
          "complexProperty": {
            fieldType: "date",
            displayMetadata: {
              displayName: "complex property",
              description: undefined,
            },
          },
        },
      },
    });

    expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
              {
                "actionTypes": {},
                "blockPermissionInformation": {
                  "actionTypes": {},
                  "linkTypes": {},
                  "objectTypes": {},
                },
                "interfaceTypes": {},
                "linkTypes": {},
                "objectTypes": {},
                "sharedPropertyTypes": {
                  "com.palantir.fooSpt": {
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.fooSpt",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "fooSpt",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
                      "type": {
                        "struct": {
                          "structFields": [
                            {
                              "aliases": [],
                              "apiName": "simpleProperty",
                              "displayMetadata": {
                                "description": undefined,
                                "displayName": "simpleProperty",
                              },
                              "fieldType": {
                                "boolean": {},
                                "type": "boolean",
                              },
                              "typeClasses": [],
                            },
                            {
                              "aliases": [],
                              "apiName": "complexProperty",
                              "displayMetadata": {
                                "description": undefined,
                                "displayName": "complex property",
                              },
                              "fieldType": {
                                "date": {},
                                "type": "date",
                              },
                              "typeClasses": [],
                            },
                          ],
                        },
                        "type": "struct",
                      },
                      "typeClasses": [],
                      "valueType": undefined,
                    },
                  },
                },
              }
      `);
  });

  it("Custom string fields properly set", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: {
        type: "string",
        isLongText: true,
        supportsEfficientLeadingWildcard: true,
        supportsExactMatching: false,
      },
    });

    defineInterface({
      apiName: "interface",
      properties: { foo: spt },
    });

    expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
      {
        "actionTypes": {},
        "blockPermissionInformation": {
          "actionTypes": {},
          "linkTypes": {},
          "objectTypes": {},
        },
        "interfaceTypes": {
          "com.palantir.interface": {
            "interfaceType": {
              "allExtendsInterfaces": [],
              "allLinks": [],
              "allProperties": [],
              "allPropertiesV2": {},
              "allPropertiesV3": {},
              "apiName": "com.palantir.interface",
              "displayMetadata": {
                "description": "interface",
                "displayName": "interface",
                "icon": undefined,
              },
              "extendsInterfaces": [],
              "links": [],
              "properties": [],
              "propertiesV2": {
                "com.palantir.foo": {
                  "required": true,
                  "sharedPropertyType": {
                    "aliases": [],
                    "apiName": "com.palantir.foo",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "foo",
                      "visibility": "NORMAL",
                    },
                    "gothamMapping": undefined,
                    "indexedForSearch": true,
                    "type": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": true,
                        "supportsEfficientLeadingWildcard": true,
                        "supportsExactMatching": false,
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
              },
              "propertiesV3": {},
              "searchable": true,
              "status": {
                "active": {},
                "type": "active",
              },
            },
          },
        },
        "linkTypes": {},
        "objectTypes": {},
        "sharedPropertyTypes": {
          "com.palantir.foo": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "com.palantir.foo",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "foo",
                "visibility": "NORMAL",
              },
              "gothamMapping": undefined,
              "indexedForSearch": true,
              "type": {
                "string": {
                  "analyzerOverride": undefined,
                  "enableAsciiFolding": undefined,
                  "isLongText": true,
                  "supportsEfficientLeadingWildcard": true,
                  "supportsExactMatching": false,
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
        },
      }
    `);
  });

  it("defaults interface status to active", () => {
    const result = defineInterface({ apiName: "Foo" });
    expect(result.status).toEqual({ type: "active", active: {} });
  });

  it("sets interface status as experimental from opts", () => {
    const experimentalStatus = {
      type: "experimental",
      experimental: {},
    };
    const result = defineInterface({
      apiName: "Foo",
      status: { type: "experimental" },
    });
    expect(result.status).toEqual(experimentalStatus);
  });

  it("sets interface status as deprecated from opts", () => {
    const deprecatedStatus = {
      type: "deprecated",
      deprecated: {
        message: "foo",
        deadline: "foo",
      },
    };
    const result = defineInterface({
      apiName: "Foo",
      status: { type: "deprecated", message: "foo", deadline: "foo" },
    });
    expect(result.status).toEqual(deprecatedStatus);
  });

  describe("Objects", () => {
    it("Fails if any property reference does not exist", () => {
      const spt = defineSharedPropertyType({
        apiName: "foo",
        type: "string",
      });

      const sample = defineInterface({
        apiName: "interface",
        properties: { foo: spt },
      });

      expect(() => {
        defineObject({
          titlePropertyApiName: "fizz",
          displayName: "Foo",
          pluralDisplayName: "Foo",
          apiName: "foo",
          primaryKeyPropertyApiName: "bar",
          properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Title property fizz is not defined on object foo]`,
      );

      expect(() => {
        defineObject({
          titlePropertyApiName: "bar",
          displayName: "Foo",
          pluralDisplayName: "Foo",
          apiName: "foo",
          primaryKeyPropertyApiName: "fizz",
          properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Primary key property fizz does not exist on object foo]`,
      );

      expect(() => {
        defineObject({
          titlePropertyApiName: "bar",
          displayName: "Foo",
          pluralDisplayName: "Foo",
          apiName: "foo",
          primaryKeyPropertyApiName: "bar",
          properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
          implementsInterfaces: [{
            implements: sample,
            propertyMapping: [{
              interfaceProperty: "com.palantir.foo",
              mapsTo: "fizz",
            }],
          }],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: \nOntology Definition Error: Object property mapped to interface does not exist. Object Property Mapped: fizz\n]`,
      );

      expect(() => {
        defineObject({
          titlePropertyApiName: "bar",
          displayName: "Foo",
          pluralDisplayName: "Foo",
          apiName: "foo",
          primaryKeyPropertyApiName: "bar",
          properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
          implementsInterfaces: [{
            implements: sample,
            propertyMapping: [{
              interfaceProperty: "com.palantir.fizz",
              mapsTo: "bar",
            }, {
              interfaceProperty: "com.palantir.foo",
              mapsTo: "bar",
            }],
          }],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: \nOntology Definition Error: Interface property com.palantir.fizz referenced in foo object does not exist\n]`,
      );
    });

    it("Objects properly defined", () => {
      const spt = defineSharedPropertyType({
        apiName: "foo",
        type: "string",
      });

      const sample = defineInterface({
        apiName: "interface",
        properties: { foo: spt },
      });

      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: [
          { apiName: "bar", type: "string", displayName: "Bar" },
          {
            apiName: "geopoint",
            type: {
              type: "struct",
              structDefinition: {
                lat: "double",
                lng: "double",
              },
            },
            displayName: "geopoint",
          },
        ],
        implementsInterfaces: [{
          implements: sample,
          propertyMapping: [{
            interfaceProperty: "com.palantir.foo",
            mapsTo: "bar",
          }],
        }],
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.interface": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
                "allPropertiesV3": {},
                "apiName": "com.palantir.interface",
                "displayMetadata": {
                  "description": "interface",
                  "displayName": "interface",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [],
                "propertiesV2": {
                  "com.palantir.foo": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.foo",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "foo",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
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
                },
                "propertiesV3": {},
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                        "geopoint": {
                          "struct": {
                            "column": "geopoint",
                            "mapping": {
                              "lat": {
                                "apiName": "lat",
                                "mappings": {},
                              },
                              "lng": {
                                "apiName": "lng",
                                "mappings": {},
                              },
                            },
                          },
                          "type": "struct",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                  "rid": "ri.ontology.main.datasource.com.palantir.foo",
                },
              ],
              "entityMetadata": {
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
                  "pluralDisplayName": "Foo",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [
                  {
                    "interfaceTypeApiName": "com.palantir.interface",
                    "properties": {
                      "com.palantir.foo": {
                        "propertyTypeRid": "bar",
                      },
                    },
                  },
                ],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                  "geopoint": {
                    "apiName": "geopoint",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "geopoint",
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
                      "struct": {
                        "structFields": [
                          {
                            "aliases": [],
                            "apiName": "lat",
                            "displayMetadata": {
                              "description": undefined,
                              "displayName": "lat",
                            },
                            "fieldType": {
                              "double": {},
                              "type": "double",
                            },
                            "typeClasses": [],
                          },
                          {
                            "aliases": [],
                            "apiName": "lng",
                            "displayMetadata": {
                              "description": undefined,
                              "displayName": "lng",
                            },
                            "fieldType": {
                              "double": {},
                              "type": "double",
                            },
                            "typeClasses": [],
                          },
                        ],
                      },
                      "type": "struct",
                    },
                    "typeClasses": [],
                    "valueType": undefined,
                  },
                },
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
                "titlePropertyTypeRid": "bar",
              },
            },
          },
          "sharedPropertyTypes": {
            "com.palantir.foo": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.foo",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "foo",
                  "visibility": "NORMAL",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
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
          },
        }
      `);
    });
    it("One To Many Links are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: [{ apiName: "fizz", type: "string", displayName: "Fizz" }, {
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
      });

      defineLink({
        apiName: "fizzToFoo",
        one: {
          object: object,
          metadata: {
            apiName: "fizzes",
            displayName: "Foo",
            pluralDisplayName: "Foos",
          },
        },
        toMany: {
          object: otherObject,
          metadata: {
            displayName: "Fizz",
            pluralDisplayName: "Fizzes",
            apiName: "foos",
          },
        },
        manyForeignKeyProperty: "bar",
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {
            "fizzToFoo": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "foos",
                      "displayMetadata": {
                        "displayName": "Fizz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.fizz",
                    "objectTypeRidOneSide": "com.palantir.foo",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "bar",
                          "object": "com.palantir.foo",
                        },
                        "to": {
                          "apiName": "bar",
                          "object": "com.palantir.fizz",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "fizzes",
                      "displayMetadata": {
                        "displayName": "Foo",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Foos",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "fizz-to-foo",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.fizz": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.fizz",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                        "fizz": {
                          "column": "fizz",
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
                  "rid": "ri.ontology.main.datasource.com.palantir.fizz",
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.fizz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Fizz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Fizz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "fizz",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                  "fizz": {
                    "apiName": "fizz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Fizz",
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
                "titlePropertyTypeRid": "fizz",
              },
            },
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
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
                  "rid": "ri.ontology.main.datasource.com.palantir.foo",
                },
              ],
              "entityMetadata": {
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
                  "pluralDisplayName": "Foo",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                "titlePropertyTypeRid": "bar",
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("Many To Many Links are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: [{ apiName: "fizz", type: "string", displayName: "Fizz" }, {
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
      });

      defineLink({
        apiName: "fizzToFoo",
        many: {
          object: object,
          metadata: {
            displayName: "Foo",
            pluralDisplayName: "Foos",
            apiName: "fizzes",
          },
        },
        toMany: {
          object: otherObject,
          metadata: {
            displayName: "Fizz",
            pluralDisplayName: "Fizzes",
            apiName: "foos",
          },
        },
      });
      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {
            "fizzToFoo": {
              "datasources": [
                {
                  "datasource": {
                    "dataset": {
                      "datasetRid": "link-fizzToFoo",
                      "objectTypeAPrimaryKeyMapping": [
                        {
                          "column": "bar",
                          "property": {
                            "apiName": "bar",
                            "object": "com.palantir.foo",
                          },
                        },
                      ],
                      "objectTypeBPrimaryKeyMapping": [
                        {
                          "column": "bar",
                          "property": {
                            "apiName": "fizz",
                            "object": "com.palantir.fizz",
                          },
                        },
                      ],
                      "writebackDatasetRid": undefined,
                    },
                    "type": "dataset",
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": undefined,
                  "rid": "ri.ontology.main.datasource.link-fizzToFoo",
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "manyToMany": {
                    "objectTypeAPrimaryKeyPropertyMapping": [
                      {
                        "from": {
                          "apiName": "bar",
                          "object": "com.palantir.foo",
                        },
                        "to": {
                          "apiName": "bar",
                          "object": "com.palantir.foo",
                        },
                      },
                    ],
                    "objectTypeAToBLinkMetadata": {
                      "apiName": "fizzes",
                      "displayMetadata": {
                        "displayName": "Foo",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Foos",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeBPrimaryKeyPropertyMapping": [
                      {
                        "from": {
                          "apiName": "fizz",
                          "object": "com.palantir.fizz",
                        },
                        "to": {
                          "apiName": "fizz",
                          "object": "com.palantir.fizz",
                        },
                      },
                    ],
                    "objectTypeBToALinkMetadata": {
                      "apiName": "foos",
                      "displayMetadata": {
                        "displayName": "Fizz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidA": "com.palantir.foo",
                    "objectTypeRidB": "com.palantir.fizz",
                    "peeringMetadata": undefined,
                  },
                  "type": "manyToMany",
                },
                "id": "fizz-to-foo",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.fizz": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.fizz",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                        "fizz": {
                          "column": "fizz",
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
                  "rid": "ri.ontology.main.datasource.com.palantir.fizz",
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.fizz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Fizz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Fizz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "fizz",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                  "fizz": {
                    "apiName": "fizz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Fizz",
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
                "titlePropertyTypeRid": "fizz",
              },
            },
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
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
                  "rid": "ri.ontology.main.datasource.com.palantir.foo",
                },
              ],
              "entityMetadata": {
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
                  "pluralDisplayName": "Foo",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                "titlePropertyTypeRid": "bar",
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("Minimal link definitions are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: [{ apiName: "fizz", type: "string", displayName: "Fizz" }, {
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
      });

      defineLink({
        apiName: "fizzToFoo",
        one: {
          object: object,
          metadata: {
            apiName: "fizzes",
          },
        },
        toMany: {
          object: otherObject,
          metadata: {
            apiName: "foos",
          },
        },
        manyForeignKeyProperty: "bar",
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {
            "fizzToFoo": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "foos",
                      "displayMetadata": {
                        "displayName": "Foos",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Foos",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.fizz",
                    "objectTypeRidOneSide": "com.palantir.foo",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "bar",
                          "object": "com.palantir.foo",
                        },
                        "to": {
                          "apiName": "bar",
                          "object": "com.palantir.fizz",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "fizzes",
                      "displayMetadata": {
                        "displayName": "Fizzes",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "fizz-to-foo",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.fizz": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.fizz",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                        "fizz": {
                          "column": "fizz",
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
                  "rid": "ri.ontology.main.datasource.com.palantir.fizz",
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.fizz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Fizz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Fizz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "fizz",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                  "fizz": {
                    "apiName": "fizz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Fizz",
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
                "titlePropertyTypeRid": "fizz",
              },
            },
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
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
                  "rid": "ri.ontology.main.datasource.com.palantir.foo",
                },
              ],
              "entityMetadata": {
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
                  "pluralDisplayName": "Foo",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                "titlePropertyTypeRid": "bar",
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("Explicit datasource definitions are properly defined", () => {
      const datasetBackedObject = defineObject({
        titlePropertyApiName: "bar",
        displayName: "datasetBackedObject",
        pluralDisplayName: "datasetBackedObject",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
        datasource: { type: "dataset" },
      });

      const streamBackedObjectNoRetention = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "streamBackedObjectNoRetention",
        pluralDisplayName: "streamBackedObjectNoRetention",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: [{ apiName: "fizz", type: "string", displayName: "Fizz" }, {
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
        datasource: { type: "stream" },
      });

      const streamBackedObjectWithRetention = defineObject({
        titlePropertyApiName: "buzz",
        displayName: "streamBackedObjectWithRetention",
        pluralDisplayName: "streamBackedObjectWithRetention",
        apiName: "buzz",
        primaryKeyPropertyApiName: "buzz",
        properties: [{ apiName: "buzz", type: "string", displayName: "Buzz" }],
        datasource: { type: "stream", retentionPeriod: "PT1H" },
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
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
            "com.palantir.buzz": {
              "datasources": [
                {
                  "datasource": {
                    "streamV2": {
                      "propertyMapping": {
                        "buzz": "buzz",
                      },
                      "propertySecurityGroups": undefined,
                      "retentionPolicy": {
                        "time": {
                          "window": "PT1H",
                        },
                        "type": "time",
                      },
                      "streamLocator": "com.palantir.buzz",
                    },
                    "type": "streamV2",
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                  "rid": "ri.ontology.main.datasource.com.palantir.buzz",
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.buzz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "streamBackedObjectWithRetention",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "streamBackedObjectWithRetention",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "buzz",
                ],
                "propertyTypes": {
                  "buzz": {
                    "apiName": "buzz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Buzz",
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
                "titlePropertyTypeRid": "buzz",
              },
            },
            "com.palantir.fizz": {
              "datasources": [
                {
                  "datasource": {
                    "streamV2": {
                      "propertyMapping": {
                        "bar": "bar",
                        "fizz": "fizz",
                      },
                      "propertySecurityGroups": undefined,
                      "retentionPolicy": {
                        "none": {},
                        "type": "none",
                      },
                      "streamLocator": "com.palantir.fizz",
                    },
                    "type": "streamV2",
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                  "rid": "ri.ontology.main.datasource.com.palantir.fizz",
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.fizz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "streamBackedObjectNoRetention",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "streamBackedObjectNoRetention",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "fizz",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                  "fizz": {
                    "apiName": "fizz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Fizz",
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
                "titlePropertyTypeRid": "fizz",
              },
            },
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
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
                  "rid": "ri.ontology.main.datasource.com.palantir.foo",
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.foo",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "datasetBackedObject",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "datasetBackedObject",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                "titlePropertyTypeRid": "bar",
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("Restricted view datasources are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: [{
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
        datasource: { type: "restrictedView" },
      });
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {},
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
                      "restrictedViewV2": {
                        "propertyMapping": {
                          "bar": {
                            "column": "bar",
                            "type": "column",
                          },
                        },
                        "restrictedViewRid": "com.palantir.foo",
                      },
                      "type": "restrictedViewV2",
                    },
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                    "rid": "ri.ontology.main.datasource.com.palantir.foo",
                  },
                ],
                "entityMetadata": {
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
                    "pluralDisplayName": "Foo",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "bar",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
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
                  "titlePropertyTypeRid": "bar",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });

    it("Edit only properties are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "fizz",
        properties: [{
          apiName: "bar",
          type: "string",
          displayName: "Bar",
          editOnly: true,
        }, {
          apiName: "fizz",
          type: "string",
          displayName: "Fizz",
        }],
      });
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {},
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
                          "bar": {
                            "editOnly": {},
                            "type": "editOnly",
                          },
                          "fizz": {
                            "column": "fizz",
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
                    "rid": "ri.ontology.main.datasource.com.palantir.foo",
                  },
                ],
                "entityMetadata": {
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
                    "pluralDisplayName": "Foo",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "fizz",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
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
                    "fizz": {
                      "apiName": "fizz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Fizz",
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
                  "titlePropertyTypeRid": "bar",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });

    it("Fails if edit only property is primary key", () => {
      expect(() => {
        defineObject({
          titlePropertyApiName: "bar",
          displayName: "Foo",
          pluralDisplayName: "Foo",
          apiName: "foo",
          primaryKeyPropertyApiName: "bar",
          properties: [{
            apiName: "bar",
            type: "string",
            displayName: "Bar",
            editOnly: true,
          }],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Primary key property bar on object foo cannot be edit-only]`,
      );
    });

    it("Fail if stream retention period is not ISO 8601 compliant", () => {
      expect(() =>
        defineObject({
          titlePropertyApiName: "buzz",
          displayName: "streamBackedObjectWithRetention",
          pluralDisplayName: "streamBackedObjectWithRetention",
          apiName: "buzz",
          primaryKeyPropertyApiName: "buzz",
          properties: [{
            apiName: "buzz",
            type: "string",
            displayName: "Buzz",
          }],
          datasource: {
            type: "stream",
            retentionPeriod: "bad retention period string",
          },
        })
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Retention period "bad retention period string" on object "buzz" is not a valid ISO 8601 duration string]`,
      );
    });

    it("Property-level datasources are properly defined", () => {
      const exampleObject = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObject",
        pluralDisplayName: "exampleObject",
        apiName: "fizz",
        primaryKeyPropertyApiName: "bar",
        properties: [{
          apiName: "fizz",
          type: "mediaReference",
          displayName: "Fizz",
        }, {
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
        datasource: { type: "stream" },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.fizz": {
                "datasources": [
                  {
                    "datasource": {
                      "mediaSetView": {
                        "assumedMarkings": [],
                        "mediaSetViewLocator": "com.palantir.fizz.fizz",
                        "properties": [
                          "fizz",
                        ],
                      },
                      "type": "mediaSetView",
                    },
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                    "rid": "ri.ontology.main.datasource.fizz",
                  },
                  {
                    "datasource": {
                      "streamV2": {
                        "propertyMapping": {
                          "bar": "bar",
                          "fizz": "fizz",
                        },
                        "propertySecurityGroups": undefined,
                        "retentionPolicy": {
                          "none": {},
                          "type": "none",
                        },
                        "streamLocator": "com.palantir.fizz",
                      },
                      "type": "streamV2",
                    },
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                    "rid": "ri.ontology.main.datasource.com.palantir.fizz",
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.fizz",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObject",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObject",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "bar",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
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
                    "fizz": {
                      "apiName": "fizz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Fizz",
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
                        "mediaReference": {},
                        "type": "mediaReference",
                      },
                      "typeClasses": [],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "bar",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });
  });

  describe("Actions", () => {
    it("Interface actions are properly defined", () => {
      const exampleAction = defineAction({
        apiName: "foo",
        displayName: "exampleAction",
        status: "active",
        rules: [{
          type: "addInterfaceRule",
          addInterfaceRule: {
            interfaceApiName: "foo",
            objectTypeParameter: "param1",
            sharedPropertyValues: {},
          },
        }],
        parameters: [{
          id: "param1",
          displayName: "param1",
          type: "boolean",
          validation: { required: true, allowedValues: { type: "boolean" } },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
      {
        "blockData": {
          "actionTypes": {
            "com.palantir.foo": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "addInterfaceRule": {
                          "interfaceApiName": "com.palantir.foo",
                          "objectTypeParameter": "param1",
                          "sharedPropertyValues": {},
                        },
                        "type": "addInterfaceRule",
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
                      "param1": {
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "checkbox": {},
                              "type": "checkbox",
                            },
                            "visibility": {
                              "editable": {},
                              "type": "editable",
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "boolean": {
                                "boolean": {},
                                "type": "boolean",
                              },
                              "type": "boolean",
                            },
                            "required": {
                              "required": {},
                              "type": "required",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "com.palantir.foo",
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
                    "displayName": "exampleAction",
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
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "param1",
                  ],
                  "parameters": {
                    "param1": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "param1",
                        "typeClasses": [],
                      },
                      "id": "param1",
                      "type": {
                        "boolean": {},
                        "type": "boolean",
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
          "objectTypes": {},
          "sharedPropertyTypes": {},
        },
        "importedTypes": {
          "actionTypes": [],
          "interfaceTypes": [],
          "linkTypes": [],
          "objectTypes": [],
          "sharedPropertyTypes": [],
        },
      }
        `);
    });
    it("Simple interface actions (with object types) are properly defined", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: "string",
        },
      });

      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: [{
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
      });

      const createActionWithObjectType = defineCreateInterfaceObjectAction(
        exampleInterface,
        exampleObjectType,
      );

      const modifyAction = defineModifyInterfaceObjectAction(
        exampleInterface,
        exampleObjectType,
      );

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {
              "com.palantir.create-example-interface-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {},
                          },
                          "type": "addInterfaceRule",
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
                        "com.palantir.property1": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
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
                                "oneOf": {
                                  "oneOf": {
                                    "labelledValues": [
                                      {
                                        "label": "exampleObjectType",
                                        "value": {
                                          "objectType": {
                                            "objectTypeId": "com.palantir.foo",
                                          },
                                          "type": "objectType",
                                        },
                                      },
                                    ],
                                    "otherValueAllowed": {
                                      "allowed": false,
                                    },
                                  },
                                  "type": "oneOf",
                                },
                                "type": "oneOf",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-example-interface-foo",
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
                      "displayName": "Create exampleInterface",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
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
              "com.palantir.modify-example-interface-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "sharedPropertyValues": {},
                          },
                          "type": "modifyInterfaceRule",
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
                        "com.palantir.property1": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
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
                                "oneOf": {
                                  "oneOf": {
                                    "labelledValues": [
                                      {
                                        "label": "exampleObjectType",
                                        "value": {
                                          "objectType": {
                                            "objectTypeId": "com.palantir.foo",
                                          },
                                          "type": "objectType",
                                        },
                                      },
                                    ],
                                    "otherValueAllowed": {
                                      "allowed": false,
                                    },
                                  },
                                  "type": "oneOf",
                                },
                                "type": "oneOf",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-example-interface-foo",
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
                      "displayName": "Modify exampleInterface",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
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
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.property1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
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
                  },
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.foo": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.foo",
                        "propertyMapping": {
                          "bar": {
                            "column": "bar",
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
                    "rid": "ri.ontology.main.datasource.com.palantir.foo",
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObjectType",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObjectTypes",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "bar",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
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
                  "titlePropertyTypeRid": "bar",
                },
              },
            },
            "sharedPropertyTypes": {
              "com.palantir.property1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property1",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
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
            },
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });

    it("Concrete actions are properly defined", () => {
      const exampleAction = defineAction({
        apiName: "foo",
        displayName: "exampleAction",
        status: "active",
        rules: [{
          type: "addOrModifyObjectRuleV2",
          addOrModifyObjectRuleV2: {
            objectToModify: "objectToModifyParameter",
            propertyValues: {
              "bar": {
                type: "parameterId",
                parameterId: "param1",
              },
            },
            structFieldValues: {},
          },
        }],
        parameters: [{
          id: "param1",
          displayName: "param1",
          type: "boolean",
          validation: { required: true, allowedValues: { type: "boolean" } },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
         "blockData": {
           "actionTypes": {
             "com.palantir.foo": {
               "actionType": {
                 "actionTypeLogic": {
                   "logic": {
                     "rules": [
                       {
                         "addOrModifyObjectRuleV2": {
                           "objectToModify": "objectToModifyParameter",
                           "propertyValues": {
                             "bar": {
                               "parameterId": "param1",
                               "type": "parameterId",
                             },
                           },
                           "structFieldValues": {},
                         },
                         "type": "addOrModifyObjectRuleV2",
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
                       "param1": {
                         "defaultValidation": {
                           "display": {
                             "renderHint": {
                               "checkbox": {},
                               "type": "checkbox",
                             },
                             "visibility": {
                               "editable": {},
                               "type": "editable",
                             },
                           },
                           "validation": {
                             "allowedValues": {
                               "boolean": {
                                 "boolean": {},
                                 "type": "boolean",
                               },
                               "type": "boolean",
                             },
                             "required": {
                               "required": {},
                               "type": "required",
                             },
                           },
                         },
                       },
                     },
                   },
                 },
                 "metadata": {
                   "apiName": "com.palantir.foo",
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
                     "displayName": "exampleAction",
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
                   "formContentOrdering": [],
                   "parameterOrdering": [
                     "param1",
                   ],
                   "parameters": {
                     "param1": {
                       "displayMetadata": {
                         "description": "",
                         "displayName": "param1",
                         "typeClasses": [],
                       },
                       "id": "param1",
                       "type": {
                         "boolean": {},
                         "type": "boolean",
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
           "objectTypes": {},
           "sharedPropertyTypes": {},
         },
         "importedTypes": {
           "actionTypes": [],
           "interfaceTypes": [],
           "linkTypes": [],
           "objectTypes": [],
           "sharedPropertyTypes": [],
         },
       }
`);
    });

    it("Simple concrete actions are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: [{
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
      });

      const createObjectActionType = defineCreateObjectAction(
        exampleObjectType,
      );
      const modifyObjectActionType = defineModifyObjectAction(
        exampleObjectType,
      );
      const deleteObjectActionType = defineDeleteObjectAction(
        exampleObjectType,
      );

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
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
                              "bar": {
                                "parameterId": "bar",
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
                        "bar": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
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
                      "displayName": "Create exampleObjectType",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "bar",
                    ],
                    "parameters": {
                      "bar": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Bar",
                          "typeClasses": [],
                        },
                        "id": "bar",
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
              "com.palantir.delete-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "deleteObjectRule": {
                            "objectToDelete": "objectToDeleteParameter",
                          },
                          "type": "deleteObjectRule",
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
                        "objectToDeleteParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.delete-object-foo",
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
                      "displayName": "Delete exampleObjectType",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToDeleteParameter",
                    ],
                    "parameters": {
                      "objectToDeleteParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Delete object",
                          "typeClasses": [],
                        },
                        "id": "objectToDeleteParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
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
              "com.palantir.modify-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "bar",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "modifyObjectRule",
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
                        "bar": {
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
                        "objectToModifyParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-foo",
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
                      "displayName": "Modify exampleObjectType",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToModifyParameter",
                      "bar",
                    ],
                    "parameters": {
                      "bar": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Bar",
                          "typeClasses": [],
                        },
                        "id": "bar",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToModifyParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
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
                          "bar": {
                            "column": "bar",
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
                    "rid": "ri.ontology.main.datasource.com.palantir.foo",
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObjectType",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObjectTypes",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "bar",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
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
                  "titlePropertyTypeRid": "bar",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });

    it("ModifyObjectRule requires objectToModify parameter", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: [{
          apiName: "name",
          type: "string",
          displayName: "Name",
          description: "The name of the test object",
        }, {
          apiName: "id",
          type: "string",
          displayName: "ID",
          description: "The ID of the test object",
        }],
      });
      expect(() =>
        defineAction({
          apiName: "foo",
          displayName: "exampleAction",
          status: "active",
          rules: [{
            type: "modifyObjectRule",
            modifyObjectRule: {
              objectToModify: "sampleObject",
              propertyValues: {
                "name": {
                  type: "parameterId",
                  parameterId: "name",
                },
              },
              structFieldValues: {},
            },
          }],
          parameters: [{
            id: "name",
            displayName: "Name",
            type: "string",
            validation: { required: true, allowedValues: { type: "text" } },
          }],
        })
      ).toThrowError(
        "Invariant failed: Object to modify parameter must be defined in parameters",
      );
    });

    it("Simple interface actions (without object types) are properly defined", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: "string",
        },
      });
      const createAction = defineCreateInterfaceObjectAction(exampleInterface);
      const modifyAction = defineModifyInterfaceObjectAction(exampleInterface);

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {
              "com.palantir.create-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {},
                          },
                          "type": "addInterfaceRule",
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
                        "com.palantir.property1": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
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
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [
                                      "com.palantir.exampleInterface",
                                    ],
                                  },
                                  "type": "objectTypeReference",
                                },
                                "type": "objectTypeReference",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-example-interface",
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
                      "displayName": "Create exampleInterface",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
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
              "com.palantir.modify-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "sharedPropertyValues": {},
                          },
                          "type": "modifyInterfaceRule",
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
                        "com.palantir.property1": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
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
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-example-interface",
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
                      "displayName": "Modify exampleInterface",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
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
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.property1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
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
                  },
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {
              "com.palantir.property1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property1",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
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
            },
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });

    it("Actions with group permissions are properly defined", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: [{
          apiName: "name",
          type: "string",
          displayName: "Name",
          description: "The name of the test object",
        }, {
          apiName: "id",
          type: "string",
          displayName: "ID",
          description: "The ID of the test object",
        }],
      });
      const createAction = defineCreateObjectAction(sampleObject, {
        type: "group",
        name: "testGroup",
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {
              "com.palantir.create-object-sample-object": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.sampleObject",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "name": {
                                "parameterId": "name",
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
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "EQUALS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "testGroup",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Insufficient permissions. Missing organization membership required to submit action",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "id": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "name": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-sample-object",
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
                      "displayName": "Create Test Object",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "name",
                      "id",
                    ],
                    "parameters": {
                      "id": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ID",
                          "typeClasses": [],
                        },
                        "id": "id",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "name": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Name",
                          "typeClasses": [],
                        },
                        "id": "name",
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
              "actionTypes": {
                "com.palantir.create-object-sample-object": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
              },
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.sampleObject": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.sampleObject",
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
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                    "rid": "ri.ontology.main.datasource.com.palantir.sampleObject",
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.sampleObject",
                  "displayMetadata": {
                    "description": "Sample object description",
                    "displayName": "Test Object",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "tests",
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
                        "description": "The ID of the test object",
                        "displayName": "ID",
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
                        "description": "The name of the test object",
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
                  "titlePropertyTypeRid": "name",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });

    it("Actions with custom permissions are properly defined", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: [{
          apiName: "name",
          type: "string",
          displayName: "Name",
          description: "The name of the test object",
        }, {
          apiName: "id",
          type: "string",
          displayName: "ID",
          description: "The ID of the test object",
        }],
      });
      const createAction = defineCreateObjectAction(sampleObject, {
        displayMetadata: {
          failureMessage:
            "Insufficient permissions. Missing organization membership required to submit action",
          typeClasses: [],
        },
        condition: {
          type: "comparison",
          comparison: {
            operator: "INTERSECTS",
            left: {
              type: "userProperty",
              userProperty: {
                userId: {
                  type: "currentUser",
                  currentUser: {},
                },
                propertyValue: {
                  type: "organizationMarkingIds",
                  organizationMarkingIds: {},
                },
              },
            },
            right: {
              type: "staticValue",
              staticValue: {
                type: "stringList",
                stringList: {
                  strings: [
                    "87ef507e-f954-457e-ad68-e0df71ef7567",
                  ],
                },
              },
            },
            displayMetadata: null,
          },
        },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {
              "com.palantir.create-object-sample-object": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.sampleObject",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "name": {
                                "parameterId": "name",
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
                              "comparison": {
                                "displayMetadata": null,
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "organizationMarkingIds": {},
                                      "type": "organizationMarkingIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "87ef507e-f954-457e-ad68-e0df71ef7567",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Insufficient permissions. Missing organization membership required to submit action",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "id": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "name": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-sample-object",
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
                      "displayName": "Create Test Object",
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
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "name",
                      "id",
                    ],
                    "parameters": {
                      "id": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ID",
                          "typeClasses": [],
                        },
                        "id": "id",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "name": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Name",
                          "typeClasses": [],
                        },
                        "id": "name",
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
              "actionTypes": {
                "com.palantir.create-object-sample-object": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
              },
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.sampleObject": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.sampleObject",
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
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                    "rid": "ri.ontology.main.datasource.com.palantir.sampleObject",
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.sampleObject",
                  "displayMetadata": {
                    "description": "Sample object description",
                    "displayName": "Test Object",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "tests",
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
                        "description": "The ID of the test object",
                        "displayName": "ID",
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
                        "description": "The name of the test object",
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
                  "titlePropertyTypeRid": "name",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });
  });
  describe("Imports", () => {
    it("Legacy importing works", () => {
      const id = importSharedPropertyType({
        apiName: "id",
        packageName: "com.palantir.core.ontology.types",
        typeHint: "string",
      });
      const myInterface = defineInterface({
        apiName: "myInterface",
        properties: {
          id,
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.myInterface": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.myInterface",
                  "displayMetadata": {
                    "description": "myInterface",
                    "displayName": "myInterface",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.core.ontology.types.id": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.core.ontology.types.id",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "com.palantir.core.ontology.types.id",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
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
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [
              {
                "apiName": "com.palantir.core.ontology.types.id",
                "description": undefined,
                "displayName": "com.palantir.core.ontology.types.id",
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
              },
            ],
          },
        }
      `);
    });
    it("Simple importing works", () => {
      // does the same as "import { spt } from '@other/package'"
      const spt: SharedPropertyType = {
        apiName: "com.other.package.spt",
        nonNameSpacedApiName: "spt",
        type: "string",
        __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
      };
      importOntologyEntity(spt);

      const myInterface = defineInterface({
        apiName: "myInterface",
        properties: {
          spt,
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.myInterface": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.myInterface",
                  "displayMetadata": {
                    "description": "myInterface",
                    "displayName": "myInterface",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.other.package.spt": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.other.package.spt",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "com.other.package.spt",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
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
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [
              {
                "apiName": "com.other.package.spt",
                "description": undefined,
                "displayName": "com.other.package.spt",
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
              },
            ],
          },
        }
      `);
    });
    it("Export files are generated correctly", async () => {
      const generatedDir = path.resolve(path.join(
        __dirname,
        "..",
        "generatedNoCheck",
        "export_files_are_generated_correctly",
      ));
      await defineOntology("com.my.package.", () => {
        const mySpt = defineSharedPropertyType({
          apiName: "mySpt",
          type: "string",
        });
        const myInterface = defineInterface({
          apiName: "myInterface",
          properties: {
            mySpt,
          },
        });
        const myObject = defineObject({
          titlePropertyApiName: "bar",
          displayName: "My Object",
          pluralDisplayName: "myObjects",
          apiName: "myObject",
          primaryKeyPropertyApiName: "bar",
          properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
          implementsInterfaces: [{
            implements: myInterface,
            propertyMapping: [{
              interfaceProperty: "com.my.package.mySpt",
              mapsTo: "bar",
            }],
          }],
        });
      }, generatedDir);

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/interface-types/myInterface.ts"),
          "utf8",
        ),
      ).toMatchInlineSnapshot(`
        "
        import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
        import type { InterfaceType } from '@osdk/maker';

        const myInterface_base: InterfaceType = {
          "apiName": "com.my.package.myInterface",
          "displayMetadata": {
            "displayName": "myInterface",
            "description": "myInterface"
          },
          "extendsInterfaces": [],
          "links": [],
          "status": {
            "type": "active",
            "active": {}
          },
          "propertiesV2": {
            "com.my.package.mySpt": {
              "required": true,
              "sharedPropertyType": {
                "apiName": "com.my.package.mySpt",
                "type": "string",
                "nonNameSpacedApiName": "mySpt",
                "displayName": "mySpt",
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE"
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE"
                  }
                ],
                "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
              }
            }
          },
          "searchable": true,
          "__type": OntologyEntityTypeEnum.INTERFACE_TYPE
        } as unknown as InterfaceType;
                
        export const myInterface: InterfaceType = wrapWithProxy(myInterface_base);
                "
      `);

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/object-types/myObject.ts"),
          "utf8",
        ),
      ).toMatchInlineSnapshot(`
        "
        import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
        import type { ObjectType } from '@osdk/maker';

        const myObject_base: ObjectType = {
          "titlePropertyApiName": "bar",
          "displayName": "My Object",
          "pluralDisplayName": "myObjects",
          "apiName": "com.my.package.myObject",
          "primaryKeyPropertyApiName": "bar",
          "properties": [
            {
              "apiName": "bar",
              "type": "string",
              "displayName": "Bar"
            }
          ],
          "implementsInterfaces": [
            {
              "implements": {
                "apiName": "com.my.package.myInterface",
                "displayMetadata": {
                  "displayName": "myInterface",
                  "description": "myInterface"
                },
                "extendsInterfaces": [],
                "links": [],
                "status": {
                  "type": "active",
                  "active": {}
                },
                "propertiesV2": {
                  "com.my.package.mySpt": {
                    "required": true,
                    "sharedPropertyType": {
                      "apiName": "com.my.package.mySpt",
                      "type": "string",
                      "nonNameSpacedApiName": "mySpt",
                      "displayName": "mySpt",
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE"
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE"
                        }
                      ],
                      "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
                    }
                  }
                },
                "searchable": true,
                "__type": OntologyEntityTypeEnum.INTERFACE_TYPE
              },
              "propertyMapping": [
                {
                  "interfaceProperty": "com.my.package.mySpt",
                  "mapsTo": "bar"
                }
              ]
            }
          ],
          "__type": OntologyEntityTypeEnum.OBJECT_TYPE
        } as unknown as ObjectType;
                
        export const myObject: ObjectType = wrapWithProxy(myObject_base);
                "
      `);

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/shared-property-types/mySpt.ts"),
          "utf8",
        ),
      ).toMatchInlineSnapshot(`
        "
        import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
        import type { SharedPropertyType } from '@osdk/maker';

        const mySpt_base: SharedPropertyType = {
          "apiName": "com.my.package.mySpt",
          "type": "string",
          "nonNameSpacedApiName": "mySpt",
          "displayName": "mySpt",
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            }
          ],
          "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
        } as unknown as SharedPropertyType;
                
        export const mySpt: SharedPropertyType = wrapWithProxy(mySpt_base);
                "
      `);
      fs.rmSync(path.resolve(path.join(generatedDir, "..")), {
        recursive: true,
        force: true,
      });
    });
    it("Extended interfaces are propagated to the static objects", async () => {
      const generatedDir = path.resolve(path.join(
        __dirname,
        "..",
        "generatedNoCheck",
        "extended_interfaces_are_propagated_to_the_static_objects",
      ));
      await defineOntology("com.palantir.", () => {
        const parentInterface = defineInterface({
          apiName: "parentInterface",
          properties: {
            property1: "string",
          },
        });
        const childInterface = defineInterface({
          apiName: "childInterface",
          properties: {
            property2: "string",
          },
          extends: [parentInterface],
        });
      }, generatedDir);

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/interface-types/childInterface.ts"),
          "utf8",
        ),
      ).toMatchInlineSnapshot(`
        "
        import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
        import type { InterfaceType } from '@osdk/maker';

        const childInterface_base: InterfaceType = {
          "apiName": "com.palantir.childInterface",
          "displayMetadata": {
            "displayName": "childInterface",
            "description": "childInterface"
          },
          "extendsInterfaces": [
            {
              "apiName": "com.palantir.parentInterface",
              "displayMetadata": {
                "displayName": "parentInterface",
                "description": "parentInterface"
              },
              "extendsInterfaces": [],
              "links": [],
              "status": {
                "type": "active",
                "active": {}
              },
              "propertiesV2": {
                "com.palantir.property1": {
                  "required": true,
                  "sharedPropertyType": {
                    "apiName": "com.palantir.property1",
                    "displayName": "property1",
                    "type": "string",
                    "array": false,
                    "nonNameSpacedApiName": "property1",
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE"
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE"
                      }
                    ],
                    "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
                  }
                }
              },
              "searchable": true,
              "__type": OntologyEntityTypeEnum.INTERFACE_TYPE
            }
          ],
          "links": [],
          "status": {
            "type": "active",
            "active": {}
          },
          "propertiesV2": {
            "com.palantir.property2": {
              "required": true,
              "sharedPropertyType": {
                "apiName": "com.palantir.property2",
                "displayName": "property2",
                "type": "string",
                "array": false,
                "nonNameSpacedApiName": "property2",
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE"
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE"
                  }
                ],
                "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
              }
            }
          },
          "searchable": true,
          "__type": OntologyEntityTypeEnum.INTERFACE_TYPE
        } as unknown as InterfaceType;
                
        export const childInterface: InterfaceType = wrapWithProxy(childInterface_base);
                "
      `);
      fs.rmSync(path.join(generatedDir, ".."), {
        recursive: true,
        force: true,
      });
    });
    it("Extended interface properties are checked in object type property mapping", () => {
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        properties: {
          iProperty1: "string",
        },
      });
      const childInterface = defineInterface({
        apiName: "childInterface",
        properties: {
          iProperty2: "string",
        },
        extends: [parentInterface],
      });
      const objectDef = defineObject({
        apiName: "objectDef",
        primaryKeyPropertyApiName: "property1",
        titlePropertyApiName: "property1",
        displayName: "objectDef",
        pluralDisplayName: "objectDefs",
        properties: [
          {
            apiName: "property1",
            type: "string",
            displayName: "property1",
          },
          {
            apiName: "property2",
            type: "string",
            displayName: "property2",
          },
        ],
        implementsInterfaces: [
          {
            implements: childInterface,
            propertyMapping: [
              {
                interfaceProperty: "com.palantir.iProperty1",
                mapsTo: "property1",
              },
              {
                interfaceProperty: "com.palantir.iProperty2",
                mapsTo: "property2",
              },
            ],
          },
        ],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockData": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.childInterface": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.childInterface",
                  "displayMetadata": {
                    "description": "childInterface",
                    "displayName": "childInterface",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [
                    "com.palantir.parentInterface",
                  ],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.iProperty2": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.iProperty2",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "iProperty2",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
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
                  },
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
              "com.palantir.parentInterface": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "allPropertiesV2": {},
                  "allPropertiesV3": {},
                  "apiName": "com.palantir.parentInterface",
                  "displayMetadata": {
                    "description": "parentInterface",
                    "displayName": "parentInterface",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.iProperty1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.iProperty1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "iProperty1",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
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
                  },
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.objectDef": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.objectDef",
                        "propertyMapping": {
                          "property1": {
                            "column": "property1",
                            "type": "column",
                          },
                          "property2": {
                            "column": "property2",
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
                    "rid": "ri.ontology.main.datasource.com.palantir.objectDef",
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.objectDef",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "objectDef",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "objectDefs",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [
                    {
                      "interfaceTypeApiName": "com.palantir.childInterface",
                      "properties": {
                        "com.palantir.iProperty1": {
                          "propertyTypeRid": "property1",
                        },
                        "com.palantir.iProperty2": {
                          "propertyTypeRid": "property2",
                        },
                      },
                    },
                  ],
                  "primaryKeys": [
                    "property1",
                  ],
                  "propertyTypes": {
                    "property1": {
                      "apiName": "property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property1",
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
                    "property2": {
                      "apiName": "property2",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property2",
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
                  "titlePropertyTypeRid": "property1",
                },
              },
            },
            "sharedPropertyTypes": {
              "com.palantir.iProperty1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.iProperty1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "iProperty1",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
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
              "com.palantir.iProperty2": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.iProperty2",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "iProperty2",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
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
            },
          },
          "importedTypes": {
            "actionTypes": [],
            "interfaceTypes": [],
            "linkTypes": [],
            "objectTypes": [],
            "sharedPropertyTypes": [],
          },
        }
      `);
    });
  });
  describe("Dependencies", () => {
    it("Correctly adds dependencies", async () => {
      const generatedDir = path.resolve(path.join(
        __dirname,
        "..",
        "generatedNoCheck",
        "correctly_adds_dependencies",
      ));
      await defineOntology(
        "com.palantir.",
        () => {
          addDependency("com.palantir", fileURLToPath(import.meta.url));
          defineInterface({
            apiName: "myInterface",
            properties: {
              property1: "string",
            },
          });
        },
        generatedDir,
        path.join(generatedDir, "dependencies.json"),
      );

      const packageJson = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, "..", "..", "package.json"),
          "utf8",
        ),
      );
      expect(packageJson.version).toBeDefined();

      expect(
        fs.readFileSync(path.join(generatedDir, "dependencies.json"), "utf8"),
      ).toMatchInlineSnapshot(`
        "{
          "com.palantir": "${packageJson.version}"
        }"
      `);

      expect(
        fs.readFileSync(path.join(generatedDir, "index.ts"), "utf8"),
      )
        .toContain(
          `addDependency("com.palantir", fileURLToPath(import.meta.url));`,
        );

      fs.rmSync(path.join(generatedDir, ".."), {
        recursive: true,
        force: true,
      });
    });
  });
});
