import type { WorkflowRid } from "../workflow/api/WorkflowRid.js";
/**
* The Workflows were not found.
*/
export interface WorkflowsNotFoundError {
	workflowRids: Array<WorkflowRid>;
}
