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

import pDefer from "p-defer";

import { PIVOT_IDX, TYPE_IDX } from "./list/ListCacheKey.js";
import type { ListQuery } from "./list/ListQuery.js";
import type { ObjectCacheKey } from "./object/ObjectCacheKey.js";

const LIST_REFRESH_WAIT_MS = 250;

interface ListRefresh {
  query: ListQuery;
  previousFetch: WeakSet<ObjectCacheKey>;
  completed: Promise<void>;
}

export class ListRefreshCoordinator {
  #memberships = new Map<ObjectCacheKey, ListRefresh[]>();

  start(query: ListQuery, revalidate: () => Promise<void>): Promise<void> {
    if (
      query.cacheKey.otherKeys[TYPE_IDX] !== "object" ||
      query.cacheKey.otherKeys[PIVOT_IDX] != null ||
      query.selectFieldSet != null ||
      query.options.$loadPropertySecurityMetadata
    ) {
      return revalidate();
    }

    const members =
      query.store.layers.truth.get(query.cacheKey)?.value?.data ?? [];
    const previousFetch = query.fetchedObjects;
    const pending = revalidate();
    const refresh: ListRefresh = {
      query,
      previousFetch,
      completed: pending
        .then(() => {
          if (query.fetchedObjects !== previousFetch) {
            return query.waitForPendingPages();
          }
        })
        .catch(() => {}),
    };
    for (const key of members) {
      const memberships = this.#memberships.get(key);
      if (memberships) {
        memberships.push(refresh);
      } else {
        this.#memberships.set(key, [refresh]);
      }
    }
    return pending;
  }

  waitForObject(key: ObjectCacheKey): Promise<boolean> | undefined {
    const memberships = this.#memberships.get(key);
    if (!memberships) {
      return undefined;
    }

    const wasRefreshed = () =>
      memberships.some(
        ({ query, previousFetch }) =>
          query.fetchedObjects !== previousFetch &&
          query.fetchedObjects.has(key),
      );

    const result = pDefer<boolean>();
    let remaining = memberships.length;
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      result.resolve(wasRefreshed());
    };
    const timer = setTimeout(finish, LIST_REFRESH_WAIT_MS);
    for (const { completed } of memberships) {
      void completed.then(() => {
        remaining--;
        if (wasRefreshed() || remaining === 0) {
          finish();
        }
      });
    }
    return result.promise;
  }
}
