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
import type { OntologyIrInterfaceReferenceListType } from "./OntologyIrInterfaceReferenceListType.js";
import type { OntologyIrInterfaceReferenceType } from "./OntologyIrInterfaceReferenceType.js";
import type { StringListType } from "./StringListType.js";
import type { StringType } from "./StringType.js";
import type { StructListType } from "./StructListType.js";
import type { StructType } from "./StructType.js";
import type { TimeSeriesReferenceType } from "./TimeSeriesReferenceType.js";
import type { TimestampListType } from "./TimestampListType.js";
import type { TimestampType } from "./TimestampType.js";
export interface OntologyIrBaseParameterType_boolean {
  type: "boolean";
  boolean: BooleanType;
}

export interface OntologyIrBaseParameterType_booleanList {
  type: "booleanList";
  booleanList: BooleanListType;
}

export interface OntologyIrBaseParameterType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface OntologyIrBaseParameterType_integerList {
  type: "integerList";
  integerList: IntegerListType;
}

export interface OntologyIrBaseParameterType_long {
  type: "long";
  long: LongType;
}

export interface OntologyIrBaseParameterType_longList {
  type: "longList";
  longList: LongListType;
}

export interface OntologyIrBaseParameterType_double {
  type: "double";
  double: DoubleType;
}

export interface OntologyIrBaseParameterType_doubleList {
  type: "doubleList";
  doubleList: DoubleListType;
}

export interface OntologyIrBaseParameterType_string {
  type: "string";
  string: StringType;
}

export interface OntologyIrBaseParameterType_stringList {
  type: "stringList";
  stringList: StringListType;
}

export interface OntologyIrBaseParameterType_geohash {
  type: "geohash";
  geohash: GeohashType;
}

export interface OntologyIrBaseParameterType_geohashList {
  type: "geohashList";
  geohashList: GeohashListType;
}

export interface OntologyIrBaseParameterType_geoshape {
  type: "geoshape";
  geoshape: GeoshapeType;
}

export interface OntologyIrBaseParameterType_geoshapeList {
  type: "geoshapeList";
  geoshapeList: GeoshapeListType;
}

export interface OntologyIrBaseParameterType_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: TimeSeriesReferenceType;
}

export interface OntologyIrBaseParameterType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface OntologyIrBaseParameterType_timestampList {
  type: "timestampList";
  timestampList: TimestampListType;
}

export interface OntologyIrBaseParameterType_date {
  type: "date";
  date: DateType;
}

export interface OntologyIrBaseParameterType_dateList {
  type: "dateList";
  dateList: DateListType;
}

export interface OntologyIrBaseParameterType_objectReference {
  type: "objectReference";
  objectReference: ObjectReferenceType;
}

export interface OntologyIrBaseParameterType_objectReferenceList {
  type: "objectReferenceList";
  objectReferenceList: ObjectReferenceListType;
}

export interface OntologyIrBaseParameterType_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ObjectSetRidType;
}

export interface OntologyIrBaseParameterType_interfaceReference {
  type: "interfaceReference";
  interfaceReference: OntologyIrInterfaceReferenceType;
}

export interface OntologyIrBaseParameterType_interfaceReferenceList {
  type: "interfaceReferenceList";
  interfaceReferenceList: OntologyIrInterfaceReferenceListType;
}

export interface OntologyIrBaseParameterType_objectTypeReference {
  type: "objectTypeReference";
  objectTypeReference: ObjectTypeReferenceType;
}

export interface OntologyIrBaseParameterType_attachment {
  type: "attachment";
  attachment: AttachmentType;
}

export interface OntologyIrBaseParameterType_attachmentList {
  type: "attachmentList";
  attachmentList: AttachmentListType;
}

export interface OntologyIrBaseParameterType_marking {
  type: "marking";
  marking: MarkingType;
}

export interface OntologyIrBaseParameterType_markingList {
  type: "markingList";
  markingList: MarkingListType;
}

export interface OntologyIrBaseParameterType_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceType;
}

export interface OntologyIrBaseParameterType_mediaReferenceList {
  type: "mediaReferenceList";
  mediaReferenceList: MediaReferenceListType;
}

export interface OntologyIrBaseParameterType_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferenceType;
}

export interface OntologyIrBaseParameterType_geotimeSeriesReferenceList {
  type: "geotimeSeriesReferenceList";
  geotimeSeriesReferenceList: GeotimeSeriesReferenceListType;
}

export interface OntologyIrBaseParameterType_struct {
  type: "struct";
  struct: StructType;
}

export interface OntologyIrBaseParameterType_structList {
  type: "structList";
  structList: StructListType;
}
/**
 * All of the possible types for Parameters.
 */
export type OntologyIrBaseParameterType =
  | OntologyIrBaseParameterType_boolean
  | OntologyIrBaseParameterType_booleanList
  | OntologyIrBaseParameterType_integer
  | OntologyIrBaseParameterType_integerList
  | OntologyIrBaseParameterType_long
  | OntologyIrBaseParameterType_longList
  | OntologyIrBaseParameterType_double
  | OntologyIrBaseParameterType_doubleList
  | OntologyIrBaseParameterType_string
  | OntologyIrBaseParameterType_stringList
  | OntologyIrBaseParameterType_geohash
  | OntologyIrBaseParameterType_geohashList
  | OntologyIrBaseParameterType_geoshape
  | OntologyIrBaseParameterType_geoshapeList
  | OntologyIrBaseParameterType_timeSeriesReference
  | OntologyIrBaseParameterType_timestamp
  | OntologyIrBaseParameterType_timestampList
  | OntologyIrBaseParameterType_date
  | OntologyIrBaseParameterType_dateList
  | OntologyIrBaseParameterType_objectReference
  | OntologyIrBaseParameterType_objectReferenceList
  | OntologyIrBaseParameterType_objectSetRid
  | OntologyIrBaseParameterType_interfaceReference
  | OntologyIrBaseParameterType_interfaceReferenceList
  | OntologyIrBaseParameterType_objectTypeReference
  | OntologyIrBaseParameterType_attachment
  | OntologyIrBaseParameterType_attachmentList
  | OntologyIrBaseParameterType_marking
  | OntologyIrBaseParameterType_markingList
  | OntologyIrBaseParameterType_mediaReference
  | OntologyIrBaseParameterType_mediaReferenceList
  | OntologyIrBaseParameterType_geotimeSeriesReference
  | OntologyIrBaseParameterType_geotimeSeriesReferenceList
  | OntologyIrBaseParameterType_struct
  | OntologyIrBaseParameterType_structList;
