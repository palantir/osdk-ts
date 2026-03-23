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
  getWireObjectSet,
  type ObserveObjectSetArgs,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { extractPayloadError, isPayloadLoading } from "./hookUtils.js";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseObjectSetLinksOptions<
  T extends ObjectOrInterfaceDefinition,
> {
  where?: WhereClause<T>;

  $select?: readonly PropertyKeys<T>[];

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
  objectSet: ObjectSet<Q> | undefined,
  linkName: L,
  options: UseObjectSetLinksOptions<LinkedType<Q, L>> = {},
): UseObjectSetLinksResult<LinkedType<Q, L>> {
  const { observableClient } = React.useContext(OsdkContext2);

  const { enabled: enabledOption = true, streamUpdates, ...otherOptions } =
    options;

  const enabled = enabledOption && objectSet != null;

  const canonOptions = observableClient.canonicalizeOptions({
    where: otherOptions.where,
    orderBy: otherOptions.orderBy,
    $select: otherOptions.$select,
  });

  const objectSetKey = objectSet
    ? JSON.stringify(getWireObjectSet(objectSet as ObjectSet<Q>))
    : undefined;

  const objectSetRef = React.useRef(objectSet);
  objectSetRef.current = objectSet;

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectSetArgs<Q>>(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `objectSetLinks [DISABLED]`
            : void 0,
        );
      }

      return makeExternalStore<ObserveObjectSetArgs<Q>>(
        (observer) => {
          const currentObjectSet = objectSetRef.current;
          if (!currentObjectSet) {
            return { unsubscribe: () => {} };
          }
          return observableClient.observeObjectSet(
            currentObjectSet,
            {
              pivotTo: linkName,
              where: canonOptions.where,
              pageSize: otherOptions.pageSize,
              orderBy: canonOptions.orderBy,
              select: canonOptions.$select,
              dedupeInterval: otherOptions.dedupeIntervalMs ?? 2_000,
              autoFetchMore: otherOptions.autoFetchMore,
              streamUpdates,
            },
            observer,
          );
        },
        process.env.NODE_ENV !== "production"
          ? `objectSetLinks ${linkName}`
          : void 0,
      );
    },
    [
      enabled,
      observableClient,
      objectSetKey,
      linkName,
      canonOptions.where,
      canonOptions.orderBy,
      canonOptions.$select,
      otherOptions.pageSize,
      streamUpdates,
      otherOptions.dedupeIntervalMs,
      otherOptions.autoFetchMore,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const typeApiName = objectSet?.$objectSetInternals.def.apiName;

  const refetch = React.useCallback(async () => {
    if (typeApiName) {
      await observableClient.invalidateObjectType(typeApiName);
    }
  }, [observableClient, typeApiName]);

  return React.useMemo(() => ({
    data: payload?.resolvedList as
      | Osdk.Instance<LinkedType<Q, L>>[]
      | undefined,
    isLoading: isPayloadLoading(payload, enabled),
    error: extractPayloadError(payload, "Failed to fetch linked objects"),
    isOptimistic: payload?.isOptimistic ?? false,
    fetchMore: payload?.hasMore ? payload.fetchMore : undefined,
    hasMore: payload?.hasMore ?? false,
    objectSet: payload?.objectSet as ObjectSet<LinkedType<Q, L>> | undefined,
    totalCount: payload?.totalCount,
    refetch,
  }), [payload, enabled, refetch]);
}
