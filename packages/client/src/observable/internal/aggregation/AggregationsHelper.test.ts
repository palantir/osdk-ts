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

import {
  Employee,
  FooInterface,
  Office,
  Person,
  promoteEmployee,
} from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import {
  FauxFoundry,
  msw,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import defer from "p-defer";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { TestLogger } from "../../../logger/TestLogger.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import { ObservableClientImpl } from "../ObservableClientImpl.js";
import { Store } from "../Store.js";
import { WIRE_OBJECT_SET_IDX } from "./AggregationCacheKey.js";

type AggregationState = { status: string; result: unknown };

const logger = new TestLogger({}, { level: "debug" });

function setupOntology(fauxFoundry: FauxFoundry) {
  const fauxOntology = fauxFoundry.getDefaultOntology();
  fauxOntology.registerObjectType(stubData.officeObjectTypeWithLinkTypes);
  fauxOntology.registerInterfaceType(stubData.FooInterface);
  fauxOntology.registerObjectType({
    ...stubData.personWithLinkTypes,
    implementsInterfaces: ["FooInterface"],
    implementsInterfaces2: {
      FooInterface: {
        properties: { fooSpt: "name", fooIdp: "name" },
        propertiesV2: {
          fooSpt: {
            type: "localPropertyImplementation",
            propertyApiName: "name",
          },
          fooIdp: {
            type: "localPropertyImplementation",
            propertyApiName: "name",
          },
        },
        links: {},
        actionTypes: {},
      },
    },
  });
  fauxOntology.registerObjectType({
    ...stubData.employeeObjectWithLinkTypes,
    implementsInterfaces2: {
      FooInterface: {
        ...stubData.employeeObjectWithLinkTypes.implementsInterfaces2
          .FooInterface,
        properties: { fooSpt: "fullName", fooIdp: "office" },
      },
    },
  });
  fauxOntology.registerActionType(
    stubData.PromoteEmployee,
    (batch, payload) => {
      batch.modifyObject<typeof Employee>(
        Employee.apiName,
        payload.parameters.employeeId as number,
        {
          fullName: payload.parameters.newTitle as string,
        },
      );
    },
  );
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
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.clear();
    dataStore.registerObject(Employee, {
      employeeId: 1,
      fullName: "Alice",
      office: "NYC",
    });
    dataStore.registerObject(Employee, {
      employeeId: 2,
      fullName: "Bob",
      office: "SF",
    });
    dataStore.registerObject(Person, { id: 3, name: "Alice" });
    store = new Store(client);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("includes wireObjectSet in cache key when provided", () => {
    const pivotedSet = client(Employee).pivotTo("officeLink");

    const query = store.aggregations.getQuery({
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

    const query = store.aggregations.getQuery({
      type: Office,
      objectSet: pivotedSet,
      where: {},
      aggregate: { $select: { $count: "unordered" } },
    });

    await query.ensureInvalidationTypesReady();

    const revalidateSpy = vi
      .spyOn(query, "revalidate")
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

    const revalidateSpy = vi
      .spyOn(query, "revalidate")
      .mockResolvedValue(undefined);

    await query.invalidateObjectType("Employee", undefined);
    expect(revalidateSpy).not.toHaveBeenCalled();
  });

  describe("interfaces", () => {
    it("refreshes narrowed interface aggregations invalidated during a fetch", async () => {
      let count = 1;
      const firstRequest = defer<void>();
      const firstResponse = defer<void>();
      apiServer.use(
        msw.http.post(
          "https://stack.palantir.com/api/v2/ontologies/:ontology/objectSets/aggregate",
          async () => {
            const result = count;
            if (result === 1) {
              firstRequest.resolve();
              await firstResponse.promise;
            }
            return msw.HttpResponse.json({
              data: [
                { group: {}, metrics: [{ name: "count", value: result }] },
              ],
            });
          },
        ),
      );
      const observableClient = new ObservableClientImpl(store);
      let payload: AggregationState | undefined;
      const subscription = await observableClient.observeAggregation(
        {
          type: Employee,
          objectSet: client(FooInterface).narrowToType(Employee),
          where: { fullName: "Alice" },
          aggregate: { $select: { $count: "unordered" } },
        },
        {
          next: (value) => {
            payload = value;
          },
          error: (error) => {
            throw error;
          },
          complete: () => {},
        },
      );

      try {
        await firstRequest.promise;
        count = 2;
        const invalidation =
          observableClient.invalidateObjectOrInterfaceType(FooInterface);
        await new Promise((resolve) => setTimeout(resolve, 0));
        firstResponse.resolve();
        await invalidation;
        expect(payload?.result).toEqual({ $count: 2 });
      } finally {
        firstResponse.resolve();
        subscription.unsubscribe();
      }
    });

    it("observes interface aggregates and refreshes after an action", async () => {
      const observableClient = new ObservableClientImpl(store);
      let latest: AggregationState | undefined;
      const subscription = observableClient.observeAggregation(
        {
          type: FooInterface,
          aggregate: {
            $groupBy: { fooSpt: "exact" },
            $select: {
              $count: "unordered",
              "fooSpt:exactDistinct": "unordered",
            },
          },
        },
        {
          next: (payload) => {
            latest = payload;
          },
          error: (error) => {
            throw error;
          },
          complete: () => {},
        },
      );
      try {
        await vi.waitFor(() => expect(latest?.status).toBe("loaded"));
        expect(latest?.result).toEqual([
          {
            $group: { fooSpt: "Alice" },
            $count: 2,
            fooSpt: { exactDistinct: 1 },
          },
          {
            $group: { fooSpt: "Bob" },
            $count: 1,
            fooSpt: { exactDistinct: 1 },
          },
        ]);

        await observableClient.applyAction(promoteEmployee, {
          employeeId: 2,
          newTitle: "Alice",
          newCompensation: 100,
        });
        await vi.waitFor(() =>
          expect(latest?.result).toEqual([
            {
              $group: { fooSpt: "Alice" },
              $count: 3,
              fooSpt: { exactDistinct: 1 },
            },
          ]),
        );
      } finally {
        subscription.unsubscribe();
      }
    });

    it("filters and intersects supplied interface sets and refreshes on edits", async () => {
      const observableClient = new ObservableClientImpl(store);
      let payload: AggregationState | undefined;
      const subscription = await observableClient.observeAggregation(
        {
          type: FooInterface,
          objectSet: client(FooInterface).where({ fooIdp: "NYC" }),
          where: { fooSpt: { $startsWith: "A" } },
          intersectWith: [{ where: { fooSpt: "Alice" } }],
          aggregate: { $select: { $count: "unordered" } },
        },
        {
          next: (value) => {
            payload = value;
          },
          error: (error) => {
            throw error;
          },
          complete: () => {},
        },
      );

      try {
        await vi.waitFor(() => expect(payload?.result).toEqual({ $count: 1 }));
        const dataStore = fauxFoundry.getDefaultDataStore();
        dataStore.replaceObjectOrThrow({
          ...dataStore.getObjectOrThrow("Employee", 1),
          office: "SF",
        });
        await observableClient.invalidateObjectType(Employee);
        expect(payload?.result).toEqual({ $count: 0 });
        dataStore.replaceObjectOrThrow({
          ...dataStore.getObjectOrThrow("Employee", 1),
          office: "NYC",
        });
        await observableClient.invalidateObjectOrInterfaceType(
          FooInterface.apiName,
        );
        expect(payload?.result).toEqual({ $count: 1 });
      } finally {
        subscription.unsubscribe();
      }
    });
  });
});
