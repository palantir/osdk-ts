import { type ConjureContext } from "conjure-lite";
import type { OntologyBranchRid } from "../../../api/OntologyBranchRid.js";
import type { LoadOntologyBranchMarkingsRequest } from "../LoadOntologyBranchMarkingsRequest.js";
import type { LoadOntologyBranchMarkingsResponse } from "../LoadOntologyBranchMarkingsResponse.js";
/**
* Load the markings for an ontology branch. Markings for orgs the user does not belong to will be
* filtered out.
*/
export declare function loadOntologyBranchMarkings(ctx: ConjureContext, ontologyBranchRid: OntologyBranchRid, request: LoadOntologyBranchMarkingsRequest): Promise<LoadOntologyBranchMarkingsResponse>;
