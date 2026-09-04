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
import { createOptimisticId } from "../OptimisticId.js";
import { Store } from "../Store.js";

describe("ObjectSetQuery cache reconciliation", () => {
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

  it.each([
    ["adds", true],
    ["modifies", false],
  ])(
    "keeps an RDP query loading when a sibling %s an unavailable cache variant",
    (_change, isNew) => {
      const query = getRdpQuery();
      store.batch({}, (batch) =>
        query.writeToStore({ data: [] }, "loading", batch),
      );
      const revalidate = vitest.spyOn(query, "revalidate").mockResolvedValue();

      query.maybeUpdateAndRevalidate(
        createChanges(createEmployee(), isNew),
        undefined,
      );

      expect(revalidate).toHaveBeenCalledWith(true);
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
