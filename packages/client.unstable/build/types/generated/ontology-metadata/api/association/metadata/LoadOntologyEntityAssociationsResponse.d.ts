import type { OntologyAssociation } from "./OntologyAssociation.js";
/**
* Response denoting how the ontology entity is associated with other
* resources. The endpoint will return an empty set in case there is
* any error retrieving the associated resource metadata
*/
export interface LoadOntologyEntityAssociationsResponse {
	response: Array<OntologyAssociation>;
}
