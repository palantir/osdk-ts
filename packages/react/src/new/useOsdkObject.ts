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

export interface UseOsdkObjectOptions {
  enabled?: boolean;
  includeRid?: boolean;
}

export function useOsdkObject<Q extends ObjectTypeDefinition>(
  obj: Osdk.Instance<Q>,
  enabled?: boolean,
): UseOsdkObjectResult<Q>;
export function useOsdkObject<Q extends ObjectTypeDefinition>(
  obj: Osdk.Instance<Q>,
  options?: UseOsdkObjectOptions,
): UseOsdkObjectResult<Q>;
export function useOsdkObject<Q extends ObjectTypeDefinition>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  enabled?: boolean,
): UseOsdkObjectResult<Q>;
export function useOsdkObject<Q extends ObjectTypeDefinition>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  options?: UseOsdkObjectOptions,
): UseOsdkObjectResult<Q>;
/*
    Implementation of useOsdkObject
 */
export function useOsdkObject<Q extends ObjectTypeDefinition>(
  ...args:
    | [obj: Osdk.Instance<Q>, enabledOrOptions?: boolean | UseOsdkObjectOptions]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      enabledOrOptions?: boolean | UseOsdkObjectOptions,
    ]
): UseOsdkObjectResult<Q> {
  const { observableClient } = React.useContext(OsdkContext2);

  // Check if first arg is an instance to discriminate signatures
  // TypeScript cannot narrow rest parameter unions with optional parameters,
  // so we must use type assertions after runtime discrimination
  const isInstanceSignature = "$objectType" in args[0];

  const rawOptions = isInstanceSignature
    ? (args[1] as boolean | UseOsdkObjectOptions | undefined)
    : (args[2] as boolean | UseOsdkObjectOptions | undefined);

  const options: UseOsdkObjectOptions | undefined = typeof rawOptions
      === "boolean"
    ? { enabled: rawOptions }
    : rawOptions;

  const enabled = options?.enabled ?? true;
  const includeRid = options?.includeRid;

  // TODO: Figure out what the correct default behavior is for the various scenarios
  const mode = isInstanceSignature ? "offline" : undefined;
  const objectType = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$objectType
    : (args[0] as Q).apiName;
  const primaryKey = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$primaryKey
    : (args[1] as PrimaryKeyType<Q>);

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectArgs<Q>>(
          () => ({ unsubscribe: () => {} }),
          `object ${objectType} ${primaryKey} [DISABLED]`,
        );
      }
      return makeExternalStore<ObserveObjectArgs<Q>>(
        (observer) =>
          observableClient.observeObject(
            objectType,
            primaryKey,
            {
              mode,
              includeRid,
            },
            observer,
          ),
        `object ${objectType} ${primaryKey}`,
      );
    },
    [enabled, observableClient, objectType, primaryKey, mode, includeRid],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  let error: Error | undefined;
  if (payload && "error" in payload && payload.error) {
    error = payload.error;
  } else if (payload?.status === "error") {
    error = new Error("Failed to load object");
  }

  return {
    object: payload?.object as Osdk.Instance<Q> | undefined,
    isLoading: payload?.status === "loading",
    isOptimistic: !!payload?.isOptimistic,
    error,
    forceUpdate: () => {
      throw new Error("not implemented");
    },
  };
}
