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

import type { ActionParameterArrayType } from "./ActionParameterArrayType";
import type { AttachmentType } from "./AttachmentType";
import type { BooleanType } from "./BooleanType";
import type { DateType } from "./DateType";
import type { DoubleType } from "./DoubleType";
import type { IntegerType } from "./IntegerType";
import type { LongType } from "./LongType";
import type { MarkingType } from "./MarkingType";
import type { OntologyObjectSetType } from "./OntologyObjectSetType";
import type { OntologyObjectType } from "./OntologyObjectType";
import type { StringType } from "./StringType";
import type { TimestampType } from "./TimestampType";

export interface ActionParameterType_Array extends ActionParameterArrayType {
  type: "array";
}

export interface ActionParameterType_Attachment extends AttachmentType {
  type: "attachment";
}

export interface ActionParameterType_Boolean extends BooleanType {
  type: "boolean";
}

export interface ActionParameterType_Date extends DateType {
  type: "date";
}

export interface ActionParameterType_Double extends DoubleType {
  type: "double";
}

export interface ActionParameterType_Integer extends IntegerType {
  type: "integer";
}

export interface ActionParameterType_Long extends LongType {
  type: "long";
}

export interface ActionParameterType_Marking extends MarkingType {
  type: "marking";
}

export interface ActionParameterType_ObjectSet extends OntologyObjectSetType {
  type: "objectSet";
}

export interface ActionParameterType_Object extends OntologyObjectType {
  type: "object";
}

export interface ActionParameterType_String extends StringType {
  type: "string";
}

export interface ActionParameterType_Timestamp extends TimestampType {
  type: "timestamp";
}

export type ActionParameterType =
  | ActionParameterType_Array
  | ActionParameterType_Attachment
  | ActionParameterType_Boolean
  | ActionParameterType_Date
  | ActionParameterType_Double
  | ActionParameterType_Integer
  | ActionParameterType_Long
  | ActionParameterType_Marking
  | ActionParameterType_ObjectSet
  | ActionParameterType_Object
  | ActionParameterType_String
  | ActionParameterType_Timestamp;
