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
import { objectSetArithmetic } from "./objectSetArithmetic.js";

describe("objectSetArithmetic", () => {
  it("stubs union, intersect, and subtract with a standalone mock object set", async () => {
    const mockClient = createMockClient();
    const empSet = createMockObjectSet(Employee);
    const unionEmployee = createMockOsdkObject(Employee, { employeeId: 1 });
    const standaloneUnionEmployee = createMockOsdkObject(Employee, {
      employeeId: 2,
    });
    const intersectEmployee = createMockOsdkObject(Employee, { employeeId: 3 });
    const subtractEmployee = createMockOsdkObject(Employee, { employeeId: 4 });

    mockClient
      .when((client) => client(Employee).union(empSet).fetchPage())
      .thenReturnObjects([unionEmployee]);
    mockClient
      .whenObjectSet(empSet, (objectSet) =>
        objectSet.union(mockClient(Employee)).fetchPage(),
      )
      .thenReturnObjects([standaloneUnionEmployee]);
    mockClient
      .when((client) => client(Employee).intersect(empSet).fetchPage())
      .thenReturnObjects([intersectEmployee]);
    mockClient
      .when((client) => client(Employee).subtract(empSet).fetchPage())
      .thenReturnObjects([subtractEmployee]);

    const result = await objectSetArithmetic(mockClient, empSet);

    expect(result).toEqual({
      union: [unionEmployee],
      standaloneUnion: [standaloneUnionEmployee],
      intersect: [intersectEmployee],
      subtract: [subtractEmployee],
    });
  });
});
