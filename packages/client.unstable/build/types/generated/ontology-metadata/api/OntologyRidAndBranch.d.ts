import type { OntologyBranchRid } from "./OntologyBranchRid.js";
import type { OntologyRid } from "./OntologyRid.js";
/**
* Dataset properties for ontology inputs.
*/
export interface OntologyRidAndBranch {
	ontologyRid: OntologyRid;
	branchRid: OntologyBranchRid;
}
