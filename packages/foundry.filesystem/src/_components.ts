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

import type * as _Core from "@osdk/foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export interface CreateFolderRequest {
  parentFolderRid: FolderRid;
  displayName: ResourceDisplayName;
}

/**
 * Log Safety: UNSAFE
 */
export interface Folder {
  rid: FolderRid;
  displayName: ResourceDisplayName;
  description?: string;
  documentation?: string;
  path: ResourcePath;
  type: FolderType;
  createdBy: _Core.CreatedBy;
  updatedBy: _Core.UpdatedBy;
  createdTime: _Core.CreatedTime;
  updatedTime: _Core.UpdatedTime;
  trashStatus: TrashStatus;
  parentFolderRid: FolderRid;
  projectRid?: ProjectRid;
  spaceRid: SpaceRid;
}

/**
 * The unique resource identifier (RID) of a Folder.
 *
 * Log Safety: SAFE
 */
export type FolderRid = LooselyBrandedString<"FolderRid">;

/**
   * A folder can either a regular Folder, a
Project or a
Space.
   *
   * Log Safety: SAFE
   */
export type FolderType = "FOLDER" | "SPACE" | "PROJECT";

/**
 * Log Safety: UNSAFE
 */
export interface ListChildrenOfFolderResponse {
  data: Array<Resource>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: SAFE
 */
export interface Project {
  rid: ProjectRid;
}

/**
 * The unique resource identifier (RID) of a Project.
 *
 * Log Safety: SAFE
 */
export type ProjectRid = LooselyBrandedString<"ProjectRid">;

/**
 * Log Safety: UNSAFE
 */
export interface Resource {
  rid: ResourceRid;
  displayName: ResourceDisplayName;
  description?: string;
  documentation?: string;
  path: ResourcePath;
  type: ResourceType;
  createdBy: _Core.CreatedBy;
  updatedBy: _Core.UpdatedBy;
  createdTime: _Core.CreatedTime;
  updatedTime: _Core.UpdatedTime;
  trashStatus: TrashStatus;
  parentFolderRid: FolderRid;
  projectRid: ProjectRid;
  spaceRid: SpaceRid;
}

/**
 * The display name of the Resource
 *
 * Log Safety: UNSAFE
 */
export type ResourceDisplayName = LooselyBrandedString<"ResourceDisplayName">;

/**
 * The full path to the resource, including the resource name itself
 *
 * Log Safety: UNSAFE
 */
export type ResourcePath = LooselyBrandedString<"ResourcePath">;

/**
 * The unique resource identifier (RID) of a Resource.
 *
 * Log Safety: UNSAFE
 */
export type ResourceRid = LooselyBrandedString<"ResourceRid">;

/**
 * The type of the Resource derived from the Resource Identifier (RID).
 *
 * Log Safety: SAFE
 */
export type ResourceType =
  | "ARTIFACTS_REPOSITORY"
  | "BELLASO_CIPHER_CHANNEL"
  | "BLOBSTER_DOCUMENT"
  | "BLOBSTER_IMAGE"
  | "CARBON_WORKSPACE"
  | "COMPASS_FOLDER"
  | "COMPASS_WEB_LINK"
  | "CONTOUR_ANALYSIS"
  | "DATA_HEALTH_MONITORING_VIEW"
  | "EDDIE_LOGIC"
  | "EDDIE_PIPELINE"
  | "FFORMS_FORM"
  | "FOUNDRY_DATASET"
  | "FOUNDRY_ACADEMY_TUTORIAL"
  | "FOUNDRY_CONTAINER_SERVICE_CONTAINER"
  | "FOUNDRY_ML_OBJECTIVE"
  | "FOUNDRY_TEMPLATES_TEMPLATE"
  | "FUSION_DOCUMENT"
  | "HUBBLE_EXPLORATION_LAYOUT"
  | "MACHINERY_DOCUMENT"
  | "MAGRITTE_AGENT"
  | "MAGRITTE_SOURCE"
  | "MARKETPLACE_BLOCK_SET_INSTALLATION"
  | "MARKETPLACE_LOCAL"
  | "MARKETPLACE_REMOTE_STORE"
  | "MIO_MEDIA_SET"
  | "MODELS_MODEL"
  | "MODELS_MODEL_VERSION"
  | "MONOCLE_GRAPH"
  | "NOTEPAD_NOTEPAD"
  | "NOTEPAD_NOTEPAD_TEMPLATE"
  | "OBJECT_SENTINEL_MONITOR"
  | "OBJECT_SET_VERSIONED_OBJECT_SET"
  | "OPUS_GRAPH"
  | "OPUS_MAP"
  | "OPUS_MAP_LAYER"
  | "QUIVER_ANALYSIS"
  | "REPORT_REPORT"
  | "SLATE_DOCUMENT"
  | "SOLUTION_DESIGN_DIAGRAM"
  | "STEMMA_REPOSITORY"
  | "TABLES_TABLE"
  | "TAURUS_WORKFLOW"
  | "THIRD_PARTY_APPLICATIONS_APPLICATION"
  | "VECTOR_WORKBOOK"
  | "WORKSHOP_MODULE";

/**
 * Log Safety: SAFE
 */
export interface Space {
  rid: SpaceRid;
}

/**
 * The unique resource identifier (RID) of a Space.
 *
 * Log Safety: SAFE
 */
export type SpaceRid = LooselyBrandedString<"SpaceRid">;

/**
 * Log Safety: SAFE
 */
export type TrashStatus =
  | "DIRECTLY_TRASHED"
  | "ANCESTOR_TRASHED"
  | "NOT_TRASHED";
