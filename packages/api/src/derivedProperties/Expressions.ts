/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { WirePropertyTypes } from "../ontology/WirePropertyTypes.js";
import type { DerivedProperty } from "./DerivedProperty.js";

type WithPropertiesNumerics =
  | "integer"
  | "double"
  | "float"
  | "short"
  | "long";

type WithPropertiesDatetime =
  | "datetime"
  | "timestamp";

export type DefinitionForType<
  Q extends ObjectOrInterfaceDefinition,
  T extends SimplePropertyDef,
> = SimplePropertyDef.ExtractMultiplicity<T> extends "array"
  ? DerivedProperty.Definition<T, Q>
  : SimplePropertyDef.ExtractWirePropertyType<T> extends WithPropertiesNumerics
    ? DerivedProperty.NumericPropertyDefinition<T, Q>
  : SimplePropertyDef.ExtractWirePropertyType<T> extends WithPropertiesDatetime
    ? DerivedProperty.DatetimePropertyDefinition<T, Q>
  : DerivedProperty.Definition<T, Q>;

type NumericExpressionArg<Q extends ObjectOrInterfaceDefinition> =
  | number
  | DerivedProperty.NumericPropertyDefinition<any, Q>;

type ReturnTypeForNumericMethod<
  Q extends ObjectOrInterfaceDefinition,
  LEFT extends WirePropertyTypes,
  RIGHT extends WirePropertyTypes,
> = "double" extends (LEFT | RIGHT) ? DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"double", "non-nullable", "single">,
    Q
  >
  : "float" extends (LEFT | RIGHT) ? DerivedProperty.NumericPropertyDefinition<
      SimplePropertyDef.Make<"double", "non-nullable", "single">,
      Q
    >
  : "long" extends (LEFT | RIGHT) ? DerivedProperty.NumericPropertyDefinition<
      SimplePropertyDef.Make<"long", "non-nullable", "single">,
      Q
    >
  : DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", "non-nullable", "single">,
    Q
  >;

type ReturnTypeForDatetimeMethod<
  Q extends ObjectOrInterfaceDefinition,
  LEFT extends WirePropertyTypes,
  RIGHT extends WirePropertyTypes,
> = "timestamp" extends (LEFT | RIGHT)
  ? DerivedProperty.DatetimePropertyDefinition<
    SimplePropertyDef.Make<"timestamp", "non-nullable", "single">,
    Q
  >
  : DerivedProperty.DatetimePropertyDefinition<
    SimplePropertyDef.Make<"datetime", "non-nullable", "single">,
    Q
  >;

type ExtractWirePropertyTypeFromNumericArg<
  Q extends ObjectOrInterfaceDefinition,
  ARG extends NumericExpressionArg<Q>,
> = ARG extends number ? "double"
  : ARG extends DerivedProperty.NumericPropertyDefinition<infer T, Q>
    ? T extends SimplePropertyDef ? SimplePropertyDef.ExtractWirePropertyType<T>
    : never
  : ARG extends PropertyKeys.Filtered<Q, WithPropertiesNumerics>
    ? NonNullable<CompileTimeMetadata<Q>["properties"][ARG]["type"]>
  : never;

/**
 * Numeric expression methods chainable off a numeric derived property.
 * Each binary method accepts either a numeric literal or another numeric derived
 * property as its right-hand side; unary methods (`abs`, `negate`) take no argument.
 * @example
 * ```ts
 * await client(Employee).withProperties({
 *   profitPerReport: (baseObjectSet) =>
 *     baseObjectSet.pivotTo("reports").aggregate("revenue:sum")
 *       .subtract(baseObjectSet.pivotTo("reports").aggregate("cost:sum"))
 *       .divide(baseObjectSet.pivotTo("reports").aggregate("$count")),
 * }).fetchPage();
 * ```
 */
export type NumericExpressions<
  Q extends ObjectOrInterfaceDefinition,
  LEFT_PROPERTY_TYPE extends SimplePropertyDef,
> = {
  /** Adds a numeric value or another numeric derived property. */
  readonly add: <A extends NumericExpressionArg<Q>>(
    value: A,
  ) => ReturnTypeForNumericMethod<
    Q,
    SimplePropertyDef.ExtractWirePropertyType<LEFT_PROPERTY_TYPE>,
    ExtractWirePropertyTypeFromNumericArg<Q, A>
  >;

  /** Subtracts a numeric value or another numeric derived property. */
  readonly subtract: <A extends NumericExpressionArg<Q>>(
    value: A,
  ) => ReturnTypeForNumericMethod<
    Q,
    SimplePropertyDef.ExtractWirePropertyType<LEFT_PROPERTY_TYPE>,
    ExtractWirePropertyTypeFromNumericArg<Q, A>
  >;

  /** Multiplies by a numeric value or another numeric derived property. */
  readonly multiply: <A extends NumericExpressionArg<Q>>(
    value: A,
  ) => ReturnTypeForNumericMethod<
    Q,
    SimplePropertyDef.ExtractWirePropertyType<LEFT_PROPERTY_TYPE>,
    ExtractWirePropertyTypeFromNumericArg<Q, A>
  >;

  /** Divides by a numeric value or another numeric derived property. */
  readonly divide: <A extends NumericExpressionArg<Q>>(
    value: A,
  ) => ReturnTypeForNumericMethod<
    Q,
    SimplePropertyDef.ExtractWirePropertyType<LEFT_PROPERTY_TYPE>,
    ExtractWirePropertyTypeFromNumericArg<Q, A>
  >;

  /** Returns the absolute value. */
  readonly abs: () => DerivedProperty.NumericPropertyDefinition<
    LEFT_PROPERTY_TYPE,
    Q
  >;

  /** Negates the value (multiplies by -1). */
  readonly negate: () => DerivedProperty.NumericPropertyDefinition<
    LEFT_PROPERTY_TYPE,
    Q
  >;

  /** Takes the larger of this value and another numeric value or derived property. */
  readonly max: <A extends NumericExpressionArg<Q>>(
    value: A,
  ) => ReturnTypeForNumericMethod<
    Q,
    SimplePropertyDef.ExtractWirePropertyType<LEFT_PROPERTY_TYPE>,
    ExtractWirePropertyTypeFromNumericArg<Q, A>
  >;

  /** Takes the smaller of this value and another numeric value or derived property. */
  readonly min: <A extends NumericExpressionArg<Q>>(
    value: A,
  ) => ReturnTypeForNumericMethod<
    Q,
    SimplePropertyDef.ExtractWirePropertyType<LEFT_PROPERTY_TYPE>,
    ExtractWirePropertyTypeFromNumericArg<Q, A>
  >;
};

type DatetimeExpressionArg<Q extends ObjectOrInterfaceDefinition> =
  DerivedProperty.DatetimePropertyDefinition<any, Q>;

type ExtractPropertyTypeFromDatetimeArg<
  Q extends ObjectOrInterfaceDefinition,
  ARG extends DatetimeExpressionArg<Q>,
> = ARG extends DerivedProperty.DatetimePropertyDefinition<infer T, Q>
  ? T extends SimplePropertyDef ? SimplePropertyDef.ExtractWirePropertyType<T>
  : never
  : ARG extends PropertyKeys.Filtered<Q, WithPropertiesDatetime>
    ? NonNullable<CompileTimeMetadata<Q>["properties"][ARG]["type"]>
  : never;

/**
 * Datetime expression methods chainable off a datetime or timestamp derived property.
 * @example
 * ```ts
 * await client(Employee).withProperties({
 *   hireYear: (baseObjectSet) =>
 *     baseObjectSet.selectProperty("hiredAt").extractPart("YEARS"),
 * }).fetchPage();
 * ```
 */
export type DatetimeExpressions<
  Q extends ObjectOrInterfaceDefinition,
  LEFT_PROPERTY_TYPE extends SimplePropertyDef,
> = {
  /** Takes the earlier of this datetime and another datetime derived property. */
  readonly min: <A extends DatetimeExpressionArg<Q>>(
    value: A,
  ) => ReturnTypeForDatetimeMethod<
    Q,
    SimplePropertyDef.ExtractWirePropertyType<LEFT_PROPERTY_TYPE>,
    ExtractPropertyTypeFromDatetimeArg<Q, A>
  >;
  /** Takes the later of this datetime and another datetime derived property. */
  readonly max: (
    value: DatetimeExpressionArg<Q>,
  ) => ReturnTypeForDatetimeMethod<
    Q,
    SimplePropertyDef.ExtractWirePropertyType<LEFT_PROPERTY_TYPE>,
    ExtractPropertyTypeFromDatetimeArg<Q, typeof value>
  >;
  /**
   * Extracts a calendar part from the datetime as a string.
   * @param value - The part to extract: `"DAYS"`, `"MONTHS"`, `"QUARTERS"`, or `"YEARS"`
   * @example
   * ```ts
   * await client(Employee).withProperties({
   *   hireYear: (baseObjectSet) =>
   *     baseObjectSet.selectProperty("hiredAt").extractPart("YEARS"),
   * }).fetchPage();
   * ```
   * @returns a string derived property holding the extracted part
   */
  readonly extractPart: (
    value: DerivedProperty.ValidParts,
  ) => DerivedProperty.Definition<
    SimplePropertyDef.Make<"string", "non-nullable", "single">,
    Q
  >;
};
