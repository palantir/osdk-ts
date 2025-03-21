import type { AssociatedDataConnectorIdentifier } from "./AssociatedDataConnectorIdentifier.js";
import type { AssociatedObjectViewIdentifier } from "./AssociatedObjectViewIdentifier.js";
import type { AssociatedRepositoryIdentifier } from "./AssociatedRepositoryIdentifier.js";
import type { AssociatedSlateDocumentIdentifier } from "./AssociatedSlateDocumentIdentifier.js";
import type { AssociatedTaurusWorkflowIdentifier } from "./AssociatedTaurusWorkflowIdentifier.js";
import type { AssociatedVertexGraphTemplateIdentifier } from "./AssociatedVertexGraphTemplateIdentifier.js";
import type { AssociatedWorkshopModuleIdentifier } from "./AssociatedWorkshopModuleIdentifier.js";
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
export type AssociatedResourceIdentifier = AssociatedResourceIdentifier_slateDocumentIdentifier | AssociatedResourceIdentifier_repositoryIdentifier | AssociatedResourceIdentifier_workshopModuleIdentifier | AssociatedResourceIdentifier_objectViewIdentifier | AssociatedResourceIdentifier_dataConnectorIdentifier | AssociatedResourceIdentifier_taurusWorkflowIdentifier | AssociatedResourceIdentifier_vertexGraphTemplateIdentifier;
