import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyRid } from "../../api/OntologyRid.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { OntologyBranchDetails } from "./OntologyBranchDetails.js";
export interface OntologyBranch {
	rid: OntologyBranchRid;
	ontologyRid: OntologyRid;
	latestOntologyVersion: OntologyVersion;
	branchDetails: OntologyBranchDetails;
}
