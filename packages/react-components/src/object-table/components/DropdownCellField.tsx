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

import classNames from "classnames";
import React from "react";

import { DropdownField } from "../../action-form/fields/DropdownField.js";
import { useRegisterPortal } from "../utils/PortalTracker.js";
import type { DropdownEditConfig } from "../utils/types.js";
import { ReadonlyDisplayCell } from "./ReadonlyDisplayCell.js";

import styles from "../EditableCell.module.css";

interface DropdownCellFieldProps {
  fieldComponentProps: DropdownEditConfig;
  isRowFocused: boolean;
  /**
   * Stringified value for the readonly (non-focused) cell display.
   */
  inputValue: string;
  /**
   * The actual typed cell value.
   */
  value: unknown;
  hasValidationError: boolean;
  isEdited: boolean;
  onChange: (newValue: unknown) => void;
}

function DropdownCellFieldInner({
  fieldComponentProps,
  isRowFocused,
  inputValue,
  value,
  hasValidationError,
  isEdited,
  onChange,
}: DropdownCellFieldProps): React.ReactElement {
  const portalRef = useRegisterPortal();
  const { itemToStringLabel } = fieldComponentProps;

  if (!isRowFocused) {
    return (
      <ReadonlyDisplayCell
        inputValue={itemToStringLabel ? itemToStringLabel(value) : inputValue}
        hasValidationError={hasValidationError}
        isEdited={isEdited}
      />
    );
  }
  return (
    <div
      className={classNames(styles.osdkEditableCellDropdown, {
        [styles.error]: hasValidationError,
        [styles.osdkEditedInput]: isEdited,
      })}
    >
      <DropdownField
        {...fieldComponentProps}
        portalRef={portalRef}
        value={value}
        onChange={onChange}
        modal={false}
      />
    </div>
  );
}

export const DropdownCellField: React.MemoExoticComponent<
  typeof DropdownCellFieldInner
> = React.memo(DropdownCellFieldInner);
