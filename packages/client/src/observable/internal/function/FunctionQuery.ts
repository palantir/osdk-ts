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

import type { QueryDefinition } from "@osdk/api";
import type { Connectable, Observable, Subject } from "rxjs";
import { BehaviorSubject, connectable, map } from "rxjs";
import { additionalContext } from "../../../Client.js";
import type { MinimalClient } from "../../../MinimalClientContext.js";
import { applyQuery } from "../../../queries/applyQuery.js";
import type { FunctionPayload } from "../../FunctionPayload.js";
import type { CommonObserveOptions } from "../../ObservableClient/common.js";
import type { BatchContext } from "../BatchContext.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import type { OptimisticId } from "../OptimisticId.js";
import { Query } from "../Query.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import type {
  FunctionCacheKey,
  FunctionCacheValue,
} from "./FunctionCacheKey.js";

type PrimaryKeyValue = string | number;
type FunctionParams = Record<string, unknown>;
type ObjectDependency = { $apiName: string; $primaryKey: PrimaryKeyValue };

export interface FunctionObserveOptions extends CommonObserveOptions {
  dependsOn?: string[];
  dependsOnObjects?: ObjectDependency[];
}

export class FunctionQuery extends Query<
  FunctionCacheKey,
  FunctionPayload,
  FunctionObserveOptions
> {
  #apiName: string;
  #version: string | undefined;
  #params: FunctionParams | undefined;
  #dependsOn: string[] | undefined;
  #dependsOnObjects: ObjectDependency[] | undefined;
  #queryDef: QueryDefinition<unknown>;

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<FunctionCacheKey>>,
    queryDef: QueryDefinition<unknown>,
    params: FunctionParams | undefined,
    cacheKey: FunctionCacheKey,
    opts: FunctionObserveOptions,
    objectSetTypesPromise?: Promise<string[]>,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? (
          store.client[additionalContext].logger?.child({}, {
            msgPrefix: `FunctionQuery<${
              cacheKey.otherKeys.map(x => JSON.stringify(x)).join(", ")
            }>`,
          })
        )
        : undefined,
    );
    this.#apiName = queryDef.apiName;
    this.#version = queryDef.isFixedVersion ? queryDef.version : undefined;
    this.#params = params;
    this.#dependsOn = opts.dependsOn;
    this.#dependsOnObjects = opts.dependsOnObjects;
    this.#queryDef = queryDef;

    // Handle async ObjectSet type resolution
    if (objectSetTypesPromise) {
      objectSetTypesPromise
        .then(types => {
          if (this.abortController?.signal.aborted) return;

          let addedNewTypes = false;
          for (const type of types) {
            if (!this.#dependsOn) {
              this.#dependsOn = [];
            }
            if (!this.#dependsOn.includes(type)) {
              this.#dependsOn.push(type);
              addedNewTypes = true;
            }
          }
          // Revalidate to catch any changes that occurred during async resolution
          if (addedNewTypes) {
            void this.revalidate(true);
          }
        })
        .catch((error: unknown) => {
          if (this.abortController?.signal.aborted) return;

          if (process.env.NODE_ENV !== "production") {
            this.logger?.error("Failed to extract ObjectSet types", error);
          }
        });
    }
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<FunctionCacheKey>>,
  ): Connectable<FunctionPayload> {
    return connectable<FunctionPayload>(
      subject.pipe(
        map((x) => {
          const value = x.value as FunctionCacheValue | undefined;
          return {
            status: x.status,
            result: value?.result,
            lastUpdated: value?.executedAt ?? 0,
            error: value?.error,
          };
        }),
      ),
      {
        connector: () =>
          new BehaviorSubject<FunctionPayload>({
            status: "init",
            result: undefined,
            lastUpdated: 0,
          }),
      },
    );
  }

  async _fetchAndStore(): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_fetchAndStore" }).debug(
        "calling _fetchAndStore",
      );
    }

    try {
      // Type assertion needed because FunctionQuery we determine types dynamically
      // at runtime without compile-time parameter type info. applyQuery internally
      // converts params via remapQueryParams which handles the type safely.
      const result = await (applyQuery as (
        client: MinimalClient,
        query: QueryDefinition<unknown>,
        params?: Record<string, unknown>,
      ) => Promise<unknown>)(
        this.store.client[additionalContext],
        this.#queryDef,
        this.#params,
      );

      const executedAt = Date.now();

      this.store.batch({}, (batch) => {
        this.writeToStore({ result, executedAt }, "loaded", batch);
      });
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "_fetchAndStore" }).error(
          "Error executing function",
          e,
        );
      }
      const error = e instanceof Error ? e : new Error(String(e));
      this.store.batch({}, (batch) => {
        this.writeToStore(
          { result: undefined, executedAt: 0, error },
          "error",
          batch,
        );
      });
    }
  }

  writeToStore(
    data: FunctionCacheValue,
    status: "loading" | "loaded" | "error",
    batch: BatchContext,
  ): Entry<FunctionCacheKey> {
    batch.write(this.cacheKey, data, status);
    return batch.read(this.cacheKey)!;
  }

  invalidateObjectType = (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    // Check if this function depends on the given object type
    if (this.#dependsOn?.includes(objectType)) {
      changes?.registerFunction(this.cacheKey);
      return this.revalidate(true);
    }
    return Promise.resolve();
  };

  dependsOnObject(apiName: string, primaryKey: PrimaryKeyValue): boolean {
    if (!this.#dependsOnObjects) {
      return false;
    }
    return this.#dependsOnObjects.some(
      (obj) => obj.$apiName === apiName && obj.$primaryKey === primaryKey,
    );
  }

  /**
   * Called during batch operations when objects change.
   * Checks if any objects in dependsOnObjects were modified/added
   * and triggers revalidation if so.
   */
  maybeUpdateAndRevalidate = (
    changes: Changes,
    _optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined => {
    if (!this.#dependsOnObjects?.length) {
      return undefined;
    }

    for (const dep of this.#dependsOnObjects) {
      const modifiedObjects = changes.modifiedObjects.get(dep.$apiName);
      if (modifiedObjects?.some(obj => obj.$primaryKey === dep.$primaryKey)) {
        return this.revalidate(true);
      }
      const addedObjects = changes.addedObjects.get(dep.$apiName);
      if (addedObjects?.some(obj => obj.$primaryKey === dep.$primaryKey)) {
        return this.revalidate(true);
      }
    }

    return undefined;
  };

  get apiName(): string {
    return this.#apiName;
  }

  get version(): string | undefined {
    return this.#version;
  }
}
