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

import type { SeriesValueMetadata_numeric } from "@osdk/client.unstable";
import { beforeEach, describe, expect, it } from "vitest";
import {
  defineAction,
  defineCreateAction,
  defineModifyAction,
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
import type {
  InterfaceType,
  InterfaceTypeStatus_deprecated,
  InterfaceTypeStatus_experimental,
} from "./types.js";

describe("Ontology Defining", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {});
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
    it("Correctly serializes a value type", async () => {
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
    defineOntology("com.palantir.", () => {});
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
                        "provenance": undefined,
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
                  "provenance": undefined,
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
                  "provenance": undefined,
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
                      "provenance": undefined,
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
                      "provenance": undefined,
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
                "provenance": undefined,
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
                "provenance": undefined,
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
                        "provenance": undefined,
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
                  "provenance": undefined,
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
        extends: ["parentInterface"],
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
                "apiName": "com.palantir.childInterface",
                "displayMetadata": {
                  "description": "childInterface",
                  "displayName": "childInterface",
                  "icon": undefined,
                },
                "extendsInterfaces": [
                  "parentInterface",
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
                      "provenance": undefined,
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
                      "provenance": undefined,
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
                "provenance": undefined,
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
                "provenance": undefined,
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
                    "provenance": undefined,
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
              "provenance": undefined,
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
                      "provenance": undefined,
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

  it("Adds imported SPTs only to the interface definition", () => {
    const regularSpt = defineSharedPropertyType({
      apiName: "foo",
      type: { type: "marking", markingType: "CBAC" },
    });

    const importedSpt = importSharedPropertyType({
      apiName: "bar",
      typeHint: "string",
      packageName: "com.palantir.bar",
    });

    defineInterface({
      apiName: "interface",
      properties: { foo: regularSpt, bar: importedSpt },
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
                "com.palantir.bar.bar": {
                  "required": true,
                  "sharedPropertyType": {
                    "aliases": [],
                    "apiName": "com.palantir.bar.bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "com.palantir.bar.bar",
                      "visibility": "NORMAL",
                    },
                    "gothamMapping": undefined,
                    "indexedForSearch": true,
                    "provenance": undefined,
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
                "com.palantir.foo": {
                  "required": true,
                  "sharedPropertyType": {
                    "aliases": [],
                    "apiName": "com.palantir.foo",
                    "baseFormatter": undefined,
                    "dataConstraints": {
                      "nullability": undefined,
                      "nullabilityV2": {
                        "noEmptyCollections": true,
                        "noNulls": true,
                      },
                      "propertyTypeConstraints": [],
                    },
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "foo",
                      "visibility": "NORMAL",
                    },
                    "gothamMapping": undefined,
                    "indexedForSearch": true,
                    "provenance": undefined,
                    "type": {
                      "marking": {
                        "markingType": "CBAC",
                      },
                      "type": "marking",
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
              "dataConstraints": {
                "nullability": undefined,
                "nullabilityV2": {
                  "noEmptyCollections": true,
                  "noNulls": true,
                },
                "propertyTypeConstraints": [],
              },
              "displayMetadata": {
                "description": undefined,
                "displayName": "foo",
                "visibility": "NORMAL",
              },
              "gothamMapping": undefined,
              "indexedForSearch": true,
              "provenance": undefined,
              "type": {
                "marking": {
                  "markingType": "CBAC",
                },
                "type": "marking",
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

    expect(dumpOntologyFullMetadata().importedTypes).toMatchInlineSnapshot(`
       {
         "sharedPropertyTypes": [
           {
             "apiName": "bar",
             "packageName": "com.palantir.bar",
           },
         ],
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
                    "provenance": undefined,
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
              "provenance": undefined,
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

  it("nested TimeSeries property types must exist", () => {
    function createTimeSeries() {
      const seriesValueMetadata: SeriesValueMetadata_numeric = {
        type: "numeric",
        numeric: {
          defaultInternalInterpolation: {
            type: "propertyType",
            propertyType: "bar",
          },
        },
      };
      const spt = defineSharedPropertyType({
        apiName: "foo",
        type: {
          type: "timeSeries",
          seriesValueMetadata: seriesValueMetadata,
          sensorLinkTypeId: "sensorId",
        },
      });
    }
    expect(() => {
      createTimeSeries();
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Property type bar in TimeSeries defaultInternalInterpolation does not exist.]`,
    );
  });

  it("TimeSeries fields properly set", () => {
    const bar = defineSharedPropertyType({
      apiName: "bar",
      type: "string",
    });
    const seriesValueMetadata: SeriesValueMetadata_numeric = {
      type: "numeric",
      numeric: {
        defaultInternalInterpolation: {
          type: "propertyType",
          propertyType: "bar",
        },
      },
    };
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: {
        type: "timeSeries",
        seriesValueMetadata: seriesValueMetadata,
        sensorLinkTypeId: "sensorId",
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
                    "provenance": undefined,
                    "type": {
                      "experimentalTimeDependentV1": {
                        "sensorLinkTypeId": "sensorId",
                        "seriesValueMetadata": {
                          "numeric": {
                            "defaultInternalInterpolation": {
                              "propertyType": "bar",
                              "type": "propertyType",
                            },
                          },
                          "type": "numeric",
                        },
                      },
                      "type": "experimentalTimeDependentV1",
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
          "com.palantir.bar": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "com.palantir.bar",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "com.palantir.bar",
                "visibility": "NORMAL",
              },
              "gothamMapping": undefined,
              "indexedForSearch": true,
              "provenance": undefined,
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
              "provenance": undefined,
              "type": {
                "experimentalTimeDependentV1": {
                  "sensorLinkTypeId": "sensorId",
                  "seriesValueMetadata": {
                    "numeric": {
                      "defaultInternalInterpolation": {
                        "propertyType": "bar",
                        "type": "propertyType",
                      },
                    },
                    "type": "numeric",
                  },
                },
                "type": "experimentalTimeDependentV1",
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

  it("Time series object properly defined", () => {
    const seriesValueMetadata: SeriesValueMetadata_numeric = {
      type: "numeric",
      numeric: {
        defaultInternalInterpolation: {
          type: "propertyType",
          propertyType: "fizz",
        },
      },
    };

    const object = defineObject({
      titlePropertyApiName: "buzz",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeys: ["buzz"],
      properties: [{ apiName: "buzz", type: "string", displayName: "Buzz" }, {
        apiName: "bar",
        type: {
          type: "timeSeries",
          seriesValueMetadata: seriesValueMetadata,
          sensorLinkTypeId: "sensorId",
        },
        displayName: "Bar",
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
                "buzz",
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
                    "experimentalTimeDependentV1": {
                      "sensorLinkTypeId": "sensorId",
                      "seriesValueMetadata": {
                        "numeric": {
                          "defaultInternalInterpolation": {
                            "propertyType": "fizz",
                            "type": "propertyType",
                          },
                        },
                        "type": "numeric",
                      },
                    },
                    "type": "experimentalTimeDependentV1",
                  },
                  "typeClasses": [],
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
                  "typeClasses": [],
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
        },
        "sharedPropertyTypes": {},
      }
    `);
  });

  it("defaults interface status to active", () => {
    const result = defineInterface({ apiName: "Foo" });
    expect(result.status).toEqual({ type: "active", active: {} });
  });

  it("sets interface status as experimental from opts as typed", () => {
    const experimentalStatus = {
      type: "experimental",
      experimental: {},
    } as InterfaceTypeStatus_experimental;
    const result = defineInterface({
      apiName: "Foo",
      status: { type: "experimental" },
    });
    expect(result.status).toEqual(experimentalStatus);
  });

  it("sets interface status as deprecated from opts as typed", () => {
    const deprecatedStatus = {
      type: "deprecated",
      deprecated: {
        message: "foo",
        deadline: "foo",
      },
    } as InterfaceTypeStatus_deprecated;
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
          primaryKeys: ["bar"],
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
          primaryKeys: ["fizz"],
          properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Primary key properties fizz do not exist on object foo]`,
      );

      expect(() => {
        defineObject({
          titlePropertyApiName: "bar",
          displayName: "Foo",
          pluralDisplayName: "Foo",
          apiName: "foo",
          primaryKeys: ["bar"],
          properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
          implementsInterfaces: [{
            implements: sample,
            propertyMapping: [{ interfaceProperty: "foo", mapsTo: "fizz" }],
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
          primaryKeys: ["bar"],
          properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
          implementsInterfaces: [{
            implements: sample,
            propertyMapping: [{ interfaceProperty: "fizz", mapsTo: "bar" }, {
              interfaceProperty: "foo",
              mapsTo: "bar",
            }],
          }],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: \nOntology Definition Error: Interface property com.palantir.interface.fizz referenced in foo object does not exist\n]`,
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
        primaryKeys: ["bar"],
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
        implementsInterfaces: [{
          implements: sample,
          propertyMapping: [{ interfaceProperty: "foo", mapsTo: "bar" }],
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
                        "provenance": undefined,
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
                  "provenance": undefined,
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
        primaryKeys: ["bar"],
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeys: ["fizz"],
        properties: [{ apiName: "fizz", type: "string", displayName: "Fizz" }, {
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
      });

      defineLink({
        id: "fizzToFoo",
        one: {
          object: object,
          metadata: {
            displayMetadata: {
              displayName: "Foo",
              groupDisplayName: "",
              pluralDisplayName: "Foos",
              visibility: "NORMAL",
            },
            typeClasses: [],
            apiName: "fizzes",
          },
        },
        toMany: {
          object: otherObject,
          metadata: {
            displayMetadata: {
              displayName: "Fizz",
              groupDisplayName: "",
              pluralDisplayName: "Fizzes",
              visibility: "NORMAL",
            },
            typeClasses: [],
            apiName: "foos",
          },
        },
        manyForeignKeyProperty: "bar",
        cardinality: "OneToMany",
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
                  "cardinalityHint": "ONE_TO_ONE",
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
              "id": "fizzToFoo",
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
                  "typeClasses": [],
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
                  "typeClasses": [],
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
      }
        `);
    });

    it("Many To Many Links are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeys: ["bar"],
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeys: ["fizz"],
        properties: [{ apiName: "fizz", type: "string", displayName: "Fizz" }, {
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
      });

      defineLink({
        id: "fizzToFoo",
        many: {
          object: object,
          metadata: {
            displayMetadata: {
              displayName: "Foo",
              groupDisplayName: "",
              pluralDisplayName: "Foos",
              visibility: "NORMAL",
            },
            typeClasses: [],
            apiName: "fizzes",
          },
        },
        toMany: {
          object: otherObject,
          metadata: {
            displayMetadata: {
              displayName: "Fizz",
              groupDisplayName: "",
              pluralDisplayName: "Fizzes",
              visibility: "NORMAL",
            },
            typeClasses: [],
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
              "id": "fizzToFoo",
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
                  "typeClasses": [],
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
                  "typeClasses": [],
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
      }
        `);
    });

    it("Explicit datasource definitions are properly defined", () => {
      const datasetBackedObject = defineObject({
        titlePropertyApiName: "bar",
        displayName: "datasetBackedObject",
        pluralDisplayName: "datasetBackedObject",
        apiName: "foo",
        primaryKeys: ["bar"],
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
        datasource: { type: "dataset" },
      });

      const streamBackedObjectNoRetention = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "streamBackedObjectNoRetention",
        pluralDisplayName: "streamBackedObjectNoRetention",
        apiName: "fizz",
        primaryKeys: ["fizz"],
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
        primaryKeys: ["buzz"],
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
                  "typeClasses": [],
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
                  "typeClasses": [],
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
                  "typeClasses": [],
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
      }
        `);
    });

    it("Fail if stream retention period is not ISO 8601 compliant", () => {
      expect(() =>
        defineObject({
          titlePropertyApiName: "buzz",
          displayName: "streamBackedObjectWithRetention",
          pluralDisplayName: "streamBackedObjectWithRetention",
          apiName: "buzz",
          primaryKeys: ["buzz"],
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
        primaryKeys: ["bar"],
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
                      "typeClasses": [],
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
            "sharedPropertyTypes": [],
          },
        }
      `);
    });
  });

  describe("Actions", () => {
    it("Actions are properly defined", () => {
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
        primaryKeys: ["bar"],
        properties: [{
          apiName: "bar",
          type: "string",
          displayName: "Bar",
        }],
      });

      const createActionWithoutObjectType = defineCreateAction(
        exampleInterface,
        exampleObjectType,
      );

      const modifyAction = defineModifyAction(
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
                          "sharedPropertyValues": {
                            "com.palantir.property1": {
                              "parameterId": "property1",
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
                      "property1": {
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
                    "property1",
                  ],
                  "parameters": {
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
                    "property1": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "property1",
                        "typeClasses": [],
                      },
                      "id": "property1",
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
            "com.palantir.modify-example-interface-foo": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "modifyInterfaceRule": {
                          "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                          "sharedPropertyValues": {
                            "com.palantir.property1": {
                              "parameterId": "property1",
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
                      "property1": {
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
                    "property1",
                  ],
                  "parameters": {
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
                    "property1": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "property1",
                        "typeClasses": [],
                      },
                      "id": "property1",
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
          "interfaceTypes": {
            "com.palantir.exampleInterface": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
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
                      "provenance": undefined,
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
                "provenance": undefined,
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
          "sharedPropertyTypes": [],
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
      const createAction = defineCreateAction(exampleInterface);
      const modifyAction = defineModifyAction(exampleInterface);

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
                          "sharedPropertyValues": {
                            "com.palantir.property1": {
                              "parameterId": "property1",
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
                      "property1": {
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
                    "property1",
                  ],
                  "parameters": {
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
                    "property1": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "property1",
                        "typeClasses": [],
                      },
                      "id": "property1",
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
                              "parameterId": "property1",
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
                      "property1": {
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
                    "property1",
                  ],
                  "parameters": {
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
                    "property1": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "property1",
                        "typeClasses": [],
                      },
                      "id": "property1",
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
          "interfaceTypes": {
            "com.palantir.exampleInterface": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "allPropertiesV2": {},
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
                      "provenance": undefined,
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
                "provenance": undefined,
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
          "sharedPropertyTypes": [],
        },
      }
        `);
    });
  });
});
