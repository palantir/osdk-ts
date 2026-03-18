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
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import type { Observable, Subscription } from "rxjs";
import { additionalContext } from "../../../Client.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import type { Status } from "../../ObservableClient/common.js";
import { BaseListQuery } from "../base-list/BaseListQuery.js";
import type { BatchContext } from "../BatchContext.js";
import type { CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import { type Changes, DEBUG_ONLY__changesToString } from "../Changes.js";
import { getObjectTypesThatInvalidate } from "../getObjectTypesThatInvalidate.js";
import type { Entry } from "../Layer.js";
import {
  API_NAME_IDX as OBJECT_API_NAME_IDX,
  type ObjectCacheKey,
} from "../object/ObjectCacheKey.js";
import { objectSortaMatchesWhereClause as objectMatchesWhereClause } from "../objectMatchesWhereClause.js";
import type { OptimisticId } from "../OptimisticId.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import { OrderBySortingStrategy } from "../sorting/SortingStrategy.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
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
  #baseObjectSetWire: string;
  #operations: Canonical<ObjectSetOperations>;
  #composedObjectSet: ObjectSet<any, any>;
  #objectTypes: Set<string>;
  #isComplex: boolean;
  #resultTypeApiName: string;

  constructor(
    store: Store,
    subject: Observable<SubjectPayload<ObjectSetCacheKey>>,
    baseObjectSetWire: string,
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
        ? (
          store.client[additionalContext].logger?.child({}, {
            msgPrefix: `ObjectSetQuery<${
              cacheKey.otherKeys.map(x => JSON.stringify(x)).join(", ")
            }>`,
          })
        )
        : undefined,
    );

    this.#baseObjectSetWire = baseObjectSetWire;
    this.#operations = operations;
    this.#composedObjectSet = this.#composeObjectSet(opts);

    const baseWire: WireObjectSet = JSON.parse(baseObjectSetWire);
    this.#objectTypes = this.#extractObjectTypes(baseWire, opts);

    this.#isComplex = !!(
      operations.pivotTo
      || (operations.union && operations.union.length > 0)
      || (operations.intersect && operations.intersect.length > 0)
      || (operations.subtract && operations.subtract.length > 0)
    );

    this.#resultTypeApiName =
      ObjectSetQuery.#extractTypeFromWireObjectSet(baseWire) ?? "";

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

  public override get rdpConfig(): Canonical<Rdp> | null {
    return this.#operations.withProperties ?? null;
  }

  public get selectFields(): Canonical<readonly string[]> | undefined {
    return this.#operations.select;
  }

  protected get rawSelect(): Canonical<readonly string[]> | undefined {
    return this.#operations.select;
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

  #extractObjectTypes(
    baseWire: WireObjectSet,
    opts: ObjectSetQueryOptions,
  ): Set<string> {
    const types = new Set<string>();
    const baseTypeName = ObjectSetQuery.#extractTypeFromWireObjectSet(
      baseWire,
    );
    if (baseTypeName) {
      types.add(baseTypeName);
    }

    if (opts.union) {
      for (const os of opts.union) {
        const typeName = ObjectSetQuery.#extractTypeFromWireObjectSet(
          getWireObjectSet(os),
        );
        if (typeName) {
          types.add(typeName);
        }
      }
    }

    if (opts.intersect) {
      for (const os of opts.intersect) {
        const typeName = ObjectSetQuery.#extractTypeFromWireObjectSet(
          getWireObjectSet(os),
        );
        if (typeName) {
          types.add(typeName);
        }
      }
    }

    if (opts.subtract) {
      for (const os of opts.subtract) {
        const typeName = ObjectSetQuery.#extractTypeFromWireObjectSet(
          getWireObjectSet(os),
        );
        if (typeName) {
          types.add(typeName);
        }
      }
    }

    return types;
  }

  static #extractTypeFromWireObjectSet(
    wire: WireObjectSet,
  ): string | undefined {
    if (wire.type === "base") {
      return wire.objectType;
    }
    if (wire.type === "interfaceBase") {
      return wire.interfaceType;
    }
    return undefined;
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
    if (
      this.#operations.orderBy
      && Object.keys(this.#operations.orderBy).length > 0
      && !(this.sortingStrategy instanceof OrderBySortingStrategy)
    ) {
      const wireObjectSet = getWireObjectSet(this.#composedObjectSet);
      const { resultType } = await getObjectTypesThatInvalidate(
        this.store.client[additionalContext],
        wireObjectSet,
      );
      this.sortingStrategy = new OrderBySortingStrategy(
        resultType.apiName,
        this.#operations.orderBy,
      );
    }

    // Fetch the data with pagination
    const resp = await this.#composedObjectSet.fetchPage({
      $nextPageToken: this.nextPageToken,
      $pageSize: this.getEffectiveFetchPageSize(),
      $includeRid: true,
      ...(this.#operations.select && this.#operations.select.length > 0
        ? { $select: this.#operations.select }
        : {}),
      // OrderBy is already applied in the composed ObjectSet
      ...(this.#operations.orderBy
          && Object.keys(this.#operations.orderBy).length > 0
        ? { $orderBy: this.#operations.orderBy }
        : {}),
    });

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
      this.logger?.child({ methodName: "maybeUpdateAndRevalidate" }).debug(
        DEBUG_ONLY__changesToString(changes),
      );
      this.logger?.child({ methodName: "maybeUpdateAndRevalidate" }).debug(
        `Already in changes? ${changes.modified.has(this.cacheKey)}`,
      );
    }

    if (changes.modified.has(this.cacheKey)) {
      return;
    }
    changes.modified.add(this.cacheKey);

    try {
      if (this.#isComplex) {
        return this.#handleComplexObjectSet(changes);
      }
      return this.#handleSimpleObjectSet(changes, optimisticId);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "maybeUpdateAndRevalidate" })
          .debug("in finally");
      }
    }
  };

  #handleComplexObjectSet(changes: Changes): Promise<void> | undefined {
    for (const objectType of this.#objectTypes) {
      const added = changes.addedObjects.get(objectType);
      const modified = changes.modifiedObjects.get(objectType);
      if ((added && added.length > 0) || (modified && modified.length > 0)) {
        return this.revalidate(true);
      }
    }

    for (const deletedKey of changes.deleted) {
      if (
        deletedKey.type === "object"
        && this.#objectTypes.has(deletedKey.otherKeys[OBJECT_API_NAME_IDX])
      ) {
        return this.revalidate(true);
      }
    }

    return undefined;
  }

  #handleSimpleObjectSet(
    changes: Changes,
    optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined {
    const resultApiName = this.#resultTypeApiName;
    const whereClause = this.#operations.where as
      | Canonical<SimpleWhereClause>
      | undefined;
    const emptyWhere: Canonical<SimpleWhereClause> = {} as Canonical<
      SimpleWhereClause
    >;
    const effectiveWhere = whereClause ?? emptyWhere;

    const addedAll = changes.addedObjects.get(resultApiName) ?? [];
    const modifiedAll = changes.modifiedObjects.get(resultApiName) ?? [];

    if (
      addedAll.length === 0 && modifiedAll.length === 0
      && changes.deleted.size === 0
    ) {
      return undefined;
    }

    const addedStrictMatches = new Set<ObjectHolder | InterfaceHolder>();
    const addedSortaMatches = new Set<ObjectHolder | InterfaceHolder>();
    const modifiedStrictMatches = new Set<ObjectHolder | InterfaceHolder>();
    const modifiedSortaMatches = new Set<ObjectHolder | InterfaceHolder>();

    for (const obj of addedAll) {
      const matchType = this.#matchType(obj, effectiveWhere);
      if (matchType === "strict") {
        addedStrictMatches.add(obj);
      } else if (matchType === "sorta") {
        addedSortaMatches.add(obj);
      }
    }

    for (const obj of modifiedAll) {
      const matchType = this.#matchType(obj, effectiveWhere);
      if (matchType === "strict") {
        modifiedStrictMatches.add(obj);
      } else if (matchType === "sorta") {
        modifiedSortaMatches.add(obj);
      }
    }

    const status = optimisticId
        || addedSortaMatches.size > 0
        || modifiedSortaMatches.size > 0
      ? "loading"
      : "loaded";

    const newList: Array<ObjectCacheKey> = [];

    let needsRevalidation = false;
    this.store.batch({ optimisticId, changes }, (batch) => {
      const existingList = new Set(
        batch.read(this.cacheKey)?.value?.data,
      );

      const toAdd = new Set<ObjectHolder | InterfaceHolder>(
        addedStrictMatches,
      );

      const toRemove = new Set<CacheKey>(changes.deleted);

      for (const obj of modifiedAll) {
        if (modifiedStrictMatches.has(obj)) {
          const objectCacheKey = this.#getObjectCacheKey(obj);

          if (!existingList.has(objectCacheKey)) {
            toAdd.add(obj);
          }
          continue;
        } else if (batch.optimisticWrite) {
          continue;
        } else {
          const existingObjectCacheKey = this.#getObjectCacheKey(obj);

          toRemove.add(existingObjectCacheKey);

          if (modifiedSortaMatches.has(obj)) {
            needsRevalidation = true;
          }
        }
      }

      for (const key of existingList) {
        if (toRemove.has(key)) {
          continue;
        }
        newList.push(key);
      }
      for (const obj of toAdd) {
        newList.push(this.#getObjectCacheKey(obj));
      }

      const existingTotalCount = batch.read(this.cacheKey)?.value?.totalCount;
      this._updateList(
        newList,
        status,
        batch,
        { type: "clientOrdered" },
        existingTotalCount,
      );
    });

    if (needsRevalidation) {
      return this.revalidate(true);
    }
    return undefined;
  }

  #matchType(
    obj: ObjectHolder | InterfaceHolder,
    whereClause: Canonical<SimpleWhereClause>,
  ): false | "strict" | "sorta" {
    if (objectMatchesWhereClause(obj, whereClause, true)) {
      return "strict";
    }
    if (objectMatchesWhereClause(obj, whereClause, false)) {
      return "sorta";
    }
    return false;
  }

  #getObjectCacheKey(
    obj: { $objectType: string; $primaryKey: string | number | boolean },
  ): ObjectCacheKey {
    const pk = obj.$primaryKey as string | number;
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
    if (this.#objectTypes.has(objectType)) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    }
    return Promise.resolve();
  };

  protected createPayload(
    params: {
      resolvedData: any[] | undefined;
      isOptimistic: boolean;
      status: Status;
      lastUpdated: number;
      totalCount?: string;
    },
  ): ObjectSetPayload {
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
