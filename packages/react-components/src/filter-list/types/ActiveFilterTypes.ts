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

import type {
  LinkedType,
  LinkNames,
  ObjectTypeDefinition,
  WhereClause,
} from "@osdk/api";

import type { FilterState } from "../FilterListItemApi.js";
import type { CustomFilterState } from "./CustomRendererTypes.js";
import type { KeywordSearchFilterState } from "./KeywordSearchTypes.js";
import type {
  HasLinkFilterState,
  LinkedPropertyFilterState,
} from "./LinkedFilterTypes.js";

interface ActiveClauseFilterFields<
  Q extends ObjectTypeDefinition,
  S extends FilterState,
> {
  /** `getFilterKey` of the filter's definition. */
  filterKey: string;

  state: S;

  /** The clause this filter alone contributes. */
  clause: WhereClause<Q>;
}

/** An active `PROPERTY` filter. */
export interface ActivePropertyFilter<
  Q extends ObjectTypeDefinition,
> extends ActiveClauseFilterFields<Q, FilterState> {
  kind: "PROPERTY";
}

/** An active `STATIC_VALUES` filter. */
export interface ActiveStaticValuesFilter<
  Q extends ObjectTypeDefinition,
> extends ActiveClauseFilterFields<Q, FilterState> {
  kind: "STATIC_VALUES";
}

/** An active `KEYWORD_SEARCH` filter. */
export interface ActiveKeywordSearchFilter<
  Q extends ObjectTypeDefinition,
> extends ActiveClauseFilterFields<Q, KeywordSearchFilterState> {
  kind: "KEYWORD_SEARCH";
}

/** An active `CUSTOM` filter, with the clause its `toWhereClause` returned. */
export interface ActiveCustomFilter<
  Q extends ObjectTypeDefinition,
> extends ActiveClauseFilterFields<Q, CustomFilterState> {
  kind: "CUSTOM";
}

/**
 * An active `HAS_LINK` filter. Link presence has no `WhereClause` form, so
 * these carry the link instead of a clause.
 */
export type ActiveHasLinkFilter<Q extends ObjectTypeDefinition> = {
  [L in LinkNames<Q>]: {
    kind: "HAS_LINK";

    /** `getFilterKey` of the filter's definition. */
    filterKey: string;

    state: HasLinkFilterState;

    linkName: L;

    /** When true, only objects with no linked object match. */
    isExcluding: boolean;
  };
}[LinkNames<Q>];

/**
 * An active `LINKED_PROPERTY` filter. Link traversal has no `WhereClause` form,
 * so these carry the link and the predicate applied to the linked objects.
 */
export type ActiveLinkedPropertyFilter<Q extends ObjectTypeDefinition> = {
  [L in LinkNames<Q>]: {
    kind: "LINKED_PROPERTY";

    /** `getFilterKey` of the filter's definition. */
    filterKey: string;

    state: LinkedPropertyFilterState;

    /**
     * The state of the input rendered for the linked property, i.e. what the
     * user picked. The same value as `state.linkedFilterState`.
     */
    innerState: FilterState;

    linkName: L;

    /** Predicate the linked objects must match. */
    innerWhere: WhereClause<LinkedType<Q, L>>;

    /** When true, only objects with no matching linked object match. */
    isExcluding: boolean;
  };
}[LinkNames<Q>];

/** The active filters that contribute a `clause`. */
export type ActiveClauseFilter<Q extends ObjectTypeDefinition> =
  | ActivePropertyFilter<Q>
  | ActiveStaticValuesFilter<Q>
  | ActiveKeywordSearchFilter<Q>
  | ActiveCustomFilter<Q>;

/**
 * The active filters that traverse a link. These filter by counting matching
 * linked objects, so they never appear in a `WhereClause`.
 */
export type ActiveLinkFilter<Q extends ObjectTypeDefinition> =
  | ActiveHasLinkFilter<Q>
  | ActiveLinkedPropertyFilter<Q>;

/**
 * An active filter, tagged with the kind of its definition. Narrow on `kind` to
 * reach the fields specific to that kind.
 */
export type ActiveFilter<Q extends ObjectTypeDefinition> =
  | ActiveClauseFilter<Q>
  | ActiveLinkFilter<Q>;
