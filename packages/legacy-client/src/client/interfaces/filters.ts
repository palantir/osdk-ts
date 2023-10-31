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

import type {
  ObjectTypesFrom,
  OntologyDefinition,
  OsdkObjectPropertyType,
  PropertyDefinitionFrom,
  PropertyKeysFrom,
} from "@osdk/api";
import type { LocalDate, Timestamp } from "../..";
import type {
  BooleanFilter,
  LocalDateFilter,
  NumericFilter,
  StringFilter,
  TimestampFilter,
  WhereClause,
} from "../../ontology-runtime";

export declare type ObjectTypeFilterFunction<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = (
  objectType: ObjectTypeFilter<O, K>,
) => WhereClause;

export declare type ObjectTypeFilter<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [P in PropertyKeysFrom<O, K>]: FilterFromType<
    OsdkObjectPropertyType<PropertyDefinitionFrom<O, K, P>>
  >;
};

type FilterFromType<T> = T extends number ? NumericFilter
  : T extends string ? StringFilter
  : T extends LocalDate ? LocalDateFilter
  : T extends Timestamp ? TimestampFilter
  : T extends boolean ? BooleanFilter
  : never;
