import { type ConjureContext } from "conjure-lite";
import type { LoadOntologyBranchByVersionRequest } from "../LoadOntologyBranchByVersionRequest.js";
import type { LoadOntologyBranchByVersionResponse } from "../LoadOntologyBranchByVersionResponse.js";
/**
* Load an existing branch with the provided OntologyVersion.
*/
export declare function loadOntologyBranchByVersion(ctx: ConjureContext, request: LoadOntologyBranchByVersionRequest): Promise<LoadOntologyBranchByVersionResponse>;
