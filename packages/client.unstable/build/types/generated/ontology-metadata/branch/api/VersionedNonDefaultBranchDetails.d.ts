import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { OntologyBranchModificationData } from "./OntologyBranchModificationData.js";
export interface VersionedNonDefaultBranchDetails {
	version: OntologyVersion;
	latestRebasedOntologyVersion: OntologyVersion;
	branchModificationData: OntologyBranchModificationData;
}
