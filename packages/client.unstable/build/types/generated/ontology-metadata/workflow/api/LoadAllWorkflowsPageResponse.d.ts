import type { LoadAllWorkflowsPageToken } from "./LoadAllWorkflowsPageToken.js";
import type { Workflow } from "./Workflow.js";
import type { WorkflowRid } from "./WorkflowRid.js";
/**
* Response to LoadAllWorkflowsPageRequest.
*/
export interface LoadAllWorkflowsPageResponse {
	workflows: Record<WorkflowRid, Workflow>;
	nextPageToken: LoadAllWorkflowsPageToken | undefined;
}
