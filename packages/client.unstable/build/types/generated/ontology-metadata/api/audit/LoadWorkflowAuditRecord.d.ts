import type { WorkflowDisplayName } from "../../workflow/api/WorkflowDisplayName.js";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
export interface LoadWorkflowAuditRecord {
	workflowRid: WorkflowRid;
	workflowDisplayName: WorkflowDisplayName;
}
