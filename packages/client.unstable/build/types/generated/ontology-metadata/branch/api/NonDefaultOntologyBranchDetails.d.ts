import type { BranchId } from "../../api/BranchId.js";
import type { GlobalBranchRid } from "../../api/GlobalBranchRid.js";
import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { BranchIndexingConfig } from "./BranchIndexingConfig.js";
import type { BranchStatus } from "./BranchStatus.js";
import type { OntologyBranchAttribution } from "./OntologyBranchAttribution.js";
import type { OntologyBranchModificationData } from "./OntologyBranchModificationData.js";
import type { OntologyProposalV2 } from "./OntologyProposalV2.js";
import type { OwnerIdentifier } from "./OwnerIdentifier.js";
export interface NonDefaultOntologyBranchDetails {
	attribution: OntologyBranchAttribution;
	createdAtOntologyVersion: OntologyVersion;
	latestRebasedOntologyVersion: OntologyVersion;
	datasourceBranchId: BranchId | undefined;
	ownerIdentifier: OwnerIdentifier;
	status: BranchStatus;
	branchModificationData: OntologyBranchModificationData;
	indexingConfig: BranchIndexingConfig;
	proposal: OntologyProposalV2 | undefined;
	parentBranchRid: OntologyBranchRid;
	globalBranch: GlobalBranchRid | undefined;
}
