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

import {
  addPeepsLink,
  createOfficeAndEmployee,
  deletePeepsLink,
  deleteTodo,
  editTodo,
  Employee,
  largeScaleEditEmployee,
  Office,
  promoteEmployee,
  Todo,
} from "@osdk/client.test.ontology";
import {
  FauxFoundry,
  ontologies,
  startNodeApiServer,
  stubData,
  TypeHelpers,
} from "@osdk/shared.test";
import invariant from "tiny-invariant";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { createClient } from "../../createClient.js";
import { TestLogger } from "../../logger/TestLogger.js";
import { Store } from "./Store.js";
import { createDefer, mockListSubCallback, updateList } from "./testUtils.js";
import { expectStandardObserveLink } from "./testUtils/observeLink/expectStandardObserveLink.js";
import { expectStandardObserveObject } from "./testUtils/observeObject/expectStandardObserveObject.js";

// Defer utility to track subscriptions for cleanup
const defer = createDefer();

// Logger setup
const logger = new TestLogger({}, {
  // level: "debug",
});

// Constants for test objects
const EMPLOYEE_1_ID = 1;
const EMPLOYEE_2_ID = 2;
const OFFICE_1_ID = "101";
const OFFICE_2_ID = "102";
const TODO_1_ID = 201;
const TODO_2_ID = 202;

describe("Store Invalidation Type Isolation", () => {
  let client: ReturnType<typeof createClient>;
  let cache: Store;
  let fauxFoundry: FauxFoundry;

  function setupOntology(fauxFoundry: FauxFoundry) {
    const fauxOntology = fauxFoundry.getDefaultOntology();
    ontologies.addEmployeeOntology(fauxOntology);

    fauxFoundry.getDefaultOntology().registerObjectType(
      stubData.todoWithLinkTypes,
    );

    fauxFoundry.getDefaultOntology().registerActionType(
      stubData.editTodo.actionTypeV2,
      (b, payload) => {
        const { id, ...other } = payload.parameters;
        b.modifyObject<Todo>(Todo.apiName, id, { ...other });
      },
    );

    // The builder's shortcut only covers "string"/"integer"/"boolean" — feed the
    // full ActionParameterV2 for "double" from the stub so we keep a typed
    // payload in the callback below.
    const { actionTypeV2: promoteEmployeeActionTypeV2 } = TypeHelpers
      .actionTypeBuilder("promoteEmployee")
      .addParameter("employeeId", "integer", true)
      .addParameter("newTitle", "string", true)
      .addParameter(
        "newCompensation",
        stubData.PromoteEmployee.parameters.newCompensation,
      )
      .build();

    fauxFoundry.getDefaultOntology().registerActionType(
      promoteEmployeeActionTypeV2,
      (b, payload) => {
        const { employeeId, newTitle } = payload.parameters;
        b.modifyObject<Employee>(Employee.apiName, employeeId, {
          fullName: newTitle,
        });
      },
    );

    const { actionTypeV2: createOfficeAndEmployeeActionTypeV2 } = TypeHelpers
      .actionTypeBuilder("createOfficeAndEmployee")
      .addParameter("officeId", "string", true)
      .addParameter("employeeId", "integer", true)
      .build();

    fauxFoundry.getDefaultOntology().registerActionType(
      createOfficeAndEmployeeActionTypeV2,
      (b, payload) => {
        const { officeId, employeeId } = payload.parameters;
        // widen literal so addObject picks the untyped overload
        const officeType: string = Office.apiName;
        const employeeType: string = Employee.apiName;
        b.addObject(officeType, officeId, {
          name: `Office ${officeId}`,
        });
        b.addObject(employeeType, employeeId, {
          fullName: `Employee ${employeeId}`,
        });
      },
    );

    fauxFoundry.getDefaultOntology().registerActionType(
      stubData.deleteTodo.actionTypeV2,
      (b, payload) => {
        b.deleteObject(Todo.apiName, payload.parameters.id);
      },
    );

    fauxFoundry.getDefaultOntology().registerActionType(
      stubData.addPeepsLink.actionTypeV2,
      (b, payload) => {
        const { leadId, peepId } = payload.parameters;
        b.addLink(Employee.apiName, leadId, "peeps", Employee.apiName, peepId);
      },
    );

    fauxFoundry.getDefaultOntology().registerActionType(
      stubData.deletePeepsLink.actionTypeV2,
      (b, payload) => {
        const { leadId, peepId } = payload.parameters;
        b.removeLink(
          Employee.apiName,
          leadId,
          "peeps",
          Employee.apiName,
          peepId,
        );
      },
    );

    fauxFoundry.getDefaultOntology().registerActionType(
      stubData.largeScaleEditEmployee.actionTypeV2,
      (b, payload) => {
        const { employeeId, newTitle } = payload.parameters;
        b.modifyObject<Employee>(Employee.apiName, employeeId, {
          fullName: newTitle,
        });
      },
      { returnLargeScaleEdits: true },
    );
  }

  function setupTestObjects(fauxFoundry: FauxFoundry) {
    const dataStore = fauxFoundry.getDefaultDataStore();

    // Create Employees
    const emp1 = dataStore.registerObject(Employee, {
      employeeId: EMPLOYEE_1_ID,
      fullName: "Employee One",
    });

    const emp2 = dataStore.registerObject(Employee, {
      employeeId: EMPLOYEE_2_ID,
      fullName: "Employee Two",
    });

    // Create Offices
    const office1 = dataStore.registerObject(Office, {
      officeId: OFFICE_1_ID,
      name: "Office One",
    });

    const office2 = dataStore.registerObject(Office, {
      officeId: OFFICE_2_ID,
      name: "Office Two",
    });

    // Create Todos
    const todo1 = dataStore.registerObject(Todo, {
      $apiName: "Todo",
      id: TODO_1_ID,
      text: "Todo One",
    });

    const todo2 = dataStore.registerObject(Todo, {
      $apiName: "Todo",
      id: TODO_2_ID,
      text: "Todo Two",
    });

    // Link employees to offices
    dataStore.registerLink(emp1, "officeLink", office1, "occupants");
    dataStore.registerLink(emp2, "officeLink", office2, "occupants");

    // Link employees to todos (we're not using these links in this test, but showing different link patterns)
    // Note: There are no direct Todo-Employee links in the test ontology
  }

  beforeAll(async () => {
    // Set up the mock environment and client
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
      { logger },
    );
    ({ client, fauxFoundry } = testSetup);

    // Set up the test ontology and data
    setupOntology(fauxFoundry);
    setupTestObjects(fauxFoundry);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    vi.resetAllMocks();
    cache = new Store(client);
    return () => {
      cache = undefined!;
    };
  });

  describe("Object Type Isolation", () => {
    it("invalidating Employee type should not affect Office objects", async () => {
      // Set up observations for an Employee and Office object
      const { payload: emp1Payload, subFn: empSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Employee,
          primaryKey: EMPLOYEE_1_ID,
        });
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      const { payload: office1Payload, subFn: officeSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Office,
          primaryKey: OFFICE_1_ID,
        });
      const office1 = office1Payload?.object;
      invariant(office1);

      // Clear the initial calls
      empSubFn.next.mockClear();
      officeSubFn.next.mockClear();

      // Invalidate only the Employee type
      await cache.invalidateObjectType(Employee, undefined);

      // Allow time for any potential updates
      await new Promise(resolve => setTimeout(resolve, 500));

      // Employee should be updated
      expect(empSubFn.next).toHaveBeenCalled();

      // Office object should NOT receive any updates
      expect(officeSubFn.next).not.toHaveBeenCalled();
    });

    it("invalidating Office type should not affect Employee objects", async () => {
      // Set up observations for an Employee and Office object
      const { payload: emp1Payload, subFn: empSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Employee,
          primaryKey: EMPLOYEE_1_ID,
        });
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      const { payload: office1Payload, subFn: officeSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Office,
          primaryKey: OFFICE_1_ID,
        });
      const office1 = office1Payload?.object;
      invariant(office1);

      // Clear the initial calls
      empSubFn.next.mockClear();
      officeSubFn.next.mockClear();

      // Invalidate only the Office type
      await cache.invalidateObjectType(Office, undefined);

      // Allow time for any potential updates
      await new Promise(resolve => setTimeout(resolve, 500));

      // Office should be updated
      expect(officeSubFn.next).toHaveBeenCalled();

      // Employee object should NOT receive any updates
      expect(empSubFn.next).not.toHaveBeenCalled();
    });

    it("invalidating Todo type should not affect Employee or Office objects", async () => {
      // Set up observations for Employee, Office, and Todo objects
      const { payload: emp1Payload, subFn: empSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Employee,
          primaryKey: EMPLOYEE_1_ID,
        });
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      const { payload: office1Payload, subFn: officeSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Office,
          primaryKey: OFFICE_1_ID,
        });
      const office1 = office1Payload?.object;
      invariant(office1);

      const { payload: todo1Payload, subFn: todoSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Todo,
          primaryKey: TODO_1_ID,
        });
      const todo1 = todo1Payload?.object;
      invariant(todo1);

      // Clear the initial calls
      empSubFn.next.mockClear();
      officeSubFn.next.mockClear();
      todoSubFn.next.mockClear();

      // Invalidate only the Todo type
      await cache.invalidateObjectType(Todo, undefined);

      // Allow time for any potential updates
      await new Promise(resolve => setTimeout(resolve, 500));

      // Todo should be updated
      expect(todoSubFn.next).toHaveBeenCalled();

      // Employee and Office objects should NOT receive any updates
      expect(empSubFn.next).not.toHaveBeenCalled();
      expect(officeSubFn.next).not.toHaveBeenCalled();
    });
  });

  describe("List Query Isolation", () => {
    it("invalidating Employee type should only affect Employee lists", async () => {
      // Pre-seed the cache with lists - need to fetch the objects first to get proper instances
      const emp1 = await client(Employee).fetchOne(EMPLOYEE_1_ID);
      const emp2 = await client(Employee).fetchOne(EMPLOYEE_2_ID);
      const office1 = await client(Office).fetchOne(OFFICE_1_ID);
      const office2 = await client(Office).fetchOne(OFFICE_2_ID);

      updateList(cache, { type: Employee, where: {}, orderBy: {} }, [
        emp1,
        emp2,
      ]);
      updateList(cache, { type: Office, where: {}, orderBy: {} }, [
        office1,
        office2,
      ]);

      // Set up list observations
      const empListSubFn = mockListSubCallback();
      defer(cache.lists.observe({
        type: Employee,
        where: {},
        orderBy: {},
        mode: "offline",
      }, empListSubFn));

      const officeListSubFn = mockListSubCallback();
      defer(cache.lists.observe({
        type: Office,
        where: {},
        orderBy: {},
        mode: "offline",
      }, officeListSubFn));

      // Wait for the initial calls and clear them
      await new Promise(resolve => setTimeout(resolve, 100));
      empListSubFn.next.mockClear();
      officeListSubFn.next.mockClear();

      // Invalidate only the Employee type
      await cache.invalidateObjectType(Employee, undefined);

      // Allow time for any potential updates
      await new Promise(resolve => setTimeout(resolve, 500));

      // Employee list should be updated
      expect(empListSubFn.next).toHaveBeenCalled();

      // Office list should NOT be invalidated
      expect(officeListSubFn.next).not.toHaveBeenCalled();
    });
  });

  describe("Link Query Isolation", () => {
    it("basic source object filtering works for direct invalidation", async () => {
      // Get an Office object that has Employee occupants
      const { payload: office1Payload, subFn: officeSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Office,
          primaryKey: OFFICE_1_ID,
        });
      const office1 = office1Payload?.object;
      invariant(office1);

      // Get an Employee object
      const { payload: emp1Payload, subFn: empSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Employee,
          primaryKey: EMPLOYEE_1_ID,
        });
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      // Set up observation of Employee -> Office link
      const { linkSubFn: officeLinkSubFn } = await expectStandardObserveLink({
        store: cache,
        srcObject: emp1,
        srcLinkName: "officeLink",
        targetType: Office,
        expected: [expect.objectContaining({ $primaryKey: OFFICE_1_ID })],
      });

      // Clear initial calls
      officeSubFn.next.mockClear();
      empSubFn.next.mockClear();
      officeLinkSubFn.next.mockClear();

      // Invalidate the Employee type
      await cache.invalidateObjectType(Employee, undefined);

      // Allow time for any potential updates
      await new Promise(resolve => setTimeout(resolve, 500));

      // Employee object should be invalidated
      expect(empSubFn.next).toHaveBeenCalled();

      // Employee -> Office link (with Employee source) should be invalidated
      // because its source is an Employee object
      expect(officeLinkSubFn.next).toHaveBeenCalled();
    });
  });

  describe("Complex Multi-Type Scenario", () => {
    it("should correctly isolate invalidation across multiple related objects", async () => {
      // Set up observations for all three object types
      const { payload: emp1Payload, subFn: empSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Employee,
          primaryKey: EMPLOYEE_1_ID,
        });
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      const { payload: office1Payload, subFn: officeSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Office,
          primaryKey: OFFICE_1_ID,
        });
      const office1 = office1Payload?.object;
      invariant(office1);

      const { payload: todo1Payload, subFn: todoSubFn } =
        await expectStandardObserveObject({
          cache,
          type: Todo,
          primaryKey: TODO_1_ID,
        });
      const todo1 = todo1Payload?.object;
      invariant(todo1);

      // Set up list observations
      const empListSubFn = mockListSubCallback();
      defer(cache.lists.observe({
        type: Employee,
        where: {},
        orderBy: {},
        mode: "offline",
      }, empListSubFn));

      const officeListSubFn = mockListSubCallback();
      defer(cache.lists.observe({
        type: Office,
        where: {},
        orderBy: {},
        mode: "offline",
      }, officeListSubFn));

      const todoListSubFn = mockListSubCallback();
      defer(cache.lists.observe({
        type: Todo,
        where: {},
        orderBy: {},
        mode: "offline",
      }, todoListSubFn));

      // Set up link observations
      const { linkSubFn: employeeOfficeLinkSubFn } =
        await expectStandardObserveLink({
          store: cache,
          srcObject: emp1,
          srcLinkName: "officeLink",
          targetType: Office,
          expected: [expect.objectContaining({ $primaryKey: OFFICE_1_ID })],
        });

      // Setup another link observation for the test
      const { linkSubFn: officeOccupantsLinkSubFn } =
        await expectStandardObserveLink({
          store: cache,
          srcObject: office1,
          srcLinkName: "occupants",
          targetType: Employee,
          expected: [expect.objectContaining({ $primaryKey: EMPLOYEE_1_ID })],
        });

      // Clear all the initial calls
      empSubFn.next.mockClear();
      officeSubFn.next.mockClear();
      todoSubFn.next.mockClear();
      empListSubFn.next.mockClear();
      officeListSubFn.next.mockClear();
      todoListSubFn.next.mockClear();
      employeeOfficeLinkSubFn.next.mockClear();
      officeOccupantsLinkSubFn.next.mockClear();

      // Invalidate only the Todo type
      await cache.invalidateObjectType(Todo, undefined);

      // Allow time for any potential updates
      await new Promise(resolve => setTimeout(resolve, 500));

      // Todo object and list should be invalidated
      expect(todoSubFn.next).toHaveBeenCalled();
      expect(todoListSubFn.next).toHaveBeenCalled();

      // All Employee and Office related items should NOT be invalidated
      expect(empSubFn.next).not.toHaveBeenCalled();
      expect(officeSubFn.next).not.toHaveBeenCalled();
      expect(empListSubFn.next).not.toHaveBeenCalled();
      expect(officeListSubFn.next).not.toHaveBeenCalled();
      expect(employeeOfficeLinkSubFn.next).not.toHaveBeenCalled();
      expect(officeOccupantsLinkSubFn.next).not.toHaveBeenCalled();
    });
  });

  describe("invalidateAll", () => {
    it("should invalidate all cached queries", async () => {
      const { subFn: empSubFn } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_1_ID,
      });
      const { subFn: officeSubFn } = await expectStandardObserveObject({
        cache,
        type: Office,
        primaryKey: OFFICE_1_ID,
      });
      const { subFn: todoSubFn } = await expectStandardObserveObject({
        cache,
        type: Todo,
        primaryKey: TODO_1_ID,
      });

      empSubFn.next.mockClear();
      officeSubFn.next.mockClear();
      todoSubFn.next.mockClear();

      await cache.invalidateAll();

      await new Promise(resolve => setTimeout(resolve, 500));

      expect(empSubFn.next).toHaveBeenCalled();
      expect(officeSubFn.next).toHaveBeenCalled();
      expect(todoSubFn.next).toHaveBeenCalled();
    });

    it("should invalidate all list queries", async () => {
      const empListSubFn = mockListSubCallback();
      defer(cache.lists.observe({
        type: Employee,
        where: {},
        orderBy: {},
        pageSize: 10,
      }, empListSubFn));

      const officeListSubFn = mockListSubCallback();
      defer(cache.lists.observe({
        type: Office,
        where: {},
        orderBy: {},
        pageSize: 10,
      }, officeListSubFn));

      await new Promise(resolve => setTimeout(resolve, 100));
      empListSubFn.next.mockClear();
      officeListSubFn.next.mockClear();

      await cache.invalidateAll();

      await new Promise(resolve => setTimeout(resolve, 500));

      expect(empListSubFn.next).toHaveBeenCalled();
      expect(officeListSubFn.next).toHaveBeenCalled();
    });
  });

  describe("invalidateObjects", () => {
    it("should invalidate a single object", async () => {
      const { subFn: empSubFn } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_1_ID,
      });
      const { subFn: emp2SubFn } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_2_ID,
      });

      empSubFn.next.mockClear();
      emp2SubFn.next.mockClear();

      const emp1 = await client(Employee).fetchOne(EMPLOYEE_1_ID);
      invariant(emp1);

      await cache.invalidateObjects(emp1);

      await new Promise(resolve => setTimeout(resolve, 500));

      expect(empSubFn.next).toHaveBeenCalled();
      expect(emp2SubFn.next).not.toHaveBeenCalled();
    });

    it("should invalidate multiple objects", async () => {
      const { subFn: empSubFn } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_1_ID,
      });
      const { subFn: emp2SubFn } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_2_ID,
      });
      const { subFn: officeSubFn } = await expectStandardObserveObject({
        cache,
        type: Office,
        primaryKey: OFFICE_1_ID,
      });

      empSubFn.next.mockClear();
      emp2SubFn.next.mockClear();
      officeSubFn.next.mockClear();

      const emp1 = await client(Employee).fetchOne(EMPLOYEE_1_ID);
      const emp2 = await client(Employee).fetchOne(EMPLOYEE_2_ID);
      invariant(emp1);
      invariant(emp2);

      await cache.invalidateObjects([emp1, emp2]);

      await new Promise(resolve => setTimeout(resolve, 500));

      expect(empSubFn.next).toHaveBeenCalled();
      expect(emp2SubFn.next).toHaveBeenCalled();
      expect(officeSubFn.next).not.toHaveBeenCalled();
    });

    it("should invalidate mixed object types", async () => {
      const { subFn: empSubFn } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_1_ID,
      });
      const { subFn: officeSubFn } = await expectStandardObserveObject({
        cache,
        type: Office,
        primaryKey: OFFICE_1_ID,
      });
      const { subFn: todoSubFn } = await expectStandardObserveObject({
        cache,
        type: Todo,
        primaryKey: TODO_1_ID,
      });

      empSubFn.next.mockClear();
      officeSubFn.next.mockClear();
      todoSubFn.next.mockClear();

      const emp1 = await client(Employee).fetchOne(EMPLOYEE_1_ID);
      const office1 = await client(Office).fetchOne(OFFICE_1_ID);
      invariant(emp1);
      invariant(office1);

      await cache.invalidateObjects([emp1, office1]);

      await new Promise(resolve => setTimeout(resolve, 500));

      expect(empSubFn.next).toHaveBeenCalled();
      expect(officeSubFn.next).toHaveBeenCalled();
      expect(todoSubFn.next).not.toHaveBeenCalled();
    });

    it("should handle empty array", async () => {
      const { subFn: empSubFn } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_1_ID,
      });

      empSubFn.next.mockClear();

      await cache.invalidateObjects([]);

      await new Promise(resolve => setTimeout(resolve, 500));

      expect(empSubFn.next).not.toHaveBeenCalled();
    });
  });

  describe("applyAction auto-invalidation", () => {
    async function observeList(
      type: typeof Employee | typeof Office | typeof Todo,
    ) {
      const subFn = mockListSubCallback();
      defer(cache.lists.observe({
        type,
        where: {},
        orderBy: {},
        mode: "offline",
        pageSize: 10,
      }, subFn));
      await vi.waitFor(() => expect(subFn.next).toHaveBeenCalled());
      subFn.next.mockClear();
      return subFn;
    }

    async function observeOccupantsLink() {
      const { payload } = await expectStandardObserveObject({
        cache,
        type: Office,
        primaryKey: OFFICE_1_ID,
      });
      const office = payload?.object;
      invariant(office);
      const { linkSubFn } = await expectStandardObserveLink({
        store: cache,
        srcObject: office,
        srcLinkName: "occupants",
        targetType: Employee,
        expected: [expect.objectContaining({ $primaryKey: EMPLOYEE_1_ID })],
      });
      linkSubFn.next.mockClear();
      return linkSubFn;
    }

    it("modifying invalidates list and link queries of the modified type", async () => {
      const todoListSubFn = await observeList(Todo);
      const linkSubFn = await observeOccupantsLink();

      await cache.applyAction(editTodo, {
        id: TODO_1_ID,
        text: "Todo One (updated)",
      });
      await vi.waitFor(() => {
        expect(todoListSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({
            status: "loaded",
            resolvedList: expect.arrayContaining([
              expect.objectContaining({ text: "Todo One (updated)" }),
            ]),
          }),
        );
      });

      await cache.applyAction(promoteEmployee, {
        employeeId: EMPLOYEE_1_ID,
        newTitle: "Senior Engineer",
        newCompensation: 200000,
      });
      await vi.waitFor(() => {
        expect(linkSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({
            status: "loaded",
            resolvedList: expect.arrayContaining([
              expect.objectContaining({ fullName: "Senior Engineer" }),
            ]),
          }),
        );
      });
    });

    it("adding invalidates list + link queries of each added type; unrelated types untouched", async () => {
      const empListSubFn = await observeList(Employee);
      const officeListSubFn = await observeList(Office);
      const todoListSubFn = await observeList(Todo);
      const linkSubFn = await observeOccupantsLink();

      await cache.applyAction(createOfficeAndEmployee, {
        officeId: "new-office-1",
        employeeId: 999,
      });

      await vi.waitFor(() => {
        expect(empListSubFn.next).toHaveBeenCalled();
        expect(officeListSubFn.next).toHaveBeenCalled();
        expect(linkSubFn.next).toHaveBeenCalled();
      });
      expect(todoListSubFn.next).not.toHaveBeenCalled();
    });

    it("deleting tombstones the object and refetches list queries", async () => {
      const { subFn: todoSubFn } = await expectStandardObserveObject({
        cache,
        type: Todo,
        primaryKey: TODO_1_ID,
      });
      const todoListSubFn = await observeList(Todo);
      todoSubFn.next.mockClear();

      await cache.applyAction(deleteTodo, { id: TODO_1_ID });

      await vi.waitFor(() => {
        expect(todoSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({ object: undefined }),
        );
      });
      // No-flicker invariant: tombstones deliver object=undefined synchronously,
      // so subscribers must never observe a transient error state from a 404
      // refetch against the just-deleted object.
      expect(todoSubFn.next).not.toHaveBeenCalledWith(
        expect.objectContaining({ status: "error" }),
      );
      await vi.waitFor(() => {
        expect(todoListSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({
            status: "loaded",
            resolvedList: expect.not.arrayContaining([
              expect.objectContaining({ $primaryKey: TODO_1_ID }),
            ]),
          }),
        );
      });
    });

    it("adding a link invalidates link queries on both sides", async () => {
      const { payload: emp1Payload } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_1_ID,
      });
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      const { payload: emp2Payload } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_2_ID,
      });
      const emp2 = emp2Payload?.object;
      invariant(emp2);

      const { linkSubFn: peepsSubFn } = await expectStandardObserveLink({
        store: cache,
        srcObject: emp1,
        srcLinkName: "peeps",
        targetType: Employee,
        expected: [],
      });
      const { linkSubFn: leadSubFn } = await expectStandardObserveLink({
        store: cache,
        srcObject: emp2,
        srcLinkName: "lead",
        targetType: Employee,
        expected: [],
      });
      peepsSubFn.next.mockClear();
      leadSubFn.next.mockClear();

      await cache.applyAction(addPeepsLink, {
        leadId: EMPLOYEE_1_ID,
        peepId: EMPLOYEE_2_ID,
      });

      await vi.waitFor(() => {
        expect(peepsSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({
            status: "loaded",
            resolvedList: expect.arrayContaining([
              expect.objectContaining({ $primaryKey: EMPLOYEE_2_ID }),
            ]),
          }),
        );
      });
      await vi.waitFor(() => {
        expect(leadSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({
            status: "loaded",
            resolvedList: expect.arrayContaining([
              expect.objectContaining({ $primaryKey: EMPLOYEE_1_ID }),
            ]),
          }),
        );
      });
    });

    it("deleting a link invalidates link queries on both sides", async () => {
      const { payload: emp1Payload } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_1_ID,
      });
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      const { payload: emp2Payload } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: EMPLOYEE_2_ID,
      });
      const emp2 = emp2Payload?.object;
      invariant(emp2);

      // Seed the link via addPeepsLink so the deletion has something to remove.
      await cache.applyAction(addPeepsLink, {
        leadId: EMPLOYEE_1_ID,
        peepId: EMPLOYEE_2_ID,
      });

      const { linkSubFn: peepsSubFn } = await expectStandardObserveLink({
        store: cache,
        srcObject: emp1,
        srcLinkName: "peeps",
        targetType: Employee,
        expected: [expect.objectContaining({ $primaryKey: EMPLOYEE_2_ID })],
      });
      const { linkSubFn: leadSubFn } = await expectStandardObserveLink({
        store: cache,
        srcObject: emp2,
        srcLinkName: "lead",
        targetType: Employee,
        expected: [expect.objectContaining({ $primaryKey: EMPLOYEE_1_ID })],
      });
      peepsSubFn.next.mockClear();
      leadSubFn.next.mockClear();

      await cache.applyAction(deletePeepsLink, {
        leadId: EMPLOYEE_1_ID,
        peepId: EMPLOYEE_2_ID,
      });

      await vi.waitFor(() => {
        expect(peepsSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({
            status: "loaded",
            resolvedList: expect.not.arrayContaining([
              expect.objectContaining({ $primaryKey: EMPLOYEE_2_ID }),
            ]),
          }),
        );
      });
      await vi.waitFor(() => {
        expect(leadSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({
            status: "loaded",
            resolvedList: expect.not.arrayContaining([
              expect.objectContaining({ $primaryKey: EMPLOYEE_1_ID }),
            ]),
          }),
        );
      });
    });

    it("largeScaleEdits response invalidates queries via editedObjectTypes", async () => {
      const empListSubFn = await observeList(Employee);
      const todoListSubFn = await observeList(Todo);
      const occupantsLinkSubFn = await observeOccupantsLink();

      // Array payload routes through batchApplyAction, which honors the faux
      // returnLargeScaleEdits flag (single applyAction does not).
      await cache.applyAction(largeScaleEditEmployee, [{
        employeeId: EMPLOYEE_1_ID,
        newTitle: "Lead Engineer",
      }]);

      await vi.waitFor(() => {
        expect(empListSubFn.next).toHaveBeenCalledWith(
          expect.objectContaining({
            status: "loaded",
            resolvedList: expect.arrayContaining([
              expect.objectContaining({ fullName: "Lead Engineer" }),
            ]),
          }),
        );
        expect(occupantsLinkSubFn.next).toHaveBeenCalled();
      });
      expect(todoListSubFn.next).not.toHaveBeenCalled();
    });
  });
});
