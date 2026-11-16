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
import { beforeAll, beforeEach, describe, expect, it } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { createChangedObjects } from "../Changes.js";
import { createOptimisticId } from "../OptimisticId.js";
import { Store } from "../Store.js";

describe.each(["ListQuery", "ObjectSetQuery"])(
  "%s additions with filters that cannot be evaluated locally",
  (queryType) => {
    let client: Client;
    let store: Store;

    beforeAll(() => {
      const {
        client: testClient,
        apiServer,
        fauxFoundry,
      } = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/"),
        createClient,
      );
      client = testClient;
      ontologies.addEmployeeOntology(fauxFoundry.getDefaultOntology());
      fauxFoundry.getDefaultDataStore().registerObject(Employee, {
        $apiName: "Employee",
        employeeId: 1,
        fullName: "Alice",
      });
      return () => apiServer.close();
    });

    beforeEach(() => {
      store = new Store(client);
    });

    it("fetches the matching object and changes the status to loaded", async () => {
      const { query, changes, objectQuery } = prepareAddition();

      await query.maybeUpdateAndRevalidate(changes, undefined);

      expect(store.getValue(query.cacheKey)).toMatchObject({
        status: "loaded",
        value: { data: [objectQuery.cacheKey] },
      });
    });

    it("keeps the status loading without fetching during an optimistic update", () => {
      const { query, changes } = prepareAddition();

      const refresh = query.maybeUpdateAndRevalidate(
        changes,
        createOptimisticId(),
      );

      expect(refresh).toBeUndefined();
      expect(query.pendingFetch).toBeUndefined();
      expect(store.getValue(query.cacheKey)).toMatchObject({
        status: "loading",
        value: { data: [] },
      });
    });

    function prepareAddition() {
      const where = { fullName: { $containsAllTerms: "Alice" } };
      const query =
        queryType === "ListQuery"
          ? store.lists.getQuery({ type: Employee, where, mode: "offline" })
          : store.objectSets.getQuery({
              baseObjectSet: client(Employee) as ObjectSet<typeof Employee>,
              where,
              mode: "offline",
            });
      const employee = {
        $apiName: Employee.apiName,
        $objectType: Employee.apiName,
        $primaryKey: 1,
        fullName: "Alice",
      } as unknown as ObjectHolder;
      const objectQuery = store.objects.getQuery({ apiName: Employee, pk: 1 });
      store.batch({}, (batch) => {
        batch.write(objectQuery.cacheKey, employee, "loaded");
        query.writeToStore({ data: [] }, "loaded", batch);
      });
      const changes = createChangedObjects();
      changes.registerObject(objectQuery.cacheKey, employee, true);
      return { query, changes, objectQuery };
    }
  },
);
