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

import type {
  ObjectOrInterfaceDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
} from "@osdk/api";

import type {
  GetObjectsOptions,
  GetObjectsResult,
} from "../../ObservableClient/PageTypes.js";
import { getBulkObjectLoader } from "../BulkObjectLoader.js";
import { retainCacheKeys, storeInstances } from "./storeInstances.js";
import type { Store } from "../Store.js";
import type { ObjectCacheKey } from "./ObjectCacheKey.js";

/**
 * Promise-based, cache-first bulk read by primary key.
 *
 * Cached objects are returned without a request; misses are fetched through
 * `BulkObjectLoader`, so concurrent calls coalesce into batched requests, and
 * the results are written into the object cache.
 *
 * Objects that do not exist resolve to `undefined` in the corresponding slot
 * rather than rejecting the whole call -- callers loading by rid routinely
 * tolerate absent objects and report them individually.
 */
export async function getObjectsByPrimaryKey<
  T extends ObjectOrInterfaceDefinition,
>(
  store: Store,
  apiName: T["apiName"] | T,
  primaryKeys: ReadonlyArray<PrimaryKeyType<T>>,
  options: GetObjectsOptions<T> = {},
): Promise<GetObjectsResult<T>> {
  const resolvedApiName =
    typeof apiName === "string" ? apiName : apiName.apiName;
  const defType =
    typeof apiName === "string"
      ? "object"
      : apiName.type === "interface"
        ? "interface"
        : "object";

  const cached = new Map<PrimaryKeyType<T>, Osdk.Instance<T, any, any, any>>();
  const misses: Array<PrimaryKeyType<T>> = [];

  for (const pk of primaryKeys) {
    const hit = peekObject<T>(store, resolvedApiName, pk, options);
    if (hit != null) {
      cached.set(pk, hit);
    } else {
      misses.push(pk);
    }
  }

  const loader = getBulkObjectLoader(store.client);
  const fetched = await Promise.all(
    misses.map(async (pk) => {
      try {
        const object = await loader.fetch(
          resolvedApiName,
          pk as string | number | boolean,
          defType,
          options.select as readonly string[] | undefined,
          options.$loadPropertySecurityMetadata,
          options.$includeAllBaseObjectProperties,
        );
        return { pk, object };
      } catch {
        return { pk, object: undefined };
      }
    }),
  );

  const newlyFetched = fetched
    .map((x) => x.object)
    .filter((x): x is NonNullable<typeof x> => x != null);

  const cacheKeys = storeInstances(
    store,
    newlyFetched as unknown as Array<Osdk.Instance<T, any, any, any>>,
    options,
  );

  const fetchedByPk = new Map(fetched.map((x) => [x.pk, x.object]));

  return {
    data: primaryKeys.map(
      (pk) =>
        cached.get(pk) ??
        (fetchedByPk.get(pk) as Osdk.Instance<T, any, any, any> | undefined),
    ),
    retain: () => retainCacheKeys(store, cacheKeys),
  };
}

/**
 * Synchronous cache read. Does not create a query, register a reference, or
 * trigger a fetch.
 */
export function peekObject<T extends ObjectOrInterfaceDefinition>(
  store: Store,
  apiName: string,
  pk: PrimaryKeyType<T>,
  options: GetObjectsOptions<T> = {},
): Osdk.Instance<T, any, any, any> | undefined {
  const canonSelect =
    options.select != null && options.select.length > 0
      ? store.selectCanonicalizer.canonicalize(
          options.select as readonly string[],
        )
      : undefined;

  const cacheKey = store.cacheKeys.peek<ObjectCacheKey>(
    "object",
    apiName,
    pk as PrimaryKeyType<any>,
    undefined,
    canonSelect,
    options.$loadPropertySecurityMetadata === true ? true : undefined,
    options.$includeAllBaseObjectProperties === true ? true : undefined,
  );

  if (cacheKey == null) {
    return undefined;
  }

  const entry = store.layers.top.get(cacheKey);
  if (entry?.status !== "loaded" || entry.value == null) {
    return undefined;
  }

  return entry.value as unknown as Osdk.Instance<T, any, any, any>;
}
