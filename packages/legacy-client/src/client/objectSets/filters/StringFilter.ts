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

import type { WhereClause } from "./Filters.js";

export interface StringFilter {
  /** The provided property is exactly equal to the provided value. */
  eq: (s: string) => WhereClause;
  /** The provided property is less than the provided value. */
  lt: (s: string) => WhereClause;
  /** The provided property is greater than the provided value. */
  gt: (s: string) => WhereClause;
  /** The provided property is less than or equal to the provided value. */
  lte: (s: string) => WhereClause;
  /** The provided property is greater than or equal to the provided value. */
  gte: (s: string) => WhereClause;
  /** The provided property is null. */
  isNull: () => WhereClause;
  /** The provided property starts with the provided sequence of terms. */
  startsWith: (s: string) => WhereClause;
  /** The provided property contains the provided sequence of terms in order. */
  containsAllTermsInOrder: (s: string) => WhereClause;
  /** The provided property contains at least one of the terms. */
  containsAnyTerm: (s: string) => WhereClause;
  /** The provided property contains all the terms in any order. */
  containsAllTerms: (s: string) => WhereClause;
}

export const StringFilter = (property: string): StringFilter => {
  return {
    eq(value: string): WhereClause {
      return {
        type: "eq",
        field: property,
        value,
      };
    },

    lt(value: string): WhereClause {
      return {
        type: "lt",
        field: property,
        value,
      };
    },

    gt(value: string): WhereClause {
      return {
        type: "gt",
        field: property,
        value,
      };
    },

    lte(value: string): WhereClause {
      return {
        type: "lte",
        field: property,
        value,
      };
    },

    gte(value: string): WhereClause {
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

    startsWith(value: string): WhereClause {
      return {
        type: "startsWith",
        field: property,
        value,
      };
    },

    containsAllTermsInOrder(value: string): WhereClause {
      return {
        type: "containsAllTermsInOrder",
        field: property,
        value,
      };
    },

    containsAnyTerm(value: string): WhereClause {
      return {
        type: "containsAnyTerm",
        field: property,
        value,
      };
    },

    containsAllTerms(value: string): WhereClause {
      return {
        type: "containsAllTerms",
        field: property,
        value,
      };
    },
  };
};
