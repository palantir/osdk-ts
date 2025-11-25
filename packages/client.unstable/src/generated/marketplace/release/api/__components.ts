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
  ArtifactsRepositoryRid as _api_ArtifactsRepositoryRid,
  BlockSetId as _api_BlockSetId,
  BlockSetVersionId as _api_BlockSetVersionId,
  BlockSetVersionReference as _api_BlockSetVersionReference,
  CompassProjectRid as _api_CompassProjectRid,
  EddieEdgePipelineRid as _api_EddieEdgePipelineRid,
  ErrorGranularOutputSpecResult as _api_ErrorGranularOutputSpecResult,
  MarketplaceRid as _api_MarketplaceRid,
  MavenProductId as _api_MavenProductId,
  MultipassUserId as _api_MultipassUserId,
  PackageName as _api_PackageName,
  ReleaseRid as _api_ReleaseRid,
  ResolvedOutputSpec as _api_ResolvedOutputSpec,
  SlsVersion as _api_SlsVersion,
  TargetEnvironment as _api_TargetEnvironment,
  Void as _api_Void,
} from "../../api/__components.js";
export interface ApolloPublishError {
  reason: string;
}
/**
 * A docker image that must be moved from Foundry Artifacts to the Apollo Container registry.
 * The image will be included in the manifest extensions. The name and tag will remain the same when moved to the
 * destination registry.
 */
export interface ArtifactsImageLocator {
  imageName: string;
  imageVersion: _api_SlsVersion;
  repositoryRid: _api_ArtifactsRepositoryRid;
}
export interface BatchGetReleaseMetadataForBlockSetsRequest {
  blockSetIds: Array<_api_BlockSetId>;
  marketplaceRid: _api_MarketplaceRid;
}
export interface BatchGetReleaseMetadataForBlockSetsResponse {
  blockSetToReleaseMetadata: Record<_api_BlockSetId, BlockSetReleaseMetadata>;
}
export interface BlockSetReleaseMetadata {
  blockSetId: _api_BlockSetId;
  compassProjectRid?: _api_CompassProjectRid | null | undefined;
  mavenProductId: _api_MavenProductId;
  releaseRid: _api_ReleaseRid;
}
export interface BlockSetVersionCreationFailed {
  blockSetVersionId: _api_BlockSetVersionId;
  marketplaceRid: _api_MarketplaceRid;
}
export interface CondaOsdkBuildOptions {
}
export interface CreateReleaseOptions {
  marketplace?: MarketplaceCreateReleaseOptions | null | undefined;
  osdk?: OsdkCreateReleaseOptions | null | undefined;
  targetState?: ReleaseTargetState | null | undefined;
}
/**
 * A request for a new release to be cut
 */
export interface CreateReleaseRequest {
  compassProject: _api_CompassProjectRid;
  description: string;
  mavenProductId?: _api_MavenProductId | null | undefined;
  options: CreateReleaseOptions;
  targetEnvironmentCompatibility: Array<_api_TargetEnvironment>;
  version: _api_SlsVersion;
}
export interface CreateReleaseResponse {
  release: Release;
}
/**
 * Edge pipeline that is known to release service. The information is used when publishing the
 * pipeline to Apollo.
 */
export interface DeclaredEdgePipeline {
  edgePipelineRid: _api_EddieEdgePipelineRid;
  mavenProductId: _api_MavenProductId;
}
export interface DeleteDraftRequest {
}
export interface DeleteDraftResponse_success {
  type: "success";
  success: DeleteDraftSuccessResult;
}
export type DeleteDraftResponse = DeleteDraftResponse_success;

export interface DeleteDraftSuccessResult {
}
export interface DeleteReleaseMetadataForBlockSetResponse_success {
  type: "success";
  success: DeleteReleaseMetadataForBlockSetSuccessResult;
}
export type DeleteReleaseMetadataForBlockSetResponse =
  DeleteReleaseMetadataForBlockSetResponse_success;

export interface DeleteReleaseMetadataForBlockSetSuccessResult {
}
export interface DraftState {
}
export interface DraftTargetState {
}
export interface FailedState {
  error: any;
  errors: Array<ReleaseCreationError>;
}
export interface FailingGranularOutputSpecResult_error {
  type: "error";
  error: _api_ErrorGranularOutputSpecResult;
}

export interface FailingGranularOutputSpecResult_unsupported {
  type: "unsupported";
  unsupported: _api_Void;
}
export type FailingGranularOutputSpecResult =
  | FailingGranularOutputSpecResult_error
  | FailingGranularOutputSpecResult_unsupported;

export interface FailingOutputSpecResult {
  outputSpecs: Array<_api_ResolvedOutputSpec>;
  result: FailingGranularOutputSpecResult;
}
export interface FailingResourcesInProject {
  failedResults: Array<FailingOutputSpecResult>;
}
export interface FinishedState {
}
export interface FinishedTargetState {
}
export interface GeneratingState {
}
/**
 * Location of the helm chart artifact.
 * The service expects the helm chart OCI to already be in Foundry Artifacts as a file artifact.
 * The service will pull the helm chart OCI using the repoRid and filePath fields.
 */
export interface HelmChartArtifactLocator {
  filePath: string;
  repositoryRid: _api_ArtifactsRepositoryRid;
}
export interface ListReleasesPageToken {
  releaseRid: _api_ReleaseRid;
  version: _api_SlsVersion;
}
export interface ListReleasesResponse {
  nextPageToken?: ListReleasesPageToken | null | undefined;
  releases: Array<Release>;
  totalResults: number;
}
export interface MarketplaceCreateReleaseOptions {
  blockSetId?: _api_BlockSetId | null | undefined;
  marketplaceRid: _api_MarketplaceRid;
  useSingletonMode?: boolean | null | undefined;
}
export interface MarketplaceRelease {
  backingBlockSet: _api_BlockSetVersionReference;
  options: MarketplaceCreateReleaseOptions;
  status: ReleaseCreationStatus;
}
export interface MavenOsdkBuildOptions {
}
export interface NpmOsdkBuildOptions {
}
export interface OsdkCreateReleaseOptions {
  conda?: CondaOsdkBuildOptions | null | undefined;
  maven?: MavenOsdkBuildOptions | null | undefined;
  npm?: NpmOsdkBuildOptions | null | undefined;
  pypi?: PypiOsdkBuildOptions | null | undefined;
  repositoryRid: _api_ArtifactsRepositoryRid;
}
export interface OsdkCreationFailedReleaseError {
  errorReason: string;
  packageName: string;
  repositoryRid: string;
  slsVersion: _api_SlsVersion;
}
export interface OsdkRelease {
  options: OsdkCreateReleaseOptions;
  packageName: _api_PackageName;
  status: ReleaseCreationStatus;
}
export interface PreviewReleaseRequest {
  compassProject: _api_CompassProjectRid;
}
export interface PreviewReleaseResponse {
  description: string;
  mavenProductId?: _api_MavenProductId | null | undefined;
  options?: CreateReleaseOptions | null | undefined;
  version: _api_SlsVersion;
}
export interface PypiOsdkBuildOptions {
}
export interface Release {
  createdAt: string;
  createdByUser: _api_MultipassUserId;
  description: string;
  marketplace?: MarketplaceRelease | null | undefined;
  mavenProductId: _api_MavenProductId;
  osdk?: OsdkRelease | null | undefined;
  rid: _api_ReleaseRid;
  targetEnvironmentCompatibility: Array<_api_TargetEnvironment>;
  targetState?: ReleaseTargetState | null | undefined;
  version: _api_SlsVersion;
}
export interface ReleaseCreationError_osdkCreationFailed {
  type: "osdkCreationFailed";
  osdkCreationFailed: OsdkCreationFailedReleaseError;
}

export interface ReleaseCreationError_blockSetVersionCreationFailed {
  type: "blockSetVersionCreationFailed";
  blockSetVersionCreationFailed: BlockSetVersionCreationFailed;
}

export interface ReleaseCreationError_unknownError {
  type: "unknownError";
  unknownError: ReleaseCreationUnknownError;
}

export interface ReleaseCreationError_failingResourcesInProject {
  type: "failingResourcesInProject";
  failingResourcesInProject: FailingResourcesInProject;
}

export interface ReleaseCreationError_apolloPublishError {
  type: "apolloPublishError";
  apolloPublishError: ApolloPublishError;
}
export type ReleaseCreationError =
  | ReleaseCreationError_osdkCreationFailed
  | ReleaseCreationError_blockSetVersionCreationFailed
  | ReleaseCreationError_unknownError
  | ReleaseCreationError_failingResourcesInProject
  | ReleaseCreationError_apolloPublishError;

export interface ReleaseCreationStatus_generating {
  type: "generating";
  generating: GeneratingState;
}

export interface ReleaseCreationStatus_draft {
  type: "draft";
  draft: DraftState;
}

export interface ReleaseCreationStatus_finished {
  type: "finished";
  finished: FinishedState;
}

export interface ReleaseCreationStatus_failed {
  type: "failed";
  failed: FailedState;
}
export type ReleaseCreationStatus =
  | ReleaseCreationStatus_generating
  | ReleaseCreationStatus_draft
  | ReleaseCreationStatus_finished
  | ReleaseCreationStatus_failed;

export interface ReleaseCreationUnknownError {
  error: any;
}
export interface ReleaseTargetState_draft {
  type: "draft";
  draft: DraftTargetState;
}

export interface ReleaseTargetState_finished {
  type: "finished";
  finished: FinishedTargetState;
}
export type ReleaseTargetState =
  | ReleaseTargetState_draft
  | ReleaseTargetState_finished;

export interface UpdateDraftRequest {
  description?: string | null | undefined;
  shouldRetriggerGeneration: boolean;
  targetEnvironmentCompatibility?:
    | Array<_api_TargetEnvironment>
    | null
    | undefined;
  targetState: ReleaseTargetState;
}
export interface UpdateDraftResponse {
  release: Release;
}
