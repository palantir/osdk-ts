import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
/**
* Event indicating that a branch was closed. Only non-default branches can be closed.
*/
export interface BranchClosedEvent {
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
}
