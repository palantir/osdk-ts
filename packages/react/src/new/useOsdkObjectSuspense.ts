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
import { OsdkContext2 } from "./OsdkContext2.js";
import { parseObjectArgs } from "./parseObjectArgs.js";
import { _createObjectObservation } from "./useOsdkObject.js";
import { useSuspenseObservation } from "./useSuspenseObservation.js";

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
  const { typeOrApiName, primaryKey, mode, selectArg, apiNameString } =
    parseObjectArgs<Q>(args);

  const { observableClient } = React.useContext(OsdkContext2);

  const selectKey = selectArg ? JSON.stringify(selectArg) : "";
  const cacheKey = `obj:${apiNameString}:${primaryKey}:${
    mode ?? ""
  }:${selectKey}`;

  const peekResult = observableClient.peekObjectData<Q>(
    typeOrApiName,
    primaryKey,
  );

  const payload = useSuspenseObservation<ObserveObjectCallbackArgs<Q>>(
    cacheKey,
    _createObjectObservation<Q>(observableClient, typeOrApiName, primaryKey, {
      mode,
      select: selectArg,
    }),
    peekResult,
    (p) => p?.object != null,
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
