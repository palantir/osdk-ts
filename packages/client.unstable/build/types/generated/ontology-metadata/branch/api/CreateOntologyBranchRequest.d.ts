import type { BranchId } from "../../api/BranchId.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { BranchIndexingConfig } from "./BranchIndexingConfig.js";
import type { OntologyBranchDescription } from "./OntologyBranchDescription.js";
import type { OntologyBranchDisplayName } from "./OntologyBranchDisplayName.js";
/**
* A type to represent OntologyBranch creation request.
*/
export interface CreateOntologyBranchRequest {
	displayName: OntologyBranchDisplayName;
	description: OntologyBranchDescription;
	createAtOntologyVersion: OntologyVersion | undefined;
	datasourceBranchId: BranchId | undefined;
	indexingConfig: BranchIndexingConfig;
}
