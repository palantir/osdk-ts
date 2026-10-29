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
import type { Edits } from "@osdk/functions";
import { describe, expect, it } from "vitest";

import { createMockOsdkObject } from "../../mock/createMockOsdkObject.js";
import { createMockWriteableClient } from "../../mock/createMockWriteableClient.js";
import { relocateOffice } from "./writeableClientEdits.js";

describe("relocateOffice", () => {
  it("should update the office of every matching employee", async () => {
    const mockClient = createMockWriteableClient<Edits.Object<Employee>>();
    const emp1 = createMockOsdkObject(Employee, {
      employeeId: 1,
      office: "NYC",
    });
    const emp2 = createMockOsdkObject(Employee, {
      employeeId: 2,
      office: "NYC",
    });

    mockClient
      .when((c) =>
        c(Employee)
          .where({ office: { $eq: "NYC" } })
          .fetchPage(),
      )
      .thenReturnObjects([emp1, emp2]);

    const count = await relocateOffice(mockClient, "NYC", "LON");

    expect(count).toBe(2);
    expect(mockClient.getEdits()).toMatchObject([
      {
        type: "updateObject",
        obj: { $apiName: "Employee", $primaryKey: 1 },
        properties: { office: "LON" },
      },
      {
        type: "updateObject",
        obj: { $apiName: "Employee", $primaryKey: 2 },
        properties: { office: "LON" },
      },
    ]);
  });
});
