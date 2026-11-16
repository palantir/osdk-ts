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

import type { ObjectSet } from "@osdk/api";
import { Employee, Office } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vitest } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import {
  createObservableClient,
  type ObservableClient,
  type ObserveObjectsCallbackArgs,
  type ObserveObjectSetArgs,
} from "../../ObservableClient.js";
import { createChangedObjects } from "../Changes.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";
import { createOptimisticId } from "../OptimisticId.js";
import { Store } from "../Store.js";
import { createDefer, mockObserver, waitForPayload } from "../testUtils.js";

describe("ObjectSetQuery cache reconciliation", () => {
  let client: Client;
  let store: Store;
  let fauxFoundry: FauxFoundry;
  const defer = createDefer();

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testSetup.client;
    fauxFoundry = testSetup.fauxFoundry;

    const fauxOntology = testSetup.fauxFoundry.getDefaultOntology();
    ontologies.addEmployeeOntology(fauxOntology);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    store = new Store(client);
  });

  function getRdpQuery() {
    return store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<typeof Employee>,
      withProperties: {
        derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
      },
      mode: "offline",
    });
  }

  function createEmployee(): ObjectHolder {
    return {
      $apiName: Employee.apiName,
      $objectType: Employee.apiName,
      $primaryKey: 1,
    } as unknown as ObjectHolder;
  }

  function createChanges(employee: ObjectHolder, isNew: boolean = true) {
    const sourceQuery = store.objects.getQuery({
      apiName: Employee,
      pk: employee.$primaryKey,
    });
    const changes = createChangedObjects();
    changes.registerObject(sourceQuery.cacheKey, employee, isNew);
    return changes;
  }

  function setupEmployees() {
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.clear();
    const alice = dataStore.registerObject(Employee, {
      employeeId: 1,
      fullName: "Alice",
    });
    const bob = dataStore.registerObject(Employee, {
      employeeId: 2,
      fullName: "Bob",
    });
    const charlie = dataStore.registerObject(Employee, {
      employeeId: 3,
      fullName: "Charlie",
    });
    return { dataStore, alice, bob, charlie };
  }

  async function loadAllEmployees(observableClient: ObservableClient) {
    const sibling = mockObserver<ObserveObjectsCallbackArgs<typeof Employee>>();
    defer(
      observableClient.observeList({ type: Employee, mode: "force" }, sibling),
    );
    await waitForPayload(sibling, (p) => p.status === "loaded");
  }

  it("keeps an intersection limited to linked employees when another query fills the cache", async () => {
    const { dataStore, alice, bob, charlie } = setupEmployees();
    const office = dataStore.registerObject(Office, { officeId: "shared" });
    dataStore.registerLink(alice, "officeLink", office, "occupants");
    dataStore.registerLink(bob, "officeLink", office, "occupants");
    const observableClient = createObservableClient(client);
    const observer = mockObserver<ObserveObjectSetArgs<typeof Employee>>();
    defer(
      observableClient.observeObjectSet(
        client(Employee),
        {
          where: { employeeId: { $gt: 0 } },
          intersect: [
            client(Employee)
              .where({ employeeId: 1 })
              .pivotTo("officeLink")
              .pivotTo("occupants"),
          ],
        },
        observer,
      ),
    );
    const initial = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(new Set(initial.resolvedList?.map((o) => o.$primaryKey))).toEqual(
      new Set([1, 2]),
    );

    observer.next.mockClear();
    await loadAllEmployees(observableClient);
    const afterCacheLoad = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(
      new Set(afterCacheLoad.resolvedList?.map((o) => o.$primaryKey)),
    ).toEqual(new Set([1, 2]));

    observer.next.mockClear();
    dataStore.registerLink(charlie, "officeLink", office, "occupants");
    await loadAllEmployees(observableClient);
    const afterLinkChange = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(
      new Set(afterLinkChange.resolvedList?.map((o) => o.$primaryKey)),
    ).toEqual(new Set([1, 2, 3]));
    expect(observer.error).not.toHaveBeenCalled();
  });

  it("keeps subtracted employees excluded when another query fills the cache", async () => {
    const { dataStore, alice, bob } = setupEmployees();
    const office = dataStore.registerObject(Office, { officeId: "shared" });
    dataStore.registerLink(alice, "officeLink", office, "occupants");
    dataStore.registerLink(bob, "officeLink", office, "occupants");
    const observableClient = createObservableClient(client);
    const observer = mockObserver<ObserveObjectSetArgs<typeof Employee>>();
    defer(
      observableClient.observeObjectSet(
        client(Employee),
        {
          where: { employeeId: { $gt: 0 } },
          subtract: [
            client(Employee)
              .where({ employeeId: 1 })
              .pivotTo("officeLink")
              .pivotTo("occupants"),
          ],
        },
        observer,
      ),
    );
    const initial = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(new Set(initial.resolvedList?.map((o) => o.$primaryKey))).toEqual(
      new Set([3]),
    );

    observer.next.mockClear();
    await loadAllEmployees(observableClient);
    const afterCacheLoad = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(
      new Set(afterCacheLoad.resolvedList?.map((o) => o.$primaryKey)),
    ).toEqual(new Set([3]));

    observer.next.mockClear();
    dataStore.unregisterLink(bob, "officeLink", office, "occupants");
    await loadAllEmployees(observableClient);
    const afterLinkChange = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(
      new Set(afterLinkChange.resolvedList?.map((o) => o.$primaryKey)),
    ).toEqual(new Set([2, 3]));
    expect(observer.error).not.toHaveBeenCalled();
  });

  it("keeps union-only employees when another query updates their properties", async () => {
    const { dataStore, bob } = setupEmployees();
    const observableClient = createObservableClient(client);
    const observer = mockObserver<ObserveObjectSetArgs<typeof Employee>>();
    defer(
      observableClient.observeObjectSet(
        client(Employee),
        {
          where: { employeeId: 1 },
          union: [client(Employee).where({ employeeId: 2 })],
        },
        observer,
      ),
    );
    const initial = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(new Set(initial.resolvedList?.map((o) => o.$primaryKey))).toEqual(
      new Set([1, 2]),
    );

    observer.next.mockClear();
    dataStore.replaceObjectOrThrow({ ...bob, fullName: "Robert" });
    await loadAllEmployees(observableClient);
    const updated = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(new Set(updated.resolvedList?.map((o) => o.$primaryKey))).toEqual(
      new Set([1, 2]),
    );
    expect(updated.resolvedList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ $primaryKey: 2, fullName: "Robert" }),
      ]),
    );
    expect(observer.error).not.toHaveBeenCalled();
  });

  it.each([
    ["adds", true],
    ["modifies", false],
  ])(
    "keeps an RDP query loading when a sibling %s an unavailable cache variant",
    (_change, isNew) => {
      const query = getRdpQuery();
      const employee = createEmployee();
      store.batch({}, (batch) =>
        query.writeToStore({ data: [] }, "loading", batch),
      );
      const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

      expect(
        store.cacheKeys.peek<ObjectCacheKey>(
          "object",
          Employee.apiName,
          employee.$primaryKey,
          query.rdpConfig,
        ),
      ).toBeUndefined();

      query.maybeUpdateAndRevalidate(createChanges(employee, isNew), undefined);

      expect(revalidate).toHaveBeenCalledWith(true);
      expect(
        store.cacheKeys.peek<ObjectCacheKey>(
          "object",
          Employee.apiName,
          employee.$primaryKey,
          query.rdpConfig,
        ),
      ).toBeUndefined();
      expect(store.getValue(query.cacheKey)).toMatchObject({
        status: "loading",
        value: { data: [] },
      });
    },
  );

  it("locally adds an object when the exact RDP cache variant is available", () => {
    const query = getRdpQuery();
    const employee = createEmployee();
    const targetObjectQuery = store.objects.getQuery(
      { apiName: Employee, pk: employee.$primaryKey },
      query.rdpConfig,
    );
    store.batch({}, (batch) => {
      batch.write(targetObjectQuery.cacheKey, employee, "loaded");
      batch.write(query.cacheKey, { data: [] }, "loaded");
    });
    const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

    query.maybeUpdateAndRevalidate(createChanges(employee), undefined);

    expect(revalidate).not.toHaveBeenCalled();
    expect(store.getValue(query.cacheKey)).toMatchObject({
      status: "loaded",
      value: { data: [targetObjectQuery.cacheKey] },
    });
  });

  it("keeps an RDP query loading while its own fetch is pending", () => {
    const query = getRdpQuery();
    const employee = createEmployee();
    const targetObjectQuery = store.objects.getQuery(
      { apiName: Employee, pk: employee.$primaryKey },
      query.rdpConfig,
    );
    store.batch({}, (batch) => {
      batch.write(targetObjectQuery.cacheKey, employee, "loaded");
      batch.write(query.cacheKey, { data: [] }, "loading");
    });
    query.pendingFetch = Promise.resolve();
    const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

    query.maybeUpdateAndRevalidate(createChanges(employee), undefined);

    expect(revalidate).not.toHaveBeenCalled();
    expect(store.getValue(query.cacheKey)).toMatchObject({
      status: "loading",
      value: { data: [targetObjectQuery.cacheKey] },
    });
    query.pendingFetch = undefined;
  });

  it("does not restore loading after a pending fetch has written its result", () => {
    const query = getRdpQuery();
    const employee = createEmployee();
    const targetObjectQuery = store.objects.getQuery(
      { apiName: Employee, pk: employee.$primaryKey },
      query.rdpConfig,
    );
    store.batch({}, (batch) => {
      batch.write(targetObjectQuery.cacheKey, employee, "loaded");
      batch.write(query.cacheKey, { data: [] }, "loaded");
    });
    query.pendingFetch = Promise.resolve();
    const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

    query.maybeUpdateAndRevalidate(createChanges(employee), undefined);

    expect(revalidate).not.toHaveBeenCalled();
    expect(store.getValue(query.cacheKey)).toMatchObject({
      status: "loaded",
      value: { data: [targetObjectQuery.cacheKey] },
    });
    query.pendingFetch = undefined;
  });

  it("does not revalidate a missing RDP cache variant during an optimistic update", () => {
    const query = getRdpQuery();
    store.batch({}, (batch) =>
      query.writeToStore({ data: [] }, "loaded", batch),
    );
    const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

    query.maybeUpdateAndRevalidate(
      createChanges(createEmployee()),
      createOptimisticId(),
    );

    expect(revalidate).not.toHaveBeenCalled();
    expect(store.getValue(query.cacheKey)).toMatchObject({
      status: "loading",
      value: { data: [] },
    });
  });
});

describe("ObjectSetQuery websocket out of date", () => {
  let client: Client;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testSetup.client;
    ontologies.addEmployeeOntology(testSetup.fauxFoundry.getDefaultOntology());

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    store = new Store(client);
  });

  it("forces a revalidate when the subscription goes out of date", () => {
    const query = store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<typeof Employee>,
      mode: "offline",
    });
    const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

    (query as unknown as { onOswOutOfDate(): void }).onOswOutOfDate();

    expect(revalidate).toHaveBeenCalledWith(true);
  });
});
