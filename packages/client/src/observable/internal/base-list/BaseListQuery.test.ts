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
import type { SetupServer } from "@osdk/shared.test";
import {
  FauxFoundry,
  msw,
  ontologies,
  startNodeApiServer,
} from "@osdk/shared.test";
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
import { runOptimisticJob } from "../actions/OptimisticJob.js";
import { Store } from "../Store.js";
import { updateObject } from "../testUtils.js";

interface HeldRequest {
  id: string;
  body: { pageToken?: string };
  response: ReturnType<typeof pDefer<Response>>;
  received: ReturnType<typeof pDefer<void>>;
}

describe.each(["ListQuery", "ObjectSetQuery"])(
  "%s shared requests",
  (queryType) => {
    let client: Client;
    let apiServer: SetupServer;
    let store: Store;
    let requests: HeldRequest[];

    beforeAll(() => {
      const setup = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/"),
        createClient,
      );
      ({ client, apiServer } = setup);
      ontologies.addEmployeeOntology(setup.fauxFoundry.getDefaultOntology());
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
      apiServer.use(
        msw.http.post("*/loadObjects", async ({ request, requestId }) => {
          const held: HeldRequest = {
            id: requestId,
            body: (await request.json()) as HeldRequest["body"],
            response: pDefer<Response>(),
            received: pDefer<void>(),
          };
          requests.push(held);
          return held.response.promise;
        }),
      );
    });

    afterEach(async () => {
      for (const key of store.queries.keys())
        store.queries.peek(key)?.dispose();
      for (const request of requests) {
        request.response.resolve(msw.HttpResponse.json({ data: [] }));
      }
      await Promise.all(requests.map((request) => request.received.promise));
      await setImmediate();
    });

    function getQuery(withRdp = false) {
      const withProperties:
        | DerivedProperty.Clause<typeof Employee>
        | undefined = withRdp
        ? {
            derivedName: (base) =>
              base.pivotTo("lead").selectProperty("fullName"),
          }
        : undefined;
      const options = { pageSize: 1, withProperties };
      return queryType === "ListQuery"
        ? store.lists.getQuery({ type: Employee, ...options })
        : store.objectSets.getQuery({
            baseObjectSet: client(Employee) as ObjectSet<typeof Employee>,
            ...options,
          });
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
            fullName: id === 1 ? "Alice" : "Bob",
            derivedName: "Alice",
          })),
          nextPageToken,
        }),
      );
      await request.received.promise;
      await setImmediate();
    }

    function getIds(query: ReturnType<typeof getQuery>) {
      return store
        .getValue(query.cacheKey)
        ?.value?.data.map((key) => store.getValue(key)?.value?.$primaryKey);
    }

    it("serializes refreshes and pages while deduplicating concurrent requests", async () => {
      const query = getQuery();
      const initial = query.revalidate();
      await requestAt(0);
      expect(query.pendingRequestKind).toBe("revalidation");
      const more = query.fetchMore();
      expect(query.fetchMore()).toBe(more);
      await respond(0, [1], "page-2");
      await initial;
      const page = await requestAt(1);
      expect(page.body.pageToken).toBe("page-2");
      expect(query.pendingRequestKind).toBe("pagination");
      const samePage = query.fetchMore();
      const refresh = query.revalidate();
      expect(requests).toHaveLength(2);
      await respond(1, [2], "page-3");
      await Promise.all([more, samePage]);
      expect((await requestAt(2)).body.pageToken).toBeUndefined();
      expect(query.pendingRequestKind).toBe("revalidation");
      await respond(2, [1, 2]);
      await refresh;
      expect(requests).toHaveLength(3);
      expect(getIds(query)).toEqual([1, 2]);
      expect(store.getValue(query.cacheKey)?.status).toBe("loaded");
    });

    it("restarts from the first page on a forced refresh and ignores a late page response", async () => {
      const query = getQuery();
      const initial = query.revalidate();
      await respond(0, [1], "old-page-2");
      await initial;
      const more = query.fetchMore();
      await requestAt(1);
      const refresh = query.revalidate(true);
      expect((await requestAt(2)).body.pageToken).toBeUndefined();
      await more;
      await respond(1, [2], "stale-page-3");
      expect(query.pendingRequestKind).toBe("revalidation");
      expect(store.getValue(query.cacheKey)?.status).toBe("loading");
      expect(getIds(query)).toEqual([1]);
      await respond(2, [3], "fresh-page-2");
      await refresh;
      const next = query.fetchMore();
      expect((await requestAt(3)).body.pageToken).toBe("fresh-page-2");
      await respond(3, [4]);
      await next;
      expect(getIds(query)).toEqual([3, 4]);
      expect(query.pendingFetch).toBeUndefined();
    });

    it("replaces an active revalidation and ignores its late failure", async () => {
      const query = getQuery();
      const old = query.revalidate();
      await requestAt(0);
      const fresh = query.revalidate(true);
      await requestAt(1);
      await old;
      const stale = await requestAt(0);
      stale.response.resolve(msw.HttpResponse.json({}, { status: 500 }));
      await stale.received.promise;
      await setImmediate();
      expect(query.pendingRequestKind).toBe("revalidation");
      expect(store.getValue(query.cacheKey)?.status).toBe("loading");
      expect(getIds(query)).toBeUndefined();
      await respond(1, [2]);
      await fresh;
      expect(getIds(query)).toEqual([2]);
      expect(store.getValue(query.cacheKey)?.status).toBe("loaded");
    });

    it.each(["revalidation", "pagination"])(
      "keeps local cache updates loading during %s",
      async (kind) => {
        const query = getQuery(true);
        const initial = query.revalidate();
        await respond(0, [1], "page-2");
        await initial;
        const pending =
          kind === "revalidation" ? query.revalidate(true) : query.fetchMore();
        await requestAt(1);
        const plain = client(Employee).fetchOne(1);
        const plainRequest = await requestAt(2);
        plainRequest.response.resolve(
          msw.HttpResponse.json({
            data: [
              {
                __apiName: "Employee",
                __primaryKey: 1,
                employeeId: 1,
                fullName: "Updated",
              },
            ],
          }),
        );
        const employee = await plain;
        updateObject(store, employee);
        expect(store.getValue(query.cacheKey)?.status).toBe("loading");
        expect(requests).toHaveLength(3);
        await respond(1, [1]);
        await pending;
        expect(store.getValue(query.cacheKey)?.status).toBe("loaded");
        updateObject(store, employee);
        expect(store.getValue(query.cacheKey)?.status).toBe("loaded");
      },
    );

    it("does not fetch for optimistic missing RDP data and restores the completed response on rollback", async () => {
      const query = getQuery(true);
      const initial = query.revalidate();
      await respond(0, [1]);
      await initial;
      const rollback = runOptimisticJob(store, (builder) => {
        builder.createObject(Employee, 2, {
          fullName: "Bob",
        } as Employee.Props);
      });
      await vi.waitFor(() =>
        expect(store.getValue(query.cacheKey)?.status).toBe("loading"),
      );
      expect(query.pendingFetch).toBeUndefined();
      expect(requests).toHaveLength(1);
      const refresh = query.revalidate(true);
      await respond(1, [1]);
      await refresh;
      expect(store.layers.truth.get(query.cacheKey)?.status).toBe("loaded");
      expect(store.getValue(query.cacheKey)?.status).toBe("loading");
      await rollback();
      expect(store.getValue(query.cacheKey)?.status).toBe("loaded");
      expect(getIds(query)).toEqual([1]);
    });

    it("does not start queued pagination after disposal", async () => {
      const query = getQuery();
      const initial = query.revalidate();
      await requestAt(0);
      const more = query.fetchMore();
      query.dispose();
      await Promise.all([initial, more]);
      await respond(0, [1], "page-2");
      expect(requests).toHaveLength(1);
      expect(query.pendingFetch).toBeUndefined();
      expect(getIds(query)).toBeUndefined();
    });
  },
);
