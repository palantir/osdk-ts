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
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import {
  CREATE_OR_MODIFY_OBJECT_PARAMETER,
  defineAction,
  defineCreateInterfaceObjectAction,
  defineCreateObjectAction,
  defineCreateOrModifyObjectAction,
  defineDeleteObjectAction,
  defineModifyInterfaceObjectAction,
  defineModifyObjectAction,
  MODIFY_OBJECT_PARAMETER,
} from "./defineAction.js";
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
import { importSharedPropertyType } from "./importSharedPropertyType.js";
import { type InterfaceType } from "./interface/InterfaceType.js";
import { type SharedPropertyType } from "./properties/SharedPropertyType.js";

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
        properties: {
          "constrainedString": {
            type: "string",
            displayName: "Constrained String",
            valueType: testStringValueType,
          },
        },
      });

      const ontology = dumpOntologyFullMetadata();
      const objectPropertyType =
        ontology.ontology.objectTypes["com.palantir.testObject"]
          .objectType.propertyTypes["constrainedString"];

      expect(objectPropertyType.valueType).toEqual({
        apiName: "stringWithConstraints",
        version: "1.0.0",
        packageNamespace: "com.palantir",
        displayMetadata: {
          displayName: "String With Constraints",
          description: "A string type with additional constraints",
        },
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
                "packageNamespace": "com.palantir",
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

        expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                  "apiName": "com.palantir.Foo",
                  "displayMetadata": {
                    "description": "Foo",
                    "displayName": "Foo",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
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

        expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                "apiName": "com.palantir.childInterface",
                "displayMetadata": {
                  "description": "childInterface",
                  "displayName": "childInterface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                "apiName": "com.palantir.childInterface",
                "displayMetadata": {
                  "description": "childInterface",
                  "displayName": "childInterface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                "apiName": "com.palantir.A",
                "displayMetadata": {
                  "description": "A",
                  "displayName": "A",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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
                "apiName": "com.palantir.B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                "apiName": "com.palantir.A",
                "displayMetadata": {
                  "description": "A",
                  "displayName": "A",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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
                "apiName": "com.palantir.B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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

    expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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

    expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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

    expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
              "apiName": "com.palantir.interface",
              "displayMetadata": {
                "description": "interface",
                "displayName": "interface",
                "icon": {
                  "blueprint": {
                    "color": "#4C90F0",
                    "locator": "layout-hierarchy",
                  },
                  "type": "blueprint",
                },
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
    it("Fails if the api name is invalid", () => {
      expect(() => {
        defineObject({
          titlePropertyApiName: "bar",
          displayName: "Foo",
          pluralDisplayName: "Foo",
          apiName: "foo_with_underscores",
          primaryKeyPropertyApiName: "bar",
          properties: { "bar": { type: "string" } },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Invalid API name foo_with_underscores. API names must match the regex /^([a-zA-Z][a-zA-Z0-9\\\\-]*)$/.]`,
      );
    });
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
          properties: { "bar": { type: "string" } },
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
          properties: { "bar": { type: "string" } },
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
          properties: { "bar": { type: "string" } },
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
          properties: { "bar": { type: "string" } },
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
        properties: {
          "bar": { type: "string", displayName: "Bar" },
          "arrayProp": {
            type: "string",
            array: true,
            displayName: "Array Property Test",
          },
          "geopoint": {
            type: {
              type: "struct",
              structDefinition: { lat: "double", lng: "double" },
            },
            displayName: "geopoint",
          },
        },
        implementsInterfaces: [{
          implements: sample,
          propertyMapping: [{
            interfaceProperty: "foo",
            mapsTo: "bar",
          }],
        }],
      });

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                "apiName": "com.palantir.interface",
                "displayMetadata": {
                  "description": "interface",
                  "displayName": "interface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
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
                        "arrayProp": {
                          "column": "arrayProp",
                          "type": "column",
                        },
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
                  "datasourceName": "com.palantir.foo",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
                    "linksV2": {},
                    "properties": {
                      "com.palantir.foo": {
                        "propertyTypeRid": "bar",
                      },
                    },
                    "propertiesV2": {},
                  },
                ],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "arrayProp": {
                    "apiName": "arrayProp",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Array Property Test",
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
                      "array": {
                        "subtype": {
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
                      "type": "array",
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
        properties: { "bar": { type: "string" } },
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
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

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {
            "fizz-to-foo": {
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
                  "datasourceName": "com.palantir.fizz",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
                  "datasourceName": "com.palantir.foo",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
        properties: { "bar": { type: "string" } },
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
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
      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {
            "fizz-to-foo": {
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
                          "column": "fizz",
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
                  "datasourceName": "fizzToFoo",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": undefined,
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
                  "datasourceName": "com.palantir.fizz",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
                  "datasourceName": "com.palantir.foo",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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

    it("Intermediary link types are properly defined", () => {
      const bar = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Bar",
        pluralDisplayName: "Bar",
        apiName: "barObject",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
      });

      const fizz = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizzObject",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" } },
      });

      const intermediaryObject = defineObject({
        titlePropertyApiName: "buzz",
        displayName: "Buzz",
        pluralDisplayName: "Buzz",
        apiName: "buzzObject",
        primaryKeyPropertyApiName: "buzz",
        properties: {
          "buzz": { type: "string" },
          "barBuzz": { type: "string" },
          "fizzBuzz": { type: "string" },
        },
      });

      const barToBuzz = defineLink({
        apiName: "barToBuzz",
        manyForeignKeyProperty: "barBuzz",
        one: {
          object: bar,
          metadata: {
            displayName: "Buzz",
            pluralDisplayName: "Buzz",
            apiName: "buzz1",
          },
        },
        toMany: {
          object: intermediaryObject,
          metadata: {
            displayName: "Bar",
            pluralDisplayName: "Bars",
            apiName: "bars",
          },
        },
      });

      const fizzToBuzz = defineLink({
        apiName: "fizzToBuzz",
        manyForeignKeyProperty: "fizzBuzz",
        one: {
          object: fizz,
          metadata: {
            displayName: "Buzz",
            pluralDisplayName: "Buzz",
            apiName: "buzz2",
          },
        },
        toMany: {
          object: intermediaryObject,
          metadata: {
            displayName: "Fizz",
            pluralDisplayName: "Fizzes",
            apiName: "fizzes",
          },
        },
      });

      defineLink({
        apiName: "fizzToBar",
        many: {
          object: bar,
          metadata: {
            displayName: "Fizz",
            pluralDisplayName: "Fizzes",
            apiName: "fizzes1",
          },
          linkToIntermediary: barToBuzz,
        },
        toMany: {
          object: fizz,
          metadata: {
            displayName: "Bar",
            pluralDisplayName: "Bars",
            apiName: "bars1",
          },
          linkToIntermediary: fizzToBuzz,
        },
        intermediaryObjectType: intermediaryObject,
      });
      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {
            "bar-to-buzz": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "bars",
                      "displayMetadata": {
                        "displayName": "Bar",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Bars",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.buzzObject",
                    "objectTypeRidOneSide": "com.palantir.barObject",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "bar",
                          "object": "com.palantir.barObject",
                        },
                        "to": {
                          "apiName": "barBuzz",
                          "object": "com.palantir.buzzObject",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "buzz1",
                      "displayMetadata": {
                        "displayName": "Buzz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Buzz",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "bar-to-buzz",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
            "fizz-to-bar": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "intermediary": {
                    "aToIntermediaryLinkTypeRid": "bar-to-buzz",
                    "intermediaryObjectTypeRid": "com.palantir.buzzObject",
                    "intermediaryToBLinkTypeRid": "fizz-to-buzz",
                    "objectTypeAToBLinkMetadata": {
                      "apiName": "fizzes1",
                      "displayMetadata": {
                        "displayName": "Fizz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeBToALinkMetadata": {
                      "apiName": "bars1",
                      "displayMetadata": {
                        "displayName": "Bar",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Bars",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidA": "com.palantir.barObject",
                    "objectTypeRidB": "com.palantir.fizzObject",
                  },
                  "type": "intermediary",
                },
                "id": "fizz-to-bar",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
            "fizz-to-buzz": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "fizzes",
                      "displayMetadata": {
                        "displayName": "Fizz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.buzzObject",
                    "objectTypeRidOneSide": "com.palantir.fizzObject",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "fizz",
                          "object": "com.palantir.fizzObject",
                        },
                        "to": {
                          "apiName": "fizzBuzz",
                          "object": "com.palantir.buzzObject",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "buzz2",
                      "displayMetadata": {
                        "displayName": "Buzz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Buzz",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "fizz-to-buzz",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.barObject": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.barObject",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.barObject",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.barObject",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Bar",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Bar",
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
            "com.palantir.buzzObject": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.buzzObject",
                      "propertyMapping": {
                        "barBuzz": {
                          "column": "barBuzz",
                          "type": "column",
                        },
                        "buzz": {
                          "column": "buzz",
                          "type": "column",
                        },
                        "fizzBuzz": {
                          "column": "fizzBuzz",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.buzzObject",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.buzzObject",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Buzz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Buzz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "buzz",
                ],
                "propertyTypes": {
                  "barBuzz": {
                    "apiName": "barBuzz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "BarBuzz",
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
                  "fizzBuzz": {
                    "apiName": "fizzBuzz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "FizzBuzz",
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
            "com.palantir.fizzObject": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.fizzObject",
                      "propertyMapping": {
                        "fizz": {
                          "column": "fizz",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.fizzObject",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.fizzObject",
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
        properties: { "bar": { type: "string" } },
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
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

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {
            "fizz-to-foo": {
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
                  "datasourceName": "com.palantir.fizz",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
                  "datasourceName": "com.palantir.foo",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
        properties: { "bar": { type: "string" } },
        datasource: { type: "dataset" },
      });

      const streamBackedObjectNoRetention = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "streamBackedObjectNoRetention",
        pluralDisplayName: "streamBackedObjectNoRetention",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
        datasource: { type: "stream" },
      });

      const streamBackedObjectWithRetention = defineObject({
        titlePropertyApiName: "buzz",
        displayName: "streamBackedObjectWithRetention",
        pluralDisplayName: "streamBackedObjectWithRetention",
        apiName: "buzz",
        primaryKeyPropertyApiName: "buzz",
        properties: { "buzz": { type: "string" } },
        datasource: { type: "stream", retentionPeriod: "PT1H" },
      });

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
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
                  "datasourceName": "com.palantir.buzz",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
                  "datasourceName": "com.palantir.fizz",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
                  "datasourceName": "com.palantir.foo",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
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
        properties: {
          "bar": { type: "string" },
        },
        datasource: { type: "restrictedView" },
      });
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
        properties: {
          "bar": {
            type: "string",
            editOnly: true,
          },
          "fizz": {
            type: "string",
          },
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
          properties: { "bar": { type: "string", editOnly: true } },
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
          properties: { "buzz": { type: "string" } },
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
        properties: {
          "fizz": { type: "mediaReference" },
          "bar": { type: "string" },
        },
        datasource: { type: "stream" },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                    "datasourceName": "fizz",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
                    "datasourceName": "com.palantir.fizz",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });
  });

  describe("Marking Constraints", () => {
    it("supports marking constraints with CBAC type and markingInputGroupName", () => {
      const obj = defineObject({
        titlePropertyApiName: "title",
        displayName: "Document",
        pluralDisplayName: "Documents",
        apiName: "document",
        primaryKeyPropertyApiName: "title",
        properties: {
          "title": {
            type: "string",
            displayName: "Title",
          },
          "classification": {
            type: {
              type: "marking",
              markingType: "CBAC",
              markingInputGroupName: "classificationGroup",
            },
            displayName: "Classification",
          },
        },
      });

      const ontology = dumpOntologyFullMetadata();
      const classificationConstraint = ontology.ontology
        .objectTypes["com.palantir.document"].datasources[0].dataSecurity
        ?.classificationConstraint!;
      expect(classificationConstraint.markingGroupName).toEqual(
        "classificationGroup",
      );
    });
  });

  describe("Actions", () => {
    it("Interface actions are properly defined", () => {
      const foo = defineInterface({
        apiName: "foo",
        displayName: "foo",
        properties: {},
      });
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
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                          "conditionalOverrides": [],
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
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
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
            "interfaceTypes": {
              "com.palantir.foo": {
                "interfaceType": {
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": "foo",
                    "displayName": "foo",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
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
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });
    it("Simple interface actions (with object types) are properly defined", () => {
      const exampleStructPropertyType = defineSharedPropertyType({
        apiName: "property2",
        type: {
          type: "struct",
          structDefinition: {
            simpleProperty: "string",
          },
        },
      });
      const mySpt = defineSharedPropertyType({
        apiName: "mySpt",
        type: "string",
      });
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        icon: { color: "#c7cdd6ff", locator: "globe" },
        properties: {
          mySpt,
          property1: "string",
          property2: exampleStructPropertyType,
        },
      });

      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          "bar": { type: "string" },
          "property1": { type: "string" },
          "property2": {
            type: {
              type: "struct",
              structDefinition: { simpleProperty: "string" },
            },
          },
        },
        implementsInterfaces: [{
          implements: exampleInterface,
          propertyMapping: [
            {
              interfaceProperty: "com.palantir.mySpt",
              mapsTo: "bar",
            },
            {
              interfaceProperty: "com.palantir.property1",
              mapsTo: "property1",
            },
            {
              interfaceProperty: "com.palantir.property2",
              mapsTo: "property2",
            },
          ],
        }],
      });

      const createActionWithObjectType = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        objectType: exampleObjectType,
      });

      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        objectType: exampleObjectType,
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                            "sharedPropertyValues": {
                              "com.palantir.mySpt": {
                                "parameterId": "com.palantir.mySpt",
                                "type": "parameterId",
                              },
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
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
                        "com.palantir.mySpt": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "com.palantir.property1": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
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
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "com.palantir.mySpt",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.mySpt": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "mySpt",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.mySpt",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
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
                            "sharedPropertyValues": {
                              "com.palantir.mySpt": {
                                "parameterId": "com.palantir.mySpt",
                                "type": "parameterId",
                              },
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
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
                        "com.palantir.mySpt": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "com.palantir.property1": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
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
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "com.palantir.mySpt",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.mySpt": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "mySpt",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.mySpt",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
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
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#c7cdd6ff",
                        "locator": "globe",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.mySpt": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.mySpt",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "mySpt",
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
                          "property1": {
                            "column": "property1",
                            "type": "column",
                          },
                          "property2": {
                            "struct": {
                              "column": "property2",
                              "mapping": {
                                "simpleProperty": {
                                  "apiName": "simpleProperty",
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
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
                  "implementsInterfaces2": [
                    {
                      "interfaceTypeApiName": "com.palantir.exampleInterface",
                      "linksV2": {},
                      "properties": {
                        "com.palantir.mySpt": {
                          "propertyTypeRid": "bar",
                        },
                        "com.palantir.property1": {
                          "propertyTypeRid": "property1",
                        },
                        "com.palantir.property2": {
                          "propertyTypeRid": "property2",
                        },
                      },
                      "propertiesV2": {},
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
                    "property1": {
                      "apiName": "property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Property1",
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
                        "displayName": "Property2",
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
                              "apiName": "simpleProperty",
                              "displayMetadata": {
                                "description": undefined,
                                "displayName": "simpleProperty",
                              },
                              "fieldType": {
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
              "com.palantir.mySpt": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.mySpt",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "mySpt",
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
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                          "conditionalOverrides": [],
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
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Conditional overrides on actions are properly defined", () => {
      const exampleAction = defineAction({
        apiName: "foo",
        displayName: "exampleAction",
        status: "active",
        rules: [{
          type: "modifyObjectRule",
          modifyObjectRule: {
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
          validation: {
            required: true,
            allowedValues: { type: "boolean" },
            defaultVisibility: "editable",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "myGroup",
                },
              },
            ],
          },
        }, {
          id: "objectToModifyParameter",
          displayName: "objectToModifyParameter",
          type: "objectTypeReference",
          validation: {
            required: true,
            allowedValues: { type: "objectTypeReference", interfaceTypes: [] },
            defaultVisibility: "editable",
          },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "param1",
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
                        "objectToModifyParameter": {
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
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [],
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
                        "param1": {
                          "conditionalOverrides": [
                            {
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
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "myGroup",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "hidden": {},
                                      "type": "hidden",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
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
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "param1",
                      "objectToModifyParameter",
                    ],
                    "parameters": {
                      "objectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "objectToModifyParameter",
                          "typeClasses": [],
                        },
                        "id": "objectToModifyParameter",
                        "type": {
                          "objectTypeReference": {},
                          "type": "objectTypeReference",
                        },
                      },
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
        properties: {
          "bar": { type: "string" },
          "structProp": {
            type: {
              type: "struct",
              structDefinition: { simpleProperty: "string" },
            },
          },
          "optionalProp": { type: "string" },
        },
      });

      const createObjectActionType = defineCreateObjectAction(
        {
          objectType: exampleObjectType,
        },
      );
      const modifyObjectActionType = defineModifyObjectAction(
        {
          objectType: exampleObjectType,
        },
      );
      const deleteObjectActionType = defineDeleteObjectAction(
        {
          objectType: exampleObjectType,
        },
      );
      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction(
        {
          objectType: exampleObjectType,
        },
      );

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                              "optionalProp": {
                                "parameterId": "optionalProp",
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
                        "optionalProp": {
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
                      "bar",
                      "optionalProp",
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
                      "optionalProp": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "OptionalProp",
                          "typeClasses": [],
                        },
                        "id": "optionalProp",
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
              "com.palantir.create-or-modify-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addOrModifyObjectRuleV2": {
                            "objectToModify": "objectToCreateOrModifyParameter",
                            "propertyValues": {
                              "optionalProp": {
                                "parameterId": "optionalProp",
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
                        "objectToCreateOrModifyParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "optionalProp": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToCreateOrModifyParameter",
                                  "propertyTypeId": "optionalProp",
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
                    "apiName": "com.palantir.create-or-modify-foo",
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
                      "displayName": "Create or Modify exampleObjectType",
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
                      "objectToCreateOrModifyParameter",
                      "optionalProp",
                    ],
                    "parameters": {
                      "objectToCreateOrModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Create or modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToCreateOrModifyParameter",
                        "type": {
                          "objectReference": {
                            "maybeCreateObjectOption": {
                              "autoGenerated": {},
                              "type": "autoGenerated",
                            },
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
                        },
                      },
                      "optionalProp": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "OptionalProp",
                          "typeClasses": [],
                        },
                        "id": "optionalProp",
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
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
                              "optionalProp": {
                                "parameterId": "optionalProp",
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
                        "objectToModifyParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "optionalProp": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "optionalProp",
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
                      "objectToModifyParameter",
                      "optionalProp",
                    ],
                    "parameters": {
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
                      "optionalProp": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "OptionalProp",
                          "typeClasses": [],
                        },
                        "id": "optionalProp",
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
                          "bar": {
                            "column": "bar",
                            "type": "column",
                          },
                          "optionalProp": {
                            "column": "optionalProp",
                            "type": "column",
                          },
                          "structProp": {
                            "struct": {
                              "column": "structProp",
                              "mapping": {
                                "simpleProperty": {
                                  "apiName": "simpleProperty",
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
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
                    "optionalProp": {
                      "apiName": "optionalProp",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "OptionalProp",
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
                    "structProp": {
                      "apiName": "structProp",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "StructProp",
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
                              "apiName": "simpleProperty",
                              "displayMetadata": {
                                "description": undefined,
                                "displayName": "simpleProperty",
                              },
                              "fieldType": {
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
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Customizations on CRUD object type actions are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "primary",
        properties: {
          "bar": { type: "string" },
          "fizz": { type: "string" },
          "buzz": { type: "string" },
          "primary": { type: "string" },
        },
      });

      const createObjectActionType = defineCreateObjectAction(
        {
          objectType: exampleObjectType,
          actionLevelValidation: [{
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          }, {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          }],
          parameterOrdering: ["bar", "fizz", "primary"],
          parameterConfiguration: {
            "fizz": {
              required: false,
              conditionalOverrides: [
                {
                  type: "required",
                  condition: {
                    type: "and",
                    conditions: [
                      {
                        type: "group",
                        name: "parameterLevelGroup",
                      },
                      {
                        type: "parameter",
                        parameterId: "bar",
                        matches: {
                          type: "staticValue",
                          staticValue: {
                            type: "string",
                            string: "bar",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
              defaultValue: {
                type: "staticValue",
                staticValue: {
                  type: "string",
                  string: "default_fizz",
                },
              },
              displayName: "fizz_display",
              description: "fizz_description",
            },
          },
          excludedProperties: ["buzz"],
          defaultFormat: "TABLE",
          enableLayoutSwitch: true,
          submissionMetadata: {
            successMessage: "Custom success message",
            undoButtonConfiguration: true,
            submitButtonDisplayMetadata: {
              intent: "DANGER",
              text: "Custom button",
            },
          },
        },
      );

      const modifyObjectActionType = defineModifyObjectAction(
        {
          objectType: exampleObjectType,
          actionLevelValidation: [{
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          }, {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          }],
          parameterOrdering: ["bar", "fizz"],
          parameterConfiguration: {
            "fizz": {
              required: false,
              conditionalOverrides: [
                {
                  type: "required",
                  condition: {
                    type: "and",
                    conditions: [
                      {
                        type: "group",
                        name: "parameterLevelGroup",
                      },
                      {
                        type: "parameter",
                        parameterId: "bar",
                        matches: {
                          type: "staticValue",
                          staticValue: {
                            type: "string",
                            string: "bar",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
              defaultValue: {
                type: "staticValue",
                staticValue: {
                  type: "string",
                  string: "default_fizz",
                },
              },
              displayName: "fizz_display",
              description: "fizz_description",
            },
          },
          excludedProperties: ["buzz"],
          defaultFormat: "TABLE",
          enableLayoutSwitch: true,
          submissionMetadata: {
            successMessage: "Custom success message",
            undoButtonConfiguration: true,
            submitButtonDisplayMetadata: {
              intent: "DANGER",
              text: "Custom button",
            },
          },
        },
      );

      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction(
        {
          objectType: exampleObjectType,
          actionLevelValidation: [{
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          }, {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          }],
          parameterOrdering: ["bar", "fizz"],
          parameterConfiguration: {
            "fizz": {
              required: false,
              conditionalOverrides: [
                {
                  type: "required",
                  condition: {
                    type: "and",
                    conditions: [
                      {
                        type: "group",
                        name: "parameterLevelGroup",
                      },
                      {
                        type: "parameter",
                        parameterId: "bar",
                        matches: {
                          type: "staticValue",
                          staticValue: {
                            type: "string",
                            string: "bar",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
              defaultValue: {
                type: "staticValue",
                staticValue: {
                  type: "string",
                  string: "default_fizz",
                },
              },
              displayName: "fizz_display",
              description: "fizz_description",
            },
          },
          excludedProperties: ["buzz"],
          defaultFormat: "TABLE",
          enableLayoutSwitch: true,
          submissionMetadata: {
            successMessage: "Custom success message",
            undoButtonConfiguration: true,
            submitButtonDisplayMetadata: {
              intent: "DANGER",
              text: "Custom button",
            },
          },
          primaryKeyOption: "userInput",
        },
      );

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                              "fizz": {
                                "parameterId": "fizz",
                                "type": "parameterId",
                              },
                              "primary": {
                                "parameterId": "primary",
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
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup",
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
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                          "1": {
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
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup2",
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
                              "failureMessage": "Different custom failure message",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
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
                        "fizz": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
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
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "bar",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
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
                        "primary": {
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
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "TABLE",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": true,
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
                      "submitButtonDisplayMetadata": {
                        "intent": "DANGER",
                        "text": "Custom button",
                      },
                      "successMessage": [
                        {
                          "message": "Custom success message",
                          "type": "message",
                        },
                      ],
                      "typeClasses": [],
                      "undoButtonConfiguration": true,
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
                      "bar",
                      "fizz",
                      "primary",
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
                      "fizz": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "fizz",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "primary": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Primary",
                          "typeClasses": [],
                        },
                        "id": "primary",
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
              "com.palantir.create-or-modify-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addOrModifyObjectRuleV2": {
                            "objectToModify": "objectToCreateOrModifyParameter",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "bar",
                                "type": "parameterId",
                              },
                              "fizz": {
                                "parameterId": "fizz",
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
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup",
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
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                          "1": {
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
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup2",
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
                              "failureMessage": "Different custom failure message",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToCreateOrModifyParameter",
                                  "propertyTypeId": "bar",
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
                        "fizz": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
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
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "bar",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
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
                        "objectToCreateOrModifyParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-or-modify-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "TABLE",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": true,
                      },
                      "description": "",
                      "displayName": "Create or Modify exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "submitButtonDisplayMetadata": {
                        "intent": "DANGER",
                        "text": "Custom button",
                      },
                      "successMessage": [
                        {
                          "message": "Custom success message",
                          "type": "message",
                        },
                      ],
                      "typeClasses": [],
                      "undoButtonConfiguration": true,
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
                      "objectToCreateOrModifyParameter",
                      "bar",
                      "fizz",
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
                      "fizz": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "fizz",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectToCreateOrModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Create or modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToCreateOrModifyParameter",
                        "type": {
                          "objectReference": {
                            "maybeCreateObjectOption": {
                              "type": "userInput",
                              "userInput": {},
                            },
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
                              "fizz": {
                                "parameterId": "fizz",
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
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup",
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
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                          "1": {
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
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup2",
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
                              "failureMessage": "Different custom failure message",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "bar",
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
                        "fizz": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
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
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "bar",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
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
                        "objectToModifyParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "TABLE",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": true,
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
                      "submitButtonDisplayMetadata": {
                        "intent": "DANGER",
                        "text": "Custom button",
                      },
                      "successMessage": [
                        {
                          "message": "Custom success message",
                          "type": "message",
                        },
                      ],
                      "typeClasses": [],
                      "undoButtonConfiguration": true,
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
                      "objectToModifyParameter",
                      "bar",
                      "fizz",
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
                      "fizz": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "fizz",
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
              "actionTypes": {
                "com.palantir.create-object-foo": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
                "com.palantir.create-or-modify-foo": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
                "com.palantir.modify-object-foo": {
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
                          "buzz": {
                            "column": "buzz",
                            "type": "column",
                          },
                          "fizz": {
                            "column": "fizz",
                            "type": "column",
                          },
                          "primary": {
                            "column": "primary",
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
                    "primary",
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
                    "primary": {
                      "apiName": "primary",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Primary",
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Non-parameter mapped properties are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          "bar": { type: "string" },
          "fizz": { type: "string" },
          "buzz": { type: "timestamp" },
        },
      });

      const createObjectActionType = defineCreateObjectAction(
        {
          objectType: exampleObjectType,
          nonParameterMappings: {
            "fizz": {
              type: "currentUser",
            },
            "buzz": {
              type: "currentTime",
            },
          },
        },
      );
      const modifyObjectActionType = defineModifyObjectAction(
        {
          objectType: exampleObjectType,
          nonParameterMappings: {
            "fizz": {
              type: "currentUser",
            },
            "buzz": {
              type: "currentTime",
            },
          },
        },
      );
      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction(
        {
          objectType: exampleObjectType,
          nonParameterMappings: {
            "fizz": {
              type: "currentUser",
            },
            "buzz": {
              type: "currentTime",
            },
          },
        },
      );
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                              "buzz": {
                                "currentTime": {},
                                "type": "currentTime",
                              },
                              "fizz": {
                                "currentUser": {},
                                "type": "currentUser",
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
              "com.palantir.create-or-modify-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addOrModifyObjectRuleV2": {
                            "objectToModify": "objectToCreateOrModifyParameter",
                            "propertyValues": {
                              "buzz": {
                                "currentTime": {},
                                "type": "currentTime",
                              },
                              "fizz": {
                                "currentUser": {},
                                "type": "currentUser",
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
                        "objectToCreateOrModifyParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-or-modify-foo",
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
                      "displayName": "Create or Modify exampleObjectType",
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
                      "objectToCreateOrModifyParameter",
                    ],
                    "parameters": {
                      "objectToCreateOrModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Create or modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToCreateOrModifyParameter",
                        "type": {
                          "objectReference": {
                            "maybeCreateObjectOption": {
                              "autoGenerated": {},
                              "type": "autoGenerated",
                            },
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
                              "buzz": {
                                "currentTime": {},
                                "type": "currentTime",
                              },
                              "fizz": {
                                "currentUser": {},
                                "type": "currentUser",
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
                        "objectToModifyParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
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
                      "objectToModifyParameter",
                    ],
                    "parameters": {
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
                          "buzz": {
                            "column": "buzz",
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
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
                        "timestamp": {},
                        "type": "timestamp",
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Parameter configuration, property mapping, and excluded property validations work", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          "name": { type: "string" },
          "id": { type: "string" },
        },
      });
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          parameterConfiguration: {
            "name": {
              displayName: "Name",
            },
            "custom_parameter": {
              displayName: "My Custom Param",
            },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Parameter custom_parameter does not exist as a property on com.palantir.sampleObject and its type is not explicitly defined]`,
      );
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          nonParameterMappings: {
            "custom_parameter": {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "custom_value",
              },
            },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Property custom_parameter does not exist as a property on com.palantir.sampleObject]`,
      );
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          excludedProperties: ["custom_parameter"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Property custom_parameter does not exist as a property on com.palantir.sampleObject]`,
      );
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          actionLevelValidation: [
            {
              condition: {
                type: "or",
                conditions: [
                  {
                    type: "parameter",
                    parameterId: "non_existent_parameter",
                    matches: {
                      type: "staticValue",
                      staticValue: {
                        type: "string",
                        string: "value",
                      },
                    },
                  },
                ],
              },
            },
          ],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter condition references unknown parameter non_existent_parameter]`,
      );
    });

    it("Static default action parameters must match type", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "primary",
        properties: {
          "bar": { type: "string" },
          "fizz": { type: "string" },
          "buzz": { type: "string" },
          "primary": { type: "string" },
        },
      });
      expect(() =>
        defineCreateObjectAction({
          objectType: exampleObjectType,
          parameterConfiguration: {
            "buzz": {
              defaultValue: {
                type: "staticValue",
                staticValue: {
                  type: "boolean",
                  boolean: true,
                },
              },
            },
          },
        })
      ).toThrowError(
        "Invariant failed: Default static value for parameter buzz does not match type",
      );
    });

    it("ModifyObjectRule requires objectToModify parameter", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          "name": {
            type: "string",
            description: "The name of the test object",
          },
          "id": { type: "string", description: "The ID of the test object" },
        },
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

    it("Target object parameters are configurable", () => {
      const employeeObject = defineObject({
        apiName: "employee",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          "id": { type: "string", displayName: "ID", description: "dummy" },
          "managedBy": { type: "string" },
        },
      });
      defineModifyObjectAction({
        objectType: employeeObject,
        parameterConfiguration: {
          [MODIFY_OBJECT_PARAMETER]: {
            displayName: "Chose a manager to modify",
            description: "Description",
            conditionalOverrides: [{
              type: "visibility",
              condition: {
                type: "group",
                name: "supervisors",
              },
            }],
          },
        },
      });
      defineCreateOrModifyObjectAction({
        objectType: employeeObject,
        parameterConfiguration: {
          [CREATE_OR_MODIFY_OBJECT_PARAMETER]: {
            displayName: "Chose a manager to modify or create a new one",
            description: "Description",
            conditionalOverrides: [{
              type: "visibility",
              condition: {
                type: "group",
                name: "supervisors",
              },
            }],
          },
        },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-or-modify-employee": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addOrModifyObjectRuleV2": {
                            "objectToModify": "objectToCreateOrModifyParameter",
                            "propertyValues": {
                              "managedBy": {
                                "parameterId": "managedBy",
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
                        "managedBy": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToCreateOrModifyParameter",
                                  "propertyTypeId": "managedBy",
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
                        "objectToCreateOrModifyParameter": {
                          "conditionalOverrides": [
                            {
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
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "supervisors",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "editable": {},
                                      "type": "editable",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
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
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-or-modify-employee",
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
                      "displayName": "Create or Modify Employee",
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
                        "com.palantir.employee",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToCreateOrModifyParameter",
                      "objectToCreateOrModifyParameter",
                      "managedBy",
                    ],
                    "parameters": {
                      "managedBy": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ManagedBy",
                          "typeClasses": [],
                        },
                        "id": "managedBy",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectToCreateOrModifyParameter": {
                        "displayMetadata": {
                          "description": "Description",
                          "displayName": "Chose a manager to modify or create a new one",
                          "typeClasses": [],
                        },
                        "id": "objectToCreateOrModifyParameter",
                        "type": {
                          "objectReference": {
                            "maybeCreateObjectOption": {
                              "autoGenerated": {},
                              "type": "autoGenerated",
                            },
                            "objectTypeId": "com.palantir.employee",
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
              "com.palantir.modify-object-employee": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "managedBy": {
                                "parameterId": "managedBy",
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
                        "managedBy": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "managedBy",
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
                        "objectToModifyParameter": {
                          "conditionalOverrides": [
                            {
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
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "supervisors",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "editable": {},
                                      "type": "editable",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
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
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-employee",
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
                      "displayName": "Modify Employee",
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
                        "com.palantir.employee",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToModifyParameter",
                      "objectToModifyParameter",
                      "managedBy",
                    ],
                    "parameters": {
                      "managedBy": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ManagedBy",
                          "typeClasses": [],
                        },
                        "id": "managedBy",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectToModifyParameter": {
                        "displayMetadata": {
                          "description": "Description",
                          "displayName": "Chose a manager to modify",
                          "typeClasses": [],
                        },
                        "id": "objectToModifyParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.employee",
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
              "com.palantir.employee": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.employee",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "managedBy": {
                            "column": "managedBy",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.employee",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.employee",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "Employee",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "Employees",
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
                        "description": "dummy",
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
                    "managedBy": {
                      "apiName": "managedBy",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "ManagedBy",
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
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("OAC defined object references as parameters are properly defined", () => {
      // This test defines an action that creates an OAC-defined employee object type and also adds an additional parameter
      // for an objectReference to a manager object type that is also defined in OAC. The action shows how you can use this
      // objectReference parameter elsewhere in the action - in this case we are prefilling the managedBy property to be the
      // id of the selected manager object type.
      const employeeObject = defineObject({
        apiName: "employee",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          "id": { type: "string", displayName: "ID", description: "dummy" },
          "managedBy": { type: "string" },
        },
      });

      const managerObject = defineObject({
        apiName: "manager",
        displayName: "Manager",
        pluralDisplayName: "Managers",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          "id": { type: "string", displayName: "ID", description: "dummy" },
        },
        editsEnabled: true,
      });

      defineCreateObjectAction({
        objectType: employeeObject,
        parameterOrdering: ["myManager", "id", "managedBy"],
        parameterConfiguration: {
          "myManager": {
            customParameterType: {
              type: "objectReference",
              objectReference: {
                objectTypeId: managerObject.apiName,
              },
            },
          },
          "managedBy": {
            defaultValue: {
              type: "objectParameterPropertyValue",
              objectParameterPropertyValue: {
                parameterId: "myManager",
                propertyTypeId: "id",
              },
            },
          },
        },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-employee": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.employee",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "managedBy": {
                                "parameterId": "managedBy",
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
                        "managedBy": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "myManager",
                                  "propertyTypeId": "id",
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
                        "myManager": {
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
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-employee",
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
                      "displayName": "Create Employee",
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
                        "com.palantir.employee",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "myManager",
                      "id",
                      "managedBy",
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
                      "managedBy": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ManagedBy",
                          "typeClasses": [],
                        },
                        "id": "managedBy",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "myManager": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "MyManager",
                          "typeClasses": [],
                        },
                        "id": "myManager",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.manager",
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
              "com.palantir.employee": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.employee",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "managedBy": {
                            "column": "managedBy",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.employee",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.employee",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "Employee",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "Employees",
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
                        "description": "dummy",
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
                    "managedBy": {
                      "apiName": "managedBy",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "ManagedBy",
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
              },
              "com.palantir.manager": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.manager",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.manager",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": true,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.manager",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "Manager",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "Managers",
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
                        "description": "dummy",
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
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "id",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Simple interface actions (without object types) are properly defined", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: "string",
        },
      });
      const createAction = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
      });
      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
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
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
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
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
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
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
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
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Interface actions with customizations are properly defined", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: "string",
          property2: "string",
        },
      });
      const createAction = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        apiName: "custom-api-name-1",
        displayName: "Custom Create Action",
        status: "experimental",
        excludedProperties: ["property2"],
      });
      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        apiName: "custom-api-name-2",
        displayName: "Custom Modify Action",
        status: "experimental",
        excludedProperties: ["property2"],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.custom-api-name-1": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
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
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.custom-api-name-1",
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
                      "displayName": "Custom Create Action",
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
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
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
                      "experimental": {},
                      "type": "experimental",
                    },
                  },
                },
              },
              "com.palantir.custom-api-name-2": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
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
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.custom-api-name-2",
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
                      "displayName": "Custom Modify Action",
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
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
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
                      "experimental": {},
                      "type": "experimental",
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
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
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
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
        properties: {
          "name": {
            type: "string",
            description: "The name of the test object",
          },
          "id": {
            type: "string",
            displayName: "ID",
            description: "The ID of the test object",
          },
        },
      });
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        actionLevelValidation: [{
          condition: {
            type: "group",
            name: "testGroup",
          },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                                "operator": "INTERSECTS",
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
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
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
                        "name": {
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
                      },
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.sampleObject",
                      ],
                      "typeGroups": [],
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
                    "datasourceName": "com.palantir.sampleObject",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
        properties: {
          "name": {
            type: "string",
            description: "The name of the test object",
          },
          "id": {
            type: "string",
            displayName: "ID",
            description: "The ID of the test object",
          },
        },
      });
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        actionLevelValidation: [{
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
            },
          },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                        "name": {
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
                      },
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.sampleObject",
                      ],
                      "typeGroups": [],
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
                    "datasourceName": "com.palantir.sampleObject",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Array property validation is correctly structured for actions", () => {
      const objectWithArrays = defineObject({
        apiName: "objectWithArrays",
        displayName: "Object With Arrays",
        primaryKeyPropertyApiName: "id",
        titlePropertyApiName: "id",
        pluralDisplayName: "Objects With Arrays",
        properties: {
          "id": { type: "string", displayName: "ID" },
          "tags": { type: "string", array: true, displayName: "Tags" },
          "numbers": { type: "integer", array: true, displayName: "Numbers" },
          "singleValue": { type: "string", displayName: "Single Value" },
        },
      });

      const createAction = defineCreateObjectAction({
        objectType: objectWithArrays,
      });
      const modifyAction = defineModifyObjectAction({
        objectType: objectWithArrays,
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-object-with-arrays": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.objectWithArrays",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "numbers": {
                                "parameterId": "numbers",
                                "type": "parameterId",
                              },
                              "singleValue": {
                                "parameterId": "singleValue",
                                "type": "parameterId",
                              },
                              "tags": {
                                "parameterId": "tags",
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
                        "numbers": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "numericInput": {},
                                "type": "numericInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "range": {
                                  "range": {},
                                  "type": "range",
                                },
                                "type": "range",
                              },
                              "required": {
                                "listLengthValidation": {
                                  "maxLength": undefined,
                                  "minLength": undefined,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                        "singleValue": {
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
                        "tags": {
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
                                "listLengthValidation": {
                                  "maxLength": undefined,
                                  "minLength": undefined,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-object-with-arrays",
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
                      "displayName": "Create Object With Arrays",
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
                        "com.palantir.objectWithArrays",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "id",
                      "tags",
                      "numbers",
                      "singleValue",
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
                      "numbers": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Numbers",
                          "typeClasses": [],
                        },
                        "id": "numbers",
                        "type": {
                          "integerList": {},
                          "type": "integerList",
                        },
                      },
                      "singleValue": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Single Value",
                          "typeClasses": [],
                        },
                        "id": "singleValue",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "tags": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Tags",
                          "typeClasses": [],
                        },
                        "id": "tags",
                        "type": {
                          "stringList": {},
                          "type": "stringList",
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
              "com.palantir.modify-object-object-with-arrays": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "numbers": {
                                "parameterId": "numbers",
                                "type": "parameterId",
                              },
                              "singleValue": {
                                "parameterId": "singleValue",
                                "type": "parameterId",
                              },
                              "tags": {
                                "parameterId": "tags",
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
                        "numbers": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "numbers",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "numericInput": {},
                                "type": "numericInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "range": {
                                  "range": {},
                                  "type": "range",
                                },
                                "type": "range",
                              },
                              "required": {
                                "listLengthValidation": {
                                  "maxLength": undefined,
                                  "minLength": undefined,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                        "objectToModifyParameter": {
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
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "singleValue": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "singleValue",
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
                        "tags": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "tags",
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
                                "listLengthValidation": {
                                  "maxLength": undefined,
                                  "minLength": undefined,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-object-with-arrays",
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
                      "displayName": "Modify Object With Arrays",
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
                        "com.palantir.objectWithArrays",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToModifyParameter",
                      "tags",
                      "numbers",
                      "singleValue",
                    ],
                    "parameters": {
                      "numbers": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Numbers",
                          "typeClasses": [],
                        },
                        "id": "numbers",
                        "type": {
                          "integerList": {},
                          "type": "integerList",
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
                            "objectTypeId": "com.palantir.objectWithArrays",
                          },
                          "type": "objectReference",
                        },
                      },
                      "singleValue": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Single Value",
                          "typeClasses": [],
                        },
                        "id": "singleValue",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "tags": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Tags",
                          "typeClasses": [],
                        },
                        "id": "tags",
                        "type": {
                          "stringList": {},
                          "type": "stringList",
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
              "com.palantir.objectWithArrays": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.objectWithArrays",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "numbers": {
                            "column": "numbers",
                            "type": "column",
                          },
                          "singleValue": {
                            "column": "singleValue",
                            "type": "column",
                          },
                          "tags": {
                            "column": "tags",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.objectWithArrays",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.objectWithArrays",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "Object With Arrays",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "Objects With Arrays",
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
                    "numbers": {
                      "apiName": "numbers",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Numbers",
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
                        "array": {
                          "subtype": {
                            "integer": {},
                            "type": "integer",
                          },
                        },
                        "type": "array",
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
                    "singleValue": {
                      "apiName": "singleValue",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Single Value",
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
                    "tags": {
                      "apiName": "tags",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Tags",
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
                        "array": {
                          "subtype": {
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
                        "type": "array",
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
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Action sections are properly defined", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          "name": { type: "string" },
          "id": { type: "string" },
        },
      });
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        sections: [
          {
            id: "section1",
            displayName: "Section 1",
            parameters: ["id"],
            description: "Description for Section 1",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "testGroup",
                },
              },
            ],
          },
        ],
      });
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                        "name": {
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
                      },
                      "sectionValidations": {
                        "section1": {
                          "conditionalOverrides": [
                            {
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
                                  "operator": "INTERSECTS",
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
                              "sectionBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "hidden": {},
                                      "type": "hidden",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultDisplayMetadata": {
                            "visibility": {
                              "type": "visible",
                              "visible": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.sampleObject",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [
                      {
                        "parameterId": "name",
                        "type": "parameterId",
                      },
                      {
                        "sectionId": "section1",
                        "type": "sectionId",
                      },
                    ],
                    "parameterOrdering": [
                      "name",
                      "id",
                    ],
                    "parameters": {
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
                    "sections": {
                      "section1": {
                        "content": [
                          {
                            "parameterId": "id",
                            "type": "parameterId",
                          },
                        ],
                        "displayMetadata": {
                          "collapsedByDefault": false,
                          "columnCount": 1,
                          "description": "Description for Section 1",
                          "displayName": "Section 1",
                          "showTitleBar": true,
                        },
                        "id": "section1",
                      },
                    },
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
                    "datasourceName": "com.palantir.sampleObject",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
                  "titlePropertyTypeRid": "name",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Action section parameters must exist", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          "name": { type: "string" },
          "id": { type: "string" },
        },
      });
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          sections: [
            {
              id: "section1",
              displayName: "Section 1",
              parameters: ["foo"],
            },
          ],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Parameters ["foo"] were referenced but not defined]`,
      );
    });

    it("Custom parameter ordering is properly defined", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          "name": { type: "string" },
          "id": { type: "string" },
          "foo": { type: "string" },
        },
      });
      expect(() => {
        const createBadAction = defineCreateObjectAction({
          objectType: sampleObject,
          parameterOrdering: ["foo", "id"],
          excludedProperties: ["id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for create-object-sample-object does not match expected parameters. Extraneous parameters in ordering: {id}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineModifyObjectAction({
          objectType: sampleObject,
          // primary keys should not be in modify action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for modify-object-sample-object does not match expected parameters. Extraneous parameters in ordering: {id}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineCreateOrModifyObjectAction({
          objectType: sampleObject,
          // primary keys should not be in create-or-modify action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for create-or-modify-sample-object does not match expected parameters. Extraneous parameters in ordering: {id}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineCreateObjectAction({
          objectType: sampleObject,
          nonParameterMappings: {
            "foo": {
              type: "currentUser",
            },
          },
          // non-parameter mapped properties should not be in action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for create-object-sample-object does not match expected parameters. Extraneous parameters in ordering: {foo}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineModifyObjectAction({
          objectType: sampleObject,
          nonParameterMappings: {
            "foo": {
              type: "currentUser",
            },
          },
          // non-parameter mapped properties should not be in action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for modify-object-sample-object does not match expected parameters. Extraneous parameters in ordering: {foo,id}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineCreateOrModifyObjectAction({
          objectType: sampleObject,
          nonParameterMappings: {
            "foo": {
              type: "currentUser",
            },
          },
          // non-parameter mapped properties should not be in action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for create-or-modify-sample-object does not match expected parameters. Extraneous parameters in ordering: {foo,id}, Missing parameters in ordering: {name}]`,
      );
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        parameterOrdering: ["foo", "name", "id"],
        parameterConfiguration: {
          "name": {
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "parameter",
                  parameterId: "foo",
                  matches: {
                    type: "staticValue",
                    staticValue: {
                      type: "string",
                      string: "foo",
                    },
                  },
                },
              },
            ],
          },
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
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
                              "foo": {
                                "parameterId": "foo",
                                "type": "parameterId",
                              },
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
                        "foo": {
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
                        "name": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "parameterId": "foo",
                                    "type": "parameterId",
                                  },
                                  "operator": "EQUALS",
                                  "right": {
                                    "staticValue": {
                                      "string": "foo",
                                      "type": "string",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "editable": {},
                                      "type": "editable",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
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
                      },
                      "sectionValidations": {},
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
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.sampleObject",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "foo",
                      "name",
                      "id",
                    ],
                    "parameters": {
                      "foo": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Foo",
                          "typeClasses": [],
                        },
                        "id": "foo",
                        "type": {
                          "string": {},
                          "type": "string",
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
              "actionTypes": {},
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
                          "foo": {
                            "column": "foo",
                            "type": "column",
                          },
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
                    "datasourceName": "com.palantir.sampleObject",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
                    "foo": {
                      "apiName": "foo",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Foo",
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
                  "titlePropertyTypeRid": "name",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });
    it("Interface actions validate SPT existence", () => {
      const spt = defineSharedPropertyType({
        apiName: "spt",
        type: "string",
      });
      const importedInterface: InterfaceType = {
        "apiName": "com.palantir.other.ontology.event.Event",
        "displayMetadata": {
          "displayName": "Event",
          "description": "Event",
          "icon": {
            "type": "blueprint",
            "blueprint": {
              "color": "#4C90F0",
              "locator": "timeline-events",
            },
          },
        },
        "extendsInterfaces": [],
        "links": [],
        "status": {
          "type": "active",
          "active": {},
        },
        "propertiesV2": {
          "com.palantir.other.ontology.types.id": {
            "required": true,
            "sharedPropertyType": {
              "displayName": "Id",
              "apiName": "com.palantir.other.ontology.types.id",
              "type": "string",
              "nonNameSpacedApiName": "id",
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
              "__type": "SHARED_PROPERTY_TYPE",
            },
          },
        },
        "searchable": false,
        "__type": "INTERFACE_TYPE",
      } as unknown as InterfaceType;
      importOntologyEntity(importedInterface);
      const interfaceType = defineInterface({
        apiName: "interfaceType",
        properties: {
          spt,
        },
        extends: importedInterface,
      });
      expect(() =>
        defineAction({
          apiName: "action",
          displayName: "action",
          status: "active",
          parameters: [{
            id: "interfaceObjectToModifyParameter",
            displayName: "Interface object to modify",
            type: {
              type: "interfaceReference",
              interfaceReference: {
                interfaceTypeRid: interfaceType.apiName,
              },
            },
            validation: {
              required: true,
              allowedValues: { type: "interfaceObjectQuery" },
            },
          }, {
            id: "sptParameter",
            displayName: "SPT",
            type: "string",
            validation: {
              required: true,
              allowedValues: { type: "text" },
            },
          }, {
            id: "otherParameter",
            displayName: "Other parameter",
            type: "string",
            validation: {
              required: true,
              allowedValues: { type: "text" },
            },
          }],
          rules: [{
            type: "modifyInterfaceRule",
            modifyInterfaceRule: {
              interfaceObjectToModifyParameter:
                "interfaceObjectToModifyParameter",
              sharedPropertyValues: {
                spt: {
                  type: "parameterId",
                  parameterId: "sptParameter",
                },
                "com.palantir.other.invalid.spt": {
                  type: "staticValue",
                  staticValue: {
                    type: "double",
                    double: 4,
                  },
                },
                other: {
                  type: "parameterId",
                  parameterId: "otherParameter",
                },
              },
            },
          }],
        })
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Shared property type com.palantir.other.invalid.spt does not exist in interface type com.palantir.interfaceType]`,
      );
      expect(() =>
        defineCreateInterfaceObjectAction({ interfaceType: interfaceType })
      ).not
        .toThrow();
    });
    it("Interface actions validate SPT existence on the interface", () => {
      expect(() => {
        const spt = defineSharedPropertyType({
          apiName: "spt",
          type: "string",
        });
        const pulseRepetitionIntervalSecs: SharedPropertyType = {
          "apiName": "com.palantir.other.ontology.pulseRepetitionIntervalSecs",
          "displayName": "Pulse Repetition Interval (s)",
          "description": "Pulse Repetition Interval in seconds.",
          "type": "double",
          "nonNameSpacedApiName": "pulseRepetitionIntervalSecs",
          "typeClasses": [],
          "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
        } as unknown as SharedPropertyType;
        importOntologyEntity(pulseRepetitionIntervalSecs);
        const interfaceType = defineInterface({
          apiName: "interfaceType",
          properties: {
            spt,
          },
        });
        const action = defineAction({
          apiName: "action",
          displayName: "action",
          status: "active",
          parameters: [{
            id: "interfaceObjectToModifyParameter",
            displayName: "Interface object to modify",
            type: {
              type: "interfaceReference",
              interfaceReference: {
                interfaceTypeRid: interfaceType.apiName,
              },
            },
            validation: {
              required: true,
              allowedValues: { type: "interfaceObjectQuery" },
            },
          }, {
            id: "sptParameter",
            displayName: "SPT",
            type: "string",
            validation: {
              required: true,
              allowedValues: { type: "text" },
            },
          }],
          rules: [{
            type: "modifyInterfaceRule",
            modifyInterfaceRule: {
              interfaceObjectToModifyParameter:
                "interfaceObjectToModifyParameter",
              sharedPropertyValues: {
                spt: {
                  type: "parameterId",
                  parameterId: "sptParameter",
                },
                [pulseRepetitionIntervalSecs.apiName]: {
                  type: "staticValue",
                  staticValue: {
                    type: "double",
                    double: 4,
                  },
                },
              },
            },
          }],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Shared property type com.palantir.other.ontology.pulseRepetitionIntervalSecs does not exist in interface type com.palantir.interfaceType]`,
      );
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
          "importedOntology": {
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
              "com.palantir.core.ontology.types.id": {
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
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.myInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.myInterface",
                  "displayMetadata": {
                    "description": "myInterface",
                    "displayName": "myInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
          "importedOntology": {
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
              "com.other.package.spt": {
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
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.myInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.myInterface",
                  "displayMetadata": {
                    "description": "myInterface",
                    "displayName": "myInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
          properties: { "bar": { type: "string" } },
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

        /** @type {import('@osdk/maker').InterfaceType} */
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

        /** @type {import('@osdk/maker').ObjectType} */
        const myObject_base: ObjectType = {
          "titlePropertyApiName": "bar",
          "displayName": "My Object",
          "pluralDisplayName": "myObjects",
          "apiName": "com.my.package.myObject",
          "primaryKeyPropertyApiName": "bar",
          "properties": [
            {
              "type": "string",
              "apiName": "bar",
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

        /** @type {import('@osdk/maker').SharedPropertyType} */
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

        /** @type {import('@osdk/maker').InterfaceType} */
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
        properties: {
          "property1": { type: "string", displayName: "property1" },
          "property2": { type: "string", displayName: "property2" },
        },
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
          "importedOntology": {
            "actionTypes": {},
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
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.childInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.childInterface",
                  "displayMetadata": {
                    "description": "childInterface",
                    "displayName": "childInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
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
                  "apiName": "com.palantir.parentInterface",
                  "displayMetadata": {
                    "description": "parentInterface",
                    "displayName": "parentInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
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
                    "datasourceName": "com.palantir.objectDef",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
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
                      "linksV2": {},
                      "properties": {
                        "com.palantir.iProperty1": {
                          "propertyTypeRid": "property1",
                        },
                        "com.palantir.iProperty2": {
                          "propertyTypeRid": "property2",
                        },
                      },
                      "propertiesV2": {},
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
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
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
          `addDependency("com.palantir", new URL(import.meta.url).pathname);`,
        );

      fs.rmSync(path.join(generatedDir, ".."), {
        recursive: true,
        force: true,
      });
    });
  });
});
