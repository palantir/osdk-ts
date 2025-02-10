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

import { $ontologyRid, Employee } from "@osdk/client.test.ontology";
import { apiServer } from "@osdk/shared.test";

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
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
import type { ListPayload, ObjectEntry, Unsubscribable } from "./Cache.js";
import { Store } from "./Cache.js";

let subscriptions: Unsubscribable[];
beforeEach(() => {
  subscriptions = [];
});
afterEach(() => {
  for (const s of subscriptions) {
    s.unsubscribe();
  }
  subscriptions = [];
});

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

function defer(x: Unsubscribable) {
  subscriptions.push(x);
  return x;
}

function expectSingleListCallAndClear<T extends ObjectTypeDefinition>(
  subFn: Mock<(e: ListPayload<T> | undefined) => void>,
  resolvedList: Osdk.Instance<T>[],
) {
  vitest.runOnlyPendingTimers();
  expect(subFn).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({
      resolvedList,
    }),
  );
  subFn.mockClear();
}

function expectSingleObjectCallAndClear<T extends ObjectTypeDefinition>(
  subFn: Mock<(e: ObjectEntry<T> | undefined) => void>,
  value: Osdk.Instance<T>,
) {
  expect(subFn).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({ value: { instance: value } }),
  );
  subFn.mockClear();
}

expect.extend({
  toBeGreaterThan: (r: number, e: number) => {
    return {
      pass: r > e,
      message: () => `expected ${r} to be greater than ${e} (lastUpdated)`,
    };
  },
});

interface CustomMatchers<R = unknown> {
  toBeGreaterThan: (n: number) => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

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

      const result = cache.updateObject(emp);
      expect(emp).toBe(result);

      // getting the object now matches the result
      expect(cache.getObject(Employee, emp.$primaryKey)).toEqual(
        expect.objectContaining({
          instance: result,
        }),
      );

      const updatedEmpFromCache = cache.updateObject(
        emp.$clone({ fullName: "new name" }),
      );
      expect(updatedEmpFromCache).not.toBe(emp);

      // getting it again is the updated object
      expect(cache.getObject(Employee, emp.$primaryKey)).toEqual(
        expect.objectContaining({
          instance: updatedEmpFromCache,
        }),
      );
    });

    describe("optimistic updates", () => {
      it("rolls back objects", async () => {
        const emp = employeesAsServerReturns[0];
        cache.updateObject(emp); // pre-seed the cache with the "real" value

        const subFn = vitest.fn((e: ObjectEntry<Employee> | undefined) => {});
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
        cache.updateObject(emp.$clone({ fullName: "new name" }), {
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

        const empSubFn = vitest.fn(
          (e: ObjectEntry<Employee> | undefined) => {},
        );
        defer(
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            empSubFn,
          ),
        );

        expectSingleObjectCallAndClear(empSubFn, emp);

        const listSubFn = vitest.fn(
          (e: ListPayload<Employee> | undefined) => {},
        );
        defer(
          cache.observeList(Employee, {}, { mode: "offline" }, listSubFn),
        );

        expectSingleListCallAndClear(listSubFn, employeesAsServerReturns);

        const optimisticEmployee = emp.$clone({ fullName: "new name" });

        // update with an optimistic write
        cache.updateObject(optimisticEmployee, {
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
        cache.updateObject(emp); // pre-seed the cache with the "real" value

        const subFn = vitest.fn((e: ObjectEntry<Employee> | undefined) => {});
        defer(
          cache.observeObject(
            Employee,
            emp.$primaryKey,
            { mode: "offline" },
            subFn,
          ),
        );
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({ value: { instance: emp } }),
        );
        subFn.mockClear();

        const optimisticEmployee = emp.$clone({ fullName: "new name" });

        // update with an optimistic write
        cache.updateObject(optimisticEmployee, {
          optimisticId: "1",
        });
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            value: { instance: optimisticEmployee },
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
        cache.removeLayer("1");

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            value: { instance: truthUpdatedEmployee },
          }),
        );
      });
    });

    describe(".observeObject (force)", () => {
      const subFn1 = vitest.fn((e: ObjectEntry<Employee> | undefined) => {});
      const subFn2 = vitest.fn((e: ObjectEntry<Employee> | undefined) => {});

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
        // initially, there is no data since its loading
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(undefined);
        subFn1.mockClear();

        await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            value: { instance: likeEmployee50030 },
          }),
        );

        const firstLoad = subFn1.mock.lastCall?.[0]!;
        subFn1.mockClear();

        defer(
          cache.observeObject(Employee, 50030, { mode: "force" }, subFn2),
        );
        // should be the earlier results
        expect(subFn2).toHaveBeenCalledExactlyOnceWith(firstLoad);
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
      const subFn = vitest.fn((e: ObjectEntry<Employee> | undefined) => {});
      let sub: Unsubscribable;

      beforeEach(() => {
        subFn.mockClear();

        sub = defer(
          cache.observeObject(Employee, 50030, { mode: "offline" }, subFn),
        );

        expect(subFn).toHaveBeenCalledExactlyOnceWith(undefined);
        subFn.mockClear();
      });

      it("does basic observation and unsubscribe", async () => {
        const emp = employeesAsServerReturns[0];

        // force an update
        cache.updateObject(emp);
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({ value: { instance: emp } }),
        );
        subFn.mockClear();

        // force again
        cache.updateObject(emp.$clone({ fullName: "new name" }));
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            value: {
              instance: expect.objectContaining({ fullName: "new name" }),
            },
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

        cache.updateList(Employee, {}, employeesAsServerReturns);
        expect(subFn).toHaveBeenCalledTimes(2);

        expect(subFn.mock.calls[1][0]).toEqual(
          expect.objectContaining({ value: { instance: emp } }),
        );
      });
    });

    describe(".observeList", () => {
      const subFn1 = vitest.fn(
        (x: ListPayload<Employee> | undefined) => {},
      );

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

          expect(subFn1).not.toHaveBeenCalled();
          vitest.runOnlyPendingTimers();

          expect(subFn1).toHaveBeenCalledExactlyOnceWith(undefined);
          subFn1.mockClear();

          await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());

          expect(subFn1).toHaveBeenCalledExactlyOnceWith({
            listEntry: expect.any(Object),
            resolvedList: employeesAsServerReturns,
          });
        });

        it("subsequent load", async () => {
          // Pre-seed with data the server doesn't return
          cache.updateList(Employee, {}, mutatedEmployees);
          vitest.runOnlyPendingTimers();

          defer(
            cache.observeList(Employee, {}, { mode: "force" }, subFn1),
          );
          vitest.runOnlyPendingTimers();

          expect(subFn1).toHaveBeenCalledExactlyOnceWith({
            listEntry: expect.any(Object),
            resolvedList: mutatedEmployees,
          });
          const firstLoad = subFn1.mock.calls[0][0]!;
          subFn1.mockClear();

          // list is updated returned from server
          await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());
          expect(subFn1).toHaveBeenCalledExactlyOnceWith({
            listEntry: expect.objectContaining({
              ...firstLoad.listEntry,
              lastUpdated: expect.toBeGreaterThan(
                firstLoad.listEntry.lastUpdated,
              ),
            }),
            resolvedList: employeesAsServerReturns,
          });
          const secondLoad = subFn1.mock.calls[0][0]!;
          subFn1.mockClear();
        });
      });

      describe("mode = offline", () => {
        it("updates with list updates", async () => {
          subscriptions.push(
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
          subscriptions.push(
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
  });
});
