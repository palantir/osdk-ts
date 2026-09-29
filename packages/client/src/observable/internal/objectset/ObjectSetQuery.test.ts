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
import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
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
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testSetup.client;

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

  function getOntologyDefinedDerivedPropertiesQuery() {
    return store.objectSets.getQuery({
      baseObjectSet: client(Employee) as ObjectSet<typeof Employee>,
      mode: "offline",
      $UNSTABLE_loadOntologyDefinedDerivedProperties: true,
    });
  }

  it.each([
    ["adds", true],
    ["modifies", false],
  ])(
    "revalidates rather than inserting a sibling cache variant when it %s an object",
    (_change, isNew) => {
      const query = getOntologyDefinedDerivedPropertiesQuery();
      const employee = createEmployee();
      const siblingObjectQuery = store.objects.getQuery({
        apiName: Employee,
        pk: employee.$primaryKey,
      });
      store.batch({}, (batch) => {
        batch.write(siblingObjectQuery.cacheKey, employee, "loaded");
        query.writeToStore({ data: [] }, "loaded", batch);
      });
      const changes = createChanges(employee, isNew);
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
      const query = getOntologyDefinedDerivedPropertiesQuery();
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
      const query = getOntologyDefinedDerivedPropertiesQuery();
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
