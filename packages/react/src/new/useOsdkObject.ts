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

import type { ObjectTypeDefinition, Osdk, PrimaryKeyType } from "@osdk/api";
import type { ObserveObjectArgs } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseOsdkObjectResult<Q extends ObjectTypeDefinition> {
  object: Osdk.Instance<Q> | undefined;
  isLoading: boolean;

  error: Error | undefined;

  /**
   * Refers to whether the object is optimistic or not.
   */
  isOptimistic: boolean;
  forceUpdate: () => void;
}

/**
 * @param obj an existing `Osdk.Instance` object to get metadata for.
 */
export function useOsdkObject<Q extends ObjectTypeDefinition>(
  obj: Osdk.Instance<Q>,
): UseOsdkObjectResult<Q>;
/**
 * Loads an object by type and primary key.
 *
 * @param type
 * @param primaryKey
 */
export function useOsdkObject<Q extends ObjectTypeDefinition>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
): UseOsdkObjectResult<Q>;
/*
    Implementation of useOsdkObject
 */
export function useOsdkObject<Q extends ObjectTypeDefinition>(
  ...args: [obj: Osdk.Instance<Q>] | [type: Q, primaryKey: PrimaryKeyType<Q>]
): UseOsdkObjectResult<Q> {
  const { observableClient } = React.useContext(OsdkContext2);

  // TODO: Figure out what the correct default behavior is for the various scenarios
  const mode = args.length === 1 ? "offline" : undefined;
  const objectType = args.length === 1 ? args[0].$objectType : args[0].apiName;
  const primaryKey = args.length === 1 ? args[0].$primaryKey : args[1];

  const { subscribe, getSnapShot } = React.useMemo(
    () =>
      makeExternalStore<ObserveObjectArgs<Q>>(
        (observer) =>
          observableClient.observeObject(
            objectType,
            primaryKey,
            {
              mode,
            },
            observer,
          ),
        `object ${objectType} ${primaryKey}`,
      ),
    [observableClient, objectType, primaryKey, mode],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  return {
    object: payload?.object as Osdk.Instance<Q> | undefined,
    isLoading: payload?.status === "loading",
    isOptimistic: !!payload?.isOptimistic,
    error: payload && "error" in payload ? payload.error : undefined,
    forceUpdate: () => {
      throw "not implemented";
    },
  };
}
