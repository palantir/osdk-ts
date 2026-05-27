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
import { API_NAME_IDX } from "../list/ListCacheKey.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";
import type { Store } from "../Store.js";
import { computePropertyDiff } from "./computePropertyDiff.js";
import { runOptimisticJob } from "./OptimisticJob.js";

const ACTION_DELAY = process.env.NODE_ENV === "production" ? 0 : 1000;

/**
 * Per-type edited-property tracking. `undefined` value means "conservative —
 * invalidate any query that depends on this type regardless of which
 * properties it cares about." A `Set` lists exactly which properties were
 * observed to change; queries with disjoint property dependencies can skip.
 */
type EditedPropertiesByType = Map<string, ReadonlySet<string> | undefined>;

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
      // Per-type invalidation fans out only to queries whose property
      // dependencies overlap with what actually changed; for the common
      // FilterList case that means most aggregations skip their server
      // round-trip entirely. We await the pass so the cache is consistent
      // by the time the action promise resolves.
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

    // Snapshot truth-layer values for every variant of each modified object
    // BEFORE the per-PK refetches land. We compare these against the post-
    // refetch values to compute which properties actually changed, so the
    // per-type pass can skip queries that don't depend on those properties.
    const oldValueByVariant = new Map<
      ObjectCacheKey,
      ObjectHolder | undefined
    >();
    for (const obj of modifiedObjects ?? []) {
      for (
        const variant of this.store.objectCacheKeyRegistry.getVariants(
          obj.objectType,
          obj.primaryKey,
        )
      ) {
        const entry = this.store.layers.truth.get(variant);
        const value = entry?.value;
        oldValueByVariant.set(
          variant,
          isObjectHolder(value) ? value : undefined,
        );
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

    // Added/deleted objects shift counts and list membership for any query
    // on that type; we don't have a meaningful property diff for them, so
    // mark the type as conservative.
    for (const obj of addedObjects ?? []) {
      markConservative(editedPropertiesByType, obj.objectType);
    }
    for (const obj of deletedObjects ?? []) {
      markConservative(editedPropertiesByType, obj.objectType);
    }

    // Diff modified objects: every variant we snapshotted gets compared
    // against its post-refetch truth-layer value. If either snapshot is
    // missing (uncached, or refetch didn't land an ObjectHolder), fall back
    // to conservative for that type.
    for (const obj of modifiedObjects ?? []) {
      for (
        const variant of this.store.objectCacheKeyRegistry.getVariants(
          obj.objectType,
          obj.primaryKey,
        )
      ) {
        const oldValue = oldValueByVariant.get(variant);
        const newEntry = this.store.layers.truth.get(variant);
        const newValue = isObjectHolder(newEntry?.value)
          ? newEntry?.value
          : undefined;

        if (!oldValue || !newValue) {
          markConservative(editedPropertiesByType, obj.objectType);
          continue;
        }

        const diff = computePropertyDiff(oldValue, newValue);
        mergeEditedProperties(
          editedPropertiesByType,
          obj.objectType,
          diff,
        );
      }
    }

    return editedPropertiesByType;
  };

  #invalidatePerTypeEdits = async (
    actionEditResponse: ActionEditResponse | undefined,
    editedPropertiesByType: EditedPropertiesByType,
  ): Promise<void> => {
    if (actionEditResponse == null) {
      return;
    }

    const editedObjectTypeSet = new Set<string>();
    if (actionEditResponse.type === "edits") {
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
        // largeScaleEdits don't tell us which properties changed, so fall
        // back to conservative invalidation for every reported type.
        markConservative(editedPropertiesByType, apiName as string);
      }
    }

    if (editedObjectTypeSet.size === 0) {
      return;
    }

    // Walk the cache once and dispatch per (query, editedType) pair. The two
    // skips below mean each query is touched at most once on the path that's
    // right for it: ObjectQueries via the per-PK pass, primary-type lists via
    // Subject reactions from that refetch, and everything else (RDP-traversed
    // lists, FunctionQueries with dependsOn) via this walk.
    const isEditsBranch = actionEditResponse.type === "edits";
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
        const editedProperties = editedPropertiesByType.has(apiName)
          ? editedPropertiesByType.get(apiName)
          : undefined;
        promises.push(
          query.invalidateObjectType(apiName, undefined, editedProperties),
        );
      }
    }
    await Promise.allSettled(promises);
  };
}

function isObjectHolder(value: unknown): value is ObjectHolder {
  return value != null
    && typeof value === "object"
    && "$apiName" in value
    && "$primaryKey" in value;
}

function markConservative(
  map: EditedPropertiesByType,
  apiName: string,
): void {
  map.set(apiName, undefined);
}

function mergeEditedProperties(
  map: EditedPropertiesByType,
  apiName: string,
  properties: ReadonlySet<string>,
): void {
  if (map.has(apiName)) {
    const existing = map.get(apiName);
    if (existing === undefined) {
      // Already conservative; cannot become more specific.
      return;
    }
    const merged = new Set<string>(existing);
    for (const p of properties) {
      merged.add(p);
    }
    map.set(apiName, merged);
  } else {
    map.set(apiName, new Set(properties));
  }
}
