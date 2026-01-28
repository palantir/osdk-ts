/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeDefinition, WhereClause } from "@osdk/api";
import type { FilterState } from "../FilterListItemApi.js";

/**
 * Filter states indexed by key (serializable to JSON)
 */
export type SerializableFilterStates = Record<string, FilterState>;

/**
 * Persisted state for the filter list
 * Can be serialized and stored for session persistence
 *
 * Note: Only includes serializable data. Filter definitions are not persisted
 * because they may contain callback functions which cannot be serialized.
 */
export interface FilterListPersistedState<
  Q extends ObjectTypeDefinition = ObjectTypeDefinition,
> {
  collapsed: boolean;
  filterStatesByKey: SerializableFilterStates;
  filterClause?: WhereClause<Q>;
}
