/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
 * Prefix applied to column ids when registering them as dnd-kit
 * `useDroppable` targets. Keeps the column droppable namespace disjoint
 * from the card draggable namespace so a column id that happens to equal
 * an object primary key does not produce ambiguous drop semantics.
 */
export const COLUMN_DROPPABLE_PREFIX = "kanban-column::";
