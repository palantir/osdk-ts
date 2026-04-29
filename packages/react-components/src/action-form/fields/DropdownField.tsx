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
import { CaretDown, Cross, SmallCross, Tick } from "@blueprintjs/icons";
import React, { useCallback, useState } from "react";
import { Combobox } from "../../base-components/combobox/Combobox.js";
import comboboxStyles from "../../base-components/combobox/Combobox.module.css";
import { Select } from "../../base-components/select/Select.js";
import selectStyles from "../../base-components/select/Select.module.css";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";
import { type VirtualItemRenderProps } from "./VirtualizedItemList.js";

const EMPTY_ARRAY: [] = [];

/**
 * SelectDropdown is only used for single-select (the multi-select path
 * always routes to ComboboxDropdown). We keep the `Multiple` generic so
 * the spread from DropdownField type-checks, but SelectDropdown never
 * reads `isMultiple`.
 */
interface InnerSelectProps<V, Multiple extends boolean>
  extends Omit<DropdownFieldProps<V, Multiple>, "isSearchable">
{
  itemToStringLabel: (item: V) => string;
  getKey: (item: V) => string;
  portalRef?: React.Ref<HTMLDivElement>;
  query?: string;
  onQueryChange?: (query: string) => void;
}

interface InnerComboboxProps<V, Multiple extends boolean>
  extends InnerSelectProps<V, Multiple>
{
  isSearchable: boolean;
  disableClientSideFiltering?: boolean;
  popupStatus?: React.ReactNode;
  popupFooter?: React.ReactNode;
  onItemHighlighted?: DropdownFieldProps<V, Multiple>["onItemHighlighted"];
  renderItemList?: DropdownFieldProps<V, Multiple>["renderItemList"];
}

export const DropdownField: <V, Multiple extends boolean = false>(
  props: DropdownFieldProps<V, Multiple>,
) => React.ReactElement = typedReactMemo(function DropdownFieldFn<
  V,
  Multiple extends boolean = false,
>({
  isSearchable = false,
  isMultiple,
  itemToStringLabel,
  itemToKey,
  value,
  query,
  onQueryChange,
  disableClientSideFiltering,
  popupStatus,
  popupFooter,
  onItemHighlighted,
  renderItemList,
  ...rest
}: DropdownFieldProps<V, Multiple>): React.ReactElement {
  // Ensure always controlled from first render: multi-select needs [],
  // single-select needs null. Passing undefined switches Base UI from
  // uncontrolled to controlled and triggers a warning.
  const normalizedValue = (value
    ?? (isMultiple ? EMPTY_ARRAY : null)) as typeof value;

  const resolvedItemToStringLabel = itemToStringLabel
    ?? defaultItemToStringLabel;

  const getKey = useCallback(
    (item: V) => itemToKey?.(item) ?? resolvedItemToStringLabel(item),
    [itemToKey, resolvedItemToStringLabel],
  );

  // Multi-select always uses Combobox for the chip-based UI because it looks better
  if (isSearchable || isMultiple) {
    return (
      <ComboboxDropdown
        {...rest}
        isMultiple={isMultiple}
        value={normalizedValue}
        itemToStringLabel={resolvedItemToStringLabel}
        getKey={getKey}
        isSearchable={isSearchable}
        query={query}
        onQueryChange={onQueryChange}
        disableClientSideFiltering={disableClientSideFiltering}
        popupStatus={popupStatus}
        popupFooter={popupFooter}
        onItemHighlighted={onItemHighlighted}
        renderItemList={renderItemList}
      />
    );
  }

  return (
    <SelectDropdown
      {...rest}
      value={normalizedValue}
      itemToStringLabel={resolvedItemToStringLabel}
      getKey={getKey}
    />
  );
});

const SelectDropdown = typedReactMemo(function SelectDropdownFn<
  V,
  Multiple extends boolean,
>({
  id,
  value,
  onChange,
  items,
  itemToStringLabel,
  getKey,
  isItemEqual,
  placeholder,
  portalRef,
}: InnerSelectProps<V, Multiple>): React.ReactElement {
  const [open, setOpen] = useState(false);

  const hasValue = value != null;

  const handleClear = useCallback(() => {
    onChange?.(null as Parameters<NonNullable<typeof onChange>>[0]);
    setOpen(false);
  }, [onChange]);

  return (
    <div>
      <Select.Root
        value={value}
        onValueChange={onChange}
        open={open}
        onOpenChange={setOpen}
        isItemEqualToValue={isItemEqual}
        itemToStringLabel={itemToStringLabel}
      >
        <Select.Trigger id={id} placeholder={placeholder}>
          <div className={selectStyles.osdkSelectValueContainer}>
            <Select.Value />
            {placeholder != null && (
              <span className={selectStyles.osdkSelectPlaceholder}>
                {placeholder}
              </span>
            )}
          </div>
          {hasValue && (
            <Button
              aria-label="Clear"
              className={selectStyles.osdkSelectClear}
              onMouseDown={preventTriggerOpen}
              onClick={handleClear}
            >
              <SmallCross />
            </Button>
          )}
          <span className={selectStyles.osdkSelectIcon}>
            <CaretDown />
          </span>
        </Select.Trigger>
        <Select.Portal ref={portalRef}>
          <Select.Positioner>
            <Select.Popup>
              {items.map((item) => (
                <Select.Item key={getKey(item)} value={item}>
                  {itemToStringLabel(item)}
                </Select.Item>
              ))}
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </div>
  );
});

const ComboboxDropdown = typedReactMemo(function ComboboxDropdownFn<
  V,
  Multiple extends boolean,
>({
  id,
  value,
  onChange,
  items,
  itemToStringLabel,
  getKey,
  isItemEqual,
  isMultiple,
  isSearchable,
  placeholder,
  portalRef,
  query,
  onQueryChange,
  disableClientSideFiltering,
  popupStatus,
  popupFooter,
  virtualized,
  onItemHighlighted,
  renderItemList,
}: InnerComboboxProps<V, Multiple>): React.ReactElement {
  const [open, setOpen] = useState(false);

  const hasValue = isMultiple
    ? Array.isArray(value) && value.length > 0
    : value != null;

  const handleClear = useCallback(() => {
    const cleared = isMultiple ? (EMPTY_ARRAY as V[]) : null;
    onChange?.(cleared as Parameters<NonNullable<typeof onChange>>[0]);
    // Single-select: close after clearing. Multi-select: keep open for continued selection.
    if (!isMultiple) {
      setOpen(false);
    }
  }, [isMultiple, onChange]);

  const handleRemoveItem = useCallback(
    (itemToRemove: V) => {
      if (!isMultiple || !Array.isArray(value)) {
        return;
      }
      const next = value.filter((v) =>
        isItemEqual != null
          ? !isItemEqual(v, itemToRemove)
          : v !== itemToRemove
      );
      onChange?.(next as Parameters<NonNullable<typeof onChange>>[0]);
    },
    [isMultiple, value, onChange, isItemEqual],
  );

  const renderItem = useCallback(
    (item: V) => (
      <Combobox.Item key={getKey(item)} value={item}>
        {itemToStringLabel(item)}
      </Combobox.Item>
    ),
    [getKey, itemToStringLabel],
  );

  const renderItemWithIndicator = useCallback(
    (item: V) => (
      <Combobox.Item key={getKey(item)} value={item}>
        <Combobox.ItemIndicator>
          <Tick />
        </Combobox.ItemIndicator>
        {itemToStringLabel(item)}
      </Combobox.Item>
    ),
    [getKey, itemToStringLabel],
  );

  // Renders a single Combobox.Item by index — used by VirtualizedItemList
  // to render only visible items. The `virtualProps` contain positioning styles
  // and ARIA attributes that must go directly on the Combobox.Item for Base UI
  // keyboard navigation and screen reader support in virtualized mode.
  const renderItemByIndex = useCallback(
    (index: number, virtualProps: VirtualItemRenderProps) => {
      const item = items[index];
      if (item == null) {
        return null;
      }
      return (
        <Combobox.Item
          key={getKey(item)}
          value={item}
          index={index}
          {...virtualProps}
        >
          {isMultiple && (
            <Combobox.ItemIndicator>
              <Tick />
            </Combobox.ItemIndicator>
          )}
          {itemToStringLabel(item)}
        </Combobox.Item>
      );
    },
    [items, getKey, itemToStringLabel, isMultiple],
  );

  return (
    <div>
      <Combobox.Root
        value={value}
        onValueChange={onChange}
        open={open}
        onOpenChange={setOpen}
        multiple={isMultiple}
        itemToStringLabel={itemToStringLabel}
        isItemEqualToValue={isItemEqual}
        items={items}
        inputValue={query}
        onInputValueChange={onQueryChange}
        filter={disableClientSideFiltering ? null : undefined}
        virtualized={virtualized}
        onItemHighlighted={onItemHighlighted}
      >
        <Combobox.Trigger
          id={id}
          className={isMultiple
            ? comboboxStyles.osdkComboboxTriggerMulti
            : undefined}
        >
          <div className={comboboxStyles.osdkComboboxValueContainer}>
            {isMultiple && Array.isArray(value) && value.length > 0
              ? (
                <div className={comboboxStyles.osdkComboboxTriggerChips}>
                  {value.map((item: V) => (
                    <span
                      key={getKey(item)}
                      className={comboboxStyles.osdkComboboxTriggerChip}
                    >
                      {itemToStringLabel(item)}
                      <Button
                        aria-label={`Remove ${itemToStringLabel(item)}`}
                        className={comboboxStyles.osdkComboboxTriggerChipRemove}
                        onMouseDown={preventTriggerOpen}
                        onClick={() => handleRemoveItem(item)}
                      >
                        <Cross size={12} />
                      </Button>
                    </span>
                  ))}
                </div>
              )
              : (
                <>
                  <Combobox.Value />
                  {!hasValue && placeholder != null && (
                    <span className={comboboxStyles.osdkComboboxPlaceholder}>
                      {placeholder}
                    </span>
                  )}
                </>
              )}
          </div>
          {hasValue && (
            <Button
              aria-label="Clear"
              className={comboboxStyles.osdkComboboxClear}
              onMouseDown={preventTriggerOpen}
              onClick={handleClear}
            >
              <SmallCross />
            </Button>
          )}
          <Combobox.Icon>
            <CaretDown />
          </Combobox.Icon>
        </Combobox.Trigger>
        <Combobox.Portal ref={portalRef}>
          <Combobox.Positioner>
            <Combobox.Popup>
              {isSearchable && (
                <div className={comboboxStyles.osdkComboboxPopupSearchInput}>
                  <Combobox.SearchInput placeholder="Search…" />
                </div>
              )}
              {popupStatus}
              {/* Hide "No results" when popupStatus provides its own message (e.g. "Searching…") */}
              {popupStatus == null && (
                <Combobox.Empty>No results</Combobox.Empty>
              )}
              {renderItemList != null
                ? (
                  <Combobox.List>
                    {renderItemList(renderItemByIndex, items.length)}
                  </Combobox.List>
                )
                : (
                  <>
                    <Combobox.List>
                      {isMultiple ? renderItemWithIndicator : renderItem}
                    </Combobox.List>
                    {popupFooter}
                  </>
                )}
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  );
});

// Prevent the clear/remove click from bubbling into the trigger
// and toggling the dropdown open/closed.
function preventTriggerOpen(e: React.MouseEvent): void {
  e.stopPropagation();
  e.preventDefault();
}

function defaultItemToStringLabel<V>(item: V): string {
  if (item == null || typeof item !== "object") {
    return String(item);
  }
  if ("label" in item && item.label != null && typeof item.label === "string") {
    return item.label;
  }
  return String(item);
}
