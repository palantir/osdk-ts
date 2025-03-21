import type { DataConnectorMetadata } from "./DataConnectorMetadata.js";
import type { ObjectViewMetadata } from "./ObjectViewMetadata.js";
import type { RepositoryMetadata } from "./RepositoryMetadata.js";
import type { SlateMetadata } from "./SlateMetadata.js";
import type { TaurusWorkflowMetadata } from "./TaurusWorkflowMetadata.js";
import type { VertexGraphTemplateMetadata } from "./VertexGraphTemplateMetadata.js";
import type { WorkshopModuleMetadata } from "./WorkshopModuleMetadata.js";
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
export type AssociationMetadata = AssociationMetadata_dataConnectorMetadata | AssociationMetadata_objectViewMetadata | AssociationMetadata_repositoryMetadata | AssociationMetadata_slateMetadata | AssociationMetadata_workshopModuleMetadata | AssociationMetadata_taurusWorkflowMetadata | AssociationMetadata_vertexGraphTemplateMetadata;
