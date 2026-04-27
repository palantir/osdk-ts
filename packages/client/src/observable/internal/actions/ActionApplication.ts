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
            await new Promise<void>(resolve =>
              setTimeout(resolve, ACTION_DELAY)
            );
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

    const { editedObjectTypes } = actionEditResponse;

    if (actionEditResponse.type !== "edits") {
      await Promise.all(
        editedObjectTypes.map(apiName =>
          this.store.invalidateObjectType(apiName, undefined)
        ),
      );
      return;
    }

    const { addedObjects, modifiedObjects, deletedObjects } =
      actionEditResponse;

    this.store.batch({}, (batch) => {
      for (const { objectType, primaryKey } of deletedObjects ?? []) {
        for (
          const cacheKey of this.store.objectCacheKeyRegistry.getVariants(
            objectType,
            primaryKey,
          )
        ) {
          this.store.queries.peek(cacheKey)?.deleteFromStore("loaded", batch);
        }
      }
    });

    const promises: Array<Promise<unknown>> = [];

    // Per-object refetch picks up the server-confirmed state for added/
    // modified objects. Deleted objects already have a tombstone written
    // above; calling invalidateObject on a deleted object would force a 404
    // fetch and flicker subscribers between loading and error.
    for (const obj of [...(addedObjects ?? []), ...(modifiedObjects ?? [])]) {
      promises.push(
        this.store.invalidateObject(obj.objectType, obj.primaryKey),
      );
    }

    // editedObjectTypes is the union of per-object types and both sides of
    // every link edit (computed by applyAction's remapActionResponse). Link
    // queries don't react to per-object propagation since they're keyed on
    // (srcType, srcPk, linkName), so kick them per touched type.
    for (const apiName of editedObjectTypes) {
      promises.push(this.store.invalidateLinkQueriesForType(apiName));
    }

    await Promise.all(promises);
  };
}
