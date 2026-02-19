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
    showResetButton = false,
    showActiveFilterCount = false,
    onFiltersReordered,
    className,
    classNames,
    renderAddFilterButton,
    style,
  } = props;

  const showHeader = title || titleIcon || showResetButton
    || showActiveFilterCount || onCollapsedChange;

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
          collapsed={collapsed}
          onCollapsedChange={onCollapsedChange}
          showResetButton={showResetButton}
          onReset={onReset}
          showActiveFilterCount={showActiveFilterCount}
          activeFilterCount={activeFilterCount}
          classNames={classNames}
        />
      )}

      <div
        className={styles.contentWrapper}
        data-collapsed={collapsed}
      >
        <div className={styles.contentInner}>
          <FilterListContent
            filterDefinitions={filterDefinitions}
            filterStates={filterStates}
            onFilterStateChanged={onFilterStateChanged}
            renderInput={renderInput}
            onFiltersReordered={onFiltersReordered}
            renderEmptyAction={renderAddFilterButton}
          />

          {renderAddFilterButton
            && filterDefinitions && filterDefinitions.length > 0 && (
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
      </div>
    </div>
  );
}
