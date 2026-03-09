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

import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import { Input } from "@base-ui/react/input";
import { NumberField } from "@base-ui/react/number-field";
import classnames from "classnames";
import React from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import { Checkbox } from "../base-components/checkbox/Checkbox.js";
import styles from "./BaseActionForm.module.css";

export interface BaseFormFieldConfig {
  key: string;
  label: string;
  type:
    | "string"
    | "integer"
    | "long"
    | "double"
    | "boolean"
    | "datetime"
    | "timestamp"
    | string;
  isRequired: boolean;
  description?: string;
}

export interface BaseActionFormProps {
  title?: string;
  fields: BaseFormFieldConfig[];
  values: Record<string, unknown>;
  onFieldChange: (key: string, value: unknown) => void;
  onSubmit: () => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
  isSubmitDisabled?: boolean;
  error?: string;
  className?: string;
}

const NUMERIC_TYPES = new Set([
  "integer",
  "long",
  "double",
  "float",
  "short",
  "byte",
  "decimal",
]);

export function BaseActionForm({
  title,
  fields,
  values,
  onFieldChange,
  onSubmit,
  onCancel,
  isSubmitting = false,
  isSubmitDisabled = false,
  error,
  className,
}: BaseActionFormProps): React.ReactElement {
  const handleSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  return (
    <Form
      onSubmit={handleSubmit}
      className={classnames(styles.form, className)}
    >
      {title != null && <h3 className={styles.title}>{title}</h3>}
      {fields.map((field) => (
        <FormField
          key={field.key}
          field={field}
          value={values[field.key]}
          onFieldChange={onFieldChange}
        />
      ))}
      {error != null && <div className={styles.error}>{error}</div>}
      <div className={styles.footer}>
        {onCancel != null && (
          <ActionButton variant="secondary" onClick={onCancel} type="button">
            Cancel
          </ActionButton>
        )}
        <ActionButton
          variant="primary"
          type="submit"
          disabled={isSubmitDisabled || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </ActionButton>
      </div>
    </Form>
  );
}

interface FormFieldProps {
  field: BaseFormFieldConfig;
  value: unknown;
  onFieldChange: (key: string, value: unknown) => void;
}

function FormField({
  field,
  value,
  onFieldChange,
}: FormFieldProps): React.ReactElement {
  const handleTextChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onFieldChange(field.key, event.target.value);
    },
    [onFieldChange, field.key],
  );

  const handleNumberChange = React.useCallback(
    (val: number | null) => {
      onFieldChange(field.key, val);
    },
    [onFieldChange, field.key],
  );

  const handleBooleanChange = React.useCallback(
    (checked: boolean) => {
      onFieldChange(field.key, checked);
    },
    [onFieldChange, field.key],
  );

  return (
    <Field.Root className={styles.fieldRoot}>
      <Field.Label className={styles.label}>
        {field.label}
        {field.isRequired && <span className={styles.required}>*</span>}
      </Field.Label>
      {field.description != null && (
        <Field.Description className={styles.description}>
          {field.description}
        </Field.Description>
      )}
      {renderFieldInput(field, value, {
        onTextChange: handleTextChange,
        onNumberChange: handleNumberChange,
        onBooleanChange: handleBooleanChange,
      })}
      <Field.Error className={styles.fieldError} />
    </Field.Root>
  );
}

interface FieldHandlers {
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNumberChange: (value: number | null) => void;
  onBooleanChange: (checked: boolean) => void;
}

function renderFieldInput(
  field: BaseFormFieldConfig,
  value: unknown,
  handlers: FieldHandlers,
): React.ReactElement {
  if (field.type === "boolean") {
    return (
      <Checkbox
        checked={value === true}
        onCheckedChange={handlers.onBooleanChange}
      />
    );
  }

  if (NUMERIC_TYPES.has(field.type)) {
    return (
      <NumberField.Root
        value={value as number | null ?? null}
        onValueChange={handlers.onNumberChange}
      >
        <NumberField.Input className={styles.input} />
      </NumberField.Root>
    );
  }

  // string, geohash, datetime, timestamp, and all other types fall back to text input
  return (
    <Field.Control
      render={<Input className={styles.input} />}
      value={value as string ?? ""}
      onChange={handlers.onTextChange}
      required={field.isRequired}
    />
  );
}
