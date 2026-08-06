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
import { isEqual } from "lodash-es";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useDeepEqual } from "../shared/hooks/variables/useDeepEqual.js";
import { typedReactMemo } from "../shared/typedMemo.js";
import type {
  ActionFormProps,
  FormContentItem,
  FormState,
} from "./ActionFormApi.js";
import { BaseForm } from "./BaseForm.js";
import type { FieldType, RendererFieldDefinition } from "./FormFieldApi.js";
import { useActionFormValidation } from "./useActionFormValidation.js";
import { buildDefaultValues } from "./utils/buildDefaultValues.js";
import {
  buildDisplayedFormState,
  updateFormStateFromValidation,
} from "./utils/buildDisplayedFormState.js";
import { coerceFieldValue } from "./utils/coerceFieldValue.js";
import { getDefaultFieldDefinitions } from "./utils/getDefaultFieldDefinitions.js";

const EMPTY_FIELD_DEFINITIONS: ReadonlyArray<RendererFieldDefinition> = [];
const EMPTY_FORM_CONTENT: ReadonlyArray<FormContentItem> = [];
const EMPTY_PROTECTED_FIELD_KEYS: ReadonlySet<string> = new Set();

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
    (rawState: Readonly<Record<string, unknown>>): Record<string, unknown> => {
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
  const validationDefaultValuesRef = useRef(validationDefaultValues);
  const editedFieldKeysRef = useRef<Set<string>>(new Set());
  const metadataRidRef = useRef<string>();
  const processedValidationRequestIdRef = useRef<number>();

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
  const initialValidationFormState = useMemo(
    () =>
      buildDisplayedFormState({
        validationDefaultValues: {},
        configuredDefaultValues,
        currentValues: controlledFormState ?? {},
        protectedFieldKeys: EMPTY_PROTECTED_FIELD_KEYS,
      }),
    [configuredDefaultValues, controlledFormState],
  );

  useEffect(
    function resetValidationProvenance() {
      if (metadata == null || metadataRidRef.current === metadata.rid) {
        return;
      }
      metadataRidRef.current = metadata.rid;
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
    },
    [isControlled, metadata],
  );

  const validateFormState = useCallback(
    (rawFormState: Readonly<Record<string, unknown>>) => {
      return validateAction(coerceFormState(rawFormState));
    },
    [coerceFormState, validateAction],
  );
  const { cancelValidation, validationResult } = useActionFormValidation({
    enabled: metadata != null,
    formState: displayedFormState,
    initialFormState: initialValidationFormState,
    sessionKey: metadata?.rid,
    validationContext: parameters,
    validateFormState,
  });

  useEffect(
    function applyValidationResult() {
      if (
        validationResult == null ||
        validationResult.requestId ===
          processedValidationRequestIdRef.current ||
        validationResult.sessionKey !== metadata?.rid ||
        validationResult.validationContext !== parameters
      ) {
        return;
      }
      processedValidationRequestIdRef.current = validationResult.requestId;

      const { response } = validationResult;
      const nextDefaults = getValidationDefaultValues(
        response.parameters,
        parameters,
      );
      const previousDefaults = validationDefaultValuesRef.current;
      const nextDefaultsWithClears = retainClearedDefaultKeys(
        previousDefaults,
        nextDefaults,
      );
      if (!isEqual(previousDefaults, nextDefaultsWithClears)) {
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
        if (!isEqual(previousDisplayedState, nextDisplayedState)) {
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
    [
      configuredDefaultValues,
      controlledFormState,
      metadata?.rid,
      onFormStateChange,
      onValidationResponse,
      parameters,
      uncontrolledValues,
      validationResult,
    ],
  );

  const handleSubmit = useCallback(
    async (rawFormState: Record<string, unknown>) => {
      cancelValidation();
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
      cancelValidation,
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

function getValidationDefaultValues(
  parameters: Record<string, { defaultValue?: unknown }>,
  parameterDefinitions: Record<string, { type: FieldType }> | undefined,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(parameters).flatMap(
      ([fieldKey, parameter]): Array<[string, unknown]> => {
        const parameterType = parameterDefinitions?.[fieldKey]?.type;
        if (parameterType == null) {
          return [];
        }
        const defaultValue = getValidationDefaultValue(
          parameterType,
          parameter.defaultValue,
        );
        return defaultValue === undefined ? [] : [[fieldKey, defaultValue]];
      },
    ),
  );
}

function getValidationDefaultValue(
  parameterType: FieldType,
  value: unknown,
): string | number | boolean | undefined {
  if (typeof parameterType !== "string") {
    switch (parameterType.type) {
      // TODO: Support validation defaults for complex parameter types.
      case "interface":
      case "object":
      case "objectSet":
      case "struct":
        return undefined;
      default:
        parameterType satisfies never;
        return undefined;
    }
  }

  switch (parameterType) {
    case "boolean":
      return typeof value === "boolean" ? value : undefined;
    case "double":
    case "integer":
    case "long":
      return typeof value === "number" ? value : undefined;
    case "string":
      return typeof value === "string" ? value : undefined;
    // TODO: Support validation defaults for non-scalar parameter types.
    case "attachment":
    case "datetime":
    case "geohash":
    case "geoshape":
    case "marking":
    case "mediaReference":
    case "objectType":
    case "scenarioReference":
    case "timestamp":
      return undefined;
    default:
      parameterType satisfies never;
      return undefined;
  }
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
