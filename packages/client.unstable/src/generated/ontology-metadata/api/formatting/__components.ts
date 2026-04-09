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

import type {
  DataType as _api_DataType,
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyRid as _api_OntologyRid,
  OntologyVersion as _api_OntologyVersion,
  PropertyTypeId as _api_PropertyTypeId,
  RuleSetRid as _api_RuleSetRid,
  ValueReferenceId as _api_ValueReferenceId,
} from "../__components.js";
export type Alignment = "LEFT" | "CENTER" | "RIGHT";

/**
 * Always true.
 */
export interface AlwaysCondition {
}
/**
 * True if all conditions are true.
 */
export interface AndCondition {
  conditions: Array<Condition>;
}
export interface ColorStyle_intent {
  type: "intent";
  intent: Intent;
}

export interface ColorStyle_primaryRgb {
  type: "primaryRgb";
  primaryRgb: RgbColor;
}

export interface ColorStyle_none {
  type: "none";
  none: NoColorStyle;
}
export type ColorStyle =
  | ColorStyle_intent
  | ColorStyle_primaryRgb
  | ColorStyle_none;

export interface Condition_always {
  type: "always";
  always: AlwaysCondition;
}

export interface Condition_and {
  type: "and";
  and: AndCondition;
}

export interface Condition_or {
  type: "or";
  or: OrCondition;
}

export interface Condition_not {
  type: "not";
  not: NotCondition;
}

export interface Condition_isNull {
  type: "isNull";
  isNull: IsNullCondition;
}

export interface Condition_stringComparison {
  type: "stringComparison";
  stringComparison: StringComparisonCondition;
}

export interface Condition_exactBooleanMatch {
  type: "exactBooleanMatch";
  exactBooleanMatch: ExactBooleanMatchCondition;
}

export interface Condition_exactNumericMatch {
  type: "exactNumericMatch";
  exactNumericMatch: ExactNumericMatchCondition;
}

export interface Condition_exactDateMatch {
  type: "exactDateMatch";
  exactDateMatch: ExactDateMatchCondition;
}

export interface Condition_numericRange {
  type: "numericRange";
  numericRange: NumericRangeCondition;
}

export interface Condition_dateRange {
  type: "dateRange";
  dateRange: DateRangeCondition;
}

export interface Condition_timestampRange {
  type: "timestampRange";
  timestampRange: TimestampRangeCondition;
}

export interface Condition_relativeDateRange {
  type: "relativeDateRange";
  relativeDateRange: RelativeDateRangeCondition;
}

export interface Condition_relativeTimestampRange {
  type: "relativeTimestampRange";
  relativeTimestampRange: RelativeTimestampRangeCondition;
}

export interface Condition_math {
  type: "math";
  math: MathCondition;
}
export type Condition =
  | Condition_always
  | Condition_and
  | Condition_or
  | Condition_not
  | Condition_isNull
  | Condition_stringComparison
  | Condition_exactBooleanMatch
  | Condition_exactNumericMatch
  | Condition_exactDateMatch
  | Condition_numericRange
  | Condition_dateRange
  | Condition_timestampRange
  | Condition_relativeDateRange
  | Condition_relativeTimestampRange
  | Condition_math;

export interface DateRangeCondition {
  property: ValueReference;
  since?: ValueReferenceOrStringConstant | null | undefined;
  until?: ValueReferenceOrStringConstant | null | undefined;
}
export interface ExactBooleanMatchCondition {
  property: ValueReference;
  value: boolean;
}
export interface ExactDateMatchCondition {
  property: ValueReference;
  value: string;
}
export interface ExactNumericMatchCondition {
  property: ValueReference;
  value: ValueReferenceOrDoubleConstant;
}
export interface FormatStyle {
  alignment?: Alignment | null | undefined;
  color: ColorStyle;
}
export type Intent = "HIGHLIGHT" | "SUCCESS" | "WARNING" | "DANGER";

/**
 * True if the value of the referenced property is null for the user. This can happen either if the underlying
 * value is null, or the user cannot access the data source that generates the referenced property.
 */
export interface IsNullCondition {
  property: ValueReference;
}
/**
 * Reference to the property this rule is being applied to.
 */
export interface It {
}
/**
 * Request object for the loadAllRuleSets endpoint. Users can optionally specify an OntologyRid
 * and OntologyVersion to load rule sets from.
 */
export interface LoadAllRuleSetsRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  ontologyBranchRid?: _api_OntologyBranchRid | null | undefined;
  ontologyRid?: _api_OntologyRid | null | undefined;
  ontologyVersion?: _api_OntologyVersion | null | undefined;
}
export interface LoadRuleSetsRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  loadRedacted?: boolean | null | undefined;
  ruleSets: Record<_api_RuleSetRid, _api_OntologyVersion | null | undefined>;
  ruleSetsByBranch: Record<
    _api_RuleSetRid,
    _api_OntologyBranchRid | null | undefined
  >;
}
export interface LoadRuleSetsResponse {
  ruleSets: Record<_api_RuleSetRid, RuleSet>;
}
export interface MathBinaryOperation {
  left: MathValue;
  op: MathBinaryOperator;
  right: MathValue;
}
export type MathBinaryOperator = "PLUS" | "MINUS" | "TIMES" | "DIVIDE";
export interface MathComparison {
  left: MathValue;
  op: MathOperator;
  right: MathValue;
}
export interface MathCondition {
  comparison: MathComparison;
}
export type MathOperator =
  | "EQUAL"
  | "NOT_EQUAL"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL";
export interface MathUnaryOperation {
  op: MathUnaryOperator;
  property: MathValue;
}
export type MathUnaryOperator = "MINUS" | "ABS";
export interface MathValue_reference {
  type: "reference";
  reference: ValueReference;
}

export interface MathValue_constant {
  type: "constant";
  constant: number | "NaN" | "Infinity" | "-Infinity";
}

export interface MathValue_binaryOperation {
  type: "binaryOperation";
  binaryOperation: MathBinaryOperation;
}

export interface MathValue_unaryOperation {
  type: "unaryOperation";
  unaryOperation: MathUnaryOperation;
}
export type MathValue =
  | MathValue_reference
  | MathValue_constant
  | MathValue_binaryOperation
  | MathValue_unaryOperation;

/**
 * No color style should be applied. This can be thought of as an empty 'optional<ColorStyle>'.
 */
export interface NoColorStyle {
}
/**
 * Flip the result of the condition.
 */
export interface NotCondition {
  condition: Condition;
}
export interface NumericRangeCondition {
  from?: ValueReferenceOrDoubleConstant | null | undefined;
  property: ValueReference;
  until?: ValueReferenceOrDoubleConstant | null | undefined;
}
/**
 * True if at least one condition is true.
 */
export interface OrCondition {
  conditions: Array<Condition>;
}
export interface RelativeDateRangeCondition {
  property: ValueReference;
  sinceRelative?: RelativePointInTime | null | undefined;
  timeZoneId: TimeZoneId;
  untilRelative?: RelativePointInTime | null | undefined;
}
export interface RelativePointInTime {
  timeUnit: RelativeTimeUnit;
  value: number;
}
export interface RelativeTimestampRangeCondition {
  property: ValueReference;
  sinceRelativeMillis?: number | null | undefined;
  untilRelativeMillis?: number | null | undefined;
}
export type RelativeTimeUnit =
  | "SECOND"
  | "MINUTE"
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "MONTH"
  | "YEAR";
export interface RgbColor {
  blue: number;
  green: number;
  red: number;
}
/**
 * A formatting rule. Apply the format if the condition evaluates to true.
 */
export interface Rule {
  condition: Condition;
  name?: string | null | undefined;
  style: FormatStyle;
}
/**
 * A rule chain will evaluate rules one-by-one first-to-last. The first matching rule (for which the condition
 * is true) will apply the format, stopping evaluation of this chain. Use this to implement conditionals.
 */
export interface RuleChain {
  rules: Array<Rule>;
}
/**
 * A set of rules that can be applied to a property. This should correspond to a semantic set of formatting
 * rules.
 *
 * For example:
 * - Number (accounting): renders negative numbers with "()", and sets the right amount of parentheses.
 * - Number (compact): renders millions as `$nM`
 * - ...
 *
 * These rules can be re-used in different contexts by re-binding the value references as required.
 */
export interface RuleSet {
  chains: Array<RuleChain>;
  description?: string | null | undefined;
  itType?: _api_DataType | null | undefined;
  name: string;
  namedTypes: Record<_api_ValueReferenceId, RuleSetNamedType>;
  rid: _api_RuleSetRid;
}
export interface RuleSetBindingModification {
  bindings: Record<_api_ValueReferenceId, ValueReferenceSourceModification>;
  ruleSetIdentifier: RuleSetIdentifier;
}
export interface RuleSetCreate {
  chains: Array<RuleChain>;
  description?: string | null | undefined;
  id: RuleSetIdInRequest;
  itType?: _api_DataType | null | undefined;
  name: string;
  namedTypes: Record<_api_ValueReferenceId, RuleSetNamedType>;
}
export interface RuleSetIdentifier_existingRuleSetRid {
  type: "existingRuleSetRid";
  existingRuleSetRid: _api_RuleSetRid;
}

export interface RuleSetIdentifier_ruleSetIdInRequest {
  type: "ruleSetIdInRequest";
  ruleSetIdInRequest: RuleSetIdInRequest;
}
export type RuleSetIdentifier =
  | RuleSetIdentifier_existingRuleSetRid
  | RuleSetIdentifier_ruleSetIdInRequest;

/**
 * Reference to a RuleSet. Used when referencing a RuleSet in the same request it is created in.
 */
export type RuleSetIdInRequest = string;
export interface RuleSetNamedType {
  id: _api_ValueReferenceId;
  name: string;
  type: _api_DataType;
}
/**
 * Compare a string to a set of static values.
 */
export interface StringComparisonCondition {
  caseSensitive: boolean;
  operator: StringComparisonOperator;
  property: ValueReference;
}
export interface StringComparisonOperator_contains {
  type: "contains";
  contains: StringConditionValue;
}

export interface StringComparisonOperator_startsWith {
  type: "startsWith";
  startsWith: StringConditionValue;
}

export interface StringComparisonOperator_endsWith {
  type: "endsWith";
  endsWith: StringConditionValue;
}

export interface StringComparisonOperator_exactly {
  type: "exactly";
  exactly: StringConditionValue;
}
export type StringComparisonOperator =
  | StringComparisonOperator_contains
  | StringComparisonOperator_startsWith
  | StringComparisonOperator_endsWith
  | StringComparisonOperator_exactly;

/**
 * Value used for string operators. If there is more than one value in the `values`
 * property, the operator will OR all the values.
 */
export interface StringConditionValue {
  values: Array<ValueReferenceOrStringConstant>;
}
export interface TimestampRangeCondition {
  from?: ValueReferenceOrDatetimeConstant | null | undefined;
  property: ValueReference;
  until?: ValueReferenceOrDatetimeConstant | null | undefined;
}
/**
 * An identifier of a time zone, e.g. "Europe/London" as defined by the Time Zone Database.
 */
export type TimeZoneId = string;
export interface ValueReference_it {
  type: "it";
  it: It;
}

export interface ValueReference_valueReferenceId {
  type: "valueReferenceId";
  valueReferenceId: _api_ValueReferenceId;
}
export type ValueReference =
  | ValueReference_it
  | ValueReference_valueReferenceId;

export interface ValueReferenceOrDatetimeConstant_constant {
  type: "constant";
  constant: string;
}

export interface ValueReferenceOrDatetimeConstant_reference {
  type: "reference";
  reference: ValueReference;
}
export type ValueReferenceOrDatetimeConstant =
  | ValueReferenceOrDatetimeConstant_constant
  | ValueReferenceOrDatetimeConstant_reference;

export interface ValueReferenceOrDoubleConstant_constant {
  type: "constant";
  constant: number | "NaN" | "Infinity" | "-Infinity";
}

export interface ValueReferenceOrDoubleConstant_reference {
  type: "reference";
  reference: ValueReference;
}
export type ValueReferenceOrDoubleConstant =
  | ValueReferenceOrDoubleConstant_constant
  | ValueReferenceOrDoubleConstant_reference;

export interface ValueReferenceOrStringConstant_constant {
  type: "constant";
  constant: string;
}

export interface ValueReferenceOrStringConstant_reference {
  type: "reference";
  reference: ValueReference;
}
export type ValueReferenceOrStringConstant =
  | ValueReferenceOrStringConstant_constant
  | ValueReferenceOrStringConstant_reference;

export interface ValueReferenceSourceModification_propertyTypeId {
  type: "propertyTypeId";
  propertyTypeId: _api_PropertyTypeId;
}
export type ValueReferenceSourceModification =
  ValueReferenceSourceModification_propertyTypeId;
