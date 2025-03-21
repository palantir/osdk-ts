import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyBranchDescription } from "../../branch/api/OntologyBranchDescription.js";
import type { OntologyBranchDisplayName } from "../../branch/api/OntologyBranchDisplayName.js";
import type { ModifyOntologyBranchProposal } from "./ModifyOntologyBranchProposal.js";
/**
* A type to represent an OntologyBranch modification request.
*/
export interface ModifyOntologyBranchRequest {
	rid: OntologyBranchRid;
	displayName: OntologyBranchDisplayName;
	description: OntologyBranchDescription;
	proposal: ModifyOntologyBranchProposal;
}
