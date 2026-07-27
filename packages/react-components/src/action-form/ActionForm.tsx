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
import type { ActionValidationError } from "@osdk/client";
import { useOsdkAction, useOsdkMetadata } from "@osdk/react";
import React, { useCallback, useEffect, useMemo, useRef } from "react";

import type { DebounceOptions } from "../shared/hooks/useDebouncedCallback.js";
import { useDebouncedCallback } from "../shared/hooks/useDebouncedCallback.js";
import { useEventCallback } from "../shared/hooks/useEventCallback.js";
import { useDeepEqual } from "../shared/hooks/variables/useDeepEqual.js";
import { typedReactMemo } from "../shared/typedMemo.js";
import type {
  ActionFormProps,
  FormContentItem,
  FormState,
} from "./ActionFormApi.js";
import { BaseForm } from "./BaseForm.js";
import type { RendererFieldDefinition } from "./FormFieldApi.js";
import { applyValidationConstraints } from "./utils/applyValidationConstraints.js";
import { buildDefaultValues } from "./utils/buildDefaultValues.js";
import { coerceFieldValue } from "./utils/coerceFieldValue.js";
import { getDefaultFieldDefinitions } from "./utils/getDefaultFieldDefinitions.js";

const EMPTY_FIELD_DEFINITIONS: ReadonlyArray<RendererFieldDefinition> = [];
const EMPTY_FORM_CONTENT: ReadonlyArray<FormContentItem> = [];

// Validate on the leading edge so the first edit surfaces feedback immediately,
// then coalesce a burst of rapid edits into a single trailing validation.
const VALIDATION_WAIT_MS = 500;
const VALIDATION_DEBOUNCE_OPTIONS: DebounceOptions = { leading: true };

export const ActionForm: <Q extends ActionDefinition<unknown>>(
  props: ActionFormProps<Q>
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
  // Intentionally ignored: surfacing the raw validation response to callers is
  // deferred to a later change. Destructured so it is not forwarded onward.
  onValidationResponse: _onValidationResponse,
  onSuccess,
  onError,
}: ActionFormProps<Q>): React.ReactElement {
  const {
    applyAction: osdkApplyAction,
    isPending,
    isValidating,
    validateAction,
    validationResult,
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
    [metadataError, onError]
  );

  const parameters = metadata?.parameters;

  // Lifecycle guard, not a value shadow: prevents a validate → validationResult
  // → recompute → revalidate loop by ensuring mount validation fires exactly
  // once.
  const hasRunInitialValidationRef = useRef(false);

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

  const rendererFieldDefinitions = useMemo(() => {
    const baseDefinitions =
      customFieldDefinitions ??
      (metadata != null
        ? getDefaultFieldDefinitions(metadata)
        : EMPTY_FIELD_DEFINITIONS);
    return applyValidationConstraints(baseDefinitions, validationResult);
  }, [customFieldDefinitions, metadata, validationResult]);

  // The default value seeded into each field's store, keyed by field. Shares
  // BaseForm's buildDefaultValues so uncontrolled validation reflects the same
  // starting values the form holds.
  const defaultFieldValues = useMemo(
    () => buildDefaultValues(rendererFieldDefinitions),
    [rendererFieldDefinitions]
  );

  const formContent = useMemo(
    (): ReadonlyArray<FormContentItem> =>
      rendererFieldDefinitions.length === 0
        ? EMPTY_FORM_CONTENT
        : rendererFieldDefinitions.map(
            (def): FormContentItem => ({ type: "field", definition: def })
          ),
    [rendererFieldDefinitions]
  );

  const coerceFormState = useCallback(
    (rawState: Record<string, unknown>): Record<string, unknown> => {
      const coerced: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(rawState)) {
        coerced[key] = coerceFieldValue(parameters?.[key]?.type, value);
      }
      return coerced;
    },
    [parameters]
  );

  const isControlled = controlledFormState != null;

  // Runs a single validation pass against the supplied form values. A rejected
  // validation is surfaced through `onError` as a `validation` error rather than
  // being left as an unhandled promise rejection.
  const runValidate = useEventCallback(
    (values: Record<string, unknown>): void => {
      if (metadata == null) {
        return;
      }
      // `coerceFormState` converts each raw field value to its parameter's
      // declared type using `metadata` (guaranteed non-null above), producing
      // the typed parameter map `validateAction` expects.
      const coerced = coerceFormState(values) as Parameters<
        typeof validateAction
      >[0];
      Promise.resolve(validateAction(coerced)).catch((error: unknown) => {
        onError?.({
          type: "validation",
          error: error as ActionValidationError,
        });
      });
    }
  );

  const runDebouncedValidation = useDebouncedCallback(
    runValidate,
    VALIDATION_WAIT_MS,
    VALIDATION_DEBOUNCE_OPTIONS
  );

  const isFormReady = metadata != null;

  // `useDeepEqual` returns a stable reference that only changes identity on a
  // real structural change, so an unrelated parent re-render that reconstructs
  // an equivalent controlled state does not fire a redundant network validation.
  const stableControlledFormState = useDeepEqual(controlledFormState);

  useEffect(
    function validateOnReadyOrControlledChange() {
      if (!isFormReady) {
        return;
      }
      // Mount validation runs immediately, deliberately NOT through the edit
      // debounce, so that debounce's leading edge stays reserved for the user's
      // first edit.
      if (!hasRunInitialValidationRef.current) {
        hasRunInitialValidationRef.current = true;
        runValidate(
          isControlled && stableControlledFormState != null
            ? stableControlledFormState
            : defaultFieldValues
        );
        return;
      }
      // A controlling parent replaced the form state. Debounce real changes so a
      // burst of committed keystrokes coalesces into a single trailing
      // validation.
      if (!isControlled || stableControlledFormState == null) {
        return;
      }
      runDebouncedValidation(stableControlledFormState);
    },
    [
      isFormReady,
      isControlled,
      stableControlledFormState,
      defaultFieldValues,
      runValidate,
      runDebouncedValidation,
    ]
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
      } catch (e) {
        onError?.({ type: "submission", error: e });
      }
    },
    [coerceFormState, onSubmit, osdkApplyAction, onSuccess, onError]
  );

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown, formValues: Record<string, unknown>) => {
      onFormStateChange?.(
        (prev) =>
          ({
            ...prev,
            [fieldKey]: value,
          }) as FormState<Q>
      );
      // In controlled mode the parent owns the value: validation runs against
      // the committed value via the controlled-change effect, never this raw
      // pre-commit keystroke. In uncontrolled mode there is no re-render to
      // drive validation, so we validate against RHF's live snapshot here.
      if (!isControlled) {
        runDebouncedValidation(formValues);
      }
    },
    [isControlled, onFormStateChange, runDebouncedValidation]
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
    isValidating,
    onFieldValueChange: handleFieldValueChange,
  };

  if (!isControlled) {
    return <BaseForm {...commonProps} />;
  }

  return <BaseForm {...commonProps} formState={controlledFormState} />;
});

// The inner render fn is anonymous in the published build, so set a displayName
// on the memo wrapper for React DevTools and the OSDK devtools component tree.
(ActionForm as { displayName?: string }).displayName = "ActionForm";
