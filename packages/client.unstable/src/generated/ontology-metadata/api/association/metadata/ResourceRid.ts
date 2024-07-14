/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

export interface ResourceRid_blobsterRid {
  type: "blobsterRid";
  blobsterRid: string;
}

export interface ResourceRid_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: string;
}

export interface ResourceRid_repositoryRid {
  type: "repositoryRid";
  repositoryRid: string;
}

export interface ResourceRid_slateRid {
  type: "slateRid";
  slateRid: string;
}

export interface ResourceRid_workshopRid {
  type: "workshopRid";
  workshopRid: string;
}

export interface ResourceRid_taurusWorkflowRid {
  type: "taurusWorkflowRid";
  taurusWorkflowRid: string;
}

export interface ResourceRid_vertexGraphTemplateRid {
  type: "vertexGraphTemplateRid";
  vertexGraphTemplateRid: string;
}
/**
 * A unique identifier for a resource, stored in a union type to explicitly
 * define rids supported by the LoadResourceAssociations endpoint.
 *
 * You can expect the following types to be returned based on the rid type:
 * - BlobsterRid: Data Connector
 * - ObjectTypeRid: Object View
 * - RepositoryRid: Repository
 * - SlateRid: Slate Document
 * - WorkshopRid: Workshop Module
 * - TaurusWorkflowRid: Taurus Configuration
 * - VertexGraphTemplateRid: Vertex Graph Template
 */
export type ResourceRid =
  | ResourceRid_blobsterRid
  | ResourceRid_objectTypeRid
  | ResourceRid_repositoryRid
  | ResourceRid_slateRid
  | ResourceRid_workshopRid
  | ResourceRid_taurusWorkflowRid
  | ResourceRid_vertexGraphTemplateRid;
