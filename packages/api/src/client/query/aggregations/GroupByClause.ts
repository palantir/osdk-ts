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
  PropertyDefinitionFrom,
} from "../../../ontology";
import type { AggregatableKeys } from "./AggregatableKeys";
import type { GroupByMapper } from "./GroupByMapper";

export type GroupByClause<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [P in AggregatableKeys<O, K>]?: GroupByEntry<O, K, P>;
};
export type StringGroupByValue = "exact" | { exactWithLimit: number };

type GroupByEntry<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  P extends AggregatableKeys<O, K>,
> = PropertyDefinitionFrom<O, K, P>["type"] extends keyof GroupByMapper
  ? GroupByMapper[PropertyDefinitionFrom<O, K, P>["type"]]
  : never;

export type AllGroupByValues = GroupByMapper[keyof GroupByMapper];
