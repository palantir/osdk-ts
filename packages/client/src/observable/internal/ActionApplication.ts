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
import { delay } from "msw";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";

import { type Changes, createChangedObjects } from "./ChangedObjects.js";
import { runOptimisticJob } from "./OptimisticJob.js";
import type { Store } from "./Store.js";

const ACTION_DELAY = process.env.NODE_ENV === "production" ? 0 : 1000;

export class ActionApplication {
  constructor(private store: Store) {}

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: Store.ApplyActionOptions,
  ) => Promise<unknown> = (action, args, { optimisticUpdate } = {}) => {
    const removeOptimisticResult = runOptimisticJob(
      this.store,
      optimisticUpdate,
    );
    return (async () => {
      try {
        // The types for client get confused when we dynamically applyAction so we
        // have to deal with the `any` here and force cast it to what it should be.
        // TODO: Update the types so this doesn't happen!

        const actionResults: ActionEditResponse = await this.store.client(
          action,
        ).applyAction(args as any, { $returnEdits: true });

        if (ACTION_DELAY > 0) {
          // eslint-disable-next-line no-console
          console.log("action done, pausing");
          await delay(ACTION_DELAY);
          // eslint-disable-next-line no-console
          console.log("action done, pausing done");
        }
        await this.#invalidateActionEditResponse(actionResults);
        return actionResults;
      } finally {
        if (process.env.NODE_ENV !== "production") {
          this.store.logger?.debug(
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
      // so we don't want to build the changes object
      // until we have up to date values.
      changes = this.#changesFromActionEditResponse(value);

      // updates `changes` in place
      await this.store.maybeRevalidateLists(changes);
    } else {
      for (const apiName of value.editedObjectTypes) {
        typesToInvalidate.add(apiName.toString());
        await this.store.invalidateObjectType(apiName as string, changes);
      }
    }

    return value;
  };

  #changesFromActionEditResponse = (value: ActionEditResponse) => {
    const changes = createChangedObjects();
    for (const changeType of ["addedObjects", "modifiedObjects"] as const) {
      for (const { objectType, primaryKey } of (value[changeType] ?? [])) {
        const obj = this.store.getObject(objectType, primaryKey);
        if (obj) {
          changes[changeType].set(objectType, obj);
        }
      }
    }
    return changes;
  };
}
