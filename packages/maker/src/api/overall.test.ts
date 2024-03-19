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
import { defineOntology, dumpOntologyFullMetadata } from "./defineOntology.js";
import { defineSharedPropertyType } from "./defineSpt.js";

describe("Ontology Defining", () => {
  beforeEach(() => {
    defineOntology("myns", () => {});
  });

  describe("Interfaces", () => {
    it("doesnt let you define the same interface twice", () => {
      defineInterface("Foo", {});
      expect(() => {
        defineInterface("Foo", {});
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Interface Foo already exists]`,
      );
    });

    it("defaults displayName to apiName", () => {
      const result = defineInterface("Foo", {});
      expect(result.displayName).toBe("Foo");
    });

    it("defaults description to displayName", () => {
      const result = defineInterface("Foo", { displayName: "d" });
      expect(result.description).toBe("d");
    });

    it("defaults description to displayName to apiName", () => {
      const result = defineInterface("Foo", {});
      expect(result.description).toBe("Foo");
    });

    describe("auto spts", () => {
      it("auto creates spts", () => {
        defineInterface("Foo", {
          properties: {
            foo: "string",
          },
        });

        expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
          {
            "actionTypes": {},
            "interfaceTypes": {
              "Foo": {
                "apiName": "Foo",
                "description": "Foo",
                "displayName": "Foo",
                "extendsInterfaces": [],
                "links": {},
                "properties": {
                  "foo": {
                    "apiName": "foo",
                    "dataType": {
                      "type": "string",
                    },
                    "description": undefined,
                    "displayName": "foo",
                    "rid": "ri.ontology.main.generated-object.foo",
                  },
                },
                "rid": "ri.ontology.main.generated-object.foo",
              },
            },
            "objectTypes": {},
            "ontology": {
              "apiName": "IDK",
              "description": "IDK",
              "displayName": "IDK",
              "rid": "ri.ontology.main.generated-object.foo",
            },
            "queryTypes": {},
            "sharedPropertyTypes": {
              "foo": {
                "apiName": "foo",
                "dataType": {
                  "type": "string",
                },
                "description": undefined,
                "displayName": "foo",
                "rid": "ri.ontology.main.generated-object.foo",
              },
            },
          }
        `);
      });

      it("does not let you conflict spts", () => {
        defineSharedPropertyType("foo", {
          type: "string",
        });

        expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
          {
            "actionTypes": {},
            "interfaceTypes": {},
            "objectTypes": {},
            "ontology": {
              "apiName": "IDK",
              "description": "IDK",
              "displayName": "IDK",
              "rid": "ri.ontology.main.generated-object.foo",
            },
            "queryTypes": {},
            "sharedPropertyTypes": {
              "foo": {
                "apiName": "foo",
                "dataType": {
                  "type": "string",
                },
                "description": undefined,
                "displayName": "foo",
                "rid": "ri.ontology.main.generated-object.foo",
              },
            },
          }
        `);

        expect(() => {
          defineInterface("Foo", {
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

  describe("SPTs", () => {
    it("doesn't let you create the same spt twice", () => {
      defineSharedPropertyType("foo", {
        type: "string",
      });

      expect(() => {
        defineSharedPropertyType("foo", {
          type: "string",
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Shared property type foo already exists]`,
      );
    });
  });

  it("things", () => {
    const fooSpt = defineSharedPropertyType(
      "fooSpt",
      {
        type: "string",
      },
    );

    const FooInterface = defineInterface(
      "FooInterface",
      {
        displayName: "Foo Interface",
        properties: {
          fooSpt,
        },
      },
    );

    expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
      {
        "actionTypes": {},
        "interfaceTypes": {
          "FooInterface": {
            "apiName": "FooInterface",
            "description": "Foo Interface",
            "displayName": "Foo Interface",
            "extendsInterfaces": [],
            "links": {},
            "properties": {
              "fooSpt": {
                "apiName": "fooSpt",
                "dataType": {
                  "type": "string",
                },
                "description": undefined,
                "displayName": "fooSpt",
                "rid": "ri.ontology.main.generated-object.foo",
              },
            },
            "rid": "ri.ontology.main.generated-object.foo",
          },
        },
        "objectTypes": {},
        "ontology": {
          "apiName": "IDK",
          "description": "IDK",
          "displayName": "IDK",
          "rid": "ri.ontology.main.generated-object.foo",
        },
        "queryTypes": {},
        "sharedPropertyTypes": {
          "fooSpt": {
            "apiName": "fooSpt",
            "dataType": {
              "type": "string",
            },
            "description": undefined,
            "displayName": "fooSpt",
            "rid": "ri.ontology.main.generated-object.foo",
          },
        },
      }
    `);
  });
});
