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

import { Form } from "@base-ui/react/form";
import { mapValues } from "lodash-es";
import React from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import { useControllableState } from "../shared/hooks/useControllableState.js";
import type { BaseActionFormProps } from "./ActionFormApi.js";
import styles from "./BaseActionForm.module.css";
import { FormField } from "./FormField.js";

export function BaseActionForm<S extends Record<string, unknown>>({
  formTitle,
  isSubmitDisabled,
  formFieldDefinitionMap,
  formState: maybeControlledFormState,
  onFormStateChange: onControlledFormStateChange,
  onSubmit,
}: BaseActionFormProps<S>): React.ReactElement {
  // mapValues loses per-key type correlation, but the shape is correct:
  // each key gets the defaultValue from its own field definition
  const defaultValues = React.useMemo(
    () =>
      mapValues(formFieldDefinitionMap, (v) => v?.defaultValue) as Partial<S>,
    [formFieldDefinitionMap],
  );

  const [formState, setFormState] = useControllableState<Partial<S>>({
    value: maybeControlledFormState,
    defaultValue: defaultValues,
    onChange: onControlledFormStateChange,
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string>();

  const handleFieldChange = React.useCallback(
    (fieldKey: string, value: unknown) => {
      setFormState((prev) => ({ ...prev, [fieldKey]: value }));
    },
    [setFormState],
  );

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (onSubmit == null) {
        return;
      }
      setSubmitError(undefined);
      setIsSubmitting(true);
      try {
        await onSubmit(formState);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("BaseActionForm submission failed", error);
        setSubmitError(
          error instanceof Error ? error.message : String(error),
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSubmit, formState],
  );

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      {formTitle != null && <h3 className={styles.title}>{formTitle}</h3>}
      {Object.entries(formFieldDefinitionMap).map(([key, field]) => {
        return (
          <FormField
            key={key}
            fieldKey={key}
            field={field}
            value={formState[key]}
            onFieldChange={handleFieldChange}
          />
        );
      })}
      {submitError != null && <div className={styles.error}>{submitError}</div>}
      <div className={styles.footer}>
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
