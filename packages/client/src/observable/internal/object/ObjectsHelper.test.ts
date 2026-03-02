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

import type { Osdk } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { Canonical } from "../Canonical.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import { Store } from "../Store.js";
import {
  mockSingleSubCallback,
  updateObject,
  waitForCall,
} from "../testUtils.js";

function createFakeRdpConfig(...fields: string[]): Canonical<Rdp> {
  const rdp: Rdp = {};
  for (const field of fields) {
    rdp[field] = () => ({}) as any;
  }
  return rdp as Canonical<Rdp>;
}

describe("ObjectsHelper.isKeyActive", () => {
  let client: Client;
  let store: Store;
  let emp: Osdk.Instance<Employee>;

  beforeAll(async () => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testSetup.client;

    const fauxOntology = testSetup.fauxFoundry.getDefaultOntology();
    ontologies.addEmployeeOntology(fauxOntology);

    testSetup.fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      employeeId: 1,
      fullName: "Alice",
    });

    emp = await client(Employee).fetchOne(1, { $includeRid: true });

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    store = new Store(client);
    return () => {
      store = undefined!;
    };
  });

  it("propagateWrite propagates to a variant key with pending cleanup", () => {
    const rdpConfig = createFakeRdpConfig("derivedAddress");

    // Seed key A (no RDP)
    updateObject(store, emp);

    // Create key B (with RDP) and seed it
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfig);
    store.batch({}, (batch) => {
      queryB.writeToStore(
        emp as any,
        "loaded",
        batch,
      );
    });

    // Subscribe then unsubscribe to make key B unobserved
    const subjectB = store.subjects.get(queryB.cacheKey);
    const subB = subjectB.subscribe(() => {});
    subB.unsubscribe();

    // Simulate pending cleanup (React unmount-remount cycle)
    store.pendingCleanup.set(queryB.cacheKey, 1);

    // Write through key A — should propagate to B due to pending cleanup
    const updated = emp.$clone({ fullName: "Bob" });
    updateObject(store, updated);

    // Key B should have the propagated write
    const valueB = store.getValue(queryB.cacheKey);
    expect(valueB).toBeDefined();
    expect(valueB?.value).toEqual(
      expect.objectContaining({
        $primaryKey: 1,
        fullName: "Bob",
      }),
    );
  });

  it("propagateWrite skips variant key that is neither observed nor pending cleanup", () => {
    const rdpConfig = createFakeRdpConfig("derivedAddress");

    // Seed key A (no RDP)
    updateObject(store, emp);

    // Create key B (with RDP) and seed it
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfig);
    store.batch({}, (batch) => {
      queryB.writeToStore(
        emp as any,
        "loaded",
        batch,
      );
    });

    // Subscribe then unsubscribe, no pending cleanup (cleanup already ran)
    const subjectB = store.subjects.get(queryB.cacheKey);
    const subB = subjectB.subscribe(() => {});
    subB.unsubscribe();

    // Write through key A
    const updated = emp.$clone({ fullName: "Charlie" });
    updateObject(store, updated);

    // Key B should NOT propagate (no subscribers, no pending cleanup)
    const valueB = store.getValue(queryB.cacheKey);
    expect(valueB?.value).toEqual(
      expect.objectContaining({
        fullName: "Alice", // still the original seeded value
      }),
    );
  });

  it("pending cleanup protects propagation then stops after cleanup runs", () => {
    const rdpConfig = createFakeRdpConfig("derivedPhone");

    // Seed both keys
    updateObject(store, emp);
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfig);
    store.batch({}, (batch) => {
      queryB.writeToStore(emp as any, "loaded", batch);
    });

    // Subscribe, unsubscribe, mark pending cleanup
    const subjectB = store.subjects.get(queryB.cacheKey);
    const subB = subjectB.subscribe(() => {});
    subB.unsubscribe();
    store.pendingCleanup.set(queryB.cacheKey, 1);

    // Should propagate while pending cleanup is active
    updateObject(store, emp.$clone({ fullName: "Bob" }));
    expect(store.getValue(queryB.cacheKey)?.value).toEqual(
      expect.objectContaining({ fullName: "Bob" }),
    );

    // Simulate cleanup microtask completing
    store.pendingCleanup.delete(queryB.cacheKey);

    // Should NOT propagate after cleanup ran
    updateObject(store, emp.$clone({ fullName: "Charlie" }));
    expect(store.getValue(queryB.cacheKey)?.value).toEqual(
      expect.objectContaining({ fullName: "Bob" }),
    );
  });

  it("re-subscribing before microtask flush receives latest data", async () => {
    const rdpConfig = createFakeRdpConfig("derivedAddress");

    // Seed both keys
    updateObject(store, emp);
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfig);
    store.batch({}, (batch) => {
      queryB.writeToStore(emp as any, "loaded", batch);
    });

    // Subscribe, unsubscribe (unmount), mark pending cleanup
    const subjectB = store.subjects.get(queryB.cacheKey);
    const sub1 = subjectB.subscribe(() => {});
    sub1.unsubscribe();
    store.pendingCleanup.set(queryB.cacheKey, 1);

    // Write new data while pending cleanup is active
    updateObject(store, emp.$clone({ fullName: "Updated" }));

    // Re-subscribe (remount) — should see updated data
    const subFn = mockSingleSubCallback();
    store.cacheKeys.retain(queryB.cacheKey);
    const sub2 = subjectB.subscribe(
      (value) => subFn.next(value as any),
    );

    await waitForCall(subFn);
    expect(subFn.next).toHaveBeenCalledWith(
      expect.objectContaining({
        value: expect.objectContaining({
          fullName: "Updated",
        }),
      }),
    );

    sub2.unsubscribe();
  });
});
