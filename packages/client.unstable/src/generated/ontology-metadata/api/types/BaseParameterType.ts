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

import type { AttachmentListType } from "./AttachmentListType.js";
import type { AttachmentType } from "./AttachmentType.js";
import type { BooleanListType } from "./BooleanListType.js";
import type { BooleanType } from "./BooleanType.js";
import type { DateListType } from "./DateListType.js";
import type { DateType } from "./DateType.js";
import type { DoubleListType } from "./DoubleListType.js";
import type { DoubleType } from "./DoubleType.js";
import type { GeohashListType } from "./GeohashListType.js";
import type { GeohashType } from "./GeohashType.js";
import type { GeoshapeListType } from "./GeoshapeListType.js";
import type { GeoshapeType } from "./GeoshapeType.js";
import type { GeotimeSeriesReferenceListType } from "./GeotimeSeriesReferenceListType.js";
import type { GeotimeSeriesReferenceType } from "./GeotimeSeriesReferenceType.js";
import type { IntegerListType } from "./IntegerListType.js";
import type { IntegerType } from "./IntegerType.js";
import type { InterfaceReferenceListType } from "./InterfaceReferenceListType.js";
import type { InterfaceReferenceType } from "./InterfaceReferenceType.js";
import type { LongListType } from "./LongListType.js";
import type { LongType } from "./LongType.js";
import type { MarkingListType } from "./MarkingListType.js";
import type { MarkingType } from "./MarkingType.js";
import type { MediaReferenceListType } from "./MediaReferenceListType.js";
import type { MediaReferenceType } from "./MediaReferenceType.js";
import type { ObjectReferenceListType } from "./ObjectReferenceListType.js";
import type { ObjectReferenceType } from "./ObjectReferenceType.js";
import type { ObjectSetRidType } from "./ObjectSetRidType.js";
import type { ObjectTypeReferenceType } from "./ObjectTypeReferenceType.js";
import type { StringListType } from "./StringListType.js";
import type { StringType } from "./StringType.js";
import type { StructListType } from "./StructListType.js";
import type { StructType } from "./StructType.js";
import type { TimeSeriesReferenceType } from "./TimeSeriesReferenceType.js";
import type { TimestampListType } from "./TimestampListType.js";
import type { TimestampType } from "./TimestampType.js";
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

export interface BaseParameterType_geohash {
  type: "geohash";
  geohash: GeohashType;
}

export interface BaseParameterType_geohashList {
  type: "geohashList";
  geohashList: GeohashListType;
}

export interface BaseParameterType_geoshape {
  type: "geoshape";
  geoshape: GeoshapeType;
}

export interface BaseParameterType_geoshapeList {
  type: "geoshapeList";
  geoshapeList: GeoshapeListType;
}

export interface BaseParameterType_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: TimeSeriesReferenceType;
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

export interface BaseParameterType_interfaceReference {
  type: "interfaceReference";
  interfaceReference: InterfaceReferenceType;
}

export interface BaseParameterType_interfaceReferenceList {
  type: "interfaceReferenceList";
  interfaceReferenceList: InterfaceReferenceListType;
}

export interface BaseParameterType_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ObjectTypeReferenceType;
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

export interface BaseParameterType_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceType;
}

export interface BaseParameterType_mediaReferenceList {
  type: "mediaReferenceList";
  mediaReferenceList: MediaReferenceListType;
}

export interface BaseParameterType_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferenceType;
}

export interface BaseParameterType_geotimeSeriesReferenceList {
  type: "geotimeSeriesReferenceList";
  geotimeSeriesReferenceList: GeotimeSeriesReferenceListType;
}

export interface BaseParameterType_struct {
  type: "struct";
  struct: StructType;
}

export interface BaseParameterType_structList {
  type: "structList";
  structList: StructListType;
}
/**
 * All of the possible types for Parameters.
 */
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
  | BaseParameterType_geohash
  | BaseParameterType_geohashList
  | BaseParameterType_geoshape
  | BaseParameterType_geoshapeList
  | BaseParameterType_timeSeriesReference
  | BaseParameterType_timestamp
  | BaseParameterType_timestampList
  | BaseParameterType_date
  | BaseParameterType_dateList
  | BaseParameterType_objectReference
  | BaseParameterType_objectReferenceList
  | BaseParameterType_objectSetRid
  | BaseParameterType_interfaceReference
  | BaseParameterType_interfaceReferenceList
  | BaseParameterType_objectTypeReference
  | BaseParameterType_attachment
  | BaseParameterType_attachmentList
  | BaseParameterType_marking
  | BaseParameterType_markingList
  | BaseParameterType_mediaReference
  | BaseParameterType_mediaReferenceList
  | BaseParameterType_geotimeSeriesReference
  | BaseParameterType_geotimeSeriesReferenceList
  | BaseParameterType_struct
  | BaseParameterType_structList;
