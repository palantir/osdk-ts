import type { WorkflowRid } from "../workflow/api/WorkflowRid.js";
import type { LinkTypeId } from "./LinkTypeId.js";
/**
* The request to modify the ontology deletes LinkTypes that are still in use in the workflow.
*/
export interface DeletedLinkTypesStillInUseInWorkflowError {
	workflowRid: WorkflowRid;
	linkTypeIds: Array<LinkTypeId>;
}
