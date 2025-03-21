import { type ConjureContext } from "conjure-lite";
import type { OntologyBranchRid } from "../../../api/OntologyBranchRid.js";
import type { FindConflictsRequest } from "../FindConflictsRequest.js";
import type { FindConflictsResponse } from "../FindConflictsResponse.js";
/**
* Endpoint to determine if there are conflicts for entities between the branch with the provided
* ontologyBranchRid and the default branch at the provided OntologyVersion. An entity is defined to be
* conflicting if it is modified/deleted on a branch and is also modified/deleted on the default branch
* between the latestRebasedVersion of the branch and the provided OntologyVersion.
*/
export declare function findConflicts(ctx: ConjureContext, ontologyBranchRid: OntologyBranchRid, request: FindConflictsRequest): Promise<FindConflictsResponse>;
