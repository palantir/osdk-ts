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

import type {
  ActionDefinition,
  ActionEditResponse,
  ActionReturnTypeForOptions,
} from "@osdk/api";
import type { ActionSignatureFromDef } from "../../../actions/applyAction.js";
import { type Changes } from "../Changes.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";
import type { Store } from "../Store.js";
import { runOptimisticJob } from "./OptimisticJob.js";

const ACTION_DELAY = process.env.NODE_ENV === "production" ? 0 : 1000;

export class ActionApplication {
  constructor(private store: Store) {}

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args:
      | Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]
      | Array<Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]>,
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
        if (Array.isArray(args)) {
          if (process.env.NODE_ENV !== "production") {
            logger?.debug("applying action to multiple args", args);
          }

          const results: ActionReturnTypeForOptions<{ $returnEdits: true }> =
            await this.store
              .client(action).batchApplyAction(
                args,
                { $returnEdits: true },
              );

          await this.#invalidateActionEditResponse(results);

          return results;
        }

        // The types for client get confused when we dynamically applyAction so we
        // have to deal with the `any` here and force cast it to what it should be.
        // TODO: Update the types so this doesn't happen!

        const actionResults: ActionEditResponse = await this.store.client(
          action,
        ).applyAction(args as any, { $returnEdits: true });

        if (process.env.NODE_ENV !== "production") {
          if (ACTION_DELAY > 0) {
            logger?.debug("action done, pausing", actionResults);
            const delay = (await import("delay")).default;
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
    actionEditResponse: ActionEditResponse | undefined,
  ): Promise<void> => {
    if (actionEditResponse == null) {
      return;
    }
    const {
      deletedObjects,
      modifiedObjects,
      addedObjects,
      editedObjectTypes,
      type,
    } = actionEditResponse;
    let changes: Changes | undefined;
    if (type === "edits") {
      const promisesToWait: Promise<any>[] = [];

      for (const list of [deletedObjects, modifiedObjects, addedObjects]) {
        for (const obj of list ?? []) {
          promisesToWait.push(
            this.store.invalidateObject(obj.objectType, obj.primaryKey),
          );
        }
      }

      this.store.batch({}, (batch) => {
        for (const { objectType, primaryKey } of deletedObjects ?? []) {
          const cacheKey = this.store.cacheKeys.get<ObjectCacheKey>(
            "object",
            objectType,
            primaryKey,
            /* rdpConfig */ undefined,
          );
          this.store.queries.peek(cacheKey)?.deleteFromStore(
            "loaded", // this is probably not the best value to use
            batch,
          );
        }
      });
      await Promise.all(promisesToWait);
    } else {
      for (const apiName of editedObjectTypes) {
        await this.store.invalidateObjectType(apiName as string, changes);
      }
    }
  };
}
