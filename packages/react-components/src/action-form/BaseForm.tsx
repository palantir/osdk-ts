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
import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { ActionButton } from "../base-components/action-button/ActionButton.js";
import { SkeletonBar } from "../base-components/skeleton/SkeletonBar.js";
import { Tooltip } from "../base-components/tooltip/Tooltip.js";
import { useAsyncAction } from "../shared/hooks/useAsyncAction.js";
import type { BaseFormProps, FormContentItem } from "./ActionFormApi.js";
import type { BaseFormLabels } from "./BaseFormLabels.js";
import { FieldBridge } from "./fields/FieldBridge.js";
import type { RendererFieldDefinition } from "./FormFieldApi.js";
import { FormHeader } from "./FormHeader.js";
import { FormSection } from "./FormSection.js";

import styles from "./BaseForm.module.css";

export const BaseForm: React.FC<BaseFormProps> = memo(function BaseFormFn(
  props: BaseFormProps,
): React.ReactElement {
  return <BaseFormContent {...props} />;
});

const BaseFormContent = memo(function BaseFormContentFn({
  formTitle,
  formContent,
  formState: controlledFormState,
  onFieldValueChange,
  onSubmit,
  isSubmitDisabled = false,
  isPending = false,
  isLoading = false,
  className,
  labels,
  submitButtonText = "Submit",
  submitButtonVariant = "primary",
}: BaseFormProps): React.ReactElement {
  const portalContainerRef = useRef<HTMLFormElement>(null);
  const isControlled = controlledFormState != null;

  const resolvedFormContent = useMemo(
    () => resolveFormContentLabels(formContent, labels),
    [formContent, labels],
  );

  const allFieldDefinitions = useMemo(
    () => flattenFieldDefinitions(resolvedFormContent),
    [resolvedFormContent],
  );

  const defaultValues = useMemo(
    () => buildDefaultValues(allFieldDefinitions),
    [allFieldDefinitions],
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
  const submissionErrorMessage =
    submissionError != null
      ? submissionError instanceof Error
        ? submissionError.message
        : // TODO: provide better error message
          (labels?.submissionFailed ?? "Submission failed")
      : undefined;

  const submitForm = useCallback(async () => {
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
  }, [trigger, executeSubmit, controlledFormState, getValues]);

  const handleFieldChange = useCallback(
    (fieldKey: string, value: unknown) => {
      clearError();
      onFieldValueChange?.(fieldKey, value);
    },
    [clearError, onFieldValueChange],
  );

  const labelByFieldKey = useMemo(
    () => new Map(allFieldDefinitions.map((d) => [d.fieldKey, d.label])),
    [allFieldDefinitions],
  );

  // RHF reuses the same errors object reference across renders so we cannot memoize errorEntries
  const errorEntries = Object.entries(errors).map(([key, entry]) => ({
    label: labelByFieldKey.get(key) ?? key,
    message: entry?.message ?? labels?.validationError ?? "Invalid",
  }));
  const areErrorsPresent = errorEntries.length > 0;
  const buttonErrorMessage = areErrorsPresent
    ? (labels?.invalidFields ?? "Some fields are invalid")
    : submissionErrorMessage;
  const isFormPending = isPending || isSubmitting;
  const isSubmitButtonDisabled =
    isSubmitDisabled || (hasAttemptedSubmit && areErrorsPresent);

  return (
    <form
      ref={portalContainerRef}
      className={classNames(styles.osdkForm, className)}
      // Workshop widgets can run in iframes without `allow-forms`, where
      // native form submission is blocked. Keep the form landmark, but do not
      // wire any form-level submit handlers; the submit button invokes our
      // JavaScript submit path directly.
    >
      {formTitle != null && <FormHeader title={formTitle} />}
      {isLoading && allFieldDefinitions.length === 0 && (
        <div
          role="status"
          aria-label={labels?.loadingFields ?? "Loading form fields"}
          className={styles.osdkFormFields}
        >
          {FORM_SKELETON}
        </div>
      )}
      <div className={styles.osdkFormFields}>
        {resolvedFormContent.map((item) => {
          if (item.type === "field") {
            return (
              <FieldBridge
                key={item.definition.fieldKey}
                fieldDef={item.definition}
                control={control}
                onExternalChange={handleFieldChange}
                portalContainer={portalContainerRef}
              />
            );
          }
          const sectionErrorCount = item.definition.fields.reduce(
            (count, field) => count + (errors[field.fieldKey] != null ? 1 : 0),
            0,
          );
          return (
            <FormSection
              key={item.key}
              definition={item.definition}
              errorCount={sectionErrorCount}
              errorCountLabel={labels?.renderSectionErrorCount}
            >
              {item.definition.fields.map((fieldDef) => (
                <FieldBridge
                  key={fieldDef.fieldKey}
                  fieldDef={fieldDef}
                  control={control}
                  onExternalChange={handleFieldChange}
                  portalContainer={portalContainerRef}
                />
              ))}
            </FormSection>
          );
        })}
      </div>
      <div className={styles.osdkFormFooter}>
        <ErrorIndicator
          errorEntries={errorEntries}
          formatIssueCount={labels?.renderIssueCount}
        />
        <div className={styles.osdkFormSubmitButton}>
          <SubmitButton
            isPending={isFormPending}
            isSubmitDisabled={isSubmitButtonDisabled}
            errorMessage={buttonErrorMessage}
            pendingButtonText={labels?.submitting}
            buttonText={submitButtonText}
            buttonVariant={submitButtonVariant}
            onClick={submitForm}
          />
        </div>
      </div>
    </form>
  );
});

/**
 * Extracts all RendererFieldDefinitions from formContent, flattening
 * section fields into a single array. RHF sees a flat field namespace
 * regardless of visual grouping, so this is used to build default values
 * and the field-key-to-label map for error display.
 */
function flattenFieldDefinitions(
  formContent: ReadonlyArray<FormContentItem>,
): ReadonlyArray<RendererFieldDefinition> {
  const result: RendererFieldDefinition[] = [];
  for (const item of formContent) {
    if (item.type === "field") {
      result.push(item.definition);
    } else {
      for (const fieldDef of item.definition.fields) {
        result.push(fieldDef);
      }
    }
  }
  return result;
}

function resolveFormContentLabels(
  formContent: ReadonlyArray<FormContentItem>,
  labels: Partial<BaseFormLabels> | undefined,
): ReadonlyArray<FormContentItem> {
  return formContent.map((item): FormContentItem => {
    if (item.type === "field") {
      return {
        ...item,
        definition: resolveFieldDefinitionLabels(item.definition, labels),
      };
    }

    return {
      ...item,
      definition: {
        ...item.definition,
        fields: item.definition.fields.map((fieldDefinition) =>
          resolveFieldDefinitionLabels(fieldDefinition, labels),
        ),
      },
    };
  });
}

function resolveFieldDefinitionLabels(
  fieldDefinition: RendererFieldDefinition,
  labels: Partial<BaseFormLabels> | undefined,
): RendererFieldDefinition {
  fieldDefinition = {
    ...fieldDefinition,
    labels: mergeLabels(labels?.fieldLabels, fieldDefinition.labels),
  };

  switch (fieldDefinition.fieldComponent) {
    case "DROPDOWN":
      return {
        ...fieldDefinition,
        fieldComponentProps: {
          ...fieldDefinition.fieldComponentProps,
          labels: mergeLabels(
            labels?.fieldComponentLabels?.DROPDOWN,
            fieldDefinition.fieldComponentProps.labels,
          ),
        },
      };
    case "FILE_PICKER":
      return {
        ...fieldDefinition,
        fieldComponentProps: {
          ...fieldDefinition.fieldComponentProps,
          labels: mergeLabels(
            labels?.fieldComponentLabels?.FILE_PICKER,
            fieldDefinition.fieldComponentProps.labels,
          ),
        },
      };
    case "NUMBER_INPUT":
      return {
        ...fieldDefinition,
        fieldComponentProps: {
          ...fieldDefinition.fieldComponentProps,
          labels: mergeLabels(
            labels?.fieldComponentLabels?.NUMBER_INPUT,
            fieldDefinition.fieldComponentProps.labels,
          ),
        },
      };
    case "OBJECT_SELECT":
      return {
        ...fieldDefinition,
        fieldComponentProps: {
          ...fieldDefinition.fieldComponentProps,
          labels: mergeLabels(
            labels?.fieldComponentLabels?.OBJECT_SELECT,
            fieldDefinition.fieldComponentProps.labels,
          ),
        },
      };
    case "OBJECT_SET":
      return {
        ...fieldDefinition,
        fieldComponentProps: {
          ...fieldDefinition.fieldComponentProps,
          labels: mergeLabels(
            labels?.fieldComponentLabels?.OBJECT_SET,
            fieldDefinition.fieldComponentProps.labels,
          ),
        },
      };
    case "UNSUPPORTED":
      return {
        ...fieldDefinition,
        fieldComponentProps: {
          ...fieldDefinition.fieldComponentProps,
          labels: mergeLabels(
            labels?.fieldComponentLabels?.UNSUPPORTED,
            fieldDefinition.fieldComponentProps.labels,
          ),
        },
      };
    default:
      return fieldDefinition;
  }
}

function mergeLabels<Labels extends object>(
  baseLabels: Partial<Labels> | undefined,
  fieldLabels: Partial<Labels> | undefined,
): Partial<Labels> | undefined {
  if (baseLabels == null) {
    return fieldLabels;
  }
  if (fieldLabels == null) {
    return baseLabels;
  }
  return { ...baseLabels, ...fieldLabels };
}

const SKELETON_FIELD_COUNT = 3;

// Mimics the label + input layout of real form fields.
const FORM_SKELETON = Array.from({ length: SKELETON_FIELD_COUNT }, (_, i) => (
  <div key={i} className={styles.osdkFormSkeletonField}>
    <SkeletonBar className={styles.osdkFormSkeletonLabel} />
    <SkeletonBar className={styles.osdkFormSkeletonInput} />
  </div>
));

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
  pendingButtonText?: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  onClick: () => void;
}

const SubmitButton = memo(function SubmitButtonFn({
  isPending,
  isSubmitDisabled,
  errorMessage,
  pendingButtonText = "Submitting…",
  buttonText,
  buttonVariant,
  onClick,
}: SubmitButtonProps): React.ReactElement {
  const buttonLabel = isPending ? pendingButtonText : buttonText;
  const button = (
    <ActionButton
      type="button"
      variant={buttonVariant}
      disabled={isSubmitDisabled || isPending}
      onClick={onClick}
    >
      {buttonLabel}
    </ActionButton>
  );

  if (errorMessage == null) {
    return button;
  }

  return (
    <Tooltip.Root defaultOpen={true}>
      <Tooltip.Trigger
        render={<span className={styles.osdkTooltipTriggerWrapper} />}
      >
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
  formatIssueCount?: (count: number) => string;
}

// memo omitted: errorEntries is always a new array (RHF reuses the same errors ref)
function ErrorIndicator({
  errorEntries,
  formatIssueCount = renderIssueCount,
}: ErrorIndicatorProps): React.ReactElement | null {
  if (errorEntries.length === 0) {
    return null;
  }

  const count = errorEntries.length;

  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <span className={styles.osdkFormErrorIndicator}>
          <ErrorIcon size={14} />
          {formatIssueCount(count)}
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

function renderIssueCount(count: number): string {
  return count === 1 ? "1 issue" : `${count} issues`;
}
