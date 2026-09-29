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

import type { DerivedProperty, ObjectSet } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { Subscription } from "rxjs";
import { beforeAll, beforeEach, describe, expect, it, vitest } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { createChangedObjects } from "../Changes.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";
import { createOptimisticId } from "../OptimisticId.js";
import { Store } from "../Store.js";

describe("ObjectSetQuery cache reconciliation", () => {
  type TestEmployee = ObjectHolder & { $primaryKey: number };

  let client: Client;
  let fauxFoundry: FauxFoundry;
  let store: Store;

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
    const withProperties: DerivedProperty.Clause<typeof Employee> = {
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };
    return store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<typeof Employee>,
      withProperties,
      mode: "offline",
    });
  }

  function createEmployee(): TestEmployee {
    return {
      $apiName: Employee.apiName,
      $objectType: Employee.apiName,
      $primaryKey: 1,
    } as TestEmployee;
  }

  function createChanges(
    employee: TestEmployee,
    isNew: boolean = true,
    sourceCacheKey?: ObjectCacheKey,
  ) {
    sourceCacheKey ??= store.objects.getQuery({
      apiName: Employee,
      pk: employee.$primaryKey,
    }).cacheKey;
    const changes = createChangedObjects();
    changes.registerObject(sourceCacheKey, employee, isNew);
    changes.writtenObjectCacheKeys.add(sourceCacheKey);
    return changes;
  }

  function setServerEmployee(fullName: string): void {
    const dataStore = fauxFoundry.getDefaultDataStore();
    if (dataStore.getObject(Employee.apiName, 1)) {
      dataStore.unregisterObjectOrThrow(Employee.apiName, 1);
    }
    dataStore.registerObject(Employee, {
      $apiName: Employee.apiName,
      employeeId: 1,
      fullName,
    });
  }

  function getQueryForOntologyDefinedDerivedPropertiesSetting(
    setting: boolean | undefined,
    baseObjectSet: ObjectSet<typeof Employee> = client(Employee) as ObjectSet<
      typeof Employee
    >,
  ) {
    return store.objectSets.getQuery({
      baseObjectSet,
      mode: "offline",
      ...(setting === undefined
        ? {}
        : { $UNSTABLE_loadOntologyDefinedDerivedProperties: setting }),
    });
  }

  function getCachedFullName(
    query: ReturnType<
      typeof getQueryForOntologyDefinedDerivedPropertiesSetting
    >,
  ): string | undefined {
    const objectKey = store.getValue(query.cacheKey)?.value?.data[0];
    if (!objectKey) {
      return undefined;
    }
    const value = store.getValue(objectKey)?.value;
    return value && typeof value === "object"
      ? (value as TestEmployee & { fullName?: string }).fullName
      : undefined;
  }

  function getObjectCacheKeyForOntologyDefinedDerivedPropertiesSetting(
    setting: boolean | undefined,
  ): ObjectCacheKey {
    return store.objects.getQuery({
      apiName: Employee,
      pk: 1,
      ...(setting === undefined
        ? {}
        : { $UNSTABLE_loadOntologyDefinedDerivedProperties: setting }),
    }).cacheKey;
  }

  function getObjectCacheFullName(
    objectCacheKey: ObjectCacheKey,
  ): string | undefined {
    const value = store.getValue(objectCacheKey)?.value;
    return value && typeof value === "object"
      ? (value as TestEmployee & { fullName?: string }).fullName
      : undefined;
  }

  it.each([
    ["omitted", undefined],
    ["false", false],
    ["true", true],
  ] as const)(
    "stores and refetches the %s setting without overwriting sibling variants",
    async (label, setting) => {
      const settings = [undefined, false, true] as const;
      const objectCacheKeys = new Map(
        settings.map((variant) => [
          variant,
          getObjectCacheKeyForOntologyDefinedDerivedPropertiesSetting(variant),
        ]),
      );
      const baseObjectSet = client(Employee) as ObjectSet<typeof Employee>;
      const fetchPage = vitest.spyOn(baseObjectSet, "fetchPage");
      const query = getQueryForOntologyDefinedDerivedPropertiesSetting(
        setting,
        baseObjectSet,
      );

      setServerEmployee(`Fetched ${label}`);
      const employee = await client(Employee).fetchOne(1);
      store.batch({}, (batch) => {
        for (const variant of settings) {
          batch.write(
            objectCacheKeys.get(variant)!,
            employee.$clone({
              fullName: `Seed ${String(variant)}`,
            }) as unknown as ObjectHolder,
            "loaded",
          );
        }
      });

      await query.revalidate(true);

      const firstRequest = fetchPage.mock.calls.at(-1)?.[0];
      expect(firstRequest).toBeDefined();
      if (setting === undefined) {
        expect(firstRequest).not.toHaveProperty(
          "$UNSTABLE_loadOntologyDefinedDerivedProperties",
        );
      } else {
        expect(firstRequest).toHaveProperty(
          "$UNSTABLE_loadOntologyDefinedDerivedProperties",
          setting,
        );
      }

      const sourceCacheKey = objectCacheKeys.get(setting)!;
      expect(store.getValue(query.cacheKey)?.value?.data).toEqual([
        sourceCacheKey,
      ]);
      for (const variant of settings) {
        expect(getObjectCacheFullName(objectCacheKeys.get(variant)!)).toBe(
          variant === setting ? `Fetched ${label}` : `Seed ${String(variant)}`,
        );
      }

      setServerEmployee(`Re-fetched ${label}`);
      await query.revalidate(true);

      const refetchRequest = fetchPage.mock.calls.at(-1)?.[0];
      if (setting === undefined) {
        expect(refetchRequest).not.toHaveProperty(
          "$UNSTABLE_loadOntologyDefinedDerivedProperties",
        );
      } else {
        expect(refetchRequest).toHaveProperty(
          "$UNSTABLE_loadOntologyDefinedDerivedProperties",
          setting,
        );
      }

      for (const variant of settings) {
        expect(getObjectCacheFullName(objectCacheKeys.get(variant)!)).toBe(
          variant === setting
            ? `Re-Fetched ${label}`
            : `Seed ${String(variant)}`,
        );
      }
    },
  );

  it.each([
    ["false", false],
    ["true", true],
  ] as const)(
    "isolates streamed updates between omitted and %s settings",
    async (explicitLabel, explicitSetting) => {
      setServerEmployee("Initial");
      const baseObjectSet = client(Employee) as ObjectSet<typeof Employee>;
      const serverDefaultQuery =
        getQueryForOntologyDefinedDerivedPropertiesSetting(
          undefined,
          baseObjectSet,
        );
      const explicitQuery = getQueryForOntologyDefinedDerivedPropertiesSetting(
        explicitSetting,
        baseObjectSet,
      );

      await serverDefaultQuery.revalidate(true);
      await explicitQuery.revalidate(true);
      vitest.spyOn(serverDefaultQuery, "revalidate").mockResolvedValue();
      vitest.spyOn(explicitQuery, "revalidate").mockResolvedValue();

      const subscribe = vitest
        .spyOn(baseObjectSet, "subscribe")
        .mockReturnValue({ unsubscribe() {} });
      const serverDefaultSubscription = new Subscription();
      const explicitSubscription = new Subscription();
      serverDefaultQuery.registerStreamUpdates(serverDefaultSubscription);
      explicitQuery.registerStreamUpdates(explicitSubscription);

      expect(subscribe).toHaveBeenCalledTimes(2);
      const serverDefaultListener = subscribe.mock.calls[0]?.[0];
      const explicitListener = subscribe.mock.calls[1]?.[0];
      if (!serverDefaultListener?.onChange || !explicitListener?.onChange) {
        throw new Error("expected stream listeners to define onChange");
      }

      const initialEmployee = await client(Employee).fetchOne(1);
      serverDefaultListener.onChange({
        object: initialEmployee.$clone({ fullName: "Streamed omitted" }),
        state: "ADDED_OR_UPDATED",
      });

      expect(getCachedFullName(serverDefaultQuery)).toBe("Streamed omitted");
      expect(getCachedFullName(explicitQuery)).toBe("Initial");

      explicitListener.onChange({
        object: initialEmployee.$clone({
          fullName: `Streamed ${explicitLabel}`,
        }),
        state: "ADDED_OR_UPDATED",
      });

      expect(getCachedFullName(serverDefaultQuery)).toBe("Streamed omitted");
      expect(getCachedFullName(explicitQuery)).toBe(
        `Streamed ${explicitLabel}`,
      );

      serverDefaultSubscription.unsubscribe();
      explicitSubscription.unsubscribe();
    },
  );

  const settingCases = [
    ["omitted", undefined],
    ["false", false],
    ["true", true],
  ] as const;
  const crossSettingChangeCases: Array<
    [string, string, string, boolean | undefined, boolean | undefined, boolean]
  > = [];
  for (const [sourceLabel, sourceSetting] of settingCases) {
    for (const [targetLabel, targetSetting] of settingCases) {
      if (targetSetting === sourceSetting) {
        continue;
      }
      crossSettingChangeCases.push(
        [sourceLabel, targetLabel, "adds", sourceSetting, targetSetting, true],
        [
          sourceLabel,
          targetLabel,
          "modifies",
          sourceSetting,
          targetSetting,
          false,
        ],
      );
    }
  }

  it.each(crossSettingChangeCases)(
    "revalidates a %s-to-%s sibling change when it %s an object",
    (
      _sourceLabel,
      _targetLabel,
      _change,
      sourceSetting,
      targetSetting,
      isNew,
    ) => {
      const query =
        getQueryForOntologyDefinedDerivedPropertiesSetting(targetSetting);
      const employee = createEmployee();
      const siblingObjectCacheKey =
        getObjectCacheKeyForOntologyDefinedDerivedPropertiesSetting(
          sourceSetting,
        );
      store.batch({}, (batch) => {
        batch.write(siblingObjectCacheKey, employee, "loaded");
        query.writeToStore({ data: [] }, "loaded", batch);
      });
      const changes = createChanges(employee, isNew, siblingObjectCacheKey);
      const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

      query.maybeUpdateAndRevalidate(changes, undefined);

      expect(revalidate).toHaveBeenCalledWith(true);
      expect(store.getValue(query.cacheKey)).toMatchObject({
        status: "loading",
        value: { data: [] },
      });
    },
  );

  it.each([
    ["addition", true],
    ["modification", false],
  ])(
    "preserves rows and revalidates when the exact variant was only cached before the current %s",
    (_change, isNew) => {
      const query = getQueryForOntologyDefinedDerivedPropertiesSetting(true);
      const employee = createEmployee();
      const targetObjectQuery = store.objects.getQuery({
        apiName: Employee,
        pk: employee.$primaryKey,
        $UNSTABLE_loadOntologyDefinedDerivedProperties: true,
      });
      const initialKeys = isNew ? [] : [targetObjectQuery.cacheKey];
      store.batch({}, (batch) => {
        batch.write(targetObjectQuery.cacheKey, employee, "loaded");
        query.writeToStore({ data: initialKeys }, "loaded", batch);
      });
      const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

      query.maybeUpdateAndRevalidate(createChanges(employee, isNew), undefined);

      expect(revalidate).toHaveBeenCalledWith(true);
      expect(store.getValue(query.cacheKey)).toMatchObject({
        status: "loading",
        value: { data: initialKeys },
      });
    },
  );

  it.each([
    ["addition", true],
    ["modification", false],
  ])(
    "locally reconciles an exact variant written by the current %s",
    (_change, isNew) => {
      const query = getQueryForOntologyDefinedDerivedPropertiesSetting(true);
      const employee = createEmployee();
      const targetObjectQuery = store.objects.getQuery({
        apiName: Employee,
        pk: employee.$primaryKey,
        $UNSTABLE_loadOntologyDefinedDerivedProperties: true,
      });
      store.batch({}, (batch) => {
        batch.write(targetObjectQuery.cacheKey, employee, "loaded");
        query.writeToStore({ data: [] }, "loaded", batch);
      });
      const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

      query.maybeUpdateAndRevalidate(
        createChanges(employee, isNew, targetObjectQuery.cacheKey),
        undefined,
      );

      expect(revalidate).not.toHaveBeenCalled();
      expect(store.getValue(query.cacheKey)).toMatchObject({
        status: "loaded",
        value: { data: [targetObjectQuery.cacheKey] },
      });
    },
  );

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

    query.maybeUpdateAndRevalidate(
      createChanges(employee, true, targetObjectQuery.cacheKey),
      undefined,
    );

    expect(revalidate).not.toHaveBeenCalled();
    expect(store.getValue(query.cacheKey)).toMatchObject({
      status: "loaded",
      value: { data: [targetObjectQuery.cacheKey] },
    });
  });

  it("keeps a flagged query loading while its own fetch is pending", () => {
    const query = getQueryForOntologyDefinedDerivedPropertiesSetting(true);
    const employee = createEmployee();
    const targetObjectQuery = store.objects.getQuery({
      apiName: Employee,
      pk: employee.$primaryKey,
      $UNSTABLE_loadOntologyDefinedDerivedProperties: true,
    });
    store.batch({}, (batch) => {
      batch.write(targetObjectQuery.cacheKey, employee, "loaded");
      batch.write(query.cacheKey, { data: [] }, "loading");
    });
    query.pendingFetch = Promise.resolve();
    const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

    query.maybeUpdateAndRevalidate(
      createChanges(employee, true, targetObjectQuery.cacheKey),
      undefined,
    );

    expect(revalidate).not.toHaveBeenCalled();
    expect(store.getValue(query.cacheKey)).toMatchObject({
      status: "loading",
      value: { data: [targetObjectQuery.cacheKey] },
    });
    query.pendingFetch = undefined;
  });

  it("does not restore loading after a pending fetch has written its result", () => {
    const query = getQueryForOntologyDefinedDerivedPropertiesSetting(true);
    const employee = createEmployee();
    const targetObjectQuery = store.objects.getQuery({
      apiName: Employee,
      pk: employee.$primaryKey,
      $UNSTABLE_loadOntologyDefinedDerivedProperties: true,
    });
    store.batch({}, (batch) => {
      batch.write(targetObjectQuery.cacheKey, employee, "loaded");
      batch.write(query.cacheKey, { data: [] }, "loaded");
    });
    query.pendingFetch = Promise.resolve();
    const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

    query.maybeUpdateAndRevalidate(
      createChanges(employee, true, targetObjectQuery.cacheKey),
      undefined,
    );

    expect(revalidate).not.toHaveBeenCalled();
    expect(store.getValue(query.cacheKey)).toMatchObject({
      status: "loaded",
      value: { data: [targetObjectQuery.cacheKey] },
    });
    query.pendingFetch = undefined;
  });

  it("keeps old rows loading without revalidating when an optimistic update skips the flagged variant", () => {
    const query = getQueryForOntologyDefinedDerivedPropertiesSetting(true);
    const employee = createEmployee();
    const targetObjectQuery = store.objects.getQuery({
      apiName: Employee,
      pk: employee.$primaryKey,
      $UNSTABLE_loadOntologyDefinedDerivedProperties: true,
    });
    store.batch({}, (batch) => {
      targetObjectQuery.writeToStore(employee, "loaded", batch);
      query.writeToStore(
        { data: [targetObjectQuery.cacheKey] },
        "loaded",
        batch,
      );
    });
    const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

    query.maybeUpdateAndRevalidate(
      createChanges(employee, false),
      createOptimisticId(),
    );

    expect(revalidate).not.toHaveBeenCalled();
    expect(store.getValue(query.cacheKey)).toMatchObject({
      status: "loading",
      value: { data: [targetObjectQuery.cacheKey] },
    });
  });

  it("propagates an omitted-setting deletion to a true query", async () => {
    const query = getQueryForOntologyDefinedDerivedPropertiesSetting(true);
    const employee = createEmployee();
    const serverDefaultObjectQuery = store.objects.getQuery({
      apiName: Employee,
      pk: employee.$primaryKey,
    });
    const explicitlyEnabledObjectQuery = store.objects.getQuery({
      apiName: Employee,
      pk: employee.$primaryKey,
      $UNSTABLE_loadOntologyDefinedDerivedProperties: true,
    });
    const enabledObjectSubscription = store.subjects
      .get(explicitlyEnabledObjectQuery.cacheKey)
      .subscribe(() => {});

    store.batch({}, (batch) => {
      serverDefaultObjectQuery.writeToStore(employee, "loaded", batch);
      explicitlyEnabledObjectQuery.writeToStore(employee, "loaded", batch);
      query.writeToStore(
        { data: [explicitlyEnabledObjectQuery.cacheKey] },
        "loaded",
        batch,
      );
    });

    store.batch({}, (batch) => {
      serverDefaultObjectQuery.deleteFromStore("loaded", batch);
    });

    await vitest.waitFor(() => {
      expect(store.getValue(query.cacheKey)).toMatchObject({
        status: "loaded",
        value: { data: [] },
      });
    });
    expect(
      store.getValue(explicitlyEnabledObjectQuery.cacheKey)?.value,
    ).toBeUndefined();

    enabledObjectSubscription.unsubscribe();
  });
});
