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

import type {
  MarketplaceObjectReference as _api_MarketplaceObjectReference,
  MarketplaceObjectReferenceValue as _api_MarketplaceObjectReferenceValue,
  MarketplaceObjectRid as _api_MarketplaceObjectRid,
  MarketplaceObjectSetRid as _api_MarketplaceObjectSetRid,
  MarketplaceUserId as _api_MarketplaceUserId,
  ObjectPropertyTypeRid as _api_ObjectPropertyTypeRid,
  ObjectRid as _api_ObjectRid,
  ObjectSetRid as _api_ObjectSetRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  UserId as _api_UserId,
  VersionedObjectSetRid as _api_VersionedObjectSetRid,
} from "../__components.js";
export type AttachmentValue = string;
export type BooleanValue = boolean;

/**
 * An ISO 8601 date.
 */
export type DateValue = string;
export type DoubleValue = number | "NaN" | "Infinity" | "-Infinity";
export type FloatValue = number | "NaN" | "Infinity" | "-Infinity";
export type IntegerValue = number;
export interface ListValue {
  values: Array<Value>;
}
export type LongValue = number;
export interface MarketplaceListValue {
  values: Array<MarketplaceValue>;
}
export interface MarketplaceObjectReferenceList {
  objectList: Array<_api_MarketplaceObjectReference>;
}
export interface MarketplaceValue_boolean {
  type: "boolean";
  boolean: BooleanValue;
}

export interface MarketplaceValue_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface MarketplaceValue_long {
  type: "long";
  long: LongValue;
}

export interface MarketplaceValue_double {
  type: "double";
  double: DoubleValue;
}

export interface MarketplaceValue_string {
  type: "string";
  string: StringValue;
}

export interface MarketplaceValue_date {
  type: "date";
  date: DateValue;
}

export interface MarketplaceValue_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface MarketplaceValue_list {
  type: "list";
  list: MarketplaceListValue;
}

export interface MarketplaceValue_null {
  type: "null";
  null: NullValue;
}

export interface MarketplaceValue_float {
  type: "float";
  float: FloatValue;
}

export interface MarketplaceValue_objectReference {
  type: "objectReference";
  objectReference: _api_MarketplaceObjectReferenceValue;
}

export interface MarketplaceValue_objectRid {
  type: "objectRid";
  objectRid: _api_MarketplaceObjectRid;
}

export interface MarketplaceValue_objectSetRid {
  type: "objectSetRid";
  objectSetRid: _api_MarketplaceObjectSetRid;
}

export interface MarketplaceValue_versionedObjectSetRid {
  type: "versionedObjectSetRid";
  versionedObjectSetRid: _api_VersionedObjectSetRid;
}

export interface MarketplaceValue_attachment {
  type: "attachment";
  attachment: AttachmentValue;
}

export interface MarketplaceValue_marking {
  type: "marking";
  marking: MarkingValue;
}

export interface MarketplaceValue_user {
  type: "user";
  user: _api_MarketplaceUserId;
}

export interface MarketplaceValue_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceValue;
}

export interface MarketplaceValue_timeseriesReference {
  type: "timeseriesReference";
  timeseriesReference: TimeSeriesReferenceValue;
}
/**
 * Sentinel's representation of a single data value. Note this value must support the union of all the
 * types we support as trigger inputs (currently ontology types) as well as all output effect types
 * (actions/functions/logic/notepad/...)
 */
export type MarketplaceValue =
  | MarketplaceValue_boolean
  | MarketplaceValue_integer
  | MarketplaceValue_long
  | MarketplaceValue_double
  | MarketplaceValue_string
  | MarketplaceValue_date
  | MarketplaceValue_timestamp
  | MarketplaceValue_list
  | MarketplaceValue_null
  | MarketplaceValue_float
  | MarketplaceValue_objectReference
  | MarketplaceValue_objectRid
  | MarketplaceValue_objectSetRid
  | MarketplaceValue_versionedObjectSetRid
  | MarketplaceValue_attachment
  | MarketplaceValue_marking
  | MarketplaceValue_user
  | MarketplaceValue_mediaReference
  | MarketplaceValue_timeseriesReference;

export type MarkingValue = string;

/**
 * An rid identifying a specific item within a media set. This rid is a randomly generated identifier and is
 * safe to log.
 */
export type MediaItemRid = string;
export interface MediaReference_mediaSetViewItem {
  type: "mediaSetViewItem";
  mediaSetViewItem: MediaViewItemReference;
}
export type MediaReference = MediaReference_mediaSetViewItem;

/**
 * A parameter type that consists of a MediaReference.
 */
export interface MediaReferenceValue {
  mimeType: MimeType;
  reference: MediaReference;
}
/**
 * An rid identifying a media set. This rid is a randomly generated identifier and is safe to log.
 */
export type MediaSetRid = string;

/**
 * An rid identifying a media set view. This rid is a randomly generated identifier and is safe to log.
 */
export type MediaSetViewRid = string;
export interface MediaViewItemReference {
  mediaItemRid: MediaItemRid;
  mediaSetRid: MediaSetRid;
  mediaSetViewRid: MediaSetViewRid;
}
/**
 * Expected to match mime format from  https://www.iana.org/assignments/media-types/media-types.xhtml
 */
export type MimeType = string;
export interface NullValue {
}
export interface NumericValue_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface NumericValue_long {
  type: "long";
  long: LongValue;
}

export interface NumericValue_double {
  type: "double";
  double: DoubleValue;
}

export interface NumericValue_float {
  type: "float";
  float: FloatValue;
}
export type NumericValue =
  | NumericValue_integer
  | NumericValue_long
  | NumericValue_double
  | NumericValue_float;

/**
 * Uses PropertyId as key because it is what is expected by foundry functions and actions
 */
export interface ObjectPrimaryKey {
  value: Record<PropertyId, Value>;
}
export interface ObjectReference {
  objectPrimaryKey: ObjectPrimaryKey;
  objectTypeId: ObjectTypeId;
}
export interface ObjectReferenceByRid {
  objectPrimaryKey: Record<_api_ObjectPropertyTypeRid, Value>;
  objectTypeRid: _api_ObjectTypeRid;
}
export interface ObjectReferenceList {
  objectList: Array<ObjectReference>;
}
export interface ObjectReferenceValue {
  objectPrimaryKey: ObjectPrimaryKey;
  objectTypeId: ObjectTypeId;
}
/**
 * An object type id.
 */
export type ObjectTypeId = string;
export type PropertyId = string;

/**
 * Sentinel equivalent of `com.palantir.object.set.api.QualifiedSeriesIdPropertyValue`
 */
export interface QualifiedSeriesIdPropertyValue {
  seriesId: SeriesIdPropertyValue;
  syncRid: TimeSeriesSyncRid;
}
/**
 * Sentinel equivalent of `com.palantir.object.set.api.SeriesIdPropertyValue`
 */
export type SeriesIdPropertyValue = string;
export type StringValue = string;

/**
 * Sentinel equivalent of `com.palantir.object.set.api.TemplateRidPropertyValue`
 */
export interface TemplateRidPropertyValue {
  templateRid: string;
  templateVersion?: string | null | undefined;
}
export interface TimeDependentPropertyValue_seriesId {
  type: "seriesId";
  seriesId: SeriesIdPropertyValue;
}

export interface TimeDependentPropertyValue_templateRid {
  type: "templateRid";
  templateRid: TemplateRidPropertyValue;
}

export interface TimeDependentPropertyValue_qualifiedSeriesId {
  type: "qualifiedSeriesId";
  qualifiedSeriesId: QualifiedSeriesIdPropertyValue;
}
/**
 * Actions equivalent of `com.palantir.object.set.api.TimeDependentPropertyValue`
 */
export type TimeDependentPropertyValue =
  | TimeDependentPropertyValue_seriesId
  | TimeDependentPropertyValue_templateRid
  | TimeDependentPropertyValue_qualifiedSeriesId;

/**
 * A parameter type that consists of a TimeDependentPropertyValue.
 */
export interface TimeSeriesReferenceValue {
  timeSeriesReference: TimeDependentPropertyValue;
}
/**
 * Sentinel equivalent of `com.palantir.object.set.api.TimeSeriesSyncRid`
 */
export type TimeSeriesSyncRid = string;
export type TimestampValue = string;
export interface Value_boolean {
  type: "boolean";
  boolean: BooleanValue;
}

export interface Value_integer {
  type: "integer";
  integer: IntegerValue;
}

export interface Value_long {
  type: "long";
  long: LongValue;
}

export interface Value_double {
  type: "double";
  double: DoubleValue;
}

export interface Value_string {
  type: "string";
  string: StringValue;
}

export interface Value_date {
  type: "date";
  date: DateValue;
}

export interface Value_timestamp {
  type: "timestamp";
  timestamp: TimestampValue;
}

export interface Value_list {
  type: "list";
  list: ListValue;
}

export interface Value_null {
  type: "null";
  null: NullValue;
}

export interface Value_float {
  type: "float";
  float: FloatValue;
}

export interface Value_objectReference {
  type: "objectReference";
  objectReference: ObjectReferenceValue;
}

export interface Value_objectRid {
  type: "objectRid";
  objectRid: _api_ObjectRid;
}

export interface Value_objectSetRid {
  type: "objectSetRid";
  objectSetRid: _api_ObjectSetRid;
}

export interface Value_versionedObjectSetRid {
  type: "versionedObjectSetRid";
  versionedObjectSetRid: _api_VersionedObjectSetRid;
}

export interface Value_attachment {
  type: "attachment";
  attachment: AttachmentValue;
}

export interface Value_marking {
  type: "marking";
  marking: MarkingValue;
}

export interface Value_user {
  type: "user";
  user: _api_UserId;
}

export interface Value_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferenceValue;
}

export interface Value_timeseriesReference {
  type: "timeseriesReference";
  timeseriesReference: TimeSeriesReferenceValue;
}
/**
 * Sentinel's representation of a single data value. Note this value must support the union of all the
 * types we support as trigger inputs (currently ontology types) as well as all output effect types
 * (actions/functions/logic/notepad/...)
 */
export type Value =
  | Value_boolean
  | Value_integer
  | Value_long
  | Value_double
  | Value_string
  | Value_date
  | Value_timestamp
  | Value_list
  | Value_null
  | Value_float
  | Value_objectReference
  | Value_objectRid
  | Value_objectSetRid
  | Value_versionedObjectSetRid
  | Value_attachment
  | Value_marking
  | Value_user
  | Value_mediaReference
  | Value_timeseriesReference;
