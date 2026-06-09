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

import { useOsdkAction } from "@osdk/react";
import React from "react";
import type { Assignment } from "../../generatedNoCheck2/index.js";
import { updateAssignment } from "../../generatedNoCheck2/index.js";
import { ErrorBanner } from "../common/index.js";
import styles from "./actions.module.css";

export interface UpdateAssignmentFormProps {
  assignment: Assignment.OsdkInstance;
}

interface FormFields {
  title: string;
  function: string;
  officeId: string;
  floorId: string;
  managerId: string;
}

function fieldsFromAssignment(assignment: Assignment.OsdkInstance): FormFields {
  return {
    title: assignment.title ?? "",
    function: assignment.function ?? "",
    officeId: assignment.officeId ?? "",
    floorId: assignment.floorId ?? "",
    managerId: assignment.managerId ?? "",
  };
}

function emptyToUndefined(value: string): string | undefined {
  return value === "" ? undefined : value;
}

/** Edits an assignment's role details and location/ownership FKs. */
export function UpdateAssignmentForm(
  props: UpdateAssignmentFormProps,
): React.JSX.Element {
  const { assignment } = props;
  const { applyAction, isPending, error } = useOsdkAction(updateAssignment);
  const [fields, setFields] = React.useState<FormFields>(() =>
    fieldsFromAssignment(assignment)
  );

  const setField = React.useCallback(
    (key: keyof FormFields, value: string) => {
      setFields((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const onSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      void applyAction({
        assignment,
        title: emptyToUndefined(fields.title),
        function: emptyToUndefined(fields.function),
        officeId: emptyToUndefined(fields.officeId),
        floorId: emptyToUndefined(fields.floorId),
        managerId: emptyToUndefined(fields.managerId),
      });
    },
    [applyAction, assignment, fields],
  );

  const textFields: Array<{ key: keyof FormFields; label: string }> = [
    { key: "title", label: "Title" },
    { key: "function", label: "Function" },
    { key: "officeId", label: "Office ID" },
    { key: "floorId", label: "Floor ID" },
    { key: "managerId", label: "Manager ID" },
  ];

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {textFields.map(({ key, label }) => (
        <label key={key} className={styles.field}>
          <span className={styles.fieldLabel}>{label}</span>
          <input
            className={styles.input}
            type="text"
            value={fields[key]}
            onChange={(e) =>
              setField(key, e.target.value)}
          />
        </label>
      ))}
      <button
        type="submit"
        className={styles.primaryButton}
        disabled={isPending}
      >
        Save changes
      </button>
      <ErrorBanner
        message={error?.actionValidation?.message}
        context="Update assignment"
      />
    </form>
  );
}
