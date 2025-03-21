import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../../../api/OntologyRid.js";
import type { CreateOntologyBranchRequest } from "../CreateOntologyBranchRequest.js";
import type { CreateOntologyBranchResponse } from "../CreateOntologyBranchResponse.js";
/**
* Endpoint to create a new branch in an existing ontology. This also creates an OntologyBranchProposal from this branch to the
* main branch in a `DRAFT` ProposalStatus. Users need to have access to `ontology:create-branch` operation on the
* Ontology parent node to be able to create a new branch. This operaton is granted to the Viewer(s) of the ontology
* by default.
*/
export declare function createBranch(ctx: ConjureContext, ontologyRid: OntologyRid, request: CreateOntologyBranchRequest): Promise<CreateOntologyBranchResponse>;
