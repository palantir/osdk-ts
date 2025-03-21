import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { OntologyBranchAttribution } from "../../branch/api/OntologyBranchAttribution.js";
import type { OntologyBranchDescription } from "../../branch/api/OntologyBranchDescription.js";
import type { OntologyBranchDisplayName } from "../../branch/api/OntologyBranchDisplayName.js";
import type { OntologyBranchModificationData } from "../../branch/api/OntologyBranchModificationData.js";
import type { OntologyBranchProposal } from "./OntologyBranchProposal.js";
/**
* A type to represent the `OntologyBranch` with `OntologyBranchProposal`. Note that the default OntologyBranch is
* not an OntologyBranchWithProposal since it is not associated with any proposal.
*/
export interface OntologyBranchWithProposal {
	rid: OntologyBranchRid;
	displayName: OntologyBranchDisplayName;
	description: OntologyBranchDescription;
	attribution: OntologyBranchAttribution;
	createdAtOntologyVersion: OntologyVersion;
	proposal: OntologyBranchProposal;
	ontologyBranchModificationData: OntologyBranchModificationData;
	latestOntologyVersion: OntologyVersion;
	latestRebasedOntologyVersion: OntologyVersion;
}
