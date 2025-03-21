import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
/**
* A type to represent the request to load the OntologyBranchWithProposal the user has access to.
*/
export interface LoadOntologyBranchWithProposalRequest {
	ontologyBranchRid: OntologyBranchRid;
}
