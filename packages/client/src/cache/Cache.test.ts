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

    beforeAll(async () => {
      apiServer.listen();
      client = createClient(
        "https://stack.palantir.com",
        $ontologyRid,
        async () => "myAccessToken",
      );
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
      const { data } = await client(Employee).fetchPage();
      const emp = data[0];

      // starts empty
      expect(
        cache.getObject(Employee, emp.$primaryKey),
      ).toBeUndefined();

      const result = cache.updateObject(emp);
      expect(emp).toBe(result);

      // getting the object now matches the result
      expect(cache.getObject(Employee, emp.$primaryKey)).toBe(result);

      const updatedEmpFromCache = cache.updateObject(
        emp.$clone({ fullName: "new name" }),
      );
      expect(updatedEmpFromCache).not.toBe(emp);

      // getting it again is the updated object
      expect(cache.getObject(Employee, emp.$primaryKey)).toBe(
        updatedEmpFromCache,
      );
    });

    describe(".observeObject (force)", () => {
      const likeEmployee50030 = expect.objectContaining({
        $primaryKey: 50030,
        fullName: "John Doe",
      });

      it("fetches and updates one", async () => {
        const subFn = vitest.fn((e: ObjectEntry<Employee> | undefined) => {});
        defer(
          cache.observeObject(Employee, 50030, { mode: "force" }, subFn),
        );

        expect(subFn).toHaveBeenCalledExactlyOnceWith(undefined);
        subFn.mockClear();

        await vi.waitFor(() => expect(subFn).toHaveBeenCalled());
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            value: likeEmployee50030,
          }),
        );
      });

      it("fetches and updates twice", async () => {
        const subFn1 = vitest.fn((e: ObjectEntry<Employee> | undefined) => {});
        const subFn2 = vitest.fn((e: ObjectEntry<Employee> | undefined) => {});

        defer(
          cache.observeObject(Employee, 50030, { mode: "force" }, subFn1),
        );

        expect(subFn1).toHaveBeenCalledTimes(1);
        subFn1.mockClear();

        await vi.waitFor(() => expect(subFn1).toHaveBeenCalled());
        expect(subFn1).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            value: likeEmployee50030,
          }),
        );
        const firstLoad = subFn1.mock.calls[0][0]!;
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
        const { data } = await client(Employee).fetchPage();
        const emp = data[0];

        // force an update
        cache.updateObject(emp);
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({ value: emp }),
        );
        subFn.mockClear();

        // force again
        cache.updateObject(emp.$clone({ fullName: "new name" }));
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            value: expect.objectContaining({ fullName: "new name" }),
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
        const { data } = await client(Employee).fetchPage();
        const emp = data[0];

        // force an update
        cache.updateObject(emp.$clone({ fullName: "not the name" }));
        expect(subFn).toHaveBeenCalledTimes(1);

        cache.updateList(Employee, {}, data);
        expect(subFn).toHaveBeenCalledTimes(2);

        expect(subFn.mock.calls[1][0]).toEqual(
          expect.objectContaining({ value: emp }),
        );
      });
    });

    describe.todo(".observeList (force)");

    describe(".observeList (offline)", () => {
      beforeEach(() => {
        vi.useFakeTimers({});
      });
      afterEach(() => {
        vi.useRealTimers();
      });

      it("updates with list updates", async () => {
        const subFn = vitest.fn(
          (x: ListPayload<Employee> | undefined) => {
          },
        );

        const { data } = await client(Employee).fetchPage();
        subscriptions.push(
          cache.observeList(Employee, {}, { mode: "offline" }, subFn),
        );
        expect(subFn).toHaveBeenCalledTimes(0);

        cache.updateList(Employee, {}, data);
        vi.runAllTimers();

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({ resolvedList: data }),
        );
        subFn.mockClear();

        // list is just now one object
        cache.updateList(Employee, {}, [data[0]]);
        vi.runAllTimers();

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({ resolvedList: [data[0]] }),
        );
      });

      it("updates with different list updates", async () => {
        const { data } = await client(Employee).fetchPage();
        const subFn = vitest.fn<
          (x: ListPayload<Employee> | undefined) => void
        >();
        subscriptions.push(
          cache.observeList(Employee, {}, { mode: "offline" }, subFn),
        );

        expect(subFn).toHaveBeenCalledTimes(0);

        cache.updateList(Employee, {}, data);
        vi.runAllTimers();

        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({ resolvedList: data }),
        );
        subFn.mockClear();

        // pretend an object was changed server side
        // and lets use the 2nd entry to make it more interesting
        const updatedEmployee = data[1].$clone({
          fullName: "foo",
        });

        // new where === different list
        cache.updateList(Employee, { employeeId: { $gt: 0 } }, [
          updatedEmployee,
        ]);
        vi.runAllTimers();

        // original list updates still
        expect(subFn).toHaveBeenCalledExactlyOnceWith(
          expect.objectContaining({
            resolvedList: [data[0], updatedEmployee, ...data.slice(2)],
          }),
        );
      });
    });
  });
});
