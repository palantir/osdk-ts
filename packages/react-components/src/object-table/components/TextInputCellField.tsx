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

import { Input } from "@base-ui/react/input";
import { Error } from "@blueprintjs/icons";
import classNames from "classnames";
import React from "react";
import styles from "../EditableCell.module.css";

interface TextInputCellFieldProps {
  inputType: "text" | "number";
  inputValue: string;
  hasValidationError: boolean;
  isEdited: boolean;
  onValueChange: (value: string) => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function TextInputCellFieldInner({
  inputType,
  inputValue,
  hasValidationError,
  isEdited,
  onValueChange,
  onBlur,
  onKeyDown,
}: TextInputCellFieldProps): React.ReactElement {
  return (
    <div
      className={classNames(styles.osdkEditableCell, {
        [styles.error]: hasValidationError,
        [styles.osdkEditedInput]: isEdited,
      })}
    >
      <Input
        type={inputType}
        value={inputValue}
        className={styles.osdkEditableInput}
        onValueChange={onValueChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        aria-invalid={hasValidationError}
      />
      {hasValidationError && <Error className={styles.errorIcon} />}
    </div>
  );
}

export const TextInputCellField: React.MemoExoticComponent<
  typeof TextInputCellFieldInner
> = React.memo(TextInputCellFieldInner);
