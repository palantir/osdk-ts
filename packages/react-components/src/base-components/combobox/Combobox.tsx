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

import {
  Combobox as BaseUICombobox,
  type ComboboxChipProps,
  type ComboboxChipRemoveProps,
  type ComboboxClearProps,
  type ComboboxIconProps,
  type ComboboxInputProps,
  type ComboboxItemIndicatorProps,
  type ComboboxItemProps,
  type ComboboxListProps,
  type ComboboxPopupProps,
  type ComboboxPositionerProps,
  type ComboboxTriggerProps,
} from "@base-ui/react/combobox";
import { CaretDown, Cross, Search, Tick } from "@blueprintjs/icons";
import classnames from "classnames";
import React from "react";
import { getPopupSideOffset } from "../popupPositioning.js";
import styles from "./Combobox.module.css";

interface ComboboxTriggerComponentProps
  extends Omit<ComboboxTriggerProps, "className">
{
  className?: string;
}

function ComboboxTrigger({
  className,
  children,
  ...rest
}: ComboboxTriggerComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.Trigger
      className={classnames(styles.osdkComboboxTrigger, className)}
      {...rest}
    >
      {children ?? (
        <>
          <div className={styles.osdkComboboxValueContainer}>
            <BaseUICombobox.Value />
          </div>
          <ComboboxIcon />
        </>
      )}
    </BaseUICombobox.Trigger>
  );
}

interface ComboboxIconComponentProps
  extends Omit<ComboboxIconProps, "className">
{
  className?: string;
}

function ComboboxIcon({
  className,
  children,
  ...rest
}: ComboboxIconComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.Icon
      className={classnames(styles.osdkComboboxIcon, className)}
      {...rest}
    >
      {children ?? <CaretDown />}
    </BaseUICombobox.Icon>
  );
}

interface ComboboxInputComponentProps
  extends Omit<ComboboxInputProps, "className">
{
  className?: string;
}

function ComboboxSearchInput({
  className,
  ...rest
}: ComboboxInputComponentProps): React.ReactElement {
  return (
    <div className={classnames(styles.osdkComboboxInputWrapper, className)}>
      <Search className={styles.osdkComboboxSearchIcon} />
      <BaseUICombobox.Input className={styles.osdkComboboxInput} {...rest} />
    </div>
  );
}

function ComboboxInput({
  className,
  ...rest
}: ComboboxInputComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.Input
      className={classnames(styles.osdkComboboxInput, className)}
      {...rest}
    />
  );
}

interface ComboboxPositionerComponentProps
  extends Omit<ComboboxPositionerProps, "className">
{
  className?: string;
}

function ComboboxPositioner({
  className,
  children,
  ...rest
}: ComboboxPositionerComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.Positioner
      className={classnames(styles.osdkComboboxPositioner, className)}
      sideOffset={getPopupSideOffset}
      {...rest}
    >
      {children}
    </BaseUICombobox.Positioner>
  );
}

interface ComboboxPopupComponentProps
  extends Omit<ComboboxPopupProps, "className">
{
  className?: string;
}

function ComboboxPopup({
  className,
  children,
  ...rest
}: ComboboxPopupComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.Popup
      className={classnames(styles.osdkComboboxPopup, className)}
      {...rest}
    >
      {children}
    </BaseUICombobox.Popup>
  );
}

interface ComboboxItemComponentProps
  extends Omit<ComboboxItemProps, "className">
{
  className?: string;
}

function ComboboxItem({
  className,
  children,
  ...rest
}: ComboboxItemComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.Item
      className={classnames(styles.osdkComboboxItem, className)}
      {...rest}
    >
      {children}
    </BaseUICombobox.Item>
  );
}

function ComboboxChips({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <BaseUICombobox.Chips
      render={(props) => (
        <div
          {...props}
          className={classnames(styles.osdkComboboxInputWrapper, className)}
        >
          {props.children}
        </div>
      )}
    >
      {children}
    </BaseUICombobox.Chips>
  );
}

interface ComboboxChipComponentProps
  extends Omit<ComboboxChipProps, "className">
{
  className?: string;
}

function ComboboxChip({
  className,
  children,
  ...rest
}: ComboboxChipComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.Chip
      className={classnames(styles.osdkComboboxChip, className)}
      {...rest}
    >
      {children}
    </BaseUICombobox.Chip>
  );
}

interface ComboboxChipRemoveComponentProps
  extends Omit<ComboboxChipRemoveProps, "className">
{
  className?: string;
}

function ComboboxChipRemove({
  className,
  ...rest
}: ComboboxChipRemoveComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.ChipRemove
      className={classnames(styles.osdkComboboxChipRemove, className)}
      aria-label="Remove"
      {...rest}
    >
      <Cross />
    </BaseUICombobox.ChipRemove>
  );
}

interface ComboboxClearComponentProps
  extends Omit<ComboboxClearProps, "className">
{
  className?: string;
}

function ComboboxClear({
  className,
  ...rest
}: ComboboxClearComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.Clear
      className={classnames(styles.osdkComboboxClear, className)}
      aria-label="Clear all"
      {...rest}
    >
      <Cross />
    </BaseUICombobox.Clear>
  );
}

function ComboboxEmpty({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <BaseUICombobox.Empty
      className={classnames(styles.osdkComboboxEmpty, className)}
    >
      {children}
    </BaseUICombobox.Empty>
  );
}

interface ComboboxListComponentProps
  extends Omit<ComboboxListProps, "className">
{
  className?: string;
}

function ComboboxList({
  className,
  children,
  ...rest
}: ComboboxListComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.List
      className={classnames(styles.osdkComboboxList, className)}
      {...rest}
    >
      {children}
    </BaseUICombobox.List>
  );
}

interface ComboboxItemIndicatorComponentProps
  extends Omit<ComboboxItemIndicatorProps, "className">
{
  className?: string;
}

function ComboboxItemIndicator({
  className,
  children,
  ...rest
}: ComboboxItemIndicatorComponentProps): React.ReactElement {
  return (
    <BaseUICombobox.ItemIndicator
      className={classnames(styles.osdkComboboxItemIndicator, className)}
      keepMounted={true}
      {...rest}
    >
      {children ?? <Tick size={16} />}
    </BaseUICombobox.ItemIndicator>
  );
}

export const Combobox: {
  Root: typeof BaseUICombobox.Root;
  Trigger: typeof ComboboxTrigger;
  Icon: typeof ComboboxIcon;
  SearchInput: typeof ComboboxSearchInput;
  Input: typeof ComboboxInput;
  Portal: typeof BaseUICombobox.Portal;
  Positioner: typeof ComboboxPositioner;
  Popup: typeof ComboboxPopup;
  List: typeof ComboboxList;
  Item: typeof ComboboxItem;
  ItemIndicator: typeof ComboboxItemIndicator;
  Collection: typeof BaseUICombobox.Collection;
  Chips: typeof ComboboxChips;
  Chip: typeof ComboboxChip;
  ChipRemove: typeof ComboboxChipRemove;
  Clear: typeof ComboboxClear;
  Empty: typeof ComboboxEmpty;
  Value: typeof BaseUICombobox.Value;
} = {
  Root: BaseUICombobox.Root,
  Trigger: ComboboxTrigger,
  Icon: ComboboxIcon,
  SearchInput: ComboboxSearchInput,
  Input: ComboboxInput,
  Portal: BaseUICombobox.Portal,
  Positioner: ComboboxPositioner,
  Popup: ComboboxPopup,
  List: ComboboxList,
  Item: ComboboxItem,
  ItemIndicator: ComboboxItemIndicator,
  Collection: BaseUICombobox.Collection,
  Chips: ComboboxChips,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
  Clear: ComboboxClear,
  Empty: ComboboxEmpty,
  Value: BaseUICombobox.Value,
};
