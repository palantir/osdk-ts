import { type ConjureContext } from "conjure-lite";
import type { OntologyLoadAllRequest } from "../OntologyLoadAllRequest.js";
import type { OntologyLoadResponse } from "../OntologyLoadResponse.js";
/**
* Endpoint to load the whole Ontology at a given OntologyVersion or at the latest OntologyVersion.
* The returned OntologyLoadResponse will only contain entities that are visible to the user.
* If the user has requested to load the Ontology at an invalid OntologyVersion,
* an empty response will be returned.
*
* In the presence of multiple ontologies, this endpoint will implicitly choose which ontology the user
* expects to load given the organization membership of the user. If the user is not a member of any organization,
* the default Ontology will be chosen.
*/
export declare function loadAllOntology(ctx: ConjureContext, request: OntologyLoadAllRequest): Promise<OntologyLoadResponse>;
