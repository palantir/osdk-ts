import { type ConjureContext } from "conjure-lite";
import type { OntologyLoadAllEntitiesRequest } from "../OntologyLoadAllEntitiesRequest.js";
import type { OntologyLoadEntitiesResponse } from "../OntologyLoadEntitiesResponse.js";
/**
* Endpoint to load entity rids from the whole Ontology at a given OntologyVersion or at the latest
* OntologyVersion. The returned OntologyLoadResponse will only contain entity rids that are visible
* to the user. If the user has requested to load the Ontology at an invalid OntologyVersion,
* an empty response will be returned.
*
* In the presence of multiple ontologies, this endpoint will implicitly choose which ontology the user
* expects to load given the organization membership of the user. If the user is not a member of any organization,
* the default Ontology will be chosen.
*
* The includeObjectTypesWithoutSearchableDatasources flag is respected if present in the request,
* else we set it to a default (false) unless the user-agent is blocklisted.
* The flag is set to true for blocklisted user agents. Currently the blocklist
* includes functions-typescript-gradle-plugin only.
*/
export declare function loadAllOntologyEntities(ctx: ConjureContext, request: OntologyLoadAllEntitiesRequest): Promise<OntologyLoadEntitiesResponse>;
