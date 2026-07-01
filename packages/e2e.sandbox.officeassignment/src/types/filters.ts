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

import type { ObjectTypeDefinition } from "@osdk/api";
import type { FilterDefinitionUnion } from "@osdk/react-components/experimental/filter-list";

/** Filter definition with a required id — used to key per-filter UI state. */
export type IdentifiedFilterDef<T extends ObjectTypeDefinition> =
  FilterDefinitionUnion<T> & { id: string };

/**
 * Reads the `id` off a filter definition. FilterList's callbacks type the definition as the wider
 * `FilterDefinitionUnion` (no `id`), but we only ever register `IdentifiedFilterDef`s, so the id is
 * present at runtime. Narrows without a cast.
 */
export function getFilterDefId<T extends ObjectTypeDefinition>(
  def: FilterDefinitionUnion<T>
): string | undefined {
  return "id" in def && typeof def.id === "string" ? def.id : undefined;
}
