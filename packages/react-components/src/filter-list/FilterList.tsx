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
import React, { useCallback, useMemo, useRef } from "react";
import { BaseFilterList } from "./base/BaseFilterList.js";
import type { RenderFilterInput } from "./base/BaseFilterListApi.js";
import { FilterInput } from "./FilterInput.js";
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "./FilterListApi.js";
import { useFilterListState } from "./hooks/useFilterListState.js";
import type { FilterListClassNames } from "./types/ClassNameOverrides.js";

export interface FilterListComponentProps<Q extends ObjectTypeDefinition>
  extends FilterListProps<Q>
{
  classNames?: FilterListClassNames;
  renderAddFilterButton?: () => React.ReactNode;
  style?: React.CSSProperties;
}

export function FilterList<Q extends ObjectTypeDefinition>(
  props: FilterListComponentProps<Q>,
): React.ReactElement {
  const {
    objectSet,
    title,
    titleIcon,
    filterDefinitions,
    showResetButton = false,
    onReset,
    showActiveFilterCount = false,
    onFiltersReordered,
    className,
    classNames,
    renderAddFilterButton,
    style,
  } = props;

  const objectType = objectSet.$objectSetInternals.def;

  const {
    filterStates,
    setFilterState,
    whereClause,
    activeFilterCount,
    reset,
  } = useFilterListState(props);

  const handleReset = useCallback(() => {
    reset();
    onReset?.();
  }, [reset, onReset]);

  const visibleFilterDefinitions = useMemo(() => {
    if (!filterDefinitions) {
      return undefined;
    }
    return filterDefinitions.filter(
      (def: FilterDefinitionUnion<Q>) => def.isVisible !== false,
    );
  }, [filterDefinitions]);

  const whereClauseRef = useRef(whereClause);
  whereClauseRef.current = whereClause;

  const renderInput = useCallback<RenderFilterInput<Q>>(
    ({ definition, filterState, onFilterStateChanged }) => (
      <FilterInput
        objectType={objectType}
        objectSet={objectSet}
        definition={definition}
        filterState={filterState}
        onFilterStateChanged={onFilterStateChanged}
        whereClause={whereClauseRef.current}
      />
    ),
    [objectType, objectSet],
  );

  return (
    <BaseFilterList
      title={title}
      titleIcon={titleIcon}
      filterDefinitions={visibleFilterDefinitions}
      filterStates={filterStates}
      onFilterStateChanged={setFilterState}
      renderInput={renderInput}
      activeFilterCount={activeFilterCount}
      onReset={handleReset}
      showResetButton={showResetButton}
      showActiveFilterCount={showActiveFilterCount}
      onFiltersReordered={onFiltersReordered}
      className={className}
      classNames={classNames}
      renderAddFilterButton={renderAddFilterButton}
      style={style}
    />
  );
}
