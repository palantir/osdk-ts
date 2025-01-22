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

import { beforeEach, describe, expect, it } from "vitest";
import { importSharedPropertyType } from "./defineImportSpt.js";
import { defineInterface } from "./defineInterface.js";
import { defineInterfaceLinkConstraint } from "./defineInterfaceLinkConstraint.js";
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
                  "apiName": "com.palantir.Foo",
                  "displayMetadata": {
                    "description": "Foo",
                    "displayName": "Foo",
                    "icon": undefined,
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [
                    {
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
                  ],
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
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
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
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
                "properties": [
                  {
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
                ],
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
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [
                  {
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
                ],
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
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
                "properties": [
                  {
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
                ],
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
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [
                  {
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
                ],
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
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
                "apiName": "com.palantir.B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [],
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
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
                "apiName": "com.palantir.B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [],
                "properties": [],
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
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
              "properties": [
                {
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
              ],
              "status": {
                "active": {},
                "type": "active",
              },
            },
          },
        },
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
                "blockPermissionInformation": {
                  "actionTypes": {},
                  "linkTypes": {},
                  "objectTypes": {},
                },
                "interfaceTypes": {},
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
              "apiName": "com.palantir.interface",
              "displayMetadata": {
                "description": "interface",
                "displayName": "interface",
                "icon": undefined,
              },
              "extendsInterfaces": [],
              "links": [],
              "properties": [
                {
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
                {
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
              ],
              "status": {
                "active": {},
                "type": "active",
              },
            },
          },
        },
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
    it("Objects properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "foo",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeys: ["bar"],
        properties: [{ apiName: "bar", type: "string", displayName: "Bar" }],
      });

      expect(dumpOntologyFullMetadata().blockData).toMatchInlineSnapshot(`
        {
         "blockPermissionInformation": {
           "actionTypes": {},
           "linkTypes": {},
           "objectTypes": {},
         },
         "interfaceTypes": {},
         "objectTypes": {
           "foo": {
             "datasources": [
               {
                 "datasource": {
                   "datasetV2": {
                     "datasetRid": "foo",
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
                 "rid": "ri.ontology.main.datasource.foo",
               },
             ],
             "objectType": {
               "allImplementsInterfaces": {},
               "apiName": "foo",
               "displayMetadata": {
                 "description": undefined,
                 "displayName": "",
                 "groupDisplayName": undefined,
                 "icon": {
                   "blueprint": {
                     "color": "blue",
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
               "titlePropertyTypeRid": "foo",
             },
           },
         },
         "sharedPropertyTypes": {},
       }
        `);
    });
  });
});
