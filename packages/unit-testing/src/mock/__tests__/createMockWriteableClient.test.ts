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
import type { Edits } from "@osdk/functions";
import type { WriteableClient } from "@osdk/functions/experimental";
import { flushEdits } from "@osdk/functions/unstable-do-not-use";
import { describe, expect, expectTypeOf, it, vi } from "vitest";

import { createMockOsdkObject } from "../createMockOsdkObject.js";
import { createMockWriteableClient } from "../createMockWriteableClient.js";

type TestEdits =
  | Edits.Object<Employee>
  | Edits.Link<Employee, "peeps">
  | Edits.Interface<FooInterface>;

async function writeEverything(
  client: WriteableClient<TestEdits>,
  emp: Employee.OsdkInstance,
): Promise<number> {
  await client.create(Employee, { employeeId: 2, fullName: "Jane" });
  await client.update(emp, { fullName: "John" });
  await client.link(emp, "peeps", emp);
  await client.unlink(emp, "peeps", emp);
  await client.delete(emp);
  await client.create(FooInterface, { $objectType: "Employee", fooIdp: "x" });
  await flushEdits(client);
  const page = await client(Employee).fetchPage();
  return page.data.length;
}

describe("createMockWriteableClient", () => {
  it("is assignable to WriteableClient", () => {
    expectTypeOf(createMockWriteableClient<TestEdits>()).toExtend<
      WriteableClient<TestEdits>
    >();
  });

  it("records edits and treats flushEdits as a no-op", async () => {
    const client = createMockWriteableClient<TestEdits>();
    const emp = createMockOsdkObject(Employee, { employeeId: 1 });
    client.when((c) => c(Employee).fetchPage()).thenReturnObjects([emp]);

    await expect(writeEverything(client, emp)).resolves.toBe(1);

    expect(client.getEdits()).toMatchObject([
      {
        type: "createObject",
        obj: Employee,
        properties: { employeeId: 2, fullName: "Jane" },
      },
      {
        type: "updateObject",
        obj: { $apiName: "Employee", $primaryKey: 1 },
        properties: { fullName: "John" },
      },
      {
        type: "addLink",
        apiName: "peeps",
        source: { $apiName: "Employee", $primaryKey: 1 },
        target: { $apiName: "Employee", $primaryKey: 1 },
      },
      {
        type: "removeLink",
        apiName: "peeps",
        source: { $apiName: "Employee", $primaryKey: 1 },
        target: { $apiName: "Employee", $primaryKey: 1 },
      },
      {
        type: "deleteObject",
        obj: { $apiName: "Employee", $primaryKey: 1 },
      },
      {
        type: "createObjectForInterface",
        int: FooInterface,
        properties: { $objectType: "Employee", fooIdp: "x" },
      },
    ]);
  });

  it("records one link edit per target when given an array", async () => {
    const client = createMockWriteableClient<TestEdits>();
    const emp1 = createMockOsdkObject(Employee, { employeeId: 1 });
    const emp2 = createMockOsdkObject(Employee, { employeeId: 2 });

    await client.link(emp1, "peeps", [emp1, emp2]);

    expect(client.getEdits()).toMatchObject([
      { type: "addLink", target: { $primaryKey: 1 } },
      { type: "addLink", target: { $primaryKey: 2 } },
    ]);
  });

  it("clears recorded edits", async () => {
    const client = createMockWriteableClient<TestEdits>();
    const emp = createMockOsdkObject(Employee, { employeeId: 1 });

    await client.delete(emp);
    expect(client.getEdits()).toHaveLength(1);

    client.clearEdits();
    expect(client.getEdits()).toEqual([]);
  });

  it("allows spying on write methods", async () => {
    const client = createMockWriteableClient<TestEdits>();
    const emp = createMockOsdkObject(Employee, { employeeId: 1 });
    const updateSpy = vi.spyOn(client, "update");

    await client.update(emp, { fullName: "John" });

    expect(updateSpy).toHaveBeenCalledTimes(1);
    expect(updateSpy.mock.calls[0][0]).toBe(emp);
    expect(updateSpy.mock.calls[0][1]).toEqual({ fullName: "John" });
  });
});
