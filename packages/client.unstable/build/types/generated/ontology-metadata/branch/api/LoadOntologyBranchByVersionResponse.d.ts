import type { OntologyBranch } from "./OntologyBranch.js";
import type { VersionedBranchDetails } from "./VersionedBranchDetails.js";
export interface LoadOntologyBranchByVersionResponse {
	ontologyBranch: OntologyBranch;
	versionedBranchDetails: VersionedBranchDetails;
}
