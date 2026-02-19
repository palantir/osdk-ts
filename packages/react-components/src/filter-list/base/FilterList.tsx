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
import React, { useCallback, useMemo } from "react";
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "../FilterListApi.js";
import { useFilterListState } from "../hooks/useFilterListState.js";
import type { FilterListClassNames } from "../types/ClassNameOverrides.js";
import styles from "./FilterList.module.css";
import { FilterListContent } from "./FilterListContent.js";
import { FilterListHeader } from "./FilterListHeader.js";

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
    if (!filterDefinitions) return undefined;
    return filterDefinitions.filter(
      (def: FilterDefinitionUnion<Q>) => def.isVisible !== false,
    );
  }, [filterDefinitions]);

  const showHeader = title || titleIcon || showResetButton
    || showActiveFilterCount;

  return (
    <div
      className={classnames(styles.filterList, classNames?.root, className)}
      style={style}
      data-active-count={activeFilterCount}
    >
      {showHeader && (
        <FilterListHeader
          title={title}
          titleIcon={titleIcon}
          showResetButton={showResetButton}
          onReset={handleReset}
          showActiveFilterCount={showActiveFilterCount}
          activeFilterCount={activeFilterCount}
          classNames={classNames}
        />
      )}

      <FilterListContent
        objectType={objectType}
        objectSet={objectSet}
        filterDefinitions={visibleFilterDefinitions}
        filterStates={filterStates}
        onFilterStateChanged={setFilterState}
        whereClause={whereClause}
        onFiltersReordered={onFiltersReordered}
        renderEmptyAction={renderAddFilterButton}
      />

      {renderAddFilterButton
        && visibleFilterDefinitions && visibleFilterDefinitions.length > 0 && (
        <div
          className={classnames(
            styles.addButtonContainer,
            classNames?.addButtonContainer,
          )}
        >
          {renderAddFilterButton()}
        </div>
      )}
    </div>
  );
}
