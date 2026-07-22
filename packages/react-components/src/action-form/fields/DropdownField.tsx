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

import { CaretDown, Cross, SmallCross, Tick } from "@blueprintjs/icons";
import React, { useCallback, useMemo, useState } from "react";

import { Combobox } from "../../base-components/combobox/Combobox.js";
import { Select } from "../../base-components/select/Select.js";
import { PortalDismissLayer } from "../../shared/PortalDismissLayer.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";

import comboboxStyles from "../../base-components/combobox/Combobox.module.css";
import selectStyles from "../../base-components/select/Select.module.css";
import dropdownStyles from "./DropdownField.module.css";

const EMPTY_ARRAY: [] = [];

/**
 * SelectDropdown is only used for single-select (the multi-select path
 * always routes to ComboboxDropdown). We keep the `Multiple` generic so
 * the spread from DropdownField type-checks, but SelectDropdown never
 * reads `isMultiple`.
 */
interface InnerSelectProps<V, Multiple extends boolean> extends Omit<
  DropdownFieldProps<V, Multiple>,
  "isSearchable"
> {
  itemToStringLabel: (item: V) => string;
  renderItemLabel: (item: V) => React.ReactNode;
  getKey: (item: V) => string;
  portalRef?: React.Ref<HTMLDivElement>;
  query?: string;
  onQueryChange?: (query: string) => void;
  onBlur?: () => void;
  modal?: boolean;
}

interface InnerComboboxProps<
  V,
  Multiple extends boolean,
> extends InnerSelectProps<V, Multiple> {
  isSearchable: boolean;
  disableClientSideFiltering?: boolean;
  popupStatus?: React.ReactNode;
  trailingItem?: DropdownFieldProps<V, Multiple>["trailingItem"];
  createNewItemFromQuery?: DropdownFieldProps<
    V,
    Multiple
  >["createNewItemFromQuery"];
}

export const DropdownField: <V, Multiple extends boolean = false>(
  props: DropdownFieldProps<V, Multiple> & { onBlur?: () => void }
) => React.ReactElement = typedReactMemo(function DropdownFieldFn<
  V,
  Multiple extends boolean = false,
>({
  isSearchable = false,
  isMultiple,
  itemToStringLabel,
  renderItemLabel,
  itemToKey,
  value,
  query,
  onQueryChange,
  disableClientSideFiltering,
  popupStatus,
  trailingItem,
  createNewItemFromQuery,
  modal = true,
  ...rest
}: DropdownFieldProps<V, Multiple> & {
  onBlur?: () => void;
}): React.ReactElement {
  // Ensure always controlled from first render: multi-select needs [],
  // single-select needs null. Passing undefined switches Base UI from
  // uncontrolled to controlled and triggers a warning.
  const normalizedValue = (value ??
    (isMultiple ? EMPTY_ARRAY : null)) as typeof value;

  const resolvedItemToStringLabel =
    itemToStringLabel ?? defaultItemToStringLabel;

  const resolvedRenderItemLabel = renderItemLabel ?? resolvedItemToStringLabel;

  const getKey = useCallback(
    (item: V) => itemToKey?.(item) ?? resolvedItemToStringLabel(item),
    [itemToKey, resolvedItemToStringLabel]
  );

  // Creatable implies a searchable combobox: the user needs the search input
  // to type the value they want to create.
  const isCreatable = createNewItemFromQuery != null;
  const searchable = isSearchable || isCreatable;

  // Multi-select always uses Combobox for the chip-based UI because it looks better
  if (searchable || isMultiple) {
    return (
      <ComboboxDropdown
        {...rest}
        isMultiple={isMultiple}
        value={normalizedValue}
        itemToStringLabel={resolvedItemToStringLabel}
        renderItemLabel={resolvedRenderItemLabel}
        getKey={getKey}
        isSearchable={searchable}
        query={query}
        onQueryChange={onQueryChange}
        disableClientSideFiltering={disableClientSideFiltering}
        popupStatus={popupStatus}
        trailingItem={trailingItem}
        createNewItemFromQuery={createNewItemFromQuery}
        modal={modal}
      />
    );
  }

  // TODO: Support trailingItem
  return (
    <SelectDropdown
      {...rest}
      value={normalizedValue}
      itemToStringLabel={resolvedItemToStringLabel}
      renderItemLabel={resolvedRenderItemLabel}
      getKey={getKey}
      modal={modal}
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
  renderItemLabel,
  getKey,
  isItemEqual,
  placeholder,
  portalRef,
  portalContainer,
  onBlur,
  modal = true,
  disabled,
}: InnerSelectProps<V, Multiple>): React.ReactElement {
  const [open, setOpen] = useState(false);
  const isOpen = !disabled && open;

  const hasValue = value != null;

  const renderSingleSelectedItemLabel = useCallback(
    (selectedValue: V | null) =>
      selectedValue == null ? null : renderItemLabel(selectedValue),
    [renderItemLabel]
  );

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (disabled) {
        return;
      }
      setOpen(nextOpen);
      // Mark the field as touched when the popover closes so RHF validates.
      // Opening the popover does not trigger validation.
      if (!nextOpen) {
        onBlur?.();
      }
    },
    [disabled, onBlur]
  );

  const handleClear = useCallback(() => {
    // SelectDropdown is always single-select, so cleared value is null.
    (onChange as ((v: V | null) => void) | undefined)?.(null);
    handleOpenChange(false);
  }, [onChange, handleOpenChange]);

  const handleDismiss = useCallback(() => {
    handleOpenChange(false);
  }, [handleOpenChange]);

  return (
    <div>
      <Select.Root
        value={value}
        onValueChange={onChange}
        open={isOpen}
        onOpenChange={handleOpenChange}
        isItemEqualToValue={isItemEqual}
        itemToStringLabel={itemToStringLabel}
        modal={modal}
        disabled={disabled}
      >
        <Select.Trigger id={id} placeholder={placeholder} disabled={disabled}>
          <div className={selectStyles.osdkSelectValueContainer}>
            <Select.Value>{renderSingleSelectedItemLabel}</Select.Value>
            {placeholder != null && (
              <span className={selectStyles.osdkSelectPlaceholder}>
                {placeholder}
              </span>
            )}
          </div>
          {hasValue && (
            <span
              role="button"
              aria-label="Clear"
              className={selectStyles.osdkSelectClear}
              aria-disabled={disabled || undefined}
              onMouseDown={disabled ? undefined : preventTriggerOpen}
              onClick={disabled ? undefined : handleClear}
            >
              <SmallCross />
            </span>
          )}
          <span className={selectStyles.osdkSelectIcon}>
            <CaretDown />
          </span>
        </Select.Trigger>
        <Select.Portal ref={portalRef} container={portalContainer}>
          {isOpen && modal && (
            <PortalDismissLayer
              className={dropdownStyles.osdkSelectDismissLayer}
              onDismiss={handleDismiss}
            />
          )}
          <Select.Positioner>
            <Select.Popup>
              {items.map((item) => {
                const itemLabel = itemToStringLabel(item);
                return (
                  <Select.Item
                    key={getKey(item)}
                    value={item}
                    label={itemLabel}
                    aria-label={itemLabel}
                  >
                    {renderItemLabel(item)}
                  </Select.Item>
                );
              })}
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
  renderItemLabel,
  getKey,
  isItemEqual,
  isMultiple,
  isSearchable,
  placeholder,
  portalRef,
  portalContainer,
  query,
  onQueryChange,
  disableClientSideFiltering,
  popupStatus,
  trailingItem,
  createNewItemFromQuery,
  onBlur,
  modal = true,
  disabled,
}: InnerComboboxProps<V, Multiple>): React.ReactElement {
  const [open, setOpen] = useState(false);
  const isOpen = !disabled && open;

  // Creatable works for single- and multi-select. `internalQuery` tracks the
  // search text when the query isn't controlled, so we can derive the
  // synthetic item.
  const isCreatable = createNewItemFromQuery != null;
  const [internalQuery, setInternalQuery] = useState("");
  const currentQuery = query ?? internalQuery;
  const trimmedQuery = isCreatable ? currentQuery.trim() : "";

  const handleInputValueChange = useCallback(
    (nextValue: string) => {
      if (query == null) {
        setInternalQuery(nextValue);
      }
      onQueryChange?.(nextValue);
    },
    [query, onQueryChange]
  );

  // Normalize single/multi selection to an array once so downstream key checks
  // (already-selected suppression, surfacing created items) are uniform.
  const selectedItems = useMemo<readonly V[]>(() => {
    const currentValue: V[] | V | null = value;
    return currentValue == null
      ? EMPTY_ARRAY
      : Array.isArray(currentValue)
        ? currentValue
        : [currentValue];
  }, [value]);

  // Created items only ever land in `value`, never in `items`. Surface any
  // selected value that isn't a known item as a row (at the end, in selection
  // order) so created items stay visible — and, in multi-select, uncheckable —
  // after selection. Gated on creatable so plain dropdowns are unaffected.
  const createdSelectedItems = useMemo<readonly V[]>(() => {
    if (!isCreatable) {
      return EMPTY_ARRAY;
    }
    return selectedItems.filter(
      (selected) => !items.some((item) => getKey(item) === getKey(selected))
    );
  }, [isCreatable, selectedItems, items, getKey]);

  const dropdownItems = useMemo(
    () => [...items, ...createdSelectedItems],
    [items, createdSelectedItems]
  );

  // The synthetic "Create …" item is a real (already-coerced) value injected
  // into the item list, so base-ui handles both click and Enter selection.
  const syntheticItem = useMemo<V | undefined>(() => {
    // Not creatable, or the user hasn't typed anything yet.
    if (createNewItemFromQuery == null || trimmedQuery === "") {
      return undefined;
    }
    const lowerQuery = trimmedQuery.toLowerCase();
    const matchesExisting = dropdownItems.some(
      (item) => itemToStringLabel(item).trim().toLowerCase() === lowerQuery
    );
    // The query already names an existing option — nothing to create.
    if (matchesExisting) {
      return undefined;
    }
    const created = createNewItemFromQuery(trimmedQuery);
    if (created === undefined) {
      return undefined;
    }
    // Don't offer to create a value that's already selected — compare by the
    // canonical item key (itemToKey ?? label).
    const createdKey = getKey(created);
    const alreadySelected = selectedItems.some(
      (selected) => getKey(selected) === createdKey
    );
    return alreadySelected ? undefined : created;
  }, [
    trimmedQuery,
    createNewItemFromQuery,
    dropdownItems,
    itemToStringLabel,
    getKey,
    selectedItems,
  ]);

  const effectiveItems = useMemo(
    () => [
      ...dropdownItems,
      ...(syntheticItem !== undefined ? [syntheticItem] : []),
    ],
    [dropdownItems, syntheticItem]
  );

  const hasValue = isMultiple
    ? Array.isArray(value) && value.length > 0
    : value != null;

  const renderSingleSelectedItemLabel = useCallback(
    (selectedValue: V | null) =>
      selectedValue == null ? null : renderItemLabel(selectedValue),
    [renderItemLabel]
  );

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      setOpen(nextOpen);
      if (!nextOpen) {
        onBlur?.();
      }
    },
    [onBlur]
  );

  // Mark the field as touched on every value change so RHF revalidates
  // immediately — especially important for multi-select where the popup
  // stays open after toggling an item.
  const handleValueChange: typeof onChange = useCallback(
    (...args: Parameters<NonNullable<typeof onChange>>) => {
      onChange?.(...args);
      // Multi-select: popover stays open, so fire onBlur directly.
      // Single-select: popover closes on selection, handleOpenChange(false)
      // already fires onBlur.
      if (isMultiple) {
        onBlur?.();
      }
    },
    [onChange, onBlur, isMultiple]
  );

  const handleClear = useCallback(() => {
    // TypeScript can't narrow the conditional type `Multiple extends true ? V[] : V`
    // at runtime, so we cast through the known parameter type at this single call site.
    const cleared = isMultiple ? (EMPTY_ARRAY as V[]) : null;
    (handleValueChange as (v: V[] | V | null) => void)(cleared);
    // Single-select: close after clearing. Multi-select: keep open for continued selection.
    if (!isMultiple) {
      handleOpenChange(false);
    }
  }, [isMultiple, handleValueChange, handleOpenChange]);

  const handleRemoveItem = useCallback(
    (itemToRemove: V) => {
      if (!isMultiple || !Array.isArray(value)) {
        return;
      }
      const next = value.filter((v) =>
        isItemEqual != null ? !isItemEqual(v, itemToRemove) : v !== itemToRemove
      );
      (handleValueChange as (v: V[] | V | null) => void)(next);
    },
    [isMultiple, value, handleValueChange, isItemEqual]
  );

  const handleDismiss = useCallback(() => {
    handleOpenChange(false);
  }, [handleOpenChange]);

  const renderItem = useCallback(
    (item: V) => {
      // The synthetic create item is the exact reference we appended, so an
      // identity check reliably distinguishes it from real options.
      if (syntheticItem !== undefined && Object.is(item, syntheticItem)) {
        const createLabel = `Create "${trimmedQuery}"`;
        return (
          <Combobox.Item
            key="__osdk_create_item__"
            value={item}
            aria-label={createLabel}
          >
            {createLabel}
          </Combobox.Item>
        );
      }
      const itemLabel = itemToStringLabel(item);
      return (
        <Combobox.Item key={getKey(item)} value={item} aria-label={itemLabel}>
          {isMultiple && (
            <Combobox.ItemIndicator>
              <Tick />
            </Combobox.ItemIndicator>
          )}
          {renderItemLabel(item)}
        </Combobox.Item>
      );
    },
    [
      getKey,
      isMultiple,
      itemToStringLabel,
      renderItemLabel,
      syntheticItem,
      trimmedQuery,
    ]
  );

  return (
    <div>
      <Combobox.Root
        value={value}
        onValueChange={handleValueChange}
        open={isOpen}
        onOpenChange={handleOpenChange}
        multiple={isMultiple}
        itemToStringLabel={itemToStringLabel}
        isItemEqualToValue={isItemEqual}
        items={effectiveItems}
        inputValue={isCreatable ? currentQuery : query}
        onInputValueChange={handleInputValueChange}
        filter={disableClientSideFiltering ? null : undefined}
        autoHighlight={isCreatable || undefined}
        disabled={disabled}
      >
        <Combobox.Trigger
          id={id}
          disabled={disabled}
          className={
            isMultiple ? comboboxStyles.osdkComboboxTriggerMulti : undefined
          }
        >
          <div className={comboboxStyles.osdkComboboxValueContainer}>
            {isMultiple && Array.isArray(value) && value.length > 0 ? (
              <div className={comboboxStyles.osdkComboboxTriggerChips}>
                {value.map((item: V) => (
                  <span
                    key={getKey(item)}
                    className={comboboxStyles.osdkComboboxTriggerChip}
                  >
                    {renderItemLabel(item)}
                    <span
                      role="button"
                      aria-label={`Remove ${itemToStringLabel(item)}`}
                      className={comboboxStyles.osdkComboboxTriggerChipRemove}
                      aria-disabled={disabled || undefined}
                      onMouseDown={disabled ? undefined : preventTriggerOpen}
                      onClick={
                        disabled ? undefined : () => handleRemoveItem(item)
                      }
                    >
                      <Cross size={12} />
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              <>
                <Combobox.Value>{renderSingleSelectedItemLabel}</Combobox.Value>
                {!hasValue && placeholder != null && (
                  <span className={comboboxStyles.osdkComboboxPlaceholder}>
                    {placeholder}
                  </span>
                )}
              </>
            )}
          </div>
          {hasValue && (
            <span
              role="button"
              aria-label="Clear"
              className={comboboxStyles.osdkComboboxClear}
              aria-disabled={disabled || undefined}
              onMouseDown={disabled ? undefined : preventTriggerOpen}
              onClick={disabled ? undefined : handleClear}
            >
              <SmallCross />
            </span>
          )}
          <Combobox.Icon>
            <CaretDown />
          </Combobox.Icon>
        </Combobox.Trigger>
        <Combobox.Portal ref={portalRef} container={portalContainer}>
          {isOpen && modal && (
            <PortalDismissLayer
              className={dropdownStyles.osdkComboboxDismissLayer}
              onDismiss={handleDismiss}
            />
          )}
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
              <Combobox.List>
                <Combobox.Collection>{renderItem}</Combobox.Collection>
                {trailingItem}
              </Combobox.List>
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
