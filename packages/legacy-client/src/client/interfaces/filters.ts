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

import type { LocalDate, Timestamp } from "../..";
import type {
  BooleanFilter,
  LocalDateFilter,
  NumericFilter,
  ObjectTypeProperties,
  StringFilter,
  TimestampFilter,
  WhereClause,
} from "../../ontology-runtime";

export declare type ObjectTypeFilterFunction<T extends ObjectTypeProperties> = (
  objectType: ObjectTypeFilter<T>,
) => WhereClause;

export declare type ObjectTypeFilter<T extends ObjectTypeProperties> = {
  [K in keyof Omit<T, "__apiName" | "__primaryKey" | "__rid">]: FilterFromType<
    T[K]
  >;
};

type FilterFromType<T> = T extends number ? NumericFilter
  : T extends string ? StringFilter
  : T extends LocalDate ? LocalDateFilter
  : T extends Timestamp ? TimestampFilter
  : T extends boolean ? BooleanFilter
  : never;
