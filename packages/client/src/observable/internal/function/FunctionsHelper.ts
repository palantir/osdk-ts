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
import type { FunctionPayload } from "../../FunctionPayload.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { Canonical } from "../Canonical.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { Store } from "../Store.js";
import { type FunctionCacheKey, PARAMS_IDX } from "./FunctionCacheKey.js";
import type { CanonicalFunctionParams } from "./FunctionParamsCanonicalizer.js";
import { FunctionParamsCanonicalizer } from "./FunctionParamsCanonicalizer.js";
import { type FunctionObserveOptions, FunctionQuery } from "./FunctionQuery.js";

type PrimaryKeyValue = string | number;
type FunctionParams = Record<string, unknown>;

export interface ObserveFunctionOptions extends FunctionObserveOptions {
  queryDef: QueryDefinition<unknown>;
  params?: FunctionParams;
}

export class FunctionsHelper extends AbstractHelper<
  FunctionQuery,
  ObserveFunctionOptions
> {
  readonly paramsCanonicalizer: FunctionParamsCanonicalizer =
    new FunctionParamsCanonicalizer();

  constructor(store: Store, cacheKeys: CacheKeys<KnownCacheKey>) {
    super(store, cacheKeys);
  }

  observe(
    options: ObserveFunctionOptions,
    subFn: Observer<FunctionPayload>,
  ): QuerySubscription<FunctionQuery> {
    return super.observe(options, subFn);
  }

  getQuery(options: ObserveFunctionOptions): FunctionQuery {
    const { queryDef, params, ...observeOpts } = options;
    const apiName = queryDef.apiName;
    const version = queryDef.isFixedVersion ? queryDef.version : undefined;

    const canonicalParams = this.paramsCanonicalizer.canonicalize(params);

    const functionCacheKey = this.cacheKeys.get<FunctionCacheKey>(
      "function",
      apiName,
      version,
      canonicalParams,
    );

    return this.store.queries.get(functionCacheKey, () =>
      new FunctionQuery(
        this.store,
        this.store.subjects.get(functionCacheKey),
        queryDef,
        params,
        functionCacheKey,
        observeOpts,
      ));
  }

  async invalidateFunction(
    apiName: string | QueryDefinition<unknown>,
    params?: FunctionParams,
  ): Promise<void> {
    const functionApiName = typeof apiName === "string"
      ? apiName
      : apiName.apiName;

    let canonicalParams: Canonical<CanonicalFunctionParams> | undefined;
    if (params !== undefined) {
      canonicalParams = this.paramsCanonicalizer.canonicalize(params);
    }

    const promises: Array<Promise<void>> = [];

    for (const cacheKey of this.store.queries.keys()) {
      if (cacheKey.type !== "function") {
        continue;
      }

      const query = this.store.queries.peek(cacheKey) as
        | FunctionQuery
        | undefined;
      if (!query) {
        continue;
      }

      // Check if apiName matches
      if (query.apiName !== functionApiName) {
        continue;
      }

      // If params provided, check for exact match
      if (canonicalParams !== undefined) {
        const queryCacheKey = cacheKey as FunctionCacheKey;
        const queryParams = queryCacheKey.otherKeys[PARAMS_IDX];
        if (queryParams !== canonicalParams) {
          continue;
        }
      }

      // Invalidate this query
      promises.push(query.revalidate(true));
    }

    await Promise.allSettled(promises);
  }

  async invalidateFunctionsByObject(
    apiName: string,
    primaryKey: PrimaryKeyValue,
  ): Promise<void> {
    const promises: Array<Promise<void>> = [];

    for (const cacheKey of this.store.queries.keys()) {
      if (cacheKey.type !== "function") {
        continue;
      }

      const query = this.store.queries.peek(cacheKey) as
        | FunctionQuery
        | undefined;
      if (!query) {
        continue;
      }

      if (query.dependsOnObject(apiName, primaryKey)) {
        promises.push(query.revalidate(true));
      }
    }

    await Promise.allSettled(promises);
  }
}
