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

import type {
  ActionDefinition,
  ActionMetadata,
  ActionValidationResponse,
} from "@osdk/api";
import { useOsdkAction, useOsdkMetadata } from "@osdk/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useDebouncedCallback } from "../shared/hooks/useDebouncedCallback.js";
import { typedReactMemo } from "../shared/typedMemo.js";
import type {
  ActionFormProps,
  FormErrorEntry,
  FormContentItem,
  FormState,
} from "./ActionFormApi.js";
import { BaseForm } from "./BaseForm.js";
import type {
  FormFieldDefinition,
  RendererFieldDefinition,
} from "./FormFieldApi.js";
import { coerceFieldValue } from "./utils/coerceFieldValue.js";
import { getDefaultFieldDefinitions } from "./utils/getDefaultFieldDefinitions.js";

const EMPTY_FORM_CONTENT: ReadonlyArray<FormContentItem> = [];
const EMPTY_VALIDATION_ERRORS: ReadonlyArray<FormErrorEntry> = [];

function getValidationErrors(
  response: ActionValidationResponse,
): ReadonlyArray<FormErrorEntry> {
  const errors: FormErrorEntry[] = [];

  for (const criterion of response.submissionCriteria) {
    if (criterion.result === "INVALID") {
      errors.push({
        message:
          criterion.configuredFailureMessage ??
          "Submission criteria not met. Review the values and try again.",
      });
    }
  }

  for (const [paramKey, param] of Object.entries(response.parameters)) {
    if (param.result === "INVALID") {
      errors.push({
        label: paramKey,
        message: getParameterErrorMessage(param.evaluatedConstraints),
      });
    }
  }

  if (errors.length === 0 && response.result === "INVALID") {
    errors.push({ message: "Validation failed" });
  }

  return errors.length > 0 ? errors : EMPTY_VALIDATION_ERRORS;
}

// TODO: Derive constraint-specific error messages from evaluatedConstraints
// (e.g. "Must have at least 3 characters" for stringLength constraints)
// and surface them inline next to the field, matching Foundry ActionForm behavior.
function getParameterErrorMessage(
  constraints: ReadonlyArray<{
    type: string;
    configuredFailureMessage?: string;
  }>,
): string {
  for (const c of constraints) {
    if ("configuredFailureMessage" in c && c.configuredFailureMessage != null) {
      return c.configuredFailureMessage;
    }
  }
  return "The parameter value is invalid";
}

function toRendererDef<Q extends ActionDefinition<unknown>>(
  def: FormFieldDefinition<Q>,
  parameters: ActionMetadata["parameters"] | undefined,
): RendererFieldDefinition {
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
}

export const ActionForm: <Q extends ActionDefinition<unknown>>(
  props: ActionFormProps<Q>,
) => React.ReactElement = typedReactMemo(function ActionFormFn<
  Q extends ActionDefinition<unknown>,
>({
  actionDefinition,
  formTitle,
  showFormTitle = false,
  formFieldDefinitions,
  formContentDefinitions,
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

  const [validationErrors, setValidationErrors] = useState<
    ReadonlyArray<FormErrorEntry>
  >(EMPTY_VALIDATION_ERRORS);

  const extractFieldDefinition = useCallback(
    (def: FormFieldDefinition<Q>): RendererFieldDefinition =>
      toRendererDef(def, parameters),
    [parameters],
  );

  const customFieldDefinitions = useMemo(():
    | ReadonlyArray<FormContentItem>
    | undefined => {
    if (formContentDefinitions != null) {
      return formContentDefinitions.map(
        (item): FormContentItem =>
          item.type === "field"
            ? {
                type: "field",
                definition: extractFieldDefinition(item.definition),
              }
            : {
                type: "section",
                key: item.key,
                definition: {
                  ...item.definition,
                  fields: item.definition.fields.map(extractFieldDefinition),
                },
              },
      );
    }
    if (formFieldDefinitions != null) {
      return formFieldDefinitions.map(
        (def): FormContentItem => ({
          type: "field",
          definition: extractFieldDefinition(def),
        }),
      );
    }
    return undefined;
  }, [formContentDefinitions, formFieldDefinitions, extractFieldDefinition]);

  const rendererFieldDefinitions = useMemo(():
    | ReadonlyArray<FormContentItem>
    | undefined => {
    if (metadata != null && customFieldDefinitions == null) {
      const defaults = getDefaultFieldDefinitions(metadata);
      return defaults.length === 0
        ? EMPTY_FORM_CONTENT
        : defaults.map(
            (def): FormContentItem => ({ type: "field", definition: def }),
          );
    }
    return undefined;
  }, [metadata, customFieldDefinitions]);

  const formContent =
    customFieldDefinitions ?? rendererFieldDefinitions ?? EMPTY_FORM_CONTENT;

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

  const formStateRef = useRef<Record<string, unknown>>(
    controlledFormState != null
      ? (controlledFormState as Record<string, unknown>)
      : {},
  );
  if (controlledFormState != null) {
    formStateRef.current = controlledFormState as Record<string, unknown>;
  }

  const debouncedValidate = useDebouncedCallback(async () => {
    if (onSubmit != null) {
      return;
    }
    const formState = coerceFormState(formStateRef.current);
    try {
      const validation = await osdkValidateAction(formState);
      if (validation != null) {
        onValidationResponse?.(validation);
        if (validation.result === "INVALID") {
          setValidationErrors(getValidationErrors(validation));
        } else {
          setValidationErrors(EMPTY_VALIDATION_ERRORS);
        }
      }
    } catch {
      // Validation errors from the network are not surfaced inline;
      // they will be caught at submit time.
    }
  }, 500);

  const handleSubmit = useCallback(
    async (rawFormState: Record<string, unknown>) => {
      const formState = coerceFormState(rawFormState) as FormState<Q>;
      try {
        if (onSubmit != null) {
          await onSubmit(formState, osdkApplyAction);
        } else {
          const validation = await osdkValidateAction(formState);
          if (validation != null) {
            onValidationResponse?.(validation);
            if (validation.result === "INVALID") {
              setValidationErrors(getValidationErrors(validation));
              return;
            }
          }
          setValidationErrors(EMPTY_VALIDATION_ERRORS);
          const result = await osdkApplyAction(formState);
          onSuccess?.(result);
        }
      } catch (e) {
        onError?.({ type: "submission", error: e });
      }
    },
    [
      coerceFormState,
      osdkValidateAction,
      onValidationResponse,
      onSubmit,
      osdkApplyAction,
      onSuccess,
      onError,
    ],
  );

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      setValidationErrors(EMPTY_VALIDATION_ERRORS);
      formStateRef.current = { ...formStateRef.current, [fieldKey]: value };
      onFormStateChange?.(
        (prev) =>
          ({
            ...prev,
            [fieldKey]: value,
          }) as FormState<Q>,
      );
      void debouncedValidate();
    },
    [onFormStateChange, debouncedValidate],
  );

  const resolvedTitle = showFormTitle
    ? (formTitle ?? metadata?.displayName ?? actionDefinition.apiName)
    : undefined;

  const isControlled = controlledFormState != null;

  const commonProps = {
    formTitle: resolvedTitle,
    formContent,
    onSubmit: handleSubmit,
    isSubmitDisabled,
    isPending,
    isLoading: metadataLoading,
    onFieldValueChange: handleFieldValueChange,
    validationErrors,
  };

  if (!isControlled) {
    return <BaseForm {...commonProps} />;
  }

  return <BaseForm {...commonProps} formState={controlledFormState} />;
});

// The inner render fn is anonymous in the published build, so set a displayName
// on the memo wrapper for React DevTools and the OSDK devtools component tree.
(ActionForm as { displayName?: string }).displayName = "ActionForm";
