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
  type ComboboxInputProps,
  type ComboboxItemProps,
  type ComboboxPopupProps,
  type ComboboxPositionerProps,
  type ComboboxRootProps,
} from "@base-ui/react/combobox";
import { Cross, Search } from "@blueprintjs/icons";
import classnames from "classnames";
import React from "react";
import styles from "./Combobox.module.css";

export interface ComboboxProps<Value, Multiple extends boolean | undefined>
  extends Omit<ComboboxRootProps<Value, Multiple>, "className">
{
  className?: string;
}

function ComboboxRoot<Value, Multiple extends boolean | undefined = false>({
  className,
  children,
  ...rest
}: ComboboxProps<Value, Multiple>): React.ReactElement {
  return (
    <BaseUICombobox.Root<Value, Multiple> {...rest}>
      {children}
    </BaseUICombobox.Root>
  );
}

interface ComboboxInputComponentProps
  extends Omit<ComboboxInputProps, "className">
{
  className?: string;
}

function ComboboxInput({
  className,
  ...rest
}: ComboboxInputComponentProps): React.ReactElement {
  return (
    <div className={classnames(styles.osdkComboboxInputWrapper, className)}>
      <Search className={styles.osdkComboboxSearchIcon} color="currentColor" />
      <BaseUICombobox.Input
        className={styles.osdkComboboxInput}
        {...rest}
      />
    </div>
  );
}

function ComboboxPortal({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <BaseUICombobox.Portal>{children}</BaseUICombobox.Portal>;
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
      sideOffset={4}
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
      className={classnames(styles.osdkComboboxChips, className)}
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
      <Cross color="currentColor" />
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
      <Cross color="currentColor" />
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

export const Combobox: {
  Root: typeof ComboboxRoot;
  Input: typeof ComboboxInput;
  Portal: typeof ComboboxPortal;
  Positioner: typeof ComboboxPositioner;
  Popup: typeof ComboboxPopup;
  Item: typeof ComboboxItem;
  Chips: typeof ComboboxChips;
  Chip: typeof ComboboxChip;
  ChipRemove: typeof ComboboxChipRemove;
  Clear: typeof ComboboxClear;
  Empty: typeof ComboboxEmpty;
} = {
  Root: ComboboxRoot,
  Input: ComboboxInput,
  Portal: ComboboxPortal,
  Positioner: ComboboxPositioner,
  Popup: ComboboxPopup,
  Item: ComboboxItem,
  Chips: ComboboxChips,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
  Clear: ComboboxClear,
  Empty: ComboboxEmpty,
};
