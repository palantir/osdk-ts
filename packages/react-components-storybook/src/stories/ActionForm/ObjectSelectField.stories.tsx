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

import { BaseForm } from "@osdk/react-components/experimental";
import type { RendererFieldDefinition } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback } from "react";

const OBJECT_SELECT_FIELDS: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "employee",
    fieldComponent: "OBJECT_SELECT",
    label: "Employee",
    placeholder: "Search for an employee\u2026",
    isRequired: true,
    fieldComponentProps: {
      objectTypeApiName: "Employee",
    },
  },
  {
    fieldKey: "manager",
    fieldComponent: "OBJECT_SELECT",
    label: "Manager (optional)",
    placeholder: "Search for a manager\u2026",
    isRequired: false,
    fieldComponentProps: {
      objectTypeApiName: "Employee",
    },
  },
];

function ObjectSelectStory(): React.ReactElement {
  const handleSubmit = useCallback(
    async (formState: Record<string, unknown>) => {
      // eslint-disable-next-line no-console
      console.log("Submitted:", formState);
    },
    [],
  );

  return (
    <div style={{ maxWidth: 480, padding: 24 }}>
      <BaseForm
        formTitle="Object Select Field"
        fieldDefinitions={OBJECT_SELECT_FIELDS}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

const meta: Meta = {
  title: "Experimental/ActionForm/ObjectSelectField",
  component: ObjectSelectStory,
  tags: ["autodocs"], // cspell:disable-line
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
