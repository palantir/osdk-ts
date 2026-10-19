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
import React, { useCallback, useEffect, useMemo } from "react";

import { typedReactMemo } from "../shared/typedMemo.js";
import type {
  ActionFormProps,
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
  onValidationResponse: _onValidationResponse,
  onSuccess,
  onError,
}: ActionFormProps<Q>): React.ReactElement {
  const { applyAction: osdkApplyAction, isPending } =
    useOsdkAction(actionDefinition);
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

  const toRendererDef = useCallback(
    (def: FormFieldDefinition<Q>): RendererFieldDefinition => {
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
    },
    [parameters],
  );

  const formContent = useMemo((): ReadonlyArray<FormContentItem> => {
    if (formContentDefinitions != null) {
      return formContentDefinitions.map(
        (item): FormContentItem =>
          item.type === "field"
            ? { type: "field", definition: toRendererDef(item.definition) }
            : {
                type: "section",
                key: item.key,
                definition: {
                  ...item.definition,
                  fields: item.definition.fields.map(toRendererDef),
                },
              },
      );
    }
    if (formFieldDefinitions != null) {
      return formFieldDefinitions.map(
        (def): FormContentItem => ({
          type: "field",
          definition: toRendererDef(def),
        }),
      );
    }
    if (metadata != null) {
      const defaults = getDefaultFieldDefinitions(metadata);
      return defaults.length === 0
        ? EMPTY_FORM_CONTENT
        : defaults.map(
            (def): FormContentItem => ({ type: "field", definition: def }),
          );
    }
    return EMPTY_FORM_CONTENT;
  }, [formContentDefinitions, formFieldDefinitions, metadata, toRendererDef]);

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
      } catch (e) {
        onError?.({ type: "submission", error: e });
      }
    },
    [coerceFormState, onSubmit, osdkApplyAction, onSuccess, onError],
  );

  const handleFieldValueChange = useCallback(
    (fieldKey: string, value: unknown) => {
      onFormStateChange?.(
        (prev) =>
          ({
            ...prev,
            [fieldKey]: value,
          }) as FormState<Q>,
      );
    },
    [onFormStateChange],
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
  };

  if (!isControlled) {
    return <BaseForm {...commonProps} />;
  }

  return <BaseForm {...commonProps} formState={controlledFormState} />;
});

// The inner render fn is anonymous in the published build, so set a displayName
// on the memo wrapper for React DevTools and the OSDK devtools component tree.
(ActionForm as { displayName?: string }).displayName = "ActionForm";
