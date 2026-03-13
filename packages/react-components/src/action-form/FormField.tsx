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
import React from "react";
import styles from "./BaseActionForm.module.css";
import type { BaseFormFieldDefinition } from "./FormFieldApi.js";
import { FormFieldInput } from "./inputs/FormFieldInput.js";

interface FormFieldProps {
  fieldKey: string;
  field: BaseFormFieldDefinition;
  value: unknown;
  onFieldChange: (fieldKey: string, value: unknown) => void;
}

export function FormField({
  fieldKey,
  field,
  value,
  onFieldChange,
}: FormFieldProps): React.ReactElement {
  const handleChange = React.useCallback(
    (newValue: unknown) => {
      onFieldChange(fieldKey, newValue);
    },
    [onFieldChange, fieldKey],
  );

  return (
    <Field.Root name={fieldKey} className={styles.fieldRoot}>
      {field.label != null && (
        <Field.Label className={styles.label}>
          {field.label}
          {field.isRequired === true && (
            <span className={styles.required}>*</span>
          )}
        </Field.Label>
      )}
      {field.helperText != null && (
        <Field.Description className={styles.description}>
          {field.helperText}
        </Field.Description>
      )}
      <FormFieldInput field={field} value={value} onChange={handleChange} />
      <Field.Error className={styles.fieldError} />
    </Field.Root>
  );
}
