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

import type { ObjectTypeDefinition, Osdk, WhereClause } from "@osdk/client";
import type { ListPayload } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseOsdkListOptions<T extends ObjectTypeDefinition> {
  where: WhereClause<T>;

  /**
   * The number of milliseconds to wait after the last observed list change.
   *
   * Two uses of `useOsdkList` with the where clause will only trigger one
   * network request if the second is within `dedupeIntervalMs`.
   */
  dedupeIntervalMs?: number;
}
export interface UseOsdkListResult<T extends ObjectTypeDefinition> {
  fetchMore: (() => Promise<unknown>) | undefined;
  data: Osdk.Instance<T>[];
  isLoading: boolean;

  // FIXME populate error!
  error: undefined;

  /**
   * Refers to whether the ordered list of objects (only considering the $primaryKey)
   * is optimistic or not.
   *
   * If you need to know if the contents of the list are optimistic you can
   * do that on a per object basis with useOsdkObject
   */
  isOptimistic: boolean;
}

export function useOsdkList<T extends ObjectTypeDefinition>(
  type: T,
  opts: UseOsdkListOptions<T>,
): UseOsdkListResult<T> {
  const { store } = React.useContext(OsdkContext2);
  const where = store.canonicalizeWhereClause(opts.where);

  const { subscribe, getSnapShot } = React.useMemo(
    () =>
      makeExternalStore<ListPayload>((x) =>
        store.observeList(
          type,
          where,
          {
            dedupeInterval: opts.dedupeIntervalMs ?? 2_000,
          },
          x,
        ), `list ${type.apiName} ${JSON.stringify(where)}`),
    [store, type, where, opts.dedupeIntervalMs],
  );

  const listPayload = React.useSyncExternalStore(subscribe, getSnapShot);

  return {
    fetchMore: listPayload?.fetchMore,
    data: listPayload?.resolvedList as Osdk.Instance<T>[],
    isLoading: listPayload?.status === "loading",
    error: undefined,
    isOptimistic: listPayload?.isOptimistic ?? false,
  };
}
