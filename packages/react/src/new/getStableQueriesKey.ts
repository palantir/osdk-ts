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

import type { QueryDefinition } from "@osdk/api";
import { getWireObjectSet, isObjectSet } from "@osdk/client";
import type { FunctionQueryParams } from "./useOsdkFunctions.js";

/**
 * Builds a stable string key for an array of function queries.
 *
 * Uses a JSON.stringify replacer to substitute any ObjectSet with its wire representation,
 * so composed operations (where/union/intersect) participate in the key
 * - plain JSON.stringify would not capture them.
 */
export function getStableQueriesKey(
  queries: ReadonlyArray<FunctionQueryParams<QueryDefinition<unknown>>>,
): string {
  return JSON.stringify(
    queries.map(q => ({
      apiName: q.queryDefinition.apiName,
      ...q.options,
    })),
    (_key, value) => isObjectSet(value) ? getWireObjectSet(value) : value,
  );
}
