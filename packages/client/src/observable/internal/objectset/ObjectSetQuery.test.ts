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
import {
  Employee,
  FooInterface,
  moveOffice,
  Office,
} from "@osdk/client.test.ontology";
import {
  FauxFoundry,
  ontologies,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vitest } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import {
  createObservableClient,
  type ObservableClient,
  type ObserveObjectsCallbackArgs,
  type ObserveObjectSetArgs,
} from "../../ObservableClient.js";
import { runOptimisticJob } from "../actions/OptimisticJob.js";
import { ObservableClientImpl } from "../ObservableClientImpl.js";
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
    fauxOntology.registerActionType(stubData.MoveOffice, (batch, payload) => {
      batch.modifyObject<typeof Office>(
        Office.apiName,
        payload.parameters.officeId as string,
        { capacity: payload.parameters.newCapacity as number },
      );
    });

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    fauxFoundry.getDefaultDataStore().clear();
    store = new Store(client);
  });

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
    const office = dataStore.registerObject(Office, {
      officeId: "shared",
      capacity: 20,
    });
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
              .where({ capacity: { $gt: 10 } })
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
    await observableClient.applyAction(moveOffice, {
      officeId: "shared",
      newCapacity: 5,
    });
    const afterIntermediateEdit = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(afterIntermediateEdit.resolvedList).toEqual([]);

    observer.next.mockClear();
    dataStore.replaceObjectOrThrow(office);
    await observableClient.invalidateObjectOrInterfaceType(Office);
    const afterIntermediateInvalidation = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(
      new Set(
        afterIntermediateInvalidation.resolvedList?.map((o) => o.$primaryKey),
      ),
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

  it("refreshes a filtered base after actions and explicit invalidation without admitting nonmembers", async () => {
    const { dataStore } = setupEmployees();
    const shared = dataStore.registerObject(Office, {
      officeId: "shared",
      capacity: 20,
    });
    dataStore.registerObject(Office, { officeId: "other", capacity: 1 });
    const observableClient = createObservableClient(client);
    const observer = mockObserver<ObserveObjectSetArgs<typeof Office>>();
    defer(
      observableClient.observeObjectSet(
        client(Office).where({ capacity: { $gt: 10 } }),
        {},
        observer,
      ),
    );
    const initial = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(initial.resolvedList?.map((o) => o.$primaryKey)).toEqual(["shared"]);

    observer.next.mockClear();
    await observableClient.applyAction(moveOffice, {
      officeId: "other",
      newCapacity: 5,
    });
    const afterExcludedEdit = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(afterExcludedEdit.resolvedList?.map((o) => o.$primaryKey)).toEqual([
      "shared",
    ]);

    observer.next.mockClear();
    await observableClient.applyAction(moveOffice, {
      officeId: "other",
      newCapacity: 30,
    });
    const afterMatchingEdit = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(
      new Set(afterMatchingEdit.resolvedList?.map((o) => o.$primaryKey)),
    ).toEqual(new Set(["shared", "other"]));

    observer.next.mockClear();
    dataStore.replaceObjectOrThrow({ ...shared, capacity: 5 });
    await observableClient.invalidateObjectOrInterfaceType(Office);
    const afterInvalidation = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(afterInvalidation.resolvedList?.map((o) => o.$primaryKey)).toEqual([
      "other",
    ]);
    expect(observer.error).not.toHaveBeenCalled();
  });

  it("refreshes a pivoted base when its source or result objects change without admitting unrelated objects", async () => {
    const { dataStore, alice, bob } = setupEmployees();
    const shared = dataStore.registerObject(Office, {
      officeId: "shared",
      capacity: 5,
    });
    const other = dataStore.registerObject(Office, {
      officeId: "other",
      capacity: 20,
    });
    dataStore.registerLink(alice, "officeLink", shared, "occupants");
    dataStore.registerLink(bob, "officeLink", other, "occupants");
    const linkedAlice = dataStore.getObjectOrThrow(Employee.apiName, 1);
    const observableClient = createObservableClient(client);
    const observer = mockObserver<ObserveObjectSetArgs<typeof Office>>();
    defer(
      observableClient.observeObjectSet(
        client(Employee).where({ fullName: "Alice" }).pivotTo("officeLink"),
        { where: { capacity: { $gt: 10 } } },
        observer,
      ),
    );
    const initial = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(initial.resolvedList).toEqual([]);

    observer.next.mockClear();
    await observableClient.applyAction(moveOffice, {
      officeId: "shared",
      newCapacity: 30,
    });
    const afterAction = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(afterAction.resolvedList?.map((o) => o.$primaryKey)).toEqual([
      "shared",
    ]);

    observer.next.mockClear();
    const sibling = mockObserver<ObserveObjectsCallbackArgs<typeof Office>>();
    defer(
      observableClient.observeList({ type: Office, mode: "force" }, sibling),
    );
    await waitForPayload(sibling, (p) => p.status === "loaded");
    const afterCacheLoad = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(afterCacheLoad.resolvedList?.map((o) => o.$primaryKey)).toEqual([
      "shared",
    ]);

    observer.next.mockClear();
    dataStore.replaceObjectOrThrow({ ...linkedAlice, fullName: "Alison" });
    await loadAllEmployees(observableClient);
    const afterSourceEdit = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(afterSourceEdit.resolvedList).toEqual([]);

    observer.next.mockClear();
    dataStore.replaceObjectOrThrow(linkedAlice);
    await observableClient.invalidateObjectOrInterfaceType(Employee);
    const afterSourceInvalidation = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(
      afterSourceInvalidation.resolvedList?.map((o) => o.$primaryKey),
    ).toEqual(["shared"]);

    observer.next.mockClear();
    dataStore.replaceObjectOrThrow({ ...shared, capacity: 5 });
    await observableClient.invalidateObjectOrInterfaceType(Office);
    const afterResultInvalidation = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(afterResultInvalidation.resolvedList).toEqual([]);
    expect(observer.error).not.toHaveBeenCalled();
  });
  it("refreshes interface results for cache changes and interface or concrete invalidations", async () => {
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.registerObject(Employee, {
      employeeId: 1,
      fullName: "Alice",
    });
    const linkedAlice = dataStore.getObjectOrThrow(Employee.apiName, 1);
    const observableClient = createObservableClient(client);
    const interfaces =
      mockObserver<ObserveObjectSetArgs<typeof FooInterface>>();
    const source = client(FooInterface).where({ fooSpt: "Alice" });
    defer(observableClient.observeObjectSet(source, {}, interfaces));
    expect(
      (
        await waitForPayload(interfaces, (p) => p.status === "loaded")
      ).resolvedList?.map((o) => o.$primaryKey),
    ).toEqual([1]);

    interfaces.next.mockClear();
    dataStore.replaceObjectOrThrow({ ...linkedAlice, fullName: "Alison" });
    await observableClient.invalidateObjectOrInterfaceType(Office);
    expect(interfaces.next.mock.calls).toEqual([]);
    const sibling = mockObserver<ObserveObjectsCallbackArgs<typeof Employee>>();
    defer(
      observableClient.observeList({ type: Employee, mode: "force" }, sibling),
    );
    await waitForPayload(sibling, (p) => p.status === "loaded");
    expect(
      (await waitForPayload(interfaces, (p) => p.status === "loaded"))
        .resolvedList,
    ).toEqual([]);

    interfaces.next.mockClear();
    dataStore.replaceObjectOrThrow(linkedAlice);
    await observableClient.invalidateObjectOrInterfaceType(FooInterface);
    expect(
      (
        await waitForPayload(interfaces, (p) => p.status === "loaded")
      ).resolvedList?.map((o) => o.$primaryKey),
    ).toEqual([1]);

    interfaces.next.mockClear();
    dataStore.replaceObjectOrThrow({ ...linkedAlice, fullName: "Alison" });
    await observableClient.invalidateObjectOrInterfaceType(Employee);
    expect(
      (await waitForPayload(interfaces, (p) => p.status === "loaded"))
        .resolvedList,
    ).toEqual([]);
    expect(interfaces.error).not.toHaveBeenCalled();
  });

  it("refreshes nested and option RDPs without mixing their object caches", async () => {
    const dataStore = fauxFoundry.getDefaultDataStore();
    const alice = dataStore.registerObject(Employee, {
      employeeId: 1,
      fullName: "Alice",
    });
    const office = dataStore.registerObject(Office, {
      officeId: "shared",
      name: "London",
    });
    dataStore.registerLink(alice, "officeLink", office, "occupants");
    const observableClient = createObservableClient(client);
    const nestedSet = client(Employee)
      .withProperties({
        officeName: (base) => base.pivotTo("officeLink").selectProperty("name"),
      })
      .where({ employeeId: 1 });
    const nested =
      mockObserver<
        ObserveObjectSetArgs<typeof Employee, { officeName: "string" }>
      >();
    const options =
      mockObserver<
        ObserveObjectSetArgs<typeof Employee, { officeName: "string" }>
      >();
    defer(observableClient.observeObjectSet(nestedSet, {}, nested));
    defer(
      observableClient.observeObjectSet(
        client(Employee),
        {
          where: { employeeId: 1 },
          withProperties: {
            officeName: (base) =>
              base.pivotTo("officeLink").selectProperty("name"),
          },
        },
        options,
      ),
    );
    expect(
      (await waitForPayload(nested, (p) => p.status === "loaded")).resolvedList,
    ).toMatchObject([{ employeeId: 1, officeName: "London" }]);
    expect(
      (await waitForPayload(options, (p) => p.status === "loaded"))
        .resolvedList,
    ).toMatchObject([{ employeeId: 1, officeName: "London" }]);

    nested.next.mockClear();
    options.next.mockClear();
    dataStore.replaceObjectOrThrow({ ...office, name: "Paris" });
    const sibling = mockObserver<ObserveObjectsCallbackArgs<typeof Office>>();
    defer(
      observableClient.observeList({ type: Office, mode: "force" }, sibling),
    );
    await waitForPayload(sibling, (p) => p.status === "loaded");
    expect(
      (await waitForPayload(nested, (p) => p.status === "loaded")).resolvedList,
    ).toMatchObject([{ employeeId: 1, officeName: "Paris" }]);
    expect(
      (await waitForPayload(options, (p) => p.status === "loaded"))
        .resolvedList,
    ).toMatchObject([{ employeeId: 1, officeName: "Paris" }]);

    nested.next.mockClear();
    options.next.mockClear();
    const plain = mockObserver<ObserveObjectsCallbackArgs<typeof Employee>>();
    defer(
      observableClient.observeList({ type: Employee, mode: "force" }, plain),
    );
    const plainResult = await waitForPayload(
      plain,
      (p) => p.status === "loaded",
    );
    expect(plainResult.resolvedList?.[0]).not.toHaveProperty("officeName");
    expect(
      (await waitForPayload(nested, (p) => p.status === "loaded")).resolvedList,
    ).toMatchObject([{ employeeId: 1, officeName: "Paris" }]);
    expect(
      (await waitForPayload(options, (p) => p.status === "loaded"))
        .resolvedList,
    ).toMatchObject([{ employeeId: 1, officeName: "Paris" }]);
    expect(nested.error).not.toHaveBeenCalled();
    expect(options.error).not.toHaveBeenCalled();
  });

  it("preserves server order during optimistic deletion and rollback", async () => {
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.registerObject(Employee, { employeeId: 1, fullName: "Alice" });
    dataStore.registerObject(Employee, { employeeId: 2, fullName: "Bob" });
    dataStore.registerObject(Employee, { employeeId: 3, fullName: "Charlie" });
    const observer = mockObserver<ObserveObjectSetArgs<typeof Employee>>();
    defer(
      new ObservableClientImpl(store).observeObjectSet(
        client(Employee).where({ employeeId: { $gt: 0 } }),
        { orderBy: { fullName: "desc" }, select: ["employeeId"] },
        observer,
      ),
    );
    const initial = await waitForPayload(
      observer,
      (p) => p.status === "loaded",
    );
    expect(initial.resolvedList?.map((o) => o.$primaryKey)).toEqual([3, 2, 1]);
    observer.next.mockClear();
    const rollback = runOptimisticJob(store, (ctx) =>
      ctx.deleteObject(initial.resolvedList![1]),
    );
    try {
      const optimistic = await waitForPayload(observer, (p) => p.isOptimistic);
      expect(optimistic.resolvedList?.map((o) => o.$primaryKey)).toEqual([
        3, 1,
      ]);
    } finally {
      observer.next.mockClear();
      await rollback();
    }
    const restored = await waitForPayload(observer, (p) => !p.isOptimistic);
    expect(restored.resolvedList?.map((o) => o.$primaryKey)).toEqual([3, 2, 1]);
    expect(observer.error).not.toHaveBeenCalled();
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
