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
import { useOsdkMetadata } from "@osdk/react";
import { useOsdkAction } from "@osdk/react/experimental";
import React, { useCallback, useMemo } from "react";
import type { ActionFormProps, FormState } from "./ActionFormApi.js";
import { BaseActionForm } from "./BaseActionForm.js";
import { useActionFormState } from "./hooks/useActionFormState.js";
import { coerceFieldValue } from "./utils/coerceFieldValue.js";
import { getDefaultFieldDefinitions } from "./utils/getDefaultFieldDefinitions.js";

const EMPTY_FIELD_DEFINITIONS: readonly [] = [];

export function ActionForm<Q extends ActionDefinition<unknown>>({
  actionDefinition,
  formTitle,
  formFieldDefinition,
  formState: controlledFormState,
  onFormStateChange,
  isSubmitDisabled,
  onSubmit,
  onValidationResponse: _onValidationResponse,
  onSuccess,
  onError,
}: ActionFormProps<Q>): React.ReactElement {
  const { applyAction: osdkApplyAction, isPending } = useOsdkAction(
    actionDefinition,
  );
  const {
    metadata,
    loading: metadataLoading,
    error: metadataError,
  } = useOsdkMetadata(actionDefinition);

  const resolvedFieldDefinitions = useMemo(
    () =>
      formFieldDefinition
        ?? (metadata != null
          ? getDefaultFieldDefinitions<Q>(metadata)
          : EMPTY_FIELD_DEFINITIONS),
    [formFieldDefinition, metadata],
  );

  const {
    formState: internalFormState,
    setFieldValue: typedSetFieldValue,
    resetForm,
  } = useActionFormState<Q>(resolvedFieldDefinitions);

  // Widen to (string, unknown) for the internal onChange handler which receives
  // untyped values from field components
  const setFieldValue = typedSetFieldValue as (
    fieldKey: string,
    value: unknown,
  ) => void;

  const effectiveFormState = controlledFormState ?? internalFormState;

  const handleSubmit = useCallback(async () => {
    try {
      if (onSubmit != null) {
        await onSubmit(effectiveFormState, osdkApplyAction);
      } else {
        const result = await osdkApplyAction(effectiveFormState);
        if (result != null) {
          onSuccess?.(result);
          resetForm();
        }
      }
    } catch (e) {
      onError?.({ type: "submission", error: e });
    }
  }, [
    onSubmit,
    effectiveFormState,
    osdkApplyAction,
    onSuccess,
    resetForm,
    onError,
  ]);

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      const fieldDef = resolvedFieldDefinitions.find(
        (def) => String(def.fieldKey) === fieldKey,
      );
      const coerced = coerceFieldValue(fieldDef?.parameterType, value);
      setFieldValue(fieldKey, coerced);
      if (onFormStateChange != null) {
        const updatedState = {
          ...effectiveFormState,
          [fieldKey]: coerced,
        } as FormState<Q>; // TS can't preserve mapped types through computed-key spread
        onFormStateChange(updatedState);
      }
    },
    [
      resolvedFieldDefinitions,
      setFieldValue,
      onFormStateChange,
      effectiveFormState,
    ],
  );

  const resolvedTitle = formTitle ?? metadata?.displayName
    ?? actionDefinition.apiName;

  return (
    <BaseActionForm<Q>
      formTitle={resolvedTitle}
      fieldDefinitions={resolvedFieldDefinitions}
      formState={effectiveFormState}
      onFieldValueChange={handleFieldValueChange}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      isPending={isPending}
      isLoading={metadataLoading}
    />
  );
}
