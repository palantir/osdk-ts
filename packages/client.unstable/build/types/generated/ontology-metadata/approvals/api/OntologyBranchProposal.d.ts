import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { ProposalStatus } from "./ProposalStatus.js";
/**
* A type to represent a change request from the OntologyBranch.
*/
export interface OntologyBranchProposal {
	targetOntologyBranchRid: OntologyBranchRid;
	status: ProposalStatus;
}
