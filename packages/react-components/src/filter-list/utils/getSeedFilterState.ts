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
import { getLinkedFilterComponent } from "./getLinkedFilterComponent.js";

/**
 * Resolves the state a definition seeds its filter with, preferring
 * `defaultFilterState` over the deprecated spellings, which differ per kind.
 *
 * The other two deprecation fallbacks live in `useFilterListState`
 * (`initialFilterStates`) and `getLinkedFilterComponent`; all three go together.
 *
 * TODO: without the deprecated spellings this collapses to
 * `definition.defaultFilterState` everywhere but LINKED_PROPERTY, which keeps
 * the wrapper — a real shape difference, not a deprecation artifact.
 */
export function getSeedFilterState<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): FilterState | undefined {
  switch (definition.type) {
    // `filterState` is the pre-rename seed here.
    case "PROPERTY":
    case "STATIC_VALUES":
      return (
        definition.defaultFilterState ??
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- pre-rename fallback
        definition.filterState
      );

    // `filterState` has never seeded these, and must not start: it is set on
    // nearly every existing definition, so reading it would activate filters
    // nobody asked for.
    case "HAS_LINK":
    case "KEYWORD_SEARCH":
    case "CUSTOM":
      return definition.defaultFilterState;

    // Definition holds the inner state; the map holds a `linkedProperty` wrapper.
    case "LINKED_PROPERTY": {
      // No component renders as unsupported, so seeding would narrow
      // `objectSet` off a filter the user can neither see nor clear.
      if (getLinkedFilterComponent(definition) == null) {
        return undefined;
      }
      const innerState =
        definition.defaultFilterState ??
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- pre-rename fallback
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
 * Resolves the state handed to an untouched custom filter's `renderInput`.
 *
 * Wider than {@link getSeedFilterState} on purpose: CUSTOM's deprecated
 * `filterState` feeds the renderer without seeding, so a value there shows in
 * the input without filtering anything.
 *
 * TODO: delete with CUSTOM's `filterState`. The body then becomes
 * `defaultFilterState ?? emptyState` and this function is not needed.
 */
export function getCustomRenderInputState<
  Q extends ObjectTypeDefinition,
  State extends BaseFilterState,
>(definition: CustomFilterDefinition<Q, State>, emptyState: State): State {
  return (
    definition.defaultFilterState ??
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- pre-rename fallback
    definition.filterState ??
    emptyState
  );
}
