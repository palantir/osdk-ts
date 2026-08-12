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

import { assertUnreachable } from "../../shared/assertUnreachable.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { BaseFilterState, FilterState } from "../FilterListItemApi.js";
import type { CustomFilterDefinition } from "../types/CustomRendererTypes.js";
import type { LinkedPropertyFilterState } from "../types/LinkedFilterTypes.js";

/**
 * Resolves the state a definition seeds its filter with, preferring
 * `defaultFilterState` over the deprecated spellings.
 *
 * This is the single place the deprecation fallbacks live — callers that need
 * the seed should come through here rather than re-deriving the chain, since
 * which spellings are honoured differs per definition kind.
 *
 * For LINKED_PROPERTY the result is the stored `linkedProperty` wrapper, not
 * the inner state, matching what the filter-state map holds.
 *
 * TODO: when the deprecated spellings are removed, every case but
 * LINKED_PROPERTY collapses to `definition.defaultFilterState`. Keep the
 * function for the wrapper — that is a real shape difference between the
 * definition and the state map, not a deprecation artifact.
 */
export function getSeedFilterState<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): FilterState | undefined {
  switch (definition.type) {
    // `filterState` is the pre-rename spelling of the seed on these two, so it
    // stays honoured as a fallback.
    case "PROPERTY":
    case "STATIC_VALUES":
      return (
        definition.defaultFilterState ??
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- back-compat fallback for the pre-rename field
        definition.filterState
      );

    // `filterState` never seeded anything on these three, and deliberately
    // still doesn't — starting to read it would silently activate filters in
    // existing apps, since it used to be required and so is set everywhere.
    case "HAS_LINK":
    case "KEYWORD_SEARCH":
    case "CUSTOM":
      return definition.defaultFilterState;

    case "LINKED_PROPERTY": {
      const innerState =
        definition.defaultFilterState ??
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- back-compat fallback for the pre-rename field
        definition.defaultLinkedFilterState;
      return innerState == null
        ? undefined
        : ({
            type: "linkedProperty",
            linkedFilterState: innerState,
          } satisfies LinkedPropertyFilterState);
    }

    default:
      return assertUnreachable(definition);
  }
}

/**
 * Resolves the state handed to a custom filter's `renderInput` before the
 * filter has been touched.
 *
 * Deliberately a wider chain than {@link getSeedFilterState}: CUSTOM's
 * deprecated `filterState` is honoured here but not as a seed, because it has
 * only ever fed the renderer. A value there shows up in the input without
 * reaching `toWhereClause` or the active filter count.
 *
 * TODO: delete this helper when CUSTOM's deprecated `filterState` is removed.
 * That asymmetry is the only reason it is separate from
 * {@link getSeedFilterState}; the body becomes `defaultFilterState ??
 * emptyState`, which can be inlined into its single caller.
 */
export function getCustomRenderInputState<
  Q extends ObjectTypeDefinition,
  State extends BaseFilterState,
>(definition: CustomFilterDefinition<Q, State>, emptyState: State): State {
  return (
    definition.defaultFilterState ??
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- back-compat fallback for the pre-rename field
    definition.filterState ??
    emptyState
  );
}
