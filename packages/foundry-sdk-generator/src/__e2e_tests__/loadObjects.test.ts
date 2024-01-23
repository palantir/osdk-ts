/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";
import {
  ConfidentialClientAuth,
  FoundryClient,
  GeoPoint,
  LocalDate,
  Polygon,
  Timestamp,
  visitError,
} from "../generatedNoCheck/@test-app/osdk";
import type {
  ErrorVisitor,
  GetObjectError,
  ListLinkedObjectsError,
  ListObjectsError,
  Page,
  Result,
} from "../generatedNoCheck/@test-app/osdk";

import { apiServer, stubData } from "@osdk/shared.test";
import type {
  Employee,
  Office,
} from "../generatedNoCheck/@test-app/osdk/ontology/objects";
import { assertErrOrThrow, assertOkOrThrow } from "./resultUtils";

describe("LoadObjects", () => {
  let client: FoundryClient<ConfidentialClientAuth>;
  beforeAll(async () => {
    apiServer.listen();
    client = new FoundryClient({
      url: "https://stack.palantir.com",
      auth: new ConfidentialClientAuth({
        clientId: "myClientId",
        clientSecret: "myClientSecret",
        url: "https://stack.palantir.com",
      }),
    });

    await client.auth.signInAsServiceUser();
  });

  afterAll(() => {
    apiServer.close();
  });

  it("Loads object which can be destructured", async () => {
    const result: Result<Employee, GetObjectError> = await client.ontology
      .objects.Employee.get(
        stubData.employee1.__primaryKey,
      );

    const emp = assertOkOrThrow(result);
    expect(emp.employeeId).toEqual(50030);
    expect(emp.fullName).toEqual("John Doe");
    expect(emp.office).toEqual("NYC");
    expect(emp.startDate).toEqual(LocalDate.fromISOString("2019-01-01"));

    const destructured: Employee = { ...emp, office: "SF" };
    expect(destructured.fullName).toEqual("John Doe");
    expect(destructured.office).toEqual("SF");
  });

  it("Loads object with specified properties", async () => {
    const result = await client.ontology.objects.Employee.select(["fullName"])
      .get(stubData.employee1.__primaryKey);

    const emp = assertOkOrThrow(result);

    expectTypeOf(emp).toEqualTypeOf<{
      readonly fullName: string | undefined;
      readonly __primaryKey: number;
      readonly __apiName: "Employee";
    }>();

    expect(emp.fullName).toEqual("John Doe");
    expect((emp as any).office).toBeUndefined();
  });

  it("Failure to load object", async () => {
    const result: Result<Employee, GetObjectError> = await client.ontology
      .objects.Employee.get(1234);
    const err = assertErrOrThrow(result);

    const visitor: ErrorVisitor<GetObjectError, void> = {
      ObjectNotFound: error => {
        expect(error).toMatchObject({
          name: "ObjectNotFound",
          errorType: "NOT_FOUND",
          errorInstanceId: "errorInstanceId",
          statusCode: 404,
          primaryKey: {
            employeeId: "1234",
          },
          objectType: "Employee",
        });
      },
      default: error => {
        throw new Error(`Unexpected error: ${error.errorName as string}`);
      },
    };

    visitError(err, visitor);
  });

  it("Load TimeSeries firstPoint and lastPoint", async () => {
    const result: Result<Employee, GetObjectError> = await client.ontology
      .objects.Employee.get(
        stubData.employee1.__primaryKey,
      );

    const emp = assertOkOrThrow(result);
    const firstPointResult = await emp.employeeStatus?.getFirstPoint();
    const firstPoint = assertOkOrThrow(firstPointResult!);
    expect(firstPoint).toMatchInlineSnapshot(`
      {
        "time": _Timestamp {
          "dateTime": "2012-02-12T00:00:00.000Z",
          "type": "Timestamp",
        },
        "value": 10,
      }
    `);
    const lastPointResult = await emp.employeeStatus?.getLastPoint();
    const lastPoint = assertOkOrThrow(lastPointResult!);
    expect(lastPoint).toMatchInlineSnapshot(`
      {
        "time": _Timestamp {
          "dateTime": "2014-04-14T00:00:00.000Z",
          "type": "Timestamp",
        },
        "value": 30,
      }
    `);
  });

  it("Pages through Objects with small PageSize", async () => {
    const result = await client.ontology.objects.Employee.page({ pageSize: 2 });
    const employees = assertOkOrThrow(result);
    expect(employees.data.length).toEqual(2);
    expect(employees.data[0].employeeId).toEqual(50030);
    expect(employees.data[1].employeeId).toEqual(50031);
    expect(employees.nextPageToken).toBeDefined();
    const secondResult = await client.ontology.objects.Employee.page({
      pageSize: 2,
      pageToken: employees.nextPageToken,
    });
    const secondEmployeesPage = assertOkOrThrow(secondResult);
    expect(secondEmployeesPage.data.length).toEqual(1);
    expect(secondEmployeesPage.data[0].employeeId).toEqual(50032);
  });

  it("Gets All Objects", async () => {
    let iter = 0;
    const result: Result<Employee[], ListObjectsError> = await client.ontology
      .objects.Employee.all();
    const employees = assertOkOrThrow(result);
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50030 + iter);
      iter += 1;
    }
    expect(iter).toEqual(3);
  });

  it("Links with a cardinality of ONE are loaded properly", async () => {
    const result: Result<Employee, GetObjectError> = await client.ontology
      .objects.Employee.get(
        stubData.employee1.__primaryKey,
      );

    const emp = assertOkOrThrow(result);
    const lead = await emp.lead.get();
    expect(lead).toMatchInlineSnapshot(`
      {
        "type": "ok",
        "value": {
          "__apiName": "Employee",
          "__primaryKey": 50031,
          "__rid": "ri.phonograph2-objects.main.object.ae6a0b9a-9b9a-4b9e-8b0a-2b0b9a9a0b9a",
          "class": "Blue",
          "employeeId": 50031,
          "employeeStatus": {
            "getFirstPoint": [Function],
            "getLastPoint": [Function],
            "points": {
              "all": [Function],
              "fromDaysAgo": [Function],
              "fromHoursAgo": [Function],
              "fromMillisecondsAgo": [Function],
              "fromMinutesAgo": [Function],
              "fromMonthsAgo": [Function],
              "fromSecondsAgo": [Function],
              "fromWeeksAgo": [Function],
              "fromYearsAgo": [Function],
              "iterate": [Function],
              "range": [Function],
            },
            "type": "TimeSeries",
          },
          "fullName": "Jane Doe",
          "office": "SEA",
          "startDate": _LocalDate {
            "dateTime": "2012-02-12T00:00:00.000Z",
            "type": "LocalDate",
          },
        },
      }
    `);
  });

  it("Links with a cardinality of MANY are loaded properly", async () => {
    const result: Result<Employee, GetObjectError> = await client.ontology
      .objects.Employee.get(
        stubData.employee2.__primaryKey,
      );

    const emp = assertOkOrThrow(result);
    const peeps: Result<Employee[], ListLinkedObjectsError> = await emp.peeps
      .all();
    const peepsPageResult: Result<Page<Employee>, ListLinkedObjectsError> =
      await emp.peeps.page();
    const peepsAll = assertOkOrThrow(peeps);
    expect(peepsAll.length).toEqual(2);
    expect(peepsAll[0].employeeId).toEqual(50030);
    expect(peepsAll[1].employeeId).toEqual(50032);

    const peepsPage = assertOkOrThrow(peepsPageResult);
    expect(peepsPage.data.length).toEqual(2);
    expect(peepsPage.data[0].employeeId).toEqual(50030);
    expect(peepsPage.data[1].employeeId).toEqual(50032);
  });

  it("Objects with Geo properties are loaded properly", async () => {
    const result: Result<Office, GetObjectError> = await client.ontology.objects
      .Office.get(stubData.nycOffice.__primaryKey);

    const office1 = assertOkOrThrow(result);
    expect(office1.entrance?.toGeoJson()).toEqual(stubData.nycOffice.entrance);
    expect(office1.occupiedArea?.toGeoJson()).toEqual(
      stubData.nycOffice.occupiedArea,
    );
  });

  it("Loads all object properties correctly", async () => {
    const result = await client.ontology.objects.objectTypeWithAllPropertyTypes
      .get(
        stubData.objectWithAllPropertyTypes1.__primaryKey,
      );

    const obj = assertOkOrThrow(result);
    expect(obj.string).toEqual("string");
    expect(obj.integer).toEqual(1);
    expect(obj.long).toEqual(1);
    expect(obj.short).toEqual(1);
    expect(obj.float).toEqual(1.1);
    expect(obj.double).toEqual(1.1);
    expect(obj.byte).toEqual(1);
    expect(obj.boolean).toEqual(true);
    expect(obj.date).toEqual(LocalDate.fromISOString("2019-01-01"));
    expect(obj.dateTime).toEqual(
      Timestamp.fromISOString("2019-01-01T01:01:01.000Z"),
    );
    expect(obj.decimal).toEqual(1.1);
    expect(obj.geoPoint).toEqual(
      GeoPoint.fromGeoJson({ type: "Point", coordinates: [1.1, 1.1] }),
    );
    expect(obj.geoShape).toEqual(
      Polygon.fromGeoJson(stubData.objectWithAllPropertyTypes1.geoShape as any),
    );
    expect(obj.stringArray).toEqual(["string"]);
    expect(obj.integerArray).toEqual([1]);
    expect(obj.longArray).toEqual([1]);
    expect(obj.shortArray).toEqual([1]);
    expect(obj.floatArray).toEqual([1.1]);
    expect(obj.doubleArray).toEqual([1.1]);
    expect(obj.byteArray).toEqual([1]);
    expect(obj.booleanArray).toEqual([true]);
    expect(obj.dateArray).toEqual([LocalDate.fromISOString("2019-01-01")]);
    expect(obj.dateTimeArray).toEqual([
      Timestamp.fromISOString("2019-01-01T01:01:01.000Z"),
    ]);
    expect(obj.decimalArray).toEqual([1.1]);
    expect(obj.geoPointArray).toEqual([
      GeoPoint.fromGeoJson({ type: "Point", coordinates: [1.1, 1.1] }),
    ]);
    expect(obj.geoShapeArray).toEqual([
      Polygon.fromGeoJson(stubData.objectWithAllPropertyTypes1.geoShape as any),
    ]);

    const result2 = await client.ontology.objects.objectTypeWithAllPropertyTypes
      .get(
        stubData.objectWithAllPropertyTypesEmptyEntries.__primaryKey,
      );

    const obj2 = assertOkOrThrow(result2);
    expect(obj2.string).toEqual(undefined);
    expect(obj2.integer).toEqual(undefined);
    expect(obj2.long).toEqual(undefined);
    expect(obj2.short).toEqual(undefined);
    expect(obj2.float).toEqual(undefined);
    expect(obj2.double).toEqual(undefined);
    expect(obj2.byte).toEqual(undefined);
    expect(obj2.boolean).toEqual(undefined);
    expect(obj2.date).toEqual(undefined);
    expect(obj2.dateTime).toEqual(undefined);
    expect(obj2.decimal).toEqual(undefined);
    expect(obj2.geoPoint).toEqual(undefined);
    expect(obj2.geoShape).toEqual(undefined);
    expect(obj2.stringArray).toEqual(undefined);
    expect(obj2.integerArray).toEqual(undefined);
    expect(obj2.longArray).toEqual(undefined);
    expect(obj2.shortArray).toEqual(undefined);
    expect(obj2.floatArray).toEqual(undefined);
    expect(obj2.doubleArray).toEqual(undefined);
    expect(obj2.byteArray).toEqual(undefined);
    expect(obj2.booleanArray).toEqual(undefined);
    expect(obj2.dateArray).toEqual(undefined);
    expect(obj2.dateTimeArray).toEqual(undefined);
    expect(obj2.decimalArray).toEqual(undefined);
    expect(obj2.geoPointArray).toEqual(undefined);
    expect(obj2.geoShapeArray).toEqual(undefined);
  });

  it("Displays the object type and property type descriptions properly", async () => {
    const objTypeWithDesc = client.ontology.objects.Employee.description;
    expect(objTypeWithDesc).toEqual(
      "A full-time or part-time \n\n employee of our firm",
    );
    const objTypeWithoutDesc = client.ontology.objects.equipment.description;
    expect(objTypeWithoutDesc).toEqual("");

    const propertyTypeWithDesc =
      client.ontology.objects.equipment.properties.equipmentId.description;
    expect(propertyTypeWithDesc).toEqual("The id of an equipment");
    const propertyTypeWithoutDesc =
      client.ontology.objects.equipment.properties.type.description;
    expect(propertyTypeWithoutDesc).toEqual("");
  });

  it("Loads specified properties when loading all", async () => {
    const result = await client.ontology.objects.Employee.select(["fullName"])
      .all();
    const employees = assertOkOrThrow(result);
    expect(employees.length).toEqual(3);
    expectTypeOf(employees[0]).toEqualTypeOf<{
      readonly fullName: string | undefined;
      readonly __primaryKey: number;
      readonly __apiName: "Employee";
    }>();
  });

  it("Loads specified properties when loading page", async () => {
    const result = await client.ontology.objects.Employee.select(["fullName"])
      .page({ pageSize: 2 });
    const employees = assertOkOrThrow(result);
    expect(employees.data.length).toEqual(2);
    expectTypeOf(employees.data[0]).toEqualTypeOf<{
      readonly fullName: string | undefined;
      readonly __primaryKey: number;
      readonly __apiName: "Employee";
    }>();
  });
});
