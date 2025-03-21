import { type ConjureContext } from "conjure-lite";
import type { OntologyBranchRid } from "../../../api/OntologyBranchRid.js";
import type { ValidateOntologyBranchRequest } from "../ValidateOntologyBranchRequest.js";
import type { ValidateOntologyBranchResponse } from "../ValidateOntologyBranchResponse.js";
/**
* Endpoint to validate a branch to determine if it is mergeable with the default branch. The main purpose
* of this endpoint is to be called to determine if the branch is mergeable before calling the merge endpoint.
* If a branch does not pass validations, a set of ValidationErrors is returned that specifies which
* validations failed for what reasons.
*/
export declare function validateOntologyBranch(ctx: ConjureContext, ontologyBranchRid: OntologyBranchRid, request: ValidateOntologyBranchRequest): Promise<ValidateOntologyBranchResponse>;
