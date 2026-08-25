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

import { Button, MenuItem } from "@blueprintjs/core";
import {
  Select,
  type ItemPredicate,
  type ItemRenderer,
} from "@blueprintjs/select";
import React, { memo, useCallback, useMemo } from "react";

import {
  resolvePortalContainerElement,
  usePortalContainer,
} from "../../shared/PortalContainerContext.js";
import { useFilterListBoundary } from "./FilterListBoundaryContext.js";

import styles from "./AddFilterPopover.module.css";

interface HiddenFilterItem {
  key: string;
  label: string;
}

interface AddFilterPopoverProps {
  hiddenDefinitions: Array<HiddenFilterItem>;
  onShowFilter: (key: string) => void;
  renderTrigger?: () => React.ReactNode;
}

const FILTER_SELECT_INPUT_PROPS = { placeholder: "Search filters" };
const NO_MATCHING_FILTERS = (
  <MenuItem disabled={true} text="No matching filters" />
);

const filterHiddenDefinition: ItemPredicate<HiddenFilterItem> = (query, item) =>
  item.label.toLowerCase().includes(query.toLowerCase().trim());

const renderHiddenDefinition: ItemRenderer<HiddenFilterItem> = (
  item,
  { handleClick, modifiers },
) => {
  if (!modifiers.matchesPredicate) return null;
  return (
    <MenuItem
      active={modifiers.active}
      key={item.key}
      onClick={handleClick}
      text={item.label}
    />
  );
};

function AddFilterPopoverInner({
  hiddenDefinitions,
  onShowFilter,
  renderTrigger,
}: AddFilterPopoverProps): React.ReactElement {
  const collisionBoundary = useFilterListBoundary();
  const portalContainer = resolvePortalContainerElement(usePortalContainer());
  const popoverProps = useMemo(
    () => ({ boundary: collisionBoundary, portalContainer }),
    [collisionBoundary, portalContainer],
  );
  const handleItemSelect = useCallback(
    (item: HiddenFilterItem) => onShowFilter(item.key),
    [onShowFilter],
  );

  return (
    <Select<HiddenFilterItem>
      items={hiddenDefinitions}
      itemPredicate={filterHiddenDefinition}
      itemRenderer={renderHiddenDefinition}
      onItemSelect={handleItemSelect}
      inputProps={FILTER_SELECT_INPUT_PROPS}
      noResults={NO_MATCHING_FILTERS}
      popoverProps={popoverProps}
    >
      <Button
        className={renderTrigger == null ? styles.trigger : undefined}
        text={renderTrigger != null ? renderTrigger() : "+ Add filter"}
      />
    </Select>
  );
}

export const AddFilterPopover: React.MemoExoticComponent<
  typeof AddFilterPopoverInner
> = memo(AddFilterPopoverInner);
