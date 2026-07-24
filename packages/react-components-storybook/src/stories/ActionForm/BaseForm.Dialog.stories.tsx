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

import { Button, Dialog } from "@blueprintjs/core";
import type { FormContentItem } from "@osdk/react-components/experimental";
import { BaseForm } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useState } from "react";

import {
  baseFormMeta,
  type BaseFormStoryProps,
  DEPARTMENT_ITEMS,
  DROPDOWN_ITEMS,
  field,
  handleSubmit,
  TAG_ITEMS,
} from "./baseFormStoryHelpers.js";

const meta: Meta<BaseFormStoryProps> = {
  ...baseFormMeta,
  title: "Components/ActionForm/BaseForm/In a Dialog",
};

export default meta;
type Story = StoryObj<typeof meta>;

const blueprintDialogFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Scheduled At",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  }),
  field({
    fieldKey: "deadline",
    fieldComponent: "DATETIME_PICKER",
    label: "Deadline",
    fieldComponentProps: {
      placeholder: "Select date",
    },
  }),
  field({
    fieldKey: "meetingWindow",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Meeting Window",
    fieldComponentProps: {
      showTime: true,
      placeholderStart: "Start",
      placeholderEnd: "End",
    },
  }),
  field({
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    isRequired: true,
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      placeholder: "Select department...",
    },
  }),
  field({
    fieldKey: "team",
    fieldComponent: "DROPDOWN",
    label: "Team",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      isSearchable: true,
      placeholder: "Search teams...",
    },
  }),
];

function BlueprintDialogBaseForm(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button text="Open dialog" onClick={handleOpen} />
      <Dialog
        className="osdkBlueprintDialogForm"
        isOpen={isOpen}
        onClose={handleClose}
        title="Action form"
      >
        <BaseForm
          formContent={blueprintDialogFormContent}
          onSubmit={handleSubmit}
        />
      </Dialog>
    </>
  );
}

export const InsideBlueprintDialog: Story = {
  render: () => <BlueprintDialogBaseForm />,
  parameters: {
    docs: {
      source: {
        code: `function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`,
      },
    },
  },
};

const scrollableDialogFormContent: ReadonlyArray<FormContentItem> = [
  field({
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Full Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter full name" },
  }),
  field({
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    fieldComponentProps: { placeholder: "user@example.com" },
  }),
  field({
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      placeholder: "Select department...",
    },
  }),
  field({
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  }),
  field({
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: DROPDOWN_ITEMS,
      placeholder: "Select priority",
    },
  }),
  field({
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Status",
    fieldComponentProps: {
      options: [
        { label: "Active", value: true },
        { label: "Inactive", value: false },
      ],
    },
  }),
  field({
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    fieldComponentProps: { placeholder: "Tell us about yourself", rows: 3 },
  }),
  field({
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags",
    fieldComponentProps: {
      items: TAG_ITEMS,
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search tags...",
    },
  }),
  field({
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Resume",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  }),
  field({
    fieldKey: "notes",
    fieldComponent: "TEXT_AREA",
    label: "Additional Notes",
    fieldComponentProps: { placeholder: "Any extra details", rows: 2 },
  }),
];

function ScrollableDialogBaseForm(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button text="Open dialog" onClick={handleOpen} />
      <Dialog
        className="osdkBlueprintDialogForm"
        isOpen={isOpen}
        onClose={handleClose}
        title="New employee"
      >
        <BaseForm
          formContent={scrollableDialogFormContent}
          onSubmit={handleSubmit}
        />
      </Dialog>
    </>
  );
}

export const ScrollableDialogForm: Story = {
  render: () => <ScrollableDialogBaseForm />,
  parameters: {
    docs: {
      description: {
        story:
          "When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom.",
      },
      source: {
        code: `// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`,
      },
    },
  },
};
