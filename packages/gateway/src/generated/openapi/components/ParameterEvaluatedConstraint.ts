/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ArraySizeConstraint } from "./ArraySizeConstraint";
import type { GroupMemberConstraint } from "./GroupMemberConstraint";
import type { ObjectPropertyValueConstraint } from "./ObjectPropertyValueConstraint";
import type { ObjectQueryResultConstraint } from "./ObjectQueryResultConstraint";
import type { OneOfConstraint } from "./OneOfConstraint";
import type { RangeConstraint } from "./RangeConstraint";
import type { StringLengthConstraint } from "./StringLengthConstraint";
import type { StringRegexMatchConstraint } from "./StringRegexMatchConstraint";
import type { UnevaluableConstraint } from "./UnevaluableConstraint";

export interface ParameterEvaluatedConstraint_ArraySize
  extends ArraySizeConstraint
{
  type: "arraySize";
}

export interface ParameterEvaluatedConstraint_GroupMember
  extends GroupMemberConstraint
{
  type: "groupMember";
}

export interface ParameterEvaluatedConstraint_ObjectPropertyValue
  extends ObjectPropertyValueConstraint
{
  type: "objectPropertyValue";
}

export interface ParameterEvaluatedConstraint_ObjectQueryResult
  extends ObjectQueryResultConstraint
{
  type: "objectQueryResult";
}

export interface ParameterEvaluatedConstraint_OneOf extends OneOfConstraint {
  type: "oneOf";
}

export interface ParameterEvaluatedConstraint_Range extends RangeConstraint {
  type: "range";
}

export interface ParameterEvaluatedConstraint_StringLength
  extends StringLengthConstraint
{
  type: "stringLength";
}

export interface ParameterEvaluatedConstraint_StringRegexMatch
  extends StringRegexMatchConstraint
{
  type: "stringRegexMatch";
}

export interface ParameterEvaluatedConstraint_Unevaluable
  extends UnevaluableConstraint
{
  type: "unevaluable";
}

export type ParameterEvaluatedConstraint =
  | ParameterEvaluatedConstraint_ArraySize
  | ParameterEvaluatedConstraint_GroupMember
  | ParameterEvaluatedConstraint_ObjectPropertyValue
  | ParameterEvaluatedConstraint_ObjectQueryResult
  | ParameterEvaluatedConstraint_OneOf
  | ParameterEvaluatedConstraint_Range
  | ParameterEvaluatedConstraint_StringLength
  | ParameterEvaluatedConstraint_StringRegexMatch
  | ParameterEvaluatedConstraint_Unevaluable;
