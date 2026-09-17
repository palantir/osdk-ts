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

import type { ObjectOrInterfaceDefinition, ObjectSet } from "@osdk/api";
import {
  Employee,
  FooInterface,
  moveOffice,
  Office,
} from "@osdk/client.test.ontology";
import {
  FauxFoundry,
  msw,
  ontologies,
  startNodeApiServer,
  stubData,
  type TestSetup,
} from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import { hydrateObjectSetFromObjectRids } from "../../../public-utils/hydrateObjectSetFromObjectRids.js";
import { hydrateObjectSetFromObjectRidsNoType } from "../../../public-utils/hydrateObjectSetFromObjectRidsNoType.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import { Store } from "../Store.js";
import { createDefer, mockObserver, waitForPayload } from "../testUtils.js";

const { http, HttpResponse } = msw;
const defer = createDefer();
const employeeRid = "ri.phonograph2-objects.main.object.employee-1";
const otherEmployeeRid = "ri.phonograph2-objects.main.object.employee-2";

describe("observing hydrated RID object sets", () => {
  let client: Client;
  let store: Store;
  let fauxFoundry: FauxFoundry;
  let apiServer: TestSetup<Client>["apiServer"];

  beforeAll(() => {
    const setup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    ({ client, fauxFoundry, apiServer } = setup);
    const ontology = fauxFoundry.getDefaultOntology();
    ontologies.addEmployeeOntology(ontology);
    ontology.registerActionType(stubData.MoveOffice, (batch, payload) => {
      batch.modifyObject<typeof Office>(
        Office.apiName,
        payload.parameters.officeId as string,
        {
          capacity: payload.parameters.newCapacity as number,
        },
      );
    });
    return () => setup.apiServer.close();
  });

  beforeEach(() => {
    apiServer.resetHandlers();
    fauxFoundry.getDefaultDataStore().clear();
    fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $rid: employeeRid,
      employeeId: 1,
      fullName: "Selected Employee",
    });
    store = new Store(client);
  });

  async function observe<T extends ObjectOrInterfaceDefinition>(
    baseObjectSet: ObjectSet<T>,
  ) {
    const observer = mockObserver<ObjectSetPayload>();
    const subscription = store.objectSets.observe(
      { baseObjectSet, dedupeInterval: 0 },
      observer,
    );
    defer(subscription);
    const payload = await waitForPayload(
      observer,
      (value) => value?.status === "loaded",
    );
    expect(observer.error).not.toHaveBeenCalled();
    return { observer, query: subscription.query, payload };
  }

  it.each(["plain", "filtered"] as const)(
    "refreshes a %s RID set after type invalidation",
    async (variant) => {
      let objectSet = hydrateObjectSetFromObjectRids(client, Employee, [
        employeeRid,
      ]);
      if (variant === "filtered") {
        objectSet = objectSet.where({ fullName: "Selected Employee" });
      }
      const { observer, query, payload } = await observe(objectSet);
      expect(payload.resolvedList).toEqual([
        expect.objectContaining({ employeeId: 1 }),
      ]);
      expect(payload.totalCount).toBe("1");
      expect(query.objectTypes).toContain("Employee");

      const revalidate = vi.spyOn(query, "revalidate");
      await store.invalidateObjectType(Office, undefined);
      expect(revalidate).not.toHaveBeenCalled();

      fauxFoundry
        .getDefaultDataStore()
        .unregisterObjectOrThrow(Employee.apiName, 1);
      await store.invalidateObjectType(Employee, undefined);

      await waitForPayload(
        observer,
        (value) => value?.status === "loaded" && value.totalCount === "0",
      );
      expect(observer.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ resolvedList: [], totalCount: "0" }),
      );
      expect(revalidate).toHaveBeenCalled();
      expect(observer.error).not.toHaveBeenCalled();
    },
  );

  it.each([{ rids: [] }, { rids: [employeeRid] }])(
    "keeps RID membership when the cache learns or updates a nonmember ($rids)",
    async ({ rids }) => {
      const { observer, query } = await observe(
        hydrateObjectSetFromObjectRids(client, Employee, rids),
      );
      const revalidate = vi.spyOn(query, "revalidate");
      const dataStore = fauxFoundry.getDefaultDataStore();
      const nonmember = dataStore.registerObject(Employee, {
        $rid: otherEmployeeRid,
        employeeId: 2,
        fullName: "Unselected Employee",
      });
      const nonmemberQuery = store.objects.getQuery({
        apiName: Employee,
        pk: 2,
      });

      for (const fullName of ["Unselected Employee", "Updated Nonmember"]) {
        dataStore.replaceObjectOrThrow({ ...nonmember, fullName });
        observer.next.mockClear();
        revalidate.mockClear();
        await nonmemberQuery.revalidate(true);
        await vi.waitFor(() => expect(revalidate).toHaveBeenCalledOnce());
        await revalidate.mock.results[0].value;
        await waitForPayload(observer, (value) => value?.status === "loaded");

        for (const [payload] of observer.next.mock.calls) {
          expect(payload.resolvedList).toHaveLength(rids.length);
          expect(payload.resolvedList).not.toContainEqual(
            expect.objectContaining({ employeeId: 2 }),
          );
        }
        expect(observer.error).not.toHaveBeenCalled();
      }
    },
  );

  it("refreshes membership and count after an object deletion reaches the cache", async () => {
    const { observer, query } = await observe(
      hydrateObjectSetFromObjectRids(client, Employee, [employeeRid]),
    );
    const revalidate = vi.spyOn(query, "revalidate");
    fauxFoundry
      .getDefaultDataStore()
      .unregisterObjectOrThrow(Employee.apiName, 1);

    store.batch({}, (batch) => {
      store.objects
        .getQuery({ apiName: Employee, pk: 1 })
        .deleteFromStore("loaded", batch);
    });

    await waitForPayload(
      observer,
      (value) => value?.status === "loaded" && value.totalCount === "0",
    );
    expect(observer.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ resolvedList: [] }),
    );
    expect(revalidate).toHaveBeenCalledOnce();
    expect(observer.error).not.toHaveBeenCalled();
  });

  it.each(["typed", "untyped"] as const)(
    "repeats a pending %s RID refresh after a member deletion reaches the cache",
    async (kind) => {
      const objectSet =
        kind === "typed"
          ? hydrateObjectSetFromObjectRids<ObjectOrInterfaceDefinition>(
              client,
              Employee,
              [employeeRid],
            )
          : hydrateObjectSetFromObjectRidsNoType(client, [employeeRid]);
      const { observer, query, payload } = await observe(objectSet);
      expect(payload.resolvedList).toHaveLength(1);
      const originalFetch = objectSet.fetchPage.bind(objectSet);
      const release = Promise.withResolvers<void>();
      let responseReady = false;
      const fetch = vi
        .spyOn(objectSet, "fetchPage")
        .mockImplementationOnce(async (args) => {
          const response = await originalFetch(args);
          responseReady = true;
          await release.promise;
          return response;
        });
      const refresh = query.revalidate(true);
      await vi.waitFor(() => expect(responseReady).toBe(true));
      fauxFoundry
        .getDefaultDataStore()
        .unregisterObjectOrThrow(Employee.apiName, 1);
      store.batch({}, (batch) => {
        store.objects
          .getQuery({ apiName: Employee, pk: 1 })
          .deleteFromStore("loaded", batch);
      });
      release.resolve();
      await refresh;
      expect(fetch).toHaveBeenCalledTimes(2);
      await waitForPayload(
        observer,
        (value) => value?.status === "loaded" && value.totalCount === "0",
      );
      expect(observer.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ resolvedList: [], totalCount: "0" }),
      );
      expect(observer.error).not.toHaveBeenCalled();
    },
  );

  it("invalidates a pivoted RID set on source and target changes", async () => {
    const dataStore = fauxFoundry.getDefaultDataStore();
    const employee = dataStore.getObjectOrThrow(Employee.apiName, 1);
    const office = dataStore.registerObject(Office, {
      officeId: "office-a",
      name: "Office A",
    });
    dataStore.registerLink(employee, "officeLink", office, "occupants");

    const { observer, query, payload } = await observe(
      hydrateObjectSetFromObjectRids(client, Employee, [employeeRid]).pivotTo(
        "officeLink",
      ),
    );
    expect(payload.resolvedList).toEqual([
      expect.objectContaining({ name: "Office A" }),
    ]);
    expect(query.objectTypes).toEqual(new Set(["Employee", "Office"]));

    dataStore.replaceObjectOrThrow({ ...office, name: "Updated Office" });
    await store.invalidateObjectType(Office, undefined);
    await waitForPayload(
      observer,
      (value) =>
        value?.status === "loaded" &&
        value.resolvedList?.[0].name === "Updated Office",
    );

    dataStore.unregisterLink(employee, "officeLink", office, "occupants");
    await store.invalidateObjectType(Employee, undefined);
    await waitForPayload(
      observer,
      (value) => value?.status === "loaded" && value.totalCount === "0",
    );
    expect(observer.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ resolvedList: [] }),
    );
    expect(observer.error).not.toHaveBeenCalled();
  });

  it.each([Employee, FooInterface])(
    "tracks concrete dependencies when narrowing a RID set to $apiName",
    async (definition) => {
      const query = store.objectSets.getQuery({
        baseObjectSet: hydrateObjectSetFromObjectRids(client, Employee, [
          employeeRid,
        ]).narrowToType(definition),
        mode: "offline",
      });
      const revalidate = vi.spyOn(query, "revalidate").mockResolvedValue();

      await query.invalidateObjectType(Employee.apiName, undefined);

      expect(query.objectTypes).toContain(definition.apiName);
      expect(query.objectTypes).toContain("Employee");
      expect(revalidate).toHaveBeenCalledOnce();
    },
  );

  it("invalidates an interface RID set on concrete object changes", async () => {
    const { observer, query, payload } = await observe(
      hydrateObjectSetFromObjectRids(client, FooInterface, [employeeRid]),
    );
    expect(payload.resolvedList).toHaveLength(1);
    expect(query.objectTypes).toContain("Employee");
    expect(query.objectTypes).toContain("Person");

    fauxFoundry
      .getDefaultDataStore()
      .unregisterObjectOrThrow(Employee.apiName, 1);
    await store.invalidateObjectType(Employee, undefined);
    await waitForPayload(
      observer,
      (value) => value?.status === "loaded" && value.totalCount === "0",
    );
    expect(observer.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ resolvedList: [] }),
    );
    expect(observer.error).not.toHaveBeenCalled();
  });

  it("caches mixed untyped results and preserves set composition and narrowing", async () => {
    const officeRid = "ri.phonograph2-objects.main.object.office-a";
    fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $rid: officeRid,
      officeId: "office-a",
      name: "Office A",
    });
    const untyped = hydrateObjectSetFromObjectRidsNoType(client, [officeRid]);
    const mixed = client(Employee).union(untyped);
    const { query, payload } = await observe(mixed);
    expect(query.hasUnknownDependencies).toBe(true);
    expect(
      payload.resolvedList?.map((object) => object.$objectType).sort(),
    ).toEqual(["Employee", "Office"]);

    const narrowed = mixed
      .narrowToType(Employee)
      .where({ fullName: "Selected Employee" });
    let narrowingRequest: unknown;
    apiServer.use(
      http.post(
        "*/objectSets/loadObjectsMultipleObjectTypes",
        async ({ request }) => {
          narrowingRequest = await request.json();
          return HttpResponse.json({
            data: [
              {
                __apiName: "Employee",
                __primaryKey: 1,
                __rid: employeeRid,
                employeeId: 1,
                fullName: "Selected Employee",
              },
            ],
            totalCount: "1",
            propertySecurities: [],
            interfaceToObjectTypeMappings: {},
            interfaceToObjectTypeMappingsV2: {},
          });
        },
        { once: true },
      ),
    );
    const narrowedPage = await narrowed.fetchPage();
    expect(narrowingRequest).toEqual(
      expect.objectContaining({
        objectSet: expect.objectContaining({
          type: "filter",
          objectSet: expect.objectContaining({
            type: "asType",
            entityType: "Employee",
          }),
        }),
      }),
    );
    expect(narrowedPage.data).toEqual([
      expect.objectContaining({ $objectType: "Employee", employeeId: 1 }),
    ]);
    const difference = await mixed.subtract(untyped).fetchPage();
    expect(difference.data).toEqual([
      expect.objectContaining({ $objectType: "Employee", employeeId: 1 }),
    ]);
    const intersection = await mixed.intersect(untyped).fetchPage();
    expect(intersection.data).toEqual([
      expect.objectContaining({ $objectType: "Office", officeId: "office-a" }),
    ]);
  });

  it("refreshes an empty untyped filtered result on explicit unrelated type invalidation", async () => {
    const { query, observer, payload } = await observe(
      hydrateObjectSetFromObjectRidsNoType(client, [employeeRid]).where({
        fullName: "Updated Employee",
      }),
    );
    expect(payload.resolvedList).toEqual([]);
    expect(query.hasUnknownDependencies).toBe(true);
    expect(query.objectTypes.size).toBe(0);
    const employee = fauxFoundry
      .getDefaultDataStore()
      .getObjectOrThrow(Employee.apiName, 1);
    fauxFoundry
      .getDefaultDataStore()
      .replaceObjectOrThrow({ ...employee, fullName: "Updated Employee" });
    await store.invalidateObjectType(Office, undefined);
    await waitForPayload(
      observer,
      (value) => value?.status === "loaded" && value.resolvedList?.length === 1,
    );
    expect(query.hasUnknownDependencies).toBe(true);
  });

  it("shares member updates between typed and untyped observations", async () => {
    const typed = await observe(
      hydrateObjectSetFromObjectRids(client, Employee, [employeeRid]),
    );
    const untyped = await observe(
      hydrateObjectSetFromObjectRidsNoType(client, [employeeRid]),
    );
    expect(store.layers.truth.get(typed.query.cacheKey)?.value?.data[0]).toBe(
      store.layers.truth.get(untyped.query.cacheKey)?.value?.data[0],
    );
    const dataStore = fauxFoundry.getDefaultDataStore();
    const employee = dataStore.getObjectOrThrow(Employee.apiName, 1);
    dataStore.replaceObjectOrThrow({
      ...employee,
      fullName: "Updated Employee",
    });
    await store.objects.getQuery({ apiName: Employee, pk: 1 }).revalidate(true);
    for (const { observer } of [typed, untyped]) {
      const payload = await waitForPayload(
        observer,
        (value) =>
          value?.status === "loaded" &&
          value.resolvedList?.[0].fullName === "Updated Employee",
      );
      expect(payload.resolvedList).toHaveLength(1);
    }
  });

  it("discovers a previously unavailable untyped RID after explicit invalidation", async () => {
    const { query, observer, payload } = await observe(
      hydrateObjectSetFromObjectRidsNoType(client, [otherEmployeeRid]),
    );
    expect(payload.resolvedList).toEqual([]);
    expect(query.objectTypes.size).toBe(0);
    fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $rid: otherEmployeeRid,
      employeeId: 2,
      fullName: "Newly Available Employee",
    });
    await store.invalidateObjectType(Office, undefined);
    const refreshed = await waitForPayload(
      observer,
      (value) => value?.status === "loaded" && value.resolvedList?.length === 1,
    );
    expect(refreshed.resolvedList?.[0]).toEqual(
      expect.objectContaining({ employeeId: 2 }),
    );
    expect(query.hasUnknownDependencies).toBe(true);
  });

  it.each([{ rids: [] }, { rids: [employeeRid] }])(
    "does not refetch or add nonmembers after unrelated cache reads for untyped RIDs ($rids)",
    async ({ rids }) => {
      const { query, observer } = await observe(
        hydrateObjectSetFromObjectRidsNoType(client, rids),
      );
      const revalidate = vi.spyOn(query, "revalidate");
      fauxFoundry.getDefaultDataStore().registerObject(Employee, {
        $rid: otherEmployeeRid,
        employeeId: 2,
        fullName: "Nonmember",
      });
      await store.objects
        .getQuery({ apiName: Employee, pk: 2 })
        .revalidate(true);
      await Promise.resolve();
      expect(revalidate).not.toHaveBeenCalled();
      expect(observer.next.mock.lastCall?.[0].resolvedList).toHaveLength(
        rids.length,
      );
    },
  );

  it("refreshes untyped membership after manual object invalidation and deletion", async () => {
    const { query, observer, payload } = await observe(
      hydrateObjectSetFromObjectRidsNoType(client, [employeeRid]),
    );
    expect(payload.resolvedList).toHaveLength(1);
    fauxFoundry
      .getDefaultDataStore()
      .unregisterObjectOrThrow(Employee.apiName, 1);
    await store.invalidateObjects(payload.resolvedList![0]);
    await waitForPayload(
      observer,
      (value) => value?.status === "loaded" && value.totalCount === "0",
    );
    expect(observer.next.mock.lastCall?.[0].resolvedList).toEqual([]);
    expect(query.hasUnknownDependencies).toBe(true);
  });

  it("invalidates an untyped query before its first fetch", async () => {
    const query = store.objectSets.getQuery({
      baseObjectSet: hydrateObjectSetFromObjectRidsNoType(client, [
        employeeRid,
      ]),
      mode: "offline",
    });
    await query.invalidateObjectType(Office.apiName, undefined);
    expect(store.layers.truth.get(query.cacheKey)?.value?.data).toHaveLength(1);
    expect(query.hasUnknownDependencies).toBe(true);
  });

  it.each([
    { kind: "typed", invalidationKind: "type" },
    { kind: "typed", invalidationKind: "all" },
    { kind: "untyped", invalidationKind: "type" },
    { kind: "untyped", invalidationKind: "all" },
  ] as const)(
    "repeats an in-flight initial $kind fetch after explicit $invalidationKind invalidation",
    async ({ kind, invalidationKind }) => {
      const objectSet =
        kind === "typed"
          ? hydrateObjectSetFromObjectRids<ObjectOrInterfaceDefinition>(
              client,
              Employee,
              [employeeRid],
            )
          : hydrateObjectSetFromObjectRidsNoType(client, [employeeRid]);
      const originalFetch = objectSet.fetchPage.bind(objectSet);
      const release = Promise.withResolvers<void>();
      let firstResponseReady = false;
      const fetch = vi
        .spyOn(objectSet, "fetchPage")
        .mockImplementationOnce(async (args) => {
          const response = await originalFetch(args);
          firstResponseReady = true;
          await release.promise;
          return response;
        });
      const observer = mockObserver<ObjectSetPayload>();
      const subscription = store.objectSets.observe(
        { baseObjectSet: objectSet, dedupeInterval: 0 },
        observer,
      );
      defer(subscription);
      await vi.waitFor(() => expect(firstResponseReady).toBe(true));
      fauxFoundry
        .getDefaultDataStore()
        .unregisterObjectOrThrow(Employee.apiName, 1);
      const invalidation =
        invalidationKind === "all"
          ? store.invalidateAll()
          : subscription.query.invalidateObjectType(
              kind === "typed" ? Employee.apiName : Office.apiName,
              undefined,
            );
      release.resolve();
      await invalidation;
      await waitForPayload(
        observer,
        (value) => value?.status === "loaded" && value.totalCount === "0",
      );
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(observer.error).not.toHaveBeenCalled();
    },
  );

  it("rejects derived properties on untyped object sets", async () => {
    const objectSet = hydrateObjectSetFromObjectRidsNoType(client, [
      employeeRid,
    ]).withProperties({
      derivedName: (base) => base.selectProperty("fullName"),
    });
    await expect(objectSet.fetchPage()).rejects.toThrow(
      "Untyped object sets do not support derived properties",
    );
  });

  it.each([
    { kind: "typed", replacementFails: false },
    { kind: "typed", replacementFails: true },
    { kind: "untyped", replacementFails: false },
    { kind: "untyped", replacementFails: true },
  ] as const)(
    "repeats a $kind replacement fetch when another explicit invalidation arrives (replacement fails: $replacementFails)",
    async ({ kind, replacementFails }) => {
      const objectSet =
        kind === "typed"
          ? hydrateObjectSetFromObjectRids<ObjectOrInterfaceDefinition>(
              client,
              Employee,
              [employeeRid],
            )
          : hydrateObjectSetFromObjectRidsNoType(client, [employeeRid]);
      const originalFetch = objectSet.fetchPage.bind(objectSet);
      const firstRelease = Promise.withResolvers<void>();
      const secondRelease = Promise.withResolvers<void>();
      let ready = 0;
      const fetch = vi.spyOn(objectSet, "fetchPage");
      for (const release of [firstRelease, secondRelease]) {
        fetch.mockImplementationOnce(async (args) => {
          const response = await originalFetch(args);
          ready++;
          await release.promise;
          if (release === secondRelease && replacementFails) {
            throw new Error("Replacement fetch failed");
          }
          return response;
        });
      }
      const observer = mockObserver<ObjectSetPayload>();
      const subscription = store.objectSets.observe(
        { baseObjectSet: objectSet },
        observer,
      );
      defer(subscription);
      await vi.waitFor(() => expect(ready).toBe(1));
      const firstInvalidation = store.invalidateAll();
      firstRelease.resolve();
      await vi.waitFor(() => expect(ready).toBe(2));
      fauxFoundry
        .getDefaultDataStore()
        .unregisterObjectOrThrow(Employee.apiName, 1);
      const secondInvalidation = subscription.query.invalidateObjectType(
        kind === "typed" ? Employee.apiName : Office.apiName,
        undefined,
      );
      secondRelease.resolve();
      await Promise.all([firstInvalidation, secondInvalidation]);
      expect(fetch).toHaveBeenCalledTimes(3);
      expect(store.layers.truth.get(subscription.query.cacheKey)).toEqual(
        expect.objectContaining({
          status: "loaded",
          value: expect.objectContaining({ data: [], totalCount: "0" }),
        }),
      );
      if (replacementFails) {
        expect(observer.error).toHaveBeenCalledWith(
          new Error("Replacement fetch failed"),
        );
      } else {
        await waitForPayload(
          observer,
          (value) => value?.status === "loaded" && value.totalCount === "0",
        );
      }
    },
  );

  it("refreshes an untyped query after an action changes another object type", async () => {
    fauxFoundry.getDefaultDataStore().registerObject(Office, {
      officeId: "office-a",
      name: "Office A",
      capacity: 10,
    });
    const { query } = await observe(
      hydrateObjectSetFromObjectRidsNoType(client, [employeeRid]),
    );
    const revalidate = vi.spyOn(query, "revalidate");
    await store.applyAction(moveOffice, {
      officeId: "office-a",
      newCapacity: 99,
      newAddress: "new-address",
    });
    await vi.waitFor(() => expect(revalidate).toHaveBeenCalled());
    expect(query.hasUnknownDependencies).toBe(true);
  });

  it("keeps typed and untyped query semantics distinct for identical wire definitions", () => {
    const typed = hydrateObjectSetFromObjectRids(client, Employee, [
      employeeRid,
    ]);
    const untyped = client(Employee).intersect(
      hydrateObjectSetFromObjectRidsNoType(client, [employeeRid]),
    );
    expect(getWireObjectSet(typed)).toEqual(getWireObjectSet(untyped));
    const typedQuery = store.objectSets.getQuery({
      baseObjectSet: typed,
      mode: "offline",
    });
    const untypedQuery = store.objectSets.getQuery({
      baseObjectSet: untyped,
      mode: "offline",
    });
    expect(typedQuery.cacheKey).not.toBe(untypedQuery.cacheKey);
    expect(
      typedQuery.cacheKey.otherKeys[1].unknownDependencies,
    ).toBeUndefined();
    expect(untypedQuery.cacheKey.otherKeys[1].unknownDependencies).toBe(true);
    expect(typedQuery.hasUnknownDependencies).toBe(false);
    expect(untypedQuery.hasUnknownDependencies).toBe(true);
  });
});
