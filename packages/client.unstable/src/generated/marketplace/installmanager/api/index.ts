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

export * as InstallManagerAdminService from "./InstallManagerAdminService.js";
export * as InstallManagerService from "./InstallManagerService.js";

export type {
  ApolloAgentEntityInfo,
  ApolloAgentInfoUpdate,
  CreateInstallationFailureResult,
  CreateInstallationForBlockSetRequest,
  CreateInstallationResponse,
  CreateInstallationSuccessResult,
  DeleteInstallationFailureResult,
  DeleteInstallationRequest,
  DeleteInstallationResponse,
  DeleteInstallationSuccessResult,
  FailedInstallationCreationRequest,
  GetInstallationResponse,
  InstallBlockSetsValidationError,
  InstallManagerNamespace,
  JobFailedError,
  JobSubmissionError,
  ListAllInstallationsRequest,
  ListAllInstallationsResponse,
  ListManagedInstallationsForProductInOrganizationResponse,
  ListManagedNamespacesRequest,
  ListManagedNamespacesResponse,
  ListProductIdsForOrganizationRequest,
  ListProductIdsForOrganizationResponse,
  ListReleaseManagementTargetNamespacesRequest,
  ListReleaseManagementTargetNamespacesResponse,
  ManagedInstallation,
  ManagedInstallationConfiguration,
  ManagedInstallationConfigurationUpdate,
  ManagedInstallationConfigurationV0,
  ManagedInstallationConfigurationV0Update,
  ManagedInstallationErrorStatus,
  ManagedInstallationGranularStatus,
  ManagedInstallationJobRunningStatus,
  ManagedInstallationStatus,
  ManagedInstallationSuccessStatus,
  ManageExistingInstallationRequest,
  ManageExistingInstallationResponse,
  NamespaceSettings,
  ReleaseManagementNamespaceSettings,
  UninstallError,
  UpdateInstallationFailureResult,
  UpdateInstallationForBlockSetRequest,
  UpdateInstallationResponse,
  UpdateInstallationSuccessResult,
} from "./__components.js";
