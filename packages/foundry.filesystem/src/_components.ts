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
 * Log Safety: SAFE
 */
export interface Folder {
  rid: FolderRid;
}

/**
 * The unique resource identifier (RID) of a Folder.
 *
 * Log Safety: SAFE
 */
export type FolderRid = LooselyBrandedString<"FolderRid">;

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
  trashed: TrashedStatus;
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
  | "Artifacts_Repository"
  | "Bellaso_CipherChannel"
  | "Blobster_Document"
  | "Blobster_Image"
  | "Carbon_Workspace"
  | "Compass_Folder"
  | "Compass_WebLink"
  | "Contour_Analysis"
  | "DataHealth_MonitoringView"
  | "Eddie_Logic"
  | "Eddie_Pipeline"
  | "Fforms_Form"
  | "Foundry_Dataset"
  | "FoundryAcademy_Tutorial"
  | "FoundryContainerService_Container"
  | "FoundryMl_Objective"
  | "FoundryTemplates_Template"
  | "Fusion_Document"
  | "Hubble_ExplorationLayout"
  | "Machinery_Document"
  | "Magritte_Agent"
  | "Magritte_Source"
  | "Marketplace_BlockSetInstallation"
  | "Marketplace_Local"
  | "Marketplace_RemoteStore"
  | "Mio_MediaSet"
  | "Models_Model"
  | "Models_ModelVersion"
  | "Monocle_Graph"
  | "Notepad_Notepad"
  | "Notepad_NotepadTemplate"
  | "ObjectSentinel_Monitor"
  | "ObjectSet_VersionedObjectSet"
  | "Opus_Graph"
  | "Opus_Map"
  | "Opus_MapLayer"
  | "Quiver_Analysis"
  | "Report_Report"
  | "Slate_Document"
  | "SolutionDesign_Diagram"
  | "Stemma_Repository"
  | "Tables_Table"
  | "Taurus_Workflow"
  | "ThirdPartyApplications_Application"
  | "Vector_Workbook"
  | "Workshop_Module";

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
export type TrashedStatus =
  | "DIRECTLY_TRASHED"
  | "ANCESTOR_TRASHED"
  | "NOT_TRASHED";
