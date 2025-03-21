import type { TaskDetailsV1 } from "./TaskDetailsV1.js";
import type { TaskDetailsV2 } from "./TaskDetailsV2.js";
export interface ProposalTaskDetails_v1 {
	type: "v1";
	v1: TaskDetailsV1;
}
export interface ProposalTaskDetails_v2 {
	type: "v2";
	v2: TaskDetailsV2;
}
/**
* Encodes the task details for the Approvals Task associated with this Proposal.
*/
export type ProposalTaskDetails = ProposalTaskDetails_v1 | ProposalTaskDetails_v2;
