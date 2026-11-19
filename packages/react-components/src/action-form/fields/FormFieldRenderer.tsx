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

import React, { memo } from "react";

import { FormField } from "../FormField.js";
import {
  type PortalContainer,
  type RendererFieldDefinition,
} from "../FormFieldApi.js";
import { CustomFieldAdapter } from "./adapters/CustomFieldAdapter.js";
import { DatePickerAdapter } from "./adapters/DatePickerAdapter.js";
import { DateRangePickerAdapter } from "./adapters/DateRangePickerAdapter.js";
import { DropdownFieldAdapter } from "./adapters/DropdownFieldAdapter.js";
import { FilePickerFieldAdapter } from "./adapters/FilePickerFieldAdapter.js";
import { NumberInputFieldAdapter } from "./adapters/NumberInputFieldAdapter.js";
import { ObjectSelectFieldAdapter } from "./adapters/ObjectSelectFieldAdapter.js";
import { RadioButtonsFieldAdapter } from "./adapters/RadioButtonsFieldAdapter.js";
import { SwitchFieldAdapter } from "./adapters/SwitchFieldAdapter.js";
import { TextAreaFieldAdapter } from "./adapters/TextAreaFieldAdapter.js";
import { TextInputFieldAdapter } from "./adapters/TextInputFieldAdapter.js";
import { ObjectSetField } from "./ObjectSetField.js";
import { TextInputField } from "./TextInputField.js";

const UNSUPPORTED_FIELD_MESSAGE =
  "Unsupported field type. Use a CUSTOM field instead";

export interface FormFieldRendererProps {
  fieldDefinition: RendererFieldDefinition;
  value: unknown;
  onFieldValueChange: (value: unknown) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /** Field-level blur for fields that own their touched state (e.g. dropdowns). */
  onFieldBlur?: () => void;
  isEdited: boolean;
  error: string | undefined;
  portalContainer?: PortalContainer;
}

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = memo(
  function FormFieldRendererFn({
    fieldDefinition,
    value,
    onFieldValueChange,
    onBlur,
    onFieldBlur,
    isEdited,
    error,
    portalContainer,
  }: FormFieldRendererProps): React.ReactElement {
    const { label, isRequired, helperText, helperTextPlacement } =
      fieldDefinition;

    return (
      <FormField
        label={label}
        isRequired={isRequired}
        fieldKey={fieldDefinition.fieldKey}
        helperText={helperText}
        helperTextPlacement={helperTextPlacement}
        isEdited={isEdited}
        error={error}
        onBlur={onBlur}
      >
        {renderFieldComponent(
          fieldDefinition,
          value,
          onFieldValueChange,
          error,
          portalContainer,
          onFieldBlur,
        )}
      </FormField>
    );
  },
);

function renderFieldComponent(
  fieldDefinition: RendererFieldDefinition,
  value: unknown,
  onChange: (value: unknown) => void,
  error: string | undefined,
  portalContainer: PortalContainer | undefined,
  onFieldBlur: (() => void) | undefined,
): React.ReactElement {
  switch (fieldDefinition.fieldComponent) {
    case "DATE_RANGE_INPUT":
      return (
        <DateRangePickerAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer,
          )}
        />
      );
    case "TEXT_INPUT":
      return (
        <TextInputFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "UNSUPPORTED":
      return (
        <TextInputField
          {...fieldDefinition.fieldComponentProps}
          id={fieldDefinition.fieldKey}
          value={UNSUPPORTED_FIELD_MESSAGE}
          error={error}
          disabled={true}
        />
      );
    case "TEXT_AREA":
      return (
        <TextAreaFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "DROPDOWN":
      return (
        <DropdownFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer,
          )}
          onBlur={onFieldBlur}
        />
      );
    case "DATETIME_PICKER":
      return (
        <DatePickerAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer,
          )}
        />
      );
    case "RADIO_BUTTONS":
      return (
        <RadioButtonsFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "SWITCH":
      return (
        <SwitchFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "CUSTOM":
      return (
        <CustomFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "NUMBER_INPUT":
      return (
        <NumberInputFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "FILE_PICKER":
      return (
        <FilePickerFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "OBJECT_SELECT":
      return (
        <ObjectSelectFieldAdapter
          fieldDefinition={fieldDefinition}
          value={value}
          onChange={onChange}
          error={error}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer,
          )}
        />
      );
    case "OBJECT_SET":
      return (
        <ObjectSetField
          id={fieldDefinition.fieldKey}
          {...fieldDefinition.fieldComponentProps}
          disabled={fieldDefinition.disabled === true}
        />
      );
    default:
      return assertUnreachableFieldComponent(fieldDefinition);
  }
}

function resolvePortalContainer(
  fieldComponentProps: { portalContainer?: PortalContainer },
  formPortalContainer: PortalContainer | undefined,
): PortalContainer | undefined {
  // A field-level value, including null, is an explicit override. That lets a
  // single field opt out of a form-level dialog portal when needed.
  return Object.hasOwn(fieldComponentProps, "portalContainer")
    ? fieldComponentProps.portalContainer
    : formPortalContainer;
}

function assertUnreachableFieldComponent(value: never): never {
  throw new Error(`Unhandled field component: ${String(value)}`);
}
