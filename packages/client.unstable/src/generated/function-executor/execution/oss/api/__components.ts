/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/**/

/**
 * An object property value whose type is array.
 */
export type ArrayPropertyValue = Array<PropertyValue>;

/**
 * The rid of an Attachment.
 */
export type AttachmentPropertyValue = string;

/**
 * An object property value whose type is boolean (true-false).
 */
export type BooleanPropertyValue = boolean;

/**
 * Reference to a specific catalog file
 */
export interface CatalogFileReference {
  datasetRid: DatasetRid;
  endTransactionRid: TransactionRid;
  logicalFilePath: string;
}
/**
 * This property type represents an encrypted or plain text value used by the Cipher Service.
 */
export type CipherTextPropertyValue = string;

/**
 * Reference to a dataset containing the media with an optional thumbnail reference.
 */
export interface DatasetFileReference {
  fileReference: CatalogFileReference;
  thumbnailReference?: CatalogFileReference | null | undefined;
}
/**
 * The identifier of a foundry dataset
 */
export type DatasetRid = string;

/**
 * String representation of an ISO-8601 formatted date in a YYYY-MM-DD format.
 */
export type DatePropertyValue = string;

/**
 * String representation of a decimal value. This value can be returned in a scientific notation with the exponent
 * proceeded by a letter 'E' followed by a '+'/'-' sign (for example 4.321E+8 or 0.332E-5).
 */
export type DecimalPropertyValue = string;

/**
 * An object property value whose type is double-precision floating point.
 */
export type DoublePropertyValue = number | "NaN" | "Infinity" | "-Infinity";

/**
 * An object property value that represents a latitude-longitude pair.
 */
export interface GeoPointPropertyValue {
  latitude: number | "NaN" | "Infinity" | "-Infinity";
  longitude: number | "NaN" | "Infinity" | "-Infinity";
}
/**
 * An object property value that represents a geoshape. This value is guaranteed to be a valid GeoJSON.
 */
export type GeoShapePropertyValue = any;

/**
 * The ID for a Geotime series within an integration; this can be written into Geotime by an end user
 * and is therefore unsafe.
 */
export type GeotimeSeriesId = string;

/**
 * A reference to a Geotime integration; this is randomly generated and is therefore safe to log.
 */
export type GeotimeSeriesIntegrationRid = string;

/**
 * The property value for a Geotime series reference
 */
export interface GeotimeSeriesReference {
  geotimeSeriesId: GeotimeSeriesId;
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}
/**
 * An object property value that represents a GeotimeSeriesReference.
 */
export type GeotimeSeriesReferencePropertyValue = GeotimeSeriesReference;

/**
 * An object property value whose type is integer.
 */
export type IntegerPropertyValue = number;

/**
 * String representation of a 64-bit long value. This value has no formatting of any kind, and contains only
 * digits (with an optional leading '-' sign for negative numbers).
 */
export type LongPropertyValue = string;

/**
 * An object property value representing a marking. This value cannot be used as a primary key.
 */
export type MarkingPropertyValue = string;

/**
 * A token that can be used to access the media item. This token is only valid for a limited time and can be used to access the media item without authentication repeatedly during the lifetime of the token.
 * This token will only be present if explicitly requested by the client by setting  `referenceSigningOptions.signMediaReferences` to true in the endpoints that support it.
 * This token can only be generated for media items that are backed by a media set view datasource.
 * This token will not be generated for media items in arrays.
 * NOTE: This token is generated for the calling user and should not be shared.
 */
export type MediaItemReadToken = string;

/**
 * Reference to a media set item containing the media
 */
export interface MediaItemReference {
  mediaItemRid: MediaItemRid;
  mediaSetRid: MediaSetRid;
}
/**
 * The identifier of the media item in the media set backing the media
 */
export type MediaItemRid = string;

/**
 * A reference to an immutable piece of media.
 */
export interface MediaReference {
  mimeType: MimeType;
  reference: MediaValueReference;
}
/**
 * An object property value that represents a MediaReference.
 */
export type MediaReferencePropertyValue = MediaReference;

/**
 * The identifier of the media set backing the media
 */
export type MediaSetRid = string;

/**
 * The identifier of the media set view backing the media
 */
export type MediaSetViewRid = string;
export interface MediaValueReference_mediaItem {
  type: "mediaItem";
  mediaItem: MediaItemReference;
}

export interface MediaValueReference_mediaViewItem {
  type: "mediaViewItem";
  mediaViewItem: MediaViewItemReference;
}

export interface MediaValueReference_datasetFile {
  type: "datasetFile";
  datasetFile: DatasetFileReference;
}
/**
 * A reference to media contained in either a media set or a dataset.
 */
export type MediaValueReference =
  | MediaValueReference_mediaItem
  | MediaValueReference_mediaViewItem
  | MediaValueReference_datasetFile;

/**
 * Reference to a media set view item containing the media
 */
export interface MediaViewItemReference {
  mediaItemRid: MediaItemRid;
  mediaSetRid: MediaSetRid;
  mediaSetViewRid: MediaSetViewRid;
  token?: MediaItemReadToken | null | undefined;
}
/**
 * Expected to match mime format from  https://www.iana.org/assignments/media-types/media-types.xhtml
 */
export type MimeType = string;

/**
 * Variant representing a null value. Null values are currently expected to only be returned inside array
 * property values - no property value will be otherwise returned for properties that do not have a value, or
 * where that value is null.
 */
export interface NullPropertyValue {}
export interface PropertyValue_array {
  type: "array";
  array: ArrayPropertyValue;
}

export interface PropertyValue_attachment {
  type: "attachment";
  attachment: AttachmentPropertyValue;
}

export interface PropertyValue_boolean {
  type: "boolean";
  boolean: BooleanPropertyValue;
}

export interface PropertyValue_cipherText {
  type: "cipherText";
  cipherText: CipherTextPropertyValue;
}

export interface PropertyValue_date {
  type: "date";
  date: DatePropertyValue;
}

export interface PropertyValue_decimal {
  type: "decimal";
  decimal: DecimalPropertyValue;
}

export interface PropertyValue_double {
  type: "double";
  double: DoublePropertyValue;
}

export interface PropertyValue_geoPoint {
  type: "geoPoint";
  geoPoint: GeoPointPropertyValue;
}

export interface PropertyValue_geoShape {
  type: "geoShape";
  geoShape: GeoShapePropertyValue;
}

export interface PropertyValue_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: GeotimeSeriesReferencePropertyValue;
}

export interface PropertyValue_integer {
  type: "integer";
  integer: IntegerPropertyValue;
}

export interface PropertyValue_long {
  type: "long";
  long: LongPropertyValue;
}

export interface PropertyValue_marking {
  type: "marking";
  marking: MarkingPropertyValue;
}

export interface PropertyValue_mediaReference {
  type: "mediaReference";
  mediaReference: MediaReferencePropertyValue;
}

export interface PropertyValue_null {
  type: "null";
  null: NullPropertyValue;
}

export interface PropertyValue_string {
  type: "string";
  string: StringPropertyValue;
}

export interface PropertyValue_struct {
  type: "struct";
  struct: StructPropertyValue;
}

export interface PropertyValue_timeDependent {
  type: "timeDependent";
  timeDependent: TimeDependentPropertyValue;
}

export interface PropertyValue_timestamp {
  type: "timestamp";
  timestamp: TimestampPropertyValue;
}

export interface PropertyValue_vector {
  type: "vector";
  vector: VectorPropertyValue;
}
/**
 * The value of an object property.
 */
export type PropertyValue =
  | PropertyValue_array
  | PropertyValue_attachment
  | PropertyValue_boolean
  | PropertyValue_cipherText
  | PropertyValue_date
  | PropertyValue_decimal
  | PropertyValue_double
  | PropertyValue_geoPoint
  | PropertyValue_geoShape
  | PropertyValue_geotimeSeriesReference
  | PropertyValue_integer
  | PropertyValue_long
  | PropertyValue_marking
  | PropertyValue_mediaReference
  | PropertyValue_null
  | PropertyValue_string
  | PropertyValue_struct
  | PropertyValue_timeDependent
  | PropertyValue_timestamp
  | PropertyValue_vector;

/**
 * Codex seriesId qualified with a time series syncRid
 */
export interface QualifiedSeriesIdPropertyValue {
  seriesId: SeriesIdPropertyValue;
  syncRid: TimeSeriesSyncRid;
}
/**
 * Codex seriesId.
 */
export type SeriesIdPropertyValue = string;

/**
 * An object property value whose type is string.
 */
export type StringPropertyValue = string;

/**
 * A list of StructElements
 */
export interface Struct {
  structElements: Array<StructElement>;
}
/**
 * Represents an entry in a struct.
 */
export interface StructElement {
  structElementRid: StructFieldRid;
  structElementValue: PropertyValue;
}
/**
 * A unique identifier for a field of a struct property type or struct shared property type
 */
export type StructFieldRid = string;

/**
 * An object property value whose type is struct.
 */
export type StructPropertyValue = Struct;

/**
 * A unique identifier of a codex template and optionally a codex template version which resolves to a derived
 * series. If no version is provided, the latest version is used.
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
 * Identifies a time series in codex.
 * The qualifiedSeriesId variant should be used when there are multiple time series datasources backing this
 * property value (and therefore we need to specify which one to qualify with).
 */
export type TimeDependentPropertyValue =
  | TimeDependentPropertyValue_seriesId
  | TimeDependentPropertyValue_templateRid
  | TimeDependentPropertyValue_qualifiedSeriesId;

/**
 * A rid identifying a time series sync.
 */
export type TimeSeriesSyncRid = string;

/**
 * Number of milliseconds since Unix epoch.
 */
export type TimestampPropertyValue = number;

/**
 * The identifier of a transaction in a foundry dataset
 */
export type TransactionRid = string;
export interface Vector_doubleVector {
  type: "doubleVector";
  doubleVector: Array<number | "NaN" | "Infinity" | "-Infinity">;
}
/**
 * A vector of values.
 */
export type Vector = Vector_doubleVector;

/**
 * An object property value whose type is vector.
 */
export type VectorPropertyValue = Vector;
