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

import type {
  AggregateOpts,
  ObjectTypeDefinition,
  WhereClause,
} from "@osdk/api";

export function createGroupByAggregateOptions<
  Q extends ObjectTypeDefinition,
>(propertyKey: string): AggregateOpts<Q> {
  return {
    $select: { $count: "unordered" as const },
    $groupBy: { [propertyKey]: "exact" as const },
  } as AggregateOpts<Q>;
}

export function createNullCountAggregateOptions<
  Q extends ObjectTypeDefinition,
>(): AggregateOpts<Q> {
  return {
    $select: { $count: "unordered" as const },
  } as AggregateOpts<Q>;
}

export function createNullWhereClause<
  Q extends ObjectTypeDefinition,
>(propertyKey: string): WhereClause<Q> {
  return { [propertyKey]: { $isNull: true } } as WhereClause<Q>;
}
