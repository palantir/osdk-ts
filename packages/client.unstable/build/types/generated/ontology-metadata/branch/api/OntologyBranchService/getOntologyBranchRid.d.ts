import { type ConjureContext } from "conjure-lite";
import type { GlobalBranchRid } from "../../../api/GlobalBranchRid.js";
import type { OntologyBranchRid } from "../../../api/OntologyBranchRid.js";
/**
* Endpoint get the corresponding OntologyBranchRid for a global BranchRid given by BranchService.
* Will throw if the given BranchRid does not have a corresponding OntologyBranchRid.
*
* Note that it is ok for services to cache the result of this map, since this mapping only encodes a rid to
* rid mapping. The only permission check performed in this endpoint is a check that the token is valid.
*/
export declare function getOntologyBranchRid(ctx: ConjureContext, globalBranchRid: GlobalBranchRid): Promise<OntologyBranchRid>;
