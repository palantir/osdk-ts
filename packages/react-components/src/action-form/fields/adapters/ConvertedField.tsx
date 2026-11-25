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

import React, { useMemo } from "react";

import { UnexpectedFieldValue } from "../UnexpectedFieldValue.js";
import type { FieldValueConverter } from "./FieldValueConverter.js";

interface ConvertedFieldProps<F> {
  converter: FieldValueConverter<F>;
  label: string | undefined;
  /** The stored parameter value. */
  value: unknown;
  /** Writes a parameter value to form state; used to clear an unexpected value. */
  onChange: (value: unknown) => void;
  disabled: boolean;
  /** Renders the field component with the converted field value. */
  children: (fieldValue: F) => React.ReactElement;
}

/**
 * Runs a field value converter on the stored value before a field component
 * displays it.
 * When the component can't display the stored value, says so instead of
 * hiding it or coercing the value.
 */
export function ConvertedField<F>({
  converter,
  label,
  value,
  onChange,
  disabled,
  children,
}: ConvertedFieldProps<F>): React.ReactElement {
  // Some converters build a new field value, e.g. the date range tuple; keep it
  // stable so memoized field components don't re-render.
  const result = useMemo(
    () => converter.toFieldValue(value),
    [converter, value],
  );
  switch (result.type) {
    case "err":
      return (
        <UnexpectedFieldValue
          label={label}
          error={result.error}
          onChange={onChange}
          disabled={disabled}
        />
      );
    case "ok":
      return children(result.value);
  }
}
