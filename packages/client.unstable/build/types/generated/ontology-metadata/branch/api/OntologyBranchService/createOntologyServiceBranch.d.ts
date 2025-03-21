import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../../../api/OntologyRid.js";
import type { CreateOntologyServiceBranchRequest } from "../CreateOntologyServiceBranchRequest.js";
import type { CreateOntologyServiceBranchResponse } from "../CreateOntologyServiceBranchResponse.js";
/**
* Create a new branch for use with a service that creates Ontology updates other than
* OMS. The branch will be hidden in most cases. This endpoint should only be called by
* services with the "ontology:service-branch-create" operation on the
* "ri.ontology.<instance>.service-branch-root.1" resource.
*/
export declare function createOntologyServiceBranch(ctx: ConjureContext, onBehalfOf: string, ontologyRid: OntologyRid, request: CreateOntologyServiceBranchRequest): Promise<CreateOntologyServiceBranchResponse>;
