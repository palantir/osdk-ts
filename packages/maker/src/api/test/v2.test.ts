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
import { defineInterfaceV2 } from "../v2/defineInterfaceV2.js";
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
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
        },
      });

      const ontology = getOntologyDefinition();
      expect(ontology.OBJECT_TYPE["com.test.Airplane"]).toBeDefined();
    });

    it("should preserve literal types in the return value", () => {
      const def = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer", nullable: false },
        },
      });

      expectTypeOf(def.apiName).toEqualTypeOf<"Airplane">();
      expectTypeOf(def.primaryKeyPropertyApiName).toEqualTypeOf<"tailNumber">();
      expectTypeOf(def.properties.tailNumber).toEqualTypeOf<"string">();
      expectTypeOf(def.properties.capacity.type).toEqualTypeOf<"integer">();
      expectTypeOf(def.properties.capacity.nullable).toEqualTypeOf<false>();
    });

    it("should throw on invalid object definitions", () => {
      expect(() =>
        defineObjectV2({
          apiName: "Airplane",
          primaryKeyPropertyApiName: "missingProp",
          displayName: "Airplane",
          pluralDisplayName: "Airplanes",
          titlePropertyApiName: "tailNumber",
          properties: {
            tailNumber: "string",
            model: "string",
          },
        })
      ).toThrow();
    });
  });

  describe("defineLinkV2", () => {
    it("should register a many-to-many link in maker state", () => {
      const airport = defineObjectV2({
        apiName: "Airport",
        primaryKeyPropertyApiName: "code",
        displayName: "Airport",
        pluralDisplayName: "Airports",
        titlePropertyApiName: "name",
        properties: {
          code: "string",
          name: "string",
        },
      });

      const airline = defineObjectV2({
        apiName: "Airline",
        primaryKeyPropertyApiName: "iataCode",
        displayName: "Airline",
        pluralDisplayName: "Airlines",
        titlePropertyApiName: "name",
        properties: {
          iataCode: "string",
          name: "string",
        },
      });

      defineLinkV2({
        apiName: "airlines",
        reverseApiName: "airports",
        many: airport,
        toMany: airline,
      });

      const ontology = getOntologyDefinition();
      expect(
        ontology.LINK_TYPE["airlines-airports"],
      ).toBeDefined();
    });
  });

  describe("defineInterfaceV2", () => {
    it("should register an interface in maker state", () => {
      defineInterfaceV2({
        apiName: "Vehicle",
        displayName: "Vehicle",
        pluralDisplayName: "Vehicles",
        properties: {
          manufacturer: "string",
        },
      });

      const ontology = getOntologyDefinition();
      expect(ontology.INTERFACE_TYPE["com.test.Vehicle"]).toBeDefined();
    });

    it("should preserve literal property keys at the type level", () => {
      const def = defineInterfaceV2({
        apiName: "Vehicle",
        displayName: "Vehicle",
        pluralDisplayName: "Vehicles",
        properties: {
          manufacturer: "string",
          weight: { type: "integer", nullable: true },
        },
      });

      expectTypeOf<typeof def["apiName"]>().toEqualTypeOf<"Vehicle">();
      expectTypeOf<keyof typeof def["properties"]>().toEqualTypeOf<
        "manufacturer" | "weight"
      >();
    });

    it("finalizeTypes emits a runtime value for each interface", () => {
      const vehicle = defineInterfaceV2({
        apiName: "Vehicle",
        displayName: "Vehicle",
        pluralDisplayName: "Vehicles",
        properties: {
          manufacturer: "string",
        },
      });

      const result = finalizeTypes({
        objects: {},
        links: [] as const,
        actions: {},
        interfaces: { Vehicle: vehicle },
      });

      expect(result.Vehicle).toEqual({
        type: "interface",
        apiName: "Vehicle",
        osdkMetadata: { extraUserAgent: "" },
      });
    });
  });

  describe("defineObjectV2 implements", () => {
    it("wires implementsInterfaces into the underlying v1 def", () => {
      const vehicle = defineInterfaceV2({
        apiName: "Vehicle",
        displayName: "Vehicle",
        pluralDisplayName: "Vehicles",
        properties: {
          manufacturer: "string",
        },
      });

      defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          manufacturer: "string",
        },
        implements: [vehicle],
      });

      const ontology = getOntologyDefinition();
      const airplane = ontology.OBJECT_TYPE["com.test.Airplane"];
      expect(airplane?.implementsInterfaces).toEqual([
        {
          implements: vehicle.__v1Def,
          propertyMapping: [
            { interfaceProperty: "manufacturer", mapsTo: "manufacturer" },
          ],
        },
      ]);
    });
  });

  describe("finalizeTypes", () => {
    it("should produce correct runtime values for objects", () => {
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
        },
      });

      const result = finalizeTypes({
        objects: { Airplane: airplane },
        links: [] as const,
        actions: {},
      });

      expect(result.Airplane).toEqual({
        type: "object",
        apiName: "Airplane",
        primaryKeyApiName: "tailNumber",
        primaryKeyType: "string",
        osdkMetadata: { extraUserAgent: "" },
      });
    });

    it("should produce correct runtime values for actions", () => {
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: { tailNumber: "string", model: "string" },
      });
      const action = defineActionV2({
        apiName: "doSomething",
        parameters: { tailNumber: "string" },
        modifiedEntities: { Airplane: { created: true, modified: false } },
      });

      const result = finalizeTypes({
        objects: { Airplane: airplane },
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
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer", nullable: false },
          tags: { type: "string", array: true },
        },
      });

      const result = finalizeTypes({
        objects: { Airplane: airplane },
        links: [] as const,
        actions: {},
      });

      type Plane = typeof result.Airplane;
      type Meta = CompileTimeMetadata<Plane>;

      expectTypeOf<Meta["apiName"]>().toEqualTypeOf<"Airplane">();
      expectTypeOf<Meta["primaryKeyApiName"]>().toEqualTypeOf<"tailNumber">();

      expectTypeOf<Meta["properties"]["tailNumber"]["type"]>().toEqualTypeOf<
        "string"
      >();
      expectTypeOf<Meta["properties"]["tailNumber"]["nullable"]>()
        .toEqualTypeOf<
          false
        >();
      expectTypeOf<Meta["properties"]["model"]["nullable"]>().toEqualTypeOf<
        true
      >();
      expectTypeOf<Meta["properties"]["capacity"]["type"]>().toEqualTypeOf<
        "integer"
      >();
      expectTypeOf<Meta["properties"]["capacity"]["nullable"]>().toEqualTypeOf<
        false
      >();
      expectTypeOf<Meta["properties"]["tags"]["type"]>().toEqualTypeOf<
        "string"
      >();
      expectTypeOf<Meta["properties"]["tags"]["multiplicity"]>()
        .toEqualTypeOf<true>();

      expectTypeOf<Meta["props"]["tailNumber"]>().toEqualTypeOf<string>();
      expectTypeOf<Meta["props"]["model"]>().toEqualTypeOf<
        string | undefined
      >();
      expectTypeOf<Meta["props"]["capacity"]>().toEqualTypeOf<number>();
      expectTypeOf<Meta["props"]["tags"]>().toEqualTypeOf<
        string[] | undefined
      >();
    });

    it("should produce correct link types for many-to-many", () => {
      const airport = defineObjectV2({
        apiName: "Airport",
        primaryKeyPropertyApiName: "code",
        displayName: "Airport",
        pluralDisplayName: "Airports",
        titlePropertyApiName: "name",
        properties: {
          code: "string",
          name: "string",
        },
      });

      const airline = defineObjectV2({
        apiName: "Airline",
        primaryKeyPropertyApiName: "iataCode",
        displayName: "Airline",
        pluralDisplayName: "Airlines",
        titlePropertyApiName: "name",
        properties: {
          iataCode: "string",
          name: "string",
        },
      });

      const link = defineLinkV2({
        apiName: "airlines",
        reverseApiName: "airports",
        many: airport,
        toMany: airline,
      });

      const result = finalizeTypes({
        objects: { Airport: airport, Airline: airline },
        links: [link] as const,
        actions: {},
      });

      type AirportMeta = CompileTimeMetadata<typeof result.Airport>;
      type AirlineMeta = CompileTimeMetadata<typeof result.Airline>;

      expectTypeOf<AirportMeta["links"]["airlines"]["multiplicity"]>()
        .toEqualTypeOf<true>();

      expectTypeOf<AirlineMeta["links"]["airports"]["multiplicity"]>()
        .toEqualTypeOf<true>();
    });

    it("should map date to datetime in wire types", () => {
      const obj = defineObjectV2({
        apiName: "Schedule",
        primaryKeyPropertyApiName: "id",
        displayName: "Schedule",
        pluralDisplayName: "Schedules",
        titlePropertyApiName: "id",
        properties: {
          id: "string",
          flightDate: { type: "date" },
        },
      });

      const result = finalizeTypes({
        objects: { Schedule: obj },
        links: [] as const,
        actions: {},
      });

      type Meta = CompileTimeMetadata<typeof result.Schedule>;

      expectTypeOf<Meta["properties"]["flightDate"]["type"]>()
        .toEqualTypeOf<"datetime">();

      expectTypeOf<Meta["props"]["flightDate"]>().toEqualTypeOf<
        string | undefined
      >();
    });
  });

  describe("defineCreateObjectActionV2", () => {
    it("should register a create action with correct apiName", () => {
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer" },
        },
      });

      const action = defineCreateObjectActionV2(airplane);

      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.create-object-airplane"],
      ).toBeDefined();
      expect(action.apiName).toBe("create-object-airplane");
      expect(action.displayName).toBe("Create Airplane");
    });

    it("should include all non-struct properties as parameters", () => {
      const flight = defineObjectV2({
        apiName: "Flight",
        primaryKeyPropertyApiName: "flightNumber",
        displayName: "Flight",
        pluralDisplayName: "Flights",
        titlePropertyApiName: "flightNumber",
        properties: {
          flightNumber: "string",
          gate: "string",
          priority: "integer",
          metadata: {
            type: {
              type: "struct",
              structDefinition: { key: "string" },
            },
          },
        },
      });

      const action = defineCreateObjectActionV2(flight);

      expect(action.parameters).toHaveProperty("flightNumber");
      expect(action.parameters).toHaveProperty("gate");
      expect(action.parameters).toHaveProperty("priority");
      expect(action.parameters).not.toHaveProperty("metadata");
    });

    it("should support apiName overrides", () => {
      const hangar = defineObjectV2({
        apiName: "Hangar",
        primaryKeyPropertyApiName: "id",
        displayName: "Hangar",
        pluralDisplayName: "Hangars",
        titlePropertyApiName: "name",
        properties: {
          id: "string",
          name: "string",
        },
      });

      const action = defineCreateObjectActionV2(hangar, {
        apiName: "custom-create-hangar",
      });

      expect(action.apiName).toBe("custom-create-hangar");
      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.custom-create-hangar"],
      ).toBeDefined();
    });

    it("should respect excludedProperties", () => {
      const airplane = defineObjectV2({
        apiName: "AirplanePartial",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          serialNumber: "string",
        },
      });

      const action = defineCreateObjectActionV2(airplane, {
        excludedProperties: ["serialNumber"],
      });

      expect(action.parameters).toHaveProperty("tailNumber");
      expect(action.parameters).toHaveProperty("model");
      expect(action.parameters).not.toHaveProperty("serialNumber");
    });

    it("should map date properties to datetime action params", () => {
      const schedule = defineObjectV2({
        apiName: "Schedule2",
        primaryKeyPropertyApiName: "id",
        displayName: "Schedule",
        pluralDisplayName: "Schedules",
        titlePropertyApiName: "id",
        properties: {
          id: "string",
          name: "string",
          flightDate: { type: "date" },
        },
      });

      const action = defineCreateObjectActionV2(schedule);

      expect(action.parameters.flightDate).toBe("datetime");
    });
  });

  describe("defineModifyObjectActionV2", () => {
    it("should register a modify action with objectToModifyParameter", () => {
      const airplane = defineObjectV2({
        apiName: "AirplaneMod",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer" },
        },
      });

      const action = defineModifyObjectActionV2(airplane);

      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.modify-object-airplane-mod"],
      ).toBeDefined();
      expect(action.apiName).toBe("modify-object-airplane-mod");
      expect(action.parameters).toHaveProperty("objectToModifyParameter");
      expect(
        (action.parameters.objectToModifyParameter as { type: string }).type,
      ).toBe("object");
    });

    it("should exclude the primary key from parameters", () => {
      const airplane = defineObjectV2({
        apiName: "AirplaneNoPk",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer" },
        },
      });

      const action = defineModifyObjectActionV2(airplane);

      expect(action.parameters).not.toHaveProperty("tailNumber");
      expect(action.parameters).toHaveProperty("model");
      expect(action.parameters).toHaveProperty("capacity");
    });

    it("should make property parameters nullable", () => {
      const airplane = defineObjectV2({
        apiName: "AirplaneNullable",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
        },
      });

      const action = defineModifyObjectActionV2(airplane);

      const modelParam = action.parameters.model as {
        type: string;
        nullable: boolean;
      };
      expect(modelParam.nullable).toBe(true);
    });
  });

  describe("defineDeleteObjectActionV2", () => {
    it("should register a delete action with only objectToDeleteParameter", () => {
      const airplane = defineObjectV2({
        apiName: "AirplaneDel",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
        },
      });

      const action = defineDeleteObjectActionV2(airplane);

      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.delete-object-airplane-del"],
      ).toBeDefined();
      expect(action.apiName).toBe("delete-object-airplane-del");
      expect(action.parameters).toHaveProperty("objectToDeleteParameter");
      expect(Object.keys(action.parameters)).toHaveLength(1);

      const registered =
        ontology.ACTION_TYPE["com.test.delete-object-airplane-del"];
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
      const airplane = defineObjectV2({
        apiName: "AirplaneAlpha",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer" },
        },
      });

      const action = defineCreateOrModifyObjectActionV2(airplane);

      const ontology = getOntologyDefinition();
      expect(
        ontology.ACTION_TYPE["com.test.create-or-modify-airplane-alpha"],
      ).toBeDefined();
      expect(action.apiName).toBe("create-or-modify-airplane-alpha");
      expect(action.parameters).toHaveProperty(
        "objectToCreateOrModifyParameter",
      );
    });

    it("should exclude the primary key from property parameters", () => {
      const airplane = defineObjectV2({
        apiName: "AirplaneBeta",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer" },
        },
      });

      const action = defineCreateOrModifyObjectActionV2(airplane);

      expect(action.parameters).not.toHaveProperty("tailNumber");
      expect(action.parameters).toHaveProperty("model");
      expect(action.parameters).toHaveProperty("capacity");
      expect(action.parameters).toHaveProperty(
        "objectToCreateOrModifyParameter",
      );
    });

    it("should exclude structs from parameters", () => {
      const airplane = defineObjectV2({
        apiName: "AirplaneGamma",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          metadata: {
            type: {
              type: "struct",
              structDefinition: { key: "string" },
            },
          },
        },
      });

      const action = defineCreateOrModifyObjectActionV2(airplane);

      expect(action.parameters).not.toHaveProperty("metadata");
      expect(action.parameters).toHaveProperty("model");
    });

    it("should make property parameters nullable", () => {
      const airplane = defineObjectV2({
        apiName: "AirplaneDelta",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
        },
      });

      const action = defineCreateOrModifyObjectActionV2(airplane);

      const modelParam = action.parameters.model as {
        type: string;
        nullable: boolean;
      };
      expect(modelParam.nullable).toBe(true);
    });
  });

  describe("OSDK client compatibility", () => {
    it("should produce values assignable to ObjectTypeDefinition", () => {
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer", nullable: false },
        },
      });

      const result = finalizeTypes({
        objects: { Airplane: airplane },
        links: [] as const,
        actions: {},
      });

      // Direct assignment to ObjectTypeDefinition is the contract
      // `client(...)` consumes; this asserts the structural match.
      const _typeCheck: ObjectTypeDefinition = result.Airplane;
      expect(_typeCheck.type).toBe("object");
    });

    it("should produce __DefinitionMetadata that satisfies ObjectMetadata", () => {
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
        },
      });

      const result = finalizeTypes({
        objects: { Airplane: airplane },
        links: [] as const,
        actions: {},
      });

      type Plane = typeof result.Airplane;
      type Meta = CompileTimeMetadata<Plane>;

      expectTypeOf<Meta["type"]>().toEqualTypeOf<"object">();
      expectTypeOf<Meta["primaryKeyApiName"]>().toEqualTypeOf<"tailNumber">();
      expectTypeOf<Meta["titleProperty"]>().toEqualTypeOf<"tailNumber">();
      expectTypeOf<Meta["displayName"]>().toEqualTypeOf<"Airplane">();
      expectTypeOf<Meta["pluralDisplayName"]>().toEqualTypeOf<"Airplanes">();

      const _metaCheck = (m: Meta): ObjectMetadata => m;
      expect(typeof _metaCheck).toBe("function");
    });

    it("should produce property defs assignable to ObjectMetadata.Property", () => {
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          capacity: { type: "integer", nullable: false },
        },
      });

      const result = finalizeTypes({
        objects: { Airplane: airplane },
        links: [] as const,
        actions: {},
      });

      type Plane = typeof result.Airplane;
      type TailProp = CompileTimeMetadata<Plane>["properties"]["tailNumber"];

      const _propCheck = (p: TailProp): ObjectMetadata.Property => p;
      expect(typeof _propCheck).toBe("function");

      // OsdkObjectPropertyType is what the client uses to compute the
      // runtime TS type returned by fetchOne; this asserts the chain resolves.
      type TailRuntime = OsdkObjectPropertyType<TailProp>;
      expectTypeOf<TailRuntime>().toEqualTypeOf<string>();
    });

    it("should map geopoint/geoshape/mediaReference to wire types", () => {
      const obj = defineObjectV2({
        apiName: "AirportSite",
        primaryKeyPropertyApiName: "code",
        displayName: "Airport",
        pluralDisplayName: "Airports",
        titlePropertyApiName: "code",
        properties: {
          code: "string",
          location: "geopoint",
          area: "geoshape",
          photo: "mediaReference",
        },
      });

      const result = finalizeTypes({
        objects: { AirportSite: obj },
        links: [] as const,
        actions: {},
      });

      type Meta = CompileTimeMetadata<typeof result.AirportSite>;

      expectTypeOf<Meta["properties"]["location"]["type"]>().toEqualTypeOf<
        "geopoint"
      >();
      expectTypeOf<Meta["properties"]["area"]["type"]>().toEqualTypeOf<
        "geoshape"
      >();
      expectTypeOf<Meta["properties"]["photo"]["type"]>().toEqualTypeOf<
        "mediaReference"
      >();

      expectTypeOf<Meta["props"]["location"]>().toEqualTypeOf<
        GeoJSON.Point | undefined
      >();
      expectTypeOf<Meta["props"]["area"]>().toEqualTypeOf<
        GeoJSON.GeoJSON | undefined
      >();
    });

    it("should preserve PropertyDef shape across finalizeTypes", () => {
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: { type: "string", nullable: false },
          tags: { type: "string", array: true },
        },
      });

      const result = finalizeTypes({
        objects: { Airplane: airplane },
        links: [] as const,
        actions: {},
      });

      type Meta = CompileTimeMetadata<typeof result.Airplane>;

      expectTypeOf<Meta["properties"]["tailNumber"]>().toMatchTypeOf<
        PropertyDef<"string", "non-nullable", "single">
      >();
      expectTypeOf<Meta["properties"]["model"]>().toMatchTypeOf<
        PropertyDef<"string", "non-nullable", "single">
      >();
      expectTypeOf<Meta["properties"]["tags"]>().toMatchTypeOf<
        PropertyDef<"string", "nullable", "array">
      >();
    });

    it("preserves action parameter literal types through finalizeTypes", () => {
      const airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: { tailNumber: "string", model: "string" },
      });
      const action = defineActionV2({
        apiName: "registerAirplane",
        parameters: {
          tailNumber: "string",
          capacity: "integer",
          firstFlight: "datetime",
        },
        modifiedEntities: { Airplane: { created: true, modified: false } },
      });

      const result = finalizeTypes({
        objects: { Airplane: airplane },
        links: [] as const,
        actions: { registerAirplane: action },
      });

      type Meta = CompileTimeMetadata<typeof result.registerAirplane>;

      // Literal preservation here is what makes
      // `client(action).applyAction({ capacity: "wrong" })` fail to typecheck
      // — the OSDK client maps these literals through DataValueClientToWire
      // to derive the JS value type for each parameter.
      expectTypeOf<Meta["parameters"]["tailNumber"]["type"]>().toEqualTypeOf<
        "string"
      >();
      expectTypeOf<Meta["parameters"]["capacity"]["type"]>().toEqualTypeOf<
        "integer"
      >();
      expectTypeOf<Meta["parameters"]["firstFlight"]["type"]>().toEqualTypeOf<
        "datetime"
      >();
    });
  });
});
