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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import React, { memo, useMemo } from "react";
import type { FieldPath } from "react-hook-form";
import { typedReactMemo } from "../../shared/typedMemo.js";
import { FormField } from "../FormField.js";
import type {
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
import { ObjectSelectField } from "./ObjectSelectField.js";
import { ObjectSetField } from "./ObjectSetField.js";
import { RadioButtonsField } from "./RadioButtonsField.js";
import { TextAreaField } from "./TextAreaField.js";
import { TextInputField } from "./TextInputField.js";

export interface FormFieldRendererProps<S extends Record<string, unknown>> {
  fieldDefinition: RendererFieldDefinition<S>;
  value: unknown;
  onFieldValueChange: (value: S[FieldPath<S>]) => void;
  onBlur: (e: React.FocusEvent<HTMLDivElement>) => void;
  error: string | undefined;
}

export const FormFieldRenderer: <S extends Record<string, unknown>>(
  props: FormFieldRendererProps<S>,
) => React.ReactElement = typedReactMemo(function FormFieldRendererFn<
  S extends Record<string, unknown>,
>({
  fieldDefinition,
  value,
  onFieldValueChange,
  onBlur,
  error,
}: FormFieldRendererProps<S>): React.ReactElement {
  const { label, isRequired, helperText, helperTextPlacement } =
    fieldDefinition;
  const props = useMemo(
    () => ({
      value,
      // Field components produce concrete types (string, number, V | null)
      // that are S[K] at runtime. Widen here so the heterogeneous wrappers
      // can call onChange without per-type casts.
      onChange: onFieldValueChange as (value: unknown) => void,
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
});

function renderFieldComponent<S extends Record<string, unknown>>(
  fieldDefinition: RendererFieldDefinition<S>,
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
    case "OBJECT_SELECT":
      return (
        <ObjectSelectField
          id={fieldDefinition.fieldKey}
          value={narrowToOsdkObject(value)}
          onChange={onChange}
          placeholder={fieldDefinition.placeholder}
          error={error}
          {...fieldDefinition.fieldComponentProps}
        />
      );
    case "OBJECT_SET":
      return <ObjectSetWrapper fieldDefinition={fieldDefinition} {...props} />;
    default:
      return assertUnreachableFieldComponent(fieldDefinition);
  }
}

// --- Types ---

/**
 * Narrows the RendererFieldDefinition union to the member for a specific
 * FieldComponent discriminant. Default S erases the schema generic for
 * wrappers that don't need it (coercion wrappers).
 */
type NarrowedDef<
  FC extends FieldComponent,
  S extends Record<string, unknown> = Record<string, unknown>,
> = Extract<RendererFieldDefinition<S>, { fieldComponent: FC }>;

/** Shared props passed from FieldBridge through to each wrapper. */
interface FieldRenderProps {
  value: unknown;
  onChange: (value: unknown) => void;
  error: string | undefined;
}

interface FieldWrapperProps<
  FC extends FieldComponent,
  S extends Record<string, unknown> = Record<string, unknown>,
> extends FieldRenderProps {
  fieldDefinition: NarrowedDef<FC, S>;
}

// --- Coercion wrappers ---
// Memoize the coerced value and provide a typed onChange handler.
// These don't need S — their fieldComponentProps doesn't depend on it.

const DateRangeInputWrapper = memo(function DateRangeInputWrapperFn({
  fieldDefinition,
  value,
  onChange,
}: FieldWrapperProps<"DATE_RANGE_INPUT">) {
  const coercedValue = useMemo(() => extractDateRange(value), [value]);

  return (
    <DateRangeInputField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={onChange}
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

  return (
    <TextInputField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={onChange}
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

  return (
    <TextAreaField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={onChange}
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

  return (
    <DatetimePickerField
      id={fieldDefinition.fieldKey}
      placeholder={fieldDefinition.placeholder}
      value={coercedValue}
      onChange={onChange}
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

  return (
    <NumberInputField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={onChange}
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

  return (
    <FilePickerField
      id={fieldDefinition.fieldKey}
      value={coercedValue}
      onChange={onChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

// --- Passthrough wrappers ---
// Generic over S because their fieldComponentProps uses S[K] (e.g. Dropdown
// items, RadioButtons options, Custom renderer).

const DropdownWrapper = typedReactMemo(function DropdownWrapperFn<
  S extends Record<string, unknown>,
>({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"DROPDOWN", S>) {
  return (
    <DropdownField
      id={fieldDefinition.fieldKey}
      // FieldPathValue<S, FieldPath<S>> ≡ S[FieldPath<S>] for flat schemas;
      // TS can't unify RHF's path resolution with direct indexed access.
      value={value as S[FieldPath<S>] | null}
      onChange={onChange}
      placeholder={fieldDefinition.placeholder}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const RadioButtonsWrapper = typedReactMemo(function RadioButtonsWrapperFn<
  S extends Record<string, unknown>,
>({
  fieldDefinition,
  value,
  onChange,
  error,
}: FieldWrapperProps<"RADIO_BUTTONS", S>) {
  return (
    <RadioButtonsField
      id={fieldDefinition.fieldKey}
      value={value as S[FieldPath<S>] | null}
      onChange={onChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

const CustomFieldWrapper = typedReactMemo(function CustomFieldWrapperFn<
  S extends Record<string, unknown>,
>({ fieldDefinition, value, onChange, error }: FieldWrapperProps<"CUSTOM", S>) {
  return (
    <CustomField
      id={fieldDefinition.fieldKey}
      value={value as S[FieldPath<S>] | null}
      onChange={onChange}
      error={error}
      {...fieldDefinition.fieldComponentProps}
    />
  );
});

// ObjectSet has no value/onChange and no S dependency.
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
