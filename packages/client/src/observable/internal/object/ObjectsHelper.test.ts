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
import type { ObjectCacheKey } from "./ObjectCacheKey.js";

function createFakeRdpConfig(...fields: string[]): Canonical<Rdp> {
  const rdp: Rdp = {};
  for (const field of fields) {
    rdp[field] = () => ({}) as any;
  }
  return rdp as Canonical<Rdp>;
}

describe("ObjectsHelper.propagateWrite RDP merge", () => {
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

  it("skips merge when incoming object already has all expected RDP fields", () => {
    // Use "fullName" as RDP field — it exists on the Employee object,
    // so actualRdpFields.size === expectedRdpFields.size and merge is skipped.
    const rdpConfig = createFakeRdpConfig("fullName");

    // Create key B (with RDP for "fullName") and seed it
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfig);
    store.batch({}, (batch) => {
      queryB.writeToStore(emp as any, "loaded", batch);
    });

    // Write an updated object directly to key B — since the Employee
    // object already has "fullName", all expected RDP fields are present
    // and the merge short-circuit should fire.
    const updated = emp.$clone({ fullName: "Bob" });
    store.batch({}, (batch) => {
      queryB.writeToStore(updated as any, "loaded", batch);
    });

    // Key B should have the updated value (merge was skipped)
    const valueB = store.getValue(queryB.cacheKey);
    expect(valueB?.value).toEqual(
      expect.objectContaining({
        $primaryKey: 1,
        fullName: "Bob",
      }),
    );
  });

  it("does not merge on first write to an RDP key (no existing value)", () => {
    const rdpConfig = createFakeRdpConfig("derivedAddress");

    // Create key B (with RDP for "derivedAddress") — no prior write
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfig);

    // First write — there is no existing value so the merge guard
    // (existing?.value) is false and the value is written as-is.
    store.batch({}, (batch) => {
      queryB.writeToStore(emp as any, "loaded", batch);
    });

    const valueB = store.getValue(queryB.cacheKey);
    expect(valueB?.value).toEqual(
      expect.objectContaining({
        $primaryKey: 1,
        fullName: "Alice",
      }),
    );
  });

  it("does not merge for a non-RDP cache key", () => {
    // Create a plain (no RDP) key and write twice — the merge block
    // should be skipped because expectedRdpFields is empty.
    const query = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, undefined);

    store.batch({}, (batch) => {
      query.writeToStore(emp as any, "loaded", batch);
    });

    const updated = emp.$clone({ fullName: "Dave" });
    store.batch({}, (batch) => {
      query.writeToStore(updated as any, "loaded", batch);
    });

    const value = store.getValue(query.cacheKey);
    expect(value?.value).toEqual(
      expect.objectContaining({
        $primaryKey: 1,
        fullName: "Dave",
      }),
    );
  });

  it("merges when incoming object is missing expected RDP fields", () => {
    // Use "derivedAddress" as RDP field — it does NOT exist on the Employee
    // object, so actualRdpFields.size < expectedRdpFields.size and merge runs
    // to preserve the cached RDP value.
    const rdpConfig = createFakeRdpConfig("derivedAddress");

    // Create key B (with RDP for "derivedAddress") and seed it
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfig);
    store.batch({}, (batch) => {
      queryB.writeToStore(emp as any, "loaded", batch);
    });

    // Write an updated object directly to key B — since "derivedAddress"
    // is NOT on the Employee object, actualRdpFields < expectedRdpFields
    // and merge runs to preserve cached RDP values.
    const updated = emp.$clone({ fullName: "Charlie" });
    store.batch({}, (batch) => {
      queryB.writeToStore(updated as any, "loaded", batch);
    });

    // Key B should have the updated base fields via merge
    const valueB = store.getValue(queryB.cacheKey);
    expect(valueB?.value).toEqual(
      expect.objectContaining({
        $primaryKey: 1,
        fullName: "Charlie",
      }),
    );
  });
});

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

describe("Two variants with different RDP configs - GC of one should not affect other", () => {
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

  // Mirrors Store.#cleanupCacheKey (see Store.ts ~line 201)
  function simulateGc(key: ObjectCacheKey) {
    store.subjects.delete(key);
    store.queries.delete(key);
    store.objectCacheKeyRegistry.unregister(key);
  }

  it("GC of variant B preserves A's data and cleans up B's registry entry", () => {
    const rdpConfigA = createFakeRdpConfig("fieldA");
    const rdpConfigAB = createFakeRdpConfig("fieldA", "fieldB");

    const queryA = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfigA);
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfigAB);

    store.batch({}, (batch) => {
      queryA.writeToStore(emp as any, "loaded", batch);
    });
    store.batch({}, (batch) => {
      queryB.writeToStore(emp as any, "loaded", batch);
    });

    expect(store.objectCacheKeyRegistry.getVariantCount(
      "Employee",
      1,
    )).toBe(2);

    simulateGc(queryB.cacheKey);

    // A's data should be intact
    const valueA = store.getValue(queryA.cacheKey);
    expect(valueA?.value).toEqual(
      expect.objectContaining({ $primaryKey: 1, fullName: "Alice" }),
    );
    expect(valueA?.status).toBe("loaded");

    // A's subject should still be alive
    const subjectA = store.subjects.peek(queryA.cacheKey);
    expect(subjectA).toBeDefined();
    expect(subjectA?.closed).toBe(false);

    // B's subject should be gone
    expect(store.subjects.peek(queryB.cacheKey)).toBeUndefined();

    // Registry should only have A
    expect(store.objectCacheKeyRegistry.getVariantCount(
      "Employee",
      1,
    )).toBe(1);
    const variants = store.objectCacheKeyRegistry.getVariants("Employee", 1);
    expect(variants.has(queryA.cacheKey)).toBe(true);
    expect(variants.has(queryB.cacheKey)).toBe(false);
  });

  it("propagateWrite still works for A after B is GC'd", () => {
    const rdpConfigA = createFakeRdpConfig("fieldA");
    const rdpConfigAB = createFakeRdpConfig("fieldA", "fieldB");

    const queryA = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfigA);
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    }, rdpConfigAB);

    store.batch({}, (batch) => {
      queryA.writeToStore(emp as any, "loaded", batch);
    });
    store.batch({}, (batch) => {
      queryB.writeToStore(emp as any, "loaded", batch);
    });

    // Subscribe A so it's observed
    store.cacheKeys.retain(queryA.cacheKey);
    store.subjects.get(queryA.cacheKey).subscribe(() => {});

    simulateGc(queryB.cacheKey);

    expect(store.objectCacheKeyRegistry.getVariantCount(
      "Employee",
      1,
    )).toBe(1);

    // Update via base variant — should still propagate to A
    updateObject(store, emp.$clone({ fullName: "Bob" }));

    const valueA = store.getValue(queryA.cacheKey);
    expect(valueA?.value).toEqual(
      expect.objectContaining({ $primaryKey: 1, fullName: "Bob" }),
    );

    store.cacheKeys.release(queryA.cacheKey);
  });
});

describe("ObjectsHelper.getQuery select + loadPropertySecurity in cache key", () => {
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

  it("returns distinct queries for different selects on the same pk", () => {
    const q1 = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      select: ["fullName"],
    });
    const q2 = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      select: ["employeeId"],
    });

    expect(q1).not.toBe(q2);
    expect(q1.cacheKey).not.toBe(q2.cacheKey);
  });

  it("returns the same query for canonicalized-equal selects on the same pk", () => {
    const q1 = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      select: ["fullName", "employeeId"],
    });
    const q2 = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      select: ["employeeId", "fullName"],
    });

    expect(q1).toBe(q2);
    expect(q1.cacheKey).toBe(q2.cacheKey);
  });

  it("returns distinct queries for different $loadPropertySecurityMetadata on the same pk", () => {
    const q1 = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    });
    const q2 = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      $loadPropertySecurityMetadata: true,
    });

    expect(q1).not.toBe(q2);
    expect(q1.cacheKey).not.toBe(q2.cacheKey);
  });

  it("treats no-select and empty-select as the same cache key", () => {
    const qNone = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
    });
    const qEmpty = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      select: [],
    });

    expect(qNone).toBe(qEmpty);
  });

  it("propagateWrite preserves sibling-variant fields when a partial-select fetch propagates", () => {
    const queryA = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      select: ["fullName"],
    });
    const queryB = store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      select: ["employeeId"],
    });

    // Make both variants observed so propagation runs.
    store.cacheKeys.retain(queryA.cacheKey);
    store.cacheKeys.retain(queryB.cacheKey);
    store.subjects.get(queryA.cacheKey).subscribe(() => {});
    store.subjects.get(queryB.cacheKey).subscribe(() => {});

    // Seed variant A with the loaded "fullName" view.
    store.batch({}, (batch) => {
      queryA.writeToStore(emp as any, "loaded", batch, new Set(["fullName"]));
    });

    // A separate fetch on variant B (employeeId only) writes through
    // ObjectQuery.writeToStore which calls propagateWrite with selectFields.
    // After propagation, A's cache entry must retain its existing fullName
    // rather than being clobbered by B's partial data.
    store.batch({}, (batch) => {
      queryB.writeToStore(
        emp as any,
        "loaded",
        batch,
        new Set(["employeeId"]),
      );
    });

    const valueA = store.getValue(queryA.cacheKey);
    expect(valueA?.value).toEqual(
      expect.objectContaining({
        $primaryKey: 1,
        fullName: "Alice",
        employeeId: 1,
      }),
    );

    store.cacheKeys.release(queryA.cacheKey);
    store.cacheKeys.release(queryB.cacheKey);
  });
});
