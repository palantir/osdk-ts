import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
/**
* Event indicating that a branch was merged. Only non-default branches can be merged.
*/
export interface BranchMergedEvent {
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
}
