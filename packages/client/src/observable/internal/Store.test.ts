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

import type { Osdk } from "@osdk/api";
import {
  editTodo,
  Employee,
  FooInterface,
  Office,
  Todo,
} from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import {
  FauxFoundry,
  ontologies,
  startNodeApiServer,
  stubData,
  TypeHelpers,
} from "@osdk/shared.test";
import chalk from "chalk";
import { inspect } from "node:util";
import invariant from "tiny-invariant";
import type { Task } from "vitest";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import type { BaseServerObject } from "../../../../faux/build/types/FauxFoundry/BaseServerObject.js";
import { ActionValidationError } from "../../actions/ActionValidationError.js";
import { type Client } from "../../Client.js";
import { createClient } from "../../createClient.js";
import { TestLogger } from "../../logger/TestLogger.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObjectSetPayload } from "../ObjectSetPayload.js";
import type {
  ObserveListOptions,
  Unsubscribable,
} from "../ObservableClient.js";
import { runOptimisticJob } from "./actions/OptimisticJob.js";
import type { CacheKeys } from "./CacheKeys.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { ObjectCacheKey } from "./object/ObjectCacheKey.js";
import { createOptimisticId } from "./OptimisticId.js";
import { Store } from "./Store.js";
import {
  applyCustomMatchers,
  createClientMockHelper,
  createDefer,
  expectNoMoreCalls,
  expectSingleLinkCallAndClear,
  expectSingleListCallAndClear,
  expectSingleObjectCallAndClear,
  getObject,
  mockLinkSubCallback,
  mockListSubCallback,
  mockObserver,
  mockSingleSubCallback,
  objectPayloadContaining,
  updateList,
  updateObject,
  waitForCall,
} from "./testUtils.js";
import { invalidateList } from "./testUtils/invalidateList.js";
import { expectStandardObserveLink } from "./testUtils/observeLink/expectStandardObserveLink.js";
import { expectStandardObserveObject } from "./testUtils/observeObject/expectStandardObserveObject.js";

const JOHN_DOE_ID = 50030;

const defer = createDefer();

const logger = new TestLogger({}, {
  level: "debug",
});

inspect.defaultOptions.depth = 9;
inspect.defaultOptions.colors = true;

beforeAll(() => {
  vi.setConfig({
    fakeTimers: {
      toFake: [
        "setTimeout",
        "clearTimeout",
        "Date",
        "setInterval",
        "clearInterval",
      ],
    },
  });
});
afterAll(() => {
  vi.resetConfig();
});

const ANY_INIT_ENTRY = {
  // cacheKey: expect.any(Object),
  object: undefined,
  lastUpdated: 0,
  status: "init",
};

// eslint-disable-next-line @typescript-eslint/no-deprecated
function fullTaskName(task?: Task): string {
  return task ? `${fullTaskName(task.suite)} > ${task.name}` : "";
}

beforeEach((x) => {
  console.log(
    chalk.bgRed(chalk.white(fullTaskName(x.task))),
  );
});

// helper method to make debugging tests easier
function testStage(s: string) {
  console.log(chalk.bgYellow(`Test Stage: ${s}`));
}

applyCustomMatchers();

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
}

function setupSomeEmployees(fauxFoundry: FauxFoundry) {
  const dataStore = fauxFoundry.getDefaultDataStore();

  const emp1 = dataStore.registerObject(Employee, {
    employeeId: 1,
  });

  const emp2 = dataStore.registerObject(Employee, {
    employeeId: 2,
  });

  const emp3 = dataStore.registerObject(Employee, {
    $apiName: "Employee",
    employeeId: 3,
  });

  const emp4 = dataStore.registerObject(Employee, {
    $apiName: "Employee",
    employeeId: 4,
  });

  const johnDoe = dataStore.registerObject(Employee, {
    $apiName: "Employee",
    employeeId: JOHN_DOE_ID,
    fullName: "John Doe",
  });

  dataStore.registerLink(emp1, "peeps", johnDoe, "lead");

  // Create offices
  const office1 = dataStore.registerObject(Office, {
    officeId: "101",
    name: "Office 1",
  });

  const office2 = dataStore.registerObject(Office, {
    officeId: "102",
    name: "Office 2",
  });

  // Link employees to offices (Employee->Office: officeLink, Office->Employee: occupants)
  dataStore.registerLink(emp1, "officeLink", office1, "occupants");
  dataStore.registerLink(emp2, "officeLink", office2, "occupants");
}

describe(Store, () => {
  describe("observeLinks", () => {
    let client: Client;
    let cache: Store;
    let fauxFoundry: FauxFoundry;

    beforeAll(async () => {
      // Set up the mock environment and client
      const testSetup = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/"),
        createClient,
        { logger },
      );
      ({ client, fauxFoundry } = testSetup);

      // Use the existing setup function that adds Employee objects
      setupOntology(fauxFoundry);
      setupSomeEmployees(fauxFoundry);

      return () => {
        testSetup.apiServer.close();
      };
    });

    beforeEach(() => {
      cache = new Store(client);
      return () => {
        cache = undefined!;
      };
    });

    const objectLikeJohnDoe = expect.objectContaining({
      $apiName: "Employee",
      $primaryKey: JOHN_DOE_ID,
    });
    const objectLikeEmp2 = expect.objectContaining({
      $apiName: "Employee",
      $primaryKey: 2,
    });

    it("removing link updates", async (x) => {
      const { payload: emp1Payload, subFn } = await expectStandardObserveObject(
        {
          cache,
          type: Employee,
          primaryKey: 1,
        },
      );
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      // Set up mock callback for observing links
      const { payload, linkSubFn } = await expectStandardObserveLink({
        store: cache,
        srcObject: emp1,
        srcLinkName: "peeps",
        targetType: Employee,
        expected: [objectLikeJohnDoe],
      });

      // Unregister the link "in the backend"
      fauxFoundry.getDefaultDataStore().unregisterLink(
        asBsoStub(emp1),
        "peeps",
        { __apiName: "Employee", __primaryKey: JOHN_DOE_ID },
        "lead",
      );

      const targetType = "Employee";
      const currentLinks: Osdk.Instance<any>[] = [objectLikeJohnDoe];
      const expectedLinks: Osdk.Instance<any>[] = [];

      testStage("Observing Employee 1's peeps");

      // Invalidate the employee cache
      const invalidateEmployeePromise = cache.invalidateObjectType(
        targetType,
        undefined,
      );

      await waitForCall(linkSubFn);
      // Initially go to an invalidated loading state
      expectSingleLinkCallAndClear(linkSubFn, currentLinks, {
        status: "loading",
      });

      await invalidateEmployeePromise;

      // Should have no peeps now
      expectSingleLinkCallAndClear(linkSubFn, expectedLinks, {
        status: "loaded",
      });
    });

    it("invalidating Employee type only invalidates links, not Office objects", async () => {
      // Get an Office object that has Employee occupants
      const { payload: office1Payload, subFn: officeSubFn } =
        await expectStandardObserveObject(
          {
            cache,
            type: Office,
            primaryKey: "101",
          },
        );
      const office1 = office1Payload?.object;
      invariant(office1);

      expect(await office1.$link.occupants.fetchPage()).toMatchInlineSnapshot(`
        {
          "data": [
            {
              "$apiName": "Employee",
              "$objectSpecifier": "Employee:1",
              "$objectType": "Employee",
              "$primaryKey": 1,
              "$propertySecurities": undefined,
              "$title": undefined,
              "employeeId": 1,
              "office": "101",
            },
          ],
          "nextPageToken": undefined,
          "totalCount": undefined,
        }
      `);

      testStage("Observing Employee 1");

      // Get an Employee object linked to the office
      const { payload: emp1Payload, subFn: empSubFn } =
        await expectStandardObserveObject(
          {
            cache,
            type: Employee,
            primaryKey: 1,
          },
        );
      const emp1 = emp1Payload?.object;
      invariant(emp1);

      testStage("Observing Office 101's occupants");

      // Set up observation of occupants link
      const { linkSubFn: occupantsLinkSubFn } = await expectStandardObserveLink(
        {
          store: cache,
          srcObject: office1,
          srcLinkName: "occupants",
          targetType: Employee,
          expected: [expect.objectContaining({ $primaryKey: 1 })],
        },
      );

      // Clear any initial calls
      officeSubFn.next.mockClear();
      empSubFn.next.mockClear();
      occupantsLinkSubFn.next.mockClear();

      testStage("Invalidating Employee object type");

      // Invalidate the Employee object type
      // This should cause:
      //  - any object query for Employee to be invalidated
      //  - any object list query for Employee to be invalidated
      //  - any link queries where the source is an Employee to be invalidated
      //  - any link queries where the target is an Employee to be invalidated
      const invalidateEmployeePromise = cache.invalidateObjectType(
        Employee,
        undefined,
      );

      // The link should be invalidated (loading state)
      await waitForCall(occupantsLinkSubFn, 1);

      expectSingleLinkCallAndClear(occupantsLinkSubFn, [emp1], {
        status: "loading",
      });

      // The employee should be invalidated (loading state)
      await waitForCall(empSubFn, 1);
      expectSingleObjectCallAndClear(empSubFn, emp1, "loading");

      // The link should be revalidated (loaded state)
      await waitForCall(occupantsLinkSubFn, 1);
      expectSingleLinkCallAndClear(occupantsLinkSubFn, [emp1], {
        status: "loaded",
      });

      // the Employee object should also be invalidated (loading state)
      await waitForCall(empSubFn, 1);
      expectSingleObjectCallAndClear(empSubFn, emp1, "loaded");

      // The Office object should NOT have any calls
      // This is the key verification - no calls should be made to the office subscription
      expect(officeSubFn.next).not.toHaveBeenCalled();

      await invalidateEmployeePromise;

      // ensure at the end of invalidation there are no new calls
      expect(occupantsLinkSubFn.next).not.toHaveBeenCalled();
      expect(empSubFn.next).not.toHaveBeenCalled();
      expect(officeSubFn.next).not.toHaveBeenCalled();
    });

    it("re-subscribing within dedupeInterval does not refetch", async () => {
      const { payload: emp1Payload } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: 2,
      });
      const emp2 = emp1Payload?.object;
      invariant(emp2);

      const linkSubFn1 = mockLinkSubCallback();
      const sub1 = cache.links.observe({
        linkName: "peeps",
        srcType: { type: "object", apiName: emp2.$apiName },
        pk: emp2.$primaryKey,
        dedupeInterval: 60_000,
      }, linkSubFn1);

      await waitForCall(linkSubFn1);
      expectSingleLinkCallAndClear(linkSubFn1, [], { status: "loading" });

      await waitForCall(linkSubFn1);
      expectSingleLinkCallAndClear(linkSubFn1, [], {
        status: "loaded",
      });

      sub1.unsubscribe();

      const linkSubFn2 = mockLinkSubCallback();
      defer(cache.links.observe({
        linkName: "peeps",
        srcType: { type: "object", apiName: emp2.$apiName },
        pk: emp2.$primaryKey,
        dedupeInterval: 60_000,
      }, linkSubFn2));

      await waitForCall(linkSubFn2);
      expectSingleLinkCallAndClear(linkSubFn2, [], {
        status: "loaded",
      });
    });

    it("forced revalidation bypasses dedupeInterval", async () => {
      const { payload: emp1Payload } = await expectStandardObserveObject({
        cache,
        type: Employee,
        primaryKey: 2,
      });
      const emp2 = emp1Payload?.object;
      invariant(emp2);

      const linkSubFn = mockLinkSubCallback();
      defer(cache.links.observe({
        linkName: "peeps",
        srcType: { type: "object", apiName: emp2.$apiName },
        pk: emp2.$primaryKey,
        dedupeInterval: 60_000,
      }, linkSubFn));

      await waitForCall(linkSubFn);
      expectSingleLinkCallAndClear(linkSubFn, [], { status: "loading" });

      await waitForCall(linkSubFn);
      expectSingleLinkCallAndClear(linkSubFn, [], {
        status: "loaded",
      });

      const invalidatePromise = cache.invalidateObjectType(
        "Employee",
        undefined,
      );

      await waitForCall(linkSubFn);
      expectSingleLinkCallAndClear(linkSubFn, [], {
        status: "loading",
      });

      await invalidatePromise;

      expectSingleLinkCallAndClear(linkSubFn, [], {
        status: "loaded",
      });
    });
  });

  describe("with mock server", () => {
    let client: Client;
    let cache: Store;
    let cacheKeys: CacheKeys<KnownCacheKey>;

    let employeesAsServerReturns: Osdk.Instance<Employee>[];
    let mutatedEmployees: Osdk.Instance<Employee>[];

    beforeAll(async () => {
      const testSetup = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/"),
        createClient,
        { logger },
      );
      ({ client } = testSetup);

      setupOntology(testSetup.fauxFoundry);
      setupSomeEmployees(testSetup.fauxFoundry);

      employeesAsServerReturns = (await client(Employee).fetchPage({
        $includeRid: true,
      })).data;
      mutatedEmployees = [
        employeesAsServerReturns[0],
        employeesAsServerReturns[1].$clone({
          fullName: "foo",
        }),
        ...employeesAsServerReturns.slice(2),
      ];

      return () => {
        testSetup.apiServer.close();
      };
    });

    beforeEach(() => {
      cache = new Store(client);
      cacheKeys = cache.cacheKeys;

      return () => {
        cache = undefined!;
      };
    });

    it("basic single object works", async () => {
      const emp = employeesAsServerReturns[0];

      const cacheKey = cacheKeys.get<ObjectCacheKey>(
        "object",
        "Employee",
        emp.$primaryKey,
      );

      // starts empty
      expect(
        cache.getValue(cacheKey)?.value,
      ).toBeUndefined();

      const result = updateObject(cache, emp);
      expect(emp).toBe(result);

      // getting the object now matches the result
      expect(cache.getValue(cacheKey)?.value).toEqual(
        result,
      );

      const updatedEmpFromCache = updateObject(
        cache,
        emp.$clone({ fullName: "new name" }),
      );
      expect(updatedEmpFromCache).not.toBe(emp);

      // getting it again is the updated object
      expect(cache.getValue(cacheKey)?.value).toEqual(
        updatedEmpFromCache,
      );
    });

    describe("optimistic updates", () => {
      it("rolls back objects", async () => {
        const emp = employeesAsServerReturns[0];
        updateObject(cache, emp); // pre-seed the cache with the "real" value

        const subFn = mockSingleSubCallback();
        defer(
          cache.objects.observe({
            apiName: Employee,
            pk: emp.$primaryKey,
            mode: "offline",
          }, subFn),
        );

        expectSingleObjectCallAndClear(subFn, emp, "loaded");

        const optimisticId = createOptimisticId();
        // update with an optimistic write
        updateObject(cache, emp.$clone({ fullName: "new name" }), {
          optimisticId,
        });
        expectSingleObjectCallAndClear(
          subFn,
          emp.$clone({ fullName: "new name" }),
          "loaded",
        );

        // remove the optimistic write
        cache.layers.remove(optimisticId);

        expectSingleObjectCallAndClear(subFn, emp, "loaded");
      });

      it("rolls back to an updated real value", async () => {
        // pre-seed the cache with the "real" value
        updateList(cache, {
          type: Employee,
          where: {},
          orderBy: {},
        }, employeesAsServerReturns);

        const emp = employeesAsServerReturns[0];

        const empSubFn = mockSingleSubCallback();
        defer(
          cache.objects.observe({
            apiName: Employee,
            pk: emp.$primaryKey,
            mode: "offline",
          }, empSubFn),
        );

        expectSingleObjectCallAndClear(empSubFn, emp, "loaded");

        const listSubFn = mockListSubCallback();
        defer(
          cache.lists.observe({
            type: Employee,
            mode: "offline",
          }, listSubFn),
        );

        await waitForCall(listSubFn, 1);
        expectSingleListCallAndClear(listSubFn, employeesAsServerReturns);

        const optimisticEmployee = emp.$clone({ fullName: "new name" });

        const optimisticId = createOptimisticId();

        testStage("optimistic update");
        expect(listSubFn.next).not.toHaveBeenCalled();

        // update with an optimistic write
        updateObject(cache, optimisticEmployee, {
          optimisticId,
        });

        testStage("after optimistic update");

        // expect optimistic write
        expectSingleObjectCallAndClear(empSubFn, optimisticEmployee);

        // expect optimistic write to the list
        await waitForCall(listSubFn, 1);
        expectSingleListCallAndClear(
          listSubFn,
          [
            optimisticEmployee,
            ...employeesAsServerReturns.slice(1),
          ],
          {
            isOptimistic: true,
            status: "loading",
          },
        );

        // write the real update, via the earlier list definition
        const truthUpdatedEmployee = emp.$clone({
          fullName: "real update",
        });

        testStage("write real update");

        updateList(cache, { type: Employee, where: {}, orderBy: {} }, [
          truthUpdatedEmployee,
        ]);

        // remove the optimistic write
        cache.layers.remove(optimisticId);

        // see the object observation get updated
        expectSingleObjectCallAndClear(
          empSubFn,
          truthUpdatedEmployee,
          "loaded",
        );

        // see the list get updated
        await waitForCall(listSubFn, 1);
        expectSingleListCallAndClear(listSubFn, [truthUpdatedEmployee], {
          status: "loaded",
          isOptimistic: false,
        });
      });

      it("rolls back to an updated real value via list", async () => {
        const emp = employeesAsServerReturns[0];
        updateObject(cache, emp); // pre-seed the cache with the "real" value

        const subFn = mockSingleSubCallback();
        defer(
          cache.objects.observe({
            apiName: Employee,
            pk: emp.$primaryKey,
            mode: "offline",
          }, subFn),
        );
        expectSingleObjectCallAndClear(subFn, emp, "loaded");

        const optimisticEmployee = emp.$clone({ fullName: "new name" });

        // update with an optimistic write
        const optimisticId = createOptimisticId();
        updateObject(cache, optimisticEmployee, {
          optimisticId,
        });
        expectSingleObjectCallAndClear(subFn, optimisticEmployee);

        const truthUpdatedEmployee = emp.$clone({
          fullName: "real update",
        });
        updateObject(cache, truthUpdatedEmployee);

        // we shouldn't expect an update because the top layer has a value
        expect(subFn.next).not.toHaveBeenCalled();

        // remove the optimistic write
        cache.layers.remove(optimisticId);

        expectSingleObjectCallAndClear(subFn, truthUpdatedEmployee);
        expectNoMoreCalls(subFn);
      });

      describe("object deletes", () => {
        it("it properly updates the list", async () => {
          const emp = employeesAsServerReturns[0];
          updateList(cache, { type: Employee, where: {}, orderBy: {} }, [
            emp,
          ]);

          const subFn = mockSingleSubCallback();
          defer(
            cache.objects.observe({
              apiName: Employee,
              pk: emp.$primaryKey,
              mode: "offline",
            }, subFn),
          );
          expectSingleObjectCallAndClear(subFn, emp);

          const subListFn = mockListSubCallback();
          defer(
            cache.lists.observe({
              type: Employee,
              mode: "offline",
            }, subListFn),
          );

          await waitForCall(subListFn, 1);
          expectSingleListCallAndClear(
            subListFn,
            [emp],
            { status: "loaded" },
          );

          const cacheKey = cacheKeys.get<ObjectCacheKey>(
            "object",
            emp.$apiName,
            emp.$primaryKey,
          );

          // Actual test is here, prior to this is setup
          testStage("delete the object");

          cache.batch({
            optimisticId: createOptimisticId(),
          }, (batch) => {
            batch.changes.deleteObject(cacheKey);
            batch.delete(cacheKey, "loading");
          });

          expectSingleObjectCallAndClear(subFn, undefined);

          await waitForCall(subListFn, 1);
          expectSingleListCallAndClear(
            subListFn,
            [],
            { isOptimistic: true, status: "loading" },
          );
        });
      });
    });

    describe(".invalidateObject", () => {
      it("triggers an update", async () => {
        const emp = employeesAsServerReturns[0];
        const staleEmp = emp.$clone({ fullName: "stale" });
        updateObject(cache, staleEmp);

        const subFn = mockSingleSubCallback();
        defer(
          cache.objects.observe({
            apiName: Employee,
            pk: emp.$primaryKey,
            mode: "offline",
          }, subFn),
        );

        expectSingleObjectCallAndClear(subFn, staleEmp, "loaded");

        // invalidate
        void cache.invalidateObject(Employee, staleEmp.$primaryKey);

        await waitForCall(subFn);
        expectSingleObjectCallAndClear(subFn, staleEmp, "loading");

        await waitForCall(subFn);
        expectSingleObjectCallAndClear(subFn, emp, "loaded");

        expectNoMoreCalls(subFn);
      });
    });

    describe(".invalidateList", () => {
      it("triggers an update", async () => {
        const emp = employeesAsServerReturns[0];
        const staleEmp = emp.$clone({ fullName: "stale" });
        updateList(cache, { type: Employee, where: {}, orderBy: {} }, [
          staleEmp,
        ]);

        const subFn = mockSingleSubCallback();
        defer(
          cache.objects.observe({
            apiName: Employee,
            pk: emp.$primaryKey,
            mode: "offline",
          }, subFn),
        );
        expectSingleObjectCallAndClear(subFn, staleEmp);

        const subListFn = mockListSubCallback();
        defer(
          cache.lists.observe({
            type: Employee,
            mode: "offline",
          }, subListFn),
        );

        await waitForCall(subListFn, 1);
        expectSingleListCallAndClear(
          subListFn,
          [staleEmp],
          { status: "loaded" },
        );

        testStage("invalidate");

        const invalidateListPromise = invalidateList(cache, { type: Employee });
        testStage("check invalidate");

        await waitForCall(subListFn, 1);
        expectSingleListCallAndClear(
          subListFn,
          [staleEmp],
          { status: "loading" },
        );

        await waitForCall(subListFn, 1);
        expectSingleListCallAndClear(
          subListFn,
          employeesAsServerReturns,
          { status: "loaded" },
        );

        await waitForCall(subFn, 1);
        expectSingleObjectCallAndClear(subFn, emp, "loaded");

        // don't leave promises dangling
        await invalidateListPromise;
      });
    });

    describe(".invalidateObjectType", () => {
      beforeEach(() => {
        vi.useFakeTimers({});
      });
      afterEach(() => {
        vi.useRealTimers();
      });

      it("triggers an update", async () => {
        const emp = employeesAsServerReturns[0];
        const staleEmp = emp.$clone({ fullName: "stale" });
        updateList(cache, { type: Employee, where: {}, orderBy: {} }, [
          staleEmp,
        ]);

        const subFn = mockSingleSubCallback();
        defer(
          cache.objects.observe({
            apiName: Employee,
            pk: emp.$primaryKey,
            mode: "offline",
          }, subFn),
        );
        expectSingleObjectCallAndClear(subFn, staleEmp);

        const subListFn = mockListSubCallback();
        defer(
          cache.lists.observe({
            type: Employee,
            where: {},
            orderBy: {},
            mode: "offline",
          }, subListFn),
        );

        await waitForCall(subListFn, 1);
        expectSingleListCallAndClear(
          subListFn,
          [staleEmp],
          { status: "loaded" },
        );

        testStage("invalidate");

        const pInvalidateComplete = cache.invalidateObjectType(
          Employee,
          undefined,
        );

        await waitForCall(subListFn, 1);
        expectSingleListCallAndClear(subListFn, [staleEmp], {
          status: "loading",
        });

        await waitForCall(subListFn, 1);
        expectSingleListCallAndClear(subListFn, employeesAsServerReturns);

        testStage("Check invalidation call for single sub");

        await waitForCall(subFn, 2);
        // First call is for loading state
        expect(subFn.next).toHaveBeenNthCalledWith(
          1,
          objectPayloadContaining({
            status: "loading",
            object: staleEmp as unknown as ObjectHolder,
          }),
        );
        // Second call is for loaded state with fresh data
        expect(subFn.next).toHaveBeenNthCalledWith(
          2,
          objectPayloadContaining({
            status: "loaded",
            object: emp as unknown as ObjectHolder,
          }),
        );
        subFn.next.mockClear();

        // we don't need this value to control the test but we want to make sure we don't have
        // any unhandled exceptions upon test completion
        await pInvalidateComplete;
      });
    });

    describe(".observeObject (force)", () => {
      const subFn1 = mockSingleSubCallback();
      const subFn2 = mockSingleSubCallback();

      beforeEach(async () => {
        subFn1.complete.mockClear();
        subFn1.next.mockClear();
        subFn1.error.mockClear();

        subFn2.complete.mockClear();
        subFn2.next.mockClear();
        subFn2.error.mockClear();
      });

      const likeEmployee50030 = expect.objectContaining({
        $primaryKey: JOHN_DOE_ID,
        fullName: "John Doe",
      });

      it("fetches and updates twice", async () => {
        defer(
          cache.objects.observe({
            apiName: Employee,
            pk: JOHN_DOE_ID,
            mode: "force",
          }, subFn1),
        );

        expect(subFn1.next).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            status: "loading",
            object: undefined,
            isOptimistic: false,
          }),
        );

        subFn1.next.mockClear();

        await waitForCall(subFn1);
        expect(subFn1.next).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: likeEmployee50030,
            isOptimistic: false,
          }),
        );

        const firstLoad = subFn1.next.mock.lastCall?.[0]!;

        subFn1.next.mockClear();

        defer(
          cache.objects.observe({
            apiName: Employee,
            pk: JOHN_DOE_ID,
            mode: "force",
          }, subFn2),
        );
        expectSingleObjectCallAndClear(subFn1, likeEmployee50030, "loading");

        // should be the earlier results
        expectSingleObjectCallAndClear(subFn2, likeEmployee50030, "loading");

        // both will be updated
        for (const s of [subFn1, subFn2]) {
          // wait for the result to come in
          await waitForCall(s, 1);
          expect(s.next).toHaveBeenCalledExactlyOnceWith(
            objectPayloadContaining({
              ...firstLoad,
              lastUpdated: expect.toBeGreaterThan(firstLoad.lastUpdated),
            }),
          );

          s.next.mockClear();
        }
      });
    });

    describe(".observeObject (offline)", () => {
      const subFn = mockSingleSubCallback();
      let sub: Unsubscribable;

      beforeEach(() => {
        subFn.complete.mockClear();
        subFn.next.mockClear();
        subFn.error.mockClear();

        sub = defer(
          cache.objects.observe({
            apiName: Employee,
            pk: JOHN_DOE_ID,
            mode: "offline",
          }, subFn),
        );

        expectSingleObjectCallAndClear(subFn, undefined!, "init");
      });

      it("does basic observation and unsubscribe", async () => {
        const emp = employeesAsServerReturns.find(x =>
          x.$primaryKey === JOHN_DOE_ID
        )!;

        // force an update
        updateObject(cache, emp);
        expectSingleObjectCallAndClear(subFn, emp);

        // force again
        updateObject(cache, emp.$clone({ fullName: "new name" }));
        expectSingleObjectCallAndClear(
          subFn,
          emp.$clone({ fullName: "new name" }),
        );

        sub.unsubscribe();

        // force again but no subscription update
        updateObject(cache, emp.$clone({ fullName: "new name 2" }));
        expect(subFn.next).not.toHaveBeenCalled();
      });

      it("observes with list update", async () => {
        const emp = employeesAsServerReturns.find(x =>
          x.$primaryKey === JOHN_DOE_ID
        )!;

        // force an update
        updateObject(cache, emp.$clone({ fullName: "not the name" }));
        expect(subFn.next).toHaveBeenCalledTimes(1);

        updateList(
          cache,
          { type: Employee, where: {}, orderBy: {} },
          employeesAsServerReturns,
        );
        expect(subFn.next).toHaveBeenCalledTimes(2);

        expect(subFn.next.mock.calls[1][0]).toEqual(
          objectPayloadContaining({
            object: emp as unknown as ObjectHolder<typeof emp>,
          }),
        );
      });
    });

    describe(".lists.observe", () => {
      const listSub1 = mockListSubCallback();
      const ifaceSub = mockListSubCallback();

      beforeEach(() => {
        vi.mocked(listSub1.next).mockReset();
        vi.mocked(listSub1.error).mockReset();
        vi.mocked(listSub1.complete).mockReset();

        vi.mocked(ifaceSub.next).mockReset();
        vi.mocked(ifaceSub.error).mockReset();
        vi.mocked(ifaceSub.complete).mockReset();
      });

      describe("mode=force", () => {
        it("initial load", async () => {
          defer(
            cache.lists.observe({
              type: Employee,

              orderBy: {},
              mode: "force",
            }, listSub1),
          );

          defer(
            cache.lists.observe({
              type: FooInterface,

              orderBy: {},
              mode: "force",
            }, ifaceSub),
          );

          await waitForCall(listSub1);
          await waitForCall(ifaceSub);

          expectSingleListCallAndClear(
            listSub1,
            [],
            { status: "loading" },
          );

          expectSingleListCallAndClear(
            ifaceSub,
            [],
            { status: "loading" },
          );

          await waitForCall(listSub1);
          expectSingleListCallAndClear(
            listSub1,
            employeesAsServerReturns,
            {
              status: "loaded",
            },
          );

          await waitForCall(ifaceSub);
          expectSingleListCallAndClear(
            ifaceSub,
            employeesAsServerReturns.map(e =>
              expect.objectContaining({
                $apiName: "FooInterface",
                $objectType: "Employee",
                $primaryKey: e.$primaryKey,
              })
            ),
            {
              status: "loaded",
            },
          );

          expectNoMoreCalls(listSub1);
          expectNoMoreCalls(ifaceSub);

          expect(listSub1.next).not.toHaveBeenCalled();
          expect(listSub1.error).not.toHaveBeenCalled();
          expect(ifaceSub.next).not.toHaveBeenCalled();
          expect(ifaceSub.error).not.toHaveBeenCalled();
        });

        it("cache stores raw objects when loading via interface", async () => {
          defer(
            cache.lists.observe({
              type: FooInterface,
              orderBy: {},
              mode: "force",
            }, ifaceSub),
          );
          await waitForCall(ifaceSub, 2);

          const pk = employeesAsServerReturns[0].$primaryKey as number;
          const cached = getObject(cache, "Employee", pk);
          expect(cached?.$apiName).toBe("Employee");
          expect(cached?.$objectType).toBe("Employee");
        });

        it("interface queries return interface view while cache stores raw object", async () => {
          defer(
            cache.lists.observe({
              type: FooInterface,
              orderBy: {},
              mode: "force",
            }, ifaceSub),
          );
          await waitForCall(ifaceSub, 2);

          const ifacePayload = ifaceSub.next.mock.calls[1][0];
          expect(ifacePayload?.resolvedList?.[0]?.$apiName).toBe(
            "FooInterface",
          );
          expect(ifacePayload?.resolvedList?.[0]?.$objectType).toBe("Employee");

          const pk = employeesAsServerReturns[0].$primaryKey as number;
          const cached = getObject(cache, "Employee", pk);
          expect(cached?.$apiName).toBe("Employee");
        });

        it("direct query after interface query preserves interface $apiName", async () => {
          const objSub = mockSingleSubCallback();

          defer(
            cache.lists.observe({
              type: FooInterface,
              orderBy: {},
              mode: "force",
            }, ifaceSub),
          );
          await waitForCall(ifaceSub, 2);

          expect(ifaceSub.next.mock.calls[1][0]?.resolvedList?.[0]?.$apiName)
            .toBe("FooInterface");

          defer(
            cache.objects.observe({
              apiName: Employee,
              pk: employeesAsServerReturns[0].$primaryKey,
              mode: "force",
            }, objSub),
          );
          await waitForCall(objSub, 2);

          expect(
            ifaceSub.next.mock.calls.at(-1)?.[0]?.resolvedList?.[0]?.$apiName,
          )
            .toBe("FooInterface");
        });

        it("subsequent load", async () => {
          // Pre-seed with data the server doesn't return
          updateList(
            cache,
            { type: Employee, where: {}, orderBy: {} },
            mutatedEmployees,
          );

          defer(
            cache.lists.observe({
              type: Employee,
              mode: "force",
            }, listSub1),
          );

          await waitForCall(listSub1, 1);
          const firstLoad = listSub1.next.mock.calls[0][0]!;
          expectSingleListCallAndClear(listSub1, mutatedEmployees, {
            status: "loading",
          });

          await waitForCall(listSub1, 1);
          expectSingleListCallAndClear(listSub1, employeesAsServerReturns, {
            status: "loaded",
            lastUpdated: expect.toBeGreaterThan(
              firstLoad.lastUpdated,
            ),
          });
        });
      });

      describe("mode = offline", () => {
        it("updates with list updates", async () => {
          defer(
            cache.lists.observe({
              type: Employee,
              where: {},
              orderBy: {},
              mode: "offline",
            }, listSub1),
          );

          updateList(
            cache,
            { type: Employee, where: {}, orderBy: {} },
            employeesAsServerReturns,
          );

          await waitForCall(listSub1);
          expectSingleListCallAndClear(listSub1, employeesAsServerReturns);

          // list is just now one object
          updateList(cache, { type: Employee, where: {}, orderBy: {} }, [
            employeesAsServerReturns[0],
          ]);

          await waitForCall(listSub1);
          expectSingleListCallAndClear(listSub1, [employeesAsServerReturns[0]]);
        });

        it("updates with different list updates", async () => {
          defer(
            cache.lists.observe({
              type: Employee,
              where: {},
              orderBy: {},
              mode: "offline",
            }, listSub1),
          );

          updateList(
            cache,
            { type: Employee, where: {}, orderBy: {} },
            employeesAsServerReturns,
          );

          await waitForCall(listSub1);
          expectSingleListCallAndClear(listSub1, employeesAsServerReturns);

          // new where === different list
          updateList(cache, {
            type: Employee,
            where: { employeeId: { $gt: 0 } },
            orderBy: {},
          }, mutatedEmployees);

          // original list updates still
          await waitForCall(listSub1);
          expectSingleListCallAndClear(listSub1, mutatedEmployees);
        });
      });
    });

    describe(".fetchMore", () => {
      beforeEach(() => {
        vi.useFakeTimers({});
      });
      afterEach(() => {
        vi.useRealTimers();
      });

      it("works in the solo case", async () => {
        const listSub = mockListSubCallback();
        defer(cache.lists.observe(
          {
            type: Employee,
            where: {},
            orderBy: {},
            mode: "force",
            pageSize: 1,
          },
          listSub,
        ));

        await waitForCall(listSub, 1);
        expectSingleListCallAndClear(listSub, [], { status: "loading" });

        await waitForCall(listSub, 1);
        const { fetchMore } = listSub.next.mock.calls[0][0]!;
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 1),
          { status: "loaded" },
        );

        void fetchMore();

        await waitForCall(listSub, 1);
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 1),
          { status: "loading" },
        );

        await waitForCall(listSub, 1);
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 2),
          { status: "loaded" },
        );
      });

      it("handles multiple sequential fetchMore calls", async () => {
        const listSub = mockListSubCallback();
        defer(cache.lists.observe(
          {
            type: Employee,
            where: {},
            orderBy: {},
            mode: "force",
            pageSize: 1,
          },
          listSub,
        ));

        await waitForCall(listSub, 1);
        expectSingleListCallAndClear(listSub, [], { status: "loading" });

        await waitForCall(listSub, 1);
        let { fetchMore } = listSub.next.mock.calls[0][0]!;
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 1),
          { status: "loaded" },
        );

        void fetchMore();
        await waitForCall(listSub, 1);
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 1),
          { status: "loading" },
        );

        await waitForCall(listSub, 1);
        ({ fetchMore } = listSub.next.mock.calls[0][0]!);
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 2),
          { status: "loaded" },
        );

        void fetchMore();
        await waitForCall(listSub, 1);
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 2),
          { status: "loading" },
        );

        await waitForCall(listSub, 1);
        ({ fetchMore } = listSub.next.mock.calls[0][0]!);
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 3),
          { status: "loaded" },
        );

        void fetchMore();
        await waitForCall(listSub, 1);
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 3),
          { status: "loading" },
        );

        await waitForCall(listSub, 1);
        expectSingleListCallAndClear(
          listSub,
          employeesAsServerReturns.slice(0, 4),
          { status: "loaded" },
        );
      });
    });
  });

  describe("with mock client", () => {
    let client: Client;
    let apiServer: SetupServer;
    let fauxFoundry: FauxFoundry;
    let store: Store;

    beforeAll(async () => {
      const testSetup = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/", undefined, { logger }),
        createClient,
        { logger },
      );
      ({ client, apiServer, fauxFoundry } = testSetup);

      setupOntology(testSetup.fauxFoundry);

      return () => {
        testSetup.apiServer.close();
      };
    });

    beforeEach(() => {
      apiServer.resetHandlers();
    });

    beforeEach(async () => {
      store = new Store(client);
    });

    it("properly fires error handler for a list", async () => {
      const sub = mockListSubCallback();

      // ignores unhandled rejection, like one we will get from fire-and-forget metadata call
      process.on("unhandledRejection", () => {});

      store.lists.observe({
        type: { apiName: "notReal", type: "object" },
        orderBy: {},
      }, sub);

      await waitForCall(sub.next);

      // initial loading state
      expect(sub.next).toHaveBeenCalledOnce();
      expectSingleListCallAndClear(sub, [], { status: "loading" });

      await waitForCall(sub.error);
      expect(sub.error).toHaveBeenCalledOnce();
      expect(sub.next).not.toHaveBeenCalled();
    });

    describe("batching", () => {
      it("groups requests for single objects", async () => {
        fauxFoundry.getDefaultDataStore().registerObject(Employee, {
          $apiName: "Employee",
          employeeId: 0,
        });
        fauxFoundry.getDefaultDataStore().registerObject(Employee, {
          $apiName: "Employee",
          employeeId: 1,
        });

        const a = mockSingleSubCallback();
        const b = mockSingleSubCallback();

        defer(store.objects.observe({
          apiName: Employee,
          pk: 0,
        }, a));
        defer(store.objects.observe({
          apiName: Employee,
          pk: 1,
        }, b));

        await a.expectLoadingAndLoaded({
          loading: objectPayloadContaining({
            status: "loading",
            object: undefined,
          }),
          loaded: objectPayloadContaining({
            object: expect.objectContaining({
              $primaryKey: 0,
            }),
          }),
        });
        await b.expectLoadingAndLoaded({
          loading: objectPayloadContaining({
            status: "loading",
            object: undefined,
          }),
          loaded: objectPayloadContaining({
            object: expect.objectContaining({
              $primaryKey: 1,
            }),
          }),
        });
      });
    });

    describe("actions", () => {
      beforeEach(() => {
        fauxFoundry.getDefaultDataStore().clear();
      });

      it("properly invalidates objects", async () => {
        fauxFoundry.getDefaultDataStore().registerObject(Todo, {
          $apiName: "Todo",
          id: 0,
          text: "og title",
        });

        const todoSubFn = mockSingleSubCallback();

        defer(store.objects.observe({
          apiName: Todo,
          pk: 0,
        }, todoSubFn));

        await todoSubFn.expectLoadingAndLoaded({
          loading: objectPayloadContaining({
            status: "loading",
            object: undefined,
          }),
          loaded: objectPayloadContaining({
            object: expect.objectContaining({
              $primaryKey: 0,
            }),
          }),
        });

        // at this point we have an observation properly set up
        await store.applyAction(editTodo, {
          id: 0,
          text: "hello there kind sir",
        });

        await todoSubFn.expectLoadingAndLoaded({
          loading: objectPayloadContaining({
            status: "loading",
          }),
          loaded: objectPayloadContaining({
            object: expect.objectContaining({
              text: "hello there kind sir",
            }),
          }),
        });
      });

      it("rolls back optimistic updates on error", async () => {
        const fauxObject = expect.objectContaining({
          id: 0,
          text: "does not matter",
        });

        // set the object in the "backend"
        fauxFoundry.getDefaultDataStore().registerObject(Todo, {
          $apiName: "Todo",
          id: 0,
          text: "does not matter",
        });

        const todoSubFn = mockSingleSubCallback();
        defer(
          store.objects.observe({
            apiName: Todo,
            pk: 0,
          }, todoSubFn),
        );

        await todoSubFn.expectLoadingAndLoaded({
          loading: objectPayloadContaining({
            status: "loading",
            object: undefined,
            isOptimistic: false,
          }),
          loaded: objectPayloadContaining({
            object: fauxObject,
            status: "loaded",
            isOptimistic: false,
          }),
        });

        const object: Osdk.Instance<Todo> | undefined = store.getValue(
          store.cacheKeys.get<ObjectCacheKey>("object", "Todo", 0),
        )?.value as any;
        invariant(object);

        // at this point we have an observation properly set up
        await expect(
          store.applyAction(editTodo, {
            id: "not an id that exists",
          } as any, {
            optimisticUpdate: (ctx) => {
              ctx.updateObject(object.$clone({ text: "optimistic" }));
            },
          }),
        ).rejects.toThrow(ActionValidationError);

        await waitForCall(todoSubFn, 2);
        await todoSubFn.expectLoadingAndLoaded({
          loading: objectPayloadContaining({
            status: "loading",
            object: expect.objectContaining({
              id: 0,
              text: "optimistic",
            }),
            isOptimistic: true,
          }),
          loaded: objectPayloadContaining({
            object: fauxObject,
            status: "loaded",
            isOptimistic: false,
          }),
        });
      });
    });

    describe("orderBy", async () => {
      let nextPk = 0;

      let fauxObjectA: Osdk.Instance<Todo>;
      let fauxObjectB: Osdk.Instance<Todo>;
      let fauxObjectC: Osdk.Instance<Todo>;

      beforeAll(async () => {
        fauxFoundry.getDefaultDataStore().clear();
        [fauxObjectA, fauxObjectB, fauxObjectC] = await Promise.all(
          (["a", "b", "c"] as const).map(text => {
            const id = nextPk++;

            fauxFoundry.getDefaultDataStore().registerObject(Todo, {
              $apiName: "Todo",
              id,
              text,
            });

            return client(Todo).fetchOne(id, { $includeRid: true });
          }),
        );
      });

      const noWhereNoOrderBy = {
        type: Todo,
        where: {},
        orderBy: {},
      } satisfies ObserveListOptions<Todo>;

      const noWhereOrderByText = {
        type: Todo,
        where: {},
        orderBy: {
          text: "asc",
        },
      } satisfies ObserveListOptions<Todo>;

      let subListUnordered = mockListSubCallback();
      let subListOrdered = mockListSubCallback();

      beforeEach(async () => {
        subListUnordered = mockListSubCallback();
        subListOrdered = mockListSubCallback();
        defer(
          store.lists.observe({
            ...noWhereNoOrderBy,
            mode: "offline",
          }, subListUnordered),
        );
        await waitForCall(subListUnordered);
        expectSingleListCallAndClear(subListUnordered, [], { status: "init" });

        defer(
          store.lists.observe({
            ...noWhereOrderByText,
            mode: "offline",
          }, subListOrdered),
        );
        await waitForCall(subListOrdered);
        expectSingleListCallAndClear(subListOrdered, [], { status: "init" });
      });

      it("invalidates the correct lists", async () => {
        // for whatever reason, the first list is loaded as [B, A]
        updateList(store, noWhereNoOrderBy, [fauxObjectB, fauxObjectA]);

        await waitForCall(subListUnordered, 1);
        expectSingleListCallAndClear(
          subListUnordered,
          [fauxObjectB, fauxObjectA],
        );

        // The other list definitely matches on the where clause and we can insert
        // orderBy properly. So this is [A, B]
        await waitForCall(subListOrdered, 1);
        expectSingleListCallAndClear(
          subListOrdered,
          [fauxObjectA, fauxObjectB],
        );

        // For whatever reason, object B is no longer in the first set (use your imagination)
        // but we have added a C before A. So the first list is [C, A]
        updateList(store, { type: Todo, where: {}, orderBy: {} }, [
          fauxObjectC,
          fauxObjectA,
        ]);

        await waitForCall(subListUnordered, 1);
        expectSingleListCallAndClear(
          subListUnordered,
          [fauxObjectC, fauxObjectA],
        );

        // Nothing told the system that B was deleted so we can presume it still exists
        // and therefore the second list is now [A, B, C]
        await waitForCall(subListOrdered, 1);
        expectSingleListCallAndClear(
          subListOrdered,
          [fauxObjectA, fauxObjectB, fauxObjectC],
        );
      });

      it("produces proper results with optimistic updates and successful action", async () => {
        const optimisticallyMutatedA = fauxObjectA.$clone({
          text: "optimistic",
        });
        const pkForOptimistic = nextPk++;
        const optimisticallyCreatedObjectD = expect.objectContaining({
          "text": "d",
          id: pkForOptimistic,
        });

        // for whatever reason, the first list is loaded as [B, A]
        updateList(store, noWhereNoOrderBy, [fauxObjectB, fauxObjectA]);

        await waitForCall(subListUnordered, 1);
        expectSingleListCallAndClear(
          subListUnordered,
          [fauxObjectB, fauxObjectA],
        );

        // The other list definitely matches on the where clause and we can insert
        // orderBy properly. So this is [A, B]
        await waitForCall(subListOrdered, 1);
        expectSingleListCallAndClear(
          subListOrdered,
          [fauxObjectA, fauxObjectB],
        );

        testStage("Start");

        // Perform something optimistic.
        const removeOptimisticResult = runOptimisticJob(store, (b) => {
          b.createObject(Todo, pkForOptimistic, {
            id: pkForOptimistic,
            text: "d",
          });
          b.updateObject(optimisticallyMutatedA as Osdk.Instance<any>);
        });

        // The first list is now [B, A, optimistic]
        await waitForCall(subListUnordered, 1);
        expectSingleListCallAndClear(
          subListUnordered,
          [
            fauxObjectB,
            optimisticallyMutatedA, // same position, new values
            optimisticallyCreatedObjectD,
          ],
          { isOptimistic: true },
        );

        // the second list is now [A, B, optimistic]
        await waitForCall(subListOrdered, 1);
        expectSingleListCallAndClear(
          subListOrdered,
          [
            fauxObjectB,
            optimisticallyCreatedObjectD,
            optimisticallyMutatedA,
          ],
          { isOptimistic: true },
        );

        // Roll back the optimistic update
        await removeOptimisticResult();

        // The first list is now [B, A]
        await waitForCall(subListUnordered, 1);
        expectSingleListCallAndClear(
          subListUnordered,
          [fauxObjectB, fauxObjectA],
          { isOptimistic: false },
        );

        // the second list is now [A, B]
        await waitForCall(subListOrdered, 1);
        expectSingleListCallAndClear(
          subListOrdered,
          [fauxObjectA, fauxObjectB],
          { isOptimistic: false },
        );
      });
      // I think these are named backwards
      it("produces proper results with optimistic updates and rollback", async () => {
        const pkForOptimistic = nextPk++;
        const optimisticallyCreatedObjectD = expect.objectContaining({
          "$primaryKey": pkForOptimistic,
          "$title": undefined, // FIXME once this is calculated by optimistic then this needs to be the right value
          "text": "d optimistic",
          id: pkForOptimistic,
        });
        const optimisticallyMutatedA = fauxObjectA.$clone({
          text: "optimistic",
        });

        testStage("Initial Setup");

        // for whatever reason, the first list is loaded as [B, A]
        updateList(store, noWhereNoOrderBy, [fauxObjectB, fauxObjectA]);

        await waitForCall(subListUnordered, 1);

        expectSingleListCallAndClear(subListUnordered, [
          fauxObjectB,
          fauxObjectA,
        ]);

        // The other list definitely matches on the where clause and we can insert
        // orderBy properly. So this is [A, B]
        expectSingleListCallAndClear(subListOrdered, [
          fauxObjectA,
          fauxObjectB,
        ]);

        testStage("Optimistic Creation");

        // create the weirdest action ever. It always creates a Todo with
        // a new primary key and the text "d" and updates A
        const {
          actionDefinition: crazyAction,
          actionTypeV2: crazyActionTypeV2,
        } = TypeHelpers.actionTypeBuilder("asdf")
          .addParameter("foo", "string")
          .build();

        fauxFoundry.getDefaultOntology().registerActionType(
          crazyActionTypeV2,
          (batch, params) => {
            const idForD = nextPk++;

            batch.addObject(Todo.apiName, idForD, {
              id: idForD,
              text: "d",
            });

            batch.modifyObject(fauxObjectA.$apiName, fauxObjectA.$primaryKey, {
              text: "a prime",
              $title: "a prime", // FIXME we shouldn't have to set this, it can be calculated
            });
          },
        );

        // the optimistic job will call createObject which triggers the `objectFactory2` of the
        // cache context.

        // Perform something optimistic.
        const pActionResult = store.applyAction<typeof crazyAction>(
          crazyAction,
          {},
          {
            optimisticUpdate: (b) => {
              b.createObject(Todo, pkForOptimistic, {
                id: pkForOptimistic,
                text: "d optimistic",
              });
              b.updateObject(optimisticallyMutatedA);
            },
          },
        );

        testStage("Optimistic Updates");

        // The first list is now [B, A, optimistic]
        await waitForCall(subListUnordered, 1);
        expectSingleListCallAndClear(subListUnordered, [
          fauxObjectB,
          optimisticallyMutatedA, // same position, new values
          optimisticallyCreatedObjectD,
        ], { isOptimistic: true });

        // the second list is now [B, optimistic, optimistic a]
        await waitForCall(subListOrdered, 1);
        expectSingleListCallAndClear(subListOrdered, [
          fauxObjectB,
          optimisticallyCreatedObjectD,
          optimisticallyMutatedA,
        ], { isOptimistic: true });

        testStage("Resolve Action");

        const modifiedObjectA = fauxObjectA.$clone({
          text: "a prime",
        });

        const pkForD = (await pActionResult).addedObjects?.[0].primaryKey;
        invariant(typeof pkForD === "number");
        // load this without the cache for comparisons
        const createdObjectD = await client(Todo).fetchOne(pkForD, {
          $includeRid: true,
        });

        await waitForCall(subListUnordered, 1);
        expectSingleListCallAndClear(subListUnordered, [
          fauxObjectB,
          modifiedObjectA,
          createdObjectD,
        ], { isOptimistic: false });

        await waitForCall(subListOrdered, 1);
        expectSingleListCallAndClear(
          subListOrdered,
          [modifiedObjectA, fauxObjectB, createdObjectD],
          { isOptimistic: false },
        );
      });
    });

    it("works with pivotTo and orderBy on objectSets", async () => {
      fauxFoundry.getDefaultDataStore().clear();

      const officeA = fauxFoundry.getDefaultDataStore().registerObject(Office, {
        $apiName: "Office",
        officeId: "office-a",
        name: "Zebra Office",
      });
      const officeB = fauxFoundry.getDefaultDataStore().registerObject(Office, {
        $apiName: "Office",
        officeId: "office-b",
        name: "Alpha Office",
      });

      const emp1 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
        $apiName: "Employee",
        employeeId: 1,
        fullName: "Test Employee",
      });
      const emp2 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
        $apiName: "Employee",
        employeeId: 2,
        fullName: "Test Employee 2",
      });

      fauxFoundry.getDefaultDataStore().registerLink(
        emp1,
        "officeLink",
        officeA,
        "occupants",
      );
      fauxFoundry.getDefaultDataStore().registerLink(
        emp2,
        "officeLink",
        officeB,
        "occupants",
      );

      const sub = mockObserver<ObjectSetPayload | undefined>();
      defer(
        store.objectSets.observe({
          baseObjectSet: client(Employee).pivotTo("officeLink"),
          orderBy: { name: "asc" },
        }, sub),
      );

      await vi.waitFor(
        () => {
          expect(sub.next).toHaveBeenLastCalledWith(
            expect.objectContaining({
              status: "loaded",
            }),
          );
        },
        { timeout: 5000 },
      );

      expect(sub.next).toHaveBeenLastCalledWith(
        expect.objectContaining({
          status: "loaded",
          resolvedList: [
            expect.objectContaining({ name: "Alpha Office" }),
            expect.objectContaining({ name: "Zebra Office" }),
          ],
        }),
      );

      expect(sub.error).not.toHaveBeenCalled();
    });
  });

  describe("layers", () => {
    it("properly remove", () => {
      const clientHelper = createClientMockHelper();
      const store = new Store(clientHelper.client);

      const baseObjects = [1, 2].map((i) => ({
        $primaryKey: i,
        $objectType: "Employee",
        $apiName: "Employee",
        $title: `truth ${i}`,
      } as Osdk.Instance<Employee> & ObjectHolder<Osdk.Instance<Employee>>));

      const cacheKeys = baseObjects.map((obj) =>
        store.cacheKeys.get("object", "Employee", obj.$primaryKey)
      );

      // set the truth
      for (const obj of baseObjects) {
        updateObject(store, obj);
      }

      // expect the truth
      for (const obj of baseObjects) {
        expect(getObject(store, "Employee", obj.$primaryKey)).toEqual(
          expect.objectContaining({ $title: `truth ${obj.$primaryKey}` }),
        );
      }

      const layerIds = [1, 2].map(createOptimisticId);

      // optimistically set the objects in their own layers
      for (let i = 0; i < 2; i++) {
        store.batch({ optimisticId: layerIds[i] }, (batch) => {
          batch.write(
            cacheKeys[i],
            {
              ...baseObjects[i],
              $title: `optimistic ${baseObjects[i].$primaryKey}`,
            },
            "loading",
          );
        });
      }

      // expect the optimistic values
      for (let i = 0; i < 2; i++) {
        expect(getObject(store, "Employee", baseObjects[i].$primaryKey))
          .toEqual(
            expect.objectContaining({
              $title: `optimistic ${baseObjects[i].$primaryKey}`,
            }),
          );
      }

      // remove the first layer
      store.layers.remove(layerIds[0]);

      // should have truth object 1 and optimistic object 2
      expect(getObject(store, "Employee", 1)).toEqual(
        expect.objectContaining({ $title: "truth 1" }),
      );
      expect(getObject(store, "Employee", 2)).toEqual(
        expect.objectContaining({ $title: "optimistic 2" }),
      );

      // remove the second layer
      store.layers.remove(layerIds[1]);

      // should have truth objects
      for (const obj of baseObjects) {
        expect(getObject(store, "Employee", obj.$primaryKey)).toEqual(
          expect.objectContaining({ $title: `truth ${obj.$primaryKey}` }),
        );
      }
    });
  });
});

export function asBsoStub(
  x: ObjectHolder<any> | Osdk.Instance<any>,
): BaseServerObject {
  return {
    __apiName: x.$apiName,
    __primaryKey: x.$primaryKey,
  };
}
