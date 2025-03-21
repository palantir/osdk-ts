import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { OntologyBranchDescription } from "../../branch/api/OntologyBranchDescription.js";
import type { OntologyBranchDisplayName } from "../../branch/api/OntologyBranchDisplayName.js";
import type { OntologyBranchProposal } from "./OntologyBranchProposal.js";
/**
* A type to represent OntologyBranch creation request.
*/
export interface CreateOntologyBranchRequest {
	createdAtOntologyVersion: OntologyVersion | undefined;
	displayName: OntologyBranchDisplayName;
	description: OntologyBranchDescription;
	proposal: OntologyBranchProposal | undefined;
}
