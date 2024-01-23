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
  Op,
  Polygon,
} from "../generatedNoCheck/@test-app/osdk";
import type {
  LoadObjectSetError,
  Page,
  Result,
  SearchObjectsError,
} from "../generatedNoCheck/@test-app/osdk";

import { apiServer } from "@osdk/shared.test";
import type {
  Employee,
  Office,
} from "../generatedNoCheck/@test-app/osdk/ontology/objects";
import { assertOkOrThrow } from "./resultUtils";

describe("SearchObjects", () => {
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

  it("orders objects in ascending order without a filter, and returns all results", async () => {
    const result: Result<Employee[], SearchObjectsError> = await client.ontology
      .objects.Employee.orderBy(emp => emp.employeeId.asc()).all();

    const employees = assertOkOrThrow(result);
    expect(employees).toMatchInlineSnapshot(`
      [
        {
          "__apiName": "Employee",
          "__primaryKey": 50030,
          "__rid": "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-7725c5f18b61",
          "class": "Red",
          "employeeId": 50030,
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
          "fullName": "John Doe",
          "office": "NYC",
          "startDate": _LocalDate {
            "dateTime": "2019-01-01T00:00:00.000Z",
            "type": "LocalDate",
          },
        },
        {
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
        {
          "__apiName": "Employee",
          "__primaryKey": 50032,
          "__rid": "ri.phonograph2-objects.main.object.b9a0b2b0-0a2b-0b8b-9e4b-a9a9b9a0b9a0",
          "class": "Red",
          "employeeId": 50032,
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
          "fullName": "Jack Smith",
          "office": "LON",
          "startDate": _LocalDate {
            "dateTime": "2015-05-15T00:00:00.000Z",
            "type": "LocalDate",
          },
        },
      ]
    `);
  });

  it("orders objects in ascending order with a filter, and returns all results", async () => {
    const result: Result<Employee[], SearchObjectsError> = await client.ontology
      .objects.Employee.where(emp => emp.employeeId.eq(50030))
      .orderBy(emp => emp.employeeId.asc())
      .all();

    expect(result).toMatchInlineSnapshot(`
      {
        "type": "ok",
        "value": [
          {
            "__apiName": "Employee",
            "__primaryKey": 50030,
            "__rid": "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-7725c5f18b61",
            "class": "Red",
            "employeeId": 50030,
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
            "fullName": "John Doe",
            "office": "NYC",
            "startDate": _LocalDate {
              "dateTime": "2019-01-01T00:00:00.000Z",
              "type": "LocalDate",
            },
          },
        ],
      }
    `);
  });

  it("filters objects using the equality operator, and returns all results", async () => {
    const result: Result<Page<Employee>, LoadObjectSetError> = await client
      .ontology.objects.Employee.where(emp => emp.employeeId.eq(50030)).page();

    const employees = assertOkOrThrow(result);
    expect(employees).toMatchInlineSnapshot(`
      {
        "data": [
          {
            "__apiName": "Employee",
            "__primaryKey": 50030,
            "__rid": "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-7725c5f18b61",
            "class": "Red",
            "employeeId": 50030,
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
            "fullName": "John Doe",
            "office": "NYC",
            "startDate": _LocalDate {
              "dateTime": "2019-01-01T00:00:00.000Z",
              "type": "LocalDate",
            },
          },
        ],
        "nextPageToken": undefined,
      }
    `);
  });

  it("filters objects and select single property", async () => {
    const result = await client.ontology.objects.Employee.where(emp =>
      emp.employeeId.eq(50030)
    )
      .select(["fullName"])
      .page();

    const employees = assertOkOrThrow(result);
    expect(employees.data.length).toEqual(1);
    expect(employees.data[0].fullName).toEqual("John Doe");
    expectTypeOf(employees.data[0]).toEqualTypeOf<{
      readonly fullName: string | undefined;
      readonly __primaryKey: number;
      readonly __apiName: "Employee";
    }>();
  });

  it("filters objects, orders and selects single property", async () => {
    const result = await client.ontology.objects.Employee.where(emp =>
      emp.employeeId.eq(50030)
    )
      .orderBy(emp => emp.employeeId.asc())
      .select(["fullName"])
      .page();

    const employees = assertOkOrThrow(result);
    expect(employees.data.length).toEqual(1);
    expect(employees.data[0].fullName).toEqual("John Doe");
    expectTypeOf(employees.data[0]).toEqualTypeOf<{
      readonly fullName: string | undefined;
      readonly __primaryKey: number;
      readonly __apiName: "Employee";
    }>();
  });

  it("filters objects using the and operator and returns all results", async () => {
    const result: Result<Page<Employee>, LoadObjectSetError> = await client
      .ontology.objects.Employee.where(emp =>
        Op.and(emp.employeeId.gt(50030), emp.employeeId.lt(50032))
      ).page();

    expect(result).toMatchInlineSnapshot(`
      {
        "type": "ok",
        "value": {
          "data": [
            {
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
          ],
          "nextPageToken": undefined,
        },
      }
    `);
  });

  it("filters objects which are within a bounding box", async () => {
    const result: Result<Page<Office>, LoadObjectSetError> = await client
      .ontology.objects.Office.where(o =>
        o.entrance.withinBoundingBox({
          topLeft: GeoPoint.fromCoordinates({ latitude: 1.1, longitude: 0.9 }),
          bottomRight: GeoPoint.fromCoordinates({
            latitude: 2.1,
            longitude: 1.9,
          }),
        })
      ).page();

    const offices = assertOkOrThrow(result);
    expect(offices.data).toHaveLength(1);
  });

  it("filters objects which are within a distance of a given point", async () => {
    const result: Result<Page<Office>, LoadObjectSetError> = await client
      .ontology.objects.Office.where(o =>
        o.entrance.withinFeetOf(
          GeoPoint.fromCoordinates({ latitude: 1.1, longitude: 0.9 }),
          100,
        )
      ).page();

    const offices = assertOkOrThrow(result);
    expect(offices.data).toHaveLength(1);
  });

  it("filters objects which are within a distance of a given point", async () => {
    const geoShape: Polygon = Polygon.fromGeoJson({
      type: "Polygon",
      coordinates: [
        [
          [1.1, 0.9],
          [0.9, 0.9],
          [1.1, 1.1],
          [1.1, 0.9],
        ],
      ],
    });

    const result: Result<Page<Office>, LoadObjectSetError> = await client
      .ontology.objects.Office.where(o => o.entrance.withinPolygon(geoShape))
      .page();

    const offices = assertOkOrThrow(result);
    expect(offices.data).toHaveLength(1);
  });

  it("filters objects which intersect a given polygon", async () => {
    const geoShape: Polygon = Polygon.fromGeoJson({
      type: "Polygon",
      coordinates: [
        [
          [1.1, 0.9],
          [0.9, 0.9],
          [1.1, 1.1],
          [1.1, 0.9],
        ],
      ],
    });

    const result: Result<Page<Office>, LoadObjectSetError> = await client
      .ontology.objects.Office.where(o =>
        o.occupiedArea.intersectsPolygon(geoShape)
      ).page();

    const offices = assertOkOrThrow(result);
    expect(offices.data).toHaveLength(1);
  });

  it("filters objects which intersect a given bounding box", async () => {
    const result: Result<Page<Office>, LoadObjectSetError> = await client
      .ontology.objects.Office.where(o =>
        o.occupiedArea.intersectsBoundingBox({
          topLeft: GeoPoint.fromCoordinates({ latitude: 1.1, longitude: 0.9 }),
          bottomRight: GeoPoint.fromCoordinates({
            latitude: 2.1,
            longitude: 1.9,
          }),
        })
      ).page();

    const offices = assertOkOrThrow(result);
    expect(offices.data).toHaveLength(1);
  });
});
