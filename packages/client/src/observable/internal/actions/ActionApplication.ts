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

    const { editedObjectTypes, type } = actionEditResponse;

    if (type !== "edits") {
      // largeScaleEdits — server truncated; editedObjectTypes is all we have.
      await Promise.all(
        (editedObjectTypes ?? []).map(apiName =>
          this.store.invalidateObjectType(apiName, undefined)
        ),
      );
      return;
    }

    const {
      addedObjects,
      modifiedObjects,
      deletedObjects,
      addedLinks,
      deletedLinks,
      deletedObjectsCount,
      deletedLinksCount,
    } = actionEditResponse;

    // Tombstone deleted objects first so subscribers never observe a "loading"
    // state for an object we already know is gone.
    this.store.batch({}, (batch) => {
      for (const { objectType, primaryKey } of deletedObjects ?? []) {
        for (
          const cacheKey of this.store.objectCacheKeyRegistry.getVariants(
            objectType,
            primaryKey,
          )
        ) {
          // ?. skips RDP variants that were registered but never observed —
          // nothing to tombstone in that case.
          this.store.queries.peek(cacheKey)?.deleteFromStore("loaded", batch);
        }
      }
    });

    const types = new Set<string>();
    for (const apiName of editedObjectTypes ?? []) {
      types.add(apiName);
    }

    const objectsComplete = (deletedObjectsCount ?? 0)
      <= (deletedObjects?.length ?? 0);
    const linksComplete = (deletedLinksCount ?? 0)
      <= (deletedLinks?.length ?? 0);

    if (objectsComplete) {
      for (const list of [addedObjects, modifiedObjects, deletedObjects]) {
        for (const obj of list ?? []) {
          types.add(obj.objectType);
        }
      }
    }
    if (linksComplete) {
      for (const list of [addedLinks, deletedLinks]) {
        for (const link of list ?? []) {
          types.add(link.aSideObject.objectType);
          types.add(link.bSideObject.objectType);
        }
      }
    }

    await Promise.all(
      [...types].map(apiName =>
        this.store.invalidateObjectType(apiName, undefined)
      ),
    );
  };
}
