/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { WorkflowRid as _workflow_api_WorkflowRid } from "../../../workflow/api/__components.js";
import type { OntologyVersion as _api_OntologyVersion } from "../../__components.js";
export interface AssociatedDataConnectorIdentifier_blobsterRid {
  type: "blobsterRid";
  blobsterRid: string;
}
/**
 * An identifier for a data connector
 */
export type AssociatedDataConnectorIdentifier =
  AssociatedDataConnectorIdentifier_blobsterRid;

/**
 * An identifier for an object view
 */
export interface AssociatedObjectViewIdentifier {
  objectTypeRid: string;
  objectViewTabIds: Array<ObjectViewTabId>;
}
/**
 * An identifier for a repository
 */
export interface AssociatedRepositoryIdentifier {
  rid: string;
}
export interface AssociatedResourceIdentifier_slateDocumentIdentifier {
  type: "slateDocumentIdentifier";
  slateDocumentIdentifier: AssociatedSlateDocumentIdentifier;
}

export interface AssociatedResourceIdentifier_repositoryIdentifier {
  type: "repositoryIdentifier";
  repositoryIdentifier: AssociatedRepositoryIdentifier;
}

export interface AssociatedResourceIdentifier_workshopModuleIdentifier {
  type: "workshopModuleIdentifier";
  workshopModuleIdentifier: AssociatedWorkshopModuleIdentifier;
}

export interface AssociatedResourceIdentifier_objectViewIdentifier {
  type: "objectViewIdentifier";
  objectViewIdentifier: AssociatedObjectViewIdentifier;
}

export interface AssociatedResourceIdentifier_dataConnectorIdentifier {
  type: "dataConnectorIdentifier";
  dataConnectorIdentifier: AssociatedDataConnectorIdentifier;
}

export interface AssociatedResourceIdentifier_taurusWorkflowIdentifier {
  type: "taurusWorkflowIdentifier";
  taurusWorkflowIdentifier: AssociatedTaurusWorkflowIdentifier;
}

export interface AssociatedResourceIdentifier_vertexGraphTemplateIdentifier {
  type: "vertexGraphTemplateIdentifier";
  vertexGraphTemplateIdentifier: AssociatedVertexGraphTemplateIdentifier;
}
/**
 * A unique identifier for a resource associated with an ontology entity
 */
export type AssociatedResourceIdentifier =
  | AssociatedResourceIdentifier_slateDocumentIdentifier
  | AssociatedResourceIdentifier_repositoryIdentifier
  | AssociatedResourceIdentifier_workshopModuleIdentifier
  | AssociatedResourceIdentifier_objectViewIdentifier
  | AssociatedResourceIdentifier_dataConnectorIdentifier
  | AssociatedResourceIdentifier_taurusWorkflowIdentifier
  | AssociatedResourceIdentifier_vertexGraphTemplateIdentifier;

/**
 * An identifier for a slate document
 */
export interface AssociatedSlateDocumentIdentifier {
  rid: string;
}
/**
 * An identifier for a taurus workflow configuration
 */
export interface AssociatedTaurusWorkflowIdentifier {
  rid: string;
}
/**
 * An identifier for a vertex graph template
 */
export interface AssociatedVertexGraphTemplateIdentifier {
  rid: string;
}
/**
 * An identifier for a workshop module
 */
export interface AssociatedWorkshopModuleIdentifier {
  rid: string;
}
export interface AssociationMetadata_dataConnectorMetadata {
  type: "dataConnectorMetadata";
  dataConnectorMetadata: DataConnectorMetadata;
}

export interface AssociationMetadata_objectViewMetadata {
  type: "objectViewMetadata";
  objectViewMetadata: ObjectViewMetadata;
}

export interface AssociationMetadata_repositoryMetadata {
  type: "repositoryMetadata";
  repositoryMetadata: RepositoryMetadata;
}

export interface AssociationMetadata_slateMetadata {
  type: "slateMetadata";
  slateMetadata: SlateMetadata;
}

export interface AssociationMetadata_workshopModuleMetadata {
  type: "workshopModuleMetadata";
  workshopModuleMetadata: WorkshopModuleMetadata;
}

export interface AssociationMetadata_taurusWorkflowMetadata {
  type: "taurusWorkflowMetadata";
  taurusWorkflowMetadata: TaurusWorkflowMetadata;
}

export interface AssociationMetadata_vertexGraphTemplateMetadata {
  type: "vertexGraphTemplateMetadata";
  vertexGraphTemplateMetadata: VertexGraphTemplateMetadata;
}
/**
 * Metadata associated with the ontology-entity resource pair
 */
export type AssociationMetadata =
  | AssociationMetadata_dataConnectorMetadata
  | AssociationMetadata_objectViewMetadata
  | AssociationMetadata_repositoryMetadata
  | AssociationMetadata_slateMetadata
  | AssociationMetadata_workshopModuleMetadata
  | AssociationMetadata_taurusWorkflowMetadata
  | AssociationMetadata_vertexGraphTemplateMetadata;

export interface AssociationMetadataOntologyEntityRid_workflowRid {
  type: "workflowRid";
  workflowRid: _workflow_api_WorkflowRid;
}
/**
 * A unique identifier for an ontology entity
 */
export type AssociationMetadataOntologyEntityRid =
  AssociationMetadataOntologyEntityRid_workflowRid;

/**
 * Identifier for the block or resource template the association
 * between the resource and ontology entity
 */
export interface BlockIdentifier {
  blockId: BlockTemplateId;
  blockType: BlockType;
  blockVersion: BlockTemplateVersion;
}
/**
 * The id of the template used to generate the block
 */
export type BlockTemplateId = string;

/**
 * The version of the template used to generate the block
 */
export type BlockTemplateVersion = string;

/**
 * The type of block being deployed
 */
export type BlockType =
  | "WORKSHOP_TEMPLATE"
  | "REPOSITORY_TEMPLATE"
  | "SLATE_TEMPLATE"
  | "OBJECT_VIEW_TEMPLATE"
  | "DATA_CONNECTOR"
  | "TAURUS_WORKFLOW"
  | "VERTEX_GRAPH_TEMPLATE";

/**
 * Request to register an association between the given resource and the
 * given ontology entity.
 */
export interface CreateAssociationRequest {
  associatedResourceIdentifier: AssociatedResourceIdentifier;
  associationMetadata: AssociationMetadata;
  blockIdentifier: BlockIdentifier;
  ontologyEntityRid: AssociationMetadataOntologyEntityRid;
  ontologyVersionAtAssociation: _api_OntologyVersion;
}
/**
 * Response received after creating an association with an Ontology entity
 */
export interface CreateAssociationResponse {
}
export interface DataConnectorMetadata {
}
/**
 * Request to delete one or more associations between a resource and ontology
 * entity.
 */
export interface DeleteAssociationsRequest {
  ontologyAssociationIdentifiers: Array<OntologyAssociationIdentifier>;
}
/**
 * Response received after deleting associations
 */
export interface DeleteAssociationsResponse {
}
/**
 * Request to load all resource metadata associated with an ontology entity
 */
export interface LoadOntologyEntityAssociationsRequest {
  ontologyEntityRid: AssociationMetadataOntologyEntityRid;
}
/**
 * Response denoting how the ontology entity is associated with other
 * resources. The endpoint will return an empty set in case there is
 * any error retrieving the associated resource metadata
 */
export interface LoadOntologyEntityAssociationsResponse {
  response: Array<OntologyAssociation>;
}
/**
 * Request to load all resource metadata associated with a resource rid.
 * The endpoint will return an empty set in case there is any error
 * retrieving the associated resource metadata
 */
export interface LoadResourceAssociationsRequest {
  rid: ResourceRid;
}
/**
 * Response denoting all metadata associated with the resource RID. The
 * endpoint will return an empty set in case there is any error retrieving
 * the associated resource metadata
 */
export interface LoadResourceAssociationsResponse {
  response: Array<OntologyAssociation>;
}
export interface ObjectViewMetadata {
}
/**
 * A tab id for an object's hubble view
 */
export type ObjectViewTabId = string;

/**
 * A single association betweeen an ontology entity and a resource
 */
export interface OntologyAssociation {
  associatedResourceIdentifier: AssociatedResourceIdentifier;
  associationMetadata: AssociationMetadata;
  blockIdentifier: BlockIdentifier;
  ontologyEntityRid: AssociationMetadataOntologyEntityRid;
  ontologyVersionAtAssociation: _api_OntologyVersion;
}
/**
 * A unique identifier for an ontology - resource association
 */
export interface OntologyAssociationIdentifier {
  associatedResourceIdentifier: AssociatedResourceIdentifier;
  ontologyEntityRid: AssociationMetadataOntologyEntityRid;
}
export interface RepositoryMetadata {
}
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

export interface SlateMetadata {
}
export interface TaurusWorkflowMetadata {
}
/**
 * Request to update an association between the given resource and ontology entity.
 * The ontologyEntityRid and associated resource identifier will uniquely identify
 * the association being updated.
 */
export interface UpdateAssociationRequest {
  associatedResourceIdentifier: AssociatedResourceIdentifier;
  associationMetadata: AssociationMetadata;
  blockIdentifier: BlockIdentifier;
  ontologyEntityRid: AssociationMetadataOntologyEntityRid;
  ontologyVersionAtAssociation: _api_OntologyVersion;
}
/**
 * Response received after updating an association with an Ontology entity
 */
export interface UpdateAssociationResponse {
}
export interface VertexGraphTemplateMetadata {
}
export interface WorkshopModuleMetadata {
}
