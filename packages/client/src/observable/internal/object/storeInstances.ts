/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectOrInterfaceDefinition, Osdk } from "@osdk/api";

import type {
  RetainHandle,
  StoreObjectsOptions,
} from "../../ObservableClient/PageTypes.js";
import type { Store } from "../Store.js";
import type { ObjectCacheKey } from "./ObjectCacheKey.js";

/**
 * Writes instances the caller already holds into the object cache without
 * fetching anything. For callers that keep their own transport but still want
 * one shared object store.
 */
export function storeInstances<T extends ObjectOrInterfaceDefinition>(
  store: Store,
  instances: ReadonlyArray<Osdk.Instance<T, any, any, any>>,
  options: StoreObjectsOptions<any> = {},
): ObjectCacheKey[] {
  if (instances.length === 0) {
    return [];
  }

  // A partially selected object must not be written under the all-properties
  // key, or readers of that key get an object with silently missing values.
  const selectFieldSet = options.select != null && options.select.length > 0
    ? new Set<string>(options.select as readonly string[])
    : undefined;

  const rdpConfig = options.withProperties != null
    ? store.rdpCanonicalizer.canonicalize(options.withProperties as any)
    : undefined;

  const { retVal } = store.batch({}, (batch) => {
    return store.objects.storeOsdkInstances(
      instances as Array<Osdk.Instance<any, any, any>>,
      batch,
      rdpConfig,
      selectFieldSet,
      options.$includeAllBaseObjectProperties === true ? true : undefined,
    );
  });

  return retVal;
}

/**
 * Pins cache entries so they survive without a subscription. Entries written
 * by `storeInstances` start at a zero reference count and would otherwise be
 * collected once the keep-alive window elapses.
 */
export function retainCacheKeys(
  store: Store,
  keys: ReadonlyArray<ObjectCacheKey>,
): RetainHandle {
  for (const key of keys) {
    store.cacheKeys.retain(key);
  }

  let released = false;
  return {
    release: () => {
      if (released) {
        return;
      }
      released = true;
      for (const key of keys) {
        store.cacheKeys.release(key);
      }
    },
  };
}
