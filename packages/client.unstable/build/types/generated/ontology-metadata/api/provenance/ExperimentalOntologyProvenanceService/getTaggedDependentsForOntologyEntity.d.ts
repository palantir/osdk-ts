import { type ConjureContext } from "conjure-lite";
import type { GetTaggedDependentsForOntologyEntityRequest } from "../GetTaggedDependentsForOntologyEntityRequest.js";
import type { GetTaggedDependentsForOntologyEntityResponse } from "../GetTaggedDependentsForOntologyEntityResponse.js";
/**
* Endpoint to get the tagged dependents on the requested OntologyEntity. Requires view permissions on the
* requested ontology entity.
*/
export declare function getTaggedDependentsForOntologyEntity(ctx: ConjureContext, request: GetTaggedDependentsForOntologyEntityRequest): Promise<GetTaggedDependentsForOntologyEntityResponse>;
