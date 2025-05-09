/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Client, Osdk } from "@osdk/client";
import type { Employee, Person } from "@osdk/client.test.ontology";
import { Office, Task } from "@osdk/client.test.ontology";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createEditBatch } from "./createEditBatch.js";
import type { EditBatch } from "./EditBatch.js";
import type { Edits } from "./types.js";

type TestEditScope =
  | Edits.Object<Task>
  | Edits.Object<Office>
  | Edits.Link<Task, "RP">
  | Edits.Link<Task, "Todos">
  | Edits.Link<Office, "occupants">;

describe(createEditBatch, () => {
  const taskInstance = {
    $apiName: "Task",
    $primaryKey: 2,
  } as Osdk.Instance<Task>;

  const personInstance = {
    $apiName: "Person",
    $primaryKey: 2,
  } as Osdk.Instance<Person>;

  const officeInstance = {
    $apiName: "Office",
    $primaryKey: "2",
  } as Osdk.Instance<Office>;

  const employeeInstance = {
    $apiName: "Employee",
    $primaryKey: 2,
  } as Osdk.Instance<Employee>;

  let client: Client;

  let editBatch: EditBatch<TestEditScope>;

  beforeEach(() => {
    client = vi.fn() as any as Client;
    editBatch = createEditBatch<TestEditScope>(client);
  });

  it("collects all edits", () => {
    editBatch.create(Task, { id: 0, name: "My Task Name" });
    editBatch.create(Task, { id: 1, name: "My Other Task Name" });
    editBatch.create(Task, { id: 3 });
    editBatch.delete({ $apiName: "Task", $primaryKey: 0 });
    editBatch.delete(taskInstance);
    editBatch.update({ $apiName: "Task", $primaryKey: 0 }, {
      name: "My New Task Name",
    });
    editBatch.update(taskInstance, { name: "My Very New Task Name" });
    editBatch.update({ $apiName: "Task", $primaryKey: 3 }, {});
    editBatch.create(Task, { id: 0, name: "My Task Name" });
    editBatch.create(Office, { officeId: "3", capacity: 2 });
    editBatch.update({ $apiName: "Office", $primaryKey: "3" }, { capacity: 4 });

    editBatch.link({ $apiName: "Task", $primaryKey: 0 }, "RP", {
      $apiName: "Person",
      $primaryKey: 0,
    });
    editBatch.link({ $apiName: "Task", $primaryKey: 0 }, "RP", {
      $apiName: "Person",
      $primaryKey: 1,
    });
    editBatch.link(taskInstance, "RP", personInstance);
    editBatch.unlink({ $apiName: "Task", $primaryKey: 0 }, "RP", {
      $apiName: "Person",
      $primaryKey: 1,
    });
    editBatch.link(taskInstance, "Todos", { $apiName: "Todo", $primaryKey: 0 });
    editBatch.unlink({ $apiName: "Task", $primaryKey: 2 }, "Todos", {
      $apiName: "Todo",
      $primaryKey: 0,
    });
    editBatch.link(officeInstance, "occupants", employeeInstance);
    editBatch.unlink(
      { $apiName: "Office", $primaryKey: "2" },
      "occupants",
      employeeInstance,
    );

    expect(editBatch.getEdits()).toEqual([
      {
        type: "createObject",
        obj: Task,
        properties: { id: 0, name: "My Task Name" },
      },
      {
        type: "createObject",
        obj: Task,
        properties: { id: 1, name: "My Other Task Name" },
      },
      {
        type: "createObject",
        obj: Task,
        properties: { id: 3 },
      },
      { type: "deleteObject", obj: { $apiName: "Task", $primaryKey: 0 } },
      { type: "deleteObject", obj: { $apiName: "Task", $primaryKey: 2 } },
      {
        type: "updateObject",
        obj: { $apiName: "Task", $primaryKey: 0 },
        properties: { name: "My New Task Name" },
      },
      {
        type: "updateObject",
        obj: { $apiName: "Task", $primaryKey: 2 },
        properties: { name: "My Very New Task Name" },
      },
      {
        type: "updateObject",
        obj: { $apiName: "Task", $primaryKey: 3 },
        properties: {},
      },
      {
        type: "createObject",
        obj: Task,
        properties: { id: 0, name: "My Task Name" },
      },
      {
        type: "createObject",
        obj: Office,
        properties: { officeId: "3", capacity: 2 },
      },
      {
        type: "updateObject",
        obj: { $apiName: "Office", $primaryKey: "3" },
        properties: { capacity: 4 },
      },
      {
        type: "addLink",
        apiName: "RP",
        source: { $apiName: "Task", $primaryKey: 0 },
        target: { $apiName: "Person", $primaryKey: 0 },
      },
      {
        type: "addLink",
        apiName: "RP",
        source: { $apiName: "Task", $primaryKey: 0 },
        target: { $apiName: "Person", $primaryKey: 1 },
      },
      {
        type: "addLink",
        apiName: "RP",
        source: { $apiName: "Task", $primaryKey: 2 },
        target: { $apiName: "Person", $primaryKey: 2 },
      },
      {
        type: "removeLink",
        apiName: "RP",
        source: { $apiName: "Task", $primaryKey: 0 },
        target: { $apiName: "Person", $primaryKey: 1 },
      },
      {
        type: "addLink",
        apiName: "Todos",
        source: { $apiName: "Task", $primaryKey: 2 },
        target: { $apiName: "Todo", $primaryKey: 0 },
      },
      {
        type: "removeLink",
        apiName: "Todos",
        source: { $apiName: "Task", $primaryKey: 2 },
        target: { $apiName: "Todo", $primaryKey: 0 },
      },
      {
        type: "addLink",
        apiName: "occupants",
        source: { $apiName: "Office", $primaryKey: "2" },
        target: { $apiName: "Employee", $primaryKey: 2 },
      },
      {
        type: "removeLink",
        apiName: "occupants",
        source: { $apiName: "Office", $primaryKey: "2" },
        target: { $apiName: "Employee", $primaryKey: 2 },
      },
    ]);
  });

  it("prevents bad link edits", () => {
    // @ts-expect-error
    editBatch.link(taskInstance, "RP", officeInstance); // Linking to Office instead of Person

    editBatch.link(
      { $apiName: "Task", $primaryKey: 2 },
      // @ts-expect-error
      "occupants",
      employeeInstance,
    ); // Using Office link

    editBatch.link(
      { $apiName: "Office", $primaryKey: "2" },
      "occupants",
      // @ts-expect-error
      personInstance,
    ); // Linking to Person instead of Employee

    // @ts-expect-error
    editBatch.link(officeInstance, "Todos", {
      $apiName: "Todo",
      $primaryKey: 0,
    }); // Using Task link
  });

  it("prevents bad unlink edits", () => {
    // @ts-expect-error
    editBatch.unlink(taskInstance, "RP", officeInstance); // Unlinking Office instead of Person

    editBatch.unlink(
      { $apiName: "Task", $primaryKey: 2 },
      // @ts-expect-error
      "occupants",
      employeeInstance,
    ); // Using Office link

    editBatch.unlink(
      { $apiName: "Office", $primaryKey: "2" },
      "occupants",
      // @ts-expect-error
      personInstance,
    ); // Unlinking Person instead of Employee

    // @ts-expect-error
    editBatch.unlink(officeInstance, "Todos", {
      $apiName: "Todo",
      $primaryKey: 0,
    }); // Using Task link
  });

  it("prevents bad update edits", () => {
    // @ts-expect-error
    editBatch.update(taskInstance, { capacity: 4 }); // Using Office properties

    // @ts-expect-error
    editBatch.update({ $apiName: "Task", $primaryKey: 2 }, { capacity: 4 }); // Using Office properties
  });

  it("prevents bad update edits", () => {
    // @ts-expect-error
    editBatch.update(taskInstance, { capacity: 4 }); // Using Office properties

    // @ts-expect-error
    editBatch.update({ $apiName: "Task", $primaryKey: 2 }, { capacity: 4 }); // Using Office properties
  });
});
