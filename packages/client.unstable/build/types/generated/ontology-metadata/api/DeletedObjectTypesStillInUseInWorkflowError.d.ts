import type { WorkflowRid } from "../workflow/api/WorkflowRid.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* The request to modify the ontology deletes ObjectTypes that are still in use in the workflow.
*/
export interface DeletedObjectTypesStillInUseInWorkflowError {
	workflowRid: WorkflowRid;
	objectTypeIds: Array<ObjectTypeId>;
}
