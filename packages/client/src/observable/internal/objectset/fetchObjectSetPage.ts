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
  ObjectSet,
  Osdk,
  PropertyKeys,
} from "@osdk/api";

import { additionalContext } from "../../../Client.js";
import type {
  FetchObjectSetPageOptions,
  ObjectSetPageResult,
} from "../../ObservableClient/PageTypes.js";
import {
  retainCacheKeys,
  storeInstances,
} from "../object/storeInstances.js";
import type { Store } from "../Store.js";

/**
 * Single-page, promise-based read of an object set that participates in the
 * object cache but deliberately creates no collection entry.
 *
 * This exists for callers whose own API contract is a server-cursor-paginated
 * request/response pair (conjure `getTopObjectsInitialPage` /
 * `getTopObjectsNextPage` and friends). Those callers own list membership and
 * cannot express it as a long-lived subscription, so `observeObjectSet` is not
 * usable for them. What they can share is the object cache, so that objects
 * loaded through a page become visible to -- and invalidated alongside --
 * everything observing those same objects.
 *
 * The server's page token is passed through untouched in both directions. No
 * offset arithmetic and no synthesized cursors: replaying a token behaves
 * exactly as replaying it against the server would.
 */
export async function fetchObjectSetPage<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, any> = {},
>(
  store: Store,
  baseObjectSet: ObjectSet<T>,
  options: FetchObjectSetPageOptions<T, RDPs> = {},
): Promise<ObjectSetPageResult<T, RDPs>> {
  const client = store.client[additionalContext];
  if (client.flushEdits != null) {
    await client.flushEdits();
  }

  const composed = composeObjectSet(baseObjectSet, options);

  const resp = await composed.fetchPage({
    $nextPageToken: options.pageToken,
    ...(options.pageSize != null ? { $pageSize: options.pageSize } : {}),
    // Consumers converting back to a wire format generally need the rid, and
    // it is what the object cache keys links against.
    $includeRid: true,
    ...(options.select != null && options.select.length > 0
      ? { $select: options.select }
      : {}),
    ...(options.orderBy != null && Object.keys(options.orderBy).length > 0
      ? { $orderBy: options.orderBy }
      : {}),
    ...(options.$loadPropertySecurityMetadata === true
      ? { $loadPropertySecurityMetadata: true }
      : {}),
  } as any);

  const data = resp.data as Array<
    Osdk.Instance<T, "$allBaseProperties", PropertyKeys<T>, RDPs>
  >;

  const cacheKeys = storeInstances(
    store,
    data as unknown as ReadonlyArray<Osdk.Instance<T, any, any, any>>,
    options,
  );

  return {
    data,
    nextPageToken: resp.nextPageToken ?? undefined,
    totalCount: (resp as { totalCount?: string }).totalCount,
    retain: () => retainCacheKeys(store, cacheKeys),
  };
}

function composeObjectSet<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, any>,
>(
  baseObjectSet: ObjectSet<T>,
  options: FetchObjectSetPageOptions<T, RDPs>,
): ObjectSet<any, any> {
  let result: any = baseObjectSet;

  if (options.withProperties != null) {
    result = result.withProperties(options.withProperties);
  }
  if (options.where != null) {
    result = result.where(options.where);
  }
  if (options.union != null && options.union.length > 0) {
    result = result.union(...options.union);
  }
  if (options.intersect != null && options.intersect.length > 0) {
    result = result.intersect(...options.intersect);
  }
  if (options.subtract != null && options.subtract.length > 0) {
    result = result.subtract(...options.subtract);
  }
  if (options.pivotTo != null) {
    result = result.pivotTo(options.pivotTo);
  }

  return result as ObjectSet<any, any>;
}
