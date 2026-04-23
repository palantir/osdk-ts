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

import type { Changes } from "./Changes.js";
import { API_NAME_IDX } from "./object/ObjectCacheKey.js";

/**
 * Checks if a Changes object contains any added, modified, or deleted
 * objects of the given type. Used by Store, ListQuery, and ObjectSetQuery
 * to determine whether changes are relevant to a query.
 */
export function changesAffectObjectType(
  changes: Changes,
  objectType: string,
): boolean {
  const added = changes.addedObjects.get(objectType);
  if (added && added.length > 0) {
    return true;
  }

  const modified = changes.modifiedObjects.get(objectType);
  if (modified && modified.length > 0) {
    return true;
  }

  for (const key of changes.deleted) {
    if (
      key.type === "object"
      && key.otherKeys[API_NAME_IDX] === objectType
    ) {
      return true;
    }
  }

  return false;
}
