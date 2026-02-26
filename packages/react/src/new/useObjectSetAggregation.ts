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
  AggregateOpts,
  AggregationsResults,
  DerivedProperty,
  ObjectSet,
  ObjectTypeDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { ObserveAggregationArgs } from "@osdk/client/unstable-do-not-use";
import { computeObjectSetCacheKey } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStoreAsync } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseObjectSetAggregationOptions<
  Q extends ObjectTypeDefinition,
  A extends AggregateOpts<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  where?: WhereClause<Q, RDPs>;

  withProperties?: { [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]> };

  intersectWith?: Array<{
    where: WhereClause<Q, RDPs>;
  }>;

  aggregate: A;

  dedupeIntervalMs?: number;

  enabled?: boolean;
}

export interface UseObjectSetAggregationResult<
  Q extends ObjectTypeDefinition,
  A extends AggregateOpts<Q>,
> {
  data: AggregationsResults<Q, A> | undefined;
  isLoading: boolean;
  error: Error | undefined;
  refetch: () => void;
}

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

export function useObjectSetAggregation<
  Q extends ObjectTypeDefinition,
  const A extends AggregateOpts<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  objectSet: ObjectSet<Q>,
  options: UseObjectSetAggregationOptions<Q, A, RDPs>,
): UseObjectSetAggregationResult<Q, A> {
  const {
    where,
    withProperties,
    intersectWith,
    aggregate,
    dedupeIntervalMs,
    enabled = true,
  } = options;

  const { observableClient } = React.useContext(OsdkContext2);

  const type = objectSet.$objectSetInternals.def as Q;

  const canonWhere = observableClient.canonicalizeWhereClause<Q>(where ?? {});

  const stableCanonWhere = React.useMemo(
    () => canonWhere,
    [JSON.stringify(canonWhere)],
  );

  const objectSetRef = React.useRef(objectSet);
  objectSetRef.current = objectSet;

  const objectSetKeyString = computeObjectSetCacheKey(objectSet);

  const stableWithProperties = React.useMemo(
    () => withProperties,
    [JSON.stringify(withProperties)],
  );

  const stableAggregate = React.useMemo(
    () => aggregate,
    [JSON.stringify(aggregate)],
  );

  const stableIntersectWith = React.useMemo(
    () => intersectWith,
    [JSON.stringify(intersectWith)],
  );

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStoreAsync<ObserveAggregationArgs<Q, A>>(
          () => Promise.resolve({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `objectSetAggregation ${type.apiName} ${objectSetKeyString} [DISABLED]`
            : void 0,
        );
      }

      return makeExternalStoreAsync<ObserveAggregationArgs<Q, A>>(
        (observer) =>
          observableClient.observeAggregation(
            {
              type: type,
              objectSet: objectSetRef.current,
              where: stableCanonWhere,
              withProperties: stableWithProperties,
              intersectWith: stableIntersectWith,
              aggregate: stableAggregate,
              dedupeInterval: dedupeIntervalMs ?? 2_000,
            },
            observer,
          ),
        process.env.NODE_ENV !== "production"
          ? `objectSetAggregation ${type.apiName} ${objectSetKeyString} ${
            JSON.stringify(stableCanonWhere)
          }`
          : void 0,
      );
    },
    [
      enabled,
      observableClient,
      type.apiName,
      objectSetKeyString,
      stableCanonWhere,
      stableWithProperties,
      stableIntersectWith,
      stableAggregate,
      dedupeIntervalMs,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const refetch = React.useCallback(async () => {
    await observableClient.invalidateObjectType(type.apiName);
  }, [observableClient, type.apiName]);

  return React.useMemo(() => {
    let error: Error | undefined;
    if (payload && "error" in payload && payload.error) {
      error = payload.error;
    } else if (payload?.status === "error") {
      error = new Error("Failed to execute aggregation");
    }

    return {
      data: payload?.result as AggregationsResults<Q, A> | undefined,
      isLoading: enabled
        ? (payload?.status === "loading" || payload?.status === "init"
          || !payload)
        : false,
      error,
      refetch,
    };
  }, [payload, refetch, enabled]);
}
