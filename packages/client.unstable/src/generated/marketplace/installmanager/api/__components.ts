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
  ApolloEntityId as _api_ApolloEntityId,
  ApolloEnvironmentId as _api_ApolloEnvironmentId,
  ApolloFoundrySpaceIdentifier as _api_ApolloFoundrySpaceIdentifier,
  ApolloSpaceId as _api_ApolloSpaceId,
  BlockSetId as _api_BlockSetId,
  BlockSetInstallationJobRid as _api_BlockSetInstallationJobRid,
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  BlockSetVersionId as _api_BlockSetVersionId,
  CompassProjectRid as _api_CompassProjectRid,
  FailedToSubmitJobResult as _api_FailedToSubmitJobResult,
  InputBlockSetShapeId as _api_InputBlockSetShapeId,
  InvalidInstallBlockSetsRequest as _api_InvalidInstallBlockSetsRequest,
  ManagedInstallationName as _api_ManagedInstallationName,
  MarketplaceRid as _api_MarketplaceRid,
  MarkingId as _api_MarkingId,
  MavenGroup as _api_MavenGroup,
  MavenProductId as _api_MavenProductId,
  NamespaceRid as _api_NamespaceRid,
  OrganizationRid as _api_OrganizationRid,
  ResolvedBlockSetInputShape as _api_ResolvedBlockSetInputShape,
  RoleGrant as _api_RoleGrant,
  SlsVersion as _api_SlsVersion,
  UninstallResponseFailure as _api_UninstallResponseFailure,
  ValidateInstallBlockSetsResponse as _api_ValidateInstallBlockSetsResponse,
} from "../../api/__components.js";
import type { SecretResolvedBlockSetInputShape as _apolloagent_api_SecretResolvedBlockSetInputShape } from "../../apolloagent/api/__components.js";
export interface ApolloAgentEntityInfo {
  apolloEnvironmentId: _api_ApolloEnvironmentId;
  apolloSpaceId: _api_ApolloSpaceId;
  foundrySpaceMavenGroup: _api_ApolloFoundrySpaceIdentifier;
  installationEntityId: _api_ApolloEntityId;
  secretInputMapping: Record<
    _api_InputBlockSetShapeId,
    _apolloagent_api_SecretResolvedBlockSetInputShape
  >;
}
export interface ApolloAgentInfoUpdate {
  secretInputMapping: Record<
    _api_InputBlockSetShapeId,
    _apolloagent_api_SecretResolvedBlockSetInputShape
  >;
}
export interface CreateInstallationFailureResult_failedToSubmitJob {
  type: "failedToSubmitJob";
  failedToSubmitJob: _api_FailedToSubmitJobResult;
}

export interface CreateInstallationFailureResult_invalidRequest {
  type: "invalidRequest";
  invalidRequest: _api_InvalidInstallBlockSetsRequest;
}
export type CreateInstallationFailureResult =
  | CreateInstallationFailureResult_failedToSubmitJob
  | CreateInstallationFailureResult_invalidRequest;

export interface CreateInstallationForBlockSetRequest {
  apolloAgentEntityInfo?: ApolloAgentEntityInfo | null | undefined;
  blockSetId: _api_BlockSetId;
  configuration: ManagedInstallationConfiguration;
  installationName: _api_ManagedInstallationName;
  marketplaceRid: _api_MarketplaceRid;
  namespaceRid: _api_NamespaceRid;
  roleGrants: Array<_api_RoleGrant>;
  targetBlockSetVersionId: _api_BlockSetVersionId;
}
export interface CreateInstallationResponse_success {
  type: "success";
  success: CreateInstallationSuccessResult;
}

export interface CreateInstallationResponse_failure {
  type: "failure";
  failure: CreateInstallationFailureResult;
}
export type CreateInstallationResponse =
  | CreateInstallationResponse_success
  | CreateInstallationResponse_failure;

export interface CreateInstallationSuccessResult {
  installation: ManagedInstallation;
  installationJob: _api_BlockSetInstallationJobRid;
}
export interface DeleteInstallationFailureResult {
  failure: _api_UninstallResponseFailure;
}
export interface DeleteInstallationRequest {
}
export interface DeleteInstallationResponse_success {
  type: "success";
  success: DeleteInstallationSuccessResult;
}

export interface DeleteInstallationResponse_failure {
  type: "failure";
  failure: DeleteInstallationFailureResult;
}
export type DeleteInstallationResponse =
  | DeleteInstallationResponse_success
  | DeleteInstallationResponse_failure;

export interface DeleteInstallationSuccessResult {
}
/**
 * An installation request (i.e. CreateInstallationForBlockSetRequest) that has failed before
 * a managed installation was created, either due to a validation error or job submission error.
 */
export interface FailedInstallationCreationRequest {
  apolloAgentEntityInfo?: ApolloAgentEntityInfo | null | undefined;
  blockSetId: _api_BlockSetId;
  configuration: ManagedInstallationConfiguration;
  installationName: _api_ManagedInstallationName;
  marketplaceRid: _api_MarketplaceRid;
  mavenProductId: _api_MavenProductId;
  namespaceRid: _api_NamespaceRid;
  status: ManagedInstallationStatus;
  targetBlockSetVersionId: _api_BlockSetVersionId;
}
export interface GetInstallationResponse_installation {
  type: "installation";
  installation: ManagedInstallation;
}

export interface GetInstallationResponse_failedCreationRequest {
  type: "failedCreationRequest";
  failedCreationRequest: FailedInstallationCreationRequest;
}
/**
 * A managed installation or the latest create request that failed.
 */
export type GetInstallationResponse =
  | GetInstallationResponse_installation
  | GetInstallationResponse_failedCreationRequest;

export type InstallBlockSetsValidationError =
  _api_ValidateInstallBlockSetsResponse;

/**
 * Represents a compass namespace. Every compass namespace may have an associated InstallManagerNamespace.
 */
export interface InstallManagerNamespace {
  mavenGroupId?: _api_MavenGroup | null | undefined;
  rid: _api_NamespaceRid;
  settings: NamespaceSettings;
}
/**
 * An installation job failure.
 */
export interface JobFailedError {
  jobRid: _api_BlockSetInstallationJobRid;
}
export type JobSubmissionError = _api_FailedToSubmitJobResult;
export interface ListAllInstallationsRequest {
  includeStatuses?: boolean | null | undefined;
  organizationRid?: _api_OrganizationRid | null | undefined;
}
export interface ListAllInstallationsResponse {
  installations: Array<ManagedInstallation>;
}
/**
 * This response will later be expanded to include managed installations that failed to create.
 */
export interface ListManagedInstallationsForProductInOrganizationResponse {
  failedInstallationCreationRequests: Array<FailedInstallationCreationRequest>;
  installations: Array<ManagedInstallation>;
}
export interface ListManagedNamespacesRequest {
}
export interface ListManagedNamespacesResponse {
  managedNamespaces: Array<_api_NamespaceRid>;
}
export interface ListProductIdsForOrganizationRequest {
}
export interface ListProductIdsForOrganizationResponse {
  productIds: Array<_api_MavenProductId>;
}
export interface ListReleaseManagementTargetNamespacesRequest {
}
export interface ListReleaseManagementTargetNamespacesResponse {
  namespaces: Array<InstallManagerNamespace>;
}
/**
 * Aggregates the relevant information about block set installations to the consumers of MIM.
 *
 * Installations managed through MIM should be edited by MIM only.
 * - Any manual change to the underlying installation will get overwritten once an install is performed through
 * MIM.
 * - If Apollo manages the installation, changes made to the installation either directly using
 * the blockSet installation API, or through MIM wihtout going through Apollo, will get overwritten.
 *
 * Some of the fields on this object are retrievable from the underlying installation, but are available here
 * for convenience.
 */
export interface ManagedInstallation {
  apolloAgentEntityInfo?: ApolloAgentEntityInfo | null | undefined;
  blockSetId: _api_BlockSetId;
  configuration: ManagedInstallationConfiguration;
  installationName: _api_ManagedInstallationName;
  installationRid: _api_BlockSetInstallationRid;
  marketplaceRid: _api_MarketplaceRid;
  mavenProductId: _api_MavenProductId;
  namespaceRid: _api_NamespaceRid;
  projectRid: _api_CompassProjectRid;
  slsVersion?: _api_SlsVersion | null | undefined;
  status?: ManagedInstallationStatus | null | undefined;
}
export interface ManagedInstallationConfiguration_configurationV0 {
  type: "configurationV0";
  configurationV0: ManagedInstallationConfigurationV0;
}
export type ManagedInstallationConfiguration =
  ManagedInstallationConfiguration_configurationV0;

export interface ManagedInstallationConfigurationUpdate_configurationV0 {
  type: "configurationV0";
  configurationV0: ManagedInstallationConfigurationV0Update;
}
export type ManagedInstallationConfigurationUpdate =
  ManagedInstallationConfigurationUpdate_configurationV0;

export interface ManagedInstallationConfigurationV0 {
  cbacMarkings: Array<_api_MarkingId>;
  inputMapping: Record<
    _api_InputBlockSetShapeId,
    _api_ResolvedBlockSetInputShape
  >;
}
/**
 * Contains all the fields from ManagedInstallationConfiguration that can be updated when an
 * installation is upgraded.
 */
export interface ManagedInstallationConfigurationV0Update {
  inputMapping: Record<
    _api_InputBlockSetShapeId,
    _api_ResolvedBlockSetInputShape
  >;
}
export interface ManagedInstallationErrorStatus_installBlockSetsValidationError {
  type: "installBlockSetsValidationError";
  installBlockSetsValidationError: InstallBlockSetsValidationError;
}

export interface ManagedInstallationErrorStatus_jobSubmissionError {
  type: "jobSubmissionError";
  jobSubmissionError: JobSubmissionError;
}

export interface ManagedInstallationErrorStatus_jobFailedError {
  type: "jobFailedError";
  jobFailedError: JobFailedError;
}

export interface ManagedInstallationErrorStatus_uninstallError {
  type: "uninstallError";
  uninstallError: UninstallError;
}
export type ManagedInstallationErrorStatus =
  | ManagedInstallationErrorStatus_installBlockSetsValidationError
  | ManagedInstallationErrorStatus_jobSubmissionError
  | ManagedInstallationErrorStatus_jobFailedError
  | ManagedInstallationErrorStatus_uninstallError;

export interface ManagedInstallationGranularStatus_jobRunning {
  type: "jobRunning";
  jobRunning: ManagedInstallationJobRunningStatus;
}

export interface ManagedInstallationGranularStatus_error {
  type: "error";
  error: ManagedInstallationErrorStatus;
}

export interface ManagedInstallationGranularStatus_success {
  type: "success";
  success: ManagedInstallationSuccessStatus;
}
/**
 * The actual status of the installation.
 */
export type ManagedInstallationGranularStatus =
  | ManagedInstallationGranularStatus_jobRunning
  | ManagedInstallationGranularStatus_error
  | ManagedInstallationGranularStatus_success;

export interface ManagedInstallationJobRunningStatus {
  jobRid: _api_BlockSetInstallationJobRid;
}
/**
 * The granular status of the installation and associated metadata.
 */
export interface ManagedInstallationStatus {
  status: ManagedInstallationGranularStatus;
  targetBlockSetVersionId?: _api_BlockSetVersionId | null | undefined;
  targetVersion?: _api_SlsVersion | null | undefined;
  updatedAt: string;
}
export interface ManagedInstallationSuccessStatus {
  latestSuccessfulJobRid: _api_BlockSetInstallationJobRid;
}
export interface ManageExistingInstallationRequest {
  apolloAgentEntityInfo?: ApolloAgentEntityInfo | null | undefined;
  installationName: _api_ManagedInstallationName;
  installationRid: _api_BlockSetInstallationRid;
}
export interface ManageExistingInstallationResponse {
  installation: ManagedInstallation;
}
export interface NamespaceSettings {
  releaseManagementSettings?:
    | ReleaseManagementNamespaceSettings
    | null
    | undefined;
}
export interface ReleaseManagementNamespaceSettings {
  isTargetEnvironment: boolean;
  sortPriority: number;
}
export type UninstallError = _api_UninstallResponseFailure;
export interface UpdateInstallationFailureResult_failedToSubmitJob {
  type: "failedToSubmitJob";
  failedToSubmitJob: _api_FailedToSubmitJobResult;
}

export interface UpdateInstallationFailureResult_invalidRequest {
  type: "invalidRequest";
  invalidRequest: _api_InvalidInstallBlockSetsRequest;
}
export type UpdateInstallationFailureResult =
  | UpdateInstallationFailureResult_failedToSubmitJob
  | UpdateInstallationFailureResult_invalidRequest;

export interface UpdateInstallationForBlockSetRequest {
  apolloAgentUpdate?: ApolloAgentInfoUpdate | null | undefined;
  configurationUpdate?:
    | ManagedInstallationConfigurationUpdate
    | null
    | undefined;
  targetBlockSetVersionId: _api_BlockSetVersionId;
  targetMarketplaceRid?: _api_MarketplaceRid | null | undefined;
}
export interface UpdateInstallationResponse_success {
  type: "success";
  success: UpdateInstallationSuccessResult;
}

export interface UpdateInstallationResponse_failure {
  type: "failure";
  failure: UpdateInstallationFailureResult;
}
export type UpdateInstallationResponse =
  | UpdateInstallationResponse_success
  | UpdateInstallationResponse_failure;

export interface UpdateInstallationSuccessResult {
  installation: ManagedInstallation;
  installationJob: _api_BlockSetInstallationJobRid;
}
