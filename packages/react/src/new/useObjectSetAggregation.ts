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
import React from "react";
import { extractPayloadError, isPayloadLoading } from "./hookUtils.js";
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

const EMPTY_WHERE = {};

export function useObjectSetAggregation<
  Q extends ObjectTypeDefinition,
  const A extends AggregateOpts<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  objectSet: ObjectSet<Q> | undefined,
  options: UseObjectSetAggregationOptions<Q, A, RDPs>,
): UseObjectSetAggregationResult<Q, A> {
  const {
    where,
    withProperties,
    intersectWith,
    aggregate,
    dedupeIntervalMs,
    enabled: enabledOption = true,
  } = options;

  const enabled = enabledOption && objectSet != null;

  const { observableClient } = React.useContext(OsdkContext2);

  const typeApiName = objectSet?.$objectSetInternals.def.apiName;

  const canonOptions = observableClient.canonicalizeOptions({
    where: where ?? EMPTY_WHERE,
    withProperties,
    aggregate,
    intersectWith,
  });

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled || objectSet == null) {
        return makeExternalStoreAsync<ObserveAggregationArgs<Q, A>>(
          () => Promise.resolve({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `objectSetAggregation ${typeApiName} [DISABLED]`
            : void 0,
        );
      }

      const type = objectSet.$objectSetInternals.def;

      return makeExternalStoreAsync<ObserveAggregationArgs<Q, A>>(
        (observer) =>
          observableClient.observeAggregation(
            {
              type,
              objectSet,
              where: canonOptions.where,
              withProperties: canonOptions.withProperties,
              intersectWith: canonOptions.intersectWith,
              aggregate: canonOptions.aggregate,
              dedupeInterval: dedupeIntervalMs ?? 2_000,
            },
            observer,
          ),
        process.env.NODE_ENV !== "production"
          ? `objectSetAggregation ${type.apiName}`
          : void 0,
      );
    },
    [
      enabled,
      observableClient,
      typeApiName,
      objectSet,
      canonOptions.where,
      canonOptions.withProperties,
      canonOptions.intersectWith,
      canonOptions.aggregate,
      dedupeIntervalMs,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const refetch = React.useCallback(async () => {
    if (typeApiName) {
      await observableClient.invalidateObjectType(typeApiName);
    }
  }, [observableClient, typeApiName]);

  return React.useMemo(() => ({
    data: payload?.result as AggregationsResults<Q, A> | undefined,
    isLoading: isPayloadLoading(payload, enabled),
    error: extractPayloadError(payload, "Failed to execute aggregation"),
    refetch,
  }), [payload, refetch, enabled]);
}
