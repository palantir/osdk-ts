import type { OntologyVersion } from "../../OntologyVersion.js";
import type { AssociatedResourceIdentifier } from "./AssociatedResourceIdentifier.js";
import type { AssociationMetadata } from "./AssociationMetadata.js";
import type { AssociationMetadataOntologyEntityRid } from "./AssociationMetadataOntologyEntityRid.js";
import type { BlockIdentifier } from "./BlockIdentifier.js";
/**
* A single association betweeen an ontology entity and a resource
*/
export interface OntologyAssociation {
	ontologyEntityRid: AssociationMetadataOntologyEntityRid;
	associatedResourceIdentifier: AssociatedResourceIdentifier;
	ontologyVersionAtAssociation: OntologyVersion;
	blockIdentifier: BlockIdentifier;
	associationMetadata: AssociationMetadata;
}
