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

export interface NumericFilter {
  /** The provided property is exactly equal to the provided value. */
  eq: (n: number) => WhereClause;
  /** The provided property is less than the provided value. */
  lt: (n: number) => WhereClause;
  /** The provided property is greater than the provided value. */
  gt: (n: number) => WhereClause;
  /** The provided property is less than or equal to the provided value. */
  lte: (n: number) => WhereClause;
  /** The provided property is greater than or equal to the provided value. */
  gte: (n: number) => WhereClause;
  /** The provided property is null. */
  isNull: () => WhereClause;
}

export const NumericFilter = (property: string): NumericFilter => {
  return {
    eq(value: number): WhereClause {
      return {
        type: "eq",
        field: property,
        value,
      };
    },

    lt(value: number): WhereClause {
      return {
        type: "lt",
        field: property,
        value,
      };
    },

    gt(value: number): WhereClause {
      return {
        type: "gt",
        field: property,
        value,
      };
    },

    lte(value: number): WhereClause {
      return {
        type: "lte",
        field: property,
        value,
      };
    },

    gte(value: number): WhereClause {
      return {
        type: "gte",
        field: property,
        value,
      };
    },

    isNull(): WhereClause {
      return {
        type: "isNull",
        field: property,
        value: true,
      };
    },
  };
};
