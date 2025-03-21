import type { WorkflowRid } from "../workflow/api/WorkflowRid.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* Some of the referenced objectTypes in the Workflow do not exist.
*/
export interface ReferencedObjectTypesInWorkflowNotFoundError {
	workflowRid: WorkflowRid;
	objectTypeIds: Array<ObjectTypeId>;
}
