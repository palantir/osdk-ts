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
import type { Person } from "@osdk/client.test.ontology";
import { Task } from "@osdk/client.test.ontology";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createEditBatch } from "./createEditBatch.js";
import type { EditBatch } from "./EditBatch.js";
import type { Edits } from "./types.js";

type TestEditScope =
  | Edits.Object<Task>
  | Edits.Link<Task, "RP">;

describe(createEditBatch, () => {
  let client: Client;
  let editBatch: EditBatch<TestEditScope>;

  beforeEach(() => {
    client = vi.fn() as any as Client;
    editBatch = createEditBatch<TestEditScope>(client);
  });

  it("collects all edits", () => {
    const taskInstance = {
      $apiName: "Task",
      $primaryKey: 2,
    } as Osdk.Instance<Task>;

    const personInstance = {
      $apiName: "Person",
      $primaryKey: 2,
    } as Osdk.Instance<Person>;

    editBatch.create(Task, { id: 0, name: "My Task Name" });
    editBatch.create(Task, { id: 1, name: "My Other Task Name" });
    editBatch.delete({ $apiName: "Task", $primaryKey: 0 });
    editBatch.delete(taskInstance);
    editBatch.update({ $apiName: "Task", $primaryKey: 0 }, {
      name: "My New Task Name",
    });
    editBatch.update(taskInstance, { name: "My Very New Task Name" });
    editBatch.create(Task, { id: 0, name: "My Task Name" });

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
        type: "createObject",
        obj: Task,
        properties: { id: 0, name: "My Task Name" },
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
    ]);
  });
});
