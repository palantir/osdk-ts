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
    defineOntology("myNamespace", () => {});
  });

  describe("Interfaces", () => {
    it("doesn't let you define the same interface twice", () => {
      defineInterface({ apiName: "Foo" });
      expect(() => {
        defineInterface({ apiName: "Foo" });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Interface Foo already exists]`,
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
              "Foo": {
                "interfaceType": {
                  "allExtendsInterfaces": [],
                  "allLinks": [],
                  "allProperties": [],
                  "apiName": "Foo",
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
                      "apiName": "foo",
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
            "sharedPropertyTypes": {
              "foo": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "foo",
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
                  "typeClasses": [],
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
              "foo": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "foo",
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
                  "typeClasses": [],
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
          `[Error: Invariant failed: Shared property type foo already exists]`,
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

    it("many to many fails", () => {
      expect(() => {
        // @ts-expect-error
        defineInterfaceLinkConstraint({
          from: { type: a, many: "manyLinks" }, // need the any to be sure it fails
          to: { type: b, many: "manyLinks" },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: many to many is not supported]`,
      );
    });

    it("does not allow passing both one and many", () => {
      expect(() => {
        defineInterfaceLinkConstraint({
          // @ts-expect-error
          from: { type: a, one: "singleLink", many: "manyLinks" }, // need the any to be sure it fails
          to: { type: b, one: "singleLink" },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: from should have either one or many, not both]`,
      );

      expect(() => {
        defineInterfaceLinkConstraint({
          from: { type: a, one: "singleLink" }, // need the any to be sure it fails
          // @ts-expect-error
          to: { type: b, one: "singleLink", many: "manyLinks" },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: to should have either one or many, not both]`,
      );
    });

    it("single to single works", () => {
      expect(a).not.toBeUndefined();
      defineInterfaceLinkConstraint({
        from: { type: a, one: "singleLink" },
        to: { type: b, one: "singleLink" },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "A": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "apiName": "A",
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
                      "interfaceType": "B",
                      "type": "interfaceType",
                    },
                    "metadata": {
                      "apiName": "singleLink",
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
            "B": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "apiName": "B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [
                  {
                    "cardinality": "SINGLE",
                    "linkedEntityTypeId": {
                      "interfaceType": "A",
                      "type": "interfaceType",
                    },
                    "metadata": {
                      "apiName": "singleLink",
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
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("many to single works", () => {
      defineInterfaceLinkConstraint({
        from: { type: a, many: "manyLinks" },
        to: { type: b, one: "singleLink" },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "A": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "apiName": "A",
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
                      "interfaceType": "B",
                      "type": "interfaceType",
                    },
                    "metadata": {
                      "apiName": "manyLinks",
                      "description": "manyLinks",
                      "displayName": "manyLinks",
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
            "B": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "apiName": "B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [
                  {
                    "cardinality": "SINGLE",
                    "linkedEntityTypeId": {
                      "interfaceType": "A",
                      "type": "interfaceType",
                    },
                    "metadata": {
                      "apiName": "singleLink",
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
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("single to many works", () => {
      defineInterfaceLinkConstraint({
        from: { type: a, one: "singleLink" },
        to: { type: b, many: "manyLinks" },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "A": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "apiName": "A",
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
                      "interfaceType": "B",
                      "type": "interfaceType",
                    },
                    "metadata": {
                      "apiName": "singleLink",
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
            "B": {
              "interfaceType": {
                "allExtendsInterfaces": [],
                "allLinks": [],
                "allProperties": [],
                "apiName": "B",
                "displayMetadata": {
                  "description": "B",
                  "displayName": "B",
                  "icon": undefined,
                },
                "extendsInterfaces": [],
                "links": [
                  {
                    "cardinality": "MANY",
                    "linkedEntityTypeId": {
                      "interfaceType": "A",
                      "type": "interfaceType",
                    },
                    "metadata": {
                      "apiName": "manyLinks",
                      "description": "manyLinks",
                      "displayName": "manyLinks",
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
        `[Error: Invariant failed: Shared property type foo already exists]`,
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
    });

    expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
      {
        "blockPermissionInformation": {
          "actionTypes": {},
          "linkTypes": {},
          "objectTypes": {},
        },
        "interfaceTypes": {
          "FooInterface": {
            "interfaceType": {
              "allExtendsInterfaces": [],
              "allLinks": [],
              "allProperties": [],
              "apiName": "FooInterface",
              "displayMetadata": {
                "description": "Foo Interface",
                "displayName": "Foo Interface",
                "icon": undefined,
              },
              "extendsInterfaces": [],
              "links": [],
              "properties": [
                {
                  "aliases": [],
                  "apiName": "fooSpt",
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
        "sharedPropertyTypes": {
          "fooSpt": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "fooSpt",
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
              "typeClasses": [],
              "valueType": undefined,
            },
          },
        },
      }
    `);
  });
});
