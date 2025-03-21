import type { WorkflowRid } from "../workflow/api/WorkflowRid.js";
/**
* There was an attempt to create Workflows that already exist.
*/
export interface WorkflowsAlreadyExistError {
	workflowRids: Array<WorkflowRid>;
}
