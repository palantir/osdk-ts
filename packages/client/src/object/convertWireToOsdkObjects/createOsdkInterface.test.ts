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

import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import type { DerivedPropertyRuntimeMetadata } from "../../derivedProperties/derivedPropertyRuntimeMetadata.js";
import type { MinimalClient } from "../../MinimalClientContext.js";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "../../ontology/OntologyProvider.js";
import { createOsdkInterface } from "./createOsdkInterface.js";
import { createOsdkObject } from "./createOsdkObject.js";
import { ObjectDefRef, RdpDefRef } from "./InternalSymbols.js";

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

  it("carries runtime-derived properties and RDP metadata onto the interface", () => {
    const rdpMetadata = {
      "total": {
        selectedOrCollectedPropertyType: { type: "decimal" },
        definition: { type: "selection" },
      },
    };

    const underlying = {
      "foo": "hi mom",
      // derived properties live alongside regular ones on the underlying object
      "total": "10",

      [RdpDefRef]: rdpMetadata,

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

    // the derived value is exposed on the interface view ...
    expect((iface as any).total).toBe("10");
    expect(Object.keys(iface)).toContain("total");
    // ... and the RDP metadata is carried so its type can be resolved.
    expect((iface as any)[RdpDefRef]).toBe(rdpMetadata);
  });

  it("carries RDP metadata end-to-end when the underlying is built via createOsdkObject", () => {
    // The test above sets [RdpDefRef] on a hand-rolled underlying; this one
    // exercises the real path -- createOsdkObject populates [RdpDefRef] -- so a
    // regression in that wiring (not just in createOsdkInterface) is caught.
    const objectDef = {
      [InterfaceDefinitions]: {},
      apiName: "Obj",
      displayName: "",
      interfaceMap: { "IFoo": { "asdf": "foo" } },
      inverseInterfaceMap: {},
      links: {},
      pluralDisplayName: "",
      primaryKeyApiName: "$primaryKey",
      primaryKeyType: "string",
      properties: { "foo": { type: "string" } },
      type: "object",
      titleProperty: "foo",
      rid: "",
      status: "ACTIVE",
      icon: undefined,
      visibility: undefined,
      description: undefined,
    } satisfies FetchedObjectTypeDefinition;

    const rdpMetadata: DerivedPropertyRuntimeMetadata = {
      "total": {
        definition: {
          type: "selection",
          operation: { type: "get", selectedPropertyApiName: "foo" },
        } as DerivedPropertyDefinition,
        selectedOrCollectedPropertyType: { type: "decimal" },
      },
    };

    const underlying = createOsdkObject(
      {} as MinimalClient,
      objectDef,
      {
        $apiName: "Obj",
        $objectType: "Obj",
        $primaryKey: "pk-1",
        $title: "hi mom",
        foo: "hi mom",
        // the derived value lives alongside regular properties on the underlying
        total: "10",
      },
      rdpMetadata,
    );

    const iface = createOsdkInterface(underlying, {
      "apiName": "IFoo",
      displayName: "",
      links: {},
      properties: { "asdf": { type: "string" } },
      rid: "",
      type: "interface",
      implements: [],
      description: undefined,
    });

    // the derived value is exposed on the interface view ...
    expect((iface as any).total).toBe("10");
    expect(Object.keys(iface)).toContain("total");
    // ... and the captured type survives, so consumers resolve it as numeric.
    expect(iface[RdpDefRef]?.total?.selectedOrCollectedPropertyType?.type)
      .toBe("decimal");
  });

  it("does not let a $-prefixed derived property clobber the $-metadata", () => {
    // RDP names are developer-chosen aliases and never $-prefixed in practice,
    // but a derived property literally named "$apiName" must not overwrite the
    // interface's $apiName. This discriminates clobbering because the interface
    // metadata value ("IFoo") differs from the underlying object's value
    // ("Obj") -- a clobbering RDP would surface "Obj".
    const underlying = {
      "foo": "hi mom",
      "$title": "real title",
      "$primaryKey": "pk-1",
      "$apiName": "Obj",

      [RdpDefRef]: {
        "$apiName": {
          selectedOrCollectedPropertyType: { type: "string" },
          definition: { type: "selection" },
        },
      },

      [ObjectDefRef]: {
        [InterfaceDefinitions]: {},
        apiName: "Obj",
        displayName: "",
        interfaceMap: { "IFoo": { "asdf": "foo" } },
        inverseInterfaceMap: {},
        links: {},
        pluralDisplayName: "",
        primaryKeyApiName: "$primaryKey",
        primaryKeyType: "string",
        properties: { "foo": { type: "string" } },
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
      properties: { "asdf": { type: "string" } },
      rid: "",
      type: "interface",
      implements: [],
      description: undefined,
    });

    // $apiName remains the interface's apiName, not the underlying RDP value.
    expect((iface as any).$apiName).toBe("IFoo");
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
});
