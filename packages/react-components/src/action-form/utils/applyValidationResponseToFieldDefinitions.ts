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

import type { ActionValidationResponse } from "@osdk/api";
import type {
  FieldComponent,
  Option,
  RendererFieldDefinition,
} from "../FormFieldApi.js";

type ParameterValidationResult = ActionValidationResponse["parameters"][string];
type EvaluatedConstraint =
  ParameterValidationResult["evaluatedConstraints"][number];
type OneOfConstraint = Extract<EvaluatedConstraint, { type: "oneOf" }>;
type RangeConstraint = Extract<EvaluatedConstraint, { type: "range" }>;
type StringLengthConstraint = Extract<
  EvaluatedConstraint,
  { type: "stringLength" }
>;
type StringRegexMatchConstraint = Extract<
  EvaluatedConstraint,
  { type: "stringRegexMatch" }
>;
type FieldValidation = NonNullable<RendererFieldDefinition["validate"]>;

interface ApplyValidationResponseOptions {
  allowFieldComponentConversion: boolean;
}

export function applyValidationResponseToFieldDefinitions(
  fieldDefinitions: ReadonlyArray<RendererFieldDefinition>,
  validationResponse: ActionValidationResponse | undefined,
  options: ApplyValidationResponseOptions,
): ReadonlyArray<RendererFieldDefinition> {
  if (validationResponse == null) {
    return fieldDefinitions;
  }

  return fieldDefinitions.map((fieldDefinition) =>
    applyParameterValidation(
      fieldDefinition,
      validationResponse.parameters[fieldDefinition.fieldKey],
      options,
    )
  );
}

function applyParameterValidation(
  fieldDefinition: RendererFieldDefinition,
  parameterValidation: ParameterValidationResult | undefined,
  options: ApplyValidationResponseOptions,
): RendererFieldDefinition {
  if (parameterValidation == null) {
    return fieldDefinition;
  }

  let updatedFieldDefinition: RendererFieldDefinition = {
    ...fieldDefinition,
    isRequired: parameterValidation.required,
  };

  for (const constraint of parameterValidation.evaluatedConstraints) {
    switch (constraint.type) {
      case "oneOf":
        updatedFieldDefinition = applyOneOfConstraint(
          updatedFieldDefinition,
          constraint,
          options,
        );
        break;
      case "range":
        updatedFieldDefinition = applyRangeConstraint(
          updatedFieldDefinition,
          constraint,
        );
        break;
      case "stringLength":
        updatedFieldDefinition = applyStringLengthConstraint(
          updatedFieldDefinition,
          constraint,
        );
        break;
      case "stringRegexMatch":
        updatedFieldDefinition = appendValidation(
          updatedFieldDefinition,
          buildRegexValidation(constraint),
        );
        break;
      default:
        break;
    }
  }

  return updatedFieldDefinition;
}

function applyOneOfConstraint(
  fieldDefinition: RendererFieldDefinition,
  constraint: OneOfConstraint,
  options: ApplyValidationResponseOptions,
): RendererFieldDefinition {
  if (fieldDefinition.fieldComponent === "DROPDOWN") {
    return {
      ...fieldDefinition,
      fieldComponentProps: {
        ...fieldDefinition.fieldComponentProps,
        ...buildDropdownProps(constraint),
      },
    };
  }

  if (fieldDefinition.fieldComponent === "RADIO_BUTTONS") {
    return {
      ...fieldDefinition,
      fieldComponentProps: {
        ...fieldDefinition.fieldComponentProps,
        options: buildRadioOptions(constraint),
      },
    };
  }

  if (!options.allowFieldComponentConversion) {
    return appendValidation(
      fieldDefinition,
      buildOneOfValidation(constraint),
    );
  }

  if (!canConvertToDropdown(fieldDefinition.fieldComponent)) {
    return appendValidation(
      fieldDefinition,
      buildOneOfValidation(constraint),
    );
  }

  return {
    ...fieldDefinition,
    fieldComponent: "DROPDOWN",
    fieldComponentProps: buildDropdownProps(constraint),
  };
}

function applyRangeConstraint(
  fieldDefinition: RendererFieldDefinition,
  constraint: RangeConstraint,
): RendererFieldDefinition {
  if (fieldDefinition.fieldComponent === "NUMBER_INPUT") {
    return appendValidation({
      ...fieldDefinition,
      fieldComponentProps: {
        ...fieldDefinition.fieldComponentProps,
        ...getInclusiveNumberRangeProps(constraint),
      },
    }, buildRangeValidation(constraint));
  }

  if (fieldDefinition.fieldComponent === "DATETIME_PICKER") {
    return appendValidation({
      ...fieldDefinition,
      fieldComponentProps: {
        ...fieldDefinition.fieldComponentProps,
        ...getInclusiveDateRangeProps(constraint),
      },
    }, buildRangeValidation(constraint));
  }

  return appendValidation(fieldDefinition, buildRangeValidation(constraint));
}

function applyStringLengthConstraint(
  fieldDefinition: RendererFieldDefinition,
  constraint: StringLengthConstraint,
): RendererFieldDefinition {
  if (
    fieldDefinition.fieldComponent !== "TEXT_INPUT"
    && fieldDefinition.fieldComponent !== "TEXT_AREA"
  ) {
    return appendValidation(
      fieldDefinition,
      buildStringLengthValidation(constraint),
    );
  }

  return appendValidation({
    ...fieldDefinition,
    fieldComponentProps: {
      ...fieldDefinition.fieldComponentProps,
      ...getInclusiveStringLengthProps(constraint),
    },
  }, buildStringLengthValidation(constraint));
}

function appendValidation(
  fieldDefinition: RendererFieldDefinition,
  validation: FieldValidation,
): RendererFieldDefinition {
  const previousValidation = fieldDefinition.validate;
  return {
    ...fieldDefinition,
    validate: async (value: unknown) => {
      const previousResult = await previousValidation?.(value);
      if (previousResult != null) {
        return previousResult;
      }
      return validation(value);
    },
  };
}

function canConvertToDropdown(fieldComponent: FieldComponent): boolean {
  switch (fieldComponent) {
    case "TEXT_INPUT":
    case "TEXT_AREA":
    case "NUMBER_INPUT":
    case "DATETIME_PICKER":
      return true;
    case "CUSTOM":
    case "DATE_RANGE_INPUT":
    case "DROPDOWN":
    case "FILE_PICKER":
    case "OBJECT_SELECT":
    case "OBJECT_SET":
    case "RADIO_BUTTONS":
      return false;
  }
}

function buildDropdownProps(
  constraint: OneOfConstraint,
): Extract<
  RendererFieldDefinition,
  { fieldComponent: "DROPDOWN" }
>["fieldComponentProps"] {
  const items = constraint.options.map((option) => option.value);
  const labelByItem = new Map<unknown, string>();
  const keyByItem = new Map<unknown, string>();

  constraint.options.forEach((option, index) => {
    const label = getOptionLabel(option);
    labelByItem.set(option.value, label);
    keyByItem.set(option.value, `${String(index)}:${label}`);
  });

  return {
    items,
    itemToStringLabel: (item: unknown) => labelByItem.get(item) ?? String(item),
    itemToKey: (item: unknown) => keyByItem.get(item) ?? String(item),
  };
}

function buildRadioOptions(
  constraint: OneOfConstraint,
): Array<Option<unknown>> {
  return constraint.options.map((option) => ({
    label: getOptionLabel(option),
    value: option.value,
  }));
}

function getOptionLabel(option: OneOfConstraint["options"][number]): string {
  return option.displayName ?? String(option.value);
}

function buildOneOfValidation(constraint: OneOfConstraint): FieldValidation {
  return async (value: unknown) => {
    if (value == null || constraint.otherValuesAllowed) {
      return undefined;
    }
    return constraint.options.some((option) => Object.is(option.value, value))
      ? undefined
      : "Select one of the allowed values";
  };
}

function buildRangeValidation(constraint: RangeConstraint): FieldValidation {
  return async (value: unknown) => {
    const comparableValue = getComparableValue(value);
    if (comparableValue == null) {
      return undefined;
    }

    const lowerExclusive = getComparableValue(constraint.gt);
    if (lowerExclusive != null && comparableValue <= lowerExclusive) {
      return `Must be greater than ${String(constraint.gt)}`;
    }

    const lowerInclusive = getComparableValue(constraint.gte);
    if (lowerInclusive != null && comparableValue < lowerInclusive) {
      return `Must be at least ${String(constraint.gte)}`;
    }

    const upperExclusive = getComparableValue(constraint.lt);
    if (upperExclusive != null && comparableValue >= upperExclusive) {
      return `Must be less than ${String(constraint.lt)}`;
    }

    const upperInclusive = getComparableValue(constraint.lte);
    if (upperInclusive != null && comparableValue > upperInclusive) {
      return `Must be at most ${String(constraint.lte)}`;
    }

    return undefined;
  };
}

function buildStringLengthValidation(
  constraint: StringLengthConstraint,
): FieldValidation {
  return async (value: unknown) => {
    if (value == null) {
      return undefined;
    }
    const length = String(value).length;

    const lowerExclusive = getNumber(constraint.gt);
    if (lowerExclusive != null && length <= lowerExclusive) {
      return `Must be more than ${String(constraint.gt)} characters`;
    }

    const lowerInclusive = getNumber(constraint.gte);
    if (lowerInclusive != null && length < lowerInclusive) {
      return `Must be at least ${String(constraint.gte)} characters`;
    }

    const upperExclusive = getNumber(constraint.lt);
    if (upperExclusive != null && length >= upperExclusive) {
      return `Must be fewer than ${String(constraint.lt)} characters`;
    }

    const upperInclusive = getNumber(constraint.lte);
    if (upperInclusive != null && length > upperInclusive) {
      return `Must be at most ${String(constraint.lte)} characters`;
    }

    return undefined;
  };
}

function buildRegexValidation(
  constraint: StringRegexMatchConstraint,
): FieldValidation {
  return async (value: unknown) => {
    if (value == null || value === "") {
      return undefined;
    }
    return new RegExp(constraint.regex).test(String(value))
      ? undefined
      : constraint.configuredFailureMessage
        ?? "Value does not match the required format";
  };
}

function getInclusiveNumberRangeProps(
  constraint: RangeConstraint,
): Partial<
  Extract<
    RendererFieldDefinition,
    { fieldComponent: "NUMBER_INPUT" }
  >["fieldComponentProps"]
> {
  const min = getNumber(constraint.gte);
  const max = getNumber(constraint.lte);
  return {
    ...(min != null ? { min } : {}),
    ...(max != null ? { max } : {}),
  };
}

function getInclusiveDateRangeProps(
  constraint: RangeConstraint,
): Partial<
  Extract<
    RendererFieldDefinition,
    { fieldComponent: "DATETIME_PICKER" }
  >["fieldComponentProps"]
> {
  const min = getDate(constraint.gte);
  const max = getDate(constraint.lte);
  return {
    ...(min != null ? { min } : {}),
    ...(max != null ? { max } : {}),
  };
}

function getInclusiveStringLengthProps(
  constraint: StringLengthConstraint,
): Partial<
  Extract<
    RendererFieldDefinition,
    { fieldComponent: "TEXT_INPUT" | "TEXT_AREA" }
  >["fieldComponentProps"]
> {
  const minLength = getNumber(constraint.gte);
  const maxLength = getNumber(constraint.lte);
  return {
    ...(minLength != null ? { minLength } : {}),
    ...(maxLength != null ? { maxLength } : {}),
  };
}

function getComparableValue(value: unknown): number | undefined {
  if (typeof value === "number") {
    return value;
  }
  const date = getDate(value);
  return date?.getTime();
}

function getNumber(value: unknown): number | undefined {
  return typeof value === "number" ? value : undefined;
}

function getDate(value: unknown): Date | undefined {
  if (value instanceof Date) {
    return value;
  }
  if (typeof value !== "string") {
    return undefined;
  }
  const time = Date.parse(value);
  return Number.isNaN(time) ? undefined : new Date(time);
}
