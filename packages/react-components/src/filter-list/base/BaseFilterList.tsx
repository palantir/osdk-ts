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
import React from "react";
import type { BaseFilterListProps } from "./BaseFilterListApi.js";
import styles from "./FilterList.module.css";
import { FilterListContent } from "./FilterListContent.js";
import { FilterListHeader } from "./FilterListHeader.js";

export function BaseFilterList<Q extends ObjectTypeDefinition>(
  props: BaseFilterListProps<Q>,
): React.ReactElement {
  const {
    title,
    titleIcon,
    collapsed = false,
    onCollapsedChange,
    filterDefinitions,
    filterStates,
    onFilterStateChanged,
    renderInput,
    activeFilterCount,
    onReset,
    onFilterAdded,
    showResetButton = false,
    showActiveFilterCount = false,
    enableSorting,
    className,
    renderAddFilterButton,
  } = props;

  const showHeader = title || titleIcon || showResetButton
    || showActiveFilterCount || onCollapsedChange;

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
          collapsed={collapsed}
          onCollapsedChange={onCollapsedChange}
          showResetButton={showResetButton}
          onReset={onReset}
          showActiveFilterCount={showActiveFilterCount}
          activeFilterCount={activeFilterCount}
        />
      )}

      <FilterListContent
        filterDefinitions={filterDefinitions}
        filterStates={filterStates}
        onFilterStateChanged={onFilterStateChanged}
        renderInput={renderInput}
        enableSorting={enableSorting}
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
