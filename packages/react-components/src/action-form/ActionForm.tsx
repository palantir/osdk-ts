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
import { useOsdkAction, useOsdkMetadata } from "@osdk/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useDebouncedCallback } from "../shared/hooks/useDebouncedCallback.js";
import { useDeepEqual } from "../shared/hooks/variables/useDeepEqual.js";
import { typedReactMemo } from "../shared/typedMemo.js";
import type {
  ActionFormProps,
  FormContentItem,
  FormState,
} from "./ActionFormApi.js";
import { BaseForm } from "./BaseForm.js";
import type { RendererFieldDefinition } from "./FormFieldApi.js";
import { buildDefaultValues } from "./utils/buildDefaultValues.js";
import {
  buildDisplayedFormState,
  updateFormStateFromValidation,
} from "./utils/buildDisplayedFormState.js";
import { coerceFieldValue } from "./utils/coerceFieldValue.js";
import { getDefaultFieldDefinitions } from "./utils/getDefaultFieldDefinitions.js";

const EMPTY_FIELD_DEFINITIONS: ReadonlyArray<RendererFieldDefinition> = [];
const EMPTY_FORM_CONTENT: ReadonlyArray<FormContentItem> = [];

/**
 * Renders an action form whose displayed state combines caller values,
 * configured defaults, and validation-derived defaults.
 */
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
    validateAction,
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
          fieldComponentProps:
            defaultValue === undefined
              ? def.fieldComponentProps
              : { ...def.fieldComponentProps, defaultValue },
        } as RendererFieldDefinition;
      });
    }, [formFieldDefinitions, parameters]);

  const rendererFieldDefinitions = useMemo(
    () =>
      customFieldDefinitions ??
      (metadata != null
        ? getDefaultFieldDefinitions(metadata)
        : EMPTY_FIELD_DEFINITIONS),
    [customFieldDefinitions, metadata],
  );

  const formContent = useMemo(
    (): ReadonlyArray<FormContentItem> =>
      rendererFieldDefinitions.length === 0
        ? EMPTY_FORM_CONTENT
        : rendererFieldDefinitions.map(
            (def): FormContentItem => ({ type: "field", definition: def }),
          ),
    [rendererFieldDefinitions],
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

  const configuredDefaultValues = useMemo(
    () => buildDefaultValues(rendererFieldDefinitions),
    [rendererFieldDefinitions],
  );
  const [validationDefaultValues, setValidationDefaultValues] = useState<
    Record<string, unknown>
  >({});
  const [uncontrolledValues, setUncontrolledValues] = useState<
    Record<string, unknown>
  >({});
  // These refs track validation ownership and generations without adding render
  // dependencies, so stale debounced responses cannot overwrite current state.
  const validationDefaultValuesRef = useRef(validationDefaultValues);
  const editedFieldKeysRef = useRef<Set<string>>(new Set());
  const validationGenerationRef = useRef(0);
  const metadataRidRef = useRef<string>();
  const validationParametersRef = useRef(parameters);
  const lastScheduledFormStateRef = useRef<Record<string, unknown>>();

  const isControlled = controlledFormState != null;
  const unresolvedDisplayedFormState = useMemo(
    () =>
      buildDisplayedFormState({
        validationDefaultValues,
        configuredDefaultValues,
        currentValues: controlledFormState ?? uncontrolledValues,
        protectedFieldKeys: editedFieldKeysRef.current,
      }),
    [
      configuredDefaultValues,
      controlledFormState,
      uncontrolledValues,
      validationDefaultValues,
    ],
  );
  const displayedFormState = useDeepEqual(unresolvedDisplayedFormState);

  const debouncedValidate = useDebouncedCallback(
    (rawFormState: Record<string, unknown>, generation: number) => {
      void validateAction(coerceFormState(rawFormState)).then(
        (response) => {
          if (
            response == null ||
            generation !== validationGenerationRef.current
          ) {
            return;
          }
          const nextDefaults = extractScalarValidationDefaults(
            response.parameters,
            parameters,
          );
          const previousDefaults = validationDefaultValuesRef.current;
          const nextDefaultsWithClears = retainClearedDefaultKeys(
            previousDefaults,
            nextDefaults,
          );
          if (!areRecordsEqual(previousDefaults, nextDefaultsWithClears)) {
            validationDefaultValuesRef.current = nextDefaultsWithClears;
            setValidationDefaultValues(nextDefaultsWithClears);
            const currentValues = controlledFormState ?? uncontrolledValues;
            const nextReportedState = updateFormStateFromValidation({
              currentValues,
              previousValidationDefaultValues: previousDefaults,
              nextValidationDefaultValues: nextDefaults,
              configuredDefaultValues,
              protectedFieldKeys: editedFieldKeysRef.current,
            });
            const previousDisplayedState = buildDisplayedFormState({
              validationDefaultValues: previousDefaults,
              configuredDefaultValues,
              currentValues,
              protectedFieldKeys: editedFieldKeysRef.current,
            });
            const nextDisplayedState = buildDisplayedFormState({
              validationDefaultValues: nextDefaultsWithClears,
              configuredDefaultValues,
              currentValues: nextReportedState,
              protectedFieldKeys: editedFieldKeysRef.current,
            });
            if (!areRecordsEqual(previousDisplayedState, nextDisplayedState)) {
              onFormStateChange?.(
                // Validation only adds values returned for the action's parameter
                // keys, so the record remains a valid FormState for this action.
                (previousState) =>
                  updateFormStateFromValidation({
                    currentValues: previousState,
                    previousValidationDefaultValues: previousDefaults,
                    nextValidationDefaultValues: nextDefaults,
                    configuredDefaultValues,
                    protectedFieldKeys: editedFieldKeysRef.current,
                  }) as FormState<Q>,
              );
            }
          }
          onValidationResponse?.(response);
        },
        () => {
          // Validation is advisory. Submission errors continue to use onError.
        },
      );
    },
    500,
    { leading: true, trailing: true },
  );

  useEffect(
    function scheduleValidation() {
      if (metadata == null) {
        return;
      }
      const hasMetadataRidChanged = metadataRidRef.current !== metadata.rid;
      const haveParametersChanged =
        validationParametersRef.current !== parameters;
      metadataRidRef.current = metadata.rid;
      validationParametersRef.current = parameters;

      if (hasMetadataRidChanged) {
        ++validationGenerationRef.current;
        debouncedValidate.cancel();
        editedFieldKeysRef.current = new Set();
        validationDefaultValuesRef.current = {};
        setValidationDefaultValues((previousDefaults) =>
          Object.keys(previousDefaults).length === 0 ? previousDefaults : {},
        );
        if (!isControlled) {
          setUncontrolledValues((previousValues) =>
            Object.keys(previousValues).length === 0 ? previousValues : {},
          );
        }

        const resetFormState = buildDisplayedFormState({
          validationDefaultValues: {},
          configuredDefaultValues,
          currentValues: controlledFormState ?? {},
          protectedFieldKeys: new Set(),
        });
        lastScheduledFormStateRef.current = resetFormState;
        const generation = ++validationGenerationRef.current;
        debouncedValidate(resetFormState, generation);
        return;
      }

      if (
        !haveParametersChanged &&
        lastScheduledFormStateRef.current != null &&
        areRecordsEqual(lastScheduledFormStateRef.current, displayedFormState)
      ) {
        return;
      }
      lastScheduledFormStateRef.current = displayedFormState;
      const generation = ++validationGenerationRef.current;
      debouncedValidate(displayedFormState, generation);
    },
    [
      configuredDefaultValues,
      controlledFormState,
      debouncedValidate,
      displayedFormState,
      isControlled,
      metadata,
      parameters,
    ],
  );

  const handleSubmit = useCallback(
    async (rawFormState: Record<string, unknown>) => {
      debouncedValidate.cancel();
      ++validationGenerationRef.current;
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
    [
      coerceFormState,
      debouncedValidate,
      onSubmit,
      osdkApplyAction,
      onSuccess,
      onError,
    ],
  );

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      editedFieldKeysRef.current.add(fieldKey);
      if (!isControlled) {
        setUncontrolledValues((prev) => ({ ...prev, [fieldKey]: value }));
      }
      onFormStateChange?.(
        (prev) =>
          ({
            ...prev,
            [fieldKey]: value,
          }) as FormState<Q>,
      );
    },
    [isControlled, onFormStateChange],
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
    formState: displayedFormState,
  };

  return <BaseForm key={metadata?.rid} {...commonProps} />;
});

function extractScalarValidationDefaults(
  parameters: Record<string, { defaultValue?: unknown }>,
  parameterDefinitions: Record<string, { type: unknown }> | undefined,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(parameters).flatMap(([fieldKey, parameter]) => {
      const value = parameter.defaultValue;
      const parameterType = parameterDefinitions?.[fieldKey]?.type;
      return isSupportedScalarDefault(parameterType, value)
        ? [[fieldKey, value]]
        : [];
    }),
  );
}

function isSupportedScalarDefault(
  parameterType: unknown,
  value: unknown,
): value is string | number | boolean {
  if (parameterType === "string") {
    return typeof value === "string";
  }
  if (parameterType === "boolean") {
    return typeof value === "boolean";
  }
  return (
    (parameterType === "integer" ||
      parameterType === "long" ||
      parameterType === "double") &&
    typeof value === "number"
  );
}

function areRecordsEqual(
  left: Readonly<Record<string, unknown>>,
  right: Readonly<Record<string, unknown>>,
): boolean {
  const leftEntries = Object.entries(left);
  return (
    leftEntries.length === Object.keys(right).length &&
    leftEntries.every(([key, value]) => Object.is(value, right[key]))
  );
}

function retainClearedDefaultKeys(
  previousDefaults: Readonly<Record<string, unknown>>,
  nextDefaults: Readonly<Record<string, unknown>>,
): Record<string, unknown> {
  return Object.fromEntries([
    ...Object.keys(previousDefaults).flatMap((fieldKey) =>
      nextDefaults[fieldKey] === undefined ? [[fieldKey, undefined]] : [],
    ),
    ...Object.entries(nextDefaults),
  ]);
}

// The inner render fn is anonymous in the published build, so set a displayName
// on the memo wrapper for React DevTools and the OSDK devtools component tree.
(ActionForm as { displayName?: string }).displayName = "ActionForm";
