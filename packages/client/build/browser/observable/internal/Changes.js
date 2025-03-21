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

import { MultiMap } from "mnemonist";
import { DEBUG_ONLY__cacheKeyToString } from "./CacheKey.js";
export class Changes {
  modifiedObjects = new MultiMap();
  addedObjects = new MultiMap();
  added = new Set();
  modified = new Set();
  registerObject = (cacheKey, data, isNew) => {
    this[isNew ? "addedObjects" : "modifiedObjects"].set(data.$apiName, data);
    this[isNew ? "added" : "modified"].add(cacheKey);
  };
  registerList = key => {
    this.modified.add(key);
  };
  isEmpty() {
    return this.modifiedObjects.size === 0 && this.addedObjects.size === 0 && this.added.size === 0 && this.modified.size === 0;
  }
}
export function createChangedObjects() {
  return new Changes();
}
export function DEBUG_ONLY__changesToString(changes) {
  if (process.env.NODE_ENV !== "production") {
    return JSON.stringify({
      modifiedObjects: multimapHelper(changes.modifiedObjects),
      addedObjects: multimapHelper(changes.addedObjects),
      added: listHelper(changes.added),
      modified: listHelper(changes.modified)
    }, null, 2);
  } else {
    throw new Error("not implemented");
  }
}
function listHelper(set) {
  return Array.from(set).map(DEBUG_ONLY__cacheKeyToString);
}
function multimapHelper(multimap) {
  return Object.fromEntries(Array.from(multimap.associations()).map(([type, objects]) => {
    return [type, objects.map(o => o.$primaryKey)];
  }));
}
//# sourceMappingURL=Changes.js.map