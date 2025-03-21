import type { OntologyAssociationIdentifier } from "./OntologyAssociationIdentifier.js";
/**
* Request to delete one or more associations between a resource and ontology
* entity.
*/
export interface DeleteAssociationsRequest {
	ontologyAssociationIdentifiers: Array<OntologyAssociationIdentifier>;
}
