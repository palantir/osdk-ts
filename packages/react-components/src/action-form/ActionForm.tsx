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

import type { ActionDefinition } from "@osdk/api";
import { useOsdkAction } from "@osdk/react/experimental";
import React from "react";
import type { ActionFormProps } from "./ActionFormApi.js";
import type { BaseFormFieldConfig } from "./BaseActionForm.js";
import { BaseActionForm } from "./BaseActionForm.js";
import { convertToActionValue } from "./convertValue.js";
import type { ActionFormValues } from "./FormFieldApi.js";
import { useActionMetadata } from "./useActionMetadata.js";

export function ActionForm<T, Q extends ActionDefinition<T>>({
  actionDefinition,
  formTitle,
  onSuccess,
  onError,
  isSubmitDisabled,
}: ActionFormProps<Q>): React.ReactElement {
  const {
    isLoading,
    metadata,
    error: metadataError,
  } = useActionMetadata(actionDefinition);
  const {
    applyAction,
    isPending,
  } = useOsdkAction(actionDefinition);
  const [formValues, setFormValues] = React.useState<ActionFormValues<Q>>(
    {} as ActionFormValues<Q>,
  );
  const [submitError, setSubmitError] = React.useState<string | undefined>();
  const formValuesRef = React.useRef(formValues);
  formValuesRef.current = formValues;

  const fields = React.useMemo<BaseFormFieldConfig[]>(() => {
    if (metadata == null) {
      return [];
    }
    return Object.entries(metadata.parameters).map(([key, param]) => ({
      key,
      label: key,
      type: typeof param.type === "string" ? param.type : param.type.type,
      isRequired: param.nullable === false,
      description: param.description,
    }));
  }, [metadata]);

  const title = formTitle ?? metadata?.displayName ?? metadata?.apiName;

  const handleFieldChange = React.useCallback(
    <K extends keyof ActionFormValues<Q> & string>(
      key: K,
      rawValue: ActionFormValues<Q>[K],
    ) => {
      const field = fields.find(f => f.key === key);
      const converted = field != null
        ? convertToActionValue(rawValue, field.type)
        : rawValue;
      const nextValues = {
        ...formValuesRef.current,
        [key]: converted,
      } as ActionFormValues<Q>;
      formValuesRef.current = nextValues;
      setFormValues(nextValues);
    },
    [fields],
  );

  const handleSubmit = React.useCallback(async () => {
    setSubmitError(undefined);

    try {
      const result = await applyAction(formValues);
      if (result != null) {
        onSuccess?.(result);
      }
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      setSubmitError(errorMessage);
      onError?.({
        type: "submission",
        error: e instanceof Error ? e : new Error(errorMessage),
      });
    }
  }, [
    applyAction,
    formValues,
    onSuccess,
    onError,
  ]);

  const displayError = metadataError != null
    ? `Failed to load action metadata: ${metadataError}`
    : submitError;

  return (
    <BaseActionForm<ActionFormValues<Q>>
      title={title}
      fields={fields}
      values={formValues}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
      isSubmitting={isLoading || isPending}
      isSubmitDisabled={isSubmitDisabled ?? fields.length === 0}
      error={displayError}
    />
  );
}
