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

import type { ManyToManyJoinCondition } from "./ManyToManyJoinCondition.js";
import type { ObjectTypeJoinCondition } from "./ObjectTypeJoinCondition.js";
export interface JoinCondition_objectType {
  type: "objectType";
  objectType: ObjectTypeJoinCondition;
}

export interface JoinCondition_manyToMany {
  type: "manyToMany";
  manyToMany: ManyToManyJoinCondition;
}
/**
 * Specifies which Object Sets to join, and how they should be joined.
 */
export type JoinCondition = JoinCondition_objectType | JoinCondition_manyToMany;
