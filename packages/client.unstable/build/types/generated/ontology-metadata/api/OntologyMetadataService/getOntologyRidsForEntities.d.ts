import { type ConjureContext } from "conjure-lite";
import type { OntologyRidsForEntitiesRequest } from "../OntologyRidsForEntitiesRequest.js";
import type { OntologyRidsForEntitiesResponse } from "../OntologyRidsForEntitiesResponse.js";
/**
* Gets the ontology rids to which the given ontology entities belong.
* The returned OntologyRidsForOntologyEntitiesResponse will only
* contain ontology rids for entities that actually exist and which belong to an Ontology that the user
* has access to. If the user has requested entities that do not exist in any of the latest Ontology versions,
* or which belong to an Ontology which the user does not have access to, those will not be present in the
* response.
*/
export declare function getOntologyRidsForEntities(ctx: ConjureContext, request: OntologyRidsForEntitiesRequest): Promise<OntologyRidsForEntitiesResponse>;
