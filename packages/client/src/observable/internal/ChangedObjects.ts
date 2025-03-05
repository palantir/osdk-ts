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
import { MultiMap } from "mnemonist";
import { DEBUG_ONLY__cacheKeyToString } from "./CacheKey.js";
import type { ListCacheKey } from "./ListQuery.js";

export interface Changes {
  modifiedObjects: MultiMap<string, Osdk.Instance<ObjectTypeDefinition>>;
  addedObjects: MultiMap<string, Osdk.Instance<ObjectTypeDefinition>>;
  addedLists: Set<ListCacheKey>;
  modifiedLists: Set<ListCacheKey>;
}

export function createChangedObjects(): Changes {
  return {
    modifiedObjects: new MultiMap<
      string,
      Osdk.Instance<ObjectTypeDefinition>
    >(),
    addedObjects: new MultiMap<string, Osdk.Instance<ObjectTypeDefinition>>(),
    addedLists: new Set<ListCacheKey>(),
    modifiedLists: new Set<ListCacheKey>(),
  };
}

export function DEBUG_ONLY__changesToString(changes: Changes): string {
  if (process.env.NODE_ENV !== "production") {
    return JSON.stringify(
      {
        modifiedObjects: multimapHelper(changes.modifiedObjects),
        addedObjects: multimapHelper(changes.addedObjects),
        addedLists: listHelper(changes.addedLists),
        modifiedLists: listHelper(changes.modifiedLists),
      },
      null,
      2,
    );
  } else {
    throw new Error("not implemented");
  }
}

function listHelper(set: Set<ListCacheKey>) {
  return Array.from(set).map(DEBUG_ONLY__cacheKeyToString);
}

function multimapHelper(
  multimap: MultiMap<string, Osdk.Instance<ObjectTypeDefinition>>,
) {
  return Object.fromEntries(
    Array.from(multimap.associations()).map(
      ([type, objects]) => {
        return [type, objects.map(o => o.$primaryKey)];
      },
    ),
  );
}
