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
  $ontologyRid,
  createOffice,
  Employee,
  Todo,
} from "@osdk/client.test.ontology";
import { apiServer } from "@osdk/shared.test";
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
import type {
  ObserveListOptions,
  Unsubscribable,
} from "../ObservableClient.js";
import { createOptimisticId } from "./OptimisticId.js";
import { runOptimisticJob } from "./OptimisticJob.js";
import { Store } from "./Store.js";
import type { MockClientHelper } from "./testUtils.js";
import {
  applyCustomMatchers,
  createClientMockHelper,
  createDefer,
  createTestLogger,
  expectSingleListCallAndClear,
  expectSingleObjectCallAndClear,
  listPayloadContaining,
  mockListSubCallback,
  mockSingleSubCallback,
  objectPayloadContaining,
  waitForCall,
} from "./testUtils.js";

const defer = createDefer();

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
        { logger: createTestLogger({}) },
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

      // starts empty
      expect(
        cache.getObject(Employee, emp.$primaryKey),
      ).toBeUndefined();

      const result = cache.updateObject(emp);
      expect(emp).toBe(result);

      // getting the object now matches the result
      expect(cache.getObject(Employee, emp.$primaryKey)).toEqual(
        result,
      );

      const updatedEmpFromCache = cache.updateObject(
        emp.$clone({ fullName: "new name" }),
      );
      expect(updatedEmpFromCache).not.toBe(emp);

      // getting it again is the updated object
      expect(cache.getObject(Employee, emp.$primaryKey)).toEqual(
        updatedEmpFromCache,
      );
    });

    describe("optimistic updates", () => {
      it("rolls back objects", async () => {
        const emp = employeesAsServerReturns[0];
        cache.updateObject(emp); // pre-seed the cache with the "real" value

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
        cache.updateObject(emp.$clone({ fullName: "new name" }), {
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
        cache.updateList({
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
        expect(listSubFn).not.toHaveBeenCalled();

        // update with an optimistic write
        cache.updateObject(optimisticEmployee, {
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

        cache.updateList(
          { type: Employee, where: {}, orderBy: {} },
          [truthUpdatedEmployee],
        );

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

        vi.useRealTimers();
      });

      it("rolls back to an updated real value via list", async () => {
        const emp = employeesAsServerReturns[0];
        cache.updateObject(emp); // pre-seed the cache with the "real" value

        const subFn = mockSingleSubCallback();
        defer(
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            subFn,
          ),
        );
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: emp,
            status: "loaded",
          }),
        );
        subFn.mockClear();

        const optimisticEmployee = emp.$clone({ fullName: "new name" });

        // update with an optimistic write
        const optimisticId = createOptimisticId();
        cache.updateObject(optimisticEmployee, {
          optimisticId,
        });
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: optimisticEmployee,
          }),
        );
        subFn.mockClear();

        const truthUpdatedEmployee = emp.$clone({
          fullName: "real update",
        });
        cache.updateObject(truthUpdatedEmployee);

        // we shouldn't expect an update because the top layer has a value
        expect(subFn).not.toHaveBeenCalled();

        // remove the optimistic write
        cache.removeLayer(optimisticId);

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: truthUpdatedEmployee,
          }),
        );
      });
    });

    describe(".invalidateObject", () => {
      it("triggers an update", async () => {
        const emp = employeesAsServerReturns[0];
        const staleEmp = emp.$clone({ fullName: "stale" });
        cache.updateObject(staleEmp);

        const subFn = mockSingleSubCallback();
        defer(
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            subFn,
          ),
        );

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: staleEmp,
            status: "loaded",
          }),
        );
        subFn.mockClear();

        // invalidate
        void cache.invalidateObject(Employee, staleEmp.$primaryKey);

        await vi.waitFor(() => expect(subFn).toHaveBeenCalled());

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: staleEmp,
            status: "loading",
          }),
        );
        subFn.mockClear();

        await vi.waitFor(() => expect(subFn).toHaveBeenCalled());

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: emp,
          }),
        );
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
        cache.updateList(
          { type: Employee, where: {}, orderBy: {} },
          [staleEmp],
        );

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

        cache.invalidateList({ type: Employee });
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
        cache.updateList(
          { type: Employee, where: {}, orderBy: {} },
          [staleEmp],
        );

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
        expect(subListFn).toHaveBeenCalledExactlyOnceWith(
          listPayloadContaining({
            resolvedList: [staleEmp],
            status: "loading",
          }),
        );
        subListFn.mockClear();

        await vi.waitFor(() => expect(subListFn).toHaveBeenCalled());
        expect(subListFn).toHaveBeenCalledExactlyOnceWith(
          listPayloadContaining({
            resolvedList: employeesAsServerReturns,
          }),
        );
        subListFn.mockClear();

        await vi.waitFor(() => expect(subFn).toHaveBeenCalled());

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            status: "loaded",
            object: emp,
          }),
        );

        // we don't need this value to control the test but we want to make sure we don't have
        // any unhandled exceptions upon test completion
        await pInvalidateComplete;
      });
    });

    describe(".observeObject (force)", () => {
      const subFn1 = mockSingleSubCallback();
      const subFn2 = mockSingleSubCallback();

      beforeEach(async () => {
        subFn1.mockClear();
        subFn2.mockClear();
      });

      const likeEmployee50030 = expect.objectContaining({
        $primaryKey: 50030,
        fullName: "John Doe",
      });

      it("fetches and updates twice", async () => {
        defer(
          cache.observeObject(Employee, 50030, { mode: "force" }, subFn1),
        );
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            status: "loading",
            object: undefined,
            isOptimistic: false,
          }),
        );

        subFn1.mockClear();

        await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: likeEmployee50030,
            isOptimistic: false,
          }),
        );

        const firstLoad = subFn1.mock.lastCall?.[0]!;

        subFn1.mockClear();

        defer(
          cache.observeObject(Employee, 50030, { mode: "force" }, subFn2),
        );
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({ status: "loading" }),
        );
        subFn1.mockClear();

        // should be the earlier results
        expect(subFn2).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({ status: "loading" }),
        );
        subFn2.mockClear();

        // both will be updated
        for (const s of [subFn1, subFn2]) {
          // wait for the result to come in
          await vi.waitFor(() => expect(s).toHaveBeenCalled());

          expect(s).toHaveBeenCalledExactlyOnceWith(
            objectPayloadContaining({
              ...firstLoad,
              lastUpdated: expect.toBeGreaterThan(firstLoad.lastUpdated),
            }),
          );

          s.mockClear();
        }
      });
    });

    describe(".observeObject (offline)", () => {
      const subFn = mockSingleSubCallback();
      let sub: Unsubscribable;

      beforeEach(() => {
        subFn.mockClear();

        sub = defer(
          cache.observeObject(Employee, 50030, { mode: "offline" }, subFn),
        );

        expect(subFn).toHaveBeenCalledExactlyOnceWith(objectPayloadContaining({
          status: "init",
          object: undefined,
        }));
        subFn.mockClear();
      });

      it("does basic observation and unsubscribe", async () => {
        const emp = employeesAsServerReturns[0];

        // force an update
        cache.updateObject(emp);
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({ object: emp }),
        );
        subFn.mockClear();

        // force again
        cache.updateObject(emp.$clone({ fullName: "new name" }));
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: expect.objectContaining({ fullName: "new name" }),
          }),
        );
        subFn.mockClear();

        sub.unsubscribe();

        // force again but no subscription update
        cache.updateObject(
          emp.$clone({ fullName: "new name 2" }),
        );
        expect(subFn).not.toHaveBeenCalled();
      });

      it("observes with list update", async () => {
        const emp = employeesAsServerReturns[0];

        // force an update
        cache.updateObject(emp.$clone({ fullName: "not the name" }));
        expect(subFn).toHaveBeenCalledTimes(1);

        cache.updateList(
          { type: Employee, where: {}, orderBy: {} },
          employeesAsServerReturns,
        );
        expect(subFn).toHaveBeenCalledTimes(2);

        expect(subFn.mock.calls[1][0]).toEqual(
          objectPayloadContaining({ object: emp }),
        );
      });
    });

    describe(".observeList", () => {
      const listSub1 = mockListSubCallback();

      beforeEach(() => {
        vi.useFakeTimers({});
        listSub1.mockReset();
      });
      afterEach(() => {
        vi.useRealTimers();
      });

      describe("mode=force", () => {
        it("initial load", async () => {
          defer(
            cache.observeList(
              {
                type: Employee,
                where: {},
                orderBy: {},
                mode: "force",
              },
              listSub1,
            ),
          );
          vitest.runOnlyPendingTimers();
          await vi.waitFor(() => expect(listSub1).toHaveBeenCalled());

          expect(listSub1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              status: "loading",
              resolvedList: [],
            }),
          );
          listSub1.mockClear();

          await vi.waitFor(() => expect(listSub1).toHaveBeenCalled());

          expect(listSub1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              resolvedList: employeesAsServerReturns,
              status: "loaded",
            }),
          );
        });

        it("subsequent load", async () => {
          // Pre-seed with data the server doesn't return
          cache.updateList(
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
          const firstLoad = listSub1.mock.calls[0][0]!;
          expectSingleListCallAndClear(listSub1, mutatedEmployees, {
            status: "loading",
          });

          await vi.waitFor(() => expect(listSub1).toHaveBeenCalled());
          expect(listSub1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              resolvedList: employeesAsServerReturns,
              status: "loaded",
              lastUpdated: expect.toBeGreaterThan(
                firstLoad.lastUpdated,
              ),
            }),
          );
          listSub1.mockClear();
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
          expect(listSub1).toHaveBeenCalledTimes(0);

          cache.updateList(
            { type: Employee, where: {}, orderBy: {} },
            employeesAsServerReturns,
          );
          vitest.runOnlyPendingTimers();

          expect(listSub1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({ resolvedList: employeesAsServerReturns }),
          );
          listSub1.mockClear();

          // list is just now one object
          cache.updateList(
            { type: Employee, where: {}, orderBy: {} },
            [employeesAsServerReturns[0]],
          );
          vitest.runOnlyPendingTimers();

          expect(listSub1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              resolvedList: [employeesAsServerReturns[0]],
            }),
          );
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

          expect(listSub1).toHaveBeenCalledTimes(0);

          cache.updateList(
            { type: Employee, where: {}, orderBy: {} },
            employeesAsServerReturns,
          );
          vitest.runOnlyPendingTimers();

          expect(listSub1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({ resolvedList: employeesAsServerReturns }),
          );
          listSub1.mockClear();

          // new where === different list
          cache.updateList(
            {
              type: Employee,
              where: { employeeId: { $gt: 0 } },
              orderBy: {},
            },
            mutatedEmployees,
          );
          vitest.runOnlyPendingTimers();

          // original list updates still
          expect(listSub1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              resolvedList: mutatedEmployees,
            }),
          );
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

        expect(listSub).not.toHaveBeenCalled();
        await vi.waitFor(() => expect(listSub).toHaveBeenCalled());

        expect(listSub).toHaveBeenCalledExactlyOnceWith(
          listPayloadContaining({
            status: "loading",
          }),
        );
        listSub.mockClear();
        await vi.waitFor(() => expect(listSub).toHaveBeenCalled());

        expect(listSub).toHaveBeenCalledExactlyOnceWith(
          listPayloadContaining({
            resolvedList: employeesAsServerReturns.slice(0, 1),
            status: "loaded",
          }),
        );
        const { fetchMore } = listSub.mock.calls[0][0]!;
        listSub.mockClear();

        void fetchMore();

        await vi.waitFor(() => expect(listSub).toHaveBeenCalledTimes(1));
        expect(listSub).toHaveBeenCalledExactlyOnceWith(
          listPayloadContaining({
            resolvedList: employeesAsServerReturns.slice(0, 1),
            status: "loading",
          }),
        );
        listSub.mockClear();

        await vi.waitFor(() => expect(listSub).toHaveBeenCalledTimes(1));
        expect(listSub).toHaveBeenCalledWith(
          listPayloadContaining({
            resolvedList: employeesAsServerReturns.slice(0, 2),
            status: "loaded",
          }),
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

    describe("actions", () => {
      it("properly invalidates objects", async () => {
        // after the below `observeObject`, the cache will need to load from the server
        mockClient.mockFetchOneOnce().resolve({
          $apiName: "Todo",
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
          $apiName: "Todo",
          text: "hello there kind sir",
        });

        const actionPromise = store.applyAction(createOffice, {
          officeId: "whatever",
        });

        await actionPromise;
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
        } as Osdk.Instance<Todo>;

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
        expect(todoSubFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: {
              ...fauxObject,
              text: "optimistic",
            },
            status: "loading",
            isOptimistic: true,
          }),
        );
        todoSubFn.mockClear();

        // let the action error out
        applyActionResult.reject("an error thrown");
        await expect(actionPromise).rejects.toThrow("an error thrown");

        // back to the original object
        await waitForCall(todoSubFn, 1);
        expect(todoSubFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: fauxObject,
            status: "loaded",
            isOptimistic: false,
          }),
        );
      });
    });

    describe("orderBy", () => {
      let nextPk = 0;
      const fauxObjectA = {
        $apiName: "Todo",
        $objectType: "Todo",
        $primaryKey: nextPk++,
        $title: "a",
        text: "a",
      } as Osdk.Instance<Todo>;

      const fauxObjectB = {
        $apiName: "Todo",
        $objectType: "Todo",
        $primaryKey: nextPk++,
        $title: "b",
        text: "b",
      } as Osdk.Instance<Todo>;

      const fauxObjectC = {
        $apiName: "Todo",
        $objectType: "Todo",
        $primaryKey: nextPk++,
        $title: "c",
        text: "c",
      } as Osdk.Instance<Todo>;

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
        expect(subListUnordered).toHaveBeenCalledTimes(0);

        defer(
          store.observeList({
            ...noWhereOrderByText,
            mode: "offline",
          }, subListOrdered),
        );
        expect(subListOrdered).toHaveBeenCalledTimes(0);
      });

      it("invalidates the correct lists", async () => {
        // for whatever reason, the first list is loaded as [B, A]
        store.updateList(
          noWhereNoOrderBy,
          [fauxObjectB, fauxObjectA],
        );

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
        store.updateList(
          { type: Todo, where: {}, orderBy: {} },
          [fauxObjectC, fauxObjectA],
        );

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
        const optimisticallyMutatedA = {
          ...fauxObjectA,
          text: "optimistic",
        };
        const pkForOptimistic = nextPk++;
        const optimisticallyCreatedObjectD = {
          "$apiName": "Todo",
          "$objectType": "Todo",
          "$primaryKey": pkForOptimistic,
          "$title": "d",
          "text": "d",
          id: pkForOptimistic,
        } as Osdk.Instance<Todo>;

        // for whatever reason, the first list is loaded as [B, A]
        store.updateList(
          noWhereNoOrderBy,
          [fauxObjectB, fauxObjectA],
        );

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
          b.updateObject(optimisticallyMutatedA);
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
        const optimisticallyCreatedObjectD = {
          "$apiName": "Todo",
          "$objectType": "Todo",
          "$primaryKey": pkForOptimistic,
          "$title": "d",
          "text": "d",
          id: pkForOptimistic,
        } as Osdk.Instance<Todo>;

        const optimisticallyMutatedA = {
          ...fauxObjectA,
          text: "optimistic",
        };

        testStage("Initial Setup");

        // later we will "create" this object
        const createdObjectD = {
          "$apiName": "Todo",
          "$objectType": "Todo",
          "$primaryKey": 9000,
          "$title": "d prime",
          "text": "d prime",
          id: 9000,
        } as Osdk.Instance<Todo>;

        // for whatever reason, the first list is loaded as [B, A]
        store.updateList(
          noWhereNoOrderBy,
          [fauxObjectB, fauxObjectA],
        );

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
              b.createObject(Todo, pkForOptimistic, {
                id: pkForOptimistic,
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

        // the second list is now [A, B, optimistic]
        await waitForCall(subListOrdered, 1);
        expectSingleListCallAndClear(subListOrdered, [
          fauxObjectB,
          optimisticallyCreatedObjectD,
          optimisticallyMutatedA,
        ], { isOptimistic: true });

        testStage("Resolve Action");

        const modifiedObjectA = {
          ...fauxObjectA,
          text: "a prime",
        };

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
        store.updateObject(obj);
      }

      // expect the truth
      for (const obj of baseObjects) {
        expect(store.getObject("Employee", obj.$primaryKey)).toEqual(
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
        expect(store.getObject("Employee", baseObjects[i].$primaryKey)).toEqual(
          expect.objectContaining({
            $title: `optimistic ${baseObjects[i].$primaryKey}`,
          }),
        );
      }

      // remove the first layer
      store.removeLayer(layerIds[0]);

      // should have truth object 1 and optimistic object 2
      expect(store.getObject("Employee", 1)).toEqual(
        expect.objectContaining({ $title: "truth 1" }),
      );
      expect(store.getObject("Employee", 2)).toEqual(
        expect.objectContaining({ $title: "optimistic 2" }),
      );

      // remove the second layer
      store.removeLayer(layerIds[1]);

      // should have truth objects
      for (const obj of baseObjects) {
        expect(store.getObject("Employee", obj.$primaryKey)).toEqual(
          expect.objectContaining({ $title: `truth ${obj.$primaryKey}` }),
        );
      }
    });
  });
});
