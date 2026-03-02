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

import type { ObjectSet, Osdk, PageResult } from "@osdk/api";
import type { Observable, Subscription } from "rxjs";
import { additionalContext } from "../../../Client.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import type { Status } from "../../ObservableClient/common.js";
import { BaseListQuery } from "../base-list/BaseListQuery.js";
import type { BatchContext } from "../BatchContext.js";
import type { Canonical } from "../Canonical.js";
import type { Changes } from "../Changes.js";
import { getObjectTypesThatInvalidate } from "../getObjectTypesThatInvalidate.js";
import type { Entry } from "../Layer.js";
import type { Rdp } from "../RdpCanonicalizer.js";
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
  #invalidationTypes: Set<string>;
  #invalidationTypesPromise: Promise<Set<string>> | undefined;
  #resultTypeApiName: string | undefined;

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
    this.#invalidationTypes = this.#extractBaseTypes();
    this.#invalidationTypesPromise = this.#computeInvalidationTypes();
    if (opts.autoFetchMore === true) {
      this.minResultsToLoad = Number.MAX_SAFE_INTEGER;
    } else if (typeof opts.autoFetchMore === "number") {
      this.minResultsToLoad = Math.max(0, opts.autoFetchMore);
    } else {
      this.minResultsToLoad = opts.pageSize || 0;
    }
  }

  public override get rdpConfig(): Canonical<Rdp> | null {
    return this.#operations.withProperties ?? null;
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

  #extractBaseTypes(): Set<string> {
    const types = new Set<string>();
    const stack: unknown[] = [JSON.parse(this.#baseObjectSetWire)];
    while (stack.length > 0) {
      const node = stack.pop();
      if (node == null || typeof node !== "object") {
        continue;
      }
      const obj = node as Record<string, unknown>;
      if (obj.type === "base" && typeof obj.objectType === "string") {
        types.add(obj.objectType);
      }
      if (
        obj.type === "interfaceBase" && typeof obj.interfaceType === "string"
      ) {
        types.add(obj.interfaceType);
      }
      if (obj.objectSet != null) {
        stack.push(obj.objectSet);
      }
      if (Array.isArray(obj.objectSets)) {
        stack.push(...obj.objectSets);
      }
    }
    return types;
  }

  async #computeInvalidationTypes(): Promise<Set<string>> {
    try {
      const wireObjectSet = getWireObjectSet(this.#composedObjectSet);
      const { resultType, invalidationSet } =
        await getObjectTypesThatInvalidate(
          this.store.client[additionalContext],
          wireObjectSet,
        );
      this.#resultTypeApiName = resultType.apiName;
      return new Set([resultType.apiName, ...invalidationSet]);
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.error(
          "Failed to compute invalidation types, falling back to base types",
          error,
        );
      }
      return this.#invalidationTypes;
    }
  }

  async ensureInvalidationTypesReady(): Promise<void> {
    if (this.#invalidationTypesPromise) {
      this.#invalidationTypes = await this.#invalidationTypesPromise;
      this.#invalidationTypesPromise = undefined;
    }
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
    await this.ensureInvalidationTypesReady();

    if (
      this.#operations.orderBy
      && Object.keys(this.#operations.orderBy).length > 0
      && !(this.sortingStrategy instanceof OrderBySortingStrategy)
    ) {
      let apiName = this.#resultTypeApiName;
      if (!apiName) {
        const wireObjectSet = getWireObjectSet(this.#composedObjectSet);
        const { resultType } = await getObjectTypesThatInvalidate(
          this.store.client[additionalContext],
          wireObjectSet,
        );
        apiName = resultType.apiName;
      }
      this.sortingStrategy = new OrderBySortingStrategy(
        apiName,
        this.#operations.orderBy,
      );
    }

    // Fetch the data with pagination
    const resp = await this.#composedObjectSet.fetchPage({
      $nextPageToken: this.nextPageToken,
      $pageSize: this.getEffectiveFetchPageSize(),
      $includeRid: true,
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

  invalidateObjectType = async (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    if (this.#invalidationTypes.has(objectType)) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    }
    return Promise.resolve();
  };

  protected createPayload(
    params: {
      resolvedData: any[];
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
