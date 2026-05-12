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

import type { InterfaceMetadata } from "@osdk/api";
import type { PropertySecurities } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import type { MinimalClient } from "../../MinimalClientContext.js";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "../../ontology/OntologyProvider.js";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { createOsdkInterface } from "./createOsdkInterface.js";
import { createOsdkObject } from "./createOsdkObject.js";
import { ObjectDefRef } from "./InternalSymbols.js";

describe(createOsdkInterface, () => {
  it("works in the normal case", () => {
    const underlying = {
      "foo": "hi mom",

      [ObjectDefRef]: {
        [InterfaceDefinitions]: {},
        apiName: "Obj",
        displayName: "",
        interfaceMap: {
          "IFoo": {
            "asdf": "foo",
          },
        },
        inverseInterfaceMap: {},
        links: {},
        pluralDisplayName: "",
        primaryKeyApiName: "",
        primaryKeyType: "string",
        properties: {
          "foo": {
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
      "apiName": "IFoo",
      displayName: "",
      links: {},
      properties: {
        "asdf": {
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
      "foo": "hi mom",

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
          "foo": {
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
      "apiName": "a.IFoo",
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
      "foo": "hi mom",

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
          "foo": {
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
      "apiName": "a.IFoo",
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

  describe("with $loadPropertySecurityMetadata", () => {
    const interfaceDef: InterfaceMetadata = {
      apiName: "IFoo",
      displayName: "",
      links: {},
      properties: { "asdf": { type: "string" } },
      rid: "",
      type: "interface",
      implements: [],
      description: undefined,
    };

    const objectDef: FetchedObjectTypeDefinition = {
      [InterfaceDefinitions]: {
        "IFoo": { def: interfaceDef },
      },
      apiName: "Obj",
      displayName: "",
      interfaceMap: { "IFoo": { "asdf": "foo" } },
      inverseInterfaceMap: { "IFoo": { "foo": "asdf" } },
      links: {},
      pluralDisplayName: "",
      primaryKeyApiName: "id",
      primaryKeyType: "integer",
      properties: {
        id: { type: "integer" },
        foo: { type: "string" },
      },
      type: "object",
      titleProperty: "foo",
      rid: "",
      status: "ACTIVE",
      icon: undefined,
      visibility: undefined,
      description: undefined,
    };

    const wireSecurities: PropertySecurities[] = [
      { disjunction: [{ type: "unsupportedPolicy" }] },
    ];

    const simpleProps = {
      $apiName: "Obj",
      $objectType: "Obj",
      $primaryKey: 1,
      $title: "hi mom",
      id: 1,
      foo: { value: "hi mom", propertySecurityIndex: 0 },
    } as unknown as SimpleOsdkProperties;

    const client = {} as MinimalClient;

    function makeObj() {
      return createOsdkObject(
        client,
        objectDef,
        simpleProps,
        {},
        wireSecurities,
      ) as unknown as Record<string, unknown> & {
        $as: (name: string) => Record<string, unknown>;
        $clone: () => Record<string, unknown>;
      };
    }

    it("$as does not throw and exposes the mapped (unwrapped) property", () => {
      const obj = makeObj();
      const iface = obj.$as("IFoo");
      expect(iface.$apiName).toBe("IFoo");
      expect(iface.asdf).toBe("hi mom");
    });

    it("$as'd interface exposes ObjectMetadata equal to the source objectDef", () => {
      const obj = makeObj();
      const iface = obj.$as("IFoo");
      const metadata = iface
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata as {
          ObjectMetadata: FetchedObjectTypeDefinition;
        };
      expect(metadata.ObjectMetadata).toBe(objectDef);
    });

    it("$propertySecurities resolves on both holder and interface view", () => {
      const obj = makeObj();
      const expectedSecurities = {
        foo: [{ type: "unsupportedPolicy" }],
      };
      expect(obj.$propertySecurities).toEqual(expectedSecurities);
      expect(obj.$as("IFoo").$propertySecurities).toEqual(expectedSecurities);
    });

    it("$clone() preserves unwrapped property values", () => {
      const obj = makeObj();
      expect(obj.$clone().foo).toBe("hi mom");
    });
  });
});
