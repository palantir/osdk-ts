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
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import type { Unsubscribable } from "./Cache.js";
import { Store } from "./Cache.js";
import type { MockClientHelper } from "./testUtils.js";
import {
  applyCustomMatchers,
  cacheEntryContaining,
  createClientMockHelper,
  createDefer,
  expectSingleListCallAndClear,
  expectSingleObjectCallAndClear,
  mockListSubCallback,
  mockSingleSubCallback,
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
  cacheKey: expect.any(Object),
  value: undefined,
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

        expectSingleObjectCallAndClear(subFn, emp);

        // update with an optimistic write
        cache.updateObject(Employee, emp.$clone({ fullName: "new name" }), {
          optimisticId: "1",
        });
        expectSingleObjectCallAndClear(
          subFn,
          emp.$clone({ fullName: "new name" }),
        );

        // remove the optimistic write
        cache.removeLayer("1");

        expectSingleObjectCallAndClear(subFn, emp);
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

        expectSingleObjectCallAndClear(empSubFn, emp);

        const listSubFn = mockListSubCallback();
        defer(
          cache.observeList(Employee, {}, { mode: "offline" }, listSubFn),
        );

        expectSingleListCallAndClear(listSubFn, employeesAsServerReturns);

        const optimisticEmployee = emp.$clone({ fullName: "new name" });

        // update with an optimistic write
        cache.updateObject(Employee, optimisticEmployee, {
          optimisticId: "1",
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
        cache.removeLayer("1");

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
          expect.objectContaining({ value: emp }),
        );
        subFn.mockClear();

        const optimisticEmployee = emp.$clone({ fullName: "new name" });

        // update with an optimistic write
        cache.updateObject(Employee, optimisticEmployee, {
          optimisticId: "1",
        });
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          cacheEntryContaining({
            value: optimisticEmployee,
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
        cache.removeLayer("1");

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          cacheEntryContaining({
            value: truthUpdatedEmployee,
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
          cacheEntryContaining({
            value: staleEmp,
            status: "loaded",
          }),
        );
        subFn.mockClear();

        // invalidate
        cache.invalidateObject(Employee, staleEmp.$primaryKey);

        await vi.waitFor(() => expect(subFn).toHaveBeenCalled());

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          cacheEntryContaining({
            value: staleEmp,
            status: "loading",
          }),
        );
        subFn.mockClear();

        await vi.waitFor(() => expect(subFn).toHaveBeenCalled());

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          cacheEntryContaining({
            value: emp,
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
          cacheEntryContaining({
            status: "loaded",
            value: emp,
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
          cacheEntryContaining({
            status: "loaded",
            value: emp,
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
        const ANY_LOADING_ENTRY = {
          cacheKey: expect.any(Object),
          value: expect.anything(),
          lastUpdated: expect.toBeGreaterThan(0),
          status: "loading",
        };
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          cacheEntryContaining({
            status: "loading",
            value: undefined,
          }),
        );

        subFn1.mockClear();

        await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          cacheEntryContaining({
            value: likeEmployee50030,
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
          cacheEntryContaining({ value: emp }),
        );
        subFn.mockClear();

        // force again
        cache.updateObject(Employee, emp.$clone({ fullName: "new name" }));
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          cacheEntryContaining({
            value: expect.objectContaining({ fullName: "new name" }),
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
          cacheEntryContaining({ value: emp }),
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
            {
              listEntry: cacheEntryContaining({
                status: "loading",
                value: undefined,
              }),
              status: "loading",
              resolvedList: [],
              fetchMore: expect.any(Function),
            },
          );
          subFn1.mockClear();

          await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());

          expect(subFn1).toHaveBeenCalledExactlyOnceWith(
            expect.objectContaining({
              listEntry: expect.any(Object),
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
            expect.objectContaining({
              listEntry: expect.any(Object),
              resolvedList: mutatedEmployees,
              status: "loading",
            }),
          );
          const firstLoad = subFn1.mock.calls[0][0]!;
          subFn1.mockClear();

          await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());
          expect(subFn1).toHaveBeenCalledExactlyOnceWith({
            listEntry: expect.objectContaining({
              ...firstLoad.listEntry,
              lastUpdated: expect.toBeGreaterThan(
                firstLoad.listEntry.lastUpdated,
              ),
              status: "loaded",
            }),
            resolvedList: employeesAsServerReturns,
            status: "loaded",
            fetchMore: expect.any(Function),
          });
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

        console.log(subFn.mock.calls[0][0]?.listEntry.cacheKey);

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
          loading: undefined,
          loaded: expect.objectContaining({
            $primaryKey: 0,
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

        const mockFetchResult = mockClient.mockFetchOneOnce<Todo>();

        const actionPromise = cache.applyAction(createOffice, {
          officeId: "whatever",
        });

        await actionPromise;
        await todoSubFn.expectLoading(expect.any(Object));

        mockFetchResult.resolve({
          $apiName: "Todo",
          text: "hello there kind sir",
        });

        await todoSubFn.expectLoaded(expect.objectContaining({
          text: "hello there kind sir",
        }));
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
          loading: undefined,
          loaded: fauxObject,
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

        await todoSubFn.expectLoading({
          ...fauxObject,
          someValue: "optimistic",
        });

        // let the action error out
        applyActionResult.reject("an error thrown");
        await expect(actionPromise).rejects.toThrow("an error thrown");

        // back to the original object
        await todoSubFn.expectLoaded(fauxObject);
      });
    });
  });
});
