import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../../../api/OntologyRid.js";
import type { ModifyOntologyBranchRequest } from "../ModifyOntologyBranchRequest.js";
import type { ModifyOntologyBranchResponse } from "../ModifyOntologyBranchResponse.js";
/**
* Modify an existing branch in the provided ontology. Users who can view the branch will be able to modify the branch.
*/
export declare function modifyBranch(ctx: ConjureContext, ontologyRid: OntologyRid, request: ModifyOntologyBranchRequest): Promise<ModifyOntologyBranchResponse>;
