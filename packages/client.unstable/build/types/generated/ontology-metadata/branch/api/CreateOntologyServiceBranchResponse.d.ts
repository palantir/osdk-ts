import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyBranch } from "./OntologyBranch.js";
export interface CreateOntologyServiceBranchResponse {
	ontologyBranchRid: OntologyBranchRid;
	ontologyBranch: OntologyBranch;
}
