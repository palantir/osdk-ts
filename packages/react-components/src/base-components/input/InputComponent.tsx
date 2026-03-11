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
import type { HTMLInputTypeAttribute } from "react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Tooltip } from "../tooltip/Tooltip.js";
import styles from "./InputComponent.module.css";

export interface InputComponentProps<ValueType = unknown> {
  initialValue: ValueType;
  currentValue: ValueType;
  inputType?: HTMLInputTypeAttribute;
  onBlur?: (
    info: { newValue: ValueType | null; oldValue: ValueType | null },
  ) => void;
  validate?: (value: ValueType | null) => Promise<boolean>;
  onValidationError?: () => string;
}

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

function parseValueByType<ValueType = unknown>(
  value: string,
  inputType: HTMLInputTypeAttribute,
): ValueType | null {
  if (inputType === "text") {
    return value as unknown as ValueType;
  }

  if (value === "") {
    return null;
  }

  const parsedNumber = Number(value);

  if (isNaN(parsedNumber)) {
    return value as unknown as ValueType;
  }

  return parsedNumber as unknown as ValueType;
}

const VALIDATION_ERROR_MESSAGE = "Validation failed";

function InputComponentInner<ValueType = unknown>({
  initialValue,
  currentValue,
  inputType = "text",
  onBlur,
  validate,
  onValidationError,
}: InputComponentProps<ValueType>): React.ReactElement {
  const [inputValue, setInputValue] = useState<string>(
    valueToString(currentValue),
  );
  const [validationError, setValidationError] = useState<string | null>(null);
  const isCancelled = useRef(false);

  useEffect(() => {
    setInputValue(valueToString(currentValue));
  }, [currentValue]);

  const handleBlur = useCallback(async () => {
    // Do not commit the edit if it was cancelled with Escape key
    if (isCancelled.current) {
      isCancelled.current = false;
      return;
    }

    const parsedValue = parseValueByType<ValueType>(inputValue, inputType);

    // Perform validation if validate function is provided
    if (validate) {
      try {
        const isValid = await validate(parsedValue);
        if (!isValid) {
          const errorMessage = onValidationError
            ? onValidationError()
            : VALIDATION_ERROR_MESSAGE;
          setValidationError(errorMessage);
          return;
        }
      } catch (err) {
        const errorMessage = onValidationError
          ? onValidationError()
          : VALIDATION_ERROR_MESSAGE;
        setValidationError(errorMessage);
        return;
      }
    }

    setValidationError(null);
    onBlur?.({ newValue: parsedValue, oldValue: initialValue });
  }, [
    inputValue,
    inputType,
    validate,
    onBlur,
    initialValue,
    onValidationError,
  ]);

  const handleChange = useCallback((value: string) => {
    setInputValue(value);
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError(null);
    }
  }, [validationError]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.currentTarget.blur();
      }
      if (e.key === "Escape") {
        isCancelled.current = true;
        setInputValue(valueToString(currentValue));
        e.currentTarget.blur();
      }
    },
    [currentValue],
  );

  const isEdited = currentValue !== initialValue;

  return (
    <Tooltip.Provider>
      <Tooltip.Root disabled={!validationError}>
        <Tooltip.Trigger>
          <div
            className={classNames(styles.osdkEditableCell, {
              [styles.error]: !!validationError,
              [styles.osdkEditedInput]: isEdited,
            })}
          >
            <Input
              type={inputType}
              value={inputValue}
              className={styles.osdkEditableInput}
              onValueChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              aria-invalid={!!validationError}
            />
            {validationError && <Error className={styles.errorIcon} />}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={4} side={"bottom"}>
            <Tooltip.Popup>
              <div className={styles.validationError}>
                <Error className={styles.errorIcon} />
                {validationError}
              </div>
              <Tooltip.Arrow />
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export const InputComponent = React.memo(
  InputComponentInner,
) as typeof InputComponentInner;
