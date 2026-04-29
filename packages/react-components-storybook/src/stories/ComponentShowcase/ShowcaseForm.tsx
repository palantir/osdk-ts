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

import type { RendererFieldDefinition } from "@osdk/react-components/experimental";
import { BaseForm } from "@osdk/react-components/experimental";
import React from "react";

function noop(_formState: Record<string, unknown>): void {
  // Showcase-only — submissions are discarded
}

// -- Contact Form --

const CONTACT_FIELDS: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "fullName",
    fieldComponent: "TEXT_INPUT",
    label: "Full Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Jane Doe" },
  },
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    fieldComponentProps: { placeholder: "jane@example.com" },
  },
  {
    fieldKey: "message",
    fieldComponent: "TEXT_AREA",
    label: "Message",
    fieldComponentProps: { placeholder: "How can we help?", rows: 4 },
  },
];

export const ContactForm = React.memo(
  function ContactFormFn(): React.ReactElement {
    return (
      <BaseForm
        formTitle="Contact Us"
        fieldDefinitions={CONTACT_FIELDS}
        onSubmit={noop}
      />
    );
  },
);

// -- Settings Form --

const DEPARTMENT_ITEMS = [
  "Engineering",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "Legal",
];

const ROLE_OPTIONS = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
];

const SETTINGS_FIELDS: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "displayName",
    fieldComponent: "TEXT_INPUT",
    label: "Display Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter display name" },
  },
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    fieldComponentProps: {
      items: DEPARTMENT_ITEMS,
      isSearchable: true,
      placeholder: "Search departments...",
    },
  },
  {
    fieldKey: "role",
    fieldComponent: "RADIO_BUTTONS",
    label: "Role",
    fieldComponentProps: { options: ROLE_OPTIONS },
  },
  {
    fieldKey: "maxItems",
    fieldComponent: "NUMBER_INPUT",
    label: "Max Items Per Page",
    fieldComponentProps: { min: 10, max: 100, step: 10, placeholder: "25" },
  },
];

export const SettingsForm = React.memo(
  function SettingsFormFn(): React.ReactElement {
    return (
      <BaseForm
        formTitle="User Settings"
        fieldDefinitions={SETTINGS_FIELDS}
        onSubmit={noop}
      />
    );
  },
);

// -- Scheduling Form --

const SCHEDULING_FIELDS: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "eventName",
    fieldComponent: "TEXT_INPUT",
    label: "Event Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Team standup" },
  },
  {
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Date & Time",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: { placeholder: "Optional notes...", rows: 3 },
  },
];

export const SchedulingForm = React.memo(
  function SchedulingFormFn(): React.ReactElement {
    return (
      <BaseForm
        formTitle="Schedule Event"
        fieldDefinitions={SCHEDULING_FIELDS}
        onSubmit={noop}
      />
    );
  },
);

// -- Upload Form --

const TAG_ITEMS = ["Urgent", "Review", "Follow-up", "Archived", "Pinned"];

const UPLOAD_FIELDS: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "title",
    fieldComponent: "TEXT_INPUT",
    label: "Document Title",
    isRequired: true,
    fieldComponentProps: { placeholder: "Quarterly report" },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags",
    fieldComponentProps: {
      items: TAG_ITEMS,
      isMultiple: true,
      isSearchable: true,
      placeholder: "Select tags...",
    },
  },
  {
    fieldKey: "file",
    fieldComponent: "FILE_PICKER",
    label: "Attachment",
    fieldComponentProps: { accept: ".pdf,.doc,.docx,.xlsx" },
  },
];

export const UploadForm = React.memo(
  function UploadFormFn(): React.ReactElement {
    return (
      <BaseForm
        formTitle="Upload Document"
        fieldDefinitions={UPLOAD_FIELDS}
        onSubmit={noop}
      />
    );
  },
);

// -- Date Range Form --

const DATE_RANGE_FIELDS: ReadonlyArray<RendererFieldDefinition> = [
  {
    fieldKey: "reportName",
    fieldComponent: "TEXT_INPUT",
    label: "Report Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Monthly summary" },
  },
  {
    fieldKey: "dateRange",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Date Range",
    fieldComponentProps: {
      placeholderStart: "Start date",
      placeholderEnd: "End date",
    },
  },
  {
    fieldKey: "budget",
    fieldComponent: "NUMBER_INPUT",
    label: "Budget",
    fieldComponentProps: { min: 0, step: 100, placeholder: "0" },
  },
];

export const DateRangeForm = React.memo(
  function DateRangeFormFn(): React.ReactElement {
    return (
      <BaseForm
        formTitle="Generate Report"
        fieldDefinitions={DATE_RANGE_FIELDS}
        onSubmit={noop}
      />
    );
  },
);
