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

import type { ActionDefinition, ActionMetadata } from "@osdk/api";
import { useOsdkAction, useOsdkMetadata } from "@osdk/react/experimental";
import React, { type ReactElement, useCallback, useMemo } from "react";
import type {
  ActionFormProps,
  BaseActionFormProps,
  FormState,
} from "./ActionFormApi.js";
import { BaseActionForm } from "./BaseActionForm.js";
import type {
  BaseFormFieldDefinition,
  FieldComponent,
  FieldKey,
} from "./FormFieldApi.js";

export function ActionForm<T, Q extends ActionDefinition<T>>(
  props: ActionFormProps<Q>,
): ReactElement {
  const {
    loading,
    metadata,
    error: metadataError,
  } = useOsdkMetadata(props.actionDefinition);

  if (loading) {
    return <>TODO: Fill me</>;
  } else if (metadataError != null || metadata == null) {
    return <>TODO: Fill me</>;
  }
  return <ActionFormWithActionMetadata {...props} actionMetadata={metadata} />;
}

interface ActionFormWithActionMetadataProps<T, Q extends ActionDefinition<T>>
  extends ActionFormProps<Q>
{
  actionMetadata: ActionMetadata;
}

function ActionFormWithActionMetadata<T, Q extends ActionDefinition<T>>({
  actionDefinition,
  formTitle,
  isSubmitDisabled,
  actionMetadata,
  formFieldDefinitionMap: suppliedFormFieldDefinitionMap,
  onFormStateChange,
  onSubmit,
  onSuccess,
  onError,
}: ActionFormWithActionMetadataProps<T, Q>): ReactElement {
  // Ok: here we want some internal components for loading state
  const { applyAction, isPending } = useOsdkAction(actionDefinition);

  const formFieldDefinitionMap = useMemo(() => {
    const result: Record<string, BaseFormFieldDefinition> = {};
    for (const [key, param] of Object.entries(actionMetadata.parameters)) {
      const override = suppliedFormFieldDefinitionMap?.[key as FieldKey<Q>];
      result[key] = {
        ...override,
        fieldComponent: override?.fieldComponent
          ?? deriveDefaultFieldComponent(param),
        label: override?.label ?? key,
        isRequired: override?.isRequired ?? param.nullable === false,
        helperText: override?.helperText ?? param.description,
        placeholder: override?.placeholder,
        isDisabled: override?.isDisabled,
      } as BaseFormFieldDefinition;
    }
    return result as BaseActionFormProps<
      FormState<Q>
    >["formFieldDefinitionMap"];
  }, [actionMetadata.parameters, suppliedFormFieldDefinitionMap]);

  const title = formTitle ?? actionMetadata.displayName
    ?? actionMetadata.apiName;

  const handleSubmit = useCallback(
    async (formState: Partial<FormState<Q>>) => {
      try {
        if (onSubmit != null) {
          await onSubmit(formState, (args) => applyAction(args));
        } else {
          const result = await applyAction(formState as FormState<Q>);
          if (result != null) {
            onSuccess?.(result);
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("ActionForm submission failed", error);
        onError?.({
          type: "submission",
          error: error instanceof Error ? error : new Error(String(error)),
        });
      }
    },
    [applyAction, onSuccess, onError, onSubmit],
  );

  return (
    <BaseActionForm<FormState<Q>>
      formTitle={title}
      formFieldDefinitionMap={formFieldDefinitionMap}
      onFormStateChange={onFormStateChange}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled
        ?? (isPending || Object.keys(formFieldDefinitionMap).length === 0)}
    />
  );
}
function deriveDefaultFieldComponent(
  param: ActionMetadata.Parameter,
): FieldComponent {
  const paramType = typeof param.type === "string"
    ? param.type
    : param.type.type;
  switch (paramType) {
    case "boolean":
      return "RADIO_BUTTONS";
    case "string":
      return "TEXT_INPUT";
    case "datetime":
    case "timestamp":
      return "DATETIME_PICKER";
    case "integer":
    case "long":
    case "double":
      return "NUMBER_INPUT";
    case "objectSet":
      return "OBJECT_SET";
    case "object":
    case "interface":
      return "DROPDOWN";
    case "attachment":
    case "mediaReference":
      return "FILE_PICKER";
    case "marking":
    case "objectType":
    case "geoshape":
    case "geohash":
    case "struct":
      return "TEXT_INPUT";
  }
}
