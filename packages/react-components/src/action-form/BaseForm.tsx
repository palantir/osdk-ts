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
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import { Tooltip } from "../base-components/tooltip/Tooltip.js";
import type { BaseFormProps } from "./ActionFormApi.js";
import styles from "./BaseForm.module.css";
import { FieldBridge } from "./fields/FieldBridge.js";
import type { RendererFieldDefinition } from "./FormFieldApi.js";
import { FormHeader } from "./FormHeader.js";

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

  const { control, trigger, getValues, formState: { errors } } = useForm<
    Record<string, unknown>
  >({
    // Validate on blur first, then revalidate on change after the first
    // error. This gives the user a chance to finish typing before seeing
    // errors, while staying responsive once an error is surfaced.
    mode: "onTouched",
    ...(isControlled ? { values: controlledFormState } : { defaultValues }),
  });

  const errorKeys = Object.keys(errors);
  const hasValidationErrors = errorKeys.length > 0;

  const errorSummary = useMemo(() => {
    if (!hasValidationErrors) {
      return "";
    }
    const labelMap = new Map(
      fieldDefinitions.map((d) => [d.fieldKey, d.label]),
    );
    return errorKeys.map((key) => labelMap.get(key) ?? key).join(", ");
  }, [hasValidationErrors, errorKeys, fieldDefinitions]);

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      // Run validation for display purposes (surfaces errors on all fields)
      // but always submit regardless of validation state.
      await trigger();
      // In controlled mode, always submit the controlled state, not RHF's
      // internal state. Between a user keystroke and the parent re-rendering,
      // RHF's store may hold the user-typed value rather than the parent's
      // value. Using controlledFormState directly preserves the existing
      // guarantee that controlled mode submits the parent's state.
      onSubmit(controlledFormState ?? getValues());
    },
    [trigger, onSubmit, controlledFormState, getValues],
  );

  return (
    <form
      className={classNames(styles.osdkForm, className)}
      onSubmit={handleFormSubmit}
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
        <SubmitButton
          isPending={isPending}
          isSubmitDisabled={isSubmitDisabled}
          errorSummary={hasValidationErrors ? errorSummary : undefined}
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

interface SubmitButtonProps {
  isPending: boolean;
  isSubmitDisabled: boolean;
  errorSummary: string | undefined;
}

const SubmitButton: React.FC<SubmitButtonProps> = memo(
  function SubmitButtonFn({
    isPending,
    isSubmitDisabled,
    errorSummary,
  }: SubmitButtonProps): React.ReactElement {
    const buttonLabel = isPending ? "Submitting\u2026" : "Submit";
    const button = (
      <ActionButton
        type="submit"
        variant="primary"
        disabled={isSubmitDisabled || isPending}
      >
        {buttonLabel}
      </ActionButton>
    );

    if (errorSummary == null) {
      return button;
    }

    return (
      <Tooltip.Root>
        <Tooltip.Trigger render={button} />
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup>
              <Tooltip.Arrow />
              {`Fix errors in: ${errorSummary}`}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    );
  },
);
