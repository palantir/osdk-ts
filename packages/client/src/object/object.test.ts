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

import type { Osdk } from "@osdk/client.api";
import type { Employee } from "@osdk/client.test.ontology";
import { Ontology as MockOntology } from "@osdk/client.test.ontology";
import { apiServer, stubData, withoutRid } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

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
  describe("link", () => {
    let client: Client;

    beforeAll(async () => {
      apiServer.listen();
      client = createClient(
        "https://stack.palantir.com",
        MockOntology.metadata.ontologyRid,
        async () => "myAccessToken",
      );
    });

    afterAll(() => {
      apiServer.close();
    });

    it("loads an employee", async () => {
      const result = await client(MockOntology.objects.Employee).where({
        employeeId: stubData.employee1.employeeId,
      }).fetchPage();

      // we should get the employee we requested
      const employee = result.data[0];
      expect(employee).toEqual(asV2Object(stubData.employee1));

      employee.startDate;

      // it should have the prototype that we assign at hydration time
      expect(Object.keys(employee.$link.lead)).toBeDefined();
    });

    it("traverses the link from an employee to their lead", async () => {
      const result = await client(MockOntology.objects.Employee).where({
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
      const employees = await client(MockOntology.objects.Employee).where({
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
      const employees = await client(MockOntology.objects.Employee).where({
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
      const result = await client(MockOntology.objects.Employee).where({
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
  });
});
