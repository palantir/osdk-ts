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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import type { ObjectPayload } from "@osdk/client";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext } from "./OsdkContext.js";

export namespace useOsdkObject {
  export interface Result<Q extends ObjectTypeDefinition> {
    object: Osdk.Instance<Q> | undefined;
    isLoading: boolean;

    /**
     * Refers to whether the object is optimistic or not.
     */
    isOptimistic: boolean;
    forceUpdate: () => void;
  }
}

export function useOsdkObject<Q extends ObjectTypeDefinition>(
  obj: Osdk.Instance<Q>,
): useOsdkObject.Result<Q> {
  const { store } = React.useContext(OsdkContext);

  const { subscribe, getSnapShot } = React.useMemo(
    () =>
      makeExternalStore<ObjectPayload>((payload) =>
        store.observeObject(
          obj.$objectType,
          obj.$primaryKey,
          {
            mode: "offline",
          },
          payload,
        ), `object ${obj.$objectType} ${obj.$primaryKey}`),
    [store, obj.$objectType, obj.$apiName],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  return {
    object: payload?.object as Osdk.Instance<Q> | undefined,
    isLoading: payload?.status === "loading",
    isOptimistic: payload?.isOptimistic ?? false,
    forceUpdate: () => {
      throw "not implemented";
    },
  };
}
