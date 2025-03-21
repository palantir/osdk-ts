import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyProposalV2 } from "./OntologyProposalV2.js";
export interface LoadOntologyBranchForProposalResponse {
	ontologyProposalV2: OntologyProposalV2;
	branch: OntologyBranch;
}
