/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The format of an archive file.
 *
 * Log Safety: SAFE
 */
export type ArchiveFileFormat = "ZIP";

/**
 * Log Safety: UNSAFE
 */
export interface ArrayFieldType {
  itemsSchema: FieldSchema;
}

/**
 * Log Safety: SAFE
 */
export interface AttachmentType {}

/**
 * Log Safety: SAFE
 */
export interface BinaryType {}

/**
 * Log Safety: SAFE
 */
export interface BooleanType {}

/**
 * Log Safety: SAFE
 */
export interface ByteType {}

/**
   * Configuration for utilizing the stream as a change data capture (CDC) dataset. To configure CDC on a stream, at
least one key needs to be provided.
For more information on CDC in
Foundry, see the Change Data Capture user documentation.
   *
   * Log Safety: UNSAFE
   */
export type ChangeDataCaptureConfiguration = {
  type: "fullRow";
} & FullRowChangeDataCaptureConfiguration;

/**
 * Log Safety: SAFE
 */
export type ContentLength = string;

/**
 * Log Safety: SAFE
 */
export type ContentType = LooselyBrandedString<"ContentType">;

/**
 * The Foundry user who created this resource
 *
 * Log Safety: SAFE
 */
export type CreatedBy = PrincipalId;

/**
 * The time at which the resource was created.
 *
 * Log Safety: SAFE
 */
export type CreatedTime = string;

/**
 * Log Safety: UNSAFE
 */
export type CustomMetadata = Record<string, any>;

/**
 * Log Safety: SAFE
 */
export interface DateType {}

/**
 * Log Safety: SAFE
 */
export interface DecimalType {
  scale: number;
  precision: number;
}

/**
 * The display name of the entity.
 *
 * Log Safety: UNSAFE
 */
export type DisplayName = LooselyBrandedString<"DisplayName">;

/**
 * A measurement of distance.
 *
 * Log Safety: UNSAFE
 */
export interface Distance {
  value: number;
  unit: DistanceUnit;
}

/**
 * Log Safety: SAFE
 */
export type DistanceUnit =
  | "MILLIMETERS"
  | "CENTIMETERS"
  | "METERS"
  | "KILOMETERS"
  | "INCHES"
  | "FEET"
  | "YARDS"
  | "MILES"
  | "NAUTICAL_MILES";

/**
 * Log Safety: SAFE
 */
export interface DoubleType {}

/**
 * A measurement of duration.
 *
 * Log Safety: SAFE
 */
export interface Duration {
  value: number;
  unit: TimeUnit;
}

/**
   * A field in a Foundry schema. For more information on supported data types, see the
supported field types user documentation.
   *
   * Log Safety: UNSAFE
   */
export interface Field {
  name: FieldName;
  schema: FieldSchema;
}

/**
 * Log Safety: UNSAFE
 */
export type FieldDataType =
  | ({ type: "struct" } & StructFieldType)
  | ({ type: "date" } & DateType)
  | ({ type: "string" } & StringType)
  | ({ type: "byte" } & ByteType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "float" } & FloatType)
  | ({ type: "long" } & LongType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "array" } & ArrayFieldType)
  | ({ type: "binary" } & BinaryType)
  | ({ type: "short" } & ShortType)
  | ({ type: "decimal" } & DecimalType)
  | ({ type: "map" } & MapFieldType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * Log Safety: UNSAFE
 */
export type FieldName = LooselyBrandedString<"FieldName">;

/**
 * The specification of the type of a Foundry schema field.
 *
 * Log Safety: UNSAFE
 */
export interface FieldSchema {
  nullable: boolean;
  customMetadata?: CustomMetadata;
  dataType: FieldDataType;
}

/**
 * The path to a File within Foundry. Examples: my-file.txt, path/to/my-file.jpg, dataframe.snappy.parquet.
 *
 * Log Safety: UNSAFE
 */
export type FilePath = LooselyBrandedString<"FilePath">;

/**
 * Log Safety: SAFE
 */
export interface FloatType {}

/**
   * Configuration for change data capture which resolves the latest state of the dataset based on new full rows
being pushed to the stream. For example, if a value for a row is updated, it is only sufficient to publish
the entire new state of that row to the stream.
   *
   * Log Safety: UNSAFE
   */
export interface FullRowChangeDataCaptureConfiguration {
  deletionFieldName: FieldName;
  orderingFieldName: FieldName;
}

/**
 * Log Safety: SAFE
 */
export interface IntegerType {}

/**
 * Log Safety: SAFE
 */
export interface LongType {}

/**
 * Log Safety: UNSAFE
 */
export interface MapFieldType {
  keySchema: FieldSchema;
  valueSchema: FieldSchema;
}

/**
 * The ID of a security marking.
 *
 * Log Safety: SAFE
 */
export type MarkingId = string;

/**
 * The Resource Identifier (RID) of a Media Set
 *
 * Log Safety: SAFE
 */
export type MediaSetRid = LooselyBrandedString<"MediaSetRid">;

/**
 * Log Safety: SAFE
 */
export interface NullType {}

/**
 * Log Safety: SAFE
 */
export type OrganizationRid = LooselyBrandedString<"OrganizationRid">;

/**
 * The page size to use for the endpoint.
 *
 * Log Safety: SAFE
 */
export type PageSize = number;

/**
   * The page token indicates where to start paging. This should be omitted from the first page's request.
To fetch the next page, clients should take the value from the nextPageToken field of the previous response
and populate the next request's pageToken field with it.
   *
   * Log Safety: UNSAFE
   */
export type PageToken = LooselyBrandedString<"PageToken">;

/**
 * Enables the use of preview functionality.
 *
 * Log Safety: SAFE
 */
export type PreviewMode = boolean;

/**
 * The ID of a Foundry Group or User.
 *
 * Log Safety: SAFE
 */
export type PrincipalId = LooselyBrandedString<"PrincipalId">;

/**
 * Log Safety: SAFE
 */
export type PrincipalType = "USER" | "GROUP";

/**
   * Identifies which Realm a User or Group is a member of.
The palantir-internal-realm is used for Users or Groups that are created in Foundry by administrators and not associated with any SSO provider.
   *
   * Log Safety: UNSAFE
   */
export type Realm = LooselyBrandedString<"Realm">;

/**
 * The release status of the entity.
 *
 * Log Safety: SAFE
 */
export type ReleaseStatus = "ACTIVE" | "EXPERIMENTAL" | "DEPRECATED";

/**
 * Log Safety: SAFE
 */
export interface ShortType {}

/**
 * The size of the file or attachment in bytes.
 *
 * Log Safety: SAFE
 */
export type SizeBytes = string;

/**
 * The schema for a Foundry stream. Records pushed to this stream must match this schema.
 *
 * Log Safety: UNSAFE
 */
export interface StreamSchema {
  fields: Array<Field>;
  keyFieldNames?: Array<FieldName>;
  changeDataCapture?: ChangeDataCaptureConfiguration;
}

/**
 * Log Safety: SAFE
 */
export interface StringType {}

/**
 * Log Safety: UNSAFE
 */
export interface StructFieldType {
  subFields: Array<Field>;
}

/**
 * Log Safety: SAFE
 */
export type TimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS";

/**
 * Log Safety: SAFE
 */
export interface TimestampType {}

/**
 * Log Safety: SAFE
 */
export interface UnsupportedType {
  unsupportedType: string;
}

/**
 * The Foundry user who last updated this resource
 *
 * Log Safety: SAFE
 */
export type UpdatedBy = UserId;

/**
 * The time at which the resource was most recently updated.
 *
 * Log Safety: SAFE
 */
export type UpdatedTime = string;

/**
 * A Foundry User ID.
 *
 * Log Safety: SAFE
 */
export type UserId = string;

/**
 * A string representation of a java.time.ZoneId
 *
 * Log Safety: SAFE
 */
export type ZoneId = LooselyBrandedString<"ZoneId">;

/**
 * The unique identifier (ID) for an object type. This can be viewed in Ontology Manager.
 *
 * Log Safety: UNSAFE
 */
export type ObjectTypeId = LooselyBrandedString<"ObjectTypeId">;
