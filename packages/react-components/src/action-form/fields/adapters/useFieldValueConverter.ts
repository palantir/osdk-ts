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

import { useCallback, useMemo } from "react";

import type { FieldValueConverter } from "./FieldValueConverter.js";

interface UseFieldValueConverterResult<F> {
  /** The field value to pass to the field component. */
  fieldValue: F;
  /** Converts the component's output to a parameter value and writes it to form state. */
  onFieldValueChange: (fieldValue: F) => void;
}

/** Runs a field value converter between form state and a field component. */
export function useFieldValueConverter<F>(
  converter: FieldValueConverter<F>,
  value: unknown,
  onChange: (value: unknown) => void,
): UseFieldValueConverterResult<F> {
  const onFieldValueChange = useCallback(
    (fieldValue: F) => onChange(converter.toParameterValue(fieldValue)),
    [converter, onChange],
  );
  const fieldValue = useMemo(
    () => converter.toFieldValue(value),
    [converter, value],
  );
  return useMemo(
    () => ({ fieldValue, onFieldValueChange }),
    [fieldValue, onFieldValueChange],
  );
}
