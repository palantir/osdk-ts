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
import type {
  ObservableClient,
  ObserveObjectCallbackArgs,
  Observer,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { extractPayloadError, makeExternalStore } from "./makeExternalStore.js";
import {
  getClientId,
  isSuspenseOption,
  setupSuspenseStore,
} from "./makeSuspenseExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";
import { parseObjectArgs } from "./parseObjectArgs.js";

/** @internal */
export function _createObjectObservation<
  Q extends ObjectOrInterfaceDefinition,
>(
  observableClient: ObservableClient,
  typeOrApiName: Q["apiName"] | Q,
  primaryKey: PrimaryKeyType<Q>,
  options: { mode?: "offline" | "force"; select?: readonly PropertyKeys<Q>[] },
): (
  observer: Observer<ObserveObjectCallbackArgs<Q> | undefined>,
) => Unsubscribable {
  return (observer) =>
    observableClient.observeObject(
      typeOrApiName,
      primaryKey,
      {
        mode: options.mode,
        ...(options.select ? { select: options.select } : {}),
      },
      observer,
    );
}

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

export interface UseOsdkObjectSuspenseResult<
  Q extends ObjectOrInterfaceDefinition,
> {
  object: Osdk.Instance<Q>;
  isOptimistic: boolean;
}

/**
 * Loads an object or interface instance with Suspense support.
 *
 * @param obj an existing `Osdk.Instance` object to get metadata for.
 * @param options Options with `suspense: true` to enable Suspense mode
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  obj: Osdk.Instance<Q>,
  options: { suspense: true },
): UseOsdkObjectSuspenseResult<Q>;
/**
 * Loads an object or interface instance by type and primary key with Suspense support.
 *
 * @param type The object type or interface definition
 * @param primaryKey The primary key of the object
 * @param options Options including $select and `suspense: true`
 */
export function useOsdkObject<
  Q extends ObjectOrInterfaceDefinition,
>(
  type: Q,
  primaryKey: PrimaryKeyType<Q>,
  options: { $select?: readonly PropertyKeys<Q>[]; suspense: true },
): UseOsdkObjectSuspenseResult<Q>;
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
    | [obj: Osdk.Instance<Q>, options: { suspense: true }]
    | [type: Q, primaryKey: PrimaryKeyType<Q>, enabled?: boolean]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      options?: { $select?: readonly PropertyKeys<Q>[]; enabled?: boolean },
    ]
    | [
      type: Q,
      primaryKey: PrimaryKeyType<Q>,
      options: { $select?: readonly PropertyKeys<Q>[]; suspense: true },
    ]
): UseOsdkObjectResult<Q> | UseOsdkObjectSuspenseResult<Q> {
  const { observableClient } = React.useContext(OsdkContext2);

  const { typeOrApiName, primaryKey, mode, selectArg, apiNameString } =
    parseObjectArgs<Q>(args);

  const isInstanceSignature = "$objectType" in args[0];

  const isSuspense = isInstanceSignature
    ? isSuspenseOption(args[1])
    : isSuspenseOption(args[2]);

  const optionsArg = !isInstanceSignature
      && args[2] != null
      && typeof args[2] === "object"
    ? args[2] as { enabled?: boolean }
    : undefined;
  const enabled = isSuspense
    ? true
    : isInstanceSignature
    ? (typeof args[1] === "boolean" ? args[1] : true)
    : optionsArg
    ? (optionsArg.enabled ?? true)
    : (typeof args[2] === "boolean" ? args[2] : true);

  const stableSelect = React.useMemo(
    () => selectArg,
    [JSON.stringify(selectArg)],
  );

  const observationFactory = React.useMemo(
    () =>
      _createObjectObservation<Q>(
        observableClient,
        typeOrApiName,
        primaryKey,
        { mode, select: stableSelect },
      ),
    [observableClient, typeOrApiName, primaryKey, mode, stableSelect],
  );

  const baseStore = React.useMemo(
    () => {
      if (isSuspense || !enabled) {
        return makeExternalStore<ObserveObjectCallbackArgs<Q>>(
          () => ({ unsubscribe: () => {} }),
          `object ${apiNameString} ${primaryKey} [INACTIVE]`,
        );
      }
      return makeExternalStore<ObserveObjectCallbackArgs<Q>>(
        observationFactory,
        `object ${apiNameString} ${primaryKey}`,
      );
    },
    [
      isSuspense,
      enabled,
      observationFactory,
      apiNameString,
      primaryKey,
    ],
  );

  let { subscribe, getSnapShot } = baseStore;
  if (isSuspense) {
    const selectKey = stableSelect ? JSON.stringify(stableSelect) : "";
    const cacheKey = `${
      getClientId(observableClient)
    }:obj:${apiNameString}:${primaryKey}:${mode ?? ""}:${selectKey}`;
    ({ subscribe, getSnapShot } = setupSuspenseStore<
      ObserveObjectCallbackArgs<Q>
    >(
      cacheKey,
      observationFactory,
      observableClient.peekObjectData<Q>(typeOrApiName, primaryKey),
      (p) => p?.object != null,
    ));
  }

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const forceUpdate = React.useCallback(() => {
    throw new Error("not implemented");
  }, []);

  return React.useMemo(() => {
    if (isSuspense) {
      const obj = payload?.object;
      if (obj == null) {
        throw new Error(
          "useOsdkObject: object is undefined after Suspense resolved",
        );
      }
      return {
        object: obj as Osdk.Instance<Q>,
        isOptimistic: !!payload?.isOptimistic,
      };
    }

    return {
      object: payload?.object as Osdk.Instance<Q> | undefined,
      isLoading: enabled
        ? (payload?.status === "loading" || payload?.status === "init"
          || !payload)
        : false,
      isOptimistic: !!payload?.isOptimistic,
      error: extractPayloadError(payload, "Failed to load object"),
      forceUpdate,
    };
  }, [payload, enabled, forceUpdate, isSuspense]);
}
