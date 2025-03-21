import { type ConjureContext } from "conjure-lite";
import type { OntologyProposalRid } from "../../../api/OntologyProposalRid.js";
import type { LoadOntologyBranchForProposalRequest } from "../LoadOntologyBranchForProposalRequest.js";
import type { LoadOntologyBranchForProposalResponse } from "../LoadOntologyBranchForProposalResponse.js";
/**
* Load a ProposalV2 and its parent branch with the provided ontologyProposalRid.
*/
export declare function loadOntologyBranchForProposal(ctx: ConjureContext, ontologyProposalRid: OntologyProposalRid, request: LoadOntologyBranchForProposalRequest): Promise<LoadOntologyBranchForProposalResponse>;
