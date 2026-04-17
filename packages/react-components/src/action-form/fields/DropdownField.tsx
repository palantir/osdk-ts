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

import React, { useCallback } from "react";
import { Combobox } from "../../base-components/combobox/Combobox.js";
import { Select } from "../../base-components/select/Select.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";

interface InnerDropdownProps<V, Multiple extends boolean>
  extends Omit<DropdownFieldProps<V, Multiple>, "isSearchable">
{
  itemToStringLabel: (item: V) => string;
  getKey: (item: V) => string;
  portalRef?: React.Ref<HTMLDivElement>;
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
    ?? (rest.isMultiple ? [] : null)) as typeof value;

  const resolvedItemToStringLabel = itemToStringLabel
    ?? defaultItemToStringLabel;

  const getKey = useCallback(
    (item: V) => itemToKey?.(item) ?? resolvedItemToStringLabel(item),
    [itemToKey, resolvedItemToStringLabel],
  );

  if (isSearchable) {
    return (
      <ComboboxDropdown
        {...rest}
        value={normalizedValue}
        itemToStringLabel={resolvedItemToStringLabel}
        getKey={getKey}
        portalRef={portalRef}
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
}: InnerDropdownProps<V, Multiple>): React.ReactElement {
  return (
    <div>
      <Select.Root
        value={value}
        onValueChange={onChange}
        multiple={isMultiple}
        isItemEqualToValue={isItemEqual}
        itemToStringLabel={itemToStringLabel}
      >
        <Select.Trigger id={id} placeholder={placeholder} />
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
  placeholder,
  portalRef,
}: InnerDropdownProps<V, Multiple>): React.ReactElement {
  const renderChips = useCallback(
    (selectedValues: V[]) => (
      <>
        {selectedValues.map((item) => (
          <Combobox.Chip
            key={getKey(item)}
            aria-label={itemToStringLabel(item)}
          >
            {itemToStringLabel(item)}
            <Combobox.ChipRemove />
          </Combobox.Chip>
        ))}
        <Combobox.Input
          placeholder={selectedValues.length > 0
            ? ""
            : (placeholder ?? "Search…")}
        />
      </>
    ),
    [getKey, itemToStringLabel, placeholder],
  );

  const renderItem = useCallback(
    (item: V) => (
      <Combobox.Item key={getKey(item)} value={item}>
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
        multiple={isMultiple}
        itemToStringLabel={itemToStringLabel}
        isItemEqualToValue={isItemEqual}
        items={items}
      >
        {isMultiple
          ? (
            <Combobox.Chips>
              <Combobox.Value>{renderChips}</Combobox.Value>
            </Combobox.Chips>
          )
          : <Combobox.Input id={id} placeholder={placeholder} />}
        <Combobox.Portal ref={portalRef}>
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
