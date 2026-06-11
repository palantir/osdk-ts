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
import {
  ActionForm,
  type FormFieldDefinition,
  type FormState,
} from "@osdk/react-components/experimental/action-form";
import React from "react";
import type { Assignment } from "../../generatedNoCheck2/index.js";
import { updateAssignment } from "../../generatedNoCheck2/index.js";
import { ErrorBanner } from "../common/index.js";

export interface UpdateAssignmentFormProps {
  assignment: Assignment.OsdkInstance;
}

type EditableFieldKey =
  | "title"
  | "function"
  | "officeId"
  | "floorId"
  | "managerId";

const TEXT_FIELDS: ReadonlyArray<
  { fieldKey: EditableFieldKey; label: string }
> = [
  { fieldKey: "title", label: "Title" },
  { fieldKey: "function", label: "Function" },
  { fieldKey: "officeId", label: "Office ID" },
  { fieldKey: "floorId", label: "Floor ID" },
  { fieldKey: "managerId", label: "Manager ID" },
];

function emptyToUndefined(value: string | undefined): string | undefined {
  return value == null || value === "" ? undefined : value;
}

/**
 * Edits an assignment's role details and location/ownership FKs.
 *
 * Built on the `ActionForm` component: the editable parameters are declared as text fields seeded
 * from the current assignment, while the fixed `assignment` object parameter is injected in
 * `onSubmit`. Seed values are read once on mount, so the parent remounts this form (keyed on the
 * assignment's primary key) when a different assignment loads.
 */
export function UpdateAssignmentForm(
  props: UpdateAssignmentFormProps,
): React.JSX.Element {
  const { assignment } = props;
  const { applyAction, error } = useOsdkAction(updateAssignment);

  const fieldDefinitions = React.useMemo<
    ReadonlyArray<FormFieldDefinition<typeof updateAssignment>>
  >(
    () =>
      TEXT_FIELDS.map(({ fieldKey, label }) => ({
        fieldKey,
        label,
        fieldComponent: "TEXT_INPUT",
        defaultValue: assignment[fieldKey] ?? "",
        fieldComponentProps: {},
      })),
    [assignment],
  );

  const handleSubmit = React.useCallback(
    async (formState: FormState<typeof updateAssignment>) => {
      await applyAction({
        assignment,
        title: emptyToUndefined(formState.title),
        function: emptyToUndefined(formState.function),
        officeId: emptyToUndefined(formState.officeId),
        floorId: emptyToUndefined(formState.floorId),
        managerId: emptyToUndefined(formState.managerId),
      });
    },
    [applyAction, assignment],
  );

  return (
    <>
      <ActionForm
        actionDefinition={updateAssignment}
        formFieldDefinitions={fieldDefinitions}
        onSubmit={handleSubmit}
      />
      <ErrorBanner
        message={error?.actionValidation?.message}
        context="Update assignment"
      />
    </>
  );
}
