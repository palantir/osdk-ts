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
import { BaseForm } from "./BaseForm.js";
import type { RendererFieldDefinition } from "./FormFieldApi.js";
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
  // TODO: Handle metadata error
  const { metadata, loading: metadataLoading } = useOsdkMetadata(
    actionDefinition,
  );

  const parameters = metadata?.parameters;

  const resolvedFieldDefinitions = useMemo(
    () =>
      formFieldDefinition
        ?? (metadata != null
          ? getDefaultFieldDefinitions<Q>(metadata)
          : EMPTY_FIELD_DEFINITIONS),
    [formFieldDefinition, metadata],
  );

  const rendererFieldDefinitions: ReadonlyArray<RendererFieldDefinition> =
    useMemo(
      () =>
        resolvedFieldDefinitions.map((def) => ({
          ...def,
          fieldKey: String(def.fieldKey),
          fieldType: parameters?.[String(def.fieldKey)]?.type,
          defaultValue: def.defaultValue,
        })),
      [resolvedFieldDefinitions, parameters],
    );

  const coerceFormState = useCallback(
    (rawState: Record<string, unknown>): Record<string, unknown> => {
      const coerced: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(rawState)) {
        coerced[key] = coerceFieldValue(parameters?.[key]?.type, value);
      }
      return coerced;
    },
    [parameters],
  );

  const handleSubmit = useCallback(
    async (rawFormState: Record<string, unknown>) => {
      const formState = coerceFormState(rawFormState) as FormState<Q>;
      try {
        if (onSubmit != null) {
          await onSubmit(formState, osdkApplyAction);
        } else {
          const result = await osdkApplyAction(formState);
          if (result != null) {
            onSuccess?.(result);
          }
        }
      } catch (e) {
        onError?.({ type: "submission", error: e });
      }
    },
    [coerceFormState, onSubmit, osdkApplyAction, onSuccess, onError],
  );

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      const coerced = coerceFieldValue(parameters?.[fieldKey]?.type, value);
      onFormStateChange?.(
        (prev) =>
          ({
            ...prev,
            [fieldKey]: coerced,
          }) as FormState<Q>,
      );
    },
    [parameters, onFormStateChange],
  );

  const resolvedTitle = formTitle ?? metadata?.displayName
    ?? actionDefinition.apiName;

  const isControlled = controlledFormState != null;

  if (isControlled) {
    return (
      <BaseForm
        formTitle={resolvedTitle}
        fieldDefinitions={rendererFieldDefinitions}
        formState={controlledFormState as Record<string, unknown>}
        onFieldValueChange={handleFieldValueChange}
        onSubmit={handleSubmit}
        isSubmitDisabled={isSubmitDisabled}
        isPending={isPending}
        isLoading={metadataLoading}
      />
    );
  }

  return (
    <BaseForm
      formTitle={resolvedTitle}
      fieldDefinitions={rendererFieldDefinitions}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      isPending={isPending}
      isLoading={metadataLoading}
    />
  );
}
