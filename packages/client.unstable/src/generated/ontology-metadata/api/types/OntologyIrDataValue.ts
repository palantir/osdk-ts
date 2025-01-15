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

import type { AttachmentListValue } from "./AttachmentListValue.js";
import type { AttachmentValue } from "./AttachmentValue.js";
import type { BooleanListValue } from "./BooleanListValue.js";
import type { BooleanValue } from "./BooleanValue.js";
import type { DateListValue } from "./DateListValue.js";
import type { DateValue } from "./DateValue.js";
import type { DoubleListValue } from "./DoubleListValue.js";
import type { DoubleValue } from "./DoubleValue.js";
import type { GeohashListValue } from "./GeohashListValue.js";
import type { GeohashValue } from "./GeohashValue.js";
import type { GeoshapeListValue } from "./GeoshapeListValue.js";
import type { GeoshapeValue } from "./GeoshapeValue.js";
import type { GeotimeSeriesReferenceListValue } from "./GeotimeSeriesReferenceListValue.js";
import type { GeotimeSeriesReferenceValue } from "./GeotimeSeriesReferenceValue.js";
import type { IntegerListValue } from "./IntegerListValue.js";
import type { IntegerValue } from "./IntegerValue.js";
import type { LongListValue } from "./LongListValue.js";
import type { LongValue } from "./LongValue.js";
import type { MarkingListValue } from "./MarkingListValue.js";
import type { MarkingValue } from "./MarkingValue.js";
import type { MediaReferenceListValue } from "./MediaReferenceListValue.js";
import type { MediaReferenceValue } from "./MediaReferenceValue.js";
import type { NullValue } from "./NullValue.js";
import type { ObjectLocatorListValue } from "./ObjectLocatorListValue.js";
import type { ObjectLocatorValue } from "./ObjectLocatorValue.js";
import type { ObjectTypeValue } from "./ObjectTypeValue.js";
import type { OntologyIrTimeSeriesReferenceValue } from "./OntologyIrTimeSeriesReferenceValue.js";
import type { StringListValue } from "./StringListValue.js";
import type { StringValue } from "./StringValue.js";
import type { StructListValue } from "./StructListValue.js";
import type { StructValue } from "./StructValue.js";
import type { TimestampListValue } from "./TimestampListValue.js";
import type { TimestampValue } from "./TimestampValue.js";
export interface OntologyIrDataValue_boolean {
  type: "boolean";
  boolean: BooleanValue;
}

export interface OntologyIrDataValue_booleanList {
  type: "booleanList";
  booleanList: BooleanListValue;
}

export interface OntologyIrDataValue_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface OntologyIrDataValue_integerList {
  type: "integerList";
  integerList: IntegerListValue;
}

export interface OntologyIrDataValue_long {
  type: "long";
  long: LongValue;
}

export interface OntologyIrDataValue_longList {
  type: "longList";
  longList: LongListValue;
}

export interface OntologyIrDataValue_double {
  type: "double";
  double: DoubleValue;
}

export interface OntologyIrDataValue_doubleList {
  type: "doubleList";
  doubleList: DoubleListValue;
}

export interface OntologyIrDataValue_string {
  type: "string";
  string: StringValue;
}

export interface OntologyIrDataValue_stringList {
  type: "stringList";
  stringList: StringListValue;
}

export interface OntologyIrDataValue_date {
  type: "date";
  date: DateValue;
}

export interface OntologyIrDataValue_dateList {
  type: "dateList";
  dateList: DateListValue;
}

export interface OntologyIrDataValue_geohash {
  type: "geohash";
  geohash: GeohashValue;
}

export interface OntologyIrDataValue_geohashList {
  type: "geohashList";
  geohashList: GeohashListValue;
}

export interface OntologyIrDataValue_geoshape {
  type: "geoshape";
  geoshape: GeoshapeValue;
}

export interface OntologyIrDataValue_geoshapeList {
  type: "geoshapeList";
  geoshapeList: GeoshapeListValue;
}

export interface OntologyIrDataValue_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: OntologyIrTimeSeriesReferenceValue;
}

export interface OntologyIrDataValue_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface OntologyIrDataValue_timestampList {
  type: "timestampList";
  timestampList: TimestampListValue;
}

export interface OntologyIrDataValue_null {
  type: "null";
  null: NullValue;
}

export interface OntologyIrDataValue_objectLocator {
  type: "objectLocator";
  objectLocator: ObjectLocatorValue;
}

export interface OntologyIrDataValue_objectLocatorList {
  type: "objectLocatorList";
  objectLocatorList: ObjectLocatorListValue;
}

export interface OntologyIrDataValue_objectType {
  type: "objectType";
  objectType: ObjectTypeValue;
}

export interface OntologyIrDataValue_attachment {
  type: "attachment";
  attachment: AttachmentValue;
}

export interface OntologyIrDataValue_attachmentList {
  type: "attachmentList";
  attachmentList: AttachmentListValue;
}

export interface OntologyIrDataValue_marking {
  type: "marking";
  marking: MarkingValue;
}

export interface OntologyIrDataValue_markingList {
  type: "markingList";
  markingList: MarkingListValue;
}

export interface OntologyIrDataValue_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceValue;
}

export interface OntologyIrDataValue_mediaReferenceList {
  type: "mediaReferenceList";
  mediaReferenceList: MediaReferenceListValue;
}

export interface OntologyIrDataValue_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferenceValue;
}

export interface OntologyIrDataValue_geotimeSeriesReferenceList {
  type: "geotimeSeriesReferenceList";
  geotimeSeriesReferenceList: GeotimeSeriesReferenceListValue;
}

export interface OntologyIrDataValue_struct {
  type: "struct";
  struct: StructValue;
}

export interface OntologyIrDataValue_structList {
  type: "structList";
  structList: StructListValue;
}
export type OntologyIrDataValue =
  | OntologyIrDataValue_boolean
  | OntologyIrDataValue_booleanList
  | OntologyIrDataValue_integer
  | OntologyIrDataValue_integerList
  | OntologyIrDataValue_long
  | OntologyIrDataValue_longList
  | OntologyIrDataValue_double
  | OntologyIrDataValue_doubleList
  | OntologyIrDataValue_string
  | OntologyIrDataValue_stringList
  | OntologyIrDataValue_date
  | OntologyIrDataValue_dateList
  | OntologyIrDataValue_geohash
  | OntologyIrDataValue_geohashList
  | OntologyIrDataValue_geoshape
  | OntologyIrDataValue_geoshapeList
  | OntologyIrDataValue_timeSeriesReference
  | OntologyIrDataValue_timestamp
  | OntologyIrDataValue_timestampList
  | OntologyIrDataValue_null
  | OntologyIrDataValue_objectLocator
  | OntologyIrDataValue_objectLocatorList
  | OntologyIrDataValue_objectType
  | OntologyIrDataValue_attachment
  | OntologyIrDataValue_attachmentList
  | OntologyIrDataValue_marking
  | OntologyIrDataValue_markingList
  | OntologyIrDataValue_mediaReference
  | OntologyIrDataValue_mediaReferenceList
  | OntologyIrDataValue_geotimeSeriesReference
  | OntologyIrDataValue_geotimeSeriesReferenceList
  | OntologyIrDataValue_struct
  | OntologyIrDataValue_structList;
