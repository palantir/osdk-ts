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

import type { PossibleWhereClauseFilters } from "@osdk/api";

/**
 * Exactly one `$operator` key, drawn from the PossibleWhereClauseFilters
 */
export type OperatorFilter = {
  [K in PossibleWhereClauseFilters]: { [P in K]: unknown };
}[PossibleWhereClauseFilters];

export type PropertyFilter = OperatorFilter | boolean | string | number;

/**
 * One property predicate, or a combinator over other fragments. Property keys
 * are built from runtime values, so a fragment can only be cast to
 * `WhereClause<Q>` — this type checks the operators and structure meanwhile.
 */
export type WhereClauseFragment =
  | { $and: WhereClauseFragment[] }
  | { $or: WhereClauseFragment[] }
  | { $not: WhereClauseFragment }
  | { [propertyApiName: string]: PropertyFilter };
