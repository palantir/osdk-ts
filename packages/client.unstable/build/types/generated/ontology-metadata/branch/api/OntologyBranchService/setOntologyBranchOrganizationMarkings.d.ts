import { type ConjureContext } from "conjure-lite";
import type { SetOntologyBranchOrganizationMarkingsRequest } from "../SetOntologyBranchOrganizationMarkingsRequest.js";
import type { SetOntologyBranchOrganizationMarkingsResponse } from "../SetOntologyBranchOrganizationMarkingsResponse.js";
/**
* Manually set the org markings for an ontology branch. This will throw if the stack does not
* have the `organizationMarkingsRequiredOnOntologyProposals` set to true.
*/
export declare function setOntologyBranchOrganizationMarkings(ctx: ConjureContext, request: SetOntologyBranchOrganizationMarkingsRequest): Promise<SetOntologyBranchOrganizationMarkingsResponse>;
