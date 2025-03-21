import type { OntologyBranchProposalApprovalState } from "./OntologyBranchProposalApprovalState.js";
import type { OntologyBranchWithProposal } from "./OntologyBranchWithProposal.js";
/**
* A type to represent the response to load all the OntologyBranchWithProposal(s) the user has access to.
*/
export interface LoadOntologyBranchWithProposalResponse {
	ontologyBranchWithProposal: OntologyBranchWithProposal;
	ontologyBranchProposalApprovalState: OntologyBranchProposalApprovalState;
}
