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

import { Employee } from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";
import { createMockClient } from "../../mock/createMockClient.js";
import { createMockObjectSet } from "../../mock/createMockObjectSet.js";
import { createMockOsdkObject } from "../../mock/createMockOsdkObject.js";
import { countEmployees, getEmployeeNames } from "./objectSetAsInput.js";

describe("objectSetAsInput", () => {
  describe("getEmployeeNames", () => {
    it("returns names from a standalone mock object set", async () => {
      const mockClient = createMockClient();
      const empSet = createMockObjectSet(Employee);
      const emp1 = createMockOsdkObject(Employee, {
        employeeId: 1,
        fullName: "Alice",
      });
      const emp2 = createMockOsdkObject(Employee, {
        employeeId: 2,
        fullName: "Bob",
      });

      mockClient
        .whenObjectSet(empSet, (os) => os.fetchPage())
        .thenReturnObjects([emp1, emp2]);

      const names = await getEmployeeNames(empSet);

      expect(names).toEqual(["Alice", "Bob"]);
    });

    it("returns 'Unknown' for employees without fullName", async () => {
      const mockClient = createMockClient();
      const empSet = createMockObjectSet(Employee);
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });

      mockClient
        .whenObjectSet(empSet, (os) => os.fetchPage())
        .thenReturnObjects([emp]);

      const names = await getEmployeeNames(empSet);

      expect(names).toEqual(["Unknown"]);
    });
  });

  describe("countEmployees", () => {
    it("returns count from aggregate on a standalone mock object set", async () => {
      const mockClient = createMockClient();
      const empSet = createMockObjectSet(Employee);

      mockClient
        .whenObjectSet(empSet, (os) =>
          os.aggregate({ $select: { $count: "unordered" } }),
        )
        .thenReturnAggregation({ $count: 42 });

      const count = await countEmployees(empSet);

      expect(count).toBe(42);
    });
  });
});
