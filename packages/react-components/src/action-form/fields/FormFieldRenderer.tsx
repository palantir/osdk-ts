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

import {
  FileInput,
  FormGroup,
  InputGroup,
  Intent,
  NumericInput,
  RadioGroup,
  Switch,
  TextArea,
} from "@blueprintjs/core";
import {
  DateInput,
  DateRangeInput,
  type DateRange,
} from "@blueprintjs/datetime";
import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import React, { memo } from "react";

import { resolvePortalContainerElement } from "../../shared/PortalContainerContext.js";
import {
  type PortalContainer,
  type RendererFieldDefinition,
} from "../FormFieldApi.js";
import { CustomField } from "./CustomField.js";
import { DropdownField } from "./DropdownField.js";
import { ObjectSelectField } from "./ObjectSelectField.js";
import { ObjectSetField } from "./ObjectSetField.js";

const UNSUPPORTED_FIELD_MESSAGE =
  "Unsupported field type. Use a CUSTOM field instead";
const EMPTY_DATE_RANGE: DateRange = [null, null];

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
    const { label, isRequired, helperText } = fieldDefinition;
    const labelInfo = getLabelInfo(isRequired === true, isEdited);
    const helperContent = (
      <>
        {helperText}
        {error != null ? <div role="alert">{error}</div> : null}
      </>
    );

    return (
      <FormGroup
        label={label}
        labelFor={fieldDefinition.fieldKey}
        labelInfo={labelInfo}
        helperText={
          helperText != null || error != null ? helperContent : undefined
        }
        intent={error != null ? Intent.DANGER : Intent.NONE}
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
      </FormGroup>
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
  const disabled = fieldDefinition.disabled === true;
  switch (fieldDefinition.fieldComponent) {
    case "DATE_RANGE_INPUT":
      return (
        <DateRangeInput
          value={coerceToDateRange(value)}
          onChange={onChange}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          startInputProps={{
            id: fieldDefinition.fieldKey,
            placeholder: fieldDefinition.placeholder,
            ...fieldDefinition.fieldComponentProps.startInputProps,
          }}
          popoverProps={{
            ...fieldDefinition.fieldComponentProps.popoverProps,
            portalContainer: resolvePortalContainerElement(
              fieldDefinition.fieldComponentProps.popoverProps
                ?.portalContainer ?? portalContainer,
            ),
          }}
        />
      );
    case "TEXT_INPUT": {
      const { defaultValue: _defaultValue, ...inputProps } =
        fieldDefinition.fieldComponentProps;
      return (
        <InputGroup
          id={fieldDefinition.fieldKey}
          value={value != null ? String(value) : ""}
          onValueChange={onChange}
          placeholder={fieldDefinition.placeholder}
          {...inputProps}
          disabled={disabled}
          intent={error != null ? Intent.DANGER : Intent.NONE}
          aria-invalid={error != null || undefined}
        />
      );
    }
    case "UNSUPPORTED":
      return (
        <InputGroup
          {...fieldDefinition.fieldComponentProps}
          id={fieldDefinition.fieldKey}
          value={UNSUPPORTED_FIELD_MESSAGE}
          disabled={true}
          aria-invalid={error != null || undefined}
        />
      );
    case "TEXT_AREA":
      return (
        <TextArea
          id={fieldDefinition.fieldKey}
          value={value != null ? String(value) : ""}
          onChange={(event) => onChange(event.currentTarget.value)}
          placeholder={fieldDefinition.placeholder}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          intent={error != null ? Intent.DANGER : Intent.NONE}
          aria-invalid={error != null || undefined}
        />
      );
    case "DROPDOWN": {
      return (
        <DropdownField
          id={fieldDefinition.fieldKey}
          value={value}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          portalContainer={resolvePortalContainer(
            fieldDefinition.fieldComponentProps,
            portalContainer,
          )}
          onBlur={onFieldBlur}
        />
      );
    }
    case "DATETIME_PICKER":
      return (
        <DateInput
          placeholder={fieldDefinition.placeholder}
          value={value instanceof Date ? value.toISOString() : null}
          onChange={(newValue) =>
            onChange(newValue == null ? null : new Date(newValue))
          }
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
          inputProps={{
            ...fieldDefinition.fieldComponentProps.inputProps,
            id: fieldDefinition.fieldKey,
            intent: error != null ? Intent.DANGER : Intent.NONE,
            "aria-invalid": error != null || undefined,
          }}
          popoverProps={{
            ...fieldDefinition.fieldComponentProps.popoverProps,
            portalContainer: resolvePortalContainerElement(
              fieldDefinition.fieldComponentProps.popoverProps
                ?.portalContainer ?? portalContainer,
            ),
          }}
        />
      );
    case "RADIO_BUTTONS":
      return (
        <RadioGroup
          id={fieldDefinition.fieldKey}
          options={fieldDefinition.fieldComponentProps.options.map(
            (option, index) => ({
              label: option.label,
              value: index,
            }),
          )}
          selectedValue={fieldDefinition.fieldComponentProps.options.findIndex(
            (option) => option.value === value,
          )}
          onChange={(event) => {
            const selectedIndex = Number(event.currentTarget.value);
            onChange(
              fieldDefinition.fieldComponentProps.options[selectedIndex]?.value,
            );
          }}
          inline={
            fieldDefinition.fieldComponentProps.orientation === "horizontal"
          }
          disabled={disabled}
          aria-invalid={error != null || undefined}
        />
      );
    case "SWITCH":
      return (
        <Switch
          {...fieldDefinition.fieldComponentProps}
          role="switch"
          aria-checked={!!value}
          id={fieldDefinition.fieldKey}
          checked={!!value}
          onChange={(event) => onChange(event.currentTarget.checked)}
          disabled={disabled}
          aria-invalid={error != null || undefined}
        />
      );
    case "CUSTOM":
      return (
        <CustomField
          id={fieldDefinition.fieldKey}
          value={value}
          onChange={onChange}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
        />
      );
    case "NUMBER_INPUT": {
      return (
        <NumericInput
          {...fieldDefinition.fieldComponentProps}
          id={fieldDefinition.fieldKey}
          value={typeof value === "number" ? value : ""}
          onValueChange={(valueAsNumber, valueAsString) =>
            onChange(valueAsString === "" ? null : valueAsNumber)
          }
          placeholder={fieldDefinition.placeholder}
          disabled={disabled}
          intent={error != null ? Intent.DANGER : Intent.NONE}
          aria-invalid={error != null || undefined}
        />
      );
    }
    case "FILE_PICKER": {
      const { inputProps, text, ...fileInputProps } =
        fieldDefinition.fieldComponentProps;
      const fileValue = coerceToFileValue(value);
      return (
        <FileInput
          {...fileInputProps}
          text={getFileInputText(fileValue) ?? text}
          hasSelection={fileValue != null}
          onInputChange={(event) => {
            const files = event.currentTarget.files;
            if (files == null || files.length === 0) {
              onChange(null);
            } else if (inputProps?.multiple === true) {
              onChange(Array.from(files));
            } else {
              onChange(files[0] ?? null);
            }
          }}
          disabled={disabled}
          inputProps={{
            ...inputProps,
            id: fieldDefinition.fieldKey,
            "aria-invalid": error != null || undefined,
          }}
        />
      );
    }
    case "OBJECT_SELECT":
      return (
        <ObjectSelectField
          id={fieldDefinition.fieldKey}
          value={narrowToOsdkObject(value)}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
          disabled={disabled}
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
          disabled={disabled}
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

function coerceToDateRange(value: unknown): DateRange {
  if (!Array.isArray(value) || value.length !== 2) return EMPTY_DATE_RANGE;
  const start = value[0] instanceof Date ? value[0] : null;
  const end = value[1] instanceof Date ? value[1] : null;
  return [start, end];
}

// TODO: Move and share with `coerceFieldValue`
function isFileArray(value: unknown[]): value is File[] {
  return value.every((v) => v instanceof File);
}

function coerceToFileValue(value: unknown): File | File[] | null {
  if (value instanceof File) {
    return value;
  }
  if (Array.isArray(value) && isFileArray(value)) {
    return value;
  }
  return null;
}

function getFileInputText(value: File | File[] | null): string | undefined {
  if (value == null) {
    return undefined;
  }
  return Array.isArray(value)
    ? value.map((file) => file.name).join(", ")
    : value.name;
}

function getLabelInfo(
  isRequired: boolean,
  isEdited: boolean,
): string | undefined {
  if (isRequired && isEdited) return "(required · edited)";
  if (isRequired) return "(required)";
  if (isEdited) return "(edited)";
  return undefined;
}

/** Narrows the untyped form value to an OsdkObject by checking for $primaryKey. */
function narrowToOsdkObject(
  value: unknown,
): Osdk.Instance<ObjectTypeDefinition> | null {
  if (value != null && typeof value === "object" && "$primaryKey" in value) {
    return value as Osdk.Instance<ObjectTypeDefinition>;
  }
  return null;
}

function assertUnreachableFieldComponent(value: never): never {
  throw new Error(`Unhandled field component: ${String(value)}`);
}
