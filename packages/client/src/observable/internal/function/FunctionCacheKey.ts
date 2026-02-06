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

import type { CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import type { CanonicalFunctionParams } from "./FunctionParamsCanonicalizer.js";
import type { FunctionQuery } from "./FunctionQuery.js";

// Index constants for accessing otherKeys array elements
export const API_NAME_IDX = 0;
export const VERSION_IDX = 1;
export const PARAMS_IDX = 2;

/**
 * Cache values use `unknown` because FunctionQuery handles any QueryDefinition at runtime.
 * Concrete typing is preserved at the API layer via generics and cast at output.
 */
export interface FunctionCacheValue {
  result: unknown;
  executedAt: number;
  error?: Error;
}

export interface FunctionCacheKey extends
  CacheKey<
    "function",
    FunctionCacheValue,
    FunctionQuery,
    [
      apiName: string,
      version: string | undefined,
      canonicalParams: Canonical<CanonicalFunctionParams> | undefined,
    ]
  >
{}
