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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import { beforeEach, describe, expect, it } from "vitest";
import type { BaseServerObject } from "./BaseServerObject.js";
import { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStore } from "./FauxDataStore.js";
import type { FauxDataStoreBatch } from "./FauxDataStoreBatch.js";
import { FauxOntology } from "./FauxOntology.js";
import type { AutomationImpl } from "./hackTypes.js";

describe(FauxDataStore, () => {
  describe("Simple Employee ontology", () => {
    let attachmentsStore: FauxAttachmentStore;
    let fauxOntology: FauxOntology;
    let fauxDataStore: FauxDataStore;

    const pks = ["a", "b", "c", "d"] as const;
    const employees = Object
      .fromEntries(
        pks.map((id) =>
          [id, {
            __apiName: "Employee",
            __primaryKey: id,
            id,
          }] as const
        ),
      ) as unknown as Record<typeof pks[number], BaseServerObject>;

    beforeEach(() => {
      attachmentsStore = new FauxAttachmentStore();
      fauxOntology = new FauxOntology({
        apiName: "foo",
        description: "foo",
        displayName: "foo",
        rid: "ri.foo",
      });
      fauxDataStore = new FauxDataStore(fauxOntology, attachmentsStore);

      const Employee = {
        implementsInterfaces: [],
        implementsInterfaces2: {},
        linkTypes: [{
          apiName: "peeps",
          status: "EXPERIMENTAL",
          objectTypeApiName: "Employee",
          cardinality: "MANY",
          displayName: "Peeps",
          linkTypeRid: "rid.link-type.327",
        }, {
          apiName: "lead",
          status: "EXPERIMENTAL",
          objectTypeApiName: "Employee",
          cardinality: "ONE",
          displayName: "Lead",
          linkTypeRid: "rid.link-type.327",
        }],
        objectType: {
          apiName: "Employee",
          description: "Employee",
          displayName: "Employee",
          rid: "ri.Employee",
          icon: {
            color: "#000000",
            name: "whoCares",
            type: "blueprint",
          },
          pluralDisplayName: "Employees",
          primaryKey: "id",
          properties: {
            id: {
              dataType: { type: "string" },
              rid: "ri.id",
              displayName: "id",
              description: "id",
            },
          },
          status: "ACTIVE",
          titleProperty: "id",
        },
        sharedPropertyTypeMapping: {},
      } as const;

      fauxOntology.registerObjectType(Employee);
    });

    const getLeadsAndPeeps = (id: string) => ({
      lead: fauxDataStore.getLinksOrThrow("Employee", id, "lead")[0],
      peeps: fauxDataStore.getLinksOrThrow("Employee", id, "peeps"),
    });

    it("should work in the happy paths", () => {
      const { a, b, c, d } = employees;

      // set a's lead to b
      fauxDataStore.registerObject(a);
      fauxDataStore.registerObject(b);
      fauxDataStore.registerLink(a, "lead", b, "peeps");

      expect(getLeadsAndPeeps("a")).toMatchObject({
        lead: b,
        peeps: [],
      });
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: undefined,
        peeps: [a],
      });

      // try the reverse (many to one this time)
      fauxDataStore.registerObject(c);
      fauxDataStore.registerObject(d);
      // set c's lead to d
      fauxDataStore.registerLink(d, "peeps", c, "lead");

      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c],
      });
      expect(getLeadsAndPeeps("c")).toMatchObject({
        lead: d,
        peeps: [],
      });

      // set b's lead to c
      fauxDataStore.registerLink(c, "peeps", b, "lead");
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: c,
        peeps: [a],
      });
      expect(getLeadsAndPeeps("c")).toMatchObject({
        lead: d,
        peeps: [b],
      });

      // change b's lead to d
      fauxDataStore.registerLink(d, "peeps", b, "lead");
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: d,
        peeps: [a], // b's peeps should not change
      });
      expect(getLeadsAndPeeps("c")).toMatchObject({
        lead: d,
        peeps: [], // c should no longer have b as a peep
      });
      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c, b], // d has two peeps now
      });

      // remove b's lead
      fauxDataStore.unregisterLink(d, "peeps", b, "lead");
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: undefined,
        peeps: [a], // b's peeps should not change
      });
      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c], // d no longer leads b
      });

      // change b's lead to d but in the other direction
      fauxDataStore.registerLink(b, "lead", d, "peeps");
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: d,
        peeps: [a], // b's peeps should not change
      });
      expect(getLeadsAndPeeps("c")).toMatchObject({
        lead: d,
        peeps: [], // c should no longer have b as a peep
      });
      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c, b], // d has two peeps now
      });

      // remove b's lead in the other direction
      fauxDataStore.unregisterLink(b, "lead", d, "peeps");
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: undefined,
        peeps: [a], // b's peeps should not change
      });
      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c], // d no longer leads b
      });
    });
  });
  describe("Automations", () => {
    it("should run automations after a create action", () => {
      // Setup
      const attachmentsStore = new FauxAttachmentStore();
      const fauxOntology = new FauxOntology({
        apiName: "test",
        description: "test",
        displayName: "test",
        rid: "ri.test",
      });
      const fauxDataStore = new FauxDataStore(fauxOntology, attachmentsStore);

      // Register Task object type
      const Task = {
        implementsInterfaces: [],
        implementsInterfaces2: {},
        linkTypes: [],
        objectType: {
          apiName: "Task",
          description: "Task",
          displayName: "Task",
          rid: "ri.Task",
          icon: {
            color: "#000000",
            name: "task",
            type: "blueprint",
          },
          pluralDisplayName: "Tasks",
          primaryKey: "id",
          properties: {
            id: {
              dataType: { type: "string" },
              rid: "ri.id",
              displayName: "id",
              description: "id",
            },
            status: {
              dataType: { type: "string" },
              rid: "ri.status",
              displayName: "status",
              description: "status",
            },
            priority: {
              dataType: { type: "string" },
              rid: "ri.priority",
              displayName: "priority",
              description: "priority",
            },
          },
          status: "ACTIVE",
          titleProperty: "id",
        },
        sharedPropertyTypeMapping: {},
      } as const;

      fauxOntology.registerObjectType(Task);

      // Register create task action
      const createTaskActionType: OntologiesV2.ActionTypeV2 = {
        apiName: "createTask",
        description: "Create a new task",
        displayName: "Create Task",
        parameters: {
          id: {
            dataType: { type: "string" },
            displayName: "ID",
            required: true,
          },
          status: {
            dataType: { type: "string" },
            displayName: "Status",
            required: true,
          },
        },
        rid: "ri.action.createTask",
        status: "ACTIVE",
        operations: [{
          type: "createObject",
          objectTypeApiName: "Task",
        }],
      };

      fauxOntology.registerActionType(
        createTaskActionType,
        (batch: FauxDataStoreBatch, req: OntologiesV2.ApplyActionRequestV2) => {
          batch.addObject("Task", "task-1", { id: "task-1", status: "open" });
          return {
            validation: {
              parameters: {},
              result: "VALID",
              submissionCriteria: [],
            },
          };
        },
      );

      // Register update task priority action
      const updateTaskPriorityActionType: OntologiesV2.ActionTypeV2 = {
        apiName: "updateTaskPriority",
        description: "Update task priority",
        displayName: "Update Task Priority",
        parameters: {
          id: {
            dataType: { type: "string" },
            displayName: "ID",
            required: true,
          },
          priority: {
            dataType: { type: "string" },
            displayName: "Priority",
            required: true,
          },
        },
        rid: "ri.action.updateTaskPriority",
        status: "ACTIVE",
        operations: [{
          type: "modifyObject",
          objectTypeApiName: "Task",
        }],
      };

      fauxOntology.registerActionType(
        updateTaskPriorityActionType,
        (batch: FauxDataStoreBatch, req: OntologiesV2.ApplyActionRequestV2) => {
          batch.modifyObject("Task", req.parameters.id, {
            priority: req.parameters.priority,
          });
          return {
            validation: {
              parameters: {},
              result: "VALID",
              submissionCriteria: [],
            },
          };
        },
      );

      // Register automation that sets priority to "high" for new tasks
      const automationImpl: AutomationImpl = {
        postActionPredicate: (batch: FauxDataStoreBatch) => {
          // Check if a Task was added in this batch
          return batch.objectEdits.edits.some(
            (edit) => edit.type === "addObject" && edit.objectType === "Task",
          );
        },
        effect: {
          type: "action",
          definition: updateTaskPriorityActionType,
          request: {
            parameters: {
              id: "task-1", // This is hardcoded for simplicity in the test
              priority: "high",
            },
            options: {
              mode: "VALIDATE_AND_EXECUTE",
            },
          },
        },
      };

      fauxOntology.registerAutomation(
        { apiName: "setHighPriorityForNewTasks" },
        automationImpl,
      );

      // Apply the create task action
      fauxDataStore.applyAction("createTask", {
        parameters: {
          id: "task-1",
          status: "open",
        },
        options: {
          mode: "VALIDATE_AND_EXECUTE",
        },
      });

      // Verify the task was created
      const task = fauxDataStore.getObject("Task", "task-1");
      expect(task).toBeDefined();
      expect(task).toMatchObject({
        __apiName: "Task",
        __primaryKey: "task-1",
        status: "open",
        priority: "high", // The automation should have set this
      });
    });
  });
});
