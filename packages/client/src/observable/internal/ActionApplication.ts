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

import type { ActionDefinition, ActionEditResponse } from "@osdk/api";
import delay from "delay";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { type Changes, createChangedObjects } from "./Changes.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import { runOptimisticJob } from "./OptimisticJob.js";
import type { Store } from "./Store.js";

const ACTION_DELAY = process.env.NODE_ENV === "production" ? 0 : 1000;

export class ActionApplication {
  constructor(private store: Store) {}

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: Store.ApplyActionOptions,
  ) => Promise<ActionEditResponse> = async (
    action,
    args,
    { optimisticUpdate } = {},
  ) => {
    const logger = process.env.NODE_ENV !== "production"
      ? this.store.logger?.child({ methodName: "applyAction" })
      : this.store.logger;
    const removeOptimisticResult = runOptimisticJob(
      this.store,
      optimisticUpdate,
    );

    return await (async () => {
      try {
        // The types for client get confused when we dynamically applyAction so we
        // have to deal with the `any` here and force cast it to what it should be.
        // TODO: Update the types so this doesn't happen!

        const actionResults: ActionEditResponse = await this.store.client(
          action,
        ).applyAction(args as any, { $returnEdits: true });

        if (process.env.NODE_ENV !== "production") {
          if (ACTION_DELAY > 0) {
            logger?.debug("action done, pausing", actionResults);
            await delay(ACTION_DELAY);
            logger?.debug("action done, pausing done");
          }
        }
        await this.#invalidateActionEditResponse(actionResults);
        return actionResults;
      } finally {
        if (process.env.NODE_ENV !== "production") {
          logger?.debug(
            "optimistic action complete; remove the results",
          );
        }
        // make sure this happens even if the action fails
        await removeOptimisticResult();
      }
    })();
  };

  #invalidateActionEditResponse = async (
    value: ActionEditResponse,
  ): Promise<ActionEditResponse> => {
    const typesToInvalidate = new Set<string>();

    let changes: Changes | undefined;
    if (value.type === "edits") {
      const promisesToWait: Promise<any>[] = [];
      // TODO we need an backend update for deletes
      for (const obj of value.modifiedObjects) {
        promisesToWait.push(
          this.store.invalidateObject(obj.objectType, obj.primaryKey),
        );
      }

      for (const obj of value.addedObjects) {
        promisesToWait.push(
          this.store.invalidateObject(obj.objectType, obj.primaryKey),
        );

        typesToInvalidate.add(obj.objectType);
      }

      await Promise.all(promisesToWait);

      // the action invocation just gives back object ids,
      // but the invalidateObject calls above should have put the
      // actual objects in the cache
      const changes = createChangedObjects();
      for (const changeType of ["addedObjects", "modifiedObjects"] as const) {
        for (const { objectType, primaryKey } of (value[changeType] ?? [])) {
          const cacheKey = this.store.getCacheKey<ObjectCacheKey>(
            "object",
            objectType,
            primaryKey,
          );
          // N.B. this probably isn't right. `getValue`() will give you the "top"
          // value but I think we want the "truth" guaranteed.
          const obj = this.store.getValue(cacheKey);
          if (obj && obj.value) {
            changes[changeType].set(objectType, obj.value);
            (changeType === "addedObjects" ? changes.added : changes.modified)
              .add(cacheKey);
          }
        }
      }
    } else {
      for (const apiName of value.editedObjectTypes) {
        typesToInvalidate.add(apiName.toString());
        await this.store.invalidateObjectType(apiName as string, changes);
      }
    }

    return value;
  };
}
