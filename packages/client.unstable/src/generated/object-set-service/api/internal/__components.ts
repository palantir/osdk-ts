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
  AttachmentPropertyValue as _api_AttachmentPropertyValue,
  BooleanPropertyValue as _api_BooleanPropertyValue,
  CipherTextPropertyValue as _api_CipherTextPropertyValue,
  DatasourceRid as _api_DatasourceRid,
  DatePropertyValue as _api_DatePropertyValue,
  DecimalPropertyValue as _api_DecimalPropertyValue,
  DoublePropertyValue as _api_DoublePropertyValue,
  EntityLocator as _api_EntityLocator,
  EntityPrimaryKey as _api_EntityPrimaryKey,
  EntityTypeRid as _api_EntityTypeRid,
  EntityVersion as _api_EntityVersion,
  GeoShapePropertyValue as _api_GeoShapePropertyValue,
  GeotimeSeriesReferencePropertyValue
    as _api_GeotimeSeriesReferencePropertyValue,
  IntegerPropertyValue as _api_IntegerPropertyValue,
  LongPropertyValue as _api_LongPropertyValue,
  MarkingPropertyValue as _api_MarkingPropertyValue,
  MediaReferencePropertyValue as _api_MediaReferencePropertyValue,
  NullPropertyValue as _api_NullPropertyValue,
  ObjectSetContext as _api_ObjectSetContext,
  OntologyVersion as _api_OntologyVersion,
  PropertyTypeRid as _api_PropertyTypeRid,
  PropertyValue as _api_PropertyValue,
  StringPropertyValue as _api_StringPropertyValue,
  StructPropertyValue as _api_StructPropertyValue,
  TimeDependentPropertyValue as _api_TimeDependentPropertyValue,
  TimestampPropertyValue as _api_TimestampPropertyValue,
  VectorPropertyValue as _api_VectorPropertyValue,
} from "../__components.js";
export interface DeleteObjectSetsBySecurityRidResponse {
}
export interface HighburyPageTokenComponents_v1 {
  type: "v1";
  v1: HighburyPageTokenComponentsV1;
}
export type HighburyPageTokenComponents = HighburyPageTokenComponents_v1;

export interface HighburyPageTokenComponentsV1 {
  highburyPageTokenContents: string;
}
/**
 * An object property value whose type is array.
 */
export type InternalArrayPropertyValue = Array<InternalPropertyValue>;

/**
 * An objet property value whose type is a byte.
 */
export type InternalBytePropertyValue = number;

/**
 * Internal representation of a float value. Even though it is represented as a double, same as in the OSS
 * public API, a dedicated float type is necessary so that Actions can distinguish double property types
 * from float property types, as defined in OMS.
 */
export type InternalFloatPropertyValue =
  | number
  | "NaN"
  | "Infinity"
  | "-Infinity";

/**
 * An object property value that represents a comma separated latitude-longitude string. This differs from OSS's
 * public API PropertyValue in that it's a string instead of a blob with 2 doubles. Reasons for this decision are
 * explained in Issue #5885 in the objects-data-funnel repo.
 */
export type InternalGeohashPropertyValue = string;
export interface InternalPropertyValue_array {
  type: "array";
  array: InternalArrayPropertyValue;
}

export interface InternalPropertyValue_attachment {
  type: "attachment";
  attachment: _api_AttachmentPropertyValue;
}

export interface InternalPropertyValue_boolean {
  type: "boolean";
  boolean: _api_BooleanPropertyValue;
}

export interface InternalPropertyValue_cipherText {
  type: "cipherText";
  cipherText: _api_CipherTextPropertyValue;
}

export interface InternalPropertyValue_date {
  type: "date";
  date: _api_DatePropertyValue;
}

export interface InternalPropertyValue_decimal {
  type: "decimal";
  decimal: _api_DecimalPropertyValue;
}

export interface InternalPropertyValue_double {
  type: "double";
  double: _api_DoublePropertyValue;
}

export interface InternalPropertyValue_float {
  type: "float";
  float: InternalFloatPropertyValue;
}

export interface InternalPropertyValue_geoHash {
  type: "geoHash";
  geoHash: InternalGeohashPropertyValue;
}

export interface InternalPropertyValue_geoShape {
  type: "geoShape";
  geoShape: _api_GeoShapePropertyValue;
}

export interface InternalPropertyValue_geotimeSeriesReference {
  type: "geotimeSeriesReference";
  geotimeSeriesReference: _api_GeotimeSeriesReferencePropertyValue;
}

export interface InternalPropertyValue_integer {
  type: "integer";
  integer: _api_IntegerPropertyValue;
}

export interface InternalPropertyValue_long {
  type: "long";
  long: _api_LongPropertyValue;
}

export interface InternalPropertyValue_marking {
  type: "marking";
  marking: _api_MarkingPropertyValue;
}

export interface InternalPropertyValue_mediaReference {
  type: "mediaReference";
  mediaReference: _api_MediaReferencePropertyValue;
}

export interface InternalPropertyValue_null {
  type: "null";
  null: _api_NullPropertyValue;
}

export interface InternalPropertyValue_string {
  type: "string";
  string: _api_StringPropertyValue;
}

export interface InternalPropertyValue_struct {
  type: "struct";
  struct: _api_StructPropertyValue;
}

export interface InternalPropertyValue_timeDependent {
  type: "timeDependent";
  timeDependent: _api_TimeDependentPropertyValue;
}

export interface InternalPropertyValue_timestamp {
  type: "timestamp";
  timestamp: _api_TimestampPropertyValue;
}

export interface InternalPropertyValue_vector {
  type: "vector";
  vector: _api_VectorPropertyValue;
}

export interface InternalPropertyValue_short {
  type: "short";
  short: InternalShortPropertyValue;
}

export interface InternalPropertyValue_byte {
  type: "byte";
  byte: InternalBytePropertyValue;
}
/**
 * The value of an object property. This type is meant to mirror Funnel's PropertyValue type. It differs from
 * the public PropertyValue defined in OSS API in how we represent Geohashes.
 */
export type InternalPropertyValue =
  | InternalPropertyValue_array
  | InternalPropertyValue_attachment
  | InternalPropertyValue_boolean
  | InternalPropertyValue_cipherText
  | InternalPropertyValue_date
  | InternalPropertyValue_decimal
  | InternalPropertyValue_double
  | InternalPropertyValue_float
  | InternalPropertyValue_geoHash
  | InternalPropertyValue_geoShape
  | InternalPropertyValue_geotimeSeriesReference
  | InternalPropertyValue_integer
  | InternalPropertyValue_long
  | InternalPropertyValue_marking
  | InternalPropertyValue_mediaReference
  | InternalPropertyValue_null
  | InternalPropertyValue_string
  | InternalPropertyValue_struct
  | InternalPropertyValue_timeDependent
  | InternalPropertyValue_timestamp
  | InternalPropertyValue_vector
  | InternalPropertyValue_short
  | InternalPropertyValue_byte;

/**
 * An object property value whose type is a short.
 */
export type InternalShortPropertyValue = number;

/**
 * Specifies entity locators of objects or many-to-many links to be loaded for patching.
 */
export interface LoadPatchableEntitiesRequest {
  entityLocators: Array<_api_EntityLocator>;
  objectSetContext?: _api_ObjectSetContext | null | undefined;
}
export interface LoadPatchableEntitiesResponse {
  entities: Array<PatchableFoundryEntity>;
  ontologyVersions: Record<_api_EntityTypeRid, _api_OntologyVersion>;
}
/**
 * Represents an object or a many-to-many link, in a format consumable for patching workflows with Funnel.
 */
export interface PatchableFoundryEntity {
  authCode: string;
  datasourceRids: Array<_api_DatasourceRid>;
  entityTypeRid: _api_EntityTypeRid;
  invisibleDatasourceRids: Array<_api_DatasourceRid>;
  invisibleProperties: Array<_api_PropertyTypeRid>;
  isAlive: boolean;
  patch?: string | null | undefined;
  primaryKey: _api_EntityPrimaryKey;
  properties: Record<_api_PropertyTypeRid, _api_PropertyValue>;
  propertiesV2: Record<_api_PropertyTypeRid, InternalPropertyValue>;
  version: _api_EntityVersion;
}
/**
 * A Gatekeeper RID to secure an object set.
 */
export type SecurityRid = string;
