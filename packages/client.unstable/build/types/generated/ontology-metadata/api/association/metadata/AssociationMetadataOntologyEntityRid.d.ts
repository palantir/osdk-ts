import type { WorkflowRid } from "../../../workflow/api/WorkflowRid.js";
export interface AssociationMetadataOntologyEntityRid_workflowRid {
	type: "workflowRid";
	workflowRid: WorkflowRid;
}
/**
* A unique identifier for an ontology entity
*/
export type AssociationMetadataOntologyEntityRid = AssociationMetadataOntologyEntityRid_workflowRid;
