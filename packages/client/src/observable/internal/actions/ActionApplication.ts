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
import type { ActionSignatureFromDef } from "../../../actions/applyAction.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { isObjectHolder } from "../isObjectHolder.js";
import { API_NAME_IDX } from "../list/ListCacheKey.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";
import type { Store } from "../Store.js";
import { computePropertyDiff } from "./computePropertyDiff.js";
import { runOptimisticJob } from "./OptimisticJob.js";

const ACTION_DELAY = process.env.NODE_ENV === "production" ? 0 : 1000;

/**
 * Per-type edited-property tracking. `undefined` value means "conservative —
 * invalidate any query that depends on this type regardless of which
 * properties it cares about."
 */
type EditedPropertiesByType = Map<string, Set<string> | undefined>;

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

    let actionResults: ActionEditResponse;
    try {
      if (Array.isArray(args)) {
        if (process.env.NODE_ENV !== "production") {
          logger?.debug("applying action to multiple args", args);
        }

        actionResults = await this.store.client(action).batchApplyAction(
          args,
          { $returnEdits: true },
        );
      } else {
        // The types for client get confused when we dynamically applyAction so we
        // have to deal with the `any` here and force cast it to what it should be.
        // TODO: Update the types so this doesn't happen!
        actionResults = await this.store.client(action).applyAction(
          args as any,
          { $returnEdits: true },
        );

        if (process.env.NODE_ENV !== "production") {
          if (ACTION_DELAY > 0) {
            logger?.debug("action done, pausing", actionResults);
            await new Promise<void>(resolve =>
              setTimeout(resolve, ACTION_DELAY)
            );
            logger?.debug("action done, pausing done");
          }
        }
      }

      const editedPropertiesByType = await this.#invalidatePerObjectEdits(
        actionResults,
      );
      // Awaited so the cache is consistent before applyAction resolves; the
      // per-property skip in the dispatch loop keeps the fan-out cheap.
      await this.#invalidatePerTypeEdits(actionResults, editedPropertiesByType);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        logger?.debug(
          "optimistic action complete; remove the results",
        );
      }
      // make sure this happens even if the action fails
      await removeOptimisticResult();
    }

    return actionResults;
  };

  #invalidatePerObjectEdits = async (
    actionEditResponse: ActionEditResponse | undefined,
  ): Promise<EditedPropertiesByType> => {
    const editedPropertiesByType: EditedPropertiesByType = new Map();
    if (actionEditResponse == null || actionEditResponse.type !== "edits") {
      return editedPropertiesByType;
    }
    const { deletedObjects, modifiedObjects, addedObjects } =
      actionEditResponse;

    // Snapshot truth-layer values BEFORE the per-PK refetches land. We hold
    // onto the variants too so the post-refetch diff doesn't need a second
    // registry lookup.
    const modifiedSnapshots: Array<{
      apiName: string;
      variant: ObjectCacheKey;
      oldValue: ObjectHolder | undefined;
    }> = [];
    for (const obj of modifiedObjects ?? []) {
      for (
        const variant of this.store.objectCacheKeyRegistry.getVariants(
          obj.objectType,
          obj.primaryKey,
        )
      ) {
        modifiedSnapshots.push({
          apiName: obj.objectType,
          variant,
          oldValue: this.#readTruthHolder(variant),
        });
      }
    }

    const promisesToWait: Promise<unknown>[] = [];
    for (const list of [deletedObjects, modifiedObjects, addedObjects]) {
      for (const obj of list ?? []) {
        promisesToWait.push(
          this.store.invalidateObject(obj.objectType, obj.primaryKey),
        );
      }
    }

    // Use the registry to find all RDP variant cache keys for each deleted object.
    this.store.batch({}, (batch) => {
      for (const { objectType, primaryKey } of deletedObjects ?? []) {
        for (
          const cacheKey of this.store.objectCacheKeyRegistry.getVariants(
            objectType,
            primaryKey,
          )
        ) {
          this.store.queries.peek(cacheKey)?.deleteFromStore(
            "loaded", // this is probably not the best value to use
            batch,
          );
        }
      }
    });
    await Promise.all(promisesToWait);

    // Adds/deletes shift counts and list membership; we have no diff for
    // them, so they're always conservative.
    for (const obj of addedObjects ?? []) {
      editedPropertiesByType.set(obj.objectType, undefined);
    }
    for (const obj of deletedObjects ?? []) {
      editedPropertiesByType.set(obj.objectType, undefined);
    }

    for (const { apiName, variant, oldValue } of modifiedSnapshots) {
      const newValue = this.#readTruthHolder(variant);

      if (!oldValue || !newValue) {
        editedPropertiesByType.set(apiName, undefined);
        continue;
      }

      mergeEditedProperties(
        editedPropertiesByType,
        apiName,
        computePropertyDiff(oldValue, newValue),
      );
    }

    return editedPropertiesByType;
  };

  #readTruthHolder = (key: ObjectCacheKey): ObjectHolder | undefined => {
    const value = this.store.layers.truth.get(key)?.value;
    return isObjectHolder(value) ? value : undefined;
  };

  #invalidatePerTypeEdits = async (
    actionEditResponse: ActionEditResponse | undefined,
    editedPropertiesByType: EditedPropertiesByType,
  ): Promise<void> => {
    if (actionEditResponse == null) {
      return;
    }

    const isEditsBranch = actionEditResponse.type === "edits";
    const editedObjectTypeSet = new Set<string>();
    if (isEditsBranch) {
      const { deletedObjects, modifiedObjects, addedObjects } =
        actionEditResponse;
      for (const list of [deletedObjects, modifiedObjects, addedObjects]) {
        for (const obj of list ?? []) {
          editedObjectTypeSet.add(obj.objectType);
        }
      }
    } else {
      for (const apiName of actionEditResponse.editedObjectTypes) {
        editedObjectTypeSet.add(apiName as string);
      }
    }

    if (editedObjectTypeSet.size === 0) {
      return;
    }

    // largeScaleEdits don't carry per-property info, so they're always
    // conservative (undefined). For the edits branch we read the precomputed
    // diff out of editedPropertiesByType.
    const editedPropertiesFor = (apiName: string): Set<string> | undefined =>
      isEditsBranch ? editedPropertiesByType.get(apiName) : undefined;

    // Each query is touched on at most one path: ObjectQueries via the
    // per-PK pass, primary-type lists via Subject reactions from that
    // refetch, everything else (RDP-traversed lists, FunctionQueries with
    // dependsOn, aggregations) via this walk.
    const promises: Promise<unknown>[] = [];
    for (const cacheKey of this.store.queries.keys()) {
      if (isEditsBranch && cacheKey.type === "object") {
        continue;
      }
      const query = this.store.queries.peek(cacheKey);
      if (!query) {
        continue;
      }
      for (const apiName of editedObjectTypeSet) {
        if (
          isEditsBranch
          && cacheKey.type === "list"
          && cacheKey.otherKeys[API_NAME_IDX] === apiName
        ) {
          continue;
        }
        promises.push(
          query.invalidateObjectType(
            apiName,
            undefined,
            editedPropertiesFor(apiName),
          ),
        );
      }
    }
    await Promise.allSettled(promises);
  };
}

function mergeEditedProperties(
  map: EditedPropertiesByType,
  apiName: string,
  properties: ReadonlySet<string>,
): void {
  const existing = map.get(apiName);
  if (existing !== undefined) {
    for (const p of properties) {
      existing.add(p);
    }
    return;
  }
  // `undefined` is the conservative sentinel — distinct from "missing".
  // Once set, adding specifics can't shrink it.
  if (map.has(apiName)) {
    return;
  }
  map.set(apiName, new Set(properties));
}
