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

import { delay } from "msw";
import { createChangedObjects } from "./Changes.js";
import { runOptimisticJob } from "./OptimisticJob.js";
const ACTION_DELAY = process.env.NODE_ENV === "production" ? 0 : 1000;
export class ActionApplication {
  constructor(store) {
    this.store = store;
  }
  applyAction = (action, args, {
    optimisticUpdate
  } = {}) => {
    const logger = process.env.NODE_ENV !== "production" ? this.store.logger?.child({
      methodName: "applyAction"
    }) : this.store.logger;
    const removeOptimisticResult = runOptimisticJob(this.store, optimisticUpdate);
    return (async () => {
      try {
        // The types for client get confused when we dynamically applyAction so we
        // have to deal with the `any` here and force cast it to what it should be.
        // TODO: Update the types so this doesn't happen!

        const actionResults = await this.store.client(action).applyAction(args, {
          $returnEdits: true
        });
        if (process.env.NODE_ENV !== "production") {
          if (ACTION_DELAY > 0) {
            logger?.debug("action done, pausing");
            await delay(ACTION_DELAY);
            logger?.debug("action done, pausing done");
          }
        }
        await this.#invalidateActionEditResponse(actionResults);
        return actionResults;
      } finally {
        if (process.env.NODE_ENV !== "production") {
          logger?.debug("optimistic action complete; remove the results");
        }
        // make sure this happens even if the action fails
        await removeOptimisticResult();
      }
    })();
  };
  #invalidateActionEditResponse = async value => {
    const typesToInvalidate = new Set();
    let changes;
    if (value.type === "edits") {
      const promisesToWait = [];
      // TODO we need an backend update for deletes
      for (const obj of value.modifiedObjects) {
        promisesToWait.push(this.store.invalidateObject(obj.objectType, obj.primaryKey));
      }
      for (const obj of value.addedObjects) {
        promisesToWait.push(this.store.invalidateObject(obj.objectType, obj.primaryKey));
        typesToInvalidate.add(obj.objectType);
      }
      await Promise.all(promisesToWait);

      // the action invocation just gives back object ids,
      // but the invalidateObject calls above should have put the
      // actual objects in the cache
      const changes = createChangedObjects();
      for (const changeType of ["addedObjects", "modifiedObjects"]) {
        for (const {
          objectType,
          primaryKey
        } of value[changeType] ?? []) {
          const cacheKey = this.store.getCacheKey("object", objectType, primaryKey);
          // N.B. this probably isn't right. `getValue`() will give you the "top"
          // value but I think we want the "truth" guaranteed.
          const obj = this.store.getValue(cacheKey);
          if (obj && obj.value) {
            changes[changeType].set(objectType, obj.value);
            (changeType === "addedObjects" ? changes.added : changes.modified).add(cacheKey);
          }
        }
      }
    } else {
      for (const apiName of value.editedObjectTypes) {
        typesToInvalidate.add(apiName.toString());
        await this.store.invalidateObjectType(apiName, changes);
      }
    }
    return value;
  };
}
//# sourceMappingURL=ActionApplication.js.map