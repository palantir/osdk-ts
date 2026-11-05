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

import { setImmediate } from "node:timers/promises";

import type { DerivedProperty, ObjectSet } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import {
  FauxFoundry,
  msw,
  ontologies,
  startNodeApiServer,
} from "@osdk/shared.test";
import type { SetupServer } from "@osdk/shared.test";
import pDefer from "p-defer";
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
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { runOptimisticJob } from "../actions/OptimisticJob.js";
import { createChangedObjects } from "../Changes.js";
import { Store } from "../Store.js";
import { updateObject } from "../testUtils.js";

describe.each(["ListQuery", "ObjectSetQuery"])(
  "%s shared updates",
  (queryType) => {
    let client: Client;
    let apiServer: SetupServer;
    let store: Store;
    let requests: Array<{
      id: string;
      pageToken?: string;
      response: ReturnType<typeof pDefer<Response>>;
      received: ReturnType<typeof pDefer<void>>;
    }>;

    beforeAll(() => {
      const setup = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/"),
        createClient,
      );
      ({ client, apiServer } = setup);
      const { fauxFoundry } = setup;
      ontologies.addEmployeeOntology(fauxFoundry.getDefaultOntology());
      fauxFoundry.getDefaultDataStore().registerObject(Employee, {
        $apiName: "Employee",
        employeeId: 1,
        fullName: "Alice",
      });
      apiServer.events.on("response:mocked", ({ requestId }) => {
        requests
          .find((request) => request.id === requestId)
          ?.received.resolve();
      });
      return () => apiServer.close();
    });

    beforeEach(() => {
      store = new Store(client);
      requests = [];
      apiServer.resetHandlers();
    });

    afterEach(async () => {
      for (const key of store.queries.keys())
        store.queries.peek(key)?.dispose();
      for (const request of requests)
        request.response.resolve(msw.HttpResponse.json({ data: [] }));
      await Promise.all(requests.map((request) => request.received.promise));
      await setImmediate();
    });

    function getQuery(where = {}) {
      const withProperties: DerivedProperty.Clause<typeof Employee> = {
        derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
      };
      const options = { pageSize: 1, where, withProperties };
      return queryType === "ListQuery"
        ? store.lists.getQuery({ type: Employee, ...options })
        : store.objectSets.getQuery({
            baseObjectSet: client(Employee) as ObjectSet<typeof Employee>,
            ...options,
          });
    }

    function holdRequests() {
      apiServer.use(
        msw.http.post("*/loadObjects", async ({ request, requestId }) => {
          const { pageToken } = (await request.json()) as {
            pageToken?: string;
          };
          const held = {
            id: requestId,
            pageToken,
            response: pDefer<Response>(),
            received: pDefer<void>(),
          };
          requests.push(held);
          return held.response.promise;
        }),
      );
    }

    async function requestAt(index: number) {
      await vi.waitFor(() => expect(requests.length).toBeGreaterThan(index));
      return requests[index];
    }

    async function respond(
      index: number,
      ids: number[],
      nextPageToken?: string,
    ) {
      const request = await requestAt(index);
      request.response.resolve(
        msw.HttpResponse.json({
          data: ids.map((id) => ({
            __apiName: "Employee",
            __primaryKey: id,
            employeeId: id,
            fullName: "Alice",
            derivedName: "Alice",
          })),
          nextPageToken,
        }),
      );
      await request.received.promise;
      await setImmediate();
    }

    function expectList(
      query: ReturnType<typeof getQuery>,
      status: string,
      ids: number[],
    ) {
      const entry = store.getValue(query.cacheKey);
      expect(entry?.status).toBe(status);
      expect(
        entry?.value?.data.map(
          (key) => store.getValue(key)?.value?.$primaryKey,
        ),
      ).toEqual(ids);
    }

    it("serializes refreshes and pages, deduplicates requests, and keeps local updates loading", async () => {
      const employee = await client(Employee).fetchOne(1);
      holdRequests();
      const query = getQuery();
      const initial = query.revalidate();
      const more = query.fetchMore();
      expect(query.fetchMore()).toBe(more);
      updateObject(store, employee);
      expectList(query, "loading", []);
      await respond(0, [1], "page-2");
      await initial;
      expect((await requestAt(1)).pageToken).toBe("page-2");
      const samePage = query.fetchMore();
      const refresh = query.revalidate();
      updateObject(store, employee);
      expectList(query, "loading", [1]);
      expect(requests).toHaveLength(2);
      await respond(1, [2]);
      await Promise.all([more, samePage]);
      expect((await requestAt(2)).pageToken).toBeUndefined();
      await respond(2, [1, 2]);
      await refresh;
      updateObject(store, employee);
      expectList(query, "loaded", [1, 2]);
      expect(requests).toHaveLength(3);
    });

    it("replaces active requests, ignores late results, and cancels queued pages on disposal", async () => {
      holdRequests();
      const query = getQuery();
      const initial = query.revalidate();
      await respond(0, [1], "old-page-2");
      await initial;
      const more = query.fetchMore();
      await requestAt(1);
      const oldRefresh = query.revalidate(true);
      expect((await requestAt(2)).pageToken).toBeUndefined();
      await more;
      await respond(1, [2], "stale-page-3");
      expectList(query, "loading", [1]);
      const fresh = query.revalidate(true);
      await requestAt(3);
      await oldRefresh;
      requests[2].response.resolve(msw.HttpResponse.json({}, { status: 500 }));
      await requests[2].received.promise;
      await setImmediate();
      expectList(query, "loading", [1]);
      await respond(3, [3], "fresh-page-2");
      await fresh;
      const next = query.fetchMore();
      expect((await requestAt(4)).pageToken).toBe("fresh-page-2");
      await respond(4, [4]);
      await next;
      expectList(query, "loaded", [3, 4]);
      const final = query.revalidate(true);
      await requestAt(5);
      const queued = query.fetchMore();
      query.dispose();
      await Promise.all([final, queued]);
      await respond(5, [5], "page-2");
      expect(requests).toHaveLength(6);
      expectList(query, "loading", [3, 4]);
    });

    it("revalidates uncertain additions and keeps optimistic changes loading until rollback", async () => {
      const query = getQuery({ fullName: { $containsAllTerms: "Alice" } });
      const employee = await client(Employee).fetchOne(1);
      const objectQuery = store.objects.getQuery({ apiName: Employee, pk: 1 });
      const changes = createChangedObjects();
      changes.registerObject(
        objectQuery.cacheKey,
        employee as unknown as ObjectHolder,
        true,
      );
      await query.maybeUpdateAndRevalidate(changes, undefined);
      expectList(query, "loaded", [1]);
      holdRequests();
      const rollback = runOptimisticJob(store, (builder) => {
        builder.createObject(Employee, 2, {
          fullName: "Alice",
        } as Employee.Props);
      });
      await vi.waitFor(() => expectList(query, "loading", [1]));
      expect(requests).toHaveLength(0);
      const refresh = query.revalidate(true);
      await respond(0, [1]);
      await refresh;
      expect(store.layers.truth.get(query.cacheKey)?.status).toBe("loaded");
      expectList(query, "loading", [1]);
      await rollback();
      expectList(query, "loaded", [1]);
    });
  },
);
