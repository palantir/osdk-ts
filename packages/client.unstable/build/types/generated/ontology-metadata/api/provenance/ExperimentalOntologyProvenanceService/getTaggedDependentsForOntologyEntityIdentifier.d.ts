import { type ConjureContext } from "conjure-lite";
import type { GetTaggedDependentsForOntologyEntityIdentifierRequest } from "../GetTaggedDependentsForOntologyEntityIdentifierRequest.js";
import type { GetTaggedDependentsForOntologyEntityIdentifierResponse } from "../GetTaggedDependentsForOntologyEntityIdentifierResponse.js";
/**
* Endpoint to get the tagged dependents given the requested OntologyEntity identifier across all versions of the Ontology Entity.
* Requires view permissions on the requested ontology entity.
*/
export declare function getTaggedDependentsForOntologyEntityIdentifier(ctx: ConjureContext, request: GetTaggedDependentsForOntologyEntityIdentifierRequest): Promise<GetTaggedDependentsForOntologyEntityIdentifierResponse>;
