import { type ConjureContext } from "conjure-lite";
import type { WorkflowRid } from "../../../workflow/api/WorkflowRid.js";
import type { GetWorkflowPermissionsResponse } from "../GetWorkflowPermissionsResponse.js";
/**
* Returns which permissions the user has on the Workflow.
*/
export declare function getWorkflowPermissions(ctx: ConjureContext, workflowRid: WorkflowRid): Promise<GetWorkflowPermissionsResponse>;
