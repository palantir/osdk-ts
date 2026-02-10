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
  Select as BaseUISelect,
  type SelectItemProps,
  type SelectPopupProps,
  type SelectPositionerProps,
  type SelectRootProps,
  type SelectTriggerProps,
  type SelectValueProps,
} from "@base-ui/react/select";
import { CaretDown } from "@blueprintjs/icons";
import classnames from "classnames";
import React from "react";
import styles from "./Select.module.css";

export interface SelectProps<Value extends string | number>
  extends Omit<SelectRootProps<Value, false>, "className" | "multiple">
{}

function SelectRoot<Value extends string | number>({
  children,
  ...rest
}: SelectProps<Value>): React.ReactElement {
  return (
    <BaseUISelect.Root<Value> {...rest}>
      {children}
    </BaseUISelect.Root>
  );
}

interface SelectTriggerComponentProps
  extends Omit<SelectTriggerProps, "className">
{
  className?: string;
  placeholder?: string;
}

function SelectTrigger({
  className,
  placeholder,
  children,
  ...rest
}: SelectTriggerComponentProps): React.ReactElement {
  return (
    <BaseUISelect.Trigger
      className={classnames(styles.osdkSelectTrigger, className)}
      {...rest}
    >
      {children ?? (
        <>
          <BaseUISelect.Value>
            {(value) => (value != null ? String(value) : placeholder)}
          </BaseUISelect.Value>
          <BaseUISelect.Icon className={styles.osdkSelectIcon}>
            <CaretDown color="currentColor" />
          </BaseUISelect.Icon>
        </>
      )}
    </BaseUISelect.Trigger>
  );
}

function SelectValue(
  props: Omit<SelectValueProps, "className"> & { className?: string },
): React.ReactElement {
  const { className, ...rest } = props;
  return (
    <BaseUISelect.Value
      className={classnames(styles.osdkSelectValue, className)}
      {...rest}
    />
  );
}

interface SelectPositionerComponentProps
  extends Omit<SelectPositionerProps, "className">
{
  className?: string;
}

function SelectPositioner({
  className,
  children,
  ...rest
}: SelectPositionerComponentProps): React.ReactElement {
  return (
    <BaseUISelect.Positioner
      className={classnames(styles.osdkSelectPositioner, className)}
      sideOffset={4}
      {...rest}
    >
      {children}
    </BaseUISelect.Positioner>
  );
}

interface SelectPopupComponentProps
  extends Omit<SelectPopupProps, "className">
{
  className?: string;
}

function SelectPopup({
  className,
  children,
  ...rest
}: SelectPopupComponentProps): React.ReactElement {
  return (
    <BaseUISelect.Popup
      className={classnames(styles.osdkSelectPopup, className)}
      {...rest}
    >
      {children}
    </BaseUISelect.Popup>
  );
}

interface SelectItemComponentProps extends Omit<SelectItemProps, "className"> {
  className?: string;
}

function SelectItem({
  className,
  children,
  ...rest
}: SelectItemComponentProps): React.ReactElement {
  return (
    <BaseUISelect.Item
      className={classnames(styles.osdkSelectItem, className)}
      {...rest}
    >
      <BaseUISelect.ItemText>{children}</BaseUISelect.ItemText>
    </BaseUISelect.Item>
  );
}

export const Select: {
  Root: typeof SelectRoot;
  Trigger: typeof SelectTrigger;
  Value: typeof SelectValue;
  Portal: typeof BaseUISelect.Portal;
  Positioner: typeof SelectPositioner;
  Popup: typeof SelectPopup;
  Item: typeof SelectItem;
} = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Portal: BaseUISelect.Portal,
  Positioner: SelectPositioner,
  Popup: SelectPopup,
  Item: SelectItem,
};
