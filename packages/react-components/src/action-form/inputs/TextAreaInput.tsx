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

import { Field } from "@base-ui/react/field";
import React from "react";
import type { TextAreaFieldProps } from "../FormFieldApi.js";

type TextAreaInputProps =
  & Omit<TextAreaFieldProps, "fieldComponent" | "onChange">
  & {
    value: string;
    onChange: (value: string) => void;
    isRequired: boolean;
    placeholder?: string;
    className?: string;
  };

export function TextAreaInput({
  value,
  onChange,
  isRequired,
  placeholder,
  className,
  rows,
  wrap,
  minLength,
  maxLength,
}: TextAreaInputProps): React.ReactElement {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <Field.Control
      render={
        <textarea
          className={className}
          placeholder={placeholder}
          rows={rows}
          wrap={wrap}
          minLength={minLength}
          maxLength={maxLength}
        />
      }
      value={value}
      onChange={handleChange}
      required={isRequired}
    />
  );
}
