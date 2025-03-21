import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../../../api/OntologyRid.js";
import type { LoadAllOntologyBranchesWithProposalPageRequest } from "../LoadAllOntologyBranchesWithProposalPageRequest.js";
import type { LoadAllOntologyBranchesWithProposalPageResponse } from "../LoadAllOntologyBranchesWithProposalPageResponse.js";
/**
* Loads all the OntologyBranchWithProposal in the provided ontology the user has access to. Users having Viewer access to any of the modified entities in the OntologyBranch will be able to view the branch.
*/
export declare function loadAllBranchesWithProposal(ctx: ConjureContext, ontologyRid: OntologyRid, request: LoadAllOntologyBranchesWithProposalPageRequest): Promise<LoadAllOntologyBranchesWithProposalPageResponse>;
