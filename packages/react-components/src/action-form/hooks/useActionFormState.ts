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

import type { ActionDefinition } from "@osdk/api";
import { useCallback, useMemo, useRef, useState } from "react";
import type { FormState } from "../ActionFormApi.js";
import type {
  FieldKey,
  FieldValueType,
  FormFieldDefinition,
} from "../FormFieldApi.js";

export interface UseActionFormStateResult<
  Q extends ActionDefinition<unknown>,
> {
  formState: FormState<Q>;
  setFieldValue: <K extends FieldKey<Q>>(
    fieldKey: K,
    value: FieldValueType<Q, K>,
  ) => void;
  resetForm: () => void;
}

/**
 * Manages internal form state for uncontrolled mode.
 *
 * Internally operates on Record<string, unknown> and bridges to the caller's
 * generic Q via assertions, since TypeScript cannot verify that runtime
 * metadata keys satisfy deferred generic FieldKey<Q>.
 */
export function useActionFormState<Q extends ActionDefinition<unknown>>(
  fieldDefinitions: ReadonlyArray<FormFieldDefinition<Q>>,
): UseActionFormStateResult<Q> {
  const [internalValues, setInternalValues] = useState<
    Record<string, unknown>
  >(() => buildDefaultValues(fieldDefinitions));

  const prevDefsRef = useRef(fieldDefinitions);
  if (prevDefsRef.current !== fieldDefinitions) {
    prevDefsRef.current = fieldDefinitions;
    const newDefaults = buildDefaultValues(fieldDefinitions);
    const currentKeys = new Set(
      fieldDefinitions.map((d) => String(d.fieldKey)),
    );
    setInternalValues((prev) => {
      const merged: Record<string, unknown> = {};
      for (const key of currentKeys) {
        merged[key] = key in prev ? prev[key] : newDefaults[key];
      }
      return merged;
    });
  }

  const formState = useMemo(() => {
    const state: Record<string, unknown> = {};
    for (const def of fieldDefinitions) {
      const key = String(def.fieldKey);
      state[key] = internalValues[key];
    }
    // Runtime-built Record can't be verified against the mapped FormState<Q> type
    return state as FormState<Q>;
  }, [fieldDefinitions, internalValues]);

  const setFieldValue = useCallback(
    (fieldKey: string, value: unknown) => {
      setInternalValues((prev) => ({ ...prev, [fieldKey]: value }));
    },
    [],
  );

  const resetForm = useCallback(() => {
    setInternalValues(buildDefaultValues(fieldDefinitions));
  }, [fieldDefinitions]);

  return useMemo(
    () => ({
      formState,
      // Internal (string, unknown) signature is intentionally wider than
      // the public <K extends FieldKey<Q>> contract for implementation simplicity
      setFieldValue: setFieldValue as UseActionFormStateResult<
        Q
      >["setFieldValue"],
      resetForm,
    }),
    [formState, setFieldValue, resetForm],
  );
}

function buildDefaultValues<Q extends ActionDefinition<unknown>>(
  fieldDefinitions: ReadonlyArray<FormFieldDefinition<Q>>,
): Record<string, unknown> {
  const defaults: Record<string, unknown> = {};
  for (const def of fieldDefinitions) {
    defaults[String(def.fieldKey)] = def.defaultValue;
  }
  return defaults;
}
