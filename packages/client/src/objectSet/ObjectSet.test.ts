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

import { apiServer, stubData } from "@osdk/shared.test";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";
import { Ontology as MockOntology } from "../generatedNoCheck/Ontology.js";
import type { Employee } from "../generatedNoCheck/ontology/objects.js";
import { createClient } from "../index.js";
import type { Client, Osdk } from "../index.js";

describe("ObjectSet", () => {
  let client: Client<typeof MockOntology>;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      MockOntology,
      "https://stack.palantir.com",
      () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("does not allow intersect/union/subtract with different object types", () => {
    const employeeObjectSet = client.objects.Employee;
    const officeObjectSet = client.objects.Office;

    // @ts-expect-error
    employeeObjectSet.union(officeObjectSet);

    // @ts-expect-error
    employeeObjectSet.subtract(officeObjectSet);

    // @ts-expect-error
    employeeObjectSet.intersect(officeObjectSet);
  });

  it("objects set union", async () => {
    const objectSet = client.objects.Employee;
    const unionedObjectSet = objectSet.union(objectSet);
    let iter = 0;
    const { data: employees } = await unionedObjectSet.fetchPage();
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50030 + iter);
      iter += 1;
    }
    expect(iter).toEqual(2);
  });

  it("objects set subtract", async () => {
    const objectSet = client.objects.Employee;
    const objectSet2 = client.objects.Employee.where({ employeeId: 50030 });
    const subtractedObjectSet = objectSet.subtract(objectSet2);
    let iter = 0;
    const { data: employees } = await subtractedObjectSet.fetchPage();
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50031 + iter);
      iter += 1;
    }
    expect(iter).toEqual(2);
  });

  it("objects set intersect", async () => {
    const objectSet = client.objects.Employee;
    const intersectedObjectSet = objectSet.intersect(objectSet);
    let iter = 0;
    const { data: employees } = await intersectedObjectSet.fetchPage();
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50032);
      iter += 1;
    }
    expect(iter).toEqual(1);
  });

  it("orders objects in ascending order without a filter, and returns all results", async () => {
    const { data: employees } = await client.objects.Employee.fetchPage({
      orderBy: { "employeeId": "asc" },
    });

    expect(employees).toMatchInlineSnapshot(`
      [
        {
          "$apiName": "Employee",
          "$objectType": "Employee",
          "$primaryKey": 50030,
          "class": "Red",
          "employeeId": 50030,
          "employeeStatus": "TimeSeries<String>",
          "fullName": "John Doe",
          "office": "NYC",
          "startDate": "2019-01-01",
        },
        {
          "$apiName": "Employee",
          "$objectType": "Employee",
          "$primaryKey": 50031,
          "class": "Blue",
          "employeeId": 50031,
          "employeeStatus": "TimeSeries<String>",
          "fullName": "Jane Doe",
          "office": "SEA",
          "startDate": "2012-02-12",
        },
        {
          "$apiName": "Employee",
          "$objectType": "Employee",
          "$primaryKey": 50032,
          "class": "Red",
          "employeeId": 50032,
          "employeeStatus": "TimeSeries<String>",
          "fullName": "Jack Smith",
          "office": "LON",
          "startDate": "2015-05-15",
        },
      ]
    `);
  });

  it("allows fetching by PK from a base object set", async () => {
    const employee = await client.objects.Employee.get(
      stubData.employee1.employeeId,
    );
    expectTypeOf<typeof employee>().toEqualTypeOf<Osdk<Employee>>;
    expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
  });

  it("allows fetching by PK from a base object set with selected properties", async () => {
    const employee = await client.objects.Employee.get(
      stubData.employee1.employeeId,
      { select: ["fullName"] },
    );
    expectTypeOf<typeof employee>().toEqualTypeOf<
      Osdk<Employee, "fullName">
    >;
    expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
  });

  it("throws when fetching by PK with an object that does not exist", async () => {
    await expect(client.objects.Employee.get(-1)).rejects.toThrow();
  });

  it("allows fetching by PK from a pivoted object set", async () => {
    const employee = await client.objects.Employee.where({
      employeeId: stubData.employee2.employeeId,
    })
      .pivotTo("peeps").get(stubData.employee1.employeeId);

    expect(employee.$primaryKey).toBe(stubData.employee1.employeeId);
  });
});
