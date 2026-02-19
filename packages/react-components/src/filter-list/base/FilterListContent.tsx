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

import type { ObjectTypeDefinition } from "@osdk/api";
import classnames from "classnames";
import React, { Suspense } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import styles from "./FilterListContent.module.css";
import { FilterListItem } from "./FilterListItem.js";
import type { SortableFilterListContentProps } from "./SortableFilterListContent.js";

const LazySortableFilterListContent = React.lazy(
  () => import("./SortableFilterListContent.js"),
);

function SortableContentBridge<Q extends ObjectTypeDefinition>(
  props: SortableFilterListContentProps<Q>,
): React.ReactElement {
  // @ts-expect-error React.lazy erases generic type parameters; runtime types are correct
  return <LazySortableFilterListContent {...props} />;
}

interface FilterListContentProps<Q extends ObjectTypeDefinition> {
  filterDefinitions?: Array<FilterDefinitionUnion<Q>>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (
    filterKey: string,
    state: FilterState,
  ) => void;
  renderInput: RenderFilterInput<Q>;
  onFiltersReordered?: (
    newOrder: ReadonlyArray<FilterDefinitionUnion<Q>>,
  ) => void;
  className?: string;
  style?: React.CSSProperties;
  renderEmptyAction?: () => React.ReactNode;
}

export function FilterListContent<Q extends ObjectTypeDefinition>({
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
  renderInput,
  onFiltersReordered,
  className,
  style,
  renderEmptyAction,
}: FilterListContentProps<Q>): React.ReactElement {
  if (!filterDefinitions || filterDefinitions.length === 0) {
    return (
      <div
        className={classnames(styles.content, className)}
        style={style}
        data-empty="true"
      >
        {renderEmptyAction && (
          <div className={styles.emptyAction}>
            {renderEmptyAction()}
          </div>
        )}
      </div>
    );
  }

  if (onFiltersReordered) {
    const plainFallback = (
      <div
        className={classnames(styles.content, className)}
        style={style}
      >
        {filterDefinitions.map((definition) => {
          const filterKey = getFilterKey(definition);
          const state = filterStates.get(filterKey);

          return (
            <FilterListItem
              key={filterKey}
              definition={definition}
              filterKey={filterKey}
              filterState={state}
              onFilterStateChanged={onFilterStateChanged}
              renderInput={renderInput}
            />
          );
        })}
      </div>
    );

    return (
      <Suspense fallback={plainFallback}>
        <SortableContentBridge
          filterDefinitions={filterDefinitions}
          filterStates={filterStates}
          onFilterStateChanged={onFilterStateChanged}
          renderInput={renderInput}
          onFiltersReordered={onFiltersReordered}
          className={className}
          style={style}
        />
      </Suspense>
    );
  }

  return (
    <div
      className={classnames(styles.content, className)}
      style={style}
    >
      {filterDefinitions.map((definition) => {
        const filterKey = getFilterKey(definition);
        const state = filterStates.get(filterKey);

        return (
          <FilterListItem
            key={filterKey}
            definition={definition}
            filterKey={filterKey}
            filterState={state}
            onFilterStateChanged={onFilterStateChanged}
            renderInput={renderInput}
          />
        );
      })}
    </div>
  );
}
