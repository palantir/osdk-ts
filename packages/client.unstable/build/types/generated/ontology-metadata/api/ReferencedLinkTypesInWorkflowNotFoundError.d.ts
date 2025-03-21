import type { WorkflowRid } from "../workflow/api/WorkflowRid.js";
import type { LinkTypeId } from "./LinkTypeId.js";
/**
* Some of the referenced linkTypes in the Workflow do not exist.
*/
export interface ReferencedLinkTypesInWorkflowNotFoundError {
	workflowRid: WorkflowRid;
	linkTypeIds: Array<LinkTypeId>;
}
