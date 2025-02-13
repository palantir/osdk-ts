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
import type { Mock } from "vitest";
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
import type { Client } from "../../Client.js";
import { createClient } from "../../createClient.js";
import type { Unsubscribable } from "../ObservableClient.js";
import { createOptimisticId } from "./OptimisticId.js";
import { Store } from "./Store.js";
import type { MockClientHelper } from "./testUtils.js";
import {
  applyCustomMatchers,
  createClientMockHelper,
  createDefer,
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

      const result = cache.updateObject(Employee, emp);
      expect(emp).toBe(result);

      // getting the object now matches the result
      expect(cache.getObject(Employee, emp.$primaryKey)).toEqual(
        result,
      );

      const updatedEmpFromCache = cache.updateObject(
        Employee,
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
        cache.updateObject(Employee, emp); // pre-seed the cache with the "real" value

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
        cache.updateObject(Employee, emp.$clone({ fullName: "new name" }), {
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
        vi.useFakeTimers();

        cache.updateList(Employee, {}, employeesAsServerReturns); // pre-seed the cache with the "real" value

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
          cache.observeList(Employee, {}, { mode: "offline" }, listSubFn),
        );

        expectSingleListCallAndClear(listSubFn, employeesAsServerReturns);

        const optimisticEmployee = emp.$clone({ fullName: "new name" });

        const optimisticId = createOptimisticId();

        // update with an optimistic write
        cache.updateObject(Employee, optimisticEmployee, {
          optimisticId,
        });

        // expect optimistic write
        expectSingleObjectCallAndClear(empSubFn, optimisticEmployee);

        // expect optimistic write to the list
        expectSingleListCallAndClear(
          listSubFn,
          [
            optimisticEmployee,
            ...employeesAsServerReturns.slice(1),
          ],
        );

        // write the real update, via the earlier list definition
        const truthUpdatedEmployee = emp.$clone({
          fullName: "real update",
        });
        cache.updateList(Employee, {}, [truthUpdatedEmployee]);

        // we shouldn't expect an update because the top layer has a value
        expect(empSubFn).not.toHaveBeenCalled();

        // we do get an update to the list but we still see the optimistic value
        // for the object
        expectSingleListCallAndClear(listSubFn, [optimisticEmployee]);

        // remove the optimistic write
        cache.removeLayer(optimisticId);

        // see the object observation get updated
        expectSingleObjectCallAndClear(empSubFn, truthUpdatedEmployee);

        // see the list get updated
        expectSingleListCallAndClear(listSubFn, [truthUpdatedEmployee]);

        vi.useRealTimers();
      });

      it("rolls back to an updated real value via list", async () => {
        const emp = employeesAsServerReturns[0];
        cache.updateObject(Employee, emp); // pre-seed the cache with the "real" value

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
        cache.updateObject(Employee, optimisticEmployee, {
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
        cache.updateObject(Employee, truthUpdatedEmployee);

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
        cache.updateObject(Employee, staleEmp);

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
        cache.updateList(Employee, {}, [staleEmp]);

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
        defer(cache.observeList(Employee, {}, { mode: "offline" }, subListFn));

        await vi.waitFor(() => expect(subListFn).toHaveBeenCalled());
        expect(subListFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            resolvedList: [staleEmp],
            status: "loaded",
          }),
        );
        subListFn.mockClear();

        cache.invalidateList(Employee, {});

        await vi.waitFor(() => expect(subListFn).toHaveBeenCalled());
        expect(subListFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            resolvedList: [staleEmp],
            status: "loading",
          }),
        );
        subListFn.mockClear();

        await vi.waitFor(() => expect(subListFn).toHaveBeenCalled());
        expect(subListFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
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
        cache.updateList(Employee, {}, [staleEmp]);

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
        defer(cache.observeList(Employee, {}, { mode: "offline" }, subListFn));

        await vi.waitFor(() => expect(subListFn).toHaveBeenCalled());
        expect(subListFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            resolvedList: [staleEmp],
            status: "loaded",
          }),
        );
        subListFn.mockClear();

        cache.invalidateObjectType(Employee);

        await vi.waitFor(() => expect(subListFn).toHaveBeenCalled());
        expect(subListFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            resolvedList: [staleEmp],
            status: "loading",
          }),
        );
        subListFn.mockClear();

        await vi.waitFor(() => expect(subListFn).toHaveBeenCalled());
        expect(subListFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
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
        const ANY_LOADING_ENTRY = expect.objectContaining({
          status: "loading",
        });
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            status: "loading",
            object: undefined,
          }),
        );

        subFn1.mockClear();

        await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: likeEmployee50030,
          }),
        );

        const firstLoad = subFn1.mock.lastCall?.[0]!;

        subFn1.mockClear();

        defer(
          cache.observeObject(Employee, 50030, { mode: "force" }, subFn2),
        );
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          ANY_LOADING_ENTRY,
        );
        subFn1.mockClear();

        // should be the earlier results
        expect(subFn2).toHaveBeenCalledExactlyOnceWith(ANY_LOADING_ENTRY);
        subFn2.mockClear();

        // both will be updated
        for (const s of [subFn1, subFn2]) {
          // wait for the result to come in
          await vi.waitFor(() => expect(s).toHaveBeenCalled());

          expect(s).toHaveBeenCalledExactlyOnceWith(
            expect.objectContaining({
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

        expect(subFn).toHaveBeenCalledExactlyOnceWith(ANY_INIT_ENTRY);
        subFn.mockClear();
      });

      it("does basic observation and unsubscribe", async () => {
        const emp = employeesAsServerReturns[0];

        // force an update
        cache.updateObject(Employee, emp);
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({ object: emp }),
        );
        subFn.mockClear();

        // force again
        cache.updateObject(Employee, emp.$clone({ fullName: "new name" }));
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: expect.objectContaining({ fullName: "new name" }),
          }),
        );
        subFn.mockClear();

        sub.unsubscribe();

        // force again but no subscription update
        cache.updateObject(
          Employee,
          emp.$clone({ fullName: "new name 2" }),
        );
        expect(subFn).not.toHaveBeenCalled();
      });

      it("observes with list update", async () => {
        const emp = employeesAsServerReturns[0];

        // force an update
        cache.updateObject(Employee, emp.$clone({ fullName: "not the name" }));
        expect(subFn).toHaveBeenCalledTimes(1);

        cache.updateList(Employee, {}, employeesAsServerReturns);
        expect(subFn).toHaveBeenCalledTimes(2);

        expect(subFn.mock.calls[1][0]).toEqual(
          objectPayloadContaining({ object: emp }),
        );
      });
    });

    describe(".observeList", () => {
      const subFn1 = mockListSubCallback();

      beforeEach(() => {
        vi.useFakeTimers({});
        subFn1.mockReset();
      });
      afterEach(() => {
        vi.useRealTimers();
      });

      describe("mode=force", () => {
        it("initial load", async () => {
          defer(
            cache.observeList(Employee, {}, { mode: "force" }, subFn1),
          );
          vitest.runOnlyPendingTimers();
          await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());

          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              status: "loading",
              resolvedList: [],
            }),
          );
          subFn1.mockClear();

          await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());

          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              resolvedList: employeesAsServerReturns,
              status: "loaded",
            }),
          );
        });

        it("subsequent load", async () => {
          // Pre-seed with data the server doesn't return
          cache.updateList(Employee, {}, mutatedEmployees);

          defer(
            cache.observeList(Employee, {}, { mode: "force" }, subFn1),
          );

          await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());

          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              resolvedList: mutatedEmployees,
              status: "loading",
            }),
          );
          const firstLoad = subFn1.mock.calls[0][0]!;
          subFn1.mockClear();

          await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());
          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            listPayloadContaining({
              resolvedList: employeesAsServerReturns,
              status: "loaded",
              lastUpdated: expect.toBeGreaterThan(
                firstLoad.lastUpdated,
              ),
            }),
          );
          subFn1.mockClear();
        });
      });

      describe("mode = offline", () => {
        it("updates with list updates", async () => {
          defer(
            cache.observeList(Employee, {}, { mode: "offline" }, subFn1),
          );
          expect(subFn1).toHaveBeenCalledTimes(0);

          cache.updateList(Employee, {}, employeesAsServerReturns);
          vitest.runOnlyPendingTimers();

          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            expect.objectContaining({ resolvedList: employeesAsServerReturns }),
          );
          subFn1.mockClear();

          // list is just now one object
          cache.updateList(Employee, {}, [employeesAsServerReturns[0]]);
          vitest.runOnlyPendingTimers();

          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            expect.objectContaining({
              resolvedList: [employeesAsServerReturns[0]],
            }),
          );
        });

        it("updates with different list updates", async () => {
          defer(
            cache.observeList(Employee, {}, { mode: "offline" }, subFn1),
          );

          expect(subFn1).toHaveBeenCalledTimes(0);

          cache.updateList(Employee, {}, employeesAsServerReturns);
          vitest.runOnlyPendingTimers();

          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            expect.objectContaining({ resolvedList: employeesAsServerReturns }),
          );
          subFn1.mockClear();

          // new where === different list
          cache.updateList(
            Employee,
            { employeeId: { $gt: 0 } },
            mutatedEmployees,
          );
          vitest.runOnlyPendingTimers();

          // original list updates still
          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            expect.objectContaining({
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
        const subFn = mockListSubCallback();
        defer(cache.observeList(
          Employee,
          {},
          { mode: "force", pageSize: 1 },
          subFn,
        ));

        expect(subFn).not.toHaveBeenCalled();
        await vi.waitFor(() => expect(subFn).toHaveBeenCalled());

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            status: "loading",
          }),
        );
        subFn.mockClear();
        await vi.waitFor(() => expect(subFn).toHaveBeenCalled());

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            resolvedList: employeesAsServerReturns.slice(0, 1),
            status: "loaded",
          }),
        );
        const { fetchMore } = subFn.mock.calls[0][0]!;
        subFn.mockClear();

        void fetchMore();

        await vi.waitFor(() => expect(subFn).toHaveBeenCalledTimes(1));
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            resolvedList: employeesAsServerReturns.slice(0, 1),
            status: "loading",
          }),
        );
        subFn.mockClear();

        await vi.waitFor(() => expect(subFn).toHaveBeenCalledTimes(1));
        expect(subFn).toHaveBeenCalledWith(
          expect.objectContaining({
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
    let cache: Store;

    let employeesAsServerReturns: Osdk.Instance<Employee>[];
    let mutatedEmployees: Osdk.Instance<Employee>[];

    beforeEach(async () => {
      mockClient = createClientMockHelper();
      client = mockClient.client;
      cache = new Store(client);
    });

    describe("actions", () => {
      it("properly invalidates objects", async () => {
        // after the below `observeObject`, the cache will need to load from the server
        mockClient.mockFetchOneOnce().resolve({
          $apiName: "Todo",
        });

        const todoSubFn = mockSingleSubCallback();
        defer(cache.observeObject(Todo, 0, {}, todoSubFn));

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

        const actionPromise = cache.applyAction(createOffice, {
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
          cache.observeObject(Todo, 0, {}, todoSubFn),
        );

        await todoSubFn.expectLoadingAndLoaded({
          loading: objectPayloadContaining({
            status: "loading",
            object: undefined,
          }),
          loaded: objectPayloadContaining({
            object: fauxObject,
            status: "loaded",
          }),
        });

        // at this point we have an observation properly set up
        const applyActionResult = mockClient.mockApplyActionOnce();

        const actionPromise = cache.applyAction(createOffice, {
          officeId: "whatever",
        }, {
          optimisticUpdate: (ctx) => {
            ctx.updateObject({ ...fauxObject, someValue: "optimistic" });
          },
        });

        await waitForCall(todoSubFn, 1);
        expect(todoSubFn).toHaveBeenCalledExactlyOnceWith(
          objectPayloadContaining({
            object: {
              ...fauxObject,
              someValue: "optimistic",
            },
            status: "loading",
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
          }),
        );
      });
    });
  });

  describe("layers", () => {
    it("properly remove", () => {
      const store = new Store({} as any);

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
        store.updateObject("Employee", obj);
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
