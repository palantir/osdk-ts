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

import type { LocalDate, Timestamp } from "../../baseTypes/index.js";
import type { WhereClause } from "./Filters.js";

interface BaseTimePropertyFilter<T extends Timestamp | LocalDate> {
  /** The provided property is exactly equal to the provided value. */
  eq: (s: T) => WhereClause;
  /** The provided property is less than the provided value. */
  lt: (s: T) => WhereClause;
  /** The provided property is greater than the provided value. */
  gt: (s: T) => WhereClause;
  /** The provided property is less than or equal to the provided value. */
  lte: (s: T) => WhereClause;
  /** The provided property is greater than or equal to the provided value. */
  gte: (s: T) => WhereClause;
  /** The provided property is null. */
  isNull: () => WhereClause;
}

export interface TimestampFilter extends BaseTimePropertyFilter<Timestamp> {
}

export interface LocalDateFilter extends BaseTimePropertyFilter<LocalDate> {
}

export const TimestampFilter = (property: string): TimestampFilter =>
  createTimePropertyFilter<Timestamp>(property);
export const LocalDateFilter = (property: string): LocalDateFilter =>
  createTimePropertyFilter<LocalDate>(property);

const createTimePropertyFilter = <T extends Timestamp | LocalDate>(
  property: string,
): BaseTimePropertyFilter<T> => {
  return {
    eq(value: T): WhereClause {
      return {
        type: "eq",
        field: property,
        value: value.toISOString(),
      };
    },

    lt(value: T): WhereClause {
      return {
        type: "lt",
        field: property,
        value: value.toISOString(),
      };
    },

    gt(value: T): WhereClause {
      return {
        type: "gt",
        field: property,
        value: value.toISOString(),
      };
    },

    lte(value: T): WhereClause {
      return {
        type: "lte",
        field: property,
        value: value.toISOString(),
      };
    },

    gte(value: T): WhereClause {
      return {
        type: "gte",
        field: property,
        value: value.toISOString(),
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
