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
import { CaretDown, Cross, Tick } from "@blueprintjs/icons";
import React, { useCallback, useState } from "react";
import { Combobox } from "../../base-components/combobox/Combobox.js";
import comboboxStyles from "../../base-components/combobox/Combobox.module.css";
import { Select } from "../../base-components/select/Select.js";
import selectStyles from "../../base-components/select/Select.module.css";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";

const EMPTY_ARRAY: [] = [];

interface InnerSelectProps<V, Multiple extends boolean>
  extends Omit<DropdownFieldProps<V, Multiple>, "isSearchable">
{
  itemToStringLabel: (item: V) => string;
  getKey: (item: V) => string;
  portalRef?: React.Ref<HTMLDivElement>;
}

interface InnerComboboxProps<V, Multiple extends boolean>
  extends InnerSelectProps<V, Multiple>
{
  isSearchable: boolean;
}

export function DropdownField<V, Multiple extends boolean = false>({
  isSearchable = false,
  itemToStringLabel,
  itemToKey,
  portalRef,
  value,
  ...rest
}: DropdownFieldProps<V, Multiple>): React.ReactElement {
  // Ensure always controlled from first render: multi-select needs [],
  // single-select needs null. Passing undefined switches Base UI from
  // uncontrolled to controlled and triggers a warning.
  const normalizedValue = (value
    ?? (rest.isMultiple ? EMPTY_ARRAY : null)) as typeof value;

  const resolvedItemToStringLabel = itemToStringLabel
    ?? defaultItemToStringLabel;

  const getKey = useCallback(
    (item: V) => itemToKey?.(item) ?? resolvedItemToStringLabel(item),
    [itemToKey, resolvedItemToStringLabel],
  );

  // Multi-select always uses Combobox for the chip-based UI because it looks better
  if (isSearchable || rest.isMultiple) {
    return (
      <ComboboxDropdown
        {...rest}
        value={normalizedValue}
        itemToStringLabel={resolvedItemToStringLabel}
        getKey={getKey}
        portalRef={portalRef}
        isSearchable={isSearchable}
      />
    );
  }

  return (
    <SelectDropdown
      {...rest}
      value={normalizedValue}
      itemToStringLabel={resolvedItemToStringLabel}
      getKey={getKey}
      portalRef={portalRef}
    />
  );
}

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
  isMultiple,
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
        multiple={isMultiple}
        isItemEqualToValue={isItemEqual}
        itemToStringLabel={itemToStringLabel}
      >
        <Select.Trigger placeholder={placeholder}>
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
              <Cross />
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
        autoHighlight={isSearchable}
      >
        <Combobox.Trigger
          className={isMultiple
            ? comboboxStyles.osdkComboboxTriggerMulti
            : undefined}
        >
          <div className={comboboxStyles.osdkComboboxValueContainer}>
            {isMultiple && hasValue
              ? (
                <div className={comboboxStyles.osdkComboboxTriggerChips}>
                  {(value as V[]).map((item) => (
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
              <Cross />
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
              <Combobox.Empty>No results</Combobox.Empty>
              <Combobox.List>
                {isMultiple ? renderItemWithIndicator : renderItem}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  );
});

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
