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

import React, { memo, useCallback, useMemo } from "react";
import { FormField } from "../FormField.js";
import type {
  DateRange,
  FieldComponent,
  RendererFieldDefinition,
} from "../FormFieldApi.js";
import {
  extractDate,
  extractDateRange,
  extractFile,
  extractNumber,
  extractString,
} from "../utils/fieldValueExtractors.js";
import { CustomField } from "./CustomField.js";
import { DateRangeInputField } from "./DateRangeInputField.js";
import { DatetimePickerField } from "./DatetimePickerField.js";
import { DropdownField } from "./DropdownField.js";
import { FilePickerField } from "./FilePickerField.js";
import { NumberInputField } from "./NumberInputField.js";
import { ObjectSetField } from "./ObjectSetField.js";
import { RadioButtonsField } from "./RadioButtonsField.js";
import { TextAreaField } from "./TextAreaField.js";
import { TextInputField } from "./TextInputField.js";

export interface FormFieldRendererProps {
  fieldDefinition: RendererFieldDefinition;
  value: unknown;
  onFieldValueChange: (value: unknown) => void;
  onBlur: (e: React.FocusEvent<HTMLDivElement>) => void;
  error: string | undefined;
}

export const FormFieldRenderer: React.FC<FormFieldRendererProps> = memo(
  function FormFieldRendererFn({
    fieldDefinition,
    value,
    onFieldValueChange,
    onBlur,
    error,
  }: FormFieldRendererProps): React.ReactElement {
    const { label, isRequired, helperText, helperTextPlacement } =
      fieldDefinition;
    const props = useMemo(
      () => ({
        value,
        onChange: onFieldValueChange,
        error,
      }),
      [value, onFieldValueChange, error],
    );
    return (
      <FormField
        label={label}
        isRequired={isRequired}
        fieldKey={fieldDefinition.fieldKey}
        helperText={helperTextPlacement !== "tooltip" ? helperText : undefined}
        error={error}
        onBlur={onBlur}
      >
        {renderFieldComponent(fieldDefinition, props)}
      </FormField>
    );
  },
);

function renderFieldComponent(
  fieldDefinition: RendererFieldDefinition,
  props: FieldRenderProps,
): React.ReactElement {
  switch (fieldDefinition.fieldComponent) {
    case "DATE_RANGE_INPUT":
      return (
        <DateRangeInputWrapper fieldDefinition={fieldDefinition} {...props} />
      );
    case "TEXT_INPUT":
      return <TextInputWrapper fieldDefinition={fieldDefinition} {...props} />;
    case "TEXT_AREA":
      return <TextAreaWrapper fieldDefinition={fieldDefinition} {...props} />;
    case "DATETIME_PICKER":
      return (
        <DatetimePickerWrapper fieldDefinition={fieldDefinition} {...props} />
      );
    case "NUMBER_INPUT":
      return (
        <NumberInputWrapper
          fieldDefinition={fieldDefinition}
          {...props}
        />
      );
    case "FILE_PICKER":
      return <FilePickerWrapper fieldDefinition={fieldDefinition} {...props} />;
    case "DROPDOWN":
      return <DropdownWrapper fieldDefinition={fieldDefinition} {...props} />;
    case "RADIO_BUTTONS":
      return (
        <RadioButtonsWrapper fieldDefinition={fieldDefinition} {...props} />
      );
    case "CUSTOM":
      return (
        <CustomFieldWrapper
          fieldDefinition={fieldDefinition}
          {...props}
        />
      );
    case "OBJECT_SET":
      return <ObjectSetWrapper fieldDefinition={fieldDefinition} {...props} />;
    default:
      return assertUnreachableFieldComponent(fieldDefinition);
  }
}

/**
 * Narrows the RendererFieldDefinition union to the member for a specific
 * FieldComponent discriminant.
 */
type NarrowedDef<FC extends FieldComponent> = Extract<
  RendererFieldDefinition,
  { fieldComponent: FC }
>;

/** Shared props passed from FieldBridge through to each wrapper. */
interface FieldRenderProps {
  value: unknown;
  onChange: (value: unknown) => void;
  error: string | undefined;
}

interface FieldWrapperProps<FC extends FieldComponent>
  extends FieldRenderProps
{
  fieldDefinition: NarrowedDef<FC>;
}

const DateRangeInputWrapper = memo(function DateRangeInputWrapperFn({
  fieldDefinition,
  value,
  onChange,
}: FieldWrapperProps<"DATE_RANGE_INPUT">) {
  const coercedValue = useMemo(() => extractDateRange(value), [value]);

  const handleChange = useCallback(
    (range: DateRange | null) => {
      onChange(range);
    },
    [onChange],
  );

  return (
    <DateRangeInputField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={handleChange}
      placeholderStart={fieldDefinition.placeholder}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const TextInputWrapper = memo(function TextInputWrapperFn({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"TEXT_INPUT">) {
  const coercedValue = useMemo(() => extractString(value), [value]);

  const handleChange = useCallback(
    (text: string | null) => {
      onChange(text);
    },
    [onChange],
  );

  return (
    <TextInputField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={handleChange}
      placeholder={fieldDefinition.placeholder}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const TextAreaWrapper = memo(function TextAreaWrapperFn({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"TEXT_AREA">) {
  const coercedValue = useMemo(() => extractString(value), [value]);

  const handleChange = useCallback(
    (text: string | null) => {
      onChange(text);
    },
    [onChange],
  );

  return (
    <TextAreaField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={handleChange}
      placeholder={fieldDefinition.placeholder}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const DatetimePickerWrapper = memo(function DatetimePickerWrapperFn({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"DATETIME_PICKER">) {
  const coercedValue = useMemo(() => extractDate(value) ?? null, [value]);

  const handleChange = useCallback(
    (date: Date | null) => {
      onChange(date);
    },
    [onChange],
  );

  return (
    <DatetimePickerField
      id={fieldDefinition.fieldKey}
      placeholder={fieldDefinition.placeholder}
      value={coercedValue}
      onChange={handleChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const NumberInputWrapper = memo(function NumberInputWrapperFn({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"NUMBER_INPUT">) {
  const coercedValue = useMemo(() => extractNumber(value) ?? null, [value]);

  const handleChange = useCallback(
    (num: number | null) => {
      onChange(num);
    },
    [onChange],
  );

  return (
    <NumberInputField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={handleChange}
      placeholder={fieldDefinition.placeholder}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const FilePickerWrapper = memo(function FilePickerWrapperFn({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"FILE_PICKER">) {
  const coercedValue = useMemo(() => extractFile(value), [value]);

  const handleChange = useCallback(
    (file: File | File[] | null) => {
      onChange(file);
    },
    [onChange],
  );

  return (
    <FilePickerField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={handleChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

// Passthrough wrappers: value is unknown, onChange accepts unknown which
// is assignable to any concrete field's onChange type. No coercion needed
// — wrappers exist for consistency so every case dispatches uniformly.

const DropdownWrapper = memo(function DropdownWrapperFn({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"DROPDOWN">) {
  return (
    <DropdownField
      id={fieldDefinition.fieldKey}
      value={value}
      onChange={onChange}
      placeholder={fieldDefinition.placeholder}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const RadioButtonsWrapper = memo(function RadioButtonsWrapperFn({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"RADIO_BUTTONS">) {
  return (
    <RadioButtonsField
      id={fieldDefinition.fieldKey}
      value={value}
      onChange={onChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const CustomFieldWrapper = memo(function CustomFieldWrapperFn({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"CUSTOM">) {
  return (
    <CustomField
      id={fieldDefinition.fieldKey}
      value={value}
      onChange={onChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const ObjectSetWrapper = memo(function ObjectSetWrapperFn({
  fieldDefinition,
}: FieldWrapperProps<"OBJECT_SET">) {
  return (
    <ObjectSetField
      id={fieldDefinition.fieldKey}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

function assertUnreachableFieldComponent(value: never): never {
  throw new Error(`Unhandled field component: ${String(value)}`);
}
