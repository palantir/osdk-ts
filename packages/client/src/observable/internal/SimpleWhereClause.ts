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


/**
 * A where clause without specific type information - used for runtime matching logic.
 * This type accepts any WhereClause<T> via structural typing.
 */
export type SimpleWhereClause =
  | { $and?: SimpleWhereClause[]; $or?: never; $not?: never }
  | { $or?: SimpleWhereClause[]; $and?: never; $not?: never }
  | { $not?: SimpleWhereClause; $and?: never; $or?: never }
  | Record<string, unknown>;
