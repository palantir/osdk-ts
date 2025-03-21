import { type ConjureContext } from "conjure-lite";
import type { OntologyBranchRid } from "../../../api/OntologyBranchRid.js";
import type { LoadOntologyBranchRequest } from "../LoadOntologyBranchRequest.js";
import type { LoadOntologyBranchResponse } from "../LoadOntologyBranchResponse.js";
/**
* Load an existing branch with the provided ontologyBranchRid.
*/
export declare function loadOntologyBranch(ctx: ConjureContext, ontologyBranchRid: OntologyBranchRid, request: LoadOntologyBranchRequest): Promise<LoadOntologyBranchResponse>;
