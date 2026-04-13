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

import type { QueryDefinition } from "@osdk/api";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createCompositeExternalStore } from "../createCompositeExternalStore.js";
import type { FunctionQueryParams } from "../useOsdkFunctions.js";

const QUERY_DEF_A: QueryDefinition<unknown> = {
  type: "query",
  apiName: "queryA",
  version: "1.0.0",
};

const QUERY_DEF_B: QueryDefinition<unknown> = {
  type: "query",
  apiName: "queryB",
  version: "1.0.0",
};

const QUERY_DEF_C: QueryDefinition<unknown> = {
  type: "query",
  apiName: "queryC",
  version: "1.0.0",
};

type Observer = {
  next: (payload: unknown) => void;
  error: (err: unknown) => void;
  complete: () => void;
};

function makeQuery(
  def: QueryDefinition<unknown>,
  options?: FunctionQueryParams<QueryDefinition<unknown>>["options"],
): FunctionQueryParams<QueryDefinition<unknown>> {
  return { queryDefinition: def, options };
}

function createMockClient(): {
  client: ObservableClient;
  observers: Observer[];
  unsubscribes: ReturnType<typeof vi.fn>[];
} {
  const observers: Observer[] = [];
  const unsubscribes: ReturnType<typeof vi.fn>[] = [];

  const client = {
    observeFunction: vi.fn().mockImplementation(
      (
        _def: unknown,
        _params: unknown,
        _opts: unknown,
        observer: Observer,
      ) => {
        observers.push(observer);
        const unsub = vi.fn();
        unsubscribes.push(unsub);
        return { unsubscribe: unsub };
      },
    ),
  } as unknown as ObservableClient;

  return { client, observers, unsubscribes };
}

describe("createCompositeExternalStore", () => {
  let mock: ReturnType<typeof createMockClient>;

  beforeEach(() => {
    mock = createMockClient();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should initialize snapshot with undefined for each query", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A), makeQuery(QUERY_DEF_B)],
      mock.client,
      undefined,
    );

    expect(store.getSnapshot()).toEqual([undefined, undefined]);
  });

  it("should subscribe to all queries when no maxConcurrent", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A), makeQuery(QUERY_DEF_B)],
      mock.client,
      undefined,
    );

    const notify = vi.fn();
    store.subscribe(notify);

    expect(mock.client.observeFunction).toHaveBeenCalledTimes(2);
  });

  it("should update the correct slot on next callback", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A), makeQuery(QUERY_DEF_B)],
      mock.client,
      undefined,
    );

    const notify = vi.fn();
    store.subscribe(notify);

    mock.observers[1].next({
      result: { value: 42 },
      status: "loaded",
      lastUpdated: 1000,
    });

    const snap = store.getSnapshot();
    expect(snap[0]).toBeUndefined();
    expect(snap[1]).toMatchObject({
      result: { value: 42 },
      status: "loaded",
    });
    expect(notify).toHaveBeenCalled();
  });

  it("should produce a new snapshot reference on each update", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A)],
      mock.client,
      undefined,
    );

    store.subscribe(vi.fn());
    const snap1 = store.getSnapshot();

    mock.observers[0].next({
      result: "first",
      status: "loaded",
      lastUpdated: 100,
    });

    const snap2 = store.getSnapshot();
    expect(snap1).not.toBe(snap2);
  });

  it("should handle observer error callback", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A)],
      mock.client,
      undefined,
    );

    const notify = vi.fn();
    store.subscribe(notify);

    const err = new Error("boom");
    mock.observers[0].error(err);

    expect(store.getSnapshot()[0]).toMatchObject({ error: err });
    expect(notify).toHaveBeenCalled();
  });

  it("should wrap non-Error values in an Error", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A)],
      mock.client,
      undefined,
    );

    store.subscribe(vi.fn());
    mock.observers[0].error("string error");

    const snap = store.getSnapshot()[0];
    expect(snap?.error).toBeInstanceOf(Error);
    expect(snap?.error?.message).toBe("string error");
  });

  it("should unsubscribe all observers on cleanup", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A), makeQuery(QUERY_DEF_B)],
      mock.client,
      undefined,
    );

    const cleanup = store.subscribe(vi.fn());
    cleanup();

    expect(mock.unsubscribes[0]).toHaveBeenCalled();
    expect(mock.unsubscribes[1]).toHaveBeenCalled();
  });

  it("should skip disabled queries", () => {
    const store = createCompositeExternalStore(
      [
        makeQuery(QUERY_DEF_A, { enabled: false }),
        makeQuery(QUERY_DEF_B),
      ],
      mock.client,
      undefined,
    );

    store.subscribe(vi.fn());

    expect(mock.client.observeFunction).toHaveBeenCalledTimes(1);
    expect(mock.client.observeFunction).toHaveBeenCalledWith(
      QUERY_DEF_B,
      undefined,
      expect.anything(),
      expect.anything(),
    );
  });

  it("should pass dedupeInterval from options", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A, { dedupeIntervalMs: 5000 })],
      mock.client,
      undefined,
    );

    store.subscribe(vi.fn());

    expect(mock.client.observeFunction).toHaveBeenCalledWith(
      QUERY_DEF_A,
      undefined,
      expect.objectContaining({ dedupeInterval: 5000 }),
      expect.anything(),
    );
  });

  it("should default dedupeInterval to 2000", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A)],
      mock.client,
      undefined,
    );

    store.subscribe(vi.fn());

    expect(mock.client.observeFunction).toHaveBeenCalledWith(
      QUERY_DEF_A,
      undefined,
      expect.objectContaining({ dedupeInterval: 2_000 }),
      expect.anything(),
    );
  });

  describe("maxConcurrent", () => {
    it("should only subscribe to maxConcurrent queries initially", () => {
      const store = createCompositeExternalStore(
        [
          makeQuery(QUERY_DEF_A),
          makeQuery(QUERY_DEF_B),
          makeQuery(QUERY_DEF_C),
        ],
        mock.client,
        1,
      );

      store.subscribe(vi.fn());

      expect(mock.observers).toHaveLength(1);
      expect(mock.client.observeFunction).toHaveBeenCalledWith(
        QUERY_DEF_A,
        undefined,
        expect.anything(),
        expect.anything(),
      );
    });

    it("should subscribe to next query when current settles with 'loaded'", () => {
      const store = createCompositeExternalStore(
        [
          makeQuery(QUERY_DEF_A),
          makeQuery(QUERY_DEF_B),
          makeQuery(QUERY_DEF_C),
        ],
        mock.client,
        1,
      );

      store.subscribe(vi.fn());
      expect(mock.observers).toHaveLength(1);

      // Settle first query
      mock.observers[0].next({
        result: { v: 1 },
        status: "loaded",
        lastUpdated: 100,
      });

      expect(mock.observers).toHaveLength(2);
      expect(mock.client.observeFunction).toHaveBeenNthCalledWith(
        2,
        QUERY_DEF_B,
        undefined,
        expect.anything(),
        expect.anything(),
      );

      // Settle second query
      mock.observers[1].next({
        result: { v: 2 },
        status: "loaded",
        lastUpdated: 200,
      });

      expect(mock.observers).toHaveLength(3);
      expect(mock.client.observeFunction).toHaveBeenNthCalledWith(
        3,
        QUERY_DEF_C,
        undefined,
        expect.anything(),
        expect.anything(),
      );
    });

    it("should advance queue on error status", () => {
      const store = createCompositeExternalStore(
        [makeQuery(QUERY_DEF_A), makeQuery(QUERY_DEF_B)],
        mock.client,
        1,
      );

      store.subscribe(vi.fn());
      expect(mock.observers).toHaveLength(1);

      // Settle with error status via next
      mock.observers[0].next({
        status: "error",
        lastUpdated: 100,
      });

      expect(mock.observers).toHaveLength(2);
    });

    it("should advance queue on observer error callback", () => {
      const store = createCompositeExternalStore(
        [makeQuery(QUERY_DEF_A), makeQuery(QUERY_DEF_B)],
        mock.client,
        1,
      );

      store.subscribe(vi.fn());
      expect(mock.observers).toHaveLength(1);

      mock.observers[0].error(new Error("fail"));

      expect(mock.observers).toHaveLength(2);
    });

    it("should not advance on 'loading' status", () => {
      const store = createCompositeExternalStore(
        [makeQuery(QUERY_DEF_A), makeQuery(QUERY_DEF_B)],
        mock.client,
        1,
      );

      store.subscribe(vi.fn());

      mock.observers[0].next({
        status: "loading",
        result: undefined,
        lastUpdated: 0,
      });

      // Should still be just 1 observer — loading does not settle
      expect(mock.observers).toHaveLength(1);
    });

    it("should handle maxConcurrent:2 with 3 queries", () => {
      const store = createCompositeExternalStore(
        [
          makeQuery(QUERY_DEF_A),
          makeQuery(QUERY_DEF_B),
          makeQuery(QUERY_DEF_C),
        ],
        mock.client,
        2,
      );

      store.subscribe(vi.fn());

      // Two should start immediately
      expect(mock.observers).toHaveLength(2);

      // Settle first — third should start
      mock.observers[0].next({
        result: { v: 1 },
        status: "loaded",
        lastUpdated: 100,
      });

      expect(mock.observers).toHaveLength(3);
    });

    it("should skip disabled queries in staggering queue", () => {
      const store = createCompositeExternalStore(
        [
          makeQuery(QUERY_DEF_A, { enabled: false }),
          makeQuery(QUERY_DEF_B),
          makeQuery(QUERY_DEF_C),
        ],
        mock.client,
        1,
      );

      store.subscribe(vi.fn());

      // First is disabled, so B should be first
      expect(mock.observers).toHaveLength(1);
      expect(mock.client.observeFunction).toHaveBeenCalledWith(
        QUERY_DEF_B,
        undefined,
        expect.anything(),
        expect.anything(),
      );

      // Settle B — C should start
      mock.observers[0].next({
        result: { v: 2 },
        status: "loaded",
        lastUpdated: 100,
      });

      expect(mock.observers).toHaveLength(2);
      expect(mock.client.observeFunction).toHaveBeenCalledWith(
        QUERY_DEF_C,
        undefined,
        expect.anything(),
        expect.anything(),
      );
    });

    it("should not exceed total queries when settling", () => {
      const store = createCompositeExternalStore(
        [makeQuery(QUERY_DEF_A)],
        mock.client,
        1,
      );

      store.subscribe(vi.fn());

      mock.observers[0].next({
        result: { v: 1 },
        status: "loaded",
        lastUpdated: 100,
      });

      // No additional subscriptions beyond the single query
      expect(mock.observers).toHaveLength(1);
    });
  });

  it("should preserve existing snapshot data on error", () => {
    const store = createCompositeExternalStore(
      [makeQuery(QUERY_DEF_A)],
      mock.client,
      undefined,
    );

    store.subscribe(vi.fn());

    // First, deliver some data
    mock.observers[0].next({
      result: { value: 42 },
      status: "loaded",
      lastUpdated: 100,
    });

    // Then error occurs — should merge with existing snapshot
    mock.observers[0].error(new Error("late error"));

    const snap = store.getSnapshot()[0];
    expect(snap?.error?.message).toBe("late error");
    // The existing data fields should be spread into the snapshot
    expect(snap).toHaveProperty("result", { value: 42 });
  });

  it("should handle empty queries array", () => {
    const store = createCompositeExternalStore(
      [],
      mock.client,
      undefined,
    );

    expect(store.getSnapshot()).toEqual([]);

    const cleanup = store.subscribe(vi.fn());
    expect(mock.client.observeFunction).not.toHaveBeenCalled();
    cleanup();
  });
});
