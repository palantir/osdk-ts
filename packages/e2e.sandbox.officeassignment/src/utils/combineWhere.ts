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

import type { ObjectTypeDefinition, WhereClause } from "@osdk/api";

/**
 * True when the clause is present and has at least one condition. The OSDK rejects an empty
 * `.where({})`, and components such as FilterList emit `{}` when no filter is active, so callers
 * use this to coerce empty clauses to `undefined`.
 */
export function isNonEmptyWhere<Q extends ObjectTypeDefinition>(
  clause: WhereClause<Q> | undefined
): clause is WhereClause<Q> {
  return clause != null && Object.keys(clause).length > 0;
}

/**
 * Combines where clauses, dropping nullish and EMPTY (`{}`) clauses. Returns `undefined` when
 * nothing is left to filter by.
 */
export function combineWhere<Q extends ObjectTypeDefinition>(
  clauses: Array<WhereClause<Q> | undefined>
): WhereClause<Q> | undefined {
  const nonEmpty: Array<WhereClause<Q>> = clauses.filter(isNonEmptyWhere);
  if (nonEmpty.length === 0) {
    return undefined;
  }
  if (nonEmpty.length === 1) {
    return nonEmpty[0];
  }
  return { $and: nonEmpty };
}
