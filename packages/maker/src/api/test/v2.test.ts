/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type {
  CompileTimeMetadata,
  ObjectMetadata,
  ObjectTypeDefinition,
  OsdkObjectPropertyType,
  PropertyDef,
} from "@osdk/api";
import { beforeEach, describe, expect, expectTypeOf, it } from "vitest";
import { defineOntology, getOntologyDefinition } from "../defineOntology.js";
import { defineActionV2 } from "../v2/defineActionV2.js";
import { defineLinkV2 } from "../v2/defineLinkV2.js";
import {
  defineCreateObjectActionV2,
  defineCreateOrModifyObjectActionV2,
  defineDeleteObjectActionV2,
  defineModifyObjectActionV2,
} from "../v2/defineObjectActions.js";
import { defineObjectV2 } from "../v2/defineObjectV2.js";
import { finalizeTypes } from "../v2/finalizeTypes.js";

describe("V2 Maker APIs", () => {
  beforeEach(async () => {
    await defineOntology("com.test.", () => {}, "/tmp/");
  });

  describe("defineObjectV2", () => {
    it("should register the object in maker state", () => {
      defineObjectV2({
        apiName: "Employee",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const ontology = getOntologyDefinition();
      expect(ontology.OBJECT_TYPE["com.test.Employee"]).toBeDefined();
    });

    it("should preserve literal types in the return value", () => {
      const def = defineObjectV2({
        apiName: "Employee",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          age: { type: "integer", nullable: false },
        },
      });

      expectTypeOf(def.apiName).toEqualTypeOf<"Employee">();
      expectTypeOf(def.primaryKeyPropertyApiName).toEqualTypeOf<"id">();
      expectTypeOf(def.properties.id).toEqualTypeOf<"string">();
      // age property preserves literal type info
      expectTypeOf(def.properties.age.type).toEqualTypeOf<"integer">();
      expectTypeOf(def.properties.age.nullable).toEqualTypeOf<false>();
    });

    it("should throw on invalid object definitions", () => {
      expect(() =>
        defineObjectV2({
          apiName: "Employee",
          primaryKeyPropertyApiName: "missingProp",
          displayName: "Employee",
          pluralDisplayName: "Employees",
          titlePropertyApiName: "name",
          properties: {
            id: "string",
            name: "string",
          },
        })
      ).toThrow();
    });
  });

  describe("defineLinkV2", () => {
    it("should register a many-to-many link in maker state", () => {
      const emp = defineObjectV2({
        apiName: "Employee",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const venture = defineObjectV2({
        apiName: "Venture",
        primaryKeyPropertyApiName: "ventureId",
        displayName: "Venture",
        pluralDisplayName: "Ventures",
        titlePropertyApiName: "name",
        properties: {
          ventureId: "string",
          name: "string",
        },
      });

      defineLinkV2({
        apiName: "ventures",
        reverseApiName: "employees",
        many: emp,
        toMany: venture,
      });

      const ontology = getOntologyDefinition();
      expect(
        ontology.LINK_TYPE["ventures-employees"],
      ).toBeDefined();
    });
  });

  describe("finalizeTypes", () => {
    it("should produce correct runtime values for objects", () => {
      const emp = defineObjectV2({
        apiName: "Employee",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const result = finalizeTypes({
        objects: { Employee: emp },
        links: [] as const,
        actions: {},
      });

      expect(result.Employee).toEqual({
        type: "object",
        apiName: "Employee",
        primaryKeyApiName: "id",
        primaryKeyType: "string",
        osdkMetadata: { extraUserAgent: "" },
      });
    });

    it("should produce correct runtime values for actions", () => {
      const action = defineActionV2({
        apiName: "doSomething",
        parameters: {
          name: "string",
        },
      });

      const result = finalizeTypes({
        objects: {},
        links: [] as const,
        actions: { doSomething: action },
      });

      expect(result.doSomething).toEqual({
        type: "action",
        apiName: "doSomething",
        osdkMetadata: { extraUserAgent: "" },
      });
    });
  });

  describe("type-level: finalizeTypes produces correct __DefinitionMetadata", () => {
    it("should produce correct property types", () => {
      const emp = defineObjectV2({
        apiName: "Employee",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          age: { type: "integer", nullable: false },
          tags: { type: "string", array: true },
        },
      });

      const result = finalizeTypes({
        objects: { Employee: emp },
        links: [] as const,
        actions: {},
      });

      type Emp = typeof result.Employee;
      type Meta = CompileTimeMetadata<Emp>;

      // Check apiName
      expectTypeOf<Meta["apiName"]>().toEqualTypeOf<"Employee">();

      // Check primaryKeyApiName
      expectTypeOf<Meta["primaryKeyApiName"]>().toEqualTypeOf<"id">();

      // Check properties have correct type/nullable/multiplicity
      expectTypeOf<Meta["properties"]["id"]["type"]>().toEqualTypeOf<
        "string"
      >();
      expectTypeOf<Meta["properties"]["id"]["nullable"]>().toEqualTypeOf<
        false
      >();
      expectTypeOf<Meta["properties"]["name"]["nullable"]>().toEqualTypeOf<
        true
      >();
      expectTypeOf<Meta["properties"]["age"]["type"]>().toEqualTypeOf<
        "integer"
      >();
      expectTypeOf<Meta["properties"]["age"]["nullable"]>().toEqualTypeOf<
        false
      >();
      expectTypeOf<Meta["properties"]["tags"]["type"]>().toEqualTypeOf<
        "string"
      >();
      expectTypeOf<Meta["properties"]["tags"]["multiplicity"]>()
        .toEqualTypeOf<true>();

      // Check props (runtime TS types)
      expectTypeOf<Meta["props"]["id"]>().toEqualTypeOf<string>();
      expectTypeOf<Meta["props"]["name"]>().toEqualTypeOf<
        string | undefined
      >();
      expectTypeOf<Meta["props"]["age"]>().toEqualTypeOf<number>();
      expectTypeOf<Meta["props"]["tags"]>().toEqualTypeOf<
        string[] | undefined
      >();
    });

    it("should produce correct link types for many-to-many", () => {
      const emp = defineObjectV2({
        apiName: "Employee",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const venture = defineObjectV2({
        apiName: "Venture",
        primaryKeyPropertyApiName: "ventureId",
        displayName: "Venture",
        pluralDisplayName: "Ventures",
        titlePropertyApiName: "name",
        properties: {
          ventureId: "string",
          name: "string",
        },
      });

      const link = defineLinkV2({
        apiName: "ventures",
        reverseApiName: "employees",
        many: emp,
        toMany: venture,
      });

      const result = finalizeTypes({
        objects: { Employee: emp, Venture: venture },
        links: [link] as const,
        actions: {},
      });

      type EmpMeta = CompileTimeMetadata<typeof result.Employee>;
      type VentureMeta = CompileTimeMetadata<typeof result.Venture>;

      // Employee should have a "ventures" multi link
      expectTypeOf<EmpMeta["links"]["ventures"]["multiplicity"]>()
        .toEqualTypeOf<true>();

      // Venture should have an "employees" multi link
      expectTypeOf<VentureMeta["links"]["employees"]["multiplicity"]>()
        .toEqualTypeOf<true>();
    });

    it("should map date to datetime in wire types", () => {
      const obj = defineObjectV2({
        apiName: "Event",
        primaryKeyPropertyApiName: "id",
        displayName: "Event",
        pluralDisplayName: "Events",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          eventDate: { type: "date" },
        },
      });

      const result = finalizeTypes({
        objects: { Event: obj },
        links: [] as const,
        actions: {},
      });

      type Meta = CompileTimeMetadata<typeof result.Event>;

      // "date" maps to "datetime" in wire types
      expectTypeOf<Meta["properties"]["eventDate"]["type"]>()
        .toEqualTypeOf<"datetime">();

      // datetime maps to string in PropertyValueWireToClient
      expectTypeOf<Meta["props"]["eventDate"]>().toEqualTypeOf<
        string | undefined
      >();
    });
  });

  describe("defineCreateObjectActionV2", () => {
    it("should register a create action with correct apiName", () => {
      const emp = defineObjectV2({
        apiName: "Employee",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          age: { type: "integer" },
        },
      });

      const action = defineCreateObjectActionV2(emp);

      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.create-object-employee"],
      ).toBeDefined();
      expect(action.apiName).toBe("create-object-employee");
      expect(action.displayName).toBe("Create Employee");
    });

    it("should include all non-struct properties as parameters", () => {
      const emp = defineObjectV2({
        apiName: "Task",
        primaryKeyPropertyApiName: "taskId",
        displayName: "Task",
        pluralDisplayName: "Tasks",
        titlePropertyApiName: "title",
        properties: {
          taskId: "string",
          title: "string",
          priority: "integer",
          metadata: {
            type: {
              type: "struct",
              structDefinition: { key: "string" },
            },
          },
        },
      });

      const action = defineCreateObjectActionV2(emp);

      // Should have taskId, title, priority but NOT metadata (struct)
      expect(action.parameters).toHaveProperty("taskId");
      expect(action.parameters).toHaveProperty("title");
      expect(action.parameters).toHaveProperty("priority");
      expect(action.parameters).not.toHaveProperty("metadata");
    });

    it("should support apiName overrides", () => {
      const emp = defineObjectV2({
        apiName: "Widget",
        primaryKeyPropertyApiName: "id",
        displayName: "Widget",
        pluralDisplayName: "Widgets",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const action = defineCreateObjectActionV2(emp, {
        apiName: "custom-create-widget",
      });

      expect(action.apiName).toBe("custom-create-widget");
      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.custom-create-widget"],
      ).toBeDefined();
    });

    it("should respect excludedProperties", () => {
      const emp = defineObjectV2({
        apiName: "Item",
        primaryKeyPropertyApiName: "id",
        displayName: "Item",
        pluralDisplayName: "Items",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          secret: "string",
        },
      });

      const action = defineCreateObjectActionV2(emp, {
        excludedProperties: ["secret"],
      });

      expect(action.parameters).toHaveProperty("id");
      expect(action.parameters).toHaveProperty("name");
      expect(action.parameters).not.toHaveProperty("secret");
    });

    it("should map date properties to datetime action params", () => {
      const emp = defineObjectV2({
        apiName: "Event2",
        primaryKeyPropertyApiName: "id",
        displayName: "Event",
        pluralDisplayName: "Events",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          eventDate: { type: "date" },
        },
      });

      const action = defineCreateObjectActionV2(emp);

      expect(action.parameters.eventDate).toBe("datetime");
    });
  });

  describe("defineModifyObjectActionV2", () => {
    it("should register a modify action with objectToModifyParameter", () => {
      const emp = defineObjectV2({
        apiName: "Employee2",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          age: { type: "integer" },
        },
      });

      const action = defineModifyObjectActionV2(emp);

      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.modify-object-employee2"],
      ).toBeDefined();
      expect(action.apiName).toBe("modify-object-employee2");
      expect(action.parameters).toHaveProperty("objectToModifyParameter");
      expect(
        (action.parameters.objectToModifyParameter as { type: string }).type,
      ).toBe("object");
    });

    it("should exclude the primary key from parameters", () => {
      const emp = defineObjectV2({
        apiName: "Employee3",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          age: { type: "integer" },
        },
      });

      const action = defineModifyObjectActionV2(emp);

      expect(action.parameters).not.toHaveProperty("id");
      expect(action.parameters).toHaveProperty("name");
      expect(action.parameters).toHaveProperty("age");
    });

    it("should make property parameters nullable", () => {
      const emp = defineObjectV2({
        apiName: "Employee4",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const action = defineModifyObjectActionV2(emp);

      const nameParam = action.parameters.name as {
        type: string;
        nullable: boolean;
      };
      expect(nameParam.nullable).toBe(true);
    });
  });

  describe("defineDeleteObjectActionV2", () => {
    it("should register a delete action with only objectToDeleteParameter", () => {
      const emp = defineObjectV2({
        apiName: "Employee5",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const action = defineDeleteObjectActionV2(emp);

      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.delete-object-employee5"],
      ).toBeDefined();
      expect(action.apiName).toBe("delete-object-employee5");
      expect(action.parameters).toHaveProperty("objectToDeleteParameter");
      // Should only have the delete parameter, no property params
      expect(Object.keys(action.parameters)).toHaveLength(1);

      // Internal state should have a deleteObjectRule, not a modifyObjectRule
      const registered =
        ontology.ACTION_TYPE["com.test.delete-object-employee5"];
      expect(registered.rules).toEqual([
        {
          type: "deleteObjectRule",
          deleteObjectRule: {
            objectToDelete: "objectToDeleteParameter",
          },
        },
      ]);
    });
  });

  describe("defineCreateOrModifyObjectActionV2", () => {
    it("should register a create-or-modify action", () => {
      const emp = defineObjectV2({
        apiName: "Employee6",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          age: { type: "integer" },
        },
      });

      const action = defineCreateOrModifyObjectActionV2(emp);

      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.create-or-modify-employee6"],
      ).toBeDefined();
      expect(action.apiName).toBe("create-or-modify-employee6");
      expect(action.parameters).toHaveProperty(
        "objectToCreateOrModifyParameter",
      );
    });

    it("should exclude the primary key from property parameters", () => {
      const emp = defineObjectV2({
        apiName: "Employee7",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          age: { type: "integer" },
        },
      });

      const action = defineCreateOrModifyObjectActionV2(emp);

      expect(action.parameters).not.toHaveProperty("id");
      expect(action.parameters).toHaveProperty("name");
      expect(action.parameters).toHaveProperty("age");
      expect(action.parameters).toHaveProperty(
        "objectToCreateOrModifyParameter",
      );
    });

    it("should exclude structs from parameters", () => {
      const emp = defineObjectV2({
        apiName: "Employee8",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
          metadata: {
            type: {
              type: "struct",
              structDefinition: { key: "string" },
            },
          },
        },
      });

      const action = defineCreateOrModifyObjectActionV2(emp);

      expect(action.parameters).not.toHaveProperty("metadata");
      expect(action.parameters).toHaveProperty("name");
    });

    it("should make property parameters nullable", () => {
      const emp = defineObjectV2({
        apiName: "Employee9",
        primaryKeyPropertyApiName: "id",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const action = defineCreateOrModifyObjectActionV2(emp);

      const nameParam = action.parameters.name as {
        type: string;
        nullable: boolean;
      };
      expect(nameParam.nullable).toBe(true);
    });
  });
});
