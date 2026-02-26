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
  LinkedType,
  LinkNames,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import {
  computeObjectSetCacheKey,
  type ObserveObjectSetArgs,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseObjectSetLinksOptions<
  T extends ObjectOrInterfaceDefinition,
> {
  where?: WhereClause<T>;

  pageSize?: number;

  orderBy?: { [K in PropertyKeys<T>]?: "asc" | "desc" };

  dedupeIntervalMs?: number;

  enabled?: boolean;

  autoFetchMore?: boolean | number;

  streamUpdates?: boolean;
}

export interface UseObjectSetLinksResult<
  T extends ObjectOrInterfaceDefinition,
> {
  data: Osdk.Instance<T>[] | undefined;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  fetchMore: (() => Promise<void>) | undefined;
  hasMore: boolean;
  objectSet: ObjectSet<T> | undefined;
  totalCount?: string;
  refetch: () => void;
}

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

export function useObjectSetLinks<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q>,
>(
  objectSet: ObjectSet<Q>,
  linkName: L,
  options: UseObjectSetLinksOptions<LinkedType<Q, L>> = {},
): UseObjectSetLinksResult<LinkedType<Q, L>> {
  const { observableClient } = React.useContext(OsdkContext2);

  const { enabled = true, streamUpdates, ...otherOptions } = options;

  const objectSetRef = React.useRef(objectSet);
  objectSetRef.current = objectSet;

  const stableKey = computeObjectSetCacheKey(objectSet, {
    pivotTo: linkName,
    where: otherOptions.where,
    pageSize: otherOptions.pageSize,
    orderBy: otherOptions.orderBy,
  });

  const stableWhere = React.useMemo(
    () => otherOptions.where,
    [JSON.stringify(otherOptions.where)],
  );

  const stableOrderBy = React.useMemo(
    () => otherOptions.orderBy,
    [JSON.stringify(otherOptions.orderBy)],
  );

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectSetArgs<Q>>(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `objectSetLinks ${stableKey} [DISABLED]`
            : void 0,
        );
      }

      return makeExternalStore<ObserveObjectSetArgs<Q>>(
        (observer) => {
          return observableClient.observeObjectSet(
            objectSetRef.current,
            {
              pivotTo: linkName,
              where: stableWhere,
              pageSize: otherOptions.pageSize,
              orderBy: stableOrderBy,
              dedupeInterval: otherOptions.dedupeIntervalMs ?? 2_000,
              autoFetchMore: otherOptions.autoFetchMore,
              streamUpdates,
            },
            observer,
          );
        },
        process.env.NODE_ENV !== "production"
          ? `objectSetLinks ${stableKey}`
          : void 0,
      );
    },
    [
      enabled,
      observableClient,
      stableKey,
      linkName,
      stableWhere,
      otherOptions.pageSize,
      stableOrderBy,
      streamUpdates,
      otherOptions.dedupeIntervalMs,
      otherOptions.autoFetchMore,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const refetch = React.useCallback(async () => {
    await observableClient.invalidateObjectType(
      objectSet.$objectSetInternals.def.apiName,
    );
  }, [observableClient, objectSet.$objectSetInternals.def.apiName]);

  return React.useMemo(() => {
    let error: Error | undefined;
    if (payload && "error" in payload && payload.error) {
      error = payload.error;
    } else if (payload?.status === "error") {
      error = new Error("Failed to fetch linked objects");
    }

    return {
      data: payload?.resolvedList as
        | Osdk.Instance<LinkedType<Q, L>>[]
        | undefined,
      isLoading: enabled
        ? (payload?.status === "loading" || payload?.status === "init"
          || !payload)
        : false,
      error,
      isOptimistic: payload?.isOptimistic ?? false,
      fetchMore: payload?.hasMore ? payload.fetchMore : undefined,
      hasMore: payload?.hasMore ?? false,
      objectSet: payload?.objectSet as ObjectSet<LinkedType<Q, L>> | undefined,
      totalCount: payload?.totalCount,
      refetch,
    };
  }, [payload, enabled, refetch]);
}
