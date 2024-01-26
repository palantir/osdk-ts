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
  FilteredPropertiesTerminalOperations,
  ObjectSetDefinition,
  OntologyObject,
} from "../baseTypes";
import type { ListObjectsError } from "../errors";
import type { AggregatableObjectSetStep } from "../objectSets/aggregations";
import type { Page } from "../Page";
import type { Result } from "../Result";
import type {
  ObjectSetAggregateArg,
  ObjectSetGroupByArg,
  ObjectSetMultipleAggregateArg,
} from "./aggregations";
import type { ObjectTypeFilterFunction } from "./filters";
import type { OrderByFunction } from "./ordering";
import type { SearchAround } from "./searchAround";
import type { SelectableProperties } from "./utils/OmitProperties";

export type ObjectSet<O extends OntologyObject> =
  & {
    definition: ObjectSetDefinition;
  }
  & ObjectSetOperations<O>
  & SearchAround<O>
  & ObjectSetOrderByStep<O>
  & ObjectSetTerminalLoadStep<O>
  & AggregatableObjectSetStep<
    ObjectSetAggregateArg<O>,
    ObjectSetMultipleAggregateArg<O>,
    ObjectSetGroupByArg<O>
  >;

export type ObjectSetOperations<O extends OntologyObject> = {
  where(
    predicate: ObjectTypeFilterFunction<O>,
  ): ObjectSet<O>;

  union(
    ...otherObjectSets: ObjectSet<O>[]
  ): ObjectSet<O>;

  intersect(
    ...otherObjectSets: ObjectSet<O>[]
  ): ObjectSet<O>;

  subtract(
    ...otherObjectSets: ObjectSet<O>[]
  ): ObjectSet<O>;

  select<T extends keyof SelectableProperties<O>>(
    properties: readonly T[],
  ): FilteredPropertiesTerminalOperations<O, T[]>;
};

export type ObjectSetOrderByStep<O extends OntologyObject> = {
  orderBy: (
    predicate: OrderByFunction<O>,
  ) => ObjectSetOrderByStep<O>;

  select<T extends keyof SelectableProperties<O>>(
    properties: readonly T[],
  ): FilteredPropertiesTerminalOperations<O, T[]>;
} & ObjectSetTerminalLoadStep<O>;

export type ObjectSetTerminalLoadStep<O extends OntologyObject> = {
  /**
   * Get a page of objects of this type.
   */
  page(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<Result<Page<O>, ListObjectsError>>;

  /**
   * Get all objects of this type.
   */
  all(): Promise<Result<O[], ListObjectsError>>;
};
