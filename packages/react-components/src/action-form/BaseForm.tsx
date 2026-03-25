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

import classNames from "classnames";
import React, { memo, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import type { BaseFormProps } from "./ActionFormApi.js";
import styles from "./BaseForm.module.css";
import { FieldBridge } from "./fields/FieldBridge.js";
import type { RendererFieldDefinition } from "./FormFieldApi.js";
import { FormHeader } from "./FormHeader.js";
import { FormSubmitButton } from "./FormSubmitButton.js";

export const BaseForm: React.FC<BaseFormProps> = memo(function BaseFormFn({
  formTitle,
  fieldDefinitions,
  formState: controlledFormState,
  onFieldValueChange,
  onSubmit,
  isSubmitDisabled = false,
  isPending = false,
  isLoading = false,
  className,
}: BaseFormProps): React.ReactElement {
  const isControlled = controlledFormState != null;

  const defaultValues = useMemo(
    () => buildDefaultValues(fieldDefinitions),
    [fieldDefinitions],
  );

  const { control, handleSubmit: rhfHandleSubmit } = useForm<
    Record<string, unknown>
  >({
    ...(isControlled ? { values: controlledFormState } : { defaultValues }),
  });

  const onFormSubmit = useCallback(
    (rhfValues: Record<string, unknown>) => {
      // In controlled mode, always submit the controlled state, not RHF's
      // internal state. Between a user keystroke and the parent re-rendering,
      // RHF's store may hold the user-typed value rather than the parent's
      // value. Using controlledFormState directly preserves the existing
      // guarantee that controlled mode submits the parent's state.
      onSubmit(controlledFormState ?? rhfValues);
    },
    [onSubmit, controlledFormState],
  );

  return (
    <form
      className={classNames(styles.osdkForm, className)}
      onSubmit={rhfHandleSubmit(onFormSubmit)}
    >
      {formTitle != null && <FormHeader title={formTitle} />}
      {isLoading && fieldDefinitions.length === 0 && (
        <div role="status">Loading form fields...</div>
      )}
      <div className={styles.osdkFormFields}>
        {fieldDefinitions.map((fieldDef) => (
          <FieldBridge
            key={fieldDef.fieldKey}
            fieldDef={fieldDef}
            control={control}
            onExternalChange={onFieldValueChange}
          />
        ))}
      </div>
      <div className={styles.osdkFormFooter}>
        <FormSubmitButton
          isPending={isPending}
          isDisabled={isSubmitDisabled}
        />
      </div>
    </form>
  );
});

function buildDefaultValues(
  fieldDefinitions: ReadonlyArray<RendererFieldDefinition>,
): Record<string, unknown> {
  const values: Record<string, unknown> = {};
  for (const def of fieldDefinitions) {
    values[def.fieldKey] = def.defaultValue;
  }
  return values;
}
