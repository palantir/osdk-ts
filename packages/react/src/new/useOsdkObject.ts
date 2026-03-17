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
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseOsdkObjectResult<
  Q extends ObjectOrInterfaceDefinition,
> {
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
 * @param enabled Enable or disable the query (defaults to true)
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  obj: Osdk.Instance<Q>,
  enabled?: boolean,
): UseOsdkObjectResult<Q>;
/**
 * Loads an object or interface instance by type and primary key.
 *
 * @param type The object type or interface definition
 * @param primaryKey The primary key of the object
 * @param enabled Enable or disable the query (defaults to true)
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  enabled?: boolean,
): UseOsdkObjectResult<Q>;
/**
 * Loads an object or interface instance by type and primary key with options.
 *
 * @param type The object type or interface definition
 * @param primaryKey The primary key of the object
 * @param options Options including $select and enabled
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  options?: { $select?: readonly PropertyKeys<Q>[]; enabled?: boolean },
): UseOsdkObjectResult<Q>;
/*
    Implementation of useOsdkObject
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  ...args:
    | [obj: Osdk.Instance<Q>, enabled?: boolean]
    | [type: Q, primaryKey: PrimaryKeyType<Q>, enabled?: boolean]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      options?: { $select?: readonly PropertyKeys<Q>[]; enabled?: boolean },
    ]
): UseOsdkObjectResult<Q> {
  const { observableClient } = React.useContext(OsdkContext2);

  // Check if first arg is an instance to discriminate signatures
  // TypeScript cannot narrow rest parameter unions with optional parameters,
  // so we must use type assertions after runtime discrimination
  const isInstanceSignature = "$objectType" in args[0];

  // Extract options object if provided (3rd arg is an object with $select or enabled)
  const optionsArg = !isInstanceSignature
      && args[2] != null
      && typeof args[2] === "object"
    ? args[2] as { $select?: readonly string[]; enabled?: boolean }
    : undefined;

  // Extract enabled flag - 2nd param for instance signature, 3rd for type signature
  const enabled = isInstanceSignature
    ? (typeof args[1] === "boolean" ? args[1] : true)
    : optionsArg
    ? (optionsArg.enabled ?? true)
    : (typeof args[2] === "boolean" ? args[2] : true);

  const selectArg = optionsArg?.$select;

  const mode = isInstanceSignature ? "offline" : undefined;

  const typeOrApiName = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$objectType
    : (args[0] as Q);

  const primaryKey = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$primaryKey
    : (args[1] as PrimaryKeyType<Q>);

  const apiNameString = typeof typeOrApiName === "string"
    ? typeOrApiName
    : typeOrApiName.apiName;

  const stableSelect = React.useMemo(
    () => selectArg,
    [JSON.stringify(selectArg)],
  );

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectCallbackArgs<Q>>(
          () => ({ unsubscribe: () => {} }),
          `object ${apiNameString} ${primaryKey} [DISABLED]`,
        );
      }
      return makeExternalStore<ObserveObjectCallbackArgs<Q>>(
        (observer) =>
          observableClient.observeObject(
            typeOrApiName,
            primaryKey,
            {
              mode,
              ...(stableSelect ? { select: stableSelect } : {}),
            },
            observer,
          ),
        `object ${apiNameString} ${primaryKey}`,
      );
    },
    [
      enabled,
      observableClient,
      typeOrApiName,
      apiNameString,
      primaryKey,
      mode,
      stableSelect,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const forceUpdate = React.useCallback(() => {
    throw new Error("not implemented");
  }, []);

  return React.useMemo(() => {
    let error: Error | undefined;
    if (payload && "error" in payload && payload.error) {
      error = payload.error;
    } else if (payload?.status === "error") {
      error = new Error("Failed to load object");
    }

    return {
      object: payload?.object,
      isLoading: enabled
        ? (payload?.status === "loading" || payload?.status === "init"
          || !payload)
        : false,
      isOptimistic: !!payload?.isOptimistic,
      error,
      forceUpdate,
    };
  }, [payload, enabled, forceUpdate]);
}
