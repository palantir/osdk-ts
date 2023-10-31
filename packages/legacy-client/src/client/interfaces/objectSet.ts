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

import type { ObjectTypesFrom, OntologyDefinition } from "@osdk/api";
import type { ListObjectsError, Page, Result } from "../../ontology-runtime";
import type { OsdkLegacyObjectFrom } from "../OsdkObject";
import type { ObjectTypeFilterFunction } from "./filters";
import type { OrderByFunction } from "./ordering";
import type { SearchAround } from "./searchAround";

export type ObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> =
  & {
    where(
      predicate: ObjectTypeFilterFunction<O, K>,
    ): ObjectSet<O, K>;

    union(
      ...otherObjectSets: ObjectSet<O, K>[]
    ): ObjectSet<O, K>;

    intersect(
      ...otherObjectSets: ObjectSet<O, K>[]
    ): ObjectSet<O, K>;

    subtract(
      ...otherObjectSets: ObjectSet<O, K>[]
    ): ObjectSet<O, K>;
  }
  & SearchAround<O, K>
  & ObjectSetOrderByStep<O, K>
  & ObjectSetTerminalLoadStep<O, K>;

export type ObjectSetOrderByStep<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  orderBy: (
    predicate: OrderByFunction<O, K>,
  ) => ObjectSetOrderByStep<O, K>;
};

export type ObjectSetTerminalLoadStep<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  /**
   * Get a page of objects of this type.
   */
  page(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<Result<Page<OsdkLegacyObjectFrom<O, K>>, ListObjectsError>>;
  /**
   * Get all objects of this type.
   */
  all(): Promise<Result<OsdkLegacyObjectFrom<O, K>[], ListObjectsError>>;
};
