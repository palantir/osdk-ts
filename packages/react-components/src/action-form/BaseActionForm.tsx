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
import type { ActionMetadata } from "@osdk/api"; // TODO: we need to drop this too
import classnames from "classnames";
import React from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import styles from "./BaseActionForm.module.css";
import { FormFieldInput } from "./inputs/FormFieldInput.js";

/** All supported form field types — no string catch-all */
export type FormFieldType =
  | ActionMetadata.DataType.BaseActionParameterTypes
  | "object"
  | "objectSet"
  | "interface"
  | "struct"
  | "decimal"
  | "float"
  | "short"
  | "byte"
  | "textarea"
  | "select";

export interface BaseFormFieldConfig {
  key: string;
  label: string;
  type: FormFieldType;
  isRequired: boolean;
  description?: string;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
}

export interface BaseActionFormProps<
  TData extends Record<string, unknown> = Record<string, unknown>,
> {
  title?: string;
  fields: BaseFormFieldConfig[];
  values: TData;
  onFieldChange: <K extends keyof TData & string>(
    key: K,
    value: TData[K],
  ) => void;
  onSubmit: () => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
  isSubmitDisabled?: boolean;
  error?: string;
  className?: string;
}

export function BaseActionForm<
  TData extends Record<string, unknown> = Record<string, unknown>,
>({
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
}: BaseActionFormProps<TData>): React.ReactElement {
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
          <FormField<TData>
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

interface FormFieldProps<
  TData extends Record<string, unknown> = Record<string, unknown>,
> {
  field: BaseFormFieldConfig;
  value: unknown;
  onFieldChange: <K extends keyof TData & string>(
    key: K,
    value: TData[K],
  ) => void;
}

function FormField<
  TData extends Record<string, unknown> = Record<string, unknown>,
>({ field, value, onFieldChange }: FormFieldProps<TData>): React.ReactElement {
  const handleChange = React.useCallback(
    (newValue: unknown) => {
      onFieldChange(field.key, newValue as TData[string]);
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
