import { type ConjureContext } from "conjure-lite";
import type { OntologyCreateRequest } from "../../modification/OntologyCreateRequest.js";
import type { OntologyCreateResponse } from "../../modification/OntologyCreateResponse.js";
/**
* Endpoint to create an Ontology. This should be a one time action when a new
* tenant needs to be onboarded and needs to have a private Ontology. Requires
* the "ontology:create-ontology" permission on the Ontology root node.
* Throws `OntologyOwnerGroupDoesNotExist` if the Owner Group passed in does not exist.
* Throws `NamespaceCanNotHaveMorethanOneOntology` if the specified Compass Namespace already
* has an Ontology under it.
*/
export declare function createOntology(ctx: ConjureContext, request: OntologyCreateRequest): Promise<OntologyCreateResponse>;
