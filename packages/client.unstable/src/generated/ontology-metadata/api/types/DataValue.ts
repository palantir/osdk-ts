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
import type { StringListValue } from "./StringListValue.js";
import type { StringValue } from "./StringValue.js";
import type { StructListValue } from "./StructListValue.js";
import type { StructValue } from "./StructValue.js";
import type { TimeSeriesReferenceValue } from "./TimeSeriesReferenceValue.js";
import type { TimestampListValue } from "./TimestampListValue.js";
import type { TimestampValue } from "./TimestampValue.js";
export interface DataValue_boolean {
  type: "boolean";
  boolean: BooleanValue;
}

export interface DataValue_booleanList {
  type: "booleanList";
  booleanList: BooleanListValue;
}

export interface DataValue_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface DataValue_integerList {
  type: "integerList";
  integerList: IntegerListValue;
}

export interface DataValue_long {
  type: "long";
  long: LongValue;
}

export interface DataValue_longList {
  type: "longList";
  longList: LongListValue;
}

export interface DataValue_double {
  type: "double";
  double: DoubleValue;
}

export interface DataValue_doubleList {
  type: "doubleList";
  doubleList: DoubleListValue;
}

export interface DataValue_string {
  type: "string";
  string: StringValue;
}

export interface DataValue_stringList {
  type: "stringList";
  stringList: StringListValue;
}

export interface DataValue_date {
  type: "date";
  date: DateValue;
}

export interface DataValue_dateList {
  type: "dateList";
  dateList: DateListValue;
}

export interface DataValue_geohash {
  type: "geohash";
  geohash: GeohashValue;
}

export interface DataValue_geohashList {
  type: "geohashList";
  geohashList: GeohashListValue;
}

export interface DataValue_geoshape {
  type: "geoshape";
  geoshape: GeoshapeValue;
}

export interface DataValue_geoshapeList {
  type: "geoshapeList";
  geoshapeList: GeoshapeListValue;
}

export interface DataValue_timeSeriesReference {
  type: "timeSeriesReference";
  timeSeriesReference: TimeSeriesReferenceValue;
}

export interface DataValue_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface DataValue_timestampList {
  type: "timestampList";
  timestampList: TimestampListValue;
}

export interface DataValue_null {
  type: "null";
  null: NullValue;
}

export interface DataValue_objectLocator {
  type: "objectLocator";
  objectLocator: ObjectLocatorValue;
}

export interface DataValue_objectLocatorList {
  type: "objectLocatorList";
  objectLocatorList: ObjectLocatorListValue;
}

export interface DataValue_objectType {
  type: "objectType";
  objectType: ObjectTypeValue;
}

export interface DataValue_attachment {
  type: "attachment";
  attachment: AttachmentValue;
}

export interface DataValue_attachmentList {
  type: "attachmentList";
  attachmentList: AttachmentListValue;
}

export interface DataValue_marking {
  type: "marking";
  marking: MarkingValue;
}

export interface DataValue_markingList {
  type: "markingList";
  markingList: MarkingListValue;
}

export interface DataValue_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceValue;
}

export interface DataValue_mediaReferenceList {
  type: "mediaReferenceList";
  mediaReferenceList: MediaReferenceListValue;
}

export interface DataValue_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferenceValue;
}

export interface DataValue_geotimeSeriesReferenceList {
  type: "geotimeSeriesReferenceList";
  geotimeSeriesReferenceList: GeotimeSeriesReferenceListValue;
}

export interface DataValue_struct {
  type: "struct";
  struct: StructValue;
}

export interface DataValue_structList {
  type: "structList";
  structList: StructListValue;
}
export type DataValue =
  | DataValue_boolean
  | DataValue_booleanList
  | DataValue_integer
  | DataValue_integerList
  | DataValue_long
  | DataValue_longList
  | DataValue_double
  | DataValue_doubleList
  | DataValue_string
  | DataValue_stringList
  | DataValue_date
  | DataValue_dateList
  | DataValue_geohash
  | DataValue_geohashList
  | DataValue_geoshape
  | DataValue_geoshapeList
  | DataValue_timeSeriesReference
  | DataValue_timestamp
  | DataValue_timestampList
  | DataValue_null
  | DataValue_objectLocator
  | DataValue_objectLocatorList
  | DataValue_objectType
  | DataValue_attachment
  | DataValue_attachmentList
  | DataValue_marking
  | DataValue_markingList
  | DataValue_mediaReference
  | DataValue_mediaReferenceList
  | DataValue_geotimeSeriesReference
  | DataValue_geotimeSeriesReferenceList
  | DataValue_struct
  | DataValue_structList;
