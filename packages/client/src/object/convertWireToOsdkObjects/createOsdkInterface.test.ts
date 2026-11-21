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

import { describe, expect, it } from "vitest";

import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "../../ontology/OntologyProvider.js";
import { createOsdkInterface } from "./createOsdkInterface.js";
import { ObjectDefRef } from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

describe(createOsdkInterface, () => {
  it("works in the normal case", () => {
    const underlying = {
      foo: "hi mom",

      [ObjectDefRef]: {
        [InterfaceDefinitions]: {},
        apiName: "Obj",
        displayName: "",
        interfaceMap: {
          IFoo: {
            asdf: "foo",
          },
        },
        inverseInterfaceMap: {},
        links: {},
        pluralDisplayName: "",
        primaryKeyApiName: "",
        primaryKeyType: "string",
        properties: {
          foo: {
            type: "string",
          },
        },
        type: "object",
        titleProperty: "foo",
        rid: "",
        status: "ACTIVE",
        icon: undefined,
        visibility: undefined,
        description: undefined,
      } satisfies FetchedObjectTypeDefinition,
    };

    const iface = createOsdkInterface(underlying as any, {
      apiName: "IFoo",
      displayName: "",
      links: {},
      properties: {
        asdf: {
          type: "string",
        },
      },
      rid: "",
      type: "interface",
      implements: [],
      description: undefined,
    });

    expect(Object.keys(iface)).toMatchInlineSnapshot(`
      [
        "$apiName",
        "asdf",
      ]
    `);

    expect((iface as any).asdf).toBe("hi mom");

    expect(JSON.stringify(iface, undefined, 2)).toMatchInlineSnapshot(`
      "{
        "$apiName": "IFoo",
        "asdf": "hi mom"
      }"
    `);
  });

  it("properly maps apiNamespace", () => {
    const underlying = {
      foo: "hi mom",

      [ObjectDefRef]: {
        [InterfaceDefinitions]: {},
        apiName: "Obj",
        displayName: "",
        interfaceMap: {
          "a.IFoo": {
            "a.asdf": "foo",
          },
        },
        inverseInterfaceMap: {},
        links: {},
        pluralDisplayName: "",
        primaryKeyApiName: "",
        primaryKeyType: "string",
        properties: {
          foo: {
            type: "string",
          },
        },
        type: "object",
        titleProperty: "foo",
        rid: "",
        status: "ACTIVE",
        icon: undefined,
        visibility: undefined,
        description: undefined,
      } satisfies FetchedObjectTypeDefinition,
    };

    const iface = createOsdkInterface(underlying as any, {
      apiName: "a.IFoo",
      displayName: "",
      links: {},
      properties: {
        "a.asdf": {
          type: "string",
        },
      },
      rid: "",
      type: "interface",
      implements: [],
      description: undefined,
    });

    expect(Object.keys(iface)).toMatchInlineSnapshot(`
      [
        "$apiName",
        "asdf",
      ]
    `);

    expect((iface as any).asdf).toBe("hi mom");

    expect(JSON.stringify(iface, undefined, 2)).toMatchInlineSnapshot(`
      "{
        "$apiName": "a.IFoo",
        "asdf": "hi mom"
      }"
    `);
  });

  it("works with mixed namespaces", () => {
    const underlying = {
      foo: "hi mom",

      [ObjectDefRef]: {
        [InterfaceDefinitions]: {},
        apiName: "Obj",
        displayName: "",
        interfaceMap: {
          "a.IFoo": {
            "b.asdf": "foo",
          },
        },
        inverseInterfaceMap: {},
        links: {},
        pluralDisplayName: "",
        primaryKeyApiName: "",
        primaryKeyType: "string",
        properties: {
          foo: {
            type: "string",
          },
        },
        type: "object",
        titleProperty: "foo",
        rid: "",
        status: "ACTIVE",
        icon: undefined,
        visibility: undefined,
        description: undefined,
      } satisfies FetchedObjectTypeDefinition,
    };

    const iface = createOsdkInterface(underlying as any, {
      apiName: "a.IFoo",
      displayName: "",
      links: {},
      properties: {
        "b.asdf": {
          type: "string",
        },
      },
      rid: "",
      type: "interface",
      implements: [],
      description: undefined,
    });

    expect(Object.keys(iface)).toMatchInlineSnapshot(`
      [
        "$apiName",
        "b.asdf",
      ]
    `);

    expect((iface as any)["b.asdf"]).toBe("hi mom");

    expect(JSON.stringify(iface, undefined, 2)).toMatchInlineSnapshot(`
      "{
        "$apiName": "a.IFoo",
        "b.asdf": "hi mom"
      }"
    `);
  });

  describe("non-local implementations", () => {
    const objectDef = {
      [InterfaceDefinitions]: {},
      apiName: "Obj",
      displayName: "",
      interfaceMap: { INonLocal: {} },
      inverseInterfaceMap: {},
      interfaceImplementations: {
        INonLocal: {
          reducedStruct: {
            type: "reduced",
            implementation: {
              type: "struct",
              mapping: {
                label: {
                  type: "structFieldOfProperty",
                  propertyApiName: "structArray",
                  structFieldApiName: "string",
                },
              },
            },
          },
          reducedField: {
            type: "reduced",
            implementation: {
              type: "structField",
              propertyApiName: "structArray",
              structFieldApiName: "integer",
            },
          },
          reducedMixed: {
            type: "reduced",
            implementation: {
              type: "struct",
              mapping: {
                label: {
                  type: "structFieldOfProperty",
                  propertyApiName: "structArray",
                  structFieldApiName: "string",
                },
                extra: { type: "property", propertyApiName: "first" },
              },
            },
          },
          combined: {
            type: "struct",
            mapping: {
              a: { type: "property", propertyApiName: "first" },
              b: { type: "property", propertyApiName: "second" },
            },
          },
        },
      },
      links: {},
      pluralDisplayName: "",
      primaryKeyApiName: "",
      primaryKeyType: "string",
      properties: {
        structArray: {
          type: { string: "string", integer: "integer" },
          multiplicity: true,
        },
        first: { type: "string" },
        second: { type: "integer" },
      },
      type: "object",
      titleProperty: "first",
      rid: "",
      status: "ACTIVE",
      icon: undefined,
      visibility: undefined,
      description: undefined,
    } satisfies FetchedObjectTypeDefinition;

    const interfaceDef = {
      apiName: "INonLocal",
      displayName: "",
      links: {},
      properties: {
        reducedStruct: { type: { label: "string" } },
        reducedField: { type: "integer" },
        reducedMixed: { type: { label: "string", extra: "string" } },
        combined: { type: { a: "string", b: "integer" } },
      },
      rid: "",
      type: "interface",
      implements: [],
      description: undefined,
    } satisfies Parameters<typeof createOsdkInterface>[1];

    function holder(properties: Record<string, unknown>): ObjectHolder {
      return {
        ...properties,
        [ObjectDefRef]: objectDef,
      } as unknown as ObjectHolder;
    }

    it("leaves reduced properties unset when a backing array was not reduced by the server", () => {
      const iface = createOsdkInterface(
        holder({
          structArray: [
            { string: "a", integer: 1 },
            { string: "b", integer: 2 },
          ],
          first: "x",
        }),
        interfaceDef,
      );

      expect(JSON.parse(JSON.stringify(iface))).toEqual({
        $apiName: "INonLocal",
        combined: { a: "x" },
      });
    });

    it("derives reduced properties from the value the server reduced", () => {
      const iface = createOsdkInterface(
        holder({ structArray: { string: "a", integer: 1 }, first: "x" }),
        interfaceDef,
      );

      expect(JSON.parse(JSON.stringify(iface))).toEqual({
        $apiName: "INonLocal",
        reducedStruct: { label: "a" },
        reducedField: 1,
        reducedMixed: { label: "a", extra: "x" },
        combined: { a: "x" },
      });
    });

    it("leaves a struct property unset only when none of its backing properties were loaded", () => {
      expect(
        Object.keys(createOsdkInterface(holder({}), interfaceDef)),
      ).toEqual(["$apiName"]);

      const partial = createOsdkInterface(holder({ second: 5 }), interfaceDef);
      expect(Object.keys(partial)).toEqual(["$apiName", "combined"]);
      expect(JSON.parse(JSON.stringify(partial))).toEqual({
        $apiName: "INonLocal",
        combined: { b: 5 },
      });
    });
  });
});
