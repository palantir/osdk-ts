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
import React, { useCallback } from "react";
import { FormFieldRenderer } from "./fields/FormFieldRenderer.js";
import type { FormFieldDefinition } from "./FormFieldApi.js";

export interface BaseActionFormProps<Q extends ActionDefinition<unknown>> {
  formTitle?: string;
  fieldDefinitions: ReadonlyArray<FormFieldDefinition<Q>>;
  formState: Record<string, unknown>;
  onFieldValueChange: (fieldKey: string, value: unknown) => void;
  onSubmit: () => void;
  isSubmitDisabled?: boolean;
  isPending?: boolean;
  isLoading?: boolean;
}

const EMPTY_ARRAY: readonly [] = [];

export function BaseActionForm<Q extends ActionDefinition<unknown>>({
  formTitle,
  fieldDefinitions,
  formState,
  onFieldValueChange,
  onSubmit,
  isSubmitDisabled = false,
  isPending = false,
  isLoading = false,
}: BaseActionFormProps<Q>): React.ReactElement {
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  const defs = fieldDefinitions.length > 0 ? fieldDefinitions : EMPTY_ARRAY;

  return (
    <form onSubmit={handleSubmit} data-testid="action-form">
      {formTitle != null && <h2 data-testid="form-title">{formTitle}</h2>}
      {isLoading && defs.length === 0 && (
        <div data-testid="form-loading">Loading...</div>
      )}
      {defs.map((fieldDef) => {
        const key = String(fieldDef.fieldKey);
        return (
          <FormFieldRendererWrapper
            key={key}
            fieldDef={fieldDef}
            value={formState[key]}
            onFieldValueChange={onFieldValueChange}
          />
        );
      })}
      <button
        type="submit"
        disabled={isSubmitDisabled || isPending}
        data-testid="submit-button"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

interface FormFieldRendererWrapperProps<Q extends ActionDefinition<unknown>> {
  fieldDef: FormFieldDefinition<Q>;
  value: unknown;
  onFieldValueChange: (fieldKey: string, value: unknown) => void;
}

function FormFieldRendererWrapper<Q extends ActionDefinition<unknown>>({
  fieldDef,
  value,
  onFieldValueChange,
}: FormFieldRendererWrapperProps<Q>): React.ReactElement {
  const fieldKey = String(fieldDef.fieldKey);
  const handleChange = useCallback(
    (newValue: unknown) => {
      onFieldValueChange(fieldKey, newValue);
    },
    [fieldKey, onFieldValueChange],
  );

  return (
    <FormFieldRenderer
      fieldDefinition={fieldDef}
      value={value}
      onFieldValueChange={handleChange}
    />
  );
}
