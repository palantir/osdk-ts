import type { ForkRid } from "./ForkRid.js";
import type { ObjectSetFilterContext } from "./ObjectSetFilterContext.js";
import type { OntologyBranchRid } from "./OntologyBranchRid.js";
import type { OwningRid } from "./OwningRid.js";
import type { WorkstateRid } from "./WorkstateRid.js";
/**
* Additional context used to execute object set request queries.
*/
export interface ObjectSetContext {
	objectSetFilterContext: ObjectSetFilterContext | undefined;
	workstateRid: WorkstateRid | undefined;
	owningRid: OwningRid | undefined;
	reportUsage: boolean | undefined;
	forkRid: ForkRid | undefined;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
