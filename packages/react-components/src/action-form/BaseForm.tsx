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

import { Error as ErrorIcon } from "@blueprintjs/icons";
import classNames from "classnames";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import { Tooltip } from "../base-components/tooltip/Tooltip.js";
import { useAsyncAction } from "../shared/hooks/useAsyncAction.js";
import type { BaseFormProps } from "./ActionFormApi.js";
import styles from "./BaseForm.module.css";
import { FieldBridge } from "./fields/FieldBridge.js";
import type { RendererFieldDefinition } from "./FormFieldApi.js";
import { FormHeader } from "./FormHeader.js";

// Using a lower trigger delay for tooltips in forms so the user can see the errors quickly
const TOOLTIP_TRIGGER_DELAY_MS = 200;

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

  const {
    control,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<Record<string, unknown>>({
    // Validate on blur first, then revalidate on change after the first
    // error. This gives the user a chance to finish typing before seeing
    // errors, while staying responsive once an error is surfaced.
    mode: "onTouched",
    ...(isControlled ? { values: controlledFormState } : { defaultValues }),
  });

  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  const {
    isPending: isSubmitting,
    error: submissionError,
    execute: executeSubmit,
    clearError,
  } = useAsyncAction(onSubmit);
  const submissionErrorMessage = submissionError != null
    ? submissionError instanceof Error
      ? submissionError.message
      // TODO: provide better error message
      : "Submission failed"
    : undefined;

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setHasAttemptedSubmit(true);

      const isValid = await trigger();
      if (!isValid) {
        return;
      }

      // In controlled mode, always submit the controlled state, not RHF's
      // internal state. Between a user keystroke and the parent re-rendering,
      // RHF's store may hold the user-typed value rather than the parent's
      // value. Using controlledFormState directly preserves the existing
      // guarantee that controlled mode submits the parent's state.
      await executeSubmit(controlledFormState ?? getValues());
    },
    [trigger, executeSubmit, controlledFormState, getValues],
  );

  const handleFieldChange = useCallback(
    (fieldKey: string, value: unknown) => {
      clearError();
      onFieldValueChange?.(fieldKey, value);
    },
    [clearError, onFieldValueChange],
  );

  const isFormPending = isPending || isSubmitting;

  const labelByFieldKey = useMemo(
    () => new Map(fieldDefinitions.map((d) => [d.fieldKey, d.label])),
    [fieldDefinitions],
  );

  // RHF reuses the same errors object reference across renders so we cannot memoize errorEntries
  const errorEntries = Object.entries(errors).map(([key, entry]) => ({
    label: labelByFieldKey.get(key) ?? key,
    message: entry?.message ?? "Invalid",
  }));
  const areErrorsPresent = errorEntries.length > 0;
  const buttonErrorMessage = areErrorsPresent
    ? "Some fields are invalid"
    : submissionErrorMessage;

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
            onExternalChange={handleFieldChange}
          />
        ))}
      </div>
      <div className={styles.osdkFormFooter}>
        <ErrorIndicator errorEntries={errorEntries} />
        <div className={styles.osdkFormSubmitButton}>
          <SubmitButton
            isPending={isFormPending}
            isSubmitDisabled={isSubmitDisabled
              || (hasAttemptedSubmit && areErrorsPresent)}
            errorMessage={buttonErrorMessage}
          />
        </div>
      </div>
    </form>
  );
});

function buildDefaultValues(
  fieldDefinitions: ReadonlyArray<RendererFieldDefinition>,
): Record<string, unknown> {
  const values: Record<string, unknown> = {};
  for (const def of fieldDefinitions) {
    const props: Record<string, unknown> = def.fieldComponentProps;
    if ("defaultValue" in props) {
      values[def.fieldKey] = props.defaultValue;
    }
  }
  return values;
}

interface ErrorEntry {
  label: string;
  message: string;
}

interface SubmitButtonProps {
  isPending: boolean;
  isSubmitDisabled: boolean;
  errorMessage: string | undefined;
}

const SubmitButton = memo(function SubmitButtonFn({
  isPending,
  isSubmitDisabled,
  errorMessage,
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

  if (errorMessage == null) {
    return button;
  }

  return (
    <Tooltip.Root defaultOpen={true}>
      <Tooltip.Trigger delay={TOOLTIP_TRIGGER_DELAY_MS}>
        {button}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup>
            <Tooltip.Arrow />
            {errorMessage}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
});

interface ErrorIndicatorProps {
  errorEntries: ReadonlyArray<ErrorEntry>;
}

// memo omitted: errorEntries is always a new array (RHF reuses the same errors ref)
function ErrorIndicator({
  errorEntries,
}: ErrorIndicatorProps): React.ReactElement | null {
  if (errorEntries.length === 0) {
    return null;
  }

  const count = errorEntries.length;

  return (
    <Tooltip.Root>
      <Tooltip.Trigger delay={TOOLTIP_TRIGGER_DELAY_MS}>
        <span className={styles.osdkFormErrorIndicator}>
          <ErrorIcon size={14} />
          {count === 1 ? "1 issue" : `${count} issues`}
        </span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup>
            <Tooltip.Arrow />
            <ul className={styles.osdkFormErrorList}>
              {errorEntries.map((entry) => (
                <li key={entry.label}>
                  <strong>{entry.label}:</strong> {entry.message}
                </li>
              ))}
            </ul>
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
