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

// cspell:ignore listoption

import { Button, Menu, MenuItem } from "@blueprintjs/core";
import { CaretDown } from "@blueprintjs/icons";
import {
  type ItemListRenderer,
  type ItemRenderer,
  MultiSelect,
  Select,
} from "@blueprintjs/select";
import React, { useCallback } from "react";

import { resolvePortalContainerElement } from "../../shared/PortalContainerContext.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";

const EMPTY_ARRAY: [] = [];
const NO_RESULTS = (
  <MenuItem disabled={true} roleStructure="listoption" text="No results" />
);

interface ResolvedDropdownProps<
  V,
  Multiple extends boolean,
> extends DropdownFieldProps<V, Multiple> {
  itemToStringLabel: (item: V) => string;
  renderItemLabel: (item: V) => React.ReactNode;
  getKey: (item: V) => string;
  onBlur?: () => void;
}

export const DropdownField: <V, Multiple extends boolean = false>(
  props: DropdownFieldProps<V, Multiple> & { onBlur?: () => void },
) => React.ReactElement = typedReactMemo(function DropdownFieldFn<
  V,
  Multiple extends boolean = false,
>({
  itemToStringLabel,
  renderItemLabel,
  itemToKey,
  ...props
}: DropdownFieldProps<V, Multiple> & {
  onBlur?: () => void;
}): React.ReactElement {
  const resolvedItemToStringLabel =
    itemToStringLabel ?? defaultItemToStringLabel;
  const resolvedRenderItemLabel = renderItemLabel ?? resolvedItemToStringLabel;
  const getKey = useCallback(
    (item: V) => itemToKey?.(item) ?? resolvedItemToStringLabel(item),
    [itemToKey, resolvedItemToStringLabel],
  );
  const resolvedProps: ResolvedDropdownProps<V, Multiple> = {
    ...props,
    getKey,
    itemToStringLabel: resolvedItemToStringLabel,
    renderItemLabel: resolvedRenderItemLabel,
  };

  return props.isMultiple ? (
    <MultipleDropdown {...resolvedProps} />
  ) : (
    <SingleDropdown {...resolvedProps} />
  );
});

const SingleDropdown = typedReactMemo(function SingleDropdownFn<
  V,
  Multiple extends boolean,
>({
  id,
  value,
  onChange,
  items,
  itemToStringLabel,
  renderItemLabel,
  getKey,
  isItemEqual,
  isSearchable = false,
  placeholder = "Select…",
  portalRef,
  portalContainer,
  query,
  onQueryChange,
  disableClientSideFiltering = false,
  popupStatus,
  trailingItem,
  onBlur,
  modal = true,
  disabled,
}: ResolvedDropdownProps<V, Multiple>): React.ReactElement {
  // The parent routes all multiple selections to MultipleDropdown. TypeScript
  // cannot narrow a conditional type from that runtime branch.
  const selectedItem = (value ?? null) as V | null;

  const isSelected = useCallback(
    (item: V) =>
      selectedItem != null &&
      (isItemEqual?.(item, selectedItem) ?? item === selectedItem),
    [isItemEqual, selectedItem],
  );
  const itemRenderer = useCallback<ItemRenderer<V>>(
    (item, { handleClick, modifiers }) => {
      if (!modifiers.matchesPredicate) return null;
      return (
        <MenuItem
          active={modifiers.active}
          key={getKey(item)}
          onClick={handleClick}
          roleStructure="listoption"
          selected={isSelected(item)}
          text={renderItemLabel(item)}
        />
      );
    },
    [getKey, isSelected, renderItemLabel],
  );
  const itemPredicate = useCallback(
    (nextQuery: string, item: V) =>
      disableClientSideFiltering ||
      itemToStringLabel(item)
        .toLocaleLowerCase()
        .includes(nextQuery.toLocaleLowerCase()),
    [disableClientSideFiltering, itemToStringLabel],
  );
  const itemListRenderer = useDropdownItemListRenderer<V>(
    popupStatus,
    trailingItem,
  );
  const handleItemSelect = useCallback(
    (item: V) => {
      // SingleDropdown is only reached when isMultiple is false.
      (onChange as ((nextValue: V) => void) | undefined)?.(item);
      onBlur?.();
    },
    [onBlur, onChange],
  );

  return (
    <Select<V>
      disabled={disabled}
      filterable={isSearchable}
      fill={true}
      itemListRenderer={itemListRenderer}
      itemPredicate={itemPredicate}
      itemRenderer={itemRenderer}
      items={items}
      itemsEqual={isItemEqual}
      noResults={NO_RESULTS}
      onItemSelect={handleItemSelect}
      onQueryChange={onQueryChange}
      placeholder="Search…"
      popoverProps={{
        hasBackdrop: modal,
        matchTargetWidth: true,
        minimal: true,
        portalContainer: resolvePortalContainerElement(portalContainer),
        popoverRef: portalRef,
      }}
      query={query}
      resetOnClose={true}
    >
      <Button
        alignText="start"
        disabled={disabled}
        endIcon={<CaretDown />}
        fill={true}
        id={id}
        text={
          selectedItem == null ? placeholder : renderItemLabel(selectedItem)
        }
      />
    </Select>
  );
});

const MultipleDropdown = typedReactMemo(function MultipleDropdownFn<
  V,
  Multiple extends boolean,
>({
  id,
  value,
  onChange,
  items,
  itemToStringLabel,
  renderItemLabel,
  getKey,
  isItemEqual,
  isSearchable = false,
  placeholder = "Select…",
  portalRef,
  portalContainer,
  query,
  onQueryChange,
  disableClientSideFiltering = false,
  popupStatus,
  trailingItem,
  onBlur,
  modal = true,
  disabled,
}: ResolvedDropdownProps<V, Multiple>): React.ReactElement {
  const selectedItems = Array.isArray(value) ? value : EMPTY_ARRAY;
  const isSelected = useCallback(
    (item: V) =>
      selectedItems.some(
        (selectedItem) =>
          isItemEqual?.(item, selectedItem) ?? item === selectedItem,
      ),
    [isItemEqual, selectedItems],
  );
  const emitChange = useCallback(
    (nextValue: V[]) => {
      // MultipleDropdown is only reached when isMultiple is true.
      (onChange as ((nextValue: V[]) => void) | undefined)?.(nextValue);
      onBlur?.();
    },
    [onBlur, onChange],
  );
  const handleItemSelect = useCallback(
    (item: V) => {
      emitChange(
        isSelected(item)
          ? selectedItems.filter(
              (selectedItem) =>
                !(isItemEqual?.(item, selectedItem) ?? item === selectedItem),
            )
          : [...selectedItems, item],
      );
    },
    [emitChange, isItemEqual, isSelected, selectedItems],
  );
  const handleRemove = useCallback(
    (item: V) => {
      emitChange(
        selectedItems.filter(
          (selectedItem) =>
            !(isItemEqual?.(item, selectedItem) ?? item === selectedItem),
        ),
      );
    },
    [emitChange, isItemEqual, selectedItems],
  );
  const handleClear = useCallback(() => emitChange([]), [emitChange]);
  const itemRenderer = useCallback<ItemRenderer<V>>(
    (item, { handleClick, modifiers }) => {
      if (!modifiers.matchesPredicate) return null;
      return (
        <MenuItem
          active={modifiers.active}
          key={getKey(item)}
          onClick={handleClick}
          roleStructure="listoption"
          selected={isSelected(item)}
          shouldDismissPopover={false}
          text={renderItemLabel(item)}
        />
      );
    },
    [getKey, isSelected, renderItemLabel],
  );
  const itemPredicate = useCallback(
    (nextQuery: string, item: V) =>
      disableClientSideFiltering ||
      itemToStringLabel(item)
        .toLocaleLowerCase()
        .includes(nextQuery.toLocaleLowerCase()),
    [disableClientSideFiltering, itemToStringLabel],
  );
  const itemListRenderer = useDropdownItemListRenderer<V>(
    popupStatus,
    trailingItem,
  );

  return (
    <MultiSelect<V>
      disabled={disabled}
      fill={true}
      itemListRenderer={itemListRenderer}
      itemPredicate={itemPredicate}
      itemRenderer={itemRenderer}
      items={items}
      itemsEqual={isItemEqual}
      noResults={NO_RESULTS}
      onClear={handleClear}
      onItemSelect={handleItemSelect}
      onQueryChange={onQueryChange}
      onRemove={handleRemove}
      placeholder={placeholder}
      popoverProps={{
        hasBackdrop: modal,
        matchTargetWidth: true,
        minimal: true,
        portalContainer: resolvePortalContainerElement(portalContainer),
        popoverRef: portalRef,
      }}
      query={query}
      selectedItems={selectedItems}
      tagInputProps={{
        inputProps: { "aria-label": placeholder, id, readOnly: !isSearchable },
      }}
      tagRenderer={renderItemLabel}
    />
  );
});

function useDropdownItemListRenderer<V>(
  popupStatus: React.ReactNode,
  trailingItem: React.ReactNode,
): ItemListRenderer<V> | undefined {
  const itemListRenderer = useCallback<ItemListRenderer<V>>(
    ({ filteredItems, itemsParentRef, menuProps, renderItem }) => {
      const renderedItems = filteredItems.map(renderItem).filter(Boolean);
      return (
        <div>
          {popupStatus}
          <Menu role="listbox" {...menuProps} ulRef={itemsParentRef}>
            {renderedItems.length > 0 ? renderedItems : NO_RESULTS}
          </Menu>
          {trailingItem}
        </div>
      );
    },
    [popupStatus, trailingItem],
  );
  return popupStatus == null && trailingItem == null
    ? undefined
    : itemListRenderer;
}

function defaultItemToStringLabel<V>(item: V): string {
  if (item == null || typeof item !== "object") return String(item);
  if ("label" in item && typeof item.label === "string") return item.label;
  return String(item);
}
