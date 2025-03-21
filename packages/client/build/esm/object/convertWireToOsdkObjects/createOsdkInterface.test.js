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
import { InterfaceDefinitions } from "../../ontology/OntologyProvider.js";
import { createOsdkInterface } from "./createOsdkInterface.js";
import { ObjectDefRef } from "./InternalSymbols.js";
describe(createOsdkInterface, () => {
  it("works in the normal case", () => {
    const iface = createOsdkInterface({
      "foo": "hi mom",
      [ObjectDefRef]: {
        [InterfaceDefinitions]: {},
        apiName: "Obj",
        displayName: "",
        interfaceMap: {
          "IFoo": {
            "asdf": "foo"
          }
        },
        inverseInterfaceMap: {},
        links: {},
        pluralDisplayName: "",
        primaryKeyApiName: "",
        primaryKeyType: "string",
        properties: {
          "foo": {
            type: "string"
          }
        },
        type: "object",
        titleProperty: "foo",
        rid: "",
        status: "ACTIVE"
      }
    }, {
      "apiName": "IFoo",
      displayName: "",
      links: {},
      properties: {
        "asdf": {
          type: "string"
        }
      },
      rid: "",
      type: "interface",
      implements: []
    });
    expect(Object.keys(iface)).toMatchInlineSnapshot(`
      [
        "$apiName",
        "asdf",
      ]
    `);
    expect(iface.asdf).toBe("hi mom");
    expect(JSON.stringify(iface, undefined, 2)).toMatchInlineSnapshot(`
      "{
        "$apiName": "IFoo",
        "asdf": "hi mom"
      }"
    `);
  });
  it("properly maps apiNamespace", () => {
    const iface = createOsdkInterface({
      "foo": "hi mom",
      [ObjectDefRef]: {
        [InterfaceDefinitions]: {},
        apiName: "Obj",
        displayName: "",
        interfaceMap: {
          "a.IFoo": {
            "a.asdf": "foo"
          }
        },
        inverseInterfaceMap: {},
        links: {},
        pluralDisplayName: "",
        primaryKeyApiName: "",
        primaryKeyType: "string",
        properties: {
          "foo": {
            type: "string"
          }
        },
        type: "object",
        titleProperty: "foo",
        rid: "",
        status: "ACTIVE"
      }
    }, {
      "apiName": "a.IFoo",
      displayName: "",
      links: {},
      properties: {
        "a.asdf": {
          type: "string"
        }
      },
      rid: "",
      type: "interface",
      implements: []
    });
    expect(Object.keys(iface)).toMatchInlineSnapshot(`
      [
        "$apiName",
        "asdf",
      ]
    `);
    expect(iface.asdf).toBe("hi mom");
    expect(JSON.stringify(iface, undefined, 2)).toMatchInlineSnapshot(`
      "{
        "$apiName": "a.IFoo",
        "asdf": "hi mom"
      }"
    `);
  });
  it("works with mixed namespaces", () => {
    const iface = createOsdkInterface({
      "foo": "hi mom",
      [ObjectDefRef]: {
        [InterfaceDefinitions]: {},
        apiName: "Obj",
        displayName: "",
        interfaceMap: {
          "a.IFoo": {
            "b.asdf": "foo"
          }
        },
        inverseInterfaceMap: {},
        links: {},
        pluralDisplayName: "",
        primaryKeyApiName: "",
        primaryKeyType: "string",
        properties: {
          "foo": {
            type: "string"
          }
        },
        type: "object",
        titleProperty: "foo",
        rid: "",
        status: "ACTIVE"
      }
    }, {
      "apiName": "a.IFoo",
      displayName: "",
      links: {},
      properties: {
        "b.asdf": {
          type: "string"
        }
      },
      rid: "",
      type: "interface",
      implements: []
    });
    expect(Object.keys(iface)).toMatchInlineSnapshot(`
      [
        "$apiName",
        "b.asdf",
      ]
    `);
    expect(iface["b.asdf"]).toBe("hi mom");
    expect(JSON.stringify(iface, undefined, 2)).toMatchInlineSnapshot(`
      "{
        "$apiName": "a.IFoo",
        "b.asdf": "hi mom"
      }"
    `);
  });
});
//# sourceMappingURL=createOsdkInterface.test.js.map