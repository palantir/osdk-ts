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

import React, { useMemo } from "react";
import { Combobox } from "../../base-components/combobox/Combobox.js";
import { Select } from "../../base-components/select/Select.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";

function defaultItemToStringLabel<V>(item: V): string {
  if (item != null && typeof item === "object") {
    if ("label" in item && item.label != null) {
      return String(item.label);
    }
    if ("value" in item) {
      return String(item.value);
    }
  }
  return String(item);
}

export function DropdownField<V, Multiple extends boolean = false>({
  isSearchable = false,
  itemToStringLabel,
  ...rest
}: DropdownFieldProps<V, Multiple>): React.ReactElement {
  const resolvedItemToStringLabel = useMemo(
    () => itemToStringLabel ?? defaultItemToStringLabel,
    [itemToStringLabel],
  );

  if (isSearchable) {
    return (
      <ComboboxDropdown
        {...rest}
        itemToStringLabel={resolvedItemToStringLabel}
      />
    );
  }

  return (
    <SelectDropdown {...rest} itemToStringLabel={resolvedItemToStringLabel} />
  );
}

function SelectDropdown<V, Multiple extends boolean>({
  value,
  onChange,
  items,
  itemToStringLabel,
  itemToKey,
  isItemEqual,
  multiple,
}: Omit<DropdownFieldProps<V, Multiple>, "isSearchable">): React.ReactElement {
  return (
    <div data-testid="dropdown-select-field">
      <Select.Root
        value={value}
        onValueChange={onChange}
        multiple={multiple}
        isItemEqualToValue={isItemEqual}
        itemToStringLabel={itemToStringLabel ?? defaultItemToStringLabel}
      >
        <Select.Trigger />
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              {items.map((item, index) => (
                <Select.Item key={itemToKey?.(item) ?? index} value={item}>
                  {(itemToStringLabel ?? defaultItemToStringLabel)(item)}
                </Select.Item>
              ))}
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

function ComboboxDropdown<V, Multiple extends boolean>({
  value,
  onChange,
  items,
  itemToStringLabel,
  itemToKey,
  isItemEqual,
  multiple,
}: Omit<DropdownFieldProps<V, Multiple>, "isSearchable">): React.ReactElement {
  const labelFn = itemToStringLabel ?? defaultItemToStringLabel;

  return (
    <div data-testid="dropdown-combobox-field">
      <Combobox.Root
        value={value}
        onValueChange={onChange}
        multiple={multiple}
        itemToStringLabel={labelFn}
        isItemEqualToValue={isItemEqual}
        items={items}
      >
        {multiple
          ? (
            <Combobox.Chips>
              <Combobox.Value>
                {(selectedValues: V[]) => (
                  <React.Fragment>
                    {selectedValues.map((item, index) => (
                      <Combobox.Chip
                        key={itemToKey?.(item) ?? String(index)}
                        aria-label={labelFn(item)}
                      >
                        {labelFn(item)}
                        <Combobox.ChipRemove />
                      </Combobox.Chip>
                    ))}
                    <Combobox.BareInput
                      placeholder={selectedValues.length > 0 ? "" : "Search…"}
                    />
                  </React.Fragment>
                )}
              </Combobox.Value>
            </Combobox.Chips>
          )
          : <Combobox.Input />}
        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup>
              <Combobox.Empty>No results</Combobox.Empty>
              <Combobox.List>
                {(item: V, index: number) => (
                  <Combobox.Item
                    key={itemToKey?.(item) ?? String(index)}
                    value={item}
                  >
                    {labelFn(item)}
                  </Combobox.Item>
                )}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
  );
}
