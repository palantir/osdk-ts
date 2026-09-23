/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectSet, Osdk, PageResult } from "@osdk/api";
import type {
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
} from "@osdk/foundry.ontologies";
import type { Observable, Subscription } from "rxjs";

import { additionalContext } from "../../../Client.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import { extractRdpDefinition } from "../../../util/extractRdpDefinition.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import type { Status } from "../../ObservableClient/common.js";
import { BaseListQuery } from "../base-list/BaseListQuery.js";
import type { BatchContext } from "../BatchContext.js";
import type { Canonical } from "../Canonical.js";
import { type Changes, DEBUG_ONLY__changesToString } from "../Changes.js";
import type { Entry } from "../Layer.js";
import {
  API_NAME_IDX as OBJECT_API_NAME_IDX,
  type ObjectCacheKey,
} from "../object/ObjectCacheKey.js";
import type { OptimisticId } from "../OptimisticId.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import { OrderBySortingStrategy } from "../sorting/SortingStrategy.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import {
  analyzeObjectSet,
  type ObjectSetAnalysis,
} from "./analyzeObjectSet.js";
import type {
  ObjectSetCacheKey,
  ObjectSetOperations,
} from "./ObjectSetCacheKey.js";
import type { ObjectSetQueryOptions } from "./ObjectSetQueryOptions.js";

export class ObjectSetQuery extends BaseListQuery<
  ObjectSetCacheKey,
  ObjectSetPayload,
  ObjectSetQueryOptions
> {
  #operations: Canonical<ObjectSetOperations>;
  #composedObjectSet: ObjectSet<any, any>;
  #objectTypes: ReadonlySet<string>;
  #resolvedObjectTypes: Promise<ObjectSetAnalysis> | undefined;
  #analysis: ObjectSetAnalysis | undefined;
  #rdpConfig: Canonical<Rdp> | undefined;

  constructor(
    store: Store,
    subject: Observable<SubjectPayload<ObjectSetCacheKey>>,
    operations: Canonical<ObjectSetOperations>,
    cacheKey: ObjectSetCacheKey,
    opts: ObjectSetQueryOptions,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? store.client[additionalContext].logger?.child(
            {},
            {
              msgPrefix: `ObjectSetQuery<${cacheKey.otherKeys
                .map((x) => JSON.stringify(x))
                .join(", ")}>`,
            },
          )
        : undefined,
    );

    this.#operations = operations;
    this.#composedObjectSet = this.#composeObjectSet(opts);
    const wire = getWireObjectSet(this.#composedObjectSet);
    this.#objectTypes = new Set(wire.type === "base" ? [wire.objectType] : []);
    const definitions = getResultDerivedProperties(wire);
    this.#rdpConfig =
      Object.keys(definitions).length > 0
        ? store.rdpCanonicalizer.canonicalizeDefinitions(definitions)
        : undefined;

    if (opts.autoFetchMore === true) {
      this.minResultsToLoad = Number.MAX_SAFE_INTEGER;
    } else if (typeof opts.autoFetchMore === "number") {
      this.minResultsToLoad = Math.max(0, opts.autoFetchMore);
    } else {
      this.minResultsToLoad = opts.pageSize || 0;
    }
  }

  get objectTypes(): ReadonlySet<string> {
    return this.#objectTypes;
  }

  public override get rdpConfig(): Canonical<Rdp> | undefined {
    return this.#rdpConfig;
  }

  public get selectFields(): Canonical<readonly string[]> | undefined {
    return this.#operations.select;
  }

  protected get rawSelect(): Canonical<readonly string[]> | undefined {
    return this.#operations.select;
  }

  get objectSet(): ObjectSet<any, any> {
    return this.#composedObjectSet;
  }

  #composeObjectSet(opts: ObjectSetQueryOptions): ObjectSet<any, any> {
    let result = opts.baseObjectSet;

    if (opts.withProperties) {
      result = result.withProperties(opts.withProperties);
    }
    if (opts.where) {
      result = result.where(opts.where);
    }
    if (opts.union && opts.union.length > 0) {
      result = result.union(...opts.union);
    }
    if (opts.intersect && opts.intersect.length > 0) {
      result = result.intersect(...opts.intersect);
    }
    if (opts.subtract && opts.subtract.length > 0) {
      result = result.subtract(...opts.subtract);
    }
    if (opts.pivotTo) {
      result = result.pivotTo(opts.pivotTo);
    }

    return result;
  }

  #resolveObjectTypes(): Promise<ObjectSetAnalysis> {
    return (this.#resolvedObjectTypes ??= analyzeObjectSet(
      this.store.client[additionalContext],
      getWireObjectSet(this.#composedObjectSet),
    )
      .then((analysis) => {
        this.#analysis = analysis;
        this.#objectTypes = analysis.objectTypes;
        return analysis;
      })
      .catch((error: unknown) => {
        this.#resolvedObjectTypes = undefined;
        throw error;
      }));
  }

  /**
   * Register changes to the cache specific to ObjectSetQuery
   */
  protected registerCacheChanges(batch: BatchContext): void {
    batch.changes.registerObjectSet(this.cacheKey);
  }

  /**
   * Implements fetchPageData from BaseListQuery template method
   * Fetches a page of data from the composed ObjectSet
   */
  protected async fetchPageData(
    signal: AbortSignal | undefined,
  ): Promise<PageResult<Osdk.Instance<any>>> {
    const { resultType } = await this.#resolveObjectTypes();

    const derivedProperties = await extractRdpDefinition(
      this.store.client[additionalContext],
      getWireObjectSet(this.#composedObjectSet),
    );
    if (
      this.#operations.orderBy &&
      Object.keys(this.#operations.orderBy).length > 0 &&
      !(this.sortingStrategy instanceof OrderBySortingStrategy)
    ) {
      this.sortingStrategy = new OrderBySortingStrategy(
        resultType.apiName,
        this.#operations.orderBy,
        derivedProperties,
      );
    }

    // Fetch the data with pagination
    const args = {
      $nextPageToken: this.nextPageToken,
      $pageSize: this.getEffectiveFetchPageSize(),
      $includeRid: true,
      ...(this.#operations.select && this.#operations.select.length > 0
        ? { $select: this.#operations.select }
        : {}),
      ...(this.#operations.orderBy &&
      Object.keys(this.#operations.orderBy).length > 0
        ? { $orderBy: this.#operations.orderBy }
        : {}),
      ...(this.options.$loadPropertySecurityMetadata
        ? { $loadPropertySecurityMetadata: true }
        : {}),
    };
    const resp = await this.#composedObjectSet.fetchPage(args);

    if (signal?.aborted) {
      throw new Error("Aborted");
    }

    this.nextPageToken = resp.nextPageToken;

    return resp;
  }

  protected handleFetchError(
    error: unknown,
    _status: Status,
    batch: BatchContext,
  ): Entry<ObjectSetCacheKey> {
    this.logger?.error("error", error);
    this.store.subjects.get(this.cacheKey).error(error);

    const existingTotalCount = batch.read(this.cacheKey)?.value?.totalCount;
    return this.writeToStore(
      { data: [], totalCount: existingTotalCount },
      "error",
      batch,
    );
  }

  registerStreamUpdates(sub: Subscription): void {
    this.createWebsocketSubscription(
      this.#composedObjectSet,
      sub,
      "observeObjectSet",
    );
  }

  maybeUpdateAndRevalidate = (
    changes: Changes,
    optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined => {
    if (process.env.NODE_ENV !== "production") {
      this.logger
        ?.child({ methodName: "maybeUpdateAndRevalidate" })
        .debug(DEBUG_ONLY__changesToString(changes));
      this.logger
        ?.child({ methodName: "maybeUpdateAndRevalidate" })
        .debug(`Already in changes? ${changes.modified.has(this.cacheKey)}`);
    }

    if (changes.modified.has(this.cacheKey)) {
      return;
    }
    changes.modified.add(this.cacheKey);

    try {
      if (
        !this.#analysis ||
        this.#hasChangesForTypes(changes, this.#analysis.revalidateTypes)
      ) {
        if (optimisticId) {
          this.#removeOptimisticallyDeletedObjects(changes, optimisticId);
          return;
        }
        return this.#handleServerRevalidation(changes);
      }
      return this.#handleLocalUpdate(changes, optimisticId);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        this.logger
          ?.child({ methodName: "maybeUpdateAndRevalidate" })
          .debug("in finally");
      }
    }
  };

  #removeOptimisticallyDeletedObjects(
    changes: Changes,
    optimisticId: OptimisticId,
  ): void {
    if (changes.deleted.size === 0) {
      return;
    }
    this.store.batch({ optimisticId, changes }, (batch) => {
      const existing = batch.read(this.cacheKey)?.value;
      if (!existing) {
        return;
      }
      const remaining = existing.data.filter(
        (key) => !changes.deleted.has(key),
      );
      if (remaining.length === existing.data.length) {
        return;
      }
      this._updateList(
        remaining,
        "loading",
        batch,
        { type: "clientOrdered" },
        existing.totalCount,
      );
    });
  }

  #hasChangesForTypes(changes: Changes, types: ReadonlySet<string>): boolean {
    for (const type of types) {
      if (
        changes.addedObjects.get(type)?.length ||
        changes.modifiedObjects.get(type)?.length
      )
        return true;
    }
    return [...changes.deleted].some(
      (key) =>
        key.type === "object" && types.has(key.otherKeys[OBJECT_API_NAME_IDX]),
    );
  }

  #handleServerRevalidation(changes: Changes): Promise<void> | undefined {
    return this.#hasChangesForTypes(changes, this.#objectTypes)
      ? this.revalidate(true)
      : undefined;
  }

  #getRelevantChanges(
    changes: Changes,
  ):
    | { addedObjects: ObjectHolder[]; modifiedObjects: ObjectHolder[] }
    | undefined {
    if (!this.#hasChangesForTypes(changes, this.#objectTypes)) return undefined;
    return {
      addedObjects: [...this.#objectTypes].flatMap(
        (type) => changes.addedObjects.get(type) ?? [],
      ),
      modifiedObjects: [...this.#objectTypes].flatMap(
        (type) => changes.modifiedObjects.get(type) ?? [],
      ),
    };
  }

  #handleLocalUpdate(
    changes: Changes,
    optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined {
    const relevant = this.#getRelevantChanges(changes);
    if (!relevant) return undefined;
    const missingSortFields =
      this.#operations.select &&
      Object.keys(this.#operations.orderBy ?? {}).some(
        (field) => !this.#operations.select!.includes(field),
      );
    if (!optimisticId && (this.nextPageToken != null || missingSortFields))
      return this.revalidate(true);

    const matches = new Map(
      [...relevant.addedObjects, ...relevant.modifiedObjects].map(
        (object) => [object, this.#analysis?.matches(object)] as const,
      ),
    );
    if (!optimisticId && [...matches.values()].includes(undefined)) {
      return this.revalidate(true);
    }

    this.store.batch({ optimisticId, changes }, (batch) => {
      const existing = batch.read(this.cacheKey)?.value;
      const keys = new Set(existing?.data);
      for (const key of keys) {
        if (changes.deleted.has(key)) keys.delete(key);
      }
      for (const [object, matchesQuery] of matches) {
        const key = this.#getObjectCacheKey(object);
        if (matchesQuery === true) keys.add(key);
        else if (!optimisticId) keys.delete(key);
      }
      this._updateList(
        [...keys],
        optimisticId ? "loading" : "loaded",
        batch,
        { type: "clientOrdered" },
        existing?.totalCount === undefined || this.nextPageToken != null
          ? existing?.totalCount
          : String(keys.size),
      );
    });
    return undefined;
  }

  #getObjectCacheKey(obj: {
    $objectType: string;
    $primaryKey: string | number;
  }): ObjectCacheKey {
    const pk = obj.$primaryKey;
    return this.cacheKeys.get<ObjectCacheKey>(
      "object",
      obj.$objectType,
      pk,
      this.rdpConfig ?? undefined,
    );
  }

  invalidateObjectType = async (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    await this.#resolveObjectTypes();
    if (this.#objectTypes.has(objectType)) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    }
    return Promise.resolve();
  };

  protected createPayload(params: {
    resolvedData: any[] | undefined;
    isOptimistic: boolean;
    status: Status;
    lastUpdated: number;
    totalCount?: string;
  }): ObjectSetPayload {
    return {
      resolvedList: params.resolvedData,
      isOptimistic: params.isOptimistic,
      fetchMore: this.fetchMore,
      hasMore: this.nextPageToken != null,
      status: params.status,
      lastUpdated: params.lastUpdated,
      objectSet: this.#composedObjectSet,
      totalCount: params.totalCount,
    };
  }
}

function getResultDerivedProperties(
  wire: WireObjectSet,
): Record<string, DerivedPropertyDefinition> {
  switch (wire.type) {
    case "withProperties":
      return {
        ...getResultDerivedProperties(wire.objectSet),
        ...wire.derivedProperties,
      };
    case "filter":
    case "asType":
    case "asBaseObjectTypes":
    case "nearestNeighbors":
      return getResultDerivedProperties(wire.objectSet);
    default:
      return {};
  }
}
