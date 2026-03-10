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

import type { ActionDefinition } from "@osdk/api";
import { ActionValidationError } from "@osdk/client";
import { useOsdkAction } from "@osdk/react/experimental";
import React from "react";
import type { ActionFormProps } from "./ActionFormApi.js";
import type { BaseFormFieldConfig } from "./BaseActionForm.js";
import { BaseActionForm } from "./BaseActionForm.js";
import { convertToActionValue } from "./convertValue.js";
import type { ActionFormValues } from "./FormFieldApi.js";
import { useActionMetadata } from "./useActionMetadata.js";
import { extractFieldErrors, extractSubmissionError } from "./validation.js";

export function ActionForm<T, Q extends ActionDefinition<T>>({
  actionDefinition,
  formTitle,
  onSuccess,
  onError,
  onValidationResponse,
  isSubmitDisabled,
}: ActionFormProps<Q>): React.ReactElement {
  const {
    isLoading,
    metadata,
    error: metadataError,
  } = useActionMetadata(actionDefinition);
  const {
    applyAction,
    isPending,
    validateAction,
    isValidating,
    validationResult,
  } = useOsdkAction(actionDefinition);
  const [formValues, setFormValues] = React.useState<ActionFormValues<Q>>(
    {} as ActionFormValues<Q>,
  );
  const [submitError, setSubmitError] = React.useState<string | undefined>();
  const [touchedFields, setTouchedFields] = React.useState<ReadonlySet<string>>(
    new Set(),
  );
  const formValuesRef = React.useRef(formValues);
  formValuesRef.current = formValues;
  const validateActionRef = React.useRef(validateAction);
  validateActionRef.current = validateAction;
  const onValidationResponseRef = React.useRef(onValidationResponse);
  onValidationResponseRef.current = onValidationResponse;
  const debounceTimerRef = React.useRef<ReturnType<typeof setTimeout>>();

  const fields = React.useMemo<BaseFormFieldConfig[]>(() => {
    if (metadata == null) {
      return [];
    }
    return Object.entries(metadata.parameters).map(([key, param]) => ({
      key,
      label: key,
      type: typeof param.type === "string" ? param.type : param.type.type,
      isRequired: param.nullable === false,
      description: param.description,
    }));
  }, [metadata]);

  const title = formTitle ?? metadata?.displayName ?? metadata?.apiName;

  const handleFieldChange = React.useCallback(
    <K extends keyof ActionFormValues<Q> & string>(
      key: K,
      rawValue: ActionFormValues<Q>[K],
    ) => {
      setTouchedFields(prev => {
        if (prev.has(key)) return prev;
        const next = new Set(prev);
        next.add(key);
        return next;
      });
      const field = fields.find(f => f.key === key);
      const converted = field != null
        ? convertToActionValue(rawValue, field.type)
        : rawValue;
      const nextValues = {
        ...formValuesRef.current,
        [key]: converted,
      } as ActionFormValues<Q>;
      formValuesRef.current = nextValues;
      setFormValues(nextValues);

      // Debounced validation
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(async () => {
        const result = await validateActionRef.current(
          formValuesRef.current,
        );
        if (result != null) {
          onValidationResponseRef.current?.(result);
        }
      }, 500);
    },
    [fields],
  );

  // Map validation result to per-field errors (only touched fields)
  const fieldErrors = React.useMemo<Record<string, string>>(() => {
    if (validationResult == null) return {};
    return extractFieldErrors(validationResult, touchedFields);
  }, [validationResult, touchedFields]);

  const handleSubmit = React.useCallback(async () => {
    setSubmitError(undefined);
    clearTimeout(debounceTimerRef.current);

    // Mark all fields as touched so errors show
    setTouchedFields(prev => {
      const next = new Set(prev);
      for (const f of fields) {
        next.add(f.key);
      }
      return next;
    });

    // Validate first
    const validationResponse = await validateAction(formValues);
    if (validationResponse != null) {
      onValidationResponse?.(validationResponse);
    }
    if (validationResponse != null && validationResponse.result === "INVALID") {
      onError?.({
        type: "validation",
        error: new ActionValidationError(validationResponse),
      });
      return;
    }

    // Proceed with submission
    try {
      const result = await applyAction(formValues);
      if (result != null) {
        onSuccess?.(result);
      }
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      setSubmitError(errorMessage);
      onError?.({
        type: "submission",
        error: e instanceof Error ? e : new Error(errorMessage),
      });
    }
  }, [
    applyAction,
    validateAction,
    formValues,
    fields,
    onSuccess,
    onError,
    onValidationResponse,
  ]);

  const validationError = extractSubmissionError(validationResult);
  const displayError = metadataError != null
    ? `Failed to load action metadata: ${metadataError}`
    : validationError ?? submitError;

  return (
    <BaseActionForm<ActionFormValues<Q>>
      title={title}
      fields={fields}
      values={formValues}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
      fieldErrors={fieldErrors}
      isSubmitting={isLoading || isPending}
      isValidating={isValidating}
      isSubmitDisabled={isSubmitDisabled ?? fields.length === 0}
      error={displayError}
    />
  );
}
