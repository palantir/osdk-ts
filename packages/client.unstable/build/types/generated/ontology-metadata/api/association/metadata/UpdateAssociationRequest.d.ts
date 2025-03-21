import type { OntologyVersion } from "../../OntologyVersion.js";
import type { AssociatedResourceIdentifier } from "./AssociatedResourceIdentifier.js";
import type { AssociationMetadata } from "./AssociationMetadata.js";
import type { AssociationMetadataOntologyEntityRid } from "./AssociationMetadataOntologyEntityRid.js";
import type { BlockIdentifier } from "./BlockIdentifier.js";
/**
* Request to update an association between the given resource and ontology entity.
* The ontologyEntityRid and associated resource identifier will uniquely identify
* the association being updated.
*/
export interface UpdateAssociationRequest {
	ontologyEntityRid: AssociationMetadataOntologyEntityRid;
	associatedResourceIdentifier: AssociatedResourceIdentifier;
	ontologyVersionAtAssociation: OntologyVersion;
	blockIdentifier: BlockIdentifier;
	associationMetadata: AssociationMetadata;
}
