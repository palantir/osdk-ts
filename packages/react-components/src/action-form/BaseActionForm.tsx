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
import classnames from "classnames";
import React from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import styles from "./BaseActionForm.module.css";
import { FormFieldInput } from "./inputs/FormFieldInput.js";

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
    | "select"
    | "textarea"
    | string;
  isRequired: boolean;
  description?: string;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
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
    <div className={classnames(styles.container, className)}>
      <Form onSubmit={handleSubmit} className={styles.form}>
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
            variant="success"
            type="submit"
            disabled={isSubmitDisabled || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </ActionButton>
        </div>
      </Form>
    </div>
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
  const handleChange = React.useCallback(
    (newValue: unknown) => {
      onFieldChange(field.key, newValue);
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
      <FormFieldInput
        field={field}
        value={value}
        onChange={handleChange}
        className={field.type === "textarea" ? styles.textarea : styles.input}
      />
      <Field.Error className={styles.fieldError} />
    </Field.Root>
  );
}
