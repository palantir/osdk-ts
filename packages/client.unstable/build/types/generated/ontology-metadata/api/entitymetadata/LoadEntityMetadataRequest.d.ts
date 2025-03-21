import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { LinkTypeEntityMetadataLoadRequest } from "./LinkTypeEntityMetadataLoadRequest.js";
import type { ObjectTypeEntityMetadataLoadRequest } from "./ObjectTypeEntityMetadataLoadRequest.js";
/**
* Request to load the EntityMetadata for the specified ObjectTypeRids/LinkTypeRids at the specified OntologyVersion.
* If an OntologyVersion is not present, the EntityMetadata will be loaded from the latest "system" OntologyVersion.
* A "system" OntologyVersion is an OntologyVersion created using the modifySystemEntityMetadata endpoint as opposed
* to the modifyOntology endpoint.
* If no EntityMetadata has been set for an existing ObjectType or LinkType, a default empty
* ObjectTypeEntityMetadata/LinkTypeEntityMetadata object will be returned.
*/
export interface LoadEntityMetadataRequest {
	objectTypes: Array<ObjectTypeEntityMetadataLoadRequest>;
	linkTypes: Array<LinkTypeEntityMetadataLoadRequest>;
	ontologyBranchRid: OntologyBranchRid | undefined;
	includeSystemEntityMetadata: boolean | undefined;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
