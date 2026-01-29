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

import { Button } from "@blueprintjs/core";
import type { ObjectTypeDefinition } from "@osdk/api";
import classnames from "classnames";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FilterList as BaseFilterList } from "../base/FilterList.js";
import type { FilterListProps } from "../FilterListApi.js";
import type { FilterTemplate } from "../types/AddFilterMenuTypes.js";
import { AddFilterMenu } from "./AddFilterMenu.js";
import { filterListClassNames } from "./classNames.js";
import styles from "./FilterList.module.css";

export function FilterList<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): React.ReactElement {
  const {
    filterTemplates,
    onFilterTemplateSelected,
    filterDefinitions,
    ...restProps
  } = props;

  const showAddFilterButton = Boolean(
    filterTemplates && onFilterTemplateSelected,
  );

  const [isAddFilterOpen, setIsAddFilterOpen] = useState(false);

  const mergedClassNames = {
    ...filterListClassNames,
    root: classnames(filterListClassNames.root, props.className),
  };

  const activeCounts = useMemo(() => {
    if (!filterDefinitions) return {};
    return filterDefinitions.reduce<Record<string, number>>((acc, filter) => {
      if ("key" in filter && typeof filter.key === "string") {
        acc[filter.key] = (acc[filter.key] || 0) + 1;
      }
      return acc;
    }, {});
  }, [filterDefinitions]);

  const handleSelectFilter = useCallback(
    (template: FilterTemplate) => {
      onFilterTemplateSelected?.(template);
      setIsAddFilterOpen(false);
    },
    [onFilterTemplateSelected],
  );

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAddFilterOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsAddFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isAddFilterOpen]);

  const renderAddFilterButton = useCallback(() => {
    const hasTemplates = filterTemplates && filterTemplates.length > 0;

    return (
      <div className={styles.addFilterWrapper} ref={menuRef}>
        <Button
          text="Add filter"
          fill
          className="filter-list__add-button"
          onClick={() => setIsAddFilterOpen(!isAddFilterOpen)}
          disabled={!hasTemplates}
        />
        {isAddFilterOpen && (
          <div className={styles.addFilterDropdown}>
            <AddFilterMenu
              templates={filterTemplates ?? []}
              activeCounts={activeCounts}
              onSelectFilter={handleSelectFilter}
              onClose={() => setIsAddFilterOpen(false)}
            />
          </div>
        )}
      </div>
    );
  }, [filterTemplates, isAddFilterOpen, activeCounts, handleSelectFilter]);

  return (
    <BaseFilterList
      {...restProps}
      filterDefinitions={filterDefinitions}
      classNames={mergedClassNames}
      renderAddFilterButton={showAddFilterButton && filterTemplates
        ? renderAddFilterButton
        : undefined}
    />
  );
}
