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

import type { DerivedProperty, ObjectSet } from "@osdk/api";
import {
  addOne,
  editTodo,
  Employee,
  moveOffice,
  Office,
  Todo,
} from "@osdk/client.test.ontology";
import {
  FauxFoundry,
  ontologies,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import type { MockedObject } from "vitest";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { FunctionPayload } from "../../FunctionPayload.js";
import type { ListPayload } from "../../ListPayload.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import type { Observer } from "../../ObservableClient/common.js";
import { Store } from "../Store.js";
import { mockObserver } from "../testUtils.js";

function mockFunctionSubCallback(): MockedObject<
  Observer<FunctionPayload | undefined>
> {
  return {
    next: vi.fn(),
    error: vi.fn(),
    complete: vi.fn(),
  };
}

async function waitForCall(
  mock: MockedObject<Observer<FunctionPayload | undefined>>,
  count = 1
) {
  await vi.waitFor(() => {
    expect(mock.next).toHaveBeenCalledTimes(count);
  });
}

function deferredPromise(): {
  promise: Promise<void>;
  resolve: () => void;
} {
  let resolvePromise: (() => void) | undefined;
  const promise = new Promise<void>((resolve) => {
    resolvePromise = resolve;
  });

  return {
    promise,
    resolve: () => {
      if (resolvePromise == null) {
        throw new Error("Deferred promise resolve was not initialized");
      }
      resolvePromise();
    },
  };
}

async function hasSettled(promise: Promise<unknown>): Promise<boolean> {
  let settled = false;
  promise.then(
    () => {
      settled = true;
    },
    () => {
      settled = true;
    }
  );

  // Let already-settled promises run their queued continuation without waiting
  // on clocks. If the promise is still blocked, this remains false.
  await Promise.resolve();
  return settled;
}

describe("ActionApplication invalidation", () => {
  let client: Client;
  let store: Store;
  let fauxFoundry: FauxFoundry;

  const INITIAL_OFFICE_CAPACITY = 10;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient
    );
    ({ client, fauxFoundry } = testSetup);

    const fauxOntology = fauxFoundry.getDefaultOntology();
    ontologies.addEmployeeOntology(fauxOntology);
    fauxOntology.registerObjectType(stubData.todoWithLinkTypes);
    fauxOntology.registerActionType(
      stubData.editTodo.actionTypeV2,
      (b, payload) => {
        const { id, ...other } = payload.parameters;
        b.modifyObject<typeof Todo>(Todo.apiName, id, { ...other });
      }
    );
    fauxOntology.registerActionType(stubData.MoveOffice, (b, payload) => {
      b.modifyObject<typeof Office>(
        Office.apiName,
        payload.parameters.officeId as string,
        { capacity: payload.parameters.newCapacity as number }
      );
    });
    stubData.registerLazyQueries(fauxOntology);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.clear();
    dataStore.registerObject(Todo, {
      $apiName: "Todo",
      id: 0,
      text: "original",
    });
    dataStore.registerObject(Todo, {
      $apiName: "Todo",
      id: 1,
      text: "second",
    });

    const officeA = dataStore.registerObject(Office, {
      $apiName: "Office",
      officeId: "office-a",
      name: "Alpha Office",
      capacity: INITIAL_OFFICE_CAPACITY,
    });
    const emp1 = dataStore.registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 1,
      fullName: "Alice",
    });
    dataStore.registerLink(emp1, "officeLink", officeA, "occupants");

    store = new Store(client);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("revalidates a function with dependsOn after an action edits that type", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Todo.apiName],
        dedupeInterval: 0,
      },
      subFn
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 })
    );

    subFn.next.mockClear();

    await store.applyAction(editTodo, { id: 0, text: "edited" });

    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
    });

    subscription.unsubscribe();
  });

  it("revalidates a function with dependsOnObjects after an action edits that PK", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOnObjects: [{ $apiName: Todo.apiName, $primaryKey: 0 }],
        dedupeInterval: 0,
      },
      subFn
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 })
    );

    subFn.next.mockClear();

    await store.applyAction(editTodo, { id: 0, text: "edited again" });

    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
    });

    subscription.unsubscribe();
  });

  it("does not revalidate a function whose dependsOn is on an unrelated type", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Employee.apiName],
        dedupeInterval: 0,
      },
      subFn
    );

    await waitForCall(subFn, 2);
    subFn.next.mockClear();

    await store.applyAction(editTodo, { id: 0, text: "should-not-fire" });

    expect(subFn.next).not.toHaveBeenCalled();

    subscription.unsubscribe();
  });

  it("revalidates a function with dependsOn after a batch action edits that type", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Todo.apiName],
        dedupeInterval: 0,
      },
      subFn
    );

    await waitForCall(subFn, 2);
    subFn.next.mockClear();

    await store.applyAction(editTodo, [
      { id: 0, text: "batch-first" },
      { id: 1, text: "batch-second" },
    ]);

    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
    });

    subscription.unsubscribe();
  });

  it("does not wait for broad per-type invalidation before resolving an action", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Todo.apiName],
        dedupeInterval: 0,
      },
      subFn
    );

    await waitForCall(subFn, 2);

    const functionQueryEntry = Array.from(store.queries.map.entries()).find(
      ([cacheKey]) => cacheKey.type === "function"
    );
    if (functionQueryEntry == null) {
      throw new Error("Expected a function query to be registered");
    }

    const [, functionQuery] = functionQueryEntry;
    const delayedInvalidation = deferredPromise();

    // Simulate slow broad invalidation by making the touched query return a
    // promise that this test intentionally does not resolve yet.
    const invalidateObjectType = vi.fn(() => delayedInvalidation.promise);
    functionQuery.invalidateObjectType = invalidateObjectType;

    // Batch apply avoids the dev-only single-action delay, keeping this test
    // focused on whether invalidation blocks action resolution.
    const actionPromise = store.applyAction(editTodo, [
      { id: 0, text: "batch-first" },
      { id: 1, text: "batch-second" },
    ]);

    await vi.waitFor(() => {
      expect(invalidateObjectType).toHaveBeenCalledWith(
        Todo.apiName,
        undefined
      );
    });

    // Broad invalidation has started and is still blocked on
    // delayedInvalidation.promise. If applyAction awaited that fan-out,
    // actionPromise would still be unsettled here.
    await expect(hasSettled(actionPromise)).resolves.toBe(true);

    // Finish the blocked background invalidation so the test leaves no
    // intentionally pending promise behind.
    delayedInvalidation.resolve();
    await delayedInvalidation.promise;
    subscription.unsubscribe();
  });

  it("revalidates a list whose RDP traverses an edited object type", async () => {
    const subFn = mockObserver<ListPayload | undefined>();

    const withProperties: DerivedProperty.Clause<typeof Employee> = {
      officeName: (b) => b.pivotTo("officeLink").selectProperty("name"),
    };
    const subscription = store.lists.observe(
      { type: Employee, withProperties, dedupeInterval: 0 },
      subFn
    );

    // Wait for initial loaded emission.
    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
      const last = subFn.next.mock.lastCall?.[0];
      expect(last?.status).toBe("loaded");
    });
    subFn.next.mockClear();

    // Edit Office (NOT Employee). RDP traverses officeLink → Office; the list
    // must refetch even though no Employee was edited.
    await store.applyAction(moveOffice, {
      officeId: "office-a",
      newCapacity: 99,
      newAddress: "new-address",
    });

    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
    });

    subscription.unsubscribe();
  });

  describe("ObjectSetQuery RDP invalidation", () => {
    it("revalidates an object-set list whose RDP traverses an edited object type", async () => {
      const subFn = mockObserver<ObjectSetPayload | undefined>();

      const withProperties: DerivedProperty.Clause<typeof Employee> = {
        officeCapacity: (b) =>
          b.pivotTo("officeLink").selectProperty("capacity"),
      };
      const subscription = store.objectSets.observe(
        {
          baseObjectSet: client(Employee) as ObjectSet<Employee>,
          withProperties,
          dedupeInterval: 0,
        },
        subFn
      );

      // Wait for initial loaded emission with the original capacity.
      await vi.waitFor(() => {
        const last = subFn.next.mock.lastCall?.[0];
        expect(last?.status).toBe("loaded");
        expect(
          (last?.resolvedList?.[0] as { officeCapacity?: number } | undefined)
            ?.officeCapacity
        ).toBe(INITIAL_OFFICE_CAPACITY);
      });

      // Edit Office (NOT Employee). The RDP traverses officeLink → Office, so
      // the object-set list must refetch and reflect the new capacity.
      await store.applyAction(moveOffice, {
        officeId: "office-a",
        newCapacity: 99,
        newAddress: "new-address",
      });

      await vi.waitFor(() => {
        const last = subFn.next.mock.lastCall?.[0];
        expect(
          (last?.resolvedList?.[0] as { officeCapacity?: number } | undefined)
            ?.officeCapacity
        ).toBe(99);
      });

      subscription.unsubscribe();
    });
  });

  it("does not fan out per-type invalidation when an action throws", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Todo.apiName],
        dedupeInterval: 0,
      },
      subFn
    );

    await waitForCall(subFn, 2);
    subFn.next.mockClear();

    // PK 999 does not exist; FauxDataStoreBatch.modifyObject throws via
    // getObjectOrThrow, the server returns an error, and applyAction rejects.
    await expect(
      store.applyAction(editTodo, { id: 999, text: "fail" })
    ).rejects.toBeDefined();

    // No actionResults were assigned, so #invalidatePerTypeEdits is
    // never reached. The dependsOn sub stays silent — no fan-out occurred.
    expect(subFn.next).not.toHaveBeenCalled();

    subscription.unsubscribe();
  });

  describe("dev-mode action delay", () => {
    const noopOptimistic = () => {};

    it("defaults the resolved delay to 1000ms", () => {
      expect(new Store(client).devModeActionDelayMs).toBe(1000);
    });

    it("resolves a configured delay from options", () => {
      expect(
        new Store(client, { devMode: { actionDelayMs: 0 } })
          .devModeActionDelayMs
      ).toBe(0);
      expect(
        new Store(client, { devMode: { actionDelayMs: 250 } })
          .devModeActionDelayMs
      ).toBe(250);
    });

    it("skips the delay when no optimistic update is provided", async () => {
      const warnSpy = vi.spyOn(store, "maybeWarnDevModeDelayApplied");

      await store.applyAction(editTodo, { id: 0, text: "no-optimistic" });

      expect(warnSpy).not.toHaveBeenCalled();
    });

    it("applies the delay when an optimistic update is provided", async () => {
      const fastStore = new Store(client, { devMode: { actionDelayMs: 20 } });
      const warnSpy = vi.spyOn(fastStore, "maybeWarnDevModeDelayApplied");
      const setTimeoutSpy = vi.spyOn(globalThis, "setTimeout");

      await fastStore.applyAction(
        editTodo,
        { id: 0, text: "optimistic" },
        {
          optimisticUpdate: noopOptimistic,
        }
      );

      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 20);

      setTimeoutSpy.mockRestore();
    });

    it("does not delay when the configured delay is 0", async () => {
      const noDelayStore = new Store(client, {
        devMode: { actionDelayMs: 0 },
      });
      const warnSpy = vi.spyOn(noDelayStore, "maybeWarnDevModeDelayApplied");

      await noDelayStore.applyAction(
        editTodo,
        { id: 0, text: "instant" },
        {
          optimisticUpdate: noopOptimistic,
        }
      );

      expect(warnSpy).not.toHaveBeenCalled();
    });

    it("warns at most once per store", async () => {
      const fastStore = new Store(client, { devMode: { actionDelayMs: 20 } });
      const consoleWarnSpy = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      await fastStore.applyAction(
        editTodo,
        { id: 0, text: "first" },
        {
          optimisticUpdate: noopOptimistic,
        }
      );
      await fastStore.applyAction(
        editTodo,
        { id: 0, text: "second" },
        {
          optimisticUpdate: noopOptimistic,
        }
      );

      const devModeWarnings = consoleWarnSpy.mock.calls.filter(
        ([first]) => typeof first === "string" && first.includes("dev-mode")
      );
      expect(devModeWarnings).toHaveLength(1);

      consoleWarnSpy.mockRestore();
    });
  });
});
