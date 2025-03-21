import type { AssociatedResourceIdentifier } from "./AssociatedResourceIdentifier.js";
import type { AssociationMetadataOntologyEntityRid } from "./AssociationMetadataOntologyEntityRid.js";
/**
* A unique identifier for an ontology - resource association
*/
export interface OntologyAssociationIdentifier {
	ontologyEntityRid: AssociationMetadataOntologyEntityRid;
	associatedResourceIdentifier: AssociatedResourceIdentifier;
}
