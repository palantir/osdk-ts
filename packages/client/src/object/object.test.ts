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

import type { Osdk, PropertyKeys } from "@osdk/api";
import { $Objects, $ontologyRid, Employee } from "@osdk/client.test.ontology";
import { apiServer, stubData, withoutRid } from "@osdk/shared.test";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";
import { additionalContext, type Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createOsdkObject } from "./convertWireToOsdkObjects/createOsdkObject.js";

function asV2Object(o: any, includeRid?: boolean) {
  o = includeRid ? { ...o } : withoutRid(o);
  o.$apiName = o.__apiName;
  o.$objectType = o.__apiName;
  o.$primaryKey = o.__primaryKey;
  o.$title = o.__title;
  delete o.__apiName;
  delete o.__primaryKey;
  delete o.__title;
  return o;
}

describe("OsdkObject", () => {
  let client: Client;
  let customEntryPointClient: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      $ontologyRid,
      async () => "myAccessToken",
    );
    customEntryPointClient = createClient(
      "https://stack.palantirCustom.com/foo/first/someStuff",
      $ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });
  describe("link", () => {
    it("loads an employee", async () => {
      const result = await client(Employee).where({
        employeeId: stubData.employee1.employeeId,
      }).fetchPage();

      // we should get the employee we requested
      const employee = result.data[0];
      expect(JSON.stringify(employee)).toBeDefined();
      expect(employee).toMatchObject({
        "$apiName": "Employee",
        "$objectType": "Employee",
        "$primaryKey": 50030,
        "class": "Red",
        "employeeId": 50030,
        "employeeStatus": expect.anything(),
        "fullName": "John Doe",
        "office": "NYC",
        "startDate": "2019-01-01",
      });

      employee.startDate;

      // it should have the prototype that we assign at hydration time
      expect(Object.keys(employee.$link.lead)).toBeDefined();
    });
    it("loads an employee with custom client", async () => {
      const result = await customEntryPointClient(Employee).where({
        employeeId: stubData.employee1.employeeId,
      }).fetchPage();

      // we should get the employee we requested
      const employee = result.data[0];
      expect(JSON.stringify(employee)).toBeDefined();
      expect(employee).toMatchObject({
        "$apiName": "Employee",
        "$objectType": "Employee",
        "$primaryKey": 50030,
        "class": "Red",
        "employeeId": 50030,
        "employeeStatus": expect.anything(),
        "fullName": "John Doe",
        "office": "NYC",
        "startDate": "2019-01-01",
      });

      employee.startDate;

      // it should have the prototype that we assign at hydration time
      expect(Object.keys(employee.$link.lead)).toBeDefined();
    });

    it("traverses the link from an employee to their lead", async () => {
      const result = await client(Employee).where({
        employeeId: stubData.employee1.employeeId,
      }).fetchPage();
      const employee = result.data[0];

      const lead = await employee.$link.lead.fetchOne({
        $select: ["employeeId"],
      });
      expect(lead.employeeId).toBe(stubData.employee2.employeeId);

      // ensure that the select was performed
      expect(lead.employeeId).toBeDefined();
      expect((lead as any).employeeStatus).toBeUndefined();
    });

    it("traverses the link from an lead to their peeps", async () => {
      // slightly weird request here to hit the existing mocks for employee2
      const employees = await client(Employee).where({
        $and: [
          { "employeeId": { "$gt": 50030 } },
          { "employeeId": { "$lt": 50032 } },
        ],
      }).fetchPage();
      const lead = employees.data[0];
      expect(lead).toBeDefined();

      const peepsResult = await lead.$link.peeps.fetchPage({
        $select: ["fullName", "employeeId"],
      });
      expect(peepsResult.data).toHaveLength(2);
      expect(peepsResult.nextPageToken).toBeUndefined();

      // ensure that the select was performed
      expect(peepsResult.data[0]!.employeeId).toBeDefined();
      expect((peepsResult.data[0] as any).office).toBeUndefined();
    });

    it("traverses the link from an lead to their peep by primaryKey with fetchOne", async () => {
      // slightly weird request here to hit the existing mocks for employee2
      const employees = await client(Employee).where({
        $and: [
          { "employeeId": { "$gt": 50030 } },
          { "employeeId": { "$lt": 50032 } },
        ],
      }).fetchPage();
      const lead = employees.data[0];
      expect(lead).toBeDefined();

      const peep = await lead.$link.peeps.fetchOne(
        stubData.employee1.employeeId,
        {
          $select: ["employeeId"],
        },
      );
      expect(peep).toBeDefined();

      // ensure that select worked
      expect(peep.employeeId).toBeDefined();
      expect((peep as any).employeeStatus).toBeUndefined();
    });
    it("gives $rid access when requested", async () => {
      const result = await client(Employee).where({
        employeeId: stubData.employee1.employeeId,
      }).fetchPage(
        {
          $includeRid: true,
        },
      );
      const leadRid = result.data[0].$rid;
      expect(leadRid).toBeDefined();
      expect(leadRid).toBe(
        "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-7725c5f18b61",
      );
    });
    it("objects are enumerable in an sdk", async () => {
      const objects = Object.keys($Objects);
      expect(objects.sort()).toStrictEqual([
        "BgaoNflPlayer",
        "Employee",
        "ObjectWithTimestampPrimaryKey",
        "Office",
        "Person",
        "Task",
        "Todo",
        "equipment",
        "objectTypeWithAllPropertyTypes",
      ].sort());
    });
  });
  describe("clone", () => {
    let employee: Osdk.Instance<
      $Objects.Employee,
      never,
      PropertyKeys<$Objects.Employee>
    >;
    beforeAll(async () => {
      employee = (await client(Employee).where({
        employeeId: stubData.employee2.employeeId,
      }).fetchPage()).data[0];

      expect(employee).toMatchObject({
        "$apiName": "Employee",
        "$objectType": "Employee",
        "$primaryKey": 50031,
        "$title": "Jane Doe",
        "class": "Blue",
        "employeeId": 50031,
        "fullName": "Jane Doe",
        "office": "SEA",
        "startDate": "2012-02-12",
      });
    });

    it("clones and updates an object with another osdk object", async () => {
      const updatedEmployee = createOsdkObject(
        client[additionalContext],
        {
          "apiName": "Employee",
          "primaryKeyType": "integer",
          "primaryKeyApiName": "employeeId",
          "properties": {
            "class": { "type": "string" },
            "employeeId": { "type": "integer" },
            "fullName": { "type": "string" },
            "office": { "type": "string" },
          },
        } as any,
        {
          "$apiName": "Employee",
          "$objectType": "Employee",
          "$primaryKey": 50031,
          "$title": "Jane Doe",
          "class": "Red",
          "employeeId": 50031,
          "fullName": "Jane Doe",
          "office": "NYC",
        },
      ) as Osdk.Instance<
        Employee,
        never,
        "class" | "employeeId" | "fullName" | "office"
      >;

      const mergedEmployee = employee.$clone(updatedEmployee);

      expectTypeOf(mergedEmployee).toEqualTypeOf(employee);

      expect(mergedEmployee).toMatchInlineSnapshot(`
        {
          "$apiName": "Employee",
          "$objectType": "Employee",
          "$primaryKey": 50031,
          "$title": "Jane Doe",
          "class": "Red",
          "employeeId": 50031,
          "employeeLocation": GeotimeSeriesPropertyImpl {
            "lastFetchedValue": undefined,
          },
          "employeeSensor": TimeSeriesPropertyImpl {},
          "employeeStatus": TimeSeriesPropertyImpl {},
          "fullName": "Jane Doe",
          "office": "NYC",
          "startDate": "2012-02-12",
        }
      `);
    });

    it("clones and updates an object with a record", async () => {
      const mergedEmployee = employee.$clone({
        "class": "Green",
        "employeeId": 50031,
        "fullName": "John Doe",
        "office": "SEA",
        "startDate": "2019-01-01",
      });

      expect(mergedEmployee).toMatchInlineSnapshot(`
        {
          "$apiName": "Employee",
          "$objectType": "Employee",
          "$primaryKey": 50031,
          "$title": "John Doe",
          "class": "Green",
          "employeeId": 50031,
          "employeeLocation": GeotimeSeriesPropertyImpl {
            "lastFetchedValue": undefined,
          },
          "employeeSensor": TimeSeriesPropertyImpl {},
          "employeeStatus": TimeSeriesPropertyImpl {},
          "fullName": "John Doe",
          "office": "SEA",
          "startDate": "2019-01-01",
        }
      `);
    });

    it("correctly sets title", async () => {
      const mergedEmployee = employee.$clone({
        "fullName": "Brad Pitt",
      });

      expect(mergedEmployee).toMatchInlineSnapshot(`
        {
          "$apiName": "Employee",
          "$objectType": "Employee",
          "$primaryKey": 50031,
          "$title": "Brad Pitt",
          "class": "Blue",
          "employeeId": 50031,
          "employeeLocation": GeotimeSeriesPropertyImpl {
            "lastFetchedValue": undefined,
          },
          "employeeSensor": TimeSeriesPropertyImpl {},
          "employeeStatus": TimeSeriesPropertyImpl {},
          "fullName": "Brad Pitt",
          "office": "SEA",
          "startDate": "2012-02-12",
        }
      `);
    });

    it("is able to clone with nothing passed in", async () => {
      expect(employee.$clone()).toMatchObject({
        "$apiName": "Employee",
        "$objectType": "Employee",
        "$primaryKey": 50031,
        "$title": "Jane Doe",
        "class": "Blue",
        "employeeId": 50031,
        "fullName": "Jane Doe",
        "office": "SEA",
        "startDate": "2012-02-12",
      });
    });

    it("throws when merging objects with different primary keys", async () => {
      expect(() =>
        employee.$clone({
          "class": "Green",
          "employeeId": 50035,
        })
      ).toThrow();
    });
  });
});

export async function shouldError(client: Client): Promise<Osdk<Employee>> {
  // @ts-expect-error
  return client(Employee).fetchOne(1, {
    $select: ["employeeId"],
  });
}

export async function shouldError2(
  client: Client,
): Promise<Employee.OsdkObject> {
  // @ts-expect-error
  return client(Employee).fetchOne(1, {
    $select: ["employeeId"],
  });
}

export async function shouldCompile_client_fetchOne_old_select(
  client: Client,
): Promise<Osdk<Employee, "employeeId">> {
  return client(Employee).fetchOne(1, {
    $select: ["employeeId"],
  });
}

export async function shouldCompile_unstableClient_fetchOne_old_select(
  client: Client,
): Promise<Osdk<Employee, "employeeId">> {
  return client(Employee).fetchOne(1, {
    $select: ["employeeId"],
  });
}

export async function shouldCompile_client_fetchOne_new_select(
  client: Client,
): Promise<Employee.OsdkObject<never, "employeeId">> {
  return client(Employee).fetchOne(1, {
    $select: ["employeeId"],
  });
}

export async function shouldCompile_unstableClient_fetchOne_new_select(
  client: Client,
): Promise<Osdk<Employee, "employeeId">> {
  return client(Employee).fetchOne(1, {
    $select: ["employeeId"],
  });
}

export async function shouldCompile_client_fetchOne_old_noArgs(
  client: Client,
): Promise<Osdk<Employee>> {
  return client(Employee).fetchOne(1);
}

export async function shouldCompile_unstableClient_fetchOne_noArgs(
  client: Client,
): Promise<Osdk<Employee>> {
  return client(Employee).fetchOne(1);
}
