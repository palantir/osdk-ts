import type { LoadAllOntologyBranchesPageToken } from "./LoadAllOntologyBranchesPageToken.js";
import type { OntologyBranchWithProposal } from "./OntologyBranchWithProposal.js";
/**
* A type to represent the response to load all the branches the user has access to
*/
export interface LoadAllOntologyBranchesWithProposalPageResponse {
	ontologyBranchesWithProposal: Array<OntologyBranchWithProposal>;
	nextPageToken: LoadAllOntologyBranchesPageToken | undefined;
}
