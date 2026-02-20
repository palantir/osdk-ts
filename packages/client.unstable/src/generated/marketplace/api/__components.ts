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

// Inlined from ./eddie/transformations/api/__components.js (pruned external dependency)
type _api_eddie_transformations_api_InputParameterType =
  | _api_eddie_transformations_api_InputParameterType_primitive
  | _api_eddie_transformations_api_InputParameterType_composite;
interface _api_eddie_transformations_api_InputParameterType_primitive {
  type: "primitive";
  primitive: _api_eddie_transformations_api_PrimitiveInputParameterType;
}
interface _api_eddie_transformations_api_InputParameterType_composite {
  type: "composite";
  composite: unknown;
}
type _api_eddie_transformations_api_PrimitiveInputParameterType = unknown;
interface _api_eddie_transformations_api_LiteralConstraint_columnName {
  type: "columnName";
  columnName: _api_eddie_transformations_api_ColumnNameLiteralConstraint;
}
type _api_eddie_transformations_api_LiteralConstraint = _api_eddie_transformations_api_LiteralConstraint_columnName;
interface _api_eddie_transformations_api_ColumnNameLiteralConstraint {}
interface _api_eddie_transformations_api_RegexParameterType {}
interface _api_eddie_transformations_api_ExplicitType {
  types: Array<_api_eddie_transformations_api_LogicalType>;
}
interface _api_eddie_transformations_api_LogicalType {
  physicalType: unknown;
}
type _api_eddie_transformations_api_ParameterId = string;
type _api_eddie_transformations_api_Parameter =
  | _api_eddie_transformations_api_Parameter_primitive
  | _api_eddie_transformations_api_Parameter_composite
  | _api_eddie_transformations_api_Parameter_reference
  | _api_eddie_transformations_api_Parameter_adapter;
interface _api_eddie_transformations_api_Parameter_primitive {
  type: "primitive";
  primitive: unknown;
}
interface _api_eddie_transformations_api_Parameter_composite {
  type: "composite";
  composite: unknown;
}
interface _api_eddie_transformations_api_Parameter_reference {
  type: "reference";
  reference: unknown;
}
interface _api_eddie_transformations_api_Parameter_adapter {
  type: "adapter";
  adapter: unknown;
}
interface _api_eddie_transformations_api_LiteralParameter_binary {
  type: "binary";
  binary: unknown;
}
interface _api_eddie_transformations_api_LiteralParameter_boolean {
  type: "boolean";
  boolean: unknown;
}
interface _api_eddie_transformations_api_LiteralParameter_string {
  type: "string";
  string: unknown;
}
type _api_eddie_transformations_api_LiteralParameter =
  | _api_eddie_transformations_api_LiteralParameter_binary
  | _api_eddie_transformations_api_LiteralParameter_boolean
  | _api_eddie_transformations_api_LiteralParameter_string
  | { type: string };
interface _api_eddie_transformations_api_RegexParameter {
  pattern: string;
}
interface _api_eddie_transformations_api_EnumParameter {
  value: string;
}

// Inlined from ./errors/__components.js (pruned external dependency)
interface _api_errors_MarketplaceSerializableError {
  areParametersV2JsonSerialized?: boolean | null | undefined;
  errorCode: string;
  errorInstanceId: string;
  errorName: string;
  parameters: Record<string, string>;
  parametersV2: unknown;
}

// Inlined from ./functions/__components.js (pruned external dependency)
interface _api_functions_CustomType {
  about?: LocalizedTitleAndDescription | null | undefined;
  fields: Record<_api_functions_CustomTypeFieldName, _api_functions_DataType>;
  id: _api_functions_CustomTypeId;
}
type _api_functions_CustomTypeFieldName = string;
type _api_functions_CustomTypeId = string;
type _api_functions_DataType = { type: string; [key: string]: unknown };

export type ActionLogRuleEditedObjectRelations = Record<
  ObjectTypeReference,
  LinkTypeReference
>;

export type ActionLogRulePropertyValues = Record<
  ObjectTypePropertyReference,
  ActionLogValue
>;

export interface ActionLogRuleShape {
  actionLogObjectTypeId: ObjectTypeReference;
  editedObjectRelations: ActionLogRuleEditedObjectRelations;
  propertyValues: ActionLogRulePropertyValues;
}

export interface ActionLogValue_parameterValue {
  type: "parameterValue";
  parameterValue: ActionTypeParameterReference;
}

export interface ActionLogValue_objectParameterPropertyValue {
  type: "objectParameterPropertyValue";
  objectParameterPropertyValue: ObjectParameterPropertyValue;
}

export interface ActionLogValue_interfaceParameterPropertyValue {
  type: "interfaceParameterPropertyValue";
  interfaceParameterPropertyValue: InterfaceParameterPropertyValue;
}

export interface ActionLogValue_editedObjects {
  type: "editedObjects";
  editedObjects: ObjectTypeReference;
}

export interface ActionLogValue_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: Empty;
}

export interface ActionLogValue_actionRid {
  type: "actionRid";
  actionRid: Empty;
}

export interface ActionLogValue_actionTypeVersion {
  type: "actionTypeVersion";
  actionTypeVersion: Empty;
}

export interface ActionLogValue_actionTimestamp {
  type: "actionTimestamp";
  actionTimestamp: Empty;
}

export interface ActionLogValue_actionUser {
  type: "actionUser";
  actionUser: Empty;
}

export interface ActionLogValue_isReverted {
  type: "isReverted";
  isReverted: Empty;
}

export interface ActionLogValue_revertUser {
  type: "revertUser";
  revertUser: Empty;
}

export interface ActionLogValue_revertTimestamp {
  type: "revertTimestamp";
  revertTimestamp: Empty;
}

export interface ActionLogValue_synchronousWebhookInstanceId {
  type: "synchronousWebhookInstanceId";
  synchronousWebhookInstanceId: Empty;
}

export interface ActionLogValue_asynchronousWebhookInstanceIds {
  type: "asynchronousWebhookInstanceIds";
  asynchronousWebhookInstanceIds: Empty;
}

export interface ActionLogValue_notifiedUsers {
  type: "notifiedUsers";
  notifiedUsers: Empty;
}

export interface ActionLogValue_notificationIds {
  type: "notificationIds";
  notificationIds: Empty;
}

export interface ActionLogValue_scenarioRid {
  type: "scenarioRid";
  scenarioRid: Empty;
}

export interface ActionLogValue_summary {
  type: "summary";
  summary: Array<ActionTypeRichTextComponent>;
}

export type ActionLogValue =
  | ActionLogValue_parameterValue
  | ActionLogValue_objectParameterPropertyValue
  | ActionLogValue_interfaceParameterPropertyValue
  | ActionLogValue_editedObjects
  | ActionLogValue_actionTypeRid
  | ActionLogValue_actionRid
  | ActionLogValue_actionTypeVersion
  | ActionLogValue_actionTimestamp
  | ActionLogValue_actionUser
  | ActionLogValue_isReverted
  | ActionLogValue_revertUser
  | ActionLogValue_revertTimestamp
  | ActionLogValue_synchronousWebhookInstanceId
  | ActionLogValue_asynchronousWebhookInstanceIds
  | ActionLogValue_notifiedUsers
  | ActionLogValue_notificationIds
  | ActionLogValue_scenarioRid
  | ActionLogValue_summary;

export type ActionParameterShapeId = string;

/**
 * DEPRECATED. Use `ActionTypeParameterShape` instead.
 */
export interface ActionParameterTypeShape {
  about: LocalizedTitleAndDescription;
  type: BaseParameterType;
}

export type ActionTypeParameterReference = BlockInternalId;

export interface ActionTypeParameterShape {
  about: LocalizedTitleAndDescription;
  actionType: ActionTypeReference;
  type: BaseParameterType;
}

export type ActionTypeReference = BlockInternalId;

export interface ActionTypeRichTextComponent_message {
  type: "message";
  message: Empty;
}

export interface ActionTypeRichTextComponent_parameter {
  type: "parameter";
  parameter: ActionTypeParameterReference;
}

export interface ActionTypeRichTextComponent_parameterProperty {
  type: "parameterProperty";
  parameterProperty: ObjectParameterPropertyValue;
}

/**
 * Generic type that can used to define a string that should have Action execution details injected into it when
 * it is rendered.
 */
export type ActionTypeRichTextComponent =
  | ActionTypeRichTextComponent_message
  | ActionTypeRichTextComponent_parameter
  | ActionTypeRichTextComponent_parameterProperty;

export type ActionTypeRid = string;

export interface ActionTypeShape {
  about: LocalizedTitleAndDescription;
  actionLogRule?: ActionLogRuleShape | null | undefined;
  parameters: Record<ActionParameterShapeId, ActionParameterTypeShape>;
  parametersV2: Array<ActionTypeParameterReference>;
}

export interface AipAgentShape {
  about: LocalizedTitleAndDescription;
}

export interface AllowedObjectPropertyType_objectPropertyType {
  type: "objectPropertyType";
  objectPropertyType: ObjectPropertyType;
}

/**
 * Wrapper which refers to an property type and could support set of allowed types or more flexible constraints
 */
export type AllowedObjectPropertyType =
  AllowedObjectPropertyType_objectPropertyType;

/**
 * Profile name must be one of the specified names
 */
export interface AllowedProfileNamesConstraint {
  names: Array<SparkProfileName>;
}

/**
 * This shape represents a user-provided acknowledgement of letting OMS infer and apply any schema migrations
 * needed to perform a Marketplace installation. Specifically, if the installation requires dropping properties,
 * changing the type of a property, or any other breaking schema modification that requires schema migrations,
 * user acknowledgement of the risk of potential failing cast schema migrations or automatically applied drop
 * migrations is required to proceed with the installation. For more information on schema migrations, refer to
 * the docs on Managing Schema Changes in the Ontology.
 */
export interface AllowOntologySchemaMigrationsShape {
  about: LocalizedTitleAndDescription;
}

export interface AnySchema {
}

export interface AppConfigOutputShape {
  about: LocalizedTitleAndDescription;
}

export interface ArrayBaseType {
  elementType: PrimitiveBaseType;
}

/**
 * Represents an Array property type.
 */
export interface ArrayObjectPropertyType {
  elementType: PrimitiveObjectPropertyType;
}

export interface ArtifactsRepositoryShape {
  about: LocalizedTitleAndDescription;
}

/**
 * AttachmentListType specifies that this parameter must be a list of Attachment rids.
 */
export interface AttachmentListType {
}

/**
 * AttachmentType specifies that this parameter must be the rid of an Attachment.
 */
export interface AttachmentType {
}

export interface AudioDecodeFormat_flac {
  type: "flac";
  flac: FlacFormat;
}

export interface AudioDecodeFormat_mp2 {
  type: "mp2";
  mp2: Mp2Format;
}

export interface AudioDecodeFormat_mp3 {
  type: "mp3";
  mp3: Mp3Format;
}

export interface AudioDecodeFormat_mp4 {
  type: "mp4";
  mp4: Mp4AudioContainerFormat;
}

export interface AudioDecodeFormat_nistSphere {
  type: "nistSphere";
  nistSphere: NistSphereFormat;
}

export interface AudioDecodeFormat_ogg {
  type: "ogg";
  ogg: OggAudioContainerFormat;
}

export interface AudioDecodeFormat_wav {
  type: "wav";
  wav: WavFormat;
}

export interface AudioDecodeFormat_webm {
  type: "webm";
  webm: WebmAudioContainerFormat;
}

export type AudioDecodeFormat =
  | AudioDecodeFormat_flac
  | AudioDecodeFormat_mp2
  | AudioDecodeFormat_mp3
  | AudioDecodeFormat_mp4
  | AudioDecodeFormat_nistSphere
  | AudioDecodeFormat_ogg
  | AudioDecodeFormat_wav
  | AudioDecodeFormat_webm;

export interface AudioSchema {
  format: AudioDecodeFormat;
}

/**
 * This shape is used to refer to libraries that are produced by repositories created in Authoring.
 */
export interface AuthoringLibraryShape {
  about: LocalizedTitleAndDescription;
}

export interface AuthoringRepositoryShape {
  about: LocalizedTitleAndDescription;
}

export interface AutomationShape {
  about: LocalizedTitleAndDescription;
}

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

export interface BaseParameterType_decimal {
  type: "decimal";
  decimal: DecimalType;
}

export interface BaseParameterType_decimalList {
  type: "decimalList";
  decimalList: DecimalListType;
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

export interface BaseParameterType_interfaceObjectSetRid {
  type: "interfaceObjectSetRid";
  interfaceObjectSetRid: InterfaceObjectSetRidType;
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
  | BaseParameterType_decimal
  | BaseParameterType_decimalList
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
  | BaseParameterType_interfaceObjectSetRid
  | BaseParameterType_objectTypeReference
  | BaseParameterType_attachment
  | BaseParameterType_attachmentList
  | BaseParameterType_marking
  | BaseParameterType_markingList
  | BaseParameterType_mediaReference
  | BaseParameterType_geotimeSeriesReference
  | BaseParameterType_geotimeSeriesReferenceList
  | BaseParameterType_struct
  | BaseParameterType_structList;

export interface BaseType_primitive {
  type: "primitive";
  primitive: PrimitiveBaseType;
}

export interface BaseType_array {
  type: "array";
  array: ArrayBaseType;
}

export interface BaseType_structV2 {
  type: "structV2";
  structV2: StructV2BaseType;
}

export type BaseType = BaseType_primitive | BaseType_array | BaseType_structV2;

export interface BlobsterResourceInputShape {
  about: LocalizedTitleAndDescription;
  allowedTypes: Array<BlobsterResourceType>;
}

export interface BlobsterResourceOutputShape {
  about: LocalizedTitleAndDescription;
  type?: BlobsterResourceType | null | undefined;
}

/**
 * Represents the type of a Blobster resource. Should be the type from the RID in UPPERCASE. E.g. for an image
 * resource with RID `ri.blobster.main.image.<uuid>`, the resource type would be `IMAGE`.
 */
export type BlobsterResourceType = "IMAGE" | "DOCUMENT" | "CODE" | "BLOB";

/**
 * Internal identifiers with no meaning outside of the block they're found in.
 */
export type BlockInternalId = string;

export type BlockSetVersion = string;

/**
 * Matches ranges of versions. Use an `x` instead of a version number to represent wildcards. Once one level
 * has a wildcard, all subsequent ones must be as well (i.e. `1.x.4` is not supported, while `1.x.x` is). Any
 * missing levels are assumed to be wildcards (i.e. `1.x` is equivalent to `1.x.x`).
 */
export type BlockSetVersionMatcher = string;

/**
 * Range of versions. Contains all version from `from` (inclusive), to `until` (inclusive). For example, a
 * version range from version `1.3.4` to all versions with a major version of 2 would be:
 *
 * `{ from: "1.3.4", until: "2.x.x" }`
 *
 * This example will match versions such as `1.3.4`, `1.3.7`, `1.4.0`, `2.0.0`, `2.9.3`, but not `3.0.0`.
 */
export interface BlockSetVersionRange {
  from: BlockSetVersion;
  until: BlockSetVersionMatcher;
}

/**
 * Mirror enum for the `BlockSpecificConfiguration` union.
 */
export type BlockType =
  | "AIP_AGENT"
  | "APP_CONFIG_APP_BAR"
  | "APP_CONFIG_AUTHORIZATION_CHOOSER_PRESETS"
  | "APP_CONFIG_AUTHORIZATION_CHOOSER_RULES"
  | "APP_CONFIG_COSMOS"
  | "APP_CONFIG_GAIA"
  | "APP_CONFIG_TITANIUM"
  | "AUTHORING_REPOSITORY"
  | "AUTOMATION"
  | "BLOBSTER"
  | "CARBON"
  | "CHECKPOINT_CONFIG"
  | "CIPHER_CHANNEL"
  | "CIPHER_LICENSE"
  | "CODE_WORKSPACE"
  | "COMPASS"
  | "CONTOUR"
  | "DATA_HEALTH"
  | "DEPLOYED_APP"
  | "DIRECT_DATASOURCE"
  | "EDDIE_EDGE_PIPELINE"
  | "EDDIE_GROUP"
  | "EDITS_VIEW"
  | "EVALUATION_SUITE"
  | "FUNCTION_CONFIGURATIONS"
  | "FUNCTIONS"
  | "LOGIC"
  | "MACHINERY"
  | "MAGRITTE_CONNECTOR"
  | "MAGRITTE_EXPORT"
  | "MAGRITTE_SOURCE"
  | "MEDIA_SET"
  | "MODEL"
  | "MONITORING_VIEW"
  | "NAMED_CREDENTIAL"
  | "NETWORK_EGRESS_POLICY"
  | "NOTEPAD"
  | "OBJECT_SET"
  | "OBJECT_VIEW"
  | "MAP_RENDERING_SERVICE"
  | "ONTOLOGY"
  | "POD_MODEL"
  | "QUIVER"
  | "RESOURCE_UPDATES"
  | "RESTRICTED_VIEW"
  | "ROSETTA"
  | "SATELLITE_IMAGERY_MODEL"
  | "SCHEDULE"
  | "ONTOLOGY_SDK"
  | "SLATE"
  | "SOLUTION_DESIGN"
  | "STATIC_DATASET"
  | "STREAM_DATASET"
  | "TAURUS_WORKFLOW"
  | "TEMPLATES"
  | "TIME_SERIES_SYNC"
  | "THIRD_PARTY_APPLICATION"
  | "TRANSFORMS"
  | "VALUE_TYPE"
  | "VERTEX"
  | "VIRTUAL_TABLE"
  | "VORTEX"
  | "WALKTHROUGH"
  | "WEBHOOKS"
  | "WIDGET_SET"
  | "WORKFLOW_GRAPH"
  | "WORKSHOP"
  | "WRITEBACK";

export interface BmpFormat {
}

/**
 * BooleanListType specifies that this parameter must be a list of Booleans.
 */
export interface BooleanListType {
}

/**
 * BooleanType specifies that this parameter must be a Boolean.
 */
export interface BooleanType {
}

export interface CarbonWorkspaceInputShape {
  about: LocalizedTitleAndDescription;
}

export interface CarbonWorkspaceOutputShape {
  about: LocalizedTitleAndDescription;
}

export interface Changelog_markdown {
  type: "markdown";
  markdown: MarkdownText;
}

export type Changelog = Changelog_markdown;

export interface CheckpointConfigOutputShape {
  about: LocalizedTitleAndDescription;
}

export interface CipherAlgorithm_aesGcmSiv {
  type: "aesGcmSiv";
  aesGcmSiv: Void;
}

export interface CipherAlgorithm_aesSiv {
  type: "aesSiv";
  aesSiv: Void;
}

export interface CipherAlgorithm_sha512 {
  type: "sha512";
  sha512: Void;
}

export interface CipherAlgorithm_sha256 {
  type: "sha256";
  sha256: Void;
}

export interface CipherAlgorithm_imageScrambling {
  type: "imageScrambling";
  imageScrambling: Void;
}

export type CipherAlgorithm =
  | CipherAlgorithm_aesGcmSiv
  | CipherAlgorithm_aesSiv
  | CipherAlgorithm_sha512
  | CipherAlgorithm_sha256
  | CipherAlgorithm_imageScrambling;

export interface CipherChannelInputShape {
  about: LocalizedTitleAndDescription;
  allowedAlgorithms: Array<CipherAlgorithm>;
}

export interface CipherChannelOutputShape {
  about: LocalizedTitleAndDescription;
  algorithm: CipherAlgorithm;
}

export interface CipherLicenseInputShape {
  about: LocalizedTitleAndDescription;
  requiredPermits: Array<CipherLicensePermit>;
}

export interface CipherLicenseInputShapeV2 {
  about: LocalizedTitleAndDescription;
  allowedAlgorithms: Array<CipherAlgorithm>;
  allowedLicenseTypes: Array<CipherLicenseType>;
  requiredOperations: Array<CipherOperationType>;
}

export interface CipherLicenseOutputShape {
  about: LocalizedTitleAndDescription;
  algorithm: CipherAlgorithm;
  licenseType: CipherLicenseType;
  operations: Array<CipherOperationType>;
}

export interface CipherLicensePermit_rateLimitedRequestPermit {
  type: "rateLimitedRequestPermit";
  rateLimitedRequestPermit: RateLimitedRequestPermit;
}

export interface CipherLicensePermit_transformsRequestPermit {
  type: "transformsRequestPermit";
  transformsRequestPermit: TransformsRequestPermit;
}

export interface CipherLicensePermit_highTrustRequestPermit {
  type: "highTrustRequestPermit";
  highTrustRequestPermit: HighTrustRequestPermit;
}

export type CipherLicensePermit =
  | CipherLicensePermit_rateLimitedRequestPermit
  | CipherLicensePermit_transformsRequestPermit
  | CipherLicensePermit_highTrustRequestPermit;

export interface CipherLicenseType_operationalUserLicense {
  type: "operationalUserLicense";
  operationalUserLicense: Void;
}

export interface CipherLicenseType_dataManagerLicense {
  type: "dataManagerLicense";
  dataManagerLicense: Void;
}

export interface CipherLicenseType_adminLicense {
  type: "adminLicense";
  adminLicense: Void;
}

export type CipherLicenseType =
  | CipherLicenseType_operationalUserLicense
  | CipherLicenseType_dataManagerLicense
  | CipherLicenseType_adminLicense;

export interface CipherOperationType_encrypt {
  type: "encrypt";
  encrypt: Void;
}

export interface CipherOperationType_decrypt {
  type: "decrypt";
  decrypt: Void;
}

export interface CipherOperationType_hash {
  type: "hash";
  hash: Void;
}

export type CipherOperationType =
  | CipherOperationType_encrypt
  | CipherOperationType_decrypt
  | CipherOperationType_hash;

/**
 * Represents an encrypted property, generated by Cipher. It can essentially be treated as a string.
 */
export interface CipherTextPropertyType {
  plainTextType: PrimitiveObjectPropertyType;
}

export interface CodeWorkspaceInputShape {
  about: LocalizedTitleAndDescription;
  imageType: ContainerImageType;
}

export interface CodeWorkspaceLicenseInputShape {
  about: LocalizedTitleAndDescription;
  licenseProductType: LicenseProductType;
}

export interface CodeWorkspaceOutputShape {
  about: LocalizedTitleAndDescription;
  imageType: ContainerImageType;
}

export interface CompassFolderType {
}

/**
 * represents the intended purpose of the input.  An INSTALL_LOCATION will require INSTALL_IN permissions.
 * A REFERENCE would require USE_AS_INPUT permissions.
 */
export type CompassFolderTypeConstraint = "INSTALL_LOCATION" | "REFERENCE";

export interface CompassFolderTypeConstraints {
  constraints: Array<CompassFolderTypeConstraint>;
}

export interface CompassResourceInputShape {
  about: LocalizedTitleAndDescription;
  allowedTypes: Array<CompassResourceType>;
  typeConstraints: Array<CompassResourceTypeConstraints>;
}

export interface CompassResourceOutputShape {
  about: LocalizedTitleAndDescription;
  type: CompassResourceType;
}

export interface CompassResourceType_compassFolderType {
  type: "compassFolderType";
  compassFolderType: CompassFolderType;
}

export type CompassResourceType = CompassResourceType_compassFolderType;

export interface CompassResourceTypeConstraints_compassFolderTypeConstraints {
  type: "compassFolderTypeConstraints";
  compassFolderTypeConstraints: CompassFolderTypeConstraints;
}

export type CompassResourceTypeConstraints =
  CompassResourceTypeConstraints_compassFolderTypeConstraints;

/**
 * A user-written application hosted in Compute Modules.
 */
export interface ComputeModuleType {
}

export interface ConcreteArrayType {
  elementType: ConcreteDataType;
}

export interface ConcreteDataType_primitive {
  type: "primitive";
  primitive: ConcretePrimitiveDataType;
}

export interface ConcreteDataType_array {
  type: "array";
  array: ConcreteArrayType;
}

export interface ConcreteDataType_map {
  type: "map";
  map: ConcreteMapType;
}

export interface ConcreteDataType_struct {
  type: "struct";
  struct: ConcreteStructType;
}

/**
 * Concrete types (still correspond 1:1 with types of columns of foundry datasets) but including higher
 * order types such as arrays, maps, structs.
 */
export type ConcreteDataType =
  | ConcreteDataType_primitive
  | ConcreteDataType_array
  | ConcreteDataType_map
  | ConcreteDataType_struct;

export interface ConcreteDecimalType {
  precision: number;
  scale: number;
}

export interface ConcreteMapType {
  keyType: ConcreteDataType;
  valueType: ConcreteDataType;
}

export interface ConcretePrimitiveDataType_binary {
  type: "binary";
  binary: Void;
}

export interface ConcretePrimitiveDataType_boolean {
  type: "boolean";
  boolean: Void;
}

export interface ConcretePrimitiveDataType_byte {
  type: "byte";
  byte: Void;
}

export interface ConcretePrimitiveDataType_date {
  type: "date";
  date: Void;
}

export interface ConcretePrimitiveDataType_decimal {
  type: "decimal";
  decimal: ConcreteDecimalType;
}

export interface ConcretePrimitiveDataType_double {
  type: "double";
  double: Void;
}

export interface ConcretePrimitiveDataType_float {
  type: "float";
  float: Void;
}

export interface ConcretePrimitiveDataType_integer {
  type: "integer";
  integer: Void;
}

export interface ConcretePrimitiveDataType_long {
  type: "long";
  long: Void;
}

export interface ConcretePrimitiveDataType_short {
  type: "short";
  short: Void;
}

export interface ConcretePrimitiveDataType_string {
  type: "string";
  string: Void;
}

export interface ConcretePrimitiveDataType_timestamp {
  type: "timestamp";
  timestamp: Void;
}

/**
 * These types are not composite (reference other types), or generic. They represent (nullable) primitive types.
 */
export type ConcretePrimitiveDataType =
  | ConcretePrimitiveDataType_binary
  | ConcretePrimitiveDataType_boolean
  | ConcretePrimitiveDataType_byte
  | ConcretePrimitiveDataType_date
  | ConcretePrimitiveDataType_decimal
  | ConcretePrimitiveDataType_double
  | ConcretePrimitiveDataType_float
  | ConcretePrimitiveDataType_integer
  | ConcretePrimitiveDataType_long
  | ConcretePrimitiveDataType_short
  | ConcretePrimitiveDataType_string
  | ConcretePrimitiveDataType_timestamp;

export interface ConcreteStructElement {
  name: string;
  type: ConcreteDataType;
}

export interface ConcreteStructType {
  fields: Array<ConcreteStructElement>;
}

export type CondaExtension = "TAR_BZ2" | "CONDA";

/**
 * DEPRECATED - use CondaLocatorV2.
 * Reference a file in a conda files layout.
 */
export interface CondaLocator {
  path: string;
}

/**
 * Reference a file in a conda files layout. It's a copy of com.palantir.artifacts.api.conda.CondaLocator.
 */
export interface CondaLocatorV2 {
  buildString: string;
  extension: CondaExtension;
  name: string;
  platform: string;
  version: string;
}

/**
 * Represents the type of image used by the workspace.
 * A RSTUDIO workspace type will require a license to be provided.
 */
export type ContainerImageType =
  | "JUPYTER"
  | "RSTUDIO"
  | "DASH"
  | "STREAMLIT"
  | "RSHINY";

export interface ContourAnalysisShape {
  about: LocalizedTitleAndDescription;
}

export type CreationTimestamp = string;

export interface DataHealthCheckGroupShape {
  about: LocalizedTitleAndDescription;
}

export interface DataHealthCheckShape {
  about: LocalizedTitleAndDescription;
}

export interface DatasetLocator {
  branch: string;
  rid: string;
}

export interface DatasourceBuildRequirements {
  isBuildable: boolean;
}

export type DatasourceColumnReference = BlockInternalId;

export interface DatasourceColumnShape {
  about: LocalizedTitleAndDescription;
  datasource: TabularDatasourceReference;
  type: DatasourceColumnType;
  typeclasses: Array<DatasourceColumnTypeClass>;
}

export interface DatasourceColumnType_concrete {
  type: "concrete";
  concrete: ConcreteDataType;
}

export interface DatasourceColumnType_generic {
  type: "generic";
  generic: GenericDataType;
}

export type DatasourceColumnType =
  | DatasourceColumnType_concrete
  | DatasourceColumnType_generic;

export interface DatasourceColumnTypeClass_eddieDefined {
  type: "eddieDefined";
  eddieDefined: EddieDefinedTypeClass;
}

export interface DatasourceColumnTypeClass_valueType {
  type: "valueType";
  valueType: ValueTypeReference;
}

export type DatasourceColumnTypeClass =
  | DatasourceColumnTypeClass_eddieDefined
  | DatasourceColumnTypeClass_valueType;

export interface DatasourceLocator_stream {
  type: "stream";
  stream: StreamLocator;
}

export interface DatasourceLocator_dataset {
  type: "dataset";
  dataset: DatasetLocator;
}

export interface DatasourceLocator_restrictedView {
  type: "restrictedView";
  restrictedView: RestrictedViewLocator;
}

export interface DatasourceLocator_virtualTable {
  type: "virtualTable";
  virtualTable: VirtualTableLocator;
}

export type DatasourceLocator =
  | DatasourceLocator_stream
  | DatasourceLocator_dataset
  | DatasourceLocator_restrictedView
  | DatasourceLocator_virtualTable;

export interface DataType_stringType {
  type: "stringType";
  stringType: Void;
}

export interface DataType_booleanType {
  type: "booleanType";
  booleanType: Void;
}

export interface DataType_integerType {
  type: "integerType";
  integerType: Void;
}

export interface DataType_cronWithTimeZoneType {
  type: "cronWithTimeZoneType";
  cronWithTimeZoneType: Void;
}

export type DataType =
  | DataType_stringType
  | DataType_booleanType
  | DataType_integerType
  | DataType_cronWithTimeZoneType;

/**
 * DateListType specifies that this parameter must be a list of Dates.
 */
export interface DateListType {
}

/**
 * DateType specifies that this parameter must be a Date.
 */
export interface DateType {
}

/**
 * DecimalListType specifies that this parameter must be a list of Decimals.
 */
export interface DecimalListType {
  precision?: number | null | undefined;
  scale?: number | null | undefined;
}

/**
 * DecimalType specifies that this parameter must be a Decimal.
 */
export interface DecimalType {
  precision?: number | null | undefined;
  scale?: number | null | undefined;
}

export interface DeployedAppShape {
  about: LocalizedTitleAndDescription;
}

export interface DicomSchema {
}

export interface DocumentDecodeFormat_pdf {
  type: "pdf";
  pdf: PdfFormat;
}

export interface DocumentDecodeFormat_docx {
  type: "docx";
  docx: DocxFormat;
}

export interface DocumentDecodeFormat_txt {
  type: "txt";
  txt: TxtFormat;
}

export interface DocumentDecodeFormat_pptx {
  type: "pptx";
  pptx: PptxFormat;
}

export type DocumentDecodeFormat =
  | DocumentDecodeFormat_pdf
  | DocumentDecodeFormat_docx
  | DocumentDecodeFormat_txt
  | DocumentDecodeFormat_pptx;

export interface DocumentSchema {
  format: DocumentDecodeFormat;
}

export interface DocxFormat {
}

/**
 * DoubleListType specifies that this parameter must be a list of Doubles.
 */
export interface DoubleListType {
}

/**
 * DoubleType specifies that this parameter must be a Double.
 */
export interface DoubleType {
}

/**
 * Describes the built-in eddie logical type from the logical types in the Eddie registry. Must be an exact
 * match with all the defined fields. The metadata field is ignored for now.
 */
export interface EddieDefinedTypeClass {
  kind: string;
  name: string;
  version?: EddieDefinedTypeClassVersion | null | undefined;
}

/**
 * Describes the version of a column typeclass.
 */
export interface EddieDefinedTypeClassVersion {
  major: number;
  minor?: number | null | undefined;
  patch?: number | null | undefined;
}

/**
 * There are a number of valid parameter types in Eddie, from simple parameters like literals to more complex
 * parameters like list<expression>.
 * The shape parameter type describes which parameter must be passed when resolving this shape.
 */
export interface EddieEdgeParameterInputShape {
  about: LocalizedTitleAndDescription;
  type: EddieInputParameterType;
}

/**
 * The RID of a dataset input to a pipeline.
 */
export type EddieEdgePipelineInputDatasetRid = string;

/**
 * Never consumed by any downstream blocks but indicates that a block creates an Eddie pipeline.
 */
export interface EddieEdgePipelineOutputShape {
  about?: LocalizedTitleAndDescription | null | undefined;
}

/**
 * This will allow users to configure destination and spec options for a Geotime Target in Pipeline Builder.
 */
export interface EddieGeotimeConfigurationInputShape {
  about: LocalizedTitleAndDescription;
}

export interface EddieInputParameterType_primitive {
  type: "primitive";
  primitive: EddiePrimitiveParameterType;
}

/**
 * A list of renderable parameter types that marketplace <-> eddie supports.
 */
export type EddieInputParameterType = EddieInputParameterType_primitive;

/**
 * Parameter that represents literal value of a given type.
 * Instance type: LiteralParameter
 */
export interface EddieLiteralParameterType {
  additionalConstraints: Array<
    _api_eddie_transformations_api_LiteralConstraint
  >;
  requiredType: EddieTypeReference;
}

/**
 * DEPRECATED - Prefer EddieParameterShapeV2 as it contains only supported in the UI parameter types.
 *
 * Specifies an input parameter to an Eddie group.
 * There are a number of valid parameter types in Eddie, from simple parameters like literals to more complex
 * parameters like list<expression>.
 * The shape parameter type describes which parameter must be passed when resolving this shape.
 */
export interface EddieParameterShape {
  about: LocalizedTitleAndDescription;
  isOptional: boolean;
  type: _api_eddie_transformations_api_InputParameterType;
}

/**
 * There are a number of valid parameter types in Eddie, from simple parameters like literals to more complex
 * parameters like list<expression>.
 * The shape parameter type describes which parameter must be passed when resolving this shape.
 */
export interface EddieParameterShapeV2 {
  about: LocalizedTitleAndDescription;
  type: EddieInputParameterType;
}

/**
 * Never consumed by any downstream blocks but indicates that a block creates an Eddie pipeline.
 */
export interface EddiePipelineShape {
  about?: LocalizedTitleAndDescription | null | undefined;
}

/**
 * An Eddie Pipeline that may contain various UDFs.
 */
export interface EddiePipelineType {
}

export interface EddiePrimitiveParameterType_literal {
  type: "literal";
  literal: EddieLiteralParameterType;
}

export interface EddiePrimitiveParameterType_regex {
  type: "regex";
  regex: _api_eddie_transformations_api_RegexParameterType;
}

/**
 * This is a subset union of EddieInputParameterType
 */
export type EddiePrimitiveParameterType =
  | EddiePrimitiveParameterType_literal
  | EddiePrimitiveParameterType_regex;

export interface EddieReplayOptionShape {
  about: LocalizedTitleAndDescription;
  supportedReplayOptions: Array<EddieReplayOptionType>;
}

export type EddieReplayOptionType = "RESET_AND_REPLAY_FROM_OFFSET" | "RESET";

export interface EddieTypeReference_explicit {
  type: "explicit";
  explicit: _api_eddie_transformations_api_ExplicitType;
}

export type EddieTypeReference = EddieTypeReference_explicit;

/**
 * Magritte task type (also used to represent sync types)
 */
export type EdgeMagritteTaskType = string;

/**
 * This will allow users to configure magritte source configuration for the edge pipeline
 */
export interface EdgePipelineMagritteSourceInputShape {
  about: LocalizedTitleAndDescription;
  datasetRid?: EddieEdgePipelineInputDatasetRid | null | undefined;
  magritteSourceType: MagritteSourceType;
  magritteTaskType?: EdgeMagritteTaskType | null | undefined;
}

export interface Empty {
}

export interface EvaluationSuiteShape {
  about: LocalizedTitleAndDescription;
}

export interface FilesDatasourceInputShape {
  about: LocalizedTitleAndDescription;
  supportedTypes?: Array<FilesDatasourceInputType> | null | undefined;
}

export interface FilesDatasourceInputType_dataset {
  type: "dataset";
  dataset: Void;
}

export interface FilesDatasourceInputType_mediaSet {
  type: "mediaSet";
  mediaSet: MediaSetDatasourceType;
}

export type FilesDatasourceInputType =
  | FilesDatasourceInputType_dataset
  | FilesDatasourceInputType_mediaSet;

export interface FilesDatasourceLocator_dataset {
  type: "dataset";
  dataset: DatasetLocator;
}

export interface FilesDatasourceLocator_mediaSet {
  type: "mediaSet";
  mediaSet: MediaSetLocator;
}

export type FilesDatasourceLocator =
  | FilesDatasourceLocator_dataset
  | FilesDatasourceLocator_mediaSet;

export interface FilesDatasourceOutputShape {
  about: LocalizedTitleAndDescription;
  buildRequirements?: DatasourceBuildRequirements | null | undefined;
  datasourceType?: FilesDatasourceOutputType | null | undefined;
}

export interface FilesDatasourceOutputType_dataset {
  type: "dataset";
  dataset: Void;
}

export interface FilesDatasourceOutputType_mediaSet {
  type: "mediaSet";
  mediaSet: MediaSetDatasourceType;
}

export type FilesDatasourceOutputType =
  | FilesDatasourceOutputType_dataset
  | FilesDatasourceOutputType_mediaSet;

/**
 * Reference a file in an artifacts files layout.
 */
export interface FilesLocator {
  path: string;
}

export interface FlacFormat {
}

export interface FlinkProfileShape {
  about: LocalizedTitleAndDescription;
}

export interface FunctionConfigurationShape {
  about: LocalizedTitleAndDescription;
  function: FunctionReference;
}

export type FunctionContractApiName = string;

export type FunctionContractReference = BlockInternalId;

export interface FunctionContractShape {
  about: LocalizedTitleAndDescription;
  apiName: FunctionContractApiName;
  version: FunctionContractVersion;
}

/**
 * This version is enforced to be a semver string.
 */
export type FunctionContractVersion = string;

export type FunctionInputName = string;

export interface FunctionInputType {
  about: LocalizedTitleAndDescription;
  dataType: _api_functions_DataType;
  inputName?: FunctionInputName | null | undefined;
  required: boolean;
}

export interface FunctionOutputType_singleOutputType {
  type: "singleOutputType";
  singleOutputType: SingleOutputType;
}

export type FunctionOutputType = FunctionOutputType_singleOutputType;

export type FunctionReference = BlockInternalId;

export interface FunctionShape {
  about: LocalizedTitleAndDescription;
  contracts: Array<FunctionContractReference>;
  customTypes: Record<_api_functions_CustomTypeId, _api_functions_CustomType>;
  inputs: Array<FunctionInputType>;
  output: FunctionOutputType;
}

export interface FusionDocumentShape {
  about: LocalizedTitleAndDescription;
}

export interface GenericDataType_any {
  type: "any";
  any: Void;
}

export interface GenericDataType_anyDecimal {
  type: "anyDecimal";
  anyDecimal: Void;
}

export interface GenericDataType_oneOf {
  type: "oneOf";
  oneOf: Array<ConcreteDataType>;
}

/**
 * Describes generic types - i.e. multiple possibilities.
 * We can answer the question of whether a particular concrete type satisfies one of these generic types.
 */
export type GenericDataType =
  | GenericDataType_any
  | GenericDataType_anyDecimal
  | GenericDataType_oneOf;

/**
 * GeohashListType specifies that this parameter must be a list of Geohashes.
 */
export interface GeohashListType {
}

/**
 * GeohashType specifies that this parameter must be a Geohash.
 */
export interface GeohashType {
}

/**
 * GeoshapeListType specifies that this parameter must be a list of Geoshapes.
 */
export interface GeoshapeListType {
}

/**
 * GeoshapeType specifies that this parameter must be a Geoshape.
 */
export interface GeoshapeType {
}

export type GeotimeSeriesIntegrationRid = string;

export interface GeotimeSeriesIntegrationShape {
  about: LocalizedTitleAndDescription;
}

/**
 * GeotimeSeriesReferenceListType specifies that this parameter must be a list of GeotimeSeriesReferences.
 * valid allowedParameterValues: ParameterGeotimeSeriesReferenceOrEmpty
 * valid prefill DataValues: None
 */
export interface GeotimeSeriesReferenceListType {
}

/**
 * GeotimeSeriesReferenceType specifies that this parameter must be a GeotimeSeriesReference.
 * valid allowedParameterValues: ParameterGeotimeSeriesReferenceOrEmpty
 * valid prefill DataValues: None
 */
export interface GeotimeSeriesReferenceType {
}

export type GroupId = string;

/**
 * If included in a Cipher License, the user has the ability to perform Cipher operations without any limit and
 * without needing justification in high trust environments. This is the permit to use for using Cipher in Apps
 * like Pipelines Builder.
 */
export interface HighTrustRequestPermit {
  requestType: RequestType;
}

export interface ImageryDecodeFormat_tiff {
  type: "tiff";
  tiff: TiffFormat;
}

export interface ImageryDecodeFormat_nitf {
  type: "nitf";
  nitf: NitfFormat;
}

export interface ImageryDecodeFormat_jp2k {
  type: "jp2k";
  jp2k: Jpeg2000Format;
}

export interface ImageryDecodeFormat_jpg {
  type: "jpg";
  jpg: JpgFormat;
}

export interface ImageryDecodeFormat_png {
  type: "png";
  png: PngFormat;
}

export interface ImageryDecodeFormat_bmp {
  type: "bmp";
  bmp: BmpFormat;
}

export interface ImageryDecodeFormat_webp {
  type: "webp";
  webp: WebpFormat;
}

export type ImageryDecodeFormat =
  | ImageryDecodeFormat_tiff
  | ImageryDecodeFormat_nitf
  | ImageryDecodeFormat_jp2k
  | ImageryDecodeFormat_jpg
  | ImageryDecodeFormat_png
  | ImageryDecodeFormat_bmp
  | ImageryDecodeFormat_webp;

export interface ImagerySchema {
  format: ImageryDecodeFormat;
}

export type InputEditsSupport = "ANY" | "REQUIRED";

export type InputObjectBackendVersion = "V1_OR_V2" | "V2";

export interface InputShape_action {
  type: "action";
  action: ActionTypeShape;
}

export interface InputShape_actionParameter {
  type: "actionParameter";
  actionParameter: ActionTypeParameterShape;
}

export interface InputShape_allowOntologySchemaMigrations {
  type: "allowOntologySchemaMigrations";
  allowOntologySchemaMigrations: AllowOntologySchemaMigrationsShape;
}

export interface InputShape_aipAgent {
  type: "aipAgent";
  aipAgent: AipAgentShape;
}

export interface InputShape_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: ArtifactsRepositoryShape;
}

export interface InputShape_authoringLibrary {
  type: "authoringLibrary";
  authoringLibrary: AuthoringLibraryShape;
}

export interface InputShape_authoringRepository {
  type: "authoringRepository";
  authoringRepository: AuthoringRepositoryShape;
}

export interface InputShape_automation {
  type: "automation";
  automation: AutomationShape;
}

export interface InputShape_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: CarbonWorkspaceInputShape;
}

export interface InputShape_cipherLicense {
  type: "cipherLicense";
  cipherLicense: CipherLicenseInputShape;
}

export interface InputShape_cipherLicenseV2 {
  type: "cipherLicenseV2";
  cipherLicenseV2: CipherLicenseInputShapeV2;
}

export interface InputShape_blobsterResource {
  type: "blobsterResource";
  blobsterResource: BlobsterResourceInputShape;
}

export interface InputShape_cipherChannel {
  type: "cipherChannel";
  cipherChannel: CipherChannelInputShape;
}

export interface InputShape_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: CodeWorkspaceInputShape;
}

export interface InputShape_codeWorkspaceLicense {
  type: "codeWorkspaceLicense";
  codeWorkspaceLicense: CodeWorkspaceLicenseInputShape;
}

export interface InputShape_compassResource {
  type: "compassResource";
  compassResource: CompassResourceInputShape;
}

export interface InputShape_contourAnalysis {
  type: "contourAnalysis";
  contourAnalysis: ContourAnalysisShape;
}

export interface InputShape_dataHealthCheck {
  type: "dataHealthCheck";
  dataHealthCheck: DataHealthCheckShape;
}

export interface InputShape_dataHealthCheckGroup {
  type: "dataHealthCheckGroup";
  dataHealthCheckGroup: DataHealthCheckGroupShape;
}

export interface InputShape_datasourceColumn {
  type: "datasourceColumn";
  datasourceColumn: DatasourceColumnShape;
}

export interface InputShape_deployedApp {
  type: "deployedApp";
  deployedApp: DeployedAppShape;
}

export interface InputShape_eddieParameter {
  type: "eddieParameter";
  eddieParameter: EddieParameterShape;
}

export interface InputShape_eddieParameterV2 {
  type: "eddieParameterV2";
  eddieParameterV2: EddieParameterShapeV2;
}

export interface InputShape_eddiePipeline {
  type: "eddiePipeline";
  eddiePipeline: EddiePipelineShape;
}

export interface InputShape_eddieReplayOption {
  type: "eddieReplayOption";
  eddieReplayOption: EddieReplayOptionShape;
}

export interface InputShape_eddieGeotimeConfiguration {
  type: "eddieGeotimeConfiguration";
  eddieGeotimeConfiguration: EddieGeotimeConfigurationInputShape;
}

export interface InputShape_eddieEdgeParameter {
  type: "eddieEdgeParameter";
  eddieEdgeParameter: EddieEdgeParameterInputShape;
}

export interface InputShape_edgePipelineMagritteSource {
  type: "edgePipelineMagritteSource";
  edgePipelineMagritteSource: EdgePipelineMagritteSourceInputShape;
}

export interface InputShape_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: EvaluationSuiteShape;
}

export interface InputShape_filesDatasource {
  type: "filesDatasource";
  filesDatasource: FilesDatasourceInputShape;
}

export interface InputShape_flinkProfile {
  type: "flinkProfile";
  flinkProfile: FlinkProfileShape;
}

export interface InputShape_function {
  type: "function";
  function: FunctionShape;
}

export interface InputShape_functionContract {
  type: "functionContract";
  functionContract: FunctionContractShape;
}

export interface InputShape_fusionDocument {
  type: "fusionDocument";
  fusionDocument: FusionDocumentShape;
}

export interface InputShape_geotimeSeriesIntegration {
  type: "geotimeSeriesIntegration";
  geotimeSeriesIntegration: GeotimeSeriesIntegrationShape;
}

export interface InputShape_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeInputShape;
}

export interface InputShape_interfaceLinkType {
  type: "interfaceLinkType";
  interfaceLinkType: InterfaceLinkTypeInputShape;
}

export interface InputShape_interfacePropertyType {
  type: "interfacePropertyType";
  interfacePropertyType: InterfacePropertyTypeInputShape;
}

export interface InputShape_installPrefix {
  type: "installPrefix";
  installPrefix: InstallPrefixShape;
}

export interface InputShape_linkType {
  type: "linkType";
  linkType: LinkTypeInputShape;
}

export interface InputShape_languageModel {
  type: "languageModel";
  languageModel: LanguageModelShape;
}

export interface InputShape_logic {
  type: "logic";
  logic: LogicShape;
}

export interface InputShape_logicFunction {
  type: "logicFunction";
  logicFunction: LogicFunctionShape;
}

export interface InputShape_machinery {
  type: "machinery";
  machinery: MachineryProcessShape;
}

export interface InputShape_magritteConnection {
  type: "magritteConnection";
  magritteConnection: MagritteConnectionInputShape;
}

export interface InputShape_magritteExport {
  type: "magritteExport";
  magritteExport: MagritteExportShape;
}

export interface InputShape_magritteSource {
  type: "magritteSource";
  magritteSource: MagritteSourceInputShape;
}

export interface InputShape_magritteSourceConfigOverrides {
  type: "magritteSourceConfigOverrides";
  magritteSourceConfigOverrides: MagritteSourceConfigOverridesInputShape;
}

export interface InputShape_magritteStreamingExtractConfigOverrides {
  type: "magritteStreamingExtractConfigOverrides";
  magritteStreamingExtractConfigOverrides:
    MagritteStreamingExtractConfigOverridesInputShape;
}

export interface InputShape_markings {
  type: "markings";
  markings: MarkingsShape;
}

export interface InputShape_model {
  type: "model";
  model: ModelInputShape;
}

export interface InputShape_monitorView {
  type: "monitorView";
  monitorView: MonitorViewShape;
}

export interface InputShape_monocleGraph {
  type: "monocleGraph";
  monocleGraph: MonocleGraphShape;
}

export interface InputShape_multipassUserAttribute {
  type: "multipassUserAttribute";
  multipassUserAttribute: MultipassUserAttributeShape;
}

export interface InputShape_multipassGroup {
  type: "multipassGroup";
  multipassGroup: MultipassGroupShape;
}

export interface InputShape_namedCredential {
  type: "namedCredential";
  namedCredential: NamedCredentialShape;
}

export interface InputShape_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: NetworkEgressPolicyShape;
}

export interface InputShape_notepadDocument {
  type: "notepadDocument";
  notepadDocument: NotepadDocumentShape;
}

export interface InputShape_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: NotepadTemplateShape;
}

export interface InputShape_notepadTemplateParameter {
  type: "notepadTemplateParameter";
  notepadTemplateParameter: NotepadTemplateParameterShape;
}

export interface InputShape_objectInstance {
  type: "objectInstance";
  objectInstance: ObjectInstanceInputShape;
}

export interface InputShape_objectSet {
  type: "objectSet";
  objectSet: ObjectSetShape;
}

export interface InputShape_objectType {
  type: "objectType";
  objectType: ObjectTypeInputShape;
}

export interface InputShape_objectView {
  type: "objectView";
  objectView: ObjectViewShape;
}

export interface InputShape_objectViewTab {
  type: "objectViewTab";
  objectViewTab: ObjectViewTabShape;
}

export interface InputShape_ontologyDatasource {
  type: "ontologyDatasource";
  ontologyDatasource: OntologyDatasourceShape;
}

export interface InputShape_ontologyDatasourceRetention {
  type: "ontologyDatasourceRetention";
  ontologyDatasourceRetention: OntologyDatasourceRetentionShape;
}

export interface InputShape_ontologySdk {
  type: "ontologySdk";
  ontologySdk: OntologySdkShape;
}

export interface InputShape_overrideOntologyEntityApiNames {
  type: "overrideOntologyEntityApiNames";
  overrideOntologyEntityApiNames: OverrideOntologyEntityApiNamesShape;
}

export interface InputShape_parameter {
  type: "parameter";
  parameter: ParameterInputShape;
}

export interface InputShape_property {
  type: "property";
  property: PropertyInputShape;
}

export interface InputShape_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: QuiverDashboardShape;
}

export interface InputShape_schedule {
  type: "schedule";
  schedule: ScheduleShape;
}

export interface InputShape_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SharedPropertyTypeInputShape;
}

export interface InputShape_slateApplication {
  type: "slateApplication";
  slateApplication: SlateApplicationInputShape;
}

export interface InputShape_solutionDesign {
  type: "solutionDesign";
  solutionDesign: SolutionDesignShape;
}

export interface InputShape_sparkProfile {
  type: "sparkProfile";
  sparkProfile: SparkProfileShape;
}

export interface InputShape_tabularDatasource {
  type: "tabularDatasource";
  tabularDatasource: TabularDatasourceInputShape;
}

export interface InputShape_taurusWorkflow {
  type: "taurusWorkflow";
  taurusWorkflow: TaurusWorkflowShape;
}

export interface InputShape_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: ThirdPartyApplicationShape;
}

export interface InputShape_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: TimeSeriesSyncShape;
}

export interface InputShape_valueType {
  type: "valueType";
  valueType: ValueTypeShape;
}

export interface InputShape_vectorWorkbook {
  type: "vectorWorkbook";
  vectorWorkbook: VectorWorkbookShape;
}

export interface InputShape_vertexTemplate {
  type: "vertexTemplate";
  vertexTemplate: VertexTemplateShape;
}

export interface InputShape_vortexTemplate {
  type: "vortexTemplate";
  vortexTemplate: VortexTemplateShape;
}

export interface InputShape_walkthrough {
  type: "walkthrough";
  walkthrough: WalkthroughShape;
}

export interface InputShape_webhook {
  type: "webhook";
  webhook: WebhookShape;
}

export interface InputShape_widget {
  type: "widget";
  widget: WidgetShape;
}

export interface InputShape_widgetSet {
  type: "widgetSet";
  widgetSet: WidgetSetShape;
}

export interface InputShape_workshopApplication {
  type: "workshopApplication";
  workshopApplication: WorkshopApplicationInputShape;
}

export interface InputShape_workshopApplicationSaveLocation {
  type: "workshopApplicationSaveLocation";
  workshopApplicationSaveLocation: WorkshopApplicationSaveLocationInputShape;
}

/**
 * An input must have an about field of type `LocalizedTitleAndDescription`. This is what the FE uses to render
 * the input. Users may override this default about about using `updatePendingInputShapeAbout`.
 */
export type InputShape =
  | InputShape_action
  | InputShape_actionParameter
  | InputShape_allowOntologySchemaMigrations
  | InputShape_aipAgent
  | InputShape_artifactsRepository
  | InputShape_authoringLibrary
  | InputShape_authoringRepository
  | InputShape_automation
  | InputShape_carbonWorkspace
  | InputShape_cipherLicense
  | InputShape_cipherLicenseV2
  | InputShape_blobsterResource
  | InputShape_cipherChannel
  | InputShape_codeWorkspace
  | InputShape_codeWorkspaceLicense
  | InputShape_compassResource
  | InputShape_contourAnalysis
  | InputShape_dataHealthCheck
  | InputShape_dataHealthCheckGroup
  | InputShape_datasourceColumn
  | InputShape_deployedApp
  | InputShape_eddieParameter
  | InputShape_eddieParameterV2
  | InputShape_eddiePipeline
  | InputShape_eddieReplayOption
  | InputShape_eddieGeotimeConfiguration
  | InputShape_eddieEdgeParameter
  | InputShape_edgePipelineMagritteSource
  | InputShape_evaluationSuite
  | InputShape_filesDatasource
  | InputShape_flinkProfile
  | InputShape_function
  | InputShape_functionContract
  | InputShape_fusionDocument
  | InputShape_geotimeSeriesIntegration
  | InputShape_interfaceType
  | InputShape_interfaceLinkType
  | InputShape_interfacePropertyType
  | InputShape_installPrefix
  | InputShape_linkType
  | InputShape_languageModel
  | InputShape_logic
  | InputShape_logicFunction
  | InputShape_machinery
  | InputShape_magritteConnection
  | InputShape_magritteExport
  | InputShape_magritteSource
  | InputShape_magritteSourceConfigOverrides
  | InputShape_magritteStreamingExtractConfigOverrides
  | InputShape_markings
  | InputShape_model
  | InputShape_monitorView
  | InputShape_monocleGraph
  | InputShape_multipassUserAttribute
  | InputShape_multipassGroup
  | InputShape_namedCredential
  | InputShape_networkEgressPolicy
  | InputShape_notepadDocument
  | InputShape_notepadTemplate
  | InputShape_notepadTemplateParameter
  | InputShape_objectInstance
  | InputShape_objectSet
  | InputShape_objectType
  | InputShape_objectView
  | InputShape_objectViewTab
  | InputShape_ontologyDatasource
  | InputShape_ontologyDatasourceRetention
  | InputShape_ontologySdk
  | InputShape_overrideOntologyEntityApiNames
  | InputShape_parameter
  | InputShape_property
  | InputShape_quiverDashboard
  | InputShape_schedule
  | InputShape_sharedPropertyType
  | InputShape_slateApplication
  | InputShape_solutionDesign
  | InputShape_sparkProfile
  | InputShape_tabularDatasource
  | InputShape_taurusWorkflow
  | InputShape_thirdPartyApplication
  | InputShape_timeSeriesSync
  | InputShape_valueType
  | InputShape_vectorWorkbook
  | InputShape_vertexTemplate
  | InputShape_vortexTemplate
  | InputShape_walkthrough
  | InputShape_webhook
  | InputShape_widget
  | InputShape_widgetSet
  | InputShape_workshopApplication
  | InputShape_workshopApplicationSaveLocation;

export interface InputShapeMetadata {
  isAccessedInReconcile: boolean;
  isOptional: boolean;
  preallocateAccessRequirements?:
    | PreallocateAccessRequirementType
    | null
    | undefined;
  reconcileAccessRequirements?:
    | ReconcileAccessRequirementType
    | null
    | undefined;
}

export interface InstallationMode_bootstrap {
  type: "bootstrap";
  bootstrap: Void;
}

export interface InstallationMode_production {
  type: "production";
  production: Void;
}

export interface InstallationMode_singleton {
  type: "singleton";
  singleton: Void;
}

/**
 * The installation mode associated with the product. The expectation is that integrators do not do anything with
 * bootstrap or production. For singleton the expectation is that integrations validate and enforce api name
 * uniqueness in the namespace/ontology.
 */
export type InstallationMode =
  | InstallationMode_bootstrap
  | InstallationMode_production
  | InstallationMode_singleton;

/**
 * This shape is intended to represent a user-provided string input that will be applied
 * as a prefix to display names of output resources. The mechanism for applying this prefix
 * will depend on the service responsible for creating the resource and the resource type.
 *
 * For example a prefix "demo" applied to an Object Type with display name "Passenger" will
 * result in the display name being "[Demo] Passenger".
 *
 * A few constraints that Marketplace will enforce:
 * - Within a block-set all blocks must use the same prefix. At packaging time the `ResolvedInstallPrefixShape`
 * should have "" (empty string) prefix so prefix inputs from across blocks will all get
 * coalesced by Installation Hints.
 * - For every block there can only be at most one InstallPrefix input, else the mapping of prefix -> output
 * resource becomes ambiguous.
 */
export interface InstallPrefixShape {
  about: LocalizedTitleAndDescription;
}

/**
 * IntegerListType specifies that this parameter must be a list of Integers.
 */
export interface IntegerListType {
}

/**
 * IntegerType specifies that this parameter must be an Integer.
 */
export interface IntegerType {
}

export type InterfaceLinkTypeCardinality = "SINGLE" | "MANY";

export interface InterfaceLinkTypeInputShape {
  about: LocalizedTitleAndDescription;
  cardinality: InterfaceLinkTypeCardinality;
  interfaceType: InterfaceTypeReference;
  linkedEntityType: LinkedEntityTypeReference;
  required: boolean;
}

export interface InterfaceLinkTypeOutputShape {
  about: LocalizedTitleAndDescription;
  cardinality: InterfaceLinkTypeCardinality;
  interfaceType: InterfaceTypeReference;
  linkedEntityType: LinkedEntityTypeReference;
  required: boolean;
}

export type InterfaceLinkTypeReference = BlockInternalId;

export type InterfaceLinkTypeRid = string;

/**
 * InterfaceObjectSetRidType specifies that this parameter must be an ObjectSetRid of ObjectTypes implementing
 * the specified interface type.
 */
export interface InterfaceObjectSetRidType {
  interfaceTypeRid: InterfaceTypeReference;
}

export interface InterfaceParameterPropertyValue {
  parameterId: ActionTypeParameterReference;
  sharedPropertyTypeRid: SharedPropertyTypeReference;
}

export interface InterfacePropertyTypeInputShape {
  about: LocalizedTitleAndDescription;
  interfaceType: InterfaceTypeReference;
  requireImplementation: boolean;
  sharedPropertyType?: SharedPropertyTypeReference | null | undefined;
  type: AllowedObjectPropertyType;
}

export interface InterfacePropertyTypeOutputShape {
  about: LocalizedTitleAndDescription;
  interfaceType: InterfaceTypeReference;
  requireImplementation: boolean;
  sharedPropertyType?: SharedPropertyTypeReference | null | undefined;
  type: ObjectPropertyType;
}

export type InterfacePropertyTypeReference = BlockInternalId;

export type InterfacePropertyTypeRid = string;

export interface InterfaceReferenceListType {
  interfaceTypeRid: InterfaceTypeReference;
}

export interface InterfaceReferenceType {
  interfaceTypeRid: InterfaceTypeReference;
}

export interface InterfaceTypeInputShape {
  about: LocalizedTitleAndDescription;
  links: Array<InterfaceLinkTypeReference>;
  properties: Array<SharedPropertyTypeReference>;
  propertiesV2: Array<InterfacePropertyTypeReference>;
}

export interface InterfaceTypeOutputShape {
  about: LocalizedTitleAndDescription;
  extendsInterfaces: Array<InterfaceTypeReference>;
  links: Array<InterfaceLinkTypeReference>;
  properties: Array<SharedPropertyTypeReference>;
  propertiesV2: Array<InterfacePropertyTypeReference>;
}

export type InterfaceTypeReference = BlockInternalId;

export type InterfaceTypeRid = string;

export interface Jpeg2000Format {
}

export interface JpgFormat {
}

export interface LanguageModelShape {
  about: LocalizedTitleAndDescription;
}

/**
 * Represents the type of product the license supports.
 */
export type LicenseProductType = "RSTUDIO";

export interface LinkedEntityTypeReference_objectType {
  type: "objectType";
  objectType: ObjectTypeReference;
}

export interface LinkedEntityTypeReference_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeReference;
}

export type LinkedEntityTypeReference =
  | LinkedEntityTypeReference_objectType
  | LinkedEntityTypeReference_interfaceType;

export interface LinkTypeInputShape_oneToMany {
  type: "oneToMany";
  oneToMany: LinkTypeOneToManyShape;
}

export interface LinkTypeInputShape_manyToMany {
  type: "manyToMany";
  manyToMany: LinkTypeManyToManyInputShape;
}

export interface LinkTypeInputShape_intermediary {
  type: "intermediary";
  intermediary: LinkTypeIntermediaryShape;
}

export type LinkTypeInputShape =
  | LinkTypeInputShape_oneToMany
  | LinkTypeInputShape_manyToMany
  | LinkTypeInputShape_intermediary;

export interface LinkTypeIntermediaryShape {
  about: LocalizedTitleAndDescription;
  aToIntermediaryLinkTypeShapeId: LinkTypeReference;
  intermediaryObjectTypeShapeId: ObjectTypeReference;
  intermediaryToBLinkTypeShapeId: LinkTypeReference;
  objectTypeAShapeId: ObjectTypeReference;
  objectTypeAToBLinkMetadata: LocalizedTitleAndDescription;
  objectTypeBShapeId: ObjectTypeReference;
  objectTypeBToALinkMetadata: LocalizedTitleAndDescription;
}

export interface LinkTypeManyToManyInputShape {
  about: LocalizedTitleAndDescription;
  editsSupport: InputEditsSupport;
  objectsBackendVersion: InputObjectBackendVersion;
  objectTypeAToBLinkMetadata: LocalizedTitleAndDescription;
  objectTypeBToALinkMetadata: LocalizedTitleAndDescription;
  objectTypeShapeIdA: ObjectTypeReference;
  objectTypeShapeIdB: ObjectTypeReference;
}

export interface LinkTypeManyToManyOutputShape {
  about: LocalizedTitleAndDescription;
  editsSupport: OutputEditsSupport;
  objectsBackendVersion: OutputObjectBackendVersion;
  objectTypeAToBLinkMetadata: LocalizedTitleAndDescription;
  objectTypeBToALinkMetadata: LocalizedTitleAndDescription;
  objectTypeShapeIdA: ObjectTypeReference;
  objectTypeShapeIdB: ObjectTypeReference;
}

export interface LinkTypeOneToManyShape {
  about: LocalizedTitleAndDescription;
  cardinalityHint?: OneToManyLinkCardinalityHint | null | undefined;
  manyToOneLinkMetadata: LocalizedTitleAndDescription;
  objectTypeShapeIdManySide: ObjectTypeReference;
  objectTypeShapeIdOneSide: ObjectTypeReference;
  oneToManyLinkMetadata: LocalizedTitleAndDescription;
}

export interface LinkTypeOutputShape_oneToMany {
  type: "oneToMany";
  oneToMany: LinkTypeOneToManyShape;
}

export interface LinkTypeOutputShape_manyToMany {
  type: "manyToMany";
  manyToMany: LinkTypeManyToManyOutputShape;
}

export interface LinkTypeOutputShape_intermediary {
  type: "intermediary";
  intermediary: LinkTypeIntermediaryShape;
}

export type LinkTypeOutputShape =
  | LinkTypeOutputShape_oneToMany
  | LinkTypeOutputShape_manyToMany
  | LinkTypeOutputShape_intermediary;

export type LinkTypeReference = BlockInternalId;

export type LinkTypeRid = string;

/**
 * A language/locale identifier as per [RFC-5646](https://datatracker.ietf.org/doc/html/rfc5646).
 *
 * When matching, will preferentially match the most specific applicable identifier (e.g. `en-GB`
 * will match to `en` only if `en-GB` isn't available).
 */
export type Locale = string;

/**
 * A localized description for the given resource.
 */
export type LocalizedDescription = string;

/**
 * A localized title for the given resource.
 */
export type LocalizedTitle = string;

/**
 * A localization-aware title and description.
 */
export interface LocalizedTitleAndDescription {
  fallbackDescription: string;
  fallbackTitle: string;
  localizedDescription: Record<Locale, LocalizedDescription>;
  localizedTitle: Record<Locale, LocalizedTitle>;
}

/**
 * / This is the shape of a single LogicFunction pinned at a VersionId within a LogicFile. A LogicFile might have many LogicFunctions, and many versions of each function. The LogicFunctionShape typically has a 1x1 mapping with a function registry function
 */
export interface LogicFunctionShape {
  about: LocalizedTitleAndDescription;
  inputs: Array<LogicInputArgument>;
  logic: LogicReference;
  output: LogicOutputArgument;
}

export interface LogicInputArgument {
  about: LocalizedTitleAndDescription;
  input: LogicInputParameterType;
}

export interface LogicInputParameterType_unspecified {
  type: "unspecified";
  unspecified: UnspecifiedParameterType;
}

/**
 * A list of renderable parameter types that marketplace <-> eddie supports.
 * For now we only use
 */
export type LogicInputParameterType = LogicInputParameterType_unspecified;

export interface LogicOutputArgument {
  about: LocalizedTitleAndDescription;
  input: LogicOutputParameterType;
}

export interface LogicOutputParameterType_unspecified {
  type: "unspecified";
  unspecified: UnspecifiedParameterType;
}

/**
 * A list of renderable output types that marketplace <-> Eddie supports.
 */
export type LogicOutputParameterType = LogicOutputParameterType_unspecified;

export type LogicReference = BlockInternalId;

/**
 * / This is the shape of the Logic compass resource
 */
export interface LogicShape {
  about: LocalizedTitleAndDescription;
}

/**
 * LongListType specifies that this parameter must be a list of Longs.
 */
export interface LongListType {
}

/**
 * LongType specifies that this parameter must be a Long.
 */
export interface LongType {
}

export interface MachineryProcessShape {
  about: LocalizedTitleAndDescription;
}

export type MagritteApiName = string;

export interface MagritteConnectionInputShape {
  about: LocalizedTitleAndDescription;
  connectionType: MagritteConnectionType;
  sourceReference: MagritteSourceReference;
}

/**
 * The type of connection. e.g. "http".
 */
export type MagritteConnectionType = string;

export interface MagritteExportShape {
  about: LocalizedTitleAndDescription;
}

/**
 * Output shape representing Magritte batch extracts.
 */
export interface MagritteExtractOutputShape {
  about: LocalizedTitleAndDescription;
}

export type MagritteSecretName = string;

export interface MagritteSourceConfigOverridesInputShape {
  about: LocalizedTitleAndDescription;
  stableId: StableShapeIdentifier;
}

export interface MagritteSourceInputShape {
  about: LocalizedTitleAndDescription;
  requiredApiName?: MagritteApiName | null | undefined;
  requiredSecrets: Array<MagritteSecretName>;
  sourceType: MagritteSourceType;
  sourceUsageRestrictions: Array<MagritteSourceUsageRestriction>;
}

export interface MagritteSourceOutputShape {
  about: LocalizedTitleAndDescription;
  sourceType: MagritteSourceType;
}

export type MagritteSourceReference = BlockInternalId;

export type MagritteSourceType = string;

export interface MagritteSourceUsageRestriction_stemmaRepository {
  type: "stemmaRepository";
  stemmaRepository: StemmaRepositoryType;
}

export interface MagritteSourceUsageRestriction_computeModule {
  type: "computeModule";
  computeModule: ComputeModuleType;
}

export interface MagritteSourceUsageRestriction_eddiePipeline {
  type: "eddiePipeline";
  eddiePipeline: EddiePipelineType;
}

export type MagritteSourceUsageRestriction =
  | MagritteSourceUsageRestriction_stemmaRepository
  | MagritteSourceUsageRestriction_computeModule
  | MagritteSourceUsageRestriction_eddiePipeline;

export interface MagritteStreamingExtractConfigOverridesInputShape {
  about: LocalizedTitleAndDescription;
  stableId: StableShapeIdentifier;
}

/**
 * Output shape representing Magritte streaming Extracts.
 */
export interface MagritteStreamingExtractOutputShape {
  about: LocalizedTitleAndDescription;
}

export interface MapRendererSetOutputShape {
  about: LocalizedTitleAndDescription;
}

export interface MapRendererSetOutputShapeV2 {
  about: LocalizedTitleAndDescription;
}

export type MarkdownText = string;

/**
 * MarkingListType specifies that this parameter must be a list of Markings.
 */
export interface MarkingListType {
}

/**
 * MarkingOperation defines the level of user permissions required to install a package with this Marking. For
 * DECLASSIFY, the user must have declassify permissions on the marking. For USE, the user must have use
 * permissions on the marking. For NONE, no permissions are required to use this marking. NONE should only be set
 * by integrations that set Marking constraints on resources (e.g. the Ontology integration with Marking property
 * types).
 */
export type MarkingOperation = "DECLASSIFY" | "USE" | "NONE";

export interface MarkingsShape {
  about: LocalizedTitleAndDescription;
  affectedShapes: Array<BlockInternalId>;
  operation: MarkingOperation;
  sizeConstraints?: MarkingsSizeConstraints | null | undefined;
  stableId?: StableShapeIdentifier | null | undefined;
  supportedMarkingsType?: SupportedMarkingsType | null | undefined;
}

export interface MarkingsSizeConstraints {
  maxNumberInclusive: number;
  minNumberInclusive: number;
}

/**
 * MarkingType specifies that this parameter must be a CBAC or Madatory Marking type.
 */
export interface MarkingType {
}

export interface MavenLocator {
  path: string;
}

/**
 * MediaReferenceType specifies that this parameter must be a MediaReference.
 */
export interface MediaReferenceType {
}

export interface MediaSchema_document {
  type: "document";
  document: DocumentSchema;
}

export interface MediaSchema_any {
  type: "any";
  any: Void;
}

export interface MediaSchema_unspecified {
  type: "unspecified";
  unspecified: Void;
}

/**
 * deprecated
 */
export type MediaSchema =
  | MediaSchema_document
  | MediaSchema_any
  | MediaSchema_unspecified;

/**
 * deprecated
 */
export type MediaSchemaType =
  | "ANY"
  | "IMAGERY"
  | "AUDIO"
  | "VIDEO"
  | "DOCUMENT"
  | "DICOM"
  | "SPREADSHEET"
  | "MULTIMODAL";

export interface MediaSchemaTypeV2_any {
  type: "any";
  any: AnySchema;
}

export interface MediaSchemaTypeV2_imagery {
  type: "imagery";
  imagery: ImagerySchema;
}

export interface MediaSchemaTypeV2_audio {
  type: "audio";
  audio: AudioSchema;
}

export interface MediaSchemaTypeV2_document {
  type: "document";
  document: DocumentSchema;
}

export interface MediaSchemaTypeV2_dicom {
  type: "dicom";
  dicom: DicomSchema;
}

export interface MediaSchemaTypeV2_spreadsheet {
  type: "spreadsheet";
  spreadsheet: SpreadsheetSchema;
}

export interface MediaSchemaTypeV2_video {
  type: "video";
  video: VideoSchema;
}

export interface MediaSchemaTypeV2_multiModal {
  type: "multiModal";
  multiModal: MultiModalSchema;
}

/**
 * updated media schema copied from mio-api without additional constraints
 */
export type MediaSchemaTypeV2 =
  | MediaSchemaTypeV2_any
  | MediaSchemaTypeV2_imagery
  | MediaSchemaTypeV2_audio
  | MediaSchemaTypeV2_document
  | MediaSchemaTypeV2_dicom
  | MediaSchemaTypeV2_spreadsheet
  | MediaSchemaTypeV2_video
  | MediaSchemaTypeV2_multiModal;

export interface MediaSetDatasourceType {
  mediaSchema: MediaSchema;
  mediaSchemaType?: MediaSchemaType | null | undefined;
  mediaSchemaTypeV2?: MediaSchemaTypeV2 | null | undefined;
  pathPolicy: PathPolicy;
  transactionPolicy?: MediaSetTransactionPolicy | null | undefined;
}

export interface MediaSetLocator {
  branch: string;
  rid: string;
}

export interface MediaSetTransactionPolicy_any {
  type: "any";
  any: Void;
}

export interface MediaSetTransactionPolicy_batchTransactions {
  type: "batchTransactions";
  batchTransactions: Void;
}

export interface MediaSetTransactionPolicy_noTransactions {
  type: "noTransactions";
  noTransactions: Void;
}

export type MediaSetTransactionPolicy =
  | MediaSetTransactionPolicy_any
  | MediaSetTransactionPolicy_batchTransactions
  | MediaSetTransactionPolicy_noTransactions;

export interface MkvVideoContainerFormat {
}

export interface ModelInputShape {
  about: LocalizedTitleAndDescription;
  allowedTypes: Array<ModelType>;
  type: ModelType;
}

export interface ModelOutputShape {
  about: LocalizedTitleAndDescription;
  buildRequirements?: DatasourceBuildRequirements | null | undefined;
  type: ModelType;
}

export interface ModelType_container {
  type: "container";
  container: Void;
}

export interface ModelType_binary {
  type: "binary";
  binary: Void;
}

export interface ModelType_modelSourceNotMarketplaceCompatible {
  type: "modelSourceNotMarketplaceCompatible";
  modelSourceNotMarketplaceCompatible: Void;
}

export type ModelType =
  | ModelType_container
  | ModelType_binary
  | ModelType_modelSourceNotMarketplaceCompatible;

export interface MonitorShape {
  about: LocalizedTitleAndDescription;
}

export interface MonitorViewShape {
  about: LocalizedTitleAndDescription;
}

export interface MonocleGraphShape {
  about: LocalizedTitleAndDescription;
}

export interface MovVideoContainerFormat {
}

export interface Mp2Format {
}

export interface Mp3Format {
}

export interface Mp4AudioContainerFormat_singleStream {
  type: "singleStream";
  singleStream: SingleStreamMp4AudioContainerFormat;
}

/**
 * An audio only mp4 container. Does not contain any non-audio streams.
 */
export type Mp4AudioContainerFormat = Mp4AudioContainerFormat_singleStream;

export interface Mp4VideoContainerFormat {
}

export interface MultiModalSchema {
}

export interface MultipassGroupShape {
  about: LocalizedTitleAndDescription;
}

export interface MultipassUserAttributeShape {
  about: LocalizedTitleAndDescription;
}

export interface NamedCredentialShape {
  about: LocalizedTitleAndDescription;
  secretNames: Array<SecretName>;
}

export interface NetworkEgressPolicyShape {
  about: LocalizedTitleAndDescription;
}

/**
 * Although this often has the file extension .wav, it's a distinct format.
 * See https://www1.icsi.berkeley.edu/Speech/faq/wavfile-fmts.html
 */
export interface NistSphereFormat {
}

export interface NitfFormat {
}

/**
 * Notepad document that can be opened on its own or referenced in Workshop or Carbon.
 */
export interface NotepadDocumentShape {
  about: LocalizedTitleAndDescription;
}

export type NotepadTemplateParameterReference = BlockInternalId;

export interface NotepadTemplateParameterShape {
  about: LocalizedTitleAndDescription;
  template: NotepadTemplateReference;
  type: NotepadTemplateParameterType;
}

export type NotepadTemplateParameterType =
  | "DATE"
  | "NUMBER"
  | "OBJECT"
  | "OBJECT_SET"
  | "STRING"
  | "TIMESTAMP";

export type NotepadTemplateReference = BlockInternalId;

/**
 * Notepad template that serves as a blueprint for generating new documents based on inputs.
 */
export interface NotepadTemplateShape {
  about: LocalizedTitleAndDescription;
  parameters: Array<NotepadTemplateParameterReference>;
}

export interface NpmLocator {
  name: string;
  version: string;
}

export interface ObjectInstanceInputShape {
  about: LocalizedTitleAndDescription;
  objectTypeIdentifier: ObjectTypeReference;
}

export interface ObjectParameterPropertyValue {
  parameterId: ActionTypeParameterReference;
  propertyTypeId: ObjectTypePropertyReference;
}

export interface ObjectPropertyType_primitive {
  type: "primitive";
  primitive: PrimitiveObjectPropertyType;
}

export interface ObjectPropertyType_array {
  type: "array";
  array: ArrayObjectPropertyType;
}

/**
 * Wrapper which refers to an Ontology property type and supports describing complex property types (array).
 */
export type ObjectPropertyType =
  | ObjectPropertyType_primitive
  | ObjectPropertyType_array;

/**
 * ObjectReferenceListType specifies that this parameter must be a list of ObjectLocators.
 */
export interface ObjectReferenceListType {
  objectTypeId: ObjectTypeReference;
}

/**
 * ObjectReferenceType specifies that this parameter must be an ObjectLocator.
 */
export interface ObjectReferenceType {
  objectTypeId: ObjectTypeReference;
}

/**
 * ObjectSetRidType specifies that this parameter must be an ObjectSetRid.
 */
export interface ObjectSetRidType {
  objectTypeId: ObjectTypeReference;
}

export interface ObjectSetShape {
  about: LocalizedTitleAndDescription;
}

export interface ObjectTypeInputShape {
  about: LocalizedTitleAndDescription;
  editsSupport: InputEditsSupport;
  objectsBackendVersion: InputObjectBackendVersion;
  propertyTypes: Array<ObjectTypePropertyReference>;
}

export interface ObjectTypeOutputShape {
  about: LocalizedTitleAndDescription;
  editsSupport: OutputEditsSupport;
  objectsBackendVersion: OutputObjectBackendVersion;
  propertyTypes: Array<ObjectTypePropertyReference>;
}

export type ObjectTypePropertyReference = BlockInternalId;

export type ObjectTypeReference = BlockInternalId;

/**
 * An ObjectTypeReferenceType can be used to supply an object type to a function. This is useful for
 * addInterfaceRule where you need to specify what type of object you're creating.
 * NOTE: this is NOT an object instance.
 */
export interface ObjectTypeReferenceType {
}

export type ObjectTypeRid = string;

export type ObjectViewReference = BlockInternalId;

export interface ObjectViewShape {
  about: LocalizedTitleAndDescription;
  objectType: ObjectTypeReference;
  tabs: Array<ObjectViewTabReference>;
}

export type ObjectViewTabReference = BlockInternalId;

export interface ObjectViewTabShape {
  about: LocalizedTitleAndDescription;
  objectView: ObjectViewReference;
}

export interface OciLocator {
  name: string;
  tagOrDigest: TagOrDigest;
}

export interface OggAudioContainerFormat_singleStream {
  type: "singleStream";
  singleStream: SingleStreamOggAudioContainerFormat;
}

/**
 * An audio-only ogg container.
 * See https://xiph.org/ogg/doc/oggstream.html
 */
export type OggAudioContainerFormat = OggAudioContainerFormat_singleStream;

export interface OggAudioFormat_opus {
  type: "opus";
  opus: OpusFormat;
}

export interface OggAudioFormat_vorbis {
  type: "vorbis";
  vorbis: VorbisFormat;
}

export type OggAudioFormat = OggAudioFormat_opus | OggAudioFormat_vorbis;

/**
 * This hint can be used to inform consumers whether the number of links on the many side of a
 * OneToManyLinkDefinition is intended to be one or more.
 */
export type OneToManyLinkCardinalityHint = "ONE_TO_ONE" | "ONE_TO_MANY";

export interface OntologyDatasourceRetentionShape {
  about: LocalizedTitleAndDescription;
  id: StableShapeIdentifier;
}

export interface OntologyDatasourceShape {
  about: LocalizedTitleAndDescription;
  ontologyEntity: OntologyEntityReference;
}

export interface OntologyEntityReference_objectType {
  type: "objectType";
  objectType: ObjectTypeReference;
}

export interface OntologyEntityReference_manyToManyLinkType {
  type: "manyToManyLinkType";
  manyToManyLinkType: LinkTypeReference;
}

export type OntologyEntityReference =
  | OntologyEntityReference_objectType
  | OntologyEntityReference_manyToManyLinkType;

export interface OntologySdkShape {
  about: LocalizedTitleAndDescription;
}

export interface OntologySdkShapeV2 {
  about: LocalizedTitleAndDescription;
}

export interface OpusFormat {
}

export type OutputEditsSupport = "EDITS_ENABLED" | "EDITS_DISABLED";

export type OutputObjectBackendVersion = "V1" | "V2";

export interface OutputShape_action {
  type: "action";
  action: ActionTypeShape;
}

export interface OutputShape_actionParameter {
  type: "actionParameter";
  actionParameter: ActionTypeParameterShape;
}

export interface OutputShape_aipAgent {
  type: "aipAgent";
  aipAgent: AipAgentShape;
}

export interface OutputShape_appConfigTitanium {
  type: "appConfigTitanium";
  appConfigTitanium: AppConfigOutputShape;
}

export interface OutputShape_appConfig {
  type: "appConfig";
  appConfig: AppConfigOutputShape;
}

export interface OutputShape_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: ArtifactsRepositoryShape;
}

export interface OutputShape_authoringLibrary {
  type: "authoringLibrary";
  authoringLibrary: AuthoringLibraryShape;
}

export interface OutputShape_authoringRepository {
  type: "authoringRepository";
  authoringRepository: AuthoringRepositoryShape;
}

export interface OutputShape_automation {
  type: "automation";
  automation: AutomationShape;
}

export interface OutputShape_blobsterResource {
  type: "blobsterResource";
  blobsterResource: BlobsterResourceOutputShape;
}

export interface OutputShape_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: CarbonWorkspaceOutputShape;
}

export interface OutputShape_checkpointConfig {
  type: "checkpointConfig";
  checkpointConfig: CheckpointConfigOutputShape;
}

export interface OutputShape_cipherChannel {
  type: "cipherChannel";
  cipherChannel: CipherChannelOutputShape;
}

export interface OutputShape_cipherLicense {
  type: "cipherLicense";
  cipherLicense: CipherLicenseOutputShape;
}

export interface OutputShape_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: CodeWorkspaceOutputShape;
}

export interface OutputShape_compassResource {
  type: "compassResource";
  compassResource: CompassResourceOutputShape;
}

export interface OutputShape_contourAnalysis {
  type: "contourAnalysis";
  contourAnalysis: ContourAnalysisShape;
}

export interface OutputShape_dataHealthCheck {
  type: "dataHealthCheck";
  dataHealthCheck: DataHealthCheckShape;
}

export interface OutputShape_dataHealthCheckGroup {
  type: "dataHealthCheckGroup";
  dataHealthCheckGroup: DataHealthCheckGroupShape;
}

export interface OutputShape_deployedApp {
  type: "deployedApp";
  deployedApp: DeployedAppShape;
}

export interface OutputShape_datasourceColumn {
  type: "datasourceColumn";
  datasourceColumn: DatasourceColumnShape;
}

export interface OutputShape_eddieEdgePipeline {
  type: "eddieEdgePipeline";
  eddieEdgePipeline: EddieEdgePipelineOutputShape;
}

export interface OutputShape_eddiePipeline {
  type: "eddiePipeline";
  eddiePipeline: EddiePipelineShape;
}

export interface OutputShape_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: EvaluationSuiteShape;
}

export interface OutputShape_filesDatasource {
  type: "filesDatasource";
  filesDatasource: FilesDatasourceOutputShape;
}

export interface OutputShape_function {
  type: "function";
  function: FunctionShape;
}

export interface OutputShape_functionConfiguration {
  type: "functionConfiguration";
  functionConfiguration: FunctionConfigurationShape;
}

export interface OutputShape_geotimeSeriesIntegration {
  type: "geotimeSeriesIntegration";
  geotimeSeriesIntegration: GeotimeSeriesIntegrationShape;
}

export interface OutputShape_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeOutputShape;
}

export interface OutputShape_interfaceLinkType {
  type: "interfaceLinkType";
  interfaceLinkType: InterfaceLinkTypeOutputShape;
}

export interface OutputShape_interfacePropertyType {
  type: "interfacePropertyType";
  interfacePropertyType: InterfacePropertyTypeOutputShape;
}

export interface OutputShape_linkType {
  type: "linkType";
  linkType: LinkTypeOutputShape;
}

export interface OutputShape_logic {
  type: "logic";
  logic: LogicShape;
}

export interface OutputShape_logicFunction {
  type: "logicFunction";
  logicFunction: LogicFunctionShape;
}

export interface OutputShape_machinery {
  type: "machinery";
  machinery: MachineryProcessShape;
}

export interface OutputShape_magritteExport {
  type: "magritteExport";
  magritteExport: MagritteExportShape;
}

export interface OutputShape_magritteExtract {
  type: "magritteExtract";
  magritteExtract: MagritteExtractOutputShape;
}

export interface OutputShape_magritteSource {
  type: "magritteSource";
  magritteSource: MagritteSourceOutputShape;
}

export interface OutputShape_magritteStreamingExtract {
  type: "magritteStreamingExtract";
  magritteStreamingExtract: MagritteStreamingExtractOutputShape;
}

export interface OutputShape_model {
  type: "model";
  model: ModelOutputShape;
}

export interface OutputShape_monitor {
  type: "monitor";
  monitor: MonitorShape;
}

export interface OutputShape_monitorView {
  type: "monitorView";
  monitorView: MonitorViewShape;
}

export interface OutputShape_mapRendererSet {
  type: "mapRendererSet";
  mapRendererSet: MapRendererSetOutputShape;
}

export interface OutputShape_mapRendererSetV2 {
  type: "mapRendererSetV2";
  mapRendererSetV2: MapRendererSetOutputShapeV2;
}

export interface OutputShape_namedCredential {
  type: "namedCredential";
  namedCredential: NamedCredentialShape;
}

export interface OutputShape_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: NetworkEgressPolicyShape;
}

export interface OutputShape_notepadDocument {
  type: "notepadDocument";
  notepadDocument: NotepadDocumentShape;
}

export interface OutputShape_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: NotepadTemplateShape;
}

export interface OutputShape_notepadTemplateParameter {
  type: "notepadTemplateParameter";
  notepadTemplateParameter: NotepadTemplateParameterShape;
}

export interface OutputShape_objectSet {
  type: "objectSet";
  objectSet: ObjectSetShape;
}

export interface OutputShape_objectType {
  type: "objectType";
  objectType: ObjectTypeOutputShape;
}

export interface OutputShape_objectView {
  type: "objectView";
  objectView: ObjectViewShape;
}

export interface OutputShape_objectViewTab {
  type: "objectViewTab";
  objectViewTab: ObjectViewTabShape;
}

export interface OutputShape_ontologyDatasource {
  type: "ontologyDatasource";
  ontologyDatasource: OntologyDatasourceShape;
}

export interface OutputShape_property {
  type: "property";
  property: PropertyOutputShape;
}

export interface OutputShape_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: QuiverDashboardShape;
}

export interface OutputShape_resourceUpdatesContent {
  type: "resourceUpdatesContent";
  resourceUpdatesContent: ResourceUpdatesContentOutputShape;
}

export interface OutputShape_rosettaDocsBundle {
  type: "rosettaDocsBundle";
  rosettaDocsBundle: RosettaDocsBundleShape;
}

export interface OutputShape_ontologySdk {
  type: "ontologySdk";
  ontologySdk: OntologySdkShape;
}

export interface OutputShape_ontologySdkV2 {
  type: "ontologySdkV2";
  ontologySdkV2: OntologySdkShapeV2;
}

export interface OutputShape_schedule {
  type: "schedule";
  schedule: ScheduleShape;
}

export interface OutputShape_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SharedPropertyTypeOutputShape;
}

export interface OutputShape_slateApplication {
  type: "slateApplication";
  slateApplication: SlateApplicationOutputShape;
}

export interface OutputShape_solutionDesign {
  type: "solutionDesign";
  solutionDesign: SolutionDesignShape;
}

export interface OutputShape_tabularDatasource {
  type: "tabularDatasource";
  tabularDatasource: TabularDatasourceOutputShape;
}

export interface OutputShape_taurusWorkflow {
  type: "taurusWorkflow";
  taurusWorkflow: TaurusWorkflowShape;
}

export interface OutputShape_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: ThirdPartyApplicationShape;
}

export interface OutputShape_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: TimeSeriesSyncShape;
}

export interface OutputShape_transformsJobSpec {
  type: "transformsJobSpec";
  transformsJobSpec: TransformsJobSpecShape;
}

export interface OutputShape_valueType {
  type: "valueType";
  valueType: ValueTypeShape;
}

export interface OutputShape_vertexTemplate {
  type: "vertexTemplate";
  vertexTemplate: VertexTemplateShape;
}

export interface OutputShape_vortexTemplate {
  type: "vortexTemplate";
  vortexTemplate: VortexTemplateShape;
}

export interface OutputShape_walkthrough {
  type: "walkthrough";
  walkthrough: WalkthroughShape;
}

export interface OutputShape_webhook {
  type: "webhook";
  webhook: WebhookShape;
}

export interface OutputShape_widget {
  type: "widget";
  widget: WidgetShape;
}

export interface OutputShape_widgetSet {
  type: "widgetSet";
  widgetSet: WidgetSetShape;
}

export interface OutputShape_workflowGraph {
  type: "workflowGraph";
  workflowGraph: WorkflowGraphShape;
}

export interface OutputShape_workshopApplication {
  type: "workshopApplication";
  workshopApplication: WorkshopApplicationOutputShape;
}

/**
 * An output must have an about field of type `LocalizedTitleAndDescription`. This is what the FE uses to render
 * the output.
 */
export type OutputShape =
  | OutputShape_action
  | OutputShape_actionParameter
  | OutputShape_aipAgent
  | OutputShape_appConfigTitanium
  | OutputShape_appConfig
  | OutputShape_artifactsRepository
  | OutputShape_authoringLibrary
  | OutputShape_authoringRepository
  | OutputShape_automation
  | OutputShape_blobsterResource
  | OutputShape_carbonWorkspace
  | OutputShape_checkpointConfig
  | OutputShape_cipherChannel
  | OutputShape_cipherLicense
  | OutputShape_codeWorkspace
  | OutputShape_compassResource
  | OutputShape_contourAnalysis
  | OutputShape_dataHealthCheck
  | OutputShape_dataHealthCheckGroup
  | OutputShape_deployedApp
  | OutputShape_datasourceColumn
  | OutputShape_eddieEdgePipeline
  | OutputShape_eddiePipeline
  | OutputShape_evaluationSuite
  | OutputShape_filesDatasource
  | OutputShape_function
  | OutputShape_functionConfiguration
  | OutputShape_geotimeSeriesIntegration
  | OutputShape_interfaceType
  | OutputShape_interfaceLinkType
  | OutputShape_interfacePropertyType
  | OutputShape_linkType
  | OutputShape_logic
  | OutputShape_logicFunction
  | OutputShape_machinery
  | OutputShape_magritteExport
  | OutputShape_magritteExtract
  | OutputShape_magritteSource
  | OutputShape_magritteStreamingExtract
  | OutputShape_model
  | OutputShape_monitor
  | OutputShape_monitorView
  | OutputShape_mapRendererSet
  | OutputShape_mapRendererSetV2
  | OutputShape_namedCredential
  | OutputShape_networkEgressPolicy
  | OutputShape_notepadDocument
  | OutputShape_notepadTemplate
  | OutputShape_notepadTemplateParameter
  | OutputShape_objectSet
  | OutputShape_objectType
  | OutputShape_objectView
  | OutputShape_objectViewTab
  | OutputShape_ontologyDatasource
  | OutputShape_property
  | OutputShape_quiverDashboard
  | OutputShape_resourceUpdatesContent
  | OutputShape_rosettaDocsBundle
  | OutputShape_ontologySdk
  | OutputShape_ontologySdkV2
  | OutputShape_schedule
  | OutputShape_sharedPropertyType
  | OutputShape_slateApplication
  | OutputShape_solutionDesign
  | OutputShape_tabularDatasource
  | OutputShape_taurusWorkflow
  | OutputShape_thirdPartyApplication
  | OutputShape_timeSeriesSync
  | OutputShape_transformsJobSpec
  | OutputShape_valueType
  | OutputShape_vertexTemplate
  | OutputShape_vortexTemplate
  | OutputShape_walkthrough
  | OutputShape_webhook
  | OutputShape_widget
  | OutputShape_widgetSet
  | OutputShape_workflowGraph
  | OutputShape_workshopApplication;

/**
 * This shape is intended to represent a boolean config that a user can check if they want to allow their
 * Marketplace installation upgrade to override existing installed ontology entity API names. This would be
 * needed if any of the user's packaged entity API names have been modified, and the user wants the corresponding
 * installed entity API names to be updated to the modified packaged entity API name.
 *
 * This configuration should be enabled with caution, as it can break downstream applications that reference
 * ontology entities by their API names, such as functions and OSDK.
 *
 * A few constraints that Marketplace will enforce:
 * - This config cannot be used together with installation prefixes (enabling and configuring InstallPrefix), and
 * OMS will return a blocking validation error if both are set. This is because API name prefixing will break
 * downstream applications (e.g. OSDK, Functions) referencing entities by their API names that are packaged
 * together
 * - OMS will return blocking validation errors on API name upgrades if this config is not enabled, and
 * nonblocking validation errors if this config is enabled.
 * - Regardless of this configuration, installation will be blocked if the API name of an entity to be installed
 * is already used in the target ontology, until either is deduplicated to ensure uniqueness.
 */
export interface OverrideOntologyEntityApiNamesShape {
  about: LocalizedTitleAndDescription;
}

export interface ParameterInputShape {
  about: LocalizedTitleAndDescription;
  id?: StableShapeIdentifier | null | undefined;
  parameterType: DataType;
}

export interface PathPolicy_any {
  type: "any";
  any: Void;
}

export interface PathPolicy_pathRequired {
  type: "pathRequired";
  pathRequired: Void;
}

export interface PathPolicy_pathNotSupported {
  type: "pathNotSupported";
  pathNotSupported: Void;
}

export type PathPolicy =
  | PathPolicy_any
  | PathPolicy_pathRequired
  | PathPolicy_pathNotSupported;

export interface PdfFormat {
}

export interface PngFormat {
}

export interface PptxFormat {
}

/**
 * RESOURCE_PREALLOCATION_REQUIRED requires the resource has been preallocated already
 * by the block that owns it, resulting in the resource being available during preallocation
 * as a resolved input shape.
 */
export type PreallocateAccessRequirementType =
  "RESOURCE_PREALLOCATION_REQUIRED";

export interface PrimitiveBaseType_boolean {
  type: "boolean";
  boolean: Void;
}

export interface PrimitiveBaseType_binary {
  type: "binary";
  binary: Void;
}

export interface PrimitiveBaseType_byte {
  type: "byte";
  byte: Void;
}

export interface PrimitiveBaseType_date {
  type: "date";
  date: Void;
}

export interface PrimitiveBaseType_decimal {
  type: "decimal";
  decimal: Void;
}

export interface PrimitiveBaseType_double {
  type: "double";
  double: Void;
}

export interface PrimitiveBaseType_float {
  type: "float";
  float: Void;
}

export interface PrimitiveBaseType_integer {
  type: "integer";
  integer: Void;
}

export interface PrimitiveBaseType_long {
  type: "long";
  long: Void;
}

export interface PrimitiveBaseType_map {
  type: "map";
  map: Void;
}

export interface PrimitiveBaseType_optional {
  type: "optional";
  optional: Void;
}

export interface PrimitiveBaseType_short {
  type: "short";
  short: Void;
}

export interface PrimitiveBaseType_string {
  type: "string";
  string: Void;
}

export interface PrimitiveBaseType_struct {
  type: "struct";
  struct: Void;
}

export interface PrimitiveBaseType_structV2 {
  type: "structV2";
  structV2: Void;
}

export interface PrimitiveBaseType_timestamp {
  type: "timestamp";
  timestamp: Void;
}

export type PrimitiveBaseType =
  | PrimitiveBaseType_boolean
  | PrimitiveBaseType_binary
  | PrimitiveBaseType_byte
  | PrimitiveBaseType_date
  | PrimitiveBaseType_decimal
  | PrimitiveBaseType_double
  | PrimitiveBaseType_float
  | PrimitiveBaseType_integer
  | PrimitiveBaseType_long
  | PrimitiveBaseType_map
  | PrimitiveBaseType_optional
  | PrimitiveBaseType_short
  | PrimitiveBaseType_string
  | PrimitiveBaseType_struct
  | PrimitiveBaseType_structV2
  | PrimitiveBaseType_timestamp;

export interface PrimitiveObjectPropertyType_stringType {
  type: "stringType";
  stringType: Void;
}

export interface PrimitiveObjectPropertyType_booleanType {
  type: "booleanType";
  booleanType: Void;
}

export interface PrimitiveObjectPropertyType_byteType {
  type: "byteType";
  byteType: Void;
}

export interface PrimitiveObjectPropertyType_dateType {
  type: "dateType";
  dateType: Void;
}

export interface PrimitiveObjectPropertyType_decimalType {
  type: "decimalType";
  decimalType: Void;
}

export interface PrimitiveObjectPropertyType_doubleType {
  type: "doubleType";
  doubleType: Void;
}

export interface PrimitiveObjectPropertyType_floatType {
  type: "floatType";
  floatType: Void;
}

export interface PrimitiveObjectPropertyType_geohashType {
  type: "geohashType";
  geohashType: Void;
}

export interface PrimitiveObjectPropertyType_geoshapeType {
  type: "geoshapeType";
  geoshapeType: Void;
}

export interface PrimitiveObjectPropertyType_geotimeSeriesReferenceType {
  type: "geotimeSeriesReferenceType";
  geotimeSeriesReferenceType: Void;
}

export interface PrimitiveObjectPropertyType_integerType {
  type: "integerType";
  integerType: Void;
}

export interface PrimitiveObjectPropertyType_longType {
  type: "longType";
  longType: Void;
}

export interface PrimitiveObjectPropertyType_shortType {
  type: "shortType";
  shortType: Void;
}

export interface PrimitiveObjectPropertyType_timeDependentType {
  type: "timeDependentType";
  timeDependentType: Void;
}

export interface PrimitiveObjectPropertyType_timestampType {
  type: "timestampType";
  timestampType: Void;
}

export interface PrimitiveObjectPropertyType_attachmentType {
  type: "attachmentType";
  attachmentType: Void;
}

export interface PrimitiveObjectPropertyType_markingType {
  type: "markingType";
  markingType: Void;
}

export interface PrimitiveObjectPropertyType_mediaReferenceType {
  type: "mediaReferenceType";
  mediaReferenceType: Void;
}

export interface PrimitiveObjectPropertyType_vectorType {
  type: "vectorType";
  vectorType: VectorPropertyType;
}

export interface PrimitiveObjectPropertyType_cipherTextType {
  type: "cipherTextType";
  cipherTextType: CipherTextPropertyType;
}

export interface PrimitiveObjectPropertyType_structType {
  type: "structType";
  structType: StructPropertyType;
}

/**
 * Represents the primitive types for Ontology properties.
 */
export type PrimitiveObjectPropertyType =
  | PrimitiveObjectPropertyType_stringType
  | PrimitiveObjectPropertyType_booleanType
  | PrimitiveObjectPropertyType_byteType
  | PrimitiveObjectPropertyType_dateType
  | PrimitiveObjectPropertyType_decimalType
  | PrimitiveObjectPropertyType_doubleType
  | PrimitiveObjectPropertyType_floatType
  | PrimitiveObjectPropertyType_geohashType
  | PrimitiveObjectPropertyType_geoshapeType
  | PrimitiveObjectPropertyType_geotimeSeriesReferenceType
  | PrimitiveObjectPropertyType_integerType
  | PrimitiveObjectPropertyType_longType
  | PrimitiveObjectPropertyType_shortType
  | PrimitiveObjectPropertyType_timeDependentType
  | PrimitiveObjectPropertyType_timestampType
  | PrimitiveObjectPropertyType_attachmentType
  | PrimitiveObjectPropertyType_markingType
  | PrimitiveObjectPropertyType_mediaReferenceType
  | PrimitiveObjectPropertyType_vectorType
  | PrimitiveObjectPropertyType_cipherTextType
  | PrimitiveObjectPropertyType_structType;

export interface PropertyInputShape {
  about: LocalizedTitleAndDescription;
  inlineActionType?: ActionTypeReference | null | undefined;
  objectType: ObjectTypeReference;
  sharedPropertyType?: SharedPropertyTypeReference | null | undefined;
  type: AllowedObjectPropertyType;
}

export interface PropertyOutputShape {
  about: LocalizedTitleAndDescription;
  inlineActionType?: ActionTypeReference | null | undefined;
  objectType: ObjectTypeReference;
  sharedPropertyType?: SharedPropertyTypeReference | null | undefined;
  type: ObjectPropertyType;
}

export type PropertyTypeRid = string;

export interface PypiLocator {
  fileName: string;
  md5Digest?: string | null | undefined;
  project: string;
  requiresPython?: string | null | undefined;
  sha256Digest?: string | null | undefined;
  url: string;
}

/**
 * Quiver dashboard shape
 */
export interface QuiverDashboardShape {
  about: LocalizedTitleAndDescription;
}

/**
 * If included in a Cipher License, the user has the ability to encrypt or decrypt (depending on the RequestType)
 * up to the limit specified.
 */
export interface RateLimitedRequestPermit {
  requestType: RequestType;
}

/**
 * Two layers of granularity are provided to specify the access requirements for an input shape: either
 * RESOURCE_EXISTENCE_REQUIRED, which requires the resource has been created or SCHEMA_UPDATE_REQUIRED, which
 * will guarantee that the input must be built with the latest schema before reconciliation. Schema existence is
 * only relevant for dataset types.
 *
 * If the output is permissioned based on a given input, RESOURCE_EXISTENCE_REQUIRED should always be specified
 * so that the upstream input is guaranteed to exist in Gatekeeper.
 *
 * Specifying SCHEMA_UPDATE_REQUIRED will also guarantee RESOURCE_EXISTENCE_REQUIRED is fulfilled.
 * If SCHEMA_UPDATE_REQUIRED is specified, the shape type and block type must be allowlisted in
 * `SchemaUpdateReconcileAccessValidator`, else we will throw on block creation.
 */
export type ReconcileAccessRequirementType =
  | "RESOURCE_EXISTENCE_REQUIRED"
  | "SCHEMA_UPDATE_REQUIRED";

/**
 * Reference a patched repodata in a conda layout. It allows to ship patched environments that may not be solvable in destination stacks
 */
export interface RepoDataLocator {
  platform: string;
}

export type RequestType = "ENCRYPT" | "DECRYPT";

export interface ResolvedDatasourceColumnShape {
  datasource: DatasourceLocator;
  name: string;
}

/**
 * Resource Updates refer to the generic concept that represents Product Walkthroughs.
 * This shape represents the Content of each slide in a Product Walkthrough.
 * We use this output shape to be able to preallocate ContentRids of a ResourceUpdate and keep it consistent
 * across installations.
 */
export interface ResourceUpdatesContentOutputShape {
  about: LocalizedTitleAndDescription;
}

export interface RestrictedViewLocator {
  rid: string;
}

/**
 * Rosetta documentation bundle, which can only be opened in the Rosetta app (never an input to other blocks).
 */
export interface RosettaDocsBundleShape {
  about: LocalizedTitleAndDescription;
}

export interface ScheduleShape {
  about: LocalizedTitleAndDescription;
}

export type SecretName = string;

export interface SerializedDataLocator_conda {
  type: "conda";
  conda: CondaLocator;
}

export interface SerializedDataLocator_condaV2 {
  type: "condaV2";
  condaV2: CondaLocatorV2;
}

export interface SerializedDataLocator_files {
  type: "files";
  files: FilesLocator;
}

export interface SerializedDataLocator_maven {
  type: "maven";
  maven: MavenLocator;
}

export interface SerializedDataLocator_npm {
  type: "npm";
  npm: NpmLocator;
}

export interface SerializedDataLocator_oci {
  type: "oci";
  oci: OciLocator;
}

export interface SerializedDataLocator_pypi {
  type: "pypi";
  pypi: PypiLocator;
}

export interface SerializedDataLocator_repoData {
  type: "repoData";
  repoData: RepoDataLocator;
}

/**
 * A locator to a piece of serialized data.
 * These correspond to (a subset of) foundry artifacts layouts.
 */
export type SerializedDataLocator =
  | SerializedDataLocator_conda
  | SerializedDataLocator_condaV2
  | SerializedDataLocator_files
  | SerializedDataLocator_maven
  | SerializedDataLocator_npm
  | SerializedDataLocator_oci
  | SerializedDataLocator_pypi
  | SerializedDataLocator_repoData;

/**
 * A versioned cross stack identifier for a service managed value type.
 */
export interface ServiceManagedValueTypeIdentifier {
  apiName: ValueTypeApiName;
  version: ValueTypeVersion;
}

export interface SharedPropertyTypeInputShape {
  about: LocalizedTitleAndDescription;
  type: AllowedObjectPropertyType;
}

export interface SharedPropertyTypeOutputShape {
  about: LocalizedTitleAndDescription;
  type: ObjectPropertyType;
}

export type SharedPropertyTypeReference = BlockInternalId;

export type SharedPropertyTypeRid = string;

export interface SingleOutputType {
  about: LocalizedTitleAndDescription;
  dataType: _api_functions_DataType;
}

/**
 * An mp4 container which contains a single audio stream.
 */
export interface SingleStreamMp4AudioContainerFormat {
}

/**
 * An ogg container which contains a single audio stream.
 */
export interface SingleStreamOggAudioContainerFormat {
  oggAudioFormat: OggAudioFormat;
}

/**
 * A webm container which contains a single audio stream.
 */
export interface SingleStreamWebmAudioContainerFormat {
}

export interface SlateApplicationInputShape {
  about: LocalizedTitleAndDescription;
}

export interface SlateApplicationOutputShape {
  about: LocalizedTitleAndDescription;
}

/**
 * Solution Design Diagram created by a user and saved in Compass.
 */
export interface SolutionDesignShape {
  about: LocalizedTitleAndDescription;
}

export interface SparkProfileConstraint_allowedProfileNames {
  type: "allowedProfileNames";
  allowedProfileNames: AllowedProfileNamesConstraint;
}

export type SparkProfileConstraint = SparkProfileConstraint_allowedProfileNames;

export type SparkProfileName = string;

export interface SparkProfileShape {
  about: LocalizedTitleAndDescription;
  constraints?: SparkProfileConstraint | null | undefined;
}

export interface SpreadsheetDecodeFormat_xlsx {
  type: "xlsx";
  xlsx: XlsxFormat;
}

export type SpreadsheetDecodeFormat = SpreadsheetDecodeFormat_xlsx;

export interface SpreadsheetSchema {
  format: SpreadsheetDecodeFormat;
}

/**
 * A stable identifier for a shape, provided by integrations during packaging.
 * Typically used for shapes that represent parametrization values, or when integrations want to otherwise
 * deduplicate shapes explicitly.
 * Examples include:
 * - Parameter shapes: Example for workshop would be the variable ID that a parameter
 * is associated with. In workshop as long as the variable is not deleted its ID remains the same every
 * time you package a workshop.
 * - Markings ids: Example include a semantic identifier such as `oms.used-marking.<dataset-locator>` for the
 * marking. Rather than creating a shape based on the used markings in the source, a shape is created for
 * each separate marking id.
 */
export type StableShapeIdentifier = string;

/**
 * A stemma code repository. Currently this type should only be used to identify external transforms.
 */
export interface StemmaRepositoryType {
}

export interface StreamLocator {
  branch: string;
  rid: string;
}

/**
 * StringListType specifies that this parameter must be a list of Strings.
 */
export interface StringListType {
}

/**
 * StringType specifies that this parameter must be a String.
 */
export interface StringType {
}

export interface StructFieldBaseParameterType_boolean {
  type: "boolean";
  boolean: BooleanType;
}

export interface StructFieldBaseParameterType_integer {
  type: "integer";
  integer: IntegerType;
}

export interface StructFieldBaseParameterType_long {
  type: "long";
  long: LongType;
}

export interface StructFieldBaseParameterType_double {
  type: "double";
  double: DoubleType;
}

export interface StructFieldBaseParameterType_string {
  type: "string";
  string: StringType;
}

export interface StructFieldBaseParameterType_geohash {
  type: "geohash";
  geohash: GeohashType;
}

export interface StructFieldBaseParameterType_geoshape {
  type: "geoshape";
  geoshape: GeoshapeType;
}

export interface StructFieldBaseParameterType_timestamp {
  type: "timestamp";
  timestamp: TimestampType;
}

export interface StructFieldBaseParameterType_date {
  type: "date";
  date: DateType;
}

export interface StructFieldBaseParameterType_objectReference {
  type: "objectReference";
  objectReference: ObjectReferenceType;
}

/**
 * All of the possible types for fields of a Struct Parameter. This should be the intersection of allowed struct
 * property field types (https://www.palantir.com/docs/foundry/object-link-types/structs-overview/), and the
 * inhabitants of the BaseParameterType union.
 */
export type StructFieldBaseParameterType =
  | StructFieldBaseParameterType_boolean
  | StructFieldBaseParameterType_integer
  | StructFieldBaseParameterType_long
  | StructFieldBaseParameterType_double
  | StructFieldBaseParameterType_string
  | StructFieldBaseParameterType_geohash
  | StructFieldBaseParameterType_geoshape
  | StructFieldBaseParameterType_timestamp
  | StructFieldBaseParameterType_date
  | StructFieldBaseParameterType_objectReference;

export type StructFieldRid = string;

/**
 * StructListType specifies that this parameter must be a list of Structs.
 */
export interface StructListType {
  structFieldTypes: Record<
    StructParameterFieldApiName,
    StructFieldBaseParameterType
  >;
}

/**
 * An API name that identifies a struct field in a struct parameter. Note that this api name is specific to the
 * action type and does not need to match the api name on the struct property type.
 */
export type StructParameterFieldApiName = string;

/**
 * Represents a struct property, which is an ordered list of keys and values used to model data
 * with related components as part of a single entity (closely mimics the composite property type from
 * the Gotham ontology). Unlike OMS struct property type, we only did not include the struct field API
 * names as part of the type (similar to how other property types do not include their API names).
 * This is because we only require the types and the ordering of the struct fields to match.
 * Additionally, note that certain types are not supported as struct fields, but they are validated
 * in code even though their corresponding ObjectPropertyTypes might be allowed by the API shape here.
 * (See the list of supported struct field types here:
 * https://www.palantir.com/docs/foundry/object-link-types/structs-overview/)
 */
export interface StructPropertyType {
  structFieldTypes: Array<ObjectPropertyType>;
}

/**
 * StructType specifies that this parameter must be a Struct.
 */
export interface StructType {
  structFieldTypes: Record<
    StructParameterFieldApiName,
    StructFieldBaseParameterType
  >;
}

/**
 * Represents the base type of a struct value type, which is an ordered list of keys and base types used to model
 * data with related components as part of a single entity. Field names are not included as part of this type. As
 * a result, only the types and the ordering of fields are required to match.
 */
export interface StructV2BaseType {
  structFieldTypes: Array<BaseType>;
}

/**
 * Similar to the `MarkingType` enum in Multipass, but we include a third `ONLY_ORGANIZATION` type that only
 * supports organization markings. The `MANDATORY` type supports both "normal" mandatory markings and
 * organization markings, beacuse in the Multipass API, organization markings are treated as a special type of
 * mandatory markings.
 */
export type SupportedMarkingsType = "MANDATORY" | "CBAC" | "ONLY_ORGANIZATION";

export interface TabularDatasourceInputShape {
  about: LocalizedTitleAndDescription;
  schema: Array<DatasourceColumnReference>;
  supportedTypes: Array<TabularDatasourceType>;
}

export interface TabularDatasourceOutputShape {
  about: LocalizedTitleAndDescription;
  buildRequirements?: DatasourceBuildRequirements | null | undefined;
  schema: Array<DatasourceColumnReference>;
  type: TabularDatasourceType;
}

export type TabularDatasourceReference = BlockInternalId;

export type TabularDatasourceType =
  | "DATASET"
  | "RESTRICTED_VIEW"
  | "STREAM"
  | "VIRTUAL_TABLE";

export interface TagOrDigest_tag {
  type: "tag";
  tag: string;
}

export interface TagOrDigest_digest {
  type: "digest";
  digest: string;
}

export type TagOrDigest = TagOrDigest_tag | TagOrDigest_digest;

/**
 * Taurus workflow that is referenced by taurus workshop widget.
 */
export interface TaurusWorkflowShape {
  about: LocalizedTitleAndDescription;
}

export interface ThirdPartyApplicationShape {
  about: LocalizedTitleAndDescription;
}

export interface TiffFormat {
}

/**
 * TimeSeriesReferenceType specifies that this parameter must be a TimeSeriesReference.
 */
export interface TimeSeriesReferenceType {
}

export type TimeSeriesSyncRid = string;

export interface TimeSeriesSyncShape {
  about: LocalizedTitleAndDescription;
  type?: TimeSeriesSyncType | null | undefined;
}

export type TimeSeriesSyncType = "NUMERIC" | "CATEGORICAL";

/**
 * TimestampListType specifies that this parameter must be a list of Timestamps.
 */
export interface TimestampListType {
}

/**
 * TimestampType specifies that this parameter must be a Timestamp.
 */
export interface TimestampType {
}

export interface TransformsJobSpecShape {
  about: LocalizedTitleAndDescription;
}

/**
 * If included in a Cipher License, the user has the ability to encrypt or decrypt (depending on the RequestType)
 * in Transforms as an input parameter. This effectively grants access to the keys.
 */
export interface TransformsRequestPermit {
  requestType: RequestType;
}

export interface TsVideoContainerFormat {
}

export interface TxtFormat {
}

/**
 * This is a placeholder type for when we don't care about the specific type of a parameter, simply representing
 * the presence of an argument. We use this as a minimal way to express compatibility between input and
 * output function shapes, mostly  to allow for more complex types to be used in the future without breaking
 * existing stored shapes.
 */
export interface UnspecifiedParameterType {
}

/**
 * A string representing a value type's api name. Used as a stable, cross-stack identifier for service managed value types.
 */
export type ValueTypeApiName = string;

export type ValueTypeReference = BlockInternalId;

export interface ValueTypeShape {
  about: LocalizedTitleAndDescription;
  baseType: BaseType;
  serviceTypeIdentifier?: ServiceManagedValueTypeIdentifier | null | undefined;
}

/**
 * A string representing a value type's version. Enforced to be a semantic version.
 */
export type ValueTypeVersion = string;

/**
 * Marketplace dependencies for a vector property
 */
export interface VectorPropertyType {
  dimension?: number | null | undefined;
  supportsSearchWith: Array<VectorSimilarityFunction>;
}

export type VectorSimilarityFunction =
  | "COSINE_SIMILARITY"
  | "DOT_PRODUCT"
  | "EUCLIDEAN_DISTANCE";

export interface VectorWorkbookShape {
  about: LocalizedTitleAndDescription;
}

/**
 * Vertex Template that can be used to generate Graphs.
 */
export interface VertexTemplateShape {
  about: LocalizedTitleAndDescription;
}

export interface VideoDecodeFormat_mp4 {
  type: "mp4";
  mp4: Mp4VideoContainerFormat;
}

export interface VideoDecodeFormat_ts {
  type: "ts";
  ts: TsVideoContainerFormat;
}

export interface VideoDecodeFormat_mov {
  type: "mov";
  mov: MovVideoContainerFormat;
}

export interface VideoDecodeFormat_mkv {
  type: "mkv";
  mkv: MkvVideoContainerFormat;
}

export type VideoDecodeFormat =
  | VideoDecodeFormat_mp4
  | VideoDecodeFormat_ts
  | VideoDecodeFormat_mov
  | VideoDecodeFormat_mkv;

export interface VideoSchema {
  format: VideoDecodeFormat;
}

export interface VirtualTableLocator {
  branch: string;
  rid: string;
}

export interface Void {
}

export interface VorbisFormat {
}

/**
 * Vortex Map Template that can be used to generate Maps.
 */
export interface VortexTemplateShape {
  about: LocalizedTitleAndDescription;
}

export interface WalkthroughShape {
  about: LocalizedTitleAndDescription;
}

export interface WavFormat {
}

export interface WebhookShape {
  about: LocalizedTitleAndDescription;
}

export interface WebmAudioContainerFormat_singleStream {
  type: "singleStream";
  singleStream: SingleStreamWebmAudioContainerFormat;
}

export type WebmAudioContainerFormat = WebmAudioContainerFormat_singleStream;

export interface WebpFormat {
}

export type WidgetReference = BlockInternalId;

export type WidgetSetReference = BlockInternalId;

export interface WidgetSetShape {
  about: LocalizedTitleAndDescription;
  widgets: Array<WidgetReference>;
}

export interface WidgetShape {
  about: LocalizedTitleAndDescription;
  widgetSet: WidgetSetReference;
}

/**
 * Workflow Graph shape that can be used to generate Workflow Graphs. Never consumed by any downstream blocks.
 */
export interface WorkflowGraphShape {
  about: LocalizedTitleAndDescription;
}

export interface WorkshopApplicationInputShape {
  about: LocalizedTitleAndDescription;
}

export interface WorkshopApplicationOutputShape {
  about: LocalizedTitleAndDescription;
}

/**
 * An Input Shape use to provide a Workshop's Saved States SaveLocation
 */
export interface WorkshopApplicationSaveLocationInputShape {
  about: LocalizedTitleAndDescription;
  id: StableShapeIdentifier;
}

export interface XlsxFormat {
}

