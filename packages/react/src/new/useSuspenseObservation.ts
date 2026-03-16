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
  Observer,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import type { Snapshot } from "./makeExternalStore.js";
import {
  getSuspenseExternalStore,
  throwIfSuspenseNeeded,
} from "./makeSuspenseExternalStore.js";

export function useSuspenseObservation<X>(
  cacheKey: string,
  createObservation: (callback: Observer<X | undefined>) => Unsubscribable,
  peekResult: Snapshot<X>,
  hasData: (p: Snapshot<X>) => boolean,
): Snapshot<X> {
  const store = getSuspenseExternalStore<X>(
    cacheKey,
    createObservation,
    peekResult,
  );
  throwIfSuspenseNeeded<X>(store, hasData, store.getSnapShot);
  return React.useSyncExternalStore(store.subscribe, store.getSnapShot);
}
