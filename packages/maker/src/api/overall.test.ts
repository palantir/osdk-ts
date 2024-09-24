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
import { defineInterface } from "./defineInterface.js";
import { defineInterfaceLinkConstraint } from "./defineInterfaceLinkConstraint.js";
import { defineOntology, dumpOntologyFullMetadata } from "./defineOntology.js";
import { defineSharedPropertyType } from "./defineSpt.js";
import type { InterfaceType } from "./types.js";

describe("Ontology Defining", () => {
  beforeEach(() => {
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

        expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
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

        expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
          {
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
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

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
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

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
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

    expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
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
