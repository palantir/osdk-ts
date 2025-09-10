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

import type { ObjectCacheKey } from "./ObjectCacheKey.js";
import type { BatchContext } from "./Store.js";

/**
 * Removes duplicate object cache keys from an array while maintaining order.
 * Also reads each key from the batch context (for side effects).
 *
 * @param objectCacheKeys Array of object cache keys that may contain duplicates
 * @param batch The batch context used to read cache entries
 * @returns Array with duplicates removed, maintaining the original order
 */
export function removeDuplicates(
  objectCacheKeys: ObjectCacheKey[],
  batch: BatchContext,
): ObjectCacheKey[] {
  const visited = new Set<ObjectCacheKey>();
  return objectCacheKeys.filter((key) => {
    batch.read(key);
    if (visited.has(key)) {
      return false;
    }
    visited.add(key);
    return true;
  });
}
