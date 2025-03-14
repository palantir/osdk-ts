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

import type {
  CompileTimeMetadata,
  ObjectMetadata,
  ObjectTypeDefinition,
  Osdk,
  OsdkBase,
} from "@osdk/api";
import {
  $ontologyRid,
  createOffice,
  Employee,
  FooInterface,
  Todo,
} from "@osdk/client.test.ontology";
import { wireObjectTypeFullMetadataToSdkObjectMetadata } from "@osdk/generator-converters";
import { apiServer, stubData } from "@osdk/shared.test";
import chalk from "chalk";
import type { Mock, Task } from "vitest";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  vitest,
} from "vitest";
import { type Client } from "../../Client.js";
import { createClient } from "../../createClient.js";
import { createMinimalClient } from "../../createMinimalClient.js";

import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { createObjectSet } from "../../objectSet/createObjectSet.js";
import type { OntologyProvider } from "../../ontology/OntologyProvider.js";
import { InterfaceDefinitions } from "../../ontology/OntologyProvider.js";
import type {
  ObserveListOptions,
  Unsubscribable,
} from "../ObservableClient.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import { createOptimisticId } from "./OptimisticId.js";
import { runOptimisticJob } from "./OptimisticJob.js";
import { invalidateList, Store } from "./Store.js";
import type { MockClientHelper } from "./testUtils.js";
import {
  applyCustomMatchers,
  createClientMockHelper,
  createDefer,
  createTestLogger,
  expectNoMoreCalls,
  expectSingleListCallAndClear,
  expectSingleObjectCallAndClear,
  getObject,
  mockListSubCallback,
  mockSingleSubCallback,
  objectPayloadContaining,
  updateList,
  updateObject,
  waitForCall,
} from "./testUtils.js";

const defer = createDefer();

const logger = createTestLogger({});

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

describe(Store, () => {
  describe("with mock server", () => {
    let client: Client;
    let cache: Store;

    let employeesAsServerReturns: Osdk.Instance<Employee>[];
    let mutatedEmployees: Osdk.Instance<Employee>[];

    beforeAll(async () => {
      apiServer.listen();
      client = createClient(
        "https://stack.palantir.com",
        $ontologyRid,
        async () => "myAccessToken",
        { logger },
      );

      employeesAsServerReturns = (await client(Employee).fetchPage()).data;
      mutatedEmployees = [
        employeesAsServerReturns[0],
        employeesAsServerReturns[1].$clone({
          fullName: "foo",
        }),
        ...employeesAsServerReturns.slice(2),
      ];
    });

    afterAll(() => {
      apiServer.close();
    });

    beforeEach(() => {
      cache = new Store(client);
    });

    afterEach(() => {
      cache = undefined!;
    });

    it("basic single object works", async () => {
      const emp = employeesAsServerReturns[0];

      const cacheKey = cache.getCacheKey<ObjectCacheKey>(
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
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            subFn,
          ),
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
        cache.removeLayer(optimisticId);

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
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            empSubFn,
          ),
        );

        expectSingleObjectCallAndClear(empSubFn, emp, "loaded");

        const listSubFn = mockListSubCallback();
        defer(
          cache.observeList({
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
        cache.removeLayer(optimisticId);

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
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            subFn,
          ),
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
        cache.removeLayer(optimisticId);

        expectSingleObjectCallAndClear(subFn, truthUpdatedEmployee);
        expectNoMoreCalls(subFn);
      });
    });

    describe(".invalidateObject", () => {
      it("triggers an update", async () => {
        const emp = employeesAsServerReturns[0];
        const staleEmp = emp.$clone({ fullName: "stale" });
        updateObject(cache, staleEmp);

        const subFn = mockSingleSubCallback();
        defer(
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            subFn,
          ),
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
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            subFn,
          ),
        );
        expectSingleObjectCallAndClear(subFn, staleEmp);

        const subListFn = mockListSubCallback();
        defer(
          cache.observeList({
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
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            subFn,
          ),
        );
        expectSingleObjectCallAndClear(subFn, staleEmp);

        const subListFn = mockListSubCallback();
        defer(
          cache.observeList({
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

        await waitForCall(subFn, 1);
        expectSingleObjectCallAndClear(subFn, emp, "loaded");

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
        $primaryKey: 50030,
        fullName: "John Doe",
      });

      it("fetches and updates twice", async () => {
        defer(
          cache.observeObject(Employee, 50030, { mode: "force" }, subFn1),
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
          cache.observeObject(Employee, 50030, { mode: "force" }, subFn2),
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
          cache.observeObject(Employee, 50030, { mode: "offline" }, subFn),
        );

        expectSingleObjectCallAndClear(subFn, undefined!, "init");
      });

      it("does basic observation and unsubscribe", async () => {
        const emp = employeesAsServerReturns[0];

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
        const emp = employeesAsServerReturns[0];

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

    describe(".observeList", () => {
      const listSub1 = mockListSubCallback();
      const ifaceSub = mockListSubCallback();

      beforeEach(() => {
        vi.useFakeTimers({});
        vi.mocked(listSub1.next).mockReset();
        vi.mocked(listSub1.error).mockReset();
        vi.mocked(listSub1.complete).mockReset();

        vi.mocked(ifaceSub.next).mockReset();
        vi.mocked(ifaceSub.error).mockReset();
        vi.mocked(ifaceSub.complete).mockReset();
      });
      afterEach(() => {
        vi.useRealTimers();
      });

      describe("mode=force", () => {
        it("initial load", async () => {
          defer(
            cache.observeList({
              type: Employee,

              orderBy: {},
              mode: "force",
            }, listSub1),
          );

          defer(
            cache.observeList({
              type: FooInterface,

              orderBy: {},
              mode: "force",
            }, ifaceSub),
          );

          vitest.runOnlyPendingTimers();
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
            employeesAsServerReturns.filter(o => o.$primaryKey === 50050),
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

        it("subsequent load", async () => {
          // Pre-seed with data the server doesn't return
          updateList(
            cache,
            { type: Employee, where: {}, orderBy: {} },
            mutatedEmployees,
          );

          defer(
            cache.observeList({
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
            cache.observeList({
              type: Employee,
              where: {},
              orderBy: {},
              mode: "offline",
            }, listSub1),
          );
          expect(listSub1.next).toHaveBeenCalledTimes(0);

          updateList(
            cache,
            { type: Employee, where: {}, orderBy: {} },
            employeesAsServerReturns,
          );
          vitest.runOnlyPendingTimers();

          expectSingleListCallAndClear(listSub1, employeesAsServerReturns);

          // list is just now one object
          updateList(cache, { type: Employee, where: {}, orderBy: {} }, [
            employeesAsServerReturns[0],
          ]);
          vitest.runOnlyPendingTimers();

          expectSingleListCallAndClear(listSub1, [employeesAsServerReturns[0]]);
        });

        it("updates with different list updates", async () => {
          defer(
            cache.observeList({
              type: Employee,
              where: {},
              orderBy: {},
              mode: "offline",
            }, listSub1),
          );

          expect(listSub1.next).toHaveBeenCalledTimes(0);

          updateList(
            cache,
            { type: Employee, where: {}, orderBy: {} },
            employeesAsServerReturns,
          );
          vitest.runOnlyPendingTimers();

          expectSingleListCallAndClear(listSub1, employeesAsServerReturns);

          // new where === different list
          updateList(cache, {
            type: Employee,
            where: { employeeId: { $gt: 0 } },
            orderBy: {},
          }, mutatedEmployees);
          vitest.runOnlyPendingTimers();

          // original list updates still
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
        defer(cache.observeList(
          {
            type: Employee,
            where: {},
            orderBy: {},
            mode: "force",
            pageSize: 1,
          },
          listSub,
        ));

        expect(listSub.next).not.toHaveBeenCalled();

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
    });
  });

  describe("with mock client", () => {
    let client: Mock<Client> & Client;
    let mockClient: MockClientHelper;
    let store: Store;

    beforeEach(async () => {
      mockClient = createClientMockHelper();
      client = mockClient.client;
      store = new Store(client);
    });

    it("properly fires error handler for a list", async () => {
      const error = new Error("A faux error");
      mockClient.mockFetchPageOnce().reject(error);

      const sub = mockListSubCallback();

      store.observeList({
        type: Employee,
        where: {},
        orderBy: {},
      }, sub);

      await waitForCall(sub.error, 1);

      expect(sub.error).toHaveBeenCalled();
      expect(sub.next).not.toHaveBeenCalled();
    });
    describe("batching", () => {
      it("groups requests for single objects", async () => {
        mockClient.mockFetchPageOnce().resolve({
          data: [{
            $apiName: "Employee",
            $objectType: "Employee",
            $primaryKey: 0,
          }, {
            $apiName: "Employee",
            $objectType: "Employee",
            $primaryKey: 1,
          }],
          nextPageToken: undefined,
          totalCount: "2",
        });

        vi.mocked(client.fetchMetadata).mockReturnValue(Promise.resolve(
          {
            primaryKeyApiName: "id",
          } satisfies Pick<
            ObjectMetadata,
            "primaryKeyApiName"
          > as ObjectMetadata,
        ));

        const a = mockSingleSubCallback();
        const b = mockSingleSubCallback();

        defer(store.observeObject(Employee, 0, {}, a));
        defer(store.observeObject(Employee, 1, {}, b));

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
        console.log(client.mock.calls);
      });
    });

    describe("actions", () => {
      it("properly invalidates objects", async () => {
        // after the below `observeObject`, the cache will need to load from the server
        mockClient.mockFetchOneOnce().resolve({
          $apiName: "Todo",
          $primaryKey: 0,
        });

        const todoSubFn = mockSingleSubCallback();
        defer(store.observeObject(Todo, 0, {}, todoSubFn));

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
        mockClient.mockApplyActionOnce().resolve({
          addedObjects: [{
            objectType: "Todo",
            primaryKey: 0,
          }],
        });

        // after we apply the action, the object is invalidated and gets re-requested
        mockClient.mockFetchOneOnce<Todo>().resolve({
          $primaryKey: 0,
          $apiName: "Todo",
          text: "hello there kind sir",
        });

        await store.applyAction(createOffice, {
          officeId: "whatever",
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
        const fauxObject = {
          $apiName: "Todo",
          $objectType: "Todo",
          $primaryKey: 0,
          $title: "does not matter",
        } as Osdk.Instance<Todo> & ObjectHolder;

        // after the below `observeObject`, the cache will need to load from the server
        mockClient.mockFetchOneOnce<Todo>()
          .resolve(fauxObject);

        const todoSubFn = mockSingleSubCallback();
        defer(
          store.observeObject(Todo, 0, {}, todoSubFn),
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

        // at this point we have an observation properly set up
        const applyActionResult = mockClient.mockApplyActionOnce();

        const actionPromise = store.applyAction(createOffice, {
          officeId: "whatever",
        }, {
          optimisticUpdate: (ctx) => {
            ctx.updateObject({ ...fauxObject, text: "optimistic" });
          },
        });

        await waitForCall(todoSubFn, 1);
        expect(todoSubFn.next).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: {
              ...fauxObject,
              text: "optimistic",
            },
            status: "loading",
            isOptimistic: true,
          }),
        );
        todoSubFn.next.mockClear();

        // let the action error out
        applyActionResult.reject("an error thrown");
        await expect(actionPromise).rejects.toThrow("an error thrown");

        // back to the original object
        await waitForCall(todoSubFn, 1);
        expect(todoSubFn.next).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: fauxObject,
            status: "loaded",
            isOptimistic: false,
          }),
        );
      });
    });

    describe("orderBy", async () => {
      const ontologyProvider: OntologyProvider = {
        getObjectDefinition: async (apiName) => {
          return {
            ...wireObjectTypeFullMetadataToSdkObjectMetadata(
              stubData.todoWithLinkTypes,
              true,
            ),
            [InterfaceDefinitions]: {},
          };
        },
        getActionDefinition(apiName) {
          throw new Error("not implemented");
        },
        getInterfaceDefinition(apiName) {
          throw new Error("not implemented");
        },
        getQueryDefinition(apiName) {
          throw new Error("not implemented");
        },
      };

      const minimalClient = createMinimalClient(
        { ontologyRid: "ri.whatever" },
        "https://localhost:8080",
        () => Promise.resolve("token"),
        { logger },
        fetch,
        createObjectSet,
        (opts) => (client) => ontologyProvider,
      );

      async function createObject<
        X extends ObjectTypeDefinition,
        WeakSauce extends boolean = false,
      >(
        type: X,
        x:
          // & OntologyObjectV2
          & Omit<
            OsdkBase<WeakSauce extends true ? ObjectTypeDefinition : X>,
            "$apiName" | "$objectType" | "$objectSpecifier"
          >
          & CompileTimeMetadata<X>["props"],
      ) {
        return (await minimalClient.objectFactory2(
          minimalClient,
          [{
            ...x,
            $apiName: type.apiName,
            $objectType: type.apiName,
            $objectSpecifier: `${type.apiName}:${x.$primaryKey}`,
          }],
          undefined,
        ))[0] as ObjectHolder & Osdk.Instance<X>;
      }

      let nextPk = 0;
      const fauxObjectA = await createObject(Todo, {
        $primaryKey: nextPk,
        $title: "a",
        id: nextPk,
        text: "a",
      });

      nextPk++;
      const fauxObjectB = await createObject(Todo, {
        $primaryKey: nextPk,
        $title: "b",
        id: nextPk,
        text: "b",
      });

      nextPk++;
      const fauxObjectC = await createObject(Todo, {
        $primaryKey: nextPk,
        $title: "c",
        id: nextPk,
        text: "c",
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

      const subListUnordered = mockListSubCallback();
      const subListOrdered = mockListSubCallback();

      beforeEach(() => {
        defer(
          store.observeList({
            ...noWhereNoOrderBy,
            mode: "offline",
          }, subListUnordered),
        );
        expect(subListUnordered.next).toHaveBeenCalledTimes(0);

        defer(
          store.observeList({
            ...noWhereOrderByText,
            mode: "offline",
          }, subListOrdered),
        );
        expect(subListOrdered.next).toHaveBeenCalledTimes(0);
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
        const optimisticallyMutatedA = await createObject<Todo, true>(Todo, {
          ...fauxObjectA,
          text: "optimistic",
        });
        const pkForOptimistic = nextPk++;
        const optimisticallyCreatedObjectD = await createObject(Todo, {
          "$primaryKey": pkForOptimistic,
          "$title": "d",
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

        // the optimistic job will call createObject which triggers the `objectFactory2` of the
        // cache context.
        mockClient.mockObjectFactory2Once().resolve([
          optimisticallyCreatedObjectD,
        ]);

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
        const optimisticallyCreatedObjectD = await createObject<Todo>(Todo, {
          "$primaryKey": pkForOptimistic,
          "$title": "d",
          "text": "d",
          id: pkForOptimistic,
        });

        const optimisticallyMutatedA = await createObject<Todo, true>(Todo, {
          ...fauxObjectA,
          text: "optimistic",
        });

        testStage("Initial Setup");

        // later we will "create" this object
        const createdObjectD = await createObject<Todo>(Todo, {
          "$primaryKey": 9000,
          "$title": "d prime",
          "text": "d prime",
          id: 9000,
        });

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

        // the optimistic job will call createObject which triggers the `objectFactory2` of the
        // cache context.

        mockClient.mockObjectFactory2Once().resolve([
          optimisticallyCreatedObjectD,
        ]);

        const mockedApplyAction = mockClient.mockApplyActionOnce();

        testStage("Apply Action");

        const actionPromise = store.applyAction(
          createOffice,
          { officeId: "5" },
          {
            optimisticUpdate: (b) => {
              b.createObject(Todo, optimisticallyCreatedObjectD.$primaryKey, {
                id: optimisticallyCreatedObjectD.$primaryKey,
                text: "d",
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

        const modifiedObjectA = await createObject<Todo>(Todo, {
          ...fauxObjectA,
          text: "a prime",
        });

        // console.log("winner?", modifiedObjectA.$as);
        // // throw "hi";
        // console.log("winner2?", modifiedObjectA.$as("Todo").$as);

        // The action will complete and then revalidate in order...
        mockClient.mockFetchOneOnce<Todo>(modifiedObjectA.$primaryKey)
          .resolve(modifiedObjectA);

        mockClient.mockFetchOneOnce<Todo>(createdObjectD.$primaryKey)
          .resolve(createdObjectD);

        // this order matters!
        // but now we don't need them because we just update lists instead of revalidate when we can
        // const plainList = mockClient.mockFetchPageOnce<Todo>();
        // const orderedList = mockClient.mockFetchPageOnce<Todo>();

        mockedApplyAction.resolve({
          addedObjects: [
            {
              objectType: "Todo",
              primaryKey: createdObjectD.id,
            },
          ],
          modifiedObjects: [
            {
              objectType: "Todo",
              primaryKey: fauxObjectA.$primaryKey,
            },
          ],
        });

        // plainList.resolve({
        //   nextPageToken: undefined,
        //   totalCount: "4",
        //   data: [fauxObjectB, fauxObjectC, modifiedObjectA, createdObjectD],
        // });

        // orderedList.resolve({
        //   nextPageToken: undefined,
        //   totalCount: "4",
        //   data: [modifiedObjectA, fauxObjectC, createdObjectD],
        // });

        await actionPromise;

        await waitForCall(subListUnordered, 1);
        console.log("=====", subListUnordered.next.mock.calls[0][0]);
        expectSingleListCallAndClear(subListUnordered, [
          fauxObjectB,
          // fauxObjectC,
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
      } as Osdk.Instance<Employee>));

      const cacheKeys = baseObjects.map((obj) =>
        store.getCacheKey("object", "Employee", obj.$primaryKey)
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
      store.removeLayer(layerIds[0]);

      // should have truth object 1 and optimistic object 2
      expect(getObject(store, "Employee", 1)).toEqual(
        expect.objectContaining({ $title: "truth 1" }),
      );
      expect(getObject(store, "Employee", 2)).toEqual(
        expect.objectContaining({ $title: "optimistic 2" }),
      );

      // remove the second layer
      store.removeLayer(layerIds[1]);

      // should have truth objects
      for (const obj of baseObjects) {
        expect(getObject(store, "Employee", obj.$primaryKey)).toEqual(
          expect.objectContaining({ $title: `truth ${obj.$primaryKey}` }),
        );
      }
    });
  });
});
