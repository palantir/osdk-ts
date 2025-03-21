import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyProposalRid } from "../../api/OntologyProposalRid.js";
import type { ProposalStatusV2 } from "./ProposalStatusV2.js";
import type { ProposalTaskDetails } from "./ProposalTaskDetails.js";
import type { ProposalV2Attribution } from "./ProposalV2Attribution.js";
/**
* A type to represent a proposal on an OntologyBranch.
*/
export interface OntologyProposalV2 {
	rid: OntologyProposalRid;
	parentBranchRid: OntologyBranchRid;
	attribution: ProposalV2Attribution;
	taskDetails: ProposalTaskDetails;
	status: ProposalStatusV2;
}
