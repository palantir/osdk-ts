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

import React, { useCallback } from "react";
import type { BaseFormProps } from "./ActionFormApi.js";
import { FormFieldRendererWrapper } from "./fields/FormFieldRendererWrapper.js";
import { useFormState } from "./hooks/useFormState.js";

export function BaseForm({
  formTitle,
  fieldDefinitions,
  formState: controlledFormState,
  onFieldValueChange,
  onSubmit,
  isSubmitDisabled = false,
  isPending = false,
  isLoading = false,
}: BaseFormProps): React.ReactElement {
  const {
    formState,
    setFieldValue,
    resetForm: _resetForm,
  } = useFormState({
    fieldDefinitions,
    formState: controlledFormState,
    onFieldValueChange,
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      void onSubmit(formState);
    },
    [formState, onSubmit],
  );

  return (
    <form onSubmit={handleSubmit} data-testid="action-form">
      {formTitle != null && <h2 data-testid="form-title">{formTitle}</h2>}
      {isLoading && fieldDefinitions.length === 0 && (
        <div data-testid="form-loading">Loading form fields...</div>
      )}
      {fieldDefinitions.map((fieldDef) => (
        <FormFieldRendererWrapper
          key={fieldDef.fieldKey}
          fieldDef={fieldDef}
          value={formState[fieldDef.fieldKey]}
          onFieldValueChange={setFieldValue}
        />
      ))}
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
