import { type ConjureContext } from "conjure-lite";
import type { OntologyBranchRid } from "../../../api/OntologyBranchRid.js";
import type { SetOntologyBranchLockRequest } from "../SetOntologyBranchLockRequest.js";
import type { SetOntologyBranchLockResponse } from "../SetOntologyBranchLockResponse.js";
/**
* Endpoint for setting lock metadata for branches. Currently only functional for Builder branches.
*/
export declare function setOntologyBranchLock(ctx: ConjureContext, onBehalfOf: string, ontologyBranchRid: OntologyBranchRid, request: SetOntologyBranchLockRequest): Promise<SetOntologyBranchLockResponse>;
