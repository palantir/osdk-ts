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

import type { AttachmentListType } from "./AttachmentListType.mjs";
import type { AttachmentType } from "./AttachmentType.mjs";
import type { BooleanListType } from "./BooleanListType.mjs";
import type { BooleanType } from "./BooleanType.mjs";
import type { DateListType } from "./DateListType.mjs";
import type { DateType } from "./DateType.mjs";
import type { DoubleListType } from "./DoubleListType.mjs";
import type { DoubleType } from "./DoubleType.mjs";
import type { IntegerListType } from "./IntegerListType.mjs";
import type { IntegerType } from "./IntegerType.mjs";
import type { LongListType } from "./LongListType.mjs";
import type { LongType } from "./LongType.mjs";
import type { MarkingListType } from "./MarkingListType.mjs";
import type { MarkingType } from "./MarkingType.mjs";
import type { ObjectReferenceListType } from "./ObjectReferenceListType.mjs";
import type { ObjectReferenceType } from "./ObjectReferenceType.mjs";
import type { ObjectSetRidType } from "./ObjectSetRidType.mjs";
import type { StringListType } from "./StringListType.mjs";
import type { StringType } from "./StringType.mjs";
import type { TimestampListType } from "./TimestampListType.mjs";
import type { TimestampType } from "./TimestampType.mjs";
export interface BaseParameterType_boolean {
  type: "boolean";
  boolean: BooleanType;
}

export interface BaseParameterType_booleanList {
  type: "booleanList";
  booleanList: BooleanListType;
}

export interface BaseParameterType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface BaseParameterType_integerList {
  type: "integerList";
  integerList: IntegerListType;
}

export interface BaseParameterType_long {
  type: "long";
  long: LongType;
}

export interface BaseParameterType_longList {
  type: "longList";
  longList: LongListType;
}

export interface BaseParameterType_double {
  type: "double";
  double: DoubleType;
}

export interface BaseParameterType_doubleList {
  type: "doubleList";
  doubleList: DoubleListType;
}

export interface BaseParameterType_string {
  type: "string";
  string: StringType;
}

export interface BaseParameterType_stringList {
  type: "stringList";
  stringList: StringListType;
}

export interface BaseParameterType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface BaseParameterType_timestampList {
  type: "timestampList";
  timestampList: TimestampListType;
}

export interface BaseParameterType_date {
  type: "date";
  date: DateType;
}

export interface BaseParameterType_dateList {
  type: "dateList";
  dateList: DateListType;
}

export interface BaseParameterType_objectReference {
  type: "objectReference";
  objectReference: ObjectReferenceType;
}

export interface BaseParameterType_objectReferenceList {
  type: "objectReferenceList";
  objectReferenceList: ObjectReferenceListType;
}

export interface BaseParameterType_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ObjectSetRidType;
}

export interface BaseParameterType_attachment {
  type: "attachment";
  attachment: AttachmentType;
}

export interface BaseParameterType_attachmentList {
  type: "attachmentList";
  attachmentList: AttachmentListType;
}

export interface BaseParameterType_marking {
  type: "marking";
  marking: MarkingType;
}

export interface BaseParameterType_markingList {
  type: "markingList";
  markingList: MarkingListType;
}

export type BaseParameterType =
  | BaseParameterType_boolean
  | BaseParameterType_booleanList
  | BaseParameterType_integer
  | BaseParameterType_integerList
  | BaseParameterType_long
  | BaseParameterType_longList
  | BaseParameterType_double
  | BaseParameterType_doubleList
  | BaseParameterType_string
  | BaseParameterType_stringList
  | BaseParameterType_timestamp
  | BaseParameterType_timestampList
  | BaseParameterType_date
  | BaseParameterType_dateList
  | BaseParameterType_objectReference
  | BaseParameterType_objectReferenceList
  | BaseParameterType_objectSetRid
  | BaseParameterType_attachment
  | BaseParameterType_attachmentList
  | BaseParameterType_marking
  | BaseParameterType_markingList;
