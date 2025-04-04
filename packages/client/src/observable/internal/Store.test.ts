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
  Todo,
} from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import {
  ActionTypeBuilder,
  FauxFoundry,
  ontologies,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import chalk from "chalk";
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
  vitest,
} from "vitest";
import { ActionValidationError } from "../../actions/ActionValidationError.js";
import { type Client } from "../../Client.js";
import { createClient } from "../../createClient.js";
import { TestLogger } from "../../logger/TestLogger.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type {
  ObserveListOptions,
  Unsubscribable,
} from "../ObservableClient.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import { createOptimisticId } from "./OptimisticId.js";
import { runOptimisticJob } from "./OptimisticJob.js";
import { invalidateList, Store } from "./Store.js";
import {
  applyCustomMatchers,
  createClientMockHelper,
  createDefer,
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

const JOHN_DOE_ID = 50030;

const defer = createDefer();

const logger = new TestLogger();

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

  dataStore.registerObject(Employee, {
    employeeId: 1,
  });

  dataStore.registerObject(Employee, {
    employeeId: 2,
  });

  dataStore.registerObject(Employee, {
    $apiName: "Employee",
    employeeId: 3,
  });

  dataStore.registerObject(Employee, {
    $apiName: "Employee",
    employeeId: 4,
  });

  dataStore.registerObject(Employee, {
    $apiName: "Employee",
    employeeId: JOHN_DOE_ID,
    fullName: "John Doe",
  });
}

describe(Store, () => {
  describe("with mock server", () => {
    let client: Client;
    let cache: Store;

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

      employeesAsServerReturns = (await client(Employee).fetchPage()).data;
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

      return () => {
        cache = undefined!;
      };
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
        $primaryKey: JOHN_DOE_ID,
        fullName: "John Doe",
      });

      it("fetches and updates twice", async () => {
        defer(
          cache.observeObject(Employee, JOHN_DOE_ID, { mode: "force" }, subFn1),
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
          cache.observeObject(Employee, JOHN_DOE_ID, { mode: "force" }, subFn2),
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
          cache.observeObject(
            Employee,
            JOHN_DOE_ID,
            { mode: "offline" },
            subFn,
          ),
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
            employeesAsServerReturns,
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

      store.observeList({
        type: Employee,
        where: { aBadPropertyThatDoesNotExist: "aBadValue" } as any,
        orderBy: {},
      }, sub);

      await waitForCall(sub.error, 1);

      expect(sub.error).toHaveBeenCalled();
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

        const object: Osdk.Instance<Todo> | undefined = store.getValue(
          store.getCacheKey<ObjectCacheKey>("object", "Todo", 0),
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

            return client(Todo).fetchOne(id);
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
        } = new ActionTypeBuilder("asdf")
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
        const createdObjectD = await client(Todo).fetchOne(pkForD);

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
