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

import { Employee, FooInterface } from "@osdk/client.test.ontology";
import type {
  AddLink,
  CreateObject,
  CreateObjectForInterface,
  DeleteObject,
  RemoveLink,
  UpdateObject,
} from "@osdk/functions/internal";
import { describe, expect, it } from "vitest";
import { createMockClient } from "../../mock/createMockClient.js";
import { createMockOsdkObject } from "../../mock/createMockOsdkObject.js";
import { ontologyEdits } from "./ontologyEdits.js";

describe("ontologyEdits", () => {
  it("should return all edits", () => {
    const mockClient = createMockClient();
    const emp = createMockOsdkObject(
      Employee,
      { employeeId: 1, fullName: "John Doe" },
      undefined,
      { primaryKeyApiName: "employeeId" },
    );

    const edits = ontologyEdits(mockClient, emp);

    expect(edits).toHaveLength(6);
    expect(edits[0]).toEqual({
      type: "createObject",
      obj: Employee,
      properties: { employeeId: 1, fullName: "John Doe" },
    } as CreateObject<Employee>);
    expect(edits[1]).toMatchObject({
      type: "updateObject",
      obj: { $apiName: "Employee", $primaryKey: 1 },
      properties: { favoriteRestaurants: ["McDonald's"] },
    } as UpdateObject<Employee>);
    expect(edits[2]).toMatchObject({
      type: "deleteObject",
      obj: { $apiName: "Employee", $primaryKey: 1 },
    } as DeleteObject<Employee>);
    expect(edits[3]).toMatchObject({
      type: "addLink",
      apiName: "peeps",
      source: { $apiName: "Employee", $primaryKey: 1 },
      target: { $apiName: "Employee", $primaryKey: 1 },
    } as AddLink<Employee, "peeps">);
    expect(edits[4]).toMatchObject({
      type: "removeLink",
      apiName: "peeps",
      source: { $apiName: "Employee", $primaryKey: 1 },
      target: { $apiName: "Employee", $primaryKey: 1 },
    } as RemoveLink<Employee, "peeps">);
    expect(edits[5]).toEqual({
      type: "createObjectForInterface",
      int: FooInterface,
      properties: { $objectType: "Employee", fooIdp: "bar" },
    } as CreateObjectForInterface<FooInterface>);
  });
});
