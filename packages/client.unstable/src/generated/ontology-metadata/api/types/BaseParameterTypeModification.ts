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
import type { InterfaceReferenceListTypeModification } from "./InterfaceReferenceListTypeModification.js";
import type { InterfaceReferenceTypeModification } from "./InterfaceReferenceTypeModification.js";
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
export interface BaseParameterTypeModification_boolean {
  type: "boolean";
  boolean: BooleanType;
}

export interface BaseParameterTypeModification_booleanList {
  type: "booleanList";
  booleanList: BooleanListType;
}

export interface BaseParameterTypeModification_integer {
  type: "integer";
  integer: IntegerType;
}

export interface BaseParameterTypeModification_integerList {
  type: "integerList";
  integerList: IntegerListType;
}

export interface BaseParameterTypeModification_long {
  type: "long";
  long: LongType;
}

export interface BaseParameterTypeModification_longList {
  type: "longList";
  longList: LongListType;
}

export interface BaseParameterTypeModification_double {
  type: "double";
  double: DoubleType;
}

export interface BaseParameterTypeModification_doubleList {
  type: "doubleList";
  doubleList: DoubleListType;
}

export interface BaseParameterTypeModification_string {
  type: "string";
  string: StringType;
}

export interface BaseParameterTypeModification_stringList {
  type: "stringList";
  stringList: StringListType;
}

export interface BaseParameterTypeModification_geohash {
  type: "geohash";
  geohash: GeohashType;
}

export interface BaseParameterTypeModification_geohashList {
  type: "geohashList";
  geohashList: GeohashListType;
}

export interface BaseParameterTypeModification_geoshape {
  type: "geoshape";
  geoshape: GeoshapeType;
}

export interface BaseParameterTypeModification_geoshapeList {
  type: "geoshapeList";
  geoshapeList: GeoshapeListType;
}

export interface BaseParameterTypeModification_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: TimeSeriesReferenceType;
}

export interface BaseParameterTypeModification_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface BaseParameterTypeModification_timestampList {
  type: "timestampList";
  timestampList: TimestampListType;
}

export interface BaseParameterTypeModification_date {
  type: "date";
  date: DateType;
}

export interface BaseParameterTypeModification_dateList {
  type: "dateList";
  dateList: DateListType;
}

export interface BaseParameterTypeModification_objectReference {
  type: "objectReference";
  objectReference: ObjectReferenceType;
}

export interface BaseParameterTypeModification_objectReferenceList {
  type: "objectReferenceList";
  objectReferenceList: ObjectReferenceListType;
}

export interface BaseParameterTypeModification_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ObjectSetRidType;
}

export interface BaseParameterTypeModification_interfaceReference {
  type: "interfaceReference";
  interfaceReference: InterfaceReferenceTypeModification;
}

export interface BaseParameterTypeModification_interfaceReferenceList {
  type: "interfaceReferenceList";
  interfaceReferenceList: InterfaceReferenceListTypeModification;
}

export interface BaseParameterTypeModification_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ObjectTypeReferenceType;
}

export interface BaseParameterTypeModification_attachment {
  type: "attachment";
  attachment: AttachmentType;
}

export interface BaseParameterTypeModification_attachmentList {
  type: "attachmentList";
  attachmentList: AttachmentListType;
}

export interface BaseParameterTypeModification_marking {
  type: "marking";
  marking: MarkingType;
}

export interface BaseParameterTypeModification_markingList {
  type: "markingList";
  markingList: MarkingListType;
}

export interface BaseParameterTypeModification_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceType;
}

export interface BaseParameterTypeModification_mediaReferenceList {
  type: "mediaReferenceList";
  mediaReferenceList: MediaReferenceListType;
}

export interface BaseParameterTypeModification_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferenceType;
}

export interface BaseParameterTypeModification_geotimeSeriesReferenceList {
  type: "geotimeSeriesReferenceList";
  geotimeSeriesReferenceList: GeotimeSeriesReferenceListType;
}

export interface BaseParameterTypeModification_struct {
  type: "struct";
  struct: StructType;
}

export interface BaseParameterTypeModification_structList {
  type: "structList";
  structList: StructListType;
}
/**
 * All of the possible types for Parameters.
 */
export type BaseParameterTypeModification =
  | BaseParameterTypeModification_boolean
  | BaseParameterTypeModification_booleanList
  | BaseParameterTypeModification_integer
  | BaseParameterTypeModification_integerList
  | BaseParameterTypeModification_long
  | BaseParameterTypeModification_longList
  | BaseParameterTypeModification_double
  | BaseParameterTypeModification_doubleList
  | BaseParameterTypeModification_string
  | BaseParameterTypeModification_stringList
  | BaseParameterTypeModification_geohash
  | BaseParameterTypeModification_geohashList
  | BaseParameterTypeModification_geoshape
  | BaseParameterTypeModification_geoshapeList
  | BaseParameterTypeModification_timeSeriesReference
  | BaseParameterTypeModification_timestamp
  | BaseParameterTypeModification_timestampList
  | BaseParameterTypeModification_date
  | BaseParameterTypeModification_dateList
  | BaseParameterTypeModification_objectReference
  | BaseParameterTypeModification_objectReferenceList
  | BaseParameterTypeModification_objectSetRid
  | BaseParameterTypeModification_interfaceReference
  | BaseParameterTypeModification_interfaceReferenceList
  | BaseParameterTypeModification_objectTypeReference
  | BaseParameterTypeModification_attachment
  | BaseParameterTypeModification_attachmentList
  | BaseParameterTypeModification_marking
  | BaseParameterTypeModification_markingList
  | BaseParameterTypeModification_mediaReference
  | BaseParameterTypeModification_mediaReferenceList
  | BaseParameterTypeModification_geotimeSeriesReference
  | BaseParameterTypeModification_geotimeSeriesReferenceList
  | BaseParameterTypeModification_struct
  | BaseParameterTypeModification_structList;
