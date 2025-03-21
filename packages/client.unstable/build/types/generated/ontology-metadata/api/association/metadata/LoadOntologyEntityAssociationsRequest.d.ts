import type { AssociationMetadataOntologyEntityRid } from "./AssociationMetadataOntologyEntityRid.js";
/**
* Request to load all resource metadata associated with an ontology entity
*/
export interface LoadOntologyEntityAssociationsRequest {
	ontologyEntityRid: AssociationMetadataOntologyEntityRid;
}
