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

import { useCallback, useMemo, useState } from "react";
import type { RendererFieldDefinition } from "../FormFieldApi.js";

export interface UseFormStateOptions {
  fieldDefinitions: ReadonlyArray<RendererFieldDefinition>;
  formState?: Record<string, unknown>;
  onFieldValueChange?: (fieldKey: string, value: unknown) => void;
}

export interface UseFormStateResult {
  formState: Record<string, unknown>;
  setFieldValue: (fieldKey: string, value: unknown) => void;
  resetForm: () => void;
}

/**
 * Manages form state for BaseForm.
 *
 * **Uncontrolled mode** (no `formState` provided):
 * Internal state is maintained via useState. For each field, the derived
 * formState uses the stored value if present, otherwise falls back to
 * the field's defaultValue.
 *
 * **Controlled mode** (`formState` provided):
 * The provided formState is used directly. `setFieldValue` delegates to
 * `onFieldValueChange`. `resetForm` calls `onFieldValueChange` for each
 * field with its defaultValue.
 */
export function useFormState(
  options: UseFormStateOptions,
): UseFormStateResult {
  const {
    fieldDefinitions,
    formState: controlledFormState,
    onFieldValueChange,
  } = options;

  const isControlled = controlledFormState != null;

  const [internalValues, setInternalValues] = useState<
    Record<string, unknown>
  >({});

  const derivedFormState = useMemo(() => {
    if (isControlled) {
      return controlledFormState;
    }
    const state: Record<string, unknown> = {};
    for (const def of fieldDefinitions) {
      state[def.fieldKey] = internalValues[def.fieldKey] ?? def.defaultValue;
    }
    return state;
  }, [isControlled, controlledFormState, fieldDefinitions, internalValues]);

  const setFieldValue = useCallback(
    (fieldKey: string, value: unknown) => {
      if (isControlled) {
        onFieldValueChange?.(fieldKey, value);
      } else {
        setInternalValues((prev) => ({ ...prev, [fieldKey]: value }));
      }
    },
    [isControlled, onFieldValueChange],
  );

  const resetForm = useCallback(() => {
    if (isControlled) {
      for (const def of fieldDefinitions) {
        onFieldValueChange?.(def.fieldKey, def.defaultValue);
      }
    } else {
      setInternalValues({});
    }
  }, [isControlled, fieldDefinitions, onFieldValueChange]);

  return useMemo(
    () => ({ formState: derivedFormState, setFieldValue, resetForm }),
    [derivedFormState, setFieldValue, resetForm],
  );
}
