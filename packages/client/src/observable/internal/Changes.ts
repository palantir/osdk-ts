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

import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { AggregationCacheKey } from "./aggregation/AggregationCacheKey.js";
import type { CacheKey } from "./CacheKey.js";
import { DEBUG_ONLY__cacheKeyToString } from "./CacheKey.js";
import { MultiMap } from "./collections/MultiMap.js";
import type { FunctionCacheKey } from "./function/FunctionCacheKey.js";
import type { SpecificLinkCacheKey } from "./links/SpecificLinkCacheKey.js";
import type { ListCacheKey } from "./list/ListCacheKey.js";
import type { ObjectCacheKey } from "./object/ObjectCacheKey.js";
import type { ObjectSetCacheKey } from "./objectset/ObjectSetCacheKey.js";

export class Changes {
  modifiedObjects: MultiMap<string, ObjectHolder> = new MultiMap();
  addedObjects: MultiMap<string, ObjectHolder> = new MultiMap();

  added: Set<
    | AggregationCacheKey
    | FunctionCacheKey
    | ListCacheKey
    | ObjectCacheKey
    | SpecificLinkCacheKey
    | ObjectSetCacheKey
  > = new Set();
  modified: Set<
    | AggregationCacheKey
    | FunctionCacheKey
    | ListCacheKey
    | ObjectCacheKey
    | SpecificLinkCacheKey
    | ObjectSetCacheKey
  > = new Set();
  deleted: Set<
    | AggregationCacheKey
    | FunctionCacheKey
    | ListCacheKey
    | ObjectCacheKey
    | SpecificLinkCacheKey
    | ObjectSetCacheKey
  > = new Set();

  registerObject = (
    cacheKey: ObjectCacheKey,
    data: ObjectHolder,
    isNew: boolean,
  ): void => {
    this[isNew ? "addedObjects" : "modifiedObjects"].set(
      data.$objectType ?? data.$apiName,
      data,
    );
    this[isNew ? "added" : "modified"].add(cacheKey);
  };

  deleteObject = (cacheKey: ObjectCacheKey): void => {
    this.deleted.add(cacheKey);
  };

  registerList = (key: ListCacheKey): void => {
    this.modified.add(key);
  };

  registerLink = (cacheKey: SpecificLinkCacheKey): void => {
    this.modified.add(cacheKey);
  };

  deleteLink = (cacheKey: SpecificLinkCacheKey): void => {
    this.deleted.add(cacheKey);
  };

  registerObjectSet = (key: ObjectSetCacheKey): void => {
    this.modified.add(key);
  };

  registerFunction = (key: FunctionCacheKey): void => {
    this.modified.add(key);
  };

  isEmpty(): boolean {
    return (
      this.modifiedObjects.size === 0
      && this.addedObjects.size === 0
      && this.added.size === 0
      && this.modified.size === 0
      && this.deleted.size === 0
    );
  }
}

export function createChangedObjects(): Changes {
  return new Changes();
}

export function DEBUG_ONLY__changesToString(changes: Changes): string {
  if (process.env.NODE_ENV !== "production") {
    return JSON.stringify(
      {
        modifiedObjects: multimapHelper(changes.modifiedObjects),
        addedObjects: multimapHelper(changes.addedObjects),
        added: listHelper(changes.added),
        modified: listHelper(changes.modified),
      },
      null,
      2,
    );
  } else {
    throw new Error("not implemented");
  }
}

function listHelper(set: Set<CacheKey>) {
  return Array.from(set).map(DEBUG_ONLY__cacheKeyToString);
}

function multimapHelper(
  multimap: MultiMap<string, ObjectHolder>,
) {
  return Object.fromEntries(
    Array.from(multimap.associations()).map(
      ([type, objects]) => {
        return [type, objects.map(o => o.$primaryKey)];
      },
    ),
  );
}
