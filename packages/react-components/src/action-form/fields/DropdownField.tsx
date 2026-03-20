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

import React, { useCallback, useMemo } from "react";
import { Combobox } from "../../base-components/combobox/Combobox.js";
import { Select } from "../../base-components/select/Select.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";

interface InnerDropdownProps<V, Multiple extends boolean>
  extends Omit<DropdownFieldProps<V, Multiple>, "isSearchable">
{
  itemToStringLabel: (item: V) => string;
  getKey: (item: V, index: number) => string;
}

export function DropdownField<V, Multiple extends boolean = false>({
  isSearchable = false,
  itemToStringLabel,
  itemToKey,
  ...rest
}: DropdownFieldProps<V, Multiple>): React.ReactElement {
  const resolvedItemToStringLabel = useMemo(
    () => itemToStringLabel ?? defaultItemToStringLabel,
    [itemToStringLabel],
  );

  const getKey = useCallback(
    (item: V, index: number) => itemToKey?.(item) ?? String(index),
    [itemToKey],
  );

  if (isSearchable) {
    return (
      <ComboboxDropdown
        {...rest}
        itemToStringLabel={resolvedItemToStringLabel}
        getKey={getKey}
      />
    );
  }

  return (
    <SelectDropdown
      {...rest}
      itemToStringLabel={resolvedItemToStringLabel}
      getKey={getKey}
    />
  );
}

const SelectDropdown = typedReactMemo(function SelectDropdownFn<
  V,
  Multiple extends boolean,
>({
  value,
  onChange,
  items,
  itemToStringLabel,
  getKey,
  isItemEqual,
  multiple,
}: InnerDropdownProps<V, Multiple>): React.ReactElement {
  return (
    <div data-testid="dropdown-select-field">
      <Select.Root
        value={value}
        onValueChange={onChange}
        multiple={multiple}
        isItemEqualToValue={isItemEqual}
        itemToStringLabel={itemToStringLabel}
      >
        <Select.Trigger />
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              {items.map((item, index) => (
                <Select.Item key={getKey(item, index)} value={item}>
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
  value,
  onChange,
  items,
  itemToStringLabel,
  getKey,
  isItemEqual,
  multiple,
}: InnerDropdownProps<V, Multiple>): React.ReactElement {
  const renderChips = useCallback(
    (selectedValues: V[]) => (
      <>
        {selectedValues.map((item, index) => (
          <Combobox.Chip
            key={getKey(item, index)}
            aria-label={itemToStringLabel(item)}
          >
            {itemToStringLabel(item)}
            <Combobox.ChipRemove />
          </Combobox.Chip>
        ))}
        <Combobox.Input
          placeholder={selectedValues.length > 0 ? "" : "Search…"}
        />
      </>
    ),
    [getKey, itemToStringLabel],
  );

  const renderItem = useCallback(
    (item: V, index: number) => (
      <Combobox.Item key={getKey(item, index)} value={item}>
        {itemToStringLabel(item)}
      </Combobox.Item>
    ),
    [getKey, itemToStringLabel],
  );

  return (
    <div data-testid="dropdown-combobox-field">
      <Combobox.Root
        value={value}
        onValueChange={onChange}
        multiple={multiple}
        itemToStringLabel={itemToStringLabel}
        isItemEqualToValue={isItemEqual}
        items={items}
      >
        {multiple
          ? (
            <Combobox.Chips>
              <Combobox.Value>{renderChips}</Combobox.Value>
            </Combobox.Chips>
          )
          : <Combobox.Input />}
        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup>
              <Combobox.Empty>No results</Combobox.Empty>
              <Combobox.List>{renderItem}</Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  );
});

function defaultItemToStringLabel<V>(item: V): string {
  if (item == null || typeof item !== "object") {
    return String(item);
  }
  if ("label" in item && item.label != null && typeof item.label === "string") {
    return item.label;
  }
  return String(item);
}
