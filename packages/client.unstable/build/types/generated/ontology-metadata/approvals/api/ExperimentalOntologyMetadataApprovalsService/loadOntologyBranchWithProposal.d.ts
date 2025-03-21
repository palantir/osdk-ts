import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../../../api/OntologyRid.js";
import type { LoadOntologyBranchWithProposalRequest } from "../LoadOntologyBranchWithProposalRequest.js";
import type { LoadOntologyBranchWithProposalResponse } from "../LoadOntologyBranchWithProposalResponse.js";
/**
* Load an existing branch in the provided ontology. Users who can view atleast one entity modified on that branch will be able to load it.
*/
export declare function loadOntologyBranchWithProposal(ctx: ConjureContext, ontologyRid: OntologyRid, request: LoadOntologyBranchWithProposalRequest): Promise<LoadOntologyBranchWithProposalResponse>;
