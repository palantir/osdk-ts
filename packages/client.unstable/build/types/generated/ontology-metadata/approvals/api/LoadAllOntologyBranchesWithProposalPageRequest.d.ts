import type { LoadAllOntologyBranchesPageToken } from "./LoadAllOntologyBranchesPageToken.js";
import type { LoadAllOntologyBranchesWithProposalRequestFilters } from "./LoadAllOntologyBranchesWithProposalRequestFilters.js";
/**
* A type to represent the request to load all the OntologyBranchesWithProposal(s) the user has access to
*/
export interface LoadAllOntologyBranchesWithProposalPageRequest {
	pageToken: LoadAllOntologyBranchesPageToken | undefined;
	limit: number;
	filters: LoadAllOntologyBranchesWithProposalRequestFilters | undefined;
}
