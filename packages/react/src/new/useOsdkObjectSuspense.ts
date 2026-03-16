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
  ObjectOrInterfaceDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
} from "@osdk/api";
import type { ObserveObjectCallbackArgs } from "@osdk/client/unstable-do-not-use";
import React from "react";
import {
  getSuspenseExternalStore,
  throwIfSuspenseNeeded,
} from "./makeSuspenseExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";
import { _createObjectObservation } from "./useOsdkObject.js";

export interface UseOsdkObjectSuspenseResult<
  Q extends ObjectOrInterfaceDefinition,
> {
  object: Osdk.Instance<Q>;
  isOptimistic: boolean;
  forceUpdate: () => void;
}

export function useOsdkObjectSuspense<
  Q extends ObjectOrInterfaceDefinition,
>(
  obj: Osdk.Instance<Q>,
): UseOsdkObjectSuspenseResult<Q>;
export function useOsdkObjectSuspense<
  Q extends ObjectOrInterfaceDefinition,
>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
): UseOsdkObjectSuspenseResult<Q>;
export function useOsdkObjectSuspense<
  Q extends ObjectOrInterfaceDefinition,
>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  options?: { $select?: readonly PropertyKeys<Q>[] },
): UseOsdkObjectSuspenseResult<Q>;
export function useOsdkObjectSuspense<
  Q extends ObjectOrInterfaceDefinition,
>(
  ...args:
    | [obj: Osdk.Instance<Q>]
    | [type: Q, primaryKey: PrimaryKeyType<Q>]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      options?: { $select?: readonly PropertyKeys<Q>[] },
    ]
): UseOsdkObjectSuspenseResult<Q> {
  // Argument discrimination - no hooks, safe before throw
  const isInstanceSignature = "$objectType" in args[0];

  const optionsArg = !isInstanceSignature
      && args.length >= 3
      && args[2] != null
      && typeof args[2] === "object"
    ? args[2] as { $select?: readonly string[] }
    : undefined;

  const selectArg = optionsArg?.$select;
  const mode = isInstanceSignature ? "offline" as const : undefined;

  const typeOrApiName = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$objectType
    : (args[0] as Q);

  const primaryKey = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$primaryKey
    : (args[1] as PrimaryKeyType<Q>);

  const apiNameString = typeof typeOrApiName === "string"
    ? typeOrApiName
    : typeOrApiName.apiName;

  // useContext is safe to call before a potential throw because React
  // preserves context across Suspense retries (context is on the fiber tree,
  // not in hook state)
  const { observableClient } = React.useContext(OsdkContext2);

  const selectKey = selectArg ? JSON.stringify(selectArg) : "";
  const cacheKey = `obj:${apiNameString}:${primaryKey}:${
    mode ?? ""
  }:${selectKey}`;

  // Check Store for already-loaded data (read-only, no side effects)
  const peekResult = observableClient.peekObjectData<Q>(
    typeOrApiName,
    primaryKey,
  );

  // Get or create the cached store (survives Suspense retries)
  const store = getSuspenseExternalStore<ObserveObjectCallbackArgs<Q>>(
    cacheKey,
    _createObjectObservation<Q>(observableClient, typeOrApiName, primaryKey, {
      mode,
      select: selectArg as readonly PropertyKeys<Q>[] | undefined,
    }),
    peekResult,
  );

  // Throw BEFORE hooks - React resets hook state on Suspense retry
  throwIfSuspenseNeeded<ObserveObjectCallbackArgs<Q>>(
    store,
    (p) => p?.object != null,
    store.getSnapShot,
  );

  // If we get here, data is available. Set up subscription for live updates.
  const payload = React.useSyncExternalStore(
    store.subscribe,
    store.getSnapShot,
  );

  const forceUpdate = React.useCallback(() => {
    throw new Error("not implemented");
  }, []);

  return React.useMemo(() => {
    const obj = payload?.object;
    if (obj == null) {
      throw new Error(
        "useOsdkObjectSuspense: object is undefined after Suspense resolved",
      );
    }
    return {
      object: obj as Osdk.Instance<Q>,
      isOptimistic: !!payload?.isOptimistic,
      forceUpdate,
    };
  }, [payload, forceUpdate]);
}
