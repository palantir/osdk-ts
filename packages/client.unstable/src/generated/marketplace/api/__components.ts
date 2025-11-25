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
  EnumParameter as _api_eddie_transformations_api_EnumParameter,
  ExplicitType as _api_eddie_transformations_api_ExplicitType,
  InputParameterType as _api_eddie_transformations_api_InputParameterType,
  LiteralConstraint as _api_eddie_transformations_api_LiteralConstraint,
  LiteralParameter as _api_eddie_transformations_api_LiteralParameter,
  Parameter as _api_eddie_transformations_api_Parameter,
  ParameterId as _api_eddie_transformations_api_ParameterId,
  RegexParameter as _api_eddie_transformations_api_RegexParameter,
  RegexParameterType as _api_eddie_transformations_api_RegexParameterType,
} from "./eddie/transformations/api/__components.js";
import type { MarketplaceSerializableError as _api_errors_MarketplaceSerializableError } from "./errors/__components.js";
import type {
  CustomType as _api_functions_CustomType,
  CustomTypeFieldName as _api_functions_CustomTypeFieldName,
  CustomTypeId as _api_functions_CustomTypeId,
  DataType as _api_functions_DataType,
} from "./functions/__components.js";
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

export type ActionParameterId = string;

/**
 * The parameter referenced by the ActionParameterTypeShape was not present on the underlying ActionType.
 */
export interface ActionParameterNotFound {
  actionTypeRid: ActionTypeRid;
  parameterId: ActionParameterId;
  parameterRid: ActionParameterRid;
}
export type ActionParameterRid = string;
export interface ActionParameterRidOrId_rid {
  type: "rid";
  rid: ActionParameterRid;
}

export interface ActionParameterRidOrId_id {
  type: "id";
  id: ActionParameterId;
}
export type ActionParameterRidOrId =
  | ActionParameterRidOrId_rid
  | ActionParameterRidOrId_id;

export type ActionParameterShapeId = string;

/**
 * The ActionParameterType references an InterfaceTypeRid for which the shape id is unresolvable. This is
 * possible when the referenced InterfaceTypeRid isn't part of the current block.
 */
export interface ActionParameterShapeTypeInterfaceTypeRidUnresolvable {
  expected: BaseParameterType;
  interfaceTypeRid: InterfaceTypeRid;
}
/**
 * The ActionParameterType references an ObjectTypeId for which the shape id is unresolvable. This is
 * possible when the referenced ObjectTypeId isn't part of the current block.
 */
export interface ActionParameterShapeTypeObjectTypeIdUnresolvable {
  expected: BaseParameterType;
  objectTypeId: ObjectTypeId;
}
/**
 * DEPRECATED. Use `ActionTypeParameterShape` instead.
 */
export interface ActionParameterTypeShape {
  about: LocalizedTitleAndDescription;
  type: BaseParameterType;
}
/**
 * The referenced ActionParameterTypeShape was not present in the block metadata.
 */
export interface ActionParameterTypeShapeNotFound {
}
/**
 * The type of the actual ActionParameterTypeShape does not match the expected type.
 */
export interface ActionParameterTypeShapeTypeMismatch {
  actual: BaseParameterType;
  expected: BaseParameterType;
}
/**
 * The ActionParameterTypeShape type is of an unknown type. This indicates we might have run into a
 * new Parameter Type that isn't yet supported in Marketplace.
 */
export interface ActionParameterTypeShapeTypeUnknown {
  expected: BaseParameterType;
  unknownType: string;
}
/**
 * DEPRECATED as we dont intend to provide mapping infor for action parameters v1 going forward
 */
export type ActionParameterV1MappingInfo = Record<
  ActionParameterShapeId,
  BlockSetShapeId
>;
export type ActionTypeApiName = string;

/**
 * Recommends that an `inputShape`'s action shape is fulfilled by `fulfilledBy`'s output shape, and how to map the inner shape.
 * Note that it is possible for some input ActionParameterShapeId to not be fulfilled by the recommendation and be missing from the map.
 */
export interface ActionTypeBlockSetRecommendation {
  fulfilledBy: RecommendationBlockSetReference;
  inputParameterShapesFulfilledBy: Record<
    ActionParameterShapeId,
    ActionParameterShapeId
  >;
  inputShape: RecommendationBlockSetReference;
}
export interface ActionTypeIdentifier_ridWithoutNestedParameters {
  type: "ridWithoutNestedParameters";
  ridWithoutNestedParameters: ActionTypeRid;
}

export interface ActionTypeIdentifier_rid {
  type: "rid";
  rid: ActionTypeRid;
}

export interface ActionTypeIdentifier_ridWithParameters {
  type: "ridWithParameters";
  ridWithParameters: ActionTypeRidWithParameters;
}
export type ActionTypeIdentifier =
  | ActionTypeIdentifier_ridWithoutNestedParameters
  | ActionTypeIdentifier_rid
  | ActionTypeIdentifier_ridWithParameters;

/**
 * An existing action type input shape requires some new parameters.
 */
export interface ActionTypeInputRequiresNewParametersImplication {
  newParameters: Record<ActionParameterShapeId, ActionParameterTypeShape>;
}
/**
 * An existing action type input shape requires some new parameters.
 */
export interface ActionTypeInputRequiresNewParametersImplicationV2 {
  newParameters: Record<ActionTypeParameterReference, ActionTypeParameterShape>;
}
export interface ActionTypeLocator {
  rid: ActionTypeRid;
  version: ActionTypeVersion;
}
export interface ActionTypeNotFound {
  actionTypeRid: ActionTypeRid;
}
export interface ActionTypeParameterIdentifier_parameterAndAction {
  type: "parameterAndAction";
  parameterAndAction: ParameterAndAction;
}
export type ActionTypeParameterIdentifier =
  ActionTypeParameterIdentifier_parameterAndAction;

/**
 * DEPRECATED. Use `ResolvedActionTypeParameterShape` instead.
 */
export interface ActionTypeParameterIdentifiers {
  parameterId: ActionParameterId;
  parameterRid: ActionParameterRid;
}
export interface ActionTypeParameterNotFound {
  actionTypeRid: ActionTypeRid;
  parameterId?: ActionParameterId | null | undefined;
  parameterRid?: ActionParameterRid | null | undefined;
}
export type ActionTypeParameterReference = BlockInternalId;
export interface ActionTypeParameterShape {
  about: LocalizedTitleAndDescription;
  actionType: ActionTypeReference;
  type: BaseParameterType;
}
/**
 * DEPRECATED. Use `SimpleDisplayMetadata` instead.
 */
export interface ActionTypeParameterShapeDisplayMetadata {
  about: LocalizedTitleAndDescription;
}
/**
 * Action parameter input type has changed.
 */
export interface ActionTypeParameterTypeChangedImplication {
  parameterShapeId: ActionParameterShapeId;
  parameterTypeA: BaseParameterType;
  parameterTypeB: BaseParameterType;
}
/**
 * Action parameter input type has changed.
 */
export interface ActionTypeParameterTypeChangedImplicationV2 {
  parameterTypeA: BaseParameterType;
  parameterTypeB: BaseParameterType;
}
/**
 * Recommends that an `inputShape`'s action shape is fulfilled by `fulfilledBy`'s output shape, and how to map the inner shape.
 * Note that it is possible for some input ActionParameterShapeId to not be fulfilled by the recommendation and be missing from the map.
 */
export interface ActionTypeRecommendation {
  fulfilledBy: RecommendationBlockReference;
  inputParameterShapesFulfilledBy: Record<
    ActionParameterShapeId,
    ActionParameterShapeId
  >;
  inputShape: RecommendationBlockReference;
}
export type ActionTypeReference = BlockInternalId;

/**
 * An ActionTypeRid was referenced for which the shape id could not be resolved. This is typical if the
 * referenced ObjectType has not been included as an input/output in the block.
 */
export interface ActionTypeReferenceUnresolvable {
  actual: ActionTypeRid;
  expected: ActionTypeReference;
}
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

/**
 * DEPRECATED. Use the separate `ActionTypeParameterIdentifier` type instead.
 */
export interface ActionTypeRidWithParameters {
  parameterMapping: Record<ActionParameterShapeId, ActionParameterRidOrId>;
  rid: ActionTypeRid;
}
export interface ActionTypeShape {
  about: LocalizedTitleAndDescription;
  actionLogRule?: ActionLogRuleShape | null | undefined;
  parameters: Record<ActionParameterShapeId, ActionParameterTypeShape>;
  parametersV2: Array<ActionTypeParameterReference>;
}
export interface ActionTypeShapeDisplayMetadata {
  about: LocalizedTitleAndDescription;
  parameters: Record<
    ActionParameterShapeId,
    ActionTypeParameterShapeDisplayMetadata
  >;
}
export type ActionTypeVersion = string;

/**
 * Same as `InputShapeResult`, but without an internal shape ID.
 */
export interface AdditionalInputShapeResult {
  blockShapeId: BlockShapeId;
  metadata: InputShapeMetadata;
  resolvedShape: ResolvedInputShape;
  shape: InputShape;
}
/**
 * Same as `OutputShapeResult`, but without an internal shape ID.
 */
export interface AdditionalOutputShapeResult {
  blockShapeId: BlockShapeId;
  resolvedShape: ResolvedOutputShape;
  shape: OutputShape;
}
export interface AipAgentCreateBlockRequest {
  agentRid: AipAgentRid;
  agentVersion?: AipAgentVersion | null | undefined;
}
export interface AipAgentIdentifier_ridAndVersion {
  type: "ridAndVersion";
  ridAndVersion: AipAgentRidAndVersion;
}
export type AipAgentIdentifier = AipAgentIdentifier_ridAndVersion;

export type AipAgentMajorVersion = number;
export type AipAgentMinorVersion = number;
export type AipAgentRid = string;
export interface AipAgentRidAndVersion {
  agentRid: AipAgentRid;
  agentVersion?: AipAgentVersion | null | undefined;
}
export interface AipAgentShape {
  about: LocalizedTitleAndDescription;
}
export interface AipAgentVersion {
  major: AipAgentMajorVersion;
  minor: AipAgentMinorVersion;
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
export type AllPossibleVersionsMissingInputsConstraintFailure = Record<
  BlockSetVersionId,
  BlockSetVersionMissingInputsConstraintFailure
>;
export type AllPossibleVersionsMissingInputsConstraintFailureV2 = Record<
  BlockSetVersionId,
  BlockSetVersionMissingInputsConstraintFailureV2
>;
export interface AnySchema {
}
export interface ApiNameResolver {
  apiName: string;
}
/**
 * Alias of com.palantir.apollo.catalog.api.objects.ArtifactUri
 *
 * Example value: "apollo.palantircloud.com/marketplace/foundryproducts/com.palantirfoundry.stack.namespace/project-123/manifests/1.1.0"
 */
export type ApolloArtifactUri = string;
export interface ApolloBlockSetPublishingStatus_success {
  type: "success";
  success: BlockSetPublishingJobSuccess;
}

export interface ApolloBlockSetPublishingStatus_inProgress {
  type: "inProgress";
  inProgress: BlockSetPublishingJobInProgress;
}

export interface ApolloBlockSetPublishingStatus_failure {
  type: "failure";
  failure: BlockSetPublishingJobFailure;
}
export type ApolloBlockSetPublishingStatus =
  | ApolloBlockSetPublishingStatus_success
  | ApolloBlockSetPublishingStatus_inProgress
  | ApolloBlockSetPublishingStatus_failure;

/**
 * Cross stack manifest top level object
 */
export interface ApolloCrossStackManifest {
  stackConfiguration: ApolloStackManagementConfig;
  storeName: StoreName;
}
/**
 * The identifier for an entity in Apollo, an equivalent of com.palantir.apollo.ApolloEntityId, often referred to
 * as "aeid".
 *
 * Marketplace tracks two types of entities:
 * 1. Foundry Product Managed, which have a corresponding MIM installation. Note that a MIM installation may not
 * have a corresponding aeid if it was created through MIM but never managed by Apollo.
 * 2. Foundry Product Artifact. In this case, the entity does not correspond to an actual marketplace
 * installation
 *
 * Example: aeid:mojito:foundry-product:namespace+truck-locator.
 */
export type ApolloEntityId = string;

/**
 * The identifier for the environment that Apollo Manages, from the perspective of the Apollo Space.
 * This is external to Foundry, but is stored in MIM to know which environment a given Apollo Space is
 * considering a installation to be in.
 */
export type ApolloEnvironmentId = string;

/**
 * The identifier for a namespace from Apollo's point of view. May be a 1) MavenGroup (when one is
 * set on the namespace), 2) NamespaceRid, or 2) "ARTIFACT". This type only exists to highlight this
 * implicit union and help promote safe handling internally.
 *
 * We consider this value safe because apollo's FoundrySpaceMavenGroup type is safe.
 */
export type ApolloFoundrySpaceIdentifier = string;

/**
 * This store will be available to configure in Control Panel for the allowlist organisations that exist
 * on the stack. Allowlisted organizations comprise of the union of all organizations in the allowlisted
 * `enrollmentsRids` and of the `organizationRids`.
 * By default, the store will be enabled for allowlisted organisations the first time it is installed on a stack.
 *
 * Access expansions cannot be granted on stores that use `ApolloGranularConfig`, and any expansions granted
 * will be ignored.
 */
export interface ApolloGranularConfig {
  enrollmentsRids: Array<EnrollmentRid>;
  groupIds: Array<GroupId>;
  organizationRids: Array<OrganizationRid>;
}
/**
 * The base URI to an Apollo.
 * This should be sanitized before use, to account for a protocol prefix or trailing slash.
 */
export type ApolloHostUri = string;

/**
 * A uuid identifying an Apollo plan. In practice, always equal to the locator of the corresponding PlanRid.
 */
export type ApolloPlanId = string;

/**
 * The rid of an Apollo plan.
 */
export type ApolloPlanRid = string;

/**
 * The rid of an Apollo plan task.
 */
export type ApolloPlanTaskRid = string;

/**
 * The name of a user-defined secret in Apollo. Should only be used in contexts to identify secrets managed in
 * Apollo. Currently, only Apollo multi-key secrets are supported. See also credentials.SecretName
 * and data-connector.MagritteSecretName for disambiguation.
 */
export type ApolloSecretName = string;

/**
 * Identifier for a Apollo space managing installations. This is external to Foundry, but is stored
 * in MIM to know which Apollo space is managing a given installation. It is obtained when a agent is reporting
 * its information to Apollo.
 */
export type ApolloSpaceId = string;

/**
 * The set of identifiers that are sourced from the Apollo space.
 */
export interface ApolloSpaceIdentifiers {
  environmentId: ApolloEnvironmentId;
  spaceId: ApolloSpaceId;
}
export interface ApolloSpaceToPublishingStatus {
  apolloSpacePublishingStatus: Record<
    ApolloSpaceId,
    ApolloBlockSetPublishingStatus
  >;
}
export interface ApolloStackLevelConfig {
  defaultEnabled?: boolean | null | undefined;
  defaultStoreAccess?: ManagedStoreAccessLevel | null | undefined;
}
export interface ApolloStackManagementConfig_stackLevelConfig {
  type: "stackLevelConfig";
  stackLevelConfig: ApolloStackLevelConfig;
}

export interface ApolloStackManagementConfig_granularConfig {
  type: "granularConfig";
  granularConfig: ApolloGranularConfig;
}
/**
 * Type for configuration used by cross stack stores managed through the foundry/marketplace-apollo-bundles repo.
 */
export type ApolloStackManagementConfig =
  | ApolloStackManagementConfig_stackLevelConfig
  | ApolloStackManagementConfig_granularConfig;

export interface AppConfigCreateBlockRequest {
  rid: string;
  version?: number | null | undefined;
}
export interface AppConfigIdentifier_rid {
  type: "rid";
  rid: string;
}
export type AppConfigIdentifier = AppConfigIdentifier_rid;

export interface AppConfigOutputShape {
  about: LocalizedTitleAndDescription;
}
/**
 * Reference for identifying a recommendation that is applied to the inputs of an installation
 */
export interface AppliedExternalRecommendationV2 {
  recommendationSource: ExternalRecommendationSource;
  upstreamBlockSet: BlockSetId;
  upstreamBlockSetInstallation: BlockSetInstallationRid;
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
export type ArtifactsBearerToken = string;
export interface ArtifactsRepositoryIdentifier {
  rid: ArtifactsRepositoryRid;
}
export type ArtifactsRepositoryRid = string;
export interface ArtifactsRepositoryShape {
  about: LocalizedTitleAndDescription;
}
export interface AssociatedBlockSetInstallation_newBlockSet {
  type: "newBlockSet";
  newBlockSet: NewAssociatedBlockSetInstallation;
}

export interface AssociatedBlockSetInstallation_existingBlockSet {
  type: "existingBlockSet";
  existingBlockSet: ExistingAssociatedBlockSetInstallation;
}
export type AssociatedBlockSetInstallation =
  | AssociatedBlockSetInstallation_newBlockSet
  | AssociatedBlockSetInstallation_existingBlockSet;

/**
 * For an installation associated with a job, this contains the store the product belonged to, the installation
 * rid and the version that the job is trying to install.
 */
export interface AssociatedBlockSetInstallationIdentifiers {
  blockSetId: BlockSetId;
  blockSetInstallationRid: BlockSetInstallationRid;
  marketplaceRid: MarketplaceRid;
  targetVersionId: BlockSetVersionId;
}
/**
 * A block install should be referenced exactly once across all BlockSet installs.
 */
export interface AssociatedWithMultipleBlockSetInstallations {
  blockSets: Array<BlockSetReference>;
}
/**
 * An output cannot be attached if it's installed by another installation.
 */
export interface AttachedOutputCreatedInAnotherInstallation {
  blockInstallationRid: BlockInstallationRid;
  blockSetInstallationRid: BlockSetInstallationRid;
}
/**
 * When attaching outputs for a block, all outputs of the block must be attached. Partial attachment of a block's
 * outputs is not supported.
 */
export interface AttachedOutputShapeNotSpecified {
}
export type AttachmentId = string;

/**
 * AttachmentListType specifies that this parameter must be a list of Attachment rids.
 */
export interface AttachmentListType {
}
export interface AttachmentMetadata {
  filename: Filename;
  id: AttachmentId;
  mimeType: MimeType;
}
/**
 * AttachmentType specifies that this parameter must be the rid of an Attachment.
 */
export interface AttachmentType {
}
export interface AttachResourcesNotSupportedForBlockType {
  attachedOutputShapeIds: Array<BlockShapeId>;
}
export interface AttachResourceValidationErrors_attachResourcesNotSupportedForBlockType {
  type: "attachResourcesNotSupportedForBlockType";
  attachResourcesNotSupportedForBlockType:
    AttachResourcesNotSupportedForBlockType;
}
export type AttachResourceValidationErrors =
  AttachResourceValidationErrors_attachResourcesNotSupportedForBlockType;

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
export interface AuthoringLibraryIdentifier {
  locator: AuthoringLibraryLocator;
  repositoryRid: ArtifactsRepositoryRid;
}
export interface AuthoringLibraryLocator_condaLocator {
  type: "condaLocator";
  condaLocator: CondaLocator;
}

export interface AuthoringLibraryLocator_condaLocatorV2 {
  type: "condaLocatorV2";
  condaLocatorV2: CondaLocatorV2;
}
export type AuthoringLibraryLocator =
  | AuthoringLibraryLocator_condaLocator
  | AuthoringLibraryLocator_condaLocatorV2;

/**
 * The authoring library referenced by the resolved shape was not found.
 */
export interface AuthoringLibraryNotFoundError {
  artifactsRepositoryRid: ArtifactsRepositoryRid;
  authoringLibraryLocator: string;
}
/**
 * This shape is used to refer to libraries that are produced by repositories created in Authoring.
 */
export interface AuthoringLibraryShape {
  about: LocalizedTitleAndDescription;
}
/**
 * DEPRECATED - use AuthoringRepositoryCreateBlockRequestV2 instead as it supports authoring repositories that
 * publish both jobspecs and libraries
 */
export interface AuthoringRepositoryCreateBlockRequest {
  environmentIdentificationMethod:
    AuthoringRepositoryEnvironmentIdentificationMethod;
  repositoryRid: AuthoringRepositoryRid;
  sourceCodePackaging?: RepositorySourceCodePackagingType | null | undefined;
}
export interface AuthoringRepositoryCreateBlockRequestV2 {
  environmentIdentificationMethod:
    AuthoringRepositoryEnvironmentIdentificationMethodV2;
  repositoryRid: AuthoringRepositoryRid;
  sourceCodePackaging: RepositorySourceCodePackagingType;
  templatizeSourceCode?: boolean | null | undefined;
}
export interface AuthoringRepositoryEnvironmentIdentificationMethod_jobSpecs {
  type: "jobSpecs";
  jobSpecs: JobSpecEnvironmentIdentificationMethod;
}
/**
 * DEPRECATED - use AuthoringRepositoryEnvironmentIdentificationMethodV2 instead as it supports both jobspecs
 * and libraries
 */
export type AuthoringRepositoryEnvironmentIdentificationMethod =
  AuthoringRepositoryEnvironmentIdentificationMethod_jobSpecs;

/**
 * Used during repository packaging to define how the repository should determine the artifacts that make up
 * its run and/or build time environment for packaging in the block. This would break the old API that just
 * supported jobspecs and so we introduce a V2 version here that supports authoring repositories publishing
 * multiple output types, such as jobspecs and libraries.
 */
export interface AuthoringRepositoryEnvironmentIdentificationMethodV2 {
  jobSpecs: Array<JobSpecEnvironmentIdentificationMethodV2>;
  libraryLocators: Array<LibraryLocatorEnvironmentIdentificationMethod>;
}
export interface AuthoringRepositoryIdentifier {
  rid: AuthoringRepositoryRid;
}
export interface AuthoringRepositoryOutputSpecConfig {
  jobSpecs?: Array<JobSpecEnvironmentIdentificationMethodV2> | null | undefined;
  library?:
    | Array<LibraryLocatorEnvironmentIdentificationMethod>
    | null
    | undefined;
  sourceCodeConfig?: AuthoringRepositorySourceCodeConfig | null | undefined;
  templatizeSourceCode?: boolean | null | undefined;
}
export type AuthoringRepositoryRid = string;
export interface AuthoringRepositoryShape {
  about: LocalizedTitleAndDescription;
}
/**
 * This configuration determines the method by how the source code is packaged from a repository. The available
 * options are:
 * - OMIT_SOURCE_CODE: Excludes the source code.
 * - SHALLOW_CLONE: Packages source code without version control hitory.
 * - DEEP_CLONE:  Packages everything.
 */
export type AuthoringRepositorySourceCodeConfig =
  | "OMIT_SOURCE_CODE"
  | "SHALLOW_CLONE"
  | "DEEP_CLONE";
export interface AutomationCreateBlockRequest {
  generateCredentialInput?: boolean | null | undefined;
  rid: string;
}
export interface AutomationIdentifier {
  rid: AutomationRid;
}
export interface AutomationOutputSpecConfig {
  generateCredentialInput?: boolean | null | undefined;
}
export type AutomationRid = string;
export interface AutomationShape {
  about: LocalizedTitleAndDescription;
}
export interface AutomationStatus_idle {
  type: "idle";
  idle: IdleStatus;
}

export interface AutomationStatus_processing {
  type: "processing";
  processing: ProcessingStatus;
}

export interface AutomationStatus_failedConstraints {
  type: "failedConstraints";
  failedConstraints: FailedConstraintsStatus;
}

export interface AutomationStatus_upgrading {
  type: "upgrading";
  upgrading: UpgradingStatus;
}
export type AutomationStatus =
  | AutomationStatus_idle
  | AutomationStatus_processing
  | AutomationStatus_failedConstraints
  | AutomationStatus_upgrading;

export interface BackwardsIncompatibilityDiffImplication_actionTypeInputRequiresNewParameters {
  type: "actionTypeInputRequiresNewParameters";
  actionTypeInputRequiresNewParameters:
    ActionTypeInputRequiresNewParametersImplication;
}

export interface BackwardsIncompatibilityDiffImplication_actionTypeInputRequiresNewParametersV2 {
  type: "actionTypeInputRequiresNewParametersV2";
  actionTypeInputRequiresNewParametersV2:
    ActionTypeInputRequiresNewParametersImplicationV2;
}

export interface BackwardsIncompatibilityDiffImplication_actionTypeParameterTypeChanged {
  type: "actionTypeParameterTypeChanged";
  actionTypeParameterTypeChanged: ActionTypeParameterTypeChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_actionTypeParameterTypeChangedV2 {
  type: "actionTypeParameterTypeChangedV2";
  actionTypeParameterTypeChangedV2: ActionTypeParameterTypeChangedImplicationV2;
}

export interface BackwardsIncompatibilityDiffImplication_blobsterResourceAllowedTypesChanged {
  type: "blobsterResourceAllowedTypesChanged";
  blobsterResourceAllowedTypesChanged:
    BlobsterResourceAllowedTypesChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_eddieParameterNoLongerOptional {
  type: "eddieParameterNoLongerOptional";
  eddieParameterNoLongerOptional: EddieParameterNoLongerOptionalImplication;
}

export interface BackwardsIncompatibilityDiffImplication_eddieParameterTypeChanged {
  type: "eddieParameterTypeChanged";
  eddieParameterTypeChanged: EddieParameterTypeChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_inputShapeTypeMismatch {
  type: "inputShapeTypeMismatch";
  inputShapeTypeMismatch: InputShapeTypeMismatchImplication;
}

export interface BackwardsIncompatibilityDiffImplication_functionOutputTypeChanged {
  type: "functionOutputTypeChanged";
  functionOutputTypeChanged: FunctionOutputTypeChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_functionRequiresAdditionalInput {
  type: "functionRequiresAdditionalInput";
  functionRequiresAdditionalInput: FunctionRequiresAdditionalInputImplication;
}

export interface BackwardsIncompatibilityDiffImplication_functionInputChangedToRequired {
  type: "functionInputChangedToRequired";
  functionInputChangedToRequired: FunctionInputChangedToRequiredImplication;
}

export interface BackwardsIncompatibilityDiffImplication_functionInputDataTypeChanged {
  type: "functionInputDataTypeChanged";
  functionInputDataTypeChanged: FunctionInputDataTypeChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_linkTypeInputBackendChanged {
  type: "linkTypeInputBackendChanged";
  linkTypeInputBackendChanged: LinkTypeInputBackendChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_linkTypeInputRequiringSupportOfEdits {
  type: "linkTypeInputRequiringSupportOfEdits";
  linkTypeInputRequiringSupportOfEdits:
    LinkTypeInputRequiringSupportOfEditsImplication;
}

export interface BackwardsIncompatibilityDiffImplication_linkTypeNoLongerSupportingEdits {
  type: "linkTypeNoLongerSupportingEdits";
  linkTypeNoLongerSupportingEdits: LinkTypeNoLongerSupportingEditsImplication;
}

export interface BackwardsIncompatibilityDiffImplication_outputShapeRemoved {
  type: "outputShapeRemoved";
  outputShapeRemoved: OutputShapeRemovedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_outputShapeTypeMismatch {
  type: "outputShapeTypeMismatch";
  outputShapeTypeMismatch: OutputShapeTypeMismatchImplication;
}

export interface BackwardsIncompatibilityDiffImplication_objectTypeNoLongerSupportingEdits {
  type: "objectTypeNoLongerSupportingEdits";
  objectTypeNoLongerSupportingEdits:
    ObjectTypeNoLongerSupportingEditsImplication;
}

export interface BackwardsIncompatibilityDiffImplication_objectTypeInputRequiringSupportOfEdits {
  type: "objectTypeInputRequiringSupportOfEdits";
  objectTypeInputRequiringSupportOfEdits:
    ObjectTypeInputRequiringSupportOfEditsImplication;
}

export interface BackwardsIncompatibilityDiffImplication_objectTypeInputBackendChanged {
  type: "objectTypeInputBackendChanged";
  objectTypeInputBackendChanged: ObjectTypeInputBackendChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_objectTypePropertyTypeChanged {
  type: "objectTypePropertyTypeChanged";
  objectTypePropertyTypeChanged: ObjectTypePropertyTypeChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_objectTypeOutputPropertiesRemoved {
  type: "objectTypeOutputPropertiesRemoved";
  objectTypeOutputPropertiesRemoved:
    ObjectTypeOutputPropertiesRemovedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_objectTypeInputRequiresNewProperties {
  type: "objectTypeInputRequiresNewProperties";
  objectTypeInputRequiresNewProperties:
    ObjectTypeInputRequiresNewPropertiesImplication;
}

export interface BackwardsIncompatibilityDiffImplication_sharedPropertyTypeBaseTypeChanged {
  type: "sharedPropertyTypeBaseTypeChanged";
  sharedPropertyTypeBaseTypeChanged: SharedPropertyTypeBaseTypeChanged;
}

export interface BackwardsIncompatibilityDiffImplication_tabularDatasourceColumnTypeChanged {
  type: "tabularDatasourceColumnTypeChanged";
  tabularDatasourceColumnTypeChanged:
    TabularDatasourceColumnTypeChangedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_tabularDatasourceOutputColumnsRemoved {
  type: "tabularDatasourceOutputColumnsRemoved";
  tabularDatasourceOutputColumnsRemoved:
    TabularDatasourceOutputColumnsRemovedImplication;
}

export interface BackwardsIncompatibilityDiffImplication_tabularDatasourceInputRequiresNewColumns {
  type: "tabularDatasourceInputRequiresNewColumns";
  tabularDatasourceInputRequiresNewColumns:
    TabularDatasourceInputRequiresNewColumnsImplication;
}

export interface BackwardsIncompatibilityDiffImplication_tabularDatasourceColumnsOrderInSchemaChanged {
  type: "tabularDatasourceColumnsOrderInSchemaChanged";
  tabularDatasourceColumnsOrderInSchemaChanged:
    TabularDatasourceColumnsOrderInSchemaChangedImplication;
}
export type BackwardsIncompatibilityDiffImplication =
  | BackwardsIncompatibilityDiffImplication_actionTypeInputRequiresNewParameters
  | BackwardsIncompatibilityDiffImplication_actionTypeInputRequiresNewParametersV2
  | BackwardsIncompatibilityDiffImplication_actionTypeParameterTypeChanged
  | BackwardsIncompatibilityDiffImplication_actionTypeParameterTypeChangedV2
  | BackwardsIncompatibilityDiffImplication_blobsterResourceAllowedTypesChanged
  | BackwardsIncompatibilityDiffImplication_eddieParameterNoLongerOptional
  | BackwardsIncompatibilityDiffImplication_eddieParameterTypeChanged
  | BackwardsIncompatibilityDiffImplication_inputShapeTypeMismatch
  | BackwardsIncompatibilityDiffImplication_functionOutputTypeChanged
  | BackwardsIncompatibilityDiffImplication_functionRequiresAdditionalInput
  | BackwardsIncompatibilityDiffImplication_functionInputChangedToRequired
  | BackwardsIncompatibilityDiffImplication_functionInputDataTypeChanged
  | BackwardsIncompatibilityDiffImplication_linkTypeInputBackendChanged
  | BackwardsIncompatibilityDiffImplication_linkTypeInputRequiringSupportOfEdits
  | BackwardsIncompatibilityDiffImplication_linkTypeNoLongerSupportingEdits
  | BackwardsIncompatibilityDiffImplication_outputShapeRemoved
  | BackwardsIncompatibilityDiffImplication_outputShapeTypeMismatch
  | BackwardsIncompatibilityDiffImplication_objectTypeNoLongerSupportingEdits
  | BackwardsIncompatibilityDiffImplication_objectTypeInputRequiringSupportOfEdits
  | BackwardsIncompatibilityDiffImplication_objectTypeInputBackendChanged
  | BackwardsIncompatibilityDiffImplication_objectTypePropertyTypeChanged
  | BackwardsIncompatibilityDiffImplication_objectTypeOutputPropertiesRemoved
  | BackwardsIncompatibilityDiffImplication_objectTypeInputRequiresNewProperties
  | BackwardsIncompatibilityDiffImplication_sharedPropertyTypeBaseTypeChanged
  | BackwardsIncompatibilityDiffImplication_tabularDatasourceColumnTypeChanged
  | BackwardsIncompatibilityDiffImplication_tabularDatasourceOutputColumnsRemoved
  | BackwardsIncompatibilityDiffImplication_tabularDatasourceInputRequiresNewColumns
  | BackwardsIncompatibilityDiffImplication_tabularDatasourceColumnsOrderInSchemaChanged;

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

export interface BatchCountBlockSetInstallationsRequest {
  requests: Array<CountBlockSetInstallationsRequest>;
}
export interface BatchCountBlockSetInstallationsResponse {
  results: Record<BlockSetId, CountBlockSetInstallationsResponse>;
}
export interface BatchGetApolloBlockSetVersionPublishingStatusRequest {
  blockSetVersionIds: Array<BlockSetVersionId>;
}
export interface BatchGetApolloBlockSetVersionPublishingStatusResponse {
  blockSetVersionIdToSpacesStatus: Record<
    BlockSetVersionId,
    ApolloSpaceToPublishingStatus
  >;
}
export interface BatchGetBlockInstallationJobsRequest {
  jobRids: Array<InstallBlocksJobRid>;
}
export interface BatchGetBlockInstallationJobsResponse {
  jobs: Record<InstallBlocksJobRid, BlockInstallationJob>;
}
export interface BatchGetBlockInstallationsRequest {
  blockInstallationRids: Array<BlockInstallationRid>;
}
export interface BatchGetBlockInstallationsResponse {
  blockInstallations: Record<BlockInstallationRid, BlockInstallation>;
}
export interface BatchGetInstallableBlockSetVersionsRequest {
  blockSetVersionIds: Array<BlockSetVersionId>;
}
export interface BatchGetInstallableBlockSetVersionsResponse {
  responses: Record<BlockSetVersionId, GetInstallableBlockSetVersionResponse>;
}
export interface BatchGetInstallableBlockVersionRequest {
  blockVersions: Array<BlockVersionId>;
}
export interface BatchGetInstallableBlockVersionResponse {
  responses: Record<BlockVersionId, GetInstallableBlockVersionResponse>;
}
export interface BlobsterCreateBlockRequest {
  rid: string;
}
export interface BlobsterInputIdentifier {
  allowedTypes: Array<BlobsterResourceType>;
  rid: BlobsterRid;
}
export interface BlobsterOutputIdentifier {
  rid: BlobsterRid;
}
/**
 * Blobster resource type has changed and the resolved input is no longer compatible.
 */
export interface BlobsterResourceAllowedTypesChangedImplication {
  removedTypes: Array<BlobsterResourceType>;
}
export interface BlobsterResourceInputShape {
  about: LocalizedTitleAndDescription;
  allowedTypes: Array<BlobsterResourceType>;
}
/**
 * The type of this resource does not match one of the allowed types.
 */
export interface BlobsterResourceInputShapeTypeMismatch {
  actual: ResourceType;
  expected: Array<BlobsterResourceType>;
}
export interface BlobsterResourceOutputShape {
  about: LocalizedTitleAndDescription;
  type?: BlobsterResourceType | null | undefined;
}
/**
 * The service to which rid belongs is different from the one that was expected.
 */
export interface BlobsterResourceShapeServiceMismatch {
  actual: ServiceName;
  expected: ServiceName;
}
/**
 * Represents the type of a Blobster resource. Should be the type from the RID in UPPERCASE. E.g. for an image
 * resource with RID `ri.blobster.main.image.<uuid>`, the resource type would be `IMAGE`.
 */
export type BlobsterResourceType = "IMAGE" | "DOCUMENT" | "CODE" | "BLOB";
export type BlobsterRid = string;
export interface Block {
  blockVersionId: BlockVersionId;
  id: BlockId;
  internal: BlockInternal;
  version: BlockVersion;
}
export interface BlockCreationError_aborted {
  type: "aborted";
  aborted: Void;
}

export interface BlockCreationError_dataUploadTimeout {
  type: "dataUploadTimeout";
  dataUploadTimeout: BlockCreationErrorDataUploadTimeout;
}

export interface BlockCreationError_dataUploadFailed {
  type: "dataUploadFailed";
  dataUploadFailed: BlockCreationErrorDataUploadFailed;
}

export interface BlockCreationError_generic {
  type: "generic";
  generic: BlockCreationErrorGeneric;
}
export type BlockCreationError =
  | BlockCreationError_aborted
  | BlockCreationError_dataUploadTimeout
  | BlockCreationError_dataUploadFailed
  | BlockCreationError_generic;

export interface BlockCreationErrorDataUploadFailed {
  error?: _api_errors_MarketplaceSerializableError | null | undefined;
  errorInstanceId?: ErrorInstanceId | null | undefined;
  errorMessage: string;
}
export interface BlockCreationErrorDataUploadTimeout {
  timeoutSeconds: number;
}
export interface BlockCreationErrorGeneric {
  errorInstanceId?: ErrorInstanceId | null | undefined;
  errorMessage: string;
}
/**
 * An identifier for a piece of block data. These can be referenced from e.g. stored manifest files, and/or in
 * `BlockSpecificConfiguration`.
 */
export type BlockDataId = BlockInternalId;
export interface BlockDisplayMetadata {
  about: LocalizedTitleAndDescription;
}
/**
 * Unique identifier for a particular block that stays constant across versions.
 */
export type BlockId = string;
export interface BlockIdAndType {
  blockId: BlockId;
  blockType: BlockType;
}
/**
 * The sum of the input shapes of all blocks in the block set.
 */
export interface BlockInputShapeSizeLimitCount {
  inputShapeLimit: number;
  numberOfInputShapes: number;
  thresholdPercent: number;
}
export interface BlockInstallActionParameterTypeShapeError_parameterNotFound {
  type: "parameterNotFound";
  parameterNotFound: ActionParameterNotFound;
}

export interface BlockInstallActionParameterTypeShapeError_requiredParameterMissing {
  type: "requiredParameterMissing";
  requiredParameterMissing: RequiredActionParameterTypeShapeMissing;
}

export interface BlockInstallActionParameterTypeShapeError_shapeNotFound {
  type: "shapeNotFound";
  shapeNotFound: ActionParameterTypeShapeNotFound;
}

export interface BlockInstallActionParameterTypeShapeError_shapeTypeMismatch {
  type: "shapeTypeMismatch";
  shapeTypeMismatch: ActionParameterTypeShapeTypeMismatch;
}

export interface BlockInstallActionParameterTypeShapeError_shapeTypeObjectTypeIdUnresolvable {
  type: "shapeTypeObjectTypeIdUnresolvable";
  shapeTypeObjectTypeIdUnresolvable:
    ActionParameterShapeTypeObjectTypeIdUnresolvable;
}

export interface BlockInstallActionParameterTypeShapeError_shapeTypeInterfaceTypeRidUnresolvable {
  type: "shapeTypeInterfaceTypeRidUnresolvable";
  shapeTypeInterfaceTypeRidUnresolvable:
    ActionParameterShapeTypeInterfaceTypeRidUnresolvable;
}

export interface BlockInstallActionParameterTypeShapeError_shapeTypeUnknown {
  type: "shapeTypeUnknown";
  shapeTypeUnknown: ActionParameterTypeShapeTypeUnknown;
}
/**
 * Errors specific to ActionParameterTypeShape(s).
 */
export type BlockInstallActionParameterTypeShapeError =
  | BlockInstallActionParameterTypeShapeError_parameterNotFound
  | BlockInstallActionParameterTypeShapeError_requiredParameterMissing
  | BlockInstallActionParameterTypeShapeError_shapeNotFound
  | BlockInstallActionParameterTypeShapeError_shapeTypeMismatch
  | BlockInstallActionParameterTypeShapeError_shapeTypeObjectTypeIdUnresolvable
  | BlockInstallActionParameterTypeShapeError_shapeTypeInterfaceTypeRidUnresolvable
  | BlockInstallActionParameterTypeShapeError_shapeTypeUnknown;

export interface BlockInstallActionTypeParameterShapeErrorV2_shapeTypeMismatch {
  type: "shapeTypeMismatch";
  shapeTypeMismatch: ActionParameterTypeShapeTypeMismatch;
}

export interface BlockInstallActionTypeParameterShapeErrorV2_shapeTypeObjectTypeIdUnresolvable {
  type: "shapeTypeObjectTypeIdUnresolvable";
  shapeTypeObjectTypeIdUnresolvable:
    ActionParameterShapeTypeObjectTypeIdUnresolvable;
}

export interface BlockInstallActionTypeParameterShapeErrorV2_shapeTypeInterfaceTypeRidUnresolvable {
  type: "shapeTypeInterfaceTypeRidUnresolvable";
  shapeTypeInterfaceTypeRidUnresolvable:
    ActionParameterShapeTypeInterfaceTypeRidUnresolvable;
}

export interface BlockInstallActionTypeParameterShapeErrorV2_shapeTypeUnknown {
  type: "shapeTypeUnknown";
  shapeTypeUnknown: ActionParameterTypeShapeTypeUnknown;
}
/**
 * Errors specific to ActionParameterTypeShape(s).
 */
export type BlockInstallActionTypeParameterShapeErrorV2 =
  | BlockInstallActionTypeParameterShapeErrorV2_shapeTypeMismatch
  | BlockInstallActionTypeParameterShapeErrorV2_shapeTypeObjectTypeIdUnresolvable
  | BlockInstallActionTypeParameterShapeErrorV2_shapeTypeInterfaceTypeRidUnresolvable
  | BlockInstallActionTypeParameterShapeErrorV2_shapeTypeUnknown;

/**
 * A block installation records that a block has been installed in a given installation context.
 */
export interface BlockInstallation {
  blockId: BlockId;
  blockInstallationRid: BlockInstallationRid;
  blockVersionId: BlockVersionId;
  installationTimestamp: InstallationTimestamp;
  resolvedInputGroups: Record<InputGroupId, ResolvedInputGroup>;
  resolvedInputs: Record<BlockShapeId, BlockInstallationResolvedInput>;
  resolvedOutputs: Record<BlockShapeId, BlockInstallationResolvedOutput>;
  updatedAtTimestamp: UpdatedAtTimestamp;
}
/**
 * DEPRECATED: Use `BlockInstallLocation` instead.
 *
 * The installation context passed to services when doing a single block install/upgrade/preallocation.
 * Note that this type may deviate over time from the more general installation context.
 * This block-level one may differ between blocks in the same install request/blockset/etc.
 */
export interface BlockInstallationContext {
  compass: CompassContext;
  id: InstallationContextId;
  ontology: OntologyContext;
}
/**
 * Shape groups are installed at the same time and are affected by the same error.
 */
export interface BlockInstallationFailure {
  affectedShapes: Array<OutputBlockSetShapeId>;
  blockError: BlockInstallError;
  blockType: BlockType;
}
/**
 * Unique identifier for a block that is being requested for install or upgrade.
 */
export type BlockInstallationId = string;

/**
 * DEPRECATED. Use `BlockSetInstallationJob`.
 */
export interface BlockInstallationJob {
  associatedInstallations: Array<AssociatedBlockSetInstallationIdentifiers>;
  buildsFinishedAtTimestamp?: BuildsFinishedAtTimestamp | null | undefined;
  cleanupUnusedShapesStatuses: Record<
    BlockSetInstallationRid,
    CleanupUnusedShapesStatuses
  >;
  installationCreator: MultipassUserId;
  installationRequestTimestamp: InstallationTimestamp;
  installBlockSetsRequest?: InstallBlockSetsRequest | null | undefined;
  installRequest: InstallBlocksRequest;
  isPendingCancellation: boolean;
  marketplaceRid: MarketplaceRid;
  status: InstallBlocksStatus;
  updatedAtTimestamp: UpdatedAtTimestamp;
}
/**
 * Refers to an output shape of a specific block installation.
 * i.e. Unlike an OutputReference, the block is referred to always via a BlockInstallationRid.
 */
export interface BlockInstallationOutputReference {
  blockInstallationRid: BlockInstallationRid;
  outputShapeId: BlockShapeId;
}
export interface BlockInstallationResolvedInput {
  fromOutput?: BlockInstallationOutputReference | null | undefined;
  resolvedInput: ResolvedInputShape;
}
export interface BlockInstallationResolvedOutput {
  manuallyProvided: boolean;
  resolvedOutput: ResolvedOutputShape;
}
/**
 * Identifies a block installation.
 */
export type BlockInstallationRid = string;
export interface BlockInstallBlobsterResourceShapeError_serviceMismatch {
  type: "serviceMismatch";
  serviceMismatch: BlobsterResourceShapeServiceMismatch;
}

export interface BlockInstallBlobsterResourceShapeError_typeMismatch {
  type: "typeMismatch";
  typeMismatch: BlobsterResourceInputShapeTypeMismatch;
}
export type BlockInstallBlobsterResourceShapeError =
  | BlockInstallBlobsterResourceShapeError_serviceMismatch
  | BlockInstallBlobsterResourceShapeError_typeMismatch;

/**
 * The Column referenced by the resolved shape was not found.
 */
export interface BlockInstallColumnNotFound {
  column: string;
  datasourceLocator: DatasourceLocator;
}
export interface BlockInstallColumnShapeError_typeMismatch {
  type: "typeMismatch";
  typeMismatch: ColumnTypeMismatch;
}

export interface BlockInstallColumnShapeError_datasourceReferenceMismatch {
  type: "datasourceReferenceMismatch";
  datasourceReferenceMismatch: TabularDatasourceReferenceMismatch;
}

export interface BlockInstallColumnShapeError_datasourceReferenceUnresolvable {
  type: "datasourceReferenceUnresolvable";
  datasourceReferenceUnresolvable: TabularDatasourceReferenceUnresolvable;
}

export interface BlockInstallColumnShapeError_missingColumnTypeClass {
  type: "missingColumnTypeClass";
  missingColumnTypeClass: MissingColumnTypeClass;
}
export type BlockInstallColumnShapeError =
  | BlockInstallColumnShapeError_typeMismatch
  | BlockInstallColumnShapeError_datasourceReferenceMismatch
  | BlockInstallColumnShapeError_datasourceReferenceUnresolvable
  | BlockInstallColumnShapeError_missingColumnTypeClass;

/**
 * The Compass resource referenced by the resolved shape is trashed in Compass. The resource needs to be
 * restored from trash to be used in the install.
 */
export interface BlockInstallCompassResourceInTrash {
  rid: string;
}
export interface BlockInstallCompassResourceShapeError_typeMismatch {
  type: "typeMismatch";
  typeMismatch: CompassResourceInputShapeTypeMismatch;
}

export interface BlockInstallCompassResourceShapeError_outputTypeMismatch {
  type: "outputTypeMismatch";
  outputTypeMismatch: CompassResourceOutputShapeTypeMismatch;
}
export type BlockInstallCompassResourceShapeError =
  | BlockInstallCompassResourceShapeError_typeMismatch
  | BlockInstallCompassResourceShapeError_outputTypeMismatch;

/**
 * The connection was not found on the provided source.
 */
export interface BlockInstallConnectionNotFoundError {
  connectionId: MagritteConnectionId;
  sourceRid: MagritteSourceRid;
}
/**
 * The connection on the input shape references a different magritteSource than the one on the resolved shape.
 */
export interface BlockInstallConnectionReferenceMismatchError {
}
/**
 * The connection on the input shape cannot be matched with the connection on the resolved shape.
 * This is typical if the referenced Magritte source source has not been included as an input to the block.
 */
export interface BlockInstallConnectionReferenceUnresolvableError {
}
export interface BlockInstallError_inputDependencyCycles {
  type: "inputDependencyCycles";
  inputDependencyCycles: BlockInstallInputDependencyCycles;
}

export interface BlockInstallError_installTimedOut {
  type: "installTimedOut";
  installTimedOut: BlockInstallTimedOut;
}

export interface BlockInstallError_noProcessableInstallationInstructions {
  type: "noProcessableInstallationInstructions";
  noProcessableInstallationInstructions:
    BlockInstallNoProcessableInstallationInstructions;
}

export interface BlockInstallError_illegalRequestError {
  type: "illegalRequestError";
  illegalRequestError: BlockInstallIllegalRequestError;
}

export interface BlockInstallError_installFailure {
  type: "installFailure";
  installFailure: BlockInstallFailure;
}

export interface BlockInstallError_buildFailure {
  type: "buildFailure";
  buildFailure: BuildFailure;
}

export interface BlockInstallError_buildOrchestrationFailure {
  type: "buildOrchestrationFailure";
  buildOrchestrationFailure: BuildOrchestrationFailure;
}

export interface BlockInstallError_buildTimeout {
  type: "buildTimeout";
  buildTimeout: BuildTimeout;
}

export interface BlockInstallError_failedToDeleteResources {
  type: "failedToDeleteResources";
  failedToDeleteResources: FailedToDeleteResourcesError;
}

export interface BlockInstallError_reconcileBlockInstallationResponseError {
  type: "reconcileBlockInstallationResponseError";
  reconcileBlockInstallationResponseError: BlockInstallReconcileError;
}

export interface BlockInstallError_indexFailure {
  type: "indexFailure";
  indexFailure: IndexFailure;
}
/**
 * Errors that can occur during installation of a block.
 */
export type BlockInstallError =
  | BlockInstallError_inputDependencyCycles
  | BlockInstallError_installTimedOut
  | BlockInstallError_noProcessableInstallationInstructions
  | BlockInstallError_illegalRequestError
  | BlockInstallError_installFailure
  | BlockInstallError_buildFailure
  | BlockInstallError_buildOrchestrationFailure
  | BlockInstallError_buildTimeout
  | BlockInstallError_failedToDeleteResources
  | BlockInstallError_reconcileBlockInstallationResponseError
  | BlockInstallError_indexFailure;

export interface BlockInstallFailure {
  args: Array<ErrorArg>;
  message: string;
}
/**
 * The provided Flink profile name is not found in streaming profile service.
 */
export interface BlockInstallFlinkProfileNotFound {
  profileName: FlinkProfileName;
}
/**
 * The Function referenced by the resolved input shape was not found.
 */
export interface BlockInstallFunctionNotFound {
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
export interface BlockInstallFunctionShapeError_contractNotImplemented {
  type: "contractNotImplemented";
  contractNotImplemented: FunctionContractNotImplemented;
}

export interface BlockInstallFunctionShapeError_customTypeDataTypeActionTypeReferencesUnsupported {
  type: "customTypeDataTypeActionTypeReferencesUnsupported";
  customTypeDataTypeActionTypeReferencesUnsupported:
    FunctionCustomTypeDataTypeActionTypeReferencesNotSupported;
}

export interface BlockInstallFunctionShapeError_customTypeDataTypeCustomTypeNotFound {
  type: "customTypeDataTypeCustomTypeNotFound";
  customTypeDataTypeCustomTypeNotFound:
    FunctionCustomTypeDataTypeCustomTypeNotFound;
}

export interface BlockInstallFunctionShapeError_customTypeDataTypeInterfaceTypeUnresolvable {
  type: "customTypeDataTypeInterfaceTypeUnresolvable";
  customTypeDataTypeInterfaceTypeUnresolvable:
    FunctionCustomTypeDataTypeInterfaceTypeUnresolvable;
}

export interface BlockInstallFunctionShapeError_customTypeDataTypeMarkingSubTypeUnknown {
  type: "customTypeDataTypeMarkingSubTypeUnknown";
  customTypeDataTypeMarkingSubTypeUnknown:
    FunctionCustomTypeDataTypeMarkingSubTypeUnknown;
}

export interface BlockInstallFunctionShapeError_customTypeDataTypeObjectTypeUnresolvable {
  type: "customTypeDataTypeObjectTypeUnresolvable";
  customTypeDataTypeObjectTypeUnresolvable:
    FunctionCustomTypeDataTypeObjectTypeUnresolvable;
}

export interface BlockInstallFunctionShapeError_customTypeDataTypeUnknown {
  type: "customTypeDataTypeUnknown";
  customTypeDataTypeUnknown: FunctionCustomTypeDataTypeUnknown;
}

export interface BlockInstallFunctionShapeError_dataTypeValueTypeUnresolvable {
  type: "dataTypeValueTypeUnresolvable";
  dataTypeValueTypeUnresolvable: FunctionDataTypeValueTypeUnresolvable;
}

export interface BlockInstallFunctionShapeError_dataTypeValueTypeUnresolvableV2 {
  type: "dataTypeValueTypeUnresolvableV2";
  dataTypeValueTypeUnresolvableV2: FunctionDataTypeValueTypeUnresolvableV2;
}

export interface BlockInstallFunctionShapeError_incompatibleContractSemverBlocking {
  type: "incompatibleContractSemverBlocking";
  incompatibleContractSemverBlocking: IncompatibleContractSemverError;
}

export interface BlockInstallFunctionShapeError_incompatibleContractSemverNonBlocking {
  type: "incompatibleContractSemverNonBlocking";
  incompatibleContractSemverNonBlocking: IncompatibleContractSemverError;
}

export interface BlockInstallFunctionShapeError_inputDataTypeActionTypeReferencesUnsupported {
  type: "inputDataTypeActionTypeReferencesUnsupported";
  inputDataTypeActionTypeReferencesUnsupported:
    FunctionInputDataTypeActionTypeReferencesUnsupported;
}

export interface BlockInstallFunctionShapeError_inputDataTypeActionTypeReferencesUnsupportedV2 {
  type: "inputDataTypeActionTypeReferencesUnsupportedV2";
  inputDataTypeActionTypeReferencesUnsupportedV2:
    FunctionInputDataTypeActionTypeReferencesUnsupportedV2;
}

export interface BlockInstallFunctionShapeError_inputDataTypeCustomTypeNotFound {
  type: "inputDataTypeCustomTypeNotFound";
  inputDataTypeCustomTypeNotFound: FunctionInputDataTypeCustomTypeNotFound;
}

export interface BlockInstallFunctionShapeError_inputDataTypeCustomTypeNotFoundV2 {
  type: "inputDataTypeCustomTypeNotFoundV2";
  inputDataTypeCustomTypeNotFoundV2: FunctionInputDataTypeCustomTypeNotFoundV2;
}

export interface BlockInstallFunctionShapeError_inputDataTypeInterfaceTypeUnresolvable {
  type: "inputDataTypeInterfaceTypeUnresolvable";
  inputDataTypeInterfaceTypeUnresolvable:
    FunctionInputDataTypeInterfaceTypeRidUnresolvable;
}

export interface BlockInstallFunctionShapeError_inputDataTypeMarkingSubTypeUnknown {
  type: "inputDataTypeMarkingSubTypeUnknown";
  inputDataTypeMarkingSubTypeUnknown:
    FunctionInputDataTypeMarkingSubTypeUnknown;
}

export interface BlockInstallFunctionShapeError_inputDataTypeMarkingSubTypeUnknownV2 {
  type: "inputDataTypeMarkingSubTypeUnknownV2";
  inputDataTypeMarkingSubTypeUnknownV2:
    FunctionInputDataTypeMarkingSubTypeUnknownV2;
}

export interface BlockInstallFunctionShapeError_inputDataTypeMismatch {
  type: "inputDataTypeMismatch";
  inputDataTypeMismatch: FunctionInputDataTypeMismatch;
}

export interface BlockInstallFunctionShapeError_inputDataTypeMismatchV2 {
  type: "inputDataTypeMismatchV2";
  inputDataTypeMismatchV2: FunctionInputDataTypeMismatchV2;
}

export interface BlockInstallFunctionShapeError_inputDataTypeObjectTypeUnresolvable {
  type: "inputDataTypeObjectTypeUnresolvable";
  inputDataTypeObjectTypeUnresolvable:
    FunctionInputDataTypeObjectTypeIdUnresolvable;
}

export interface BlockInstallFunctionShapeError_inputDataTypeObjectTypeUnresolvableV2 {
  type: "inputDataTypeObjectTypeUnresolvableV2";
  inputDataTypeObjectTypeUnresolvableV2:
    FunctionInputDataTypeObjectTypeIdUnresolvableV2;
}

export interface BlockInstallFunctionShapeError_inputDataTypeUnknown {
  type: "inputDataTypeUnknown";
  inputDataTypeUnknown: FunctionInputDataTypeUnknown;
}

export interface BlockInstallFunctionShapeError_inputDataTypeUnknownV2 {
  type: "inputDataTypeUnknownV2";
  inputDataTypeUnknownV2: FunctionInputDataTypeUnknownV2;
}

export interface BlockInstallFunctionShapeError_inputExtraDataTypeUnknown {
  type: "inputExtraDataTypeUnknown";
  inputExtraDataTypeUnknown: FunctionExtraInputDataTypeUnknown;
}

export interface BlockInstallFunctionShapeError_inputNamesDiffer {
  type: "inputNamesDiffer";
  inputNamesDiffer: FunctionInputNamesDiffer;
}

export interface BlockInstallFunctionShapeError_inputNotFound {
  type: "inputNotFound";
  inputNotFound: FunctionInputNotFound;
}

export interface BlockInstallFunctionShapeError_inputNotFoundV2 {
  type: "inputNotFoundV2";
  inputNotFoundV2: FunctionInputNotFoundV2;
}

export interface BlockInstallFunctionShapeError_inputNotOptional {
  type: "inputNotOptional";
  inputNotOptional: FunctionInputNotOptional;
}

export interface BlockInstallFunctionShapeError_inputNotOptionalV2 {
  type: "inputNotOptionalV2";
  inputNotOptionalV2: FunctionInputNotOptionalV2;
}

export interface BlockInstallFunctionShapeError_outputDataTypeActionTypeReferencesUnsupported {
  type: "outputDataTypeActionTypeReferencesUnsupported";
  outputDataTypeActionTypeReferencesUnsupported:
    FunctionOutputDataTypeActionTypeReferencesUnsupported;
}

export interface BlockInstallFunctionShapeError_outputDataTypeCustomTypeNotFound {
  type: "outputDataTypeCustomTypeNotFound";
  outputDataTypeCustomTypeNotFound: FunctionOutputDataTypeCustomTypeNotFound;
}

export interface BlockInstallFunctionShapeError_outputDataTypeInterfaceTypeUnresolvable {
  type: "outputDataTypeInterfaceTypeUnresolvable";
  outputDataTypeInterfaceTypeUnresolvable:
    FunctionOutputDataTypeInterfaceTypeRidUnresolvable;
}

export interface BlockInstallFunctionShapeError_outputDataTypeMarkingSubTypeUnknown {
  type: "outputDataTypeMarkingSubTypeUnknown";
  outputDataTypeMarkingSubTypeUnknown:
    FunctionOutputDataTypeMarkingSubTypeUnknown;
}

export interface BlockInstallFunctionShapeError_outputDataTypeMismatch {
  type: "outputDataTypeMismatch";
  outputDataTypeMismatch: FunctionOutputDataTypeMismatch;
}

export interface BlockInstallFunctionShapeError_outputDataTypeObjectTypeUnresolvable {
  type: "outputDataTypeObjectTypeUnresolvable";
  outputDataTypeObjectTypeUnresolvable:
    FunctionOutputDataTypeObjectTypeIdUnresolvable;
}

export interface BlockInstallFunctionShapeError_outputDataTypeUnknown {
  type: "outputDataTypeUnknown";
  outputDataTypeUnknown: FunctionOutputDataTypeUnknown;
}

export interface BlockInstallFunctionShapeError_outputTypeUnknown {
  type: "outputTypeUnknown";
  outputTypeUnknown: FunctionOutputTypeUnknown;
}

export interface BlockInstallFunctionShapeError_unexpectedNonOptionalInput {
  type: "unexpectedNonOptionalInput";
  unexpectedNonOptionalInput: UnexpectedNonOptionalFunctionInput;
}

export interface BlockInstallFunctionShapeError_unexpectedNonOptionalInputV2 {
  type: "unexpectedNonOptionalInputV2";
  unexpectedNonOptionalInputV2: UnexpectedNonOptionalFunctionInputV2;
}
export type BlockInstallFunctionShapeError =
  | BlockInstallFunctionShapeError_contractNotImplemented
  | BlockInstallFunctionShapeError_customTypeDataTypeActionTypeReferencesUnsupported
  | BlockInstallFunctionShapeError_customTypeDataTypeCustomTypeNotFound
  | BlockInstallFunctionShapeError_customTypeDataTypeInterfaceTypeUnresolvable
  | BlockInstallFunctionShapeError_customTypeDataTypeMarkingSubTypeUnknown
  | BlockInstallFunctionShapeError_customTypeDataTypeObjectTypeUnresolvable
  | BlockInstallFunctionShapeError_customTypeDataTypeUnknown
  | BlockInstallFunctionShapeError_dataTypeValueTypeUnresolvable
  | BlockInstallFunctionShapeError_dataTypeValueTypeUnresolvableV2
  | BlockInstallFunctionShapeError_incompatibleContractSemverBlocking
  | BlockInstallFunctionShapeError_incompatibleContractSemverNonBlocking
  | BlockInstallFunctionShapeError_inputDataTypeActionTypeReferencesUnsupported
  | BlockInstallFunctionShapeError_inputDataTypeActionTypeReferencesUnsupportedV2
  | BlockInstallFunctionShapeError_inputDataTypeCustomTypeNotFound
  | BlockInstallFunctionShapeError_inputDataTypeCustomTypeNotFoundV2
  | BlockInstallFunctionShapeError_inputDataTypeInterfaceTypeUnresolvable
  | BlockInstallFunctionShapeError_inputDataTypeMarkingSubTypeUnknown
  | BlockInstallFunctionShapeError_inputDataTypeMarkingSubTypeUnknownV2
  | BlockInstallFunctionShapeError_inputDataTypeMismatch
  | BlockInstallFunctionShapeError_inputDataTypeMismatchV2
  | BlockInstallFunctionShapeError_inputDataTypeObjectTypeUnresolvable
  | BlockInstallFunctionShapeError_inputDataTypeObjectTypeUnresolvableV2
  | BlockInstallFunctionShapeError_inputDataTypeUnknown
  | BlockInstallFunctionShapeError_inputDataTypeUnknownV2
  | BlockInstallFunctionShapeError_inputExtraDataTypeUnknown
  | BlockInstallFunctionShapeError_inputNamesDiffer
  | BlockInstallFunctionShapeError_inputNotFound
  | BlockInstallFunctionShapeError_inputNotFoundV2
  | BlockInstallFunctionShapeError_inputNotOptional
  | BlockInstallFunctionShapeError_inputNotOptionalV2
  | BlockInstallFunctionShapeError_outputDataTypeActionTypeReferencesUnsupported
  | BlockInstallFunctionShapeError_outputDataTypeCustomTypeNotFound
  | BlockInstallFunctionShapeError_outputDataTypeInterfaceTypeUnresolvable
  | BlockInstallFunctionShapeError_outputDataTypeMarkingSubTypeUnknown
  | BlockInstallFunctionShapeError_outputDataTypeMismatch
  | BlockInstallFunctionShapeError_outputDataTypeObjectTypeUnresolvable
  | BlockInstallFunctionShapeError_outputDataTypeUnknown
  | BlockInstallFunctionShapeError_outputTypeUnknown
  | BlockInstallFunctionShapeError_unexpectedNonOptionalInput
  | BlockInstallFunctionShapeError_unexpectedNonOptionalInputV2;

export interface BlockInstallFunctionShapeErrorV2_shapeConversion {
  type: "shapeConversion";
  shapeConversion: FunctionShapeConversionError;
}

export interface BlockInstallFunctionShapeErrorV2_incompatibleSignature {
  type: "incompatibleSignature";
  incompatibleSignature: FunctionShapeSignatureCompatibilityError;
}
export type BlockInstallFunctionShapeErrorV2 =
  | BlockInstallFunctionShapeErrorV2_shapeConversion
  | BlockInstallFunctionShapeErrorV2_incompatibleSignature;

export interface BlockInstallIllegalRequestError {
}
/**
 * The ActionType referenced by the resolved input shape was not found.
 */
export interface BlockInstallInputActionTypeNotFound {
  actionTypeRid: ActionTypeRid;
}
/**
 * There were one or more input dependency cycles detected in the input installation graph.
 */
export interface BlockInstallInputDependencyCycles {
  cycles: Array<InputDependencyCycle>;
}
/**
 * Value type of the provided ResolvedParameterInputShape does not match the expected type.
 */
export interface BlockInstallInputParameterTypeMismatch {
  actual: DataType;
  expected: DataType;
}
export interface BlockInstallInputShapeNotSpecified_requiredInputShape {
  type: "requiredInputShape";
  requiredInputShape: Void;
}

export interface BlockInstallInputShapeNotSpecified_usedByInputGroup {
  type: "usedByInputGroup";
  usedByInputGroup: BlockInstallInputShapeUsedByInputGroup;
}
export type BlockInstallInputShapeNotSpecified =
  | BlockInstallInputShapeNotSpecified_requiredInputShape
  | BlockInstallInputShapeNotSpecified_usedByInputGroup;

/**
 * The resolved input shape type is inconsistent with the unresolved shape type.
 */
export interface BlockInstallInputShapeTypeMismatch {
  actual: InputShapeType;
  expected: InputShapeType;
}
export interface BlockInstallInputShapeUsedByInputGroup {
  inputGroup: BlockSetInputGroupId;
}
/**
 * The InterfaceLinkType referenced by the resolved shape was not found.
 */
export interface BlockInstallInterfaceLinkTypeNotFound {
  interfaceLinkTypeRid: InterfaceLinkTypeRid;
  interfaceTypeRid: InterfaceTypeRid;
}
export interface BlockInstallInterfaceLinkTypeShapeError_interfaceTypeReferenceUnresolvable {
  type: "interfaceTypeReferenceUnresolvable";
  interfaceTypeReferenceUnresolvable: InterfaceTypeReferenceUnresolvable;
}

export interface BlockInstallInterfaceLinkTypeShapeError_interfaceTypeReferenceMismatch {
  type: "interfaceTypeReferenceMismatch";
  interfaceTypeReferenceMismatch: ResolvedInterfaceTypeReferenceMismatch;
}

export interface BlockInstallInterfaceLinkTypeShapeError_linkedInterfaceTypeReferenceUnresolvable {
  type: "linkedInterfaceTypeReferenceUnresolvable";
  linkedInterfaceTypeReferenceUnresolvable:
    LinkedInterfaceTypeReferenceUnresolvable;
}

export interface BlockInstallInterfaceLinkTypeShapeError_linkedInterfaceTypeReferenceMismatch {
  type: "linkedInterfaceTypeReferenceMismatch";
  linkedInterfaceTypeReferenceMismatch: LinkedInterfaceTypeReferenceMismatch;
}

export interface BlockInstallInterfaceLinkTypeShapeError_expectedLinkedObjectButWasInterface {
  type: "expectedLinkedObjectButWasInterface";
  expectedLinkedObjectButWasInterface: ExpectedLinkedObjectButWasInterface;
}

export interface BlockInstallInterfaceLinkTypeShapeError_linkedObjectTypeReferenceUnresolvable {
  type: "linkedObjectTypeReferenceUnresolvable";
  linkedObjectTypeReferenceUnresolvable: LinkedObjectTypeReferenceUnresolvable;
}

export interface BlockInstallInterfaceLinkTypeShapeError_linkedObjectTypeReferenceMismatch {
  type: "linkedObjectTypeReferenceMismatch";
  linkedObjectTypeReferenceMismatch: LinkedObjectTypeReferenceMismatch;
}

export interface BlockInstallInterfaceLinkTypeShapeError_expectedLinkedInterfaceButWasObject {
  type: "expectedLinkedInterfaceButWasObject";
  expectedLinkedInterfaceButWasObject: ExpectedLinkedInterfaceButWasObject;
}

export interface BlockInstallInterfaceLinkTypeShapeError_interfaceLinkTypeCardinalityMismatch {
  type: "interfaceLinkTypeCardinalityMismatch";
  interfaceLinkTypeCardinalityMismatch: InterfaceLinkTypeCardinalityMismatch;
}

export interface BlockInstallInterfaceLinkTypeShapeError_interfaceLinkTypeRequiredMismatch {
  type: "interfaceLinkTypeRequiredMismatch";
  interfaceLinkTypeRequiredMismatch: InterfaceLinkTypeRequiredMismatch;
}
export type BlockInstallInterfaceLinkTypeShapeError =
  | BlockInstallInterfaceLinkTypeShapeError_interfaceTypeReferenceUnresolvable
  | BlockInstallInterfaceLinkTypeShapeError_interfaceTypeReferenceMismatch
  | BlockInstallInterfaceLinkTypeShapeError_linkedInterfaceTypeReferenceUnresolvable
  | BlockInstallInterfaceLinkTypeShapeError_linkedInterfaceTypeReferenceMismatch
  | BlockInstallInterfaceLinkTypeShapeError_expectedLinkedObjectButWasInterface
  | BlockInstallInterfaceLinkTypeShapeError_linkedObjectTypeReferenceUnresolvable
  | BlockInstallInterfaceLinkTypeShapeError_linkedObjectTypeReferenceMismatch
  | BlockInstallInterfaceLinkTypeShapeError_expectedLinkedInterfaceButWasObject
  | BlockInstallInterfaceLinkTypeShapeError_interfaceLinkTypeCardinalityMismatch
  | BlockInstallInterfaceLinkTypeShapeError_interfaceLinkTypeRequiredMismatch;

/**
 * The InterfacePropertyType referenced by the resolved shape was not found.
 */
export interface BlockInstallInterfacePropertyTypeNotFound {
  interfacePropertyTypeRid: InterfacePropertyTypeRid;
  interfaceTypeRid: InterfaceTypeRid;
}
export interface BlockInstallInterfacePropertyTypeShapeError_interfaceTypeReferenceUnresolvable {
  type: "interfaceTypeReferenceUnresolvable";
  interfaceTypeReferenceUnresolvable: InterfaceTypeReferenceUnresolvable;
}

export interface BlockInstallInterfacePropertyTypeShapeError_interfaceTypeReferenceMismatch {
  type: "interfaceTypeReferenceMismatch";
  interfaceTypeReferenceMismatch: ResolvedInterfaceTypeReferenceMismatch;
}

export interface BlockInstallInterfacePropertyTypeShapeError_interfacePropertyTypeRequireImplementationMismatch {
  type: "interfacePropertyTypeRequireImplementationMismatch";
  interfacePropertyTypeRequireImplementationMismatch:
    InterfacePropertyTypeRequireImplementationMismatch;
}

export interface BlockInstallInterfacePropertyTypeShapeError_sharedPropertyTypeReferenceMismatch {
  type: "sharedPropertyTypeReferenceMismatch";
  sharedPropertyTypeReferenceMismatch:
    InterfacePropertySharedPropertyTypeReferenceMismatch;
}

export interface BlockInstallInterfacePropertyTypeShapeError_typeMismatch {
  type: "typeMismatch";
  typeMismatch: PropertyTypeMismatch;
}

export interface BlockInstallInterfacePropertyTypeShapeError_typeUnknown {
  type: "typeUnknown";
  typeUnknown: PropertyTypeUnknown;
}

export interface BlockInstallInterfacePropertyTypeShapeError_typeUnsupported {
  type: "typeUnsupported";
  typeUnsupported: string;
}

export interface BlockInstallInterfacePropertyTypeShapeError_nestedTypeUnknown {
  type: "nestedTypeUnknown";
  nestedTypeUnknown: PropertyTypeUnknown;
}

export interface BlockInstallInterfacePropertyTypeShapeError_nestedArraysUnsupported {
  type: "nestedArraysUnsupported";
  nestedArraysUnsupported: Void;
}

export interface BlockInstallInterfacePropertyTypeShapeError_plainTextTypeUnsupported {
  type: "plainTextTypeUnsupported";
  plainTextTypeUnsupported: PlainTextTypeUnsupported;
}

export interface BlockInstallInterfacePropertyTypeShapeError_structFieldTypeUnsupported {
  type: "structFieldTypeUnsupported";
  structFieldTypeUnsupported: StructFieldTypeUnsupported;
}
export type BlockInstallInterfacePropertyTypeShapeError =
  | BlockInstallInterfacePropertyTypeShapeError_interfaceTypeReferenceUnresolvable
  | BlockInstallInterfacePropertyTypeShapeError_interfaceTypeReferenceMismatch
  | BlockInstallInterfacePropertyTypeShapeError_interfacePropertyTypeRequireImplementationMismatch
  | BlockInstallInterfacePropertyTypeShapeError_sharedPropertyTypeReferenceMismatch
  | BlockInstallInterfacePropertyTypeShapeError_typeMismatch
  | BlockInstallInterfacePropertyTypeShapeError_typeUnknown
  | BlockInstallInterfacePropertyTypeShapeError_typeUnsupported
  | BlockInstallInterfacePropertyTypeShapeError_nestedTypeUnknown
  | BlockInstallInterfacePropertyTypeShapeError_nestedArraysUnsupported
  | BlockInstallInterfacePropertyTypeShapeError_plainTextTypeUnsupported
  | BlockInstallInterfacePropertyTypeShapeError_structFieldTypeUnsupported;

/**
 * The InterfaceType does not include all the necessary extended interfaces.
 */
export interface BlockInstallInterfaceTypeMissingExtendedInterfaces {
  interfaceTypeRid: InterfaceTypeRid;
  missingExtendedInterfaceTypeReferences: Array<InterfaceTypeReference>;
}
/**
 * The InterfaceType does not include all the necessary links
 */
export interface BlockInstallInterfaceTypeMissingLinks {
  interfaceTypeRid: InterfaceTypeRid;
  missingInterfaceLinkTypeReferences: Array<InterfaceLinkTypeReference>;
}
/**
 * The InterfaceType does not include all the necessary properties
 */
export interface BlockInstallInterfaceTypeMissingProperties {
  interfaceTypeRid: InterfaceTypeRid;
  missingInterfacePropertyTypeReferences: Array<InterfacePropertyTypeReference>;
  missingSharedPropertyTypeReferences: Array<SharedPropertyTypeReference>;
}
/**
 * The InterfaceType referenced by the resolved shape was not found.
 */
export interface BlockInstallInterfaceTypeNotFound {
  interfaceTypeRid: InterfaceTypeRid;
}
/**
 * The LinkType referenced by the resolved shape was not found.
 */
export interface BlockInstallLinkTypeNotFound {
  linkTypeId: LinkTypeId;
  linkTypeRid: LinkTypeRid;
}
export interface BlockInstallLinkTypeShapeError_unexpectedManyToManyLink {
  type: "unexpectedManyToManyLink";
  unexpectedManyToManyLink: Void;
}

export interface BlockInstallLinkTypeShapeError_unexpectedOneToManyLink {
  type: "unexpectedOneToManyLink";
  unexpectedOneToManyLink: Void;
}

export interface BlockInstallLinkTypeShapeError_unexpectedLink {
  type: "unexpectedLink";
  unexpectedLink: LinkTypeUnexpected;
}

export interface BlockInstallLinkTypeShapeError_unexpectedResolvedManyToManyLinkObjectTypes {
  type: "unexpectedResolvedManyToManyLinkObjectTypes";
  unexpectedResolvedManyToManyLinkObjectTypes: Void;
}

export interface BlockInstallLinkTypeShapeError_unexpectedResolvedOneToManyLinkObjectTypes {
  type: "unexpectedResolvedOneToManyLinkObjectTypes";
  unexpectedResolvedOneToManyLinkObjectTypes: Void;
}

export interface BlockInstallLinkTypeShapeError_unexpectedLinkedOntologyTypes {
  type: "unexpectedLinkedOntologyTypes";
  unexpectedLinkedOntologyTypes: LinkTypeUnexpected;
}

export interface BlockInstallLinkTypeShapeError_resolvedLinkedObjectTypesUnknown {
  type: "resolvedLinkedObjectTypesUnknown";
  resolvedLinkedObjectTypesUnknown: ResolvedLinkedObjectTypesUnknown;
}

export interface BlockInstallLinkTypeShapeError_linkTypeUnknown {
  type: "linkTypeUnknown";
  linkTypeUnknown: LinkTypeUnknown;
}

export interface BlockInstallLinkTypeShapeError_intermediaryLinkObjectTypeUnresolvable {
  type: "intermediaryLinkObjectTypeUnresolvable";
  intermediaryLinkObjectTypeUnresolvable:
    IntermediaryLinkObjectTypeReferenceUnresolvable;
}

export interface BlockInstallLinkTypeShapeError_intermediaryLinkObjectTypeMismatch {
  type: "intermediaryLinkObjectTypeMismatch";
  intermediaryLinkObjectTypeMismatch: IntermediaryLinkObjectTypeMismatch;
}

export interface BlockInstallLinkTypeShapeError_intermediaryLinkLinkTypeUnresolvable {
  type: "intermediaryLinkLinkTypeUnresolvable";
  intermediaryLinkLinkTypeUnresolvable:
    IntermediaryLinkLinkTypeReferenceUnresolvable;
}

export interface BlockInstallLinkTypeShapeError_intermediaryLinkLinkTypeMismatch {
  type: "intermediaryLinkLinkTypeMismatch";
  intermediaryLinkLinkTypeMismatch: IntermediaryLinkLinkTypeReferenceMismatch;
}

export interface BlockInstallLinkTypeShapeError_manyToManyLinkObjectTypeAUnresolvable {
  type: "manyToManyLinkObjectTypeAUnresolvable";
  manyToManyLinkObjectTypeAUnresolvable: ObjectTypeReferenceUnresolvable;
}

export interface BlockInstallLinkTypeShapeError_manyToManyLinkObjectTypeAMismatch {
  type: "manyToManyLinkObjectTypeAMismatch";
  manyToManyLinkObjectTypeAMismatch: ResolvedObjectTypeReferenceMismatch;
}

export interface BlockInstallLinkTypeShapeError_manyToManyLinkObjectTypeBUnresolvable {
  type: "manyToManyLinkObjectTypeBUnresolvable";
  manyToManyLinkObjectTypeBUnresolvable: ObjectTypeReferenceUnresolvable;
}

export interface BlockInstallLinkTypeShapeError_manyToManyLinkObjectTypeBMismatch {
  type: "manyToManyLinkObjectTypeBMismatch";
  manyToManyLinkObjectTypeBMismatch: ResolvedObjectTypeReferenceMismatch;
}

export interface BlockInstallLinkTypeShapeError_oneToManyLinkOneSideObjectTypeUnresolvable {
  type: "oneToManyLinkOneSideObjectTypeUnresolvable";
  oneToManyLinkOneSideObjectTypeUnresolvable: ObjectTypeReferenceUnresolvable;
}

export interface BlockInstallLinkTypeShapeError_oneToManyLinkOneSideObjectTypeMismatch {
  type: "oneToManyLinkOneSideObjectTypeMismatch";
  oneToManyLinkOneSideObjectTypeMismatch: ResolvedObjectTypeReferenceMismatch;
}

export interface BlockInstallLinkTypeShapeError_oneToManyLinkManySideObjectTypeUnresolvable {
  type: "oneToManyLinkManySideObjectTypeUnresolvable";
  oneToManyLinkManySideObjectTypeUnresolvable: ObjectTypeReferenceUnresolvable;
}

export interface BlockInstallLinkTypeShapeError_oneToManyLinkManySideObjectTypeMismatch {
  type: "oneToManyLinkManySideObjectTypeMismatch";
  oneToManyLinkManySideObjectTypeMismatch: ResolvedObjectTypeReferenceMismatch;
}

export interface BlockInstallLinkTypeShapeError_resolvedManyToManyLinkObjectTypesInconsistent {
  type: "resolvedManyToManyLinkObjectTypesInconsistent";
  resolvedManyToManyLinkObjectTypesInconsistent:
    ResolvedManyToManyLinkObjectTypesInconsistent;
}

export interface BlockInstallLinkTypeShapeError_resolvedOneToManyLinkObjectTypesInconsistent {
  type: "resolvedOneToManyLinkObjectTypesInconsistent";
  resolvedOneToManyLinkObjectTypesInconsistent:
    ResolvedOneToManyLinkObjectTypesInconsistent;
}

export interface BlockInstallLinkTypeShapeError_resolvedIntermediaryLinkOntologyTypesInconsistent {
  type: "resolvedIntermediaryLinkOntologyTypesInconsistent";
  resolvedIntermediaryLinkOntologyTypesInconsistent:
    ResolvedIntermediaryLinkOntologyTypesInconsistent;
}

export interface BlockInstallLinkTypeShapeError_editsSupportIncompatible {
  type: "editsSupportIncompatible";
  editsSupportIncompatible: EditsSupportIncompatible;
}

export interface BlockInstallLinkTypeShapeError_backendIncompatible {
  type: "backendIncompatible";
  backendIncompatible: ObjectsBackendIncompatible;
}

export interface BlockInstallLinkTypeShapeError_objectsBackendUnknown {
  type: "objectsBackendUnknown";
  objectsBackendUnknown: ObjectsBackendUnknown;
}

export interface BlockInstallLinkTypeShapeError_outputBackendMismatch {
  type: "outputBackendMismatch";
  outputBackendMismatch: OutputObjectsBackendMismatch;
}

export interface BlockInstallLinkTypeShapeError_outputEditsSupportMismatch {
  type: "outputEditsSupportMismatch";
  outputEditsSupportMismatch: OutputEditsSupportMismatch;
}
export type BlockInstallLinkTypeShapeError =
  | BlockInstallLinkTypeShapeError_unexpectedManyToManyLink
  | BlockInstallLinkTypeShapeError_unexpectedOneToManyLink
  | BlockInstallLinkTypeShapeError_unexpectedLink
  | BlockInstallLinkTypeShapeError_unexpectedResolvedManyToManyLinkObjectTypes
  | BlockInstallLinkTypeShapeError_unexpectedResolvedOneToManyLinkObjectTypes
  | BlockInstallLinkTypeShapeError_unexpectedLinkedOntologyTypes
  | BlockInstallLinkTypeShapeError_resolvedLinkedObjectTypesUnknown
  | BlockInstallLinkTypeShapeError_linkTypeUnknown
  | BlockInstallLinkTypeShapeError_intermediaryLinkObjectTypeUnresolvable
  | BlockInstallLinkTypeShapeError_intermediaryLinkObjectTypeMismatch
  | BlockInstallLinkTypeShapeError_intermediaryLinkLinkTypeUnresolvable
  | BlockInstallLinkTypeShapeError_intermediaryLinkLinkTypeMismatch
  | BlockInstallLinkTypeShapeError_manyToManyLinkObjectTypeAUnresolvable
  | BlockInstallLinkTypeShapeError_manyToManyLinkObjectTypeAMismatch
  | BlockInstallLinkTypeShapeError_manyToManyLinkObjectTypeBUnresolvable
  | BlockInstallLinkTypeShapeError_manyToManyLinkObjectTypeBMismatch
  | BlockInstallLinkTypeShapeError_oneToManyLinkOneSideObjectTypeUnresolvable
  | BlockInstallLinkTypeShapeError_oneToManyLinkOneSideObjectTypeMismatch
  | BlockInstallLinkTypeShapeError_oneToManyLinkManySideObjectTypeUnresolvable
  | BlockInstallLinkTypeShapeError_oneToManyLinkManySideObjectTypeMismatch
  | BlockInstallLinkTypeShapeError_resolvedManyToManyLinkObjectTypesInconsistent
  | BlockInstallLinkTypeShapeError_resolvedOneToManyLinkObjectTypesInconsistent
  | BlockInstallLinkTypeShapeError_resolvedIntermediaryLinkOntologyTypesInconsistent
  | BlockInstallLinkTypeShapeError_editsSupportIncompatible
  | BlockInstallLinkTypeShapeError_backendIncompatible
  | BlockInstallLinkTypeShapeError_objectsBackendUnknown
  | BlockInstallLinkTypeShapeError_outputBackendMismatch
  | BlockInstallLinkTypeShapeError_outputEditsSupportMismatch;

/**
 * The location to install a block into. Additional targets might be added to this object in the future.
 * Used by `MarketplaceBlockInstallerService`. This is different from `InstallLocation`, which is used by the
 * `BlockInstallationServiceV2.installBlocks` and represents the location to install *a set* of blocks into.
 */
export interface BlockInstallLocation {
  compass: CompassInstallLocation;
  ontology?: OntologyInstallLocation | null | undefined;
}
/**
 * An entity was selected to be used as input but either the resource itself or some associated
 * resource (for example branch rid for a dataset input) does not satisfy security constraints set on
 * the Marketplace project for the installation. The input needs to be imported as a reference into the
 * installation project manually using the Compass UI before Marketplace can use it as an input.
 */
export interface BlockInstallLocationClassificationConstraintsNotSatisfied {
  constraintsSatisfiedForResources: Record<string, boolean>;
  folderRid: CompassFolderRid;
  resourceIdentifier: string;
}
/**
 * The connection type declared on the shape does not match the connection type retrieved from the source.
 */
export interface BlockInstallMagritteConnectionTypeMismatchError {
  actualMagritteConnectionType: MagritteConnectionType;
  expectedMagritteConnectionType: MagritteConnectionType;
}
/**
 * The connection type is not supported by Marketplace.
 */
export interface BlockInstallMagritteConnectionTypeUnsupported {
  connectionType: MagritteConnectionType;
}
/**
 * The selected Magritte Source API name does not match the required API name.
 */
export interface BlockInstallMagritteSourceApiNameMismatch {
  actual?: MagritteApiName | null | undefined;
  expected: MagritteApiName;
  severity: ErrorSeverity;
}
/**
 * The selected Magritte Source is missing required secrets required by the shape.
 */
export interface BlockInstallMagritteSourceMissingRequiredSecrets {
  missingRequiredSecrets: Array<MagritteSecretName>;
  severity: ErrorSeverity;
}
/**
 * The selected Magritte Source is missing required usage restrictions required by the shape.
 */
export interface BlockInstallMagritteSourceMissingRequiredUsageRestrictions {
  missingRequiredUsageRestrictions: MagritteSourceUsageRestrictionName;
  severity: ErrorSeverity;
}
/**
 * The provided source rid in ResolvedMagritteSourceInputShape is not found in Magritte.
 */
export interface BlockInstallMagritteSourceNotFound {
  magritteSourceRid: MagritteSourceRid;
}
/**
 * Source type of the provided ResolvedMagritteSourceInputShape does not match the expected type.
 */
export interface BlockInstallMagritteSourceTypeMismatch {
  actual: MagritteSourceType;
  expected: MagritteSourceType;
}
/**
 * The media set path policy on the input shape cannot be matched with the path policy on the resolved shape.
 */
export interface BlockInstallMediaSetIncompatiblePathPolicy {
  requiredPathPolicy: PathPolicy;
  resolvedPathPolicy: PathPolicy;
}
/**
 * The media set schema on the input shape is incompatible with the media set schema on the resolved shape.
 */
export interface BlockInstallMediaSetIncompatibleSchema {
  expectedMediaSetSchema: MediaSchemaType;
  resolvedMediaSetSchema: MediaSchemaType;
}
/**
 * The media set schema V2 on the input shape is incompatible with the media set schema V2 on the resolved shape.
 */
export interface BlockInstallMediaSetIncompatibleSchemaV2 {
  expectedMediaSetSchema: MediaSchemaTypeV2;
  resolvedMediaSetSchema: MediaSchemaTypeV2;
}
/**
 * The media set transaction policy on the input shape cannot be matched with the transaction policy on the
 * resolved shape.
 */
export interface BlockInstallMediaSetIncompatibleTransactionPolicy {
  requiredTransactionPolicy: MediaSetTransactionPolicy;
  resolvedTransactionPolicy: MediaSetTransactionPolicy;
}
/**
 * The files datasource shape does not support media set inputs.
 */
export interface BlockInstallMediaSetNotSupported {
}
export interface BlockInstallModelShapeError_serviceMismatch {
  type: "serviceMismatch";
  serviceMismatch: ModelResourceShapeServiceMismatch;
}

export interface BlockInstallModelShapeError_ridTypeMismatch {
  type: "ridTypeMismatch";
  ridTypeMismatch: ModelResourceTypeMismatch;
}

export interface BlockInstallModelShapeError_modelTypeMismatch {
  type: "modelTypeMismatch";
  modelTypeMismatch: ModelTypeMismatch;
}

export interface BlockInstallModelShapeError_modelTypeMismatchV2 {
  type: "modelTypeMismatchV2";
  modelTypeMismatchV2: ModelTypeMismatchV2;
}

export interface BlockInstallModelShapeError_modelTypeMismatchV3 {
  type: "modelTypeMismatchV3";
  modelTypeMismatchV3: ModelTypeMismatchV3;
}
export type BlockInstallModelShapeError =
  | BlockInstallModelShapeError_serviceMismatch
  | BlockInstallModelShapeError_ridTypeMismatch
  | BlockInstallModelShapeError_modelTypeMismatch
  | BlockInstallModelShapeError_modelTypeMismatchV2
  | BlockInstallModelShapeError_modelTypeMismatchV3;

export interface BlockInstallNoProcessableInstallationInstructions {
}
/**
 * The Notepad template referenced by the resolved shape was not found.
 */
export interface BlockInstallNotepadTemplateNotFound {
  notepadTemplateRid: NotepadTemplateRid;
  notepadTemplateVersion?: NotepadTemplateVersion | null | undefined;
}
/**
 * The Notepad template parameter referenced by the resolved shape was not found.
 */
export interface BlockInstallNotepadTemplateParameterNotFound {
  notepadTemplateParameterId: NotepadTemplateParameterId;
  notepadTemplateRid: NotepadTemplateRid;
}
export interface BlockInstallNotepadTemplateParameterShapeError_parameterTypeMismatch {
  type: "parameterTypeMismatch";
  parameterTypeMismatch: NotepadTemplateParameterTypeMismatch;
}
export type BlockInstallNotepadTemplateParameterShapeError =
  BlockInstallNotepadTemplateParameterShapeError_parameterTypeMismatch;

/**
 * The ObjectType referenced by a resolved object view shape was not found.
 */
export interface BlockInstallObjectTypeForObjectViewNotFound {
  objectTypeRid: ObjectTypeRid;
}
/**
 * The ObjectType referenced by the resolved shape was not found.
 */
export interface BlockInstallObjectTypeNotFound {
  objectTypeId: ObjectTypeId;
  objectTypeRid: ObjectTypeRid;
}
export interface BlockInstallObjectTypeShapeError_backendIncompatible {
  type: "backendIncompatible";
  backendIncompatible: ObjectsBackendIncompatible;
}

export interface BlockInstallObjectTypeShapeError_editsSupportIncompatible {
  type: "editsSupportIncompatible";
  editsSupportIncompatible: EditsSupportIncompatible;
}

export interface BlockInstallObjectTypeShapeError_objectsBackendUnknown {
  type: "objectsBackendUnknown";
  objectsBackendUnknown: ObjectsBackendUnknown;
}

export interface BlockInstallObjectTypeShapeError_outputBackendMismatch {
  type: "outputBackendMismatch";
  outputBackendMismatch: OutputObjectsBackendMismatch;
}

export interface BlockInstallObjectTypeShapeError_outputEditsSupportMismatch {
  type: "outputEditsSupportMismatch";
  outputEditsSupportMismatch: OutputEditsSupportMismatch;
}
export type BlockInstallObjectTypeShapeError =
  | BlockInstallObjectTypeShapeError_backendIncompatible
  | BlockInstallObjectTypeShapeError_editsSupportIncompatible
  | BlockInstallObjectTypeShapeError_objectsBackendUnknown
  | BlockInstallObjectTypeShapeError_outputBackendMismatch
  | BlockInstallObjectTypeShapeError_outputEditsSupportMismatch;

/**
 * The resolved output shape type is inconsistent with the unresolved shape type.
 */
export interface BlockInstallOutputShapeTypeMismatch {
  actual: OutputShapeType;
  expected: OutputShapeType;
}
export interface BlockInstallPrefixShapeError_prefixInvalid {
  type: "prefixInvalid";
  prefixInvalid: Void;
}

export interface BlockInstallPrefixShapeError_inconsistentPrefix {
  type: "inconsistentPrefix";
  inconsistentPrefix: Void;
}
/**
 * Errors specific to InstallPrefixShape(s).
 */
export type BlockInstallPrefixShapeError =
  | BlockInstallPrefixShapeError_prefixInvalid
  | BlockInstallPrefixShapeError_inconsistentPrefix;

/**
 * The PropertyType referenced by the resolved shape was not found.
 */
export interface BlockInstallPropertyTypeNotFound {
  objectTypeId: ObjectTypeId;
  objectTypeRid: ObjectTypeRid;
  propertyTypeId: PropertyTypeId;
  propertyTypeRid: PropertyTypeRid;
}
export interface BlockInstallPropertyTypeShapeError_typeMismatch {
  type: "typeMismatch";
  typeMismatch: PropertyTypeMismatch;
}

export interface BlockInstallPropertyTypeShapeError_typeUnknown {
  type: "typeUnknown";
  typeUnknown: PropertyTypeUnknown;
}

export interface BlockInstallPropertyTypeShapeError_typeUnsupported {
  type: "typeUnsupported";
  typeUnsupported: string;
}

export interface BlockInstallPropertyTypeShapeError_nestedTypeUnknown {
  type: "nestedTypeUnknown";
  nestedTypeUnknown: PropertyTypeUnknown;
}

export interface BlockInstallPropertyTypeShapeError_nestedArraysUnsupported {
  type: "nestedArraysUnsupported";
  nestedArraysUnsupported: Void;
}

export interface BlockInstallPropertyTypeShapeError_plainTextTypeUnsupported {
  type: "plainTextTypeUnsupported";
  plainTextTypeUnsupported: PlainTextTypeUnsupported;
}

export interface BlockInstallPropertyTypeShapeError_structFieldTypeUnsupported {
  type: "structFieldTypeUnsupported";
  structFieldTypeUnsupported: StructFieldTypeUnsupported;
}

export interface BlockInstallPropertyTypeShapeError_objectTypeReferenceMismatch {
  type: "objectTypeReferenceMismatch";
  objectTypeReferenceMismatch: ResolvedObjectTypeReferenceMismatch;
}

export interface BlockInstallPropertyTypeShapeError_objectTypeReferenceUnresolvable {
  type: "objectTypeReferenceUnresolvable";
  objectTypeReferenceUnresolvable: ObjectTypeReferenceUnresolvable;
}

export interface BlockInstallPropertyTypeShapeError_inlineActionTypeMissing {
  type: "inlineActionTypeMissing";
  inlineActionTypeMissing: InlineActionTypeMissing;
}

export interface BlockInstallPropertyTypeShapeError_inlineActionTypeReferenceMismatch {
  type: "inlineActionTypeReferenceMismatch";
  inlineActionTypeReferenceMismatch: ResolvedActionTypeReferenceMismatch;
}

export interface BlockInstallPropertyTypeShapeError_inlineActionTypeReferenceUnresolvable {
  type: "inlineActionTypeReferenceUnresolvable";
  inlineActionTypeReferenceUnresolvable: ActionTypeReferenceUnresolvable;
}

export interface BlockInstallPropertyTypeShapeError_sharedPropertyTypeMissing {
  type: "sharedPropertyTypeMissing";
  sharedPropertyTypeMissing: SharedPropertyTypeMissing;
}

export interface BlockInstallPropertyTypeShapeError_sharedPropertyTypeReferenceMismatch {
  type: "sharedPropertyTypeReferenceMismatch";
  sharedPropertyTypeReferenceMismatch:
    ResolvedSharedPropertyTypeReferenceMismatch;
}

export interface BlockInstallPropertyTypeShapeError_sharedPropertyTypeReferenceUnresolvable {
  type: "sharedPropertyTypeReferenceUnresolvable";
  sharedPropertyTypeReferenceUnresolvable:
    SharedPropertyTypeReferenceUnresolvable;
}
export type BlockInstallPropertyTypeShapeError =
  | BlockInstallPropertyTypeShapeError_typeMismatch
  | BlockInstallPropertyTypeShapeError_typeUnknown
  | BlockInstallPropertyTypeShapeError_typeUnsupported
  | BlockInstallPropertyTypeShapeError_nestedTypeUnknown
  | BlockInstallPropertyTypeShapeError_nestedArraysUnsupported
  | BlockInstallPropertyTypeShapeError_plainTextTypeUnsupported
  | BlockInstallPropertyTypeShapeError_structFieldTypeUnsupported
  | BlockInstallPropertyTypeShapeError_objectTypeReferenceMismatch
  | BlockInstallPropertyTypeShapeError_objectTypeReferenceUnresolvable
  | BlockInstallPropertyTypeShapeError_inlineActionTypeMissing
  | BlockInstallPropertyTypeShapeError_inlineActionTypeReferenceMismatch
  | BlockInstallPropertyTypeShapeError_inlineActionTypeReferenceUnresolvable
  | BlockInstallPropertyTypeShapeError_sharedPropertyTypeMissing
  | BlockInstallPropertyTypeShapeError_sharedPropertyTypeReferenceMismatch
  | BlockInstallPropertyTypeShapeError_sharedPropertyTypeReferenceUnresolvable;

/**
 * Block specific installation generic error wrapping response ReconcileBlockInstallationResponseError from reconciliation.
 */
export interface BlockInstallReconcileError {
  errorCode: string;
}
/**
 * The resolved output shape is a compass resource and is not inside the expected target project,
 * because it may have been moved manually. This is validated against both non-trashed and trashed resources.
 */
export interface BlockInstallResourceNotChildOfTargetCompassFolder {
  rid: string;
}
/**
 * The resource referenced by the resolved shape was not found. This could happen if the
 * resource doesn't exist or is not visible to the user.
 */
export interface BlockInstallResourceNotFound {
  rid: string;
}
/**
 * The SharedPropertyType referenced by the resolved shape was not found.
 */
export interface BlockInstallSharedPropertyTypeNotFound {
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}
export interface BlockInstallSharedPropertyTypeShapeError_typeMismatch {
  type: "typeMismatch";
  typeMismatch: PropertyTypeMismatch;
}

export interface BlockInstallSharedPropertyTypeShapeError_typeUnknown {
  type: "typeUnknown";
  typeUnknown: PropertyTypeUnknown;
}

export interface BlockInstallSharedPropertyTypeShapeError_typeUnsupported {
  type: "typeUnsupported";
  typeUnsupported: string;
}

export interface BlockInstallSharedPropertyTypeShapeError_nestedTypeUnknown {
  type: "nestedTypeUnknown";
  nestedTypeUnknown: PropertyTypeUnknown;
}

export interface BlockInstallSharedPropertyTypeShapeError_nestedArraysUnsupported {
  type: "nestedArraysUnsupported";
  nestedArraysUnsupported: Void;
}

export interface BlockInstallSharedPropertyTypeShapeError_plainTextTypeUnsupported {
  type: "plainTextTypeUnsupported";
  plainTextTypeUnsupported: PlainTextTypeUnsupported;
}

export interface BlockInstallSharedPropertyTypeShapeError_structFieldTypeUnsupported {
  type: "structFieldTypeUnsupported";
  structFieldTypeUnsupported: StructFieldTypeUnsupported;
}
export type BlockInstallSharedPropertyTypeShapeError =
  | BlockInstallSharedPropertyTypeShapeError_typeMismatch
  | BlockInstallSharedPropertyTypeShapeError_typeUnknown
  | BlockInstallSharedPropertyTypeShapeError_typeUnsupported
  | BlockInstallSharedPropertyTypeShapeError_nestedTypeUnknown
  | BlockInstallSharedPropertyTypeShapeError_nestedArraysUnsupported
  | BlockInstallSharedPropertyTypeShapeError_plainTextTypeUnsupported
  | BlockInstallSharedPropertyTypeShapeError_structFieldTypeUnsupported;

export interface BlockInstallStringParameterMaxLengthExceeded {
  length: number;
  maxLength: number;
}
export interface BlockInstallTabularDatasourceShapeError_typeNotSupported {
  type: "typeNotSupported";
  typeNotSupported: TabularDatasourceTypeNotSupported;
}

export interface BlockInstallTabularDatasourceShapeError_typeUnknown {
  type: "typeUnknown";
  typeUnknown: DatasourceLocatorTypeUnknown;
}
/**
 * Parent error type to group various errors related to tabular datasource shapes.
 */
export type BlockInstallTabularDatasourceShapeError =
  | BlockInstallTabularDatasourceShapeError_typeNotSupported
  | BlockInstallTabularDatasourceShapeError_typeUnknown;

export interface BlockInstallTimedOut {
}
export interface BlockInternal_blockV1 {
  type: "blockV1";
  blockV1: BlockV1;
}
export type BlockInternal = BlockInternal_blockV1;

/**
 * Internal identifiers with no meaning outside of the block they're found in.
 */
export type BlockInternalId = string;
export interface BlockManifestV1 {
  block: InstallableTransportBlock;
}
export interface BlockRecommendation {
  body: RecommendationEntryBody;
  id: BlockRecommendationId;
}
export type BlockRecommendationId = BlockInternalId;
export interface BlockReference_existingBlock {
  type: "existingBlock";
  existingBlock: BlockInstallationRid;
}

export interface BlockReference_newBlock {
  type: "newBlock";
  newBlock: InstallNewBlockInstructionId;
}
export type BlockReference =
  | BlockReference_existingBlock
  | BlockReference_newBlock;

export interface BlockSet {
  about: LocalizedTitleAndDescription;
  additionalRecommendationVariants: Record<
    BlockSetRecommendationId,
    BlockSetRecommendationVariant
  >;
  blocks: Record<BlockSetBlockInstanceId, SingleVersionBlockReference>;
  createdByUser?: MultipassUserId | null | undefined;
  creationTimestamp: CreationTimestamp;
  defaultInstallationSettings?: DefaultInstallationSettings | null | undefined;
  id: BlockSetId;
  installationHints?: BlockSetInstallationHints | null | undefined;
  marketplaceMetadataVersion?: MarketplaceMetadataVersion | null | undefined;
  mavenCoordinateDependencies: Array<MavenCoordinateDependency>;
  mavenProductId?: MavenProductId | null | undefined;
  packagingLogicVersion?: PackagingLogicVersion | null | undefined;
  packagingSettings?: PackagingSettings | null | undefined;
  publishedByUser?: MultipassUserId | null | undefined;
  tags: Array<BlockSetTag>;
  tagsV2: BlockSetCategorizedTags;
  typedTags: Array<TagRid>;
  version: BlockSetVersion;
  versionId: BlockSetVersionId;
}
export type BlockSetBlockInstanceId = BlockSetInternalId;
export type BlockSetCategorizedTags = Record<BlockSetTagCategory, BlockSetTags>;
export interface BlockSetCompassInstallLocation {
  namespaceRid: NamespaceRid;
  projectRid: CompassFolderRid;
}
export interface BlockSetComputedDiff {
  diffImplications: Array<BlockSetDiffImplication>;
}
export interface BlockSetCreationAbortError {
  errorMessage: string;
}
export interface BlockSetCreationAbortReason_userRequested {
  type: "userRequested";
  userRequested: Void;
}

export interface BlockSetCreationAbortReason_error {
  type: "error";
  error: BlockSetCreationAbortError;
}
export type BlockSetCreationAbortReason =
  | BlockSetCreationAbortReason_userRequested
  | BlockSetCreationAbortReason_error;

/**
 * The block set contains blocks that have a cyclical dependency on each other due to the inputs they specify
 * as accessed in reconcile. Marketplace won't be able to install this block set in its current state as there
 * is no valid ordering that ensures all those inputs are materialized before the blocks are reconciled.
 */
export interface BlockSetCycleDetectedDueToInputsAccessedInReconcile {
  cycles: Array<BlockSetValidationCycle>;
}
/**
 * Represents an instance of an effect (implication) of a difference/change (diff) between two different versions
 * of a blockset.
 */
export interface BlockSetDiffImplication {
  associatedInputShapesBlocksetA: Array<InputBlockSetShapeId>;
  associatedInputShapesBlocksetB: Array<InputBlockSetShapeId>;
  associatedOutputShapesBlocksetA: Array<OutputBlockSetShapeId>;
  associatedOutputShapesBlocksetB: Array<OutputBlockSetShapeId>;
  implicationType: BlockSetDiffImplicationType;
}
export type BlockSetDiffImplicationType = DiffImplicationType;
export interface BlockSetDocumentation {
  attachments: Array<AttachmentMetadata>;
  freeForm: FreeFormDocumentation;
  freeFormSections?: FreeFormDocumentationSections | null | undefined;
  links?: Links | null | undefined;
  localizedFreeFormSections?:
    | LocalizedFreeFormDocumentationSections
    | null
    | undefined;
  thumbnail?: AttachmentMetadata | null | undefined;
}
/**
 * Two or more blocks output the same resource. This is not allowed.
 */
export interface BlockSetDuplicateOutputShapesError {
  shapeId: OutputBlockSetShapeId;
}
/**
 * Block set level version of `ExternalServiceError`.
 */
export interface BlockSetExternalServiceError {
  affectedInputs: Array<InputBlockSetShapeId>;
  affectedOutputs: Array<OutputBlockSetShapeId>;
  blockType: BlockType;
  error: _api_errors_MarketplaceSerializableError;
  errorInstanceId?: string | null | undefined;
  message: string;
}
export type BlockSetId = string;
export interface BlockSetInputActionTypeParameterReference {
  blockShape: BlockSetInputBlockShapeReference;
  parameterShapeId: ActionParameterShapeId;
}
export interface BlockSetInputBlockShapeReference {
  blockInstanceId: BlockSetBlockInstanceId;
  shapeId: BlockShapeId;
}
/**
 * A set of shapes that are optional as a group (the user needs to supply either none or all of them). Shapes
 * that are marked with `isOptional = true` become required when part of an enabled group.
 *
 * For more information on input groups, see the documentation on the `InputGroup` object.
 */
export interface BlockSetInputGroup {
  dependents: Array<OutputBlockSetShapeId>;
  displayMetadata: InputGroupDisplayMetadata;
  inputReferences: Array<InputBlockSetShapeId>;
}
export type BlockSetInputGroupId = InputGroupId;
export type BlockSetInputGroups = Record<
  BlockSetInputGroupId,
  InputGroupBlockSetMappingInfo
>;

/**
 * The block set contains blocks that have a cyclical dependency on each other due to the inputs they specify
 * as accessed in reconcile. Marketplace won't be able to install this block set in its current state as there
 * is no valid ordering that ensures all those inputs are materialized before the blocks are reconciled.
 */
export interface BlockSetInputsAccessedInReconcileCycleV2 {
  shortestCycle: Array<OutputBlockSetShapeId>;
}
/**
 * Corresponds 1:1 with InputShape, but any usages of BlockInternalId are guaranteed to be replaced with
 * BlockSetInternalId
 */
export type BlockSetInputShape = InputShape;
export interface BlockSetInputShapeAdded {
}
export interface BlockSetInputShapeDiff {
  diffSeverity: BlockSetInputShapeDiffSeverity;
  diffType: BlockSetInputShapeDiffType;
  inputBlockSetShapeId: InputBlockSetShapeId;
}
export type BlockSetInputShapeDiffSeverity =
  | "REQUIRES_ADDITIONAL_CONFIGURATION"
  | "BACKWARDS_COMPATIBLE";
export interface BlockSetInputShapeDiffType_inputShapeAdded {
  type: "inputShapeAdded";
  inputShapeAdded: BlockSetInputShapeAdded;
}

export interface BlockSetInputShapeDiffType_inputShapeRemoved {
  type: "inputShapeRemoved";
  inputShapeRemoved: BlockSetInputShapeRemoved;
}

export interface BlockSetInputShapeDiffType_inputShapeModified {
  type: "inputShapeModified";
  inputShapeModified: BlockSetInputShapeModified;
}
export type BlockSetInputShapeDiffType =
  | BlockSetInputShapeDiffType_inputShapeAdded
  | BlockSetInputShapeDiffType_inputShapeRemoved
  | BlockSetInputShapeDiffType_inputShapeModified;

export interface BlockSetInputShapeModified {
}
/**
 * DEPRECATED
 */
export interface BlockSetInputShapeOld {
  isOptional: boolean;
  shape: InputShape;
}
export interface BlockSetInputShapeReference {
  blockInstanceId: BlockSetBlockInstanceId;
  input: BlockShapeId;
}
/**
 * The input shape references (depends on) an output shape provided by another block from the given blockset.
 * This is illegal, since it creates a cyclic dependency upon installation of the blockset.
 */
export interface BlockSetInputShapeReferencingOutputShapeError {
  input: BlockSetInputShapeReference;
  output: BlockSetOutputShapeReference;
}
/**
 * The block set input shape has an internal reference to (depends on) an output shape in the blockset.
 * This is illegal, since it creates a cyclic dependency upon installation of the blockset.
 */
export interface BlockSetInputShapeReferencingOutputShapeV2 {
  inputShapeId: InputBlockSetShapeId;
  referencedOutputShapeId: OutputBlockSetShapeId;
}
export interface BlockSetInputShapeRemoved {
}
export type BlockSetInputShapes = Record<
  InputBlockSetShapeId,
  InputBlockSetMappingInfo
>;

/**
 * The number of input shapes that need to be provided at installation time for the block set.
 */
export interface BlockSetInputShapeSizeLimitCount {
  blockSetInputShapeLimit: number;
  numberOfBlockSetInputShapes: number;
  thresholdPercent: number;
}
/**
 * The backing shapes for a block set input could not be merged. Look up the backing shapes to figure out why.
 */
export interface BlockSetInputShapesNotMergeableErrorV2 {
  error?: _api_errors_MarketplaceSerializableError | null | undefined;
  shapeId: InputBlockSetShapeId;
}
export interface BlockSetInputShapeWithBackingShapes {
  backingShapes: Array<ShapeReference>;
  resolvedShape?: ResolvedBlockSetInputShape | null | undefined;
  shape: BlockSetInputShape;
}
/**
 * A resolved block set input shape was created by merging multiple input shapes of different versions.
 */
export interface BlockSetInputVersionSkew {
  inputShapeId: InputBlockSetShapeId;
  inputVersions: Array<InputShapeVersionAndBlockSetOutputs>;
}
export interface BlockSetInstallationAccessDisallowedRationale_localMarketplaceNotFound {
  type: "localMarketplaceNotFound";
  localMarketplaceNotFound: LocalMarketplaceNotFoundRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_installFromMarketplacePermissionDenied {
  type: "installFromMarketplacePermissionDenied";
  installFromMarketplacePermissionDenied:
    InstallFromMarketplacePermissionDeniedRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_blockSetNotFound {
  type: "blockSetNotFound";
  blockSetNotFound: BlockSetNotFoundRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_blockSetVersionNotFound {
  type: "blockSetVersionNotFound";
  blockSetVersionNotFound: BlockSetVersionNotFoundRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_installBlockSetPermissionDenied {
  type: "installBlockSetPermissionDenied";
  installBlockSetPermissionDenied: InstallBlockSetPermissionDeniedRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_editBlockSetInstallationsPermissionDenied {
  type: "editBlockSetInstallationsPermissionDenied";
  editBlockSetInstallationsPermissionDenied:
    EditBlockSetInstallationsPermissionDeniedRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_installInOntologyPermissionDenied {
  type: "installInOntologyPermissionDenied";
  installInOntologyPermissionDenied: InstallInOntologyPermissionDeniedRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_notAuthorizedToDeclassify {
  type: "notAuthorizedToDeclassify";
  notAuthorizedToDeclassify: NotAuthorizedToDeclassifyRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_notAuthorizedToUseMarkings {
  type: "notAuthorizedToUseMarkings";
  notAuthorizedToUseMarkings: NotAuthorizedToUseMarkingsRationale;
}

export interface BlockSetInstallationAccessDisallowedRationale_partiallyDeletedInstallation {
  type: "partiallyDeletedInstallation";
  partiallyDeletedInstallation: PartiallyDeletedInstallationRationale;
}
/**
 * These must map to errors that will be thrown by the install endpoint
 */
export type BlockSetInstallationAccessDisallowedRationale =
  | BlockSetInstallationAccessDisallowedRationale_localMarketplaceNotFound
  | BlockSetInstallationAccessDisallowedRationale_installFromMarketplacePermissionDenied
  | BlockSetInstallationAccessDisallowedRationale_blockSetNotFound
  | BlockSetInstallationAccessDisallowedRationale_blockSetVersionNotFound
  | BlockSetInstallationAccessDisallowedRationale_installBlockSetPermissionDenied
  | BlockSetInstallationAccessDisallowedRationale_editBlockSetInstallationsPermissionDenied
  | BlockSetInstallationAccessDisallowedRationale_installInOntologyPermissionDenied
  | BlockSetInstallationAccessDisallowedRationale_notAuthorizedToDeclassify
  | BlockSetInstallationAccessDisallowedRationale_notAuthorizedToUseMarkings
  | BlockSetInstallationAccessDisallowedRationale_partiallyDeletedInstallation;

export interface BlockSetInstallationCapabilities {
  canDeleteInstallation: DeleteBlockSetInstallationAllowance;
  canEditInstallation: EditBlockSetInstallationAllowance;
  canEditInstallationSettings: EditBlockSetInstallationSettingsAllowance;
}
export interface BlockSetInstallationDisplayMetadata {
  description: string;
  displayName: string;
}
export interface BlockSetInstallationDoesNotExist {
  blockSetInstallationRid: BlockSetInstallationRid;
}
export interface BlockSetInstallationHint {
  equivalentBlockSetInputShapeReference: EquivalentInputReferences;
}
export type BlockSetInstallationHintId = BlockSetInternalId;
export interface BlockSetInstallationHints_v1 {
  type: "v1";
  v1: BlockSetInstallationHintsV1;
}
/**
 * Captures equivalencies between inputs. This was originally built as something that can also incorporate
 * internal recommendations in the future, but is being deprecated in favor of BlockSetToBlockMapping, which
 * contains this, plus a few other concepts.
 * An installation hint exists for every input shape on the block set installation.
 */
export type BlockSetInstallationHints = BlockSetInstallationHints_v1;

export type BlockSetInstallationHintsV1 = Record<
  BlockSetInstallationHintId,
  BlockSetInstallationHint
>;
export type BlockSetInstallationImmutability = "MUTABLE" | "IMMUTABLE";
export interface BlockSetInstallationJob {
  associatedInstallations: Array<BlockSetInstallationJobAssociatedInstallation>;
  blockSetErrors: Array<BlockSetInstallationJobError>;
  metadata: BlockSetInstallationJobMetadata;
}
export interface BlockSetInstallationJobAssociatedInstallation {
  cleanupUnusedShapesStatuses: CleanupUnusedShapesStatuses;
  marketplaceRid: MarketplaceRid;
  rid: BlockSetInstallationRid;
  shapeStatuses: ShapeInstallationStatuses;
  targetVersionId: BlockSetVersionId;
}
export interface BlockSetInstallationJobCapabilities {
  canCancelInstallationJob: CancelInstallationJobAllowance;
}
export interface BlockSetInstallationJobError {
  blockError: BlockInstallError;
}
export interface BlockSetInstallationJobMetadata {
  blockSetInstallations: Array<BlockSetInstallationRid>;
  blockSetInstallationsV2: Array<AssociatedBlockSetInstallationIdentifiers>;
  installationCreator: MultipassUserId;
  isRetryable: boolean;
  jobRid: BlockSetInstallationJobRid;
  lastActivityAt: string;
  secondsElapsed: number;
  status: BlockSetInstallationJobStatus;
  submittedAt: string;
}
export type BlockSetInstallationJobRid = string;
export interface BlockSetInstallationJobStatus_inProgress {
  type: "inProgress";
  inProgress: BlockSetInstallationJobStatusInProgress;
}

export interface BlockSetInstallationJobStatus_building {
  type: "building";
  building: BlockSetInstallationJobStatusBuilding;
}

export interface BlockSetInstallationJobStatus_success {
  type: "success";
  success: BlockSetInstallationJobStatusSuccess;
}

export interface BlockSetInstallationJobStatus_error {
  type: "error";
  error: BlockSetInstallationJobStatusError;
}
export type BlockSetInstallationJobStatus =
  | BlockSetInstallationJobStatus_inProgress
  | BlockSetInstallationJobStatus_building
  | BlockSetInstallationJobStatus_success
  | BlockSetInstallationJobStatus_error;

/**
 * The status of a job whilst backing datasources and objects are being built and indexed.
 */
export interface BlockSetInstallationJobStatusBuilding {
  isPendingCancellation: boolean;
  percentageCompleted: number;
}
export interface BlockSetInstallationJobStatusError {
  errors: Array<BlockSetInstallationJobError>;
  granularErrorStatus?: GranularErrorStatus | null | undefined;
  wasCancelled: boolean;
}
/**
 * The status of a job in the process of reconciling blocks, creating and updating resources. This is distinct
 * from the actual data content of resources which is tracked in the BlockSetInstallationJobStatusBuilding status
 */
export interface BlockSetInstallationJobStatusInProgress {
  isPendingCancellation: boolean;
  percentageCompleted: number;
}
export interface BlockSetInstallationJobStatusSuccess {
}
export interface BlockSetInstallationMetadata {
  appliedRecommendations: Array<AppliedExternalRecommendationV2>;
  blockSetId: BlockSetId;
  blockSetInstallationRid: BlockSetInstallationRid;
  blockSetVersions: Array<BlockSetVersionId>;
  createdByJobRid?: BlockSetInstallationJobRid | null | undefined;
  displayMetadata: BlockSetInstallationDisplayMetadata;
  installationCreator: MultipassUserId;
  installationTimestamp: string;
  installLocation: BlockSetInstallLocation;
  isInTrash: boolean;
  latestFinishedJobRid?: BlockSetInstallationJobRid | null | undefined;
  latestJobRid?: BlockSetInstallationJobRid | null | undefined;
  marketplaceRid: MarketplaceRid;
  targetVersion: BlockSetVersionId;
  updatedAtTimestamp: string;
  updatedLastBy: MultipassUserId;
}
/**
 * Refers to a block set output shape of a specific block set installation.
 */
export interface BlockSetInstallationOutputReference {
  blockSetInstallationRid: BlockSetInstallationRid;
  outputShapeId: OutputBlockSetShapeId;
}
export interface BlockSetInstallationResolvedEntities {
  resolvedInputGroups: Record<BlockSetInputGroupId, ResolvedBlockSetInputGroup>;
  resolvedInputs: Record<InputBlockSetShapeId, ResolvedBlockSetInputShape>;
  resolvedInputsV2: Record<
    InputBlockSetShapeId,
    BlockSetInstallationResolvedInput
  >;
  resolvedOutputs: Record<OutputBlockSetShapeId, ResolvedBlockSetOutputShape>;
}
export interface BlockSetInstallationResolvedInput {
  fromSource: BlockSetInstallationResolvedInputSource;
  resolvedInput: ResolvedBlockSetInputShape;
}
export interface BlockSetInstallationResolvedInputSource_externallyRecommendedOutput {
  type: "externallyRecommendedOutput";
  externallyRecommendedOutput: ExternallyRecommendedOutput;
}

export interface BlockSetInstallationResolvedInputSource_manuallyProvided {
  type: "manuallyProvided";
  manuallyProvided: ManuallyProvidedInput;
}

export interface BlockSetInstallationResolvedInputSource_fromDefault {
  type: "fromDefault";
  fromDefault: FromDefaultInput;
}
export type BlockSetInstallationResolvedInputSource =
  | BlockSetInstallationResolvedInputSource_externallyRecommendedOutput
  | BlockSetInstallationResolvedInputSource_manuallyProvided
  | BlockSetInstallationResolvedInputSource_fromDefault;

export interface BlockSetInstallationResolvedInputSourceV2_externallyRecommendedOutput {
  type: "externallyRecommendedOutput";
  externallyRecommendedOutput: ExternallyRecommendedOutputV2;
}

export interface BlockSetInstallationResolvedInputSourceV2_manuallyProvided {
  type: "manuallyProvided";
  manuallyProvided: ManuallyProvidedInputV2;
}

export interface BlockSetInstallationResolvedInputSourceV2_fromDefault {
  type: "fromDefault";
  fromDefault: FromDefaultInput;
}
export type BlockSetInstallationResolvedInputSourceV2 =
  | BlockSetInstallationResolvedInputSourceV2_externallyRecommendedOutput
  | BlockSetInstallationResolvedInputSourceV2_manuallyProvided
  | BlockSetInstallationResolvedInputSourceV2_fromDefault;

export interface BlockSetInstallationResolvedInputV2 {
  source: BlockSetInstallationResolvedInputSourceV2;
}
export interface BlockSetInstallationResolvedShapes {
  resolvedInputGroups: Record<BlockSetInputGroupId, ResolvedBlockSetInputGroup>;
  resolvedInputs: Record<
    InputBlockSetShapeId,
    BlockSetInstallationResolvedInputV2
  >;
  resolvedOutputs: Record<OutputBlockSetShapeId, ResolvedBlockSetOutputShape>;
}
/**
 * Identifies a block set installation.
 */
export type BlockSetInstallationRid = string;
export interface BlockSetInstallationTargetState {
  displayMetadata: BlockSetInstallationDisplayMetadata;
  recommendationsToApply: Array<ToBeAppliedExternalRecommendationV2>;
  resolvedInputGroups: Record<BlockSetInputGroupId, ResolvedBlockSetInputGroup>;
  resolvedInputShapes: Record<InputBlockSetShapeId, ResolvedBlockSetInputShape>;
  resolvedInputShapesV2: Record<
    InputBlockSetShapeId,
    InstallationResolvedInputShape
  >;
  resolvedOutputShapesToAttach: Record<
    OutputBlockSetShapeId,
    ResolvedBlockSetOutputShape
  >;
  targetVersion: InstallableBlockSetVersionId;
}
/**
 * A block set installation records that a block set has been installed in a given installation context.
 */
export interface BlockSetInstallationV2 {
  appliedRecommendations: Array<AppliedExternalRecommendationV2>;
  blockInstanceInstallationRids: Record<
    BlockSetBlockInstanceId,
    BlockInstallationRid
  >;
  blockSetId: BlockSetId;
  blockSetInstallationRid: BlockSetInstallationRid;
  blockSetVersionId: BlockSetVersionId;
  blockSetVersions: Array<BlockSetVersionId>;
  createdByJobRid?: InstallBlocksJobRid | null | undefined;
  displayMetadata: BlockSetInstallationDisplayMetadata;
  installationContextId: InstallationContextId;
  installationCreator: MultipassUserId;
  installationTimestamp: InstallationTimestamp;
  installLocation: BlockSetInstallLocation;
  isInTrash: boolean;
  lastConsistentState?: ConsistentBlockSetInstallationState | null | undefined;
  latestFinishedJobRid?: InstallBlocksJobRid | null | undefined;
  latestInstallJob?: InstallBlocksJobId | null | undefined;
  latestInstallJobRid?: InstallBlocksJobRid | null | undefined;
  marketplaceRid: MarketplaceRid;
  updatedAtTimestamp: UpdatedAtTimestamp;
  updatedLastBy: MultipassUserId;
}
/**
 * The location that a block set has been installed into. Available as a field on `BlockSetInstallationV2`.
 * This is different from `TargetInstallLocation`, which is used by the `BlockInstallationServiceV2.installBlocks`
 * and represents the target location that a set of blocks are going to be installed into.
 */
export interface BlockSetInstallLocation {
  compass: BlockSetCompassInstallLocation;
  ontology?: OntologyInstallLocation | null | undefined;
}
export interface BlockSetInstallValidationError {
  blockSetReference: BlockSetReference;
  error: BlockSetInstallValidationErrorDetail;
}
export interface BlockSetInstallValidationErrorDetail_blockSetInstallationDoesNotExist {
  type: "blockSetInstallationDoesNotExist";
  blockSetInstallationDoesNotExist: BlockSetInstallationDoesNotExist;
}

export interface BlockSetInstallValidationErrorDetail_blockSetVersionRecalled {
  type: "blockSetVersionRecalled";
  blockSetVersionRecalled: BlockSetVersionRecalled;
}

export interface BlockSetInstallValidationErrorDetail_duplicateBlockReference {
  type: "duplicateBlockReference";
  duplicateBlockReference: DuplicateBlockReference;
}

export interface BlockSetInstallValidationErrorDetail_invalidBlockReference {
  type: "invalidBlockReference";
  invalidBlockReference: InvalidBlockReference;
}

export interface BlockSetInstallValidationErrorDetail_invalidInstallationProject {
  type: "invalidInstallationProject";
  invalidInstallationProject: InvalidInstallationProject;
}

export interface BlockSetInstallValidationErrorDetail_invalidDefaultInstallationBuildOptionsNotOverridden {
  type: "invalidDefaultInstallationBuildOptionsNotOverridden";
  invalidDefaultInstallationBuildOptionsNotOverridden: Void;
}

export interface BlockSetInstallValidationErrorDetail_missingCbacMarkingConstraint {
  type: "missingCbacMarkingConstraint";
  missingCbacMarkingConstraint: MissingCbacMarkingConstraint;
}

export interface BlockSetInstallValidationErrorDetail_multipleBlockSetInstallsWithSameKey {
  type: "multipleBlockSetInstallsWithSameKey";
  multipleBlockSetInstallsWithSameKey: Void;
}

export interface BlockSetInstallValidationErrorDetail_ontologyPackageInDefaultOntologyNotAllowed {
  type: "ontologyPackageInDefaultOntologyNotAllowed";
  ontologyPackageInDefaultOntologyNotAllowed:
    OntologyPackageInDefaultOntologyNotAllowed;
}

export interface BlockSetInstallValidationErrorDetail_targetInstallLocationDoesNotMatchCurrentLocation {
  type: "targetInstallLocationDoesNotMatchCurrentLocation";
  targetInstallLocationDoesNotMatchCurrentLocation:
    TargetInstallLocationDoesNotMatchCurrentLocation;
}

export interface BlockSetInstallValidationErrorDetail_targetOntologyIsNotLinkedToTargetNamespace {
  type: "targetOntologyIsNotLinkedToTargetNamespace";
  targetOntologyIsNotLinkedToTargetNamespace:
    TargetOntologyIsNotLinkedToTargetNamespace;
}

export interface BlockSetInstallValidationErrorDetail_newInstallationOfASingletonBlockSetThatIsAlreadyInstalled {
  type: "newInstallationOfASingletonBlockSetThatIsAlreadyInstalled";
  newInstallationOfASingletonBlockSetThatIsAlreadyInstalled:
    NewInstallationOfSingletonBlockSetThatIsAlreadyInstalled;
}

export interface BlockSetInstallValidationErrorDetail_upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes {
  type: "upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes";
  upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes:
    UpgradeOfSingletonBlockSetThatIsInstalledMultipleTimes;
}

export interface BlockSetInstallValidationErrorDetail_unknownError {
  type: "unknownError";
  unknownError: Void;
}
export type BlockSetInstallValidationErrorDetail =
  | BlockSetInstallValidationErrorDetail_blockSetInstallationDoesNotExist
  | BlockSetInstallValidationErrorDetail_blockSetVersionRecalled
  | BlockSetInstallValidationErrorDetail_duplicateBlockReference
  | BlockSetInstallValidationErrorDetail_invalidBlockReference
  | BlockSetInstallValidationErrorDetail_invalidInstallationProject
  | BlockSetInstallValidationErrorDetail_invalidDefaultInstallationBuildOptionsNotOverridden
  | BlockSetInstallValidationErrorDetail_missingCbacMarkingConstraint
  | BlockSetInstallValidationErrorDetail_multipleBlockSetInstallsWithSameKey
  | BlockSetInstallValidationErrorDetail_ontologyPackageInDefaultOntologyNotAllowed
  | BlockSetInstallValidationErrorDetail_targetInstallLocationDoesNotMatchCurrentLocation
  | BlockSetInstallValidationErrorDetail_targetOntologyIsNotLinkedToTargetNamespace
  | BlockSetInstallValidationErrorDetail_newInstallationOfASingletonBlockSetThatIsAlreadyInstalled
  | BlockSetInstallValidationErrorDetail_upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes
  | BlockSetInstallValidationErrorDetail_unknownError;

export interface BlockSetInstallValidationErrorDetailV2_blockSetInstallationDoesNotExist {
  type: "blockSetInstallationDoesNotExist";
  blockSetInstallationDoesNotExist: BlockSetInstallationDoesNotExist;
}

export interface BlockSetInstallValidationErrorDetailV2_blockSetVersionRecalled {
  type: "blockSetVersionRecalled";
  blockSetVersionRecalled: BlockSetVersionRecalled;
}

export interface BlockSetInstallValidationErrorDetailV2_externalServiceError {
  type: "externalServiceError";
  externalServiceError: BlockSetExternalServiceError;
}

export interface BlockSetInstallValidationErrorDetailV2_installingBlockSetsFromMultipleStores {
  type: "installingBlockSetsFromMultipleStores";
  installingBlockSetsFromMultipleStores: Void;
}

export interface BlockSetInstallValidationErrorDetailV2_integrationValidationError {
  type: "integrationValidationError";
  integrationValidationError: BlockSetIntegrationValidationError;
}

export interface BlockSetInstallValidationErrorDetailV2_invalidDefaultInstallationBuildOptionsNotOverridden {
  type: "invalidDefaultInstallationBuildOptionsNotOverridden";
  invalidDefaultInstallationBuildOptionsNotOverridden: Void;
}

export interface BlockSetInstallValidationErrorDetailV2_missingCbacMarkingConstraint {
  type: "missingCbacMarkingConstraint";
  missingCbacMarkingConstraint: MissingCbacMarkingConstraint;
}

export interface BlockSetInstallValidationErrorDetailV2_multipleBlockSetsInstalledIntoSameProject {
  type: "multipleBlockSetsInstalledIntoSameProject";
  multipleBlockSetsInstalledIntoSameProject: Void;
}

export interface BlockSetInstallValidationErrorDetailV2_notAllInstallationsInSameOntology {
  type: "notAllInstallationsInSameOntology";
  notAllInstallationsInSameOntology: Void;
}

export interface BlockSetInstallValidationErrorDetailV2_ontologyInstallLocationNotDefined {
  type: "ontologyInstallLocationNotDefined";
  ontologyInstallLocationNotDefined: OntologyInstallLocationNotDefined;
}

export interface BlockSetInstallValidationErrorDetailV2_ontologyPackageInDefaultOntologyNotAllowed {
  type: "ontologyPackageInDefaultOntologyNotAllowed";
  ontologyPackageInDefaultOntologyNotAllowed:
    OntologyPackageInDefaultOntologyNotAllowed;
}

export interface BlockSetInstallValidationErrorDetailV2_resourceUsedAsBothInputAndOutput {
  type: "resourceUsedAsBothInputAndOutput";
  resourceUsedAsBothInputAndOutput: ResourceUsedAsBothInputAndOutput;
}

export interface BlockSetInstallValidationErrorDetailV2_targetOntologyIsNotLinkedToTargetNamespace {
  type: "targetOntologyIsNotLinkedToTargetNamespace";
  targetOntologyIsNotLinkedToTargetNamespace:
    TargetOntologyIsNotLinkedToTargetNamespace;
}

export interface BlockSetInstallValidationErrorDetailV2_newInstallationOfASingletonBlockSetThatIsAlreadyInstalled {
  type: "newInstallationOfASingletonBlockSetThatIsAlreadyInstalled";
  newInstallationOfASingletonBlockSetThatIsAlreadyInstalled:
    NewInstallationOfSingletonBlockSetThatIsAlreadyInstalled;
}

export interface BlockSetInstallValidationErrorDetailV2_upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes {
  type: "upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes";
  upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes:
    UpgradeOfSingletonBlockSetThatIsInstalledMultipleTimes;
}

export interface BlockSetInstallValidationErrorDetailV2_unknownError {
  type: "unknownError";
  unknownError: Void;
}
export type BlockSetInstallValidationErrorDetailV2 =
  | BlockSetInstallValidationErrorDetailV2_blockSetInstallationDoesNotExist
  | BlockSetInstallValidationErrorDetailV2_blockSetVersionRecalled
  | BlockSetInstallValidationErrorDetailV2_externalServiceError
  | BlockSetInstallValidationErrorDetailV2_installingBlockSetsFromMultipleStores
  | BlockSetInstallValidationErrorDetailV2_integrationValidationError
  | BlockSetInstallValidationErrorDetailV2_invalidDefaultInstallationBuildOptionsNotOverridden
  | BlockSetInstallValidationErrorDetailV2_missingCbacMarkingConstraint
  | BlockSetInstallValidationErrorDetailV2_multipleBlockSetsInstalledIntoSameProject
  | BlockSetInstallValidationErrorDetailV2_notAllInstallationsInSameOntology
  | BlockSetInstallValidationErrorDetailV2_ontologyInstallLocationNotDefined
  | BlockSetInstallValidationErrorDetailV2_ontologyPackageInDefaultOntologyNotAllowed
  | BlockSetInstallValidationErrorDetailV2_resourceUsedAsBothInputAndOutput
  | BlockSetInstallValidationErrorDetailV2_targetOntologyIsNotLinkedToTargetNamespace
  | BlockSetInstallValidationErrorDetailV2_newInstallationOfASingletonBlockSetThatIsAlreadyInstalled
  | BlockSetInstallValidationErrorDetailV2_upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes
  | BlockSetInstallValidationErrorDetailV2_unknownError;

export interface BlockSetInstallValidationErrorV2 {
  blockSetReference: BlockSetReference;
  error: BlockSetInstallValidationErrorDetailV2;
  severity: ErrorSeverity;
}
export interface BlockSetIntegrationValidationError {
  error: TypedBlockInstallServiceValidationError;
}
/**
 * Internal identifiers with no meaning outside of the block set they're found in
 */
export type BlockSetInternalId = string;
export interface BlockSetInternalRecommendation {
  fulfilledBy: OutputBlockSetShapeId;
  inputs: Array<ShapeReference>;
}
/**
 * DEPRECATED
 */
export type BlockSetInternalRecommendations = Record<
  BlockSetBlockInstanceId,
  InternalRecommendations
>;

/**
 * An internal recommendation between an output and an input was created by merging multiple resolved shapes of
 * different versions.
 */
export interface BlockSetInternalRecommendationVersionSkew {
  inputVersions: Array<InputShapeVersionAndBlockSetOutputs>;
  output: OutputBlockSetShapeId;
  outputVersion?: ResourceVersion | null | undefined;
}
export interface BlockSetMandatoryInputError {
  input: BlockSetInputShapeReference;
}
/**
 * This input is mandatory to be included as content, i.e., it must be internally recommended.
 */
export interface BlockSetMandatoryInputV2 {
  inputShapeId: InputBlockSetShapeId;
}
export interface BlockSetManifestV1 {
  blockSet: InstallableTransportBlockSet;
}
export interface BlockSetNamedVersion {
  versionId: BlockSetVersionId;
  versionName: BlockSetVersion;
}
export interface BlockSetNotFoundRationale {
  blockSetId: BlockSetId;
  marketplaceRid: MarketplaceRid;
}
export interface BlockSetOutputReference {
  blockSetReference: BlockSetReference;
  outputShapeId: OutputBlockSetShapeId;
}
/**
 * Corresponds 1:1 with OutputShape, but any usages of BlockInternalId are guaranteed to be replaced with
 * BlockSetInternalId
 */
export type BlockSetOutputShape = OutputShape;
export interface BlockSetOutputShapeAdded {
}
export interface BlockSetOutputShapeDiff {
  diffSeverity: BlockSetOutputShapeDiffSeverity;
  diffType: BlockSetOutputShapeDiffType;
  outputBlockSetShapeId: OutputBlockSetShapeId;
}
export type BlockSetOutputShapeDiffSeverity =
  | "BACKWARDS_INCOMPATIBLE"
  | "BACKWARDS_COMPATIBLE";
export interface BlockSetOutputShapeDiffType_outputShapeAdded {
  type: "outputShapeAdded";
  outputShapeAdded: BlockSetOutputShapeAdded;
}

export interface BlockSetOutputShapeDiffType_outputShapeRemoved {
  type: "outputShapeRemoved";
  outputShapeRemoved: BlockSetOutputShapeRemoved;
}

export interface BlockSetOutputShapeDiffType_outputShapeModified {
  type: "outputShapeModified";
  outputShapeModified: BlockSetOutputShapeModified;
}
export type BlockSetOutputShapeDiffType =
  | BlockSetOutputShapeDiffType_outputShapeAdded
  | BlockSetOutputShapeDiffType_outputShapeRemoved
  | BlockSetOutputShapeDiffType_outputShapeModified;

export interface BlockSetOutputShapeModified {
}
/**
 * DEPRECATED
 */
export interface BlockSetOutputShapeOld {
  dependencies: Array<BlockSetShapeDependency>;
  producedByBlockType: BlockType;
  shape: OutputShape;
}
export interface BlockSetOutputShapeReference {
  blockInstanceId: BlockSetBlockInstanceId;
  output: BlockShapeId;
}
export interface BlockSetOutputShapeRemoved {
}
export interface BlockSetOutputShapeResolvedTypeMismatchError {
  actualType: OutputShapeType;
  blockInstanceId: BlockSetBlockInstanceId;
  expectedType: OutputShapeType;
  shapeId: BlockShapeId;
}
export type BlockSetOutputShapes = Record<
  OutputBlockSetShapeId,
  OutputBlockSetMappingInfo
>;
export interface BlockSetOutputShapeSizeLimitCount {
  numberOfOutputShapes: number;
  outputShapeLimit: number;
  thresholdPercent: number;
}
export interface BlockSetOutputShapeWithBackingShape {
  backingShape: ShapeReference;
  producedByBlockType: BlockType;
  resolvedShape: ResolvedBlockSetOutputShape;
  shape: BlockSetOutputShape;
}
export interface BlockSetPublishingJobFailure {
}
export interface BlockSetPublishingJobInProgress {
}
/**
 * Rid of a block set publishing job.
 */
export type BlockSetPublishingJobRid = string;
export interface BlockSetPublishingJobSuccess {
  artifactUri: ApolloArtifactUri;
}
export interface BlockSetRecommendationBody_simple {
  type: "simple";
  simple: SimpleBlockSetRecommendation;
}

export interface BlockSetRecommendationBody_actionType {
  type: "actionType";
  actionType: ActionTypeBlockSetRecommendation;
}
export type BlockSetRecommendationBody =
  | BlockSetRecommendationBody_simple
  | BlockSetRecommendationBody_actionType;

export type BlockSetRecommendationId = BlockSetInternalId;

/**
 * One possible set of recommendations used by a block set.
 */
export interface BlockSetRecommendationVariant {
  entries: Array<BlockSetRecommendationBody>;
  id: BlockSetRecommendationId;
}
export interface BlockSetReference_existingBlockSet {
  type: "existingBlockSet";
  existingBlockSet: BlockSetInstallationRid;
}

export interface BlockSetReference_newBlockSet {
  type: "newBlockSet";
  newBlockSet: NewBlockSetInstallationId;
}
export type BlockSetReference =
  | BlockSetReference_existingBlockSet
  | BlockSetReference_newBlockSet;

/**
 * Security RID for a block set. The locator part of the RID will _not_ match the `BlockSetId` UUID, as the same
 * block set can be imported to multiple stores on the same stack, which means that `BlockSetId` is not
 * necessarily unique within a stack.
 */
export type BlockSetSecurityRid = string;

/**
 * The input and output shapes of the blocks in a block set are deduplicated to block set shapes, where resources
 * that are referenced by different shapes on one or more blocks are combined to form one block set shape.
 *
 * If the resource is produced by a block during installation, it is a block set *output* shape.
 *
 * For example, if a an Ontology block produces an object type which is consumed as input by a Workshop block,
 * there will be one block set shape for the object type, which is an output item. We say that this block set
 * shape is derived from both the Ontology block's output and the Workshop block's input.
 */
export interface BlockSetShape {
  internal: BlockSetShapeInternal;
}
/**
 * Representation of blocks - we create one entry for each block.
 */
export interface BlockSetShapeDependencies {
  dependencies: OutputShapeDependencies;
  outputs: Array<OutputBlockSetShapeId>;
}
/**
 * The block set shape inputs of the block which output this shape.
 */
export interface BlockSetShapeDependency {
  blockSetShapeId: BlockSetShapeId;
  isOptional: boolean;
}
/**
 * The ID for deduplicated shapes that exist on different blocks that are connected through install hints and
 * recommendations.
 */
export type BlockSetShapeId = BlockInternalId;
export interface BlockSetShapeInternal_input {
  type: "input";
  input: BlockSetInputShapeOld;
}

export interface BlockSetShapeInternal_output {
  type: "output";
  output: BlockSetOutputShapeOld;
}
/**
 * DEPRECATED
 */
export type BlockSetShapeInternal =
  | BlockSetShapeInternal_input
  | BlockSetShapeInternal_output;

/**
 * Mapping information between shapes on all blocks and the corresponding deduplicated BlockSetShapes.
 */
export type BlockSetShapeMappingInfo = Record<
  BlockSetBlockInstanceId,
  BlockShapesMappingInfo
>;

/**
 * Contains output block set shape IDs and resolved output shapes associated with the error.
 * Some shape IDs are removed in bulk, and thus an error may be associated with multiple shape IDs.
 */
export interface BlockSetShapesRemovalError {
  error: ShapesRemovalError;
  resolvedOutputs: Record<OutputBlockSetShapeId, ResolvedOutputShape>;
}
export interface BlockSetShapeVersionSkewError_shapeVersionSkew {
  type: "shapeVersionSkew";
  shapeVersionSkew: ShapeVersionSkewError;
}
/**
 * Wrapping error representing a state of different shapes referencing varying versions of a single underlying
 * resource resulting into a version skew.
 */
export type BlockSetShapeVersionSkewError =
  BlockSetShapeVersionSkewError_shapeVersionSkew;

export interface BlockSetShapeVisibility_visible {
  type: "visible";
  visible: Void;
}

export interface BlockSetShapeVisibility_invisible {
  type: "invisible";
  invisible: Void;
}
/**
 * The visibility of the shape. Can be changed by the packager. If invisible, the shape will not be shown to
 * the installing user. The shape be optional, or have a preset that does not allow custom values
 * (see `presets.PRESET_ENFORCEMENT`).
 */
export type BlockSetShapeVisibility =
  | BlockSetShapeVisibility_visible
  | BlockSetShapeVisibility_invisible;

/**
 * The block set has reached or is approaching the maximum size constraints. We will start to warn users of this
 * when we reach 75% in any constraint, and we will block packaging if size exceeds 100%.
 * Constraints are measured for number of block set input shapes, block input shapes and output shapes.
 */
export interface BlockSetSizeLimitThresholdReached {
  blockLimitCount: BlockSizeLimitCount;
  inputShapeLimitCount: BlockInputShapeSizeLimitCount;
  outputShapeLimitCount: BlockSetOutputShapeSizeLimitCount;
  thresholdPercent: number;
}
/**
 * The block set has reached or is approaching the maximum size constraints. We will start to warn users of this
 * when we reach 75% in any constraint, and we will block packaging if size exceeds 100%.
 * Constraints are measured for number of block set input shapes, block input shapes and output shapes.
 */
export interface BlockSetSizeLimitThresholdReachedV3 {
  blockInputShapeLimitCount?: BlockInputShapeSizeLimitCount | null | undefined;
  blockSetInputLimitCount?: BlockSetInputShapeSizeLimitCount | null | undefined;
  blockSetOutputLimitCount?:
    | BlockSetOutputShapeSizeLimitCount
    | null
    | undefined;
  blockSetTotalLimitCount?: BlockSetTotalShapeSizeLimitCount | null | undefined;
  thresholdPercent: number;
}
export type BlockSetTag = string;
export type BlockSetTagCategory = string;
export type BlockSetTags = Array<BlockSetTag>;
export interface BlockSetTotalShapeSizeLimitCount {
  blockSetTotalShapeLimit: number;
  numberOfInputShapes: number;
  numberOfOutputShapes: number;
  thresholdPercent: number;
}
export interface BlockSetUpdatedEventKey_eventV1 {
  type: "eventV1";
  eventV1: BlockSetId;
}

export interface BlockSetUpdatedEventKey_eventV2 {
  type: "eventV2";
  eventV2: BlockSetUpdatedEventKeyV2;
}
export type BlockSetUpdatedEventKey =
  | BlockSetUpdatedEventKey_eventV1
  | BlockSetUpdatedEventKey_eventV2;

export interface BlockSetUpdatedEventKeyV2 {
  blockSetId: BlockSetId;
  marketplaceRid: MarketplaceRid;
}
export interface BlockSetValidationCycle {
  shapeIds: Array<BlockShapeId>;
}
export type BlockSetVersion = string;
export interface BlockSetVersionDiff {
  inputShapeDiffs: Array<BlockSetInputShapeDiff>;
  outputShapeDiffs: Array<BlockSetOutputShapeDiff>;
}
export interface BlockSetVersionDiffFromEmptyRequest {
  blockSetVersionId: BlockSetVersionId;
  marketplaceRid: MarketplaceRid;
}
export interface BlockSetVersionDiffRequest {
  afterBlockSetVersionId: BlockSetVersionId;
  afterMarketplaceRid: MarketplaceRid;
  beforeBlockSetVersionId: BlockSetVersionId;
  beforeMarketplaceRid: MarketplaceRid;
}
export interface BlockSetVersionErrorRecovery_idle {
  type: "idle";
  idle: BlockSetVersionIdleError;
}

export interface BlockSetVersionErrorRecovery_materializing {
  type: "materializing";
  materializing: BlockSetVersionMaterializingError;
}

export interface BlockSetVersionErrorRecovery_finalizing {
  type: "finalizing";
  finalizing: BlockSetVersionFinalizingError;
}
/**
 * Error recovery in after materializing or finalizing errors.
 */
export type BlockSetVersionErrorRecovery =
  | BlockSetVersionErrorRecovery_idle
  | BlockSetVersionErrorRecovery_materializing
  | BlockSetVersionErrorRecovery_finalizing;

export interface BlockSetVersionFinalizingError {
  error: _api_errors_MarketplaceSerializableError;
  errorMessage: string;
}
/**
 * Unique identifier for a particular version of a block set. That is, 1:1 with (BlockSetId, BlockSetVersion) tuples.
 */
export type BlockSetVersionId = string;
export interface BlockSetVersionIdleError {
  errorMessage: string;
}
/**
 * Matches ranges of versions. Use an `x` instead of a version number to represent wildcards. Once one level
 * has a wildcard, all subsequent ones must be as well (i.e. `1.x.4` is not supported, while `1.x.x` is). Any
 * missing levels are assumed to be wildcards (i.e. `1.x` is equivalent to `1.x.x`).
 */
export type BlockSetVersionMatcher = string;
export interface BlockSetVersionMaterializingError {
  erroredUpdateId?:
    | UpdatePendingBlockSetVersionSpecsRequestId
    | null
    | undefined;
  errorMessage: string;
}
export type BlockSetVersionMissingInputsConstraintFailure = Record<
  BlockVersionId,
  Array<BlockShapeId>
>;
export type BlockSetVersionMissingInputsConstraintFailureV2 = Array<
  InputBlockSetShapeId
>;
export interface BlockSetVersionNotFoundRationale {
  blockSetVersionId: BlockSetVersionId;
  marketplaceRid: MarketplaceRid;
}
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
 * A non-blocking validation error indicating that the target block set version for the installation has been recalled.
 */
export interface BlockSetVersionRecalled {
  blockSetVersionId: BlockSetVersionId;
  recallAnnouncements: Array<RecallVersionsAnnouncement>;
}
export interface BlockSetVersionReference {
  blockSetId: BlockSetId;
  blockSetVersionId: BlockSetVersionId;
}
/**
 * This should more or less be a mirror of StoredBlockSetVersionReleaseSettings in store.yml
 */
export interface BlockSetVersionReleaseMetadata {
  releaseChannels: Array<ReleaseChannel>;
}
export interface BlockSetVersionStatusResponse_initializing {
  type: "initializing";
  initializing: Void;
}

export interface BlockSetVersionStatusResponse_pending {
  type: "pending";
  pending: BlockSetVersionStatusResponsePending;
}

export interface BlockSetVersionStatusResponse_success {
  type: "success";
  success: BlockSetVersionStatusResponseSuccess;
}

export interface BlockSetVersionStatusResponse_failed {
  type: "failed";
  failed: Void;
}
export type BlockSetVersionStatusResponse =
  | BlockSetVersionStatusResponse_initializing
  | BlockSetVersionStatusResponse_pending
  | BlockSetVersionStatusResponse_success
  | BlockSetVersionStatusResponse_failed;

export interface BlockSetVersionStatusResponsePending {
  blockSetVersion: BlockSetVersion;
}
export interface BlockSetVersionStatusResponseSuccess {
  blockSetId: BlockSetId;
  blockSetVersion: BlockSetVersion;
  blockSetVersionId: BlockSetVersionId;
}
export interface BlockSetVersionStatusResponseV2_initializing {
  type: "initializing";
  initializing: Void;
}

export interface BlockSetVersionStatusResponseV2_idle {
  type: "idle";
  idle: IdleBlockSetVersionStatus;
}

export interface BlockSetVersionStatusResponseV2_materializing {
  type: "materializing";
  materializing: MaterializingBlockSetVersionStatus;
}

export interface BlockSetVersionStatusResponseV2_finalizing {
  type: "finalizing";
  finalizing: Void;
}

export interface BlockSetVersionStatusResponseV2_finalized {
  type: "finalized";
  finalized: FinalizedBlockSetVersionStatus;
}

export interface BlockSetVersionStatusResponseV2_aborted {
  type: "aborted";
  aborted: BlockSetCreationAbortReason;
}
export type BlockSetVersionStatusResponseV2 =
  | BlockSetVersionStatusResponseV2_initializing
  | BlockSetVersionStatusResponseV2_idle
  | BlockSetVersionStatusResponseV2_materializing
  | BlockSetVersionStatusResponseV2_finalizing
  | BlockSetVersionStatusResponseV2_finalized
  | BlockSetVersionStatusResponseV2_aborted;

/**
 * Soon to be deprecated. In the future we will use BlockSetVersionValidationErrorV2.
 */
export interface BlockSetVersionValidationError {
  error: BlockSetVersionValidationErrorDetail;
  errorLevel: ErrorLevel;
}
export interface BlockSetVersionValidationErrorDetail_blockSetCycleDetectedDueToInputsAccessedInReconcile {
  type: "blockSetCycleDetectedDueToInputsAccessedInReconcile";
  blockSetCycleDetectedDueToInputsAccessedInReconcile:
    BlockSetCycleDetectedDueToInputsAccessedInReconcile;
}

export interface BlockSetVersionValidationErrorDetail_blockSetMandatoryInputError {
  type: "blockSetMandatoryInputError";
  blockSetMandatoryInputError: BlockSetMandatoryInputError;
}

export interface BlockSetVersionValidationErrorDetail_inputShapeVersionSkew {
  type: "inputShapeVersionSkew";
  inputShapeVersionSkew: BlockSetInputVersionSkew;
}

export interface BlockSetVersionValidationErrorDetail_internalRecommendationVersionSkew {
  type: "internalRecommendationVersionSkew";
  internalRecommendationVersionSkew: BlockSetInternalRecommendationVersionSkew;
}

export interface BlockSetVersionValidationErrorDetail_duplicateOutputShapes {
  type: "duplicateOutputShapes";
  duplicateOutputShapes: BlockSetDuplicateOutputShapesError;
}

export interface BlockSetVersionValidationErrorDetail_inputShapeReferencingOutputShape {
  type: "inputShapeReferencingOutputShape";
  inputShapeReferencingOutputShape:
    BlockSetInputShapeReferencingOutputShapeError;
}

export interface BlockSetVersionValidationErrorDetail_inputShapesNotMergeableV2 {
  type: "inputShapesNotMergeableV2";
  inputShapesNotMergeableV2: BlockSetInputShapesNotMergeableErrorV2;
}

export interface BlockSetVersionValidationErrorDetail_missingInternalRecommendationV2 {
  type: "missingInternalRecommendationV2";
  missingInternalRecommendationV2: MissingInternalRecommendationErrorV2;
}

export interface BlockSetVersionValidationErrorDetail_outputShapeResolvedTypeMismatch {
  type: "outputShapeResolvedTypeMismatch";
  outputShapeResolvedTypeMismatch: BlockSetOutputShapeResolvedTypeMismatchError;
}

export interface BlockSetVersionValidationErrorDetail_tooManyBlockSetShapesError {
  type: "tooManyBlockSetShapesError";
  tooManyBlockSetShapesError: BlockSetTotalShapeSizeLimitCount;
}

export interface BlockSetVersionValidationErrorDetail_tooManyBlocksForBlockSetError {
  type: "tooManyBlocksForBlockSetError";
  tooManyBlocksForBlockSetError: BlockSizeLimitCount;
}

export interface BlockSetVersionValidationErrorDetail_tooManyInputShapesForBlockSetError {
  type: "tooManyInputShapesForBlockSetError";
  tooManyInputShapesForBlockSetError: BlockInputShapeSizeLimitCount;
}

export interface BlockSetVersionValidationErrorDetail_tooManyInternalBlockInputShapesError {
  type: "tooManyInternalBlockInputShapesError";
  tooManyInternalBlockInputShapesError: BlockInputShapeSizeLimitCount;
}

export interface BlockSetVersionValidationErrorDetail_tooManyOutputShapesForBlockSetError {
  type: "tooManyOutputShapesForBlockSetError";
  tooManyOutputShapesForBlockSetError: BlockSetOutputShapeSizeLimitCount;
}
/**
 * Soon to be deprecated. In the future we will use BlockSetVersionValidationErrorDetailV2.
 */
export type BlockSetVersionValidationErrorDetail =
  | BlockSetVersionValidationErrorDetail_blockSetCycleDetectedDueToInputsAccessedInReconcile
  | BlockSetVersionValidationErrorDetail_blockSetMandatoryInputError
  | BlockSetVersionValidationErrorDetail_inputShapeVersionSkew
  | BlockSetVersionValidationErrorDetail_internalRecommendationVersionSkew
  | BlockSetVersionValidationErrorDetail_duplicateOutputShapes
  | BlockSetVersionValidationErrorDetail_inputShapeReferencingOutputShape
  | BlockSetVersionValidationErrorDetail_inputShapesNotMergeableV2
  | BlockSetVersionValidationErrorDetail_missingInternalRecommendationV2
  | BlockSetVersionValidationErrorDetail_outputShapeResolvedTypeMismatch
  | BlockSetVersionValidationErrorDetail_tooManyBlockSetShapesError
  | BlockSetVersionValidationErrorDetail_tooManyBlocksForBlockSetError
  | BlockSetVersionValidationErrorDetail_tooManyInputShapesForBlockSetError
  | BlockSetVersionValidationErrorDetail_tooManyInternalBlockInputShapesError
  | BlockSetVersionValidationErrorDetail_tooManyOutputShapesForBlockSetError;

export interface BlockSetVersionValidationErrorDetailV2_duplicateOutputShapes {
  type: "duplicateOutputShapes";
  duplicateOutputShapes: BlockSetDuplicateOutputShapesError;
}

export interface BlockSetVersionValidationErrorDetailV2_folderInputPreventsInstallingInNewProject {
  type: "folderInputPreventsInstallingInNewProject";
  folderInputPreventsInstallingInNewProject:
    FolderInputPreventsInstallingInNewProject;
}

export interface BlockSetVersionValidationErrorDetailV2_indistinguishableInputShapes {
  type: "indistinguishableInputShapes";
  indistinguishableInputShapes: IndistinguishableInputShapesError;
}

export interface BlockSetVersionValidationErrorDetailV2_inputShapeInvalidReference {
  type: "inputShapeInvalidReference";
  inputShapeInvalidReference: BlockSetInputShapeReferencingOutputShapeV2;
}

export interface BlockSetVersionValidationErrorDetailV2_inputShapeVersionSkew {
  type: "inputShapeVersionSkew";
  inputShapeVersionSkew: BlockSetInputVersionSkew;
}

export interface BlockSetVersionValidationErrorDetailV2_inputShapesNotMergeable {
  type: "inputShapesNotMergeable";
  inputShapesNotMergeable: BlockSetInputShapesNotMergeableErrorV2;
}

export interface BlockSetVersionValidationErrorDetailV2_inputsAccessedInReconcileCycle {
  type: "inputsAccessedInReconcileCycle";
  inputsAccessedInReconcileCycle: BlockSetInputsAccessedInReconcileCycleV2;
}

export interface BlockSetVersionValidationErrorDetailV2_internalRecommendationVersionSkew {
  type: "internalRecommendationVersionSkew";
  internalRecommendationVersionSkew: BlockSetInternalRecommendationVersionSkew;
}

export interface BlockSetVersionValidationErrorDetailV2_mandatoryInputError {
  type: "mandatoryInputError";
  mandatoryInputError: BlockSetMandatoryInputV2;
}

export interface BlockSetVersionValidationErrorDetailV2_missingInternalRecommendation {
  type: "missingInternalRecommendation";
  missingInternalRecommendation: MissingInternalRecommendationErrorV2;
}

export interface BlockSetVersionValidationErrorDetailV2_sizeLimitThresholdReached {
  type: "sizeLimitThresholdReached";
  sizeLimitThresholdReached: BlockSetSizeLimitThresholdReached;
}

export interface BlockSetVersionValidationErrorDetailV2_sizeLimitThresholdReachedV3 {
  type: "sizeLimitThresholdReachedV3";
  sizeLimitThresholdReachedV3: BlockSetSizeLimitThresholdReachedV3;
}
export type BlockSetVersionValidationErrorDetailV2 =
  | BlockSetVersionValidationErrorDetailV2_duplicateOutputShapes
  | BlockSetVersionValidationErrorDetailV2_folderInputPreventsInstallingInNewProject
  | BlockSetVersionValidationErrorDetailV2_indistinguishableInputShapes
  | BlockSetVersionValidationErrorDetailV2_inputShapeInvalidReference
  | BlockSetVersionValidationErrorDetailV2_inputShapeVersionSkew
  | BlockSetVersionValidationErrorDetailV2_inputShapesNotMergeable
  | BlockSetVersionValidationErrorDetailV2_inputsAccessedInReconcileCycle
  | BlockSetVersionValidationErrorDetailV2_internalRecommendationVersionSkew
  | BlockSetVersionValidationErrorDetailV2_mandatoryInputError
  | BlockSetVersionValidationErrorDetailV2_missingInternalRecommendation
  | BlockSetVersionValidationErrorDetailV2_sizeLimitThresholdReached
  | BlockSetVersionValidationErrorDetailV2_sizeLimitThresholdReachedV3;

export interface BlockSetVersionValidationErrorV2 {
  error: BlockSetVersionValidationErrorDetailV2;
  errorLevel: ErrorLevel;
}
export interface BlockShape_input {
  type: "input";
  input: InputShape;
}

export interface BlockShape_output {
  type: "output";
  output: OutputShape;
}
export type BlockShape = BlockShape_input | BlockShape_output;

export interface BlockShapeBuildMetadata_shapeJobSpecsBuildMetadata {
  type: "shapeJobSpecsBuildMetadata";
  shapeJobSpecsBuildMetadata: BuildJobIds;
}
/**
 * For blocks where Marketplace has submitted a build, this provides the build metadata per block shape needed
 * to view the process of the job spec build e.g., in Job Tracker.
 * Note: build requests for shapes for a given block may be submitted in separate builds.
 */
export type BlockShapeBuildMetadata =
  BlockShapeBuildMetadata_shapeJobSpecsBuildMetadata;

/**
 * External id for a block input shape or output shape, equivalent to a BlockInternalId.
 */
export type BlockShapeId = BlockInternalId;

/**
 * Mapping information between the shapes of one block and the corresponding deduplicated BlockSetShapes
 */
export type BlockShapesMappingInfo = Record<BlockShapeId, ShapeMappingInfo>;
export interface BlockSizeLimitCount {
  blockLimit: number;
  numberOfBlocks: number;
}
export interface BlockSpecificConfiguration_aipAgent {
  type: "aipAgent";
  aipAgent: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_appConfigAppBar {
  type: "appConfigAppBar";
  appConfigAppBar: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_appConfigAuthorizationChooserPresets {
  type: "appConfigAuthorizationChooserPresets";
  appConfigAuthorizationChooserPresets: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_appConfigAuthorizationChooserRules {
  type: "appConfigAuthorizationChooserRules";
  appConfigAuthorizationChooserRules: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_appConfigCosmos {
  type: "appConfigCosmos";
  appConfigCosmos: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_appConfigGaia {
  type: "appConfigGaia";
  appConfigGaia: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_appConfigTitanium {
  type: "appConfigTitanium";
  appConfigTitanium: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_authoringRepository {
  type: "authoringRepository";
  authoringRepository: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_automation {
  type: "automation";
  automation: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_blobster {
  type: "blobster";
  blobster: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_carbon {
  type: "carbon";
  carbon: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_checkpointConfig {
  type: "checkpointConfig";
  checkpointConfig: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_cipherChannel {
  type: "cipherChannel";
  cipherChannel: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_cipherLicense {
  type: "cipherLicense";
  cipherLicense: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_compass {
  type: "compass";
  compass: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_contour {
  type: "contour";
  contour: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_dataHealth {
  type: "dataHealth";
  dataHealth: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_deployedApp {
  type: "deployedApp";
  deployedApp: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_directDatasource {
  type: "directDatasource";
  directDatasource: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_eddieEdgePipeline {
  type: "eddieEdgePipeline";
  eddieEdgePipeline: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_eddieGroup {
  type: "eddieGroup";
  eddieGroup: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_editsView {
  type: "editsView";
  editsView: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_functionConfigurations {
  type: "functionConfigurations";
  functionConfigurations: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_functions {
  type: "functions";
  functions: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_logic {
  type: "logic";
  logic: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_machinery {
  type: "machinery";
  machinery: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_magritteConnector {
  type: "magritteConnector";
  magritteConnector: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_magritteExport {
  type: "magritteExport";
  magritteExport: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_magritteSource {
  type: "magritteSource";
  magritteSource: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_mapRenderingService {
  type: "mapRenderingService";
  mapRenderingService: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_mediaSet {
  type: "mediaSet";
  mediaSet: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_model {
  type: "model";
  model: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_monitoringView {
  type: "monitoringView";
  monitoringView: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_namedCredential {
  type: "namedCredential";
  namedCredential: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_notepad {
  type: "notepad";
  notepad: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_objectSet {
  type: "objectSet";
  objectSet: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_objectView {
  type: "objectView";
  objectView: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_ontology {
  type: "ontology";
  ontology: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_podModel {
  type: "podModel";
  podModel: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_quiver {
  type: "quiver";
  quiver: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_resourceUpdates {
  type: "resourceUpdates";
  resourceUpdates: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_restrictedView {
  type: "restrictedView";
  restrictedView: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_rosetta {
  type: "rosetta";
  rosetta: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_satelliteImageryModel {
  type: "satelliteImageryModel";
  satelliteImageryModel: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_schedule {
  type: "schedule";
  schedule: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_ontologySdk {
  type: "ontologySdk";
  ontologySdk: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_slate {
  type: "slate";
  slate: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_solutionDesign {
  type: "solutionDesign";
  solutionDesign: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_staticDataset {
  type: "staticDataset";
  staticDataset: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_streamDataset {
  type: "streamDataset";
  streamDataset: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_taurusWorkflow {
  type: "taurusWorkflow";
  taurusWorkflow: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_templates {
  type: "templates";
  templates: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_transforms {
  type: "transforms";
  transforms: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_valueType {
  type: "valueType";
  valueType: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_vertex {
  type: "vertex";
  vertex: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_virtualTable {
  type: "virtualTable";
  virtualTable: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_vortex {
  type: "vortex";
  vortex: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_walkthrough {
  type: "walkthrough";
  walkthrough: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_webhooks {
  type: "webhooks";
  webhooks: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_widgetSet {
  type: "widgetSet";
  widgetSet: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_workflowGraph {
  type: "workflowGraph";
  workflowGraph: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_workshop {
  type: "workshop";
  workshop: DefaultBlockSpecificConfiguration;
}

export interface BlockSpecificConfiguration_writeback {
  type: "writeback";
  writeback: DefaultBlockSpecificConfiguration;
}
/**
 * The type of the block is implicitly defined by the type of the block specification.
 *
 * Note that this should contain the minimum amount of information necessary for the frontend
 * to display nice things and no more! Any non-empty block specific configuration will need
 * justification/will be reviewed by the foundry marketplace team.
 */
export type BlockSpecificConfiguration =
  | BlockSpecificConfiguration_aipAgent
  | BlockSpecificConfiguration_appConfigAppBar
  | BlockSpecificConfiguration_appConfigAuthorizationChooserPresets
  | BlockSpecificConfiguration_appConfigAuthorizationChooserRules
  | BlockSpecificConfiguration_appConfigCosmos
  | BlockSpecificConfiguration_appConfigGaia
  | BlockSpecificConfiguration_appConfigTitanium
  | BlockSpecificConfiguration_authoringRepository
  | BlockSpecificConfiguration_automation
  | BlockSpecificConfiguration_blobster
  | BlockSpecificConfiguration_carbon
  | BlockSpecificConfiguration_checkpointConfig
  | BlockSpecificConfiguration_cipherChannel
  | BlockSpecificConfiguration_cipherLicense
  | BlockSpecificConfiguration_codeWorkspace
  | BlockSpecificConfiguration_compass
  | BlockSpecificConfiguration_contour
  | BlockSpecificConfiguration_dataHealth
  | BlockSpecificConfiguration_deployedApp
  | BlockSpecificConfiguration_directDatasource
  | BlockSpecificConfiguration_eddieEdgePipeline
  | BlockSpecificConfiguration_eddieGroup
  | BlockSpecificConfiguration_editsView
  | BlockSpecificConfiguration_evaluationSuite
  | BlockSpecificConfiguration_functionConfigurations
  | BlockSpecificConfiguration_functions
  | BlockSpecificConfiguration_logic
  | BlockSpecificConfiguration_machinery
  | BlockSpecificConfiguration_magritteConnector
  | BlockSpecificConfiguration_magritteExport
  | BlockSpecificConfiguration_magritteSource
  | BlockSpecificConfiguration_mapRenderingService
  | BlockSpecificConfiguration_mediaSet
  | BlockSpecificConfiguration_model
  | BlockSpecificConfiguration_monitoringView
  | BlockSpecificConfiguration_namedCredential
  | BlockSpecificConfiguration_networkEgressPolicy
  | BlockSpecificConfiguration_notepad
  | BlockSpecificConfiguration_objectSet
  | BlockSpecificConfiguration_objectView
  | BlockSpecificConfiguration_ontology
  | BlockSpecificConfiguration_podModel
  | BlockSpecificConfiguration_quiver
  | BlockSpecificConfiguration_resourceUpdates
  | BlockSpecificConfiguration_restrictedView
  | BlockSpecificConfiguration_rosetta
  | BlockSpecificConfiguration_satelliteImageryModel
  | BlockSpecificConfiguration_schedule
  | BlockSpecificConfiguration_ontologySdk
  | BlockSpecificConfiguration_slate
  | BlockSpecificConfiguration_solutionDesign
  | BlockSpecificConfiguration_staticDataset
  | BlockSpecificConfiguration_streamDataset
  | BlockSpecificConfiguration_taurusWorkflow
  | BlockSpecificConfiguration_templates
  | BlockSpecificConfiguration_timeSeriesSync
  | BlockSpecificConfiguration_thirdPartyApplication
  | BlockSpecificConfiguration_transforms
  | BlockSpecificConfiguration_valueType
  | BlockSpecificConfiguration_vertex
  | BlockSpecificConfiguration_virtualTable
  | BlockSpecificConfiguration_vortex
  | BlockSpecificConfiguration_walkthrough
  | BlockSpecificConfiguration_webhooks
  | BlockSpecificConfiguration_widgetSet
  | BlockSpecificConfiguration_workflowGraph
  | BlockSpecificConfiguration_workshop
  | BlockSpecificConfiguration_writeback;

export interface BlockSpecificCreateRequest_aipAgent {
  type: "aipAgent";
  aipAgent: AipAgentCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_appConfigAppBar {
  type: "appConfigAppBar";
  appConfigAppBar: AppConfigCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_appConfigAuthorizationChooserPresets {
  type: "appConfigAuthorizationChooserPresets";
  appConfigAuthorizationChooserPresets: AppConfigCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_appConfigAuthorizationChooserRules {
  type: "appConfigAuthorizationChooserRules";
  appConfigAuthorizationChooserRules: AppConfigCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_appConfigCosmos {
  type: "appConfigCosmos";
  appConfigCosmos: AppConfigCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_appConfigGaia {
  type: "appConfigGaia";
  appConfigGaia: AppConfigCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_appConfigTitanium {
  type: "appConfigTitanium";
  appConfigTitanium: AppConfigCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_authoringRepository {
  type: "authoringRepository";
  authoringRepository: AuthoringRepositoryCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_authoringRepositoryV2 {
  type: "authoringRepositoryV2";
  authoringRepositoryV2: AuthoringRepositoryCreateBlockRequestV2;
}

export interface BlockSpecificCreateRequest_automation {
  type: "automation";
  automation: AutomationCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_blobster {
  type: "blobster";
  blobster: BlobsterCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_carbon {
  type: "carbon";
  carbon: CarbonCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_checkpointConfig {
  type: "checkpointConfig";
  checkpointConfig: CheckpointConfigCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_cipherChannel {
  type: "cipherChannel";
  cipherChannel: CipherChannelCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_cipherLicense {
  type: "cipherLicense";
  cipherLicense: CipherLicenseCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: CodeWorkspaceCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_compass {
  type: "compass";
  compass: CompassCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_dataHealth {
  type: "dataHealth";
  dataHealth: DataHealthCheckCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_deployedApp {
  type: "deployedApp";
  deployedApp: DeployedAppCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_directDatasource {
  type: "directDatasource";
  directDatasource: DirectDatasourceCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_eddie {
  type: "eddie";
  eddie: EddieCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_eddieEdgePipeline {
  type: "eddieEdgePipeline";
  eddieEdgePipeline: EddieEdgePipelineCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_editsView {
  type: "editsView";
  editsView: EditsViewCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: EvaluationSuiteCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_functionConfigurations {
  type: "functionConfigurations";
  functionConfigurations: FunctionConfigurationsCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_functions {
  type: "functions";
  functions: FunctionsCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_logic {
  type: "logic";
  logic: LogicCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_machinery {
  type: "machinery";
  machinery: MachineryCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_magritteConnector {
  type: "magritteConnector";
  magritteConnector: MagritteConnectorCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_magritteExport {
  type: "magritteExport";
  magritteExport: MagritteExportCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_magritteSource {
  type: "magritteSource";
  magritteSource: MagritteSourceCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_mediaSet {
  type: "mediaSet";
  mediaSet: MediaSetCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_model {
  type: "model";
  model: ModelCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_monitoringView {
  type: "monitoringView";
  monitoringView: MonitoringViewCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_mapRenderingService {
  type: "mapRenderingService";
  mapRenderingService: MapRenderingServiceCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_namedCredential {
  type: "namedCredential";
  namedCredential: NamedCredentialCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: NetworkEgressPolicyCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_notepad {
  type: "notepad";
  notepad: NotepadCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: NotepadTemplateCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_objectSet {
  type: "objectSet";
  objectSet: ObjectSetCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_objectView {
  type: "objectView";
  objectView: ObjectViewCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_ontology {
  type: "ontology";
  ontology: OntologyCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_quiver {
  type: "quiver";
  quiver: QuiverCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_resourceUpdates {
  type: "resourceUpdates";
  resourceUpdates: ResourceUpdatesCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_restrictedView {
  type: "restrictedView";
  restrictedView: RestrictedViewCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_rosetta {
  type: "rosetta";
  rosetta: RosettaCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_satelliteImageryModel {
  type: "satelliteImageryModel";
  satelliteImageryModel: SatelliteImageryModelCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_schedule {
  type: "schedule";
  schedule: ScheduleCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_taurus {
  type: "taurus";
  taurus: TaurusCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_ontologySdk {
  type: "ontologySdk";
  ontologySdk: OntologySdkCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_ontologySdkV2 {
  type: "ontologySdkV2";
  ontologySdkV2: OntologySdkCreateBlockRequestV2;
}

export interface BlockSpecificCreateRequest_slate {
  type: "slate";
  slate: SlateCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_solutionDesign {
  type: "solutionDesign";
  solutionDesign: SolutionDesignCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_staticDataset {
  type: "staticDataset";
  staticDataset: StaticDatasetCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_streamDataset {
  type: "streamDataset";
  streamDataset: StreamDatasetCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_templates {
  type: "templates";
  templates: TemplatesCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: TimeSeriesSyncCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: ThirdPartyApplicationCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_transforms {
  type: "transforms";
  transforms: TransformsCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_valueType {
  type: "valueType";
  valueType: ValueTypeCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_vertex {
  type: "vertex";
  vertex: VertexCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_virtualTable {
  type: "virtualTable";
  virtualTable: VirtualTableCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_vortex {
  type: "vortex";
  vortex: VortexCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_walkthrough {
  type: "walkthrough";
  walkthrough: WalkthroughCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_webhooks {
  type: "webhooks";
  webhooks: WebhooksCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_widgetSet {
  type: "widgetSet";
  widgetSet: WidgetSetCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_workflowGraph {
  type: "workflowGraph";
  workflowGraph: WorkflowGraphCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_workshop {
  type: "workshop";
  workshop: WorkshopCreateBlockRequest;
}

export interface BlockSpecificCreateRequest_writeback {
  type: "writeback";
  writeback: WritebackCreateBlockRequest;
}
/**
 * Request for creating a new version of a block of a specific type.
 */
export type BlockSpecificCreateRequest =
  | BlockSpecificCreateRequest_aipAgent
  | BlockSpecificCreateRequest_appConfigAppBar
  | BlockSpecificCreateRequest_appConfigAuthorizationChooserPresets
  | BlockSpecificCreateRequest_appConfigAuthorizationChooserRules
  | BlockSpecificCreateRequest_appConfigCosmos
  | BlockSpecificCreateRequest_appConfigGaia
  | BlockSpecificCreateRequest_appConfigTitanium
  | BlockSpecificCreateRequest_authoringRepository
  | BlockSpecificCreateRequest_authoringRepositoryV2
  | BlockSpecificCreateRequest_automation
  | BlockSpecificCreateRequest_blobster
  | BlockSpecificCreateRequest_carbon
  | BlockSpecificCreateRequest_checkpointConfig
  | BlockSpecificCreateRequest_cipherChannel
  | BlockSpecificCreateRequest_cipherLicense
  | BlockSpecificCreateRequest_codeWorkspace
  | BlockSpecificCreateRequest_compass
  | BlockSpecificCreateRequest_dataHealth
  | BlockSpecificCreateRequest_deployedApp
  | BlockSpecificCreateRequest_directDatasource
  | BlockSpecificCreateRequest_eddie
  | BlockSpecificCreateRequest_eddieEdgePipeline
  | BlockSpecificCreateRequest_editsView
  | BlockSpecificCreateRequest_evaluationSuite
  | BlockSpecificCreateRequest_functionConfigurations
  | BlockSpecificCreateRequest_functions
  | BlockSpecificCreateRequest_logic
  | BlockSpecificCreateRequest_machinery
  | BlockSpecificCreateRequest_magritteConnector
  | BlockSpecificCreateRequest_magritteExport
  | BlockSpecificCreateRequest_magritteSource
  | BlockSpecificCreateRequest_mediaSet
  | BlockSpecificCreateRequest_model
  | BlockSpecificCreateRequest_monitoringView
  | BlockSpecificCreateRequest_mapRenderingService
  | BlockSpecificCreateRequest_namedCredential
  | BlockSpecificCreateRequest_networkEgressPolicy
  | BlockSpecificCreateRequest_notepad
  | BlockSpecificCreateRequest_notepadTemplate
  | BlockSpecificCreateRequest_objectSet
  | BlockSpecificCreateRequest_objectView
  | BlockSpecificCreateRequest_ontology
  | BlockSpecificCreateRequest_quiver
  | BlockSpecificCreateRequest_resourceUpdates
  | BlockSpecificCreateRequest_restrictedView
  | BlockSpecificCreateRequest_rosetta
  | BlockSpecificCreateRequest_satelliteImageryModel
  | BlockSpecificCreateRequest_schedule
  | BlockSpecificCreateRequest_taurus
  | BlockSpecificCreateRequest_ontologySdk
  | BlockSpecificCreateRequest_ontologySdkV2
  | BlockSpecificCreateRequest_slate
  | BlockSpecificCreateRequest_solutionDesign
  | BlockSpecificCreateRequest_staticDataset
  | BlockSpecificCreateRequest_streamDataset
  | BlockSpecificCreateRequest_templates
  | BlockSpecificCreateRequest_timeSeriesSync
  | BlockSpecificCreateRequest_thirdPartyApplication
  | BlockSpecificCreateRequest_transforms
  | BlockSpecificCreateRequest_valueType
  | BlockSpecificCreateRequest_vertex
  | BlockSpecificCreateRequest_virtualTable
  | BlockSpecificCreateRequest_vortex
  | BlockSpecificCreateRequest_walkthrough
  | BlockSpecificCreateRequest_webhooks
  | BlockSpecificCreateRequest_widgetSet
  | BlockSpecificCreateRequest_workflowGraph
  | BlockSpecificCreateRequest_workshop
  | BlockSpecificCreateRequest_writeback;

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

/**
 * All metadata for a particular (version of a) block. That is, all parts of the block other than the block data,
 * which is referenced here but stored elsewhere (artifacts).
 */
export interface BlockV1 {
  about: LocalizedTitleAndDescription;
  blockData: Record<BlockDataId, SerializedDataLocator>;
  configuration: BlockSpecificConfiguration;
  inputGroups: Record<InputGroupId, InputGroup>;
  inputMetadata: Record<BlockShapeId, InputShapeMetadata>;
  inputs: Record<BlockShapeId, InputShape>;
  knownIdentifiers: Record<string, BlockInternalId>;
  outputs: Record<BlockShapeId, OutputShape>;
  recommendations: Record<BlockRecommendationId, BlockRecommendation>;
}
export type BlockVersion = string;
export interface BlockVersionCreationErrorStatus {
  error: BlockCreationError;
}
export interface BlockVersionCreationPendingStatus_waitingForData {
  type: "waitingForData";
  waitingForData: Void;
}

export interface BlockVersionCreationPendingStatus_waitingForFinalization {
  type: "waitingForFinalization";
  waitingForFinalization: Void;
}
export type BlockVersionCreationPendingStatus =
  | BlockVersionCreationPendingStatus_waitingForData
  | BlockVersionCreationPendingStatus_waitingForFinalization;

export interface BlockVersionCreationStatus_pending {
  type: "pending";
  pending: BlockVersionCreationPendingStatus;
}

export interface BlockVersionCreationStatus_success {
  type: "success";
  success: Void;
}

export interface BlockVersionCreationStatus_error {
  type: "error";
  error: BlockVersionCreationErrorStatus;
}
export type BlockVersionCreationStatus =
  | BlockVersionCreationStatus_pending
  | BlockVersionCreationStatus_success
  | BlockVersionCreationStatus_error;

/**
 * Unique identifier for a particular version of a block. That is, 1:1 with (BlockId, BlockVersion) tuples.
 */
export type BlockVersionId = string;
export interface BlockVersionIdDoesNotExist {
  blockVersion: BlockVersionId;
}
/**
 * Matches ranges of versions. Use an `x` instead of a version number to represent wildcards. Once one level
 * has a wildcard, all subsequent ones must be as well (i.e. `1.x.4` is not supported, while `1.x.x` is). Any
 * missing levels are assumed to be wildcards (i.e. `1.x` is equivalent to `1.x.x`).
 */
export type BlockVersionMatcher = string;

/**
 * Range of versions. Contains all version from `from` (inclusive), to `until` (inclusive). For example, a
 * version range from version `1.3.4` to all versions with a major version of 2 would be:
 *
 * `{ from: "1.3.4", until: "2.x.x" }`
 *
 * This example will match versions such as `1.3.4`, `1.3.7`, `1.4.0`, `2.0.0`, `2.9.3`, but not `3.0.0`.
 */
export interface BlockVersionRange {
  from: BlockVersion;
  until: BlockVersionMatcher;
}
export interface BlockVersionReference {
  blockSetBlockInstanceId: BlockSetBlockInstanceId;
  shapeId: BlockShapeId;
  shapeType: InputShapeType;
  version: string;
}
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
export type BooleanValue = boolean;
export type Branch = string;
export interface BuildCancelled {
}
export interface BuildError {
}
/**
 * A build was submitted as part of the install of this blocked, but this build failed or was cancelled.
 */
export interface BuildFailure {
  buildRid: BuildRid;
  buildStatus: string;
  shapeJobRids: Record<BlockShapeId, JobRid>;
}
export interface BuildingInstallPendingStatus {
  blockShapeBuildMetadata: Record<BlockShapeId, BlockShapeBuildMetadata>;
  buildsAndIndexingIds: Record<BlockShapeId, BuildsAndIndexingIds>;
}
export interface BuildJobIds {
  buildRid: BuildRid;
  jobRid: JobRid;
}
/**
 * A build was requested but the marketplace job failed during orchestration of this build.
 */
export interface BuildOrchestrationFailure {
  buildRid?: BuildRid | null | undefined;
  message: string;
}
export type BuildRid = string;

/**
 * For blocks where Marketplace must track state after reconcile, this could be either or both of submitting a
 * build to build2 or tracking the indexing state of an object/many-to-many link in Funnel.
 */
export interface BuildsAndIndexingIds {
  buildJobIds?: BuildJobIds | null | undefined;
  indexableEntityIds?: IndexableEntityIds | null | undefined;
}
export interface BuildSettings {
  buildOption: InstallationJobBuildOption;
}
/**
 * The time marketplace saw the build(s) finish. This time is updated for both successful and failed builds.
 */
export type BuildsFinishedAtTimestamp = string;
export interface BuildTimedOut {
}
/**
 * A build was submitted as part of the install of this blocked, but this build did not succeed within the
 * timeout period defined by Marketplace for an installation build.
 */
export interface BuildTimeout {
  buildRid: BuildRid;
  buildStartedTime: string;
  buildStatus: string;
  shapeJobRids: Record<BlockShapeId, JobRid>;
}
export interface BulkImportBlockSetsDetailsFailure {
  blockSetVersions: Array<BlockSetVersionId>;
  bundleDigest: Sha256Hash;
  maybeSigningKeyId?: SigningKeyId | null | undefined;
  targetMarketplaceRid: MarketplaceRid;
}
export interface BulkImportBlockSetsDetailsSuccess {
  bundleDigest: Sha256Hash;
  importedBlockSets: Array<ImportBlockSetResponse>;
  targetMarketplaceRid: MarketplaceRid;
}
export interface BulkImportBlockSetsResponse {
  responses: Array<ImportBlockSetResponse>;
  responseV2: BulkImportBlockSetsResponseV2;
}
export interface BulkImportBlockSetsResponseV2_success {
  type: "success";
  success: BulkImportBlockSetsDetailsSuccess;
}

export interface BulkImportBlockSetsResponseV2_unsignedBundle {
  type: "unsignedBundle";
  unsignedBundle: BulkImportBlockSetsDetailsFailure;
}

export interface BulkImportBlockSetsResponseV2_publicKeyNotRecognized {
  type: "publicKeyNotRecognized";
  publicKeyNotRecognized: BulkImportBlockSetsDetailsFailure;
}

export interface BulkImportBlockSetsResponseV2_tamperedBundle {
  type: "tamperedBundle";
  tamperedBundle: BulkImportBlockSetsDetailsFailure;
}

export interface BulkImportBlockSetsResponseV2_invalidProductPermissions {
  type: "invalidProductPermissions";
  invalidProductPermissions: BulkImportBlockSetsDetailsFailure;
}

export interface BulkImportBlockSetsResponseV2_malformedFile {
  type: "malformedFile";
  malformedFile: Void;
}
export type BulkImportBlockSetsResponseV2 =
  | BulkImportBlockSetsResponseV2_success
  | BulkImportBlockSetsResponseV2_unsignedBundle
  | BulkImportBlockSetsResponseV2_publicKeyNotRecognized
  | BulkImportBlockSetsResponseV2_tamperedBundle
  | BulkImportBlockSetsResponseV2_invalidProductPermissions
  | BulkImportBlockSetsResponseV2_malformedFile;

export interface CancelInstallationJobAllowance_allowed {
  type: "allowed";
  allowed: Void;
}

export interface CancelInstallationJobAllowance_disallowed {
  type: "disallowed";
  disallowed: CancelInstallationJobDisallowed;
}
export type CancelInstallationJobAllowance =
  | CancelInstallationJobAllowance_allowed
  | CancelInstallationJobAllowance_disallowed;

export interface CancelInstallationJobDisallowed {
  rationale: CancelInstallationJobPermissionDeniedRationale;
}
export interface CancelInstallationJobPermissionDeniedRationale {
  installationJobRids: Array<InstallBlocksJobRid>;
}
/**
 * A cancellation of a recall announcement already made by the packager. This announcement
 * is used by Marketplace to to unblock target versions from being installed, and cancelling roll-offs for
 * installers based on the specified roll-off strategy.
 */
export interface CancelRecallAnnouncement {
  id: RecallId;
  message: string;
  targetId: RecallId;
}
export interface CancelRecallRequest {
  message: string;
  targetRecallId: RecallId;
}
export interface CancelRecallResponse {
  recallId: RecallId;
}
export interface CanCreateBlockVersionWithOutputResult_ok {
  type: "ok";
  ok: CanCreateBlockVersionWithOutputResultOk;
}

export interface CanCreateBlockVersionWithOutputResult_error {
  type: "error";
  error: CanCreateBlockVersionWithOutputResultError;
}
export type CanCreateBlockVersionWithOutputResult =
  | CanCreateBlockVersionWithOutputResult_ok
  | CanCreateBlockVersionWithOutputResult_error;

export interface CanCreateBlockVersionWithOutputResultError_resourcePermissionDenied {
  type: "resourcePermissionDenied";
  resourcePermissionDenied: ResourcePermissionDenied;
}

export interface CanCreateBlockVersionWithOutputResultError_notAuthorizedToUseMarkings {
  type: "notAuthorizedToUseMarkings";
  notAuthorizedToUseMarkings: NotAuthorizedToUseMarkings;
}

export interface CanCreateBlockVersionWithOutputResultError_notAuthorizedToDeclassify {
  type: "notAuthorizedToDeclassify";
  notAuthorizedToDeclassify: NotAuthorizedToDeclassify;
}
export type CanCreateBlockVersionWithOutputResultError =
  | CanCreateBlockVersionWithOutputResultError_resourcePermissionDenied
  | CanCreateBlockVersionWithOutputResultError_notAuthorizedToUseMarkings
  | CanCreateBlockVersionWithOutputResultError_notAuthorizedToDeclassify;

export interface CanCreateBlockVersionWithOutputResultOk {
}
export interface CanCreateBlockVersionWithOutputsRequest {
  marketplaceRid: MarketplaceRid;
  resolvedOutputShapes: Record<BlockShapeId, ResolvedOutputShape>;
}
export interface CanCreateBlockVersionWithOutputsResponse {
  results: Record<BlockShapeId, CanCreateBlockVersionWithOutputResult>;
}
/**
 * It is not permitted to change the backing datasource when upgrading an existing installation of an object/link type
 */
export interface CannotChangeBackingDatasource {
  datasourceLocatorA: DatasourceLocator;
  datasourceLocatorB: DatasourceLocator;
}
export interface CannotUpgradeToDifferentBlockId {
  existingBlockId: BlockId;
  newBlockId: BlockId;
  newBlockVersionId: BlockVersionId;
}
export interface CarbonCreateBlockRequest {
  workspaceRid: string;
}
export interface CarbonWorkspaceIdentifier {
  rid: CarbonWorkspaceRid;
}
export interface CarbonWorkspaceInputShape {
  about: LocalizedTitleAndDescription;
}
export interface CarbonWorkspaceOutputShape {
  about: LocalizedTitleAndDescription;
}
export type CarbonWorkspaceRid = string;
export type CatalogTransactionRid = string;
export interface Category {
  isImported: boolean;
  name: LocalizedName;
  rid: CategoryRid;
  tags: Array<Tag>;
}
export type CategoryRid = string;
export interface CbacMarkingConstraint {
  markingIds: Array<MarkingId>;
}
/**
 * Cbac marking constraints are not allowed on this stack. Cbac marking constraints are only allowed on stacks
 * that have Cbac enabled.
 */
export interface CbacMarkingConstraintNotAllowed {
}
export interface Changelog_markdown {
  type: "markdown";
  markdown: MarkdownText;
}
export type Changelog = Changelog_markdown;

export interface CheckCanExportFromStoreResponse {
  hasPermission: boolean;
  permissionDeniedReasons: Array<ExportPermissionDeniedReason>;
}
export interface CheckCanUploadToStoreResponse {
  hasPermission: boolean;
}
export interface CheckpointConfigCreateBlockRequest {
  rid: string;
}
export interface CheckpointConfigEntityIdentifier {
  rid: CheckpointConfigRid;
}
export interface CheckpointConfigOutputShape {
  about: LocalizedTitleAndDescription;
}
export type CheckpointConfigRid = string;
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

/**
 * The algorithm specified in the cipher channel is incompatible with the algorithms required by the shape.
 */
export interface CipherChannelAlgorithmMismatch {
  actual: CipherAlgorithm;
  expectedOneOf: Array<CipherAlgorithm>;
}
export interface CipherChannelCreateBlockRequest {
  channelRid: string;
  cryptographicKeyStrategy?: CryptographicKeyStrategy | null | undefined;
}
export interface CipherChannelEntityIdentifier {
  rid: CipherChannelRid;
}
export interface CipherChannelInputShape {
  about: LocalizedTitleAndDescription;
  allowedAlgorithms: Array<CipherAlgorithm>;
}
export interface CipherChannelOutputShape {
  about: LocalizedTitleAndDescription;
  algorithm: CipherAlgorithm;
}
export interface CipherChannelOutputSpecConfig {
  cryptographicKeyStrategy?: CryptographicKeyStrategy | null | undefined;
}
export type CipherChannelRid = string;

/**
 * The algorithm specified in the license's cipher channel is incompatible with the algorithms required by the shape.
 */
export interface CipherLicenseAlgorithmMismatch {
  actual: CipherAlgorithm;
  expectedOneOf: Array<CipherAlgorithm>;
}
export interface CipherLicenseCreateBlockRequest {
  expirationStrategy?: ExpirationStrategy | null | undefined;
  licenseRid: string;
}
export interface CipherLicenseEntityIdentifier {
  rid: CipherLicenseRid;
}
export interface CipherLicenseInputIdentifier {
  requiredPermits: Array<CipherLicensePermit>;
  rid: CipherLicenseRid;
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
/**
 * The selected cipher license does not have all of the operations required by the shape.
 */
export interface CipherLicenseMissingRequiredOperations {
  actualOperations: Array<CipherOperationType>;
  missingOperations: Array<CipherOperationType>;
  requiredOperations: Array<CipherOperationType>;
}
/**
 * The selected cipher license does not have all of the permits required by the shape.
 */
export interface CipherLicenseMissingRequiredPermits {
  missingPermits: Array<CipherLicensePermit>;
}
export interface CipherLicenseOutputShape {
  about: LocalizedTitleAndDescription;
  algorithm: CipherAlgorithm;
  licenseType: CipherLicenseType;
  operations: Array<CipherOperationType>;
}
export interface CipherLicenseOutputSpecConfig {
  expirationStrategy?: ExpirationStrategy | null | undefined;
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

export type CipherLicenseRid = string;
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

/**
 * The type of the license is incompatible with the types required by the shape.
 */
export interface CipherLicenseTypeMismatch {
  actual: CipherLicenseType;
  expectedOneOf: Array<CipherLicenseType>;
}
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
export interface CleanupUnusedShapeError {
  error: ShapesRemovalError;
  unusedShapes: Array<UnusedShapeStatusEntry>;
}
/**
 * The cleanup unused shapes settings to use when installing a new installation or upgradiing an existing one.
 * Unused shapes are those that no longer belong to the target installation version. Specifically, given two
 * block set versions, old and new, unused shapes are the ones that are part of the old version but not the
 * new version. On upgrade, these shapes should be cleaned up (e.g., moved to trash or disabled); otherwise,
 * they will remain active and may produce unexpected side effects.
 */
export interface CleanupUnusedShapesSettings {
  isEnabled: boolean;
}
/**
 * For more details about cleanup of unused shapes, please see CleanupUnusedShapesSettings docs.
 *
 * Each shape can only be in one status at a time and always progresses forward
 * (notStarted -> inProgress -> finished or failed).
 *
 * CleanupUnusedShapesStatuses does not fit well within ShapeInstallationStatuses because unused shapes are
 * never pre-allocated, reconciled, built, etc. The cleanup of unused shapes can be considered a side task
 * of the installation job; thus, it is better to keep its statuses separate from shape installation statuses.
 */
export interface CleanupUnusedShapesStatuses {
  failed: Array<CleanupUnusedShapeError>;
  finished: Array<UnusedShapeStatusEntry>;
  inProgress: Array<UnusedShapeStatusEntry>;
  notStarted: Array<UnusedShapeStatusEntry>;
}
export type CodeBlockSetParentRid = string;
export interface CodeWorkspaceCreateBlockRequest {
  containerRid: string;
  containerVersionId?: string | null | undefined;
}
export interface CodeWorkspaceIdentifier {
  containerRid: ContainerRid;
  containerVersionId?: ContainerVersionId | null | undefined;
}
/**
 * The image type of the code workspace does not match the expected type.
 */
export interface CodeWorkspaceImageTypeMismatch {
  actual: ContainerImageType;
  expected: ContainerImageType;
}
export interface CodeWorkspaceInputShape {
  about: LocalizedTitleAndDescription;
  imageType: ContainerImageType;
}
export interface CodeWorkspaceLicenseIdentifier {
  licenseRid: string;
}
export interface CodeWorkspaceLicenseInputShape {
  about: LocalizedTitleAndDescription;
  licenseProductType: LicenseProductType;
}
export interface CodeWorkspaceOutputShape {
  about: LocalizedTitleAndDescription;
  imageType: ContainerImageType;
}
/**
 * The type of the column doesn't match the type required in the shape definition.
 */
export interface ColumnTypeMismatch {
  actual: ConcreteDataType;
  expected: DatasourceColumnType;
}
export interface CompassContext_project {
  type: "project";
  project: ProjectContext;
}
export type CompassContext = CompassContext_project;

export interface CompassCreateBlockRequest {
  folderRid: string;
}
export type CompassFolderRid = string;
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
/**
 * The Compass location to install a block into.
 */
export interface CompassInstallLocation {
  compassFolderRid: CompassFolderRid;
}
export type CompassProjectRid = string;
export interface CompassResourceInputIdentifier {
  allowedTypes: Array<CompassResourceType>;
  rid: string;
  typeConstraints: Array<CompassResourceTypeConstraints>;
}
export interface CompassResourceInputShape {
  about: LocalizedTitleAndDescription;
  allowedTypes: Array<CompassResourceType>;
  typeConstraints: Array<CompassResourceTypeConstraints>;
}
/**
 * The type of this resource does not match one of the allowed types.
 */
export interface CompassResourceInputShapeTypeMismatch {
  actual: ResourceType;
  expected: Array<ResourceType>;
}
export interface CompassResourceOutputIdentifier {
  rid: string;
}
export interface CompassResourceOutputShape {
  about: LocalizedTitleAndDescription;
  type: CompassResourceType;
}
/**
 * The type of this resource does not match one of the allowed types.
 */
export interface CompassResourceOutputShapeTypeMismatch {
  actual: ResourceType;
  expected: ResourceType;
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

export interface CompassSettings {
  newProjectOrExistingFolder: NewProjectOrExistingFolder;
}
export interface ComputeBlockSetVersionsDiffRequest {
  blockSetVersionIdA: BlockSetVersionId;
  blockSetVersionIdB: BlockSetVersionId;
}
export interface ComputeBlockSetVersionsDiffV2Response {
  diff: BlockSetComputedDiff;
}
export interface ComputedDiff {
  diffImplications: Array<DiffImplication>;
}
/**
 * DEPRECATED
 */
export interface ComputeInternalRecommendationsRequest {
}
/**
 * DEPRECATED
 */
export interface ComputeInternalRecommendationsResponse {
  installationHints: BlockSetInstallationHints;
  internalRecommendations: BlockSetInternalRecommendations;
}
export type ComputeModuleIncludeFunctionsType =
  | "INCLUDED_AS_OUTPUTS"
  | "EXCLUDED";
export interface ComputeModuleOutputSpecConfig {
  includeFunctions?: ComputeModuleIncludeFunctionsType | null | undefined;
}
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
 * Untyped config object
 */
export type ConfigBlock = Record<string, any>;

/**
 * A snapshot of a BlockSetInstallation where all block installations are in a single BlockSetVersion.
 */
export interface ConsistentBlockSetInstallationState {
  blocks: Record<BlockSetBlockInstanceId, BlockInstallation>;
  blockSetVersionId: BlockSetVersionId;
  jobId: InstallBlocksJobId;
  jobRid: InstallBlocksJobRid;
}
export interface ConstraintFailure_outsideMaintenanceWindows {
  type: "outsideMaintenanceWindows";
  outsideMaintenanceWindows: OutsideMaintenanceWindowsConstraintFailure;
}

export interface ConstraintFailure_noNewerVersionsOnReleaseChannel {
  type: "noNewerVersionsOnReleaseChannel";
  noNewerVersionsOnReleaseChannel:
    NoNewerVersionsOnReleaseChannelConstraintFailure;
}

export interface ConstraintFailure_lastUpgradeFailed {
  type: "lastUpgradeFailed";
  lastUpgradeFailed: LastUpgradeFailedConstraintFailure;
}

export interface ConstraintFailure_missingInputs {
  type: "missingInputs";
  missingInputs: AllPossibleVersionsMissingInputsConstraintFailure;
}

export interface ConstraintFailure_missingInputsV2 {
  type: "missingInputsV2";
  missingInputsV2: AllPossibleVersionsMissingInputsConstraintFailureV2;
}

export interface ConstraintFailure_installationSpanningMultipleVersions {
  type: "installationSpanningMultipleVersions";
  installationSpanningMultipleVersions: Array<BlockSetVersionId>;
}

export interface ConstraintFailure_inProgressJobForBlockSetInstallation {
  type: "inProgressJobForBlockSetInstallation";
  inProgressJobForBlockSetInstallation: InstallBlocksJobRid;
}

export interface ConstraintFailure_automationDisabled {
  type: "automationDisabled";
  automationDisabled: Void;
}

export interface ConstraintFailure_continuousInstallationHasBeenUpdatedRecently {
  type: "continuousInstallationHasBeenUpdatedRecently";
  continuousInstallationHasBeenUpdatedRecently: Void;
}

export interface ConstraintFailure_unhandledValidationFailure {
  type: "unhandledValidationFailure";
  unhandledValidationFailure: UnhandledValidationFailure;
}

export interface ConstraintFailure_unhandledValidationFailureV2 {
  type: "unhandledValidationFailureV2";
  unhandledValidationFailureV2: UnhandledValidationFailureV2;
}

export interface ConstraintFailure_unhandledValidationFailureV3 {
  type: "unhandledValidationFailureV3";
  unhandledValidationFailureV3: UnhandledValidationFailureV3;
}

export interface ConstraintFailure_noMaintenanceWindowsSet {
  type: "noMaintenanceWindowsSet";
  noMaintenanceWindowsSet: Void;
}

export interface ConstraintFailure_isPartiallyDeletedInstallation {
  type: "isPartiallyDeletedInstallation";
  isPartiallyDeletedInstallation: Void;
}

export interface ConstraintFailure_qosThrottle {
  type: "qosThrottle";
  qosThrottle: Void;
}
/**
 * Reason why upgrade automation will not run an upgrade. May require manual action to remidiate
 */
export type ConstraintFailure =
  | ConstraintFailure_outsideMaintenanceWindows
  | ConstraintFailure_noNewerVersionsOnReleaseChannel
  | ConstraintFailure_lastUpgradeFailed
  | ConstraintFailure_missingInputs
  | ConstraintFailure_missingInputsV2
  | ConstraintFailure_installationSpanningMultipleVersions
  | ConstraintFailure_inProgressJobForBlockSetInstallation
  | ConstraintFailure_automationDisabled
  | ConstraintFailure_continuousInstallationHasBeenUpdatedRecently
  | ConstraintFailure_unhandledValidationFailure
  | ConstraintFailure_unhandledValidationFailureV2
  | ConstraintFailure_unhandledValidationFailureV3
  | ConstraintFailure_noMaintenanceWindowsSet
  | ConstraintFailure_isPartiallyDeletedInstallation
  | ConstraintFailure_qosThrottle;

export type ConstraintFailures = Array<ConstraintFailure>;

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
export type ContainerRid = string;
export type ContainerVersionId = string;
export interface ContourAnalysisEntityIdentifier {
  rid: ContourAnalysisRid;
}
export type ContourAnalysisRid = string;
export interface ContourAnalysisShape {
  about: LocalizedTitleAndDescription;
}
export interface CountBlockSetInstallationsRequest {
  blockSetId: BlockSetId;
}
export interface CountBlockSetInstallationsResponse {
  count: number;
}
export interface CreateBlockRequest {
  marketplaceRid: MarketplaceRid;
}
export interface CreateBlockSetFromStartingVersionRequest {
  overriddenMetadata?: OverriddenMetadataFromStartingVersion | null | undefined;
  overriddenSpecs?: OverriddenOutputSpecs | null | undefined;
  shouldRefresh: boolean;
  startingVersion: BlockSetVersionId;
}
export interface CreateBlockSetRequest {
  marketplaceRid: MarketplaceRid;
}
export interface CreateBlockSetResponse {
  blockSet: UnversionedBlockSet;
}
export interface CreateBlockSetVersionRequest {
  about: LocalizedTitleAndDescription;
  additionalRecommendationVariants: Record<
    BlockSetRecommendationId,
    BlockSetRecommendationVariant
  >;
  blocks: Record<BlockSetBlockInstanceId, SingleVersionBlockReference>;
  defaultInstallationSettings?: DefaultInstallationSettings | null | undefined;
  lastVersionId?: BlockSetVersionId | null | undefined;
  marketplaceMetadataVersion?: MarketplaceMetadataVersion | null | undefined;
  specifiedBlockSetVersion?: SemverVersion | null | undefined;
  startingVersionId?: BlockSetVersionId | null | undefined;
  tags: Array<BlockSetTag>;
  tagsV2?: BlockSetCategorizedTags | null | undefined;
  typedTags: Array<TagRid>;
  versionIncrement?: VersionIncrement | null | undefined;
}
export interface CreateBlockSetVersionRequestV2 {
  isListable?: boolean | null | undefined;
  startingVersion?: CreateBlockSetFromStartingVersionRequest | null | undefined;
}
export interface CreateBlockSetVersionResponse {
  blockSetVersionId: BlockSetVersionId;
}
export interface CreateBlockSetVersionResponseV2 {
  blockSetId: BlockSetId;
  blockSetVersionId: BlockSetVersionId;
}
export interface CreateBlockVersionError {
  error: CreateBlockVersionErrorUnion;
  severity: ErrorSeverity;
}
export interface CreateBlockVersionErrorUnion_serializable {
  type: "serializable";
  serializable: SerializableCreateBlockVersionError;
}

export interface CreateBlockVersionErrorUnion_genericV2 {
  type: "genericV2";
  genericV2: GenericCreateBlockVersionErrorV2;
}

export interface CreateBlockVersionErrorUnion_generic {
  type: "generic";
  generic: GenericCreateBlockVersionError;
}
export type CreateBlockVersionErrorUnion =
  | CreateBlockVersionErrorUnion_serializable
  | CreateBlockVersionErrorUnion_genericV2
  | CreateBlockVersionErrorUnion_generic;

/**
 * Create a new version of a block by specifying everything needed directly.
 * The kind of the block is defined via the block configuration.
 * The block version will not be successfully created until all block data has been supplied.
 */
export interface CreateBlockVersionRequest {
  about: LocalizedTitleAndDescription;
  blockDataToBeSupplied: Record<BlockDataId, SerializedDataLocator>;
  blockSetVersionId?: BlockSetVersionId | null | undefined;
  configuration: BlockSpecificConfiguration;
  inputGroups: Record<InputGroupId, InputGroup>;
  inputMetadata: Record<BlockShapeId, InputShapeMetadata>;
  inputs: Record<BlockShapeId, InputShape>;
  knownIdentifiers: Record<string, BlockInternalId>;
  lastVersionId?: BlockVersionId | null | undefined;
  outputs: Record<BlockShapeId, OutputShape>;
  packagingRequest?: BlockSpecificCreateRequest | null | undefined;
  resolvedInputs: Record<BlockShapeId, ResolvedInputShape>;
  resolvedOutputs: Record<BlockShapeId, ResolvedOutputShape>;
}
export interface CreateBlockVersionResponse {
  blockDataArtifactsRepositoryRid: ArtifactsRepositoryRid;
  blockId: BlockId;
  blockVersionId: BlockVersionId;
}
export interface CreateMarketplaceRequest {
  definition: MarketplaceDefinition;
  name: string;
  parentRid: string;
}
export interface CreateNewBlockSetInstallation {
  targetLocation: TargetInstallLocationV2;
  targetState: BlockSetInstallationTargetState;
}
export interface CreatePlaceholdersRequest {
  inputShapesToCreatePlaceholdersFor: Record<
    InputBlockSetShapeId,
    BlockSetInputShape
  >;
  location: PlaceholdersLocation;
  markingIds: Array<MarkingId>;
}
export interface CreatePlaceholdersResponse {
  resolvedInputShapes: Record<InputBlockSetShapeId, ResolvedBlockSetInputShape>;
}
export interface CreateProjectRequest {
  cbacMarkingConstraint?: CbacMarkingConstraint | null | undefined;
  namespaceRid: NamespaceRid;
  organizationMarkingIds?: Array<MarkingId> | null | undefined;
  projectName: string;
  roleContext: InstallationProjectRoleContext;
  roleGrants: Array<RoleGrant>;
}
export type CreationTimestamp = string;
export interface CredentialHasIncorrectSecretNames {
  actual: Array<SecretName>;
  expected: Array<SecretName>;
}
/**
 * The equivalent of `CredentialId` in Magritte's `NamedCredentialService`.
 */
export type CredentialRid = string;
export type CronExpression = string;

/**
 * Cron expression localized in a specific timezone.
 */
export interface CronWithTimeZoneValue {
  cronExpression: CronExpression;
  zoneId: ZoneId;
}
export interface CrossStackConfigSigningPublicKeyEntry {
  publicKey: SigningPublicKey;
  publicKeyId: SigningKeyId;
}
/**
 * Conjure representation of a yaml file located in:
 * https://github.palantir.build/foundry/marketplace-cross-stack-config/blob/develop/marketplace-cross-stack-config/marketplace-config/public-keys.yml
 */
export interface CrossStackConfigSigningPublicKeys {
  entries: Record<string, Array<CrossStackConfigSigningPublicKeyEntry>>;
}
export interface CryptographicKeyStrategy_keepSameKey {
  type: "keepSameKey";
  keepSameKey: Void;
}

export interface CryptographicKeyStrategy_autoGenerateNewKey {
  type: "autoGenerateNewKey";
  autoGenerateNewKey: Void;
}
export type CryptographicKeyStrategy =
  | CryptographicKeyStrategy_keepSameKey
  | CryptographicKeyStrategy_autoGenerateNewKey;

export interface DataCommitBlockVersionFailedRequest {
  error?: _api_errors_MarketplaceSerializableError | null | undefined;
  errorInstanceId?: ErrorInstanceId | null | undefined;
  errorMessage: string;
}
export interface DataHealthCheckCreateBlockRequest {
  checkRid: string;
}
export interface DataHealthCheckGroupIdentifier {
  rid: DataHealthCheckGroupRid;
}
export type DataHealthCheckGroupRid = string;
export interface DataHealthCheckGroupShape {
  about: LocalizedTitleAndDescription;
}
export interface DataHealthCheckIdentifier {
  rid: DataHealthCheckRid;
}
export type DataHealthCheckRid = string;
export interface DataHealthCheckShape {
  about: LocalizedTitleAndDescription;
}
export interface DatasetLocator {
  branch: string;
  rid: string;
}
export interface DatasetLocatorIdentifier {
  branch?: string | null | undefined;
  rid: string;
}
/**
 * Configures whether to package the dataset with its data statically, or include the producer that puts the
 * job spec for the dataset. Exactly one of `includeProducer` and `includeData` must be true.
 */
export interface DatasetOutputSpecConfig {
  includeData: boolean;
  includeProducer: boolean;
}
/**
 * The tabular datasource referenced already backs an existing link type in the ontology.
 * Reusing a backing datasource across link types is not permitted.
 */
export interface DatasourceAlreadyBacksExistingLinkType {
  datasourceLocator: DatasourceLocator;
  linkTypeRid: LinkTypeRid;
}
/**
 * The tabular datasource referenced already backs an existing object type in the ontology.
 * Reusing a backing datasource across object types is not permitted.
 */
export interface DatasourceAlreadyBacksExistingObjectType {
  datasourceLocator: DatasourceLocator;
  objectTypeRid: ObjectTypeRid;
}
/**
 * The RID of a resource that backs a datasource in OMS, e.g. a dataset RID or an restricted view RID.
 *
 * Different from `DatasourceRid`, which is an internal RID that OMS uses to identify its datasources.
 */
export type DatasourceBackingRid = string;
export interface DatasourceBuildRequirements {
  isBuildable: boolean;
}
export interface DatasourceColumnIdentifier_nameBased {
  type: "nameBased";
  nameBased: NameBasedDatasourceColumnIdentifier;
}
export type DatasourceColumnIdentifier = DatasourceColumnIdentifier_nameBased;

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

export interface DatasourceLocatorIdentifier_stream {
  type: "stream";
  stream: StreamLocatorIdentifier;
}

export interface DatasourceLocatorIdentifier_dataset {
  type: "dataset";
  dataset: DatasetLocatorIdentifier;
}

export interface DatasourceLocatorIdentifier_restrictedView {
  type: "restrictedView";
  restrictedView: RestrictedViewLocatorIdentifier;
}

export interface DatasourceLocatorIdentifier_virtualTable {
  type: "virtualTable";
  virtualTable: VirtualTableLocatorIdentifier;
}
export type DatasourceLocatorIdentifier =
  | DatasourceLocatorIdentifier_stream
  | DatasourceLocatorIdentifier_dataset
  | DatasourceLocatorIdentifier_restrictedView
  | DatasourceLocatorIdentifier_virtualTable;

/**
 * An unknown type of `DatasourceLocator` definition was encountered. This indicates we might have run into a new
 * kind of `DatasourceLocator` that isn't yet supported in Marketplace.
 */
export interface DatasourceLocatorTypeUnknown {
  unknownType: string;
}
export type DatasourceReference = BlockInternalId;
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

export interface DataValue_booleanValue {
  type: "booleanValue";
  booleanValue: BooleanValue;
}

export interface DataValue_stringValue {
  type: "stringValue";
  stringValue: StringValue;
}

export interface DataValue_integerValue {
  type: "integerValue";
  integerValue: IntegerValue;
}

export interface DataValue_cronWithTimeZoneValue {
  type: "cronWithTimeZoneValue";
  cronWithTimeZoneValue: CronWithTimeZoneValue;
}
export type DataValue =
  | DataValue_booleanValue
  | DataValue_stringValue
  | DataValue_integerValue
  | DataValue_cronWithTimeZoneValue;

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
export type DayOfWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";
export interface DayTime {
  day: DayOfWeek;
  time: LocalTime;
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
export interface DefaultBlockSpecificConfiguration_v0 {
  type: "v0";
  v0: ManifestOnlyBlockSpecificConfigurationV0;
}
export type DefaultBlockSpecificConfiguration =
  DefaultBlockSpecificConfiguration_v0;

/**
 * Settings defined by the user at packaging time that are tied to this particular version of the block set.
 * If these are not overridden at installation time, these will be used as the installation settings.
 * If not included, we will fall back to Marketplace default settings.
 */
export interface DefaultInstallationSettings {
  buildSettings: BuildSettings;
  cleanupUnusedShapesSettings?: CleanupUnusedShapesSettings | null | undefined;
  createOntologyPackage?: boolean | null | undefined;
  ontologyProjectAssociation?: OntologyProjectAssociation | null | undefined;
}
/**
 * The shape does not have a default value for the preset, even though user has requested resolution
 * using a default.
 */
export interface DefaultRequestedForShapeWithNoDefault {
}
/**
 * Resolving the default for the shape failed.
 */
export interface DefaultResolutionFailedError {
  resolutionError: ResolvedShapeResolutionFailure;
}
export interface DeleteBlockSetInstallationAllowance_allowed {
  type: "allowed";
  allowed: Void;
}

export interface DeleteBlockSetInstallationAllowance_disallowed {
  type: "disallowed";
  disallowed: DeleteBlockSetInstallationDisallowed;
}
export type DeleteBlockSetInstallationAllowance =
  | DeleteBlockSetInstallationAllowance_allowed
  | DeleteBlockSetInstallationAllowance_disallowed;

export interface DeleteBlockSetInstallationDisallowed {
  rationale: DeleteBlockSetInstallationPermissionDeniedRationale;
}
export interface DeleteBlockSetInstallationPermissionDeniedRationale {
  blockSetInstallationRid: BlockSetInstallationRid;
}
/**
 * Includes a registered public key that will be deleted and no longer be able to verify any maven coordinates
 */
export interface DeleteKeyRequest {
  publicKey: SigningPublicKey;
}
export interface DeleteKeyResponse {
}
export type DeleteResourceJobId = string;
export interface DependencyProvenance {
  parent: ResolvedOutputSpec;
}
export interface DeployedAppCreateBlockRequest {
  deployedAppRid: string;
  includeFunctions?: ComputeModuleIncludeFunctionsType | null | undefined;
}
export interface DeployedAppIdentifier {
  rid: DeployedAppRid;
}
export type DeployedAppRid = string;
export interface DeployedAppShape {
  about: LocalizedTitleAndDescription;
}
export type DeprecationStatus = "DEPRECATED" | "NOT_DEPRECATED";

/**
 * We current only provide support for overriding the fallback description, not the localized mappings.
 */
export interface DescriptionOverride {
  fallbackDescription: string;
}
export interface DescriptionOverrideRequest_set {
  type: "set";
  set: DescriptionOverride;
}

export interface DescriptionOverrideRequest_remove {
  type: "remove";
  remove: Void;
}
export type DescriptionOverrideRequest =
  | DescriptionOverrideRequest_set
  | DescriptionOverrideRequest_remove;

export type DiagramRid = string;
export interface DicomSchema {
}
/**
 * Represents an instance of an effect (implication) of a difference/change (diff) between two different versions
 * of a blockset.
 */
export interface DiffImplication {
  associatedInputShapesBlocksetA: Array<BlockSetInputShapeReference>;
  associatedInputShapesBlocksetB: Array<BlockSetInputShapeReference>;
  associatedOutputShapesBlocksetA: Array<BlockSetOutputShapeReference>;
  associatedOutputShapesBlocksetB: Array<BlockSetOutputShapeReference>;
  implicationType: DiffImplicationType;
}
export interface DiffImplicationType_mayIncurDowntime {
  type: "mayIncurDowntime";
  mayIncurDowntime: MayIncurDowntimeDiffImplication;
}

export interface DiffImplicationType_requiresAdditionalConfiguration {
  type: "requiresAdditionalConfiguration";
  requiresAdditionalConfiguration:
    RequiresAdditionalConfigurationDiffImplication;
}

export interface DiffImplicationType_backwardsIncompatible {
  type: "backwardsIncompatible";
  backwardsIncompatible: BackwardsIncompatibilityDiffImplication;
}
export type DiffImplicationType =
  | DiffImplicationType_mayIncurDowntime
  | DiffImplicationType_requiresAdditionalConfiguration
  | DiffImplicationType_backwardsIncompatible;

export interface DirectDatasourceCreateBlockRequest {
  directSourceRid: string;
}
/**
 * By default, all folder resources are discovered using a simple Compass traversal.
 * If any field below is specified, it will be used to additionally discover non-Compass resources of that type.
 * If a field is omitted or empty, resources of that type will not be discovered.
 */
export interface DiscoveryConfig {
  functions?: IncludeFunctionsConfig | null | undefined;
  healthChecks?: IncludeHealthCheckConfig | null | undefined;
  ontologyEntities?: IncludeOntologyEntitiesConfig | null | undefined;
  schedules?: IncludeSchedulesConfig | null | undefined;
}
export interface DiscoveryProvenance {
  parent: DiscoverySpec;
}
/**
 * Applies to `discoverySpecs` in the update. If no `discoverySpecs` are provided, these settings will have no
 * effect.
 */
export interface DiscoverySettings {
  discoveryConfig?: DiscoveryConfig | null | undefined;
  ignoreConfig?: IgnoreConfig | null | undefined;
}
/**
 * A resource that we use as a seed for the discovery of OutputSpec resources to package. For example, a Compass
 * project from which we discover OutputSpecs based on the resources in the project.
 */
export interface DiscoverySpec {
  rid: string;
}
export interface DocumentationManifestV1 {
  attachmentList: Array<AttachmentMetadata>;
  freeFormSections?: FreeFormDocumentationSections | null | undefined;
  links?: Links | null | undefined;
  localizedFreeFormSections?:
    | LocalizedFreeFormDocumentationSections
    | null
    | undefined;
  thumbnail?: AttachmentMetadata | null | undefined;
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
 * The `AssociatedBlockSetInstallation` is referencing the same block with multiple `BlockSetBlockInstanceId`(s).
 *
 * Each `BlockSetBlockInstanceId` should be mapped to a unique block.
 */
export interface DuplicateBlockReference {
  blockReference: BlockReference;
  instanceIds: Array<BlockSetBlockInstanceId>;
}
export interface DuplicateBlockSetVersionsInRequest {
  duplicatedBlockSetVersionIds: Array<InstallableBlockSetVersionId>;
}
/**
 * A tabular datasource has duplicate resolved columns
 */
export interface DuplicateColumns {
  columnReferences: Array<DatasourceColumnReference>;
  tabularDatasourceReference: TabularDatasourceReference;
}
/**
 * Other tabular datasource shapes resolve to this tabular datasource.
 * There should only be one instance of a resolved tabular datasource.
 */
export interface DuplicateTabularDatasources {
  tabularDatasourceReferences: Array<TabularDatasourceReference>;
}
/**
 * Creates an eddie block based on the latest version that backs the main branch.
 */
export interface EddieCreateBlockRequest {
  pipelineRid: string;
  targetEnvironments: Array<TargetEnvironment>;
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
export interface EddieEdgeParameterInputIdentifier {
  instantiation: ResolvedEddieParameter;
  parameterId: _api_eddie_transformations_api_ParameterId;
  rid: EddiePipelineRid;
  type: EddieInputParameterType;
  versionId: EddieVersionId;
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
 * A identifier used when merging resolved shapes to determine if a breaking change has occurred and the resolved
 * shape needs to be redefined. See https://palantir.quip.com/CPnMAn3dndba for design decisions.
 */
export interface EddieEdgeParameterShapeMergeKey {
  stableId?: EddieEdgeStableParameterId | null | undefined;
}
/**
 * Creates an edge pipeline block from a provided eddie pipeline rid. Edge Pipelines are always derived from
 * Eddie Pipelines.
 */
export interface EddieEdgePipelineCreateBlockRequest {
  eddiePipelineRid: string;
}
export interface EddieEdgePipelineIdentifier {
  rid: EddieEdgePipelineRid;
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
 * The RID of the eddie pipeline.
 */
export type EddieEdgePipelineRid = string;

/**
 * See https://palantir.quip.com/CPnMAn3dndba for design decisions.
 */
export interface EddieEdgeStableParameterId {
  parameterId: _api_eddie_transformations_api_ParameterId;
  pipelineRid: EddiePipelineRid;
}
/**
 * This will allow users to configure destination and spec options for a Geotime Target in Pipeline Builder.
 */
export interface EddieGeotimeConfigurationInputShape {
  about: LocalizedTitleAndDescription;
}
/**
 * The Namespace and Destination stack that a Geotime Target is writing to.
 */
export interface EddieGeotimeDestination {
  destinationId: string;
  namespaceRid?: NamespaceRid | null | undefined;
}
export interface EddieGeotimeInputIdentifier {
  geotimeTargetId: EddieGeotimeTargetId;
  rid: EddiePipelineRid;
}
/**
 * ID of a Geotime Target in the packaged pipeline.
 */
export type EddieGeotimeTargetId = string;
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
 * Eddie parameter has become non-optional and is now required.
 */
export interface EddieParameterNoLongerOptionalImplication {
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
 * Eddie input parameter type has changed.
 */
export interface EddieParameterTypeChangedImplication {
  parameterTypeA: _api_eddie_transformations_api_InputParameterType;
  parameterTypeB: _api_eddie_transformations_api_InputParameterType;
}
/**
 * The Namespace and Destination stack that a Geotime Integration will be peered to.
 */
export interface EddiePeeredGeotimeDestination {
  destinationId: string;
  namespaceRid: NamespaceRid;
}
export interface EddiePipelineIdentifier {
  rid: EddiePipelineRid;
}
export interface EddiePipelineOutputSpecConfig {
  targetEnvironment?: TargetEnvironment | null | undefined;
}
export type EddiePipelineRid = string;

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

/**
 * Both remote and peered destinations cannot be configured for a geotime target.
 */
export interface EddieRemoteAndPeeredDestinationsConflictError {
  peeredDestinations: Array<EddiePeeredGeotimeDestination>;
  remoteDestinations: Array<EddieGeotimeDestination>;
}
export interface EddieReplayOptionShape {
  about: LocalizedTitleAndDescription;
  supportedReplayOptions: Array<EddieReplayOptionType>;
}
export type EddieReplayOptionType = "RESET_AND_REPLAY_FROM_OFFSET" | "RESET";

/**
 * The pipeline will be reset with the data received before the given offset time.
 */
export interface EddieResetAndReplayFromOffsetOption {
  offsetMillis: number;
}
/**
 * The pipeline will be reset with all the data
 */
export interface EddieResetOption {
}
export interface EddieTypeReference_explicit {
  type: "explicit";
  explicit: _api_eddie_transformations_api_ExplicitType;
}
export type EddieTypeReference = EddieTypeReference_explicit;

export type EddieVersionId = string;

/**
 * Port configuration for edge magritte source
 */
export interface EdgeMagrittePortConfig {
  tcpPorts: Array<PortConfig>;
  udpPorts: Array<PortConfig>;
}
/**
 * Untyped Magritte source config object
 */
export type EdgeMagritteSourceConfig = Record<string, any>;

/**
 * Untyped Magritte task config object
 */
export type EdgeMagritteTaskConfig = Record<string, any>;

/**
 * Magritte task type (also used to represent sync types)
 */
export type EdgeMagritteTaskType = string;
export interface EdgePipelineMagritteSourceInputIdentifier {
  eddieEdgePipelineRid?: EddieEdgePipelineRid | null | undefined;
  magritteSourceRid: MagritteSourceRid;
  magritteSourceType?: MagritteSourceType | null | undefined;
  magritteTaskType?: EdgeMagritteTaskType | null | undefined;
}
/**
 * This will allow users to configure magritte source configuration for the edge pipeline
 */
export interface EdgePipelineMagritteSourceInputShape {
  about: LocalizedTitleAndDescription;
  datasetRid?: EddieEdgePipelineInputDatasetRid | null | undefined;
  magritteSourceType: MagritteSourceType;
  magritteTaskType?: EdgeMagritteTaskType | null | undefined;
}
/**
 * A identifier used when merging resolved shapes to determine if a breaking change has occurred and the resolved
 * shape needs to be redefined.
 *
 * See more details on state of parameter shapes in https://palantir.quip.com/CPnMAn3dndba.
 */
export interface EdgePipelineMagritteSourceShapeMergeKey {
  datasetRid?: EddieEdgePipelineInputDatasetRid | null | undefined;
  magritteSourceRid?: MagritteSourceRid | null | undefined;
}
export interface EditBlockSetInstallationAllowance_allowed {
  type: "allowed";
  allowed: Void;
}

export interface EditBlockSetInstallationAllowance_disallowed {
  type: "disallowed";
  disallowed: EditBlockSetInstallationDisallowed;
}
export type EditBlockSetInstallationAllowance =
  | EditBlockSetInstallationAllowance_allowed
  | EditBlockSetInstallationAllowance_disallowed;

export interface EditBlockSetInstallationDisallowed {
  rationales: Array<BlockSetInstallationAccessDisallowedRationale>;
}
export interface EditBlockSetInstallationSettingsAllowance_allowed {
  type: "allowed";
  allowed: Void;
}

export interface EditBlockSetInstallationSettingsAllowance_disallowed {
  type: "disallowed";
  disallowed: EditBlockSetInstallationSettingsDisallowed;
}
export type EditBlockSetInstallationSettingsAllowance =
  | EditBlockSetInstallationSettingsAllowance_allowed
  | EditBlockSetInstallationSettingsAllowance_disallowed;

export interface EditBlockSetInstallationSettingsDisallowed {
  rationale: EditBlockSetInstallationsPermissionDeniedRationale;
}
export interface EditBlockSetInstallationsPermissionDeniedRationale {
  blockSetInstallationRids: Array<BlockSetInstallationRid>;
}
/**
 * The resolved edits support for the Object Type / ManyToMany Link is incompatible with what is required.
 */
export interface EditsSupportIncompatible {
  actual: OutputEditsSupport;
  required: InputEditsSupport;
}
export interface EditsViewCreateBlockRequest {
  rid: string;
}
export interface Empty {
}
export type EnrollmentCreationStateMachineId = string;
export type EnrollmentRid = string;

/**
 * Copy of com.palantir.intoto.dsse.Envelope.
 */
export interface Envelope {
  payload: string;
  signatures: Array<Signature>;
  type: string;
}
/**
 * Every reference in this set mapped to the same action type parameter at packaging time
 */
export type EquivalentInputActionTypeParameterShapeReferences = Array<
  BlockSetInputActionTypeParameterReference
>;
export interface EquivalentInputReferences_equivalentInputShapeReferences {
  type: "equivalentInputShapeReferences";
  equivalentInputShapeReferences: EquivalentInputShapeReferences;
}

export interface EquivalentInputReferences_equivalentInputActionTypeParameterShapeReferences {
  type: "equivalentInputActionTypeParameterShapeReferences";
  equivalentInputActionTypeParameterShapeReferences:
    EquivalentInputActionTypeParameterShapeReferences;
}
export type EquivalentInputReferences =
  | EquivalentInputReferences_equivalentInputShapeReferences
  | EquivalentInputReferences_equivalentInputActionTypeParameterShapeReferences;

/**
 * Every reference in this set mapped to the same resource at packaging time
 */
export type EquivalentInputShapeReferences = Array<
  BlockSetInputBlockShapeReference
>;
export interface ErrorArg {
  isSafeForLogging: boolean;
  name: string;
  value: string;
}
export interface ErrorGranularOutputSpecResult {
  blockType: BlockType;
  errors: OutputSpecErrors;
}
export type ErrorInstanceId = string;

/**
 * Attaches an associated error level with the validation error. Warn level errors will display to users, but
 * are non blocking. Blocking errors will disallow packaging.
 */
export type ErrorLevel = "WARN" | "BLOCKING";
export type ErrorSeverity = "BLOCKING" | "NON_BLOCKING";

/**
 * Creates an evaluation suite block based on the latest version of the evaluation suite
 */
export interface EvaluationSuiteCreateBlockRequest {
  evaluationSuiteRid: string;
}
export interface EvaluationSuiteIdentifier {
  rid: EvaluationSuiteRid;
}
export type EvaluationSuiteRid = string;
export interface EvaluationSuiteShape {
  about: LocalizedTitleAndDescription;
}
export interface ExistingAssociatedBlockSetInstallation {
  blockSetInstallationRid: BlockSetInstallationRid;
  blockSetVersionId: BlockSetVersionId;
  displayMetadata: BlockSetInstallationDisplayMetadata;
  mapping: Record<BlockSetBlockInstanceId, BlockReference>;
}
/**
 * The project or folder rid to install a Blockset.
 */
export interface ExistingFolder {
  folderRid: CompassFolderRid;
}
export interface ExistingFolderV2 {
  folderRid: CompassFolderRid;
}
export interface ExpectedDefaultNotEqualToActualDefault {
  actual: ResolvedBlockSetInputShape;
  expected: ResolvedBlockSetInputShape;
}
/**
 * We expected an interface type as the linked entity, but the resolved shape had an object type as the linked
 * entity.
 */
export interface ExpectedLinkedInterfaceButWasObject {
  actual: ObjectTypeId;
  expected: InterfaceTypeReference;
}
/**
 * We expected an object type as the linked entity, but the resolved shape had an interface type as the linked
 * entity.
 */
export interface ExpectedLinkedObjectButWasInterface {
  actual: InterfaceTypeRid;
  expected: ObjectTypeReference;
}
export interface ExpirationStrategy_fixedDate {
  type: "fixedDate";
  fixedDate: Void;
}

export interface ExpirationStrategy_relativeDate {
  type: "relativeDate";
  relativeDate: Void;
}
export type ExpirationStrategy =
  | ExpirationStrategy_fixedDate
  | ExpirationStrategy_relativeDate;

export interface ExplicitInputShapeRequest {
  metadata?: InputShapeMetadata | null | undefined;
  shape: InputShape;
}
/**
 * Same as `InputShapeResult`, but without a resolved counterpart since these \
 * are provided by the user as-is.
 */
export interface ExplicitInputShapeResult {
  blockShapeId: BlockShapeId;
  internalShapeId: InternalShapeId;
  metadata: InputShapeMetadata;
  shape: InputShape;
}
export interface ExplicitProvenance {
  outputSpec?: OutputSpec | null | undefined;
}
export interface ExportBlockRequest {
  fileType?: ExportBlockRequestFileType | null | undefined;
}
export interface ExportBlockRequestFileType_zip {
  type: "zip";
  zip: ExportBlockRequestFileTypeZip;
}
export type ExportBlockRequestFileType = ExportBlockRequestFileType_zip;

export interface ExportBlockRequestFileTypeZip {
  compressionLevel?: number | null | undefined;
}
export interface ExportBlockSetRequest {
}
/**
 * If the preset is compatible with exporting across stacks.
 *
 * If it is COMPATIBLE, then it should be possible to export the blockSet to another stack and to have the preset
 * resolution work as expected. This may typically happen if the preset does not refer to any stack-specific
 * resource identifiers, such as a `ApiNameResolver`.
 *
 * If it is INCOMPATIBLE, then the preset will fail to resolve if the blockSet is imported into another stack
 * or tenant. If the preset is MANDATORY, this will make the blockSet undeployable. If the preset is
 * SUGGESTED, installers will have the option to provide their own resolved shape instead.
 */
export type ExportCompatibility = "COMPATIBLE" | "INCOMPATIBLE";
export interface ExportMultipleBlockSetsRequest {
  blockSetVersions: Array<BlockSetVersionId>;
}
/**
 * Reasons why the user is not allowed to export from the Marketplace Store.
 */
export type ExportPermissionDeniedReason =
  | "MARKETPLACE_READ_LOCAL_MARKETPLACE_MISSING_OPERATION"
  | "MARKETPLACE_EXPORT_BLOCK_SET_MISSING_OPERATION"
  | "EXPORT_DISABLED_QUOTA";

/**
 * An input that was provided by an external recommendation from an output of another block set installation.
 */
export interface ExternallyRecommendedOutput {
  type: BlockSetInstallationOutputReference;
}
/**
 * An input that was provided by an external recommendation from an output of another block set installation.
 */
export interface ExternallyRecommendedOutputV2 {
  outputReference: BlockSetInstallationOutputReference;
  resolvedInput?: ResolvedBlockSetInputShape | null | undefined;
}
export interface ExternalRecommendationDisplayMetadata {
  installationVisibility: ExternalRecommendationInstallationVisibility;
}
export interface ExternalRecommendationInstallationVisibility_enabled {
  type: "enabled";
  enabled: Void;
}

export interface ExternalRecommendationInstallationVisibility_disabled {
  type: "disabled";
  disabled: Void;
}

export interface ExternalRecommendationInstallationVisibility_featured {
  type: "featured";
  featured: Void;
}
/**
 * Sets the visibility of a given upstream block set recommendation. Does not gate usage of the recommendation
 * during installations.
 */
export type ExternalRecommendationInstallationVisibility =
  | ExternalRecommendationInstallationVisibility_enabled
  | ExternalRecommendationInstallationVisibility_disabled
  | ExternalRecommendationInstallationVisibility_featured;

export interface ExternalRecommendationSource_owned {
  type: "owned";
  owned: Void;
}

export interface ExternalRecommendationSource_upstreamInstallationLocal {
  type: "upstreamInstallationLocal";
  upstreamInstallationLocal: LocalUpstreamInstallationRecommendationSource;
}

export interface ExternalRecommendationSource_upstreamInstallationRemote {
  type: "upstreamInstallationRemote";
  upstreamInstallationRemote: Void;
}
/**
 * External recommendation source of a recommendation between a block set and block set version.
 * Owned - 2 Local products within one store
 * upstreamInstallationLocal - Between an installation -> Owned Product generated locally on the stack
 * upstreamInstallationRemote - Between an installation -> Owned Product generated on another stack
 */
export type ExternalRecommendationSource =
  | ExternalRecommendationSource_owned
  | ExternalRecommendationSource_upstreamInstallationLocal
  | ExternalRecommendationSource_upstreamInstallationRemote;

export interface ExternalRecommendationToSelf {
  installation: BlockSetReference;
}
/**
 * An external recommendation was used for input, but input has
 * mandatory presets. This is disallowed.
 */
export interface ExternalRecommendationUsedForInputShapeWithMandatoryPresets {
}
/**
 * Backend generated recommendation from a block set -> block set version over a compatible version range
 */
export interface ExternalRecommendationV2 {
  displayMetadata?: ExternalRecommendationDisplayMetadata | null | undefined;
  mappings: Array<InputRecommendationV2>;
  source: ExternalRecommendationSource;
  targetBlockSet?: BlockSetId | null | undefined;
  targetBlockSetVersion: BlockSetVersionId;
  upstreamBlockSet: BlockSetId;
  upstreamMavenProductId?: MavenProductId | null | undefined;
  upstreamVersionCompatability: BlockSetVersionRange;
}
/**
 * An integrating service returned an unexpected error response.
 */
export interface ExternalServiceError {
  blockType: BlockType;
  error: _api_errors_MarketplaceSerializableError;
  errorInstanceId?: string | null | undefined;
  message: string;
}
/**
 * Some constraints are preventing the automation from making progress.
 */
export interface FailedConstraintsStatus {
  constraintFailures: ConstraintFailures;
}
export interface FailedInstallBlocksResponse {
  jobSubmissionFailure?: JobSubmissionFailure | null | undefined;
  reason: string;
}
export interface FailedToDeleteResourcesError {
  failedToDeleteResources: Record<BlockShapeId, ResolvedOutputShape>;
}
export interface FailedToSubmitJobResult {
  jobSubmissionFailure?: JobSubmissionFailure | null | undefined;
  reason: string;
}
/**
 * The original name of the file that was uploaded, including the file ending, e.g. "file.pdf".
 */
export type Filename = string;
export interface FilesDatasourceInputIdentifier {
  datasource?: DatasetLocator | null | undefined;
  datasourceLocator?: FilesDatasourceLocator | null | undefined;
  supportedTypes?: Array<FilesDatasourceInputType> | null | undefined;
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

export interface FilesDatasourceOutputIdentifier {
  buildRequirements?: DatasourceBuildRequirements | null | undefined;
  datasource?: DatasetLocator | null | undefined;
  datasourceLocator?: FilesDatasourceLocator | null | undefined;
}
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

export type FilesDatasourceReference = BlockInternalId;
export type FileSizeInBytes = number;

/**
 * Reference a file in an artifacts files layout.
 */
export interface FilesLocator {
  path: string;
}
export interface FinalizeBlockSetVersionRequest {
  semverOverride?: SemverVersion | null | undefined;
}
export interface FinalizeBlockSetVersionResponse {
  validationErrors: Array<BlockSetVersionValidationError>;
}
export interface FinalizeBlockSetVersionResponseV2 {
}
export interface FinalizedBlockSetVersionStatus {
}
export interface FinishedInstallPendingStatus {
  blockShapeBuildMetadata: Record<BlockShapeId, BlockShapeBuildMetadata>;
  buildsAndIndexingIds: Record<BlockShapeId, BuildsAndIndexingIds>;
}
export interface FlacFormat {
}
export interface FlinkProfileIdentifier {
  name: FlinkProfileName;
}
export type FlinkProfileName = string;
export interface FlinkProfileShape {
  about: LocalizedTitleAndDescription;
}
/**
 * A folder input was provided through an external recommendation. This is not allowed if the folder has an
 * `INSTALL_LOCATION` constraint.
 */
export interface FolderInputExternallyRecommended {
  blockSetReference: BlockSetReference;
  outputShapeId: OutputBlockSetShapeId;
}
/**
 * A folder that was passed as an input was not the installation folder. This is not allowed if the
 * folder has an `INSTALL_LOCATION` constraint.
 *
 * If `installationFolderRid` is empty and the input is optional, the input should be excluded from the request.
 *
 * If `installationFolderRid` is empty and the input is required, the installation needs to be done into an
 * existing folder instead of having Marketplace create the project as part of the installation.
 */
export interface FolderInputNotSetToInstallationFolder {
  inputFolderRid: CompassFolderRid;
  installationFolderRid?: CompassFolderRid | null | undefined;
  isOptional: boolean;
}
/**
 * The given folder inputs require installing into an existing folder, but the installation mode of the block
 * set version is set to a mode that only allows installing into a new project. To fix this, the installation
 * mode should be changed to "bootstrap".
 */
export interface FolderInputPreventsInstallingInNewProject {
  inputShapeIds: Array<InputBlockSetShapeId>;
}
/**
 * There was a folder input with constraints that only support mapping the input to the root folder for the
 * installation folder. In this case we only support installing into an existing folder.
 */
export interface FolderInputRequiresInstallingIntoExistingFolder {
}
export interface FoundryProductsDownloaderStore {
  apolloCrossStackManifest: ApolloCrossStackManifest;
  apolloSpaceId?: ApolloSpaceId | null | undefined;
  deprecateAllUnlistedProducts?: boolean | null | undefined;
  products: Array<MavenProductIdOrCoordinate>;
}
export interface FreeFormDocumentation_markdown {
  type: "markdown";
  markdown: MarkdownText;
}
export type FreeFormDocumentation = FreeFormDocumentation_markdown;

export interface FreeFormDocumentationSection {
  freeForm: FreeFormDocumentation;
  key: string;
  title: string;
}
/**
 * A list of Markdown documentation entries, each enriched with a section title and key. This enables opinionated
 * organization and rendering of the documentation.
 */
export interface FreeFormDocumentationSections {
  freeFormSections: Array<FreeFormDocumentationSection>;
}
export interface FromDefaultInput {
  resolvedDefault: ResolvedBlockSetInputShape;
}
export interface FromSourceResolvedPresetValue {
  resultForShape: ResolvedShapeResolutionResultUnion;
}
export interface FunctionApiName_ontologyBound {
  type: "ontologyBound";
  ontologyBound: OntologyBoundFunctionApiNameAndBinding;
}
export type FunctionApiName = FunctionApiName_ontologyBound;

export interface FunctionConfigurationIdentifier {
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
/**
 * A synthethic RID derived from the rid of the function this configuration applies to.
 */
export type FunctionConfigurationRid = string;
export interface FunctionConfigurationsCreateBlockRequest {
  functionRids: Array<FunctionRid>;
  version: string;
}
export interface FunctionConfigurationShape {
  about: LocalizedTitleAndDescription;
  function: FunctionReference;
}
export type FunctionContractApiName = string;
export interface FunctionContractApiNameIdentifier {
  apiName: FunctionContractApiName;
  version?: FunctionContractVersion | null | undefined;
}
export interface FunctionContractIdentifier_rid {
  type: "rid";
  rid: FunctionContractRidIdentifier;
}

export interface FunctionContractIdentifier_apiName {
  type: "apiName";
  apiName: FunctionContractApiNameIdentifier;
}
/**
 * Identifier for specifying how a contracts shape should be generated.
 */
export type FunctionContractIdentifier =
  | FunctionContractIdentifier_rid
  | FunctionContractIdentifier_apiName;

/**
 * The function input had a contract requirement that was not fulfilled by the given function.
 */
export interface FunctionContractNotImplemented {
  actualContracts: Array<FunctionContractRid>;
  requiredContract: FunctionContractRid;
}
export type FunctionContractReference = BlockInternalId;
export type FunctionContractRid = string;
export interface FunctionContractRidIdentifier {
  rid: FunctionContractRid;
  version?: FunctionContractVersion | null | undefined;
}
export interface FunctionContractShape {
  about: LocalizedTitleAndDescription;
  apiName: FunctionContractApiName;
  version: FunctionContractVersion;
}
export interface FunctionContractsIdentifier_all {
  type: "all";
  all: Void;
}

export interface FunctionContractsIdentifier_subset {
  type: "subset";
  subset: Array<FunctionContractIdentifier>;
}

export interface FunctionContractsIdentifier_none {
  type: "none";
  none: Void;
}
/**
 * Identifier for specifying how the `contracts` field should be populated on the functions shape.
 */
export type FunctionContractsIdentifier =
  | FunctionContractsIdentifier_all
  | FunctionContractsIdentifier_subset
  | FunctionContractsIdentifier_none;

/**
 * This version is enforced to be a semver string.
 */
export type FunctionContractVersion = string;
export type FunctionContractVersionReference = BlockInternalId;

/**
 * The Function DataType is referencing ActionTypeRid(s) as a parameter, which is not supported by the
 * marketplace integration.
 */
export interface FunctionCustomTypeDataTypeActionTypeReferencesNotSupported {
  actionTypeRids: Array<ActionTypeRid>;
  customTypeId: _api_functions_CustomTypeId;
  fieldName: _api_functions_CustomTypeFieldName;
}
/**
 * The DataType of the output for the specified Function uses a custom type but the custom type definition
 * was not found on the FunctionSpec retrieved from Functions Registry.
 */
export interface FunctionCustomTypeDataTypeCustomTypeNotFound {
  customTypeId: _api_functions_CustomTypeId;
  customTypeIdsFound: Array<_api_functions_CustomTypeId>;
  fieldName: _api_functions_CustomTypeFieldName;
  missingCustomTypeId: _api_functions_CustomTypeId;
}
/**
 * The Function DataType is referencing an InterfaceTypeRid for which the shape id could not be resolved.
 * This is typical if the referenced InterfaceType has not been included as an input/output in the block.
 */
export interface FunctionCustomTypeDataTypeInterfaceTypeUnresolvable {
  customTypeId: _api_functions_CustomTypeId;
  fieldName: _api_functions_CustomTypeFieldName;
  interfaceTypeRid: InterfaceTypeRid;
}
/**
 * The DataType of a custom type for the specified function uses an unknown Marking subtype.
 */
export interface FunctionCustomTypeDataTypeMarkingSubTypeUnknown {
  customTypeId: _api_functions_CustomTypeId;
  fieldName: _api_functions_CustomTypeFieldName;
  subType: string;
}
/**
 * The Function DataType is referencing an ObjectTypeId for which the shape id could not be resolved.
 * This is typical if the referenced ObjectType has not been included as an input/output in the block.
 */
export interface FunctionCustomTypeDataTypeObjectTypeUnresolvable {
  customTypeId: _api_functions_CustomTypeId;
  fieldName: _api_functions_CustomTypeFieldName;
  objectTypeId: ObjectTypeId;
}
/**
 * The DataType of a custom type for the specified function uses an unknown Marking subtype.
 */
export interface FunctionCustomTypeDataTypeUnknown {
  customTypeId: _api_functions_CustomTypeId;
  fieldName: _api_functions_CustomTypeFieldName;
  subType: string;
}
export interface FunctionDataTypeValueTypeUnresolvable {
  valueTypeRid: ValueTypeRid;
  valueTypeVersion?: ValueTypeVersion | null | undefined;
}
export interface FunctionDataTypeValueTypeUnresolvableV2 {
  valueTypeRid: ValueTypeRid;
  valueTypeVersionId?: ValueTypeVersionId | null | undefined;
}
/**
 * The DataType of the input for the specified Function is of an unknown type and maps to an input name not present on the function input shape.
 */
export interface FunctionExtraInputDataTypeUnknown {
  inputName: string;
  type: string;
}
export interface FunctionIdentifier_rid {
  type: "rid";
  rid: FunctionRidIdentifier;
}

export interface FunctionIdentifier_ridAndVersion {
  type: "ridAndVersion";
  ridAndVersion: FunctionRidAndVersionIdentifier;
}

export interface FunctionIdentifier_languageModelRid {
  type: "languageModelRid";
  languageModelRid: FunctionLanguageModelRidIdentifier;
}
export type FunctionIdentifier =
  | FunctionIdentifier_rid
  | FunctionIdentifier_ridAndVersion
  | FunctionIdentifier_languageModelRid;

/**
 * An existing input type of the function shape has become required.
 */
export interface FunctionInputChangedToRequiredImplication {
  inputName: FunctionInputName;
  inputTypeA: FunctionInputType;
  newlyRequiredInputTypeB: FunctionInputType;
}
/**
 * The Function DataType is referencing ActionTypeRid(s) as a parameter, which is not supported by the
 * marketplace integration.
 */
export interface FunctionInputDataTypeActionTypeReferencesUnsupported {
  actionTypeRids: Array<ActionTypeRid>;
  inputIndex: number;
}
/**
 * The Function DataType is referencing ActionTypeRid(s) as a parameter, which is not supported by the
 * marketplace integration.
 */
export interface FunctionInputDataTypeActionTypeReferencesUnsupportedV2 {
  actionTypeRids: Array<ActionTypeRid>;
  inputName: string;
}
/**
 * The DataType of the input for the function shape has changed.
 */
export interface FunctionInputDataTypeChangedImplication {
  inputName: FunctionInputName;
  inputTypeA: _api_functions_DataType;
  inputTypeB: _api_functions_DataType;
}
/**
 * The DataType of the input for the specified Function uses a custom type but the custom type definition
 * was not found on the FunctionSpec retrieved from Functions Registry.
 */
export interface FunctionInputDataTypeCustomTypeNotFound {
  customTypeId: _api_functions_CustomTypeId;
  customTypeIdsFound: Array<_api_functions_CustomTypeId>;
  inputIndex: number;
}
/**
 * The DataType of the input for the specified Function uses a custom type but the custom type definition
 * was not found on the FunctionSpec retrieved from Functions Registry.
 */
export interface FunctionInputDataTypeCustomTypeNotFoundV2 {
  customTypeId: _api_functions_CustomTypeId;
  customTypeIdsFound: Array<_api_functions_CustomTypeId>;
  inputName: string;
}
/**
 * The Function input DataType is referencing an InterfaceTypeRid for which the shape id could not be resolved.
 * This is typical if the referenced InterfaceType has not been included as an input/output in the block.
 */
export interface FunctionInputDataTypeInterfaceTypeRidUnresolvable {
  inputName: string;
  interfaceTypeRid: InterfaceTypeRid;
}
/**
 * The DataType of the input for the specified function uses an unknown Marking subtype.
 */
export interface FunctionInputDataTypeMarkingSubTypeUnknown {
  inputIndex: number;
  subType: string;
}
/**
 * The DataType of the input for the specified function uses an unknown Marking subtype.
 */
export interface FunctionInputDataTypeMarkingSubTypeUnknownV2 {
  inputName: string;
  subType: string;
}
/**
 * The DataType of the input for the specified Function does not match the expected type.
 */
export interface FunctionInputDataTypeMismatch {
  actual: _api_functions_DataType;
  expected: _api_functions_DataType;
  inputIndex: number;
}
/**
 * The DataType of the input for the specified Function does not match the expected type.
 */
export interface FunctionInputDataTypeMismatchV2 {
  actual: _api_functions_DataType;
  expected: _api_functions_DataType;
  inputName: string;
}
/**
 * The Function input DataType is referencing an ObjectTypeId for which the shape id could not be resolved.
 * This is typical if the referenced ObjectType has not been included as an input/output in the block.
 */
export interface FunctionInputDataTypeObjectTypeIdUnresolvable {
  inputIndex: number;
  objectTypeId: ObjectTypeId;
}
/**
 * The Function input DataType is referencing an ObjectTypeId for which the shape id could not be resolved.
 * This is typical if the referenced ObjectType has not been included as an input/output in the block.
 */
export interface FunctionInputDataTypeObjectTypeIdUnresolvableV2 {
  inputName: string;
  objectTypeId: ObjectTypeId;
}
/**
 * The DataType of the input for the specified Function is of an unknown type.
 */
export interface FunctionInputDataTypeUnknown {
  expected: _api_functions_DataType;
  inputIndex: number;
  type: string;
}
/**
 * The DataType of the input for the specified Function is of an unknown type.
 */
export interface FunctionInputDataTypeUnknownV2 {
  expected: _api_functions_DataType;
  inputName: string;
  type: string;
}
export type FunctionInputName = string;

/**
 * A function input name did not match the expected input name. Input names must match those in the shape.
 */
export interface FunctionInputNamesDiffer {
  actualInputName: FunctionInputName;
  expectedInputName: FunctionInputName;
  inputIndex: number;
}
/**
 * A function input that was referenced in the Function shape was not found on the actual Function.
 */
export interface FunctionInputNotFound {
  expected: FunctionInputType;
  inputIndex: number;
}
/**
 * A function input that was referenced in the Function shape was not found on the actual Function.
 */
export interface FunctionInputNotFoundV2 {
  expected: FunctionInputType;
  inputName: string;
}
/**
 * A function input which is expected to be optional as per the declared Function shape is marked as required on the actual Function.
 */
export interface FunctionInputNotOptional {
  inputIndex: number;
}
/**
 * A function input which is expected to be optional as per the declared Function shape is marked as required on the actual Function.
 */
export interface FunctionInputNotOptionalV2 {
  inputName: string;
}
export interface FunctionInputType {
  about: LocalizedTitleAndDescription;
  dataType: _api_functions_DataType;
  inputName?: FunctionInputName | null | undefined;
  required: boolean;
}
export interface FunctionInputTypeDisplayMetadata {
  about: LocalizedTitleAndDescription;
}
/**
 * Identifier for generating a shape for a function that wraps an LMS model. All contracts from the underlying
 * function will be included on the shape.
 */
export interface FunctionLanguageModelRidIdentifier {
  languageModelRid: LanguageModelRid;
}
export interface FunctionNotFound {
  functionRid: FunctionRid;
}
/**
 * The Function DataType is referencing ActionTypeRid(s) as a parameter, which is not supported by the
 * marketplace integration.
 */
export interface FunctionOutputDataTypeActionTypeReferencesUnsupported {
  actionTypeRids: Array<ActionTypeRid>;
}
/**
 * The DataType of the output for the specified Function uses a custom type but the custom type definition
 * was not found on the FunctionSpec retrieved from Functions Registry.
 */
export interface FunctionOutputDataTypeCustomTypeNotFound {
  customTypeId: _api_functions_CustomTypeId;
  customTypeIdsFound: Array<_api_functions_CustomTypeId>;
}
/**
 * The Function DataType is referencing an InterfaceTypeRid for which the shape id could not be resolved.
 * This is typical if the referenced InterfaceType has not been included as an input/output in the block.
 */
export interface FunctionOutputDataTypeInterfaceTypeRidUnresolvable {
  objectTypeId: InterfaceTypeRid;
}
/**
 * The DataType of the output for the specified function uses an unknown Marking subtype.
 */
export interface FunctionOutputDataTypeMarkingSubTypeUnknown {
  subType: string;
}
/**
 * The DataType of the output for the specified Function does not match the expected type.
 */
export interface FunctionOutputDataTypeMismatch {
  actual: _api_functions_DataType;
  expected: _api_functions_DataType;
}
/**
 * The Function DataType is referencing an ObjectTypeId for which the shape id could not be resolved.
 * This is typical if the referenced ObjectType has not been included as an input/output in the block.
 */
export interface FunctionOutputDataTypeObjectTypeIdUnresolvable {
  objectTypeId: ObjectTypeId;
}
/**
 * The DataType of the output for the specified Function is of an unknown type.
 */
export interface FunctionOutputDataTypeUnknown {
  expected: _api_functions_DataType;
  type: string;
}
export interface FunctionOutputType_singleOutputType {
  type: "singleOutputType";
  singleOutputType: SingleOutputType;
}
export type FunctionOutputType = FunctionOutputType_singleOutputType;

/**
 * The DataType of the output for the function shape has changed.
 */
export interface FunctionOutputTypeChangedImplication {
  outputTypeA: _api_functions_DataType;
  outputTypeB: _api_functions_DataType;
}
export interface FunctionOutputTypeDisplayMetadata_singleOutputType {
  type: "singleOutputType";
  singleOutputType: SingleOutputTypeDisplayMetadata;
}
export type FunctionOutputTypeDisplayMetadata =
  FunctionOutputTypeDisplayMetadata_singleOutputType;

/**
 * The OutputType for the specified Function is unknown.
 */
export interface FunctionOutputTypeUnknown {
  expected: FunctionOutputType;
  type: string;
}
export type FunctionReference = BlockInternalId;

/**
 * The function shape requires a new non-optional input.
 */
export interface FunctionRequiresAdditionalInputImplication {
  additionalRequiredInput: FunctionInputType;
}
export type FunctionRid = string;

/**
 * Identifier for generating a shape for a function at a semantic version range.
 */
export interface FunctionRidAndVersionIdentifier {
  contracts?: FunctionContractsIdentifier | null | undefined;
  rid: FunctionRid;
  version: FunctionVersionRange;
}
/**
 * Identifier for generating a shape for the latest version of a function.
 */
export interface FunctionRidIdentifier {
  contracts?: FunctionContractsIdentifier | null | undefined;
  rid: FunctionRid;
}
/**
 * Not yet implemented by the corresponding service
 */
export interface FunctionsCreateBlockRequest {
  functionRids: Array<string>;
  version: string;
}
export interface FunctionShape {
  about: LocalizedTitleAndDescription;
  contracts: Array<FunctionContractReference>;
  customTypes: Record<_api_functions_CustomTypeId, _api_functions_CustomType>;
  inputs: Array<FunctionInputType>;
  output: FunctionOutputType;
}
/**
 * Encountered an error while trying to convert an unresolved function shape to a function signature.
 */
export interface FunctionShapeConversionError {
  reasons: Array<FunctionShapeConversionFailedReason>;
}
export interface FunctionShapeConversionFailedReason_inputDataTypeConversion {
  type: "inputDataTypeConversion";
  inputDataTypeConversion: FunctionShapeInputDataTypeConversionFailed;
}

export interface FunctionShapeConversionFailedReason_outputDataTypeConversion {
  type: "outputDataTypeConversion";
  outputDataTypeConversion: FunctionShapeOutputDataTypeConversionFailed;
}

export interface FunctionShapeConversionFailedReason_customTypeDataTypeConversion {
  type: "customTypeDataTypeConversion";
  customTypeDataTypeConversion: FunctionShapeCustomTypeDataTypeConversionFailed;
}
export type FunctionShapeConversionFailedReason =
  | FunctionShapeConversionFailedReason_inputDataTypeConversion
  | FunctionShapeConversionFailedReason_outputDataTypeConversion
  | FunctionShapeConversionFailedReason_customTypeDataTypeConversion;

/**
 * Encountered an error while trying to convert the data type on an unresolved function shape custom type field.
 */
export interface FunctionShapeCustomTypeDataTypeConversionFailed {
  customTypeId: _api_functions_CustomTypeId;
  error: FunctionShapeDataTypeConversionError;
  fieldName: _api_functions_CustomTypeFieldName;
}
export interface FunctionShapeDataTypeConversionError_unknownBucketKeyType {
  type: "unknownBucketKeyType";
  unknownBucketKeyType: FunctionShapeUnknownBucketKeyType;
}

export interface FunctionShapeDataTypeConversionError_unknownBucketValueType {
  type: "unknownBucketValueType";
  unknownBucketValueType: FunctionShapeUnknownBucketValueType;
}

export interface FunctionShapeDataTypeConversionError_unknownDataType {
  type: "unknownDataType";
  unknownDataType: FunctionShapeUnknownDataType;
}

export interface FunctionShapeDataTypeConversionError_unknownGeoShapeSubType {
  type: "unknownGeoShapeSubType";
  unknownGeoShapeSubType: FunctionShapeUnknownGeoShapeSubType;
}

export interface FunctionShapeDataTypeConversionError_unknownLogicalTypeReferenceType {
  type: "unknownLogicalTypeReferenceType";
  unknownLogicalTypeReferenceType: FunctionShapeUnknownLogicalTypeReference;
}

export interface FunctionShapeDataTypeConversionError_unknownMarkingSubType {
  type: "unknownMarkingSubType";
  unknownMarkingSubType: FunctionShapeUnknownMarkingSubType;
}

export interface FunctionShapeDataTypeConversionError_unknownRangeType {
  type: "unknownRangeType";
  unknownRangeType: FunctionShapeUnknownRangeType;
}

export interface FunctionShapeDataTypeConversionError_unknownTimeSeriesValueType {
  type: "unknownTimeSeriesValueType";
  unknownTimeSeriesValueType: FunctionShapeUnknownTimeSeriesValueType;
}

export interface FunctionShapeDataTypeConversionError_unknownVectorElementType {
  type: "unknownVectorElementType";
  unknownVectorElementType: FunctionShapeUnknownVectorElementType;
}

export interface FunctionShapeDataTypeConversionError_unresolvableCrossShapeReference {
  type: "unresolvableCrossShapeReference";
  unresolvableCrossShapeReference: FunctionShapeUnresolvableCrossShapeReference;
}

export interface FunctionShapeDataTypeConversionError_unsupportedDataType {
  type: "unsupportedDataType";
  unsupportedDataType: FunctionShapeUnsupportedDataType;
}
/**
 * Encountered an error while trying to convert data types on an unresolved function shape.
 */
export type FunctionShapeDataTypeConversionError =
  | FunctionShapeDataTypeConversionError_unknownBucketKeyType
  | FunctionShapeDataTypeConversionError_unknownBucketValueType
  | FunctionShapeDataTypeConversionError_unknownDataType
  | FunctionShapeDataTypeConversionError_unknownGeoShapeSubType
  | FunctionShapeDataTypeConversionError_unknownLogicalTypeReferenceType
  | FunctionShapeDataTypeConversionError_unknownMarkingSubType
  | FunctionShapeDataTypeConversionError_unknownRangeType
  | FunctionShapeDataTypeConversionError_unknownTimeSeriesValueType
  | FunctionShapeDataTypeConversionError_unknownVectorElementType
  | FunctionShapeDataTypeConversionError_unresolvableCrossShapeReference
  | FunctionShapeDataTypeConversionError_unsupportedDataType;

export interface FunctionShapeDisplayMetadata {
  about: LocalizedTitleAndDescription;
  inputs: Array<FunctionInputTypeDisplayMetadata>;
  output: FunctionOutputTypeDisplayMetadata;
}
/**
 * Encountered an error while trying to convert the data type on an unresolved function shape input.
 */
export interface FunctionShapeInputDataTypeConversionFailed {
  error: FunctionShapeDataTypeConversionError;
  inputName: FunctionInputName;
}
/**
 * Encountered an error while trying to convert the data type on an unresolved function shape output.
 */
export interface FunctionShapeOutputDataTypeConversionFailed {
  error: FunctionShapeDataTypeConversionError;
}
/**
 * Encountered an error because the signature of the resolved input function is incompatible with that of the
 * unresolved function shape.
 */
export interface FunctionShapeSignatureCompatibilityError {
  reasons: Array<FunctionShapeSignatureIncompatibleReason>;
}
/**
 * The data type of an input on the unresolved shape is not compatible with that of the resolved function.
 */
export interface FunctionShapeSignatureIncompatibleInputTypeChange {
  inputName: FunctionInputName;
}
/**
 * The data type of the output on the unresolved shape is not compatible with that of the resolved function.
 */
export interface FunctionShapeSignatureIncompatibleOutputTypeChange {
}
export interface FunctionShapeSignatureIncompatibleReason_missingInput {
  type: "missingInput";
  missingInput: FunctionShapeSignatureMissingInput;
}

export interface FunctionShapeSignatureIncompatibleReason_unknownRequiredInput {
  type: "unknownRequiredInput";
  unknownRequiredInput: FunctionShapeSignatureUnknownRequiredInput;
}

export interface FunctionShapeSignatureIncompatibleReason_incompatibleInputTypeChange {
  type: "incompatibleInputTypeChange";
  incompatibleInputTypeChange:
    FunctionShapeSignatureIncompatibleInputTypeChange;
}

export interface FunctionShapeSignatureIncompatibleReason_incompatibleOutputTypeChange {
  type: "incompatibleOutputTypeChange";
  incompatibleOutputTypeChange:
    FunctionShapeSignatureIncompatibleOutputTypeChange;
}
export type FunctionShapeSignatureIncompatibleReason =
  | FunctionShapeSignatureIncompatibleReason_missingInput
  | FunctionShapeSignatureIncompatibleReason_unknownRequiredInput
  | FunctionShapeSignatureIncompatibleReason_incompatibleInputTypeChange
  | FunctionShapeSignatureIncompatibleReason_incompatibleOutputTypeChange;

/**
 * An input on the unresolved shape is not present on the resolved function.
 */
export interface FunctionShapeSignatureMissingInput {
  inputName: FunctionInputName;
}
/**
 * A required input on the resolved function is not present on the unresolved shape.
 */
export interface FunctionShapeSignatureUnknownRequiredInput {
  inputName: FunctionInputName;
}
/**
 * Encountered a bucket key type variant that is unknown.
 */
export interface FunctionShapeUnknownBucketKeyType {
  unknownType: string;
}
/**
 * Encountered a bucket value type variant that is unknown.
 */
export interface FunctionShapeUnknownBucketValueType {
  unknownType: string;
}
/**
 * Encountered a data type variant on a shape that is unknown.
 */
export interface FunctionShapeUnknownDataType {
  unknownType: string;
}
/**
 * Encountered a geo-shape sub-type variant that is unknown.
 */
export interface FunctionShapeUnknownGeoShapeSubType {
  unknownType: string;
}
/**
 * Encountered a logical type reference variant on a shape that is unknown.
 */
export interface FunctionShapeUnknownLogicalTypeReference {
  unknownType: string;
}
/**
 * Encountered a marking sub-type variant that is unknown.
 */
export interface FunctionShapeUnknownMarkingSubType {
  unknownType: string;
}
/**
 * Encountered a range type variant that is unknown.
 */
export interface FunctionShapeUnknownRangeType {
  unknownType: string;
}
/**
 * Encountered a time series value type variant that is unknown.
 */
export interface FunctionShapeUnknownTimeSeriesValueType {
  unknownType: string;
}
/**
 * Encountered a vector element type variant that is unknown.
 */
export interface FunctionShapeUnknownVectorElementType {
  unknownType: string;
}
/**
 * Encountered a cross-shape reference ID that was not resolvable. This means the user needs to configure an
 * upstream shape first (e.g., an object type input shape).
 */
export interface FunctionShapeUnresolvableCrossShapeReference {
  referenceId: BlockShapeId;
}
/**
 * Encountered a data type variant on a shape that is unsupported.
 */
export interface FunctionShapeUnsupportedDataType {
  unsupportedType: string;
}
/**
 * This version is enforced to be a semver string
 */
export type FunctionVersion = string;

/**
 * An NPM-compatible semantic version range: https://github.com/npm/node-semver?tab=readme-ov-file#ranges
 * See SemanticVersionRange in function-registry for more specific documentation.
 */
export type FunctionVersionRange = string;

/**
 * Fusion Entity Identifier for generating fusion document shapes
 */
export interface FusionDocumentIdentifier {
  rid: string;
}
export interface FusionDocumentShape {
  about: LocalizedTitleAndDescription;
}
export interface GenerateCompassLocationInputShapesFailure {
  errors: Array<GenerateCompassShapesError>;
}
export interface GenerateCompassLocationInputShapesRequest {
  marketplaceRid: MarketplaceRid;
  previousResolvedInputs: Record<BlockShapeId, ResolvedInputShape>;
  resolvedOutputShapes: Record<BlockShapeId, ResolvedOutputShape>;
}
export interface GenerateCompassLocationInputShapesResponse {
  locationInputMetadata: Record<BlockShapeId, InputShapeMetadata>;
  locationInputs: Record<BlockShapeId, InputShape>;
  outputToLocationInput: Record<BlockShapeId, InstallLocationBlockShapeId>;
  resolvedLocationInputs: Record<BlockShapeId, ResolvedInputShape>;
}
export interface GenerateCompassLocationInputShapesResponseV2_success {
  type: "success";
  success: GenerateCompassLocationInputShapesResponse;
}

export interface GenerateCompassLocationInputShapesResponseV2_failure {
  type: "failure";
  failure: GenerateCompassLocationInputShapesFailure;
}
export type GenerateCompassLocationInputShapesResponseV2 =
  | GenerateCompassLocationInputShapesResponseV2_success
  | GenerateCompassLocationInputShapesResponseV2_failure;

export interface GenerateCompassShapesError {
  error: _api_errors_MarketplaceSerializableError;
  shapeIds: Array<BlockShapeId>;
}
export interface GenerateInputGroupRequest {
  displayMetadata: InputGroupDisplayMetadata;
  inputs: Array<InternalShapeId>;
}
export interface GenerateInputShapeRequest {
  metadata?: InputShapeMetadata | null | undefined;
  spec: InputEntityIdentifier;
}
export interface GenerateOutputShapeRequest {
  spec: OutputEntityIdentifier;
}
export interface GenerateShapesError_actionTypeNotFound {
  type: "actionTypeNotFound";
  actionTypeNotFound: ActionTypeNotFound;
}

export interface GenerateShapesError_actionTypeParameterNotFound {
  type: "actionTypeParameterNotFound";
  actionTypeParameterNotFound: ActionTypeParameterNotFound;
}

export interface GenerateShapesError_functionNotFound {
  type: "functionNotFound";
  functionNotFound: FunctionNotFound;
}

export interface GenerateShapesError_inputGroupWithUnknownReference {
  type: "inputGroupWithUnknownReference";
  inputGroupWithUnknownReference: InputGroupWithUnknownReference;
}

export interface GenerateShapesError_linkTypeNotFound {
  type: "linkTypeNotFound";
  linkTypeNotFound: LinkTypeNotFound;
}

export interface GenerateShapesError_objectTypeNotFound {
  type: "objectTypeNotFound";
  objectTypeNotFound: ObjectTypeNotFound;
}

export interface GenerateShapesError_propertyTypeNotFound {
  type: "propertyTypeNotFound";
  propertyTypeNotFound: PropertyTypeNotFound;
}

export interface GenerateShapesError_sharedPropertyTypeNotFound {
  type: "sharedPropertyTypeNotFound";
  sharedPropertyTypeNotFound: SharedPropertyTypeNotFound;
}

export interface GenerateShapesError_ontologyDatasourceNotFound {
  type: "ontologyDatasourceNotFound";
  ontologyDatasourceNotFound: OntologyDatasourceNotFound;
}

export interface GenerateShapesError_ontologyInterfaceTypeNotFound {
  type: "ontologyInterfaceTypeNotFound";
  ontologyInterfaceTypeNotFound: OntologyInterfaceTypeNotFound;
}

export interface GenerateShapesError_interfaceLinkTypeNotFound {
  type: "interfaceLinkTypeNotFound";
  interfaceLinkTypeNotFound: InterfaceLinkTypeNotFound;
}

export interface GenerateShapesError_interfacePropertyTypeNotFound {
  type: "interfacePropertyTypeNotFound";
  interfacePropertyTypeNotFound: InterfacePropertyTypeNotFound;
}

export interface GenerateShapesError_objectInstanceNotFound {
  type: "objectInstanceNotFound";
  objectInstanceNotFound: ObjectInstanceNotFound;
}

export interface GenerateShapesError_serializable {
  type: "serializable";
  serializable: _api_errors_MarketplaceSerializableError;
}

export interface GenerateShapesError_unknownError {
  type: "unknownError";
  unknownError: Void;
}
export type GenerateShapesError =
  | GenerateShapesError_actionTypeNotFound
  | GenerateShapesError_actionTypeParameterNotFound
  | GenerateShapesError_functionNotFound
  | GenerateShapesError_inputGroupWithUnknownReference
  | GenerateShapesError_linkTypeNotFound
  | GenerateShapesError_objectTypeNotFound
  | GenerateShapesError_propertyTypeNotFound
  | GenerateShapesError_sharedPropertyTypeNotFound
  | GenerateShapesError_ontologyDatasourceNotFound
  | GenerateShapesError_ontologyInterfaceTypeNotFound
  | GenerateShapesError_interfaceLinkTypeNotFound
  | GenerateShapesError_interfacePropertyTypeNotFound
  | GenerateShapesError_objectInstanceNotFound
  | GenerateShapesError_serializable
  | GenerateShapesError_unknownError;

export interface GenerateShapesErrorV2 {
  error: GenerateShapesError;
  internalShapeId: InternalShapeId;
}
export interface GenerateShapesRequest {
  blockId: BlockId;
  blockType?: BlockType | null | undefined;
  explicitInputs: Record<InternalShapeId, ExplicitInputShapeRequest>;
  inputGroups: Record<InternalShapeId, GenerateInputGroupRequest>;
  inputs: Record<InternalShapeId, GenerateInputShapeRequest>;
  lastVersionId?: BlockVersionId | null | undefined;
  outputs: Record<InternalShapeId, GenerateOutputShapeRequest>;
}
export interface GenerateShapesResponse_success {
  type: "success";
  success: GenerateShapesResponseSuccess;
}

export interface GenerateShapesResponse_failure {
  type: "failure";
  failure: GenerateShapesResponseFailure;
}
export type GenerateShapesResponse =
  | GenerateShapesResponse_success
  | GenerateShapesResponse_failure;

export interface GenerateShapesResponseFailure {
  errors: Array<GenerateShapesError>;
  errorsV2: Array<GenerateShapesErrorV2>;
}
export interface GenerateShapesResponseSuccess {
  additionalInputs: Record<BlockShapeId, AdditionalInputShapeResult>;
  additionalOutputs: Record<BlockShapeId, AdditionalOutputShapeResult>;
  explicitInputs: Record<InternalShapeId, ExplicitInputShapeResult>;
  inputGroups: Record<InternalShapeId, InputGroupResult>;
  inputs: Record<InternalShapeId, InputShapeResult>;
  internalShapeIdToBlockShapeId: Record<InternalShapeId, BlockShapeId>;
  internalShapeIdToInputGroupId: Record<InternalShapeId, InputGroupId>;
  outputs: Record<InternalShapeId, OutputShapeResult>;
  outputToLocationInput: Record<BlockShapeId, InternalShapeId>;
}
export interface GenerateShapesWithoutBlockRequest {
  inputGroups: Record<InternalShapeId, GenerateInputGroupRequest>;
  inputs: Record<InternalShapeId, GenerateInputShapeRequest>;
  outputs: Record<InternalShapeId, GenerateOutputShapeRequest>;
  previousVersionInputGroups: Record<InternalShapeId, InputGroupId>;
  previousVersionInputs: Record<BlockShapeId, InputShape>;
  previousVersionResolvedInputs: Record<BlockShapeId, ResolvedInputShape>;
  previousVersionResolvedOutputs: Record<BlockShapeId, ResolvedOutputShape>;
}
/**
 * DEPRECATED | Use TypedBlockInstallServiceValidationError instead.
 * This is an untyped error item, which is used by integrating services to surface information to users.
 */
export interface GenericBlockInstallServiceValidationError {
  args: Array<ErrorArg>;
  errorMessage: string;
  traceId?: string | null | undefined;
  type: ErrorSeverity;
}
/**
 * A generic error type that can be used to return specific error information to the user.
 */
export interface GenericCreateBlockVersionError {
  error: any;
  fallbackMessage: string;
  safeMessageForLogging?: string | null | undefined;
}
/**
 * A generic error type that can be used to return specific error information to the user.
 */
export interface GenericCreateBlockVersionErrorV2 {
  errorLabelForLogging: string;
  fallbackMessage: string;
  integrationErrorUnionObject: any;
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
 * DEPRECATED | Use TypedBlockInstallServiceValidationError instead.
 * This is a weakly typed error item, which is used by integrating services to surface diffs to users. The
 * frontend will perform a diff operation between the two fields, and display the JSON diff between the
 * `actualValue` and `expectedValue`.
 */
export interface GenericDiffBlockInstallServiceValidationError {
  actualValue: any;
  args: Array<ErrorArg>;
  errorMessage: string;
  expectedValue: any;
  traceId?: string | null | undefined;
  type: ErrorSeverity;
}
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
export interface GetBlockSetResponse {
  activeRecalls: Record<RecallId, RecallVersionsAnnouncement>;
  blockSet: BlockSet;
  releaseMetadata: BlockSetVersionReleaseMetadata;
}
export interface GetBlockSetShapesResponse {
  inputGroups: BlockSetInputGroups;
  inputShapes: BlockSetInputShapes;
  outputShapes: BlockSetOutputShapes;
  shapeDependencies: Array<BlockSetShapeDependencies>;
}
export interface GetBlockSetVersionChangelogResponse {
  changelog?: Changelog | null | undefined;
}
export interface GetBlockSetVersionDocumentationResponse {
  attachments: Array<AttachmentMetadata>;
  freeForm?: FreeFormDocumentation | null | undefined;
  freeFormSections?: FreeFormDocumentationSections | null | undefined;
  links?: Links | null | undefined;
  localizedFreeFormSections?:
    | LocalizedFreeFormDocumentationSections
    | null
    | undefined;
  thumbnail?: AttachmentMetadata | null | undefined;
}
/**
 * Specs declared in the latest `UpdatePendingBlockSetVersionSpecsRequest` that is currently processing or being
 * processed. As `updatePendingBlockSetVersionSpecs` is asynchronous, this may not be the latest specs that
 * were layed down.
 */
export interface GetBlockSetVersionSpecsResponse {
  discoverySpecs: Array<DiscoverySpec>;
  outputSpecs: Array<OutputSpec>;
  settings?: SpecsSettings | null | undefined;
}
export interface GetBlockVersionChangelogResponse {
  changelog: Changelog;
}
export interface GetBlockVersionResponse {
  block: Block;
  blockId: BlockId;
  blockVersion: BlockVersion;
  blockVersionId: BlockVersionId;
}
export interface GetDownstreamRecommendationsResponse {
  recommendations: Array<ExternalRecommendationV2>;
}
export interface GetGranularBlockSetStatisticsResponse {
  statistics: GranularBlockSetStatistics;
}
export interface GetGranularBlockSetStatisticsV3Response {
  statistics: GranularBlockSetStatisticsV3;
}
export interface GetInstallableBlockSetVersionResponse {
  about: LocalizedTitleAndDescription;
  additionalRecommendationVariants: Record<
    BlockSetRecommendationId,
    BlockSetRecommendationVariant
  >;
  blocks: Record<BlockSetBlockInstanceId, SingleVersionBlockReference>;
  blockSetInputGroups: Record<InputGroupId, BlockSetInputGroup>;
  blockSetShapes: Record<BlockSetShapeId, BlockSetShape>;
  changelog?: Changelog | null | undefined;
  creationTimestamp: CreationTimestamp;
  defaultInstallationSettings?: DefaultInstallationSettings | null | undefined;
  documentation?: BlockSetDocumentation | null | undefined;
  documentationRepositoryRid: ArtifactsRepositoryRid;
  id: BlockSetId;
  importedAt?: ImportTimestamp | null | undefined;
  installHints?: BlockSetInstallationHints | null | undefined;
  lastKnownVersionBeforeBreak?: BlockSetVersion | null | undefined;
  mappingInfo?: BlockSetShapeMappingInfo | null | undefined;
  marketplaceMetadataVersion?: MarketplaceMetadataVersion | null | undefined;
  mavenCoordinateDependencies: Array<MavenCoordinateDependency>;
  mavenProductId?: MavenProductId | null | undefined;
  releaseMetadata: BlockSetVersionReleaseMetadata;
  tags: Array<BlockSetTag>;
  tagsV2: BlockSetCategorizedTags;
  typedTags: Array<TagRid>;
  version: BlockSetVersion;
  versionId: BlockSetVersionId;
}
export interface GetInstallableBlockSetVersionResponseV2 {
  documentation: InstallableBlockSetVersionDocumentation;
  metadata: InstallableBlockSetVersionMetadata;
  shapes: InstallableBlockSetVersionShapes;
}
export interface GetInstallableBlockVersionResponse {
  blockDataRepositoryRid: ArtifactsRepositoryRid;
  changelog?: Changelog | null | undefined;
  creationTimestamp: CreationTimestamp;
  id: BlockId;
  internal: BlockInternal;
  version: BlockVersion;
  versionId: BlockVersionId;
}
export interface GetInstallAutomationSettingsResponse {
  settings: InstallAutomationSettings;
}
export interface GetInstallAutomationStatusResponse {
  status: AutomationStatus;
}
export interface GetKeysResponse {
  keys: Array<OacSigningKeyEntry>;
}
export interface GetLatestBlockVersionResponse {
  block: Block;
  blockId: BlockId;
  blockVersion: BlockVersion;
  blockVersionId: BlockVersionId;
}
export interface GetManagedStoresResponse {
  managedStores: Record<MarketplaceRid, ManagedStoreResponseEntry>;
}
export interface GetManagedStoresSettingsForOrgResponse {
  managedStores: Record<MarketplaceRid, ManagedStoreSettingsResponseEntry>;
}
export interface GetMarketplaceMavenGroupResponse {
  mavenGroup?: MavenGroup | null | undefined;
}
export interface GetMarketplaceRidForMavenGroupRequest {
  mavenGroup: MavenGroup;
  namespaceRid: NamespaceRid;
}
export interface GetMarketplaceRidForMavenGroupResponse {
  marketplaceRid?: MarketplaceRid | null | undefined;
}
export interface GetOwnedBlockVersionResponse {
  block: Block;
  blockDataArtifactsRepositoryRid: ArtifactsRepositoryRid;
  blockId: BlockId;
  blockVersion: BlockVersion;
  blockVersionId: BlockVersionId;
  packagingRequest?: BlockSpecificCreateRequest | null | undefined;
  resolvedInputs: Record<BlockShapeId, ResolvedInputShape>;
  resolvedOutputs: Record<BlockShapeId, ResolvedOutputShape>;
}
export interface GetPendingBlockSetShapesResponse {
  inputGroups: BlockSetInputGroups;
  inputShapes: PendingBlockSetInputShapes;
  outputShapes: PendingBlockSetOutputShapes;
  shapeDependencies: Array<BlockSetShapeDependencies>;
}
export interface GetPendingBlockSetVersionBlocksResponse {
  blocks: Record<BlockSetBlockInstanceId, SingleVersionBlockReference>;
}
export interface GetPendingBlockSetVersionMetadataResponse {
  metadata: PendingBlockSetVersionMetadata;
}
export interface GetPendingBlockVersionResponse {
  block: Block;
  blockId: BlockId;
  blockVersion: BlockVersion;
  blockVersionId: BlockVersionId;
  packagingRequest?: BlockSpecificCreateRequest | null | undefined;
  resolvedInputs: Record<BlockShapeId, ResolvedInputShape>;
  resolvedOutputs: Record<BlockShapeId, ResolvedOutputShape>;
}
export interface GetPendingRecommendationsResponse {
  recommendationStatus: PendingRecommendationStatus;
  updateId?: UpdatePendingBlockSetVersionSpecsRequestId | null | undefined;
}
export interface GetProductVersionMetadataResponse {
  metadata: ProductVersionMetadata;
}
/**
 * The list of active recall announcements that have been issued for the block set ordered by creation time,
 * newest first. Cancelled recall announcements are not included in this list.
 */
export interface GetRecallsForBlockSetResponse {
  activeRecalls: Array<RecallVersionsAnnouncement>;
}
export interface GetRecommendationsResponse {
  recommendations: Array<ExternalRecommendationV2>;
}
export interface GetRecommendationsResponsePending {
}
export interface GetRecommendationsResponseSuccess {
  recommendations: Array<ExternalRecommendationV2>;
}
export interface GetRecommendationsResponseV2_pending {
  type: "pending";
  pending: GetRecommendationsResponsePending;
}

export interface GetRecommendationsResponseV2_success {
  type: "success";
  success: GetRecommendationsResponseSuccess;
}
/**
 * There is a small delay between block set versions finalizing and the external recommendations finalizing.
 * During this delay, the recommendations will be `GetRecommendationsResponsePending`. Once finalized and the
 * status has changed to `GetRecommendationsResponseSuccess`, it will never go back to
 * `GetRecommendationsResponsePending`.
 */
export type GetRecommendationsResponseV2 =
  | GetRecommendationsResponseV2_pending
  | GetRecommendationsResponseV2_success;

export interface GetSigningKeyResponse {
  publicKey: SigningPublicKey;
  publicKeyId: SigningKeyId;
}
export interface GetUserUploadPermissionQuotaResponse {
  isUploadFromMarketplaceEnabled: boolean;
}
/**
 * The sum of the input shapes of all blocks in the block set.
 */
export interface GranularBlockInputShapeSizeLimitCount {
  inputShapeLimit: number;
  inputShapesByType: Record<InputShapeType, number>;
  numberOfInputShapes: number;
  thresholdPercent: number;
}
/**
 * The sum of the input shapes of all blocks in the block set.
 */
export interface GranularBlockInputShapeSizeLimitCountV3 {
  inputShapesByType: Record<InputShapeType, number>;
  numberOfInputShapes: number;
}
/**
 * The number of input shapes that need to be provided at installation time for the block set.
 */
export interface GranularBlockSetInputShapeSizeLimitCountV3 {
  blockSetInputShapesByType: Record<InputShapeType, number>;
  numberOfBlockSetInputShapes: number;
}
export interface GranularBlockSetLimits {
  blockSetInputShapes?: number | null | undefined;
  blockSetOutputShapes?: number | null | undefined;
  blockSetTotalShapes?: number | null | undefined;
  internalBlockInputShapes?: number | null | undefined;
}
export interface GranularBlockSetOutputShapeSizeLimitCount {
  numberOfOutputShapes: number;
  outputShapeLimit: number;
  outputShapesByType: Record<OutputShapeType, number>;
  thresholdPercent: number;
}
export interface GranularBlockSetOutputShapeSizeLimitCountV3 {
  numberOfOutputShapes: number;
  outputShapesByType: Record<OutputShapeType, number>;
}
export interface GranularBlockSetStatistics {
  block?: GranularBlockSizeLimitCount | null | undefined;
  inputShape: GranularBlockInputShapeSizeLimitCount;
  maxThresholdPercent: number;
  outputShape: GranularBlockSetOutputShapeSizeLimitCount;
}
export interface GranularBlockSetStatisticsV3 {
  blockInputShapes?: GranularBlockInputShapeSizeLimitCountV3 | null | undefined;
  blockSetInputShapes: GranularBlockSetInputShapeSizeLimitCountV3;
  blockSetOutputShapes: GranularBlockSetOutputShapeSizeLimitCountV3;
  limits: GranularBlockSetLimits;
}
export interface GranularBlockSizeLimitCount {
  blockLimit: number;
  blocksByType: Record<BlockType, number>;
  numberOfBlocks: number;
}
export interface GranularErrorStatus_inProgressError {
  type: "inProgressError";
  inProgressError: InProgressError;
}

export interface GranularErrorStatus_inProgressCancelled {
  type: "inProgressCancelled";
  inProgressCancelled: InProgressCancelled;
}

export interface GranularErrorStatus_buildErrored {
  type: "buildErrored";
  buildErrored: BuildError;
}

export interface GranularErrorStatus_buildCancelled {
  type: "buildCancelled";
  buildCancelled: BuildCancelled;
}

export interface GranularErrorStatus_buildTimedOut {
  type: "buildTimedOut";
  buildTimedOut: BuildTimedOut;
}
/**
 * Comprises of the state the job was in when the error occurred and the type of error.
 */
export type GranularErrorStatus =
  | GranularErrorStatus_inProgressError
  | GranularErrorStatus_inProgressCancelled
  | GranularErrorStatus_buildErrored
  | GranularErrorStatus_buildCancelled
  | GranularErrorStatus_buildTimedOut;

export interface GranularInstallPendingStatus_notStarted {
  type: "notStarted";
  notStarted: NotStartedInstallPendingStatus;
}

export interface GranularInstallPendingStatus_preallocating {
  type: "preallocating";
  preallocating: PreallocatingInstallPendingStatus;
}

export interface GranularInstallPendingStatus_reconciling {
  type: "reconciling";
  reconciling: ReconcilingInstallPendingStatus;
}

export interface GranularInstallPendingStatus_pendingBuild {
  type: "pendingBuild";
  pendingBuild: PendingBuildInstallPendingStatus;
}

export interface GranularInstallPendingStatus_building {
  type: "building";
  building: BuildingInstallPendingStatus;
}

export interface GranularInstallPendingStatus_finished {
  type: "finished";
  finished: FinishedInstallPendingStatus;
}
/**
 * In reality, there are more processing stages in the backend. This is a simplified view of the install
 * lifecycle for the frontend.
 */
export type GranularInstallPendingStatus =
  | GranularInstallPendingStatus_notStarted
  | GranularInstallPendingStatus_preallocating
  | GranularInstallPendingStatus_reconciling
  | GranularInstallPendingStatus_pendingBuild
  | GranularInstallPendingStatus_building
  | GranularInstallPendingStatus_finished;

export interface GranularOutputSpecResult_materializing {
  type: "materializing";
  materializing: Void;
}

export interface GranularOutputSpecResult_dataUploading {
  type: "dataUploading";
  dataUploading: SuccessGranularOutputSpecResult;
}

export interface GranularOutputSpecResult_success {
  type: "success";
  success: SuccessGranularOutputSpecResult;
}

export interface GranularOutputSpecResult_error {
  type: "error";
  error: ErrorGranularOutputSpecResult;
}

export interface GranularOutputSpecResult_unsupported {
  type: "unsupported";
  unsupported: Void;
}

export interface GranularOutputSpecResult_ignored {
  type: "ignored";
  ignored: Void;
}
export type GranularOutputSpecResult =
  | GranularOutputSpecResult_materializing
  | GranularOutputSpecResult_dataUploading
  | GranularOutputSpecResult_success
  | GranularOutputSpecResult_error
  | GranularOutputSpecResult_unsupported
  | GranularOutputSpecResult_ignored;

export interface GroupAlreadyUsedFailure {
  conflictingMarketplaceRid: MarketplaceRid;
}
export type GroupId = string;
export interface GroupMalformedFailure {
}
export interface GroupReference {
  blockInstance: BlockSetBlockInstanceId;
  groupId: InputGroupId;
}
/**
 * If included in a Cipher License, the user has the ability to perform Cipher operations without any limit and
 * without needing justification in high trust environments. This is the permit to use for using Cipher in Apps
 * like Pipelines Builder.
 */
export interface HighTrustRequestPermit {
  requestType: RequestType;
}
export interface IdleBlockSetVersionStatus {
  error?: BlockSetVersionErrorRecovery | null | undefined;
  hasPendingOperations?: boolean | null | undefined;
  latestProcessedUpdateId?:
    | UpdatePendingBlockSetVersionSpecsRequestId
    | null
    | undefined;
  outputSpecResults: Array<OutputSpecResult>;
}
/**
 * There is nothing for the automation to do. The installation is on the latest product version.
 */
export interface IdleStatus {
}
export interface IgnoreConfig {
  ignoreRidPatternsAndDescendants: Array<RidFilter>;
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
export interface ImportBlockSetResponse {
  blockSetId: BlockSetId;
  blockSetVersionId: BlockSetVersionId;
  maybeSigningKeyId?: SigningKeyId | null | undefined;
}
export type ImportTimestamp = string;
export interface IncludeFunctionsConfig {
  fromCodeRepositories: boolean;
  fromLogicFiles: boolean;
}
export interface IncludeHealthCheckConfig {
  fromDatasets: boolean;
}
export type IncludeModelContent = "INCLUDED" | "EXCLUDED";
export interface IncludeOntologyEntitiesConfig {
  fromOntologyPackages: boolean;
}
export interface IncludeSchedulesConfig {
  fromTargets: boolean;
  includeDisabled: boolean;
}
export interface IncompatibleContractSemverError {
  actual: FunctionContractVersion;
  allowedMax: FunctionContractVersion;
  allowedMin: FunctionContractVersion;
  contractRid: FunctionContractRid;
}
export interface IncompatibleSemverError {
  actual: string;
  allowedMax: string;
  allowedMin: string;
}
export interface IndexableEntityIds {
  indexableEntityRid: IndexableEntityRid;
}
/**
 * The resource identifier for anything that can be indexed into the OSv2 ontology. (Currently this represents
 * object types and many-to-many link types.)
 */
export type IndexableEntityRid = string;

/**
 * An indexing pipeline was created for an ontology entity as part of the install, but this index failed.
 */
export interface IndexFailure {
  indexableEntityRids: Record<OutputBlockSetShapeId, IndexableEntityRid>;
}
/**
 * An indexing pipeline was created for an ontology entity as part of the install, but this index did not succeed
 * within the timeout period defined by Marketplace for an installation build and index.
 */
export interface IndexTimeout {
  indexableEntityRids: Record<OutputBlockSetShapeId, IndexableEntityRid>;
}
/**
 * Two inputs are indistinguishable if:
 *
 * - They have the same title
 * - They are from the same backing block
 *
 * For two inputs where both of the above are true, there will be no way for installers to distinguish them from
 * each other, making it likely that they will map their inputs incorrectly.
 *
 * To fix this, users will need to rename one of the inputs.
 */
export interface IndistinguishableInputShapesError {
  block: BlockSetBlockInstanceId;
  blockType: BlockType;
  shapeIds: Array<InputBlockSetShapeId>;
  shapeType: InputShapeType;
  title: string;
}
export interface InferredFolderStructureSettings_enabled {
  type: "enabled";
  enabled: Void;
}

export interface InferredFolderStructureSettings_disabled {
  type: "disabled";
  disabled: Void;
}
/**
 * Inferred folder structure takes the block set output specs and infers the folder structure that resources
 * should be organised within in the installed project and includes them as resources in the packaged block set.
 * We infer the folders by finding the lowest common ancestor of the Compass resource output specs. This LCA
 * mirrors the installation project as the root, therefore we include all folders under this LCA in the block
 * set, excluding the LCA itself.
 *
 * If disabled, we do not do any automatic inferrence.
 *
 * In either case, any folders included as output specs will be treated like any other output specs and
 * materialize as normal.
 */
export type InferredFolderStructureSettings =
  | InferredFolderStructureSettings_enabled
  | InferredFolderStructureSettings_disabled;

/**
 * The property has no associated inline ActionType whereas the shape definition requires one.
 */
export interface InlineActionTypeMissing {
  expected: ActionTypeReference;
}
export interface InProgressCancelled {
}
export interface InProgressError {
}
export interface InputBlockSetMappingInfo {
  backingShapes: Array<ShapeReference>;
  isOptional: boolean;
  metadata?: InputBlockSetShapeMetadata | null | undefined;
  resolvedShape?: ResolvedBlockSetInputShape | null | undefined;
  shape: BlockSetInputShape;
}
export interface InputBlockSetShapeAboutMetadata {
  original: LocalizedTitleAndDescription;
  override?: LocalizedTitleAndDescriptionOverride | null | undefined;
}
export type InputBlockSetShapeId = BlockSetShapeId;
export interface InputBlockSetShapeMetadata {
  about: InputBlockSetShapeAboutMetadata;
  presets?: InputPreset | null | undefined;
  visibility?: BlockSetShapeVisibility | null | undefined;
}
export interface InputDependencyCycle {
  blocksInCycle: Array<BlockIdAndType>;
}
/**
 * The given input was downstream of the given outputs in the job spec graph. This is not allowed, because it
 * could lead to cycles when integrations put job specs during installation.
 */
export interface InputDownstreamOfOutputsInJobSpecGraph {
  input: string;
  outputs: Array<string>;
}
export type InputEditsSupport = "ANY" | "REQUIRED";
export interface InputEntityIdentifier_action {
  type: "action";
  action: ActionTypeIdentifier;
}

export interface InputEntityIdentifier_actionParameter {
  type: "actionParameter";
  actionParameter: ActionTypeParameterIdentifier;
}

export interface InputEntityIdentifier_aipAgent {
  type: "aipAgent";
  aipAgent: AipAgentIdentifier;
}

export interface InputEntityIdentifier_allowOntologySchemaMigrations {
  type: "allowOntologySchemaMigrations";
  allowOntologySchemaMigrations: LegacyNotImplementedIdentifier;
}

export interface InputEntityIdentifier_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: ArtifactsRepositoryIdentifier;
}

export interface InputEntityIdentifier_authoringLibrary {
  type: "authoringLibrary";
  authoringLibrary: AuthoringLibraryIdentifier;
}

export interface InputEntityIdentifier_authoringRepository {
  type: "authoringRepository";
  authoringRepository: AuthoringRepositoryIdentifier;
}

export interface InputEntityIdentifier_automation {
  type: "automation";
  automation: AutomationIdentifier;
}

export interface InputEntityIdentifier_blobster {
  type: "blobster";
  blobster: BlobsterInputIdentifier;
}

export interface InputEntityIdentifier_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: CarbonWorkspaceIdentifier;
}

export interface InputEntityIdentifier_cipherChannel {
  type: "cipherChannel";
  cipherChannel: CipherChannelEntityIdentifier;
}

export interface InputEntityIdentifier_cipherLicense {
  type: "cipherLicense";
  cipherLicense: CipherLicenseInputIdentifier;
}

export interface InputEntityIdentifier_cipherLicenseV2 {
  type: "cipherLicenseV2";
  cipherLicenseV2: CipherLicenseEntityIdentifier;
}

export interface InputEntityIdentifier_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: CodeWorkspaceIdentifier;
}

export interface InputEntityIdentifier_codeWorkspaceLicense {
  type: "codeWorkspaceLicense";
  codeWorkspaceLicense: CodeWorkspaceLicenseIdentifier;
}

export interface InputEntityIdentifier_compassResource {
  type: "compassResource";
  compassResource: CompassResourceInputIdentifier;
}

export interface InputEntityIdentifier_contourAnalysis {
  type: "contourAnalysis";
  contourAnalysis: ContourAnalysisEntityIdentifier;
}

export interface InputEntityIdentifier_dataHealthCheck {
  type: "dataHealthCheck";
  dataHealthCheck: DataHealthCheckIdentifier;
}

export interface InputEntityIdentifier_dataHealthCheckGroup {
  type: "dataHealthCheckGroup";
  dataHealthCheckGroup: DataHealthCheckGroupIdentifier;
}

export interface InputEntityIdentifier_datasourceColumn {
  type: "datasourceColumn";
  datasourceColumn: DatasourceColumnIdentifier;
}

export interface InputEntityIdentifier_deployedApp {
  type: "deployedApp";
  deployedApp: DeployedAppIdentifier;
}

export interface InputEntityIdentifier_eddieParameter {
  type: "eddieParameter";
  eddieParameter: LegacyNotImplementedIdentifier;
}

export interface InputEntityIdentifier_eddieParameterV2 {
  type: "eddieParameterV2";
  eddieParameterV2: LegacyNotImplementedIdentifier;
}

export interface InputEntityIdentifier_eddiePipeline {
  type: "eddiePipeline";
  eddiePipeline: EddiePipelineIdentifier;
}

export interface InputEntityIdentifier_eddieReplayOption {
  type: "eddieReplayOption";
  eddieReplayOption: LegacyNotImplementedIdentifier;
}

export interface InputEntityIdentifier_eddieGeotimeConfiguration {
  type: "eddieGeotimeConfiguration";
  eddieGeotimeConfiguration: EddieGeotimeInputIdentifier;
}

export interface InputEntityIdentifier_eddieEdgeParameter {
  type: "eddieEdgeParameter";
  eddieEdgeParameter: EddieEdgeParameterInputIdentifier;
}

export interface InputEntityIdentifier_edgePipelineMagritteSource {
  type: "edgePipelineMagritteSource";
  edgePipelineMagritteSource: EdgePipelineMagritteSourceInputIdentifier;
}

export interface InputEntityIdentifier_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: EvaluationSuiteIdentifier;
}

export interface InputEntityIdentifier_filesDatasource {
  type: "filesDatasource";
  filesDatasource: FilesDatasourceInputIdentifier;
}

export interface InputEntityIdentifier_flinkProfile {
  type: "flinkProfile";
  flinkProfile: FlinkProfileIdentifier;
}

export interface InputEntityIdentifier_function {
  type: "function";
  function: FunctionIdentifier;
}

export interface InputEntityIdentifier_functionContract {
  type: "functionContract";
  functionContract: FunctionContractIdentifier;
}

export interface InputEntityIdentifier_fusionDocument {
  type: "fusionDocument";
  fusionDocument: FusionDocumentIdentifier;
}

export interface InputEntityIdentifier_geotimeSeriesIntegration {
  type: "geotimeSeriesIntegration";
  geotimeSeriesIntegration: GeotimeSeriesIntegrationRid;
}

export interface InputEntityIdentifier_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeIdentifier;
}

export interface InputEntityIdentifier_interfaceLinkType {
  type: "interfaceLinkType";
  interfaceLinkType: InterfaceLinkTypeIdentifier;
}

export interface InputEntityIdentifier_interfacePropertyType {
  type: "interfacePropertyType";
  interfacePropertyType: InterfacePropertyTypeIdentifier;
}

export interface InputEntityIdentifier_installPrefix {
  type: "installPrefix";
  installPrefix: LegacyNotImplementedIdentifier;
}

export interface InputEntityIdentifier_languageModel {
  type: "languageModel";
  languageModel: LanguageModelIdentifier;
}

export interface InputEntityIdentifier_link {
  type: "link";
  link: InputLinkTypeIdentifier;
}

export interface InputEntityIdentifier_logic {
  type: "logic";
  logic: LogicIdentifier;
}

export interface InputEntityIdentifier_logicFunction {
  type: "logicFunction";
  logicFunction: LogicFunctionIdentifier;
}

export interface InputEntityIdentifier_machinery {
  type: "machinery";
  machinery: MachineryProcessIdentifier;
}

export interface InputEntityIdentifier_magritteConnection {
  type: "magritteConnection";
  magritteConnection: MagritteConnectionIdentifier;
}

export interface InputEntityIdentifier_magritteExport {
  type: "magritteExport";
  magritteExport: MagritteExportIdentifier;
}

export interface InputEntityIdentifier_magritteSource {
  type: "magritteSource";
  magritteSource: MagritteSourceIdentifier;
}

export interface InputEntityIdentifier_magritteSourceConfigOverrides {
  type: "magritteSourceConfigOverrides";
  magritteSourceConfigOverrides: MagritteSourceConfigOverridesInputIdentifier;
}

export interface InputEntityIdentifier_magritteStreamingExtractConfigOverrides {
  type: "magritteStreamingExtractConfigOverrides";
  magritteStreamingExtractConfigOverrides:
    MagritteStreamingExtractConfigOverridesInputIdentifier;
}

export interface InputEntityIdentifier_markings {
  type: "markings";
  markings: MarkingsIdentifier;
}

export interface InputEntityIdentifier_model {
  type: "model";
  model: ModelInputIdentifier;
}

export interface InputEntityIdentifier_monitorView {
  type: "monitorView";
  monitorView: MonitorViewIdentifier;
}

export interface InputEntityIdentifier_monocleGraph {
  type: "monocleGraph";
  monocleGraph: MonocleGraphIdentifier;
}

export interface InputEntityIdentifier_multipassUserAttribute {
  type: "multipassUserAttribute";
  multipassUserAttribute: MultipassUserAttributeName;
}

export interface InputEntityIdentifier_multipassGroup {
  type: "multipassGroup";
  multipassGroup: MultipassGroupId;
}

export interface InputEntityIdentifier_namedCredential {
  type: "namedCredential";
  namedCredential: NamedCredentialIdentifier;
}

export interface InputEntityIdentifier_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: NetworkEgressPolicyIdentifier;
}

export interface InputEntityIdentifier_notepadDocument {
  type: "notepadDocument";
  notepadDocument: NotepadPartialResolvedShape;
}

export interface InputEntityIdentifier_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: NotepadTemplateIdentifier;
}

export interface InputEntityIdentifier_notepadTemplateParameter {
  type: "notepadTemplateParameter";
  notepadTemplateParameter: NotepadTemplateParameterIdentifier;
}

export interface InputEntityIdentifier_objectInstance {
  type: "objectInstance";
  objectInstance: ObjectInstanceIdentifier;
}

export interface InputEntityIdentifier_objectSet {
  type: "objectSet";
  objectSet: ObjectSetIdentifier;
}

export interface InputEntityIdentifier_objectType {
  type: "objectType";
  objectType: InputObjectTypeIdentifier;
}

export interface InputEntityIdentifier_objectView {
  type: "objectView";
  objectView: LegacyNotImplementedIdentifier;
}

export interface InputEntityIdentifier_objectViewTab {
  type: "objectViewTab";
  objectViewTab: LegacyNotImplementedIdentifier;
}

export interface InputEntityIdentifier_ontologyDatasource {
  type: "ontologyDatasource";
  ontologyDatasource: OntologyDatasourceIdentifier;
}

export interface InputEntityIdentifier_ontologySdk {
  type: "ontologySdk";
  ontologySdk: OntologySdkEntityIdentifier;
}

export interface InputEntityIdentifier_parameter {
  type: "parameter";
  parameter: ParameterPartialResolvedShape;
}

export interface InputEntityIdentifier_property {
  type: "property";
  property: PropertyIdentifier;
}

export interface InputEntityIdentifier_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: QuiverDashboardIdentifier;
}

export interface InputEntityIdentifier_schedule {
  type: "schedule";
  schedule: ScheduleIdentifier;
}

export interface InputEntityIdentifier_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SharedPropertyTypeIdentifier;
}

export interface InputEntityIdentifier_slateApplication {
  type: "slateApplication";
  slateApplication: SlateApplicationIdentifier;
}

export interface InputEntityIdentifier_solutionDesign {
  type: "solutionDesign";
  solutionDesign: SolutionDesignIdentifier;
}

export interface InputEntityIdentifier_sparkProfile {
  type: "sparkProfile";
  sparkProfile: SparkProfileIdentifier;
}

export interface InputEntityIdentifier_tabularDatasource {
  type: "tabularDatasource";
  tabularDatasource: TabularDatasourceInputIdentifier;
}

export interface InputEntityIdentifier_taurusWorkflow {
  type: "taurusWorkflow";
  taurusWorkflow: TaurusWorkflowIdentifier;
}

export interface InputEntityIdentifier_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: ThirdPartyApplicationEntityIdentifier;
}

export interface InputEntityIdentifier_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: TimeSeriesSyncRid;
}

export interface InputEntityIdentifier_valueType {
  type: "valueType";
  valueType: VersionedValueTypeIdentifier;
}

export interface InputEntityIdentifier_vectorWorkbook {
  type: "vectorWorkbook";
  vectorWorkbook: VectorWorkbookIdentifier;
}

export interface InputEntityIdentifier_vertexTemplate {
  type: "vertexTemplate";
  vertexTemplate: VertexEntityIdentifier;
}

export interface InputEntityIdentifier_vortexTemplate {
  type: "vortexTemplate";
  vortexTemplate: VortexEntityIdentifier;
}

export interface InputEntityIdentifier_walkthrough {
  type: "walkthrough";
  walkthrough: WalkthroughEntityIdentifier;
}

export interface InputEntityIdentifier_webhook {
  type: "webhook";
  webhook: WebhookEntityIdentifier;
}

export interface InputEntityIdentifier_widget {
  type: "widget";
  widget: WidgetIdentifier;
}

export interface InputEntityIdentifier_widgetSet {
  type: "widgetSet";
  widgetSet: WidgetSetIdentifier;
}

export interface InputEntityIdentifier_workshop {
  type: "workshop";
  workshop: WorkshopIdentifier;
}

export interface InputEntityIdentifier_workshopSaveLocation {
  type: "workshopSaveLocation";
  workshopSaveLocation: WorkshopApplicationSaveLocationPartialResolvedShape;
}
/**
 * Entity Identifiers are the minimum needed to identify a resource and any constraints. This can include multiple
 * options to identify the resource eg. ObjectTypeId OR ObjectTypeRid can identify an object type in a
 * consuming service.
 */
export type InputEntityIdentifier =
  | InputEntityIdentifier_action
  | InputEntityIdentifier_actionParameter
  | InputEntityIdentifier_aipAgent
  | InputEntityIdentifier_allowOntologySchemaMigrations
  | InputEntityIdentifier_artifactsRepository
  | InputEntityIdentifier_authoringLibrary
  | InputEntityIdentifier_authoringRepository
  | InputEntityIdentifier_automation
  | InputEntityIdentifier_blobster
  | InputEntityIdentifier_carbonWorkspace
  | InputEntityIdentifier_cipherChannel
  | InputEntityIdentifier_cipherLicense
  | InputEntityIdentifier_cipherLicenseV2
  | InputEntityIdentifier_codeWorkspace
  | InputEntityIdentifier_codeWorkspaceLicense
  | InputEntityIdentifier_compassResource
  | InputEntityIdentifier_contourAnalysis
  | InputEntityIdentifier_dataHealthCheck
  | InputEntityIdentifier_dataHealthCheckGroup
  | InputEntityIdentifier_datasourceColumn
  | InputEntityIdentifier_deployedApp
  | InputEntityIdentifier_eddieParameter
  | InputEntityIdentifier_eddieParameterV2
  | InputEntityIdentifier_eddiePipeline
  | InputEntityIdentifier_eddieReplayOption
  | InputEntityIdentifier_eddieGeotimeConfiguration
  | InputEntityIdentifier_eddieEdgeParameter
  | InputEntityIdentifier_edgePipelineMagritteSource
  | InputEntityIdentifier_evaluationSuite
  | InputEntityIdentifier_filesDatasource
  | InputEntityIdentifier_flinkProfile
  | InputEntityIdentifier_function
  | InputEntityIdentifier_functionContract
  | InputEntityIdentifier_fusionDocument
  | InputEntityIdentifier_geotimeSeriesIntegration
  | InputEntityIdentifier_interfaceType
  | InputEntityIdentifier_interfaceLinkType
  | InputEntityIdentifier_interfacePropertyType
  | InputEntityIdentifier_installPrefix
  | InputEntityIdentifier_languageModel
  | InputEntityIdentifier_link
  | InputEntityIdentifier_logic
  | InputEntityIdentifier_logicFunction
  | InputEntityIdentifier_machinery
  | InputEntityIdentifier_magritteConnection
  | InputEntityIdentifier_magritteExport
  | InputEntityIdentifier_magritteSource
  | InputEntityIdentifier_magritteSourceConfigOverrides
  | InputEntityIdentifier_magritteStreamingExtractConfigOverrides
  | InputEntityIdentifier_markings
  | InputEntityIdentifier_model
  | InputEntityIdentifier_monitorView
  | InputEntityIdentifier_monocleGraph
  | InputEntityIdentifier_multipassUserAttribute
  | InputEntityIdentifier_multipassGroup
  | InputEntityIdentifier_namedCredential
  | InputEntityIdentifier_networkEgressPolicy
  | InputEntityIdentifier_notepadDocument
  | InputEntityIdentifier_notepadTemplate
  | InputEntityIdentifier_notepadTemplateParameter
  | InputEntityIdentifier_objectInstance
  | InputEntityIdentifier_objectSet
  | InputEntityIdentifier_objectType
  | InputEntityIdentifier_objectView
  | InputEntityIdentifier_objectViewTab
  | InputEntityIdentifier_ontologyDatasource
  | InputEntityIdentifier_ontologySdk
  | InputEntityIdentifier_parameter
  | InputEntityIdentifier_property
  | InputEntityIdentifier_quiverDashboard
  | InputEntityIdentifier_schedule
  | InputEntityIdentifier_sharedPropertyType
  | InputEntityIdentifier_slateApplication
  | InputEntityIdentifier_solutionDesign
  | InputEntityIdentifier_sparkProfile
  | InputEntityIdentifier_tabularDatasource
  | InputEntityIdentifier_taurusWorkflow
  | InputEntityIdentifier_thirdPartyApplication
  | InputEntityIdentifier_timeSeriesSync
  | InputEntityIdentifier_valueType
  | InputEntityIdentifier_vectorWorkbook
  | InputEntityIdentifier_vertexTemplate
  | InputEntityIdentifier_vortexTemplate
  | InputEntityIdentifier_walkthrough
  | InputEntityIdentifier_webhook
  | InputEntityIdentifier_widget
  | InputEntityIdentifier_widgetSet
  | InputEntityIdentifier_workshop
  | InputEntityIdentifier_workshopSaveLocation;

/**
 * Group inputs that need to be present together during installation.
 *
 * A group may represent a feature or some other logical grouping where there referenced input shapes
 * are necessary for it to function but its existence is optional to the object as a whole being packaged.
 * For each group present, users will have the choice to opt in/out during installation (see ResolvedInputGroup).
 *
 * For groups that are opted-in (ResolvedInputGroup.enabled=true) the inputs referenced by it will become
 * required regardless if they are defined as optional using `inputMetadata`.
 * If an input is present in multiple groups, any of them being enabled will make the input required.
 */
export interface InputGroup {
  displayMetadata: InputGroupDisplayMetadata;
  inputReferences: Array<BlockShapeId>;
}
export interface InputGroupBlockSetMappingInfo {
  backingGroups: Array<GroupReference>;
  dependents: Array<OutputBlockSetShapeId>;
  displayMetadata: InputGroupDisplayMetadata;
  inputReferences: Array<InputBlockSetShapeId>;
}
export interface InputGroupDisplayMetadata {
  about: LocalizedTitleAndDescription;
}
export interface InputGroupDoesNotExistInBlockError {
  inputGroupId: InputGroupId;
}
export type InputGroupId = string;
export interface InputGroupResult {
  group: InputGroup;
  inputGroupId: InputGroupId;
  internalShapeId: InternalShapeId;
}
export interface InputGroupValidationErrors_inputGroupDoesNotExistInBlock {
  type: "inputGroupDoesNotExistInBlock";
  inputGroupDoesNotExistInBlock: InputGroupDoesNotExistInBlockError;
}
export type InputGroupValidationErrors =
  InputGroupValidationErrors_inputGroupDoesNotExistInBlock;

export interface InputGroupWithUnknownReference {
  internalShapeId: InternalShapeId;
}
export interface InputLinkTypeIdentifier {
  editsSupport: InputEditsSupport;
  identifier: LinkTypeIdentifier;
  objectsBackendVersion: InputObjectBackendVersion;
}
export type InputObjectBackendVersion = "V1_OR_V2" | "V2";
export interface InputObjectTypeIdentifier {
  editsSupport: InputEditsSupport;
  identifier: ObjectTypeIdentifier;
  objectsBackendVersion: InputObjectBackendVersion;
}
export interface InputPreset {
  enforcement?: PresetEnforcement | null | undefined;
  exportCompatibility: ExportCompatibility;
  isDefault?: boolean | null | undefined;
  value: PresetValue;
}
export interface InputPresetResolutionResult {
  defaultResolutionResult?:
    | ResolvedShapeResolutionResultUnion
    | null
    | undefined;
  presetEnforcement: PresetEnforcement;
  resolvedValue: ResolvedPresetValue;
}
/**
 * Pairing of an input of one block set to the output of another
 */
export interface InputRecommendationV2 {
  fulfilledBy: OutputBlockSetShapeId;
  input: InputBlockSetShapeId;
}
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
export interface InputShapeNotSpecified {
  blockVersionId: BlockVersionId;
  inputShape: BlockShapeId;
  requiredForInputGroupIds: Array<InputGroupId>;
}
export interface InputShapeResolver_apiNameResolver {
  type: "apiNameResolver";
  apiNameResolver: ApiNameResolver;
}

export interface InputShapeResolver_resolvedShapeResolver {
  type: "resolvedShapeResolver";
  resolvedShapeResolver: ResolvedBlockSetInputShape;
}

export interface InputShapeResolver_linkTypeIdResolver {
  type: "linkTypeIdResolver";
  linkTypeIdResolver: LinkTypeIdResolver;
}

export interface InputShapeResolver_multipassGroupResolver {
  type: "multipassGroupResolver";
  multipassGroupResolver: MultipassGroupResolver;
}

export interface InputShapeResolver_markingsResolver {
  type: "markingsResolver";
  markingsResolver: Array<MarkingResolver>;
}
/**
 * Used to generate a resolved block set input shape.
 */
export type InputShapeResolver =
  | InputShapeResolver_apiNameResolver
  | InputShapeResolver_resolvedShapeResolver
  | InputShapeResolver_linkTypeIdResolver
  | InputShapeResolver_multipassGroupResolver
  | InputShapeResolver_markingsResolver;

export interface InputShapeResult {
  blockShapeId: BlockShapeId;
  internalShapeId: InternalShapeId;
  metadata: InputShapeMetadata;
  resolvedShape: ResolvedInputShape;
  shape: InputShape;
}
/**
 * Corresponds 1:1 with the member types of the InputShape union.
 *
 * NOTE: The name here needs to be identical to the name in `OutputShapeType` for the same shape type.
 */
export type InputShapeType =
  | "ACTION"
  | "ACTION_PARAMETER"
  | "ALLOW_SCHEMA_MIGRATIONS"
  | "AIP_AGENT"
  | "ARTIFACTS_REPOSITORY"
  | "AUTHORING_LIBRARY"
  | "AUTHORING_REPOSITORY"
  | "AUTOMATION"
  | "BLOBSTER_RESOURCE"
  | "CARBON_WORKSPACE"
  | "CIPHER_CHANNEL"
  | "CIPHER_LICENSE"
  | "CIPHER_LICENSE_V2"
  | "CODE_WORKSPACE"
  | "CODE_WORKSPACE_LICENSE"
  | "COMPASS_RESOURCE"
  | "CONTOUR_ANALYSIS"
  | "DATA_HEALTH_CHECK"
  | "DATA_HEALTH_CHECK_GROUP"
  | "DATASOURCE_COLUMN"
  | "DEPLOYED_APP"
  | "EDDIE_PARAMETER"
  | "EDDIE_PARAMETER_V2"
  | "EDDIE_PIPELINE"
  | "EDDIE_REPLAY_OPTION"
  | "EDDIE_GEOTIME_CONFIGURATION"
  | "EDDIE_EDGE_PARAMETER"
  | "EDGE_PIPELINE_MAGRITTE_SOURCE_CONFIGURATION"
  | "EVALUATION_SUITE"
  | "FILES_DATASOURCE"
  | "FLINK_PROFILE"
  | "FUNCTION"
  | "FUNCTION_CONTRACT"
  | "FUSION_DOCUMENT"
  | "GEOTIME_SERIES_INTEGRATION"
  | "INTERFACE_TYPE"
  | "INTERFACE_LINK_TYPE"
  | "INTERFACE_PROPERTY_TYPE"
  | "INSTALL_PREFIX"
  | "LANGUAGE_MODEL"
  | "LINK_TYPE"
  | "LOGIC"
  | "LOGIC_FUNCTION"
  | "MACHINERY"
  | "MAGRITTE_CONNECTION"
  | "MAGRITTE_EXPORT"
  | "MAGRITTE_SOURCE"
  | "MAGRITTE_SOURCE_CONFIG_OVERRIDES"
  | "MAGRITTE_STREAMING_EXTRACT_CONFIG_OVERRIDES"
  | "MARKINGS"
  | "MODEL"
  | "MONITOR_VIEW"
  | "MONOCLE_GRAPH"
  | "MULTIPASS_USER_ATTRIBUTE"
  | "MULTIPASS_GROUP"
  | "NAMED_CREDENTIAL"
  | "NETWORK_EGRESS_POLICY"
  | "NOTEPAD_DOCUMENT"
  | "NOTEPAD_TEMPLATE"
  | "NOTEPAD_TEMPLATE_PARAMETER"
  | "OBJECT_INSTANCE"
  | "OBJECT_SET"
  | "OBJECT_TYPE"
  | "OBJECT_VIEW"
  | "OBJECT_VIEW_TAB"
  | "ONTOLOGY_DATASOURCE"
  | "ONTOLOGY_DATASOURCE_RETENTION"
  | "ONTOLOGY_SDK"
  | "OVERRIDE_ONTOLOGY_ENTITY_API_NAMES"
  | "PARAMETER"
  | "PROPERTY"
  | "QUIVER_DASHBOARD"
  | "SCHEDULE"
  | "SHARED_PROPERTY_TYPE"
  | "SLATE_APPLICATION"
  | "SOLUTION_DESIGN"
  | "SPARK_PROFILE"
  | "TABULAR_DATASOURCE"
  | "TAURUS_WORKFLOW"
  | "THIRD_PARTY_APPLICATION"
  | "TIME_SERIES_SYNC"
  | "VALUE_TYPE"
  | "VECTOR_WORKBOOK"
  | "VERTEX_TEMPLATE"
  | "VORTEX_TEMPLATE"
  | "WALKTHROUGH"
  | "WEBHOOK"
  | "WIDGET"
  | "WIDGET_SET"
  | "WORKSHOP_APPLICATION"
  | "WORKSHOP_APPLICATION_SAVE_LOCATION";

/**
 * Shape type does not match between the versions.
 */
export interface InputShapeTypeMismatchImplication {
  shapeTypeA: InputShapeType;
  shapeTypeB: InputShapeType;
}
/**
 * Represents an input shape version, and output shapes of the block that has this input.
 */
export interface InputShapeVersionAndBlockSetOutputs {
  outputs: Array<OutputBlockSetShapeId>;
  version?: ResourceVersion | null | undefined;
}
export type InstallableBlockSetInputGroups = Record<
  BlockSetInputGroupId,
  BlockSetInputGroup
>;
export interface InstallableBlockSetInputShape {
  isOptional: boolean;
  metadata?: InstallableInputBlockSetShapeMetadata | null | undefined;
  shape: BlockSetInputShape;
}
export type InstallableBlockSetInputShapes = Record<
  InputBlockSetShapeId,
  InstallableBlockSetInputShape
>;
export interface InstallableBlockSetOutputShape {
  producedByBlockType: BlockType;
  shape: BlockSetOutputShape;
}
export type InstallableBlockSetOutputShapes = Record<
  OutputBlockSetShapeId,
  InstallableBlockSetOutputShape
>;
export interface InstallableBlockSetVersionDocumentation {
  attachments: Array<AttachmentMetadata>;
  changelog?: Changelog | null | undefined;
  freeForm?: FreeFormDocumentation | null | undefined;
  freeFormSections?: FreeFormDocumentationSections | null | undefined;
  links?: Links | null | undefined;
  localizedFreeFormSections?:
    | LocalizedFreeFormDocumentationSections
    | null
    | undefined;
  thumbnail?: AttachmentMetadata | null | undefined;
}
/**
 * An installable block set version always needs to be identified through a tuple of
 * (MarketplaceRid, BlockSetVersionId).
 */
export interface InstallableBlockSetVersionId {
  blockSetVersionId: BlockSetVersionId;
  marketplaceRid: MarketplaceRid;
}
export interface InstallableBlockSetVersionMetadata {
  about: LocalizedTitleAndDescription;
  createdByUser?: MultipassUserId | null | undefined;
  creationTimestamp: string;
  defaultInstallationSettings?: DefaultInstallationSettings | null | undefined;
  id: BlockSetId;
  importedAt?: ImportTimestamp | null | undefined;
  lastKnownVersionBeforeBreak?: SemverVersion | null | undefined;
  marketplaceMetadataVersion?: MarketplaceMetadataVersion | null | undefined;
  mavenProductId?: MavenProductId | null | undefined;
  publishedByUser?: MultipassUserId | null | undefined;
  releaseMetadata: BlockSetVersionReleaseMetadata;
  tags: Array<BlockSetTag>;
  tagsV2: BlockSetCategorizedTags;
  typedTags: Array<TagRid>;
  version: BlockSetVersion;
  versionId: BlockSetVersionId;
}
export interface InstallableBlockSetVersionShapes {
  inputGroups: InstallableBlockSetInputGroups;
  inputShapes: InstallableBlockSetInputShapes;
  outputShapes: InstallableBlockSetOutputShapes;
  shapeDependencies: Array<BlockSetShapeDependencies>;
}
export interface InstallableInputBlockSetShapeMetadata {
  about: InputBlockSetShapeAboutMetadata;
  presets?: InstallableInputPreset | null | undefined;
  visibility?: BlockSetShapeVisibility | null | undefined;
}
export interface InstallableInputPreset {
  enforcement?: PresetEnforcement | null | undefined;
  exportCompatibility: ExportCompatibility;
  isDefault?: boolean | null | undefined;
  value: InstallablePresetValue;
}
/**
 * Installable version of `PresetResolvedShapeOverrides`. The resolved shapes are not included, so that the
 * installer is not shown resolved shapes from the source, which may originate from a different stack or
 * enrollment.
 */
export interface InstallablePresetResolvedShapeOverrides {
  defaultIndex?: number | null | undefined;
  resolvers: Array<InputShapeResolver>;
}
export interface InstallablePresetValue_fromSource {
  type: "fromSource";
  fromSource: PresetFromSource;
}

export interface InstallablePresetValue_resolvedShapeOverrides {
  type: "resolvedShapeOverrides";
  resolvedShapeOverrides: InstallablePresetResolvedShapeOverrides;
}
export type InstallablePresetValue =
  | InstallablePresetValue_fromSource
  | InstallablePresetValue_resolvedShapeOverrides;

export interface InstallableTransportBlock {
  changelog?: Changelog | null | undefined;
  creationTimestamp: CreationTimestamp;
  id: BlockId;
  internal: BlockInternal;
  version: BlockVersion;
  versionId: BlockVersionId;
}
export interface InstallableTransportBlockSet {
  about: LocalizedTitleAndDescription;
  additionalRecommendationVariants: Record<
    BlockSetRecommendationId,
    BlockSetRecommendationVariant
  >;
  blocks: Record<BlockSetBlockInstanceId, SingleVersionBlockReference>;
  blockSetShapeMapping?: TransportBlockSetToBlockMapping | null | undefined;
  changelog?: Changelog | null | undefined;
  creationTimestamp: CreationTimestamp;
  defaultInstallationSettings?: DefaultInstallationSettings | null | undefined;
  documentation?: BlockSetDocumentation | null | undefined;
  externalRecommendations: Array<ExternalRecommendationV2>;
  id: BlockSetId;
  installHints?: BlockSetInstallationHints | null | undefined;
  lastKnownVersionBeforeBreak?: BlockSetVersion | null | undefined;
  marketplaceMetadata?:
    | TransportVersionedMarketplaceMetadata
    | null
    | undefined;
  mavenCoordinateDependencies: Array<MavenCoordinateDependency>;
  mavenProductId?: MavenProductId | null | undefined;
  releaseMetadata?: TransportReleaseMetadata | null | undefined;
  tags: Array<BlockSetTag>;
  tagsV2?: BlockSetCategorizedTags | null | undefined;
  typedTags: Array<TagRid>;
  version: BlockSetVersion;
  versionId: BlockSetVersionId;
}
export interface InstallationBuild {
  buildRid: BuildRid;
  shapeBuildJobs: Record<OutputBlockSetShapeId, JobRid>;
}
export type InstallationContextId = string;
export interface InstallationInstruction_installNewBlock {
  type: "installNewBlock";
  installNewBlock: InstallNewBlockInstruction;
}

export interface InstallationInstruction_installExistingBlock {
  type: "installExistingBlock";
  installExistingBlock: InstallExistingBlockInstruction;
}
export type InstallationInstruction =
  | InstallationInstruction_installNewBlock
  | InstallationInstruction_installExistingBlock;

export interface InstallationJobBuildAll {
}
export interface InstallationJobBuildOption_all {
  type: "all";
  all: InstallationJobBuildAll;
}

export interface InstallationJobBuildOption_required {
  type: "required";
  required: InstallationJobBuildRequired;
}
export type InstallationJobBuildOption =
  | InstallationJobBuildOption_all
  | InstallationJobBuildOption_required;

export interface InstallationJobBuildRequired {
}
export interface InstallationJobValidationError_externalRecommendationToSelf {
  type: "externalRecommendationToSelf";
  externalRecommendationToSelf: ExternalRecommendationToSelf;
}

export interface InstallationJobValidationError_invalidNewBlockSetInstallationReferences {
  type: "invalidNewBlockSetInstallationReferences";
  invalidNewBlockSetInstallationReferences:
    InvalidNewBlockSetInstallationReferences;
}

export interface InstallationJobValidationError_invalidPreallocatedJobRid {
  type: "invalidPreallocatedJobRid";
  invalidPreallocatedJobRid: Void;
}

export interface InstallationJobValidationError_noInstallationsInRequest {
  type: "noInstallationsInRequest";
  noInstallationsInRequest: Void;
}

export interface InstallationJobValidationError_numberOfInstallationsInRequestLimitExceeded {
  type: "numberOfInstallationsInRequestLimitExceeded";
  numberOfInstallationsInRequestLimitExceeded:
    NumberOfInstallationsInRequestLimitExceeded;
}

export interface InstallationJobValidationError_duplicateBlockSetVersionsInRequest {
  type: "duplicateBlockSetVersionsInRequest";
  duplicateBlockSetVersionsInRequest: DuplicateBlockSetVersionsInRequest;
}

export interface InstallationJobValidationError_unresolvableCycle {
  type: "unresolvableCycle";
  unresolvableCycle: UnresolvableBlockSetCycle;
}
export type InstallationJobValidationError =
  | InstallationJobValidationError_externalRecommendationToSelf
  | InstallationJobValidationError_invalidNewBlockSetInstallationReferences
  | InstallationJobValidationError_invalidPreallocatedJobRid
  | InstallationJobValidationError_noInstallationsInRequest
  | InstallationJobValidationError_numberOfInstallationsInRequestLimitExceeded
  | InstallationJobValidationError_duplicateBlockSetVersionsInRequest
  | InstallationJobValidationError_unresolvableCycle;

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

export interface InstallationOutputKey_rid {
  type: "rid";
  rid: RidShapeIdentifier;
}

export interface InstallationOutputKey_objectViewTab {
  type: "objectViewTab";
  objectViewTab: ObjectViewTabIdentifier;
}

export interface InstallationOutputKey_rosettaDocsBundle {
  type: "rosettaDocsBundle";
  rosettaDocsBundle: RosettaProductId;
}

export interface InstallationOutputKey_ontologySdk {
  type: "ontologySdk";
  ontologySdk: OntologySdkIdentifier;
}

export interface InstallationOutputKey_logicFunction {
  type: "logicFunction";
  logicFunction: LogicFunctionShapeIdentifier;
}
/**
 * This uniquely represents an installed resource.
 *
 * For shapes where marketplace owns the entire resource, we can use the rid to identify the output.
 * For more complex cases, we can add new union members and encode additional metadata to identify the resource.
 */
export type InstallationOutputKey =
  | InstallationOutputKey_rid
  | InstallationOutputKey_objectViewTab
  | InstallationOutputKey_rosettaDocsBundle
  | InstallationOutputKey_ontologySdk
  | InstallationOutputKey_logicFunction;

export interface InstallationOutputMetadata {
  blockInstallationRid: BlockInstallationRid;
  blockSetBlockInstanceId: BlockSetBlockInstanceId;
  blockSetInstallationRid: BlockSetInstallationRid;
  blockSetShapeId?: BlockSetShapeId | null | undefined;
  blockShapeId: BlockShapeId;
  blockVersionId: BlockVersionId;
}
/**
 * MARKETPLACE_INSTALLATION will lead to a project where all edit permissions are disabled, PROJECT will lead to a regular project being created
 */
export type InstallationProjectRoleContext =
  | "MARKETPLACE_INSTALLATION"
  | "PROJECT";
export interface InstallationResolvedInputShape {
  value: InstallationResolvedInputShapeValue;
}
export interface InstallationResolvedInputShapeFromDefault {
  expectedResolvedShape?: ResolvedBlockSetInputShape | null | undefined;
}
export interface InstallationResolvedInputShapeManuallyProvided {
  resolvedShape: ResolvedBlockSetInputShape;
}
export interface InstallationResolvedInputShapeValue_manuallyProvided {
  type: "manuallyProvided";
  manuallyProvided: InstallationResolvedInputShapeManuallyProvided;
}

export interface InstallationResolvedInputShapeValue_fromDefault {
  type: "fromDefault";
  fromDefault: InstallationResolvedInputShapeFromDefault;
}
export type InstallationResolvedInputShapeValue =
  | InstallationResolvedInputShapeValue_manuallyProvided
  | InstallationResolvedInputShapeValue_fromDefault;

export type InstallationTimestamp = string;

/**
 * Settings for upgrade automation related settings.
 */
export interface InstallAutomationSettings {
  automaticUpgradesEnabled: boolean;
  maintenanceWindows: MaintenanceWindows;
  notificationSettings?: NotificationMechanismsTargets | null | undefined;
  releaseChannels: Array<ReleaseChannel>;
}
export interface InstallBlockFinishedMetadata {
  blockReference: BlockReference;
  blockShapeBuildMetadata: Record<BlockShapeId, BlockShapeBuildMetadata>;
  buildsAndIndexingIds: Record<BlockShapeId, BuildsAndIndexingIds>;
}
export interface InstallBlockSetPermissionDeniedRationale {
  blockSetId: BlockSetId;
  marketplaceRid: MarketplaceRid;
  securityRid: BlockSetSecurityRid;
}
/**
 * Maps 1:1 to a InstallShapeValidationError, but any block internal ids would map to block set shape ids
 */
export type InstallBlockSetShapeValidationError = InstallShapeValidationError;

/**
 * A single Namespace and at most one Ontology must be provided in the request.
 */
export interface InstallBlockSetsRequest {
  createNewInstallations: Record<
    NewBlockSetInstallationId,
    CreateNewBlockSetInstallation
  >;
  createProjects: Record<NewProjectId, CreateProjectRequest>;
  jobSettings?: JobSettings | null | undefined;
  modifyExistingInstallations: Record<
    BlockSetInstallationRid,
    ModifyExistingBlockSetInstallation
  >;
  preallocatedJobRid?: BlockSetInstallationJobRid | null | undefined;
}
export interface InstallBlockSetsResponse {
  result: InstallBlockSetsResult;
}
export interface InstallBlockSetsResult_jobSubmitted {
  type: "jobSubmitted";
  jobSubmitted: JobSubmittedResult;
}

export interface InstallBlockSetsResult_failedToSubmitJob {
  type: "failedToSubmitJob";
  failedToSubmitJob: FailedToSubmitJobResult;
}

export interface InstallBlockSetsResult_invalidRequest {
  type: "invalidRequest";
  invalidRequest: InvalidInstallBlockSetsRequest;
}
export type InstallBlockSetsResult =
  | InstallBlockSetsResult_jobSubmitted
  | InstallBlockSetsResult_failedToSubmitJob
  | InstallBlockSetsResult_invalidRequest;

export type InstallBlocksJobId = string;
export type InstallBlocksJobRid = string;
export interface InstallBlocksRequest {
  associatedBlockSetInstalls: Array<AssociatedBlockSetInstallation>;
  installationInstructions: Array<InstallationInstruction>;
}
export interface InstallBlocksRequestV2 {
  blockSetVersionToStore: Record<BlockSetVersionId, MarketplaceRid>;
  blockVersionToStore: Record<BlockVersionId, MarketplaceRid>;
  buildSettings?: BuildSettings | null | undefined;
  cleanupUnusedShapesSettings?: CleanupUnusedShapesSettings | null | undefined;
  installLocation: TargetInstallLocation;
  marketplaceRid: MarketplaceRid;
  request: InstallBlocksRequest;
}
export interface InstallBlocksResponseV2_inProgress {
  type: "inProgress";
  inProgress: InstallBlocksJobRid;
}

export interface InstallBlocksResponseV2_invalidRequest {
  type: "invalidRequest";
  invalidRequest: InvalidInstallBlocksRequest;
}

export interface InstallBlocksResponseV2_failed {
  type: "failed";
  failed: FailedInstallBlocksResponse;
}
export type InstallBlocksResponseV2 =
  | InstallBlocksResponseV2_inProgress
  | InstallBlocksResponseV2_invalidRequest
  | InstallBlocksResponseV2_failed;

export interface InstallBlocksStatus_pending {
  type: "pending";
  pending: InstallBlocksStatusPending;
}

export interface InstallBlocksStatus_building {
  type: "building";
  building: InstallBlocksStatusBuilding;
}

export interface InstallBlocksStatus_success {
  type: "success";
  success: InstallBlocksStatusSuccess;
}

export interface InstallBlocksStatus_error {
  type: "error";
  error: InstallBlocksStatusError;
}
export type InstallBlocksStatus =
  | InstallBlocksStatus_pending
  | InstallBlocksStatus_building
  | InstallBlocksStatus_success
  | InstallBlocksStatus_error;

/**
 * Status for an in progress job, where backing datasources are building. Install pending metadata provides a
 * granular install status per block in the installation lifecycle.
 */
export interface InstallBlocksStatusBuilding {
  awaitingCancellation?: BlockReference | null | undefined;
  inProgressMetadata: Array<InstallPendingMetadata>;
  newBlockSetInstallationRids: Record<
    NewBlockSetInstallationId,
    BlockSetInstallationRid
  >;
}
/**
 * Status of an errored block installation. Provides block level breakdown and a global set of installation errors.
 */
export interface InstallBlocksStatusError {
  blockShapeBuildMetadata: Record<BlockShapeId, BlockShapeBuildMetadata>;
  erroredExisting: Record<BlockInstallationRid, Array<BlockInstallError>>;
  erroredNew: Record<InstallNewBlockInstructionId, Array<BlockInstallError>>;
  errors: Array<BlockInstallError>;
  finished: Array<BlockReference>;
  granularErrorStatus?: GranularErrorStatus | null | undefined;
  newBlockSetInstallationRids: Record<
    NewBlockSetInstallationId,
    BlockSetInstallationRid
  >;
  notAttempted: Array<BlockReference>;
  wasCancelled?: boolean | null | undefined;
}
/**
 * Status for an in progress job. Install pending metadata provides a granular install status per block in the
 * installation lifecycle.
 */
export interface InstallBlocksStatusPending {
  awaitingCancellation?: BlockReference | null | undefined;
  finished: Array<BlockReference>;
  inProgress: Array<BlockReference>;
  inProgressMetadata: Array<InstallPendingMetadata>;
  newBlockSetInstallationRids: Record<
    NewBlockSetInstallationId,
    BlockSetInstallationRid
  >;
}
/**
 * Blocks have successfully completed installation.
 */
export interface InstallBlocksStatusSuccess {
  finishedMetadata: Array<InstallBlockFinishedMetadata>;
  newBlockInstallationRids: Record<
    InstallNewBlockInstructionId,
    BlockInstallationRid
  >;
  newBlockSetInstallationRids: Record<
    NewBlockSetInstallationId,
    BlockSetInstallationRid
  >;
  postInstallationJobTasks: Array<PostInstallationJobTask>;
}
export interface InstallExistingBlockInstruction {
  blockInstallationRid: BlockInstallationRid;
  forceInstall?: boolean | null | undefined;
  resolvedInputGroups: Record<InputGroupId, ResolvedInputGroup>;
  resolvedInputShapes: Record<BlockShapeId, ResolvedInputOrRef>;
  resolvedOutputShapes: Record<BlockShapeId, ResolvedOutputShape>;
  resolvedOutputShapesToAttach: Record<BlockShapeId, ResolvedOutputShape>;
  toVersion: BlockVersionId;
}
export interface InstallFromMarketplacePermissionDeniedRationale {
  marketplaceRid: MarketplaceRid;
}
export interface InstallInOntologyPermissionDeniedRationale {
  ontologyRid: OntologyRid;
}
export type InstallLocationBlockShapeId = BlockShapeId;
export interface InstallNewBlockInstruction {
  blockVersionId: BlockVersionId;
  id: InstallNewBlockInstructionId;
  resolvedInputGroups: Record<InputGroupId, ResolvedInputGroup>;
  resolvedInputShapes: Record<BlockShapeId, ResolvedInputOrRef>;
  resolvedOutputShapes: Record<BlockShapeId, ResolvedOutputShape>;
  resolvedOutputShapesToAttach: Record<BlockShapeId, ResolvedOutputShape>;
}
export type InstallNewBlockInstructionId = string;

/**
 * Per block. Metadata provides a granular install status for a pending block installation lifecycle.
 */
export interface InstallPendingMetadata {
  blockReference: BlockReference;
  granularInstallPendingStatus: GranularInstallPendingStatus;
}
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
export interface InstallShapeValidationError_apiNameMismatch {
  type: "apiNameMismatch";
  apiNameMismatch: StringMismatchError;
}

export interface InstallShapeValidationError_actionParameterShapeErrors {
  type: "actionParameterShapeErrors";
  actionParameterShapeErrors: Record<
    ActionParameterShapeId,
    BlockInstallActionParameterTypeShapeError
  >;
}

export interface InstallShapeValidationError_actionTypeParameterNotFound {
  type: "actionTypeParameterNotFound";
  actionTypeParameterNotFound: ActionParameterNotFound;
}

export interface InstallShapeValidationError_actionTypeParameterShapeErrorV2 {
  type: "actionTypeParameterShapeErrorV2";
  actionTypeParameterShapeErrorV2: BlockInstallActionTypeParameterShapeErrorV2;
}

export interface InstallShapeValidationError_actionTypeWithNestedParameters {
  type: "actionTypeWithNestedParameters";
  actionTypeWithNestedParameters: Void;
}

export interface InstallShapeValidationError_attachedOutputCreatedInAnotherInstallation {
  type: "attachedOutputCreatedInAnotherInstallation";
  attachedOutputCreatedInAnotherInstallation:
    AttachedOutputCreatedInAnotherInstallation;
}

export interface InstallShapeValidationError_attachedOutputShapeNotSpecified {
  type: "attachedOutputShapeNotSpecified";
  attachedOutputShapeNotSpecified: AttachedOutputShapeNotSpecified;
}

export interface InstallShapeValidationError_attachNotSupported {
  type: "attachNotSupported";
  attachNotSupported: Void;
}

export interface InstallShapeValidationError_authoringLibraryNotFound {
  type: "authoringLibraryNotFound";
  authoringLibraryNotFound: AuthoringLibraryNotFoundError;
}

export interface InstallShapeValidationError_blobsterResourceShapeError {
  type: "blobsterResourceShapeError";
  blobsterResourceShapeError: BlockInstallBlobsterResourceShapeError;
}

export interface InstallShapeValidationError_cipherChannelAlgorithmMismatch {
  type: "cipherChannelAlgorithmMismatch";
  cipherChannelAlgorithmMismatch: CipherChannelAlgorithmMismatch;
}

export interface InstallShapeValidationError_cipherLicenseAlgorithmMismatch {
  type: "cipherLicenseAlgorithmMismatch";
  cipherLicenseAlgorithmMismatch: CipherLicenseAlgorithmMismatch;
}

export interface InstallShapeValidationError_cipherLicenseMissingRequiredOperations {
  type: "cipherLicenseMissingRequiredOperations";
  cipherLicenseMissingRequiredOperations:
    CipherLicenseMissingRequiredOperations;
}

export interface InstallShapeValidationError_cipherLicenseMissingRequiredPermits {
  type: "cipherLicenseMissingRequiredPermits";
  cipherLicenseMissingRequiredPermits: CipherLicenseMissingRequiredPermits;
}

export interface InstallShapeValidationError_cipherLicenseTypeMismatch {
  type: "cipherLicenseTypeMismatch";
  cipherLicenseTypeMismatch: CipherLicenseTypeMismatch;
}

export interface InstallShapeValidationError_classificationConstraintsNotSatisfied {
  type: "classificationConstraintsNotSatisfied";
  classificationConstraintsNotSatisfied:
    BlockInstallLocationClassificationConstraintsNotSatisfied;
}

export interface InstallShapeValidationError_codeWorkspaceImageTypeMismatch {
  type: "codeWorkspaceImageTypeMismatch";
  codeWorkspaceImageTypeMismatch: CodeWorkspaceImageTypeMismatch;
}

export interface InstallShapeValidationError_credentialHasIncorrectSecretNames {
  type: "credentialHasIncorrectSecretNames";
  credentialHasIncorrectSecretNames: CredentialHasIncorrectSecretNames;
}

export interface InstallShapeValidationError_compassResourceInTrash {
  type: "compassResourceInTrash";
  compassResourceInTrash: BlockInstallCompassResourceInTrash;
}

export interface InstallShapeValidationError_compassResourceShapeError {
  type: "compassResourceShapeError";
  compassResourceShapeError: BlockInstallCompassResourceShapeError;
}

export interface InstallShapeValidationError_connectionNotFound {
  type: "connectionNotFound";
  connectionNotFound: BlockInstallConnectionNotFoundError;
}

export interface InstallShapeValidationError_connectionTypeMismatch {
  type: "connectionTypeMismatch";
  connectionTypeMismatch: BlockInstallMagritteConnectionTypeMismatchError;
}

export interface InstallShapeValidationError_connectionTypeUnsupported {
  type: "connectionTypeUnsupported";
  connectionTypeUnsupported: BlockInstallMagritteConnectionTypeUnsupported;
}

export interface InstallShapeValidationError_connectionReferenceNotResolved {
  type: "connectionReferenceNotResolved";
  connectionReferenceNotResolved:
    BlockInstallConnectionReferenceUnresolvableError;
}

export interface InstallShapeValidationError_connectionReferenceMismatch {
  type: "connectionReferenceMismatch";
  connectionReferenceMismatch: BlockInstallConnectionReferenceMismatchError;
}

export interface InstallShapeValidationError_columnNotFound {
  type: "columnNotFound";
  columnNotFound: BlockInstallColumnNotFound;
}

export interface InstallShapeValidationError_columnShapeError {
  type: "columnShapeError";
  columnShapeError: BlockInstallColumnShapeError;
}

export interface InstallShapeValidationError_defaultRequestedForShapeWithNoDefault {
  type: "defaultRequestedForShapeWithNoDefault";
  defaultRequestedForShapeWithNoDefault: DefaultRequestedForShapeWithNoDefault;
}

export interface InstallShapeValidationError_defaultResolutionFailedError {
  type: "defaultResolutionFailedError";
  defaultResolutionFailedError: DefaultResolutionFailedError;
}

export interface InstallShapeValidationError_eddieRemoteAndPeeredDestinationsConflictError {
  type: "eddieRemoteAndPeeredDestinationsConflictError";
  eddieRemoteAndPeeredDestinationsConflictError:
    EddieRemoteAndPeeredDestinationsConflictError;
}

export interface InstallShapeValidationError_expectedDefaultNotEqualToActualDefault {
  type: "expectedDefaultNotEqualToActualDefault";
  expectedDefaultNotEqualToActualDefault:
    ExpectedDefaultNotEqualToActualDefault;
}

export interface InstallShapeValidationError_externalRecommendationsUsedForInputShapeWithMandatoryPresets {
  type: "externalRecommendationsUsedForInputShapeWithMandatoryPresets";
  externalRecommendationsUsedForInputShapeWithMandatoryPresets:
    ExternalRecommendationUsedForInputShapeWithMandatoryPresets;
}

export interface InstallShapeValidationError_flinkProfileNotFound {
  type: "flinkProfileNotFound";
  flinkProfileNotFound: BlockInstallFlinkProfileNotFound;
}

export interface InstallShapeValidationError_folderInputNotSetToInstallationFolder {
  type: "folderInputNotSetToInstallationFolder";
  folderInputNotSetToInstallationFolder: FolderInputNotSetToInstallationFolder;
}

export interface InstallShapeValidationError_folderInputExternallyRecommended {
  type: "folderInputExternallyRecommended";
  folderInputExternallyRecommended: FolderInputExternallyRecommended;
}

export interface InstallShapeValidationError_folderInputRequiresInstallingIntoExistingFolder {
  type: "folderInputRequiresInstallingIntoExistingFolder";
  folderInputRequiresInstallingIntoExistingFolder:
    FolderInputRequiresInstallingIntoExistingFolder;
}

export interface InstallShapeValidationError_functionNotFound {
  type: "functionNotFound";
  functionNotFound: BlockInstallFunctionNotFound;
}

export interface InstallShapeValidationError_functionShapeError {
  type: "functionShapeError";
  functionShapeError: BlockInstallFunctionShapeError;
}

export interface InstallShapeValidationError_functionShapeErrorV2 {
  type: "functionShapeErrorV2";
  functionShapeErrorV2: BlockInstallFunctionShapeErrorV2;
}

export interface InstallShapeValidationError_genericDiffServiceValidationError {
  type: "genericDiffServiceValidationError";
  genericDiffServiceValidationError:
    GenericDiffBlockInstallServiceValidationError;
}

export interface InstallShapeValidationError_genericServiceValidationError {
  type: "genericServiceValidationError";
  genericServiceValidationError: GenericBlockInstallServiceValidationError;
}

export interface InstallShapeValidationError_incompatibleSemverBlocking {
  type: "incompatibleSemverBlocking";
  incompatibleSemverBlocking: IncompatibleSemverError;
}

export interface InstallShapeValidationError_incompatibleSemverNonBlocking {
  type: "incompatibleSemverNonBlocking";
  incompatibleSemverNonBlocking: IncompatibleSemverError;
}

export interface InstallShapeValidationError_inputActionTypeNotFound {
  type: "inputActionTypeNotFound";
  inputActionTypeNotFound: BlockInstallInputActionTypeNotFound;
}

export interface InstallShapeValidationError_inputShapeTypeMismatch {
  type: "inputShapeTypeMismatch";
  inputShapeTypeMismatch: BlockInstallInputShapeTypeMismatch;
}

export interface InstallShapeValidationError_inputShapeNotSpecified {
  type: "inputShapeNotSpecified";
  inputShapeNotSpecified: BlockInstallInputShapeNotSpecified;
}

export interface InstallShapeValidationError_installPrefixShapeError {
  type: "installPrefixShapeError";
  installPrefixShapeError: BlockInstallPrefixShapeError;
}

export interface InstallShapeValidationError_interfaceTypeNotFound {
  type: "interfaceTypeNotFound";
  interfaceTypeNotFound: BlockInstallInterfaceTypeNotFound;
}

export interface InstallShapeValidationError_interfaceTypeMissingProperties {
  type: "interfaceTypeMissingProperties";
  interfaceTypeMissingProperties: BlockInstallInterfaceTypeMissingProperties;
}

export interface InstallShapeValidationError_interfaceTypeMissingLinks {
  type: "interfaceTypeMissingLinks";
  interfaceTypeMissingLinks: BlockInstallInterfaceTypeMissingLinks;
}

export interface InstallShapeValidationError_interfaceTypeMissingExtendedInterfaces {
  type: "interfaceTypeMissingExtendedInterfaces";
  interfaceTypeMissingExtendedInterfaces:
    BlockInstallInterfaceTypeMissingExtendedInterfaces;
}

export interface InstallShapeValidationError_interfaceLinkTypeNotFound {
  type: "interfaceLinkTypeNotFound";
  interfaceLinkTypeNotFound: BlockInstallInterfaceLinkTypeNotFound;
}

export interface InstallShapeValidationError_interfaceLinkTypeShapeError {
  type: "interfaceLinkTypeShapeError";
  interfaceLinkTypeShapeError: BlockInstallInterfaceLinkTypeShapeError;
}

export interface InstallShapeValidationError_interfacePropertyTypeNotFound {
  type: "interfacePropertyTypeNotFound";
  interfacePropertyTypeNotFound: BlockInstallInterfacePropertyTypeNotFound;
}

export interface InstallShapeValidationError_interfacePropertyTypeShapeError {
  type: "interfacePropertyTypeShapeError";
  interfacePropertyTypeShapeError: BlockInstallInterfacePropertyTypeShapeError;
}

export interface InstallShapeValidationError_inputDownstreamOfOutputsInJobSpecGraph {
  type: "inputDownstreamOfOutputsInJobSpecGraph";
  inputDownstreamOfOutputsInJobSpecGraph:
    InputDownstreamOfOutputsInJobSpecGraph;
}

export interface InstallShapeValidationError_invalidCronExpression {
  type: "invalidCronExpression";
  invalidCronExpression: InvalidCronExpression;
}

export interface InstallShapeValidationError_invalidZoneId {
  type: "invalidZoneId";
  invalidZoneId: InvalidZoneId;
}

export interface InstallShapeValidationError_linkTypeNotFound {
  type: "linkTypeNotFound";
  linkTypeNotFound: BlockInstallLinkTypeNotFound;
}

export interface InstallShapeValidationError_linkTypeShapeError {
  type: "linkTypeShapeError";
  linkTypeShapeError: BlockInstallLinkTypeShapeError;
}

export interface InstallShapeValidationError_magritteSourceNotFound {
  type: "magritteSourceNotFound";
  magritteSourceNotFound: BlockInstallMagritteSourceNotFound;
}

export interface InstallShapeValidationError_magritteSourceTypeMismatch {
  type: "magritteSourceTypeMismatch";
  magritteSourceTypeMismatch: BlockInstallMagritteSourceTypeMismatch;
}

export interface InstallShapeValidationError_magritteSourceMissingRequiredSecrets {
  type: "magritteSourceMissingRequiredSecrets";
  magritteSourceMissingRequiredSecrets:
    BlockInstallMagritteSourceMissingRequiredSecrets;
}

export interface InstallShapeValidationError_magritteSourceMissingRequiredUsageRestrictions {
  type: "magritteSourceMissingRequiredUsageRestrictions";
  magritteSourceMissingRequiredUsageRestrictions:
    BlockInstallMagritteSourceMissingRequiredUsageRestrictions;
}

export interface InstallShapeValidationError_magritteSourceApiNameMismatch {
  type: "magritteSourceApiNameMismatch";
  magritteSourceApiNameMismatch: BlockInstallMagritteSourceApiNameMismatch;
}

export interface InstallShapeValidationError_mandatoryPresetNotUsed {
  type: "mandatoryPresetNotUsed";
  mandatoryPresetNotUsed: MandatoryPresetNotUsed;
}

export interface InstallShapeValidationError_mediaSetNotSupported {
  type: "mediaSetNotSupported";
  mediaSetNotSupported: BlockInstallMediaSetNotSupported;
}

export interface InstallShapeValidationError_mediaSetIncompatiblePathPolicy {
  type: "mediaSetIncompatiblePathPolicy";
  mediaSetIncompatiblePathPolicy: BlockInstallMediaSetIncompatiblePathPolicy;
}

export interface InstallShapeValidationError_mediaSetIncompatibleTransactionPolicy {
  type: "mediaSetIncompatibleTransactionPolicy";
  mediaSetIncompatibleTransactionPolicy:
    BlockInstallMediaSetIncompatibleTransactionPolicy;
}

export interface InstallShapeValidationError_mediaSetIncompatibleSchema {
  type: "mediaSetIncompatibleSchema";
  mediaSetIncompatibleSchema: BlockInstallMediaSetIncompatibleSchema;
}

export interface InstallShapeValidationError_mediaSetIncompatibleSchemaV2 {
  type: "mediaSetIncompatibleSchemaV2";
  mediaSetIncompatibleSchemaV2: BlockInstallMediaSetIncompatibleSchemaV2;
}

export interface InstallShapeValidationError_modelResourceShapeError {
  type: "modelResourceShapeError";
  modelResourceShapeError: BlockInstallModelShapeError;
}

export interface InstallShapeValidationError_notepadTemplateNotFound {
  type: "notepadTemplateNotFound";
  notepadTemplateNotFound: BlockInstallNotepadTemplateNotFound;
}

export interface InstallShapeValidationError_notepadTemplateParameterNotFound {
  type: "notepadTemplateParameterNotFound";
  notepadTemplateParameterNotFound:
    BlockInstallNotepadTemplateParameterNotFound;
}

export interface InstallShapeValidationError_notepadTemplateParameterShapeError {
  type: "notepadTemplateParameterShapeError";
  notepadTemplateParameterShapeError:
    BlockInstallNotepadTemplateParameterShapeError;
}

export interface InstallShapeValidationError_objectTypeForObjectViewNotFound {
  type: "objectTypeForObjectViewNotFound";
  objectTypeForObjectViewNotFound: BlockInstallObjectTypeForObjectViewNotFound;
}

export interface InstallShapeValidationError_objectTypeNotFound {
  type: "objectTypeNotFound";
  objectTypeNotFound: BlockInstallObjectTypeNotFound;
}

export interface InstallShapeValidationError_objectTypeShapeError {
  type: "objectTypeShapeError";
  objectTypeShapeError: BlockInstallObjectTypeShapeError;
}

export interface InstallShapeValidationError_omittedShapeForShapeWithPresets {
  type: "omittedShapeForShapeWithPresets";
  omittedShapeForShapeWithPresets: OmittedShapeForShapeWithPresets;
}

export interface InstallShapeValidationError_ontologyDatasourceMissingFromEntity {
  type: "ontologyDatasourceMissingFromEntity";
  ontologyDatasourceMissingFromEntity: OntologyDatasourceMissingFromEntity;
}

export interface InstallShapeValidationError_ontologyEntityNotInTargetOntology {
  type: "ontologyEntityNotInTargetOntology";
  ontologyEntityNotInTargetOntology: OntologyEntityNotInTargetOntology;
}

export interface InstallShapeValidationError_ontologyInstallLocationNotDefined {
  type: "ontologyInstallLocationNotDefined";
  ontologyInstallLocationNotDefined: OntologyInstallLocationNotDefined;
}

export interface InstallShapeValidationError_outputOwnedByAnotherInstallation {
  type: "outputOwnedByAnotherInstallation";
  outputOwnedByAnotherInstallation: OutputOwnedByAnotherInstallation;
}

export interface InstallShapeValidationError_outputShapeTypeMismatch {
  type: "outputShapeTypeMismatch";
  outputShapeTypeMismatch: BlockInstallOutputShapeTypeMismatch;
}

export interface InstallShapeValidationError_parameterTypeMismatch {
  type: "parameterTypeMismatch";
  parameterTypeMismatch: BlockInstallInputParameterTypeMismatch;
}

export interface InstallShapeValidationError_presetResolutionFailedError {
  type: "presetResolutionFailedError";
  presetResolutionFailedError: PresetResolutionFailedError;
}

export interface InstallShapeValidationError_propertyTypeNotFound {
  type: "propertyTypeNotFound";
  propertyTypeNotFound: BlockInstallPropertyTypeNotFound;
}

export interface InstallShapeValidationError_propertyTypeShapeError {
  type: "propertyTypeShapeError";
  propertyTypeShapeError: BlockInstallPropertyTypeShapeError;
}

export interface InstallShapeValidationError_sharedPropertyTypeNotFound {
  type: "sharedPropertyTypeNotFound";
  sharedPropertyTypeNotFound: BlockInstallSharedPropertyTypeNotFound;
}

export interface InstallShapeValidationError_sharedPropertyTypeShapeError {
  type: "sharedPropertyTypeShapeError";
  sharedPropertyTypeShapeError: BlockInstallSharedPropertyTypeShapeError;
}

export interface InstallShapeValidationError_sparkProfile {
  type: "sparkProfile";
  sparkProfile: SparkProfileConstraintViolated;
}

export interface InstallShapeValidationError_stringParameterMaxLengthExceeded {
  type: "stringParameterMaxLengthExceeded";
  stringParameterMaxLengthExceeded:
    BlockInstallStringParameterMaxLengthExceeded;
}

export interface InstallShapeValidationError_resolvedOutputShapeAttachedMultipleTimes {
  type: "resolvedOutputShapeAttachedMultipleTimes";
  resolvedOutputShapeAttachedMultipleTimes:
    ResolvedOutputShapeAttachedMultipleTimes;
}

export interface InstallShapeValidationError_resourceNotFound {
  type: "resourceNotFound";
  resourceNotFound: BlockInstallResourceNotFound;
}

export interface InstallShapeValidationError_resourceIsNotChildOfTargetCompassFolder {
  type: "resourceIsNotChildOfTargetCompassFolder";
  resourceIsNotChildOfTargetCompassFolder:
    BlockInstallResourceNotChildOfTargetCompassFolder;
}

export interface InstallShapeValidationError_markingNotFound {
  type: "markingNotFound";
  markingNotFound: MarkingNotFound;
}

export interface InstallShapeValidationError_markingTypeNotValid {
  type: "markingTypeNotValid";
  markingTypeNotValid: MarkingTypeNotValid;
}

export interface InstallShapeValidationError_markingTypeNotValidV2 {
  type: "markingTypeNotValidV2";
  markingTypeNotValidV2: MarkingTypeNotValidV2;
}

export interface InstallShapeValidationError_markingSizeConstraintsNotSatisfied {
  type: "markingSizeConstraintsNotSatisfied";
  markingSizeConstraintsNotSatisfied: MarkingSizeConstraintsNotSatisfied;
}

export interface InstallShapeValidationError_scheduleShapeInvalid {
  type: "scheduleShapeInvalid";
  scheduleShapeInvalid: ScheduleShapeInvalid;
}

export interface InstallShapeValidationError_tabularDatasourceShapeError {
  type: "tabularDatasourceShapeError";
  tabularDatasourceShapeError: BlockInstallTabularDatasourceShapeError;
}

export interface InstallShapeValidationError_typedBlockInstallServiceValidationError {
  type: "typedBlockInstallServiceValidationError";
  typedBlockInstallServiceValidationError:
    TypedBlockInstallServiceValidationError;
}

export interface InstallShapeValidationError_valueTypeShapeValidationError {
  type: "valueTypeShapeValidationError";
  valueTypeShapeValidationError: ValueTypeShapeValidationError;
}

export interface InstallShapeValidationError_versionMismatch {
  type: "versionMismatch";
  versionMismatch: StringMismatchError;
}
export type InstallShapeValidationError =
  | InstallShapeValidationError_apiNameMismatch
  | InstallShapeValidationError_actionParameterShapeErrors
  | InstallShapeValidationError_actionTypeParameterNotFound
  | InstallShapeValidationError_actionTypeParameterShapeErrorV2
  | InstallShapeValidationError_actionTypeWithNestedParameters
  | InstallShapeValidationError_attachedOutputCreatedInAnotherInstallation
  | InstallShapeValidationError_attachedOutputShapeNotSpecified
  | InstallShapeValidationError_attachNotSupported
  | InstallShapeValidationError_authoringLibraryNotFound
  | InstallShapeValidationError_blobsterResourceShapeError
  | InstallShapeValidationError_cipherChannelAlgorithmMismatch
  | InstallShapeValidationError_cipherLicenseAlgorithmMismatch
  | InstallShapeValidationError_cipherLicenseMissingRequiredOperations
  | InstallShapeValidationError_cipherLicenseMissingRequiredPermits
  | InstallShapeValidationError_cipherLicenseTypeMismatch
  | InstallShapeValidationError_classificationConstraintsNotSatisfied
  | InstallShapeValidationError_codeWorkspaceImageTypeMismatch
  | InstallShapeValidationError_credentialHasIncorrectSecretNames
  | InstallShapeValidationError_compassResourceInTrash
  | InstallShapeValidationError_compassResourceShapeError
  | InstallShapeValidationError_connectionNotFound
  | InstallShapeValidationError_connectionTypeMismatch
  | InstallShapeValidationError_connectionTypeUnsupported
  | InstallShapeValidationError_connectionReferenceNotResolved
  | InstallShapeValidationError_connectionReferenceMismatch
  | InstallShapeValidationError_columnNotFound
  | InstallShapeValidationError_columnShapeError
  | InstallShapeValidationError_defaultRequestedForShapeWithNoDefault
  | InstallShapeValidationError_defaultResolutionFailedError
  | InstallShapeValidationError_eddieRemoteAndPeeredDestinationsConflictError
  | InstallShapeValidationError_expectedDefaultNotEqualToActualDefault
  | InstallShapeValidationError_externalRecommendationsUsedForInputShapeWithMandatoryPresets
  | InstallShapeValidationError_flinkProfileNotFound
  | InstallShapeValidationError_folderInputNotSetToInstallationFolder
  | InstallShapeValidationError_folderInputExternallyRecommended
  | InstallShapeValidationError_folderInputRequiresInstallingIntoExistingFolder
  | InstallShapeValidationError_functionNotFound
  | InstallShapeValidationError_functionShapeError
  | InstallShapeValidationError_functionShapeErrorV2
  | InstallShapeValidationError_genericDiffServiceValidationError
  | InstallShapeValidationError_genericServiceValidationError
  | InstallShapeValidationError_incompatibleSemverBlocking
  | InstallShapeValidationError_incompatibleSemverNonBlocking
  | InstallShapeValidationError_inputActionTypeNotFound
  | InstallShapeValidationError_inputShapeTypeMismatch
  | InstallShapeValidationError_inputShapeNotSpecified
  | InstallShapeValidationError_installPrefixShapeError
  | InstallShapeValidationError_interfaceTypeNotFound
  | InstallShapeValidationError_interfaceTypeMissingProperties
  | InstallShapeValidationError_interfaceTypeMissingLinks
  | InstallShapeValidationError_interfaceTypeMissingExtendedInterfaces
  | InstallShapeValidationError_interfaceLinkTypeNotFound
  | InstallShapeValidationError_interfaceLinkTypeShapeError
  | InstallShapeValidationError_interfacePropertyTypeNotFound
  | InstallShapeValidationError_interfacePropertyTypeShapeError
  | InstallShapeValidationError_inputDownstreamOfOutputsInJobSpecGraph
  | InstallShapeValidationError_invalidCronExpression
  | InstallShapeValidationError_invalidZoneId
  | InstallShapeValidationError_linkTypeNotFound
  | InstallShapeValidationError_linkTypeShapeError
  | InstallShapeValidationError_magritteSourceNotFound
  | InstallShapeValidationError_magritteSourceTypeMismatch
  | InstallShapeValidationError_magritteSourceMissingRequiredSecrets
  | InstallShapeValidationError_magritteSourceMissingRequiredUsageRestrictions
  | InstallShapeValidationError_magritteSourceApiNameMismatch
  | InstallShapeValidationError_mandatoryPresetNotUsed
  | InstallShapeValidationError_mediaSetNotSupported
  | InstallShapeValidationError_mediaSetIncompatiblePathPolicy
  | InstallShapeValidationError_mediaSetIncompatibleTransactionPolicy
  | InstallShapeValidationError_mediaSetIncompatibleSchema
  | InstallShapeValidationError_mediaSetIncompatibleSchemaV2
  | InstallShapeValidationError_modelResourceShapeError
  | InstallShapeValidationError_notepadTemplateNotFound
  | InstallShapeValidationError_notepadTemplateParameterNotFound
  | InstallShapeValidationError_notepadTemplateParameterShapeError
  | InstallShapeValidationError_objectTypeForObjectViewNotFound
  | InstallShapeValidationError_objectTypeNotFound
  | InstallShapeValidationError_objectTypeShapeError
  | InstallShapeValidationError_omittedShapeForShapeWithPresets
  | InstallShapeValidationError_ontologyDatasourceMissingFromEntity
  | InstallShapeValidationError_ontologyEntityNotInTargetOntology
  | InstallShapeValidationError_ontologyInstallLocationNotDefined
  | InstallShapeValidationError_outputOwnedByAnotherInstallation
  | InstallShapeValidationError_outputShapeTypeMismatch
  | InstallShapeValidationError_parameterTypeMismatch
  | InstallShapeValidationError_presetResolutionFailedError
  | InstallShapeValidationError_propertyTypeNotFound
  | InstallShapeValidationError_propertyTypeShapeError
  | InstallShapeValidationError_sharedPropertyTypeNotFound
  | InstallShapeValidationError_sharedPropertyTypeShapeError
  | InstallShapeValidationError_sparkProfile
  | InstallShapeValidationError_stringParameterMaxLengthExceeded
  | InstallShapeValidationError_resolvedOutputShapeAttachedMultipleTimes
  | InstallShapeValidationError_resourceNotFound
  | InstallShapeValidationError_resourceIsNotChildOfTargetCompassFolder
  | InstallShapeValidationError_markingNotFound
  | InstallShapeValidationError_markingTypeNotValid
  | InstallShapeValidationError_markingTypeNotValidV2
  | InstallShapeValidationError_markingSizeConstraintsNotSatisfied
  | InstallShapeValidationError_scheduleShapeInvalid
  | InstallShapeValidationError_tabularDatasourceShapeError
  | InstallShapeValidationError_typedBlockInstallServiceValidationError
  | InstallShapeValidationError_valueTypeShapeValidationError
  | InstallShapeValidationError_versionMismatch;

export interface InstallShapeValidationErrors {
  errors: Record<BlockShapeId, Array<InstallShapeValidationError>>;
}
export interface InstallShapeValidationErrorV2 {
  blockSetReference: BlockSetReference;
  blockSetShapeId: BlockSetShapeId;
  error: InstallBlockSetShapeValidationError;
  severity: ErrorSeverity;
}
export interface InstallValidationError {
  blockReference: BlockReference;
  error: InstallValidationErrorDetail;
}
export interface InstallValidationErrorDetail_associatedWithMultipleBlockSetInstallations {
  type: "associatedWithMultipleBlockSetInstallations";
  associatedWithMultipleBlockSetInstallations:
    AssociatedWithMultipleBlockSetInstallations;
}

export interface InstallValidationErrorDetail_attachResourceValidationErrors {
  type: "attachResourceValidationErrors";
  attachResourceValidationErrors: AttachResourceValidationErrors;
}

export interface InstallValidationErrorDetail_blockVersionIdDoesNotExist {
  type: "blockVersionIdDoesNotExist";
  blockVersionIdDoesNotExist: BlockVersionIdDoesNotExist;
}

export interface InstallValidationErrorDetail_cannotUpgradeToDifferentBlockId {
  type: "cannotUpgradeToDifferentBlockId";
  cannotUpgradeToDifferentBlockId: CannotUpgradeToDifferentBlockId;
}

export interface InstallValidationErrorDetail_externalServiceError {
  type: "externalServiceError";
  externalServiceError: ExternalServiceError;
}

export interface InstallValidationErrorDetail_inputGroupValidationErrors {
  type: "inputGroupValidationErrors";
  inputGroupValidationErrors: InputGroupValidationErrors;
}

export interface InstallValidationErrorDetail_inputShapeNotSpecified {
  type: "inputShapeNotSpecified";
  inputShapeNotSpecified: InputShapeNotSpecified;
}

export interface InstallValidationErrorDetail_integrationValidationError {
  type: "integrationValidationError";
  integrationValidationError: TypedBlockInstallServiceValidationError;
}

export interface InstallValidationErrorDetail_invalidBlockInstallationReference {
  type: "invalidBlockInstallationReference";
  invalidBlockInstallationReference: InvalidBlockInstallationReference;
}

export interface InstallValidationErrorDetail_invalidNewInstallReference {
  type: "invalidNewInstallReference";
  invalidNewInstallReference: InvalidNewInstallReference;
}

export interface InstallValidationErrorDetail_multipleInstallInstructionsWithSameKey {
  type: "multipleInstallInstructionsWithSameKey";
  multipleInstallInstructionsWithSameKey: Void;
}

export interface InstallValidationErrorDetail_notAssociatedWithAnyBlockSetInstallation {
  type: "notAssociatedWithAnyBlockSetInstallation";
  notAssociatedWithAnyBlockSetInstallation: Void;
}

export interface InstallValidationErrorDetail_ontologyInstallLocationNotDefined {
  type: "ontologyInstallLocationNotDefined";
  ontologyInstallLocationNotDefined: OntologyInstallLocationNotDefined;
}

export interface InstallValidationErrorDetail_outputShapeOverrideNotSupported {
  type: "outputShapeOverrideNotSupported";
  outputShapeOverrideNotSupported: OutputShapeOverrideNotSupported;
}

export interface InstallValidationErrorDetail_resourceUsedAsBothInputAndOutput {
  type: "resourceUsedAsBothInputAndOutput";
  resourceUsedAsBothInputAndOutput: ResourceUsedAsBothInputAndOutput;
}

export interface InstallValidationErrorDetail_shapeDoesNotExistOnBlock {
  type: "shapeDoesNotExistOnBlock";
  shapeDoesNotExistOnBlock: ShapeDoesNotExistOnBlock;
}

export interface InstallValidationErrorDetail_shapeValidationErrors {
  type: "shapeValidationErrors";
  shapeValidationErrors: InstallShapeValidationErrors;
}

export interface InstallValidationErrorDetail_newInstallationOfASingletonBlockSetThatIsAlreadyInstalled {
  type: "newInstallationOfASingletonBlockSetThatIsAlreadyInstalled";
  newInstallationOfASingletonBlockSetThatIsAlreadyInstalled:
    NewInstallationOfSingletonBlockSetThatIsAlreadyInstalled;
}

export interface InstallValidationErrorDetail_upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes {
  type: "upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes";
  upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes:
    UpgradeOfSingletonBlockSetThatIsInstalledMultipleTimes;
}
export type InstallValidationErrorDetail =
  | InstallValidationErrorDetail_associatedWithMultipleBlockSetInstallations
  | InstallValidationErrorDetail_attachResourceValidationErrors
  | InstallValidationErrorDetail_blockVersionIdDoesNotExist
  | InstallValidationErrorDetail_cannotUpgradeToDifferentBlockId
  | InstallValidationErrorDetail_externalServiceError
  | InstallValidationErrorDetail_inputGroupValidationErrors
  | InstallValidationErrorDetail_inputShapeNotSpecified
  | InstallValidationErrorDetail_integrationValidationError
  | InstallValidationErrorDetail_invalidBlockInstallationReference
  | InstallValidationErrorDetail_invalidNewInstallReference
  | InstallValidationErrorDetail_multipleInstallInstructionsWithSameKey
  | InstallValidationErrorDetail_notAssociatedWithAnyBlockSetInstallation
  | InstallValidationErrorDetail_ontologyInstallLocationNotDefined
  | InstallValidationErrorDetail_outputShapeOverrideNotSupported
  | InstallValidationErrorDetail_resourceUsedAsBothInputAndOutput
  | InstallValidationErrorDetail_shapeDoesNotExistOnBlock
  | InstallValidationErrorDetail_shapeValidationErrors
  | InstallValidationErrorDetail_newInstallationOfASingletonBlockSetThatIsAlreadyInstalled
  | InstallValidationErrorDetail_upgradeOfASingletonBlockSetThatIsInstalledMultipleTimes;

export interface InsufficientPermissionsError {
  error: InsufficientPermissionsErrorUnion;
}
export interface InsufficientPermissionsErrorUnion_missingOperation {
  type: "missingOperation";
  missingOperation: MissingOperationError;
}

export interface InsufficientPermissionsErrorUnion_notAuthorizedToDeclassify {
  type: "notAuthorizedToDeclassify";
  notAuthorizedToDeclassify: NotAuthorizedToUseMarkingsError;
}

export interface InsufficientPermissionsErrorUnion_notAuthorizedToUseMarkings {
  type: "notAuthorizedToUseMarkings";
  notAuthorizedToUseMarkings: NotAuthorizedToDeclassifyError;
}

export interface InsufficientPermissionsErrorUnion_notAuthorizedToDeclassifyV2 {
  type: "notAuthorizedToDeclassifyV2";
  notAuthorizedToDeclassifyV2: NotAuthorizedToDeclassifyError;
}

export interface InsufficientPermissionsErrorUnion_notAuthorizedToUseMarkingsV2 {
  type: "notAuthorizedToUseMarkingsV2";
  notAuthorizedToUseMarkingsV2: NotAuthorizedToUseMarkingsErrorV2;
}

export interface InsufficientPermissionsErrorUnion_generic {
  type: "generic";
  generic: GenericCreateBlockVersionError;
}
export type InsufficientPermissionsErrorUnion =
  | InsufficientPermissionsErrorUnion_missingOperation
  | InsufficientPermissionsErrorUnion_notAuthorizedToDeclassify
  | InsufficientPermissionsErrorUnion_notAuthorizedToUseMarkings
  | InsufficientPermissionsErrorUnion_notAuthorizedToDeclassifyV2
  | InsufficientPermissionsErrorUnion_notAuthorizedToUseMarkingsV2
  | InsufficientPermissionsErrorUnion_generic;

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
export type IntegerValue = number;
export type IntegerVersion = number;
export interface IntegrationCreateBlockVersionError_unknownError {
  type: "unknownError";
  unknownError: UnknownMarketplaceCreateBlockVersionError;
}
/**
 * This is an error that is used as a placeholder for integrations that haven't defined their own error union
 * types yet.
 */
export type IntegrationCreateBlockVersionError =
  IntegrationCreateBlockVersionError_unknownError;

export type InterfaceLinkTypeApiName = string;
export type InterfaceLinkTypeCardinality = "SINGLE" | "MANY";
export interface InterfaceLinkTypeCardinalityMismatch {
  actual: InterfaceLinkTypeCardinality;
  expected: InterfaceLinkTypeCardinality;
}
export interface InterfaceLinkTypeIdentifier {
  interfaceLinkTypeKey: InterfaceLinkTypeRid;
  interfaceTypeIdentifier: InterfaceTypeIdentifier;
}
export interface InterfaceLinkTypeInputShape {
  about: LocalizedTitleAndDescription;
  cardinality: InterfaceLinkTypeCardinality;
  interfaceType: InterfaceTypeReference;
  linkedEntityType: LinkedEntityTypeReference;
  required: boolean;
}
export interface InterfaceLinkTypeNotFound {
  interfaceLinkTypeRid?: InterfaceLinkTypeRid | null | undefined;
}
export interface InterfaceLinkTypeOutputShape {
  about: LocalizedTitleAndDescription;
  cardinality: InterfaceLinkTypeCardinality;
  interfaceType: InterfaceTypeReference;
  linkedEntityType: LinkedEntityTypeReference;
  required: boolean;
}
export type InterfaceLinkTypeReference = BlockInternalId;
export interface InterfaceLinkTypeRequiredMismatch {
  actual: boolean;
  expected: boolean;
}
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
/**
 * When supplying an interface property, which is backed by an SPT, as input, that interface property has to
 * be backed by the same SPT that is used to fulfill the input shape created for the SPT itself.
 */
export interface InterfacePropertySharedPropertyTypeReferenceMismatch {
  expectedSharedPropertyTypeReference?:
    | SharedPropertyTypeReference
    | null
    | undefined;
  expectedSharedPropertyTypeRid?: SharedPropertyTypeRid | null | undefined;
  inputSharedPropertyTypeReference?:
    | SharedPropertyTypeReference
    | null
    | undefined;
  inputSharedPropertyTypeRid?: SharedPropertyTypeRid | null | undefined;
}
export type InterfacePropertyTypeApiName = string;
export interface InterfacePropertyTypeIdentifier {
  interfacePropertyTypeKey: InterfacePropertyTypeRid;
  interfaceTypeIdentifier: InterfaceTypeIdentifier;
}
export interface InterfacePropertyTypeInputShape {
  about: LocalizedTitleAndDescription;
  interfaceType: InterfaceTypeReference;
  requireImplementation: boolean;
  sharedPropertyType?: SharedPropertyTypeReference | null | undefined;
  type: AllowedObjectPropertyType;
}
export interface InterfacePropertyTypeNotFound {
  interfacePropertyTypeRid?: InterfacePropertyTypeRid | null | undefined;
}
export interface InterfacePropertyTypeOutputShape {
  about: LocalizedTitleAndDescription;
  interfaceType: InterfaceTypeReference;
  requireImplementation: boolean;
  sharedPropertyType?: SharedPropertyTypeReference | null | undefined;
  type: ObjectPropertyType;
}
export type InterfacePropertyTypeReference = BlockInternalId;
export interface InterfacePropertyTypeRequireImplementationMismatch {
  actual: boolean;
  expected: boolean;
}
export type InterfacePropertyTypeRid = string;
export interface InterfaceReferenceListType {
  interfaceTypeRid: InterfaceTypeReference;
}
export interface InterfaceReferenceType {
  interfaceTypeRid: InterfaceTypeReference;
}
export type InterfaceTypeApiName = string;
export interface InterfaceTypeIdentifier_rid {
  type: "rid";
  rid: InterfaceTypeRid;
}
export type InterfaceTypeIdentifier = InterfaceTypeIdentifier_rid;

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

/**
 * An InterfaceTypeRid was referenced for which the shape id could not be resolved. This is typical if the
 * referenced InterfaceType has not been included as an input/output in the block.
 */
export interface InterfaceTypeReferenceUnresolvable {
  actual: InterfaceTypeRid;
  expected: InterfaceTypeReference;
}
export type InterfaceTypeRid = string;

/**
 * The Shape Id that was resolved for the LinkType does not match the shape id expected.
 */
export interface IntermediaryLinkLinkTypeReferenceMismatch {
  mismatchedLinkTypeReference: ResolvedLinkTypeReferenceMismatch;
  side: IntermediaryLinkLinkTypeSide;
}
/**
 * A LinkTypeRid was referenced for which the shape id could not be resolved. This is typical if the
 * referenced LinkType has not been included as an input/output in the block.
 */
export interface IntermediaryLinkLinkTypeReferenceUnresolvable {
  side: IntermediaryLinkLinkTypeSide;
  unresolvableLinkReference: LinkTypeReferenceUnresolvable;
}
export type IntermediaryLinkLinkTypeSide = "SIDE_A" | "SIDE_B";

/**
 * The Shape Id that was resolved for the ObjectType does not match the shape id expected.
 */
export interface IntermediaryLinkObjectTypeMismatch {
  mismatchedObjectTypeReference: ResolvedObjectTypeReferenceMismatch;
  side: IntermediaryLinkObjectTypeSide;
}
/**
 * An ObjectTypeRid was referenced for which the shape id could not be resolved. This is typical if the
 * referenced ObjectType has not been included as an input/output in the block.
 */
export interface IntermediaryLinkObjectTypeReferenceUnresolvable {
  side: IntermediaryLinkObjectTypeSide;
  unresolvableObjectReference: ObjectTypeReferenceUnresolvable;
}
export type IntermediaryLinkObjectTypeSide =
  | "SIDE_A"
  | "SIDE_B"
  | "INTERMEDIARY";
export interface IntermediaryLinkTypeApiNames {
  objectTypeAToBApiName: ObjectTypeFieldApiName;
  objectTypeBToAApiName: ObjectTypeFieldApiName;
}
export type InternalRecommendations = Record<
  BlockRecommendationId,
  BlockRecommendation
>;
export type InternalShapeId = string;
export interface InvalidBlockInstallationReference {
  blockInstallationRid: BlockInstallationRid;
}
/**
 * The `AssociatedBlockSetInstallation` is referencing a block install which doesn't exist in the
 * set of install instructions provided in the request.
 */
export interface InvalidBlockReference {
  blockReference: BlockReference;
  blockSetBlockInstanceId: BlockSetBlockInstanceId;
}
/**
 * The cron expression is not valid.
 */
export interface InvalidCronExpression {
  reason: string;
}
export interface InvalidInstallationProject {
  projectRid: CompassProjectRid;
  reasons: Array<InvalidInstallationProjectReason>;
}
export type InvalidInstallationProjectReason =
  | "CANNOT_SEE_CONTENTS"
  | "DOES_NOT_EXIST"
  | "HAS_AUTOSAVE_RESOURCES"
  | "HAS_TRASHED_RESOURCES"
  | "IS_NOT_EMPTY"
  | "IS_SERVICE_PROJECT"
  | "IS_TRASHED"
  | "IS_USER_FOLDER"
  | "NOT_IN_EXPECTED_NAMESPACE"
  | "USED_FOR_MULTIPLE_INSTALLATIONS";

/**
 * Corresponds to the ValidateInstallBlockSetsResponse, but is guaranteed to contain at least 1 error across
 * all fields
 */
export type InvalidInstallBlockSetsRequest = ValidateInstallBlockSetsResponse;
export interface InvalidInstallBlocksRequest {
  blockSetValidationErrors: Array<BlockSetInstallValidationError>;
  validationErrors: Array<InstallValidationError>;
}
export interface InvalidNewBlockSetInstallationReferences {
  invalidReferences: Array<NewBlockSetInstallationId>;
  provided: Array<NewBlockSetInstallationId>;
}
export interface InvalidNewInstallReference {
  newInstallId: InstallNewBlockInstructionId;
}
/**
 * The zone id is not valid.
 */
export interface InvalidZoneId {
  reason: string;
}
export interface IssueRecallRequest {
  blockSetVersions: Array<BlockSetVersionId>;
  message: string;
  rollOffStrategy: RollOffStrategy;
}
export interface IssueRecallResponse {
  recallId: RecallId;
}
export type JobRid = string;
export interface JobSettings {
  buildSettings?: BuildSettings | null | undefined;
}
/**
 * Used when the repository delivers transforms such as transforms-python or transforms-java
 */
export interface JobSpecEnvironmentIdentificationMethod {
  jobSpecRids: Array<string>;
}
export interface JobSpecEnvironmentIdentificationMethodV2 {
  jobSpecRid: JobSpecRid;
}
export type JobSpecRid = string;
export interface JobSubmissionFailure_conflictingJobs {
  type: "conflictingJobs";
  conflictingJobs: Record<BlockSetInstallationRid, InstallBlocksJobRid>;
}
export type JobSubmissionFailure = JobSubmissionFailure_conflictingJobs;

export interface JobSubmittedResult {
  jobRid: BlockSetInstallationJobRid;
  newBlockSetInstallationRids: Record<
    NewBlockSetInstallationId,
    BlockSetInstallationRid
  >;
}
export interface Jpeg2000Format {
}
export interface JpgFormat {
}
export interface LanguageModelIdentifier {
  rid: LanguageModelRid;
  ridForAttribution?: string | null | undefined;
}
export type LanguageModelRid = string;
export interface LanguageModelShape {
  about: LocalizedTitleAndDescription;
}
export type LastUpdatedTimestamp = string;

/**
 * Constraint failure for when the last automatic upgrade failed. Requires manual ack to clear
 */
export interface LastUpgradeFailedConstraintFailure {
  error: InstallBlocksStatusError;
}
/**
 * Placeholder identifier for shapes that have not implemented support for shape generation yet. Only here for
 * legacy purposes. DO NOT USE WHEN ADDING A NEW SHAPE.
 */
export interface LegacyNotImplementedIdentifier {
}
export interface LibraryLocatorEnvironmentIdentificationMethod_condaLocator {
  type: "condaLocator";
  condaLocator: CondaLocator;
}

export interface LibraryLocatorEnvironmentIdentificationMethod_condaLocatorV2 {
  type: "condaLocatorV2";
  condaLocatorV2: CondaLocatorV2;
}
/**
 * Used when the repository delivers a library. Integrations for this block type need to know the library path
 * in Artifacts in order to download the library for packaging.
 */
export type LibraryLocatorEnvironmentIdentificationMethod =
  | LibraryLocatorEnvironmentIdentificationMethod_condaLocator
  | LibraryLocatorEnvironmentIdentificationMethod_condaLocatorV2;

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

/**
 * Shape id that was resolved for the linked-to InterfaceType does not match the shape id expected.
 */
export interface LinkedInterfaceTypeReferenceMismatch {
  actual: InterfaceTypeReference;
  expected: InterfaceTypeReference;
}
/**
 * An InterfaceTypeRid was linked-to for which the shape id could not be resolved. This is typical if the
 * referenced InterfaceType has not been included as an input/output in the block.
 */
export interface LinkedInterfaceTypeReferenceUnresolvable {
  actual: InterfaceTypeRid;
  expected: InterfaceTypeReference;
}
/**
 * Shape id that was resolved for the linked-to ObjectType does not match the shape id expected.
 */
export interface LinkedObjectTypeReferenceMismatch {
  actual: ObjectTypeReference;
  expected: ObjectTypeReference;
}
/**
 * An ObjectTypeId was linked-to for which the shape id could not be resolved. This is typical if the
 * referenced ObjectType has not been included as an input/output in the block.
 */
export interface LinkedObjectTypeReferenceUnresolvable {
  actual: ObjectTypeId;
  expected: ObjectTypeReference;
}
/**
 * A list of additional resources, such as YouTube videos, Palantir documentation, or other external links.
 * These resources supplement the main documentation.
 */
export type Links = Array<Url>;
export interface LinkTypeApiNames_oneToMany {
  type: "oneToMany";
  oneToMany: OneToManyLinkTypeApiNames;
}

export interface LinkTypeApiNames_manyToMany {
  type: "manyToMany";
  manyToMany: ManyToManyLinkTypeApiNames;
}

export interface LinkTypeApiNames_intermediary {
  type: "intermediary";
  intermediary: IntermediaryLinkTypeApiNames;
}
export type LinkTypeApiNames =
  | LinkTypeApiNames_oneToMany
  | LinkTypeApiNames_manyToMany
  | LinkTypeApiNames_intermediary;

export type LinkTypeId = string;
export interface LinkTypeIdentifier_rid {
  type: "rid";
  rid: LinkTypeRid;
}

export interface LinkTypeIdentifier_id {
  type: "id";
  id: LinkTypeId;
}
export type LinkTypeIdentifier = LinkTypeIdentifier_rid | LinkTypeIdentifier_id;

export interface LinkTypeIdResolver {
  linkTypeIdWithoutOntologyPrefix: string;
}
export interface LinkTypeInputBackendChangedImplication {
  backendA: any;
  backendB: any;
}
/**
 * Link type input shape has changed such that it now requires support of edits.
 */
export interface LinkTypeInputRequiringSupportOfEditsImplication {
  editsSupportA: any;
  editsSupportB: any;
}
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
export interface LinkTypeIntermediaryShapeDisplayMetadata {
  about: LocalizedTitleAndDescription;
  objectTypeAToBLinkMetadata: LocalizedTitleAndDescription;
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
export interface LinkTypeManyToManyShapeDisplayMetadata {
  about: LocalizedTitleAndDescription;
  objectTypeAToBLinkMetadata: LocalizedTitleAndDescription;
  objectTypeBToALinkMetadata: LocalizedTitleAndDescription;
}
/**
 * Link type output shape has changed such that it now doesn't support edits anymore.
 */
export interface LinkTypeNoLongerSupportingEditsImplication {
  editsSupportA: any;
  editsSupportB: any;
}
export interface LinkTypeNotFound {
  linkTypeId?: LinkTypeId | null | undefined;
  linkTypeRid?: LinkTypeRid | null | undefined;
}
export interface LinkTypeOneToManyShape {
  about: LocalizedTitleAndDescription;
  cardinalityHint?: OneToManyLinkCardinalityHint | null | undefined;
  manyToOneLinkMetadata: LocalizedTitleAndDescription;
  objectTypeShapeIdManySide: ObjectTypeReference;
  objectTypeShapeIdOneSide: ObjectTypeReference;
  oneToManyLinkMetadata: LocalizedTitleAndDescription;
}
export interface LinkTypeOneToManyShapeDisplayMetadata {
  about: LocalizedTitleAndDescription;
  manyToOneLinkMetadata: LocalizedTitleAndDescription;
  oneToManyLinkMetadata: LocalizedTitleAndDescription;
}
export interface LinkTypeOutputBackendChangedImplication {
  backendA: any;
  backendB: any;
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

/**
 * A LinkTypeRid was referenced for which the shape id could not be resolved. This is typical if the
 * referenced LinkType has not been included as an input/output in the block.
 */
export interface LinkTypeReferenceUnresolvable {
  actual: LinkTypeRid;
  expected: LinkTypeReference;
}
export type LinkTypeRid = string;
export interface LinkTypeShapeDisplayMetadata_oneToMany {
  type: "oneToMany";
  oneToMany: LinkTypeOneToManyShapeDisplayMetadata;
}

export interface LinkTypeShapeDisplayMetadata_manyToMany {
  type: "manyToMany";
  manyToMany: LinkTypeManyToManyShapeDisplayMetadata;
}

export interface LinkTypeShapeDisplayMetadata_intermediary {
  type: "intermediary";
  intermediary: LinkTypeIntermediaryShapeDisplayMetadata;
}
export type LinkTypeShapeDisplayMetadata =
  | LinkTypeShapeDisplayMetadata_oneToMany
  | LinkTypeShapeDisplayMetadata_manyToMany
  | LinkTypeShapeDisplayMetadata_intermediary;

export type LinkTypeType = "ONE_TO_MANY" | "MANY_TO_MANY" | "INTERMEDIARY";

/**
 * An unexpected LinkType was provided for an input that should be another kind of Link Type as
 * per the shape definition.
 */
export interface LinkTypeUnexpected {
  actual: LinkTypeType;
  expected: LinkTypeType;
}
/**
 * An unknown type of LinkType definition was encountered. This indicates we might have run into a new
 * kind of LinkType that isn't yet supported in Marketplace.
 */
export interface LinkTypeUnknown {
  unknownType: string;
}
export interface ListAvailableInstallLocationsResponse {
  namespaces: Array<NamespaceRid>;
  ontologies: Array<OntologyRid>;
}
export interface ListBlockInstallationJobsResponseEntry {
  rid: InstallBlocksJobRid;
}
export interface ListBlockInstallationJobsResponseV2 {
  jobs: Array<ListBlockInstallationJobsResponseEntry>;
  nextPageToken?: ListBlockInstallationJobsV2PageToken | null | undefined;
}
export type ListBlockInstallationJobsV2PageToken = string;
export type ListBlockSetInstallationJobsPageToken = string;
export interface ListBlockSetInstallationJobsResponse {
  jobs: Array<BlockSetInstallationJobMetadata>;
  nextPageToken?: ListBlockSetInstallationJobsPageToken | null | undefined;
}
export type ListBlockSetInstallationsMetadataPageToken = string;
export interface ListBlockSetInstallationsMetadataResponse {
  metadata: Array<BlockSetInstallationMetadata>;
  nextPageToken?: ListBlockSetInstallationsMetadataPageToken | null | undefined;
}
export interface ListBlockSetInstallationsResponseV2 {
  blockSets: Array<BlockSetInstallationV2>;
  nextPageToken?: ListBlockSetInstallationsV2PageToken | null | undefined;
}
export type ListBlockSetInstallationsV2PageToken = string;
export interface ListBlockSetsPageToken {
  creationTimestamp: string;
  id: BlockSetId;
}
export interface ListBlockSetsResponse {
  blockSets: Array<ListBlockSetsResponseEntry>;
  nextPageToken?: ListBlockSetsPageToken | null | undefined;
}
export interface ListBlockSetsResponseEntry {
  id: BlockSetId;
  latestVersionId?: BlockSetVersionId | null | undefined;
  mavenCoordinateOfLatestVersion?: OrderableMavenCoordinate | null | undefined;
}
export type ListBlockSetVersionsPageToken = BlockSetVersion;
export interface ListBlockSetVersionsResponse {
  nextPageToken?: ListBlockSetVersionsPageToken | null | undefined;
  versions: Array<BlockSetVersionId>;
}
export interface ListBlockSetVersionsResponseV2 {
  nextPageToken?: ListBlockSetVersionsPageToken | null | undefined;
  versions: Array<BlockSetNamedVersion>;
}
export interface ListInstallableBlockSetVersionsByMavenProductIdResponse {
  blockSetId: BlockSetId;
  nextPageToken?: ListInstallableBlockSetVersionsPageToken | null | undefined;
  versions: Array<BlockSetNamedVersion>;
}
export interface ListInstallableBlockSetVersionsPageToken {
  version: BlockSetVersion;
  versionId: BlockSetVersionId;
}
export interface ListInstallableBlockSetVersionsRequest {
  pageToken?: ListInstallableBlockSetVersionsPageToken | null | undefined;
}
export interface ListInstallableBlockSetVersionsResponse {
  nextPageToken?: ListInstallableBlockSetVersionsPageToken | null | undefined;
  versions: Array<BlockSetNamedVersion>;
}
export type ListPendingBlockSetVersionsPageToken = string;
export interface ListPendingBlockSetVersionsResponse {
  blockSets: Array<ListPendingBlockSetVersionsResponseEntry>;
}
export interface ListPendingBlockSetVersionsResponseEntry {
  id: BlockSetVersionId;
}
export interface ListPendingBlockSetVersionsResponseV2 {
  blockSets: Array<ListPendingBlockSetVersionsResponseEntry>;
  nextPageToken?: ListPendingBlockSetVersionsPageToken | null | undefined;
}
export type ListProductsPageToken = string;
export interface ListProductsReponseEntry {
  id: ProductId;
  latestVersionMetadata: ProductVersionMetadata;
}
export interface ListProductsResponse {
  nextPageToken?: ListProductsPageToken | null | undefined;
  products: Array<ListProductsReponseEntry>;
}
export type ListProductVersionsPageToken = string;
export interface ListProductVersionsResponse {
  nextPageToken?: ListProductVersionsPageToken | null | undefined;
  versions: Array<ProductVersionMetadata>;
}
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
export interface LocalizedFreeFormDocumentationSections {
  fallbackFreeFormDocumentation: FreeFormDocumentationSections;
  localizedFreeFormDocumentation: Record<Locale, FreeFormDocumentationSections>;
}
export interface LocalizedName {
  fallbackName: string;
  localizedName: Record<Locale, LocalizedNameField>;
}
/**
 * A localized name for the given resource.
 */
export type LocalizedNameField = string;

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
 * Title and description can be independently overridden.
 */
export interface LocalizedTitleAndDescriptionOverride {
  descriptionOverride?: DescriptionOverride | null | undefined;
  titleOverride?: TitleOverride | null | undefined;
}
export interface LocalMarketplaceDefinition {
}
export interface LocalMarketplaceNotFoundRationale {
  marketplaceRid: MarketplaceRid;
}
/**
 * LocalTime string should be parsable by java.time.LocalTime.parse(String)
 * Examples "01:30", "23:00", "11:15"
 */
export type LocalTime = string;

/**
 * Recommendation sourced for an upstream installation.
 */
export interface LocalUpstreamInstallationRecommendationSource {
  marketplaceRidOfUpstream: MarketplaceRid;
  upstreamBlockSetInstallation: BlockSetInstallationRid;
}
export interface LogicCreateBlockRequest {
  logicRid: string;
  versionId?: string | null | undefined;
}
export type LogicFunctionId = string;

/**
 * / Identifier for generating the shape for a specific version of the logic function.
 */
export interface LogicFunctionIdAndVersionIdentifier {
  functionId: LogicFunctionId;
  functionVersion: LogicFunctionVersion;
  logicRid: LogicRid;
}
export interface LogicFunctionIdentifier_idAndVersion {
  type: "idAndVersion";
  idAndVersion: LogicFunctionIdAndVersionIdentifier;
}
export type LogicFunctionIdentifier = LogicFunctionIdentifier_idAndVersion;

/**
 * / This is the shape of a single LogicFunction pinned at a VersionId within a LogicFile. A LogicFile might have many LogicFunctions, and many versions of each function. The LogicFunctionShape typically has a 1x1 mapping with a function registry function
 */
export interface LogicFunctionShape {
  about: LocalizedTitleAndDescription;
  inputs: Array<LogicInputArgument>;
  logic: LogicReference;
  output: LogicOutputArgument;
}
export interface LogicFunctionShapeIdentifier {
  functionId: string;
  logicRid: string;
}
export type LogicFunctionVersion = string;
export interface LogicIdentifier {
  rid: LogicRid;
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
export type LogicRid = string;

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
export type LongVersion = number;
export interface MachineryCreateBlockRequest {
  rid: string;
}
export interface MachineryProcessIdentifier {
  rid: MachineryProcessRid;
}
export type MachineryProcessRid = string;
export interface MachineryProcessShape {
  about: LocalizedTitleAndDescription;
}
export type MagritteApiName = string;
export type MagritteConnectionId = string;
export interface MagritteConnectionIdentifier {
  connectionId: MagritteConnectionId;
  sourceRid: MagritteSourceRid;
}
export interface MagritteConnectionInputShape {
  about: LocalizedTitleAndDescription;
  connectionType: MagritteConnectionType;
  sourceReference: MagritteSourceReference;
}
/**
 * The type of connection. e.g. "http".
 */
export type MagritteConnectionType = string;

/**
 * Not yet implemented by the corresponding service
 */
export interface MagritteConnectorCreateBlockRequest {
  extractRids: Array<MagritteExtractRid>;
  sourceId: MagritteSourceRid;
  streamingExtractRids: Array<MagritteStreamingExtractRid>;
  targetEnvironments: Array<TargetEnvironment>;
}
export interface MagritteExportCreateBlockRequest {
  rid: MagritteExportRid;
  targetEnvironments: Array<TargetEnvironment>;
}
export interface MagritteExportIdentifier {
  exportRid: MagritteExportRid;
}
/**
 * Equivalent to `com.palantir.magritte.exports.api.ExportId`. Refers to all exports.
 */
export type MagritteExportRid = string;
export interface MagritteExportShape {
  about: LocalizedTitleAndDescription;
}
/**
 * Output shape representing Magritte batch extracts.
 */
export interface MagritteExtractOutputShape {
  about: LocalizedTitleAndDescription;
}
/**
 * Equivalent to `com.palantir.magritte.store.extract.api.ExtractId`. Refers only to batch extracts.
 */
export type MagritteExtractRid = string;
export interface MagritteRequiredApiName_requireOriginalApiName {
  type: "requireOriginalApiName";
  requireOriginalApiName: Void;
}
export type MagritteRequiredApiName =
  MagritteRequiredApiName_requireOriginalApiName;

export interface MagritteRequiredSecrets_requiredSecrets {
  type: "requiredSecrets";
  requiredSecrets: Array<MagritteSecretName>;
}

export interface MagritteRequiredSecrets_allSecrets {
  type: "allSecrets";
  allSecrets: Void;
}
export type MagritteRequiredSecrets =
  | MagritteRequiredSecrets_requiredSecrets
  | MagritteRequiredSecrets_allSecrets;

export type MagritteSecretName = string;
export interface MagritteSourceConfigOverridesInputIdentifier {
  stableId: StableShapeIdentifier;
}
export interface MagritteSourceConfigOverridesInputShape {
  about: LocalizedTitleAndDescription;
  stableId: StableShapeIdentifier;
}
export interface MagritteSourceCreateBlockRequest {
  rid: string;
  targetEnvironments: Array<TargetEnvironment>;
}
export interface MagritteSourceIdentifier {
  requiredApiName?: MagritteRequiredApiName | null | undefined;
  requiredSecrets?: MagritteRequiredSecrets | null | undefined;
  sourceRid: MagritteSourceRid;
  sourceUsageRestrictions: Array<MagritteSourceUsageRestriction>;
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
export type MagritteSourceRid = string;
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

export type MagritteSourceUsageRestrictionName = string;
export interface MagritteStreamingExtractConfigOverridesInputIdentifier {
  stableId: StableShapeIdentifier;
}
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
/**
 * Equivalent to `com.palantir.magritte.streaming.api.StreamingExtractId`. Refers only to streaming extracts.
 */
export type MagritteStreamingExtractRid = string;

/**
 * Represents a time period during which maintenance is allowed to take place. This is expressed
 * in terms of the time and day of week when the window starts and ends.
 *
 * A time window where windowStart and windowEnd are same can be used to indicate an "Always active"
 * maintenance window.
 *
 * Example 1:
 * windowStart: Monday 03:00
 * windowEnd: Monday 01:30
 *
 * Current date: March 13th 2023 02:00 - this is a Monday
 * Evaluated result: The maintenance window is NOT in effect
 *
 * Current date: March 13th 2023 05:00 - this is a Monday
 * Evaluated result: The maintenance window is ACTIVE
 *
 * Example 2:
 * windowStart: Monday 03:00
 * windowEnd: Monday 03:00
 *
 * Evaluated result: This window spans all time and will always be considered active.
 */
export interface MaintenanceWindow {
  windowEnd: DayTime;
  windowStart: DayTime;
  zoneId: ZoneId;
}
/**
 * If no maintenance windows exist then we assume you are never in a window.
 * When supplied windows are evaluated as an OR.
 */
export interface MaintenanceWindows {
  windows: Record<UpgradeType, Array<MaintenanceWindow>>;
}
/**
 * Type for identifying a block set in a managed store.
 */
export interface ManagedBlockSetId {
  blockSetId: BlockSetId;
  managedMarketplaceId: ManagedMarketplaceId;
}
/**
 * A human-readable identifier for the installation. There can be only one such installation
 * within a given namespace.
 *
 * The name must:
 * - start with a lowercase letter.
 * - contain only lowercase letters, hyphens and numbers
 * - cannot contain two hyphens in a row.
 */
export type ManagedInstallationName = string;

/**
 * Identifier for a managed (remote) marketplace store that is stable across stacks, e.g. "marketplace-aipnow-product-referenceresources-bundle".
 */
export type ManagedMarketplaceId = string;

/**
 * Access expansion for an entire managed store.
 */
export interface ManagedStoreAccessExpansion {
  accessLevel: ManagedStoreAccessLevel;
  principal: ManagedStoreAccessPrincipal;
}
export interface ManagedStoreAccessExpansions {
  blockSetLevel: Array<ManagedStoreBlockSetAccessExpansion>;
  storeLevel: Array<ManagedStoreAccessExpansion>;
}
/**
 * The level of access an organization/enrollment should have on a store. Note that for a store to be visible
 * to end users in an organization, the store also needs to be enabled for that organization. This setting is
 * controlled through the `setManagedStoreSettingsForOrg` endpoint. Stores with access level `NONE` can not be
 * enabled.
 *
 * VIEW_EVERYTHING -> Permission to view, but not install, all block sets in the store.
 * INSTALL_EVERYTHING -> Permission to view and install all block sets in the store.
 * NONE -> No permission to either view or install any block sets in the store.
 */
export type ManagedStoreAccessLevel =
  | "INSTALL_EVERYTHING"
  | "VIEW_EVERYTHING"
  | "NONE";
export interface ManagedStoreAccessPrincipal_organization {
  type: "organization";
  organization: OrganizationRid;
}

export interface ManagedStoreAccessPrincipal_enrollment {
  type: "enrollment";
  enrollment: EnrollmentRid;
}
export type ManagedStoreAccessPrincipal =
  | ManagedStoreAccessPrincipal_organization
  | ManagedStoreAccessPrincipal_enrollment;

/**
 * Access expansion for a single block set in a managed store.
 */
export interface ManagedStoreBlockSetAccessExpansion {
  accessLevel: ManagedStoreBlockSetAccessLevel;
  blockSetId: BlockSetId;
  principal: ManagedStoreAccessPrincipal;
}
/**
 * The level of access an organization/enrollment should have on a specific block set in a store.
 *
 * INSTALL -> Permission to install the block set.
 */
export type ManagedStoreBlockSetAccessLevel = "INSTALL";

/**
 * If `isEnabled` is set to true, and `managedStoreGroupConfiguration` is empty, all users in the organization
 * will be granted access to the store. The level of access that they get will be determined by the level of
 * access the organization has to the store, see docs on `ApolloStackLevelConfig` and `ManagedStoreAccessLevel`.
 *
 * If `isEnabled` is set to true, and `managedStoreGroupConfiguration` is not empty, only users in the organization
 * that are members of the given groups will be granted access to the store. The level of access that they get
 * will be determined by the level of access the organization has to the store, same as above.
 *
 * If `isEnabled` is set to false, the store is disabled for the organization and no user in the organization will
 * be granted access to it. ManagedStoreGroupConfiguration must be empty else we throw
 * `InvalidAdminSettingsRequested`.
 */
export interface ManagedStoreConfiguredSettingsEntry {
  isEnabled: boolean;
  managedStoreGroupConfiguration?:
    | ManagedStoreGroupConfiguration
    | null
    | undefined;
}
export interface ManagedStoreGroupConfiguration {
  groupIds: Array<GroupId>;
}
export interface ManagedStoreResponseEntry {
  managedMarketplaceId?: ManagedMarketplaceId | null | undefined;
  managedMarketplaceIds: Array<ManagedMarketplaceId>;
  rid: MarketplaceRid;
  storeName: StoreName;
}
export interface ManagedStoreSettingsResponseEntry {
  configuredSettings: ManagedStoreConfiguredSettingsEntry;
  rid: MarketplaceRid;
  storeName: StoreName;
}
/**
 * The resolved input shape does not satisfy the input presets, even though the presets are mandatory.
 */
export interface MandatoryPresetNotUsed {
  actual: ResolvedBlockSetInputShape;
  presets: Array<ResolvedBlockSetInputShape>;
}
export interface ManifestOnlyBlockSpecificConfigurationV0 {
  manifest: BlockDataId;
}
export interface ManuallyProvidedInput {
}
export interface ManuallyProvidedInputV2 {
  resolvedInput: ResolvedBlockSetInputShape;
}
export interface ManyToManyLinkTypeApiNames {
  objectTypeAToBApiName: ObjectTypeFieldApiName;
  objectTypeBToAApiName: ObjectTypeFieldApiName;
}
/**
 * DEPRECATED. Use "MapRendererSetIdentifierV2" instead.
 */
export interface MapRendererSetIdentifier {
  objectTypeRid: ObjectTypeRid;
}
export interface MapRendererSetIdentifierV2 {
  locator: MapRendererSetLocator;
}
export interface MapRendererSetLocator_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: ObjectTypeRid;
}

export interface MapRendererSetLocator_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: InterfaceTypeRid;
}
export type MapRendererSetLocator =
  | MapRendererSetLocator_objectTypeRid
  | MapRendererSetLocator_interfaceTypeRid;

export interface MapRendererSetOutputShape {
  about: LocalizedTitleAndDescription;
}
export interface MapRendererSetOutputShapeV2 {
  about: LocalizedTitleAndDescription;
}
export interface MapRenderingServiceCreateBlockRequest {
  locator: MapRenderingServiceLocator;
}
export interface MapRenderingServiceLocator_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: string;
}

export interface MapRenderingServiceLocator_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: string;
}
export type MapRenderingServiceLocator =
  | MapRenderingServiceLocator_objectTypeRid
  | MapRenderingServiceLocator_interfaceTypeRid;

export type MarkdownText = string;

/**
 * A marketplace contains blocks.
 */
export interface Marketplace {
  marketplaceRid: MarketplaceRid;
}
export interface MarketplaceBulkResult {
  marketplaceRids: Array<MarketplaceRid>;
}
export interface MarketplaceDefinition_local {
  type: "local";
  local: LocalMarketplaceDefinition;
}
export type MarketplaceDefinition = MarketplaceDefinition_local;

/**
 * Rid to manage permissions for a marketplace store to be read by foundry search.
 */
export type MarketplaceFoundrySearchSecurityRid = string;

/**
 * A monotonically increasing version number for store metadata.
 */
export type MarketplaceMetadataVersion = string;
export interface MarketplaceNotFound {
  marketplaceRid: MarketplaceRid;
}
export interface MarketplacePermissionDenied {
  marketplaceRid: MarketplaceRid;
}
/**
 * Rid for the marketplace store.
 */
export type MarketplaceRid = string;
export type MarkingId = string;

/**
 * MarkingListType specifies that this parameter must be a list of Markings.
 */
export interface MarkingListType {
}
/**
 * The marking referenced by the resolved shape was not found. This could happen if the
 * marking doesn't exist or is not visible to the user.
 */
export interface MarkingNotFound {
  markingId: MarkingId;
}
/**
 * MarkingOperation defines the level of user permissions required to install a package with this Marking. For
 * DECLASSIFY, the user must have declassify permissions on the marking. For USE, the user must have use
 * permissions on the marking. For NONE, no permissions are required to use this marking. NONE should only be set
 * by integrations that set Marking constraints on resources (e.g. the Ontology integration with Marking property
 * types).
 */
export type MarkingOperation = "DECLASSIFY" | "USE" | "NONE";

/**
 * Each individual marking (supporting both CBAC and Mandatory markings) is resolved using either
 * the globalMarkingId or the displayName. Since the globalMarkingId is guaranteed to be globally unique,
 * we use just this field to generate the resolved input shape if it exists. Otherwise, we attempt to generate
 * the resolved input shape using just the display name for the marking. The display name is used only if there
 * exists exactly one marking with the display name (otherwise we don't allow presets). We require that either
 * the global marking id or display name exists for each marking to allow presets for the Markings input shape.
 */
export interface MarkingResolver {
  displayName: string;
  globalMarkingId?: string | null | undefined;
}
export interface MarkingsIdentifier {
  about: LocalizedTitleAndDescription;
  affectedShapes: Array<DatasourceLocator>;
  affectedShapesV2: Array<ShapesAffectedByMarkings>;
  markingIds: Array<MarkingId>;
  operation: MarkingOperation;
  sizeConstraints?: MarkingsSizeConstraints | null | undefined;
  stableId?: StableShapeIdentifier | null | undefined;
  supportedMarkingsType?: SupportedMarkingsType | null | undefined;
}
export interface MarkingSizeConstraintsNotSatisfied {
  actualNumber: number;
  maxNumberInclusive: number;
  minNumberInclusive: number;
}
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
 * Similar to the `MarkingType` enum in Multipass, but we include a third `ORGANIZATION` type to model
 * organization markings.
 */
export type MarkingsType = "MANDATORY" | "CBAC" | "ORGANIZATION";

/**
 * MarkingType specifies that this parameter must be a CBAC or Madatory Marking type.
 */
export interface MarkingType {
}
/**
 * The MarkingType of the markings referenced by the resolved shape did not match the specified MarkingType.
 */
export interface MarkingTypeNotValid {
  markingIds: Array<MarkingId>;
  markingType: SupportedMarkingsType;
}
/**
 * The MarkingType of the markings referenced by the resolved shape did not match the specified MarkingType.
 */
export interface MarkingTypeNotValidV2 {
  invalidMarkings: Record<MarkingId, MarkingsType>;
  supportedMarkingsType: SupportedMarkingsType;
}
export type MaterializationBehavior = "INCLUDED" | "EXCLUDED";
export interface MaterializeRecommendationsRequest_v1 {
  type: "v1";
  v1: MaterializeRecommendationsRequestV1;
}
/**
 * Provide the context in which a block version's recommendations should be generated. This enables avoiding the
 * chicken-egg issue when creating n blocks which depend on each other simultaneously.
 *
 * Versioned to enable future iteration/client-driven customization.
 */
export type MaterializeRecommendationsRequest =
  MaterializeRecommendationsRequest_v1;

/**
 * Materialize a set of block version recommendations simultaneously. This enables avoiding the
 * chicken-egg issue when creating n blocks which depend on each other simultaneously.
 */
export interface MaterializeRecommendationsRequestV1 {
  blockVersionsToMaterialize: Record<BlockId, BlockVersionId>;
}
export interface MaterializingBlockSetVersionStatus {
  currentUpdateId?:
    | UpdatePendingBlockSetVersionSpecsRequestId
    | null
    | undefined;
  outputSpecResults: Array<OutputSpecResult>;
  previousOutputSpecResults: Array<OutputSpecResult>;
}
export interface MavenCoordinateDependency {
  maxVersion: string;
  minVersion: string;
  optional?: boolean | null | undefined;
  productId: MavenProductId;
}
/**
 * A set of maven coordinates that are able to be signed by a public key.
 */
export interface MavenCoordinates {
  mavenCoordinates: Array<MavenProductId>;
}
/**
 * Maven group (part of a maven product id, before the colon)
 */
export type MavenGroup = string;
export interface MavenLocator {
  path: string;
}
/**
 * Maven Product Id which will be used to identify the released products.
 * e.g com.palantir.foundry.example:example-service
 */
export type MavenProductId = string;

/**
 * Either a Maven Coordinate (=with version), or a Maven Product Id (=without version).
 *
 * <mavenGroup>:<mavenArtifact>(:<mavenVersion>)?
 *
 * Omitting the maven version is only allowed for unprivileged Apollo spaces.
 *
 * Examples:
 * - com.example.service:package-name:1.2.3
 * - com.example.service:package-name
 */
export type MavenProductIdOrCoordinate = string;
export interface MayIncurDowntimeDiffImplication_linkTypeOutputBackendChanged {
  type: "linkTypeOutputBackendChanged";
  linkTypeOutputBackendChanged: LinkTypeOutputBackendChangedImplication;
}

export interface MayIncurDowntimeDiffImplication_objectTypeOutputBackendChanged {
  type: "objectTypeOutputBackendChanged";
  objectTypeOutputBackendChanged: ObjectTypeOutputBackendChangedImplication;
}
export type MayIncurDowntimeDiffImplication =
  | MayIncurDowntimeDiffImplication_linkTypeOutputBackendChanged
  | MayIncurDowntimeDiffImplication_objectTypeOutputBackendChanged;

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

export interface MediaSetCreateBlockRequest {
  branch: string;
  includeMediaSetItems: boolean;
  rid: string;
}
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
export interface MediaSetOutputSpecConfig {
  includeData: boolean;
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

/**
 * A media type for an attachment, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types.
 */
export type MimeType = string;

/**
 * CBAC marking constraints are required but were not provided. CBAC marking constraints must always be provided
 * for stacks that have CBAC enabled.
 */
export interface MissingCbacMarkingConstraint {
}
/**
 * The typeClass required on the column shape is missing on the resolved column.
 */
export interface MissingColumnTypeClass {
  expected: Array<DatasourceColumnTypeClass>;
}
/**
 * There should have been an internal recommendation between an output and an input, but there wasn't. This can
 * happen if two blocks declare resolved shapes for the same resource, but with different shape types, e.g. if
 * one block declares an output for a dataset as a tabular datasource, and another block declares an input for
 * the same dataset as a files datasource.
 */
export interface MissingInternalRecommendationErrorV2 {
  inputShape: BlockSetInputShape;
  inputShapeId: InputBlockSetShapeId;
  outputShapeId: OutputBlockSetShapeId;
  resolvedInputShape?: ResolvedBlockSetInputShape | null | undefined;
  resolvedOutputShape: ResolvedBlockSetOutputShape;
}
/**
 * Generic error that can be used to signal that the user is missing some Gatekeeper operation on a certain
 * resource.
 */
export interface MissingOperationError {
  missingOperation: string;
  rid: string;
}
export interface MkvVideoContainerFormat {
}
export interface ModelCreateBlockRequest {
  includeContent?: IncludeModelContent | null | undefined;
  modelRid: string;
  modelVersionRid: string;
}
export interface ModelInputIdentifier {
  allowedTypes: Array<ModelType>;
  rid: ModelRid;
  version?: ModelVersionRid | null | undefined;
}
export interface ModelInputShape {
  about: LocalizedTitleAndDescription;
  allowedTypes: Array<ModelType>;
  type: ModelType;
}
export interface ModelOutputIdentifier {
  buildRequirements?: DatasourceBuildRequirements | null | undefined;
  rid: ModelRid;
  version: ModelVersionRid;
}
export interface ModelOutputShape {
  about: LocalizedTitleAndDescription;
  buildRequirements?: DatasourceBuildRequirements | null | undefined;
  type: ModelType;
}
export interface ModelOutputSpecConfig {
  includeContent: boolean;
}
/**
 * The service to which rid belongs is different from the one that was expected.
 */
export interface ModelResourceShapeServiceMismatch {
  actual: ServiceName;
  expected: ServiceName;
}
/**
 * The type of the rid is different from the one that was expected.
 */
export interface ModelResourceTypeMismatch {
  actual: ResourceType;
  expected: ResourceType;
}
export type ModelRid = string;
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

/**
 * DEPRECATED. Use ModelTypeMismatchV3 instead.
 * The model type was different than one that was expected.
 */
export interface ModelTypeMismatch {
  actual: string;
  resolvedShapeModelType: ModelType;
  unresolvedShapeModelType: ModelType;
}
/**
 * DEPRECATED. Use ModelTypeMismatchV3 instead.
 * The model type was different than one that was expected.
 */
export interface ModelTypeMismatchV2 {
  actual: string;
  allowedModelTypesFromUnresolvedShape: Array<ModelType>;
  resolvedShapeModelType: ModelType;
}
/**
 * The model type was different than one that was expected.
 */
export interface ModelTypeMismatchV3 {
  actual: string;
  allowedModelTypesFromUnresolvedShape: Array<ModelType>;
}
export type ModelVersionRid = string;
export interface ModifyExistingBlockSetInstallation {
  forceInstall?: boolean | null | undefined;
  targetLocation?: SetTargetInstallLocation | null | undefined;
  targetState: BlockSetInstallationTargetState;
}
export interface MonitorIdentifier {
  rid: string;
}
export interface MonitoringViewCreateBlockRequest {
  monitoringViewRid: string;
}
export interface MonitorShape {
  about: LocalizedTitleAndDescription;
}
export interface MonitorViewIdentifier {
  rid: string;
}
export interface MonitorViewShape {
  about: LocalizedTitleAndDescription;
}
/**
 * Monocle Entity Identifier for generating monocle graph shapes
 */
export interface MonocleGraphIdentifier {
  rid: string;
}
export interface MonocleGraphShape {
  about: LocalizedTitleAndDescription;
}
export interface MoveBlockSetInstallationsRequest {
  installationRids: Array<BlockSetInstallationRid>;
  targetMarketplaceRid: MarketplaceRid;
}
export interface MoveBlockSetInstallationsResponse {
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
/**
 * Unique identifier for a group in Multipass.
 */
export type MultipassGroupId = string;

/**
 * A resolver for multipass group that uses realm and name for cross-stack identification.
 */
export interface MultipassGroupResolver {
  name: string;
  realm: string;
}
export interface MultipassGroupShape {
  about: LocalizedTitleAndDescription;
}
/**
 * A user attribute name in Multipass.
 */
export type MultipassUserAttributeName = string;
export interface MultipassUserAttributeShape {
  about: LocalizedTitleAndDescription;
}
/**
 * Unique identifier for a user in Multipass.
 */
export type MultipassUserId = string;
export interface NameBasedDatasourceColumnIdentifier {
  datasource: DatasourceLocatorIdentifier;
  name: string;
}
export interface NamedCredentialCreateBlockRequest {
  rid: string;
}
/**
 * Will generate a named credential shape with all secret names from the given credential.
 */
export interface NamedCredentialIdentifier {
  credentialRid: CredentialRid;
}
export interface NamedCredentialShape {
  about: LocalizedTitleAndDescription;
  secretNames: Array<SecretName>;
}
export type NamespaceRid = string;
export interface NetworkEgressPolicyCreateBlockRequest {
  rid: string;
}
export type NetworkEgressPolicyIdentifier = string;
export interface NetworkEgressPolicyShape {
  about: LocalizedTitleAndDescription;
}
/**
 * A new blockSetInstallation that will be created with the provided blockSetVersionId and mapping
 */
export interface NewAssociatedBlockSetInstallation {
  blockSetVersionId: BlockSetVersionId;
  compassSettings?: CompassSettings | null | undefined;
  displayMetadata: BlockSetInstallationDisplayMetadata;
  id: NewBlockSetInstallationId;
  mapping: Record<BlockSetBlockInstanceId, BlockReference>;
}
export type NewBlockSetInstallationId = string;

/**
 * A new input shape is required to be provided by the client on the blockset level. Input shapes on blocks,
 * which are resolved by internal recommendations inside the blockset don't result into a diff implication.
 */
export interface NewInputShapeAddedImplication {
  shapeId: BlockShapeId;
}
/**
 * A new installation in the request constains a singleton product which is already installed in the namespace.
 * Singletons cannot be installed into a namespace that already has an installation of that blockset.
 * This is a blocking error.
 */
export interface NewInstallationOfSingletonBlockSetThatIsAlreadyInstalled {
  existingInstallations: Array<BlockSetInstallationRid>;
}
export interface NewProject {
  cbacMarkingConstraint?: CbacMarkingConstraint | null | undefined;
  organizationMarkingIds?: Array<MarkingId> | null | undefined;
  roleContext: InstallationProjectRoleContext;
  roleGrants: Array<RoleGrant>;
}
/**
 * Ephemeral identifier that only makes sense within the context of an InstallBlockSetsRequest.
 */
export type NewProjectId = string;
export interface NewProjectOrExistingFolder_newProject {
  type: "newProject";
  newProject: NewProject;
}

export interface NewProjectOrExistingFolder_existingFolder {
  type: "existingFolder";
  existingFolder: ExistingFolder;
}
export type NewProjectOrExistingFolder =
  | NewProjectOrExistingFolder_newProject
  | NewProjectOrExistingFolder_existingFolder;

export interface NewProjectOrExistingFolderV2_newProject {
  type: "newProject";
  newProject: NewProjectV2;
}

export interface NewProjectOrExistingFolderV2_existingFolder {
  type: "existingFolder";
  existingFolder: ExistingFolderV2;
}
export type NewProjectOrExistingFolderV2 =
  | NewProjectOrExistingFolderV2_newProject
  | NewProjectOrExistingFolderV2_existingFolder;

export interface NewProjectV2 {
  id: NewProjectId;
}
/**
 * Although this often has the file extension .wav, it's a distinct format.
 * See https://www1.icsi.berkeley.edu/Speech/faq/wavfile-fmts.html
 */
export interface NistSphereFormat {
}
export interface NitfFormat {
}
export type NonConstraintFailureNotificationCause =
  | "INSTALLATION_JOB_SUCCESS"
  | "INSTALLATION_JOB_FAILURE"
  | "UPGRADE_PLAN_FAILURE"
  | "BEGINNING_UPGRADE"
  | "IDLING";
export interface NonEmptyCompassInstallLocation {
  childrenRids: Array<string>;
  compassFolderRid: CompassFolderRid;
}
/**
 * Constraint Failure when there are no newer product versions on the release channel the installation is tracking
 * Recalled versions that were skipped during the upgrade planning are also included here.
 */
export interface NoNewerVersionsOnReleaseChannelConstraintFailure {
  newerVersionsOnOtherChannels: Record<
    BlockSetVersionId,
    Array<ReleaseChannel>
  >;
  skippedRecalledVersions: Array<BlockSetVersionId>;
}
export interface NotAuthorizedToDeclassify {
}
/**
 * User did not have sufficient permissions to remove one or more markings from a resource.
 */
export interface NotAuthorizedToDeclassifyError {
  rid: string;
}
export interface NotAuthorizedToDeclassifyRationale {
  rid: string;
}
export interface NotAuthorizedToUseMarkings {
  markingIds: string;
}
/**
 * User did not have sufficient permissions to use one or more markings.
 */
export interface NotAuthorizedToUseMarkingsError {
  markingIds: string;
  rid: string;
}
/**
 * User did not have sufficient permissions to use one or more markings.
 */
export interface NotAuthorizedToUseMarkingsErrorV2 {
  markingIds: Array<string>;
  rid: string;
}
export interface NotAuthorizedToUseMarkingsRationale {
  rid: string;
}
export interface NotepadCreateBlockRequest {
  rid: string;
}
/**
 * Notepad document that can be opened on its own or referenced in Workshop or Carbon.
 */
export interface NotepadDocumentShape {
  about: LocalizedTitleAndDescription;
}
/**
 * Notepad document that can be opened on its own or referenced in Workshop or Carbon.
 */
export interface NotepadPartialResolvedShape {
  rid: string;
}
export interface NotepadTemplateCreateBlockRequest {
  rid: string;
  version: number;
}
export interface NotepadTemplateIdentifier_rid {
  type: "rid";
  rid: NotepadTemplateRid;
}

export interface NotepadTemplateIdentifier_ridAndVersion {
  type: "ridAndVersion";
  ridAndVersion: NotepadTemplateRidAndVersion;
}
export type NotepadTemplateIdentifier =
  | NotepadTemplateIdentifier_rid
  | NotepadTemplateIdentifier_ridAndVersion;

export type NotepadTemplateParameterId = string;
export interface NotepadTemplateParameterIdAndTemplate {
  id: NotepadTemplateParameterId;
  templateIdentifier: NotepadTemplateIdentifier;
}
export interface NotepadTemplateParameterIdentifier_idAndTemplate {
  type: "idAndTemplate";
  idAndTemplate: NotepadTemplateParameterIdAndTemplate;
}
export type NotepadTemplateParameterIdentifier =
  NotepadTemplateParameterIdentifier_idAndTemplate;

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

/**
 * The type of the provided parameter does not match the packaged resource.
 */
export interface NotepadTemplateParameterTypeMismatch {
  actual: NotepadTemplateParameterType;
  expected: NotepadTemplateParameterType;
}
export type NotepadTemplateReference = BlockInternalId;
export type NotepadTemplateRid = string;
export interface NotepadTemplateRidAndVersion {
  rid: NotepadTemplateRid;
  version: NotepadTemplateVersion;
}
/**
 * Notepad template that serves as a blueprint for generating new documents based on inputs.
 */
export interface NotepadTemplateShape {
  about: LocalizedTitleAndDescription;
  parameters: Array<NotepadTemplateParameterReference>;
}
export type NotepadTemplateVersion = number;
export interface Notification {
  notificationCause: NotificationCause;
}
export interface NotificationCause_nonConstraintFailureNotificationCause {
  type: "nonConstraintFailureNotificationCause";
  nonConstraintFailureNotificationCause: NonConstraintFailureNotificationCause;
}

export interface NotificationCause_constraintFailure {
  type: "constraintFailure";
  constraintFailure: ConstraintFailure;
}
export type NotificationCause =
  | NotificationCause_nonConstraintFailureNotificationCause
  | NotificationCause_constraintFailure;

export interface NotificationMechanism {
  emailNotification: Array<NotificationScope>;
  pagerDutyNotification: Array<NotificationScope>;
}
export interface NotificationMechanismsTargets {
  targets: Record<NotificationType, NotificationMechanism>;
}
export interface NotificationRecipientUserId {
  user: string;
}
export interface NotificationScope_user {
  type: "user";
  user: NotificationRecipientUserId;
}
export type NotificationScope = NotificationScope_user;

export type NotificationType =
  | "CONSTRAINT_FAILURE_LOUD"
  | "CONSTRAINT_FAILURE_QUIET"
  | "INSTALL_JOB_SUCCESS"
  | "INSTALL_JOB_FAILURE"
  | "OTHER_EVENT"
  | "OTHER_FAILURE";
export interface NotificationWindow {
  windowEnd: DayTime;
  windowStart: DayTime;
  zoneId: ZoneId;
}
export interface NotStartedInstallPendingStatus {
}
export interface NpmLocator {
  name: string;
  version: string;
}
export interface NumberOfInstallationsInRequestLimitExceeded {
  limit: number;
  numberInRequest: number;
}
export interface OacPermissionMetadata {
  marketplaceRid: MarketplaceRid;
  mavenCoordinates: MavenCoordinates;
  publicKey: SigningPublicKey;
}
/**
 * An entry in the OAC signing key table
 */
export interface OacSigningKeyEntry {
  keyId: string;
  mavenCoordinates: MavenCoordinates;
  publicKey: SigningPublicKey;
}
export interface ObjectInstanceIdentifier {
  rid: ObjectRid;
}
export interface ObjectInstanceInputShape {
  about: LocalizedTitleAndDescription;
  objectTypeIdentifier: ObjectTypeReference;
}
export interface ObjectInstanceNotFound {
  objectInstanceRid: ObjectRid;
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
export type ObjectRid = string;

/**
 * The resolved Objects backend support for the Object Type / ManyToMany Link is incompatible
 * with what is required.
 */
export interface ObjectsBackendIncompatible {
  actual: OutputObjectBackendVersion;
  required: InputObjectBackendVersion;
}
/**
 * The resolved Objects backend for the Object Type / ManyToMany Link is not supported by Marketplace.
 */
export interface ObjectsBackendUnknown {
  backend: string;
}
export interface ObjectSetCreateBlockRequest {
  rids: Array<string>;
}
export interface ObjectSetIdentifier {
  rid: ObjectSetRid;
}
export type ObjectSetRid = string;

/**
 * ObjectSetRidType specifies that this parameter must be an ObjectSetRid.
 */
export interface ObjectSetRidType {
  objectTypeId: ObjectTypeReference;
}
export interface ObjectSetShape {
  about: LocalizedTitleAndDescription;
}
export type ObjectTypeApiName = string;

/**
 * A string indicating the API Name to use for the given entity that will be a field of an ObjectType.
 * This API name will be used to access the entity in programming languages.
 * It must adhere to the following rules:
 * - Match the unicode identifier syntax: https://unicode.org/reports/tr31/
 * - Contain at most 100 characters.
 */
export type ObjectTypeFieldApiName = string;
export type ObjectTypeId = string;
export interface ObjectTypeIdentifier_rid {
  type: "rid";
  rid: ObjectTypeRid;
}

export interface ObjectTypeIdentifier_id {
  type: "id";
  id: ObjectTypeId;
}
export type ObjectTypeIdentifier =
  | ObjectTypeIdentifier_rid
  | ObjectTypeIdentifier_id;

export interface ObjectTypeInputBackendChangedImplication {
  backendA: any;
  backendB: any;
}
export interface ObjectTypeInputRequiresNewPropertiesImplication {
  newProperties: Record<ObjectTypePropertyReference, PropertyInputShape>;
}
/**
 * Object type input shape has changed such that it now requires support of edits.
 */
export interface ObjectTypeInputRequiringSupportOfEditsImplication {
  editsSupportA: any;
  editsSupportB: any;
}
export interface ObjectTypeInputShape {
  about: LocalizedTitleAndDescription;
  editsSupport: InputEditsSupport;
  objectsBackendVersion: InputObjectBackendVersion;
  propertyTypes: Array<ObjectTypePropertyReference>;
}
/**
 * Object type output shape has changed such that it now doesn't support edits anymore.
 */
export interface ObjectTypeNoLongerSupportingEditsImplication {
  editsSupportA: any;
  editsSupportB: any;
}
export interface ObjectTypeNotFound {
  objectTypeId?: ObjectTypeId | null | undefined;
  objectTypeRid?: ObjectTypeRid | null | undefined;
}
export interface ObjectTypeOutputBackendChangedImplication {
  backendA: any;
  backendB: any;
}
export interface ObjectTypeOutputPropertiesRemovedImplication {
  removedProperties: Record<ObjectTypePropertyReference, PropertyOutputShape>;
}
export interface ObjectTypeOutputShape {
  about: LocalizedTitleAndDescription;
  editsSupport: OutputEditsSupport;
  objectsBackendVersion: OutputObjectBackendVersion;
  propertyTypes: Array<ObjectTypePropertyReference>;
}
export type ObjectTypePropertyReference = BlockInternalId;

/**
 * The underlying type of the property type has changed and there is no guarantee that casting the type via
 * schema migration would succeed (e.g. changing the property type from integer to string). If edits on the
 * original type cannot be cast to the new type, edits may get dropped in order to complete the install.
 */
export interface ObjectTypePropertyTypeChangedImplication {
  propertyReference: ObjectTypePropertyReference;
  typeA: AllowedObjectPropertyType;
  typeB: AllowedObjectPropertyType;
}
export type ObjectTypeReference = BlockInternalId;

/**
 * An ObjectTypeReferenceType can be used to supply an object type to a function. This is useful for
 * addInterfaceRule where you need to specify what type of object you're creating.
 * NOTE: this is NOT an object instance.
 */
export interface ObjectTypeReferenceType {
}
/**
 * An ObjectTypeRid was referenced for which the shape id could not be resolved. This is typical if the
 * referenced ObjectType has not been included as an input/output in the block.
 */
export interface ObjectTypeReferenceUnresolvable {
  actual: ObjectTypeRid;
  expected: ObjectTypeReference;
}
export type ObjectTypeRid = string;

/**
 * Not yet implemented by the corresponding service
 */
export interface ObjectViewCreateBlockRequest {
  objectTypeRid: string;
  profiles: Array<MultipassGroupId>;
  tabIds: Array<ObjectViewTabId>;
}
export interface ObjectViewIdentifier {
  objectTypeRid: ObjectTypeRid;
}
export interface ObjectViewOutputSpecConfig {
  tabConfig?: ObjectViewTabConfig | null | undefined;
}
export type ObjectViewReference = BlockInternalId;
export interface ObjectViewShape {
  about: LocalizedTitleAndDescription;
  objectType: ObjectTypeReference;
  tabs: Array<ObjectViewTabReference>;
}
export interface ObjectViewTabConfig {
  tabsIds: Array<ObjectViewTabId>;
}
export type ObjectViewTabId = string;
export interface ObjectViewTabIdentifier {
  objectTypeRid: ObjectTypeRid;
  tabId: ObjectViewTabId;
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
 * No resolved shape was specified, even though there are preset values on the shape. Optional shapes with
 * presets are unsupported.
 */
export interface OmittedShapeForShapeWithPresets {
}
/**
 * This hint can be used to inform consumers whether the number of links on the many side of a
 * OneToManyLinkDefinition is intended to be one or more.
 */
export type OneToManyLinkCardinalityHint = "ONE_TO_ONE" | "ONE_TO_MANY";
export interface OneToManyLinkTypeApiNames {
  manyToOneApiName: ObjectTypeFieldApiName;
  oneToManyApiName: ObjectTypeFieldApiName;
}
export type OntologyBoundFunctionApiName = string;
export interface OntologyBoundFunctionApiNameAndBinding {
  apiName: OntologyBoundFunctionApiName;
  ontologyBinding: OntologyRid;
}
export interface OntologyContext {
  ontologyRid: OntologyRid;
}
export interface OntologyCreateBlockRequest {
  actionTypeRids: Array<string>;
  interfaceTypeRids: Array<string>;
  linkTypeRids: Array<string>;
  materializationBehavior?: MaterializationBehavior | null | undefined;
  objectTypeRids: Array<string>;
  sharedPropertyTypeRids: Array<string>;
}
export interface OntologyDatasourceIdentifier {
  datasourceRid: string;
  ontologyEntityRid: string;
}
/**
 * The Ontology entity has no datasource with this RID.
 */
export interface OntologyDatasourceMissingFromEntity {
  datasourceRid: string;
  ontologyEntityRid: string;
}
export interface OntologyDatasourceNotFound {
  datasourceRid: string;
  ontologyEntityRid: string;
}
export interface OntologyDatasourceRetentionShape {
  about: LocalizedTitleAndDescription;
  id: StableShapeIdentifier;
}
export interface OntologyDatasourceShape {
  about: LocalizedTitleAndDescription;
  ontologyEntity: OntologyEntityReference;
}
/**
 * The Ontology entity for a resolved input or output shape was not in the target Ontology.
 */
export interface OntologyEntityNotInTargetOntology {
  actualOntologyRid: OntologyRid;
  entityRid: string;
  expectedOntologyRid: OntologyRid;
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

/**
 * The location to install ontology resources. In the future we might add things like branch etc.
 */
export interface OntologyInstallLocation {
  ontologyRid: OntologyRid;
  projectAssociation?: OntologyProjectAssociation | null | undefined;
  useOntologyPackage?: boolean | null | undefined;
}
/**
 * A block with Ontology inputs and/or outputs was requested to be installed, but no Ontology install location
 * was defined in the request.
 */
export interface OntologyInstallLocationNotDefined {
}
export interface OntologyInterfaceTypeNotFound {
  interfaceTypeRid?: InterfaceTypeRid | null | undefined;
}
/**
 * OntologyInstallLocation.useOntologyPackage was set to true, but the passed OntologyRid is the default
 * Ontology's Rid which is not allowed.
 */
export interface OntologyPackageInDefaultOntologyNotAllowed {
}
export interface OntologyProjectAssociation_useProject {
  type: "useProject";
  useProject: Void;
}

export interface OntologyProjectAssociation_useOntologyPackage {
  type: "useOntologyPackage";
  useOntologyPackage: Void;
}
export type OntologyProjectAssociation =
  | OntologyProjectAssociation_useProject
  | OntologyProjectAssociation_useOntologyPackage;

export type OntologyRid = string;
export interface OntologySdkCreateBlockRequest {
  ontologySdkRid: string;
  ontologySdkVersion?: string | null | undefined;
}
/**
 * This type is being deprecated in favor of the V1 type with an optional version.
 */
export interface OntologySdkCreateBlockRequestV2 {
  packageName: string;
  repositoryRid: string;
}
export interface OntologySdkEntityIdentifier {
  rid: OntologySdkRid;
  version?: OntologySdkVersion | null | undefined;
}
export interface OntologySdkIdentifier {
  packageName: string;
  repositoryRid: ArtifactsRepositoryRid;
}
export type OntologySdkRid = string;
export interface OntologySdkShape {
  about: LocalizedTitleAndDescription;
}
export interface OntologySdkShapeV2 {
  about: LocalizedTitleAndDescription;
}
export interface OntologySdkV2EntityIdentifier {
  packageName: PackageName;
  repositoryRid: ArtifactsRepositoryRid;
}
export type OntologySdkVersion = string;
export type OntologyVersion = string;
export interface OpusFormat {
}
/**
 * A mirror of com.palantir.apollo.maven.api.OrderableMavenCoordinate.
 */
export interface OrderableMavenCoordinate {
  orderableSlsVersion: string;
  productId: MavenProductId;
}
export type OrganizationRid = string;
export interface OtherValidationFailure {
  errorMessage: string;
}
export interface OutputBlockSetMappingInfo {
  backingShape: ShapeReference;
  producedByBlockType: BlockType;
  resolvedShape: ResolvedBlockSetOutputShape;
  shape: BlockSetOutputShape;
}
export type OutputBlockSetShapeId = BlockSetShapeId;
export type OutputEditsSupport = "EDITS_ENABLED" | "EDITS_DISABLED";

/**
 * The resolved edits support of the provided ObjectType does not match the packaged resource.
 */
export interface OutputEditsSupportMismatch {
  actual: OutputEditsSupport;
  expected: OutputEditsSupport;
}
export interface OutputEntityIdentifier_action {
  type: "action";
  action: ActionTypeIdentifier;
}

export interface OutputEntityIdentifier_actionParameter {
  type: "actionParameter";
  actionParameter: ActionTypeParameterIdentifier;
}

export interface OutputEntityIdentifier_aipAgent {
  type: "aipAgent";
  aipAgent: AipAgentIdentifier;
}

export interface OutputEntityIdentifier_appConfigTitanium {
  type: "appConfigTitanium";
  appConfigTitanium: AppConfigIdentifier;
}

export interface OutputEntityIdentifier_appConfig {
  type: "appConfig";
  appConfig: AppConfigIdentifier;
}

export interface OutputEntityIdentifier_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: ArtifactsRepositoryIdentifier;
}

export interface OutputEntityIdentifier_authoringLibrary {
  type: "authoringLibrary";
  authoringLibrary: AuthoringLibraryIdentifier;
}

export interface OutputEntityIdentifier_authoringRepository {
  type: "authoringRepository";
  authoringRepository: AuthoringRepositoryIdentifier;
}

export interface OutputEntityIdentifier_automation {
  type: "automation";
  automation: AutomationIdentifier;
}

export interface OutputEntityIdentifier_blobster {
  type: "blobster";
  blobster: BlobsterOutputIdentifier;
}

export interface OutputEntityIdentifier_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: CarbonWorkspaceIdentifier;
}

export interface OutputEntityIdentifier_checkpointConfig {
  type: "checkpointConfig";
  checkpointConfig: CheckpointConfigEntityIdentifier;
}

export interface OutputEntityIdentifier_cipherChannel {
  type: "cipherChannel";
  cipherChannel: CipherChannelEntityIdentifier;
}

export interface OutputEntityIdentifier_cipherLicense {
  type: "cipherLicense";
  cipherLicense: CipherLicenseEntityIdentifier;
}

export interface OutputEntityIdentifier_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: CodeWorkspaceIdentifier;
}

export interface OutputEntityIdentifier_compassResource {
  type: "compassResource";
  compassResource: CompassResourceOutputIdentifier;
}

export interface OutputEntityIdentifier_contourAnalysis {
  type: "contourAnalysis";
  contourAnalysis: ContourAnalysisEntityIdentifier;
}

export interface OutputEntityIdentifier_dataHealthCheck {
  type: "dataHealthCheck";
  dataHealthCheck: DataHealthCheckIdentifier;
}

export interface OutputEntityIdentifier_dataHealthCheckGroup {
  type: "dataHealthCheckGroup";
  dataHealthCheckGroup: DataHealthCheckGroupIdentifier;
}

export interface OutputEntityIdentifier_deployedApp {
  type: "deployedApp";
  deployedApp: DeployedAppIdentifier;
}

export interface OutputEntityIdentifier_datasourceColumn {
  type: "datasourceColumn";
  datasourceColumn: DatasourceColumnIdentifier;
}

export interface OutputEntityIdentifier_eddieEdgePipeline {
  type: "eddieEdgePipeline";
  eddieEdgePipeline: EddieEdgePipelineIdentifier;
}

export interface OutputEntityIdentifier_eddiePipeline {
  type: "eddiePipeline";
  eddiePipeline: EddiePipelineIdentifier;
}

export interface OutputEntityIdentifier_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: EvaluationSuiteIdentifier;
}

export interface OutputEntityIdentifier_filesDatasource {
  type: "filesDatasource";
  filesDatasource: FilesDatasourceOutputIdentifier;
}

export interface OutputEntityIdentifier_function {
  type: "function";
  function: FunctionIdentifier;
}

export interface OutputEntityIdentifier_functionConfiguration {
  type: "functionConfiguration";
  functionConfiguration: FunctionConfigurationIdentifier;
}

export interface OutputEntityIdentifier_geotimeSeriesIntegration {
  type: "geotimeSeriesIntegration";
  geotimeSeriesIntegration: GeotimeSeriesIntegrationRid;
}

export interface OutputEntityIdentifier_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeIdentifier;
}

export interface OutputEntityIdentifier_interfaceLinkType {
  type: "interfaceLinkType";
  interfaceLinkType: InterfaceLinkTypeIdentifier;
}

export interface OutputEntityIdentifier_interfacePropertyType {
  type: "interfacePropertyType";
  interfacePropertyType: InterfacePropertyTypeIdentifier;
}

export interface OutputEntityIdentifier_link {
  type: "link";
  link: OutputLinkTypeIdentifier;
}

export interface OutputEntityIdentifier_logic {
  type: "logic";
  logic: LogicIdentifier;
}

export interface OutputEntityIdentifier_logicFunction {
  type: "logicFunction";
  logicFunction: LogicFunctionIdentifier;
}

export interface OutputEntityIdentifier_machinery {
  type: "machinery";
  machinery: MachineryProcessIdentifier;
}

export interface OutputEntityIdentifier_magritteExtract {
  type: "magritteExtract";
  magritteExtract: LegacyNotImplementedIdentifier;
}

export interface OutputEntityIdentifier_magritteExport {
  type: "magritteExport";
  magritteExport: MagritteExportIdentifier;
}

export interface OutputEntityIdentifier_magritteSource {
  type: "magritteSource";
  magritteSource: MagritteSourceIdentifier;
}

export interface OutputEntityIdentifier_magritteStreamingExtract {
  type: "magritteStreamingExtract";
  magritteStreamingExtract: LegacyNotImplementedIdentifier;
}

export interface OutputEntityIdentifier_model {
  type: "model";
  model: ModelOutputIdentifier;
}

export interface OutputEntityIdentifier_monitor {
  type: "monitor";
  monitor: MonitorIdentifier;
}

export interface OutputEntityIdentifier_monitorView {
  type: "monitorView";
  monitorView: MonitorViewIdentifier;
}

export interface OutputEntityIdentifier_mapRendererSet {
  type: "mapRendererSet";
  mapRendererSet: MapRendererSetIdentifier;
}

export interface OutputEntityIdentifier_mapRendererSetV2 {
  type: "mapRendererSetV2";
  mapRendererSetV2: MapRendererSetIdentifierV2;
}

export interface OutputEntityIdentifier_namedCredential {
  type: "namedCredential";
  namedCredential: NamedCredentialIdentifier;
}

export interface OutputEntityIdentifier_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: NetworkEgressPolicyIdentifier;
}

export interface OutputEntityIdentifier_notepadDocument {
  type: "notepadDocument";
  notepadDocument: NotepadPartialResolvedShape;
}

export interface OutputEntityIdentifier_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: NotepadTemplateIdentifier;
}

export interface OutputEntityIdentifier_notepadTemplateParameter {
  type: "notepadTemplateParameter";
  notepadTemplateParameter: NotepadTemplateParameterIdentifier;
}

export interface OutputEntityIdentifier_objectSet {
  type: "objectSet";
  objectSet: ObjectSetIdentifier;
}

export interface OutputEntityIdentifier_objectType {
  type: "objectType";
  objectType: OutputObjectTypeIdentifier;
}

export interface OutputEntityIdentifier_objectView {
  type: "objectView";
  objectView: ObjectViewIdentifier;
}

export interface OutputEntityIdentifier_objectViewTab {
  type: "objectViewTab";
  objectViewTab: ObjectViewTabIdentifier;
}

export interface OutputEntityIdentifier_ontologySdk {
  type: "ontologySdk";
  ontologySdk: OntologySdkEntityIdentifier;
}

export interface OutputEntityIdentifier_ontologySdkV2 {
  type: "ontologySdkV2";
  ontologySdkV2: OntologySdkV2EntityIdentifier;
}

export interface OutputEntityIdentifier_ontologyDatasource {
  type: "ontologyDatasource";
  ontologyDatasource: OntologyDatasourceIdentifier;
}

export interface OutputEntityIdentifier_property {
  type: "property";
  property: PropertyIdentifier;
}

export interface OutputEntityIdentifier_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: QuiverDashboardIdentifier;
}

export interface OutputEntityIdentifier_resourceUpdatesContent {
  type: "resourceUpdatesContent";
  resourceUpdatesContent: ResourceUpdatesContentIdentifier;
}

export interface OutputEntityIdentifier_rosettaDocsBundle {
  type: "rosettaDocsBundle";
  rosettaDocsBundle: RosettaDocsBundleIdentifier;
}

export interface OutputEntityIdentifier_schedule {
  type: "schedule";
  schedule: ScheduleIdentifier;
}

export interface OutputEntityIdentifier_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SharedPropertyTypeIdentifier;
}

export interface OutputEntityIdentifier_slateApplication {
  type: "slateApplication";
  slateApplication: SlateApplicationIdentifier;
}

export interface OutputEntityIdentifier_solutionDesign {
  type: "solutionDesign";
  solutionDesign: SolutionDesignIdentifier;
}

export interface OutputEntityIdentifier_tabularDatasource {
  type: "tabularDatasource";
  tabularDatasource: TabularDatasourceOutputIdentifier;
}

export interface OutputEntityIdentifier_taurusWorkflow {
  type: "taurusWorkflow";
  taurusWorkflow: TaurusWorkflowIdentifier;
}

export interface OutputEntityIdentifier_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: ThirdPartyApplicationEntityIdentifier;
}

export interface OutputEntityIdentifier_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: TimeSeriesSyncRid;
}

export interface OutputEntityIdentifier_transformsJobSpec {
  type: "transformsJobSpec";
  transformsJobSpec: LegacyNotImplementedIdentifier;
}

export interface OutputEntityIdentifier_valueType {
  type: "valueType";
  valueType: VersionedValueTypeIdentifier;
}

export interface OutputEntityIdentifier_vertexTemplate {
  type: "vertexTemplate";
  vertexTemplate: VertexEntityIdentifier;
}

export interface OutputEntityIdentifier_vortexTemplate {
  type: "vortexTemplate";
  vortexTemplate: VortexEntityIdentifier;
}

export interface OutputEntityIdentifier_walkthrough {
  type: "walkthrough";
  walkthrough: WalkthroughEntityIdentifier;
}

export interface OutputEntityIdentifier_webhook {
  type: "webhook";
  webhook: WebhookEntityIdentifier;
}

export interface OutputEntityIdentifier_widget {
  type: "widget";
  widget: WidgetIdentifier;
}

export interface OutputEntityIdentifier_widgetSet {
  type: "widgetSet";
  widgetSet: WidgetSetIdentifier;
}

export interface OutputEntityIdentifier_workflowGraph {
  type: "workflowGraph";
  workflowGraph: WorkflowGraphIdentifier;
}

export interface OutputEntityIdentifier_workshop {
  type: "workshop";
  workshop: WorkshopIdentifier;
}
export type OutputEntityIdentifier =
  | OutputEntityIdentifier_action
  | OutputEntityIdentifier_actionParameter
  | OutputEntityIdentifier_aipAgent
  | OutputEntityIdentifier_appConfigTitanium
  | OutputEntityIdentifier_appConfig
  | OutputEntityIdentifier_artifactsRepository
  | OutputEntityIdentifier_authoringLibrary
  | OutputEntityIdentifier_authoringRepository
  | OutputEntityIdentifier_automation
  | OutputEntityIdentifier_blobster
  | OutputEntityIdentifier_carbonWorkspace
  | OutputEntityIdentifier_checkpointConfig
  | OutputEntityIdentifier_cipherChannel
  | OutputEntityIdentifier_cipherLicense
  | OutputEntityIdentifier_codeWorkspace
  | OutputEntityIdentifier_compassResource
  | OutputEntityIdentifier_contourAnalysis
  | OutputEntityIdentifier_dataHealthCheck
  | OutputEntityIdentifier_dataHealthCheckGroup
  | OutputEntityIdentifier_deployedApp
  | OutputEntityIdentifier_datasourceColumn
  | OutputEntityIdentifier_eddieEdgePipeline
  | OutputEntityIdentifier_eddiePipeline
  | OutputEntityIdentifier_evaluationSuite
  | OutputEntityIdentifier_filesDatasource
  | OutputEntityIdentifier_function
  | OutputEntityIdentifier_functionConfiguration
  | OutputEntityIdentifier_geotimeSeriesIntegration
  | OutputEntityIdentifier_interfaceType
  | OutputEntityIdentifier_interfaceLinkType
  | OutputEntityIdentifier_interfacePropertyType
  | OutputEntityIdentifier_link
  | OutputEntityIdentifier_logic
  | OutputEntityIdentifier_logicFunction
  | OutputEntityIdentifier_machinery
  | OutputEntityIdentifier_magritteExtract
  | OutputEntityIdentifier_magritteExport
  | OutputEntityIdentifier_magritteSource
  | OutputEntityIdentifier_magritteStreamingExtract
  | OutputEntityIdentifier_model
  | OutputEntityIdentifier_monitor
  | OutputEntityIdentifier_monitorView
  | OutputEntityIdentifier_mapRendererSet
  | OutputEntityIdentifier_mapRendererSetV2
  | OutputEntityIdentifier_namedCredential
  | OutputEntityIdentifier_networkEgressPolicy
  | OutputEntityIdentifier_notepadDocument
  | OutputEntityIdentifier_notepadTemplate
  | OutputEntityIdentifier_notepadTemplateParameter
  | OutputEntityIdentifier_objectSet
  | OutputEntityIdentifier_objectType
  | OutputEntityIdentifier_objectView
  | OutputEntityIdentifier_objectViewTab
  | OutputEntityIdentifier_ontologySdk
  | OutputEntityIdentifier_ontologySdkV2
  | OutputEntityIdentifier_ontologyDatasource
  | OutputEntityIdentifier_property
  | OutputEntityIdentifier_quiverDashboard
  | OutputEntityIdentifier_resourceUpdatesContent
  | OutputEntityIdentifier_rosettaDocsBundle
  | OutputEntityIdentifier_schedule
  | OutputEntityIdentifier_sharedPropertyType
  | OutputEntityIdentifier_slateApplication
  | OutputEntityIdentifier_solutionDesign
  | OutputEntityIdentifier_tabularDatasource
  | OutputEntityIdentifier_taurusWorkflow
  | OutputEntityIdentifier_thirdPartyApplication
  | OutputEntityIdentifier_timeSeriesSync
  | OutputEntityIdentifier_transformsJobSpec
  | OutputEntityIdentifier_valueType
  | OutputEntityIdentifier_vertexTemplate
  | OutputEntityIdentifier_vortexTemplate
  | OutputEntityIdentifier_walkthrough
  | OutputEntityIdentifier_webhook
  | OutputEntityIdentifier_widget
  | OutputEntityIdentifier_widgetSet
  | OutputEntityIdentifier_workflowGraph
  | OutputEntityIdentifier_workshop;

export interface OutputLinkTypeIdentifier {
  identifier: LinkTypeIdentifier;
}
export type OutputObjectBackendVersion = "V1" | "V2";

/**
 * The objects backend support of the provided ObjectType does not match the packaged resource.
 */
export interface OutputObjectsBackendMismatch {
  actual: OutputObjectBackendVersion;
  expected: OutputObjectBackendVersion;
}
export interface OutputObjectTypeIdentifier {
  identifier: ObjectTypeIdentifier;
}
/**
 * A resolved output from this installation is already by another installation. This can happen if an output from
 * one installation is attached to another installation. As of writing, this is just treated as a warning, and
 * the user can decide to proceed with the installation if they want to, effectively attaching the outputs back
 * to the current installation.
 */
export interface OutputOwnedByAnotherInstallation {
  blockInstallationRid: BlockInstallationRid;
  blockSetBlockInstanceId: BlockSetBlockInstanceId;
  blockSetInstallationRid: BlockSetInstallationRid;
  blockShapeId: BlockShapeId;
  blockVersionId: BlockVersionId;
}
/**
 * Refers to an output shape of some block. The block reference is valid in the context of this install request.
 * That is, it may be a concrete BlockInstallationRid (where the shape id is only guaranteed to exist after
 * any upgrades on that block installation have happened) or via referring to the output of a block which
 * is to be newly installed as part of this request.
 */
export interface OutputReference {
  blockReference: BlockReference;
  outputId: BlockShapeId;
}
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

export interface OutputShapeCleanupPreview {
  resolvedOutputShape: ResolvedBlockSetOutputShape;
  softDeleteMode: SoftDeleteMode;
}
export interface OutputShapeDependencies {
  externallyProvided: Array<InputBlockSetShapeId>;
  internallyRecommended: Array<OutputBlockSetShapeId>;
}
/**
 * Manually overriding block outputs is not supported.
 */
export interface OutputShapeOverrideNotSupported {
  shapeId: BlockShapeId;
}
/**
 * An existing output shape has been removed, which may impact downstream consumers in two ways:
 * 1) Inside of a blockset this can manifest as a requirement to supply a new input, which is also captured as a
 * separate diff implication.
 * 2) Outside of a blockset, downstream consumers such as pipelines or other workflows might have their lineage
 * broken.
 */
export interface OutputShapeRemovedImplication {
  shapeId: BlockShapeId;
}
export interface OutputShapeResult {
  blockShapeId: BlockShapeId;
  internalShapeId: InternalShapeId;
  resolvedShape: ResolvedOutputShape;
  shape: OutputShape;
}
/**
 * Corresponds 1:1 with the member types of the OutputShape union.
 *
 * NOTE: The name here needs to be identical to the name in `InputShapeType` for the same shape type.
 */
export type OutputShapeType =
  | "ACTION"
  | "ACTION_PARAMETER"
  | "AIP_AGENT"
  | "APP_CONFIG"
  | "APP_CONFIG_TITANIUM"
  | "ARTIFACTS_REPOSITORY"
  | "AUTHORING_LIBRARY"
  | "AUTHORING_REPOSITORY"
  | "AUTOMATION"
  | "BLOBSTER_RESOURCE"
  | "CARBON_WORKSPACE"
  | "CHECKPOINT_CONFIG"
  | "CIPHER_CHANNEL"
  | "CIPHER_LICENSE"
  | "CODE_WORKSPACE"
  | "CONTOUR_ANALYSIS"
  | "COMPASS_RESOURCE"
  | "DATA_HEALTH_CHECK"
  | "DATA_HEALTH_CHECK_GROUP"
  | "DATASOURCE_COLUMN"
  | "DEPLOYED_APP"
  | "EDDIE_EDGE_PIPELINE"
  | "EDDIE_PIPELINE"
  | "EVALUATION_SUITE"
  | "FILES_DATASOURCE"
  | "FUNCTION"
  | "FUNCTION_CONFIGURATION"
  | "GEOTIME_SERIES_INTEGRATION"
  | "INTERFACE_TYPE"
  | "INTERFACE_LINK_TYPE"
  | "INTERFACE_PROPERTY_TYPE"
  | "LINK_TYPE"
  | "LOGIC"
  | "LOGIC_FUNCTION"
  | "MACHINERY"
  | "MAGRITTE_EXPORT"
  | "MAGRITTE_EXTRACT"
  | "MAGRITTE_STREAMING_EXTRACT"
  | "MAGRITTE_SOURCE"
  | "MAP_RENDERER_SET"
  | "MAP_RENDERER_SET_V2"
  | "MODEL"
  | "MONITOR"
  | "MONITOR_VIEW"
  | "NAMED_CREDENTIAL"
  | "NETWORK_EGRESS_POLICY"
  | "NOTEPAD_DOCUMENT"
  | "NOTEPAD_TEMPLATE"
  | "NOTEPAD_TEMPLATE_PARAMETER"
  | "OBJECT_SET"
  | "OBJECT_TYPE"
  | "OBJECT_VIEW"
  | "OBJECT_VIEW_TAB"
  | "ONTOLOGY_DATASOURCE"
  | "PROPERTY"
  | "QUIVER_DASHBOARD"
  | "RESOURCE_UPDATES_CONTENT"
  | "ROSETTA_DOCS_BUNDLE"
  | "SCHEDULE"
  | "SHARED_PROPERTY_TYPE"
  | "ONTOLOGY_SDK"
  | "ONTOLOGY_SDK_V2"
  | "SLATE_APPLICATION"
  | "SOLUTION_DESIGN"
  | "TABULAR_DATASOURCE"
  | "TAURUS_WORKFLOW"
  | "THIRD_PARTY_APPLICATION"
  | "TIME_SERIES_SYNC"
  | "TRANSFORMS_JOB_SPEC"
  | "VALUE_TYPE"
  | "VERTEX_TEMPLATE"
  | "VORTEX_TEMPLATE"
  | "WALKTHROUGH"
  | "WEBHOOK"
  | "WIDGET"
  | "WIDGET_SET"
  | "WORKFLOW_GRAPH"
  | "WORKSHOP_APPLICATION";

/**
 * Shape type does not match between the versions.
 */
export interface OutputShapeTypeMismatchImplication {
  shapeTypeA: OutputShapeType;
  shapeTypeB: OutputShapeType;
}
export interface OutputShapeUninstallPreview {
  isInCurrentInstallation: boolean;
  resolvedOutputShape: ResolvedBlockSetOutputShape;
}
/**
 * Representation of an resource with an optional version/config specification that a user wants to package that
 * resource with. After having created a block, an integration will return a ResolvedOutputSpec, with the actual
 * version/config used.
 */
export interface OutputSpec {
  configuration?: OutputSpecConfig | null | undefined;
  rid: string;
  version?: ResourceVersion | null | undefined;
}
export interface OutputSpecConfig_authoringRepositoryConfig {
  type: "authoringRepositoryConfig";
  authoringRepositoryConfig: AuthoringRepositoryOutputSpecConfig;
}

export interface OutputSpecConfig_automationConfig {
  type: "automationConfig";
  automationConfig: AutomationOutputSpecConfig;
}

export interface OutputSpecConfig_cipherChannelConfig {
  type: "cipherChannelConfig";
  cipherChannelConfig: CipherChannelOutputSpecConfig;
}

export interface OutputSpecConfig_cipherLicenseConfig {
  type: "cipherLicenseConfig";
  cipherLicenseConfig: CipherLicenseOutputSpecConfig;
}

export interface OutputSpecConfig_datasetConfig {
  type: "datasetConfig";
  datasetConfig: DatasetOutputSpecConfig;
}

export interface OutputSpecConfig_eddiePipelineConfig {
  type: "eddiePipelineConfig";
  eddiePipelineConfig: EddiePipelineOutputSpecConfig;
}

export interface OutputSpecConfig_mediaSetConfig {
  type: "mediaSetConfig";
  mediaSetConfig: MediaSetOutputSpecConfig;
}

export interface OutputSpecConfig_modelConfig {
  type: "modelConfig";
  modelConfig: ModelOutputSpecConfig;
}

export interface OutputSpecConfig_computeModuleConfig {
  type: "computeModuleConfig";
  computeModuleConfig: ComputeModuleOutputSpecConfig;
}

export interface OutputSpecConfig_objectViewConfig {
  type: "objectViewConfig";
  objectViewConfig: ObjectViewOutputSpecConfig;
}
/**
 * Some outputSpecs can have additional configurations, which are defined here. Any configuration type that does
 * not align with the outputSpec of a respective rid type will cause an error.
 */
export type OutputSpecConfig =
  | OutputSpecConfig_authoringRepositoryConfig
  | OutputSpecConfig_automationConfig
  | OutputSpecConfig_cipherChannelConfig
  | OutputSpecConfig_cipherLicenseConfig
  | OutputSpecConfig_datasetConfig
  | OutputSpecConfig_eddiePipelineConfig
  | OutputSpecConfig_mediaSetConfig
  | OutputSpecConfig_modelConfig
  | OutputSpecConfig_computeModuleConfig
  | OutputSpecConfig_objectViewConfig;

/**
 * Corresponds 1:1 with the member types of the OutputSpecConfig union.
 */
export type OutputSpecConfigType =
  | "AUTHORING"
  | "AUTOMATION"
  | "CIPHER_CHANNEL"
  | "CIPHER_LICENSE"
  | "DATASET"
  | "EDDIE_PIPELINE"
  | "MEDIA_SET"
  | "MODEL"
  | "COMPUTE_MODULE"
  | "OBJECT_VIEW";
export interface OutputSpecError {
  blockType?: BlockType | null | undefined;
  error: CreateBlockVersionErrorUnion;
  severity: ErrorSeverity;
}
export interface OutputSpecErrors_errors {
  type: "errors";
  errors: Array<OutputSpecError>;
}

export interface OutputSpecErrors_insufficientPermissions {
  type: "insufficientPermissions";
  insufficientPermissions: Array<OutputSpecInsufficientPermissionsError>;
}
export type OutputSpecErrors =
  | OutputSpecErrors_errors
  | OutputSpecErrors_insufficientPermissions;

export interface OutputSpecInsufficientPermissionsError {
  blockType?: BlockType | null | undefined;
  error: InsufficientPermissionsErrorUnion;
}
export interface OutputSpecProvenance_explicit {
  type: "explicit";
  explicit: ExplicitProvenance;
}

export interface OutputSpecProvenance_dependency {
  type: "dependency";
  dependency: DependencyProvenance;
}

export interface OutputSpecProvenance_discovered {
  type: "discovered";
  discovered: DiscoveryProvenance;
}

export interface OutputSpecProvenance_inferredFolderStructure {
  type: "inferredFolderStructure";
  inferredFolderStructure: Void;
}
/**
 * Order of union type mirrors the order these will be returned in the list.
 */
export type OutputSpecProvenance =
  | OutputSpecProvenance_explicit
  | OutputSpecProvenance_dependency
  | OutputSpecProvenance_discovered
  | OutputSpecProvenance_inferredFolderStructure;

export interface OutputSpecResult {
  dependencies: Array<ResolvedOutputSpec>;
  dependenciesV2: Array<OutputSpec>;
  outputSpecs: Array<ResolvedOutputSpec>;
  result: GranularOutputSpecResult;
  specsAndProvenance: Array<ResolvedOutputSpecAndProvenance>;
}
/**
 * Constraint failure when installation is currently outside all maintenance windows
 */
export interface OutsideMaintenanceWindowsConstraintFailure {
  nextMaintenanceWindow?: MaintenanceWindow | null | undefined;
}
/**
 * All fields are optional. Only set fields will override metadata from the previous version. Unset versions will
 * propagate as normal.
 */
export interface OverriddenMetadataFromStartingVersion {
  packagingSettings?: PackagingSettings | null | undefined;
}
export interface OverriddenOutputSpecs {
  outputSpecs: Array<OutputSpec>;
}
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
export interface OwnedBlockMetadata {
  creationTimestamp: CreationTimestamp;
  id: BlockId;
  marketplaceRid: MarketplaceRid;
}
export type PackageName = string;
export type PackagingLogicVersion = "V1" | "V2";

/**
 * Settings defined by the user at packaging time that are tied to this particular version of the block set.
 * WARNING: Packaging settings do not currently get propagated between versions like other metadata. In order to
 * have these on start new version, this should be set in `OverriddenMetadataFromStartingVersion`. In the future,
 * this behaviour will change to propagate.
 */
export interface PackagingSettings {
  inferredFolderStructure: InferredFolderStructureSettings;
}
/**
 * Number of items to return in a single page. May return more (usually defaults to minimum 10) or less (usually
 * defaults to maximum 100). Serves as a hint to the server, which can serve more/fewer results depending on what
 * ends up being more efficient.
 */
export type PageSizeLimitHint = number;
export interface ParameterAndAction {
  actionTypeIdentifier: ActionTypeIdentifier;
  parameterKey: ActionParameterRidOrId;
}
export interface ParameterInputShape {
  about: LocalizedTitleAndDescription;
  id?: StableShapeIdentifier | null | undefined;
  parameterType: DataType;
}
export interface ParameterPartialResolvedShape {
  about: LocalizedTitleAndDescription;
  currentValue: DataValue;
  id?: StableShapeIdentifier | null | undefined;
}
export interface PartiallyDeletedInstallationRationale {
  blockSetInstallationRid: BlockSetInstallationRid;
}
/**
 * Same as `ResolvedOutputSpec`, but only the configuration has been resolved, not the version.
 */
export interface PartiallyResolvedOutputSpec {
  configuration: ResolvedOutputSpecConfig;
  rid: string;
  version?: ResourceVersion | null | undefined;
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
export type PendingBlockSetInputShapes = Record<
  InputBlockSetShapeId,
  PendingInputBlockSetMappingInfo
>;

/**
 * Output block set shape IDs uniquely map to a set of backing output shapes that share a single merge key.
 */
export type PendingBlockSetOutputShapes = Record<
  OutputBlockSetShapeId,
  PendingOutputBlockSetMappingInfo
>;

/**
 * Metadata for a pending block set version before it has been finalised at a specific semver.
 */
export interface PendingBlockSetVersionMetadata {
  about: LocalizedTitleAndDescription;
  createdByUser?: MultipassUserId | null | undefined;
  creationTimestamp: CreationTimestamp;
  defaultInstallationSettings?: DefaultInstallationSettings | null | undefined;
  id: BlockSetId;
  lastUpdatedTimestamp: LastUpdatedTimestamp;
  marketplaceRid: MarketplaceRid;
  packagingSettings?: PackagingSettings | null | undefined;
  startingVersionId?: BlockSetVersionId | null | undefined;
  startingVersionSemver?: SemverVersion | null | undefined;
  tagsV2: BlockSetCategorizedTags;
  typedTags: Array<TagRid>;
  version?: SemverVersion | null | undefined;
  versionId: BlockSetVersionId;
  versionIncrement?: VersionIncrement | null | undefined;
}
export interface PendingBuildInstallPendingStatus {
}
/**
 * `StoredInputBlockSetMappingInfo` but for pending block sets. The only difference is that this data structure
 * supports input shapes that can not be merged.
 */
export interface PendingInputBlockSetMappingInfo {
  isOptional: boolean;
  metadata?: InputBlockSetShapeMetadata | null | undefined;
  shapes: Array<BlockSetInputShapeWithBackingShapes>;
}
/**
 * `StoredOutputBlockSetMappingInfo` but for pending block sets. The only difference is that this data structure
 * supports having multiple block outputs mapped to a single block set output.
 */
export interface PendingOutputBlockSetMappingInfo {
  shapes: Array<BlockSetOutputShapeWithBackingShape>;
}
export interface PendingRecommendationStatus_processing {
  type: "processing";
  processing: Void;
}

export interface PendingRecommendationStatus_complete {
  type: "complete";
  complete: Array<ExternalRecommendationV2>;
}
export type PendingRecommendationStatus =
  | PendingRecommendationStatus_processing
  | PendingRecommendationStatus_complete;

export interface PermanentlyDeleteUninstallOptions {
  forceDelete?: boolean | null | undefined;
}
export interface PlaceholdersLocation {
  compassFolder?: CompassFolderRid | null | undefined;
}
export interface PlainTextTypeUnsupported {
  unsupportedPlainTextType: string;
}
export interface PngFormat {
}
/**
 * Port configuration used for external networking
 */
export interface PortConfig {
  name: string;
  port: number;
}
/**
 * If a dataset build was successfully submitted at the end of installation, we provide the build details here.
 * This does not provide any guarantees that the build has finished running.
 */
export interface PostInstallationBuildMetadata {
  buildRid: BuildRid;
  jobRidsByShapeIds: Record<BlockShapeId, JobRid>;
}
export interface PostInstallationJobTask_buildMetadata {
  type: "buildMetadata";
  buildMetadata: PostInstallationBuildMetadata;
}
export type PostInstallationJobTask = PostInstallationJobTask_buildMetadata;

export interface PptxFormat {
}
/**
 * RESOURCE_PREALLOCATION_REQUIRED requires the resource has been preallocated already
 * by the block that owns it, resulting in the resource being available during preallocation
 * as a resolved input shape.
 */
export type PreallocateAccessRequirementType =
  "RESOURCE_PREALLOCATION_REQUIRED";
export interface PreallocatingInstallPendingStatus {
}
/**
 * Whether or not resolved presets will be enforced at installation time.
 * - SUGGESTED: The presets will be suggested to the installing user, but they can chose to override the value.
 * - MANDATORY: The presets will be enforced. An install request trying to change the presets value will fail.
 */
export type PresetEnforcement = "SUGGESTED" | "MANDATORY";
export interface PresetFromSource {
  resolver: InputShapeResolver;
}
/**
 * The preset resolution for the shape failed, and was required to determine if the provided input shape
 * satisfies mandatory presets for the shape.
 */
export interface PresetResolutionFailedError {
  resolutionErrors: Array<ResolvedShapeResolutionFailure>;
}
export interface PresetResolvedShapeOverrides {
  defaultIndex?: number | null | undefined;
  resolvedShapes: Array<ResolvedBlockSetInputShape>;
  resolvers: Array<InputShapeResolver>;
}
export interface PresetValue_fromSource {
  type: "fromSource";
  fromSource: PresetFromSource;
}

export interface PresetValue_resolvedShapeOverrides {
  type: "resolvedShapeOverrides";
  resolvedShapeOverrides: PresetResolvedShapeOverrides;
}
export type PresetValue =
  | PresetValue_fromSource
  | PresetValue_resolvedShapeOverrides;

export interface PreviewCleanupUnusedShapesResponse {
  outputShapePreviews: Array<OutputShapeCleanupPreview>;
}
export interface PreviewUninstallResponse {
  outputShapePreviews: Record<
    OutputBlockSetShapeId,
    OutputShapeUninstallPreview
  >;
}
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

export interface Principal {
  id: PrincipalId;
  type: PrincipalType;
}
export type PrincipalId = string;
export type PrincipalType = "EVERYONE" | "GROUP" | "USER";

/**
 * Automation is currently planning a potential upgrade, and has nothing to report yet
 */
export interface ProcessingStatus {
}
export type ProductDisplayVersion = string;
export type ProductId = string;

/**
 * The installation mode of the product is a suggestion for properties of the installations of this product.
 *
 * PRODUCTION products are suggested to:
 * - be installed into a locked-down project and the resources are not editable
 * - have automatic upgrades enabled
 *
 * BOOTSTRAPPER products suggested to
 * - be installed into a project that is editable
 * - have automatic upgrades disabled
 *
 * SINGLETON products are suggested to:
 * - behave in the same way as production mode
 * - enforce source api names & block upgrades if api names conflict or another install already exists in the namespace
 *
 * See more documentation under `setBlockSetInstallationImmutability` in the marketplace-api.
 *
 * Defaults to PRODUCTION.
 */
export type ProductInstallationMode =
  | "PRODUCTION"
  | "BOOTSTRAPPER"
  | "SINGLETON";

/**
 * Product types allow us to make recommendations about what type entities should be included in the product.
 * e.g. An 'ONTOLOGY' product is recommended to contain object types, link types and action types.
 *
 * These recommendations are not enforced.
 *
 * Defaults to NONE.
 */
export type ProductType =
  | "NONE"
  | "DATA_CONNNECTION"
  | "MODELING"
  | "ONTOLOGY"
  | "PIPELINE"
  | "USE_CASE";
export type ProductVersionId = string;

/**
 * First-class metadata for products (a wrapper around block sets), usually extracted from the block set tags.
 */
export interface ProductVersionMetadata {
  about: LocalizedTitleAndDescription;
  activeRecalls: Record<RecallId, RecallVersionsAnnouncement>;
  backingBlockSet: BlockSetVersionReference;
  createdAt: CreationTimestamp;
  displayVersion: ProductDisplayVersion;
  installationMode: ProductInstallationMode;
  productId: ProductId;
  productVersionId: ProductVersionId;
  releaseChannels: Array<ReleaseChannel>;
  status: ProductVersionStatus;
  type: ProductType;
}
/**
 * A version of a products can be deprecated.
 *
 * Defaults to NONE (which implies the product is safe to install).
 */
export type ProductVersionStatus = "NONE" | "DEPRECATED";
export type ProjectContext = string;
export interface PropertyAndObject {
  objectTypeIdentifier: ObjectTypeIdentifier;
  propertyKey: PropertyTypeRidOrId;
  requireSharedPropertyType?: boolean | null | undefined;
}
export interface PropertyIdentifier_propertyAndObject {
  type: "propertyAndObject";
  propertyAndObject: PropertyAndObject;
}
export type PropertyIdentifier = PropertyIdentifier_propertyAndObject;

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
export type PropertyTypeId = string;
export interface PropertyTypeMismatch {
  actual: ObjectPropertyType;
  expected: ObjectPropertyType;
}
export interface PropertyTypeNotFound {
  objectTypeId?: ObjectTypeId | null | undefined;
  objectTypeRid?: ObjectTypeRid | null | undefined;
  propertyTypeId?: PropertyTypeId | null | undefined;
  propertyTypeRid?: PropertyTypeRid | null | undefined;
}
export type PropertyTypeRid = string;
export interface PropertyTypeRidOrId_rid {
  type: "rid";
  rid: PropertyTypeRid;
}

export interface PropertyTypeRidOrId_id {
  type: "id";
  id: PropertyTypeId;
}
export type PropertyTypeRidOrId =
  | PropertyTypeRidOrId_rid
  | PropertyTypeRidOrId_id;

/**
 * An unknown type of PropertyType definition was encountered. This indicates we might have run into a new
 * kind of PropertyType that isn't yet supported in Marketplace.
 */
export interface PropertyTypeUnknown {
  unknownType: string;
}
/**
 * The proposed location to install a block into. Additional targets might be added to this object in the future.
 * Used by `MarketplaceBlockInstallerService`. This is different from `InstallLocation`, which is used by the
 * `BlockInstallationService.installBlocksV2`, and from BlockInstallLocation, which is used by
 * MarketplaceBlockInstallerService in the preallocate and reconcile steps. This is instead used by
 * MarketplaceBlockInstallerService.validateInstallBlockRequest, which checks if the block can be installed. The
 * main difference is that the compass install location is optional here, as  the project is created during
 * installation, and we do not want to create a new project during the validation step.
 */
export interface ProposedBlockInstallLocation {
  compass?: CompassInstallLocation | null | undefined;
  compassV2: ProposedCompassInstallLocation;
  ontology?: OntologyInstallLocation | null | undefined;
}
/**
 * The Compass location to install a block into.
 */
export interface ProposedCompassInstallLocation {
  compassFolderRid?: CompassFolderRid | null | undefined;
  namespaceRid: NamespaceRid;
  newProjectOrExistingFolder: NewProjectOrExistingFolder;
}
export interface PutCategoryRequest {
  name: LocalizedName;
  rid?: CategoryRid | null | undefined;
  tags: Array<PutTagRequest>;
}
export interface PutMarketplaceMetadataRequest {
  categories: Array<PutCategoryRequest>;
  latestKnownVersion: MarketplaceMetadataVersion;
  requireApprovals?: boolean | null | undefined;
}
export interface PutTagRequest {
  name: LocalizedName;
  rid?: TagRid | null | undefined;
}
export interface PypiLocator {
  fileName: string;
  md5Digest?: string | null | undefined;
  project: string;
  requiresPython?: string | null | undefined;
  sha256Digest?: string | null | undefined;
  url: string;
}
export interface QuiverCreateBlockRequest {
  rid: string;
  version?: number | null | undefined;
}
/**
 * Quiver dashboard entity identifier for generating quiver shapes
 */
export interface QuiverDashboardIdentifier {
  rid: string;
  version?: number | null | undefined;
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
 * Unique identifier for a recall.
 */
export type RecallId = string;

/**
 * A recall announcement made by the packager to recall a blockset version. This announcement is used by
 * Marketplace to to block target versions from being installed, and triggering roll-offs for installers based
 * on the specified roll-off strategy.
 */
export interface RecallVersionsAnnouncement {
  createdAt?: string | null | undefined;
  id: RecallId;
  message: string;
  strategy: RollOffStrategy;
  targetVersions: Array<BlockSetVersionId>;
}
export interface RecommendationBlockReference {
  block: VersionRangeBlockReference;
  shapeId: BlockShapeId;
}
export interface RecommendationBlockSetReference {
  block: VersionRangeBlockSetReference;
  shapeId: BlockShapeId;
}
export interface RecommendationEntryBody_simple {
  type: "simple";
  simple: SimpleRecommendation;
}

export interface RecommendationEntryBody_actionType {
  type: "actionType";
  actionType: ActionTypeRecommendation;
}
export type RecommendationEntryBody =
  | RecommendationEntryBody_simple
  | RecommendationEntryBody_actionType;

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
export interface ReconcilingInstallPendingStatus {
}
export interface RefreshSpecsConfig_refreshAll {
  type: "refreshAll";
  refreshAll: Void;
}

export interface RefreshSpecsConfig_refreshDiscovery {
  type: "refreshDiscovery";
  refreshDiscovery: Void;
}

export interface RefreshSpecsConfig_refreshMaterialization {
  type: "refreshMaterialization";
  refreshMaterialization: Void;
}

export interface RefreshSpecsConfig_refreshNone {
  type: "refreshNone";
  refreshNone: Void;
}

export interface RefreshSpecsConfig_refreshSubset {
  type: "refreshSubset";
  refreshSubset: Array<OutputSpec>;
}
/**
 * Refreshing specs affects both discovery specs and output specs:
 * - When output specs are refreshed, they are re-resolved (e.g., the latest version is picked up) and the
 * materialized blocks and shapes are re-computed. This always occurs if there is no previous result for the
 * specs.
 * - When discovery specs are refreshed, the root RID is re-synced (i.e., new resources in the folder are
 * discovered, and removed resources are removed).
 */
export type RefreshSpecsConfig =
  | RefreshSpecsConfig_refreshAll
  | RefreshSpecsConfig_refreshDiscovery
  | RefreshSpecsConfig_refreshMaterialization
  | RefreshSpecsConfig_refreshNone
  | RefreshSpecsConfig_refreshSubset;

/**
 * Includes raw public key string to be registered, and maven coordinates that the key is able to verify.
 */
export interface RegisterKeyRequest {
  mavenCoordinates: MavenCoordinates;
  publicKey: SigningPublicKey;
}
export interface RegisterKeyResponse {
}
export type ReleaseChannel = string;
export type ReleaseRid = string;

/**
 * Reference a patched repodata in a conda layout. It allows to ship patched environments that may not be solvable in destination stacks
 */
export interface RepoDataLocator {
  platform: string;
}
export type RepositorySourceCodePackagingType =
  | "OMIT_SOURCE_CODE"
  | "SHALLOW_CLONE"
  | "DEEP_CLONE";
export type RequestType = "ENCRYPT" | "DECRYPT";

/**
 * A parameter shape specified in the block metadata is missing from the ResolvedActionType.
 */
export interface RequiredActionParameterTypeShapeMissing {
}
export interface RequiresAdditionalConfigurationDiffImplication_newInputShapeAdded {
  type: "newInputShapeAdded";
  newInputShapeAdded: NewInputShapeAddedImplication;
}
export type RequiresAdditionalConfigurationDiffImplication =
  RequiresAdditionalConfigurationDiffImplication_newInputShapeAdded;

export interface ResolvedActionTypeParameterShape {
  actionTypeRid: ActionTypeRid;
  actionTypeVersion: ActionTypeVersion;
  ontologyRid: OntologyRid;
  parameterId: ActionParameterId;
  parameterRid: ActionParameterRid;
}
/**
 * Shape Id that was resolved for the ActionType does not match the shape id expected.
 */
export interface ResolvedActionTypeReferenceMismatch {
  actual: ActionTypeReference;
  expected: ActionTypeReference;
}
export interface ResolvedActionTypeShape {
  apiName?: ActionTypeApiName | null | undefined;
  ontologyRid: OntologyRid;
  parameters: Record<ActionParameterShapeId, ActionTypeParameterIdentifiers>;
  rid: ActionTypeRid;
  version: ActionTypeVersion;
}
export interface ResolvedAipAgentShape {
  agentRid: AipAgentRid;
  agentVersion: AipAgentVersion;
}
/**
 * See docs of `AllowSchemaMigrationsShape` for details.
 */
export interface ResolvedAllowOntologySchemaMigrationsShape {
  allowCastMigrations: boolean;
  allowDropMigrations: boolean;
  allowRenameDatasourceMigrations?: boolean | null | undefined;
  allowRenamePropertyMigrations?: boolean | null | undefined;
}
/**
 * In order to identify a library, we need both the rid of the Artifacts repository it lives in, as well as the
 * locator of the library within this repository (e.g in the case of a Python library under the Conda layout,
 * we need the Conda locator to identify the library within the repository). For more, see
 * https://rtfm.palantir.build/docs/artifacts/develop/overview.html#layouts
 */
export interface ResolvedAuthoringLibraryShape {
  locator: AuthoringLibraryLocator;
  repositoryRid: ArtifactsRepositoryRid;
}
export interface ResolvedAutomationShape {
  rid: string;
}
export type ResolvedBlockSetInputGroup = ResolvedInputGroup;
export interface ResolvedBlockSetInputOrRef_resolvedInputShape {
  type: "resolvedInputShape";
  resolvedInputShape: ResolvedBlockSetInputShape;
}

export interface ResolvedBlockSetInputOrRef_referenceOtherOutput {
  type: "referenceOtherOutput";
  referenceOtherOutput: BlockSetOutputReference;
}

export interface ResolvedBlockSetInputOrRef_referenceExistingOutputInStore {
  type: "referenceExistingOutputInStore";
  referenceExistingOutputInStore: BlockSetInstallationOutputReference;
}

export interface ResolvedBlockSetInputOrRef_fromDefault {
  type: "fromDefault";
  fromDefault: ResolvedBlockSetInputShape;
}
export type ResolvedBlockSetInputOrRef =
  | ResolvedBlockSetInputOrRef_resolvedInputShape
  | ResolvedBlockSetInputOrRef_referenceOtherOutput
  | ResolvedBlockSetInputOrRef_referenceExistingOutputInStore
  | ResolvedBlockSetInputOrRef_fromDefault;

export type ResolvedBlockSetInputShape = ResolvedInputShape;
export type ResolvedBlockSetOutputShape = ResolvedOutputShape;
export interface ResolvedCipherLicenseShape {
  rid: CipherLicenseRid;
}
export interface ResolvedCodeWorkspaceInputShape {
  containerRid: ContainerRid;
  containerVersionId: ContainerVersionId;
}
export interface ResolvedCodeWorkspaceLicenseInputShape {
  licenseRid: string;
}
export interface ResolvedCodeWorkspaceOutputShape {
  containerRid: ContainerRid;
  containerVersionId: ContainerVersionId;
}
export interface ResolvedDatasourceColumnShape {
  datasource: DatasourceLocator;
  name: string;
}
export interface ResolvedDatasourceShape {
  datasourceLocator: DatasourceLocator;
}
/**
 * An instance of a parameter. Must match the type requested in EddieEdgeParameterInputShape.
 */
export interface ResolvedEddieEdgeParameterShape {
  instantiation: ResolvedEddieParameter;
  stableId?: EddieEdgeStableParameterId | null | undefined;
}
export interface ResolvedEddieEdgePipelineOutputShape {
  edgePipelineRid: string;
}
export interface ResolvedEddieGeotimeConfigurationInputShape {
  destinations: Array<EddieGeotimeDestination>;
  observationSpecId?: string | null | undefined;
  peeredDestinations: Array<EddiePeeredGeotimeDestination>;
  sourceSystemSpecId?: string | null | undefined;
}
export interface ResolvedEddieParameter_primitive {
  type: "primitive";
  primitive: ResolvedEddiePrimitiveParameter;
}
export type ResolvedEddieParameter = ResolvedEddieParameter_primitive;

/**
 * DEPRECATED - Prefer ResolvedEddieParameterShapeV2 as it contains only supported in the UI parameter values.
 *
 * An instance of a parameter. Must match the type requested in EddieParameterShape.
 */
export interface ResolvedEddieParameterShape {
  instantiation?: _api_eddie_transformations_api_Parameter | null | undefined;
}
/**
 * An instance of a parameter. Must match the type requested in EddieParameterShapeV2.
 */
export interface ResolvedEddieParameterShapeV2 {
  instantiation: ResolvedEddieParameter;
}
export interface ResolvedEddiePrimitiveParameter_literal {
  type: "literal";
  literal: _api_eddie_transformations_api_LiteralParameter;
}

export interface ResolvedEddiePrimitiveParameter_regex {
  type: "regex";
  regex: _api_eddie_transformations_api_RegexParameter;
}

export interface ResolvedEddiePrimitiveParameter_enum {
  type: "enum";
  enum: _api_eddie_transformations_api_EnumParameter;
}
/**
 * This is a subset union of ResolvedEddieParameter
 */
export type ResolvedEddiePrimitiveParameter =
  | ResolvedEddiePrimitiveParameter_literal
  | ResolvedEddiePrimitiveParameter_regex
  | ResolvedEddiePrimitiveParameter_enum;

export interface ResolvedEddieReplayOption_resetAndReplayFromOffset {
  type: "resetAndReplayFromOffset";
  resetAndReplayFromOffset: EddieResetAndReplayFromOffsetOption;
}

export interface ResolvedEddieReplayOption_reset {
  type: "reset";
  reset: EddieResetOption;
}
export type ResolvedEddieReplayOption =
  | ResolvedEddieReplayOption_resetAndReplayFromOffset
  | ResolvedEddieReplayOption_reset;

export interface ResolvedEddieReplayOptionShape {
  replayOption: ResolvedEddieReplayOption;
}
export interface ResolvedEdgePipelineMagritteSourceInputShape {
  config: EdgeMagritteSourceConfig;
  credentialId?: NamedCredentialIdentifier | null | undefined;
  magritteSourceRid?: MagritteSourceRid | null | undefined;
  portConfig?: EdgeMagrittePortConfig | null | undefined;
  taskConfig?: EdgeMagritteTaskConfig | null | undefined;
}
export interface ResolvedFilesDatasourceShape {
  dataset: DatasetLocator;
  datasource?: FilesDatasourceLocator | null | undefined;
}
export interface ResolvedFlinkProfile {
  name: FlinkProfileName;
}
export interface ResolvedFunctionConfigurationShape {
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
export interface ResolvedFunctionContractShape {
  rid: FunctionContractRid;
  version: FunctionContractVersion;
}
export interface ResolvedFunctionShape {
  apiName?: FunctionApiName | null | undefined;
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
export interface ResolvedGeotimeSeriesIntegrationShape {
  integrationRid: GeotimeSeriesIntegrationRid;
}
/**
 * Represents the state of each group. If a resolved group is not specified then it is considered enabled.
 */
export interface ResolvedInputGroup {
  enabled: boolean;
}
export interface ResolvedInputOrRef_resolvedInputShape {
  type: "resolvedInputShape";
  resolvedInputShape: ResolvedInputShape;
}

export interface ResolvedInputOrRef_referenceOtherOutput {
  type: "referenceOtherOutput";
  referenceOtherOutput: OutputReference;
}

export interface ResolvedInputOrRef_referenceExistingOutputInStore {
  type: "referenceExistingOutputInStore";
  referenceExistingOutputInStore: BlockInstallationOutputReference;
}

export interface ResolvedInputOrRef_fromDefault {
  type: "fromDefault";
  fromDefault: ResolvedInputShape;
}
export type ResolvedInputOrRef =
  | ResolvedInputOrRef_resolvedInputShape
  | ResolvedInputOrRef_referenceOtherOutput
  | ResolvedInputOrRef_referenceExistingOutputInStore
  | ResolvedInputOrRef_fromDefault;

export interface ResolvedInputShape_action {
  type: "action";
  action: ResolvedActionTypeShape;
}

export interface ResolvedInputShape_actionParameter {
  type: "actionParameter";
  actionParameter: ResolvedActionTypeParameterShape;
}

export interface ResolvedInputShape_allowOntologySchemaMigrations {
  type: "allowOntologySchemaMigrations";
  allowOntologySchemaMigrations: ResolvedAllowOntologySchemaMigrationsShape;
}

export interface ResolvedInputShape_aipAgent {
  type: "aipAgent";
  aipAgent: ResolvedAipAgentShape;
}

export interface ResolvedInputShape_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: RidResolvedShape;
}

export interface ResolvedInputShape_authoringLibrary {
  type: "authoringLibrary";
  authoringLibrary: ResolvedAuthoringLibraryShape;
}

export interface ResolvedInputShape_authoringRepository {
  type: "authoringRepository";
  authoringRepository: RidResolvedShape;
}

export interface ResolvedInputShape_automation {
  type: "automation";
  automation: ResolvedAutomationShape;
}

export interface ResolvedInputShape_blobsterResource {
  type: "blobsterResource";
  blobsterResource: RidResolvedShape;
}

export interface ResolvedInputShape_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: RidResolvedShape;
}

export interface ResolvedInputShape_cipherChannel {
  type: "cipherChannel";
  cipherChannel: RidResolvedShape;
}

export interface ResolvedInputShape_cipherLicense {
  type: "cipherLicense";
  cipherLicense: ResolvedCipherLicenseShape;
}

export interface ResolvedInputShape_cipherLicenseV2 {
  type: "cipherLicenseV2";
  cipherLicenseV2: RidResolvedShape;
}

export interface ResolvedInputShape_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: ResolvedCodeWorkspaceInputShape;
}

export interface ResolvedInputShape_codeWorkspaceLicense {
  type: "codeWorkspaceLicense";
  codeWorkspaceLicense: ResolvedCodeWorkspaceLicenseInputShape;
}

export interface ResolvedInputShape_compassResource {
  type: "compassResource";
  compassResource: RidResolvedShape;
}

export interface ResolvedInputShape_contourAnalysis {
  type: "contourAnalysis";
  contourAnalysis: RidResolvedShape;
}

export interface ResolvedInputShape_dataHealthCheck {
  type: "dataHealthCheck";
  dataHealthCheck: RidResolvedShape;
}

export interface ResolvedInputShape_dataHealthCheckGroup {
  type: "dataHealthCheckGroup";
  dataHealthCheckGroup: RidResolvedShape;
}

export interface ResolvedInputShape_datasourceColumn {
  type: "datasourceColumn";
  datasourceColumn: ResolvedDatasourceColumnShape;
}

export interface ResolvedInputShape_deployedApp {
  type: "deployedApp";
  deployedApp: RidResolvedShape;
}

export interface ResolvedInputShape_eddieParameter {
  type: "eddieParameter";
  eddieParameter: ResolvedEddieParameterShape;
}

export interface ResolvedInputShape_eddieParameterV2 {
  type: "eddieParameterV2";
  eddieParameterV2: ResolvedEddieParameterShapeV2;
}

export interface ResolvedInputShape_eddiePipeline {
  type: "eddiePipeline";
  eddiePipeline: RidResolvedShape;
}

export interface ResolvedInputShape_eddieReplayOption {
  type: "eddieReplayOption";
  eddieReplayOption: ResolvedEddieReplayOptionShape;
}

export interface ResolvedInputShape_eddieGeotimeConfiguration {
  type: "eddieGeotimeConfiguration";
  eddieGeotimeConfiguration: ResolvedEddieGeotimeConfigurationInputShape;
}

export interface ResolvedInputShape_eddieEdgeParameter {
  type: "eddieEdgeParameter";
  eddieEdgeParameter: ResolvedEddieEdgeParameterShape;
}

export interface ResolvedInputShape_edgePipelineMagritteSource {
  type: "edgePipelineMagritteSource";
  edgePipelineMagritteSource: ResolvedEdgePipelineMagritteSourceInputShape;
}

export interface ResolvedInputShape_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: RidResolvedShape;
}

export interface ResolvedInputShape_filesDatasource {
  type: "filesDatasource";
  filesDatasource: ResolvedFilesDatasourceShape;
}

export interface ResolvedInputShape_flinkProfile {
  type: "flinkProfile";
  flinkProfile: ResolvedFlinkProfile;
}

export interface ResolvedInputShape_function {
  type: "function";
  function: ResolvedFunctionShape;
}

export interface ResolvedInputShape_functionContract {
  type: "functionContract";
  functionContract: ResolvedFunctionContractShape;
}

export interface ResolvedInputShape_fusionDocument {
  type: "fusionDocument";
  fusionDocument: RidResolvedShape;
}

export interface ResolvedInputShape_geotimeSeriesIntegration {
  type: "geotimeSeriesIntegration";
  geotimeSeriesIntegration: ResolvedGeotimeSeriesIntegrationShape;
}

export interface ResolvedInputShape_interfaceType {
  type: "interfaceType";
  interfaceType: ResolvedInterfaceTypeShape;
}

export interface ResolvedInputShape_interfaceLinkType {
  type: "interfaceLinkType";
  interfaceLinkType: ResolvedInterfaceLinkTypeShape;
}

export interface ResolvedInputShape_interfacePropertyType {
  type: "interfacePropertyType";
  interfacePropertyType: ResolvedInterfacePropertyTypeShape;
}

export interface ResolvedInputShape_installPrefix {
  type: "installPrefix";
  installPrefix: ResolvedInstallPrefixShape;
}

export interface ResolvedInputShape_languageModel {
  type: "languageModel";
  languageModel: ResolvedLanguageModelShape;
}

export interface ResolvedInputShape_linkType {
  type: "linkType";
  linkType: ResolvedLinkTypeInputShape;
}

export interface ResolvedInputShape_logic {
  type: "logic";
  logic: RidResolvedShape;
}

export interface ResolvedInputShape_logicFunction {
  type: "logicFunction";
  logicFunction: ResolvedLogicFunctionShape;
}

export interface ResolvedInputShape_machinery {
  type: "machinery";
  machinery: ResolvedMachineryProcessShape;
}

export interface ResolvedInputShape_magritteConnection {
  type: "magritteConnection";
  magritteConnection: ResolvedMagritteConnectionInputShape;
}

export interface ResolvedInputShape_magritteExport {
  type: "magritteExport";
  magritteExport: ResolvedMagritteExportShape;
}

export interface ResolvedInputShape_magritteSource {
  type: "magritteSource";
  magritteSource: ResolvedMagritteSourceInputShape;
}

export interface ResolvedInputShape_magritteSourceConfigOverrides {
  type: "magritteSourceConfigOverrides";
  magritteSourceConfigOverrides:
    ResolvedMagritteSourceConfigOverridesInputShape;
}

export interface ResolvedInputShape_magritteStreamingExtractConfigOverrides {
  type: "magritteStreamingExtractConfigOverrides";
  magritteStreamingExtractConfigOverrides:
    ResolvedMagritteStreamingExtractConfigOverridesInputShape;
}

export interface ResolvedInputShape_markings {
  type: "markings";
  markings: ResolvedMarkingsShape;
}

export interface ResolvedInputShape_multipassUserAttribute {
  type: "multipassUserAttribute";
  multipassUserAttribute: ResolvedMultipassUserAttributeShape;
}

export interface ResolvedInputShape_multipassGroup {
  type: "multipassGroup";
  multipassGroup: ResolvedMultipassGroupShape;
}

export interface ResolvedInputShape_model {
  type: "model";
  model: ResolvedModelInputShape;
}

export interface ResolvedInputShape_monitorView {
  type: "monitorView";
  monitorView: RidResolvedShape;
}

export interface ResolvedInputShape_monocleGraph {
  type: "monocleGraph";
  monocleGraph: RidResolvedShape;
}

export interface ResolvedInputShape_namedCredential {
  type: "namedCredential";
  namedCredential: RidResolvedShape;
}

export interface ResolvedInputShape_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: RidResolvedShape;
}

export interface ResolvedInputShape_notepadDocument {
  type: "notepadDocument";
  notepadDocument: RidResolvedShape;
}

export interface ResolvedInputShape_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: ResolvedNotepadTemplateShape;
}

export interface ResolvedInputShape_notepadTemplateParameter {
  type: "notepadTemplateParameter";
  notepadTemplateParameter: ResolvedNotepadTemplateParameterShape;
}

export interface ResolvedInputShape_objectInstance {
  type: "objectInstance";
  objectInstance: ResolvedObjectInstanceShape;
}

export interface ResolvedInputShape_objectSet {
  type: "objectSet";
  objectSet: ResolvedObjectSetShape;
}

export interface ResolvedInputShape_objectType {
  type: "objectType";
  objectType: ResolvedObjectTypeShape;
}

export interface ResolvedInputShape_objectView {
  type: "objectView";
  objectView: ResolvedObjectViewShape;
}

export interface ResolvedInputShape_objectViewTab {
  type: "objectViewTab";
  objectViewTab: ResolvedObjectViewTabShape;
}

export interface ResolvedInputShape_ontologyDatasource {
  type: "ontologyDatasource";
  ontologyDatasource: ResolvedOntologyDatasourceShape;
}

export interface ResolvedInputShape_ontologyDatasourceRetention {
  type: "ontologyDatasourceRetention";
  ontologyDatasourceRetention: ResolvedOntologyDatasourceRetentionShape;
}

export interface ResolvedInputShape_ontologySdk {
  type: "ontologySdk";
  ontologySdk: ResolvedOntologySdkShape;
}

export interface ResolvedInputShape_overrideOntologyEntityApiNames {
  type: "overrideOntologyEntityApiNames";
  overrideOntologyEntityApiNames: ResolvedOverrideOntologyEntityApiNamesShape;
}

export interface ResolvedInputShape_parameter {
  type: "parameter";
  parameter: ResolvedParameterInputShape;
}

export interface ResolvedInputShape_property {
  type: "property";
  property: ResolvedPropertyShape;
}

export interface ResolvedInputShape_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: ResolvedQuiverDashboardShape;
}

export interface ResolvedInputShape_schedule {
  type: "schedule";
  schedule: ResolvedScheduleShape;
}

export interface ResolvedInputShape_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: ResolvedSharedPropertyTypeShape;
}

export interface ResolvedInputShape_slateApplication {
  type: "slateApplication";
  slateApplication: RidResolvedShape;
}

export interface ResolvedInputShape_solutionDesign {
  type: "solutionDesign";
  solutionDesign: ResolvedSolutionDesignShape;
}

export interface ResolvedInputShape_sparkProfile {
  type: "sparkProfile";
  sparkProfile: ResolvedSparkProfile;
}

export interface ResolvedInputShape_tabularDatasource {
  type: "tabularDatasource";
  tabularDatasource: ResolvedDatasourceShape;
}

export interface ResolvedInputShape_taurusWorkflow {
  type: "taurusWorkflow";
  taurusWorkflow: RidResolvedShape;
}

export interface ResolvedInputShape_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: ResolvedThirdPartyApplicationShape;
}

export interface ResolvedInputShape_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: ResolvedTimeSeriesSyncShape;
}

export interface ResolvedInputShape_valueType {
  type: "valueType";
  valueType: ResolvedValueTypeShape;
}

export interface ResolvedInputShape_vectorWorkbook {
  type: "vectorWorkbook";
  vectorWorkbook: RidResolvedShape;
}

export interface ResolvedInputShape_vertexTemplate {
  type: "vertexTemplate";
  vertexTemplate: ResolvedVertexTemplateShape;
}

export interface ResolvedInputShape_vortexTemplate {
  type: "vortexTemplate";
  vortexTemplate: ResolvedVortexTemplateShape;
}

export interface ResolvedInputShape_walkthrough {
  type: "walkthrough";
  walkthrough: ResolvedWalkthroughShape;
}

export interface ResolvedInputShape_webhook {
  type: "webhook";
  webhook: ResolvedWebhookInputShape;
}

export interface ResolvedInputShape_widget {
  type: "widget";
  widget: ResolvedWidgetShape;
}

export interface ResolvedInputShape_widgetSet {
  type: "widgetSet";
  widgetSet: ResolvedWidgetSetShape;
}

export interface ResolvedInputShape_workshopApplication {
  type: "workshopApplication";
  workshopApplication: RidResolvedShape;
}

export interface ResolvedInputShape_workshopApplicationSaveLocation {
  type: "workshopApplicationSaveLocation";
  workshopApplicationSaveLocation:
    ResolvedWorkshopApplicationSaveLocationInputShape;
}
/**
 * Resolved versions of the ``InputShape``. These contain references to actual entities that should satisfy
 * the (unresolved) input shape. A ``ResolvedInputShape`` typically contains the same information as a ``ResolvedOutputShape``,
 * but contains a superset of the information in certain cases, in order to provide the necessary information
 * for installers (this only applies to `ResolvedLinkTypeInputShape` as of October 2023).
 */
export type ResolvedInputShape =
  | ResolvedInputShape_action
  | ResolvedInputShape_actionParameter
  | ResolvedInputShape_allowOntologySchemaMigrations
  | ResolvedInputShape_aipAgent
  | ResolvedInputShape_artifactsRepository
  | ResolvedInputShape_authoringLibrary
  | ResolvedInputShape_authoringRepository
  | ResolvedInputShape_automation
  | ResolvedInputShape_blobsterResource
  | ResolvedInputShape_carbonWorkspace
  | ResolvedInputShape_cipherChannel
  | ResolvedInputShape_cipherLicense
  | ResolvedInputShape_cipherLicenseV2
  | ResolvedInputShape_codeWorkspace
  | ResolvedInputShape_codeWorkspaceLicense
  | ResolvedInputShape_compassResource
  | ResolvedInputShape_contourAnalysis
  | ResolvedInputShape_dataHealthCheck
  | ResolvedInputShape_dataHealthCheckGroup
  | ResolvedInputShape_datasourceColumn
  | ResolvedInputShape_deployedApp
  | ResolvedInputShape_eddieParameter
  | ResolvedInputShape_eddieParameterV2
  | ResolvedInputShape_eddiePipeline
  | ResolvedInputShape_eddieReplayOption
  | ResolvedInputShape_eddieGeotimeConfiguration
  | ResolvedInputShape_eddieEdgeParameter
  | ResolvedInputShape_edgePipelineMagritteSource
  | ResolvedInputShape_evaluationSuite
  | ResolvedInputShape_filesDatasource
  | ResolvedInputShape_flinkProfile
  | ResolvedInputShape_function
  | ResolvedInputShape_functionContract
  | ResolvedInputShape_fusionDocument
  | ResolvedInputShape_geotimeSeriesIntegration
  | ResolvedInputShape_interfaceType
  | ResolvedInputShape_interfaceLinkType
  | ResolvedInputShape_interfacePropertyType
  | ResolvedInputShape_installPrefix
  | ResolvedInputShape_languageModel
  | ResolvedInputShape_linkType
  | ResolvedInputShape_logic
  | ResolvedInputShape_logicFunction
  | ResolvedInputShape_machinery
  | ResolvedInputShape_magritteConnection
  | ResolvedInputShape_magritteExport
  | ResolvedInputShape_magritteSource
  | ResolvedInputShape_magritteSourceConfigOverrides
  | ResolvedInputShape_magritteStreamingExtractConfigOverrides
  | ResolvedInputShape_markings
  | ResolvedInputShape_multipassUserAttribute
  | ResolvedInputShape_multipassGroup
  | ResolvedInputShape_model
  | ResolvedInputShape_monitorView
  | ResolvedInputShape_monocleGraph
  | ResolvedInputShape_namedCredential
  | ResolvedInputShape_networkEgressPolicy
  | ResolvedInputShape_notepadDocument
  | ResolvedInputShape_notepadTemplate
  | ResolvedInputShape_notepadTemplateParameter
  | ResolvedInputShape_objectInstance
  | ResolvedInputShape_objectSet
  | ResolvedInputShape_objectType
  | ResolvedInputShape_objectView
  | ResolvedInputShape_objectViewTab
  | ResolvedInputShape_ontologyDatasource
  | ResolvedInputShape_ontologyDatasourceRetention
  | ResolvedInputShape_ontologySdk
  | ResolvedInputShape_overrideOntologyEntityApiNames
  | ResolvedInputShape_parameter
  | ResolvedInputShape_property
  | ResolvedInputShape_quiverDashboard
  | ResolvedInputShape_schedule
  | ResolvedInputShape_sharedPropertyType
  | ResolvedInputShape_slateApplication
  | ResolvedInputShape_solutionDesign
  | ResolvedInputShape_sparkProfile
  | ResolvedInputShape_tabularDatasource
  | ResolvedInputShape_taurusWorkflow
  | ResolvedInputShape_thirdPartyApplication
  | ResolvedInputShape_timeSeriesSync
  | ResolvedInputShape_valueType
  | ResolvedInputShape_vectorWorkbook
  | ResolvedInputShape_vertexTemplate
  | ResolvedInputShape_vortexTemplate
  | ResolvedInputShape_walkthrough
  | ResolvedInputShape_webhook
  | ResolvedInputShape_widget
  | ResolvedInputShape_widgetSet
  | ResolvedInputShape_workshopApplication
  | ResolvedInputShape_workshopApplicationSaveLocation;

/**
 * See docs of `InstallPrefixShape` for details.
 */
export interface ResolvedInstallPrefixShape {
  prefix: string;
}
/**
 * Resolved version of the InterfaceLinkTypeShape. References the actual InterfaceLinkType the shape corresponds
 * to.
 */
export interface ResolvedInterfaceLinkTypeShape {
  apiName: InterfaceLinkTypeApiName;
  interfaceType: InterfaceTypeRid;
  ontologyRid: OntologyRid;
  rid: InterfaceLinkTypeRid;
}
/**
 * Resolved version of the InterfacePropertyTypeShape. References the actual InterfacePropertyType the shape
 * corresponds to.
 */
export interface ResolvedInterfacePropertyTypeShape {
  apiName: InterfacePropertyTypeApiName;
  interfaceType: InterfaceTypeRid;
  ontologyRid: OntologyRid;
  rid: InterfacePropertyTypeRid;
  structFieldRids: Record<ObjectTypeFieldApiName, StructFieldRid>;
}
/**
 * Shape id that was resolved for the parent InterfaceType does not match the shape id expected.
 */
export interface ResolvedInterfaceTypeReferenceMismatch {
  actual: InterfaceTypeReference;
  expected: InterfaceTypeReference;
}
/**
 * Resolved version of the InterfaceTypeShape. References the actual InterfaceType the shape corresponds with.
 */
export interface ResolvedInterfaceTypeShape {
  apiName?: InterfaceTypeApiName | null | undefined;
  ontologyRid: OntologyRid;
  rid: InterfaceTypeRid;
}
/**
 * Contains references to the actual ObjectType(s) and LinkType(s) involved in the intermediary link type.
 */
export interface ResolvedIntermediaryLinkOntologyTypes {
  intermediaryObjectTypeRid: ObjectTypeRid;
  linkTypeARid: LinkTypeRid;
  linkTypeBRid: LinkTypeRid;
  objectTypeARid: ObjectTypeRid;
  objectTypeBRid: ObjectTypeRid;
}
/**
 * The ResolvedIntermediaryLinkOntologyTypes provided as part of the resolved LinkType shape is not
 * consistent with the underlying Intermediary link type.
 */
export interface ResolvedIntermediaryLinkOntologyTypesInconsistent {
  actual: ResolvedIntermediaryLinkOntologyTypes;
  expected: ResolvedIntermediaryLinkOntologyTypes;
}
export interface ResolvedLanguageModelShape {
  rid: LanguageModelRid;
}
/**
 * The ResolvedLinkedObjectTypes provided as part of the resolved LinkType shape is of an unknown type.
 */
export interface ResolvedLinkedObjectTypesUnknown {
  unknownType: string;
}
export interface ResolvedLinkedOntologyTypes_oneToMany {
  type: "oneToMany";
  oneToMany: ResolvedOneToManyLinkObjectTypes;
}

export interface ResolvedLinkedOntologyTypes_manyToMany {
  type: "manyToMany";
  manyToMany: ResolvedManyToManyLinkObjectTypes;
}

export interface ResolvedLinkedOntologyTypes_intermediary {
  type: "intermediary";
  intermediary: ResolvedIntermediaryLinkOntologyTypes;
}
/**
 * Contains references to the actual ObjectType(s) and LinkType(s) involved in the link type.
 */
export type ResolvedLinkedOntologyTypes =
  | ResolvedLinkedOntologyTypes_oneToMany
  | ResolvedLinkedOntologyTypes_manyToMany
  | ResolvedLinkedOntologyTypes_intermediary;

/**
 * Resolved version of the LinkTypeShape. Contains references to the actual LinkType created for the shape.
 */
export interface ResolvedLinkTypeInputShape {
  apiNames?: LinkTypeApiNames | null | undefined;
  id: LinkTypeId;
  linkedObjectTypes: ResolvedLinkedOntologyTypes;
  ontologyRid: OntologyRid;
  rid: LinkTypeRid;
}
/**
 * Resolved version of the LinkTypeShape. Contains references to the actual LinkType created for the shape.
 */
export interface ResolvedLinkTypeOutputShape {
  apiNames?: LinkTypeApiNames | null | undefined;
  id: LinkTypeId;
  ontologyRid: OntologyRid;
  rid: LinkTypeRid;
}
/**
 * Shape Id that was resolved for the LinkType does not match the shape id expected.
 */
export interface ResolvedLinkTypeReferenceMismatch {
  actual: LinkTypeReference;
  expected: LinkTypeReference;
}
export interface ResolvedLogicFunctionShape {
  functionId: LogicFunctionId;
  functionVersion: LogicFunctionVersion;
  logicRid: LogicRid;
}
export interface ResolvedMachineryProcessShape {
  machineryProcessRid: MachineryProcessRid;
}
export interface ResolvedMagritteConnectionInputShape {
  connectionId: MagritteConnectionId;
  sourceRid: MagritteSourceRid;
}
/**
 * Resolved shape representing a magritte export.
 */
export interface ResolvedMagritteExportShape {
  exportRid: MagritteExportRid;
}
export interface ResolvedMagritteExtractOutputShape {
  extractRid: MagritteExtractRid;
}
export interface ResolvedMagritteSourceConfigOverridesInputShape {
  configOverrides: ConfigBlock;
}
export interface ResolvedMagritteSourceInputShape {
  sourceRid: MagritteSourceRid;
}
export interface ResolvedMagritteSourceOutputShape {
  sourceRid: MagritteSourceRid;
}
export interface ResolvedMagritteStreamingExtractConfigOverridesInputShape {
  configOverrides: ConfigBlock;
}
export interface ResolvedMagritteStreamingExtractOutputShape {
  rid: MagritteStreamingExtractRid;
}
/**
 * Contains references to the actual ObjectType(s) involved in the many to many link type.
 */
export interface ResolvedManyToManyLinkObjectTypes {
  objectTypeRidA: ObjectTypeRid;
  objectTypeRidB: ObjectTypeRid;
}
/**
 * The ResolvedManyToManyLinkObjectTypes provided as part of the resolved LinkType shape is not
 * consistent with the underlying Many to Many link type.
 */
export interface ResolvedManyToManyLinkObjectTypesInconsistent {
  actual: ResolvedManyToManyLinkObjectTypes;
  expected: ResolvedManyToManyLinkObjectTypes;
}
/**
 * DEPRECATED. Use "ResolvedMapRendererSetOutputShapeV2" instead.
 */
export interface ResolvedMapRendererSetOutputShape {
  objectTypeRid: ObjectTypeRid;
}
export interface ResolvedMapRendererSetOutputShapeV2 {
  locator: MapRendererSetLocator;
}
export interface ResolvedMarkingsShape {
  markingIds: Array<MarkingId>;
  stableId?: StableShapeIdentifier | null | undefined;
}
export interface ResolvedModelInputShape {
  modelRid: ModelRid;
  modelVersionRid: ModelVersionRid;
  type: ModelType;
}
export interface ResolvedModelOutputShape {
  modelRid: ModelRid;
  modelVersionRid: ModelVersionRid;
  type: ModelType;
}
export interface ResolvedMultipassGroupShape {
  groupId: MultipassGroupId;
}
export interface ResolvedMultipassUserAttributeShape {
  name: MultipassUserAttributeName;
}
export interface ResolvedNotepadTemplateParameterShape {
  id: NotepadTemplateParameterId;
  templateRid: NotepadTemplateRid;
  templateVersion: NotepadTemplateVersion;
}
export interface ResolvedNotepadTemplateShape {
  rid: NotepadTemplateRid;
  version: NotepadTemplateVersion;
}
export interface ResolvedObjectInstanceShape {
  rid: ObjectRid;
}
export interface ResolvedObjectSetShape {
  rid: ObjectSetRid;
}
/**
 * Shape Id that was resolved for the ObjectType does not match the shape id expected.
 */
export interface ResolvedObjectTypeReferenceMismatch {
  actual: ObjectTypeReference;
  expected: ObjectTypeReference;
}
/**
 * Resolved version of the ObjectTypeShape. References the actual ObjectType that the shape corresponds to.
 */
export interface ResolvedObjectTypeShape {
  apiName?: ObjectTypeApiName | null | undefined;
  id: ObjectTypeId;
  ontologyRid: OntologyRid;
  rid: ObjectTypeRid;
}
export interface ResolvedObjectViewShape {
  objectTypeRid: ObjectTypeRid;
}
export interface ResolvedObjectViewTabShape {
  objectTypeRid: ObjectTypeRid;
  tabId: ObjectViewTabId;
}
/**
 * Contains references to the actual ObjectType(s) involved in the one to many link type.
 */
export interface ResolvedOneToManyLinkObjectTypes {
  objectTypeRidManySide: ObjectTypeRid;
  objectTypeRidOneSide: ObjectTypeRid;
}
/**
 * The ResolvedManyToManyLinkObjectTypes provided as part of the resolved LinkType shape is not
 * consistent with the underlying One To Many link type.
 */
export interface ResolvedOneToManyLinkObjectTypesInconsistent {
  actual: ResolvedOneToManyLinkObjectTypes;
  expected: ResolvedOneToManyLinkObjectTypes;
}
/**
 * The retention threshold for an ontology datasource. Only applicable to direct datasources on edge
 * environments.
 *
 * note: Since MDOs are not supported for direct datasources, as of now, datasource retention and object
 * type retention is synonymous.
 */
export interface ResolvedOntologyDatasourceRetentionShape {
  targetSize: number;
  triggerSize: number;
}
export interface ResolvedOntologyDatasourceShape {
  datasourceRid: string;
  ontologyEntityRid: string;
}
export interface ResolvedOntologySdkShape {
  rid: OntologySdkRid;
  version?: OntologySdkVersion | null | undefined;
}
export interface ResolvedOntologySdkShapeV2 {
  packageName: PackageName;
  repositoryRid: ArtifactsRepositoryRid;
}
export interface ResolvedOutputShape_action {
  type: "action";
  action: ResolvedActionTypeShape;
}

export interface ResolvedOutputShape_actionParameter {
  type: "actionParameter";
  actionParameter: ResolvedActionTypeParameterShape;
}

export interface ResolvedOutputShape_aipAgent {
  type: "aipAgent";
  aipAgent: ResolvedAipAgentShape;
}

export interface ResolvedOutputShape_appConfigTitanium {
  type: "appConfigTitanium";
  appConfigTitanium: RidResolvedShape;
}

export interface ResolvedOutputShape_appConfig {
  type: "appConfig";
  appConfig: RidResolvedShape;
}

export interface ResolvedOutputShape_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: RidResolvedShape;
}

export interface ResolvedOutputShape_authoringLibrary {
  type: "authoringLibrary";
  authoringLibrary: ResolvedAuthoringLibraryShape;
}

export interface ResolvedOutputShape_authoringRepository {
  type: "authoringRepository";
  authoringRepository: RidResolvedShape;
}

export interface ResolvedOutputShape_automation {
  type: "automation";
  automation: ResolvedAutomationShape;
}

export interface ResolvedOutputShape_blobsterResource {
  type: "blobsterResource";
  blobsterResource: RidResolvedShape;
}

export interface ResolvedOutputShape_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: RidResolvedShape;
}

export interface ResolvedOutputShape_checkpointConfig {
  type: "checkpointConfig";
  checkpointConfig: RidResolvedShape;
}

export interface ResolvedOutputShape_cipherChannel {
  type: "cipherChannel";
  cipherChannel: RidResolvedShape;
}

export interface ResolvedOutputShape_cipherLicense {
  type: "cipherLicense";
  cipherLicense: RidResolvedShape;
}

export interface ResolvedOutputShape_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: ResolvedCodeWorkspaceOutputShape;
}

export interface ResolvedOutputShape_compassResource {
  type: "compassResource";
  compassResource: RidResolvedShape;
}

export interface ResolvedOutputShape_contourAnalysis {
  type: "contourAnalysis";
  contourAnalysis: RidResolvedShape;
}

export interface ResolvedOutputShape_dataHealthCheck {
  type: "dataHealthCheck";
  dataHealthCheck: RidResolvedShape;
}

export interface ResolvedOutputShape_dataHealthCheckGroup {
  type: "dataHealthCheckGroup";
  dataHealthCheckGroup: RidResolvedShape;
}

export interface ResolvedOutputShape_datasourceColumn {
  type: "datasourceColumn";
  datasourceColumn: ResolvedDatasourceColumnShape;
}

export interface ResolvedOutputShape_deployedApp {
  type: "deployedApp";
  deployedApp: RidResolvedShape;
}

export interface ResolvedOutputShape_eddieEdgePipeline {
  type: "eddieEdgePipeline";
  eddieEdgePipeline: ResolvedEddieEdgePipelineOutputShape;
}

export interface ResolvedOutputShape_eddiePipeline {
  type: "eddiePipeline";
  eddiePipeline: RidResolvedShape;
}

export interface ResolvedOutputShape_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: RidResolvedShape;
}

export interface ResolvedOutputShape_filesDatasource {
  type: "filesDatasource";
  filesDatasource: ResolvedFilesDatasourceShape;
}

export interface ResolvedOutputShape_function {
  type: "function";
  function: ResolvedFunctionShape;
}

export interface ResolvedOutputShape_functionConfiguration {
  type: "functionConfiguration";
  functionConfiguration: ResolvedFunctionConfigurationShape;
}

export interface ResolvedOutputShape_geotimeSeriesIntegration {
  type: "geotimeSeriesIntegration";
  geotimeSeriesIntegration: ResolvedGeotimeSeriesIntegrationShape;
}

export interface ResolvedOutputShape_interfaceType {
  type: "interfaceType";
  interfaceType: ResolvedInterfaceTypeShape;
}

export interface ResolvedOutputShape_interfaceLinkType {
  type: "interfaceLinkType";
  interfaceLinkType: ResolvedInterfaceLinkTypeShape;
}

export interface ResolvedOutputShape_interfacePropertyType {
  type: "interfacePropertyType";
  interfacePropertyType: ResolvedInterfacePropertyTypeShape;
}

export interface ResolvedOutputShape_linkType {
  type: "linkType";
  linkType: ResolvedLinkTypeOutputShape;
}

export interface ResolvedOutputShape_logic {
  type: "logic";
  logic: RidResolvedShape;
}

export interface ResolvedOutputShape_logicFunction {
  type: "logicFunction";
  logicFunction: ResolvedLogicFunctionShape;
}

export interface ResolvedOutputShape_machinery {
  type: "machinery";
  machinery: ResolvedMachineryProcessShape;
}

export interface ResolvedOutputShape_magritteExport {
  type: "magritteExport";
  magritteExport: ResolvedMagritteExportShape;
}

export interface ResolvedOutputShape_magritteExtract {
  type: "magritteExtract";
  magritteExtract: ResolvedMagritteExtractOutputShape;
}

export interface ResolvedOutputShape_magritteSource {
  type: "magritteSource";
  magritteSource: ResolvedMagritteSourceOutputShape;
}

export interface ResolvedOutputShape_magritteStreamingExtract {
  type: "magritteStreamingExtract";
  magritteStreamingExtract: ResolvedMagritteStreamingExtractOutputShape;
}

export interface ResolvedOutputShape_model {
  type: "model";
  model: ResolvedModelOutputShape;
}

export interface ResolvedOutputShape_monitor {
  type: "monitor";
  monitor: RidResolvedShape;
}

export interface ResolvedOutputShape_monitorView {
  type: "monitorView";
  monitorView: RidResolvedShape;
}

export interface ResolvedOutputShape_mapRendererSet {
  type: "mapRendererSet";
  mapRendererSet: ResolvedMapRendererSetOutputShape;
}

export interface ResolvedOutputShape_mapRendererSetV2 {
  type: "mapRendererSetV2";
  mapRendererSetV2: ResolvedMapRendererSetOutputShapeV2;
}

export interface ResolvedOutputShape_namedCredential {
  type: "namedCredential";
  namedCredential: RidResolvedShape;
}

export interface ResolvedOutputShape_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: RidResolvedShape;
}

export interface ResolvedOutputShape_notepadDocument {
  type: "notepadDocument";
  notepadDocument: RidResolvedShape;
}

export interface ResolvedOutputShape_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: ResolvedNotepadTemplateShape;
}

export interface ResolvedOutputShape_notepadTemplateParameter {
  type: "notepadTemplateParameter";
  notepadTemplateParameter: ResolvedNotepadTemplateParameterShape;
}

export interface ResolvedOutputShape_objectSet {
  type: "objectSet";
  objectSet: ResolvedObjectSetShape;
}

export interface ResolvedOutputShape_objectType {
  type: "objectType";
  objectType: ResolvedObjectTypeShape;
}

export interface ResolvedOutputShape_objectView {
  type: "objectView";
  objectView: ResolvedObjectViewShape;
}

export interface ResolvedOutputShape_objectViewTab {
  type: "objectViewTab";
  objectViewTab: ResolvedObjectViewTabShape;
}

export interface ResolvedOutputShape_ontologySdk {
  type: "ontologySdk";
  ontologySdk: ResolvedOntologySdkShape;
}

export interface ResolvedOutputShape_ontologySdkV2 {
  type: "ontologySdkV2";
  ontologySdkV2: ResolvedOntologySdkShapeV2;
}

export interface ResolvedOutputShape_ontologyDatasource {
  type: "ontologyDatasource";
  ontologyDatasource: ResolvedOntologyDatasourceShape;
}

export interface ResolvedOutputShape_property {
  type: "property";
  property: ResolvedPropertyShape;
}

export interface ResolvedOutputShape_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: ResolvedQuiverDashboardShape;
}

export interface ResolvedOutputShape_resourceUpdatesContent {
  type: "resourceUpdatesContent";
  resourceUpdatesContent: RidResolvedShape;
}

export interface ResolvedOutputShape_rosettaDocsBundle {
  type: "rosettaDocsBundle";
  rosettaDocsBundle: ResolvedRosettaDocsBundleShape;
}

export interface ResolvedOutputShape_schedule {
  type: "schedule";
  schedule: ResolvedScheduleShape;
}

export interface ResolvedOutputShape_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: ResolvedSharedPropertyTypeShape;
}

export interface ResolvedOutputShape_slateApplication {
  type: "slateApplication";
  slateApplication: RidResolvedShape;
}

export interface ResolvedOutputShape_solutionDesign {
  type: "solutionDesign";
  solutionDesign: ResolvedSolutionDesignShape;
}

export interface ResolvedOutputShape_tabularDatasource {
  type: "tabularDatasource";
  tabularDatasource: ResolvedDatasourceShape;
}

export interface ResolvedOutputShape_taurusWorkflow {
  type: "taurusWorkflow";
  taurusWorkflow: RidResolvedShape;
}

export interface ResolvedOutputShape_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: ResolvedThirdPartyApplicationShape;
}

export interface ResolvedOutputShape_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: ResolvedTimeSeriesSyncShape;
}

export interface ResolvedOutputShape_transformsJobSpec {
  type: "transformsJobSpec";
  transformsJobSpec: RidResolvedShape;
}

export interface ResolvedOutputShape_valueType {
  type: "valueType";
  valueType: ResolvedValueTypeShape;
}

export interface ResolvedOutputShape_vertexTemplate {
  type: "vertexTemplate";
  vertexTemplate: ResolvedVertexTemplateShape;
}

export interface ResolvedOutputShape_vortexTemplate {
  type: "vortexTemplate";
  vortexTemplate: ResolvedVortexTemplateShape;
}

export interface ResolvedOutputShape_walkthrough {
  type: "walkthrough";
  walkthrough: ResolvedWalkthroughShape;
}

export interface ResolvedOutputShape_webhook {
  type: "webhook";
  webhook: ResolvedWebhookOutputShape;
}

export interface ResolvedOutputShape_widget {
  type: "widget";
  widget: ResolvedWidgetShape;
}

export interface ResolvedOutputShape_widgetSet {
  type: "widgetSet";
  widgetSet: ResolvedWidgetSetShape;
}

export interface ResolvedOutputShape_workflowGraph {
  type: "workflowGraph";
  workflowGraph: RidResolvedShape;
}

export interface ResolvedOutputShape_workshopApplication {
  type: "workshopApplication";
  workshopApplication: RidResolvedShape;
}
/**
 * Resolved versions of the ``OutputShape``. These contain references to actual entities that should satisfy the
 * (unresolved) output shape. ResolvedOutputShapes usually consist of RID(s), but some contain IDs with
 * significantly higher odds of collisions than a regular RID (example: ResolvedObjectTypeShape.id of type ObjectTypeId).
 */
export type ResolvedOutputShape =
  | ResolvedOutputShape_action
  | ResolvedOutputShape_actionParameter
  | ResolvedOutputShape_aipAgent
  | ResolvedOutputShape_appConfigTitanium
  | ResolvedOutputShape_appConfig
  | ResolvedOutputShape_artifactsRepository
  | ResolvedOutputShape_authoringLibrary
  | ResolvedOutputShape_authoringRepository
  | ResolvedOutputShape_automation
  | ResolvedOutputShape_blobsterResource
  | ResolvedOutputShape_carbonWorkspace
  | ResolvedOutputShape_checkpointConfig
  | ResolvedOutputShape_cipherChannel
  | ResolvedOutputShape_cipherLicense
  | ResolvedOutputShape_codeWorkspace
  | ResolvedOutputShape_compassResource
  | ResolvedOutputShape_contourAnalysis
  | ResolvedOutputShape_dataHealthCheck
  | ResolvedOutputShape_dataHealthCheckGroup
  | ResolvedOutputShape_datasourceColumn
  | ResolvedOutputShape_deployedApp
  | ResolvedOutputShape_eddieEdgePipeline
  | ResolvedOutputShape_eddiePipeline
  | ResolvedOutputShape_evaluationSuite
  | ResolvedOutputShape_filesDatasource
  | ResolvedOutputShape_function
  | ResolvedOutputShape_functionConfiguration
  | ResolvedOutputShape_geotimeSeriesIntegration
  | ResolvedOutputShape_interfaceType
  | ResolvedOutputShape_interfaceLinkType
  | ResolvedOutputShape_interfacePropertyType
  | ResolvedOutputShape_linkType
  | ResolvedOutputShape_logic
  | ResolvedOutputShape_logicFunction
  | ResolvedOutputShape_machinery
  | ResolvedOutputShape_magritteExport
  | ResolvedOutputShape_magritteExtract
  | ResolvedOutputShape_magritteSource
  | ResolvedOutputShape_magritteStreamingExtract
  | ResolvedOutputShape_model
  | ResolvedOutputShape_monitor
  | ResolvedOutputShape_monitorView
  | ResolvedOutputShape_mapRendererSet
  | ResolvedOutputShape_mapRendererSetV2
  | ResolvedOutputShape_namedCredential
  | ResolvedOutputShape_networkEgressPolicy
  | ResolvedOutputShape_notepadDocument
  | ResolvedOutputShape_notepadTemplate
  | ResolvedOutputShape_notepadTemplateParameter
  | ResolvedOutputShape_objectSet
  | ResolvedOutputShape_objectType
  | ResolvedOutputShape_objectView
  | ResolvedOutputShape_objectViewTab
  | ResolvedOutputShape_ontologySdk
  | ResolvedOutputShape_ontologySdkV2
  | ResolvedOutputShape_ontologyDatasource
  | ResolvedOutputShape_property
  | ResolvedOutputShape_quiverDashboard
  | ResolvedOutputShape_resourceUpdatesContent
  | ResolvedOutputShape_rosettaDocsBundle
  | ResolvedOutputShape_schedule
  | ResolvedOutputShape_sharedPropertyType
  | ResolvedOutputShape_slateApplication
  | ResolvedOutputShape_solutionDesign
  | ResolvedOutputShape_tabularDatasource
  | ResolvedOutputShape_taurusWorkflow
  | ResolvedOutputShape_thirdPartyApplication
  | ResolvedOutputShape_timeSeriesSync
  | ResolvedOutputShape_transformsJobSpec
  | ResolvedOutputShape_valueType
  | ResolvedOutputShape_vertexTemplate
  | ResolvedOutputShape_vortexTemplate
  | ResolvedOutputShape_walkthrough
  | ResolvedOutputShape_webhook
  | ResolvedOutputShape_widget
  | ResolvedOutputShape_widgetSet
  | ResolvedOutputShape_workflowGraph
  | ResolvedOutputShape_workshopApplication;

/**
 * Attaching the same entity multiple times is not supported.
 */
export interface ResolvedOutputShapeAttachedMultipleTimes {
  references: Array<OutputReference>;
}
/**
 * Resolved conterpart of OutputSpec, with version/config specified for resources with a version/config, else
 * explicitly declared empty. Returned from integrations on packaging.
 */
export interface ResolvedOutputSpec {
  configuration: ResolvedOutputSpecConfig;
  rid: string;
  version: ResolvedOutputSpecVersion;
}
export interface ResolvedOutputSpecAndProvenance {
  outputSpec: ResolvedOutputSpec;
  provenance: Array<OutputSpecProvenance>;
}
export interface ResolvedOutputSpecConfig_notConfigurable {
  type: "notConfigurable";
  notConfigurable: Void;
}

export interface ResolvedOutputSpecConfig_config {
  type: "config";
  config: OutputSpecConfig;
}
export type ResolvedOutputSpecConfig =
  | ResolvedOutputSpecConfig_notConfigurable
  | ResolvedOutputSpecConfig_config;

export interface ResolvedOutputSpecVersion_unversioned {
  type: "unversioned";
  unversioned: Void;
}

export interface ResolvedOutputSpecVersion_version {
  type: "version";
  version: ResourceVersion;
}
export type ResolvedOutputSpecVersion =
  | ResolvedOutputSpecVersion_unversioned
  | ResolvedOutputSpecVersion_version;

/**
 * See docs of `OverrideOntologyEntityApiNamesShape` for details. This value is false by default
 */
export interface ResolvedOverrideOntologyEntityApiNamesShape {
  enable: boolean;
}
export interface ResolvedParameterInputShape {
  value: DataValue;
}
export interface ResolvedPresetValue_fromSource {
  type: "fromSource";
  fromSource: FromSourceResolvedPresetValue;
}

export interface ResolvedPresetValue_resolvedShapeOverrides {
  type: "resolvedShapeOverrides";
  resolvedShapeOverrides: ResolvedShapeOverridesResolvedPresetValue;
}
export type ResolvedPresetValue =
  | ResolvedPresetValue_fromSource
  | ResolvedPresetValue_resolvedShapeOverrides;

export interface ResolvedPropertyShape {
  apiName?: ObjectTypeFieldApiName | null | undefined;
  id: PropertyTypeId;
  objectTypeId: ObjectTypeId;
  objectTypeRid: ObjectTypeRid;
  ontologyRid: OntologyRid;
  rid: PropertyTypeRid;
  structFieldRids: Record<ObjectTypeFieldApiName, StructFieldRid>;
}
/**
 * Quiver dashboard resolved shape
 */
export interface ResolvedQuiverDashboardShape {
  rid: string;
  version?: number | null | undefined;
}
/**
 * Rosetta documentation bundle, which can only be opened in the Rosetta app (never an input to other blocks).
 */
export interface ResolvedRosettaDocsBundleShape {
  bundleId: RosettaProductId;
  securityRid: RosettaDocsBundleSecurityRid;
}
export interface ResolvedScheduleShape {
  scheduleRid: ScheduleRid;
  securityRid: ScheduleSecurityRid;
}
export interface ResolvedShapeOverridesResolvedPresetValue {
  resultPerOption: Array<ResolvedShapeResolutionResultUnion>;
}
export interface ResolvedShapeResolutionFailure {
  error: _api_errors_MarketplaceSerializableError;
}
export interface ResolvedShapeResolutionResultUnion_resolutionSuccess {
  type: "resolutionSuccess";
  resolutionSuccess: ResolvedShapeResolutionSuccess;
}

export interface ResolvedShapeResolutionResultUnion_resolutionFailure {
  type: "resolutionFailure";
  resolutionFailure: ResolvedShapeResolutionFailure;
}
export type ResolvedShapeResolutionResultUnion =
  | ResolvedShapeResolutionResultUnion_resolutionSuccess
  | ResolvedShapeResolutionResultUnion_resolutionFailure;

export interface ResolvedShapeResolutionSuccess {
  resolvedShape: ResolvedBlockSetInputShape;
}
/**
 * Shape Id that was resolved for the SharedPropertyType does not match the shape id expected.
 */
export interface ResolvedSharedPropertyTypeReferenceMismatch {
  actual: SharedPropertyTypeReference;
  expected: SharedPropertyTypeReference;
}
export interface ResolvedSharedPropertyTypeShape {
  apiName?: ObjectTypeFieldApiName | null | undefined;
  ontologyRid: OntologyRid;
  rid: SharedPropertyTypeRid;
  structFieldRids: Record<ObjectTypeFieldApiName, StructFieldRid>;
}
/**
 * Solution Design Diagram created by a user and saved in Compass.
 */
export interface ResolvedSolutionDesignShape {
  rid: DiagramRid;
}
export interface ResolvedSparkProfile {
  name: SparkProfileName;
  rid: SparkProfileRid;
}
export interface ResolvedThirdPartyApplicationShape {
  rid: ThirdPartyApplicationRid;
}
export interface ResolvedTimeSeriesSyncShape {
  syncRid: TimeSeriesSyncRid;
}
export interface ResolvedValueTypeShape {
  valueTypeRid: ValueTypeRid;
  valueTypeVersion: ValueTypeVersion;
  valueTypeVersionId?: ValueTypeVersionId | null | undefined;
}
/**
 * Vertex template resolved shape. Currently just a rid, open for adding parameters in the future if necessary
 */
export interface ResolvedVertexTemplateShape {
  rid: string;
}
/**
 * Vortex template resolved shape. Currently just a rid, open for adding parameters in the future if necessary
 */
export interface ResolvedVortexTemplateShape {
  rid: string;
}
export interface ResolvedWalkthroughShape {
  rid: string;
}
/**
 * Resolved shape representing a webhook input.
 */
export interface ResolvedWebhookInputShape {
  version: WebhookVersion;
  webhookRid: WebhookRid;
}
/**
 * Resolved shape representing a webhook output.
 */
export interface ResolvedWebhookOutputShape {
  version: WebhookVersion;
  webhookRid: WebhookRid;
}
export interface ResolvedWidgetSetShape {
  widgetSetRid: WidgetSetRid;
  widgetSetVersion: WidgetSetVersion;
}
export interface ResolvedWidgetShape {
  widgetRid: WidgetRid;
  widgetSetRid: WidgetSetRid;
  widgetSetVersion: WidgetSetVersion;
}
export interface ResolvedWorkshopApplicationSaveLocationInputShape {
  enableCompassLocationSelector: boolean;
  enableHomeFolderSaves: boolean;
  hideInaccessibleLocations: boolean;
  id: StableShapeIdentifier;
  saveLocations: Array<WorkshopApplicationSaveLocation>;
}
export interface ResolvePresetsRequest {
  targetInstallLocation: ResolvePresetsTargetInstallLocation;
}
export interface ResolvePresetsResponse {
  resolvedPresets: Record<InputBlockSetShapeId, InputPresetResolutionResult>;
}
export interface ResolvePresetsTargetInstallLocation {
  compassFolderRid?: CompassFolderRid | null | undefined;
  ontologyRid?: OntologyRid | null | undefined;
}
export interface ResourceInstallationProvenanceResponse {
  blockSetInstallationRid: BlockSetInstallationRid;
  blockSetShapeId?: BlockSetShapeId | null | undefined;
}
export interface ResourcePermissionDenied {
  rid: string;
}
/**
 * Represents the resource type of an rid
 */
export type ResourceType = string;

/**
 * This represents a ResourceUpdates contentRid
 */
export interface ResourceUpdatesContentIdentifier {
  rid: string;
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
export interface ResourceUpdatesCreateBlockRequest {
  resourceRid: string;
}
export interface ResourceUsedAsBothInputAndOutput {
  inputs: Array<ResolvedInputShape>;
  outputs: Array<ResolvedOutputShape>;
}
export interface ResourceVersion_integer {
  type: "integer";
  integer: IntegerVersion;
}

export interface ResourceVersion_long {
  type: "long";
  long: LongVersion;
}

export interface ResourceVersion_rid {
  type: "rid";
  rid: RidVersion;
}

export interface ResourceVersion_semver {
  type: "semver";
  semver: SemverVersion;
}

export interface ResourceVersion_string {
  type: "string";
  string: StringVersion;
}

export interface ResourceVersion_uuid {
  type: "uuid";
  uuid: UuidVersion;
}
/**
 * Generic version type for Foundry resources - can be applied to shape versions and output spec versions.
 * Used for output specs during packaging, for shape version merging, for version skew validation errors, etc.,.
 */
export type ResourceVersion =
  | ResourceVersion_integer
  | ResourceVersion_long
  | ResourceVersion_rid
  | ResourceVersion_semver
  | ResourceVersion_string
  | ResourceVersion_uuid;

/**
 * Corresponds 1:1 with the member types of the ResourceVersion union.
 */
export type ResourceVersionType =
  | "INTEGER"
  | "LONG"
  | "RID"
  | "SEMVER"
  | "STRING"
  | "UUID";
export interface RestrictedViewCreateBlockRequest {
  rid: string;
}
export interface RestrictedViewLocator {
  rid: string;
}
export interface RestrictedViewLocatorIdentifier {
  rid: string;
}
/**
 * A RID with * as a wildcard.
 * Wildcards can only replace entire components, so `ri.service.main.*.*` is legal but `ri.service.main.ty*.*` is
 * not.
 *
 * Supports exact match RIDs e.g., "ri.marketplace.main.local.00000000-0000-0000-0000-000000000001" or
 * patterns where any of the components of service, main, type or UUID are replaced by a "*", for example
 * "ri.marketplace.*.*.*".
 */
export type RidFilter = string;
export interface RidResolvedShape {
  rid: string;
}
export interface RidShapeIdentifier {
  rid: string;
}
export type RidVersion = string;

/**
 * A role to be granted to a principal during an installation.
 */
export interface RoleGrant {
  principal: Principal;
  role: RoleId;
}
export type RoleId = string;
export type RoleSetId = string;

/**
 * Will roll forward to the latest version that can be auto-upgraded to
 */
export interface RollForwardStrategy {
}
export interface RollOffStrategy_rollForward {
  type: "rollForward";
  rollForward: RollForwardStrategy;
}
/**
 * Specifies how installations of the recalled version should be rolled off
 */
export type RollOffStrategy = RollOffStrategy_rollForward;

export interface RosettaCreateBlockRequest {
  productId: string;
}
/**
 * A single Rosetta documentation bundle exists for a product. Thus, we identify a documentation bundle using
 * the product's identifier.
 */
export interface RosettaDocsBundleIdentifier {
  productId: RosettaProductId;
  securityRid: RosettaDocsBundleSecurityRid;
}
export type RosettaDocsBundleSecurityRid = string;

/**
 * Rosetta documentation bundle, which can only be opened in the Rosetta app (never an input to other blocks).
 */
export interface RosettaDocsBundleShape {
  about: LocalizedTitleAndDescription;
}
export type RosettaProductId = string;
export interface SatelliteImageryModelCreateBlockRequest {
  modelRid: string;
  modelVersionRid: string;
}
export interface ScheduleCreateBlockRequest {
  scheduleRid: string;
}
export interface ScheduledDeletion {
  blockInstallationRid: BlockInstallationRid;
  blockVersionId: BlockVersionId;
  deleteResourceJobId: DeleteResourceJobId;
  installLocation: BlockInstallLocation;
  marketplaceRid?: MarketplaceRid | null | undefined;
  resourcesToDelete: Record<BlockShapeId, ResolvedOutputShape>;
}
export interface ScheduleIdentifier {
  scheduleRid: ScheduleRid;
}
/**
 * Rid of the schedule. This is consistent across schedule versions.
 */
export type ScheduleRid = string;

/**
 * Rid of the schedule version.
 */
export type ScheduleSecurityRid = string;
export interface ScheduleShape {
  about: LocalizedTitleAndDescription;
}
export interface ScheduleShapeInvalid_scheduleVersionInvalid {
  type: "scheduleVersionInvalid";
  scheduleVersionInvalid: ScheduleVersionInvalid;
}
export type ScheduleShapeInvalid = ScheduleShapeInvalid_scheduleVersionInvalid;

/**
 * Schedule version is not found for the scheduleRid given.
 */
export interface ScheduleVersionInvalid {
  scheduleRid: ScheduleRid;
  scheduleSecurityRid: ScheduleSecurityRid;
}
/**
 * A single key in a multi-key secret (e.g. user-defined multi-key secrets in Apollo). Can be used for secrets
 * with the same shape in other systems.
 */
export type SecretKey = string;
export type SecretName = string;
export interface SemverVersion {
  major: SemverVersionComponent;
  minor: SemverVersionComponent;
  patch: SemverVersionComponent;
}
export type SemverVersionComponent = number;

/**
 * A type that can be converted directly from a Conjure `ServiceException`.
 * If a single error is encountered in an integration it should be thrown. If multiple errors need to be
 * collected, they can be returned using this `SerializableError` type.
 * To construct the error, you must use the `Exceptions.toSerializableError()` util to ensure safe JSON parameter
 * serialization.
 */
export interface SerializableCreateBlockVersionError {
  error: _api_errors_MarketplaceSerializableError;
}
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
/**
 * Represents the service name part of an rid
 */
export type ServiceName = string;
export interface SetBlockSetInstallationImmutabilityRequest {
  immutability: BlockSetInstallationImmutability;
  rolesMap: Record<RoleId, Array<RoleId>>;
}
export interface SetBlockSetInstallationImmutabilityResponse {
}
export interface SetInputPresetRequest {
  enforcement?: PresetEnforcement | null | undefined;
  isDefault?: boolean | null | undefined;
  value: SetInputPresetValueRequest;
}
export interface SetInputPresetValueRequest_fromSource {
  type: "fromSource";
  fromSource: SetPresetFromSourceRequest;
}

export interface SetInputPresetValueRequest_resolvedShapeOverrides {
  type: "resolvedShapeOverrides";
  resolvedShapeOverrides: SetPresetResolvedShapesOverridesRequest;
}
export type SetInputPresetValueRequest =
  | SetInputPresetValueRequest_fromSource
  | SetInputPresetValueRequest_resolvedShapeOverrides;

export interface SetInstallAutomationSettingsRequest {
  settings: InstallAutomationSettings;
}
export interface SetManagedStoreSettingsForOrgRequest {
  settings: Record<MarketplaceRid, ManagedStoreConfiguredSettingsEntry>;
}
export interface SetManagedStoreSettingsForOrgResponse {
  marketplaceRids: Array<MarketplaceRid>;
}
export interface SetMarketplaceMavenGroupRequest {
  mavenGroup: MavenGroup;
}
export interface SetMarketplaceMavenGroupResponse {
}
export interface SetPresetFromSourceRequest {
}
export interface SetPresetResolvedShapesOverridesRequest {
  defaultIndex?: number | null | undefined;
  resolvedShapes: Array<ResolvedBlockSetInputShape>;
}
export interface SetReleaseChannelsForBlockSetVersionRequest {
  channels: Array<ReleaseChannel>;
}
export interface SetTargetInstallLocation {
  ontology?: OntologyInstallLocation | null | undefined;
}
export type Sha256Hash = string;
export interface ShapeDisplayMetadata_simple {
  type: "simple";
  simple: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_action {
  type: "action";
  action: ActionTypeShapeDisplayMetadata;
}

export interface ShapeDisplayMetadata_actionParameter {
  type: "actionParameter";
  actionParameter: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_allowOntologySchemaMigrations {
  type: "allowOntologySchemaMigrations";
  allowOntologySchemaMigrations: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_appConfigTitanium {
  type: "appConfigTitanium";
  appConfigTitanium: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_authoringLibrary {
  type: "authoringLibrary";
  authoringLibrary: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_authoringRepository {
  type: "authoringRepository";
  authoringRepository: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_automation {
  type: "automation";
  automation: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_blobsterResource {
  type: "blobsterResource";
  blobsterResource: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_checkpointConfig {
  type: "checkpointConfig";
  checkpointConfig: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_cipherChannel {
  type: "cipherChannel";
  cipherChannel: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_cipherLicense {
  type: "cipherLicense";
  cipherLicense: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_cipherLicenseV2 {
  type: "cipherLicenseV2";
  cipherLicenseV2: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_codeWorkspace {
  type: "codeWorkspace";
  codeWorkspace: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_codeWorkspaceLicense {
  type: "codeWorkspaceLicense";
  codeWorkspaceLicense: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_compassResource {
  type: "compassResource";
  compassResource: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_contourAnalysis {
  type: "contourAnalysis";
  contourAnalysis: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_dataHealthCheck {
  type: "dataHealthCheck";
  dataHealthCheck: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_dataHealthCheckGroup {
  type: "dataHealthCheckGroup";
  dataHealthCheckGroup: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_datasourceColumn {
  type: "datasourceColumn";
  datasourceColumn: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_deployedApp {
  type: "deployedApp";
  deployedApp: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_eddieEdgePipeline {
  type: "eddieEdgePipeline";
  eddieEdgePipeline: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_eddieParameter {
  type: "eddieParameter";
  eddieParameter: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_eddieParameterV2 {
  type: "eddieParameterV2";
  eddieParameterV2: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_eddieReplayOption {
  type: "eddieReplayOption";
  eddieReplayOption: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_eddiePipeline {
  type: "eddiePipeline";
  eddiePipeline: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_eddieGeotimeConfiguration {
  type: "eddieGeotimeConfiguration";
  eddieGeotimeConfiguration: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_edgePipelineMagritteSource {
  type: "edgePipelineMagritteSource";
  edgePipelineMagritteSource: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_evaluationSuite {
  type: "evaluationSuite";
  evaluationSuite: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_filesDatasource {
  type: "filesDatasource";
  filesDatasource: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_flinkProfile {
  type: "flinkProfile";
  flinkProfile: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_function {
  type: "function";
  function: FunctionShapeDisplayMetadata;
}

export interface ShapeDisplayMetadata_functionConfiguration {
  type: "functionConfiguration";
  functionConfiguration: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_fusionDocument {
  type: "fusionDocument";
  fusionDocument: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_geotimeSeriesIntegration {
  type: "geotimeSeriesIntegration";
  geotimeSeriesIntegration: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_installPrefix {
  type: "installPrefix";
  installPrefix: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_interfaceType {
  type: "interfaceType";
  interfaceType: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_interfaceLinkType {
  type: "interfaceLinkType";
  interfaceLinkType: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_interfacePropertyType {
  type: "interfacePropertyType";
  interfacePropertyType: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_languageModel {
  type: "languageModel";
  languageModel: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_linkType {
  type: "linkType";
  linkType: LinkTypeShapeDisplayMetadata;
}

export interface ShapeDisplayMetadata_logic {
  type: "logic";
  logic: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_logicFunction {
  type: "logicFunction";
  logicFunction: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_machinery {
  type: "machinery";
  machinery: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_magritteConnection {
  type: "magritteConnection";
  magritteConnection: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_magritteExport {
  type: "magritteExport";
  magritteExport: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_magritteExtract {
  type: "magritteExtract";
  magritteExtract: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_magritteSource {
  type: "magritteSource";
  magritteSource: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_magritteStreamingExtract {
  type: "magritteStreamingExtract";
  magritteStreamingExtract: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_markings {
  type: "markings";
  markings: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_model {
  type: "model";
  model: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_monocleGraph {
  type: "monocleGraph";
  monocleGraph: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_multipassUserAttribute {
  type: "multipassUserAttribute";
  multipassUserAttribute: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_multipassGroup {
  type: "multipassGroup";
  multipassGroup: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_namedCredential {
  type: "namedCredential";
  namedCredential: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_networkEgressPolicy {
  type: "networkEgressPolicy";
  networkEgressPolicy: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_notepadDocument {
  type: "notepadDocument";
  notepadDocument: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_notepadTemplateParameter {
  type: "notepadTemplateParameter";
  notepadTemplateParameter: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_objectInstance {
  type: "objectInstance";
  objectInstance: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_objectSet {
  type: "objectSet";
  objectSet: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_objectType {
  type: "objectType";
  objectType: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_objectView {
  type: "objectView";
  objectView: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_objectViewTab {
  type: "objectViewTab";
  objectViewTab: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_ontologyDatasource {
  type: "ontologyDatasource";
  ontologyDatasource: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_parameter {
  type: "parameter";
  parameter: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_property {
  type: "property";
  property: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_resourceUpdatesContent {
  type: "resourceUpdatesContent";
  resourceUpdatesContent: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_rosettaDocsBundle {
  type: "rosettaDocsBundle";
  rosettaDocsBundle: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_schedule {
  type: "schedule";
  schedule: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_ontologySdk {
  type: "ontologySdk";
  ontologySdk: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_ontologySdkV2 {
  type: "ontologySdkV2";
  ontologySdkV2: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_slateApplication {
  type: "slateApplication";
  slateApplication: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_solutionDesign {
  type: "solutionDesign";
  solutionDesign: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_sparkProfile {
  type: "sparkProfile";
  sparkProfile: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_tabularDatasource {
  type: "tabularDatasource";
  tabularDatasource: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_taurusWorkflow {
  type: "taurusWorkflow";
  taurusWorkflow: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_timeSeriesSync {
  type: "timeSeriesSync";
  timeSeriesSync: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_transformsJobSpec {
  type: "transformsJobSpec";
  transformsJobSpec: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_valueType {
  type: "valueType";
  valueType: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_vectorWorkbook {
  type: "vectorWorkbook";
  vectorWorkbook: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_vertexTemplate {
  type: "vertexTemplate";
  vertexTemplate: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_vortexTemplate {
  type: "vortexTemplate";
  vortexTemplate: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_walkthrough {
  type: "walkthrough";
  walkthrough: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_webhook {
  type: "webhook";
  webhook: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_workflowGraph {
  type: "workflowGraph";
  workflowGraph: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_workshopApplication {
  type: "workshopApplication";
  workshopApplication: SimpleDisplayMetadata;
}

export interface ShapeDisplayMetadata_workshopApplicationSaveLocation {
  type: "workshopApplicationSaveLocation";
  workshopApplicationSaveLocation: SimpleDisplayMetadata;
}
/**
 * Display metadata, such as title and description, for a shape. Most shapes use the `SimpleDisplayMetadata`
 * type, but more complex shape types that include multiple `about` fields use their own types.
 *
 * This union should contain one entry per shape type.
 */
export type ShapeDisplayMetadata =
  | ShapeDisplayMetadata_simple
  | ShapeDisplayMetadata_action
  | ShapeDisplayMetadata_actionParameter
  | ShapeDisplayMetadata_allowOntologySchemaMigrations
  | ShapeDisplayMetadata_appConfigTitanium
  | ShapeDisplayMetadata_artifactsRepository
  | ShapeDisplayMetadata_authoringLibrary
  | ShapeDisplayMetadata_authoringRepository
  | ShapeDisplayMetadata_automation
  | ShapeDisplayMetadata_blobsterResource
  | ShapeDisplayMetadata_carbonWorkspace
  | ShapeDisplayMetadata_checkpointConfig
  | ShapeDisplayMetadata_cipherChannel
  | ShapeDisplayMetadata_cipherLicense
  | ShapeDisplayMetadata_cipherLicenseV2
  | ShapeDisplayMetadata_codeWorkspace
  | ShapeDisplayMetadata_codeWorkspaceLicense
  | ShapeDisplayMetadata_compassResource
  | ShapeDisplayMetadata_contourAnalysis
  | ShapeDisplayMetadata_dataHealthCheck
  | ShapeDisplayMetadata_dataHealthCheckGroup
  | ShapeDisplayMetadata_datasourceColumn
  | ShapeDisplayMetadata_deployedApp
  | ShapeDisplayMetadata_eddieEdgePipeline
  | ShapeDisplayMetadata_eddieParameter
  | ShapeDisplayMetadata_eddieParameterV2
  | ShapeDisplayMetadata_eddieReplayOption
  | ShapeDisplayMetadata_eddiePipeline
  | ShapeDisplayMetadata_eddieGeotimeConfiguration
  | ShapeDisplayMetadata_edgePipelineMagritteSource
  | ShapeDisplayMetadata_evaluationSuite
  | ShapeDisplayMetadata_filesDatasource
  | ShapeDisplayMetadata_flinkProfile
  | ShapeDisplayMetadata_function
  | ShapeDisplayMetadata_functionConfiguration
  | ShapeDisplayMetadata_fusionDocument
  | ShapeDisplayMetadata_geotimeSeriesIntegration
  | ShapeDisplayMetadata_installPrefix
  | ShapeDisplayMetadata_interfaceType
  | ShapeDisplayMetadata_interfaceLinkType
  | ShapeDisplayMetadata_interfacePropertyType
  | ShapeDisplayMetadata_languageModel
  | ShapeDisplayMetadata_linkType
  | ShapeDisplayMetadata_logic
  | ShapeDisplayMetadata_logicFunction
  | ShapeDisplayMetadata_machinery
  | ShapeDisplayMetadata_magritteConnection
  | ShapeDisplayMetadata_magritteExport
  | ShapeDisplayMetadata_magritteExtract
  | ShapeDisplayMetadata_magritteSource
  | ShapeDisplayMetadata_magritteStreamingExtract
  | ShapeDisplayMetadata_markings
  | ShapeDisplayMetadata_model
  | ShapeDisplayMetadata_monocleGraph
  | ShapeDisplayMetadata_multipassUserAttribute
  | ShapeDisplayMetadata_multipassGroup
  | ShapeDisplayMetadata_namedCredential
  | ShapeDisplayMetadata_networkEgressPolicy
  | ShapeDisplayMetadata_notepadDocument
  | ShapeDisplayMetadata_notepadTemplate
  | ShapeDisplayMetadata_notepadTemplateParameter
  | ShapeDisplayMetadata_objectInstance
  | ShapeDisplayMetadata_objectSet
  | ShapeDisplayMetadata_objectType
  | ShapeDisplayMetadata_objectView
  | ShapeDisplayMetadata_objectViewTab
  | ShapeDisplayMetadata_ontologyDatasource
  | ShapeDisplayMetadata_parameter
  | ShapeDisplayMetadata_property
  | ShapeDisplayMetadata_quiverDashboard
  | ShapeDisplayMetadata_resourceUpdatesContent
  | ShapeDisplayMetadata_rosettaDocsBundle
  | ShapeDisplayMetadata_schedule
  | ShapeDisplayMetadata_sharedPropertyType
  | ShapeDisplayMetadata_ontologySdk
  | ShapeDisplayMetadata_ontologySdkV2
  | ShapeDisplayMetadata_slateApplication
  | ShapeDisplayMetadata_solutionDesign
  | ShapeDisplayMetadata_sparkProfile
  | ShapeDisplayMetadata_tabularDatasource
  | ShapeDisplayMetadata_taurusWorkflow
  | ShapeDisplayMetadata_thirdPartyApplication
  | ShapeDisplayMetadata_timeSeriesSync
  | ShapeDisplayMetadata_transformsJobSpec
  | ShapeDisplayMetadata_valueType
  | ShapeDisplayMetadata_vectorWorkbook
  | ShapeDisplayMetadata_vertexTemplate
  | ShapeDisplayMetadata_vortexTemplate
  | ShapeDisplayMetadata_walkthrough
  | ShapeDisplayMetadata_webhook
  | ShapeDisplayMetadata_workflowGraph
  | ShapeDisplayMetadata_workshopApplication
  | ShapeDisplayMetadata_workshopApplicationSaveLocation;

export interface ShapeDoesNotExistOnBlock {
  blockVersionId: BlockVersionId;
  expectedShape: BlockShapeId;
}
/**
 * Builds which must complete as part of the installation. For example, when downstream shapes depend on the
 * built dataset.
 */
export interface ShapeInstallationStatusBuilding {
  builds: Array<InstallationBuild>;
  shapeIds: Array<OutputBlockSetShapeId>;
}
export interface ShapeInstallationStatuses {
  building: ShapeInstallationStatusBuilding;
  failed: ShapeInstallationStatusFailed;
  finished: ShapeInstallationStatusFinished;
  notStarted: ShapeInstallationStatusNotStarted;
  pendingBuild: ShapeInstallationStatusPendingBuild;
  preallocating: ShapeInstallationStatusPreallocating;
  reconciling: ShapeInstallationStatusReconciling;
  waitingForIndexing: ShapeInstallationStatusWaitingForIndexing;
}
export interface ShapeInstallationStatusFailed {
  builds: Array<InstallationBuild>;
  shapeGroupErrors: Array<BlockInstallationFailure>;
}
/**
 * The shapes have been installed.
 */
export interface ShapeInstallationStatusFinished {
  builds: Array<InstallationBuild>;
  indexableEntityRids: Record<OutputBlockSetShapeId, IndexableEntityRid>;
  shapeIds: Array<OutputBlockSetShapeId>;
}
export interface ShapeInstallationStatusNotStarted {
  shapeIds: Array<OutputBlockSetShapeId>;
}
/**
 * Shapes which are due to build, when building is necessary for the installation to proceed.
 * See `ShapeInstallationStatusBuilding`.
 */
export interface ShapeInstallationStatusPendingBuild {
  shapeIds: Array<OutputBlockSetShapeId>;
}
export interface ShapeInstallationStatusPreallocating {
  shapeIds: Array<OutputBlockSetShapeId>;
}
export interface ShapeInstallationStatusReconciling {
  shapeIds: Array<OutputBlockSetShapeId>;
}
/**
 * Indexes of object types into the ontology which must complete as part of the installation.
 */
export interface ShapeInstallationStatusWaitingForIndexing {
  indexableEntityRids: Record<OutputBlockSetShapeId, IndexableEntityRid>;
  shapeIds: Array<OutputBlockSetShapeId>;
}
/**
 * The mapping information of one block shape.
 */
export interface ShapeMappingInfo {
  actionParameterMappingInfo?: ActionParameterV1MappingInfo | null | undefined;
  blockSetShapeId: BlockSetShapeId;
  shape: BlockShape;
}
export interface ShapeReference {
  blockInstance: BlockSetBlockInstanceId;
  shapeId: BlockShapeId;
}
export interface ShapesAffectedByMarkings_datasource {
  type: "datasource";
  datasource: DatasourceLocator;
}

export interface ShapesAffectedByMarkings_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeRid;
}

export interface ShapesAffectedByMarkings_thirdPartyApplication {
  type: "thirdPartyApplication";
  thirdPartyApplication: ThirdPartyApplicationRid;
}
export type ShapesAffectedByMarkings =
  | ShapesAffectedByMarkings_datasource
  | ShapesAffectedByMarkings_propertyType
  | ShapesAffectedByMarkings_thirdPartyApplication;

export interface ShapesRemovalError {
  error?: _api_errors_MarketplaceSerializableError | null | undefined;
  errorMessage: string;
}
/**
 * A versioned shape is referenced across blockSet inputs and outputs at different versions creating a version
 * skew. This is illegal, as we enforce a single consistent version of a versioned shape.
 */
export interface ShapeVersionSkewError {
  inputs: Array<BlockVersionReference>;
  outputs: Array<BlockVersionReference>;
  rid: string;
}
/**
 * The underlying type of the shared property base type has changed and there is no guarantee that casting the type via
 * schema migration would succeed. E.g. changing the base type from integer to string
 */
export interface SharedPropertyTypeBaseTypeChanged {
  typeA: AllowedObjectPropertyType;
  typeB: AllowedObjectPropertyType;
}
export interface SharedPropertyTypeIdentifier_rid {
  type: "rid";
  rid: SharedPropertyTypeRid;
}
export type SharedPropertyTypeIdentifier = SharedPropertyTypeIdentifier_rid;

export interface SharedPropertyTypeInputShape {
  about: LocalizedTitleAndDescription;
  type: AllowedObjectPropertyType;
}
/**
 * The property has no associated SharedPropertyType whereas the shape definition requires one.
 */
export interface SharedPropertyTypeMissing {
  expected: SharedPropertyTypeReference;
}
export interface SharedPropertyTypeNotFound {
  sharedPropertyTypeRid?: SharedPropertyTypeRid | null | undefined;
}
export interface SharedPropertyTypeOutputShape {
  about: LocalizedTitleAndDescription;
  type: ObjectPropertyType;
}
export type SharedPropertyTypeReference = BlockInternalId;

/**
 * An SharedPropertyTypeRid was referenced for which the shape id could not be resolved. This is typical if the
 * referenced SharedPropertyTypeRid has not been included as an input/output in the block.
 */
export interface SharedPropertyTypeReferenceUnresolvable {
  actual: SharedPropertyTypeRid;
  expected: SharedPropertyTypeReference;
}
export type SharedPropertyTypeRid = string;

/**
 * Copy of com.palantir.intoto.dsse.Signature
 */
export interface Signature {
  keyId: string;
  signature: string;
}
/**
 * A hash of a public key from SigningConfig KeyPair, see `com.palantir.marketplace.conf.SigningConfig.keyId`. Observed examples are 64-char long, but it may not not always the case.
 */
export type SigningKeyId = string;
export type SigningPublicKey = string;

/**
 * Recommends that an `inputShape`'s input shape is fulfilled by `fulfilledBy`'s output shape.
 */
export interface SimpleBlockSetRecommendation {
  fulfilledBy: RecommendationBlockSetReference;
  inputShape: RecommendationBlockSetReference;
}
/**
 * For use in the `ShapeDisplayMetadata` union. Use this type if your shape only includes a single `about` field
 * and no other display metadata.
 */
export interface SimpleDisplayMetadata {
  about: LocalizedTitleAndDescription;
}
/**
 * Recommends that an `inputShape`'s input shape is fulfilled by `fulfilledBy`'s output shape.
 */
export interface SimpleRecommendation {
  fulfilledBy: RecommendationBlockReference;
  inputShape: RecommendationBlockReference;
}
export interface SingleOutputType {
  about: LocalizedTitleAndDescription;
  dataType: _api_functions_DataType;
}
export interface SingleOutputTypeDisplayMetadata {
  about: LocalizedTitleAndDescription;
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
export interface SingleVersionBlockReference {
  blockId: BlockId;
  blockVersionId: BlockVersionId;
}
export interface SlateApplicationIdentifier_rid {
  type: "rid";
  rid: string;
}
export type SlateApplicationIdentifier = SlateApplicationIdentifier_rid;

export interface SlateApplicationInputShape {
  about: LocalizedTitleAndDescription;
}
export interface SlateApplicationOutputShape {
  about: LocalizedTitleAndDescription;
}
export interface SlateCreateBlockRequest {
  rid: string;
}
/**
 * An sls version, such as "1.2.0". Used when dealing with maven coordinates sls resources.
 */
export type SlsVersion = string;

/**
 * Resource is temporarily disabled/paused.
 * Applied to resources that cannot be soft deleted using other modes.
 */
export interface SoftDeleteDisable {
}
export interface SoftDeleteMode_trash {
  type: "trash";
  trash: SoftDeleteTrash;
}

export interface SoftDeleteMode_skip {
  type: "skip";
  skip: SoftDeleteSkip;
}

export interface SoftDeleteMode_disable {
  type: "disable";
  disable: SoftDeleteDisable;
}
/**
 * Mode that will be used to soft delete this resource.
 * Currently used during clean up of unused output shapes (see `CleanupUnusedShapesSettings` for details)
 */
export type SoftDeleteMode =
  | SoftDeleteMode_trash
  | SoftDeleteMode_skip
  | SoftDeleteMode_disable;

/**
 * No action taken, and is considered the correct long-term behaviour.
 * Applied to immutable or versioned resources that do not create any conflict while existing and
 * are generally expected by downstream consumers to never get deleted.
 */
export interface SoftDeleteSkip {
}
/**
 * Resource is trashed and can be restored with its full state.
 * Used for resources that use Compass trashing.
 */
export interface SoftDeleteTrash {
}
export interface SoftDeleteUninstallOptions {
}
export interface SolutionDesignCreateBlockRequest {
  rid: string;
}
/**
 * Solution Design Diagram created by a user and saved in Compass.
 */
export interface SolutionDesignIdentifier {
  rid: DiagramRid;
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

/**
 * The spark profiles selected do not match the constraints of the input shape.
 */
export interface SparkProfileConstraintViolated {
  actual: SparkProfileName;
  expected: Array<SparkProfileName>;
}
export interface SparkProfileIdentifier_rid {
  type: "rid";
  rid: SparkProfileRid;
}

export interface SparkProfileIdentifier_name {
  type: "name";
  name: SparkProfileName;
}
export type SparkProfileIdentifier =
  | SparkProfileIdentifier_rid
  | SparkProfileIdentifier_name;

export type SparkProfileName = string;
export type SparkProfileRid = string;
export interface SparkProfileShape {
  about: LocalizedTitleAndDescription;
  constraints?: SparkProfileConstraint | null | undefined;
}
export interface SpecsSettings {
  discovery: DiscoverySettings;
}
export interface SpreadsheetDecodeFormat_xlsx {
  type: "xlsx";
  xlsx: XlsxFormat;
}
export type SpreadsheetDecodeFormat = SpreadsheetDecodeFormat_xlsx;

export interface SpreadsheetSchema {
  format: SpreadsheetDecodeFormat;
}
export interface StableBlockKey_rid {
  type: "rid";
  rid: string;
}
/**
 * Key to uniquely identify blocks that should share the same block IDs across versions of a block set. Block IDs
 * are reused from a previous version if the stable block key and block type are the same.
 */
export type StableBlockKey = StableBlockKey_rid;

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
export interface StaticDatasetCreateBlockRequest {
  branch: string;
  datasetRid: string;
  endTransactionRid?: string | null | undefined;
}
/**
 * A stemma code repository. Currently this type should only be used to identify external transforms.
 */
export interface StemmaRepositoryType {
}
export interface StoreMetadata {
  categories: Array<Category>;
  requireApprovals?: boolean | null | undefined;
}
export type StoreName = string;
export interface StreamDatasetCreateBlockRequest {
  branch: string;
  streamDatasetRid: string;
}
export interface StreamLocator {
  branch: string;
  rid: string;
}
export interface StreamLocatorIdentifier {
  branch?: string | null | undefined;
  rid: string;
}
/**
 * StringListType specifies that this parameter must be a list of Strings.
 */
export interface StringListType {
}
export interface StringMismatchError {
  actual: string;
  expected: string;
}
/**
 * StringType specifies that this parameter must be a String.
 */
export interface StringType {
}
export type StringValue = string;
export type StringVersion = string;
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
export interface StructFieldTypeUnsupported {
  unsupportedFieldTypes: Array<string>;
}
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
export interface SuccessGranularOutputSpecResult {
  blockSetBlockInstanceId?: BlockSetBlockInstanceId | null | undefined;
}
/**
 * Similar to the `MarkingType` enum in Multipass, but we include a third `ONLY_ORGANIZATION` type that only
 * supports organization markings. The `MANDATORY` type supports both "normal" mandatory markings and
 * organization markings, beacuse in the Multipass API, organization markings are treated as a special type of
 * mandatory markings.
 */
export type SupportedMarkingsType = "MANDATORY" | "CBAC" | "ONLY_ORGANIZATION";

/**
 * The order of columns defining the schema of a tabular datasource shape has changed. For downstream consumers
 * relying on strict ordering this may result in a backwards incompatible change.
 */
export interface TabularDatasourceColumnsOrderInSchemaChangedImplication {
  schemaA: Array<DatasourceColumnReference>;
  schemaB: Array<DatasourceColumnReference>;
}
/**
 * The type of the column of a datasource has changed in a backwards incompatible manner. Changes of type which
 * are backwards compatible (such as going from concrete decimal to any decimal) don't result in a diff implication.
 */
export interface TabularDatasourceColumnTypeChangedImplication {
  columnReference: DatasourceColumnReference;
  typeA: DatasourceColumnType;
  typeB: DatasourceColumnType;
}
export interface TabularDatasourceInputIdentifier {
  datasource: DatasourceLocatorIdentifier;
  supportedTypes: Array<TabularDatasourceType>;
}
/**
 * Tabular datasource columns have been added to an input shape. This may result in incompatibility of previously
 * mapped (resolved) input tabular datasources and column shapes.
 */
export interface TabularDatasourceInputRequiresNewColumnsImplication {
  newColumns: Record<DatasourceColumnReference, DatasourceColumnShape>;
}
export interface TabularDatasourceInputShape {
  about: LocalizedTitleAndDescription;
  schema: Array<DatasourceColumnReference>;
  supportedTypes: Array<TabularDatasourceType>;
}
/**
 * Tabular datasource columns have been removed from an output shape.
 */
export interface TabularDatasourceOutputColumnsRemovedImplication {
  removedColumns: Record<DatasourceColumnReference, DatasourceColumnShape>;
}
export interface TabularDatasourceOutputIdentifier {
  buildRequirements?: DatasourceBuildRequirements | null | undefined;
  datasource: DatasourceLocatorIdentifier;
}
export interface TabularDatasourceOutputShape {
  about: LocalizedTitleAndDescription;
  buildRequirements?: DatasourceBuildRequirements | null | undefined;
  schema: Array<DatasourceColumnReference>;
  type: TabularDatasourceType;
}
export type TabularDatasourceReference = BlockInternalId;

/**
 * Shape Id that was resolved for the TabularDatasource does not match the shape id expected.
 */
export interface TabularDatasourceReferenceMismatch {
  actual: TabularDatasourceReference;
  expected: TabularDatasourceReference;
}
/**
 * A tabular datasource was referenced for which the shape id could not be resolved. This is typical if the
 * referenced tabular datasource has not been included as an input/output in the block.
 */
export interface TabularDatasourceReferenceUnresolvable {
  actual: DatasourceLocator;
  expected: TabularDatasourceReference;
}
export type TabularDatasourceType =
  | "DATASET"
  | "RESTRICTED_VIEW"
  | "STREAM"
  | "VIRTUAL_TABLE";

/**
 * The datasource type is not among those declared as supported by the block.
 */
export interface TabularDatasourceTypeNotSupported {
  supportedTypes: Array<TabularDatasourceType>;
  type: TabularDatasourceType;
}
export interface Tag {
  category: CategoryRid;
  isImported: boolean;
  name: LocalizedName;
  rid: TagRid;
}
export interface TagOrDigest_tag {
  type: "tag";
  tag: string;
}

export interface TagOrDigest_digest {
  type: "digest";
  digest: string;
}
export type TagOrDigest = TagOrDigest_tag | TagOrDigest_digest;

export type TagRid = string;
export interface TargetCompassInstallLocation {
  namespaceRid: NamespaceRid;
}
export interface TargetCompassInstallLocationV2 {
  newProjectOrExistingFolder: NewProjectOrExistingFolderV2;
}
/**
 * The target environment the resources should be packaged for. Note that for most blocks, the packaging
 * is supposed to be compatible with both Cloud and Edge. This should only be used for blocks that need
 * to be packaged differently depending on the target environment.
 */
export type TargetEnvironment = "CLOUD" | "EDGE" | "EDGE_DEPRECATED";

/**
 * A target install location to install a set of blocks into. This represents a location that something is
 * *going* to be installed into, which is different from `BlockInstallLocation` and `BlockSetInstallLocation`
 * which both represent the location that something *has* been installed into.
 */
export interface TargetInstallLocation {
  compass: TargetCompassInstallLocation;
  ontology?: OntologyInstallLocation | null | undefined;
}
/**
 * The target install location provided in the request does not match the current location of an existing block
 * set installation.
 */
export interface TargetInstallLocationDoesNotMatchCurrentLocation {
  currentInstallLocation: BlockSetInstallLocation;
  targetInstallLocation: TargetInstallLocation;
}
/**
 * A target install location to install a block set into. This represents a location that something is *going* to
 * be installed into, which is different from `BlockInstallLocation` and `BlockSetInstallLocation` which both
 * represent the location that something *has* been installed into.
 */
export interface TargetInstallLocationV2 {
  compass: TargetCompassInstallLocationV2;
  ontology?: OntologyInstallLocation | null | undefined;
}
/**
 * The ontology rid of the install location is associated with a different namespace.
 */
export interface TargetOntologyIsNotLinkedToTargetNamespace {
  requestedOntologyRid: OntologyRid;
  targetNamespace: NamespaceRid;
}
/**
 * Not yet implemented by the corresponding service
 */
export interface TaurusCreateBlockRequest {
  rid: string;
}
export interface TaurusWorkflowIdentifier_rid {
  type: "rid";
  rid: TaurusWorkflowRidIdentifier;
}
export type TaurusWorkflowIdentifier = TaurusWorkflowIdentifier_rid;

export type TaurusWorkflowRidIdentifier = string;

/**
 * Taurus workflow that is referenced by taurus workshop widget.
 */
export interface TaurusWorkflowShape {
  about: LocalizedTitleAndDescription;
}
export interface TemplatesContourCreateBlockRequest {
  contourAnalysisRid: string;
}
export interface TemplatesCreateBlockRequest_contour {
  type: "contour";
  contour: TemplatesContourCreateBlockRequest;
}
export type TemplatesCreateBlockRequest = TemplatesCreateBlockRequest_contour;

export interface ThirdPartyApplicationCreateBlockRequest {
  thirdPartyApplicationRid: string;
}
export interface ThirdPartyApplicationEntityIdentifier {
  rid: ThirdPartyApplicationRid;
}
export type ThirdPartyApplicationReference = BlockInternalId;
export type ThirdPartyApplicationRid = string;
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
export interface TimeSeriesSyncCreateBlockRequest {
  rid: string;
  version?: string | null | undefined;
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
/**
 * We current only provide support for overriding the fallback title, not the localized mappings.
 */
export interface TitleOverride {
  fallbackTitle: string;
}
export interface TitleOverrideRequest_set {
  type: "set";
  set: TitleOverride;
}

export interface TitleOverrideRequest_remove {
  type: "remove";
  remove: Void;
}
export type TitleOverrideRequest =
  | TitleOverrideRequest_set
  | TitleOverrideRequest_remove;

export interface ToBeAppliedExternalRecommendationV2 {
  recommendationSource: ExternalRecommendationSource;
  upstreamBlockSet: BlockSetId;
  upstreamBlockSetInstallation: BlockSetReference;
}
export interface TransformsCreateBlockRequest {
  jobSpecRid: string;
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
export type TransportBlockSetInputGroups = Record<
  BlockSetInputGroupId,
  InputGroupBlockSetMappingInfo
>;
export type TransportBlockSetInputShapes = Record<
  InputBlockSetShapeId,
  TransportInputBlockSetMappingInfo
>;
export type TransportBlockSetOutputShapes = Record<
  OutputBlockSetShapeId,
  TransportOutputBlockSetMappingInfo
>;

/**
 * Used for transport. Should not be included in the API
 */
export interface TransportBlockSetToBlockMapping {
  inputGroups: TransportBlockSetInputGroups;
  inputShapes: TransportBlockSetInputShapes;
  internalRecommendations: Array<BlockSetInternalRecommendation>;
  outputShapes: TransportBlockSetOutputShapes;
  shapeDependencies: Array<BlockSetShapeDependencies>;
}
/**
 * Transportable version of InputBlockSetMappingInfo. Does not include any resolved shapes.
 */
export interface TransportInputBlockSetMappingInfo {
  backingShapes: Array<ShapeReference>;
  isOptional: boolean;
  metadata?: InputBlockSetShapeMetadata | null | undefined;
  shape: BlockSetInputShape;
}
/**
 * Transportable version of OutputBlockSetMappingInfo. Does not include any resolved shapes.
 */
export interface TransportOutputBlockSetMappingInfo {
  backingShape: ShapeReference;
  producedByBlockType: BlockType;
  shape: BlockSetOutputShape;
}
export interface TransportReleaseMetadata {
  activeRecalls: Record<RecallId, RecallVersionsAnnouncement>;
  releaseMetadata: Record<BlockSetVersionId, BlockSetVersionReleaseMetadata>;
}
export interface TransportVersionedMarketplaceMetadata {
  metadata: StoreMetadata;
  version: MarketplaceMetadataVersion;
}
export type TrashStatusFilter = "IN_TRASH" | "NOT_TRASHED" | "BOTH";
export interface TsVideoContainerFormat {
}
export interface TxtFormat {
}
/**
 * This is a weakly typed error item, which is used by integrating services to surface information to users.
 */
export interface TypedBlockInstallServiceValidationError {
  blockType: BlockType;
  error: TypedBlockInstallValidationError;
  traceId?: string | null | undefined;
}
export interface TypedBlockInstallValidationError {
  error: any;
  fallbackMessage: string;
  severity: ErrorSeverity;
}
/**
 * The actual Function requires additional inputs beyond those specified on the Function shape.
 * The function would still be compatible if these inputs were optional, but this error indicates
 * there are some that are not optional.
 */
export interface UnexpectedNonOptionalFunctionInput {
  inputIndex: number;
}
/**
 * The actual Function requires additional inputs beyond those specified on the Function shape.
 * The function would still be compatible if these inputs were optional, but this error indicates
 * there are some that are not optional.
 */
export interface UnexpectedNonOptionalFunctionInputV2 {
  inputName: string;
}
/**
 * Validation error which does not disable the automation but is also not converted into a constraint failure
 *
 * This is typed as any as we accidentally stored two different types in alta (PDS-456083), and we need to
 * support both to ensure that we can continue to read entries from the database. All new validation failures
 * should use UnhandledValidationFailureV2, which is strongly typed.
 */
export type UnhandledValidationFailure = any;

/**
 * Validation error which does not disable the automation but is also not converted into a constraint failure
 */
export type UnhandledValidationFailureV2 = ValidateInstallBlocksResponse;

/**
 * Validation error which does not disable the automation but is also not converted into a constraint failure
 */
export type UnhandledValidationFailureV3 = ValidateInstallBlockSetsResponse;
export interface UninstallError_nonEmptyCompassInstallLocation {
  type: "nonEmptyCompassInstallLocation";
  nonEmptyCompassInstallLocation: NonEmptyCompassInstallLocation;
}
export type UninstallError = UninstallError_nonEmptyCompassInstallLocation;

export interface UninstallMode_permanentlyDelete {
  type: "permanentlyDelete";
  permanentlyDelete: PermanentlyDeleteUninstallOptions;
}

export interface UninstallMode_fieldTestPermanentlyDelete {
  type: "fieldTestPermanentlyDelete";
  fieldTestPermanentlyDelete: PermanentlyDeleteUninstallOptions;
}

export interface UninstallMode_softDelete {
  type: "softDelete";
  softDelete: SoftDeleteUninstallOptions;
}
export type UninstallMode =
  | UninstallMode_permanentlyDelete
  | UninstallMode_fieldTestPermanentlyDelete
  | UninstallMode_softDelete;

export interface UninstallRequest {
  uninstallMode: UninstallMode;
}
export interface UninstallResponse_success {
  type: "success";
  success: UninstallResponseSuccess;
}

export interface UninstallResponse_failure {
  type: "failure";
  failure: UninstallResponseFailure;
}
export type UninstallResponse =
  | UninstallResponse_success
  | UninstallResponse_failure;

export interface UninstallResponseFailure {
  errors: Array<BlockSetShapesRemovalError>;
  otherErrors: Array<UninstallError>;
  successfullyDeletedOutputs: Record<
    OutputBlockSetShapeId,
    ResolvedOutputShape
  >;
}
export interface UninstallResponseSuccess {
}
export interface UnknownMarketplaceCreateBlockVersionError {
  unsafeMessage: string;
}
export interface UnlockProjectRequest {
  projectRid: CompassProjectRid;
  rolesMap: Record<RoleId, Array<RoleId>>;
}
export interface UnlockProjectResponse {
}
export interface UnresolvableBlockSetCycle {
  blockSetInstallations: Array<BlockSetReference>;
}
/**
 * This is a placeholder type for when we don't care about the specific type of a parameter, simply representing
 * the presence of an argument. We use this as a minimal way to express compatibility between input and
 * output function shapes, mostly  to allow for more complex types to be used in the future without breaking
 * existing stored shapes.
 */
export interface UnspecifiedParameterType {
}
export interface UnusedShapeStatusEntry {
  resolvedOutputShape: ResolvedBlockSetOutputShape;
}
export interface UnversionedBlockSet {
  blockSetId: BlockSetId;
}
export interface UpdateBlockSetMetadataRequest {
  mavenProductId: MavenProductId;
}
export interface UpdateBlockSetMetadataResponse {
}
/**
 * Request to update the changelog of a block set version.
 */
export interface UpdateBlockSetVersionChangelogRequest {
  changelog: Changelog;
}
export interface UpdateBlockSetVersionChangelogResponse {
}
/**
 * Request to update the documentation of a block set version. Only fields which are specified in the request
 * will be updated, all other fields will be left untouched.
 */
export interface UpdateBlockSetVersionDocumentationRequest {
  attachments?: Array<AttachmentId> | null | undefined;
  freeForm?: FreeFormDocumentation | null | undefined;
  freeFormSections?: FreeFormDocumentationSections | null | undefined;
  links?: Links | null | undefined;
  localizedFreeFormSections?:
    | LocalizedFreeFormDocumentationSections
    | null
    | undefined;
  removeThumbnail?: boolean | null | undefined;
  thumbnail?: AttachmentId | null | undefined;
}
export interface UpdateBlockSetVersionDocumentationResponse {
}
/**
 * Request to update a block set version. For documentation on individual fields, see CreateBlockSetVersionRequest.
 */
export interface UpdateBlockSetVersionRequest {
  about: LocalizedTitleAndDescription;
  additionalRecommendationVariants: Record<
    BlockSetRecommendationId,
    BlockSetRecommendationVariant
  >;
  blocks: Record<BlockSetBlockInstanceId, SingleVersionBlockReference>;
  defaultInstallationSettings?: DefaultInstallationSettings | null | undefined;
  marketplaceMetadataVersion?: MarketplaceMetadataVersion | null | undefined;
  tags: Array<BlockSetTag>;
  tagsV2?: BlockSetCategorizedTags | null | undefined;
  typedTags: Array<TagRid>;
  versionIncrement?: VersionIncrement | null | undefined;
}
export interface UpdateBlockSetVersionResponse {
  validationErrors: Array<BlockSetVersionValidationError>;
}
export interface UpdateBlockVersionChangelogRequest {
  changelog: Changelog;
}
export interface UpdateBlockVersionDisplayMetadataRequest {
  blockSetVersionId?: BlockSetVersionId | null | undefined;
  blockVersionDisplayMetadata?: BlockDisplayMetadata | null | undefined;
  inputGroupsDisplayMetadata: Record<InputGroupId, InputGroupDisplayMetadata>;
  shapesDisplayMetadata: Record<BlockShapeId, ShapeDisplayMetadata>;
}
/**
 * The last time the job was updated up to the end of reconcile. This is to ensure consistency as builds and
 * indexing are included in the duration of installations.
 */
export type UpdatedAtTimestamp = string;

/**
 * Includes a registered public key and a list of maven coordinates that will override the existing list of
 * maven coordinates that the key is able to verify.
 */
export interface UpdateKeyRequest {
  mavenCoordinates: MavenCoordinates;
  publicKey: SigningPublicKey;
}
export interface UpdateKeyResponse {
}
/**
 * Request to update the metadata of block set version. Output specs will be unchanged.
 * Declarative update that overrides any existing values with those in the request.
 */
export interface UpdatePendingBlockSetVersionMetadataRequest {
  about: LocalizedTitleAndDescription;
  defaultInstallationSettings?: DefaultInstallationSettings | null | undefined;
  marketplaceMetadataVersion?: MarketplaceMetadataVersion | null | undefined;
  packagingSettings?: PackagingSettings | null | undefined;
  tagsV2: BlockSetCategorizedTags;
  typedTags: Array<TagRid>;
  versionIncrement?: VersionIncrement | null | undefined;
}
export interface UpdatePendingBlockSetVersionMetadataResponse {
}
/**
 * Request to update the output specs of a pending block set version.
 */
export interface UpdatePendingBlockSetVersionSpecsRequest {
  discoverySpecs: Array<DiscoverySpec>;
  outputSpecs: Array<OutputSpec>;
  refreshConfig?: RefreshSpecsConfig | null | undefined;
  settings?: SpecsSettings | null | undefined;
  shouldRefresh: boolean;
}
/**
 * An identifier that can be used to track the processing of the asynchronous update request. Increases
 * monotonically with each update, such that we guarantee an event has been processed or superseded by a more
 * recent update, if the latestProcessedUpdateId is greater than or equal to its ID.
 * Requests are always guaranteed to be processed in order, but there is no guarantee all requests will be
 * processed. If multiple requests are submitted whilst the last update is still materializing, we will process
 * the latest request only.
 */
export type UpdatePendingBlockSetVersionSpecsRequestId = number;
export interface UpdatePendingBlockSetVersionSpecsResponse {
  id: UpdatePendingBlockSetVersionSpecsRequestId;
}
/**
 * Sets either the title or description or both. Will only change the override(s) that are populated.
 */
export interface UpdatePendingInputShapeAboutRequest {
  description?: DescriptionOverrideRequest | null | undefined;
  title?: TitleOverrideRequest | null | undefined;
}
/**
 * Updates any part of the pending input shape metadata. Will only change the overrides(s) that are populated.
 */
export interface UpdatePendingInputShapeMetadataRequest {
  presets?: UpdatePresetsRequest | null | undefined;
  visibility?: UpdateVisibilityRequest | null | undefined;
}
export interface UpdatePlaceholderRequest {
  blockSetInputShape: BlockSetInputShape;
  datasetRid: string;
}
export interface UpdatePlaceholdersRequest {
  inputShapesToUpdatePlaceholdersFor: Record<
    InputBlockSetShapeId,
    UpdatePlaceholderRequest
  >;
}
export interface UpdatePlaceholdersResponse {
  resolvedInputShapes: Record<InputBlockSetShapeId, ResolvedBlockSetInputShape>;
}
export interface UpdatePresetsRequest_set {
  type: "set";
  set: SetInputPresetRequest;
}

export interface UpdatePresetsRequest_remove {
  type: "remove";
  remove: Void;
}
export type UpdatePresetsRequest =
  | UpdatePresetsRequest_set
  | UpdatePresetsRequest_remove;

/**
 * Update metadata for a single recommendation defined by a given source, target block set version, marketplace
 * and upstream block set.
 */
export interface UpdateRecommendationMetadataRequest {
  displayMetadata: ExternalRecommendationDisplayMetadata;
  source: ExternalRecommendationSource;
  targetBlockSetVersion: BlockSetVersionId;
  targetMarketplaceRid: MarketplaceRid;
  upstreamBlockSet: BlockSetId;
}
export interface UpdateRecommendationMetadataResponse {
}
export interface UpdateVisibilityRequest_set {
  type: "set";
  set: BlockSetShapeVisibility;
}

export interface UpdateVisibilityRequest_remove {
  type: "remove";
  remove: Void;
}
export type UpdateVisibilityRequest =
  | UpdateVisibilityRequest_set
  | UpdateVisibilityRequest_remove;

/**
 * An upgrade in the request constains a singleton product that has multiple installs in the namespace.
 * There should only be one installation of a singleton per namespace, but during validation we found multiple.
 * Because this is an upgrade this is non-blocking.
 */
export interface UpgradeOfSingletonBlockSetThatIsInstalledMultipleTimes {
  otherInstallations: Array<BlockSetInstallationRid>;
}
/**
 * NOTE: Only use DOWNTIME. NO_DOWNTIME doesn't actually do anything...
 */
export type UpgradeType = "DOWNTIME" | "NO_DOWNTIME";

/**
 * Planning was successful in kicking off an installation job
 */
export interface UpgradingStatus {
  jobRid: BlockSetInstallationJobRid;
}
export interface UploadAttachmentResponse {
  attachmentId: AttachmentId;
}
export type Url = string;
export type UuidVersion = string;
export interface ValidateBlockSetVersionRequest {
}
export interface ValidateBlockSetVersionResponse {
  validationErrors: Array<BlockSetVersionValidationError>;
}
export interface ValidateBlockSetVersionResponseV2 {
  validationErrors: Array<BlockSetVersionValidationErrorV2>;
}
export interface ValidateInstallBlockSetsResponse {
  blockSetValidationErrors: Array<BlockSetInstallValidationErrorV2>;
  jobValidationErrors: Array<InstallationJobValidationError>;
  shapeValidationErrors: Array<InstallShapeValidationErrorV2>;
}
export interface ValidateInstallBlocksResponse {
  blockSetValidationErrors: Array<BlockSetInstallValidationError>;
  validationErrors: Array<InstallValidationError>;
}
export interface ValidateMarketplaceMavenGroupFailure_groupAlreadyUsed {
  type: "groupAlreadyUsed";
  groupAlreadyUsed: GroupAlreadyUsedFailure;
}

export interface ValidateMarketplaceMavenGroupFailure_groupMalformed {
  type: "groupMalformed";
  groupMalformed: GroupMalformedFailure;
}

export interface ValidateMarketplaceMavenGroupFailure_other {
  type: "other";
  other: OtherValidationFailure;
}
export type ValidateMarketplaceMavenGroupFailure =
  | ValidateMarketplaceMavenGroupFailure_groupAlreadyUsed
  | ValidateMarketplaceMavenGroupFailure_groupMalformed
  | ValidateMarketplaceMavenGroupFailure_other;

export interface ValidateMarketplaceMavenGroupRequest {
  mavenGroup: MavenGroup;
}
export interface ValidateMarketplaceMavenGroupResponse_success {
  type: "success";
  success: ValidateMarketplaceMavenGroupSuccess;
}

export interface ValidateMarketplaceMavenGroupResponse_failure {
  type: "failure";
  failure: ValidateMarketplaceMavenGroupFailure;
}
export type ValidateMarketplaceMavenGroupResponse =
  | ValidateMarketplaceMavenGroupResponse_success
  | ValidateMarketplaceMavenGroupResponse_failure;

export interface ValidateMarketplaceMavenGroupSuccess {
}
/**
 * A string representing a value type's api name. Used as a stable, cross-stack identifier for service managed value types.
 */
export type ValueTypeApiName = string;

/**
 * The referenced value type has a different base type than the corresponding shape.
 */
export interface ValueTypeBaseTypeMismatch {
  valueTypeBaseType: string;
  valueTypeRid: string;
  valueTypeShapeBaseType: string;
}
export interface ValueTypeCreateBlockRequest {
  valueTypeRid: string;
}
/**
 * Could not find the value type with the requested rid.
 */
export interface ValueTypeNotFound {
  requestedValueTypeRid: string;
}
export type ValueTypeReference = BlockInternalId;
export type ValueTypeRid = string;
export interface ValueTypeShape {
  about: LocalizedTitleAndDescription;
  baseType: BaseType;
  serviceTypeIdentifier?: ServiceManagedValueTypeIdentifier | null | undefined;
}
export interface ValueTypeShapeValidationError_valueTypeNotFound {
  type: "valueTypeNotFound";
  valueTypeNotFound: ValueTypeNotFound;
}

export interface ValueTypeShapeValidationError_valueTypeVersionNotFound {
  type: "valueTypeVersionNotFound";
  valueTypeVersionNotFound: ValueTypeVersionNotFound;
}

export interface ValueTypeShapeValidationError_valueTypeBaseTypeMismatch {
  type: "valueTypeBaseTypeMismatch";
  valueTypeBaseTypeMismatch: ValueTypeBaseTypeMismatch;
}
/**
 * Errors specific to ValueTypeShape(s).
 */
export type ValueTypeShapeValidationError =
  | ValueTypeShapeValidationError_valueTypeNotFound
  | ValueTypeShapeValidationError_valueTypeVersionNotFound
  | ValueTypeShapeValidationError_valueTypeBaseTypeMismatch;

/**
 * A string representing a value type's version. Enforced to be a semantic version.
 */
export type ValueTypeVersion = string;

/**
 * A UUID representing a persisted value type version.
 */
export type ValueTypeVersionId = string;

/**
 * Could not find the value type at the requested version.
 */
export interface ValueTypeVersionNotFound {
  requestedValueTypeVersion: string;
  valueTypeRid: string;
}
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

/**
 * Vector Entity Identifier for generating vector shapes
 */
export interface VectorWorkbookIdentifier {
  rid: string;
}
export interface VectorWorkbookShape {
  about: LocalizedTitleAndDescription;
}
export interface VersionedMarketplaceMetadata {
  metadata: StoreMetadata;
  version: MarketplaceMetadataVersion;
}
/**
 * A key that uniquely identifies a value type by its rid + version.
 */
export interface VersionedValueTypeIdentifier {
  valueTypeRid: ValueTypeRid;
  valueTypeVersion?: ValueTypeVersion | null | undefined;
  valueTypeVersionId?: ValueTypeVersionId | null | undefined;
}
export type VersionIncrement = "MAJOR" | "MINOR" | "PATCH";
export interface VersionRangeBlockReference {
  blockId: BlockId;
  versions: BlockVersionRange;
}
export interface VersionRangeBlockSetReference_external {
  type: "external";
  external: VersionRangeBlockReference;
}

export interface VersionRangeBlockSetReference_internal {
  type: "internal";
  internal: BlockSetBlockInstanceId;
}
export type VersionRangeBlockSetReference =
  | VersionRangeBlockSetReference_external
  | VersionRangeBlockSetReference_internal;

export interface VertexCreateBlockRequest {
  rid: string;
}
/**
 * Vertex Template that can be used to generate Graphs.
 */
export interface VertexEntityIdentifier {
  rid: string;
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
export interface VirtualTableCreateBlockRequest {
  branch?: string | null | undefined;
  rid: string;
}
export interface VirtualTableLocator {
  branch: string;
  rid: string;
}
export interface VirtualTableLocatorIdentifier {
  branch?: string | null | undefined;
  rid: string;
}
export interface Void {
}
export interface VorbisFormat {
}
export interface VortexCreateBlockRequest {
  rid: string;
}
/**
 * Vortex Map Template that can be used to generate Maps.
 */
export interface VortexEntityIdentifier {
  rid: string;
}
/**
 * Vortex Map Template that can be used to generate Maps.
 */
export interface VortexTemplateShape {
  about: LocalizedTitleAndDescription;
}
export interface WalkthroughCreateBlockRequest {
  rid: string;
}
export interface WalkthroughEntityIdentifier {
  rid: string;
}
export interface WalkthroughShape {
  about: LocalizedTitleAndDescription;
}
/**
 * A UUID that identifies a warehouse
 */
export type WarehouseId = string;

/**
 * ID internal to a warehouse for managing marketplaces
 */
export type WarehouseInternalId = string;
export interface WavFormat {
}
export interface WebhookEntityIdentifier {
  version: WebhookVersion;
  webhookRid: WebhookRid;
}
export type WebhookRid = string;
export interface WebhooksCreateBlockRequest {
  rid: string;
  version: number;
}
export interface WebhookShape {
  about: LocalizedTitleAndDescription;
}
export type WebhookVersion = number;
export interface WebmAudioContainerFormat_singleStream {
  type: "singleStream";
  singleStream: SingleStreamWebmAudioContainerFormat;
}
export type WebmAudioContainerFormat = WebmAudioContainerFormat_singleStream;

export interface WebpFormat {
}
export interface WidgetIdentifier_ridAndVersion {
  type: "ridAndVersion";
  ridAndVersion: WidgetRidAndVersionIdentifier;
}
export type WidgetIdentifier = WidgetIdentifier_ridAndVersion;

export type WidgetReference = BlockInternalId;
export type WidgetRid = string;
export interface WidgetRidAndVersionIdentifier {
  widgetRid: WidgetRid;
  widgetSetRid: WidgetSetRid;
  widgetSetVersion: WidgetSetVersion;
}
export interface WidgetSetCreateBlockRequest {
  rid: string;
  version: string;
}
export interface WidgetSetIdentifier_ridAndVersion {
  type: "ridAndVersion";
  ridAndVersion: WidgetSetRidAndVersionIdentifier;
}
export type WidgetSetIdentifier = WidgetSetIdentifier_ridAndVersion;

export type WidgetSetReference = BlockInternalId;
export type WidgetSetRid = string;
export interface WidgetSetRidAndVersionIdentifier {
  widgetSetRid: WidgetSetRid;
  widgetSetVersion: WidgetSetVersion;
}
export interface WidgetSetShape {
  about: LocalizedTitleAndDescription;
  widgets: Array<WidgetReference>;
}
/**
 * A semver version string. This is user defined and supports prerelease versions
 * and build metadata.
 */
export type WidgetSetVersion = string;
export interface WidgetShape {
  about: LocalizedTitleAndDescription;
  widgetSet: WidgetSetReference;
}
/**
 * Used in validation error reporting for describing which DayTime failed validation
 */
export type WindowStartOrEnd = "START" | "END";

/**
 * Creates a Workflow Graph block.
 */
export interface WorkflowGraphCreateBlockRequest {
  rid: string;
}
export interface WorkflowGraphIdentifier {
  rid: string;
}
/**
 * Workflow Graph shape that can be used to generate Workflow Graphs. Never consumed by any downstream blocks.
 */
export interface WorkflowGraphShape {
  about: LocalizedTitleAndDescription;
}
export interface WorkshopApplicationCompassLocationShortcuts {
  compassFolderRid: string;
  displayNameOverride: string;
}
export interface WorkshopApplicationInputShape {
  about: LocalizedTitleAndDescription;
}
export interface WorkshopApplicationOutputShape {
  about: LocalizedTitleAndDescription;
}
export interface WorkshopApplicationSaveLocation_compass {
  type: "compass";
  compass: WorkshopApplicationCompassLocationShortcuts;
}
export type WorkshopApplicationSaveLocation =
  WorkshopApplicationSaveLocation_compass;

/**
 * An Input Shape use to provide a Workshop's Saved States SaveLocation
 */
export interface WorkshopApplicationSaveLocationInputShape {
  about: LocalizedTitleAndDescription;
  id: StableShapeIdentifier;
}
export interface WorkshopApplicationSaveLocationPartialResolvedShape {
  about: LocalizedTitleAndDescription;
  enableCompassLocationSelector: boolean;
  enableHomeFolderSaves: boolean;
  hideInaccessibleLocations: boolean;
  id: StableShapeIdentifier;
  saveLocations: Array<WorkshopApplicationSaveLocation>;
}
/**
 * Not yet implemented by the corresponding service
 */
export interface WorkshopCreateBlockRequest {
  rid: string;
  version?: string | null | undefined;
}
export interface WorkshopIdentifier_rid {
  type: "rid";
  rid: WorkshopRid;
}
export type WorkshopIdentifier = WorkshopIdentifier_rid;

export type WorkshopRid = string;
export interface WritebackCreateBlockRequest {
  rid: string;
}
export interface XlsxFormat {
}
/**
 * ZoneId should be formattable by the java.time.ZoneId.of(String)
 * Examples "America/New_York", "UTC", "UTC+5"
 */
export type ZoneId = string;
