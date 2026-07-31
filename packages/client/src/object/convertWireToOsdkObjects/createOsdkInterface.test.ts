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
import { DerivedPropertiesRef, ObjectDefRef } from "./InternalSymbols.js";

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

  it("exposes runtime derived properties alongside the interface properties", () => {
    const underlying = {
      foo: "hi mom",
      linkedCount: 3,

      [DerivedPropertiesRef]: ["linkedCount"],
      [ObjectDefRef]: baseObjectDef,
    };

    const iface = createOsdkInterface(underlying as any, ifaceDef);

    expect(Object.keys(iface)).toMatchInlineSnapshot(`
      [
        "$apiName",
        "asdf",
        "linkedCount",
      ]
    `);
    expect((iface as any).linkedCount).toBe(3);
    expect((iface as any).asdf).toBe("hi mom");
  });

  it("omits derived properties the server did not return", () => {
    const underlying = {
      foo: "hi mom",

      // Requested, but absent from the payload — e.g. a `get` over a link with
      // no target object.
      [DerivedPropertiesRef]: ["linkedCount"],
      [ObjectDefRef]: baseObjectDef,
    };

    const iface = createOsdkInterface(underlying as any, ifaceDef);

    expect(Object.keys(iface)).toEqual(["$apiName", "asdf"]);
    expect((iface as any).linkedCount).toBeUndefined();
  });

  it("does not add derived property keys when there are none", () => {
    const underlying = {
      foo: "hi mom",
      [ObjectDefRef]: baseObjectDef,
    };

    const iface = createOsdkInterface(underlying as any, ifaceDef);

    expect(Object.keys(iface)).toEqual(["$apiName", "asdf"]);
  });
});

const baseObjectDef = {
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
} satisfies FetchedObjectTypeDefinition;

const ifaceDef = {
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
} as const;
