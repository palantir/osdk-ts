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
import React, { useCallback, useState } from "react";
import styles from "./EditableCell.module.css";

export interface EditableCellProps {
  initialValue: unknown;
  cellId: string;
  dataType?: string;
  onCellEdit?: (cellId: string, newValue: unknown, oldValue: unknown) => void;
}

const NUMBER_TYPES: string[] = [
  "double",
  "integer",
  "long",
  "float",
  "decimal",
  "byte",
  "short",
];

function parseValueByType(
  value: string,
  dataType?: string,
): unknown {
  if (!dataType || !NUMBER_TYPES.includes(dataType)) {
    return value;
  }

  // Handle empty string
  if (value === "") {
    return null;
  }

  const parsedNumber = Number(value);

  if (isNaN(parsedNumber)) {
    return value;
  }

  return parsedNumber;
}

export function EditableCell({
  initialValue,
  cellId,
  dataType,
  onCellEdit,
}: EditableCellProps): React.ReactElement {
  const [value, setValue] = useState<string>(String(initialValue ?? ""));

  const handleBlur = useCallback(() => {
    const parsedValue = parseValueByType(value, dataType);
    onCellEdit?.(cellId, parsedValue, initialValue);
  }, [value, initialValue, onCellEdit, cellId, dataType]);

  const handleChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.currentTarget.blur();
      }
      if (e.key === "Escape") {
        setValue(String(initialValue ?? ""));
        e.currentTarget.blur();
      }
    },
    [initialValue],
  );

  const inputType = dataType && NUMBER_TYPES.includes(dataType)
    ? "number"
    : "text";

  return (
    <Input
      className={styles.osdkEditableInput}
      type={inputType}
      value={value}
      onValueChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}
