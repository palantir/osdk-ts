import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { ConflictingEntitiesSummary } from "./ConflictingEntitiesSummary.js";
/**
* Merge conflicts have been detected between your current branch and the main branch. These conflicts must be
* resolved before you can successfully complete the merge process.
*/
export interface BranchConflictsWithMain {
	ontologyBranchRid: OntologyBranchRid;
	conflictingEntitiesSummary: ConflictingEntitiesSummary;
}
