/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import { defineInterface } from "../defineInterface.js";
import { defineObject } from "../defineObject.js";
import { defineOntology } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
import { implementInterface } from "../implementInterface.js";

describe("implementInterface", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  describe("Success cases", () => {
    it("implements interface with SharedPropertyType (SPT)", () => {
      const spt = defineSharedPropertyType({
        apiName: "sharedProp",
        type: "string",
      });

      const iface = defineInterface({
        apiName: "TestInterface",
        properties: {
          sharedProp: spt,
        },
      });

      const obj = defineObject({
        apiName: "TestObject",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "string" },
        },
      });

      expect(() => {
        implementInterface(
          iface,
          obj,
          [{ interfaceProperty: spt.apiName, mapsTo: "prop1" }],
          {},
        );
      }).not.toThrow();
    });

    it("implements interface with InterfaceDefinedProperty (IDP)", () => {
      const iface = defineInterface({
        apiName: "TestInterface2",
        properties: {
          "com.palantir.idp": { type: "boolean" },
        },
      });

      const obj = defineObject({
        apiName: "TestObject2",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "boolean" },
        },
      });

      expect(() => {
        implementInterface(
          iface,
          obj,
          [{ interfaceProperty: "com.palantir.idp", mapsTo: "prop1" }],
          {},
        );
      }).not.toThrow();
    });

    it("implements interface with mixed SPT and IDP properties", () => {
      const spt = defineSharedPropertyType({
        apiName: "sharedProp",
        type: "string",
      });

      const iface = defineInterface({
        apiName: "TestInterface3",
        properties: {
          sharedProp: spt,
          "com.palantir.idp2": { type: "integer" },
        },
      });

      const obj = defineObject({
        apiName: "TestObject3",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "string" },
          prop2: { type: "integer" },
        },
      });

      expect(() => {
        implementInterface(
          iface,
          obj,
          [
            { interfaceProperty: spt.apiName, mapsTo: "prop1" },
            { interfaceProperty: "com.palantir.idp2", mapsTo: "prop2" },
          ],
          {},
        );
      }).not.toThrow();
    });

    it("implements interface with array property types", () => {
      const spt = defineSharedPropertyType({
        apiName: "arrayProp",
        type: "string",
        array: true,
      });

      const iface = defineInterface({
        apiName: "TestInterface",
        properties: {
          arrayProp: spt,
        },
      });

      const obj = defineObject({
        apiName: "TestObject",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "string", array: true },
        },
      });

      expect(() => {
        implementInterface(
          iface,
          obj,
          [{ interfaceProperty: spt.apiName, mapsTo: "prop1" }],
          {},
        );
      }).not.toThrow();
    });
  });

  describe("Error cases", () => {
    it("fails when interface property is not mapped", () => {
      const spt = defineSharedPropertyType({
        apiName: "sharedProp",
        type: "string",
      });

      const iface = defineInterface({
        apiName: "TestInterface4",
        properties: {
          sharedProp: spt,
        },
      });

      const obj = defineObject({
        apiName: "TestObject4",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "string" },
        },
      });

      expect(() => {
        implementInterface(iface, obj, [], {});
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: \nOntology Definition Error: Interface property com.palantir.sharedProp not implemented by com.palantir.TestObject4 object definition\n]`,
      );
    });

    it("fails when mapped object property does not exist", () => {
      const spt = defineSharedPropertyType({
        apiName: "sharedProp",
        type: "string",
      });

      const iface = defineInterface({
        apiName: "TestInterface",
        properties: {
          sharedProp: spt,
        },
      });

      const obj = defineObject({
        apiName: "TestObject",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "string" },
        },
      });

      expect(() => {
        implementInterface(
          iface,
          obj,
          [{ interfaceProperty: spt.apiName, mapsTo: "nonExistentProp" }],
          {},
        );
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: \nOntology Definition Error: Object property mapped to interface does not exist. Object Property Mapped: nonExistentProp\n]`,
      );
    });

    it("fails when property types do not match", () => {
      const spt = defineSharedPropertyType({
        apiName: "sharedProp",
        type: "string",
      });

      const iface = defineInterface({
        apiName: "TestInterface",
        properties: {
          sharedProp: spt,
        },
      });

      const obj = defineObject({
        apiName: "TestObject",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "integer" },
        },
      });

      expect(() => {
        implementInterface(
          iface,
          obj,
          [{ interfaceProperty: spt.apiName, mapsTo: "prop1" }],
          {},
        );
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: \nOntology Definition Error: Object property type does not match the interface property it is mapped to. Interface Property: com.palantir.sharedProp, objectProperty: prop1\n]`,
      );
    });

    it("fails when non-existent interface property is referenced", () => {
      const iface = defineInterface({
        apiName: "TestInterface5",
        properties: {
          "com.palantir.validProp": { type: "string" },
        },
      });

      const obj = defineObject({
        apiName: "TestObject5",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "string" },
        },
      });

      expect(() => {
        implementInterface(
          iface,
          obj,
          [{ interfaceProperty: "nonExistentInterfaceProp", mapsTo: "prop1" }],
          {},
        );
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: \nOntology Definition Error: Interface property com.palantir.validProp not implemented by com.palantir.TestObject5 object definition\n\nOntology Definition Error: Interface property nonExistentInterfaceProp referenced in com.palantir.TestObject5 object does not exist\n]`,
      );
    });

    it("fails with IDP type mismatch", () => {
      const iface = defineInterface({
        apiName: "TestInterface6",
        properties: {
          "com.palantir.idp3": { type: "boolean" },
        },
      });

      const obj = defineObject({
        apiName: "TestObject6",
        displayName: "Test Object",
        pluralDisplayName: "Test Objects",
        titlePropertyApiName: "prop1",
        primaryKeyPropertyApiName: "prop1",
        properties: {
          prop1: { type: "string" },
        },
      });

      expect(() => {
        implementInterface(
          iface,
          obj,
          [{ interfaceProperty: "com.palantir.idp3", mapsTo: "prop1" }],
          {},
        );
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: \nOntology Definition Error: Object property type does not match the interface property it is mapped to. Interface Property: com.palantir.idp3, objectProperty: prop1\n]`,
      );
    });
  });
});
