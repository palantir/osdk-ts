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

import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";
import type { ObjectTypeDefinition } from "@osdk/api";
import React, { useCallback, useMemo, useState } from "react";
import { FilterList as BaseFilterList } from "../base/FilterList.js";
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "../FilterListApi.js";
import type { OverflowMenuRenderProps } from "../FilterListItemApi.js";
import type { FilterTemplate } from "../types/AddFilterMenuTypes.js";
import { mergeClassNames } from "../types/ClassNameOverrides.js";
import { AddFilterMenu } from "./AddFilterMenu.js";
import { filterListClassNames } from "./classNames.js";

function OverflowMenu({
  renderProps,
}: {
  renderProps: OverflowMenuRenderProps;
}): React.ReactElement {
  return (
    <Popover
      content={
        <Menu>
          <MenuItem
            icon="reset"
            text="Reset filter"
            onClick={() => renderProps.onResetFilter?.()}
          />
          <MenuItem
            icon="cross"
            text="Remove filter"
            intent="danger"
            onClick={() => renderProps.onRemoveFilter?.()}
          />
        </Menu>
      }
      placement="bottom-end"
      isOpen={renderProps.isOpen}
      onClose={renderProps.onClose}
    >
      <Button
        icon="more"
        variant="minimal"
        size="small"
        aria-label="More options"
        onClick={renderProps.onToggle}
      />
    </Popover>
  );
}

export function FilterList<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): React.ReactElement {
  const {
    filterTemplates,
    onFilterTemplateSelected,
    filterDefinitions,
    showAddFilterButton,
    ...restProps
  } = props;

  const [isAddFilterOpen, setIsAddFilterOpen] = useState(false);

  const mergedClassNames = {
    ...filterListClassNames,
    root: mergeClassNames(filterListClassNames.root, props.className),
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

  // Wrap filter definitions to inject default overflow menu renderer
  const wrappedFilterDefinitions = useMemo(():
    | Array<FilterDefinitionUnion<Q>>
    | undefined =>
  {
    if (!filterDefinitions) return undefined;

    return filterDefinitions.map((def) => {
      // Only inject for property filters that want overflow menu but don't have custom renderer
      if (
        def.type === "property"
        && def.showOverflowMenu
        && !def.renderOverflowMenu
      ) {
        return {
          ...def,
          renderOverflowMenu: (renderProps: OverflowMenuRenderProps) => (
            <OverflowMenu renderProps={renderProps} />
          ),
        };
      }
      return def;
    });
  }, [filterDefinitions]);

  const handleSelectFilter = useCallback(
    (template: FilterTemplate) => {
      onFilterTemplateSelected?.(template);
      setIsAddFilterOpen(false);
    },
    [onFilterTemplateSelected],
  );

  const renderAddFilterButton = useCallback(() => {
    const hasTemplates = filterTemplates && filterTemplates.length > 0;

    return (
      <Popover
        content={
          <AddFilterMenu
            templates={filterTemplates ?? []}
            activeCounts={activeCounts}
            onSelectFilter={handleSelectFilter}
            onClose={() => setIsAddFilterOpen(false)}
          />
        }
        placement="top"
        minimal
        fill
        isOpen={isAddFilterOpen}
        onClose={() => setIsAddFilterOpen(false)}
        disabled={!hasTemplates}
      >
        <Button
          text="Add filter"
          className="filter-list__add-button"
          onClick={() => setIsAddFilterOpen(true)}
          disabled={!hasTemplates}
        />
      </Popover>
    );
  }, [filterTemplates, isAddFilterOpen, activeCounts, handleSelectFilter]);

  return (
    <BaseFilterList
      {...restProps}
      filterDefinitions={wrappedFilterDefinitions}
      showAddFilterButton={showAddFilterButton}
      classNames={mergedClassNames}
      renderAddFilterButton={showAddFilterButton && filterTemplates
        ? renderAddFilterButton
        : undefined}
    />
  );
}
