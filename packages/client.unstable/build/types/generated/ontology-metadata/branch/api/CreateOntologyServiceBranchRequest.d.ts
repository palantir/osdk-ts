import type { BranchId } from "../../api/BranchId.js";
import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { BranchType } from "./BranchType.js";
import type { OntologyBranchDescription } from "./OntologyBranchDescription.js";
import type { OntologyBranchDisplayName } from "./OntologyBranchDisplayName.js";
export interface CreateOntologyServiceBranchRequest {
	displayName: OntologyBranchDisplayName;
	description: OntologyBranchDescription;
	createAtOntologyVersion: OntologyVersion | undefined;
	datasourceBranchId: BranchId | undefined;
	branchType: BranchType;
	parentBranchRid: OntologyBranchRid | undefined;
}
