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

import { Error } from "@blueprintjs/icons";
import classNames from "classnames";
import React from "react";
import { DropdownField } from "../../action-form/fields/DropdownField.js";
import styles from "../EditableCell.module.css";
import { useRegisterPortal } from "../utils/PortalTracker.js";
import type { EditFieldConfig } from "../utils/types.js";

interface DropdownCellFieldProps {
  editFieldConfig: EditFieldConfig & { fieldComponent: "DROPDOWN" };
  isRowFocused: boolean;
  inputValue: string;
  hasValidationError: boolean;
  isEdited: boolean;
  onChange: (newValue: unknown) => void;
}

function DropdownCellFieldInner({
  editFieldConfig,
  isRowFocused,
  inputValue,
  hasValidationError,
  isEdited,
  onChange,
}: DropdownCellFieldProps): React.ReactElement {
  const portalRef = useRegisterPortal();

  if (!isRowFocused) {
    return (
      <div
        className={classNames(styles.osdkEditableCell, {
          [styles.error]: hasValidationError,
          [styles.osdkEditedInput]: isEdited,
        })}
      >
        <div
          className={classNames(
            styles.osdkEditableInput,
            styles.osdkDropdownText,
          )}
        >
          {inputValue}
        </div>
        {hasValidationError && <Error className={styles.errorIcon} />}
      </div>
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
        {...editFieldConfig.fieldComponentProps}
        portalRef={portalRef}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
}

export const DropdownCellField: React.MemoExoticComponent<
  typeof DropdownCellFieldInner
> = React.memo(DropdownCellFieldInner);
