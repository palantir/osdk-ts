import type { OntologyVersion } from "../../OntologyVersion.js";
import type { AssociatedResourceIdentifier } from "./AssociatedResourceIdentifier.js";
import type { AssociationMetadata } from "./AssociationMetadata.js";
import type { AssociationMetadataOntologyEntityRid } from "./AssociationMetadataOntologyEntityRid.js";
import type { BlockIdentifier } from "./BlockIdentifier.js";
/**
* Request to register an association between the given resource and the
* given ontology entity.
*/
export interface CreateAssociationRequest {
	ontologyEntityRid: AssociationMetadataOntologyEntityRid;
	associatedResourceIdentifier: AssociatedResourceIdentifier;
	ontologyVersionAtAssociation: OntologyVersion;
	blockIdentifier: BlockIdentifier;
	associationMetadata: AssociationMetadata;
}
