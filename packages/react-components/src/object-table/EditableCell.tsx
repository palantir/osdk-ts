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
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./EditableCell.module.css";
import type { CellValueState } from "./utils/types.js";

export interface EditableCellProps {
  initialValue: unknown;
  currentValue: unknown;
  cellId: string;
  dataType?: string;
  onCellEdit?: (cellId: string, state: CellValueState) => void;
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

function valueToString(value: unknown): string {
  if (value == null) {
    return "";
  }
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  // At this point, value is a primitive (string, number, boolean, symbol, bigint)
  return String(value as string | number | boolean | symbol | bigint);
}

function parseValueByType(
  value: string,
  dataType?: string,
): unknown {
  if (!dataType || !NUMBER_TYPES.includes(dataType)) {
    return value;
  }

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
  currentValue,
  cellId,
  dataType,
  onCellEdit,
}: EditableCellProps): React.ReactElement {
  const [value, setValue] = useState<string>(valueToString(currentValue));
  const isCancelled = useRef(false);

  useEffect(() => {
    setValue(valueToString(currentValue));
  }, [currentValue]);

  const handleBlur = useCallback(() => {
    // Do not commit the edit if it was cancelled with Escape key
    if (isCancelled.current) {
      isCancelled.current = false;
      return;
    }
    const parsedValue = parseValueByType(value, dataType);
    onCellEdit?.(cellId, { newValue: parsedValue, oldValue: initialValue });
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
        isCancelled.current = true;
        setValue(valueToString(currentValue));
        e.currentTarget.blur();
      }
    },
    [currentValue],
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
