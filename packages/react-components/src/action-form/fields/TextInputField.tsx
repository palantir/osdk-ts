/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import React, { memo } from "react";
import type { TextInputFieldProps } from "../FormFieldApi.js";
import styles from "./BaseInput.module.css";
import { MultiTextInputField } from "./MultiTextInputField.js";

const EMPTY_STRING_ARRAY: readonly string[] = [];

type TextInputFieldRuntimeProps = TextInputFieldProps<boolean> & {
  id?: string;
};

export const TextInputField: React.NamedExoticComponent<
  TextInputFieldRuntimeProps
> = memo(function TextInputFieldFn({
  id,
  value,
  onChange,
  error,
  placeholder,
  minLength,
  maxLength,
  isMultiple,
}: TextInputFieldRuntimeProps): React.ReactElement {
  if (isMultiple) {
    return (
      <MultiTextInputField
        id={id}
        value={Array.isArray(value) ? value : EMPTY_STRING_ARRAY}
        onChange={onChange as
          | ((value: readonly string[] | null) => void)
          | undefined}
        error={error}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    );
  }

  return (
    <Input
      id={id}
      className={styles.osdkBaseInput}
      type="text"
      value={typeof value === "string" ? value : ""}
      onValueChange={onChange as ((value: string) => void) | undefined}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      aria-invalid={error != null || undefined}
    />
  );
});
