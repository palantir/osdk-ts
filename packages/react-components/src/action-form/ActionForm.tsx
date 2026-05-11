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

import type { ActionDefinition, ActionValidationResponse } from "@osdk/api";
import {
  useDebouncedCallback,
  useOsdkAction,
  useOsdkMetadata,
} from "@osdk/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { typedReactMemo } from "../shared/typedMemo.js";
import type {
  ActionFormProps,
  FormContentItem,
  FormState,
} from "./ActionFormApi.js";
import { BaseForm } from "./BaseForm.js";
import type { RendererFieldDefinition } from "./FormFieldApi.js";
import { applyValidationResponseToFieldDefinitions } from "./utils/applyValidationResponseToFieldDefinitions.js";
import { coerceFieldValue } from "./utils/coerceFieldValue.js";
import { getDefaultFieldDefinitions } from "./utils/getDefaultFieldDefinitions.js";

const EMPTY_FIELD_DEFINITIONS: ReadonlyArray<RendererFieldDefinition> = [];
const EMPTY_FORM_CONTENT: ReadonlyArray<FormContentItem> = [];
// Mirrors Forge's validation cadence so the form stays responsive without
// sending a validation request for every keystroke.
const VALIDATION_DEBOUNCE_MS = 500;

export const ActionForm: <Q extends ActionDefinition<unknown>>(
  props: ActionFormProps<Q>,
) => React.ReactElement = typedReactMemo(function ActionFormFn<
  Q extends ActionDefinition<unknown>,
>({
  actionDefinition,
  formTitle,
  showFormTitle = false,
  formFieldDefinitions,
  formState: controlledFormState,
  onFormStateChange,
  isSubmitDisabled,
  onSubmit,
  onValidationResponse,
  onSuccess,
  onError,
}: ActionFormProps<Q>): React.ReactElement {
  const {
    applyAction: osdkApplyAction,
    validateAction: osdkValidateAction,
    isPending,
  } = useOsdkAction(actionDefinition);
  const {
    metadata,
    loading: metadataLoading,
    error: metadataError,
  } = useOsdkMetadata(actionDefinition);

  useEffect(
    function saveMetadataError() {
      if (metadataError != null) {
        onError?.({ type: "unknown", error: metadataError });
      }
    },
    [metadataError, onError],
  );

  const parameters = metadata?.parameters;
  const isControlled = controlledFormState != null;
  const [validationResponse, setValidationResponse] = useState<
    ActionValidationResponse | undefined
  >();
  const uncontrolledValidationStateRef = useRef<Record<string, unknown>>({});
  const validationRequestIdRef = useRef(0);

  const customFieldDefinitions: ReadonlyArray<RendererFieldDefinition> | null =
    useMemo(() => {
      if (formFieldDefinitions == null) {
        return null;
      }
      // RendererFieldDefinition is a discriminated union keyed by fieldComponent.
      // TypeScript can't verify that the spread preserves the fieldComponent ↔
      // fieldComponentProps pairing, but FormFieldDefinition guarantees it.
      return formFieldDefinitions.map((def) => {
        const { defaultValue, ...fieldDefinition } = def;
        return {
          ...fieldDefinition,
          fieldKey: String(def.fieldKey),
          fieldType: parameters?.[String(def.fieldKey)]?.type,
          fieldComponentProps: defaultValue === undefined
            ? def.fieldComponentProps
            : { ...def.fieldComponentProps, defaultValue },
        } as RendererFieldDefinition;
      });
    }, [formFieldDefinitions, parameters]);

  const rendererFieldDefinitions = useMemo(
    () =>
      customFieldDefinitions
        ?? (metadata != null
          ? getDefaultFieldDefinitions(metadata)
          : EMPTY_FIELD_DEFINITIONS),
    [customFieldDefinitions, metadata],
  );

  const validatedRendererFieldDefinitions = useMemo(
    () =>
      applyValidationResponseToFieldDefinitions(
        rendererFieldDefinitions,
        validationResponse,
        { allowFieldComponentConversion: customFieldDefinitions == null },
      ),
    [customFieldDefinitions, rendererFieldDefinitions, validationResponse],
  );

  const formContent = useMemo(
    (): ReadonlyArray<FormContentItem> =>
      validatedRendererFieldDefinitions.length === 0
        ? EMPTY_FORM_CONTENT
        : validatedRendererFieldDefinitions.map(
          (def): FormContentItem => ({ type: "field", definition: def }),
        ),
    [validatedRendererFieldDefinitions],
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
          onSuccess?.(result);
        }
      } catch (e: unknown) {
        onError?.({ type: "submission", error: e });
      }
    },
    [coerceFormState, onSubmit, osdkApplyAction, onSuccess, onError],
  );

  const debouncedValidate = useDebouncedCallback(
    async (rawFormState: Record<string, unknown>, requestId: number) => {
      try {
        const formState = coerceFormState(rawFormState);
        // The form state keys come from the action metadata/field definitions
        // and values are coerced before validation, matching submit behavior.
        const response = await osdkValidateAction(
          formState as Parameters<typeof osdkValidateAction>[0],
        );
        if (response != null && requestId === validationRequestIdRef.current) {
          setValidationResponse(response);
          onValidationResponse?.(response);
        }
      } catch (e: unknown) {
        if (requestId === validationRequestIdRef.current) {
          onError?.({ type: "unknown", error: e });
        }
      }
    },
    VALIDATION_DEBOUNCE_MS,
  );

  const scheduleValidation = useCallback(
    (rawFormState: Record<string, unknown>) => {
      const requestId = validationRequestIdRef.current + 1;
      validationRequestIdRef.current = requestId;
      debouncedValidate(rawFormState, requestId);
    },
    [debouncedValidate],
  );

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      if (isControlled) {
        scheduleValidation({
          ...controlledFormState,
          [fieldKey]: value,
        });
      } else {
        const next = {
          ...uncontrolledValidationStateRef.current,
          [fieldKey]: value,
        };
        uncontrolledValidationStateRef.current = next;
        scheduleValidation(next);
      }

      onFormStateChange?.(
        (prev) =>
          ({
            ...prev,
            [fieldKey]: value,
          }) as FormState<Q>,
      );
    },
    [
      controlledFormState,
      isControlled,
      onFormStateChange,
      scheduleValidation,
    ],
  );

  const resolvedTitle = showFormTitle
    ? (formTitle ?? metadata?.displayName ?? actionDefinition.apiName)
    : undefined;

  const commonProps = {
    formTitle: resolvedTitle,
    formContent,
    onSubmit: handleSubmit,
    isSubmitDisabled,
    isPending,
    isLoading: metadataLoading,
    onFieldValueChange: handleFieldValueChange,
  };

  if (!isControlled) {
    return <BaseForm {...commonProps} />;
  }

  return <BaseForm {...commonProps} formState={controlledFormState} />;
});
