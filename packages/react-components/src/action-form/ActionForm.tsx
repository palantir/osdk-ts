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
import type { RendererFieldDefinition } from "./FormFieldApi.js";
import { coerceFieldValue } from "./utils/coerceFieldValue.js";
import { getDefaultFieldDefinitions } from "./utils/getDefaultFieldDefinitions.js";

const EMPTY_FIELD_DEFINITIONS: ReadonlyArray<RendererFieldDefinition> = [];
const EMPTY_FORM_CONTENT: ReadonlyArray<FormContentItem> = [];
const EMPTY_VALIDATION_ERRORS: ReadonlyArray<FormErrorEntry> = [];
const EMPTY_FIELD_VALIDATION_ERRORS: Readonly<Record<string, string>> = {};
const EMPTY_PARSED_VALIDATION: ParsedValidationErrors = {
  formErrors: EMPTY_VALIDATION_ERRORS,
  fieldErrors: EMPTY_FIELD_VALIDATION_ERRORS,
};

interface ParsedValidationErrors {
  formErrors: ReadonlyArray<FormErrorEntry>;
  fieldErrors: Readonly<Record<string, string>>;
}

function parseValidationResponse(
  response: ActionValidationResponse,
): ParsedValidationErrors {
  const formErrors: FormErrorEntry[] = [];
  const fieldErrors: Record<string, string> = {};

  for (const criterion of response.submissionCriteria) {
    if (criterion.result === "INVALID") {
      formErrors.push({
        message:
          criterion.configuredFailureMessage ??
          "Submission criteria not met. Review the values and try again.",
      });
    }
  }

  const invalidParamKeys: string[] = [];
  for (const [paramKey, param] of Object.entries(response.parameters)) {
    if (param.result === "INVALID") {
      const message = getParameterErrorMessage(param.evaluatedConstraints);
      fieldErrors[paramKey] = message;
      invalidParamKeys.push(paramKey);
    }
  }
  if (invalidParamKeys.length > 0) {
    formErrors.push({
      message:
        invalidParamKeys.length === 1
          ? "The value for this parameter is invalid:"
          : "The values for these parameters are invalid:",
      details: invalidParamKeys,
    });
  }

  if (formErrors.length === 0 && response.result === "INVALID") {
    formErrors.push({ message: "Validation failed" });
  }

  return {
    formErrors: formErrors.length > 0 ? formErrors : EMPTY_VALIDATION_ERRORS,
    fieldErrors:
      Object.keys(fieldErrors).length > 0
        ? fieldErrors
        : EMPTY_FIELD_VALIDATION_ERRORS,
  };
}

interface EvaluatedConstraint {
  type: string;
  configuredFailureMessage?: string;
  lt?: unknown;
  lte?: unknown;
  gt?: unknown;
  gte?: unknown;
  options?: ReadonlyArray<{ displayName?: string; value?: unknown }>;
  otherValuesAllowed?: boolean;
}

// TODO: Derive constraint-specific error messages from evaluatedConstraints
// (e.g. "Must have at least 3 characters" for stringLength constraints)
// and surface them inline next to the field, matching Foundry ActionForm behavior.
function getParameterErrorMessage(
  constraints: ReadonlyArray<EvaluatedConstraint>,
): string {
  for (const c of constraints) {
    if (c.configuredFailureMessage != null) {
      return c.configuredFailureMessage;
    }
    const msg = getConstraintMessage(c);
    if (msg != null) {
      return msg;
    }
  }
  return "The parameter value is invalid";
}

function getConstraintMessage(
  constraint: EvaluatedConstraint,
): string | undefined {
  switch (constraint.type) {
    case "stringLength":
      return formatBoundsMessage(constraint, "characters");
    case "range":
      return formatBoundsMessage(constraint);
    case "arraySize":
      return formatBoundsMessage(constraint, "items");
    case "stringRegexMatch":
      return "Must match the required pattern";
    case "oneOf": {
      const labels = constraint.options
        ?.map((o) => o.displayName ?? String(o.value))
        .filter(Boolean);
      if (labels != null && labels.length > 0) {
        return `Must be one of: ${labels.join(", ")}`;
      }
      return "Must be one of the allowed values";
    }
    case "groupMember":
      return "Must be a valid group member";
    case "objectPropertyValue":
      return "The object property value is invalid";
    case "objectQueryResult":
      return "The object query result is invalid";
    default:
      return undefined;
  }
}

function formatBoundsMessage(
  constraint: EvaluatedConstraint,
  unit?: string,
): string | undefined {
  const suffix = unit != null ? ` ${unit}` : "";
  if (constraint.gte != null) {
    return `Must have at least ${String(constraint.gte)}${suffix}`;
  }
  if (constraint.gt != null) {
    return `Must have more than ${String(constraint.gt)}${suffix}`;
  }
  if (constraint.lte != null) {
    return `Must have at most ${String(constraint.lte)}${suffix}`;
  }
  if (constraint.lt != null) {
    return `Must have fewer than ${String(constraint.lt)}${suffix}`;
  }
  return undefined;
}

function resolveFormErrors(
  formErrors: ReadonlyArray<FormErrorEntry>,
  visibleParamKeys: ReadonlyArray<string>,
  toDisplayName: (key: string) => string,
): ReadonlyArray<FormErrorEntry> {
  const result: FormErrorEntry[] = [];
  for (const entry of formErrors) {
    if (entry.details != null) {
      if (visibleParamKeys.length > 0) {
        result.push({
          message:
            visibleParamKeys.length === 1
              ? "The value for this parameter is invalid:"
              : "The values for these parameters are invalid:",
          details: visibleParamKeys.map(toDisplayName),
        });
      }
    } else {
      result.push(entry);
    }
  }
  return result.length > 0 ? result : EMPTY_VALIDATION_ERRORS;
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

  const [parsedValidation, setParsedValidation] =
    useState<ParsedValidationErrors>(EMPTY_PARSED_VALIDATION);
  const editedFieldsRef = useRef<Set<string>>(new Set());
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

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

  const fieldLabelMap = useMemo(
    () => new Map(rendererFieldDefinitions.map((d) => [d.fieldKey, d.label])),
    [rendererFieldDefinitions],
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
          setParsedValidation(parseValidationResponse(validation));
        } else {
          setParsedValidation(EMPTY_PARSED_VALIDATION);
        }
      }
    } catch {
      // Validation errors from the network are not surfaced inline;
      // they will be caught at submit time.
    }
  }, 500);

  const handleSubmit = useCallback(
    async (rawFormState: Record<string, unknown>) => {
      setHasAttemptedSubmit(true);
      const formState = coerceFormState(rawFormState) as FormState<Q>;
      try {
        if (onSubmit != null) {
          await onSubmit(formState, osdkApplyAction);
        } else {
          const validation = await osdkValidateAction(formState);
          if (validation != null) {
            onValidationResponse?.(validation);
            if (validation.result === "INVALID") {
              setParsedValidation(parseValidationResponse(validation));
              return;
            }
          }
          setParsedValidation(EMPTY_PARSED_VALIDATION);
          const result = await osdkApplyAction(formState);
          onSuccess?.(result);
        }
      } catch (e) {
        onError?.({ type: "submission", error: e });
        throw e;
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
      editedFieldsRef.current.add(fieldKey);
      setParsedValidation(EMPTY_PARSED_VALIDATION);
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

  const visibleValidation = useMemo((): {
    validationErrors: ReadonlyArray<FormErrorEntry>;
    fieldValidationErrors: Readonly<Record<string, string>>;
  } => {
    const toDisplayName = (key: string) => fieldLabelMap.get(key) ?? key;

    if (hasAttemptedSubmit) {
      return {
        validationErrors: resolveFormErrors(
          parsedValidation.formErrors,
          Object.keys(parsedValidation.fieldErrors),
          toDisplayName,
        ),
        fieldValidationErrors: parsedValidation.fieldErrors,
      };
    }
    const edited = editedFieldsRef.current;
    const visibleFieldErrors: Record<string, string> = {};
    const visibleParamKeys: string[] = [];
    for (const [key, msg] of Object.entries(parsedValidation.fieldErrors)) {
      if (edited.has(key)) {
        visibleFieldErrors[key] = msg;
        visibleParamKeys.push(key);
      }
    }

    return {
      validationErrors: resolveFormErrors(
        parsedValidation.formErrors,
        visibleParamKeys,
        toDisplayName,
      ),
      fieldValidationErrors:
        Object.keys(visibleFieldErrors).length > 0
          ? visibleFieldErrors
          : EMPTY_FIELD_VALIDATION_ERRORS,
    };
  }, [parsedValidation, hasAttemptedSubmit, fieldLabelMap]);

  const commonProps = {
    formTitle: resolvedTitle,
    formContent,
    onSubmit: handleSubmit,
    isSubmitDisabled,
    isPending,
    isLoading: metadataLoading,
    onFieldValueChange: handleFieldValueChange,
    validationErrors: visibleValidation.validationErrors,
    fieldValidationErrors: visibleValidation.fieldValidationErrors,
  };

  if (!isControlled) {
    return <BaseForm {...commonProps} />;
  }

  return <BaseForm {...commonProps} formState={controlledFormState} />;
});

// The inner render fn is anonymous in the published build, so set a displayName
// on the memo wrapper for React DevTools and the OSDK devtools component tree.
(ActionForm as { displayName?: string }).displayName = "ActionForm";
