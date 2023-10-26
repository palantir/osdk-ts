/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { WhereClause } from "./Filters";

// FIXME this should not be an interface.
// It could be an export * as Op from a higher level.
export interface Op {
  /** All the sub-queries match */
  and: (...whereClauses: WhereClause[]) => WhereClause;
  /** At least one of the sub-queries matches. */
  or: (...whereClauses: WhereClause[]) => WhereClause;
  /** The sub-query does not match. */
  not: (whereClause: WhereClause) => WhereClause;
}

export const Op: Op = {
  and(...whereClauses: WhereClause[]): WhereClause {
    return {
      type: "and",
      value: whereClauses,
    };
  },

  or(...whereClauses: WhereClause[]): WhereClause {
    return {
      type: "or",
      value: whereClauses,
    };
  },

  not(whereClause: WhereClause): WhereClause {
    return {
      type: "not",
      value: whereClause,
    };
  },
};
