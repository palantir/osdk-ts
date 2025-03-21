import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../../../api/OntologyRid.js";
import type { CreateOntologyBranchRequest } from "../CreateOntologyBranchRequest.js";
import type { CreateOntologyBranchResponse } from "../CreateOntologyBranchResponse.js";
/**
* Endpoint to create a new branch in an existing ontology. Users need to have access to
* `ontology:create-branch` operation on the OntologyRid.
*/
export declare function createOntologyBranch(ctx: ConjureContext, ontologyRid: OntologyRid, request: CreateOntologyBranchRequest): Promise<CreateOntologyBranchResponse>;
