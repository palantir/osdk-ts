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

import type { ArraySize } from "./ArraySize";
import type { GroupMember } from "./GroupMember";
import type { ObjectPropertyValue } from "./ObjectPropertyValue";
import type { ObjectQueryResult } from "./ObjectQueryResult";
import type { OneOf } from "./OneOf";
import type { Range } from "./Range";
import type { StringLength } from "./StringLength";
import type { StringRegexMatch } from "./StringRegexMatch";
import type { Unevaluable } from "./Unevaluable";

export interface ParameterEvaluatedConstraint_ArraySize extends ArraySize {
  type: "arraySize";
}

export interface ParameterEvaluatedConstraint_GroupMember extends GroupMember {
  type: "groupMember";
}

export interface ParameterEvaluatedConstraint_ObjectPropertyValue
  extends ObjectPropertyValue
{
  type: "objectPropertyValue";
}

export interface ParameterEvaluatedConstraint_ObjectQueryResult
  extends ObjectQueryResult
{
  type: "objectQueryResult";
}

export interface ParameterEvaluatedConstraint_OneOf extends OneOf {
  type: "oneOf";
}

export interface ParameterEvaluatedConstraint_Range extends Range {
  type: "range";
}

export interface ParameterEvaluatedConstraint_StringLength
  extends StringLength
{
  type: "stringLength";
}

export interface ParameterEvaluatedConstraint_StringRegexMatch
  extends StringRegexMatch
{
  type: "stringRegexMatch";
}

export interface ParameterEvaluatedConstraint_Unevaluable extends Unevaluable {
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
