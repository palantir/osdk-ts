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

import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";

import type { Client } from "../../../Client.js";
import { additionalContext } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { ObservableClientImpl } from "../ObservableClientImpl.js";
import { Store } from "../Store.js";

describe("AggregationQuery", () => {
  let client: Client;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    client = testSetup.client;
    ontologies.addEmployeeOntology(testSetup.fauxFoundry.getDefaultOntology());
    testSetup.fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      employeeId: 1,
      fullName: "Alice",
    });

    return () => testSetup.apiServer.close();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("reports invalidation dependency failures and recovers on retry", async () => {
    const metadata = vi
      .spyOn(client[additionalContext].ontologyProvider, "getObjectDefinition")
      .mockRejectedValue(new Error("Temporary metadata failure"));
    const store = new Store(client);
    const observableClient = new ObservableClientImpl(store);
    const query = store.aggregations.getQuery({
      type: Employee,
      objectSet: client(Employee).where({ fullName: "Alice" }),
      aggregate: { $select: { $count: "unordered" } },
    });
    store.batch({}, (batch) => query.writeToStore(undefined, "init", batch));
    const next = vi.fn();
    const error = vi.fn();
    const subscription = query.subscribe({ next, error, complete: () => {} });

    try {
      await expect(
        observableClient.invalidateObjectType(Employee),
      ).resolves.toBeUndefined();

      expect(store.getValue(query.cacheKey)).toMatchObject({
        status: "error",
        value: undefined,
      });
      expect(next).toHaveBeenLastCalledWith(
        expect.objectContaining({
          status: "error",
          result: undefined,
          error: expect.any(Error),
        }),
      );

      metadata.mockRestore();
      await observableClient.invalidateObjectType(Employee);

      expect(next).toHaveBeenLastCalledWith(
        expect.objectContaining({
          status: "loaded",
          result: { $count: 1 },
          error: undefined,
        }),
      );
      expect(error).not.toHaveBeenCalled();
    } finally {
      subscription.unsubscribe();
      query.dispose();
    }
  });
});
