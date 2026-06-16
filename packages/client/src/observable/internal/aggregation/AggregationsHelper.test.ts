/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { Employee, Office } from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { TestLogger } from "../../../logger/TestLogger.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import { Store } from "../Store.js";
import { WIRE_OBJECT_SET_IDX } from "./AggregationCacheKey.js";

const logger = new TestLogger({}, { level: "debug" });

function setupOntology(fauxFoundry: FauxFoundry) {
  const fauxOntology = fauxFoundry.getDefaultOntology();
  ontologies.addEmployeeOntology(fauxOntology);
}

describe("aggregation ObjectSet support", () => {
  let client: Client;
  let apiServer: SetupServer;
  let fauxFoundry: FauxFoundry;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/", undefined, { logger }),
      createClient,
      { logger },
    );
    ({ client, apiServer, fauxFoundry } = testSetup);
    setupOntology(fauxFoundry);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    apiServer.resetHandlers();
    store = new Store(client);
  });

  it("includes wireObjectSet in cache key when provided", () => {
    const pivotedSet = client(Employee).pivotTo("officeLink");

    const query = store.aggregations.getQueryWithObjectSet({
      type: Office,
      objectSet: pivotedSet,
      where: {},
      aggregate: { $select: { $count: "unordered" } },
    });

    expect(query.cacheKey.otherKeys[WIRE_OBJECT_SET_IDX]).toEqual(
      JSON.stringify(getWireObjectSet(pivotedSet)),
    );
  });

  it("invalidates pivoted aggregations on source type invalidation", async () => {
    const pivotedSet = client(Employee).pivotTo("officeLink");

    const query = store.aggregations.getQueryWithObjectSet({
      type: Office,
      objectSet: pivotedSet,
      where: {},
      aggregate: { $select: { $count: "unordered" } },
    });

    await query.ensureInvalidationTypesReady();

    const revalidateSpy = vi.spyOn(query, "revalidate")
      .mockResolvedValue(undefined);

    await query.invalidateObjectType("Employee", undefined);
    expect(revalidateSpy).toHaveBeenCalledWith(true);
  });

  it("does not invalidate base aggregations on unrelated types", async () => {
    const query = store.aggregations.getQuery({
      type: Office,
      where: {},
      aggregate: { $select: { $count: "unordered" } },
    });

    const revalidateSpy = vi.spyOn(query, "revalidate")
      .mockResolvedValue(undefined);

    await query.invalidateObjectType("Employee", undefined);
    expect(revalidateSpy).not.toHaveBeenCalled();
  });
});
