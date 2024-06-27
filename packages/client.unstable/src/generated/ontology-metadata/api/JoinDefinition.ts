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

import type { ManyToManyJoinDefinition } from "./ManyToManyJoinDefinition.js";
import type { SingleKeyJoinDefinition } from "./SingleKeyJoinDefinition.js";
export interface JoinDefinition_singleKey {
  type: "singleKey";
  singleKey: SingleKeyJoinDefinition;
}

export interface JoinDefinition_joinTable {
  type: "joinTable";
  joinTable: ManyToManyJoinDefinition;
}
/**
 * There are two types of JoinDefinitions - singleKey and joinTable. The singleKey definition should be used when defining a relationship that is ONE_TO_ONE or ONE_TO_MANY. MANY_TO_MANY relationships should be defined with a joinTable definition.
 */
export type JoinDefinition =
  | JoinDefinition_singleKey
  | JoinDefinition_joinTable;
