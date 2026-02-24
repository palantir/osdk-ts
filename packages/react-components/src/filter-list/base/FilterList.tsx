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

import { Button } from "@base-ui/react/button";
import type { ObjectTypeDefinition } from "@osdk/api";
import classnames from "classnames";
import React, { useCallback, useMemo } from "react";
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "../FilterListApi.js";
import { useFilterListState } from "../hooks/useFilterListState.js";
import styles from "./FilterList.module.css";
import { FilterListContent } from "./FilterListContent.js";
import { FilterListHeader } from "./FilterListHeader.js";

export function FilterList<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): React.ReactElement {
  const {
    title,
    titleIcon,
    filterDefinitions,
    showResetButton = false,
    onReset,
    onFilterAdded,
    showActiveFilterCount = false,
    className,
    renderAddFilterButton,
  } = props;

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

  const showAddButton = renderAddFilterButton != null || onFilterAdded != null;

  return (
    <div
      className={classnames(styles.filterList, className)}
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
        />
      )}

      <FilterListContent
        filterDefinitions={visibleFilterDefinitions}
        filterStates={filterStates}
        onFilterStateChanged={setFilterState}
        whereClause={whereClause}
      />

      {showAddButton && (
        <div className={styles.addButtonContainer}>
          {renderAddFilterButton
            ? renderAddFilterButton()
            : (
              <Button type="button" className={styles.addButton}>
                + Add filter
              </Button>
            )}
        </div>
      )}
    </div>
  );
}
