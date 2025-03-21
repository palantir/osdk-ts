import { type ConjureContext } from "conjure-lite";
import type { OntologyBranchRid } from "../../../api/OntologyBranchRid.js";
import type { MergeOntologyServiceBranchRequest } from "../MergeOntologyServiceBranchRequest.js";
import type { MergeOntologyServiceBranchResponse } from "../MergeOntologyServiceBranchResponse.js";
/**
* Merge a service branch from a service external to OMS. This endpoint should only be called by
* services with the "ontology:service-branch-merge" operation on the
* "ri.ontology.<instance>.service-branch-root.1" resource.
*/
export declare function mergeOntologyServiceBranch(ctx: ConjureContext, onBehalfOf: string, ontologyBranchRid: OntologyBranchRid, request: MergeOntologyServiceBranchRequest): Promise<MergeOntologyServiceBranchResponse>;
