import type { UserId } from "../../api/UserId.js";
import type { ProposalStatus } from "./ProposalStatus.js";
/**
* Represents the filters that the user can apply while loading OntologyBranchesWithProposal. In case if multiple `ProposalStatus` are requested, the result will consist of `OntologyBranchesWithProposal` in either of those states. Note that in case of multiple filters, results will consist of only the `OntologyBranchesWithProposal` which satisfy all of them i.e. AND filter will be applied.
*/
export interface LoadAllOntologyBranchesWithProposalRequestFilters {
	proposalStatus: Array<ProposalStatus>;
	author: UserId | undefined;
}
