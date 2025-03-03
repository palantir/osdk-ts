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

import type {
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  WhereClause,
} from "@osdk/client";
import type { ListPayload } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseOsdkObjectsOptions<T extends ObjectTypeDefinition> {
  /**
   * Standard OSDK Where
   */
  where?: WhereClause<T>;

  /**
   *  The preferred page size for the list.
   */
  pageSize?: number;

  /** */
  orderBy?: {
    [K in PropertyKeys<T>]?: "asc" | "desc";
  };

  /**
   * Causes the list to automatically fetch more as soon as the previous page
   * has been loaded. If a number is provided, it will continue to automatically
   * fetch more until the list is at least that long.
   */
  // autoFetchMore?: boolean | number;

  /**
   * Upon a list being revalidated, this option determines how the component
   * will be re-rendered with the data.
   *
   * An example to help understand the options:
   *
   * Suppose pageSize is 10 and we have called `fetchMore()` twice. The list is
   * now 30 items long.
   *
   * Upon revalidation, we get the first 10 items of the list. The options behave
   * as follows:
   *
   * - `"in-place"`: The first 10 items of the list are replaced with the new 10
   *   items. The list is now 30 items long, but only the first 10 items are valid.
   * - `"wait"`: The old list is returned until after the next 20 items are loaded
   *   (which will happen automatically). The list is now 30 items long.
   * - `"reset"`: The entire list is replaced with the new 10 items. The list is
   *   now 10 items long.
   */
  // invalidationMode?: "in-place" | "wait" | "reset";

  /**
   * The number of milliseconds to wait after the last observed list change.
   *
   * Two uses of `useOsdkObjects` with the where clause will only trigger one
   * network request if the second is within `dedupeIntervalMs`.
   */
  dedupeIntervalMs?: number;

  /**
   * If provided, the list will be considered this length for the purposes of
   * `invalidationMode` when using the `wait` option. If not provided,
   * the internal expectedLength will be determined by the number of times
   * `fetchMore` has been called.
   */
  // expectedLength?: number | undefined;

  streamUpdates?: boolean;
}

export interface UseOsdkListResult<T extends ObjectTypeDefinition> {
  fetchMore: (() => Promise<unknown>) | undefined;
  data: Osdk.Instance<T>[] | undefined;
  isLoading: boolean;

  // FIXME populate error!
  // error: undefined;

  /**
   * Refers to whether the ordered list of objects (only considering the $primaryKey)
   * is optimistic or not.
   *
   * If you need to know if the contents of the list are optimistic you can
   * do that on a per object basis with useOsdkObject
   */
  isOptimistic: boolean;
}

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

export function useOsdkObjects<T extends ObjectTypeDefinition>(
  type: T,
  {
    pageSize,
    orderBy,
    dedupeIntervalMs,
    where = {},
    streamUpdates,
  }: UseOsdkObjectsOptions<T> = {},
): UseOsdkListResult<T> {
  const { observableClient } = React.useContext(OsdkContext2);

  /*  We want the canonical where clause so that the use of `React.useMemo`
      is stable. No real added cost as we canonicalize internal to
      the ObservableClient anyway.
   */
  const canonWhere = observableClient.canonicalizeWhereClause(where ?? {});

  const { subscribe, getSnapShot } = React.useMemo(
    () =>
      makeExternalStore<ListPayload>(
        (x) =>
          observableClient.observeList({
            type,
            where: canonWhere,
            dedupeInterval: dedupeIntervalMs ?? 2_000,
            pageSize,
            orderBy,
            streamUpdates,
          }, x),
        process.env.NODE_ENV !== "production"
          ? `list ${type.apiName} ${JSON.stringify(canonWhere)}`
          : void 0,
      ),
    [observableClient, type, canonWhere, dedupeIntervalMs],
  );

  const listPayload = React.useSyncExternalStore(subscribe, getSnapShot);
  // TODO: we need to expose the error in the result
  return {
    fetchMore: listPayload?.fetchMore,
    data: listPayload?.resolvedList as Osdk.Instance<T>[],
    isLoading: listPayload?.status === "loading",
    isOptimistic: listPayload?.isOptimistic ?? false,
  };
}
