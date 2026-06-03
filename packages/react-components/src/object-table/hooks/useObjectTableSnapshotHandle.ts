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

import type {
  ObjectOrInterfaceDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { Table } from "@tanstack/react-table";
import type { Ref } from "react";
import {
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useReducer,
  useRef,
} from "react";
import type {
  ObjectTableHandle,
  ObjectTableSnapshot,
  ObjectTableSnapshotOptions,
} from "../ObjectTableApi.js";
import { createObjectTableSnapshot } from "../utils/createObjectTableSnapshot.js";

type ObjectTableRow<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> = Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>;

interface SnapshotInputs<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> {
  table: Table<ObjectTableRow<Q, RDPs>>;
  hasNextPage: boolean;
  isLoading: boolean;
  error: unknown;
  totalCount: string | undefined;
}

interface UseObjectTableSnapshotHandleParams<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> extends SnapshotInputs<Q, RDPs> {
  tableRef?: Ref<ObjectTableHandle<Q, RDPs>>;
  fetchMore: (() => Promise<unknown>) | undefined;
}

/**
 * Exposes `getSnapshot` on `tableRef`. A snapshot is a point-in-time read of the
 * table's committed rows and pagination state. When a caller passes a positive
 * `rowLimit`, `getSnapshot` pages through `fetchMore` until it has that many rows
 * (or the data set is exhausted / errors), then resolves.
 */
export function useObjectTableSnapshotHandle<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
>({
  tableRef,
  table,
  hasNextPage,
  isLoading,
  error,
  totalCount,
  fetchMore,
}: UseObjectTableSnapshotHandleParams<Q, RDPs>): void {
  // Bumped to force a render so the layout effect below republishes the latest
  // inputs. Used as a fallback after a fetch whose committed page arrived before
  // the loop parked its waiter, guaranteeing the parked waiter still resolves.
  const [, forceCommit] = useReducer((version: number) => version + 1, 0);

  // Latest committed inputs and fetchMore, refreshed on every commit. The
  // imperative handle reads from these so it always sees current data without
  // re-subscribing.
  const inputsRef = useRef<SnapshotInputs<Q, RDPs>>({
    table,
    hasNextPage,
    isLoading,
    error,
    totalCount,
  });
  const fetchMoreRef = useRef(fetchMore);

  // Resolvers for in-flight getSnapshot loops parked until the next commit.
  const commitWaitersRef = useRef<Array<() => void>>([]);

  const mountedRef = useRef(true);
  // Resolves when the component unmounts, letting an awaiting fetch bail out
  // instead of stranding the caller's promise forever.
  const unmountedRef = useRef<Deferred>(createDeferred());

  useLayoutEffect(function publishCommit() {
    inputsRef.current = { table, hasNextPage, isLoading, error, totalCount };
    fetchMoreRef.current = fetchMore;
    drainWaiters(commitWaitersRef);
  });

  useLayoutEffect(function trackMounted() {
    mountedRef.current = true;
    unmountedRef.current = createDeferred();
    return () => {
      mountedRef.current = false;
      unmountedRef.current.resolve();
      drainWaiters(commitWaitersRef);
    };
  }, []);

  const readSnapshot = useCallback(
    function readSnapshot(): ObjectTableSnapshot<Q, RDPs> {
      // Materializing a snapshot walks every row and visible column, so keep it
      // lazy — ObjectTable renders never pay for it unless a caller asks.
      return createObjectTableSnapshot<Q, RDPs>(inputsRef.current);
    },
    [],
  );

  const waitForNextCommit = useCallback(function waitForNextCommit(): Promise<
    void
  > {
    if (!mountedRef.current) {
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      commitWaitersRef.current.push(resolve);
      // fetchMore resolves once the store holds the next page, but its commit
      // may have landed before we parked above (or the page was identical and
      // produced none). Force a commit so this resolves either way.
      forceCommit();
    });
  }, []);

  const getSnapshot = useCallback(
    async function getSnapshot(
      options?: ObjectTableSnapshotOptions,
    ): Promise<ObjectTableSnapshot<Q, RDPs>> {
      const rowLimit = normalizeRowLimit(options?.rowLimit);
      let snapshot = readSnapshot();
      if (rowLimit == null) {
        return snapshot;
      }

      while (
        snapshot.rows.length < rowLimit
        && snapshot.hasNextPage
        && snapshot.error == null
      ) {
        // Read the live ref each iteration: fetchMore can flip to/from
        // undefined as pages run out while the loop is awaiting.
        const currentFetchMore = fetchMoreRef.current;
        if (currentFetchMore == null) {
          break;
        }

        const rowsBefore = snapshot.rows.length;

        // Race unmount so a fetch that never resolves can't strand the caller.
        const fetched = await Promise.race([
          currentFetchMore().then(() => true),
          unmountedRef.current.promise.then(() => false),
        ]);
        if (!fetched || !mountedRef.current) {
          return readSnapshot();
        }

        await waitForNextCommit();
        snapshot = readSnapshot();

        // A fetch that added no rows (deduped or empty page) means we can't
        // reach the limit — stop rather than spin.
        if (snapshot.rows.length === rowsBefore) {
          break;
        }
      }

      return snapshot;
    },
    [readSnapshot, waitForNextCommit],
  );

  useImperativeHandle(tableRef, () => ({ getSnapshot }), [getSnapshot]);
}

interface Deferred {
  promise: Promise<void>;
  resolve: () => void;
}

function createDeferred(): Deferred {
  let resolve: () => void;
  const promise = new Promise<void>((resolvePromise) => {
    resolve = resolvePromise;
  });
  return { promise, resolve: () => resolve() };
}

function drainWaiters(waitersRef: { current: Array<() => void> }): void {
  const waiters = waitersRef.current;
  waitersRef.current = [];
  for (const resolve of waiters) {
    resolve();
  }
}

function normalizeRowLimit(rowLimit: number | undefined): number | undefined {
  if (rowLimit == null || rowLimit <= 0 || !Number.isFinite(rowLimit)) {
    return undefined;
  }
  return rowLimit;
}
