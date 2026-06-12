/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { LinkHopDescriptor, ObjectRef } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import invariant from "tiny-invariant";
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
import type { Client } from "../../Client.js";
import { createClient } from "../../createClient.js";
import type { Unsubscribable } from "../ObservableClient.js";
import type { ObserveLinkClosure } from "../ObservableClient/ObserveLinkClosure.js";
import { ObservableClientImpl } from "./ObservableClientImpl.js";
import { Store } from "./Store.js";

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

const EMP_A = 100;
const EMP_B = 101;
const EMP_C = 102;

function setupOntology(fauxFoundry: FauxFoundry) {
  ontologies.addEmployeeOntology(fauxFoundry.getDefaultOntology());
}

// A linear peeps chain: empA -> empB -> empC. `peeps` is FK-backed (each child
// has a single `lead`), so a node has exactly one parent.
function setupPeepsChain(fauxFoundry: FauxFoundry) {
  const dataStore = fauxFoundry.getDefaultDataStore();
  const empA = dataStore.registerObject(Employee, { employeeId: EMP_A });
  const empB = dataStore.registerObject(Employee, { employeeId: EMP_B });
  const empC = dataStore.registerObject(Employee, { employeeId: EMP_C });
  dataStore.registerLink(empA, "peeps", empB, "lead");
  dataStore.registerLink(empB, "peeps", empC, "lead");
}

const peepsHop: LinkHopDescriptor = {
  sourceTypeApiName: "Employee",
  linkApiName: "peeps",
  targetTypeApiName: "Employee",
  multiplicity: true,
  sourceIsInterface: false,
};

function rootRef(employeeId: number): ObjectRef {
  return { $objectType: "Employee", $primaryKey: employeeId };
}

function closureObserver() {
  return {
    next: vi.fn<(args: ObserveLinkClosure.CallbackArgs<Employee>) => void>(),
    error: vi.fn(),
    complete: vi.fn(),
  };
}

async function observeClosureUntilLoaded(
  client: ObservableClientImpl,
  root: number,
): Promise<
  { sub: Unsubscribable; observer: ReturnType<typeof closureObserver> }
> {
  const observer = closureObserver();
  const sub = client.observeLinkClosure<Employee>(
    {
      root: rootRef(root),
      hop: peepsHop,
      maxDepth: "unbounded",
      maxNodes: 100,
    },
    observer,
  );
  await vi.waitFor(
    () => {
      expect(observer.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", isExpanding: false }),
      );
    },
    { timeout: 5000, interval: 0 },
  );
  return { sub, observer };
}

function discoveredPks(observer: ReturnType<typeof closureObserver>): number[] {
  const last = observer.next.mock.lastCall?.[0];
  invariant(last);
  return last.data.map((d) => d.$primaryKey).sort((a, b) => a - b);
}

describe("ObservableClientImpl", () => {
  describe("observeLinkClosure closure gc", () => {
    let client: Client;
    let store: Store;
    let observable: ObservableClientImpl;

    beforeAll(async () => {
      const testSetup = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/"),
        createClient,
      );
      ({ client } = testSetup);
      setupOntology(testSetup.fauxFoundry);
      setupPeepsChain(testSetup.fauxFoundry);
      return () => {
        testSetup.apiServer.close();
      };
    });

    beforeEach(() => {
      // Fake timers must be active before the Store is constructed so the
      // CacheKeys gc interval is faked and can be advanced below.
      vi.useFakeTimers();
      store = new Store(client);
      observable = new ObservableClientImpl(store);
    });

    afterEach(() => {
      vi.useRealTimers();
      store = undefined as unknown as Store;
      observable = undefined as unknown as ObservableClientImpl;
    });

    it("retains discovered intermediates while observed, releases after last unsubscribe", async () => {
      const { sub, observer } = await observeClosureUntilLoaded(
        observable,
        EMP_A,
      );

      expect(discoveredPks(observer)).toEqual([EMP_B, EMP_C]);

      const keyB = store.cacheKeys.peek("object", "Employee", EMP_B);
      const keyC = store.cacheKeys.peek("object", "Employee", EMP_C);
      invariant(keyB);
      invariant(keyC);
      expect(store.getValue(keyB)?.value).toBeDefined();
      expect(store.getValue(keyC)?.value).toBeDefined();

      sub.unsubscribe();
      vi.advanceTimersByTime(61_000);

      expect(store.cacheKeys.peek("object", "Employee", EMP_B)).toBeUndefined();
      expect(store.cacheKeys.peek("object", "Employee", EMP_C)).toBeUndefined();
    });

    it("keeps a shared node alive while a second closure still observes it", async () => {
      const a = await observeClosureUntilLoaded(observable, EMP_A);
      expect(discoveredPks(a.observer)).toEqual([EMP_B, EMP_C]);

      const b = await observeClosureUntilLoaded(observable, EMP_B);
      expect(discoveredPks(b.observer)).toEqual([EMP_C]);

      // Closure A holds empB + empC; closure B holds empC. Dropping A must not
      // evict empC because B still observes it.
      a.sub.unsubscribe();
      vi.advanceTimersByTime(61_000);

      expect(store.cacheKeys.peek("object", "Employee", EMP_B)).toBeUndefined();
      const sharedKey = store.cacheKeys.peek("object", "Employee", EMP_C);
      invariant(sharedKey);
      expect(store.getValue(sharedKey)?.value).toBeDefined();

      // Once the last observer goes away the shared node is released too.
      b.sub.unsubscribe();
      vi.advanceTimersByTime(61_000);
      expect(store.cacheKeys.peek("object", "Employee", EMP_C)).toBeUndefined();
    });
  });
});
